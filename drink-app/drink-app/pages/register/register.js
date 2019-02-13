// pages/register/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg1:"",
    msg2:"",
    msg3:"",
    uphone:"",
    uname:"",
    upwd:"",
  },
  uphone(e){
    var uphone=e.detail.value;
    var reg=/^1[3-8]\d{9}$/;
    if (reg.test(uphone)){
      this.setData({
        msg1:"",
      });
      var url ="http://127.0.0.1:3000/isRegister";
      wx.request({
        url: url,
        data:{uphone:uphone},
        success:(res)=>{
          var code=res.data.code;
          if(code<0){
            this.setData({
              msg1:"该手机号被注册",
            })
          }else{
            this.setData({
              msg1:"",
              uphone:uphone,
            })
          }
        }
      })
    }else{
      this.setData({
        msg1:"手机号不符合规则",
      })
    }
  },
  upwd(e){
    var upwd=e.detail.value;
    var reg=/^\w{8,16}$/;
    if(reg.test(upwd)){
      this.setData({
        msg2:"",
        upwd:upwd,
      })
    }else{
      this.setData({
        msg2:"密码不符合长度",
      })
    }

  },
  upwd2(e){
    var upwd2=e.detail.value;
    if(upwd2!==this.data.upwd){
      this.setData({
        msg3:"两次输入密码不相同"
      })
    }else{
      this.setData({
        msg3:"",
      })
    }
  },
  uname(e){
    var uname=e.detail.value;
    var reg =/^[\u4e00-\u9fa5]{0,}\d{0,}$/;
    this.setData({uname:uname});
  },
  login(){
    var bool1=this.data.msg1==""&&this.data.msg2==""&&this.data.msg3=="";
    var bool2=this.data.uphone!==""&&this.data.upwd!==""&&this.data.uname!=="";
    var bool=bool1&&bool2;
    if(bool){
      var url ="http://127.0.0.1:3000/getRegister";
      wx.request({
        url: url,
        data:{
          uphone:this.data.uphone,
          upwd:this.data.upwd,
          uname:this.data.uname,
        },
        success:res=>{
          var code=res.data.code;
          if(code>0){
            wx.showModal({
              title: '注册成功',
              content: '去往首页',
              success:res=>{
                console.log(res);
                if (res.confirm){
                  // wx.reLaunch({
                  //   url: '/pages/index/index',
                  // })
                  wx.navigateTo({
                    url: "/pages/login/login"
                  });
                }
              }
            })
          }else{
            wx.showLoading({
              title: '注册失败',
            })
          }
        }
      })
    }
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