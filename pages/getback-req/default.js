// pages/return/return.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    releaseTitle: '',
    releaseName: '',
    releaseOpenId: '',
    returnNickName: '',
    returnAvatarUrl: '',
    returnTitle: '',
    returnDescribe: '',
    returnName: '',
    returnTele: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.releaseTitle);//发帖标题
    console.log(options.releaseName);//发帖用户昵称
    this.setData({
      releaseTitle: options.releaseTitle,
      releaseName: options.releaseName,
      releaseOpenId: options.releaseOpenId
    })
    if (app.globalData.userInfo) {
      console.log(app.globalData.userInfo.avatarUrl);//登录用户头像
      console.log(app.globalData.userInfo.nickName)//登录用户昵称
      this.setData({
        returnAvatarUrl: app.globalData.userInfo.avatarUrl,
        returnNickName: app.globalData.userInfo.nickName
      })
    }
  },
  getReturnTitle: function (e) {
    this.setData({
      returnTitle: e.detail.value
    })
  },
  getReturnDescribe: function (e) {
    this.setData({
      returnDescribe: e.detail.value
    })
  },
  getReturnName: function (e) {
    this.setData({
      returnName: e.detail.value
    })
  },
  getReturnTele: function (e) {
    this.setData({
      returnTele: e.detail.value
    })
  },
  commit: function () {
    var that = this;
    wx.request({
      url: "http://127.0.0.1:3000/getbackReqCommit",
      method: "POST",
      data: {
        releaseOpenId:that.data.releaseOpenId,
        returnOpenId:app.globalData.openId,
        releaseTitle: that.data.releaseTitle,
        releaseName: that.data.releaseName,
        returnNickName: that.data.returnNickName,
        returnAvatarUrl: that.data.returnAvatarUrl,
        returnTitle: that.data.returnTitle,
        returnDescribe: that.data.returnDescribe,
        returnName: that.data.returnName,
        returnTele: that.data.returnTele
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log(res.data);
        wx.navigateBack({
          delta: 0  //小程序关闭当前页面返回上一页面
        })
        wx.showToast({
          title: '发布成功！',
          // icon: 'success',
          // duration: 2000
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
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