import { formatDuration, formatFee ,formatDate} from "../../utils/format"
import { trip } from "../../service/gen/trip/trip_pb"
import { TripService } from "../../service/pkg/trip"
import { CarService } from "../../service/pkg/car"


interface Trip {
    start: string
    end: string
    date: string
    duration: string
    fee: string
    distance: string
    plateNum: string
}

Page({
    data: {
        trips: [] as Trip[] ,
        avatarURL: '',
        tripsHeight: 0,
    },

    onLoad() {
      this.sysTrips()
    },

    onShow() {
    },

    onReady() {
    },

    onPullDownRefresh(){
      this.sysTrips()
      wx.stopPullDownRefresh()
    },
    async sysTrips(){
      wx.showLoading({
        title: '',
      })
      const resp = await TripService.getTrips({status:trip.TripStatus.FINISHED})
      if (resp.baseResp?.statusCode !== 0){
         wx.hideLoading()
         wx.showToast({
          title: "获取行程记录失败",
          icon: 'none',
          duration: 1000,
         })
         return
      }
      let ts = resp.trips!
      let  trips: Trip[] = []
      for(let trip of ts){
        const end = trip.trip?.end
        const t: Trip = {
          start: trip.trip?.start?.poiName||'未知',
          end: end!.poiName || '未知',
          date: formatDate(trip.trip?.start?.timestampSec! * 1000) || '未知',
          distance: end!.kmDriven?.toFixed(1) + '公里',
          duration: '',
          fee: formatFee(end!.feeCent||0),
          plateNum: '',
        }
        const dur = formatDuration((end!.timestampSec||0)-(trip.trip?.start?.timestampSec||0))
        t.duration = `${dur.hh}时${dur.mm}分`

        const resp = await CarService.getCar({id:trip.trip!.carId!})
        if (resp.baseResp?.statusCode != 0){
          wx.hideLoading()
          wx.showToast({
           title: "获取车辆信息失败",
           icon: 'none',
           duration: 1000,
          })
          return
       }
        t.plateNum = resp.car?.plateNum!
        trips.unshift(t)
      }
        this.setData({
          trips,
        })
        await wx.hideLoading()
      }
    
})
