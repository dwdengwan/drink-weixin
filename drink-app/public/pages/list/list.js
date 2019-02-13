// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图
    list1: [
      { id: 1, img: "../image/index/lunbo1.jpg" },
      { id: 2, img: "../image/index/lunbo2.jpg" },
      { id: 3, img: "../image/index/lunbo3.jpg" },
      { id: 4, img: "../image/index/lunbo4.jpg" },
    ],
    // 一楼
    list2:[
      {id:1,img:"../image/index/bj1.jpg",title1:"浓香型白酒",title2:"--品质好酒 老牌名酒--"},
      { id: 2, img: "../image/index/kk.jpg", title1: "清香型白酒", title2: "--汾酒固态纯酿--" },
    ],
    // 二楼
    list3: [
      { id: 1, img: "../image/index/bj1.jpg", title: "浓香型" },
      { id: 2, img: "../image/index/kk.jpg", title: "清香型",},
      { id: 3, img: "../image/index/bj1.jpg", title: "浓香型" },
      { id: 4, img: "../image/index/kk.jpg", title: "清香型", },
      { id: 5, img: "../image/index/bj1.jpg", title: "浓香型" },
      { id: 6, img: "../image/index/kk.jpg", title: "清香型", },
      { id: 7, img: "../image/index/bj1.jpg", title: "浓香型" },
      { id: 8, img: "../image/index/kk.jpg", title: "清香型", },
      { id: 9, img: "../image/index/bj1.jpg", title: "浓香型" },
      { id: 10, img: "../image/index/kk.jpg", title: "清香型", },
    ],
    // 三楼
    list4: [
      { id: 1, img: "../image/index/bj1.jpg", title: "浓香型",price:225 },
      { id: 2, img: "../image/index/kk.jpg", title: "清香型", price: 225 },
      { id: 3, img: "../image/index/bj1.jpg", title: "浓香型", price: 285 },
      { id: 4, img: "../image/index/kk.jpg", title: "清香型", price: 195 },
      { id: 5, img: "../image/index/bj1.jpg", title: "浓香型", price: 625 },
      { id: 6, img: "../image/index/kk.jpg", title: "清香型", price: 195 },
    ],
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