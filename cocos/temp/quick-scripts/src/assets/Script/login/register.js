"use strict";
cc._RF.push(module, '5b7b7P5FYFFiYYsd/RnEfBv', 'register');
// Script/login/register.js

"use strict";

var HttpHelper = require("http"); // var fs = require('fs'); // 引入fs模块
// var globaluserinfo = require("GlobaluserInfo");


var httpRequest = new HttpHelper();
cc.Class({
  "extends": cc.Component,
  properties: {
    register_alert: cc.Label,
    register_login_name: cc.EditBox,
    register_login_password: cc.EditBox
  },
  onLoad: function onLoad() {
    var loginname = cc.sys.localStorage.getItem('loginname');
    var password = cc.sys.localStorage.getItem('password'); // console.log(loginname)

    if (loginname) {
      this.register_login_name.getComponent(cc.EditBox).string = loginname;
    }

    if (loginname) {
      this.register_login_password.getComponent(cc.EditBox).string = password;
    } // 操作文本--读取用户信息


    this.tokenlogin(); // 快捷登录
    // // 账号密码登录
    // this.login();
    //储存缓存
    // cc.sys.localStorage.setItem('token', value);
    // cc.sys.localStorage.getItem(key);
    // cc.sys.localStorage.removeItem(key);
    // 保存最高分到本地
    // const KEY_BEST_SCORE = "bestScore";
    // let bestScore = cc.sys.localStorage.getItem(KEY_BEST_SCORE);
    // if (bestScore === "null" || this.score > bestScore) {
    //     bestScore = this.score;
    // }
    // cc.sys.localStorage.setItem(KEY_BEST_SCORE, bestScore);
  },
  tokenlogin: function tokenlogin() {
    // 获取本地json  信息
    // cc.loader.load( cc.url.raw("resources/login.json"),function(err,res){  
    // cc.loader.loadRes('login.json',function(err,res){   //默认resources
    //     let json = res.json;
    //     var params = {
    //         'token': json.token,
    //     };
    //     cc.log(json.token); 
    //     var res = httpRequest.httpPost('https://www.mheart.xyz/app/api-server/token-login', params ,function (data) {
    //         cc.loader.release('resources/login.json'); //释放json 资源
    //         // if(cc.sys.isNative){  //  jsb.fileUtils不支持 web  读写
    //         //     jsb.fileUtils.writeStringToFile(data,token)
    //         // }
    //         // cc.log(data); 
    //         // 未登录弹出登录
    //         if(data.code==0){
    //             // this.loginbox.node.active = false;  // 进度隐藏
    //         }
    //     });
    // })
    var token = cc.sys.localStorage.getItem('token');

    if (token) {
      httpRequest.httpPost('https://www.mheart.xyz/app/api-server/token-login', {
        'token': token
      }, function (data) {
        var _this = this; // cc.loader.release('resources/login.json'); //释放json 资源
        // if(cc.sys.isNative){  //  jsb.fileUtils不支持 web  读写
        //     jsb.fileUtils.writeStringToFile(data,token)
        // }
        // cc.log(data); 
        // 未登录弹出登录


        if (data.code == 0) {// this.loginbox.node.active = false;  // 进度隐藏
        } else {// this.loginbox.node.active = false;  // 进度隐藏
          }
      });
    }
  },
  login: function login() {
    var loginname = this.register_login_name.getComponent(cc.EditBox).string;
    var password = this.register_login_password.getComponent(cc.EditBox).string;
    var params = {
      'loginname': loginname,
      'password': password // 'loginname': 'yincan1993',
      // 'password': 123456,

    };

    var _this = this;

    httpRequest.httpPost('https://www.mheart.xyz/app/api-server/login', params, function (data) {
      cc.log(data);

      if (data.code == 1) {
        // _this.register_alert.color =  new cc.color('#BDFF00');
        _this.register_alert.string = '';
        cc.sys.localStorage.setItem('token', data.data.token);
        cc.sys.localStorage.setItem('loginname', loginname);
        cc.sys.localStorage.setItem('password', password);
        _this.node.active = false;
      } else {
        _this.register_alert.string = '账号密码错误!';
      } //操作文本--修改用户信息

    });
  },
  btnClick1: function btnClick1(event, customEventData) {
    // // 请求登录接口
    // var params = {
    //         'loginname': 'yincan1993',
    //         'password': 123456,
    //         'serverid': 1,
    // };
    // cc.sys.localStorage.setItem('params', JSON.stringify(params));
    var params = JSON.parse(cc.sys.localStorage.getItem("params"));
    var token = cc.sys.localStorage.getItem('token'); // cc.log(value); 
    // let httpRequest =  new HttpHelper();  

    httpRequest.httpPost('https://www.mheart.xyz/app/api-server/user-login', {
      'token': token
    }, function (data) {
      cc.log(data);

      if (data.code == 0) {// 登录失败，或本地数据失效
        // 弹窗
      } else {
        // 设置服务器
        cc.sys.localStorage.setItem('server', JSON.stringify(data.data.server));

        if (data.code == 1) {
          // 登录成功，进入游戏
          // cc.log(data.data.userinfo); 
          cc.sys.localStorage.setItem('userinfo', JSON.stringify(data.data.userinfo));
          cc.director.loadScene('home/dating'); // cc.sys.localStorage.setItem('userinfo', JSON.stringify(data.data.userinfo));
          // cc.sys.localStorage.getItem(key); //读取数据
        }

        if (data.code == 2) {
          // 登录成功，未定义角色
          // 进入定义角色界面     
          var server = JSON.parse(cc.sys.localStorage.getItem('server')); // cc.log(server); 
          // 创建角色

          cc.director.loadScene('register');
        }
      }
    }); //这里 event 是一个 Touch Event 对象，你可以通过 event.target 取到事件的发送节点
    // var node = event.target;
    // var button = node.getComponent(cc.Button);
    //这里的 customEventData 参数就等于你之前设置的 "click1 user data"
    // cc.log("node=", node.name, " event=", event.type, " data=", customEventData);
  },
  callback: function callback(event) {
    // cc.log(data)
    // var userCount =  cc.find("Canvas/ground/editbox_count").getComponent(cc.EditBox).string;
    // var userPassward =  cc.find("Canvas/ground/editbox_passward").getComponent(cc.EditBox).string;
    // console.log("用户账号："+userCount+ "用户密码："+ userPassward);
    // HttpHelp.login(userCount,userPassward,function(isSuccess,Data){
    //     var info = Data;
    //     if(true == isSuccess){
    //         console.log("login  success!!!");
    //         console.log(info);
    //         globaluserinfo.username = info.username;
    //         globaluserinfo.gamepoint = info.gamepoint;
    //         globaluserinfo.skey = info.skey;
    //         globaluserinfo.userid = info.userid;
    //         globaluserinfo.money = info.money;
    //         globaluserinfo.userid = info.userid;
    //         globaluserinfo.password = info.password;
    //         globaluserinfo.salt = info.salt;
    //         //登录成功后加载地图资源
    cc.director.loadScene('map'); //     }else{
    //         console.log("login  filed!!!")
    //     }
    // });
  },
  start: function start() {},
  // update (dt) {},
  show_dlg: function show_dlg() {
    this.node.active = true;
  },
  hidden_dlg: function hidden_dlg() {
    this.node.active = false;
  }
});

cc._RF.pop();