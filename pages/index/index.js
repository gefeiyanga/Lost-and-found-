//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '打开失物招领',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  handleClick() {
    wx.switchTab({
      url: '../home/default'
    })
  },
  onLoad: function () {
    // wx.request({
    //   url: 'http://127.0.0.1:3000/index',
    //   method:'GET',
    //   data:{},
    //   header:{'content-type':'application/json'},
    //   success(res){
    //     console.log(res.data)
    //   }
    // })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    if (e.detail.rawData) {  //判断用户是否拒绝
      this.setData({       
        userInfo: e.detail.userInfo,
        hasUserInfo: true
      })
    }
    console.log(app.globalData.userInfo)
  }
})
