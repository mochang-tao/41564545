const App = getApp()

Page({
    data: {
        indicatorDots: !1,
        autoplay: !1,
        current: 0,
        interval: 3000,
        duration: 1000,
        circular: !1,
    },
    onLoad() {},
    onShow() {},
    bindload(e) {
        var c = wx.getStorageSync('u_i')
        var b = wx.getStorageSync('u_n')
        if(c.avatarUrl.length !== 0){
          wx.switchTab({
            url:'../admin/index'
        })
        }
    },
    goIndex() {
        // App.WxService.switchTab('/pages/index/index')
    },
    goLogin() {
        // App.WxService.redirectTo('/pages/login/index')
        // wx.switchTab({
        //   url: '../index/index',
        // })
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
            wx.switchTab({
                url:'../admin/index'
            })
          }
        })
      },
})