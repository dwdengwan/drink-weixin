// pages/myvip/myvip.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    img_url:"../image/icons/avatar.png",
    // img_url:"http://tmp/wx3d85b663e5168f59.o6zAJs2loV2cWPsfLlyvsIlASfQA.w9AXKjMomtAwe19a296c676e98d5b85dc6d13ef63067.jpg",
  },
  uploadAvator: function () {
    // 上传头像
    // 1.选择单张图片
    wx.chooseImage({
      count: 3,//最多选中一张
      sourceType: ["camera", "album"],//图片来源 相机 相册
      success:  res=>{
        // console.log(res.tempFilePaths[0]);
        this.setData({
          img_url:res.tempFilePaths[0],
        })
      },
    })
  },
  login(){
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  register(){
    wx.navigateTo({
      url: '/pages/register/register',
    })
  },
  setting(){
    wx.navigateTo({
      url:'/pages/verify/verify',
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