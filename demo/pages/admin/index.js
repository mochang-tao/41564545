// pages/admin/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userUrl: '',
    classIfy: ['直播', '推荐', '热门', '动画', '影视', '校园', '共同抗疫', '新征程'],
    currentState: '',
    rotationList: [{
        url: 'https://i0.hdslb.com/bfs/banner/8d6f536171321dcc885a12e8503cddf1117c5731.jpg@976w_550h_1c.webp',
        titel:'倪虹洁虎妈鸡娃 学渣逆袭成状元？'
      },
      {
        url: 'https://i0.hdslb.com/bfs/banner/c718db02b0ad071ec7bc1f8e2e5892e16a10069f.jpg@976w_550h_1c.webp',
        titel:'BML-SP2022海外嘉宾演唱会直播售票中'
      },
      {
        url: 'https://i0.hdslb.com/bfs/banner/3e5c00e691f883de1a0711b89067c92d4643fa91.jpg@976w_550h_1c.webp',
        titel:'这就是跳燃脂操时可爱努力的我吗？'
      },
      {
        url: 'https://i0.hdslb.com/bfs/banner/692a40b0c96723cf86cdaa8e227e3f53b20f1fd5.png@976w_550h_1c.webp',
        titel:'好多“草”啊！'
      },
      {
        url: 'https://i0.hdslb.com/bfs/banner/15f16be1b752750780fcf4d8cd06e2deb5a283b1.png@976w_550h_1c.webp',
        titel:'天长地久有时尽，此情去乎若云浮'
      },
    ],
    list: [{
        url: 'https://i1.hdslb.com/bfs/archive/c789ebc7817b270be05a2405362a2687468c18ad.jpg@672w_378h_1c.webp',
        titel: '男同胞们，请放弃对女程序员的所有幻想',
        name: '森树Tree'
      },
      {
        url: 'https://i2.hdslb.com/bfs/archive/50c8fbd43d23777fcea196f06f3dead3559d738b.jpg@672w_378h_1c.webp',
        titel: '如果他们没有替身，用的是忍术的话！！！',
        name: '夏秋冬'
      },
      {
        url: 'https://i1.hdslb.com/bfs/archive/fefc8fed1defdb5cf367c510ddffb953fb150455.jpg@672w_378h_1c.webp',
        titel: '“你在路上随便碰到的一个路人，都是别人做梦都想见到的人”',
        name: '王小跳'
      },
      {
        url: 'https://i1.hdslb.com/bfs/archive/4e8106fd8357e37bdae3e72185c0bd1e466834ce.jpg@672w_378h_1c.webp',
        titel: '木村拓哉：她太漂亮了，让人怀疑这样的人是否真的存在！',
        name: '闲鱼很咸_'
      },
      {
        url: 'https://i0.hdslb.com/bfs/archive/2bc46c0c742f244247adf65f8c3527685ac4c3b4.jpg@672w_378h_1c.webp',
        titel: '约 尔 太 太，但 是 蹦 迪！ ❤️ 【咬人猫】',
        name: '=咬人喵='
      },
      {
        url: 'https://i0.hdslb.com/bfs/archive/b41f25f00833389fc329eb193ead77b4d4676082.jpg@672w_378h_1c.webp',
        titel: '手绘446张！还原火影忍者《青鸟》',
        name: '棕与灰9'
      },
      {
        url: 'https://i0.hdslb.com/bfs/archive/3ac113d9a6fdc11801ce902f72e16cbd460994c7.jpg@672w_378h_1c.webp',
        titel: '嘎子，再偷下去就真的不礼貌了！！！',
        name: '痘痘动漫'
      },
      {
        url: 'https://i2.hdslb.com/bfs/archive/0464976167e2a6f47b4bcf35de459e7c3110bea1.jpg@672w_378h_1c.webp',
        titel: '对小学生来说可能太幼稚，对大学生来说刚刚好',
        name: '沛沛瑶呀爱吃糖呀'
      },
      {
        url: 'https://i2.hdslb.com/bfs/archive/a4bddb9f7071f9325e5be5325384aecfb664305d.jpg@672w_378h_1c.webp',
        titel: '价值790亿元的可乐配方，被我破解了？',
        name: '柴犬老丸子'
      },
      {
        url: 'https://i2.hdslb.com/bfs/archive/a73b261e795122577395c481dafca1747e936f5e.jpg@672w_378h_1c.webp',
        titel: '做了两年的up主，终于拥有了梦想中的工作室！',
        name: '小芊枫'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var c = wx.getStorageSync('u_i')
    this.setData({
      userUrl: c.avatarUrl
    })
    this.setData({
      currentState:"热门"
    })
  },
  setSwitch: function (e) {
    console.log(e)
    this.setData({
      currentState: e.target.dataset.item
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
