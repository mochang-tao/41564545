// pages/dynamic/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    active: 1,
    show: '综合',
    userData: [{
        url: 'https://i2.hdslb.com/bfs/face/a6ccd9bf04c088f365dbed73cf8e2ff95acd2fe6.jpg@240w_240h_1c_1s.webp',
        name: '徐云流浪中国'
      },
      {
        url: 'https://i1.hdslb.com/bfs/face/5f20c5b86b39793f9e061f12877f66b9119997d2.jpg@240w_240h_1c_1s.webp',
        name: '晓丹小仙女儿'
      },
      {
        url: 'https://i1.hdslb.com/bfs/face/8cb912b77f35524566c8a5fe7374e0ec59e4a1f3.jpg@240w_240h_1c_1s.webp',
        name: '叽叽的盆友圈'
      },
      {
        url: 'https://i1.hdslb.com/bfs/face/4e5d0a51273fe3f8fabc700b6a71bb8a38c9e21e.jpg@240w_240h_1c_1s.webp',
        name: '罗翔说刑法'
      },
      {
        url: 'https://i1.hdslb.com/bfs/face/01865ca44da46f63d089503a230d7806f82a07d7.jpg@240w_240h_1c_1s.webp',
        name: '一只小陆吖-'
      },
      {
        url: 'https://i2.hdslb.com/bfs/face/ea588cbf426d489701f384889b8fe87e5a2514de.jpg@240w_240h_1c_1s.webp',
        name: '人民日报'
      },
      {
        url: 'https://i1.hdslb.com/bfs/face/a72a256591293f63cfc982f0711c5b3dd9540c07.jpg@240w_240h_1c_1s.webp',
        name: '泽友io'
      },
      {
        url: 'https://i2.hdslb.com/bfs/face/c6e7e7f0c1cf38eb819a01584cb7d7b9dee1852a.jpg@240w_240h_1c_1s.webp',
        name: '涼子同学'
      }
    ],
    hotData: [{
        title: '上一次录读评论的时候还是上一次！不知不觉194w了'
      },
      {
        title: '今天穿奥地利传统服装，也就是十年都没有洗过'
      },
      {
        title: '牛牛你可千万不要乱来啊，花之都里都'
      },
      {
        title: '我今天一出门就遇到一个丘丘人被打了一顿'
      },
      {
        title: '对中国古人拉弓射箭的射法，在《射经》当中有所记述'
      },
      {
        title: '速报！由于主播是ILUNA铁粉'
      },
      {
        title: '和风的华丽服饰部分使用透明件和珠光涂装再现哦'
      },
      {
        title: '拯YO新助你奔赴山海·热爱！'
      },
      {
        title: '上海·ufotableCafe上海店 鬼灭之刃游郭篇主题活动第二期'
      },
    ],
    listData: [{
        headPortrait: 'https://i0.hdslb.com/bfs/face/4f4f7d862263f85de6892d679e3f58a08618c50b.jpg@96w_96h_1c_1s.webp',
        title: '',
        text: '王小美，那是谁？是穿旗袍的江南姑娘吗[脱单doge]',
        imgUrl: ['https://i0.hdslb.com/bfs/new_dyn/829fa0931eccdb949ba0d990b1c0d44218343098.png@518w.webp','https://i0.hdslb.com/bfs/new_dyn/2b619dc919f9f67f6c4d98ac15814ea018343098.png@1036w.webp','https://i0.hdslb.com/bfs/new_dyn/0c7707d36c62a223c26b37d8be2f06c818343098.png@1036w.webp','https://i0.hdslb.com/bfs/new_dyn/9bfe4658dbf8b007097016e8465d3b6118343098.png@1036w.webp','https://i0.hdslb.com/bfs/new_dyn/c76718c0d95cd710d76bbd645f84cc6c18343098.png@1036w.webp'],
        createdTime: '7-18',
        videoPath: '',
        userNmae: '河野华',
        num: '1.3w',
        newsNum: '658',
        news:'哼 ，不是我的问题 是衣服太小了[傲娇]',
        newsName:'河野华',
        turnNum:'118',
        hot:1
      },
      {
        headPortrait: 'https://i1.hdslb.com/bfs/face/cbe228260be3e8d2b49cb2f8dde7a0a41bee1d93.jpg@96w_96h_1c_1s.webp',
        title: '',
        text: '来杭州快俩月了，没去过西湖，我决定现在去 ',
        imgUrl: ['https://i0.hdslb.com/bfs/new_dyn/9da0c56399128de0a0c35e520a873c50405370021.png@518w.webp'],
        createdTime: '07-18',
        videoPath: '',
        userNmae: '尴尬的铁根er',
        num: '1.9w',
        newsNum: '829',
        turnNum:'26',
        hot:'0'
      },
      {
        headPortrait: 'https://i2.hdslb.com/bfs/face/a6ccd9bf04c088f365dbed73cf8e2ff95acd2fe6.jpg@240w_240h_1c_1s.webp',
        title: '高温下骑行南疆，白天摸鱼晚上赶路躲避烈日，到达和田住旅馆休息一天',
        text: '',
        imgUrl: [],
        createdTime: '7-20',
        videoPath: 'cloud://cloud1-6gbpm2mc8619fda5.636c-cloud1-6gbpm2mc8619fda5-1310314563/WeChat_20220721180637.mp4',
        userNmae: '徐云流浪中国',
        num: '4.5w',
        newsNum: '2669',
        hot:1,
        news:'奶啤梅开二度 我已激情下单',
        newsName:'利莫高'
      }
      // {
      //   headPortrait: '',
      //   title: '',
      //   text: '',
      //   imgUrl: '',
      //   createdTime: '',
      //   videoPath: '',
      //   userNmae: '',
      //   num: '',
      //   newsNum: ''
      // }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: 'none',
    });
  },
  setShow: function (e) {
    this.setData({
      show: e.target.dataset.show
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
