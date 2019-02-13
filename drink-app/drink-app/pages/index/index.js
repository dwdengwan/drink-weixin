//index.js
//获取应用实例
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [//九宫格
      // { id: 1, img: "../image/icons/grid-01.png", title: "美食" },
      // { id: 2, img: "../image/icons/grid-02(1).png", title: "沐浴" },
      // { id: 3, img: "../image/icons/grid-03.png", title: "结婚啦" },
      // { id: 4, img: "../image/icons/grid-04.png", title: "卡拉ok" },
      // { id: 5, img: "../image/icons/grid-05.png", title: "找工作" },
      // { id: 6, img: "../image/icons/grid-06.png", title: "辅导班" },
      // { id: 7, img: "../image/icons/grid-07.png", title: "汽车保养" },
      // { id: 8, img: "../image/icons/grid-08.png", title: "租房" },
      // { id: 9, img: "../image/icons/grid-09.png", title: "装修" },
    ],
    list1: [
      // { id: 1, img: "../image/index/lunbo1.jpg" },
      // { id: 2, img: "../image/index/lunbo2.jpg" },
      // { id: 3, img: "../image/index/lunbo3.jpg" },
      // { id: 4, img: "../image/index/lunbo4.jpg" },
    ],
    list2: [
      // { id: 1, img: "../image/tabs/link-01.png" },
      // { id: 2, img: "../image/tabs/link-02.png" },
    ],
  },
  // 轮播图发送ajax
  getMore(){
    var url ="http://127.0.0.1:3000/getLunbo";
    wx.request({
      url: url,
      data:{},
      method:"GET",
      success:res=>{
        // console.log(res.data);
        this.setData({
          list1:res.data,
        })
      }
    })
  },
  getJlist(){//九宫格
    var url ="http://127.0.0.1:3000/getJlist";
    wx.request({
      url: url,
      data:{},
      method:"GET",
      success:res=>{
        // console.log(res.data);
        this.setData({
          list:res.data,
        })
      }
    })
  },
  getSjlist(){
    var url ="http://127.0.0.1:3000/getSjliet";
    wx.request({
      url: url,
      data:{},
      method:"GET",
      success:res=>{
        // console.log(res.data);
        this.setData({
          list2:res.data,
        })
      }
    })
  },
  moveTo:function(e){//跳转至列表页
   var id=e.currentTarget.dataset.id;
   console.log(id);
   if(id==1){
    var url ="/pages/list/list?id="+id;
    wx.navigateTo({url});
   }else{
     var url = "/pages/list/list?id=" + id;
    wx.navigateTo({ url });
   }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getMore();//轮播图
    this.getJlist();//九宫格
    this.getSjlist();//商家推荐列表
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
