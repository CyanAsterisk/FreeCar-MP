import { ProfileService } from "../../service/pkg/profile"
import { UserService } from "../../service/pkg/user"
import { profile } from "../../service/gen/profile/profile_pb"
import { FreeCar } from "../../service/pkg/request"

const licStatusMap = new Map([
  [profile.IdentityStatus.UNSUBMITTED, '未认证'],
  [profile.IdentityStatus.PENDING, '未认证'],
  [profile.IdentityStatus.VERIFIED, '已认证'],
])

Page({
	data: {
    username: '',
    accountID: 0,
    avatarURL: '',
    phoneNum: 0,
    licStatus: licStatusMap.get(profile.IdentityStatus.UNSUBMITTED),
  },
	async onLoad() {
    let resp = await UserService.getUserInfo()
    if (resp.baseResp?.statusCode !== 0){
      wx.showToast({
        title:"获取用户信息失败",
        icon: "none",
        duration: 2000,
      })
      return
    }
    this.setData({
      username: resp.userInfo?.username!,
      accountID: resp.userInfo?.accountId!,
      avatarURL: resp.userInfo?.avatarUrl!,
      phoneNum: resp.userInfo?.phoneNumber!
    })
	},
  onShow() {
    ProfileService.getProfile().then(p => {
      this.setData({
          licStatus: licStatusMap.get(p.profile?.identityStatus||0),
      })
  })
  },

  async onChooseAvatar(e:any) {
    const localPath = e.detail.avatarUrl
    this.setData({
      avatarURL: localPath
    })
    const resp = await UserService.uploadAvatar()
    if(resp.baseResp !== 0){
      wx.showToast({
        title: '获取上传链接失败',
        icon: 'none',
        duration: 1000,
      })
      return
    }
    await FreeCar.uploadFile({
      localPath: localPath,
      url: resp.uploadUrl!,
    })
    
  },
  clearStorage(){
    wx.clearStorageSync()
    wx.showToast({
      title: '已清除',
      icon: 'success'
    })
  },
  editNick() {
    this.setData({
      nickShow: true
    })
  },
  async _editNick() {
    if (!this.data.username) {
      wx.showToast({
        title: '请填写昵称',
        icon: 'none'
      })
      return
    }
    const res = await UserService.updateUserInfo({
      username: this.data.username
    })

    if (res.baseResp?.statusCode != 0){
      wx.showToast({
        title: res.baseResp?.statusMsg!,
        icon: 'none'
      })
      return
    }
    wx.showToast({
      title: '设置成功',
    })
    }
})