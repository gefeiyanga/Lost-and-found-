// pages/noticeList1/list.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName:'',
    listArr: [],
    activeName: 0
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
      url: 'http://127.0.0.1:3000/cancelReturnDot',
      method: 'POST',
      data: {
        releaseOpenId:app.globalData.openId
      },
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      success: (res) => {
        app.globalData.dot1 = false
        // console.log(res.data);
      }
    })
    wx.request({
      url: 'http://127.0.0.1:3000/returnNoticeList',
      method: 'GET',
      data: {},
      header: { 'content-type': 'application/json' },
      success: function (res) {
        console.log(res.data);
        console.log(that.data.nickName);
        console.log(res.data);
        let arr=[];
        for(var key in res.data){
          // console.log(res.data[key]);
          // console.log('发帖者' + res.data[key].releaseName);
          // console.log('登录者'+that.data.nickName);
          console.log(res.data[key]);
          if(app.globalData.openId==res.data[key].releaseOpenId){
            arr[arr.length] = res.data[key]
          }
        }
        console.log(arr);
        that.setData({
          listArr: arr.reverse()
        })
        console.log(that.data.listArr);
      }
    })
  },
  toFinish:function(e){
    console.log(e.currentTarget.dataset.index);
    let index = e.currentTarget.dataset.index;
    console.log(this.data.listArr[index].releaseTitle);
    let releaseTitle = this.data.listArr[index].releaseTitle;
    wx.request({
      url: 'http://127.0.0.1:3000/finish',
      method: 'POST',
      data: {
        releaseTitle
      },
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      success: (res) => {
        wx.navigateBack({
          delta: 0  //小程序关闭当前页面返回上一页面
        })
        wx.showToast({
          title: '已完成',
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onChange(event) {
    this.setData({
      activeName: event.detail
    });
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