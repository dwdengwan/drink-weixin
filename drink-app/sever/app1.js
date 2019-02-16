//使用express构建web服务器 
const express = require('express');
//引入数据库模块
const pool = require("./pool");
/*引入路由模块*/

var app = express();

// 加载第三方模块:express-session
// 创建session对象 保存用户id
// const session=require("express-session");
// 对模块配置
// app.use(session({
//   secret:"128位随机字符串",//安全令牌
//   resave:false,           //每次请求是否需要保存
//   saveUninitialized:true, //初始化
//   cookie:{                //sessionid保存时
//     maxAge:1000*60*60*24  //1天
//   }
// }));
var server = app.listen(3000);

//跨域访问配置
//1.加载模块cors
 const cors=require("cors");
// 2.配置cors
 app.use(cors({
     //允许列表
     origin:["http://127.0.0.1:5500","http://localhost:5500"],
     //是否验证
     credentials:true
 }))

//托管静态资源到public目录下
app.use(express.static('public'));
/*使用路由器来管理路由*/

//http://127.0.0.1:3000/img/banner1.png
//express mysql 参数 request; response复习好好复习

// 小游戏 答答星球
app.get("/getDdxq",(req,res)=>{
  var id=req.query.id;
  var sql="select * from drink_ddxq where id=?";
  pool.query(sql,[id],(err,result)=>{
    if(err)throw err;
    res.send(result);
  })
})
// drink_user 使用者注册页面
app.get("/getRegister",(req,res)=>{
  var uphone=req.query.uphone;
  var upwd=req.query.upwd;
  var uname=req.query.uname;
  var sql="insert into drink_user values(NULL,?,?,?)";
  pool.query(sql,[uphone,upwd,uname],(err,result)=>{
    if(err)throw err;
    if(result.affectedRows>0){
      res.send({code:1,msg:"注册成功"});
    }else{
      res.send({code:-1,msg:"注册失败"});
    }
  })
})

// 登录
app.get("/getLogin",(req,res)=>{
  var uphone=req.query.uphone;
  var upwd=req.query.upwd;
  var sql="select * from drink_user where dpone=? and upwd=?";
  pool.query(sql,[uphone,upwd],(err,result)=>{
    if(err)throw err;
    if(result.length>0){
      res.send({code:1,msg:"登录成功"});
    }else{
      res.send({code:-1,msg:"登录失败"});
    }
  })
})
// 是否被注册 isRegister
app.get("/isRegister",(req,res)=>{
  var uphone=req.query.uphone;
  // var uname=req.query.uname;
  var sql="select * from drink_user where dpone=?";
  pool.query(sql,[uphone],(err,result)=>{
    if(err)throw err;
    if(result.length>0){
      res.send({code:-1,msg:"此手机号已被注册"})
    }else{
      res.send({code:1,msg:"可以注册"});
    }
  })
})
//index首页
// 轮播图 drink_lunbo
app.get("/getLunbo",(req,res)=>{
  var sql="select * from drink_lunbo";
  pool.query(sql,(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})

// index 九宫格 drink_jlist
app.get("/getJlist",(req,res)=>{
  var sql="select * from drink_jlist";
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    res.send(result);
  })
})

//index 商家推荐 drink_sjlist
app.get("/getSjliet",(req,res)=>{
  var sql="select * from drink_sjlist";
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    res.send(result);
  })
})

// list页面 onefloor listof_list
app.get("/getOflist",(req,res)=>{
  var sql="select * from listof_list";
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    res.send(result);
  })
})

// list页面 twofloor listTf_list
app.get("/getTflist",(req,res)=>{
  var sql="select * from listTf_list";
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    res.send(result);
  })
})

//list页面 FourFloor listFF_list
app.get("/getFFlist",(req,res)=>{
  var pno=req.query.pno;
  var pageSize=req.query.pageSize;
  if(!pno){
    pno=1;
  }
  if(!pageSize){
    pageSize=4;
  }
  var sql="select count(id) as c from listTf_list";
  var progress = 0; //sql执行进度
  obj = {code:1};
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    //pageCount 总页数
    var pageCount = Math.ceil(result[0].c/pageSize);
    obj.pageCount = pageCount;
    progress += 50;
  if(progress == 100){
    res.send(obj);
  }
});
//  查询当前页内容
var sql=" SELECT * FROM listTf_list LIMIT ?,?"
var offset = parseInt((pno-1)*pageSize);
pageSize = parseInt(pageSize);
  pool.query(sql,[offset,pageSize],(err,result)=>{
    if(err)throw err;
    obj.data = result;
    progress+=50;
    if(progress==100){
      res.send(obj);
    }
  }); 
})

// 分页查询的msg_list
app.get("/getMsg",(req,res)=>{
  var pno=req.query.pno;
  var pageSize=req.query.pageSize;
  if(!pno){
    pno=1;
  }
  if(!pageSize){
    pageSize=2;
  }
  var sql="select count(id) as c from msg_list";
  var progress = 0; //sql执行进度
  obj = {code:1};
  pool.query(sql,(err,result)=>{
    if(err)throw err;
    //pageCount 总页数
    var pageCount = Math.ceil(result[0].c/pageSize);
    obj.pageCount = pageCount;
    progress += 50;
  if(progress == 100){
    res.send(obj);
  }
});
//  查询当前页内容
var sql=" SELECT * FROM msg_list LIMIT ?,?"
var offset = parseInt((pno-1)*pageSize);
pageSize = parseInt(pageSize);
  pool.query(sql,[offset,pageSize],(err,result)=>{
    if(err)throw err;
    obj.data = result;
    progress+=50;
    if(progress==100){
      res.send(obj);
    }
  }); 
})

//带参数的跳转页面
app.get("/getId",(req,res)=>{
  var id=req.query.id;
  // console.log(id);
  var sql="select * from details_list where id=?";
  pool.query(sql,[id],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})


