
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
    this.register_knows_webview.url = 'https://www.aheart.cn/app/api-user/xieyi'; // this.register_knows_webview.loadUrl('https://www.aheart.cn/app/api-user/xieyi');

    this.node.active = true;
  },
  xieyi_hidden_dlg: function xieyi_hidden_dlg() {
    this.node.active = false;
  },
  yinsi_show_dlg: function yinsi_show_dlg() {
    this.register_knows_webview.url = 'https://www.aheart.cn/app/api-user/yinsi'; // this.register_knows_webview.loadUrl('https://www.aheart.cn/app/api-user/yinsi');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxccmVnaXN0ZXJfa25vd3MuanMiXSwibmFtZXMiOlsiSHR0cEhlbHBlciIsInJlcXVpcmUiLCJodHRwUmVxdWVzdCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicmVnaXN0ZXJfa25vd3Nfd2VidmlldyIsIldlYlZpZXciLCJvbkxvYWQiLCJ0b2tlbmxvZ2luIiwidG9rZW4iLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaHR0cFBvc3QiLCJkYXRhIiwiX3RoaXMiLCJjb2RlIiwic3RhcnQiLCJzaG93X2RsZyIsIm5vZGUiLCJhY3RpdmUiLCJoaWRkZW5fZGxnIiwieGlleWlfc2hvd19kbGciLCJ1cmwiLCJ4aWV5aV9oaWRkZW5fZGxnIiwieWluc2lfc2hvd19kbGciLCJ5aW5zaV9oaWRkZW5fZGxnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBeEIsRUFDQTtBQUNBOzs7QUFDQSxJQUFJQyxXQUFXLEdBQUksSUFBSUYsVUFBSixFQUFuQjtBQUVBRyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUjtBQUNBO0FBQ0E7QUFDQUMsSUFBQUEsc0JBQXNCLEVBQUNKLEVBQUUsQ0FBQ0s7QUFKbEIsR0FIUDtBQVVMQyxFQUFBQSxNQUFNLEVBQUUsa0JBQVksQ0FDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUgsR0F2Q0k7QUF3Q0xDLEVBQUFBLFVBQVUsRUFBRSxzQkFBVTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0EsUUFBSUMsS0FBSyxHQUFFUixFQUFFLENBQUNTLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsT0FBNUIsQ0FBWDs7QUFDQSxRQUFHSCxLQUFILEVBQVM7QUFDRFQsTUFBQUEsV0FBVyxDQUFDYSxRQUFaLENBQXFCLGtEQUFyQixFQUF5RTtBQUFDLGlCQUFRSjtBQUFULE9BQXpFLEVBQTBGLFVBQVVLLElBQVYsRUFBZ0I7QUFDdEcsWUFBSUMsS0FBSyxHQUFFLElBQVgsQ0FEc0csQ0FFdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxZQUFHRCxJQUFJLENBQUNFLElBQUwsSUFBVyxDQUFkLEVBQWdCLENBQ1o7QUFDSCxTQUZELE1BRUssQ0FDQTtBQUNKO0FBQ1IsT0FiRztBQWVQO0FBQ0osR0FsRkk7QUFvRkw7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQyxFQUFBQSxLQTFMSyxtQkEwTEksQ0FFUixDQTVMSTtBQThMTDtBQUVBQyxFQUFBQSxRQWhNSyxzQkFnTU87QUFDUixTQUFLQyxJQUFMLENBQVVDLE1BQVYsR0FBa0IsSUFBbEI7QUFDSCxHQWxNSTtBQW1NTEMsRUFBQUEsVUFuTUssd0JBbU1TO0FBQ1YsU0FBS0YsSUFBTCxDQUFVQyxNQUFWLEdBQWtCLEtBQWxCO0FBQ0gsR0FyTUk7QUF1TUxFLEVBQUFBLGNBdk1LLDRCQXVNYTtBQUNkLFNBQUtqQixzQkFBTCxDQUE0QmtCLEdBQTVCLEdBQWlDLDBDQUFqQyxDQURjLENBRWQ7O0FBQ0EsU0FBS0osSUFBTCxDQUFVQyxNQUFWLEdBQWtCLElBQWxCO0FBQ0gsR0EzTUk7QUE0TUxJLEVBQUFBLGdCQTVNSyw4QkE0TWU7QUFDaEIsU0FBS0wsSUFBTCxDQUFVQyxNQUFWLEdBQWtCLEtBQWxCO0FBQ0gsR0E5TUk7QUErTUxLLEVBQUFBLGNBL01LLDRCQStNYTtBQUNkLFNBQUtwQixzQkFBTCxDQUE0QmtCLEdBQTVCLEdBQWlDLDBDQUFqQyxDQURjLENBRWQ7O0FBQ0EsU0FBS0osSUFBTCxDQUFVQyxNQUFWLEdBQWtCLElBQWxCO0FBQ0gsR0FuTkk7QUFvTkxNLEVBQUFBLGdCQXBOSyw4QkFvTmU7QUFDaEIsU0FBS1AsSUFBTCxDQUFVQyxNQUFWLEdBQWtCLEtBQWxCO0FBQ0g7QUF0TkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBIdHRwSGVscGVyID0gcmVxdWlyZShcImh0dHBcIik7XHJcbi8vIHZhciBmcyA9IHJlcXVpcmUoJ2ZzJyk7IC8vIOW8leWFpWZz5qih5Z2XXHJcbi8vIHZhciBnbG9iYWx1c2VyaW5mbyA9IHJlcXVpcmUoXCJHbG9iYWx1c2VySW5mb1wiKTtcclxubGV0IGh0dHBSZXF1ZXN0ID0gIG5ldyBIdHRwSGVscGVyKCk7ICBcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuIFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIHJlZ2lzdGVyX2FsZXJ0OiBjYy5MYWJlbCxcclxuICAgICAgICAvLyByZWdpc3Rlcl9sb2dpbl9uYW1lOiBjYy5FZGl0Qm94LFxyXG4gICAgICAgIC8vIHJlZ2lzdGVyX2xvZ2luX3Bhc3N3b3JkOiBjYy5FZGl0Qm94LFxyXG4gICAgICAgIHJlZ2lzdGVyX2tub3dzX3dlYnZpZXc6Y2MuV2ViVmlld1xyXG4gICAgfSxcclxuIFxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gdmFyIGxvZ2lubmFtZSA9Y2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2dpbm5hbWUnKTtcclxuICAgICAgICAvLyB2YXIgcGFzc3dvcmQgPWNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGFzc3dvcmQnKTtcclxuICAgICAgICAvLyAvLyBjb25zb2xlLmxvZyhsb2dpbm5hbWUpXHJcbiAgICAgICAgLy8gaWYobG9naW5uYW1lKXtcclxuICAgICAgICAvLyAgICB0aGlzLnJlZ2lzdGVyX2xvZ2luX25hbWUuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZz1sb2dpbm5hbWU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGlmKGxvZ2lubmFtZSl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucmVnaXN0ZXJfbG9naW5fcGFzc3dvcmQuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZz1wYXNzd29yZDtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gLy8g5pON5L2c5paH5pysLS3or7vlj5bnlKjmiLfkv6Hmga9cclxuICAgICAgICAvLyB0aGlzLnRva2VubG9naW4oKTsgLy8g5b+r5o2355m75b2VXHJcbiAgICAgICAgLy8gLy8g6LSm5Y+35a+G56CB55m75b2VXHJcbiAgICAgICAgLy8gdGhpcy5sb2dpbigpO1xyXG4gICAgICAgIC8v5YKo5a2Y57yT5a2YXHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHZhbHVlKTtcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuXHJcbiAgICAgICAgLy8g5L+d5a2Y5pyA6auY5YiG5Yiw5pys5ZywXHJcbiAgICAgICAgLy8gY29uc3QgS0VZX0JFU1RfU0NPUkUgPSBcImJlc3RTY29yZVwiO1xyXG4gICAgICAgIC8vIGxldCBiZXN0U2NvcmUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oS0VZX0JFU1RfU0NPUkUpO1xyXG4gICAgICAgIC8vIGlmIChiZXN0U2NvcmUgPT09IFwibnVsbFwiIHx8IHRoaXMuc2NvcmUgPiBiZXN0U2NvcmUpIHtcclxuICAgICAgICAvLyAgICAgYmVzdFNjb3JlID0gdGhpcy5zY29yZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKEtFWV9CRVNUX1NDT1JFLCBiZXN0U2NvcmUpO1xyXG4gICAgICAgIFxyXG5cclxuIFxyXG4gICAgfSxcclxuICAgIHRva2VubG9naW46IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy8g6I635Y+W5pys5ZywanNvbiAg5L+h5oGvXHJcbiAgICAgICAgLy8gY2MubG9hZGVyLmxvYWQoIGNjLnVybC5yYXcoXCJyZXNvdXJjZXMvbG9naW4uanNvblwiKSxmdW5jdGlvbihlcnIscmVzKXsgIFxyXG4gICAgICAgIC8vIGNjLmxvYWRlci5sb2FkUmVzKCdsb2dpbi5qc29uJyxmdW5jdGlvbihlcnIscmVzKXsgICAvL+m7mOiupHJlc291cmNlc1xyXG4gICAgICAgIC8vICAgICBsZXQganNvbiA9IHJlcy5qc29uO1xyXG4gICAgICAgIC8vICAgICB2YXIgcGFyYW1zID0ge1xyXG4gICAgICAgIC8vICAgICAgICAgJ3Rva2VuJzoganNvbi50b2tlbixcclxuICAgICAgICAvLyAgICAgfTtcclxuICAgICAgICAvLyAgICAgY2MubG9nKGpzb24udG9rZW4pOyBcclxuICAgICAgICAvLyAgICAgdmFyIHJlcyA9IGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCdodHRwczovL3d3dy5haGVhcnQuY24vYXBwL2FwaS1zZXJ2ZXIvdG9rZW4tbG9naW4nLCBwYXJhbXMgLGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBjYy5sb2FkZXIucmVsZWFzZSgncmVzb3VyY2VzL2xvZ2luLmpzb24nKTsgLy/ph4rmlL5qc29uIOi1hOa6kFxyXG4gICAgICAgIC8vICAgICAgICAgLy8gaWYoY2Muc3lzLmlzTmF0aXZlKXsgIC8vICBqc2IuZmlsZVV0aWxz5LiN5pSv5oyBIHdlYiAg6K+75YaZXHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAganNiLmZpbGVVdGlscy53cml0ZVN0cmluZ1RvRmlsZShkYXRhLHRva2VuKVxyXG4gICAgICAgIC8vICAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vICAgICAgICAgLy8gY2MubG9nKGRhdGEpOyBcclxuICAgICAgICAvLyAgICAgICAgIC8vIOacqueZu+W9leW8ueWHuueZu+W9lVxyXG4gICAgICAgIC8vICAgICAgICAgaWYoZGF0YS5jb2RlPT0wKXtcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyB0aGlzLmxvZ2luYm94Lm5vZGUuYWN0aXZlID0gZmFsc2U7ICAvLyDov5vluqbpmpDol49cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICB2YXIgdG9rZW4gPWNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgICAgICBpZih0b2tlbil7XHJcbiAgICAgICAgICAgICAgICBodHRwUmVxdWVzdC5odHRwUG9zdCgnaHR0cHM6Ly93d3cuYWhlYXJ0LmNuL2FwcC9hcGktc2VydmVyL3Rva2VuLWxvZ2luJywgeyd0b2tlbic6dG9rZW59ICxmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9dGhpcztcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2FkZXIucmVsZWFzZSgncmVzb3VyY2VzL2xvZ2luLmpzb24nKTsgLy/ph4rmlL5qc29uIOi1hOa6kFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmKGNjLnN5cy5pc05hdGl2ZSl7ICAvLyAganNiLmZpbGVVdGlsc+S4jeaUr+aMgSB3ZWIgIOivu+WGmVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBqc2IuZmlsZVV0aWxzLndyaXRlU3RyaW5nVG9GaWxlKGRhdGEsdG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhkYXRhKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5pyq55m75b2V5by55Ye655m75b2VXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5jb2RlPT0wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5sb2dpbmJveC5ub2RlLmFjdGl2ZSA9IGZhbHNlOyAgLy8g6L+b5bqm6ZqQ6JePXHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmxvZ2luYm94Lm5vZGUuYWN0aXZlID0gZmFsc2U7ICAvLyDov5vluqbpmpDol49cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9IFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBsb2dpbjogZnVuY3Rpb24oKXtcclxuICAgIFxyXG4gICAgLy8gICAgdmFyIGxvZ2lubmFtZSA9IHRoaXMucmVnaXN0ZXJfbG9naW5fbmFtZS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xyXG4gICAgLy8gICAgdmFyIHBhc3N3b3JkID0gdGhpcy5yZWdpc3Rlcl9sb2dpbl9wYXNzd29yZC5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xyXG4gICAgLy8gICAgIHZhciBwYXJhbXMgPSB7XHJcbiAgICAvLyAgICAgICAgICdsb2dpbm5hbWUnOiBsb2dpbm5hbWUsXHJcbiAgICAvLyAgICAgICAgICdwYXNzd29yZCc6IHBhc3N3b3JkLFxyXG4gICAgLy8gICAgICAgICAvLyAnbG9naW5uYW1lJzogJ3lpbmNhbjE5OTMnLFxyXG4gICAgLy8gICAgICAgICAvLyAncGFzc3dvcmQnOiAxMjM0NTYsXHJcbiAgICAvLyAgICAgfTtcclxuXHJcbiAgICAvLyAgICAgdmFyIF90aGlzPSB0aGlzO1xyXG4gICAgLy8gICAgIGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCdodHRwczovL3d3dy5haGVhcnQuY24vYXBwL2FwaS1zZXJ2ZXIvbG9naW4nLCBwYXJhbXMgLGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAvLyAgICAgICAgIGNjLmxvZyhkYXRhKTsgXHJcbiAgICAvLyAgICAgICAgIGlmKGRhdGEuY29kZT09MSl7XHJcbiAgICAvLyAgICAgICAgICAgICAvLyBfdGhpcy5yZWdpc3Rlcl9hbGVydC5jb2xvciA9ICBuZXcgY2MuY29sb3IoJyNCREZGMDAnKTtcclxuICAgIC8vICAgICAgICAgICAgIF90aGlzLnJlZ2lzdGVyX2FsZXJ0LnN0cmluZyA9Jyc7XHJcbiAgICAvLyAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgZGF0YS5kYXRhLnRva2VuKTtcclxuICAgIC8vICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9naW5uYW1lJywgbG9naW5uYW1lKTtcclxuICAgIC8vICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGFzc3dvcmQnLCBwYXNzd29yZCk7XHJcbiAgICAvLyAgICAgICAgICAgICBfdGhpcy5ub2RlLmFjdGl2ZSA9ZmFsc2U7XHJcbiAgICAvLyAgICAgICAgIH1lbHNle1xyXG4gICAgLy8gICAgICAgICAgICAgX3RoaXMucmVnaXN0ZXJfYWxlcnQuc3RyaW5nID0n6LSm5Y+35a+G56CB6ZSZ6K+vISc7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgLy/mk43kvZzmlofmnKwtLeS/ruaUueeUqOaIt+S/oeaBr1xyXG4gICAgLy8gICAgIH0pO1xyXG5cclxuICAgIC8vIH0sXHJcbiAgICAvL1xyXG4gICAgLy8gYnRuQ2xpY2sxOiBmdW5jdGlvbiAoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xyXG4gICAgLy8gICAgIC8vIC8vIOivt+axgueZu+W9leaOpeWPo1xyXG4gICAgLy8gICAgIC8vIHZhciBwYXJhbXMgPSB7XHJcbiAgICAvLyAgICAgLy8gICAgICAgICAnbG9naW5uYW1lJzogJ3lpbmNhbjE5OTMnLFxyXG4gICAgLy8gICAgIC8vICAgICAgICAgJ3Bhc3N3b3JkJzogMTIzNDU2LFxyXG4gICAgLy8gICAgIC8vICAgICAgICAgJ3NlcnZlcmlkJzogMSxcclxuICAgIC8vICAgICAvLyB9O1xyXG4gICAgLy8gICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGFyYW1zJywgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7XHJcbiAgICAvLyAgICAgdmFyIHBhcmFtcyA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGFyYW1zXCIpKTtcclxuICAgIC8vICAgICB2YXIgdG9rZW4gPWNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgIFxyXG4gICAgLy8gICAgIC8vIGNjLmxvZyh2YWx1ZSk7IFxyXG4gICAgLy8gICAgIC8vIGxldCBodHRwUmVxdWVzdCA9ICBuZXcgSHR0cEhlbHBlcigpOyAgXHJcbiAgICAvLyAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3QoJ2h0dHBzOi8vd3d3LmFoZWFydC5jbi9hcHAvYXBpLXNlcnZlci91c2VyLWxvZ2luJywgeyd0b2tlbic6dG9rZW59ICxmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgLy8gICAgICAgICBjYy5sb2coZGF0YSk7IFxyXG4gICAgLy8gICAgICAgICBpZihkYXRhLmNvZGU9PTApeyAvLyDnmbvlvZXlpLHotKXvvIzmiJbmnKzlnLDmlbDmja7lpLHmlYhcclxuICAgIC8vICAgICAgICAgICAgIC8vIOW8ueeql1xyXG4gICAgLy8gICAgICAgICB9ZWxzZXtcclxuICAgIC8vICAgICAgICAgICAgIC8vIOiuvue9ruacjeWKoeWZqFxyXG4gICAgLy8gICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZXJ2ZXInLCBKU09OLnN0cmluZ2lmeShkYXRhLmRhdGEuc2VydmVyKSk7XHJcbiAgICAvLyAgICAgICAgICAgICBpZihkYXRhLmNvZGU9PTEpey8vIOeZu+W9leaIkOWKn++8jOi/m+WFpea4uOaIj1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhkYXRhLmRhdGEudXNlcmluZm8pOyBcclxuICAgIC8vICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJpbmZvJywgSlNPTi5zdHJpbmdpZnkoZGF0YS5kYXRhLnVzZXJpbmZvKSk7IFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnaG9tZS9kYXRpbmcnKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJpbmZvJywgSlNPTi5zdHJpbmdpZnkoZGF0YS5kYXRhLnVzZXJpbmZvKSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7IC8v6K+75Y+W5pWw5o2uXHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICBpZihkYXRhLmNvZGU9PTIpeyAvLyDnmbvlvZXmiJDlip/vvIzmnKrlrprkuYnop5LoibJcclxuICAgIC8vICAgICAgICAgICAgICAgICAvLyDov5vlhaXlrprkuYnop5LoibLnlYzpnaIgICAgIFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHZhciBzZXJ2ZXIgPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VydmVyJykpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhzZXJ2ZXIpOyBcclxuICAgIC8vICAgICAgICAgICAgICAgICAvLyDliJvlu7rop5LoibJcclxuICAgIC8vICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ3JlZ2lzdGVyJyk7XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAvLyAgICAgLy/ov5nph4wgZXZlbnQg5piv5LiA5LiqIFRvdWNoIEV2ZW50IOWvueixoe+8jOS9oOWPr+S7pemAmui/hyBldmVudC50YXJnZXQg5Y+W5Yiw5LqL5Lu255qE5Y+R6YCB6IqC54K5XHJcbiAgICAvLyAgICAgLy8gdmFyIG5vZGUgPSBldmVudC50YXJnZXQ7XHJcbiAgICAvLyAgICAgLy8gdmFyIGJ1dHRvbiA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAvLyAgICAgLy/ov5nph4znmoQgY3VzdG9tRXZlbnREYXRhIOWPguaVsOWwseetieS6juS9oOS5i+WJjeiuvue9rueahCBcImNsaWNrMSB1c2VyIGRhdGFcIlxyXG4gICAgLy8gICAgIC8vIGNjLmxvZyhcIm5vZGU9XCIsIG5vZGUubmFtZSwgXCIgZXZlbnQ9XCIsIGV2ZW50LnR5cGUsIFwiIGRhdGE9XCIsIGN1c3RvbUV2ZW50RGF0YSk7XHJcbiAgICAvLyB9LFxyXG5cclxuICAgIC8vIGNhbGxiYWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIC8vICAgICAvLyBjYy5sb2coZGF0YSlcclxuICAgIC8vICAgICAvLyB2YXIgdXNlckNvdW50ID0gIGNjLmZpbmQoXCJDYW52YXMvZ3JvdW5kL2VkaXRib3hfY291bnRcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZztcclxuICAgIC8vICAgICAvLyB2YXIgdXNlclBhc3N3YXJkID0gIGNjLmZpbmQoXCJDYW52YXMvZ3JvdW5kL2VkaXRib3hfcGFzc3dhcmRcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZztcclxuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhcIueUqOaIt+i0puWPt++8mlwiK3VzZXJDb3VudCsgXCLnlKjmiLflr4bnoIHvvJpcIisgdXNlclBhc3N3YXJkKTtcclxuICAgIC8vICAgICAvLyBIdHRwSGVscC5sb2dpbih1c2VyQ291bnQsdXNlclBhc3N3YXJkLGZ1bmN0aW9uKGlzU3VjY2VzcyxEYXRhKXtcclxuICAgIC8vICAgICAvLyAgICAgdmFyIGluZm8gPSBEYXRhO1xyXG4gICAgLy8gICAgIC8vICAgICBpZih0cnVlID09IGlzU3VjY2Vzcyl7XHJcbiAgICAvLyAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2luICBzdWNjZXNzISEhXCIpO1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgY29uc29sZS5sb2coaW5mbyk7XHJcbiAgICAvLyAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby51c2VybmFtZSA9IGluZm8udXNlcm5hbWU7XHJcbiAgICAvLyAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby5nYW1lcG9pbnQgPSBpbmZvLmdhbWVwb2ludDtcclxuICAgIC8vICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnNrZXkgPSBpbmZvLnNrZXk7XHJcbiAgICAvLyAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby51c2VyaWQgPSBpbmZvLnVzZXJpZDtcclxuIFxyXG4gICAgLy8gICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8ubW9uZXkgPSBpbmZvLm1vbmV5O1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8udXNlcmlkID0gaW5mby51c2VyaWQ7XHJcbiAgICAvLyAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby5wYXNzd29yZCA9IGluZm8ucGFzc3dvcmQ7XHJcbiAgICAvLyAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby5zYWx0ID0gaW5mby5zYWx0O1xyXG4gXHJcbiAgICAvLyAgICAgLy8gICAgICAgICAvL+eZu+W9leaIkOWKn+WQjuWKoOi9veWcsOWbvui1hOa6kFxyXG4gICAgLy8gICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtYXAnKTtcclxuICAgIC8vICAgICAvLyAgICAgfWVsc2V7XHJcbiAgICAvLyAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2luICBmaWxlZCEhIVwiKVxyXG4gICAgLy8gICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgLy8gfSk7XHJcbiAgICAvLyB9LFxyXG4gXHJcbiAgICBzdGFydCAoKSB7XHJcbiBcclxuICAgIH0sXHJcbiBcclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG5cclxuICAgIHNob3dfZGxnICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID10cnVlO1xyXG4gICAgfSxcclxuICAgIGhpZGRlbl9kbGcgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPWZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICB4aWV5aV9zaG93X2RsZyAoKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlcl9rbm93c193ZWJ2aWV3LnVybCA9J2h0dHBzOi8vd3d3LmFoZWFydC5jbi9hcHAvYXBpLXVzZXIveGlleWknO1xyXG4gICAgICAgIC8vIHRoaXMucmVnaXN0ZXJfa25vd3Nfd2Vidmlldy5sb2FkVXJsKCdodHRwczovL3d3dy5haGVhcnQuY24vYXBwL2FwaS11c2VyL3hpZXlpJyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9dHJ1ZTtcclxuICAgIH0sXHJcbiAgICB4aWV5aV9oaWRkZW5fZGxnICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID1mYWxzZTtcclxuICAgIH0sXHJcbiAgICB5aW5zaV9zaG93X2RsZyAoKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlcl9rbm93c193ZWJ2aWV3LnVybCA9J2h0dHBzOi8vd3d3LmFoZWFydC5jbi9hcHAvYXBpLXVzZXIveWluc2knO1xyXG4gICAgICAgIC8vIHRoaXMucmVnaXN0ZXJfa25vd3Nfd2Vidmlldy5sb2FkVXJsKCdodHRwczovL3d3dy5haGVhcnQuY24vYXBwL2FwaS11c2VyL3lpbnNpJyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9dHJ1ZTtcclxuICAgIH0sXHJcbiAgICB5aW5zaV9oaWRkZW5fZGxnICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID1mYWxzZTtcclxuICAgIH1cclxuXHJcbn0pO1xyXG4iXX0=