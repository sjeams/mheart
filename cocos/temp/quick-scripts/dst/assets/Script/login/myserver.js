
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
    user_status: cc.Node,
    user_phone: cc.Label // register_login_name: cc.EditBox,
    // register_login_password: cc.EditBox

  },
  onLoad: function onLoad() {
    this.tokenlogin(); // 快捷登录
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
        // cc.loader.release('resources/login.json'); //释放json 资源
        // if(cc.sys.isNative){  //  jsb.fileUtils不支持 web  读写
        //     jsb.fileUtils.writeStringToFile(data,token)
        // }
        // cc.log(data); 
        // 登录成功
        if (data.code == 1) {
          //定位弹出窗口
          var user_status = cc.find("Canvas/server/user_status");
          user_status.active = true;
          var user_phone = cc.find("Canvas/server/user_status/user_phone");
          var loginname = data.data.userinfo.loginname; // 其中slice(start, end)：用于提取字符串的片段
          // str.slice(1) 指下标为1之后的所有元素

          var phone = loginname.slice(0, 3) + "****" + loginname.slice(7, 10);
          user_phone.getComponent(cc.Label).string = phone;
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
  //     httpRequest.httpPost('https://www.mheart.xyz/app/api-server/login', params ,function (data) {
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
  btnClick1: function btnClick1(event, customEventData) {
    // // 请求登录接口
    // var params = {
    //         'loginname': 'yincan1993',
    //         'password': 123456,
    //         'serverid': 1,
    // };
    // cc.sys.localStorage.setItem('params', JSON.stringify(params));
    // var params = JSON.parse(cc.sys.localStorage.getItem("params"));
    var token = cc.sys.localStorage.getItem('token'); // cc.log(value); 
    // let httpRequest =  new HttpHelper();  

    httpRequest.httpPost('https://www.mheart.xyz/app/api-server/user-login', {
      'token': token
    }, function (data) {
      // cc.log(data); 
      if (data.code == 0) {// 登录失败，或本地数据失效
        // 弹窗
      } else {
        // 设置服务器
        cc.sys.localStorage.setItem('server', JSON.stringify(data.data.server));

        if (data.code == 1) {
          // 登录成功，进入游戏
          // cc.log(data.data.userinfo); 
          cc.sys.localStorage.setItem('userinfo', JSON.stringify(data.data.userinfo));
          cc.director.loadScene('/home/dating'); // cc.sys.localStorage.setItem('userinfo', JSON.stringify(data.data.userinfo));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcbXlzZXJ2ZXIuanMiXSwibmFtZXMiOlsiSHR0cEhlbHBlciIsInJlcXVpcmUiLCJodHRwUmVxdWVzdCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidXNlcl9zdGF0dXMiLCJOb2RlIiwidXNlcl9waG9uZSIsIkxhYmVsIiwib25Mb2FkIiwidG9rZW5sb2dpbiIsInRva2VuIiwic3lzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImh0dHBQb3N0IiwiZGF0YSIsImNvZGUiLCJmaW5kIiwiYWN0aXZlIiwibG9naW5uYW1lIiwidXNlcmluZm8iLCJwaG9uZSIsInNsaWNlIiwiZ2V0Q29tcG9uZW50Iiwic3RyaW5nIiwiYnRuQ2xpY2sxIiwiZXZlbnQiLCJjdXN0b21FdmVudERhdGEiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInNlcnZlciIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwicGFyc2UiLCJjYWxsYmFjayIsInN0YXJ0Iiwic2hvd19kbGciLCJub2RlIiwiaGlkZGVuX2RsZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXhCLEVBQ0E7QUFDQTs7O0FBQ0EsSUFBSUMsV0FBVyxHQUFJLElBQUlGLFVBQUosRUFBbkI7QUFDQUcsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFdBQVcsRUFBQ0osRUFBRSxDQUFDSyxJQURQO0FBRVJDLElBQUFBLFVBQVUsRUFBQ04sRUFBRSxDQUFDTyxLQUZOLENBR1I7QUFDQTs7QUFKUSxHQUhQO0FBVUxDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWTtBQUVoQixTQUFLQyxVQUFMLEdBRmdCLENBRUc7QUFFbkI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0QsWUFBR2xCLElBQUksQ0FBQ0MsSUFBTCxJQUFXLENBQWQsRUFBZ0I7QUFBRTtBQUNkO0FBQ0EsY0FBSWUsTUFBTSxHQUFHRixJQUFJLENBQUNLLEtBQUwsQ0FBV2xDLEVBQUUsQ0FBQ1csR0FBSCxDQUFPQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixRQUE1QixDQUFYLENBQWIsQ0FGWSxDQUdaO0FBQ0E7O0FBQ0FiLFVBQUFBLEVBQUUsQ0FBQ2dDLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixVQUF0QjtBQUNIO0FBQ0o7QUFFSixLQXZCRCxFQWJ5QyxDQXNDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNILEdBL0pJO0FBaUtMRSxFQUFBQSxRQUFRLEVBQUUsa0JBQVVULEtBQVYsRUFBaUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ1ExQixJQUFBQSxFQUFFLENBQUNnQyxRQUFILENBQVlDLFNBQVosQ0FBc0IsS0FBdEIsRUFyQmUsQ0FzQnZCO0FBQ0E7QUFDQTtBQUNBO0FBRUgsR0E1TEk7QUE4TExHLEVBQUFBLEtBOUxLLG1CQThMSSxDQUVSLENBaE1JO0FBa01MO0FBRUFDLEVBQUFBLFFBcE1LLHNCQW9NTztBQUVSLFNBQUtDLElBQUwsQ0FBVXBCLE1BQVYsR0FBa0IsSUFBbEI7QUFFSCxHQXhNSTtBQXlNTHFCLEVBQUFBLFVBek1LLHdCQXlNUztBQUNWLFNBQUtELElBQUwsQ0FBVXBCLE1BQVYsR0FBa0IsS0FBbEI7QUFDSDtBQTNNSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIEh0dHBIZWxwZXIgPSByZXF1aXJlKFwiaHR0cFwiKTtcclxuLy8gdmFyIGZzID0gcmVxdWlyZSgnZnMnKTsgLy8g5byV5YWlZnPmqKHlnZdcclxuLy8gdmFyIGdsb2JhbHVzZXJpbmZvID0gcmVxdWlyZShcIkdsb2JhbHVzZXJJbmZvXCIpO1xyXG5sZXQgaHR0cFJlcXVlc3QgPSAgbmV3IEh0dHBIZWxwZXIoKTsgIFxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiBcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICB1c2VyX3N0YXR1czpjYy5Ob2RlLFxyXG4gICAgICAgIHVzZXJfcGhvbmU6Y2MuTGFiZWwsXHJcbiAgICAgICAgLy8gcmVnaXN0ZXJfbG9naW5fbmFtZTogY2MuRWRpdEJveCxcclxuICAgICAgICAvLyByZWdpc3Rlcl9sb2dpbl9wYXNzd29yZDogY2MuRWRpdEJveFxyXG4gICAgfSxcclxuIFxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7ICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy50b2tlbmxvZ2luKCk7IC8vIOW/q+aNt+eZu+W9lVxyXG5cclxuICAgICAgICAvLyDmk43kvZzmlofmnKwtLeivu+WPlueUqOaIt+S/oeaBr1xyXG4gICBcclxuICAgICAgICAvLyAvLyDotKblj7flr4bnoIHnmbvlvZVcclxuICAgICAgICAvLyB0aGlzLmxvZ2luKCk7XHJcbiAgICAgICAgLy/lgqjlrZjnvJPlrZhcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdmFsdWUpO1xyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG5cclxuICAgICAgICAvLyDkv53lrZjmnIDpq5jliIbliLDmnKzlnLBcclxuICAgICAgICAvLyBjb25zdCBLRVlfQkVTVF9TQ09SRSA9IFwiYmVzdFNjb3JlXCI7XHJcbiAgICAgICAgLy8gbGV0IGJlc3RTY29yZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShLRVlfQkVTVF9TQ09SRSk7XHJcbiAgICAgICAgLy8gaWYgKGJlc3RTY29yZSA9PT0gXCJudWxsXCIgfHwgdGhpcy5zY29yZSA+IGJlc3RTY29yZSkge1xyXG4gICAgICAgIC8vICAgICBiZXN0U2NvcmUgPSB0aGlzLnNjb3JlO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oS0VZX0JFU1RfU0NPUkUsIGJlc3RTY29yZSk7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgdG9rZW5sb2dpbjogZnVuY3Rpb24oKXtcclxuICAgIFxyXG4gICAgICAgIC8vIOiOt+WPluacrOWcsGpzb24gIOS/oeaBr1xyXG4gICAgICAgIC8vIGNjLmxvYWRlci5sb2FkKCBjYy51cmwucmF3KFwicmVzb3VyY2VzL2xvZ2luLmpzb25cIiksZnVuY3Rpb24oZXJyLHJlcyl7ICBcclxuICAgICAgICAvLyBjYy5sb2FkZXIubG9hZFJlcygnbG9naW4uanNvbicsZnVuY3Rpb24oZXJyLHJlcyl7ICAgLy/pu5jorqRyZXNvdXJjZXNcclxuICAgICAgICAvLyAgICAgbGV0IGpzb24gPSByZXMuanNvbjtcclxuICAgICAgICAvLyAgICAgdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAvLyAgICAgICAgICd0b2tlbic6IGpzb24udG9rZW4sXHJcbiAgICAgICAgLy8gICAgIH07XHJcbiAgICAgICAgLy8gICAgIGNjLmxvZyhqc29uLnRva2VuKTsgXHJcbiAgICAgICAgLy8gICAgIHZhciByZXMgPSBodHRwUmVxdWVzdC5odHRwUG9zdCgnaHR0cHM6Ly93d3cubWhlYXJ0Lnh5ei9hcHAvYXBpLXNlcnZlci90b2tlbi1sb2dpbicsIHBhcmFtcyAsZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAvLyAgICAgICAgIGNjLmxvYWRlci5yZWxlYXNlKCdyZXNvdXJjZXMvbG9naW4uanNvbicpOyAvL+mHiuaUvmpzb24g6LWE5rqQXHJcbiAgICAgICAgLy8gICAgICAgICAvLyBpZihjYy5zeXMuaXNOYXRpdmUpeyAgLy8gIGpzYi5maWxlVXRpbHPkuI3mlK/mjIEgd2ViICDor7vlhplcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICBqc2IuZmlsZVV0aWxzLndyaXRlU3RyaW5nVG9GaWxlKGRhdGEsdG9rZW4pXHJcbiAgICAgICAgLy8gICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gICAgICAgICAvLyBjYy5sb2coZGF0YSk7IFxyXG4gICAgICAgIC8vICAgICAgICAgLy8g5pyq55m75b2V5by55Ye655m75b2VXHJcbiAgICAgICAgLy8gICAgICAgICBpZihkYXRhLmNvZGU9PTApe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIHRoaXMubG9naW5ib3gubm9kZS5hY3RpdmUgPSBmYWxzZTsgIC8vIOi/m+W6pumakOiXj1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgIFxyXG4gICAgICAgIHZhciB0b2tlbiA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuXHJcbiAgICAgICAgaWYodG9rZW4pe1xyXG4gICAgICAgICAgICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3QoJ2h0dHBzOi8vd3d3Lm1oZWFydC54eXovYXBwL2FwaS1zZXJ2ZXIvdG9rZW4tbG9naW4nLCB7J3Rva2VuJzp0b2tlbn0gLGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvYWRlci5yZWxlYXNlKCdyZXNvdXJjZXMvbG9naW4uanNvbicpOyAvL+mHiuaUvmpzb24g6LWE5rqQXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYoY2Muc3lzLmlzTmF0aXZlKXsgIC8vICBqc2IuZmlsZVV0aWxz5LiN5pSv5oyBIHdlYiAg6K+75YaZXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGpzYi5maWxlVXRpbHMud3JpdGVTdHJpbmdUb0ZpbGUoZGF0YSx0b2tlbilcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKGRhdGEpOyBcclxuICAgICAgICAgICAgICAgICAgICAvLyDnmbvlvZXmiJDlip9cclxuICAgICAgICAgICAgICAgICAgICBpZihkYXRhLmNvZGU9PTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/lrprkvY3lvLnlh7rnqpflj6NcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVzZXJfc3RhdHVzICA9Y2MuZmluZChcIkNhbnZhcy9zZXJ2ZXIvdXNlcl9zdGF0dXNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfc3RhdHVzLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXNlcl9waG9uZSAgPWNjLmZpbmQoXCJDYW52YXMvc2VydmVyL3VzZXJfc3RhdHVzL3VzZXJfcGhvbmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsb2dpbm5hbWUgPSAgZGF0YS5kYXRhLnVzZXJpbmZvLmxvZ2lubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5YW25Litc2xpY2Uoc3RhcnQsIGVuZCnvvJrnlKjkuo7mj5Dlj5blrZfnrKbkuLLnmoTniYfmrrVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RyLnNsaWNlKDEpIOaMh+S4i+agh+S4ujHkuYvlkI7nmoTmiYDmnInlhYPntKBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBob25lID0gbG9naW5uYW1lLnNsaWNlKDAsMykgKyBcIioqKipcIiArIGxvZ2lubmFtZS5zbGljZSg3LDEwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfcGhvbmUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9cGhvbmU7XHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0gXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGxvZ2luOiBmdW5jdGlvbigpe1xyXG4gICAgXHJcbiAgICAvLyAgICB2YXIgbG9naW5uYW1lID0gdGhpcy5yZWdpc3Rlcl9sb2dpbl9uYW1lLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XHJcbiAgICAvLyAgICB2YXIgcGFzc3dvcmQgPSB0aGlzLnJlZ2lzdGVyX2xvZ2luX3Bhc3N3b3JkLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XHJcbiAgICAvLyAgICAgdmFyIHBhcmFtcyA9IHtcclxuICAgIC8vICAgICAgICAgJ2xvZ2lubmFtZSc6IGxvZ2lubmFtZSxcclxuICAgIC8vICAgICAgICAgJ3Bhc3N3b3JkJzogcGFzc3dvcmQsXHJcbiAgICAvLyAgICAgICAgIC8vICdsb2dpbm5hbWUnOiAneWluY2FuMTk5MycsXHJcbiAgICAvLyAgICAgICAgIC8vICdwYXNzd29yZCc6IDEyMzQ1NixcclxuICAgIC8vICAgICB9O1xyXG4gICAgLy8gICAgIHZhciBfdGhpcz0gdGhpcztcclxuICAgIC8vICAgICBodHRwUmVxdWVzdC5odHRwUG9zdCgnaHR0cHM6Ly93d3cubWhlYXJ0Lnh5ei9hcHAvYXBpLXNlcnZlci9sb2dpbicsIHBhcmFtcyAsZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgIC8vICAgICAgICAgY2MubG9nKGRhdGEpOyBcclxuICAgIC8vICAgICAgICAgaWYoZGF0YS5jb2RlPT0xKXtcclxuICAgIC8vICAgICAgICAgICAgIC8vIF90aGlzLnJlZ2lzdGVyX2FsZXJ0LmNvbG9yID0gIG5ldyBjYy5jb2xvcignI0JERkYwMCcpO1xyXG4gICAgLy8gICAgICAgICAgICAgX3RoaXMucmVnaXN0ZXJfYWxlcnQuc3RyaW5nID0nJztcclxuICAgIC8vICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBkYXRhLmRhdGEudG9rZW4pO1xyXG4gICAgLy8gICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2dpbm5hbWUnLCBsb2dpbm5hbWUpO1xyXG4gICAgLy8gICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwYXNzd29yZCcsIHBhc3N3b3JkKTtcclxuICAgIC8vICAgICAgICAgICAgIF90aGlzLm5vZGUuYWN0aXZlID1mYWxzZTtcclxuICAgIC8vICAgICAgICAgfWVsc2V7XHJcbiAgICAvLyAgICAgICAgICAgICBfdGhpcy5yZWdpc3Rlcl9hbGVydC5zdHJpbmcgPSfotKblj7flr4bnoIHplJnor68hJztcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAvL+aTjeS9nOaWh+acrC0t5L+u5pS555So5oi35L+h5oGvXHJcbiAgICAvLyAgICAgfSk7XHJcblxyXG4gICAgLy8gfSxcclxuXHJcbiAgICBidG5DbGljazE6IGZ1bmN0aW9uIChldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XHJcbiAgICAgICAgLy8gLy8g6K+35rGC55m75b2V5o6l5Y+jXHJcbiAgICAgICAgLy8gdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAvLyAgICAgICAgICdsb2dpbm5hbWUnOiAneWluY2FuMTk5MycsXHJcbiAgICAgICAgLy8gICAgICAgICAncGFzc3dvcmQnOiAxMjM0NTYsXHJcbiAgICAgICAgLy8gICAgICAgICAnc2VydmVyaWQnOiAxLFxyXG4gICAgICAgIC8vIH07XHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwYXJhbXMnLCBKU09OLnN0cmluZ2lmeShwYXJhbXMpKTtcclxuICAgICAgICAvLyB2YXIgcGFyYW1zID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwYXJhbXNcIikpO1xyXG4gICAgICAgIHZhciB0b2tlbiA9Y2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgXHJcbiAgICAgICAgLy8gY2MubG9nKHZhbHVlKTsgXHJcbiAgICAgICAgLy8gbGV0IGh0dHBSZXF1ZXN0ID0gIG5ldyBIdHRwSGVscGVyKCk7ICBcclxuICAgICAgICBodHRwUmVxdWVzdC5odHRwUG9zdCgnaHR0cHM6Ly93d3cubWhlYXJ0Lnh5ei9hcHAvYXBpLXNlcnZlci91c2VyLWxvZ2luJywgeyd0b2tlbic6dG9rZW59ICxmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAvLyBjYy5sb2coZGF0YSk7IFxyXG4gICAgICAgICAgICBpZihkYXRhLmNvZGU9PTApeyAvLyDnmbvlvZXlpLHotKXvvIzmiJbmnKzlnLDmlbDmja7lpLHmlYhcclxuICAgICAgICAgICAgICAgIC8vIOW8ueeql1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIC8vIOiuvue9ruacjeWKoeWZqFxyXG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZXJ2ZXInLCBKU09OLnN0cmluZ2lmeShkYXRhLmRhdGEuc2VydmVyKSk7XHJcbiAgICAgICAgICAgICAgICBpZihkYXRhLmNvZGU9PTEpey8vIOeZu+W9leaIkOWKn++8jOi/m+WFpea4uOaIj1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhkYXRhLmRhdGEudXNlcmluZm8pOyBcclxuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJpbmZvJywgSlNPTi5zdHJpbmdpZnkoZGF0YS5kYXRhLnVzZXJpbmZvKSk7IFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnL2hvbWUvZGF0aW5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyaW5mbycsIEpTT04uc3RyaW5naWZ5KGRhdGEuZGF0YS51c2VyaW5mbykpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpOyAvL+ivu+WPluaVsOaNrlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5jb2RlPT0yKXsgLy8g55m75b2V5oiQ5Yqf77yM5pyq5a6a5LmJ6KeS6ImyXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6L+b5YWl5a6a5LmJ6KeS6Imy55WM6Z2iICAgICBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2VydmVyID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlcnZlcicpKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coc2VydmVyKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Yib5bu66KeS6ImyXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdyZWdpc3RlcicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8v6L+Z6YeMIGV2ZW50IOaYr+S4gOS4qiBUb3VjaCBFdmVudCDlr7nosaHvvIzkvaDlj6/ku6XpgJrov4cgZXZlbnQudGFyZ2V0IOWPluWIsOS6i+S7tueahOWPkemAgeiKgueCuVxyXG4gICAgICAgIC8vIHZhciBub2RlID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIC8vIHZhciBidXR0b24gPSBub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIC8v6L+Z6YeM55qEIGN1c3RvbUV2ZW50RGF0YSDlj4LmlbDlsLHnrYnkuo7kvaDkuYvliY3orr7nva7nmoQgXCJjbGljazEgdXNlciBkYXRhXCJcclxuICAgICAgICAvLyBjYy5sb2coXCJub2RlPVwiLCBub2RlLm5hbWUsIFwiIGV2ZW50PVwiLCBldmVudC50eXBlLCBcIiBkYXRhPVwiLCBjdXN0b21FdmVudERhdGEpO1xyXG4gICAgfSxcclxuXHJcbiAgICBjYWxsYmFjazogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gY2MubG9nKGRhdGEpXHJcbiAgICAgICAgLy8gdmFyIHVzZXJDb3VudCA9ICBjYy5maW5kKFwiQ2FudmFzL2dyb3VuZC9lZGl0Ym94X2NvdW50XCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XHJcbiAgICAgICAgLy8gdmFyIHVzZXJQYXNzd2FyZCA9ICBjYy5maW5kKFwiQ2FudmFzL2dyb3VuZC9lZGl0Ym94X3Bhc3N3YXJkXCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLnlKjmiLfotKblj7fvvJpcIit1c2VyQ291bnQrIFwi55So5oi35a+G56CB77yaXCIrIHVzZXJQYXNzd2FyZCk7XHJcbiAgICAgICAgLy8gSHR0cEhlbHAubG9naW4odXNlckNvdW50LHVzZXJQYXNzd2FyZCxmdW5jdGlvbihpc1N1Y2Nlc3MsRGF0YSl7XHJcbiAgICAgICAgLy8gICAgIHZhciBpbmZvID0gRGF0YTtcclxuICAgICAgICAvLyAgICAgaWYodHJ1ZSA9PSBpc1N1Y2Nlc3Mpe1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJsb2dpbiAgc3VjY2VzcyEhIVwiKTtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGluZm8pO1xyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8udXNlcm5hbWUgPSBpbmZvLnVzZXJuYW1lO1xyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8uZ2FtZXBvaW50ID0gaW5mby5nYW1lcG9pbnQ7XHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby5za2V5ID0gaW5mby5za2V5O1xyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8udXNlcmlkID0gaW5mby51c2VyaWQ7XHJcbiBcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLm1vbmV5ID0gaW5mby5tb25leTtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnVzZXJpZCA9IGluZm8udXNlcmlkO1xyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8ucGFzc3dvcmQgPSBpbmZvLnBhc3N3b3JkO1xyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8uc2FsdCA9IGluZm8uc2FsdDtcclxuIFxyXG4gICAgICAgIC8vICAgICAgICAgLy/nmbvlvZXmiJDlip/lkI7liqDovb3lnLDlm77otYTmupBcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFwJyk7XHJcbiAgICAgICAgLy8gICAgIH1lbHNle1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJsb2dpbiAgZmlsZWQhISFcIilcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuIFxyXG4gICAgc3RhcnQgKCkge1xyXG4gXHJcbiAgICB9LFxyXG4gXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxuXHJcbiAgICBzaG93X2RsZyAoKSB7XHJcbiBcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID10cnVlO1xyXG5cclxuICAgIH0sXHJcbiAgICBoaWRkZW5fZGxnICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID1mYWxzZTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==