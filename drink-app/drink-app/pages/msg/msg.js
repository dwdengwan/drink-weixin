// pages/msg/msg.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    pageIndex:0,
    pageSize:2,
    pageCount:1,
  },
  moveTo:function(e){
    // console.log(e.currentTarget.dataset.id);
    var id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/distails/distails?id='+id,
    })
  },
  getMore:function(){
    wx.showLoading({
      title: '正在加载中...',
    })
    var pno=this.data.pageIndex;
    pno++;
    var ps=this.data.pageSize;
    var url ="http://127.0.0.1:3000/getMsg";
    wx.request({
      url: url,
      data:{pno,ps},
      method:"GET",
      success:res=>{
        setTimeout(function(){
          wx.hideLoading();
        },2000)
        console.log(res.data);
        this.setData({
          list:res.data.data,
          pageIndex:pno,
          pageCount:res.data.pageCount
          })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMore();
    console.log(111);
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
    this.data.pageIndex=0;
    this.getMore();
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    if(this.data.pageIndex<this.data.pageCount){
      this.getMore();
    }else{
      this.data.pageIndex=0;
    }
    console.log(this.data.pageIndex)
    console.log(this.data.pageCount);
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})