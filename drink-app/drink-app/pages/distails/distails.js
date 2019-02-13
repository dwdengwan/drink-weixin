// pages/distails/distails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:1,
    list:[],
  },
  getMore:function(){
    console.log(this.data.id)
    var id=this.data.id;
    var url ="http://127.0.0.1:3000/getId";
    wx.request({
      url: url,
      data:{id},
      method:"GET",
      success:res=>{
        this.setData({
          list:res.data,
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options.id);
    var id=options.id;
    this.setData({
      id:id,
    })
    this.getMore();
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