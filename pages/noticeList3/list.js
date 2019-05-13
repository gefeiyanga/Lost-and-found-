// pages/noticeList1/list.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName: '',
    listArr: [], 
    activeName:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        nickName: app.globalData.userInfo.nickName
      })
    }
    var that = this;
    wx.request({
      url: 'http://127.0.0.1:3000/returnNoticeList',
      method: 'GET',
      data: {},
      header: { 'content-type': 'application/json' },
      success: function (res) {
        // console.log(res.data);
        console.log(that.data.nickName);
        console.log(res.data);
        let arr = [];
        for (var key in res.data) {
          // console.log(res.data[key]);
          // console.log('发帖者' + res.data[key].releaseName);
          // console.log('登录者'+that.data.nickName);
          console.log(res.data[key]);
          if (that.data.nickName == res.data[key].returnNickName) {
            arr[arr.length] = res.data[key]
          }
        }
        console.log(arr);
        that.setData({
          listArr: arr
        })
        console.log(that.data.listArr);
      }
    })
  },
  onChange(event) {
    this.setData({
      activeName: event.detail
    });
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