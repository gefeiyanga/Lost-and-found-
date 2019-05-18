// pages/noticeList1/list.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nickName: '',
    avatarUrl:'',
    listArr: [],
    activeName: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    if (app.globalData.userInfo) {
      this.setData({
        nickName: app.globalData.userInfo.nickName,
        avatarUrl: app.globalData.userInfo.avatarUrl
      })
    }
    var that = this; 
    wx.request({
      url: 'http://127.0.0.1:3000/cancelReqDot',
      method: 'POST',
      data: {
        releaseOpenId: app.globalData.openId
      },
      header: { 'Content-Type': 'application/x-www-form-urlencoded' },
      success: (res) => {
        app.globalData.dot2=false
        // console.log(res.data);
      }
    })
    wx.request({
      url: 'http://127.0.0.1:3000/getbackReqNoticeList',
      method: 'GET',
      data: {},
      header: { 'content-type': 'application/json' },
      success: function (res) {
        // console.log(res.data);
        console.log(that.data.nickName);
        let arr=[];
        for (var key in res.data) {
          // console.log(res.data[key]);
          console.log(res.data[key].releaseName);
          if (app.globalData.openId == res.data[key].releaseOpenId && res.data[key].isDeal==1) {
            arr[arr.length]=res.data[key]
          }
        }
        that.setData({
          listArr: arr.reverse()
        })
        console.log(that.data.listArr);
      }
    })
  }, 
  returnIt: function (e) {
    console.log(e.currentTarget.dataset.index);
    let index = e.currentTarget.dataset.index;
    console.log(this.data.listArr[index].releaseTitle);
    console.log(this.data.listArr[index].returnOpenId);
    // console.log(this.data.listArr[index].title);
    wx.navigateTo({
      url: `../../pages/return/return?releaseTitle=${this.data.listArr[index].releaseTitle}&releaseOpenId=${this.data.listArr[index].returnOpenId}&releaseName=${this.data.listArr[index].returnNickName}&returnName=${this.data.listArr[index].releaseNickName}`,
    })
  },
  rejectIt: function(e){
    let index = e.currentTarget.dataset.index;
    console.log(this.data.listArr[index].releaseTitle);
    console.log(this.data.listArr[index].returnNickName); 
    console.log(this.data.listArr[index].returnTitle); 
    console.log(this.data.listArr[index].returnOpenId); 
    console.log(this.data.listArr[index].releaseOpenId);
    wx.request({
      url: 'http://127.0.0.1:3000/rejectCommit',
      method:'POST',
      data:{
        returnOpenId: this.data.listArr[index].releaseOpenId,
        releaseOpenId: this.data.listArr[index].returnOpenId,
        releaseTitle:this.data.listArr[index].releaseTitle,
        releaseName: this.data.listArr[index].returnNickName,
        returnTitle: this.data.listArr[index].returnTitle,
        returnNickName: this.data.nickName,
        returnAvatarUrl: this.data.avatarUrl,
        isReject:1
      },
      header: { 'Content-Type':'application/x-www-form-urlencoded'},
      success: (res)=> {
        console.log('1111'+this.data.listArr[index].releaseTitle);
        wx.request({
          url: 'http://127.0.0.1:3000/setStatus',
          method: 'POST',
          data: {
            releaseTitle: this.data.listArr[index].releaseTitle,
          },
          header: { 'Content-Type': 'application/x-www-form-urlencoded' },
          success:(res)=>{
            console.log(res.data)
          }
        })

        console.log(res.data);
        wx.navigateBack({
          delta: 0  //小程序关闭当前页面返回上一页面
        })
        wx.showToast({
          title: '已驳回！',
          // icon: 'success',
          // duration: 2000
        })
      },
    })
  },
  onChange(event) {
    this.setData({
      activeName: event.detail
    });
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