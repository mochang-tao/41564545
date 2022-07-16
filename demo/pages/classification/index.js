// pages/classification/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navLeftData:['美食','家电','手机','二手','服装','数码','汽车'],
    name:'',
    classIfyList:[
      {text:'xxx',url:'https://www.huangjuzi.top/static/development/app/app_i1.png',},
      {text:'xxx',url:'https://www.huangjuzi.top/static/development/app/app_i2.png',},
      {text:'xxx',url:'https://www.huangjuzi.top/static/development/app/app_i3.png',},
      {text:'xxx',url:'https://www.huangjuzi.top/static/development/app/app_i4.png',},
      {text:'xxx',url:'https://www.huangjuzi.top/static/development/app/app_i5.png',},
      {text:'xxx',url:'https://www.huangjuzi.top/static/development/app/app_i6.png',}
    ]
  },
  changeTab:function(e){
    this.setData({
      name:e.target.dataset.name
    })
    console.log(this.data.name)
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