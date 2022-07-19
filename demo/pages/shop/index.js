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
      url: '../../static/img/10.png',
      name: ''
    }],
    interestList: [{
        url: '../../static/img/xq_01.png',
        name: '手办'
      },
      {
        url: '../../static/img/xq_02.png',
        name: '周边'
      },
      {
        url: '../../static/img/xq_3.png',
        name: '漫展电影'
      },
      {
        url: '../../static/img/xq_4.png',
        name: '图书漫画'
      },
      {
        url: '../../static/img/xq_5.png',
        name: '数码装备'
      },
      {
        url: '../../static/img/xq_6.png',
        name: '次元服饰'
      },
    ],
    blibliData: [{
        url: 'https://i0.hdslb.com/bfs/kfptfe/floor/vanea014136bc6eb48599e94afa17ad5dee7.png@686w_260h_70q_progressive.jpeg'
      },
      {
        url: 'https://i0.hdslb.com/bfs/kfptfe/floor/vaneb5d274cf163c464db79b4e50ff1a9d1d.jpg@686w_260h_70q_progressive.jpeg'
      },
      {
        url: 'https://i0.hdslb.com/bfs/kfptfe/floor/vanee99080646ab743fbb4f0f066343aaefd.png@686w_260h_70q_progressive.jpeg'
      },
      {
        url: 'https://i0.hdslb.com/bfs/kfptfe/floor/vane6e06005ea37447a79ff6e74d746fd74d.jpg@686w_260h_70q_progressive.jpeg'
      },
      {
        url: 'https://i0.hdslb.com/bfs/kfptfe/floor/vane8865199336da46f9b54e3419b0f013b5.jpg@686w_260h_70q_progressive.jpeg'
      },
      {
        url: 'https://i0.hdslb.com/bfs/kfptfe/floor/vane0f825c2f686c4d6794fa8e0f4fd46f5f.jpg@686w_260h_70q_progressive.jpeg'
      },
    ],
    blibliGoods: [{
        url: 'https://i0.hdslb.com/bfs/mall/vendor/c5/6e/c56e09076868dd8c7f9063ed42b602fb.png@372w_372h_1e_85q.webp',
        Price: 15
      },
      {
        url: 'https://i0.hdslb.com/bfs/mall/vendor/68/94/6894c954daa56fa2a094115fdd2c70e4.png@372w_372h_1e_85q.webp',
        Price: 16
      }
    ],
    fourmodular: [{
        title: '今日上新',
        url: 'https://i0.hdslb.com/bfs/mall/mall/62/b6/62b6ddacef2e07b51ad90239e444b652.png',
        classIfy: '上新',
        num: 22
      },
      {
        title: '抢先看',
        url: 'https://i0.hdslb.com/bfs/mall/mall/51/4a/514aac1dbf2868da1da496dc9e2fc88a.png',
        classIfy: '新情报',
        num: 3
      },
      {
        title: '人气排行',
        url: 'https://i0.hdslb.com/bfs/mall/mall/39/56/3956035ebf880441fa7313a37ec557ea.png',
        classIfy: 'GSC榜'
      },
      {
        title: '签到有礼',
        url: 'https://i0.hdslb.com/bfs/mall/vendor/86/bb/86bbda5c28c3b9a4880416d22cfc074a.png'
      },
    ],
    list: [{
      ulr: 'https://i0.hdslb.com/bfs/mall/vendor/7e/c1/7ec121dcb64eb610f3ba29b16d2f7c35.png',
      title: 'BILIBILIGOODS 2233 便携mini magsafe磁吸移动电源',
      centent: 'cddshi榜',
      classIfy: '延期无忧',
      price: '55',
      num: 45545,
      special:'超值款，无敌的游戏机'
    }, {
      ulr: 'https://i0.hdslb.com/bfs/mall/vendor/7e/c1/7ec121dcb64eb610f3ba29b16d2f7c35.png',
      title: 'BILIBILIGOODS 2233 便携mini magsafe磁吸移动电源',
      centent: 'cddshi榜',
      classIfy: '延期无忧',
      price: '55',
      num: 45545
    }, {
      ulr: 'https://i0.hdslb.com/bfs/mall/vendor/7e/c1/7ec121dcb64eb610f3ba29b16d2f7c35.png',
      title: 'BILIBILIGOODS 2233 便携mini magsafe磁吸移动电源',
      centent: 'cddshi榜',
      classIfy: '延期无忧',
      price: '55',
      num: 45545
    }, {
      ulr: 'https://i0.hdslb.com/bfs/mall/vendor/7e/c1/7ec121dcb64eb610f3ba29b16d2f7c35.png',
      title: 'BILIBILIGOODS 2233 便携mini magsafe磁吸移动电源',
      centent: 'cddshi榜',
      classIfy: '延期无忧',
      price: '55',
      num: 45545
    }, {
      ulr: 'https://i0.hdslb.com/bfs/mall/vendor/7e/c1/7ec121dcb64eb610f3ba29b16d2f7c35.png',
      title: 'BILIBILIGOODS 2233 便携mini magsafe磁吸移动电源',
      centent: 'cddshi榜',
      classIfy: '延期无忧',
      price: '55',
      num: 45545
    }, {
      ulr: 'https://i0.hdslb.com/bfs/mall/vendor/7e/c1/7ec121dcb64eb610f3ba29b16d2f7c35.png',
      title: 'BILIBILIGOODS 2233 便携mini magsafe磁吸移动电源',
      centent: 'cddshi榜',
      classIfy: '延期无忧',
      price: '55',
      num: 45545
    }],
    classIfyHeight: true
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
