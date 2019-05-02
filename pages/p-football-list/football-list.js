
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(that);
    wx.request({
      url: 'http://127.0.0.1:3000/pFootballList',
      method:'GET',
      data:{},
      header:{'content-type':'application/json'},
      success:function(res){
        console.log(res.data);
        that.setData({
          listArr: res.data
        })
      }
    });
  },
  toDetail:function(e){
    console.log(e)
    let index=e.currentTarget.dataset.index
    console.log(index)
    wx.navigateTo({
      url: '../../pages/p-football-detail/football-detail?index='+index,
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