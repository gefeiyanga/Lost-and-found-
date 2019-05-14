var  app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dot1: '',
    dot2: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      dot1: app.globalData.dot1,
      dot2: app.globalData.dot2
    })
    console.log(app.globalData.dot1);
    console.log(app.globalData.dot2);
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
    this.setData({
      dot1: app.globalData.dot1,
      dot2: app.globalData.dot2
    })
    if (app.globalData.dot1 == false && app.globalData.dot2 == false) {
      wx.removeTabBarBadge({
        index: 3
      })
    }
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