import { UserService } from "../../service/pkg/user"
import { TradeService } from "../../service/pkg/trade"
import { formatFee} from "../../utils/format"

Page({
  data: {
    balance: "0.00", // 账户余额
    selectedAmount: '', // 选中的充值金额
    showCustomAmount: false, // 是否显示自定义金额输入框
    customAmount: '', // 自定义充值金额
    loading: false, // 支付中状态
    showPaymentModal: false, // 是否显示支付确认弹窗
    paymentAmount: 0, // 确认支付的金额
    paymentProgress: 0, // 支付进度
    paymentProcessing: false, // 正在处理支付
  },

  async onLoad() {
    this.refreshBalance()
  },
  
  onShow() {
    // 页面显示时刷新余额，以更新支付后的余额
    this.refreshBalance()
  },

  // 选择预设金额
  selectAmount(e: any) {
    const amount = e.currentTarget.dataset.amount
    this.setData({
      selectedAmount: amount,
      showCustomAmount: false
    })
  },

  // 选择自定义金额
  selectCustomAmount() {
    this.setData({
      selectedAmount: 'custom',
      showCustomAmount: true
    })
  },

  // 执行充值
  async recharge() {
    if (this.data.loading) return
    
    let amount: number = 0
    
    if (this.data.selectedAmount === 'custom') {
      if (!this.data.customAmount || isNaN(Number(this.data.customAmount)) || Number(this.data.customAmount) <= 0) {
        wx.showToast({
          title: '请输入有效金额',
          icon: 'none'
        })
        return
      }
      amount = Number(this.data.customAmount)
    } else if (this.data.selectedAmount) {
      amount = Number(this.data.selectedAmount)
    } else {
      wx.showToast({
        title: '请选择充值金额',
        icon: 'none'
      })
      return
    }
    
    this.setData({ 
      loading: true,
      paymentAmount: amount,
      showPaymentModal: true
    })
  },

  // 确认支付
  async confirmPayment() {
    if (this.data.paymentProcessing) return

    this.setData({
      paymentProcessing: true,
      paymentProgress: 0
    })

    // 模拟支付进度
    const timer = setInterval(() => {
      let progress = this.data.paymentProgress + 25
      if (progress > 100) {
        clearInterval(timer)
        progress = 100

        // 完成支付流程
        this.processPayment()
      }
      this.setData({ paymentProgress: progress })
    }, 500)
  },
  
  // 处理支付结果
  async processPayment() {
    try {
      // 直接调用recharge接口完成充值
      const resp = await TradeService.recharge({
        amount: Math.floor(this.data.paymentAmount * 100), // 转换��分
      })
      
      if (resp.code === 0) {
        // 支付成功动画
        setTimeout(() => {
          this.setData({
            showPaymentModal: false,
            paymentProcessing: false,
            paymentProgress: 0,
            loading: false
          })
          
          wx.showToast({
            title: '充值成功',
            icon: 'success'
          })
          
          // 刷新余额
          this.refreshBalance()
          // 重置选择状态
          this.setData({
            selectedAmount: '',
            showCustomAmount: false,
            customAmount: ''
          })
        }, 500)
      } else {
        // 记录失败的充值
        throw new Error(resp.msg || '充值失败')
      }
    } catch (err: any) {
      this.setData({
        showPaymentModal: false,
        paymentProcessing: false,
        paymentProgress: 0,
        loading: false
      })
      
      wx.showToast({
        title: err.message || '充值失败',
        icon: 'none'
      })
      console.error('充值失败', err)
    }
  },
  
  // 取消支付
  cancelPayment() {
    this.setData({
      showPaymentModal: false,
      paymentProcessing: false,
      paymentProgress: 0,
      loading: false
    })
  },
  
  // 刷新余额
  async refreshBalance() {
    const resp = await UserService.getUserInfo()
    if (resp.baseResp?.statusCode === 0) {
      this.setData({
        balance: formatFee(resp.userInfo?.balance!),
      })
    }
  },
  
  // 查看充值记录
  showRechargeRecords() {
    wx.navigateTo({
      url: '/pages/wallet/recharge-records/index'
    })
  }
})
