// pages/modify/default.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    releaseTitle:'',
    releaseOpenId:'',
    returnOpenId:'',
    returnAddr:'',
    returnTime:'',
    date:'',
    time:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // deleteFinish();
    console.log(options.releaseTitle)
    this.setData({
      returnOpenId:options.returnOpenId,
      releaseTitle: options.releaseTitle
    })
  },
  bindDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  getReturnAddr: function (e) {
    this.setData({
      returnAddr: e.detail.value
    })
  },
  commit:function(){
    var that = this;
    wx.showModal({
      title: '提示',
      content: '确认提交吗？',
      success(res) {
        console.log(that.data.date + ' ' + that.data.time);
        if (res.confirm) {
          console.log("2222222");
          wx.request({
            url: "http://127.0.0.1:3000/modifyOther",
            method: "POST",
            data: {
              releaseTitle: that.data.releaseTitle,
              releaseOpenId:app.globalData.openId,
              returnAddr: that.data.returnAddr,
              returnTime: that.data.date + " " + that.data.time
            },
            header: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function (res) {}
          })
          console.log(that.data.releaseOpenId);
          wx.request({
            url: "http://127.0.0.1:3000/modify",
            method: "POST",
            data: {
              returnOpenId: that.data.returnOpenId
            },
            header: {
              "Content-Type": "application/x-www-form-urlencoded"
            },
            success: function (res) {
              console.log(3333);
              // wx.request({
              //   url: "http://127.0.0.1:3000/setDealDot",
              //   method: "POST",
              //   data: {
              //     releaseTitle: that.data.releaseTitle
              //   },
              //   header: {
              //     "Content-Type": "application/x-www-form-urlencoded"
              //   },
              //   success: function (res) {}
              // })
              wx.navigateBack({
                delta: 2  //小程序关闭当前页面返回上一页面
              })
              wx.showToast({
                title: '提交成功！',
                // icon: 'success',
                // duration: 2000
              })

            }
          })
        }
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  deleteFinish:function(){
    wx.request({
      url: 'http://127.0.0.1:3000/deleteFinish',
      method: 'GET',
      data: {},
      header: { 'content-type': 'application/json' },
      success: function (res) {
        console.log("已完成");
      }
    })
  },
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})