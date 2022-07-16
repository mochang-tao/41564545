// index.js
Page({
  data:{
    userName:'',
    userUrl:'',
    initial:true,
    userInfo:{},
    classIfyList:[
      {text:'xxx',url:'https://www.huangjuzi.top/static/development/app/app_i1.png',},
      {text:'xxx',url:'https://www.huangjuzi.top/static/development/app/app_i2.png',},
      {text:'xxx',url:'https://www.huangjuzi.top/static/development/app/app_i3.png',},
      {text:'xxx',url:'https://www.huangjuzi.top/static/development/app/app_i4.png',},
      {text:'xxx',url:'https://www.huangjuzi.top/static/development/app/app_i5.png',},
      {text:'xxx',url:'https://www.huangjuzi.top/static/development/app/app_i6.png',},
    ],
    swiperList:[
      {url:'https://www.huangjuzi.top/static/newIndex/banner3.jpg'},
      {url:'https://www.huangjuzi.top/static/newIndex/banner4.jpg'},
      {url:'https://www.huangjuzi.top/static/newIndex/banner6.jpg'},
      {url:'http://www.figo.cn/static/images/ban4.jpg'},
      {url:'https://www.huangjuzi.top/static/newIndex/banner5.jpg'},
    ]
  },
  getUserNews: function(params) {
    console.log('xx')
    wx.getUserProfile({
      desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
      success: (res) => {
        this.setData({
          userUrl: res.userInfo.avatarUrl,
          initial: false,
          userName:res.userInfo.nickName,
          userInfo:res.userInfo
        })
        wx.setStorageSync('u_n', res.userInfo.nickName)
        wx.setStorageSync('u_i', res.userInfo)
      }
    })
  },
  onLoad: function(){
    var c = wx.getStorageSync('u_i')
    var b = wx.getStorageSync('u_n')
    console.log(c.avatarUrl)
    this.setData({
      userUrl:c.avatarUrl,
      userName:b
    })
    if(c.avatarUrl.length !== 0){
      this.setData({
        initial:false
      })
    }
  },
  goTab:function(text,data){
    wx.navigateTo({
      url: '../'+text+'/index',
      success: function(res){
        // success
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  }
})
