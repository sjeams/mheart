
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/login/register_in.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e24f2TQo8ZGDYgWVYt3qr6q', 'register_in');
// Script/login/register_in.js

"use strict";

var HttpHelper = require("http"); // var fs = require('fs'); // 引入fs模块
// var globaluserinfo = require("GlobaluserInfo");


var httpRequest = new HttpHelper();
cc.Class({
  "extends": cc.Component,
  properties: {
    alert_register_in: cc.Label,
    name_register_in_login: cc.EditBox,
    password_register_in_login: cc.EditBox,
    repassword_register_in_login: cc.EditBox,
    toggle_register_in: cc.Toggle
  },
  onLoad: function onLoad() {// this.tokenlogin(); // 快捷登录
    // 操作文本--读取用户信息
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
  register: function register() {
    var loginname = this.name_register_in_login.getComponent(cc.EditBox).string;
    var password = this.password_register_in_login.getComponent(cc.EditBox).string;
    var repassword = this.repassword_register_in_login.getComponent(cc.EditBox).string; // 是否勾选

    var toggle = this.toggle_register_in.getComponent(cc.Toggle).isChecked;

    var _this = this; //手机格式验证


    var phoneReg = /(^1[3|4|5|6|7|8|9]\d{9}$)|(^09\d{8}$)/;

    if (loginname == false) {
      _this.alert_register_in.string = '请输入手机号码!';
      return false;
    } else if (phoneReg == false) {
      _this.alert_register_in.string = '手机号码格式错误!';
      return false;
    } else if (password.length < 6) {
      _this.alert_register_in.string = '密码不能少于6位数!';
      return false;
    } else if (password != repassword) {
      _this.alert_register_in.string = '两次输入密码不一致!';
      return false;
    } else if (toggle == false) {
      _this.alert_register_in.string = '请阅读并同意相关协议!';
      return false;
    } else {
      var params = {
        'loginname': loginname,
        'password': password // 'loginname': 'yincan1993',
        // 'password': 123456,

      };
      httpRequest.httpPost('/app/api-server/register-in', params, function (data) {
        cc.log(data);

        if (data.code == 1) {
          // _this.register_alert.color =  new cc.color('#BDFF00');
          _this.alert_register_in.string = ''; // cc.sys.localStorage.setItem('token', data.data.token);

          cc.sys.localStorage.setItem('loginname', loginname);
          cc.sys.localStorage.setItem('password', password);
          _this.node.active = false;
        } else {
          _this.alert_register_in.string = '手机号已存在，请重试!';
        } //操作文本--修改用户信息

      });
    }
  },
  callback: function callback(event) {// cc.log(data)
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
    // cc.director.loadScene('map');
    //     }else{
    //         console.log("login  filed!!!")
    //     }
    // });
  },
  start: function start() {},
  // update (dt) {},
  show_dlg: function show_dlg() {
    //显示出现账号密码
    // var loginname =cc.sys.localStorage.getItem('loginname');
    // var password =cc.sys.localStorage.getItem('password');
    // if(loginname){
    //     this.register_login_name.getComponent(cc.EditBox).string=loginname;
    // }
    // if(loginname){
    //     this.register_login_password.getComponent(cc.EditBox).string=password;
    // }
    this.node.active = true;
  },
  hidden_dlg: function hidden_dlg() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxccmVnaXN0ZXJfaW4uanMiXSwibmFtZXMiOlsiSHR0cEhlbHBlciIsInJlcXVpcmUiLCJodHRwUmVxdWVzdCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYWxlcnRfcmVnaXN0ZXJfaW4iLCJMYWJlbCIsIm5hbWVfcmVnaXN0ZXJfaW5fbG9naW4iLCJFZGl0Qm94IiwicGFzc3dvcmRfcmVnaXN0ZXJfaW5fbG9naW4iLCJyZXBhc3N3b3JkX3JlZ2lzdGVyX2luX2xvZ2luIiwidG9nZ2xlX3JlZ2lzdGVyX2luIiwiVG9nZ2xlIiwib25Mb2FkIiwicmVnaXN0ZXIiLCJsb2dpbm5hbWUiLCJnZXRDb21wb25lbnQiLCJzdHJpbmciLCJwYXNzd29yZCIsInJlcGFzc3dvcmQiLCJ0b2dnbGUiLCJpc0NoZWNrZWQiLCJfdGhpcyIsInBob25lUmVnIiwibGVuZ3RoIiwicGFyYW1zIiwiaHR0cFBvc3QiLCJkYXRhIiwibG9nIiwiY29kZSIsInN5cyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJub2RlIiwiYWN0aXZlIiwiY2FsbGJhY2siLCJldmVudCIsInN0YXJ0Iiwic2hvd19kbGciLCJoaWRkZW5fZGxnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBeEIsRUFDQTtBQUNBOzs7QUFDQSxJQUFJQyxXQUFXLEdBQUksSUFBSUYsVUFBSixFQUFuQjtBQUNBRyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsaUJBQWlCLEVBQUVKLEVBQUUsQ0FBQ0ssS0FEZDtBQUVSQyxJQUFBQSxzQkFBc0IsRUFBRU4sRUFBRSxDQUFDTyxPQUZuQjtBQUdSQyxJQUFBQSwwQkFBMEIsRUFBRVIsRUFBRSxDQUFDTyxPQUh2QjtBQUlSRSxJ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eEIsR0FBZ0MsYUFBaEM7QUFDSCxTQVh1RSxDQVl4RTs7QUFDSCxPQWJEO0FBY0o7QUFLSCxHQXRGSTtBQXlGTGtCLEVBQUFBLFFBQVEsRUFBRSxrQkFBVUMsS0FBVixFQUFpQixDQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBRUgsR0FwSEk7QUFzSExDLEVBQUFBLEtBdEhLLG1CQXNISSxDQUVSLENBeEhJO0FBMEhMO0FBRUFDLEVBQUFBLFFBNUhLLHNCQTRITztBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQUtMLElBQUwsQ0FBVUMsTUFBVixHQUFrQixJQUFsQjtBQUVILEdBeElJO0FBeUlMSyxFQUFBQSxVQXpJSyx3QkF5SVM7QUFDVixTQUFLTixJQUFMLENBQVVDLE1BQVYsR0FBa0IsS0FBbEI7QUFDSDtBQTNJSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIEh0dHBIZWxwZXIgPSByZXF1aXJlKFwiaHR0cFwiKTtcclxuLy8gdmFyIGZzID0gcmVxdWlyZSgnZnMnKTsgLy8g5byV5YWlZnPmqKHlnZdcclxuLy8gdmFyIGdsb2JhbHVzZXJpbmZvID0gcmVxdWlyZShcIkdsb2JhbHVzZXJJbmZvXCIpO1xyXG5sZXQgaHR0cFJlcXVlc3QgPSAgbmV3IEh0dHBIZWxwZXIoKTsgIFxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiBcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBhbGVydF9yZWdpc3Rlcl9pbjogY2MuTGFiZWwsXHJcbiAgICAgICAgbmFtZV9yZWdpc3Rlcl9pbl9sb2dpbjogY2MuRWRpdEJveCxcclxuICAgICAgICBwYXNzd29yZF9yZWdpc3Rlcl9pbl9sb2dpbjogY2MuRWRpdEJveCxcclxuICAgICAgICByZXBhc3N3b3JkX3JlZ2lzdGVyX2luX2xvZ2luOiBjYy5FZGl0Qm94LFxyXG4gICAgICAgIHRvZ2dsZV9yZWdpc3Rlcl9pbjogY2MuVG9nZ2xlXHJcbiAgICB9LFxyXG4gXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHsgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAvLyB0aGlzLnRva2VubG9naW4oKTsgLy8g5b+r5o2355m75b2VXHJcblxyXG4gICAgICAgIC8vIOaTjeS9nOaWh+acrC0t6K+75Y+W55So5oi35L+h5oGvXHJcbiAgIFxyXG4gICAgICAgIC8vIC8vIOi0puWPt+WvhueggeeZu+W9lVxyXG4gICAgICAgIC8vIHRoaXMubG9naW4oKTtcclxuICAgICAgICAvL+WCqOWtmOe8k+WtmFxyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB2YWx1ZSk7XHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XHJcblxyXG4gICAgICAgIC8vIOS/neWtmOacgOmrmOWIhuWIsOacrOWcsFxyXG4gICAgICAgIC8vIGNvbnN0IEtFWV9CRVNUX1NDT1JFID0gXCJiZXN0U2NvcmVcIjtcclxuICAgICAgICAvLyBsZXQgYmVzdFNjb3JlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKEtFWV9CRVNUX1NDT1JFKTtcclxuICAgICAgICAvLyBpZiAoYmVzdFNjb3JlID09PSBcIm51bGxcIiB8fCB0aGlzLnNjb3JlID4gYmVzdFNjb3JlKSB7XHJcbiAgICAgICAgLy8gICAgIGJlc3RTY29yZSA9IHRoaXMuc2NvcmU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShLRVlfQkVTVF9TQ09SRSwgYmVzdFNjb3JlKTtcclxuICAgICAgICBcclxuICAgIH0sXHJcbiBcclxuICAgIHJlZ2lzdGVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgXHJcbiAgICAgICAgdmFyIGxvZ2lubmFtZSA9IHRoaXMubmFtZV9yZWdpc3Rlcl9pbl9sb2dpbi5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xyXG4gICAgICAgIHZhciBwYXNzd29yZCA9IHRoaXMucGFzc3dvcmRfcmVnaXN0ZXJfaW5fbG9naW4uZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZztcclxuICAgICAgICB2YXIgcmVwYXNzd29yZCA9IHRoaXMucmVwYXNzd29yZF9yZWdpc3Rlcl9pbl9sb2dpbi5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xyXG4gICAgICAgIC8vIOaYr+WQpuWLvumAiVxyXG4gICAgICAgIHZhciB0b2dnbGUgPSB0aGlzLnRvZ2dsZV9yZWdpc3Rlcl9pbi5nZXRDb21wb25lbnQoY2MuVG9nZ2xlKS5pc0NoZWNrZWQ7XHJcbiAgICAgICAgdmFyICBfdGhpcyA9dGhpcztcclxuICAgICAgICAvL+aJi+acuuagvOW8j+mqjOivgVxyXG4gICAgICAgIGxldCBwaG9uZVJlZyA9IC8oXjFbM3w0fDV8Nnw3fDh8OV1cXGR7OX0kKXwoXjA5XFxkezh9JCkvO1xyXG4gICAgICAgIGlmKGxvZ2lubmFtZT09ZmFsc2Upe1xyXG4gICAgICAgICAgICBfdGhpcy5hbGVydF9yZWdpc3Rlcl9pbi5zdHJpbmcgPSfor7fovpPlhaXmiYvmnLrlj7fnoIEhJztcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1lbHNlIGlmKHBob25lUmVnPT1mYWxzZSl7XHJcbiAgICAgICAgICAgIF90aGlzLmFsZXJ0X3JlZ2lzdGVyX2luLnN0cmluZyA9J+aJi+acuuWPt+eggeagvOW8j+mUmeivryEnO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfWVsc2UgaWYocGFzc3dvcmQubGVuZ3RoPDYpe1xyXG4gICAgICAgICAgICBfdGhpcy5hbGVydF9yZWdpc3Rlcl9pbi5zdHJpbmcgPSflr4bnoIHkuI3og73lsJHkuo425L2N5pWwISc7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9ZWxzZSBpZihwYXNzd29yZCE9cmVwYXNzd29yZCl7XHJcbiAgICAgICAgICAgIF90aGlzLmFsZXJ0X3JlZ2lzdGVyX2luLnN0cmluZyA9J+S4pOasoei+k+WFpeWvhueggeS4jeS4gOiHtCEnO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfWVsc2UgaWYodG9nZ2xlPT1mYWxzZSl7XHJcbiAgICAgICAgICAgIF90aGlzLmFsZXJ0X3JlZ2lzdGVyX2luLnN0cmluZyA9J+ivt+mYheivu+W5tuWQjOaEj+ebuOWFs+WNj+iuriEnO1xyXG4gICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgICdsb2dpbm5hbWUnOiBsb2dpbm5hbWUsXHJcbiAgICAgICAgICAgICAgICAncGFzc3dvcmQnOiBwYXNzd29yZCxcclxuICAgICAgICAgICAgICAgIC8vICdsb2dpbm5hbWUnOiAneWluY2FuMTk5MycsXHJcbiAgICAgICAgICAgICAgICAvLyAncGFzc3dvcmQnOiAxMjM0NTYsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCcvYXBwL2FwaS1zZXJ2ZXIvcmVnaXN0ZXItaW4nLCBwYXJhbXMgLGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2coZGF0YSk7IFxyXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5jb2RlPT0xKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyBfdGhpcy5yZWdpc3Rlcl9hbGVydC5jb2xvciA9ICBuZXcgY2MuY29sb3IoJyNCREZGMDAnKTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hbGVydF9yZWdpc3Rlcl9pbi5zdHJpbmcgPScnO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBkYXRhLmRhdGEudG9rZW4pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9naW5uYW1lJywgbG9naW5uYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Bhc3N3b3JkJywgcGFzc3dvcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLm5vZGUuYWN0aXZlID1mYWxzZTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmFsZXJ0X3JlZ2lzdGVyX2luLnN0cmluZyA9J+aJi+acuuWPt+W3suWtmOWcqO+8jOivt+mHjeivlSEnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy/mk43kvZzmlofmnKwtLeS/ruaUueeUqOaIt+S/oeaBr1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICB9LFxyXG5cclxuICBcclxuICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAvLyBjYy5sb2coZGF0YSlcclxuICAgICAgICAvLyB2YXIgdXNlckNvdW50ID0gIGNjLmZpbmQoXCJDYW52YXMvZ3JvdW5kL2VkaXRib3hfY291bnRcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZztcclxuICAgICAgICAvLyB2YXIgdXNlclBhc3N3YXJkID0gIGNjLmZpbmQoXCJDYW52YXMvZ3JvdW5kL2VkaXRib3hfcGFzc3dhcmRcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZztcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIueUqOaIt+i0puWPt++8mlwiK3VzZXJDb3VudCsgXCLnlKjmiLflr4bnoIHvvJpcIisgdXNlclBhc3N3YXJkKTtcclxuICAgICAgICAvLyBIdHRwSGVscC5sb2dpbih1c2VyQ291bnQsdXNlclBhc3N3YXJkLGZ1bmN0aW9uKGlzU3VjY2VzcyxEYXRhKXtcclxuICAgICAgICAvLyAgICAgdmFyIGluZm8gPSBEYXRhO1xyXG4gICAgICAgIC8vICAgICBpZih0cnVlID09IGlzU3VjY2Vzcyl7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2luICBzdWNjZXNzISEhXCIpO1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coaW5mbyk7XHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby51c2VybmFtZSA9IGluZm8udXNlcm5hbWU7XHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby5nYW1lcG9pbnQgPSBpbmZvLmdhbWVwb2ludDtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnNrZXkgPSBpbmZvLnNrZXk7XHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby51c2VyaWQgPSBpbmZvLnVzZXJpZDtcclxuIFxyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8ubW9uZXkgPSBpbmZvLm1vbmV5O1xyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8udXNlcmlkID0gaW5mby51c2VyaWQ7XHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby5wYXNzd29yZCA9IGluZm8ucGFzc3dvcmQ7XHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby5zYWx0ID0gaW5mby5zYWx0O1xyXG4gXHJcbiAgICAgICAgLy8gICAgICAgICAvL+eZu+W9leaIkOWKn+WQjuWKoOi9veWcsOWbvui1hOa6kFxyXG4gICAgICAgICAgICAgICAgLy8gY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtYXAnKTtcclxuICAgICAgICAvLyAgICAgfWVsc2V7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2luICBmaWxlZCEhIVwiKVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gXHJcbiAgICBzdGFydCAoKSB7XHJcbiBcclxuICAgIH0sXHJcbiBcclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG5cclxuICAgIHNob3dfZGxnICgpIHtcclxuICAgICAgICAvL+aYvuekuuWHuueOsOi0puWPt+WvhueggVxyXG4gICAgICAgIC8vIHZhciBsb2dpbm5hbWUgPWNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9naW5uYW1lJyk7XHJcbiAgICAgICAgLy8gdmFyIHBhc3N3b3JkID1jYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Bhc3N3b3JkJyk7XHJcbiAgICAgICAgLy8gaWYobG9naW5uYW1lKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5yZWdpc3Rlcl9sb2dpbl9uYW1lLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc9bG9naW5uYW1lO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZihsb2dpbm5hbWUpe1xyXG4gICAgICAgIC8vICAgICB0aGlzLnJlZ2lzdGVyX2xvZ2luX3Bhc3N3b3JkLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc9cGFzc3dvcmQ7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPXRydWU7XHJcblxyXG4gICAgfSxcclxuICAgIGhpZGRlbl9kbGcgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPWZhbHNlO1xyXG4gICAgfVxyXG59KTtcclxuIl19