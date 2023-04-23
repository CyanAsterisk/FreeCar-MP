import { UserService } from "../../service/pkg/user"
import { formatFee} from "../../utils/format"

Page({
  data: {
    balance: "0.00" // 账户余额
  },

  async onLoad() {
    let resp = await UserService.getUserInfo()
    if (resp.baseResp?.statusCode !== 0){
      wx.showToast({
        title:"获取余额失败",
        icon: "none",
        duration: 2000,
      })
      return
    }
    this.setData({
      balance: formatFee(resp.userInfo?.balance!),
    })
	},

  recharge: function() {
    // 处理充值逻辑
    console.log("recharge")
  },

  withdraw: function() {
    // 处理提现逻辑
    console.log("withdraw")
  }
})