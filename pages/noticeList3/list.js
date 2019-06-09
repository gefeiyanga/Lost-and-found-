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
      url: 'http://127.0.0.1:3000/cancelDealDot',
      method: 'POST',
      data: {
        returnOpenId: app.globalData.openId
      },
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      success: (res) => {
        app.globalData.dot3 = false
        // console.log(res.data);
      }
    })
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
          if (app.globalData.openId == res.data[key].returnOpenId) {
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
  onChange(event) {
    this.setData({
      activeName: event.detail
    });
  },
  ok: function (e) {
    var that = this;
    let index = e.currentTarget.dataset.index;
    let releaseTitle = that.data.listArr[index].releaseTitle;
    wx.showModal({
      title: '提示',
      content: '确定此时此地吗？',
      success(res) {
        if (res.confirm) {
          wx.request({
            url: 'http://127.0.0.1:3000/ok2',
            method: 'POST',
            data: {
              releaseTitle,
              returnOpenId:app.globalData.openId
            },
            header: { 'Content-Type': 'application/x-www-form-urlencoded' },
            success: (res) => {
              wx.request({
                url: "http://127.0.0.1:3000/modify2",
                method: "POST",
                data: {
                  releaseOpenId: that.data.listArr[index].releaseOpenId
                },
                header: {
                  "Content-Type": "application/x-www-form-urlencoded"
                },
                success: function (res) {
                  console.log("ok");
                  wx.navigateBack({
                    delta: 0  //小程序关闭当前页面返回上一页面
                  })
                  wx.showToast({
                    title: 'ok',
                  })
                }
              })
            }
          })
        } else {
          console.log("no ok");
        }
      }
    })
  },
  modify:function(e){
    let index = e.currentTarget.dataset.index;
    console.log(index)
    wx.navigateTo({
      url: `../../pages/modify2/default?releaseTitle=${this.data.listArr[index].releaseTitle}&releaseOpenId=${this.data.listArr[index].releaseOpenId}`,
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