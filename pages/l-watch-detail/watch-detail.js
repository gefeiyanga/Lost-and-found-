// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj:{},
    listArr:[],
    index:null,
    isCollected:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    console.log(that);
    wx.request({
      url: 'http://127.0.0.1:3000/lWatchList',
      method: 'GET',
      data: {},
      header: { 'content-type': 'application/json' },
      success: function (res) {
        console.log(res.data);
        // console.log(typeof(res.data));  //对象
        for (var key in res.data) {
          //console.log(typeof(res.data[key]));  //对象
          console.log(res.data[key].pic);
          var pics = res.data[key].pic.split(".jpg");
          for (var i = 0; i < pics.length; i++) {
            pics[i] = pics[i] + '.jpg';
          }
          pics.pop();
          res.data[key].pic = pics
          console.log(pics);
        }
        that.setData({
          listArr: res.data.reverse()
        })
        console.log(options)
        //获取参数值
        let index = options.index
        // console.log(index)
        //更新data中dataObj的状态值
        console.log(that.data.listArr);
        that.setData({
          detailObj: that.data.listArr[index],
          index
        })
      }
    });
  },
  // handleCollection:function(){
  //   console.log(this);
  //   let isCollected = !this.data.isCollected;
  //   //更新状态
  //   this.setData({
  //     isCollected
  //   })
  // },

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