// pages/detail/detail.js
var app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detailObj:{},
    listArr:[],
    index:null,
    isCollected:false,
    preFlag:true,
    showTitle:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var nickName=app.globalData.userInfo.nickName;
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
      url: 'http://127.0.0.1:3000/lUdiskList',
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
        let arr2=that.data.showTitle;
        var finish=false;
        for(var i=0;i<arr2.length;i++){
          if (arr2[i] == that.data.listArr[index].title){
            finish=true;
            break;
          }
        }
        if (nickName == that.data.listArr[index].uname||finish==true) {
          that.setData({
            preFlag: false
          })
        }
        that.setData({
          detailObj: that.data.listArr[index],
          index
        })
      }
    });
  },
  returnIt: function () {
    console.log(this.data.listArr[this.data.index].title);
    wx.navigateTo({
      url: `../../pages/return/return?releaseTitle=${this.data.listArr[this.data.index].title}&releaseName=${this.data.listArr[this.data.index].uname}`,
    })
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