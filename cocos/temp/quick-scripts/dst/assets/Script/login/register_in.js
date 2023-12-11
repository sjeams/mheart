
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
      httpRequest.httpPostLogin('/app/api-server/register-in', params, function (data) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxccmVnaXN0ZXJfaW4uanMiXSwibmFtZXMiOlsiSHR0cEhlbHBlciIsInJlcXVpcmUiLCJodHRwUmVxdWVzdCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYWxlcnRfcmVnaXN0ZXJfaW4iLCJMYWJlbCIsIm5hbWVfcmVnaXN0ZXJfaW5fbG9naW4iLCJFZGl0Qm94IiwicGFzc3dvcmRfcmVnaXN0ZXJfaW5fbG9naW4iLCJyZXBhc3N3b3JkX3JlZ2lzdGVyX2luX2xvZ2luIiwidG9nZ2xlX3JlZ2lzdGVyX2luIiwiVG9nZ2xlIiwib25Mb2FkIiwicmVnaXN0ZXIiLCJsb2dpbm5hbWUiLCJnZXRDb21wb25lbnQiLCJzdHJpbmciLCJwYXNzd29yZCIsInJlcGFzc3dvcmQiLCJ0b2dnbGUiLCJpc0NoZWNrZWQiLCJfdGhpcyIsInBob25lUmVnIiwibGVuZ3RoIiwicGFyYW1zIiwiaHR0cFBvc3RMb2dpbiIsImRhdGEiLCJsb2ciLCJjb2RlIiwic3lzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIm5vZGUiLCJhY3RpdmUiLCJjYWxsYmFjayIsImV2ZW50Iiwic3RhcnQiLCJzaG93X2RsZyIsImhpZGRlbl9kbGciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUF4QixFQUNBO0FBQ0E7OztBQUNBLElBQUlDLFdBQVcsR0FBSSxJQUFJRixVQUFKLEVBQW5CO0FBQ0FHLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxpQkFBaUIsRUFBRUosRUFBRSxDQUFDSyxLQURkO0FBRVJDLElBQUFBLHNCQUFzQixFQUFFTixFQUFFLENBQUNPLE9BRm5CO0FBR1JDLElBQUFBLDBCQUEwQixFQUFFUixFQUFFLENBQUNPLE9BSHZCO0FB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WSxNQUF4QixHQUFnQyxhQUFoQztBQUNILFNBWDRFLENBWTdFOztBQUNILE9BYkQ7QUFjSjtBQUtILEdBdEZJO0FBeUZMa0IsRUFBQUEsUUFBUSxFQUFFLGtCQUFVQyxLQUFWLEVBQWlCLENBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNRO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFFSCxHQXBISTtBQXNITEMsRUFBQUEsS0F0SEssbUJBc0hJLENBRVIsQ0F4SEk7QUEwSEw7QUFFQUMsRUFBQUEsUUE1SEssc0JBNEhPO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBS0wsSUFBTCxDQUFVQyxNQUFWLEdBQWtCLElBQWxCO0FBRUgsR0F4SUk7QUF5SUxLLEVBQUFBLFVBeklLLHdCQXlJUztBQUNWLFNBQUtOLElBQUwsQ0FBVUMsTUFBVixHQUFrQixLQUFsQjtBQUNIO0FBM0lJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgSHR0cEhlbHBlciA9IHJlcXVpcmUoXCJodHRwXCIpO1xyXG4vLyB2YXIgZnMgPSByZXF1aXJlKCdmcycpOyAvLyDlvJXlhaVmc+aooeWdl1xyXG4vLyB2YXIgZ2xvYmFsdXNlcmluZm8gPSByZXF1aXJlKFwiR2xvYmFsdXNlckluZm9cIik7XHJcbmxldCBodHRwUmVxdWVzdCA9ICBuZXcgSHR0cEhlbHBlcigpOyAgXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuIFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGFsZXJ0X3JlZ2lzdGVyX2luOiBjYy5MYWJlbCxcclxuICAgICAgICBuYW1lX3JlZ2lzdGVyX2luX2xvZ2luOiBjYy5FZGl0Qm94LFxyXG4gICAgICAgIHBhc3N3b3JkX3JlZ2lzdGVyX2luX2xvZ2luOiBjYy5FZGl0Qm94LFxyXG4gICAgICAgIHJlcGFzc3dvcmRfcmVnaXN0ZXJfaW5fbG9naW46IGNjLkVkaXRCb3gsXHJcbiAgICAgICAgdG9nZ2xlX3JlZ2lzdGVyX2luOiBjYy5Ub2dnbGVcclxuICAgIH0sXHJcbiBcclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkgeyAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHRoaXMudG9rZW5sb2dpbigpOyAvLyDlv6vmjbfnmbvlvZVcclxuXHJcbiAgICAgICAgLy8g5pON5L2c5paH5pysLS3or7vlj5bnlKjmiLfkv6Hmga9cclxuICAgXHJcbiAgICAgICAgLy8gLy8g6LSm5Y+35a+G56CB55m75b2VXHJcbiAgICAgICAgLy8gdGhpcy5sb2dpbigpO1xyXG4gICAgICAgIC8v5YKo5a2Y57yT5a2YXHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHZhbHVlKTtcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuXHJcbiAgICAgICAgLy8g5L+d5a2Y5pyA6auY5YiG5Yiw5pys5ZywXHJcbiAgICAgICAgLy8gY29uc3QgS0VZX0JFU1RfU0NPUkUgPSBcImJlc3RTY29yZVwiO1xyXG4gICAgICAgIC8vIGxldCBiZXN0U2NvcmUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oS0VZX0JFU1RfU0NPUkUpO1xyXG4gICAgICAgIC8vIGlmIChiZXN0U2NvcmUgPT09IFwibnVsbFwiIHx8IHRoaXMuc2NvcmUgPiBiZXN0U2NvcmUpIHtcclxuICAgICAgICAvLyAgICAgYmVzdFNjb3JlID0gdGhpcy5zY29yZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKEtFWV9CRVNUX1NDT1JFLCBiZXN0U2NvcmUpO1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuIFxyXG4gICAgcmVnaXN0ZXI6IGZ1bmN0aW9uKCl7XHJcbiAgICAgICBcclxuICAgICAgICB2YXIgbG9naW5uYW1lID0gdGhpcy5uYW1lX3JlZ2lzdGVyX2luX2xvZ2luLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XHJcbiAgICAgICAgdmFyIHBhc3N3b3JkID0gdGhpcy5wYXNzd29yZF9yZWdpc3Rlcl9pbl9sb2dpbi5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xyXG4gICAgICAgIHZhciByZXBhc3N3b3JkID0gdGhpcy5yZXBhc3N3b3JkX3JlZ2lzdGVyX2luX2xvZ2luLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XHJcbiAgICAgICAgLy8g5piv5ZCm5Yu+6YCJXHJcbiAgICAgICAgdmFyIHRvZ2dsZSA9IHRoaXMudG9nZ2xlX3JlZ2lzdGVyX2luLmdldENvbXBvbmVudChjYy5Ub2dnbGUpLmlzQ2hlY2tlZDtcclxuICAgICAgICB2YXIgIF90aGlzID10aGlzO1xyXG4gICAgICAgIC8v5omL5py65qC85byP6aqM6K+BXHJcbiAgICAgICAgbGV0IHBob25lUmVnID0gLyheMVszfDR8NXw2fDd8OHw5XVxcZHs5fSQpfCheMDlcXGR7OH0kKS87XHJcbiAgICAgICAgaWYobG9naW5uYW1lPT1mYWxzZSl7XHJcbiAgICAgICAgICAgIF90aGlzLmFsZXJ0X3JlZ2lzdGVyX2luLnN0cmluZyA9J+ivt+i+k+WFpeaJi+acuuWPt+eggSEnO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfWVsc2UgaWYocGhvbmVSZWc9PWZhbHNlKXtcclxuICAgICAgICAgICAgX3RoaXMuYWxlcnRfcmVnaXN0ZXJfaW4uc3RyaW5nID0n5omL5py65Y+356CB5qC85byP6ZSZ6K+vISc7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9ZWxzZSBpZihwYXNzd29yZC5sZW5ndGg8Nil7XHJcbiAgICAgICAgICAgIF90aGlzLmFsZXJ0X3JlZ2lzdGVyX2luLnN0cmluZyA9J+WvhueggeS4jeiDveWwkeS6jjbkvY3mlbAhJztcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1lbHNlIGlmKHBhc3N3b3JkIT1yZXBhc3N3b3JkKXtcclxuICAgICAgICAgICAgX3RoaXMuYWxlcnRfcmVnaXN0ZXJfaW4uc3RyaW5nID0n5Lik5qyh6L6T5YWl5a+G56CB5LiN5LiA6Ie0ISc7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9ZWxzZSBpZih0b2dnbGU9PWZhbHNlKXtcclxuICAgICAgICAgICAgX3RoaXMuYWxlcnRfcmVnaXN0ZXJfaW4uc3RyaW5nID0n6K+36ZiF6K+75bm25ZCM5oSP55u45YWz5Y2P6K6uISc7XHJcbiAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICB2YXIgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgJ2xvZ2lubmFtZSc6IGxvZ2lubmFtZSxcclxuICAgICAgICAgICAgICAgICdwYXNzd29yZCc6IHBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgLy8gJ2xvZ2lubmFtZSc6ICd5aW5jYW4xOTkzJyxcclxuICAgICAgICAgICAgICAgIC8vICdwYXNzd29yZCc6IDEyMzQ1NixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3RMb2dpbignL2FwcC9hcGktc2VydmVyL3JlZ2lzdGVyLWluJywgcGFyYW1zICxmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKGRhdGEpOyBcclxuICAgICAgICAgICAgICAgIGlmKGRhdGEuY29kZT09MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gX3RoaXMucmVnaXN0ZXJfYWxlcnQuY29sb3IgPSAgbmV3IGNjLmNvbG9yKCcjQkRGRjAwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWxlcnRfcmVnaXN0ZXJfaW4uc3RyaW5nID0nJztcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgZGF0YS5kYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvZ2lubmFtZScsIGxvZ2lubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwYXNzd29yZCcsIHBhc3N3b3JkKTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5ub2RlLmFjdGl2ZSA9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hbGVydF9yZWdpc3Rlcl9pbi5zdHJpbmcgPSfmiYvmnLrlj7flt7LlrZjlnKjvvIzor7fph43or5UhJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8v5pON5L2c5paH5pysLS3kv67mlLnnlKjmiLfkv6Hmga9cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgfSxcclxuXHJcbiAgXHJcbiAgICBjYWxsYmFjazogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gY2MubG9nKGRhdGEpXHJcbiAgICAgICAgLy8gdmFyIHVzZXJDb3VudCA9ICBjYy5maW5kKFwiQ2FudmFzL2dyb3VuZC9lZGl0Ym94X2NvdW50XCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XHJcbiAgICAgICAgLy8gdmFyIHVzZXJQYXNzd2FyZCA9ICBjYy5maW5kKFwiQ2FudmFzL2dyb3VuZC9lZGl0Ym94X3Bhc3N3YXJkXCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLnlKjmiLfotKblj7fvvJpcIit1c2VyQ291bnQrIFwi55So5oi35a+G56CB77yaXCIrIHVzZXJQYXNzd2FyZCk7XHJcbiAgICAgICAgLy8gSHR0cEhlbHAubG9naW4odXNlckNvdW50LHVzZXJQYXNzd2FyZCxmdW5jdGlvbihpc1N1Y2Nlc3MsRGF0YSl7XHJcbiAgICAgICAgLy8gICAgIHZhciBpbmZvID0gRGF0YTtcclxuICAgICAgICAvLyAgICAgaWYodHJ1ZSA9PSBpc1N1Y2Nlc3Mpe1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJsb2dpbiAgc3VjY2VzcyEhIVwiKTtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGluZm8pO1xyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8udXNlcm5hbWUgPSBpbmZvLnVzZXJuYW1lO1xyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8uZ2FtZXBvaW50ID0gaW5mby5nYW1lcG9pbnQ7XHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby5za2V5ID0gaW5mby5za2V5O1xyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8udXNlcmlkID0gaW5mby51c2VyaWQ7XHJcbiBcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLm1vbmV5ID0gaW5mby5tb25leTtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnVzZXJpZCA9IGluZm8udXNlcmlkO1xyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8ucGFzc3dvcmQgPSBpbmZvLnBhc3N3b3JkO1xyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8uc2FsdCA9IGluZm8uc2FsdDtcclxuIFxyXG4gICAgICAgIC8vICAgICAgICAgLy/nmbvlvZXmiJDlip/lkI7liqDovb3lnLDlm77otYTmupBcclxuICAgICAgICAgICAgICAgIC8vIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFwJyk7XHJcbiAgICAgICAgLy8gICAgIH1lbHNle1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJsb2dpbiAgZmlsZWQhISFcIilcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuIFxyXG4gICAgc3RhcnQgKCkge1xyXG4gXHJcbiAgICB9LFxyXG4gXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxuXHJcbiAgICBzaG93X2RsZyAoKSB7XHJcbiAgICAgICAgLy/mmL7npLrlh7rnjrDotKblj7flr4bnoIFcclxuICAgICAgICAvLyB2YXIgbG9naW5uYW1lID1jYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvZ2lubmFtZScpO1xyXG4gICAgICAgIC8vIHZhciBwYXNzd29yZCA9Y2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwYXNzd29yZCcpO1xyXG4gICAgICAgIC8vIGlmKGxvZ2lubmFtZSl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucmVnaXN0ZXJfbG9naW5fbmFtZS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nPWxvZ2lubmFtZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gaWYobG9naW5uYW1lKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5yZWdpc3Rlcl9sb2dpbl9wYXNzd29yZC5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nPXBhc3N3b3JkO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID10cnVlO1xyXG5cclxuICAgIH0sXHJcbiAgICBoaWRkZW5fZGxnICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID1mYWxzZTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==