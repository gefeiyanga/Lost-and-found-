const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

function showList(router,that){
  wx.request({
    url: `http://127.0.0.1:3000/${router}`,
    method: 'GET',
    data: {},
    header: { 'content-type': 'application/json' },
    success: function (res) {
      console.log(res.data);
      console.log(that.data.showTitle);
      let arr = that.data.showTitle;
      // console.log(typeof(res.data));  //对象
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
        // index:res.data.id
      })
    }
  });
}

module.exports = {
  formatTime: formatTime,
  showList: showList,
}
