// pages/shop/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: [{
      url: '../../static/img/x_01.png',
      name: '异兽魔都'
    }, {
      url: '../../static/img/x_02.png',
      name: '催眠麦克风'
    }, {
      url: '../../static/img/x_03.png',
      name: '漫威'
    }],
    classIfy: [{
      url: '../../static/img/01.png',
      name: '星际牛仔'
    }, {
      url: '../../static/img/02.png',
      name: '大理寺日'
    }, {
      url: '../../static/img/03.png',
      name: '催眠麦克'
    }, {
      url: '../../static/img/04.png',
      name: '三体'
    }, {
      url: '../../static/img/05.png',
      name: '新世纪福'
    }, {
      url: '../../static/img/06.png',
      name: '拳皇'
    }, {
      url: '../../static/img/07.png',
      name: '来着深渊'
    }, {
      url: '../../static/img/08.png',
      name: '夏目友人'
    }, {
      url: '../../static/img/09.png',
      name: '黑子篮球'
    }, {
      url:'../../static/img/10.png',
      name:''
    }],
    interestList:[
      {url:'../../static/img/xq_01.png',name:'手办'},
      {url:'../../static/img/xq_02.png',name:'周边'},
      {url:'../../static/img/xq_3.png',name:'漫展电影'},
      {url:'../../static/img/xq_4.png',name:'图书漫画'},
      {url:'../../static/img/xq_5.png',name:'数码装备'},
      {url:'../../static/img/xq_6.png',name:'次元服饰'},
    ],
    blibliData:[
      {url:''},
      {url:''},
      {url:''},
      {url:''},
      {url:''},
      {url:''},
    ],
    classIfyHeight:true
  },
  setclassIfy: function () {
    this.setData({
      classIfyHeight: !this.data.classIfyHeight
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
