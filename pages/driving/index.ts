import { trip } from "../../service/gen/trip/trip_pb"
import { TripService } from "../../service/pkg/trip"
import { formatDuration, formatFee } from "../../utils/format"
import { routing } from "../../utils/routing"
import {common} from "../../service/gen/common/common_pb";

const updateIntervalSec = 1
const initialLat = 30
const initialLng = 120

function durationStr(sec: number) {
    const dur = formatDuration(sec)
    return `${dur.hh}:${dur.mm}:${dur.ss}`
}

Page({
    timer: undefined as NodeJS.Timer|undefined,
    tripID: '',

    data: {
        location: {
            latitude: initialLat,
            longitude: initialLng,
        },
        scale: 12,
        elapsed: '00:00:00',
        fee: '0.00',
        markers: [
            {
                iconPath: "/images/shared/car.svg",
                id: 0,
                latitude: initialLat,
                longitude: initialLng,
                width: 20,
                height: 20,
            },
        ],
    },

    async onLoad(opt: Record<'trip_id', string>) {
        const o: routing.DrivingOpts = opt
        this.tripID = o.trip_id
        if(!this.tripID){
            const trips = await TripService.getTrips({
                status: trip.TripStatus.IN_PROGRESS,
              })
              if (trips.trips?.length === 0) {
                 routing.trip()
              }
              this.tripID = trips.trips![0].id!
        }
        this.setupLocationUpdater()
        await this.setupTimer(this.tripID)
    },

    onUnload() {
        wx.stopLocationUpdate().then()
        if (this.timer) {
            clearInterval(this.timer)
        }
    },

    setupLocationUpdater() {
        wx.startLocationUpdate({
            fail: console.error,
        })
        wx.onLocationChange(loc => {
            this.setData({
                location: {
                    latitude: loc.latitude,
                    longitude: loc.longitude,
                },
            })
        })
    },

    async setupTimer(tripID: string) {
        const resp = await TripService.getTrip({
            id: tripID,
        })
        if (resp.baseResp!.statusCode !== common.Err.Success){
            console.log('request error')
            return
        }
        if (resp.trip!.status !== trip.TripStatus.IN_PROGRESS) {
            console.error('trip not in progress')
            return
        }
        let secSinceLastUpdate = 0
        let lastUpdateDurationSec = resp.trip!.current!.timestampSec! - resp.trip!.start!.timestampSec!
        const toLocation = (loc: trip.ILocation) => ({
            latitude: loc.latitude || initialLat,
            longitude: loc.longitude || initialLng,
        })
        const location = toLocation(resp.trip!.current?.location!)
        this.data.markers[0].latitude = location.latitude
        this.data.markers[0].longitude = location.longitude
        this.setData({
            elapsed: durationStr(lastUpdateDurationSec),
            fee: formatFee(resp.trip!.current!.feeCent!),
            location,
            markers: this.data.markers,
        })

        this.timer = setInterval(() => {
            secSinceLastUpdate++
            if (secSinceLastUpdate % updateIntervalSec === 0) {
                TripService.getTrip({id: tripID}).then(resp => {
                    lastUpdateDurationSec = resp.trip!.current!.timestampSec! - resp.trip!.start!.timestampSec!
                    secSinceLastUpdate = 0
                    const location = toLocation(resp.trip?.current?.location!)
                    this.data.markers[0].latitude = location.latitude
                    this.data.markers[0].longitude = location.longitude
                    this.setData({
                        fee: formatFee(resp.trip!.current!.feeCent!),
                        location,
                        markers: this.data.markers,
                    })
                }).catch(console.error)
            }
            this.setData({
                elapsed: durationStr(lastUpdateDurationSec + secSinceLastUpdate),
            })
        }, 1000)
    },

    onEndTripTap() {
        TripService.finishTrip(this.tripID,this.data.location).then(() => {
            wx.redirectTo({
                url: routing.trip(),
            }).then()
        }).catch(err => {
            console.error(err)
            wx.showToast({
                title: '结束行程失败',
                icon: 'none',
            }).then()
        })
    },

    onHangUpTap(){
        wx.redirectTo({
            url: routing.index(),
        }).then()
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
            }).then()
          }
        })
      },
})