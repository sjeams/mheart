
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
    editbox: cc.EditBox
  },
  onLoad: function onLoad() {
    // 操作文本--读取用户信息
    this.tokenlogin(); // 快捷登录
    // // 账号密码登录
    // this.login();
    //储存缓存
    // cc.sys.localStorage.setItem('token', value);
    // cc.sys.localStorage.getItem(key);
    // cc.sys.localStorage.removeItem(key);
  },
  tokenlogin: function tokenlogin() {
    // 获取本地json  信息
    // cc.loader.load( cc.url.raw("resources/login.json"),function(err,res){  
    cc.loader.loadRes('login.json', function (err, res) {
      //默认resources
      var json = res.json;
      var params = {
        'token': json.token
      };
      cc.log(json.token);
      var res = httpRequest.httpPost('http://www.monster.com/app/api-server/token-login', params, function (data) {
        cc.loader.release('resources/login.json'); //释放json 资源
        // if(cc.sys.isNative){  //  jsb.fileUtils不支持 web  读写
        //     jsb.fileUtils.writeStringToFile(data,token)
        // }
        // cc.log(data); 
        // 未登录弹出登录

        if (data.code == 0) {// this.loginbox.node.active = false;  // 进度隐藏
        }
      });
    });
  },
  login: function login() {
    var params = {
      'loginname': 'yincan1993',
      'password': 123456
    };
    httpRequest.httpPost('http://www.monster.com/app/api-server/login', params, function (data) {// cc.log(data); 
      //操作文本--修改用户信息
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
    var params = JSON.parse(cc.sys.localStorage.getItem("params")); // cc.log(value); 
    // let httpRequest =  new HttpHelper();  

    httpRequest.httpPost('http://www.monster.com/app/api-server/user-login', params, function (data) {
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
  start: function start() {} // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcbXlzZXJ2ZXIuanMiXSwibmFtZXMiOlsiSHR0cEhlbHBlciIsInJlcXVpcmUiLCJodHRwUmVxdWVzdCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZWRpdGJveCIsIkVkaXRCb3giLCJvbkxvYWQiLCJ0b2tlbmxvZ2luIiwibG9hZGVyIiwibG9hZFJlcyIsImVyciIsInJlcyIsImpzb24iLCJwYXJhbXMiLCJ0b2tlbiIsImxvZyIsImh0dHBQb3N0IiwiZGF0YSIsInJlbGVhc2UiLCJjb2RlIiwibG9naW4iLCJidG5DbGljazEiLCJldmVudCIsImN1c3RvbUV2ZW50RGF0YSIsIkpTT04iLCJwYXJzZSIsInN5cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwic3RyaW5naWZ5Iiwic2VydmVyIiwidXNlcmluZm8iLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsImNhbGxiYWNrIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUF4QixFQUNBO0FBQ0E7OztBQUNBLElBQUlDLFdBQVcsR0FBSSxJQUFJRixVQUFKLEVBQW5CO0FBQ0FHLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxPQUFPLEVBQUVKLEVBQUUsQ0FBQ0s7QUFESixHQUhQO0FBT0xDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWTtBQUVoQjtBQUNBLFNBQUtDLFVBQUwsR0FIZ0IsQ0FHRztBQUVuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSCxHQWxCSTtBQW9CTEEsRUFBQUEsVUFBVSxFQUFFLHNCQUFVO0FBQ2xCO0FBQ0E7QUFDQVAsSUFBQUEsRUFBRSxDQUFDUSxNQUFILENBQVVDLE9BQVYsQ0FBa0IsWUFBbEIsRUFB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDUXRCLElBQUFBLEVBQUUsQ0FBQ2lDLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixLQUF0QixFQXJCZSxDQXNCdkI7QUFDQTtBQUNBO0FBQ0E7QUFFSCxHQWxJSTtBQW9JTEUsRUFBQUEsS0FwSUssbUJBb0lJLENBRVIsQ0F0SUksQ0F3SUw7O0FBeElLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG52YXIgSHR0cEhlbHBlciA9IHJlcXVpcmUoXCJodHRwXCIpO1xyXG4vLyB2YXIgZnMgPSByZXF1aXJlKCdmcycpOyAvLyDlvJXlhaVmc+aooeWdl1xyXG4vLyB2YXIgZ2xvYmFsdXNlcmluZm8gPSByZXF1aXJlKFwiR2xvYmFsdXNlckluZm9cIik7XHJcbmxldCBodHRwUmVxdWVzdCA9ICBuZXcgSHR0cEhlbHBlcigpOyAgXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuIFxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGVkaXRib3g6IGNjLkVkaXRCb3hcclxuICAgIH0sXHJcbiBcclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG5cclxuICAgICAgICAvLyDmk43kvZzmlofmnKwtLeivu+WPlueUqOaIt+S/oeaBr1xyXG4gICAgICAgIHRoaXMudG9rZW5sb2dpbigpOyAvLyDlv6vmjbfnmbvlvZVcclxuXHJcbiAgICAgICAgLy8gLy8g6LSm5Y+35a+G56CB55m75b2VXHJcbiAgICAgICAgLy8gdGhpcy5sb2dpbigpO1xyXG4gICAgICAgIC8v5YKo5a2Y57yT5a2YXHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHZhbHVlKTtcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuICAgIH0sXHJcbiAgICAgXHJcbiAgICB0b2tlbmxvZ2luOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIC8vIOiOt+WPluacrOWcsGpzb24gIOS/oeaBr1xyXG4gICAgICAgIC8vIGNjLmxvYWRlci5sb2FkKCBjYy51cmwucmF3KFwicmVzb3VyY2VzL2xvZ2luLmpzb25cIiksZnVuY3Rpb24oZXJyLHJlcyl7ICBcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcygnbG9naW4uanNvbicsZnVuY3Rpb24oZXJyLHJlcyl7ICAgLy/pu5jorqRyZXNvdXJjZXNcclxuICAgICAgICAgICAgbGV0IGpzb24gPSByZXMuanNvbjtcclxuICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgICd0b2tlbic6IGpzb24udG9rZW4sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGNjLmxvZyhqc29uLnRva2VuKTsgXHJcbiAgICAgICAgICAgIHZhciByZXMgPSBodHRwUmVxdWVzdC5odHRwUG9zdCgnaHR0cDovL3d3dy5tb25zdGVyLmNvbS9hcHAvYXBpLXNlcnZlci90b2tlbi1sb2dpbicsIHBhcmFtcyAsZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGNjLmxvYWRlci5yZWxlYXNlKCdyZXNvdXJjZXMvbG9naW4uanNvbicpOyAvL+mHiuaUvmpzb24g6LWE5rqQXHJcbiAgICAgICAgICAgICAgICAvLyBpZihjYy5zeXMuaXNOYXRpdmUpeyAgLy8gIGpzYi5maWxlVXRpbHPkuI3mlK/mjIEgd2ViICDor7vlhplcclxuICAgICAgICAgICAgICAgIC8vICAgICBqc2IuZmlsZVV0aWxzLndyaXRlU3RyaW5nVG9GaWxlKGRhdGEsdG9rZW4pXHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2coZGF0YSk7IFxyXG4gICAgICAgICAgICAgICAgLy8g5pyq55m75b2V5by55Ye655m75b2VXHJcbiAgICAgICAgICAgICAgICBpZihkYXRhLmNvZGU9PTApe1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubG9naW5ib3gubm9kZS5hY3RpdmUgPSBmYWxzZTsgIC8vIOi/m+W6pumakOiXj1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBsb2dpbjogZnVuY3Rpb24oKXtcclxuICAgICAgICB2YXIgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAnbG9naW5uYW1lJzogJ3lpbmNhbjE5OTMnLFxyXG4gICAgICAgICAgICAncGFzc3dvcmQnOiAxMjM0NTYsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBodHRwUmVxdWVzdC5odHRwUG9zdCgnaHR0cDovL3d3dy5tb25zdGVyLmNvbS9hcHAvYXBpLXNlcnZlci9sb2dpbicsIHBhcmFtcyAsZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgLy8gY2MubG9nKGRhdGEpOyBcclxuICAgICAgICAgICAgLy/mk43kvZzmlofmnKwtLeS/ruaUueeUqOaIt+S/oeaBr1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0sXHJcblxyXG4gICAgYnRuQ2xpY2sxOiBmdW5jdGlvbiAoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xyXG5cclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gLy8g6K+35rGC55m75b2V5o6l5Y+jXHJcbiAgICAgICAgLy8gdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAvLyAgICAgICAgICdsb2dpbm5hbWUnOiAneWluY2FuMTk5MycsXHJcbiAgICAgICAgLy8gICAgICAgICAncGFzc3dvcmQnOiAxMjM0NTYsXHJcbiAgICAgICAgLy8gICAgICAgICAnc2VydmVyaWQnOiAxLFxyXG4gICAgICAgIC8vIH07XHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwYXJhbXMnLCBKU09OLnN0cmluZ2lmeShwYXJhbXMpKTtcclxuICAgICAgICB2YXIgcGFyYW1zID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwYXJhbXNcIikpO1xyXG4gICAgICAgIC8vIGNjLmxvZyh2YWx1ZSk7IFxyXG4gICAgICAgIC8vIGxldCBodHRwUmVxdWVzdCA9ICBuZXcgSHR0cEhlbHBlcigpOyAgXHJcbiAgICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3QoJ2h0dHA6Ly93d3cubW9uc3Rlci5jb20vYXBwL2FwaS1zZXJ2ZXIvdXNlci1sb2dpbicsIHBhcmFtcyAsZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgY2MubG9nKGRhdGEpOyBcclxuICAgICAgICAgICAgaWYoZGF0YS5jb2RlPT0wKXsgLy8g55m75b2V5aSx6LSl77yM5oiW5pys5Zyw5pWw5o2u5aSx5pWIXHJcbiAgICAgICAgICAgICAgICAvLyDlvLnnqpdcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAvLyDorr7nva7mnI3liqHlmahcclxuICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2VydmVyJywgSlNPTi5zdHJpbmdpZnkoZGF0YS5kYXRhLnNlcnZlcikpO1xyXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5jb2RlPT0xKXsvLyDnmbvlvZXmiJDlip/vvIzov5vlhaXmuLjmiI9cclxuICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coZGF0YS5kYXRhLnVzZXJpbmZvKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyaW5mbycsIEpTT04uc3RyaW5naWZ5KGRhdGEuZGF0YS51c2VyaW5mbykpOyBcclxuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ2hvbWUvZGF0aW5nJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyaW5mbycsIEpTT04uc3RyaW5naWZ5KGRhdGEuZGF0YS51c2VyaW5mbykpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpOyAvL+ivu+WPluaVsOaNrlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5jb2RlPT0yKXsgLy8g55m75b2V5oiQ5Yqf77yM5pyq5a6a5LmJ6KeS6ImyXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g6L+b5YWl5a6a5LmJ6KeS6Imy55WM6Z2iICAgICBcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2VydmVyID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlcnZlcicpKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coc2VydmVyKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5Yib5bu66KeS6ImyXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdyZWdpc3RlcicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8v6L+Z6YeMIGV2ZW50IOaYr+S4gOS4qiBUb3VjaCBFdmVudCDlr7nosaHvvIzkvaDlj6/ku6XpgJrov4cgZXZlbnQudGFyZ2V0IOWPluWIsOS6i+S7tueahOWPkemAgeiKgueCuVxyXG4gICAgICAgIC8vIHZhciBub2RlID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIC8vIHZhciBidXR0b24gPSBub2RlLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xyXG4gICAgICAgIC8v6L+Z6YeM55qEIGN1c3RvbUV2ZW50RGF0YSDlj4LmlbDlsLHnrYnkuo7kvaDkuYvliY3orr7nva7nmoQgXCJjbGljazEgdXNlciBkYXRhXCJcclxuICAgICAgICAvLyBjYy5sb2coXCJub2RlPVwiLCBub2RlLm5hbWUsIFwiIGV2ZW50PVwiLCBldmVudC50eXBlLCBcIiBkYXRhPVwiLCBjdXN0b21FdmVudERhdGEpO1xyXG4gICAgfSxcclxuXHJcbiAgICBjYWxsYmFjazogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gY2MubG9nKGRhdGEpXHJcbiAgICAgICAgLy8gdmFyIHVzZXJDb3VudCA9ICBjYy5maW5kKFwiQ2FudmFzL2dyb3VuZC9lZGl0Ym94X2NvdW50XCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XHJcbiAgICAgICAgLy8gdmFyIHVzZXJQYXNzd2FyZCA9ICBjYy5maW5kKFwiQ2FudmFzL2dyb3VuZC9lZGl0Ym94X3Bhc3N3YXJkXCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLnlKjmiLfotKblj7fvvJpcIit1c2VyQ291bnQrIFwi55So5oi35a+G56CB77yaXCIrIHVzZXJQYXNzd2FyZCk7XHJcbiAgICAgICAgLy8gSHR0cEhlbHAubG9naW4odXNlckNvdW50LHVzZXJQYXNzd2FyZCxmdW5jdGlvbihpc1N1Y2Nlc3MsRGF0YSl7XHJcbiAgICAgICAgLy8gICAgIHZhciBpbmZvID0gRGF0YTtcclxuICAgICAgICAvLyAgICAgaWYodHJ1ZSA9PSBpc1N1Y2Nlc3Mpe1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJsb2dpbiAgc3VjY2VzcyEhIVwiKTtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGluZm8pO1xyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8udXNlcm5hbWUgPSBpbmZvLnVzZXJuYW1lO1xyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8uZ2FtZXBvaW50ID0gaW5mby5nYW1lcG9pbnQ7XHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby5za2V5ID0gaW5mby5za2V5O1xyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8udXNlcmlkID0gaW5mby51c2VyaWQ7XHJcbiBcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLm1vbmV5ID0gaW5mby5tb25leTtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnVzZXJpZCA9IGluZm8udXNlcmlkO1xyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8ucGFzc3dvcmQgPSBpbmZvLnBhc3N3b3JkO1xyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8uc2FsdCA9IGluZm8uc2FsdDtcclxuIFxyXG4gICAgICAgIC8vICAgICAgICAgLy/nmbvlvZXmiJDlip/lkI7liqDovb3lnLDlm77otYTmupBcclxuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFwJyk7XHJcbiAgICAgICAgLy8gICAgIH1lbHNle1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJsb2dpbiAgZmlsZWQhISFcIilcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuIFxyXG4gICAgc3RhcnQgKCkge1xyXG4gXHJcbiAgICB9LFxyXG4gXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==