// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg1:"",
    msg2:"",
    uphone:"",
    upwd:"",
    isSee:true,//密码是否可见
  },
  uphone(e){
    var uphone=parseInt(e.detail.value);
    var reg=/^1[3-8]\d{9}$/;
    if(!uphone){
      this.setData({msg1:"手机号码不能为空"})
    }
    else if(!reg.test(uphone)){
      this.setData({
        msg1:"手机号码不符合规则",
      })
    }else{
      this.setData({
        msg1:"",
        uphone:uphone,
      })
    }
  },
  upwd(e){
    var upwd=e.detail.value;
    var reg=/^\w{8,16}$/;
    if(!reg.test(upwd)){
      this.setData({
        msg2:"密码不符合长度"
      })
    }else{
      this.setData({
        msg2:"",
        upwd:upwd,
      })
    }
  },
  login(){
    console.log(this.data.uphone);
    console.log(this.data.upwd)
    // console.log(e);
    var bool1=this.data.msg1==""&&this.data.msg2=="";
    var bool2=this.data.upwd!==""&&this.data.uphone!=="";
    var bool=bool1&&bool2;
    console.log(bool);
    if(bool){
      var url ="http://127.0.0.1:3000/getLogin";
      wx.request({
        url: url,
        data:{
          uphone:this.data.uphone,
          upwd:this.data.upwd,
        },
        method:"GET",
        success:res=>{
          var code=res.data.code;
          if(code>0){
            wx.showModal({
              title: '登录成功',
              content: '前往首页',
              success:res=>{
                console.log(res.confirm);
                if(res.confirm){
                  wx.reLaunch({
                    url: '/pages/index/index',
                  })
                }
              }
            })
          }else{
            var t=wx.showLoading({
              title: '用户名/密码错误',
            })
            setTimeout(
              function(){wx.hideLoading()}
              ,2000);
          }
        }
      })
    }
  },
  see(){
    //密码是否可见
    console.log(111);
    if(this.data.isSee){
     this.setData({isSee:false}) 
    }else{
      this.setData({isSee:true})
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.uphone();
    // this.upwd();
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