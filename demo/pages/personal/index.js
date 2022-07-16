// pages/personal/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userUrl:'',
    userName:'',
    record:[
      {url:'../../static/icon/下载.png',name:'离线缓存'},{url:'../../static/icon/历史记录.png',name:'历史记录'},{url:'../../static/icon/星星.png',name:'我的收藏'},{url:'../../static/icon/稍后观看.png',name:'稍后再看'}
    ],
    tuijianList:[{url:'../../static/icon/01.png',name:'我的课程'},
                 {url:'../../static/icon/02.png',name:'看视频免流量'},
                 {url:'../../static/icon/03.png',name:'个性装扮'},
                 {url:'../../static/icon/04.png',name:'我的钱包'},
                 {url:'../../static/icon/05.png',name:'游戏中心'},
                 {url:'../../static/icon/06.png',name:'会员购中心'},
                 {url:'../../static/icon/07.png',name:'直播中心'},
                 {url:'../../static/icon/08.png',name:'创作中心'},
                 {url:'../../static/icon/09.png',name:'社区中心'},
                 {url:'../../static/icon/10.png',name:'哗哩哗啦公益'},
                 {url:'../../static/icon/11.png',name:'充能领福利'},
                 {url:'../../static/icon/12.png',name:'能量加油站'},
    ],
    gengduo:[{url:'../../static/icon/客服.png',label:'联系客服'},{url:'../../static/icon/听音乐.png',label:'听音乐'},{url:'../../static/icon/贴心守护.png',label:'青少年守护'},{url:'../../static/icon/设置.png',label:'设置'},]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var c = wx.getStorageSync('u_i')
    this.setData({
      userUrl:c.avatarUrl,
      userName:c.nickName
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