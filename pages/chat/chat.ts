import { ChatService } from "../../service/pkg/chat"

interface Message{
  sender:string
  content:string
  isMyself:boolean
}

Page({
  data: {
    messageList: [] as Message[], // 聊天消息列表
    inputValue: '', // 输入框内容
    toView: '' // scroll-view滚动到的位置
  },
  // 输入框内容改变时
  inputChange: function(e: any) {
    this.setData({
      inputValue: e.detail.value
    })
  },
  // 发送消息
  async sendMessage() {
    if (this.data.inputValue.trim() === '') {
      return
    }
    let newMessage = {
      sender: '我',
      content: this.data.inputValue.trim(),
      isMyself: true
    }
    let newList = this.data.messageList.concat(newMessage)
    this.setData({
      messageList: newList,
      inputValue: '',
      toView: `msg-${newList.length - 1}`
    })
    // 发送消息给AI
    this.sendAIRequest(newMessage.content)
  },
  // 发送请求给AI
  async sendAIRequest(content : string) {
    // TODO: 发送HTTP请求给AI服务器，并处理返回的消息

    let resp = await ChatService.getAIAnswer({content: content})
    if (resp.baseResp?.statusCode !== 0) {
        console.error("发送消息失败")
    }
    let newMessage = {
      sender: 'GPT',
      content: resp.content!,
      isMyself: false,
    }
    let newList = this.data.messageList.concat(newMessage)
    this.setData({
      messageList: newList,
      inputValue: '',
      toView: `msg-${newList.length - 1}`
    })
  }
})