
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
    wx.request({
      url: 'http://127.0.0.1:3000/pIdcardList',
      method:'GET',
      data:{},
      header:{'content-type':'application/json'},
      success:function(res){
        console.log(res.data);
        console.log(that.data.showTitle);
        let arr = that.data.showTitle;
        // console.log(typeof(res.data));  //对象
        for (var key in res.data) {
          //console.log(typeof(res.data[key]));  //对象
          res.data[key].show = false;
          for(let i=0;i<arr.length;i++){
            if (res.data[key].title == arr[i]) {
              res.data[key].show = true;
              console.log(res.data[key].title)
              console.log(res.data[key].show);
            }
          }
          console.log(res.data[key].show);
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
      }
    });
  },
  toDetail:function(e){
    console.log(e)
    let index=e.currentTarget.dataset.index
    console.log(index)
    wx.navigateTo({
      url: '../../pages/p-idcard-detail/idcard-detail?index='+index,
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