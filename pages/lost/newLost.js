var util = require('../../utils/util.js');
const app=getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tab:'',
    avatarUrl:'',
    nickName:'',
    checkImgLength:0,
    length:0,
    tempFilePaths:[],
    imgLists:[],
    source:[],
    title:'',
    detail:'',
    name:'',
    tele:'',
    time:''
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        avatarUrl:app.globalData.userInfo.avatarUrl,
        nickName:app.globalData.userInfo.nickName
      })
    }
    console.log(this.data.nickName);
    console.log(this.data.avatarUrl);
  },
  //上传照片
  getPic: function() {
     var that = this;
     console.log(9 - that.data.checkImgLength)
     if (9 - that.data.checkImgLength >= 1){
       wx.chooseImage({
         count: 9 - that.data.checkImgLength, // 默认9
         sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
         sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
         success: function (res) {
           var tempFilePaths = res.tempFilePaths//这里拿到的是图片在微信客户端的临时路径！！！对象           
           let length = tempFilePaths.length;
           let tempList = that.data.imgLists.concat(tempFilePaths);//JSON数据,对象
           that.setData({
             length,
             tempFilePaths,
             imgLists: tempList,
             checkImgLength: that.data.checkImgLength + length,//长度相加，这里是为了选择的图片不会超过9
           })
           
         }
       })
     }
   },
  previewImage: function () {
    // 预览图集
    wx.previewImage({
      urls: that.data.imgLists
    });
  },
  getTitle:function(e){
    var val = e.detail.value;
    // console.log(val);
    if(val.search("手机")!=-1){
      this.setData({
        tab:'l_phone'
      })
    }else if (val.search("电脑") != -1) {
      this.setData({
        tab: 'l_pc'
      })
    } else if (val.search("U盘") != -1) {
      this.setData({
        tab: 'l_udisk'
      })
    } else if (val.search("平板") != -1) {
      this.setData({
        tab: 'l_pad'
      })
    } else if (val.search("耳机") != -1) {
      this.setData({
        tab: 'l_earphone'
      })
    } else if (val.search("上衣") != -1) {
      this.setData({
        tab: 'l_shirt'
      })
    } else if (val.search("裤") != -1) {
      this.setData({
        tab: 'l_trousers'
      })
    } else if (val.search("帽") != -1) {
      this.setData({
        tab: 'l_cap'
      })
    } else if (val.search("笔盒") != -1) {
      this.setData({
        tab: 'l_penbox'
      })
    } else if (val.search("报告") != -1) {
      this.setData({
        tab: 'l_report'
      })
    } else if (val.search("《") != -1) {
      this.setData({
        tab: 'l_book'
      })
    }  else if (val.search("篮球") != -1) {
      this.setData({
        tab: 'l_basketball'
      })
    } else if (val.search("足球") != -1) {
      this.setData({
        tab: 'l_football'
      })
    } else if (val.search("羽毛球") != -1) {
      this.setData({
        tab: 'l_badminton'
      })
    } else if (val.search("乒乓球") != -1) {
      this.setData({
        tab: 'l_pingpong'
      })
    } else if (val.search("手表") != -1) {
      this.setData({
        tab: 'l_watch'
      })
    } else if (val.search("学生证") != -1) {
      this.setData({
        tab: 'l_stuidcard'
      })
    } else if (val.search("饭卡") != -1) {
      this.setData({
        tab: 'l_mealcard'
      })
    } else if (val.search("身份证") != -1) {
      this.setData({
        tab: 'l_idcard'
      })
    } else{
      this.setData({
        tab: 'l_other'
      })
    } 
    this.setData({
      title: val
    });
  },
  getDetail: function (e) {
    var val = e.detail.value;
    this.setData({
      detail: val
    });
  },
  getName: function (e) {
    var val = e.detail.value;
    this.setData({
      name: val
    });
  }, 
  getTele: function (e) {
    var val = e.detail.value;
    this.setData({
      tele: val
    });
  },
  uploadPic:function(){
    var that = this;
    for (var i = 0; i < that.data.length; i++) {
      wx.uploadFile({
        url: 'http://127.0.0.1:3000/upload',
        filePath: that.data.tempFilePaths[i],//临时路径
        name: 'image',
        formData: {
        },
        header: {
          "content-type": "multipart/form-data"
        },
        success: function (res) {
          var data = JSON.parse(res.data);
          console.log(typeof (data.path));
          that.setData({
            source: that.data.source + data.path
          })
        }
      })
    } 
  },
  release:function(){
    var that = this;    
    console.log(that.data);
    var time = util.formatTime(new Date())
    //为页面中time赋值
    that.setData({
      time: time
    })
    //打印
    console.log(time)
    wx.request({
      url: "http://127.0.0.1:3000/lRelease",
      method: "POST",
      data: {
        tab:that.data.tab,
        time:that.data.time,
        nickName:that.data.nickName,
        avatarUrl:that.data.avatarUrl,
        source: that.data.source,
        title: that.data.title,
        detail: that.data.detail,
        name: that.data.name,
        tele: that.data.tele
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log(res.data);
        wx.navigateBack({
          delta: 0  //小程序关闭当前页面返回上一页面
        })
        wx.showToast({
          title: '发布成功！',
          // icon: 'success',
          // duration: 2000
        })
      },
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