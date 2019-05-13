
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listArr:[],
    titles: [],
    showTitle: []
    // urlInterface:'',
    // path:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.searchValue);
    var val = options.searchValue;
    var that = this;
    console.log(that);
    // if ((val.search("捡到") != -1) && (val.search("手机") != -1))    {
    //   that.setData({
    //     urlInterface: 'pPhoneList',
    //     path: 'p-phone-detail/phone-detail'
    //   })
    // } else if ((val.search("丢失") != -1) && (val.search("手机") != -1)) {
    //   that.setData({
    //     urlInterface: 'lPhoneList',
    //     path: 'l-phone-detail/phone-detail'
    //   })
    // } else if ((val.search("捡到") != -1) && (val.search("电脑") != -1)) {
    //   that.setData({
    //     urlInterface: 'pPcList',
    //     path: 'p-pc-detail/pc-detail'
    //   })
    // } else if ((val.search("丢失") != -1) && (val.search("电脑") != -1)) {
    //   that.setData({
    //     urlInterface: 'lPcList',
    //     path: 'l-pc-detail/pc-detail'
    //   })
    // } else if ((val.search("捡到") != -1) && (val.search("U盘") != -1)) {
    //   that.setData({
    //     urlInterface: 'pUdiskList',
    //     path: 'p-udisk-detail/udisk-detail'
    //   })
    // } else if ((val.search("丢失") != -1) && (val.search("U盘") != -1)) {
    //   that.setData({
    //     urlInterface: 'lUdiskList',
    //     path: 'l-udisk-detail/udisk-detail'
    //   })
    // } else if ((val.search("捡到") != -1) && (val.search("平板") != -1)) {
    //   that.setData({
    //     urlInterface: 'pPadList',
    //     path: 'p-pad-detail/pad-detail'
    //   })
    // } else if ((val.search("丢失") != -1) && (val.search("平板") != -1)) {
    //   that.setData({
    //     urlInterface: 'lPadList',
    //     path: 'l-pad-detail/pad-detail'
    //   })
    // } else if ((val.search("捡到") != -1) && (val.search("耳机") != -1)) {
    //   that.setData({
    //     urlInterface: 'pEarphoneList',
    //     path: 'p-earphone-detail/earphone-detail'
    //   })
    // } else if ((val.search("丢失") != -1) && (val.search("耳机") != -1)) {
    //   that.setData({
    //     urlInterface: 'lEarphoneList',
    //     path: 'l-earphone-detail/earphone-detail'
    //   })
    // } else if ((val.search("捡到") != -1) && (val.search("上衣") != -1)) {
    //   that.setData({
    //     urlInterface: 'pShirtList',
    //     path: 'p-shirt-detail/shirt-detail'
    //   })
    // } else if ((val.search("丢失") != -1) && (val.search("上衣") != -1)) {
    //   that.setData({
    //     urlInterface: 'lShirtList',
    //     path: 'l-shirt-detail/shirt-detail'
    //   })
    // } else if ((val.search("捡到") != -1) && (val.search("裤") != -1)) {
    //   that.setData({
    //     urlInterface: 'pTrousersList',
    //     path: 'p-trousers-detail/trousers-detail'
    //   })
    // } else if ((val.search("丢失") != -1) && (val.search("裤") != -1)) {
    //   that.setData({
    //     urlInterface: 'lTrousersList',
    //     path: 'l-trousers-detail/trousers-detail'
    //   })
    // } else if ((val.search("捡到") != -1) && (val.search("帽") != -1)) {
    //   that.setData({
    //     urlInterface: 'pCapList',
    //     path: 'p-cap-detail/cap-detail'
    //   })
    // } else if ((val.search("丢失") != -1) && (val.search("帽") != -1)) {
    //   that.setData({
    //     urlInterface: 'lCapList',
    //     path: 'l-cap-detail/cap-detail'
    //   })
    // } else if ((val.search("捡到") != -1) && (val.search("笔盒") != -1)) {
    //   that.setData({
    //     urlInterface: 'pPenboxList',
    //     path: 'p-penbox-detail/penbox-detail'
    //   })
    // } else if ((val.search("丢失") != -1) && (val.search("笔盒") != -1)) {
    //   that.setData({
    //     urlInterface: 'lPenboxList',
    //     path: 'l-penbox-detail/penbox-detail'
    //   })
    // } else if ((val.search("捡到") != -1) && (val.search("报告") != -1)) {
    //   that.setData({
    //     urlInterface: 'pReportList',
    //     path: 'p-report-detail/report-detail'
    //   })
    // } else if ((val.search("丢失") != -1) && (val.search("报告") != -1)) {
    //   that.setData({
    //     urlInterface: 'lReportList',
    //     path: 'l-report-detail/report-detail'
    //   })
    // } else if ((val.search("捡到") != -1) && (val.search("书") != -1)) {
    //   that.setData({
    //     urlInterface: 'pBookList',
    //     path: 'p-book-detail/book-detail'
    //   })
    // } else if ((val.search("丢失") != -1) && (val.search("书") != -1)) {
    //   that.setData({
    //     urlInterface: 'lBookList',
    //     path: 'l-book-detail/book-detail'
    //   })
    // } else if ((val.search("捡到") != -1) && (val.search("篮球") != -1)) {
    //   that.setData({
    //     urlInterface: 'pBasketballList',
    //     path: 'p-basketball-detail/basketball-detail'
    //   })
    // } else if ((val.search("丢失") != -1) && (val.search("篮球") != -1)) {
    //   that.setData({
    //     urlInterface: 'lBasketballList',
    //     path: 'l-basketball-detail/basketball-detail'
    //   })
    // } else if ((val.search("捡到") != -1) && (val.search("足球") != -1)) {
    //   that.setData({
    //     urlInterface: 'pFootballList',
    //     path: 'p-football-detail/football-detail'
    //   })
    // } else if ((val.search("丢失") != -1) && (val.search("足球") != -1)) {
    //   that.setData({
    //     urlInterface: 'lFootballList',
    //     path: 'l-football-detail/football-detail'
    //   })
    // } else if ((val.search("捡到") != -1) && (val.search("羽毛球") != -1)) {
    //   that.setData({
    //     urlInterface: 'pBadmintonList',
    //     path: 'p-badminton-detail/badminton-detail'
    //   })
    // } else if ((val.search("丢失") != -1) && (val.search("羽毛球") != -1)) {
    //   that.setData({
    //     urlInterface: 'lBadmintonList',
    //     path: 'l-badminton-detail/badminton-detail'
    //   })
    // } else if ((val.search("捡到") != -1) && (val.search("乒乓球") != -1)) {
    //   that.setData({
    //     urlInterface: 'pPingpongList',
    //     path: 'p-pingpong-detail/pingpong-detail'
    //   })
    // } else if ((val.search("丢失") != -1) && (val.search("乒乓球") != -1)) {
    //   that.setData({
    //     urlInterface: 'lPingpongList',
    //     path: 'l-pingpong-detail/pingpong-detail'
    //   })
    // } else if ((val.search("捡到") != -1) && (val.search("手表") != -1)) {
    //   that.setData({
    //     urlInterface: 'pWatchList',
    //     path: 'p-watch-detail/watch-detail'
    //   })
    // } else if ((val.search("丢失") != -1) && (val.search("手表") != -1)) {
    //   that.setData({
    //     urlInterface: 'lWatchList',
    //     path: 'l-watch-detail/watch-detail'
    //   })
    // } else if ((val.search("捡到") != -1) && (val.search("学生证") != -1)) {
    //   that.setData({
    //     urlInterface: 'pStuidcardList',
    //     path: 'p-stuidcard-detail/stuidcard-detail'
    //   })
    // } else if ((val.search("丢失") != -1) && (val.search("学生证") != -1)) {
    //   that.setData({
    //     urlInterface: 'lStuidcardList',
    //     path: 'l-stuidcard-detail/stuidcard-detail'
    //   })
    // } else if ((val.search("捡到") != -1) && (val.search("饭卡") != -1)) {
    //   that.setData({
    //     urlInterface: 'pMealcardList',
    //     path: 'p-mealcard-detail/mealcard-detail'
    //   })
    // } else if ((val.search("丢失") != -1) && (val.search("饭卡") != -1)) {
    //   that.setData({
    //     urlInterface: 'lMealcardList',
    //     path: 'l-mealcard-detail/mealcard-detail'
    //   })
    // } else if ((val.search("捡到") != -1) && (val.search("身份证") != -1)) {
    //   that.setData({
    //     urlInterface: 'pIdcardList',
    //     path: 'p-idcard-detail/idcard-detail'
    //   })
    // } else if ((val.search("丢失") != -1) && (val.search("身份证") != -1)) {
    //   that.setData({
    //     urlInterface: 'lIdcardList',
    //     path: 'l-idcard-detail/idcard-detail'
    //   })
    // } else {
    //   that.setData({
    //     urlInterface: 'pOtherList',
    //     path: 'p-other-detail/other-detail'
    //   })
    // } 
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
      url: 'http://127.0.0.1:3000/search',
      // +that.data.urlInterface,
      method:'GET',
      data:{
        val
      },
      header:{'content-type':'application/json'},
      success:function(res){
        console.log(res.data);
        console.log(typeof(res.data));  //对象
        var titles = [];
        console.log(that.data.showTitle);
        let arr = that.data.showTitle;
        for (var key in res.data) {
          //console.log(typeof(res.data[key]));  //对象
          res.data[key].show = false;
          for (let i = 0; i < arr.length; i++) {
            if (res.data[key].title == arr[i]) {
              res.data[key].show = true;
              console.log(res.data[key].title)
              console.log(res.data[key].show);
            }
          }
          console.log(res.data[key].show);
          console.log(typeof(res.data[key].pic));
          titles[titles.length]=res.data[key].title;
          var pics = res.data[key].pic.split(".jpg");
          console.log("pics:"+pics);
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
      url: '../../pages/detail/default?title='+this.data.titles[index],
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