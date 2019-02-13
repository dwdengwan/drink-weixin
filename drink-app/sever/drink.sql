SET NAMES UTF8;
DROP DATABASE IF EXISTS drink;
CREATE DATABASE drink CHARSET=UTF8;
USE drink;

-- 使用者列表drink_user
CREATE TABLE drink_user(
  id INT PRIMARY KEY AUTO_INCREMENT,
  dpone CHAR(11),
  upwd VARCHAR(25),
  uname VARCHAR(25)
);

INSERT INTO drink_user VALUES
(NULL,15566778899,"abc123456","joeery"),
(NULL,14488776655,"123456abc","marryke"),
(NULL,17799886655,"123abc456","soliet");

--index 轮播图
CREATE TABLE drink_lunbo(
  id INT PRIMARY key AUTO_INCREMENT,
  img_url VARCHAR(64)
);

--index 向轮播图列表插入数据
INSERT INTO drink_lunbo VALUES
(NULL,"http://127.0.0.1:3000/index/lunbo1.jpg"),
(NULL,"http://127.0.0.1:3000/index/lunbo2.jpg"),
(NULL,"http://127.0.0.1:3000/index/lunbo3.jpg"),
(NULL,"http://127.0.0.1:3000/index/lunbo4.jpg"),
(NULL,"http://127.0.0.1:3000/index/lunbo5.jpg");

-- index 九宫格
CREATE TABLE drink_jlist(
  id INT PRIMARY key AUTO_INCREMENT,
  img_url VARCHAR(255),
  title VARCHAR(64)
);

-- index 九宫格插入数据
INSERT INTO drink_jlist VALUES
(NULL,"http://127.0.0.1:3000/icons/grid-01.png","美食"),
(NULL,"http://127.0.0.1:3000/icons/grid-02(1).png","沐浴"),
(NULL,"http://127.0.0.1:3000/icons/grid-03.png","结婚啦"),
(NULL,"http://127.0.0.1:3000/icons/grid-04.png","卡拉ok"),
(NULL,"http://127.0.0.1:3000/icons/grid-05.png","找工作"),
(NULL,"http://127.0.0.1:3000/icons/grid-06.png","辅导班"),
(NULL,"http://127.0.0.1:3000/icons/grid-07.png","汽车保养"),
(NULL,"http://127.0.0.1:3000/icons/grid-08.png","租房"),
(NULL,"http://127.0.0.1:3000/icons/grid-09.png","装修");

--  index 商家推荐 交友论坛
CREATE TABLE drink_sjlist(
  id INT PRIMARY key AUTO_INCREMENT,
  img_url VARCHAR(255)
);    

INSERT INTO drink_sjlist VALUES
(NULL,"http://127.0.0.1:3000/tabs/link-01.png"),
(NULL,"http://127.0.0.1:3000/tabs/link-02.png");

-- list页面 onefloor listof_list
CREATE TABLE listof_list(
  id INT PRIMARY KEY AUTO_INCREMENT,
  img_url VARCHAR(255),
  title1 VARCHAR(25),
  title2 VARCHAR(25)
);

INSERT INTO listof_list VALUES
(NULL,"http://127.0.0.1:3000/index/bj1.jpg","浓香型白酒","--品质好酒 老牌名酒--"),
(NULL,"http://127.0.0.1:3000/index/fjt1.jpg","清香型白酒","--汾酒固态纯酿--");

-- list页面 twofloor listtf_list
CREATE TABLE listtf_list(
  id INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(255),
  title VARCHAR(25),
  price DECIMAL(9,2)
);

INSERT INTO listtf_list VALUES
(NULL,"http://127.0.0.1:3000/index/bj1.jpg","浓香型",99.9),
(NULL,"http://127.0.0.1:3000/index/fjt1.jpg","清香型",88.8),
(NULL,"http://127.0.0.1:3000/index/kk.jpg","酱香型",189,88),
(NULL,"http://127.0.0.1:3000/index/mt1.jpg","这香型",899.66),
(NULL,"http://127.0.0.1:3000/index/pt1.jpg","那香型",789.52),
(NULL,"http://127.0.0.1:3000/index/pt2.jpg","新香型",895.57),
(NULL,"http://127.0.0.1:3000/index/pt3.jpg","啥香型",874.5),
(NULL,"http://127.0.0.1:3000/index/pt4.jpg","胡香型",854.45),
(NULL,"http://127.0.0.1:3000/index/sd.jpg","理香型",896.5),
(NULL,"http://127.0.0.1:3000/index/kk.jpg","移香型",999,99);

-- msg页面 msg_list
CREATE TABLE msg_list(
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(128),
  dtime VARCHAR(128),
  img VARCHAR(128),
  dtitle VARCHAR(128)
);

INSERT INTO msg_list VALUES
(NULL,"年终盛典1","2019-01-25","http://127.0.0.1:3000/index/lunbo1.jpg","越努力,越幸运"),
(NULL,"年终盛典2","2019-08-13","http://127.0.0.1:3000/index/lunbo2.jpg","我要吃鸡腿,越幸运"),
(NULL,"年终盛典3","2019-06-19","http://127.0.0.1:3000/index/lunbo3.jpg","越努力,我要吃糖醋里脊"),
(NULL,"年终盛典4","2019-06-15","http://127.0.0.1:3000/index/lunbo4.jpg","越努力,我要一夜暴富"),
(NULL,"年终盛典5","2019-09-30","http://127.0.0.1:3000/index/lunbo5.jpg","胡闹胡闹,越幸运"),
(NULL,"年终盛典6","2019-08-13","http://127.0.0.1:3000/index/lunbo1.jpg","越努力,心永远在远方"),
(NULL,"年终盛典7","2019-06-19","http://127.0.0.1:3000/index/lunbo2.jpg","越努力,怡然自得运"),
(NULL,"年终盛典8","2019-06-19","http://127.0.0.1:3000/index/lunbo3.jpg","越努力,开开心心");

-- details 详情页 details_list
CREATE TABLE details_list(
  id INT PRIMARY KEY AUTO_INCREMENT,
  img VARCHAR(128),
  title VARCHAR(128),
  phone CHAR(11),
  addr VARCHAR(128),
  dtime VARCHAR(128),
  dpoint VARCHAR(25)
);

INSERT INTO details_list VALUES
(NULL,"http://127.0.0.1:3000/index/bj1.jpg","九九新一","15654884754","东门北路","09:00-22:00","80%"),
(NULL,"http://127.0.0.1:3000/index/fjt1.jpg","九九新二","14474884754","东门南路","10:00-21:00","60%"),
(NULL,"http://127.0.0.1:3000/index/kk.jpg","九九新三","18574884754","东门东路","09:00-20:00","70%"),
(NULL,"http://127.0.0.1:3000/index/mt1.jpg","九九新四","15774884754","南门北路","10:00-23:00","90%"),
(NULL,"http://127.0.0.1:3000/index/pt1.jpg","九九新五","16574884754","西门北路","11:00-22:00","80%"),
(NULL,"http://127.0.0.1:3000/index/pt2.jpg","九九新六","15874884754","十门北路","09:00-23:00","60%"),
(NULL,"http://127.0.0.1:3000/index/pt3.jpg","九九新七","15574854754","苟门北路","11:00-21:00","90%"),
(NULL,"http://127.0.0.1:3000/index/pt4.jpg","九九新八","15574444754","虎门北路","10:00-22:00","70%");

-- 答答星球
CREATE TABLE drink_ddxq(
  id INT PRIMARY KEY AUTO_INCREMENT,
  question VARCHAR(255),
  anser1 VARCHAR(255),
  anser2 VARCHAR(255),
  anser VARCHAR(255)
);

INSERT INTO drink_ddxq VALUES
(NULL,"白酒多少度？","52度","30度","A"),
(NULL,"红酒多少度？","35度","25度","A"),
(NULL,"红酒的原厂地在哪呢？","法国","德国","A"),
(NULL,"1+1=?","3","2","B"),
(NULL,"3*0+10*0=?","13","0","B"),
(NULL,"花花有什么作用呢？","召唤神龙","召唤五福","B"),
(NULL,"敬业福代表着什么呢？","很敬业","很爱国","A"),
(NULL,"good good study,day day up!","好好学习,天天向上","吃饭,睡觉,好好打豆豆","A"),
(NULL,"喜欢吃什么东东呢？","糖醋里脊","鸡腿","B"),
(NULL,"漂亮的皮囊千篇一律,有趣的灵魂万里挑一","bed","good","B"),
(NULL,"白酒多少度？","52度","30度","A"),
(NULL,"红酒多少度？","35度","25度","A"),
(NULL,"红酒的原厂地在哪呢？","法国","德国","A"),
(NULL,"1+1=?","3","2","B"),
(NULL,"3*0+10*0=?","13","0","B"),
(NULL,"花花有什么作用呢？","召唤神龙","召唤五福","B"),
(NULL,"敬业福代表着什么呢？","很敬业","很爱国","A"),
(NULL,"good good study,day day up!","好好学习,天天向上","吃饭,睡觉,好好打豆豆","A"),
(NULL,"喜欢吃什么东东呢？","糖醋里脊","鸡腿","B"),
(NULL,"漂亮的皮囊千篇一律,有趣的灵魂万里挑一","bed","good","B");