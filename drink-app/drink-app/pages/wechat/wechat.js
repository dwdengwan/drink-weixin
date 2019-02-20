// pages/wechat/wechat.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],//题库
    id:0,
    isBegain:false,//游戏是否开始
    num:5,//定时器的数字
    myColor:"green",//定时器的背景色
    myColor1:"#fff",//按钮一的背景色
    myColor2:"#fff",//按钮二的背景色
    isBtn1:"",//是否禁止按下
    isBtn2:"",
    isRun:true,//定时器是否在运行
    answer:"",//正确答案
    score:0,//分数
    scoreColor:'red',
    disable:true,
    // percent:0,//百分比
  },
  change:function(){
    //开始答题
    this.getMore();
    var num=this.data.num;
    if(this.data.isRun===true){
      var timer=setInterval(()=>{
        if(num<6&&num>0){
          num--;
          if(num>=4){
            this.setData({
              myColor:"green",
            })
          }else if(num>=2){
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
          num=5
        }
        this.setData({
          num: num,
        })
      },1000)
    }else{
      clearTimeout(timer);
      this.setData({
        myColor1: "#fff",
        myColor2: '#fff',
      })
    }
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
    //发送请求 请求后端数据
    var percent=this.data.percent;
    if(this.data.isRun===true){
      for(var i=0;i<5;i++){
        percent+=20;
        var timer = setInterval(()=>{
        var id=this.data.id;
        id=parseInt(Math.random()*20+1);
        // console.log(id);
        var url ="http://127.0.0.1:3000/getDdxq";
        wx.request({
          url: url,
          data:{id},
          success:res=>{
            this.setData({
              list:res.data,
              id:id,
              answer:res.data[0].anser,
              myColor1:"#fff",
              myColor2:"#fff",
              isBtn1:"",
              isBtn2:"",
              percent:percent,
            })
          }
        });
        if(percent>100){
          return;
        }
      }, 6000);
    }
  }
  },
  // isRight(){
  //   //答案是否正确
  //   var answer = e._relatedInfo.anchorTargetText;
  //   if(this.data.answer==answer){
  //     var cc1="green";
  //     this.setData({
  //       myColor1:cc1,
  //       isRun:false,
  //     });
  //   }else{
  //     var cc2="red";
  //     this.setData({
  //       myColor1:cc2,
  //       isRun:false,
  //     })
  //   }
  // },
  // scoreColor:function(){
  //   if(num>1000){
  //     // this.setData({
  //     //   score:num,
  //     //   scoreColor:'red',
  //     // })
  //     scoreColor='red';
  //   }else if(n>2000){
  //     // this.setData({
  //     //   score:num,
  //     //   scoreColor:'yellow',
  //     // })
  //     scoreColor='yellow';
  //   }else{
  //     // this.setData({
  //     //   score:num,
  //     //   scoreColor:'green',
  //     // })
  //     scoreColor='green';
  //   }
  // },
  change1:function(e){
    //选项一
    // this.isRight();
    var answer = e._relatedInfo.anchorTargetText;
    var num=this.data.score;
    var scoreColor=this.data.scoreColor;
    this.data.isBtn1="";
    console.log(answer);
    console.log(this.data.answer);
    if(this.data.answer==answer){
      var cc1="green";
      num+=100;
      // this.scoreColor();
      if(num<1000){
        scoreColor='red';
      }else if(num<2000){
        scoreColor='pink';
      }else{
        scoreColor='green';
      }
      this.setData({
        myColor1:cc1,
        isRun:false,
        score:num,
        scoreColor:scoreColor,
        // isBtn1:"disable",
        isBtn2:"disable",
      });
    }else{
      num+=0;
      var cc2="red";
      if(num<1000){
        scoreColor='red';
      }else if(num<2000){
        scoreColor='pink';
      }else{
        scoreColor='green';
      }
      // this.scoreColor();
      this.setData({
        myColor1:cc2,
        isRun:false,
        score:num,
        // isBtn1:"disable",
        scoreColor:scoreColor,
        isBtn2:"disable",
      })
    }
    console.log(this.data.isRun);
  },
  change2:function(e){
    //选项二
    var num=this.data.score;
    var scoreColor=this.data.scoreColor;
    // this.isRight();
    var answer = e._relatedInfo.anchorTargetText;
    this.data.isBtn2="";
    console.log(answer);
    console.log(this.data.answer);
    if(this.data.answer==answer){
      num+=100;
      // this.scoreColor();
      if(num<1000){
        scoreColor='red';
      }else if(num<2000){
        scoreColor='pink';
      }else{
        scoreColor='green';
      }
      var cc1="green";
      this.setData({
        myColor2:cc1,
        isRun:false,
        score:num,
        isBtn1:"disable",
        scoreColor:scoreColor,
        // isBtn2:"disable",
      });
    }else{
      num+=0;
      // this.scoreColor();
      if(num<1000){
        scoreColor='red';
      }else if(num<2000){
        scoreColor='pink';
      }else{
        scoreColor='green';
      }
      var cc2="red";
      this.setData({
        myColor2:cc2,
        isRun:false,
        score:num,
        isBtn1:"disable",
        scoreColor:scoreColor,
        // isBtn2:"disable",
      })
    }
    console.log(this.data.isRun);
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