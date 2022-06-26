
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/login/myserver.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bfe2c9uBzZLZbQL4m1ej4tE', 'myserver');
// Script/login/myserver.js

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
    var _this = this;

    var token = cc.sys.localStorage.getItem('token');

    if (token) {
      httpRequest.httpPost('https://www.mheart.xyz/app/api-server/token-login', {
        'token': token
      }, function (data) {
        // cc.loader.release('resources/login.json'); //释放json 资源
        // if(cc.sys.isNative){  //  jsb.fileUtils不支持 web  读写
        //     jsb.fileUtils.writeStringToFile(data,token)
        // }
        // cc.log(data); 
        // 未登录弹出登录
        if (data.code == 0) {// this.loginbox.node.active = false;  // 进度隐藏
        } else {
          this.node.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcbXlzZXJ2ZXIuanMiXSwibmFtZXMiOlsiSHR0cEhlbHBlciIsInJlcXVpcmUiLCJodHRwUmVxdWVzdCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicmVnaXN0ZXJfYWxlcnQiLCJMYWJlbCIsInJlZ2lzdGVyX2xvZ2luX25hbWUiLCJFZGl0Qm94IiwicmVnaXN0ZXJfbG9naW5fcGFzc3dvcmQiLCJvbkxvYWQiLCJsb2dpbm5hbWUiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFzc3dvcmQiLCJnZXRDb21wb25lbnQiLCJzdHJpbmciLCJ0b2tlbmxvZ2luIiwiX3RoaXMiLCJ0b2tlbiIsImh0dHBQb3N0IiwiZGF0YSIsImNvZGUiLCJub2RlIiwiYWN0aXZlIiwibG9naW4iLCJwYXJhbXMiLCJsb2ciLCJzZXRJdGVtIiwiYnRuQ2xpY2sxIiwiZXZlbnQiLCJjdXN0b21FdmVudERhdGEiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJzZXJ2ZXIiLCJ1c2VyaW5mbyIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwiY2FsbGJhY2siLCJzdGFydCIsInNob3dfZGxnIiwiaGlkZGVuX2RsZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXhCLEVBQ0E7QUFDQTs7O0FBQ0EsSUFBSUMsV0FBVyxHQUFJLElBQUlGLFVBQUosRUFBbkI7QUFDQUcsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLGNBQWMsRUFBRUosRUFBRSxDQUFDSyxLQURYO0FBRVJDLElBQUFBLG1CQUFtQixFQUFFTixFQUFFLENBQUNPLE9BRmhCO0FBR1JDLElBQUFBLHVCQUF1QixFQUFFUixFQUFFLENBQUNPO0FBSHBCLEdBSFA7QUFT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cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIEh0dHBIZWxwZXIgPSByZXF1aXJlKFwiaHR0cFwiKTtcclxuLy8gdmFyIGZzID0gcmVxdWlyZSgnZnMnKTsgLy8g5byV5YWlZnPmqKHlnZdcclxuLy8gdmFyIGdsb2JhbHVzZXJpbmZvID0gcmVxdWlyZShcIkdsb2JhbHVzZXJJbmZvXCIpO1xyXG5sZXQgaHR0cFJlcXVlc3QgPSAgbmV3IEh0dHBIZWxwZXIoKTsgIFxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiBcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICByZWdpc3Rlcl9hbGVydDogY2MuTGFiZWwsXHJcbiAgICAgICAgcmVnaXN0ZXJfbG9naW5fbmFtZTogY2MuRWRpdEJveCxcclxuICAgICAgICByZWdpc3Rlcl9sb2dpbl9wYXNzd29yZDogY2MuRWRpdEJveFxyXG4gICAgfSxcclxuIFxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGxvZ2lubmFtZSA9Y2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2dpbm5hbWUnKTtcclxuICAgICAgICB2YXIgcGFzc3dvcmQgPWNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGFzc3dvcmQnKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhsb2dpbm5hbWUpXHJcbiAgICAgICAgaWYobG9naW5uYW1lKXtcclxuICAgICAgICAgICB0aGlzLnJlZ2lzdGVyX2xvZ2luX25hbWUuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZz1sb2dpbm5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGxvZ2lubmFtZSl7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJfbG9naW5fcGFzc3dvcmQuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZz1wYXNzd29yZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5pON5L2c5paH5pysLS3or7vlj5bnlKjmiLfkv6Hmga9cclxuICAgICAgICB0aGlzLnRva2VubG9naW4oKTsgLy8g5b+r5o2355m75b2VXHJcbiAgICAgICAgLy8gLy8g6LSm5Y+35a+G56CB55m75b2VXHJcbiAgICAgICAgLy8gdGhpcy5sb2dpbigpO1xyXG4gICAgICAgIC8v5YKo5a2Y57yT5a2YXHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHZhbHVlKTtcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuXHJcbiAgICAgICAgLy8g5L+d5a2Y5pyA6auY5YiG5Yiw5pys5ZywXHJcbiAgICAgICAgLy8gY29uc3QgS0VZX0JFU1RfU0NPUkUgPSBcImJlc3RTY29yZVwiO1xyXG4gICAgICAgIC8vIGxldCBiZXN0U2NvcmUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oS0VZX0JFU1RfU0NPUkUpO1xyXG4gICAgICAgIC8vIGlmIChiZXN0U2NvcmUgPT09IFwibnVsbFwiIHx8IHRoaXMuc2NvcmUgPiBiZXN0U2NvcmUpIHtcclxuICAgICAgICAvLyAgICAgYmVzdFNjb3JlID0gdGhpcy5zY29yZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKEtFWV9CRVNUX1NDT1JFLCBiZXN0U2NvcmUpO1xyXG4gICAgICAgIFxyXG5cclxuIFxyXG4gICAgfSxcclxuICAgIHRva2VubG9naW46IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy8g6I635Y+W5pys5ZywanNvbiAg5L+h5oGvXHJcbiAgICAgICAgLy8gY2MubG9hZGVyLmxvYWQoIGNjLnVybC5yYXcoXCJyZXNvdXJjZXMvbG9naW4uanNvblwiKSxmdW5jdGlvbihlcnIscmVzKXsgIFxyXG4gICAgICAgIC8vIGNjLmxvYWRlci5sb2FkUmVzKCdsb2dpbi5qc29uJyxmdW5jdGlvbihlcnIscmVzKXsgICAvL+m7mOiupHJlc291cmNlc1xyXG4gICAgICAgIC8vICAgICBsZXQganNvbiA9IHJlcy5qc29uO1xyXG4gICAgICAgIC8vICAgICB2YXIgcGFyYW1zID0ge1xyXG4gICAgICAgIC8vICAgICAgICAgJ3Rva2VuJzoganNvbi50b2tlbixcclxuICAgICAgICAvLyAgICAgfTtcclxuICAgICAgICAvLyAgICAgY2MubG9nKGpzb24udG9rZW4pOyBcclxuICAgICAgICAvLyAgICAgdmFyIHJlcyA9IGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCdodHRwczovL3d3dy5taGVhcnQueHl6L2FwcC9hcGktc2VydmVyL3Rva2VuLWxvZ2luJywgcGFyYW1zICxmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIC8vICAgICAgICAgY2MubG9hZGVyLnJlbGVhc2UoJ3Jlc291cmNlcy9sb2dpbi5qc29uJyk7IC8v6YeK5pS+anNvbiDotYTmupBcclxuICAgICAgICAvLyAgICAgICAgIC8vIGlmKGNjLnN5cy5pc05hdGl2ZSl7ICAvLyAganNiLmZpbGVVdGlsc+S4jeaUr+aMgSB3ZWIgIOivu+WGmVxyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIGpzYi5maWxlVXRpbHMud3JpdGVTdHJpbmdUb0ZpbGUoZGF0YSx0b2tlbilcclxuICAgICAgICAvLyAgICAgICAgIC8vIH1cclxuICAgICAgICAvLyAgICAgICAgIC8vIGNjLmxvZyhkYXRhKTsgXHJcbiAgICAgICAgLy8gICAgICAgICAvLyDmnKrnmbvlvZXlvLnlh7rnmbvlvZVcclxuICAgICAgICAvLyAgICAgICAgIGlmKGRhdGEuY29kZT09MCl7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gdGhpcy5sb2dpbmJveC5ub2RlLmFjdGl2ZSA9IGZhbHNlOyAgLy8g6L+b5bqm6ZqQ6JePXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgdmFyIF90aGlzID10aGlzO1xyXG4gICAgIFxyXG4gICAgICAgIHZhciB0b2tlbiA9Y2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgICAgIGlmKHRva2VuKXtcclxuICAgICAgICAgICAgICAgIGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCdodHRwczovL3d3dy5taGVhcnQueHl6L2FwcC9hcGktc2VydmVyL3Rva2VuLWxvZ2luJywgeyd0b2tlbic6dG9rZW59ICxmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvYWRlci5yZWxlYXNlKCdyZXNvdXJjZXMvbG9naW4uanNvbicpOyAvL+mHiuaUvmpzb24g6LWE5rqQXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYoY2Muc3lzLmlzTmF0aXZlKXsgIC8vICBqc2IuZmlsZVV0aWxz5LiN5pSv5oyBIHdlYiAg6K+75YaZXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGpzYi5maWxlVXRpbHMud3JpdGVTdHJpbmdUb0ZpbGUoZGF0YSx0b2tlbilcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKGRhdGEpOyBcclxuICAgICAgICAgICAgICAgICAgICAvLyDmnKrnmbvlvZXlvLnlh7rnmbvlvZVcclxuICAgICAgICAgICAgICAgICAgICBpZihkYXRhLmNvZGU9PTApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmxvZ2luYm94Lm5vZGUuYWN0aXZlID0gZmFsc2U7ICAvLyDov5vluqbpmpDol49cclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9IFxyXG4gICAgfSxcclxuXHJcbiAgICBsb2dpbjogZnVuY3Rpb24oKXtcclxuICAgIFxyXG4gICAgICAgdmFyIGxvZ2lubmFtZSA9IHRoaXMucmVnaXN0ZXJfbG9naW5fbmFtZS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xyXG4gICAgICAgdmFyIHBhc3N3b3JkID0gdGhpcy5yZWdpc3Rlcl9sb2dpbl9wYXNzd29yZC5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICdsb2dpbm5hbWUnOiBsb2dpbm5hbWUsXHJcbiAgICAgICAgICAgICdwYXNzd29yZCc6IHBhc3N3b3JkLFxyXG4gICAgICAgICAgICAvLyAnbG9naW5uYW1lJzogJ3lpbmNhbjE5OTMnLFxyXG4gICAgICAgICAgICAvLyAncGFzc3dvcmQnOiAxMjM0NTYsXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIF90aGlzPSB0aGlzO1xyXG4gICAgICAgIGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCdodHRwczovL3d3dy5taGVhcnQueHl6L2FwcC9hcGktc2VydmVyL2xvZ2luJywgcGFyYW1zICxmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBjYy5sb2coZGF0YSk7IFxyXG4gICAgICAgICAgICBpZihkYXRhLmNvZGU9PTEpe1xyXG4gICAgICAgICAgICAgICAgLy8gX3RoaXMucmVnaXN0ZXJfYWxlcnQuY29sb3IgPSAgbmV3IGNjLmNvbG9yKCcjQkRGRjAwJyk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5yZWdpc3Rlcl9hbGVydC5zdHJpbmcgPScnO1xyXG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGRhdGEuZGF0YS50b2tlbik7XHJcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvZ2lubmFtZScsIGxvZ2lubmFtZSk7XHJcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Bhc3N3b3JkJywgcGFzc3dvcmQpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMubm9kZS5hY3RpdmUgPWZhbHNlO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIF90aGlzLnJlZ2lzdGVyX2FsZXJ0LnN0cmluZyA9J+i0puWPt+WvhueggemUmeivryEnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5pON5L2c5paH5pysLS3kv67mlLnnlKjmiLfkv6Hmga9cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGJ0bkNsaWNrMTogZnVuY3Rpb24gKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcclxuICAgICAgICAvLyAvLyDor7fmsYLnmbvlvZXmjqXlj6NcclxuICAgICAgICAvLyB2YXIgcGFyYW1zID0ge1xyXG4gICAgICAgIC8vICAgICAgICAgJ2xvZ2lubmFtZSc6ICd5aW5jYW4xOTkzJyxcclxuICAgICAgICAvLyAgICAgICAgICdwYXNzd29yZCc6IDEyMzQ1NixcclxuICAgICAgICAvLyAgICAgICAgICdzZXJ2ZXJpZCc6IDEsXHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BhcmFtcycsIEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBhcmFtc1wiKSk7XHJcbiAgICAgICAgdmFyIHRva2VuID1jYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICBcclxuICAgICAgICAvLyBjYy5sb2codmFsdWUpOyBcclxuICAgICAgICAvLyBsZXQgaHR0cFJlcXVlc3QgPSAgbmV3IEh0dHBIZWxwZXIoKTsgIFxyXG4gICAgICAgIGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCdodHRwczovL3d3dy5taGVhcnQueHl6L2FwcC9hcGktc2VydmVyL3VzZXItbG9naW4nLCB7J3Rva2VuJzp0b2tlbn0gLGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhkYXRhKTsgXHJcbiAgICAgICAgICAgIGlmKGRhdGEuY29kZT09MCl7IC8vIOeZu+W9leWksei0pe+8jOaIluacrOWcsOaVsOaNruWkseaViFxyXG4gICAgICAgICAgICAgICAgLy8g5by556qXXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgLy8g6K6+572u5pyN5Yqh5ZmoXHJcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlcnZlcicsIEpTT04uc3RyaW5naWZ5KGRhdGEuZGF0YS5zZXJ2ZXIpKTtcclxuICAgICAgICAgICAgICAgIGlmKGRhdGEuY29kZT09MSl7Ly8g55m75b2V5oiQ5Yqf77yM6L+b5YWl5ri45oiPXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKGRhdGEuZGF0YS51c2VyaW5mbyk7IFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcmluZm8nLCBKU09OLnN0cmluZ2lmeShkYXRhLmRhdGEudXNlcmluZm8pKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdob21lL2RhdGluZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcmluZm8nLCBKU09OLnN0cmluZ2lmeShkYXRhLmRhdGEudXNlcmluZm8pKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTsgLy/or7vlj5bmlbDmja5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGRhdGEuY29kZT09Mil7IC8vIOeZu+W9leaIkOWKn++8jOacquWumuS5ieinkuiJslxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOi/m+WFpeWumuS5ieinkuiJsueVjOmdoiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlcnZlciA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXJ2ZXInKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKHNlcnZlcik7IFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWIm+W7uuinkuiJslxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgncmVnaXN0ZXInKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvL+i/memHjCBldmVudCDmmK/kuIDkuKogVG91Y2ggRXZlbnQg5a+56LGh77yM5L2g5Y+v5Lul6YCa6L+HIGV2ZW50LnRhcmdldCDlj5bliLDkuovku7bnmoTlj5HpgIHoioLngrlcclxuICAgICAgICAvLyB2YXIgbm9kZSA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAvLyB2YXIgYnV0dG9uID0gbm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICAvL+i/memHjOeahCBjdXN0b21FdmVudERhdGEg5Y+C5pWw5bCx562J5LqO5L2g5LmL5YmN6K6+572u55qEIFwiY2xpY2sxIHVzZXIgZGF0YVwiXHJcbiAgICAgICAgLy8gY2MubG9nKFwibm9kZT1cIiwgbm9kZS5uYW1lLCBcIiBldmVudD1cIiwgZXZlbnQudHlwZSwgXCIgZGF0YT1cIiwgY3VzdG9tRXZlbnREYXRhKTtcclxuICAgIH0sXHJcblxyXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIC8vIGNjLmxvZyhkYXRhKVxyXG4gICAgICAgIC8vIHZhciB1c2VyQ291bnQgPSAgY2MuZmluZChcIkNhbnZhcy9ncm91bmQvZWRpdGJveF9jb3VudFwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xyXG4gICAgICAgIC8vIHZhciB1c2VyUGFzc3dhcmQgPSAgY2MuZmluZChcIkNhbnZhcy9ncm91bmQvZWRpdGJveF9wYXNzd2FyZFwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi55So5oi36LSm5Y+377yaXCIrdXNlckNvdW50KyBcIueUqOaIt+Wvhuegge+8mlwiKyB1c2VyUGFzc3dhcmQpO1xyXG4gICAgICAgIC8vIEh0dHBIZWxwLmxvZ2luKHVzZXJDb3VudCx1c2VyUGFzc3dhcmQsZnVuY3Rpb24oaXNTdWNjZXNzLERhdGEpe1xyXG4gICAgICAgIC8vICAgICB2YXIgaW5mbyA9IERhdGE7XHJcbiAgICAgICAgLy8gICAgIGlmKHRydWUgPT0gaXNTdWNjZXNzKXtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwibG9naW4gIHN1Y2Nlc3MhISFcIik7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhpbmZvKTtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnVzZXJuYW1lID0gaW5mby51c2VybmFtZTtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLmdhbWVwb2ludCA9IGluZm8uZ2FtZXBvaW50O1xyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8uc2tleSA9IGluZm8uc2tleTtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnVzZXJpZCA9IGluZm8udXNlcmlkO1xyXG4gXHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby5tb25leSA9IGluZm8ubW9uZXk7XHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby51c2VyaWQgPSBpbmZvLnVzZXJpZDtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnBhc3N3b3JkID0gaW5mby5wYXNzd29yZDtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnNhbHQgPSBpbmZvLnNhbHQ7XHJcbiBcclxuICAgICAgICAvLyAgICAgICAgIC8v55m75b2V5oiQ5Yqf5ZCO5Yqg6L295Zyw5Zu+6LWE5rqQXHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21hcCcpO1xyXG4gICAgICAgIC8vICAgICB9ZWxzZXtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwibG9naW4gIGZpbGVkISEhXCIpXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICBcclxuICAgIH0sXHJcbiBcclxuICAgIHN0YXJ0ICgpIHtcclxuIFxyXG4gICAgfSxcclxuIFxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcblxyXG4gICAgc2hvd19kbGcgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPXRydWU7XHJcbiAgICB9LFxyXG4gICAgaGlkZGVuX2RsZyAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9ZmFsc2U7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=