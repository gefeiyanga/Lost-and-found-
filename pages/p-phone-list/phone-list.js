var utils=require('../../utils/util.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr:[],
    showTitle:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(that);
    wx.request({
      url: 'http://127.0.0.1:3000/showFinish',
      method: 'GET',
      data: {},
      header: { 'content-type': 'application/json' },
      success: function (res) {
        let arr = [];
        for (var i = 0; i < res.data.length; i++) {
          arr[i] = res.data[i].releaseTitle
        }
        // console.log(arr);
        that.setData({
          showTitle: arr
        })
        // console.log(that.data.showTitle);
      }
    })
    var router='pPhoneList';
    utils.showList(router,that);
  },
  toDetail:function(e){
    console.log(e)
    let index=e.currentTarget.dataset.index
    console.log(index)
    wx.navigateTo({
      url: '../../pages/p-phone-detail/phone-detail?index='+index,
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