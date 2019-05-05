// pages/demo01/default.js
var amapFile = require('../../libs/amap-wx.js');
var markersData = {
  latitude: '',//纬度
  longitude: '',//经度
  key: "8830e8bfc94c8ef7f97fe4ada0f606c2"//申请的高德地图key
};
Page({

  /**
   * 页面的初始数据
   */
  data: {
    weather: [],
    pic1: '',
    pic2: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    this.loadInfo();
    var that = this;
    console.log(that);
    wx.request({
      url: 'http://127.0.0.1:3000/lLastest',
      method: 'GET',
      data: {},
      header: { 'content-type': 'application/json' },
      success: function (res) {
        console.log("1111"+res.data);
        let pics = res.data.split(".jpg");
        for (var i = 0; i < pics.length; i++) {
          pics[i] = pics[i] + '.jpg';
        }
        res.data=pics[0];
        console.log("2222"+res.data);
        that.setData({
          pic1: res.data
        })
      }  
    })
    wx.request({
      url: 'http://127.0.0.1:3000/pLastest',
      method: 'GET',
      data: {},
      header: { 'content-type': 'application/json' },
      success: function (res) {
        console.log("1111" + res.data);
        let pics = res.data.split(".jpg");
        for (var i = 0; i < pics.length; i++) {
          pics[i] = pics[i] + '.jpg';
        }
        res.data = pics[0];
        console.log("2222" + res.data);
        that.setData({
          pic2: res.data
        })
      }
    })
  },
  toDetail1: function (e) {
    let index = 0
    console.log(index)
    wx.navigateTo({
      url: '../../pages/detail/detail?index=' + index,
    })
  },
  toDetail2: function (e) {
    let index = 1
    console.log(index)
    wx.navigateTo({
      url: '../../pages/detail/detail?index=' + index,
    })
  },
  //获取焦点后跳转到搜索
  isFocus:function(e){
    console.log(e);
    // e.datail.height="0px";
    e.detail={
      height:"0"
    }
    console.log(e);
    if(e){
      wx.navigateTo({
        url: "../search/default"
      })
    }
  },
  //获取当前位置的经纬度
  loadInfo: function () {
    var that = this;
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success: function (res) {
        var latitude = res.latitude//维度
        var longitude = res.longitude//经度
        console.log(res);
        that.loadCity(latitude, longitude);
      }
    })
  },

  //把当前位置的经纬度传给高德地图，调用高德API获取当前地理位置，天气情况等信息
  loadCity: function (latitude, longitude) {
    var that = this;
    var myAmapFun = new amapFile.AMapWX({ key: markersData.key });
    myAmapFun.getRegeo({
      location: '' + longitude + ',' + latitude + '',//location的格式为'经度,纬度'
      success: function (data) {
        console.log(data);
        console.log(data[0].name);
      },
      fail: function (info) { }
    });

    myAmapFun.getWeather({
      success: function (data) {
        that.setData({
          weather: data
        })
        console.log(data);
        //成功回调
      },
      fail: function (info) {
        //失败回调
        console.log(info)
      }
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
