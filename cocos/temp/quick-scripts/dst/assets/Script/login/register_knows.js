
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/login/register_knows.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '99bc1iOpDlNZIWwGo6PgUtK', 'register_knows');
// Script/login/register_knows.js

"use strict";

var HttpHelper = require("http"); // var fs = require('fs'); // 引入fs模块
// var globaluserinfo = require("GlobaluserInfo");


var httpRequest = new HttpHelper();
cc.Class({
  "extends": cc.Component,
  properties: {
    // register_alert: cc.Label,
    // register_login_name: cc.EditBox,
    // register_login_password: cc.EditBox,
    register_knows_webview: cc.WebView
  },
  onLoad: function onLoad() {// var loginname =cc.sys.localStorage.getItem('loginname');
    // var password =cc.sys.localStorage.getItem('password');
    // // console.log(loginname)
    // if(loginname){
    //    this.register_login_name.getComponent(cc.EditBox).string=loginname;
    // }
    // if(loginname){
    //     this.register_login_password.getComponent(cc.EditBox).string=password;
    // }
    // // 操作文本--读取用户信息
    // this.tokenlogin(); // 快捷登录
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
    //     var res = httpRequest.httpPost('/app/api-server/token-login', params ,function (data) {
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
      httpRequest.httpPost('/app/api-server/token-login', {
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
  // login: function(){
  //    var loginname = this.register_login_name.getComponent(cc.EditBox).string;
  //    var password = this.register_login_password.getComponent(cc.EditBox).string;
  //     var params = {
  //         'loginname': loginname,
  //         'password': password,
  //         // 'loginname': 'yincan1993',
  //         // 'password': 123456,
  //     };
  //     var _this= this;
  //     httpRequest.httpPost('/app/api-server/login', params ,function (data) {
  //         cc.log(data); 
  //         if(data.code==1){
  //             // _this.register_alert.color =  new cc.color('#BDFF00');
  //             _this.register_alert.string ='';
  //             cc.sys.localStorage.setItem('token', data.data.token);
  //             cc.sys.localStorage.setItem('loginname', loginname);
  //             cc.sys.localStorage.setItem('password', password);
  //             _this.node.active =false;
  //         }else{
  //             _this.register_alert.string ='账号密码错误!';
  //         }
  //         //操作文本--修改用户信息
  //     });
  // },
  //
  // btnClick1: function (event, customEventData) {
  //     // // 请求登录接口
  //     // var params = {
  //     //         'loginname': 'yincan1993',
  //     //         'password': 123456,
  //     //         'serverid': 1,
  //     // };
  //     // cc.sys.localStorage.setItem('params', JSON.stringify(params));
  //     var params = JSON.parse(cc.sys.localStorage.getItem("params"));
  //     var token =cc.sys.localStorage.getItem('token');
  //     // cc.log(value); 
  //     // let httpRequest =  new HttpHelper();  
  //     httpRequest.httpPost('/app/api-server/user-login', {'token':token} ,function (data) {
  //         cc.log(data); 
  //         if(data.code==0){ // 登录失败，或本地数据失效
  //             // 弹窗
  //         }else{
  //             // 设置服务器
  //             cc.sys.localStorage.setItem('server', JSON.stringify(data.data.server));
  //             if(data.code==1){// 登录成功，进入游戏
  //                 // cc.log(data.data.userinfo); 
  //                 cc.sys.localStorage.setItem('userinfo', JSON.stringify(data.data.userinfo)); 
  //                 cc.director.loadScene('home/dating');
  //                 // cc.sys.localStorage.setItem('userinfo', JSON.stringify(data.data.userinfo));
  //                 // cc.sys.localStorage.getItem(key); //读取数据
  //             }
  //             if(data.code==2){ // 登录成功，未定义角色
  //                 // 进入定义角色界面     
  //                 var server = JSON.parse(cc.sys.localStorage.getItem('server'));
  //                 // cc.log(server); 
  //                 // 创建角色
  //                 cc.director.loadScene('register');
  //             }
  //         }
  //     });
  //     //这里 event 是一个 Touch Event 对象，你可以通过 event.target 取到事件的发送节点
  //     // var node = event.target;
  //     // var button = node.getComponent(cc.Button);
  //     //这里的 customEventData 参数就等于你之前设置的 "click1 user data"
  //     // cc.log("node=", node.name, " event=", event.type, " data=", customEventData);
  // },
  // callback: function (event) {
  //     // cc.log(data)
  //     // var userCount =  cc.find("Canvas/ground/editbox_count").getComponent(cc.EditBox).string;
  //     // var userPassward =  cc.find("Canvas/ground/editbox_passward").getComponent(cc.EditBox).string;
  //     // console.log("用户账号："+userCount+ "用户密码："+ userPassward);
  //     // HttpHelp.login(userCount,userPassward,function(isSuccess,Data){
  //     //     var info = Data;
  //     //     if(true == isSuccess){
  //     //         console.log("login  success!!!");
  //     //         console.log(info);
  //     //         globaluserinfo.username = info.username;
  //     //         globaluserinfo.gamepoint = info.gamepoint;
  //     //         globaluserinfo.skey = info.skey;
  //     //         globaluserinfo.userid = info.userid;
  //     //         globaluserinfo.money = info.money;
  //     //         globaluserinfo.userid = info.userid;
  //     //         globaluserinfo.password = info.password;
  //     //         globaluserinfo.salt = info.salt;
  //     //         //登录成功后加载地图资源
  //             cc.director.loadScene('map');
  //     //     }else{
  //     //         console.log("login  filed!!!")
  //     //     }
  //     // });
  // },
  start: function start() {},
  // update (dt) {},
  show_dlg: function show_dlg() {
    this.node.active = true;
  },
  hidden_dlg: function hidden_dlg() {
    this.node.active = false;
  },
  xieyi_show_dlg: function xieyi_show_dlg() {
    var _self = this;

    var remoteUrl = httpRequest.httpUrl("/app/api-user/xieyi");
    cc.loader.load({
      url: remoteUrl
    }, function (err, texture) {
      //     console.log(_self)
      // _self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame; 
      _self.register_knows_webview.url = new cc.SpriteFrame(texture);
    }); // this.register_knows_webview.url ='/app/api-user/xieyi';
    // this.register_knows_webview.loadUrl('/app/api-user/xieyi');

    this.node.active = true;
  },
  xieyi_hidden_dlg: function xieyi_hidden_dlg() {
    this.node.active = false;
  },
  yinsi_show_dlg: function yinsi_show_dlg() {
    var _self = this;

    var remoteUrl = httpRequest.httpUrl("/app/api-user/yinsi");
    cc.loader.load({
      url: remoteUrl
    }, function (err, texture) {
      //     console.log(_self)
      // _self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame; 
      _self.register_knows_webview.url = new cc.SpriteFrame(texture);
    }); // this.register_knows_webview.url ='/app/api-user/yinsi';
    // this.register_knows_webview.loadUrl('/app/api-user/yinsi');

    this.node.active = true;
  },
  yinsi_hidden_dlg: function yinsi_hidden_dlg() {
    this.node.active = false;
  }
});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxccmVnaXN0ZXJfa25vd3MuanMiXSwibmFtZXMiOlsiSHR0cEhlbHBlciIsInJlcXVpcmUiLCJodHRwUmVxdWVzdCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicmVnaXN0ZXJfa25vd3Nfd2VidmlldyIsIldlYlZpZXciLCJvbkxvYWQiLCJ0b2tlbmxvZ2luIiwidG9rZW4iLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaHR0cFBvc3QiLCJkYXRhIiwiX3RoaXMiLCJjb2RlIiwic3RhcnQiLCJzaG93X2RsZyIsIm5vZGUiLCJhY3RpdmUiLCJoaWRkZW5fZGxnIiwieGlleWlfc2hvd19kbGciLCJfc2VsZiIsInJlbW90ZVVybCIsImh0dHBVcmwiLCJsb2FkZXIiLCJsb2FkIiwidXJsIiwiZXJyIiwidGV4dHVyZSIsIlNwcml0ZUZyYW1lIiwieGlleWlfaGlkZGVuX2RsZyIsInlpbnNpX3Nob3dfZGxnIiwieWluc2lfaGlkZGVuX2RsZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXhCLEVBQ0E7QUFDQTs7O0FBQ0EsSUFBSUMsV0FBVyxHQUFJLElBQUlGLFVBQUosRUFBbkI7QUFFQUcsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUNBO0FBQ0FDLElBQUFBLHNCQUFzQixFQUFDSixFQUFFLENBQUNLO0FBSmxCLEdBSFA7QUFVTEMsRUFBQUEsTUFBTSxFQUFFLGtCQUFZLENBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlILEdBdkNJO0FBd0NMQyxFQUFBQSxVQUFVLEVBQUUsc0JBQVU7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBLFFBQUlDLEtBQUssR0FBRVIsRUFBRSxDQUFDUyxHQUFILENBQU9DLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLE9BQTVCLENBQVg7O0FBQ0EsUUFBR0gsS0FBSCxFQUFTO0FBQ0RULE1BQUFBLFdBQVcsQ0FBQ2EsUUFBWixDQUFxQiw2QkFBckIsRUFBb0Q7QUFBQyxpQkFBUUo7QUFBVCxPQUFwRCxFQUFxRSxVQUFVSyxJQUFWLEVBQWdCO0FBQ2pGLFlBQUlDLEtBQUssR0FBRSxJQUFYLENBRGlGLENBRWpGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsWUFBR0QsSUFBSSxDQUFDRSxJQUFMLElBQVcsQ0FBZCxFQUFnQixDQUNaO0FBQ0gsU0FGRCxNQUVLLENBQ0E7QUFDSjtBQUNSLE9BYkc7QUFlUDtBQUNKLEdBbEZJO0FBb0ZMO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUMsRUFBQUEsS0ExTEssbUJBMExJLENBRVIsQ0E1TEk7QUE4TEw7QUFFQUMsRUFBQUEsUUFoTUssc0JBZ01PO0FBQ1IsU0FBS0MsSUFBTCxDQUFVQyxNQUFWLEdBQWtCLElBQWxCO0FBQ0gsR0FsTUk7QUFtTUxDLEVBQUFBLFVBbk1LLHdCQW1NUztBQUNWLFNBQUtGLElBQUwsQ0FBVUMsTUFBVixHQUFrQixLQUFsQjtBQUNILEdBck1JO0FBdU1MRSxFQUFBQSxjQXZNSyw0QkF1TWE7QUFDZCxRQUFLQyxLQUFLLEdBQUUsSUFBWjs7QUFDQSxRQUFJQyxTQUFTLEdBQUd4QixXQUFXLENBQUN5QixPQUFaLENBQW9CLHFCQUFwQixDQUFoQjtBQUNBeEIsSUFBQUEsRUFBRSxDQUFDeUIsTUFBSCxDQUFVQyxJQUFWLENBQWU7QUFBRUMsTUFBQUEsR0FBRyxFQUFFSjtBQUFQLEtBQWYsRUFBbUMsVUFBVUssR0FBVixFQUFlQyxPQUFmLEVBQXdCO0FBQ3ZEO0FBQ0k7QUFDSlAsTUFBQUEsS0FBSyxDQUFDbEIsc0JBQU4sQ0FBNkJ1QixHQUE3QixHQUFtQyxJQUFJM0IsRUFBRSxDQUFDOEIsV0FBUCxDQUFtQkQsT0FBbkIsQ0FBbkM7QUFDSCxLQUpELEVBSGMsQ0FRZDtBQUNBOztBQUNBLFNBQUtYLElBQUwsQ0FBVUMsTUFBVixHQUFrQixJQUFsQjtBQUNILEdBbE5JO0FBbU5MWSxFQUFBQSxnQkFuTkssOEJBbU5lO0FBQ2hCLFNBQUtiLElBQUwsQ0FBVUMsTUFBVixHQUFrQixLQUFsQjtBQUNILEdBck5JO0FBc05MYSxFQUFBQSxjQXROSyw0QkFzTmE7QUFDZCxRQUFLVixLQUFLLEdBQUUsSUFBWjs7QUFDQSxRQUFJQyxTQUFTLEdBQUd4QixXQUFXLENBQUN5QixPQUFaLENBQW9CLHFCQUFwQixDQUFoQjtBQUNBeEIsSUFBQUEsRUFBRSxDQUFDeUIsTUFBSCxDQUFVQyxJQUFWLENBQWU7QUFBRUMsTUFBQUEsR0FBRyxFQUFFSjtBQUFQLEtBQWYsRUFBbUMsVUFBVUssR0FBVixFQUFlQyxPQUFmLEVBQXdCO0FBQ3ZEO0FBQ0k7QUFDSlAsTUFBQUEsS0FBSyxDQUFDbEIsc0JBQU4sQ0FBNkJ1QixHQUE3QixHQUFtQyxJQUFJM0IsRUFBRSxDQUFDOEIsV0FBUCxDQUFtQkQsT0FBbkIsQ0FBbkM7QUFDSCxLQUpELEVBSGMsQ0FRZDtBQUNBOztBQUNBLFNBQUtYLElBQUwsQ0FBVUMsTUFBVixHQUFrQixJQUFsQjtBQUNILEdBak9JO0FBa09MYyxFQUFBQSxnQkFsT0ssOEJBa09lO0FBQ2hCLFNBQUtmLElBQUwsQ0FBVUMsTUFBVixHQUFrQixLQUFsQjtBQUNIO0FBcE9JLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgSHR0cEhlbHBlciA9IHJlcXVpcmUoXCJodHRwXCIpO1xyXG4vLyB2YXIgZnMgPSByZXF1aXJlKCdmcycpOyAvLyDlvJXlhaVmc+aooeWdl1xyXG4vLyB2YXIgZ2xvYmFsdXNlcmluZm8gPSByZXF1aXJlKFwiR2xvYmFsdXNlckluZm9cIik7XHJcbmxldCBodHRwUmVxdWVzdCA9ICBuZXcgSHR0cEhlbHBlcigpOyAgXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiBcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyByZWdpc3Rlcl9hbGVydDogY2MuTGFiZWwsXHJcbiAgICAgICAgLy8gcmVnaXN0ZXJfbG9naW5fbmFtZTogY2MuRWRpdEJveCxcclxuICAgICAgICAvLyByZWdpc3Rlcl9sb2dpbl9wYXNzd29yZDogY2MuRWRpdEJveCxcclxuICAgICAgICByZWdpc3Rlcl9rbm93c193ZWJ2aWV3OmNjLldlYlZpZXdcclxuICAgIH0sXHJcbiBcclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIHZhciBsb2dpbm5hbWUgPWNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9naW5uYW1lJyk7XHJcbiAgICAgICAgLy8gdmFyIHBhc3N3b3JkID1jYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Bhc3N3b3JkJyk7XHJcbiAgICAgICAgLy8gLy8gY29uc29sZS5sb2cobG9naW5uYW1lKVxyXG4gICAgICAgIC8vIGlmKGxvZ2lubmFtZSl7XHJcbiAgICAgICAgLy8gICAgdGhpcy5yZWdpc3Rlcl9sb2dpbl9uYW1lLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc9bG9naW5uYW1lO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZihsb2dpbm5hbWUpe1xyXG4gICAgICAgIC8vICAgICB0aGlzLnJlZ2lzdGVyX2xvZ2luX3Bhc3N3b3JkLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc9cGFzc3dvcmQ7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIC8vIOaTjeS9nOaWh+acrC0t6K+75Y+W55So5oi35L+h5oGvXHJcbiAgICAgICAgLy8gdGhpcy50b2tlbmxvZ2luKCk7IC8vIOW/q+aNt+eZu+W9lVxyXG4gICAgICAgIC8vIC8vIOi0puWPt+WvhueggeeZu+W9lVxyXG4gICAgICAgIC8vIHRoaXMubG9naW4oKTtcclxuICAgICAgICAvL+WCqOWtmOe8k+WtmFxyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB2YWx1ZSk7XHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XHJcblxyXG4gICAgICAgIC8vIOS/neWtmOacgOmrmOWIhuWIsOacrOWcsFxyXG4gICAgICAgIC8vIGNvbnN0IEtFWV9CRVNUX1NDT1JFID0gXCJiZXN0U2NvcmVcIjtcclxuICAgICAgICAvLyBsZXQgYmVzdFNjb3JlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKEtFWV9CRVNUX1NDT1JFKTtcclxuICAgICAgICAvLyBpZiAoYmVzdFNjb3JlID09PSBcIm51bGxcIiB8fCB0aGlzLnNjb3JlID4gYmVzdFNjb3JlKSB7XHJcbiAgICAgICAgLy8gICAgIGJlc3RTY29yZSA9IHRoaXMuc2NvcmU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShLRVlfQkVTVF9TQ09SRSwgYmVzdFNjb3JlKTtcclxuICAgICAgICBcclxuXHJcbiBcclxuICAgIH0sXHJcbiAgICB0b2tlbmxvZ2luOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vIOiOt+WPluacrOWcsGpzb24gIOS/oeaBr1xyXG4gICAgICAgIC8vIGNjLmxvYWRlci5sb2FkKCBjYy51cmwucmF3KFwicmVzb3VyY2VzL2xvZ2luLmpzb25cIiksZnVuY3Rpb24oZXJyLHJlcyl7ICBcclxuICAgICAgICAvLyBjYy5sb2FkZXIubG9hZFJlcygnbG9naW4uanNvbicsZnVuY3Rpb24oZXJyLHJlcyl7ICAgLy/pu5jorqRyZXNvdXJjZXNcclxuICAgICAgICAvLyAgICAgbGV0IGpzb24gPSByZXMuanNvbjtcclxuICAgICAgICAvLyAgICAgdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAvLyAgICAgICAgICd0b2tlbic6IGpzb24udG9rZW4sXHJcbiAgICAgICAgLy8gICAgIH07XHJcbiAgICAgICAgLy8gICAgIGNjLmxvZyhqc29uLnRva2VuKTsgXHJcbiAgICAgICAgLy8gICAgIHZhciByZXMgPSBodHRwUmVxdWVzdC5odHRwUG9zdCgnL2FwcC9hcGktc2VydmVyL3Rva2VuLWxvZ2luJywgcGFyYW1zICxmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIC8vICAgICAgICAgY2MubG9hZGVyLnJlbGVhc2UoJ3Jlc291cmNlcy9sb2dpbi5qc29uJyk7IC8v6YeK5pS+anNvbiDotYTmupBcclxuICAgICAgICAvLyAgICAgICAgIC8vIGlmKGNjLnN5cy5pc05hdGl2ZSl7ICAvLyAganNiLmZpbGVVdGlsc+S4jeaUr+aMgSB3ZWIgIOivu+WGmVxyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIGpzYi5maWxlVXRpbHMud3JpdGVTdHJpbmdUb0ZpbGUoZGF0YSx0b2tlbilcclxuICAgICAgICAvLyAgICAgICAgIC8vIH1cclxuICAgICAgICAvLyAgICAgICAgIC8vIGNjLmxvZyhkYXRhKTsgXHJcbiAgICAgICAgLy8gICAgICAgICAvLyDmnKrnmbvlvZXlvLnlh7rnmbvlvZVcclxuICAgICAgICAvLyAgICAgICAgIGlmKGRhdGEuY29kZT09MCl7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gdGhpcy5sb2dpbmJveC5ub2RlLmFjdGl2ZSA9IGZhbHNlOyAgLy8g6L+b5bqm6ZqQ6JePXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgdmFyIHRva2VuID1jYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgaWYodG9rZW4pe1xyXG4gICAgICAgICAgICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3QoJy9hcHAvYXBpLXNlcnZlci90b2tlbi1sb2dpbicsIHsndG9rZW4nOnRva2VufSAsZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPXRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9hZGVyLnJlbGVhc2UoJ3Jlc291cmNlcy9sb2dpbi5qc29uJyk7IC8v6YeK5pS+anNvbiDotYTmupBcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZihjYy5zeXMuaXNOYXRpdmUpeyAgLy8gIGpzYi5maWxlVXRpbHPkuI3mlK/mjIEgd2ViICDor7vlhplcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAganNiLmZpbGVVdGlscy53cml0ZVN0cmluZ1RvRmlsZShkYXRhLHRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coZGF0YSk7IFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOacqueZu+W9leW8ueWHuueZu+W9lVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGRhdGEuY29kZT09MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubG9naW5ib3gubm9kZS5hY3RpdmUgPSBmYWxzZTsgIC8vIOi/m+W6pumakOiXj1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5sb2dpbmJveC5ub2RlLmFjdGl2ZSA9IGZhbHNlOyAgLy8g6L+b5bqm6ZqQ6JePXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gbG9naW46IGZ1bmN0aW9uKCl7XHJcbiAgICBcclxuICAgIC8vICAgIHZhciBsb2dpbm5hbWUgPSB0aGlzLnJlZ2lzdGVyX2xvZ2luX25hbWUuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZztcclxuICAgIC8vICAgIHZhciBwYXNzd29yZCA9IHRoaXMucmVnaXN0ZXJfbG9naW5fcGFzc3dvcmQuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZztcclxuICAgIC8vICAgICB2YXIgcGFyYW1zID0ge1xyXG4gICAgLy8gICAgICAgICAnbG9naW5uYW1lJzogbG9naW5uYW1lLFxyXG4gICAgLy8gICAgICAgICAncGFzc3dvcmQnOiBwYXNzd29yZCxcclxuICAgIC8vICAgICAgICAgLy8gJ2xvZ2lubmFtZSc6ICd5aW5jYW4xOTkzJyxcclxuICAgIC8vICAgICAgICAgLy8gJ3Bhc3N3b3JkJzogMTIzNDU2LFxyXG4gICAgLy8gICAgIH07XHJcblxyXG4gICAgLy8gICAgIHZhciBfdGhpcz0gdGhpcztcclxuICAgIC8vICAgICBodHRwUmVxdWVzdC5odHRwUG9zdCgnL2FwcC9hcGktc2VydmVyL2xvZ2luJywgcGFyYW1zICxmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgLy8gICAgICAgICBjYy5sb2coZGF0YSk7IFxyXG4gICAgLy8gICAgICAgICBpZihkYXRhLmNvZGU9PTEpe1xyXG4gICAgLy8gICAgICAgICAgICAgLy8gX3RoaXMucmVnaXN0ZXJfYWxlcnQuY29sb3IgPSAgbmV3IGNjLmNvbG9yKCcjQkRGRjAwJyk7XHJcbiAgICAvLyAgICAgICAgICAgICBfdGhpcy5yZWdpc3Rlcl9hbGVydC5zdHJpbmcgPScnO1xyXG4gICAgLy8gICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGRhdGEuZGF0YS50b2tlbik7XHJcbiAgICAvLyAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvZ2lubmFtZScsIGxvZ2lubmFtZSk7XHJcbiAgICAvLyAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Bhc3N3b3JkJywgcGFzc3dvcmQpO1xyXG4gICAgLy8gICAgICAgICAgICAgX3RoaXMubm9kZS5hY3RpdmUgPWZhbHNlO1xyXG4gICAgLy8gICAgICAgICB9ZWxzZXtcclxuICAgIC8vICAgICAgICAgICAgIF90aGlzLnJlZ2lzdGVyX2FsZXJ0LnN0cmluZyA9J+i0puWPt+WvhueggemUmeivryEnO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIC8v5pON5L2c5paH5pysLS3kv67mlLnnlKjmiLfkv6Hmga9cclxuICAgIC8vICAgICB9KTtcclxuXHJcbiAgICAvLyB9LFxyXG4gICAgLy9cclxuICAgIC8vIGJ0bkNsaWNrMTogZnVuY3Rpb24gKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcclxuICAgIC8vICAgICAvLyAvLyDor7fmsYLnmbvlvZXmjqXlj6NcclxuICAgIC8vICAgICAvLyB2YXIgcGFyYW1zID0ge1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgJ2xvZ2lubmFtZSc6ICd5aW5jYW4xOTkzJyxcclxuICAgIC8vICAgICAvLyAgICAgICAgICdwYXNzd29yZCc6IDEyMzQ1NixcclxuICAgIC8vICAgICAvLyAgICAgICAgICdzZXJ2ZXJpZCc6IDEsXHJcbiAgICAvLyAgICAgLy8gfTtcclxuICAgIC8vICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BhcmFtcycsIEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xyXG4gICAgLy8gICAgIHZhciBwYXJhbXMgPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBhcmFtc1wiKSk7XHJcbiAgICAvLyAgICAgdmFyIHRva2VuID1jYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICBcclxuICAgIC8vICAgICAvLyBjYy5sb2codmFsdWUpOyBcclxuICAgIC8vICAgICAvLyBsZXQgaHR0cFJlcXVlc3QgPSAgbmV3IEh0dHBIZWxwZXIoKTsgIFxyXG4gICAgLy8gICAgIGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCcvYXBwL2FwaS1zZXJ2ZXIvdXNlci1sb2dpbicsIHsndG9rZW4nOnRva2VufSAsZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgIC8vICAgICAgICAgY2MubG9nKGRhdGEpOyBcclxuICAgIC8vICAgICAgICAgaWYoZGF0YS5jb2RlPT0wKXsgLy8g55m75b2V5aSx6LSl77yM5oiW5pys5Zyw5pWw5o2u5aSx5pWIXHJcbiAgICAvLyAgICAgICAgICAgICAvLyDlvLnnqpdcclxuICAgIC8vICAgICAgICAgfWVsc2V7XHJcbiAgICAvLyAgICAgICAgICAgICAvLyDorr7nva7mnI3liqHlmahcclxuICAgIC8vICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2VydmVyJywgSlNPTi5zdHJpbmdpZnkoZGF0YS5kYXRhLnNlcnZlcikpO1xyXG4gICAgLy8gICAgICAgICAgICAgaWYoZGF0YS5jb2RlPT0xKXsvLyDnmbvlvZXmiJDlip/vvIzov5vlhaXmuLjmiI9cclxuICAgIC8vICAgICAgICAgICAgICAgICAvLyBjYy5sb2coZGF0YS5kYXRhLnVzZXJpbmZvKTsgXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyaW5mbycsIEpTT04uc3RyaW5naWZ5KGRhdGEuZGF0YS51c2VyaW5mbykpOyBcclxuICAgIC8vICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2hvbWUvZGF0aW5nJyk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyaW5mbycsIEpTT04uc3RyaW5naWZ5KGRhdGEuZGF0YS51c2VyaW5mbykpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpOyAvL+ivu+WPluaVsOaNrlxyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgaWYoZGF0YS5jb2RlPT0yKXsgLy8g55m75b2V5oiQ5Yqf77yM5pyq5a6a5LmJ6KeS6ImyXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgLy8g6L+b5YWl5a6a5LmJ6KeS6Imy55WM6Z2iICAgICBcclxuICAgIC8vICAgICAgICAgICAgICAgICB2YXIgc2VydmVyID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlcnZlcicpKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAvLyBjYy5sb2coc2VydmVyKTsgXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgLy8g5Yib5bu66KeS6ImyXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdyZWdpc3RlcicpO1xyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgLy8gICAgIC8v6L+Z6YeMIGV2ZW50IOaYr+S4gOS4qiBUb3VjaCBFdmVudCDlr7nosaHvvIzkvaDlj6/ku6XpgJrov4cgZXZlbnQudGFyZ2V0IOWPluWIsOS6i+S7tueahOWPkemAgeiKgueCuVxyXG4gICAgLy8gICAgIC8vIHZhciBub2RlID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgLy8gICAgIC8vIHZhciBidXR0b24gPSBub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgLy8gICAgIC8v6L+Z6YeM55qEIGN1c3RvbUV2ZW50RGF0YSDlj4LmlbDlsLHnrYnkuo7kvaDkuYvliY3orr7nva7nmoQgXCJjbGljazEgdXNlciBkYXRhXCJcclxuICAgIC8vICAgICAvLyBjYy5sb2coXCJub2RlPVwiLCBub2RlLm5hbWUsIFwiIGV2ZW50PVwiLCBldmVudC50eXBlLCBcIiBkYXRhPVwiLCBjdXN0b21FdmVudERhdGEpO1xyXG4gICAgLy8gfSxcclxuXHJcbiAgICAvLyBjYWxsYmFjazogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAvLyAgICAgLy8gY2MubG9nKGRhdGEpXHJcbiAgICAvLyAgICAgLy8gdmFyIHVzZXJDb3VudCA9ICBjYy5maW5kKFwiQ2FudmFzL2dyb3VuZC9lZGl0Ym94X2NvdW50XCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XHJcbiAgICAvLyAgICAgLy8gdmFyIHVzZXJQYXNzd2FyZCA9ICBjYy5maW5kKFwiQ2FudmFzL2dyb3VuZC9lZGl0Ym94X3Bhc3N3YXJkXCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XHJcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2coXCLnlKjmiLfotKblj7fvvJpcIit1c2VyQ291bnQrIFwi55So5oi35a+G56CB77yaXCIrIHVzZXJQYXNzd2FyZCk7XHJcbiAgICAvLyAgICAgLy8gSHR0cEhlbHAubG9naW4odXNlckNvdW50LHVzZXJQYXNzd2FyZCxmdW5jdGlvbihpc1N1Y2Nlc3MsRGF0YSl7XHJcbiAgICAvLyAgICAgLy8gICAgIHZhciBpbmZvID0gRGF0YTtcclxuICAgIC8vICAgICAvLyAgICAgaWYodHJ1ZSA9PSBpc1N1Y2Nlc3Mpe1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJsb2dpbiAgc3VjY2VzcyEhIVwiKTtcclxuICAgIC8vICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGluZm8pO1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8udXNlcm5hbWUgPSBpbmZvLnVzZXJuYW1lO1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8uZ2FtZXBvaW50ID0gaW5mby5nYW1lcG9pbnQ7XHJcbiAgICAvLyAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby5za2V5ID0gaW5mby5za2V5O1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8udXNlcmlkID0gaW5mby51c2VyaWQ7XHJcbiBcclxuICAgIC8vICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLm1vbmV5ID0gaW5mby5tb25leTtcclxuICAgIC8vICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnVzZXJpZCA9IGluZm8udXNlcmlkO1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8ucGFzc3dvcmQgPSBpbmZvLnBhc3N3b3JkO1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8uc2FsdCA9IGluZm8uc2FsdDtcclxuIFxyXG4gICAgLy8gICAgIC8vICAgICAgICAgLy/nmbvlvZXmiJDlip/lkI7liqDovb3lnLDlm77otYTmupBcclxuICAgIC8vICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFwJyk7XHJcbiAgICAvLyAgICAgLy8gICAgIH1lbHNle1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJsb2dpbiAgZmlsZWQhISFcIilcclxuICAgIC8vICAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIC8vIH0pO1xyXG4gICAgLy8gfSxcclxuIFxyXG4gICAgc3RhcnQgKCkge1xyXG4gXHJcbiAgICB9LFxyXG4gXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxuXHJcbiAgICBzaG93X2RsZyAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9dHJ1ZTtcclxuICAgIH0sXHJcbiAgICBoaWRkZW5fZGxnICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID1mYWxzZTtcclxuICAgIH0sXHJcblxyXG4gICAgeGlleWlfc2hvd19kbGcgKCkge1xyXG4gICAgICAgIHZhciAgX3NlbGYgPXRoaXM7XHJcbiAgICAgICAgdmFyIHJlbW90ZVVybCA9IGh0dHBSZXF1ZXN0Lmh0dHBVcmwoXCIvYXBwL2FwaS11c2VyL3hpZXlpXCIpO1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkKHsgdXJsOiByZW1vdGVVcmwgfSwgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkgeyAgXHJcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhfc2VsZilcclxuICAgICAgICAgICAgICAgIC8vIF9zZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTsgXHJcbiAgICAgICAgICAgIF9zZWxmLnJlZ2lzdGVyX2tub3dzX3dlYnZpZXcudXJsID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHRoaXMucmVnaXN0ZXJfa25vd3Nfd2Vidmlldy51cmwgPScvYXBwL2FwaS11c2VyL3hpZXlpJztcclxuICAgICAgICAvLyB0aGlzLnJlZ2lzdGVyX2tub3dzX3dlYnZpZXcubG9hZFVybCgnL2FwcC9hcGktdXNlci94aWV5aScpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPXRydWU7XHJcbiAgICB9LFxyXG4gICAgeGlleWlfaGlkZGVuX2RsZyAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9ZmFsc2U7XHJcbiAgICB9LFxyXG4gICAgeWluc2lfc2hvd19kbGcgKCkge1xyXG4gICAgICAgIHZhciAgX3NlbGYgPXRoaXM7XHJcbiAgICAgICAgdmFyIHJlbW90ZVVybCA9IGh0dHBSZXF1ZXN0Lmh0dHBVcmwoXCIvYXBwL2FwaS11c2VyL3lpbnNpXCIpO1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkKHsgdXJsOiByZW1vdGVVcmwgfSwgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkgeyAgXHJcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhfc2VsZilcclxuICAgICAgICAgICAgICAgIC8vIF9zZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTsgXHJcbiAgICAgICAgICAgIF9zZWxmLnJlZ2lzdGVyX2tub3dzX3dlYnZpZXcudXJsID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHRoaXMucmVnaXN0ZXJfa25vd3Nfd2Vidmlldy51cmwgPScvYXBwL2FwaS11c2VyL3lpbnNpJztcclxuICAgICAgICAvLyB0aGlzLnJlZ2lzdGVyX2tub3dzX3dlYnZpZXcubG9hZFVybCgnL2FwcC9hcGktdXNlci95aW5zaScpO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPXRydWU7XHJcbiAgICB9LFxyXG4gICAgeWluc2lfaGlkZGVuX2RsZyAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9ZmFsc2U7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19