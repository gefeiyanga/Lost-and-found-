// pages/picToDetail2/detail2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr: [],
    titles: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    var that=this;
    if (options.title1){
      var val = options.title1;
    }else{
      var val = options.title2;
    }
    wx.request({
      url: 'http://127.0.0.1:3000/search',
      // +that.data.urlInterface,
      method: 'GET',
      data: {
        val
      },
      header: { 'content-type': 'application/json' },
      success: function (res) {
        console.log(res.data);
        console.log(typeof (res.data));  //对象
        var titles = [];
        for (var key in res.data) {
          //console.log(typeof(res.data[key]));  //对象
          console.log(typeof (res.data[key].pic));
          titles[titles.length] = res.data[key].title;
          var pics = res.data[key].pic.split(".jpg");
          console.log("pics:" + pics);
          for (var i = 0; i < pics.length; i++) {
            pics[i] = pics[i] + '.jpg';
          }
          pics.pop();
          console.log(pics);
          res.data[key].pic = pics
          // console.log(pics);
        }
        titles.reverse();
        console.log(titles);
        that.setData({
          listArr: res.data.reverse(),
          titles
        })
      }
    });
  },
  toDetail: function (e) {
    console.log(e)
    let index = e.currentTarget.dataset.index
    console.log(this.data.titles[index])
    // wx.navigateTo({
    //   url: '../../pages/'+this.data.path+'?index=' + index,
    // })
    wx.navigateTo({
      url: '../../pages/detail/default?title=' + this.data.titles[index],
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