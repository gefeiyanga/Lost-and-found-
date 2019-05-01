// pages/classify/default.js
Page({
  data: {
    index:"1"
  },
  /* 把点击到的某一项 设为当前index   */
  switchRightTab:function(e){
    //console.log(e);
    this.setData({
      index: e.target.dataset.index
    })
  }
})
