import { car } from "../../service/gen/car/car_pb"
import {trip} from "../../service/gen/trip/trip_pb"
import { CarService } from "../../service/pkg/car"
import { CalculDistance } from "../../utils/pos"
import { TripService } from "../../service/pkg/trip"
import { routing } from "../../utils/routing"
import { ProfileService } from "../../service/pkg/profile"
import {profile} from "../../service/gen/profile/profile_pb";

interface Marker {
  iconPath: string
  id: number
  latitude: number
  longitude: number
  width: number
  height: number
}
interface Car {
    id:string
    plateNum: string
    power: string
    position:{
      latitude: number,
      longitude: number
    }
    canLock: boolean
    distance: string,
}

const initialLat = 29.53832
const initialLng = 106.613922

Page({
    data: {
        cars: [] as Car[],
        location:{
          latitude: initialLat,
          longitude: initialLng,
        },
        setting:{
          skew: 0,
          rotate: 0,
          showLocation: true,
          showScale: true,
          subKey: '',
          layerStyle: 1,
          enableZoom: true,
          enableScroll: true,
          enableRotate: false,
          showCompass: false,
          enable3D: false,
          enableOverlooking: false,
          enableSatellite: false,
          enableTraffic: false,
        },
        scale:12,
        markers: [] as Marker[],
    },
    onLoad() {
      this.syscars().then()
    },
    async onShow() {
      const res = await TripService.getTrips({status:trip.TripStatus.IN_PROGRESS})
      if(res.baseResp!.statusCode !== 0){
        await wx.showToast({
            title: '获取行程失败',
            duration: 2000
        })
      }
      const trips = res.trips!
      if ((trips.length || 0) > 0) {
        await wx.navigateTo({
            url: routing.driving({
                trip_id: trips[0].id!,
            }),
        })
        return
      }
      const resp = await ProfileService.getProfile()
      if(resp.baseResp!.statusCode !== 0){
        await wx.showToast({
            title: '获取资格失败',
            duration: 20000
        })
      }
      if(resp!.profile!.identityStatus !== profile.IdentityStatus.VERIFIED){
        wx.showModal({
          title: '未认证',
          content: '完善驾照信息后方可租车',
          success: (res)=>{
            if(res.cancel){
              wx.redirectTo({
                url: routing.index(),
              })
            }else if(res.confirm){
              wx.redirectTo({
                url:routing.license({
                  redirectURL: routing.cars(),
                }),
              })
            }
          }
         })
      }
    },

    onReady() {
    },

    onMyLocationTap() {
      wx.getLocation({
        type: 'gcj02',
        success: res => {
          this.setData({
            location: {
              latitude: res.latitude,
              longitude: res.longitude,
            },
          })
        }, 
        fail: () => {
          wx.showToast({
            icon: 'none',
            title: '请前往设置页授权',
          })
        }
      })
    },
    
    goMap(event: any) {
      const pos = event.currentTarget.dataset.car_pos
      wx.openLocation({
          latitude: pos.latitude,
          longitude: pos.longitude,
          scale: 28
      }).then()
    },

    onPullDownRefresh(){
      this.syscars().then( )
      wx.stopPullDownRefresh().then()
    },
    async syscars(){
      await wx.showLoading({
          title: '获取周边车辆',
      })
      const resp = await CarService.getCars()
      await wx.hideLoading()
      if(resp.baseResp!.statusCode !== 0){
        await wx.showToast({
            title: '同步车辆信息失败',
            icon: 'none',
            duration: 1000
        })
        return
      }
      let cs = resp!.cars!
      let  cars: Car[] = []
      let markers: Marker[] = []
      for(let cr of cs){
        if(cr.car?.status !== car.CarStatus.LOCKED) continue;
        const c: Car = {
          id: cr.id!,
          plateNum: cr.car.plateNum!,
          power: (cr.car.power!).toFixed(2)+"%",
          position: {
            latitude:cr.car.position!.latitude! || initialLat,
            longitude: cr.car.position!.longitude! || initialLng,
          },
          canLock: false,
          distance: '',
        }
        let dist = CalculDistance(c.position,this.data.location)/1e7
        c.distance = dist.toFixed(2) + '公里'
        if(cars.length < 2){
          c.canLock = true;
        } 
        cars.push(c)
        markers.push({
          id:markers.length,
          latitude:cr.car.position!.latitude! || initialLat,
          longitude: cr.car.position!.longitude! || initialLng,
          iconPath: '/images/cars/car-pos.svg',
          width: 20,
          height:20,
        })
      }
        await wx.hideLoading()
        this.setData({
          cars,
          markers,
        })
      },
    async unlockCar(event: any){
      const carId = event.currentTarget.dataset.carid
      wx.getLocation({
        type: 'gcj02',
        success: async loc => {
            console.log('starting a trip', {
                location: {
                    latitude: loc.latitude,
                    longitude: loc.longitude,
                },
                avatarURL: ""
            })
            let resp: trip.ICreateTripResponse
            try {
                resp =  await TripService.createTrip({
                    start: {
                        latitude : loc.latitude,
                        longitude : loc.longitude
                    },
                    carId: carId,
                    avatarUrl: "/images/car.svg"
                })
                if (!resp.tripEntity!.id) {
                    console.error('no tripID in response', resp)
                    return
                }
            } catch(err) {
                await wx.showToast({
                    title: '创建行程失败',
                    icon: 'none',
                })
                return
            }

            await wx.showLoading({
                title: '开锁中',
                mask: true,
            })
            setTimeout(() => {
                wx.redirectTo({
                    url: routing.driving({
                        trip_id: resp.tripEntity!.id!,
                    }),
                    complete: () => {
                        wx.hideLoading()
                    }
                })
            }, 2000);
        },
        fail: () => {
            wx.showToast({
                icon: 'none',
                title: '请前往设置页授权位置信息',
            })
        }
    })
    }
})