// pages/detail/default.js
var utils=require('../../utils/util.js');
var app=getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr:[],
    preFlag:true,
    flag:true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      var nickName = app.globalData.userInfo.nickName;
    }
    console.log(options.title); 
    var val = options.title;
    var that=this;
    wx.request({
      url: 'http://127.0.0.1:3000/searchDetail',
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
          console.log(nickName, res.data[key].uname)
          if (nickName == res.data[key].uname) {
            that.setData({
              preFlag: false
            })
          }
          if (res.data[key].title.search("捡到")){
            that.setData({
              flag:false
            })
          }
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
        that.setData({
          listArr: res.data.reverse()
        })
        console.log(that.data.listArr);
      }
    });

  },
  returnIt:function (){
    console.log(this.data.listArr[0].title);
    wx.navigateTo({
      url: `../../pages/return/return?releaseTitle=${this.data.listArr[0].title}&releaseName=${this.data.listArr[0].uname}`,
    })
  },
  getbackReq: function () {
    console.log(this.data.listArr[0].title);
    wx.navigateTo({
      url: `../../pages/getback-req/default?releaseTitle=${this.data.listArr[0].title}&releaseName=${this.data.listArr[0].uname}`,
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