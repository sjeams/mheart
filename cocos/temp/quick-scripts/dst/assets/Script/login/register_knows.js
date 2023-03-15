
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
    //     var res = httpRequest.httpPost('https://www.aheart.cn/app/api-server/token-login', params ,function (data) {
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
      httpRequest.httpPost('https://www.aheart.cn/app/api-server/token-login', {
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
  //     httpRequest.httpPost('https://www.aheart.cn/app/api-server/login', params ,function (data) {
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
  //     httpRequest.httpPost('https://www.aheart.cn/app/api-server/user-login', {'token':token} ,function (data) {
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
    this.register_knows_webview.url = 'https://www.aheart.cn/app/api-user/xieyi';
    this.node.active = true;
  },
  xieyi_hidden_dlg: function xieyi_hidden_dlg() {
    this.node.active = false;
  },
  yinsi_show_dlg: function yinsi_show_dlg() {
    this.register_knows_webview.url = 'https://www.aheart.cn/app/api-user/yinsi';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxccmVnaXN0ZXJfa25vd3MuanMiXSwibmFtZXMiOlsiSHR0cEhlbHBlciIsInJlcXVpcmUiLCJodHRwUmVxdWVzdCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicmVnaXN0ZXJfa25vd3Nfd2VidmlldyIsIldlYlZpZXciLCJvbkxvYWQiLCJ0b2tlbmxvZ2luIiwidG9rZW4iLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaHR0cFBvc3QiLCJkYXRhIiwiX3RoaXMiLCJjb2RlIiwic3RhcnQiLCJzaG93X2RsZyIsIm5vZGUiLCJhY3RpdmUiLCJoaWRkZW5fZGxnIiwieGlleWlfc2hvd19kbGciLCJ1cmwiLCJ4aWV5aV9oaWRkZW5fZGxnIiwieWluc2lfc2hvd19kbGciLCJ5aW5zaV9oaWRkZW5fZGxnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBeEIsRUFDQTtBQUNBOzs7QUFDQSxJQUFJQyxXQUFXLEdBQUksSUFBSUYsVUFBSixFQUFuQjtBQUVBRyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUjtBQUNBO0FBQ0E7QUFDQUMsSUFBQUEsc0JBQXNCLEVBQUNKLEVBQUUsQ0FBQ0s7QUFKbEIsR0FIUDtBQVVMQyxFQUFBQSxNQUFNLEVBQUUsa0JBQVksQ0FDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUgsR0F2Q0k7QUF3Q0xDLEVBQUFBLFVBQVUsRUFBRSxzQkFBVTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0EsUUFBSUMsS0FBSyxHQUFFUixFQUFFLENBQUNTLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsT0FBNUIsQ0FBWDs7QUFDQSxRQUFHSCxLQUFILEVBQVM7QUFDRFQsTUFBQUEsV0FBVyxDQUFDYSxRQUFaLENBQXFCLGtEQUFyQixFQUF5RTtBQUFDLGlCQUFRSjtBQUFULE9BQXpFLEVBQTBGLFVBQVVLLElBQVYsRUFBZ0I7QUFDdEcsWUFBSUMsS0FBSyxHQUFFLElBQVgsQ0FEc0csQ0FFdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxZQUFHRCxJQUFJLENBQUNFLElBQUwsSUFBVyxDQUFkLEVBQWdCLENBQ1o7QUFDSCxTQUZELE1BRUssQ0FDQTtBQUNKO0FBQ1IsT0FiRztBQWVQO0FBQ0osR0FsRkk7QUFvRkw7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQyxFQUFBQSxLQTFMSyxtQkEwTEksQ0FFUixDQTVMSTtBQThMTDtBQUVBQyxFQUFBQSxRQWhNSyxzQkFnTU87QUFDUixTQUFLQyxJQUFMLENBQVVDLE1BQVYsR0FBa0IsSUFBbEI7QUFDSCxHQWxNSTtBQW1NTEMsRUFBQUEsVUFuTUssd0JBbU1TO0FBQ1YsU0FBS0YsSUFBTCxDQUFVQyxNQUFWLEdBQWtCLEtBQWxCO0FBQ0gsR0FyTUk7QUF1TUxFLEVBQUFBLGNBdk1LLDRCQXVNYTtBQUNkLFNBQUtqQixzQkFBTCxDQUE0QmtCLEdBQTVCLEdBQWlDLDBDQUFqQztBQUNBLFNBQUtKLElBQUwsQ0FBVUMsTUFBVixHQUFrQixJQUFsQjtBQUNILEdBMU1JO0FBMk1MSSxFQUFBQSxnQkEzTUssOEJBMk1lO0FBQ2hCLFNBQUtMLElBQUwsQ0FBVUMsTUFBVixHQUFrQixLQUFsQjtBQUNILEdBN01JO0FBOE1MSyxFQUFBQSxjQTlNSyw0QkE4TWE7QUFDZCxTQUFLcEIsc0JBQUwsQ0FBNEJrQixHQUE1QixHQUFpQywwQ0FBakM7QUFDQSxTQUFLSixJQUFMLENBQVVDLE1BQVYsR0FBa0IsSUFBbEI7QUFDSCxHQWpOSTtBQWtOTE0sRUFBQUEsZ0JBbE5LLDhCQWtOZTtBQUNoQixTQUFLUCxJQUFMLENBQVVDLE1BQVYsR0FBa0IsS0FBbEI7QUFDSDtBQXBOSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIEh0dHBIZWxwZXIgPSByZXF1aXJlKFwiaHR0cFwiKTtcclxuLy8gdmFyIGZzID0gcmVxdWlyZSgnZnMnKTsgLy8g5byV5YWlZnPmqKHlnZdcclxuLy8gdmFyIGdsb2JhbHVzZXJpbmZvID0gcmVxdWlyZShcIkdsb2JhbHVzZXJJbmZvXCIpO1xyXG5sZXQgaHR0cFJlcXVlc3QgPSAgbmV3IEh0dHBIZWxwZXIoKTsgIFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gcmVnaXN0ZXJfYWxlcnQ6IGNjLkxhYmVsLFxyXG4gICAgICAgIC8vIHJlZ2lzdGVyX2xvZ2luX25hbWU6IGNjLkVkaXRCb3gsXHJcbiAgICAgICAgLy8gcmVnaXN0ZXJfbG9naW5fcGFzc3dvcmQ6IGNjLkVkaXRCb3gsXHJcbiAgICAgICAgcmVnaXN0ZXJfa25vd3Nfd2VidmlldzpjYy5XZWJWaWV3XHJcbiAgICB9LFxyXG4gXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyB2YXIgbG9naW5uYW1lID1jYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvZ2lubmFtZScpO1xyXG4gICAgICAgIC8vIHZhciBwYXNzd29yZCA9Y2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwYXNzd29yZCcpO1xyXG4gICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKGxvZ2lubmFtZSlcclxuICAgICAgICAvLyBpZihsb2dpbm5hbWUpe1xyXG4gICAgICAgIC8vICAgIHRoaXMucmVnaXN0ZXJfbG9naW5fbmFtZS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nPWxvZ2lubmFtZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gaWYobG9naW5uYW1lKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5yZWdpc3Rlcl9sb2dpbl9wYXNzd29yZC5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nPXBhc3N3b3JkO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyAvLyDmk43kvZzmlofmnKwtLeivu+WPlueUqOaIt+S/oeaBr1xyXG4gICAgICAgIC8vIHRoaXMudG9rZW5sb2dpbigpOyAvLyDlv6vmjbfnmbvlvZVcclxuICAgICAgICAvLyAvLyDotKblj7flr4bnoIHnmbvlvZVcclxuICAgICAgICAvLyB0aGlzLmxvZ2luKCk7XHJcbiAgICAgICAgLy/lgqjlrZjnvJPlrZhcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdmFsdWUpO1xyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG5cclxuICAgICAgICAvLyDkv53lrZjmnIDpq5jliIbliLDmnKzlnLBcclxuICAgICAgICAvLyBjb25zdCBLRVlfQkVTVF9TQ09SRSA9IFwiYmVzdFNjb3JlXCI7XHJcbiAgICAgICAgLy8gbGV0IGJlc3RTY29yZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShLRVlfQkVTVF9TQ09SRSk7XHJcbiAgICAgICAgLy8gaWYgKGJlc3RTY29yZSA9PT0gXCJudWxsXCIgfHwgdGhpcy5zY29yZSA+IGJlc3RTY29yZSkge1xyXG4gICAgICAgIC8vICAgICBiZXN0U2NvcmUgPSB0aGlzLnNjb3JlO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oS0VZX0JFU1RfU0NPUkUsIGJlc3RTY29yZSk7XHJcbiAgICAgICAgXHJcblxyXG4gXHJcbiAgICB9LFxyXG4gICAgdG9rZW5sb2dpbjogZnVuY3Rpb24oKXtcclxuICAgICAgICAvLyDojrflj5bmnKzlnLBqc29uICDkv6Hmga9cclxuICAgICAgICAvLyBjYy5sb2FkZXIubG9hZCggY2MudXJsLnJhdyhcInJlc291cmNlcy9sb2dpbi5qc29uXCIpLGZ1bmN0aW9uKGVycixyZXMpeyAgXHJcbiAgICAgICAgLy8gY2MubG9hZGVyLmxvYWRSZXMoJ2xvZ2luLmpzb24nLGZ1bmN0aW9uKGVycixyZXMpeyAgIC8v6buY6K6kcmVzb3VyY2VzXHJcbiAgICAgICAgLy8gICAgIGxldCBqc29uID0gcmVzLmpzb247XHJcbiAgICAgICAgLy8gICAgIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgICAgLy8gICAgICAgICAndG9rZW4nOiBqc29uLnRva2VuLFxyXG4gICAgICAgIC8vICAgICB9O1xyXG4gICAgICAgIC8vICAgICBjYy5sb2coanNvbi50b2tlbik7IFxyXG4gICAgICAgIC8vICAgICB2YXIgcmVzID0gaHR0cFJlcXVlc3QuaHR0cFBvc3QoJ2h0dHBzOi8vd3d3LmFoZWFydC5jbi9hcHAvYXBpLXNlcnZlci90b2tlbi1sb2dpbicsIHBhcmFtcyAsZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAvLyAgICAgICAgIGNjLmxvYWRlci5yZWxlYXNlKCdyZXNvdXJjZXMvbG9naW4uanNvbicpOyAvL+mHiuaUvmpzb24g6LWE5rqQXHJcbiAgICAgICAgLy8gICAgICAgICAvLyBpZihjYy5zeXMuaXNOYXRpdmUpeyAgLy8gIGpzYi5maWxlVXRpbHPkuI3mlK/mjIEgd2ViICDor7vlhplcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICBqc2IuZmlsZVV0aWxzLndyaXRlU3RyaW5nVG9GaWxlKGRhdGEsdG9rZW4pXHJcbiAgICAgICAgLy8gICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gICAgICAgICAvLyBjYy5sb2coZGF0YSk7IFxyXG4gICAgICAgIC8vICAgICAgICAgLy8g5pyq55m75b2V5by55Ye655m75b2VXHJcbiAgICAgICAgLy8gICAgICAgICBpZihkYXRhLmNvZGU9PTApe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIHRoaXMubG9naW5ib3gubm9kZS5hY3RpdmUgPSBmYWxzZTsgIC8vIOi/m+W6pumakOiXj1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIHZhciB0b2tlbiA9Y2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgIGlmKHRva2VuKXtcclxuICAgICAgICAgICAgICAgIGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCdodHRwczovL3d3dy5haGVhcnQuY24vYXBwL2FwaS1zZXJ2ZXIvdG9rZW4tbG9naW4nLCB7J3Rva2VuJzp0b2tlbn0gLGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIF90aGlzID10aGlzO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvYWRlci5yZWxlYXNlKCdyZXNvdXJjZXMvbG9naW4uanNvbicpOyAvL+mHiuaUvmpzb24g6LWE5rqQXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYoY2Muc3lzLmlzTmF0aXZlKXsgIC8vICBqc2IuZmlsZVV0aWxz5LiN5pSv5oyBIHdlYiAg6K+75YaZXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGpzYi5maWxlVXRpbHMud3JpdGVTdHJpbmdUb0ZpbGUoZGF0YSx0b2tlbilcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKGRhdGEpOyBcclxuICAgICAgICAgICAgICAgICAgICAvLyDmnKrnmbvlvZXlvLnlh7rnmbvlvZVcclxuICAgICAgICAgICAgICAgICAgICBpZihkYXRhLmNvZGU9PTApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmxvZ2luYm94Lm5vZGUuYWN0aXZlID0gZmFsc2U7ICAvLyDov5vluqbpmpDol49cclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubG9naW5ib3gubm9kZS5hY3RpdmUgPSBmYWxzZTsgIC8vIOi/m+W6pumakOiXj1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0gXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGxvZ2luOiBmdW5jdGlvbigpe1xyXG4gICAgXHJcbiAgICAvLyAgICB2YXIgbG9naW5uYW1lID0gdGhpcy5yZWdpc3Rlcl9sb2dpbl9uYW1lLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XHJcbiAgICAvLyAgICB2YXIgcGFzc3dvcmQgPSB0aGlzLnJlZ2lzdGVyX2xvZ2luX3Bhc3N3b3JkLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XHJcbiAgICAvLyAgICAgdmFyIHBhcmFtcyA9IHtcclxuICAgIC8vICAgICAgICAgJ2xvZ2lubmFtZSc6IGxvZ2lubmFtZSxcclxuICAgIC8vICAgICAgICAgJ3Bhc3N3b3JkJzogcGFzc3dvcmQsXHJcbiAgICAvLyAgICAgICAgIC8vICdsb2dpbm5hbWUnOiAneWluY2FuMTk5MycsXHJcbiAgICAvLyAgICAgICAgIC8vICdwYXNzd29yZCc6IDEyMzQ1NixcclxuICAgIC8vICAgICB9O1xyXG5cclxuICAgIC8vICAgICB2YXIgX3RoaXM9IHRoaXM7XHJcbiAgICAvLyAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3QoJ2h0dHBzOi8vd3d3LmFoZWFydC5jbi9hcHAvYXBpLXNlcnZlci9sb2dpbicsIHBhcmFtcyAsZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgIC8vICAgICAgICAgY2MubG9nKGRhdGEpOyBcclxuICAgIC8vICAgICAgICAgaWYoZGF0YS5jb2RlPT0xKXtcclxuICAgIC8vICAgICAgICAgICAgIC8vIF90aGlzLnJlZ2lzdGVyX2FsZXJ0LmNvbG9yID0gIG5ldyBjYy5jb2xvcignI0JERkYwMCcpO1xyXG4gICAgLy8gICAgICAgICAgICAgX3RoaXMucmVnaXN0ZXJfYWxlcnQuc3RyaW5nID0nJztcclxuICAgIC8vICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBkYXRhLmRhdGEudG9rZW4pO1xyXG4gICAgLy8gICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2dpbm5hbWUnLCBsb2dpbm5hbWUpO1xyXG4gICAgLy8gICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwYXNzd29yZCcsIHBhc3N3b3JkKTtcclxuICAgIC8vICAgICAgICAgICAgIF90aGlzLm5vZGUuYWN0aXZlID1mYWxzZTtcclxuICAgIC8vICAgICAgICAgfWVsc2V7XHJcbiAgICAvLyAgICAgICAgICAgICBfdGhpcy5yZWdpc3Rlcl9hbGVydC5zdHJpbmcgPSfotKblj7flr4bnoIHplJnor68hJztcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAvL+aTjeS9nOaWh+acrC0t5L+u5pS555So5oi35L+h5oGvXHJcbiAgICAvLyAgICAgfSk7XHJcblxyXG4gICAgLy8gfSxcclxuICAgIC8vXHJcbiAgICAvLyBidG5DbGljazE6IGZ1bmN0aW9uIChldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XHJcbiAgICAvLyAgICAgLy8gLy8g6K+35rGC55m75b2V5o6l5Y+jXHJcbiAgICAvLyAgICAgLy8gdmFyIHBhcmFtcyA9IHtcclxuICAgIC8vICAgICAvLyAgICAgICAgICdsb2dpbm5hbWUnOiAneWluY2FuMTk5MycsXHJcbiAgICAvLyAgICAgLy8gICAgICAgICAncGFzc3dvcmQnOiAxMjM0NTYsXHJcbiAgICAvLyAgICAgLy8gICAgICAgICAnc2VydmVyaWQnOiAxLFxyXG4gICAgLy8gICAgIC8vIH07XHJcbiAgICAvLyAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwYXJhbXMnLCBKU09OLnN0cmluZ2lmeShwYXJhbXMpKTtcclxuICAgIC8vICAgICB2YXIgcGFyYW1zID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwYXJhbXNcIikpO1xyXG4gICAgLy8gICAgIHZhciB0b2tlbiA9Y2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgXHJcbiAgICAvLyAgICAgLy8gY2MubG9nKHZhbHVlKTsgXHJcbiAgICAvLyAgICAgLy8gbGV0IGh0dHBSZXF1ZXN0ID0gIG5ldyBIdHRwSGVscGVyKCk7ICBcclxuICAgIC8vICAgICBodHRwUmVxdWVzdC5odHRwUG9zdCgnaHR0cHM6Ly93d3cuYWhlYXJ0LmNuL2FwcC9hcGktc2VydmVyL3VzZXItbG9naW4nLCB7J3Rva2VuJzp0b2tlbn0gLGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAvLyAgICAgICAgIGNjLmxvZyhkYXRhKTsgXHJcbiAgICAvLyAgICAgICAgIGlmKGRhdGEuY29kZT09MCl7IC8vIOeZu+W9leWksei0pe+8jOaIluacrOWcsOaVsOaNruWkseaViFxyXG4gICAgLy8gICAgICAgICAgICAgLy8g5by556qXXHJcbiAgICAvLyAgICAgICAgIH1lbHNle1xyXG4gICAgLy8gICAgICAgICAgICAgLy8g6K6+572u5pyN5Yqh5ZmoXHJcbiAgICAvLyAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlcnZlcicsIEpTT04uc3RyaW5naWZ5KGRhdGEuZGF0YS5zZXJ2ZXIpKTtcclxuICAgIC8vICAgICAgICAgICAgIGlmKGRhdGEuY29kZT09MSl7Ly8g55m75b2V5oiQ5Yqf77yM6L+b5YWl5ri45oiPXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgLy8gY2MubG9nKGRhdGEuZGF0YS51c2VyaW5mbyk7IFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcmluZm8nLCBKU09OLnN0cmluZ2lmeShkYXRhLmRhdGEudXNlcmluZm8pKTsgXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdob21lL2RhdGluZycpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcmluZm8nLCBKU09OLnN0cmluZ2lmeShkYXRhLmRhdGEudXNlcmluZm8pKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTsgLy/or7vlj5bmlbDmja5cclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIGlmKGRhdGEuY29kZT09Mil7IC8vIOeZu+W9leaIkOWKn++8jOacquWumuS5ieinkuiJslxyXG4gICAgLy8gICAgICAgICAgICAgICAgIC8vIOi/m+WFpeWumuS5ieinkuiJsueVjOmdoiAgICAgXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdmFyIHNlcnZlciA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXJ2ZXInKSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgLy8gY2MubG9nKHNlcnZlcik7IFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIC8vIOWIm+W7uuinkuiJslxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgncmVnaXN0ZXInKTtcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICB9KTtcclxuICAgICAgICBcclxuICAgIC8vICAgICAvL+i/memHjCBldmVudCDmmK/kuIDkuKogVG91Y2ggRXZlbnQg5a+56LGh77yM5L2g5Y+v5Lul6YCa6L+HIGV2ZW50LnRhcmdldCDlj5bliLDkuovku7bnmoTlj5HpgIHoioLngrlcclxuICAgIC8vICAgICAvLyB2YXIgbm9kZSA9IGV2ZW50LnRhcmdldDtcclxuICAgIC8vICAgICAvLyB2YXIgYnV0dG9uID0gbm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgIC8vICAgICAvL+i/memHjOeahCBjdXN0b21FdmVudERhdGEg5Y+C5pWw5bCx562J5LqO5L2g5LmL5YmN6K6+572u55qEIFwiY2xpY2sxIHVzZXIgZGF0YVwiXHJcbiAgICAvLyAgICAgLy8gY2MubG9nKFwibm9kZT1cIiwgbm9kZS5uYW1lLCBcIiBldmVudD1cIiwgZXZlbnQudHlwZSwgXCIgZGF0YT1cIiwgY3VzdG9tRXZlbnREYXRhKTtcclxuICAgIC8vIH0sXHJcblxyXG4gICAgLy8gY2FsbGJhY2s6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgLy8gICAgIC8vIGNjLmxvZyhkYXRhKVxyXG4gICAgLy8gICAgIC8vIHZhciB1c2VyQ291bnQgPSAgY2MuZmluZChcIkNhbnZhcy9ncm91bmQvZWRpdGJveF9jb3VudFwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xyXG4gICAgLy8gICAgIC8vIHZhciB1c2VyUGFzc3dhcmQgPSAgY2MuZmluZChcIkNhbnZhcy9ncm91bmQvZWRpdGJveF9wYXNzd2FyZFwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xyXG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKFwi55So5oi36LSm5Y+377yaXCIrdXNlckNvdW50KyBcIueUqOaIt+Wvhuegge+8mlwiKyB1c2VyUGFzc3dhcmQpO1xyXG4gICAgLy8gICAgIC8vIEh0dHBIZWxwLmxvZ2luKHVzZXJDb3VudCx1c2VyUGFzc3dhcmQsZnVuY3Rpb24oaXNTdWNjZXNzLERhdGEpe1xyXG4gICAgLy8gICAgIC8vICAgICB2YXIgaW5mbyA9IERhdGE7XHJcbiAgICAvLyAgICAgLy8gICAgIGlmKHRydWUgPT0gaXNTdWNjZXNzKXtcclxuICAgIC8vICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwibG9naW4gIHN1Y2Nlc3MhISFcIik7XHJcbiAgICAvLyAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhpbmZvKTtcclxuICAgIC8vICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnVzZXJuYW1lID0gaW5mby51c2VybmFtZTtcclxuICAgIC8vICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLmdhbWVwb2ludCA9IGluZm8uZ2FtZXBvaW50O1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8uc2tleSA9IGluZm8uc2tleTtcclxuICAgIC8vICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnVzZXJpZCA9IGluZm8udXNlcmlkO1xyXG4gXHJcbiAgICAvLyAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby5tb25leSA9IGluZm8ubW9uZXk7XHJcbiAgICAvLyAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby51c2VyaWQgPSBpbmZvLnVzZXJpZDtcclxuICAgIC8vICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnBhc3N3b3JkID0gaW5mby5wYXNzd29yZDtcclxuICAgIC8vICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnNhbHQgPSBpbmZvLnNhbHQ7XHJcbiBcclxuICAgIC8vICAgICAvLyAgICAgICAgIC8v55m75b2V5oiQ5Yqf5ZCO5Yqg6L295Zyw5Zu+6LWE5rqQXHJcbiAgICAvLyAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21hcCcpO1xyXG4gICAgLy8gICAgIC8vICAgICB9ZWxzZXtcclxuICAgIC8vICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwibG9naW4gIGZpbGVkISEhXCIpXHJcbiAgICAvLyAgICAgLy8gICAgIH1cclxuICAgIC8vICAgICAvLyB9KTtcclxuICAgIC8vIH0sXHJcbiBcclxuICAgIHN0YXJ0ICgpIHtcclxuIFxyXG4gICAgfSxcclxuIFxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcblxyXG4gICAgc2hvd19kbGcgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPXRydWU7XHJcbiAgICB9LFxyXG4gICAgaGlkZGVuX2RsZyAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9ZmFsc2U7XHJcbiAgICB9LFxyXG5cclxuICAgIHhpZXlpX3Nob3dfZGxnICgpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyX2tub3dzX3dlYnZpZXcudXJsID0naHR0cHM6Ly93d3cuYWhlYXJ0LmNuL2FwcC9hcGktdXNlci94aWV5aSc7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9dHJ1ZTtcclxuICAgIH0sXHJcbiAgICB4aWV5aV9oaWRkZW5fZGxnICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID1mYWxzZTtcclxuICAgIH0sXHJcbiAgICB5aW5zaV9zaG93X2RsZyAoKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlcl9rbm93c193ZWJ2aWV3LnVybCA9J2h0dHBzOi8vd3d3LmFoZWFydC5jbi9hcHAvYXBpLXVzZXIveWluc2knO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPXRydWU7XHJcbiAgICB9LFxyXG4gICAgeWluc2lfaGlkZGVuX2RsZyAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9ZmFsc2U7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19