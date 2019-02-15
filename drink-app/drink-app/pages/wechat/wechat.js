// pages/wechat/wechat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    id:0,
    isBegain:false,
    num:9,
    myColor:"green",
  },
  change:function(){
    this.getMore();
    var num=this.data.num;
    setInterval(()=>{
      if(num<10&&num>0){
        num--;
        if(num>=7){
          this.setData({
            myColor:"green",
          })
        }else if(num>=3){
         this.setData({
           myColor:"pink",
         })
        }else{
          this.setData({
            myColor:"red",
          })
        }
      }
      else {
        num=9
      }
      this.setData({
        num: num
      })
    },1000)
    if(!this.isBegain){
      console.log(this.data.isBegain);
      this.getMore();
      this.setData({
        isBegain:true
      })
    }else{
      console.log(this.data.isBegain);
      this.setData({
        isBegain:false,
      })
    }
  },
  getMore:function(){
    setInterval(()=>{
    var id=this.data.id;
    id=parseInt(Math.random()*20+1);
    // console.log(id);
    var url ="http://127.0.0.1:3000/getDdxq";
    wx.request({
      url: url,
      data:{id},
      success:res=>{
        // console.log(res.data);
        this.setData({
          list:res.data,
          id:id,
        })
      }
    })
    }, 10000);
  },
  change1:function(e){
    console.log(e);
  },
  change2:function(e){
    console.log(e);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getMore();
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