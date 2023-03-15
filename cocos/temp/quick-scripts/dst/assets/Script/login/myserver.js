
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

    httpRequest.httpPost('https://www.aheart.cn/app/api-server/user-login', {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcbXlzZXJ2ZXIuanMiXSwibmFtZXMiOlsiSHR0cEhlbHBlciIsInJlcXVpcmUiLCJodHRwUmVxdWVzdCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidXNlcl9zdGF0dXMiLCJOb2RlIiwidXNlcl9waG9uZSIsIkxhYmVsIiwib25Mb2FkIiwidG9rZW5sb2dpbiIsInRva2VuIiwic3lzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImh0dHBQb3N0IiwiZGF0YSIsImNvZGUiLCJmaW5kIiwiYWN0aXZlIiwibG9naW5uYW1lIiwidXNlcmluZm8iLCJwaG9uZSIsInNsaWNlIiwiZ2V0Q29tcG9uZW50Iiwic3RyaW5nIiwiYnRuQ2xpY2sxIiwiZXZlbnQiLCJjdXN0b21FdmVudERhdGEiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInNlcnZlciIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwicGFyc2UiLCJjYWxsYmFjayIsInN0YXJ0Iiwic2hvd19kbGciLCJub2RlIiwiaGlkZGVuX2RsZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXhCLEVBQ0E7QUFDQTs7O0FBQ0EsSUFBSUMsV0FBVyxHQUFJLElBQUlGLFVBQUosRUFBbkI7QUFDQUcsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFdBQVcsRUFBQ0osRUFBRSxDQUFDSyxJQURQO0FBRVJDLElBQUFBLFVBQVUsRUFBQ04sRUFBRSxDQUFDTyxLQUZOLENBR1I7QUFDQTs7QUFKUSxHQUhQO0FBVUxDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWTtBQUVoQixTQUFLQyxVQUFMLEdBRmdCLENBRUc7QUFFbkI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0QsWUFBR2xCLElBQUksQ0FBQ0MsSUFBTCxJQUFXLENBQWQsRUFBZ0I7QUFBRTtBQUNkO0FBQ0EsY0FBSWUsTUFBTSxHQUFHRixJQUFJLENBQUNLLEtBQUwsQ0FBV2xDLEVBQUUsQ0FBQ1csR0FBSCxDQUFPQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixRQUE1QixDQUFYLENBQWIsQ0FGWSxDQUdaO0FBQ0E7O0FBQ0FiLFVBQUFBLEVBQUUsQ0FBQ2dDLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixVQUF0QjtBQUNIO0FBQ0o7QUFFSixLQXZCRCxFQWJ5QyxDQXNDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNILEdBL0pJO0FBaUtMRSxFQUFBQSxRQUFRLEVBQUUsa0JBQVVULEtBQVYsRUFBaUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ1ExQixJQUFBQSxFQUFFLENBQUNnQyxRQUFILENBQVlDLFNBQVosQ0FBc0IsS0FBdEIsRUFyQmUsQ0FzQnZCO0FBQ0E7QUFDQTtBQUNBO0FBRUgsR0E1TEk7QUE4TExHLEVBQUFBLEtBOUxLLG1CQThMSSxDQUVSLENBaE1JO0FBa01MO0FBRUFDLEVBQUFBLFFBcE1LLHNCQW9NTztBQUVSLFNBQUtDLElBQUwsQ0FBVXBCLE1BQVYsR0FBa0IsSUFBbEI7QUFFSCxHQXhNSTtBQXlNTHFCLEVBQUFBLFVBek1LLHdCQXlNUztBQUNWLFNBQUtELElBQUwsQ0FBVXBCLE1BQVYsR0FBa0IsS0FBbEI7QUFDSDtBQTNNSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIEh0dHBIZWxwZXIgPSByZXF1aXJlKFwiaHR0cFwiKTtcclxuLy8gdmFyIGZzID0gcmVxdWlyZSgnZnMnKTsgLy8g5byV5YWlZnPmqKHlnZdcclxuLy8gdmFyIGdsb2JhbHVzZXJpbmZvID0gcmVxdWlyZShcIkdsb2JhbHVzZXJJbmZvXCIpO1xyXG5sZXQgaHR0cFJlcXVlc3QgPSAgbmV3IEh0dHBIZWxwZXIoKTsgIFxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiBcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICB1c2VyX3N0YXR1czpjYy5Ob2RlLFxyXG4gICAgICAgIHVzZXJfcGhvbmU6Y2MuTGFiZWwsXHJcbiAgICAgICAgLy8gcmVnaXN0ZXJfbG9naW5fbmFtZTogY2MuRWRpdEJveCxcclxuICAgICAgICAvLyByZWdpc3Rlcl9sb2dpbl9wYXNzd29yZDogY2MuRWRpdEJveFxyXG4gICAgfSxcclxuIFxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7ICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy50b2tlbmxvZ2luKCk7IC8vIOW/q+aNt+eZu+W9lVxyXG5cclxuICAgICAgICAvLyDmk43kvZzmlofmnKwtLeivu+WPlueUqOaIt+S/oeaBr1xyXG4gICBcclxuICAgICAgICAvLyAvLyDotKblj7flr4bnoIHnmbvlvZVcclxuICAgICAgICAvLyB0aGlzLmxvZ2luKCk7XHJcbiAgICAgICAgLy/lgqjlrZjnvJPlrZhcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdmFsdWUpO1xyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG5cclxuICAgICAgICAvLyDkv53lrZjmnIDpq5jliIbliLDmnKzlnLBcclxuICAgICAgICAvLyBjb25zdCBLRVlfQkVTVF9TQ09SRSA9IFwiYmVzdFNjb3JlXCI7XHJcbiAgICAgICAgLy8gbGV0IGJlc3RTY29yZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShLRVlfQkVTVF9TQ09SRSk7XHJcbiAgICAgICAgLy8gaWYgKGJlc3RTY29yZSA9PT0gXCJudWxsXCIgfHwgdGhpcy5zY29yZSA+IGJlc3RTY29yZSkge1xyXG4gICAgICAgIC8vICAgICBiZXN0U2NvcmUgPSB0aGlzLnNjb3JlO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oS0VZX0JFU1RfU0NPUkUsIGJlc3RTY29yZSk7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgdG9rZW5sb2dpbjogZnVuY3Rpb24oKXtcclxuICAgIFxyXG4gICAgICAgIC8vIOiOt+WPluacrOWcsGpzb24gIOS/oeaBr1xyXG4gICAgICAgIC8vIGNjLmxvYWRlci5sb2FkKCBjYy51cmwucmF3KFwicmVzb3VyY2VzL2xvZ2luLmpzb25cIiksZnVuY3Rpb24oZXJyLHJlcyl7ICBcclxuICAgICAgICAvLyBjYy5sb2FkZXIubG9hZFJlcygnbG9naW4uanNvbicsZnVuY3Rpb24oZXJyLHJlcyl7ICAgLy/pu5jorqRyZXNvdXJjZXNcclxuICAgICAgICAvLyAgICAgbGV0IGpzb24gPSByZXMuanNvbjtcclxuICAgICAgICAvLyAgICAgdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAvLyAgICAgICAgICd0b2tlbic6IGpzb24udG9rZW4sXHJcbiAgICAgICAgLy8gICAgIH07XHJcbiAgICAgICAgLy8gICAgIGNjLmxvZyhqc29uLnRva2VuKTsgXHJcbiAgICAgICAgLy8gICAgIHZhciByZXMgPSBodHRwUmVxdWVzdC5odHRwUG9zdCgnaHR0cHM6Ly93d3cuYWhlYXJ0LmNuL2FwcC9hcGktc2VydmVyL3Rva2VuLWxvZ2luJywgcGFyYW1zICxmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIC8vICAgICAgICAgY2MubG9hZGVyLnJlbGVhc2UoJ3Jlc291cmNlcy9sb2dpbi5qc29uJyk7IC8v6YeK5pS+anNvbiDotYTmupBcclxuICAgICAgICAvLyAgICAgICAgIC8vIGlmKGNjLnN5cy5pc05hdGl2ZSl7ICAvLyAganNiLmZpbGVVdGlsc+S4jeaUr+aMgSB3ZWIgIOivu+WGmVxyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIGpzYi5maWxlVXRpbHMud3JpdGVTdHJpbmdUb0ZpbGUoZGF0YSx0b2tlbilcclxuICAgICAgICAvLyAgICAgICAgIC8vIH1cclxuICAgICAgICAvLyAgICAgICAgIC8vIGNjLmxvZyhkYXRhKTsgXHJcbiAgICAgICAgLy8gICAgICAgICAvLyDmnKrnmbvlvZXlvLnlh7rnmbvlvZVcclxuICAgICAgICAvLyAgICAgICAgIGlmKGRhdGEuY29kZT09MCl7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gdGhpcy5sb2dpbmJveC5ub2RlLmFjdGl2ZSA9IGZhbHNlOyAgLy8g6L+b5bqm6ZqQ6JePXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgXHJcbiAgICAgICAgdmFyIHRva2VuID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG5cclxuICAgICAgICBpZih0b2tlbil7XHJcbiAgICAgICAgICAgICAgICBodHRwUmVxdWVzdC5odHRwUG9zdCgnaHR0cHM6Ly93d3cuYWhlYXJ0LmNuL2FwcC9hcGktc2VydmVyL3Rva2VuLWxvZ2luJywgeyd0b2tlbic6dG9rZW59ICxmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2FkZXIucmVsZWFzZSgncmVzb3VyY2VzL2xvZ2luLmpzb24nKTsgLy/ph4rmlL5qc29uIOi1hOa6kFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmKGNjLnN5cy5pc05hdGl2ZSl7ICAvLyAganNiLmZpbGVVdGlsc+S4jeaUr+aMgSB3ZWIgIOivu+WGmVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBqc2IuZmlsZVV0aWxzLndyaXRlU3RyaW5nVG9GaWxlKGRhdGEsdG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhkYXRhKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g55m75b2V5oiQ5YqfXHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZGF0YS5jb2RlPT0xKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5a6a5L2N5by55Ye656qX5Y+jXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB1c2VyX3N0YXR1cyAgPWNjLmZpbmQoXCJDYW52YXMvc2VydmVyL3VzZXJfc3RhdHVzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyX3N0YXR1cy5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVzZXJfcGhvbmUgID1jYy5maW5kKFwiQ2FudmFzL3NlcnZlci91c2VyX3N0YXR1cy91c2VyX3Bob25lXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbG9naW5uYW1lID0gIGRhdGEuZGF0YS51c2VyaW5mby5sb2dpbm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWFtuS4rXNsaWNlKHN0YXJ0LCBlbmQp77ya55So5LqO5o+Q5Y+W5a2X56ym5Liy55qE54mH5q61XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0ci5zbGljZSgxKSDmjIfkuIvmoIfkuLox5LmL5ZCO55qE5omA5pyJ5YWD57SgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwaG9uZSA9IGxvZ2lubmFtZS5zbGljZSgwLDMpICsgXCIqKioqXCIgKyBsb2dpbm5hbWUuc2xpY2UoNywxMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyX3Bob25lLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPXBob25lO1xyXG4gIFxyXG4gICAgICAgICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB9IFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBsb2dpbjogZnVuY3Rpb24oKXtcclxuICAgIFxyXG4gICAgLy8gICAgdmFyIGxvZ2lubmFtZSA9IHRoaXMucmVnaXN0ZXJfbG9naW5fbmFtZS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xyXG4gICAgLy8gICAgdmFyIHBhc3N3b3JkID0gdGhpcy5yZWdpc3Rlcl9sb2dpbl9wYXNzd29yZC5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xyXG4gICAgLy8gICAgIHZhciBwYXJhbXMgPSB7XHJcbiAgICAvLyAgICAgICAgICdsb2dpbm5hbWUnOiBsb2dpbm5hbWUsXHJcbiAgICAvLyAgICAgICAgICdwYXNzd29yZCc6IHBhc3N3b3JkLFxyXG4gICAgLy8gICAgICAgICAvLyAnbG9naW5uYW1lJzogJ3lpbmNhbjE5OTMnLFxyXG4gICAgLy8gICAgICAgICAvLyAncGFzc3dvcmQnOiAxMjM0NTYsXHJcbiAgICAvLyAgICAgfTtcclxuICAgIC8vICAgICB2YXIgX3RoaXM9IHRoaXM7XHJcbiAgICAvLyAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3QoJ2h0dHBzOi8vd3d3LmFoZWFydC5jbi9hcHAvYXBpLXNlcnZlci9sb2dpbicsIHBhcmFtcyAsZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgIC8vICAgICAgICAgY2MubG9nKGRhdGEpOyBcclxuICAgIC8vICAgICAgICAgaWYoZGF0YS5jb2RlPT0xKXtcclxuICAgIC8vICAgICAgICAgICAgIC8vIF90aGlzLnJlZ2lzdGVyX2FsZXJ0LmNvbG9yID0gIG5ldyBjYy5jb2xvcignI0JERkYwMCcpO1xyXG4gICAgLy8gICAgICAgICAgICAgX3RoaXMucmVnaXN0ZXJfYWxlcnQuc3RyaW5nID0nJztcclxuICAgIC8vICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBkYXRhLmRhdGEudG9rZW4pO1xyXG4gICAgLy8gICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2dpbm5hbWUnLCBsb2dpbm5hbWUpO1xyXG4gICAgLy8gICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwYXNzd29yZCcsIHBhc3N3b3JkKTtcclxuICAgIC8vICAgICAgICAgICAgIF90aGlzLm5vZGUuYWN0aXZlID1mYWxzZTtcclxuICAgIC8vICAgICAgICAgfWVsc2V7XHJcbiAgICAvLyAgICAgICAgICAgICBfdGhpcy5yZWdpc3Rlcl9hbGVydC5zdHJpbmcgPSfotKblj7flr4bnoIHplJnor68hJztcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAvL+aTjeS9nOaWh+acrC0t5L+u5pS555So5oi35L+h5oGvXHJcbiAgICAvLyAgICAgfSk7XHJcblxyXG4gICAgLy8gfSxcclxuXHJcbiAgICBidG5DbGljazE6IGZ1bmN0aW9uIChldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XHJcbiAgICAgICAgLy8gLy8g6K+35rGC55m75b2V5o6l5Y+jXHJcbiAgICAgICAgLy8gdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAvLyAgICAgICAgICdsb2dpbm5hbWUnOiAneWluY2FuMTk5MycsXHJcbiAgICAgICAgLy8gICAgICAgICAncGFzc3dvcmQnOiAxMjM0NTYsXHJcbiAgICAgICAgLy8gICAgICAgICAnc2VydmVyaWQnOiAxLFxyXG4gICAgICAgIC8vIH07XHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwYXJhbXMnLCBKU09OLnN0cmluZ2lmeShwYXJhbXMpKTtcclxuICAgICAgICAvLyB2YXIgcGFyYW1zID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwYXJhbXNcIikpO1xyXG4gICAgICAgIHZhciB0b2tlbiA9Y2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgXHJcbiAgICAgICAgLy8gY2MubG9nKHZhbHVlKTsgXHJcbiAgICAgICAgLy8gbGV0IGh0dHBSZXF1ZXN0ID0gIG5ldyBIdHRwSGVscGVyKCk7ICBcclxuICAgICAgICBodHRwUmVxdWVzdC5odHRwUG9zdCgnaHR0cHM6Ly93d3cuYWhlYXJ0LmNuL2FwcC9hcGktc2VydmVyL3VzZXItbG9naW4nLCB7J3Rva2VuJzp0b2tlbn0gLGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhkYXRhKTsgXHJcbiAgICAgICAgICAgIGlmKGRhdGEuY29kZT09MCl7IC8vIOeZu+W9leWksei0pe+8jOaIluacrOWcsOaVsOaNruWkseaViFxyXG4gICAgICAgICAgICAgICAgLy8g5by556qXXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgLy8g6K6+572u5pyN5Yqh5ZmoXHJcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlcnZlcicsIEpTT04uc3RyaW5naWZ5KGRhdGEuZGF0YS5zZXJ2ZXIpKTtcclxuICAgICAgICAgICAgICAgIGlmKGRhdGEuY29kZT09MSl7Ly8g55m75b2V5oiQ5Yqf77yM6L+b5YWl5ri45oiPXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKGRhdGEuZGF0YS51c2VyaW5mbyk7IFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcmluZm8nLCBKU09OLnN0cmluZ2lmeShkYXRhLmRhdGEudXNlcmluZm8pKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdob21lL2RhdGluZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcmluZm8nLCBKU09OLnN0cmluZ2lmeShkYXRhLmRhdGEudXNlcmluZm8pKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTsgLy/or7vlj5bmlbDmja5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGRhdGEuY29kZT09Mil7IC8vIOeZu+W9leaIkOWKn++8jOacquWumuS5ieinkuiJslxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOi/m+WFpeWumuS5ieinkuiJsueVjOmdoiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlcnZlciA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXJ2ZXInKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKHNlcnZlcik7IFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWIm+W7uuinkuiJslxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgncmVnaXN0ZXInKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvL+i/memHjCBldmVudCDmmK/kuIDkuKogVG91Y2ggRXZlbnQg5a+56LGh77yM5L2g5Y+v5Lul6YCa6L+HIGV2ZW50LnRhcmdldCDlj5bliLDkuovku7bnmoTlj5HpgIHoioLngrlcclxuICAgICAgICAvLyB2YXIgbm9kZSA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAvLyB2YXIgYnV0dG9uID0gbm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICAvL+i/memHjOeahCBjdXN0b21FdmVudERhdGEg5Y+C5pWw5bCx562J5LqO5L2g5LmL5YmN6K6+572u55qEIFwiY2xpY2sxIHVzZXIgZGF0YVwiXHJcbiAgICAgICAgLy8gY2MubG9nKFwibm9kZT1cIiwgbm9kZS5uYW1lLCBcIiBldmVudD1cIiwgZXZlbnQudHlwZSwgXCIgZGF0YT1cIiwgY3VzdG9tRXZlbnREYXRhKTtcclxuICAgIH0sXHJcblxyXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIC8vIGNjLmxvZyhkYXRhKVxyXG4gICAgICAgIC8vIHZhciB1c2VyQ291bnQgPSAgY2MuZmluZChcIkNhbnZhcy9ncm91bmQvZWRpdGJveF9jb3VudFwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xyXG4gICAgICAgIC8vIHZhciB1c2VyUGFzc3dhcmQgPSAgY2MuZmluZChcIkNhbnZhcy9ncm91bmQvZWRpdGJveF9wYXNzd2FyZFwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi55So5oi36LSm5Y+377yaXCIrdXNlckNvdW50KyBcIueUqOaIt+Wvhuegge+8mlwiKyB1c2VyUGFzc3dhcmQpO1xyXG4gICAgICAgIC8vIEh0dHBIZWxwLmxvZ2luKHVzZXJDb3VudCx1c2VyUGFzc3dhcmQsZnVuY3Rpb24oaXNTdWNjZXNzLERhdGEpe1xyXG4gICAgICAgIC8vICAgICB2YXIgaW5mbyA9IERhdGE7XHJcbiAgICAgICAgLy8gICAgIGlmKHRydWUgPT0gaXNTdWNjZXNzKXtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwibG9naW4gIHN1Y2Nlc3MhISFcIik7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhpbmZvKTtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnVzZXJuYW1lID0gaW5mby51c2VybmFtZTtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLmdhbWVwb2ludCA9IGluZm8uZ2FtZXBvaW50O1xyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8uc2tleSA9IGluZm8uc2tleTtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnVzZXJpZCA9IGluZm8udXNlcmlkO1xyXG4gXHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby5tb25leSA9IGluZm8ubW9uZXk7XHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby51c2VyaWQgPSBpbmZvLnVzZXJpZDtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnBhc3N3b3JkID0gaW5mby5wYXNzd29yZDtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnNhbHQgPSBpbmZvLnNhbHQ7XHJcbiBcclxuICAgICAgICAvLyAgICAgICAgIC8v55m75b2V5oiQ5Yqf5ZCO5Yqg6L295Zyw5Zu+6LWE5rqQXHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21hcCcpO1xyXG4gICAgICAgIC8vICAgICB9ZWxzZXtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwibG9naW4gIGZpbGVkISEhXCIpXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICBcclxuICAgIH0sXHJcbiBcclxuICAgIHN0YXJ0ICgpIHtcclxuIFxyXG4gICAgfSxcclxuIFxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcblxyXG4gICAgc2hvd19kbGcgKCkge1xyXG4gXHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9dHJ1ZTtcclxuXHJcbiAgICB9LFxyXG4gICAgaGlkZGVuX2RsZyAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9ZmFsc2U7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=