
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/login/register.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxccmVnaXN0ZXIuanMiXSwibmFtZXMiOlsiSHR0cEhlbHBlciIsInJlcXVpcmUiLCJodHRwUmVxdWVzdCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicmVnaXN0ZXJfYWxlcnQiLCJMYWJlbCIsInJlZ2lzdGVyX2xvZ2luX25hbWUiLCJFZGl0Qm94IiwicmVnaXN0ZXJfbG9naW5fcGFzc3dvcmQiLCJvbkxvYWQiLCJsb2dpbm5hbWUiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFzc3dvcmQiLCJnZXRDb21wb25lbnQiLCJzdHJpbmciLCJ0b2tlbmxvZ2luIiwidG9rZW4iLCJodHRwUG9zdCIsImRhdGEiLCJfdGhpcyIsImNvZGUiLCJsb2dpbiIsInBhcmFtcyIsImxvZyIsInNldEl0ZW0iLCJub2RlIiwiYWN0aXZlIiwiY2FsbGJhY2siLCJldmVudCIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwic3RhcnQiLCJzaG93X2RsZyIsImhpZGRlbl9kbGciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUF4QixFQUNBO0FBQ0E7OztBQUNBLElBQUlDLFdBQVcsR0FBSSxJQUFJRixVQUFKLEVBQW5CO0FBQ0FHLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxjQUFjLEVBQUVKLEVBQUUsQ0FBQ0ssS0FEWDtBQUVSQyxJQUFBQSxtQkFBbUIsRUFBRU4sRUFBRSxDQUFDTyxPQUZoQjtBQUdSQyxJQUFBQSx1QkFBdUIsRUFBRVIsRUFBRSxDQUFDTztBQUhwQixHQUhQO0FBU0xFLEVBQUFBLE1BQU0sRUFBRSxrQkFBWTtBQUNoQixRQUFJQyxTQUFTLEdBQUVWLEVBQUUsQ0FBQ1csR0FBSCxDQUFPQyxZQUFQLENB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QUFLLENBQUNqQixjQUFOLENBQXFCWSxNQUFyQixHQUE2QixTQUE3QjtBQUNILE9BWHVGLENBWXhGOztBQUNILEtBYkQ7QUFlSCxHQTlHSTtBQWlITGEsRUFBQUEsUUFBUSxFQUFFLGtCQUFVQyxLQUFWLEVBQWlCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNROUIsSUFBQUEsRUFBRSxDQUFDK0IsUUFBSCxDQUFZQyxTQUFaLENBQXNCLEtBQXRCLEVBckJlLENBc0J2QjtBQUNBO0FBQ0E7QUFDQTtBQUVILEdBNUlJO0FBOElMQyxFQUFBQSxLQTlJSyxtQkE4SUksQ0FFUixDQWhKSTtBQWtKTDtBQUVBQyxFQUFBQSxRQXBKSyxzQkFvSk87QUFDUixTQUFLUCxJQUFMLENBQVVDLE1BQVYsR0FBa0IsSUFBbEI7QUFDSCxHQXRKSTtBQXVKTE8sRUFBQUEsVUF2Skssd0JBdUpTO0FBQ1YsU0FBS1IsSUFBTCxDQUFVQyxNQUFWLEdBQWtCLEtBQWxCO0FBQ0g7QUF6SkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBIdHRwSGVscGVyID0gcmVxdWlyZShcImh0dHBcIik7XHJcbi8vIHZhciBmcyA9IHJlcXVpcmUoJ2ZzJyk7IC8vIOW8leWFpWZz5qih5Z2XXHJcbi8vIHZhciBnbG9iYWx1c2VyaW5mbyA9IHJlcXVpcmUoXCJHbG9iYWx1c2VySW5mb1wiKTtcclxubGV0IGh0dHBSZXF1ZXN0ID0gIG5ldyBIdHRwSGVscGVyKCk7ICBcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgcmVnaXN0ZXJfYWxlcnQ6IGNjLkxhYmVsLFxyXG4gICAgICAgIHJlZ2lzdGVyX2xvZ2luX25hbWU6IGNjLkVkaXRCb3gsXHJcbiAgICAgICAgcmVnaXN0ZXJfbG9naW5fcGFzc3dvcmQ6IGNjLkVkaXRCb3hcclxuICAgIH0sXHJcbiBcclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBsb2dpbm5hbWUgPWNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9naW5uYW1lJyk7XHJcbiAgICAgICAgdmFyIHBhc3N3b3JkID1jYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Bhc3N3b3JkJyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cobG9naW5uYW1lKVxyXG4gICAgICAgIGlmKGxvZ2lubmFtZSl7XHJcbiAgICAgICAgICAgdGhpcy5yZWdpc3Rlcl9sb2dpbl9uYW1lLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc9bG9naW5uYW1lO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihsb2dpbm5hbWUpe1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyX2xvZ2luX3Bhc3N3b3JkLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc9cGFzc3dvcmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOaTjeS9nOaWh+acrC0t6K+75Y+W55So5oi35L+h5oGvXHJcbiAgICAgICAgdGhpcy50b2tlbmxvZ2luKCk7IC8vIOW/q+aNt+eZu+W9lVxyXG4gICAgICAgIC8vIC8vIOi0puWPt+WvhueggeeZu+W9lVxyXG4gICAgICAgIC8vIHRoaXMubG9naW4oKTtcclxuICAgICAgICAvL+WCqOWtmOe8k+WtmFxyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB2YWx1ZSk7XHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XHJcblxyXG4gICAgICAgIC8vIOS/neWtmOacgOmrmOWIhuWIsOacrOWcsFxyXG4gICAgICAgIC8vIGNvbnN0IEtFWV9CRVNUX1NDT1JFID0gXCJiZXN0U2NvcmVcIjtcclxuICAgICAgICAvLyBsZXQgYmVzdFNjb3JlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKEtFWV9CRVNUX1NDT1JFKTtcclxuICAgICAgICAvLyBpZiAoYmVzdFNjb3JlID09PSBcIm51bGxcIiB8fCB0aGlzLnNjb3JlID4gYmVzdFNjb3JlKSB7XHJcbiAgICAgICAgLy8gICAgIGJlc3RTY29yZSA9IHRoaXMuc2NvcmU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShLRVlfQkVTVF9TQ09SRSwgYmVzdFNjb3JlKTtcclxuICAgICAgICBcclxuXHJcbiBcclxuICAgIH0sXHJcbiAgICB0b2tlbmxvZ2luOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vIOiOt+WPluacrOWcsGpzb24gIOS/oeaBr1xyXG4gICAgICAgIC8vIGNjLmxvYWRlci5sb2FkKCBjYy51cmwucmF3KFwicmVzb3VyY2VzL2xvZ2luLmpzb25cIiksZnVuY3Rpb24oZXJyLHJlcyl7ICBcclxuICAgICAgICAvLyBjYy5sb2FkZXIubG9hZFJlcygnbG9naW4uanNvbicsZnVuY3Rpb24oZXJyLHJlcyl7ICAgLy/pu5jorqRyZXNvdXJjZXNcclxuICAgICAgICAvLyAgICAgbGV0IGpzb24gPSByZXMuanNvbjtcclxuICAgICAgICAvLyAgICAgdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAvLyAgICAgICAgICd0b2tlbic6IGpzb24udG9rZW4sXHJcbiAgICAgICAgLy8gICAgIH07XHJcbiAgICAgICAgLy8gICAgIGNjLmxvZyhqc29uLnRva2VuKTsgXHJcbiAgICAgICAgLy8gICAgIHZhciByZXMgPSBodHRwUmVxdWVzdC5odHRwUG9zdCgnaHR0cHM6Ly93d3cubWhlYXJ0Lnh5ei9hcHAvYXBpLXNlcnZlci90b2tlbi1sb2dpbicsIHBhcmFtcyAsZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAvLyAgICAgICAgIGNjLmxvYWRlci5yZWxlYXNlKCdyZXNvdXJjZXMvbG9naW4uanNvbicpOyAvL+mHiuaUvmpzb24g6LWE5rqQXHJcbiAgICAgICAgLy8gICAgICAgICAvLyBpZihjYy5zeXMuaXNOYXRpdmUpeyAgLy8gIGpzYi5maWxlVXRpbHPkuI3mlK/mjIEgd2ViICDor7vlhplcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICBqc2IuZmlsZVV0aWxzLndyaXRlU3RyaW5nVG9GaWxlKGRhdGEsdG9rZW4pXHJcbiAgICAgICAgLy8gICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gICAgICAgICAvLyBjYy5sb2coZGF0YSk7IFxyXG4gICAgICAgIC8vICAgICAgICAgLy8g5pyq55m75b2V5by55Ye655m75b2VXHJcbiAgICAgICAgLy8gICAgICAgICBpZihkYXRhLmNvZGU9PTApe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIHRoaXMubG9naW5ib3gubm9kZS5hY3RpdmUgPSBmYWxzZTsgIC8vIOi/m+W6pumakOiXj1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgICAgIHZhciB0b2tlbiA9Y2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgIGlmKHRva2VuKXtcclxuICAgICAgICAgICAgICAgIGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCdodHRwczovL3d3dy5taGVhcnQueHl6L2FwcC9hcGktc2VydmVyL3Rva2VuLWxvZ2luJywgeyd0b2tlbic6dG9rZW59ICxmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9dGhpcztcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2FkZXIucmVsZWFzZSgncmVzb3VyY2VzL2xvZ2luLmpzb24nKTsgLy/ph4rmlL5qc29uIOi1hOa6kFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmKGNjLnN5cy5pc05hdGl2ZSl7ICAvLyAganNiLmZpbGVVdGlsc+S4jeaUr+aMgSB3ZWIgIOivu+WGmVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBqc2IuZmlsZVV0aWxzLndyaXRlU3RyaW5nVG9GaWxlKGRhdGEsdG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhkYXRhKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5pyq55m75b2V5by55Ye655m75b2VXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5jb2RlPT0wKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5sb2dpbmJveC5ub2RlLmFjdGl2ZSA9IGZhbHNlOyAgLy8g6L+b5bqm6ZqQ6JePXHJcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmxvZ2luYm94Lm5vZGUuYWN0aXZlID0gZmFsc2U7ICAvLyDov5vluqbpmpDol49cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9IFxyXG4gICAgfSxcclxuXHJcbiAgICBsb2dpbjogZnVuY3Rpb24oKXtcclxuICAgIFxyXG4gICAgICAgdmFyIGxvZ2lubmFtZSA9IHRoaXMucmVnaXN0ZXJfbG9naW5fbmFtZS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xyXG4gICAgICAgdmFyIHBhc3N3b3JkID0gdGhpcy5yZWdpc3Rlcl9sb2dpbl9wYXNzd29yZC5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICdsb2dpbm5hbWUnOiBsb2dpbm5hbWUsXHJcbiAgICAgICAgICAgICdwYXNzd29yZCc6IHBhc3N3b3JkLFxyXG4gICAgICAgICAgICAvLyAnbG9naW5uYW1lJzogJ3lpbmNhbjE5OTMnLFxyXG4gICAgICAgICAgICAvLyAncGFzc3dvcmQnOiAxMjM0NTYsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIF90aGlzPSB0aGlzO1xyXG4gICAgICAgIGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCdodHRwczovL3d3dy5taGVhcnQueHl6L2FwcC9hcGktc2VydmVyL2xvZ2luJywgcGFyYW1zICxmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBjYy5sb2coZGF0YSk7IFxyXG4gICAgICAgICAgICBpZihkYXRhLmNvZGU9PTEpe1xyXG4gICAgICAgICAgICAgICAgLy8gX3RoaXMucmVnaXN0ZXJfYWxlcnQuY29sb3IgPSAgbmV3IGNjLmNvbG9yKCcjQkRGRjAwJyk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5yZWdpc3Rlcl9hbGVydC5zdHJpbmcgPScnO1xyXG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGRhdGEuZGF0YS50b2tlbik7XHJcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvZ2lubmFtZScsIGxvZ2lubmFtZSk7XHJcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Bhc3N3b3JkJywgcGFzc3dvcmQpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMubm9kZS5hY3RpdmUgPWZhbHNlO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIF90aGlzLnJlZ2lzdGVyX2FsZXJ0LnN0cmluZyA9J+i0puWPt+WvhueggemUmeivryEnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5pON5L2c5paH5pysLS3kv67mlLnnlKjmiLfkv6Hmga9cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIFxyXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIC8vIGNjLmxvZyhkYXRhKVxyXG4gICAgICAgIC8vIHZhciB1c2VyQ291bnQgPSAgY2MuZmluZChcIkNhbnZhcy9ncm91bmQvZWRpdGJveF9jb3VudFwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xyXG4gICAgICAgIC8vIHZhciB1c2VyUGFzc3dhcmQgPSAgY2MuZmluZChcIkNhbnZhcy9ncm91bmQvZWRpdGJveF9wYXNzd2FyZFwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi55So5oi36LSm5Y+377yaXCIrdXNlckNvdW50KyBcIueUqOaIt+Wvhuegge+8mlwiKyB1c2VyUGFzc3dhcmQpO1xyXG4gICAgICAgIC8vIEh0dHBIZWxwLmxvZ2luKHVzZXJDb3VudCx1c2VyUGFzc3dhcmQsZnVuY3Rpb24oaXNTdWNjZXNzLERhdGEpe1xyXG4gICAgICAgIC8vICAgICB2YXIgaW5mbyA9IERhdGE7XHJcbiAgICAgICAgLy8gICAgIGlmKHRydWUgPT0gaXNTdWNjZXNzKXtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwibG9naW4gIHN1Y2Nlc3MhISFcIik7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhpbmZvKTtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnVzZXJuYW1lID0gaW5mby51c2VybmFtZTtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLmdhbWVwb2ludCA9IGluZm8uZ2FtZXBvaW50O1xyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8uc2tleSA9IGluZm8uc2tleTtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnVzZXJpZCA9IGluZm8udXNlcmlkO1xyXG4gXHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby5tb25leSA9IGluZm8ubW9uZXk7XHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby51c2VyaWQgPSBpbmZvLnVzZXJpZDtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnBhc3N3b3JkID0gaW5mby5wYXNzd29yZDtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnNhbHQgPSBpbmZvLnNhbHQ7XHJcbiBcclxuICAgICAgICAvLyAgICAgICAgIC8v55m75b2V5oiQ5Yqf5ZCO5Yqg6L295Zyw5Zu+6LWE5rqQXHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21hcCcpO1xyXG4gICAgICAgIC8vICAgICB9ZWxzZXtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwibG9naW4gIGZpbGVkISEhXCIpXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICBcclxuICAgIH0sXHJcbiBcclxuICAgIHN0YXJ0ICgpIHtcclxuIFxyXG4gICAgfSxcclxuIFxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcblxyXG4gICAgc2hvd19kbGcgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPXRydWU7XHJcbiAgICB9LFxyXG4gICAgaGlkZGVuX2RsZyAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9ZmFsc2U7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=