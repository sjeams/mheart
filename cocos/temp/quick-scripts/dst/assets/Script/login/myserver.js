
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
    //     var res = httpRequest.httpPostLogin('/app/api-server/token-login', params ,function (data) {
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
    var token = cc.sys.localStorage.getItem('token'); //定位弹出窗口

    var user_status = cc.find("Canvas/server/user_status");
    user_status.active = true;
    var user_phone = cc.find("Canvas/server/user_status/user_phone");

    if (token) {
      httpRequest.httpPostLogin('/app/api-server/token-login', {
        'token': token
      }, function (data) {
        // cc.loader.release('resources/login.json'); //释放json 资源
        // if(cc.sys.isNative){  //  jsb.fileUtils不支持 web  读写
        //     jsb.fileUtils.writeStringToFile(data,token)
        // }
        // cc.log(data); 
        // 登录成功
        if (data.code == 1) {
          // 其中slice(start, end)：用于提取字符串的片段
          // str.slice(1) 指下标为1之后的所有元素
          var loginname = data.data.userinfo.loginname;
          var phone = loginname.slice(0, 3) + "****" + loginname.slice(7, 10);
          user_phone.getComponent(cc.Label).string = phone;
        } else {
          user_phone.getComponent(cc.Label).string = data.message;
        }
      });
    } else {
      user_phone.getComponent(cc.Label).string = "未登录";
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
  //     httpRequest.httpPostLogin('/app/api-server/login', params ,function (data) {
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

    httpRequest.httpPostLogin('/app/api-server/user-login', {
      'token': token
    }, function (data) {
      // cc.log(data); 
      if (data.code == 0) {
        // 登录失败，或本地数据失效
        var user_status = cc.find("Canvas/register");
        user_status.active = true; // 弹窗
      } else {
        // 设置服务器
        cc.sys.localStorage.setItem('server', JSON.stringify(data.data.server));

        if (data.code == 1) {
          // 登录成功，进入游戏
          // cc.log(data.data.userinfo); 
          cc.sys.localStorage.setItem('userinfo', JSON.stringify(data.data.userinfo));
          cc.director.loadScene('home/大厅'); // cc.sys.localStorage.setItem('userinfo', JSON.stringify(data.data.userinfo));
          // cc.sys.localStorage.getItem(key); //读取数据
        } else if (data.code == 2) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcbXlzZXJ2ZXIuanMiXSwibmFtZXMiOlsiSHR0cEhlbHBlciIsInJlcXVpcmUiLCJodHRwUmVxdWVzdCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidXNlcl9zdGF0dXMiLCJOb2RlIiwidXNlcl9waG9uZSIsIkxhYmVsIiwib25Mb2FkIiwidG9rZW5sb2dpbiIsInRva2VuIiwic3lzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImZpbmQiLCJhY3RpdmUiLCJodHRwUG9zdExvZ2luIiwiZGF0YSIsImNvZGUiLCJsb2dpbm5hbWUiLCJ1c2VyaW5mbyIsInBob25lIiwic2xpY2UiLCJnZXRDb21wb25lbnQiLCJzdHJpbmciLCJtZXNzYWdlIiwiYnRuQ2xpY2sxIiwiZXZlbnQiLCJjdXN0b21FdmVudERhdGEiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInNlcnZlciIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwicGFyc2UiLCJjYWxsYmFjayIsInN0YXJ0Iiwic2hvd19kbGciLCJub2RlIiwiaGlkZGVuX2RsZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXhCLEVBQ0E7QUFDQTs7O0FBQ0EsSUFBSUMsV0FBVyxHQUFJLElBQUlGLFVBQUosRUFBbkI7QUFDQUcsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFdBQVcsRUFBQ0osRUFBRSxDQUFDSyxJQURQO0FBRVJDLElBQUFBLFVBQVUsRUFBQ04sRUFBRSxDQUFDTyxLQUZOLENBR1I7QUFDQTs7QUFKUSxHQUhQO0FBVUxDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWTtBQUVoQixTQUFLQyxVQUFMLEdBRmdCLENBRUc7QUFFbkI7QUFFQTtBQUNBO0FBQ0E7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QXBNSyxzQkFvTU87QUFFUixTQUFLQyxJQUFMLENBQVV4QixNQUFWLEdBQWtCLElBQWxCO0FBRUgsR0F4TUk7QUF5TUx5QixFQUFBQSxVQXpNSyx3QkF5TVM7QUFDVixTQUFLRCxJQUFMLENBQVV4QixNQUFWLEdBQWtCLEtBQWxCO0FBQ0g7QUEzTUksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBIdHRwSGVscGVyID0gcmVxdWlyZShcImh0dHBcIik7XHJcbi8vIHZhciBmcyA9IHJlcXVpcmUoJ2ZzJyk7IC8vIOW8leWFpWZz5qih5Z2XXHJcbi8vIHZhciBnbG9iYWx1c2VyaW5mbyA9IHJlcXVpcmUoXCJHbG9iYWx1c2VySW5mb1wiKTtcclxubGV0IGh0dHBSZXF1ZXN0ID0gIG5ldyBIdHRwSGVscGVyKCk7ICBcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgdXNlcl9zdGF0dXM6Y2MuTm9kZSxcclxuICAgICAgICB1c2VyX3Bob25lOmNjLkxhYmVsLFxyXG4gICAgICAgIC8vIHJlZ2lzdGVyX2xvZ2luX25hbWU6IGNjLkVkaXRCb3gsXHJcbiAgICAgICAgLy8gcmVnaXN0ZXJfbG9naW5fcGFzc3dvcmQ6IGNjLkVkaXRCb3hcclxuICAgIH0sXHJcbiBcclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkgeyAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMudG9rZW5sb2dpbigpOyAvLyDlv6vmjbfnmbvlvZVcclxuXHJcbiAgICAgICAgLy8g5pON5L2c5paH5pysLS3or7vlj5bnlKjmiLfkv6Hmga9cclxuICAgXHJcbiAgICAgICAgLy8gLy8g6LSm5Y+35a+G56CB55m75b2VXHJcbiAgICAgICAgLy8gdGhpcy5sb2dpbigpO1xyXG4gICAgICAgIC8v5YKo5a2Y57yT5a2YXHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHZhbHVlKTtcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuXHJcbiAgICAgICAgLy8g5L+d5a2Y5pyA6auY5YiG5Yiw5pys5ZywXHJcbiAgICAgICAgLy8gY29uc3QgS0VZX0JFU1RfU0NPUkUgPSBcImJlc3RTY29yZVwiO1xyXG4gICAgICAgIC8vIGxldCBiZXN0U2NvcmUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oS0VZX0JFU1RfU0NPUkUpO1xyXG4gICAgICAgIC8vIGlmIChiZXN0U2NvcmUgPT09IFwibnVsbFwiIHx8IHRoaXMuc2NvcmUgPiBiZXN0U2NvcmUpIHtcclxuICAgICAgICAvLyAgICAgYmVzdFNjb3JlID0gdGhpcy5zY29yZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKEtFWV9CRVNUX1NDT1JFLCBiZXN0U2NvcmUpO1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuICAgIHRva2VubG9naW46IGZ1bmN0aW9uKCl7XHJcbiAgICBcclxuICAgICAgICAvLyDojrflj5bmnKzlnLBqc29uICDkv6Hmga9cclxuICAgICAgICAvLyBjYy5sb2FkZXIubG9hZCggY2MudXJsLnJhdyhcInJlc291cmNlcy9sb2dpbi5qc29uXCIpLGZ1bmN0aW9uKGVycixyZXMpeyAgXHJcbiAgICAgICAgLy8gY2MubG9hZGVyLmxvYWRSZXMoJ2xvZ2luLmpzb24nLGZ1bmN0aW9uKGVycixyZXMpeyAgIC8v6buY6K6kcmVzb3VyY2VzXHJcbiAgICAgICAgLy8gICAgIGxldCBqc29uID0gcmVzLmpzb247XHJcbiAgICAgICAgLy8gICAgIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgICAgLy8gICAgICAgICAndG9rZW4nOiBqc29uLnRva2VuLFxyXG4gICAgICAgIC8vICAgICB9O1xyXG4gICAgICAgIC8vICAgICBjYy5sb2coanNvbi50b2tlbik7IFxyXG4gICAgICAgIC8vICAgICB2YXIgcmVzID0gaHR0cFJlcXVlc3QuaHR0cFBvc3RMb2dpbignL2FwcC9hcGktc2VydmVyL3Rva2VuLWxvZ2luJywgcGFyYW1zICxmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIC8vICAgICAgICAgY2MubG9hZGVyLnJlbGVhc2UoJ3Jlc291cmNlcy9sb2dpbi5qc29uJyk7IC8v6YeK5pS+anNvbiDotYTmupBcclxuICAgICAgICAvLyAgICAgICAgIC8vIGlmKGNjLnN5cy5pc05hdGl2ZSl7ICAvLyAganNiLmZpbGVVdGlsc+S4jeaUr+aMgSB3ZWIgIOivu+WGmVxyXG4gICAgICAgIC8vICAgICAgICAgLy8gICAgIGpzYi5maWxlVXRpbHMud3JpdGVTdHJpbmdUb0ZpbGUoZGF0YSx0b2tlbilcclxuICAgICAgICAvLyAgICAgICAgIC8vIH1cclxuICAgICAgICAvLyAgICAgICAgIC8vIGNjLmxvZyhkYXRhKTsgXHJcbiAgICAgICAgLy8gICAgICAgICAvLyDmnKrnmbvlvZXlvLnlh7rnmbvlvZVcclxuICAgICAgICAvLyAgICAgICAgIGlmKGRhdGEuY29kZT09MCl7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy8gdGhpcy5sb2dpbmJveC5ub2RlLmFjdGl2ZSA9IGZhbHNlOyAgLy8g6L+b5bqm6ZqQ6JePXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIC8vIH0pXHJcblxyXG4gICAgICAgIHZhciB0b2tlbiA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgICAgICAvL+WumuS9jeW8ueWHuueql+WPo1xyXG4gICAgICAgIHZhciB1c2VyX3N0YXR1cyAgPWNjLmZpbmQoXCJDYW52YXMvc2VydmVyL3VzZXJfc3RhdHVzXCIpO1xyXG4gICAgICAgIHVzZXJfc3RhdHVzLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgIHZhciB1c2VyX3Bob25lICA9Y2MuZmluZChcIkNhbnZhcy9zZXJ2ZXIvdXNlcl9zdGF0dXMvdXNlcl9waG9uZVwiKTtcclxuICAgICAgICBpZih0b2tlbil7XHJcbiAgICAgICAgICAgICAgICBodHRwUmVxdWVzdC5odHRwUG9zdExvZ2luKCcvYXBwL2FwaS1zZXJ2ZXIvdG9rZW4tbG9naW4nLCB7J3Rva2VuJzp0b2tlbn0gLGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvYWRlci5yZWxlYXNlKCdyZXNvdXJjZXMvbG9naW4uanNvbicpOyAvL+mHiuaUvmpzb24g6LWE5rqQXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYoY2Muc3lzLmlzTmF0aXZlKXsgIC8vICBqc2IuZmlsZVV0aWxz5LiN5pSv5oyBIHdlYiAg6K+75YaZXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGpzYi5maWxlVXRpbHMud3JpdGVTdHJpbmdUb0ZpbGUoZGF0YSx0b2tlbilcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKGRhdGEpOyBcclxuICAgICAgICAgICAgICAgIC8vIOeZu+W9leaIkOWKn1xyXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5jb2RlPT0xKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyDlhbbkuK1zbGljZShzdGFydCwgZW5kKe+8mueUqOS6juaPkOWPluWtl+espuS4sueahOeJh+autVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0ci5zbGljZSgxKSDmjIfkuIvmoIfkuLox5LmL5ZCO55qE5omA5pyJ5YWD57SgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxvZ2lubmFtZSA9ICBkYXRhLmRhdGEudXNlcmluZm8ubG9naW5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwaG9uZSA9IGxvZ2lubmFtZS5zbGljZSgwLDMpICsgXCIqKioqXCIgKyBsb2dpbm5hbWUuc2xpY2UoNywxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXNlcl9waG9uZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1waG9uZTtcclxuICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJfcGhvbmUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9ZGF0YS5tZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdXNlcl9waG9uZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1cIuacqueZu+W9lVwiO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiBcclxuICAgIC8vIGxvZ2luOiBmdW5jdGlvbigpe1xyXG4gICAgXHJcbiAgICAvLyAgICB2YXIgbG9naW5uYW1lID0gdGhpcy5yZWdpc3Rlcl9sb2dpbl9uYW1lLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XHJcbiAgICAvLyAgICB2YXIgcGFzc3dvcmQgPSB0aGlzLnJlZ2lzdGVyX2xvZ2luX3Bhc3N3b3JkLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XHJcbiAgICAvLyAgICAgdmFyIHBhcmFtcyA9IHtcclxuICAgIC8vICAgICAgICAgJ2xvZ2lubmFtZSc6IGxvZ2lubmFtZSxcclxuICAgIC8vICAgICAgICAgJ3Bhc3N3b3JkJzogcGFzc3dvcmQsXHJcbiAgICAvLyAgICAgICAgIC8vICdsb2dpbm5hbWUnOiAneWluY2FuMTk5MycsXHJcbiAgICAvLyAgICAgICAgIC8vICdwYXNzd29yZCc6IDEyMzQ1NixcclxuICAgIC8vICAgICB9O1xyXG4gICAgLy8gICAgIHZhciBfdGhpcz0gdGhpcztcclxuICAgIC8vICAgICBodHRwUmVxdWVzdC5odHRwUG9zdExvZ2luKCcvYXBwL2FwaS1zZXJ2ZXIvbG9naW4nLCBwYXJhbXMgLGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAvLyAgICAgICAgIGNjLmxvZyhkYXRhKTsgXHJcbiAgICAvLyAgICAgICAgIGlmKGRhdGEuY29kZT09MSl7XHJcbiAgICAvLyAgICAgICAgICAgICAvLyBfdGhpcy5yZWdpc3Rlcl9hbGVydC5jb2xvciA9ICBuZXcgY2MuY29sb3IoJyNCREZGMDAnKTtcclxuICAgIC8vICAgICAgICAgICAgIF90aGlzLnJlZ2lzdGVyX2FsZXJ0LnN0cmluZyA9Jyc7XHJcbiAgICAvLyAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgZGF0YS5kYXRhLnRva2VuKTtcclxuICAgIC8vICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9naW5uYW1lJywgbG9naW5uYW1lKTtcclxuICAgIC8vICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGFzc3dvcmQnLCBwYXNzd29yZCk7XHJcbiAgICAvLyAgICAgICAgICAgICBfdGhpcy5ub2RlLmFjdGl2ZSA9ZmFsc2U7XHJcbiAgICAvLyAgICAgICAgIH1lbHNle1xyXG4gICAgLy8gICAgICAgICAgICAgX3RoaXMucmVnaXN0ZXJfYWxlcnQuc3RyaW5nID0n6LSm5Y+35a+G56CB6ZSZ6K+vISc7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgLy/mk43kvZzmlofmnKwtLeS/ruaUueeUqOaIt+S/oeaBr1xyXG4gICAgLy8gICAgIH0pO1xyXG5cclxuICAgIC8vIH0sXHJcblxyXG4gICAgYnRuQ2xpY2sxOiBmdW5jdGlvbiAoZXZlbnQsIGN1c3RvbUV2ZW50RGF0YSkge1xyXG4gICAgICAgIC8vIC8vIOivt+axgueZu+W9leaOpeWPo1xyXG4gICAgICAgIC8vIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgICAgLy8gICAgICAgICAnbG9naW5uYW1lJzogJ3lpbmNhbjE5OTMnLFxyXG4gICAgICAgIC8vICAgICAgICAgJ3Bhc3N3b3JkJzogMTIzNDU2LFxyXG4gICAgICAgIC8vICAgICAgICAgJ3NlcnZlcmlkJzogMSxcclxuICAgICAgICAvLyB9O1xyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGFyYW1zJywgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7XHJcbiAgICAgICAgLy8gdmFyIHBhcmFtcyA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGFyYW1zXCIpKTtcclxuICAgICAgICB2YXIgdG9rZW4gPWNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgIFxyXG4gICAgICAgIC8vIGNjLmxvZyh2YWx1ZSk7IFxyXG4gICAgICAgIC8vIGxldCBodHRwUmVxdWVzdCA9ICBuZXcgSHR0cEhlbHBlcigpOyAgXHJcbiAgICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3RMb2dpbignL2FwcC9hcGktc2VydmVyL3VzZXItbG9naW4nLCB7J3Rva2VuJzp0b2tlbn0gLGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhkYXRhKTsgXHJcbiAgICAgICAgICAgIGlmKGRhdGEuY29kZT09MCl7IC8vIOeZu+W9leWksei0pe+8jOaIluacrOWcsOaVsOaNruWkseaViFxyXG4gICAgICAgICAgICAgICAgdmFyIHVzZXJfc3RhdHVzICA9Y2MuZmluZChcIkNhbnZhcy9yZWdpc3RlclwiKTtcclxuICAgICAgICAgICAgICAgIHVzZXJfc3RhdHVzLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8g5by556qXXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgLy8g6K6+572u5pyN5Yqh5ZmoXHJcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlcnZlcicsIEpTT04uc3RyaW5naWZ5KGRhdGEuZGF0YS5zZXJ2ZXIpKTtcclxuICAgICAgICAgICAgICAgIGlmKGRhdGEuY29kZT09MSl7Ly8g55m75b2V5oiQ5Yqf77yM6L+b5YWl5ri45oiPXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKGRhdGEuZGF0YS51c2VyaW5mbyk7IFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcmluZm8nLCBKU09OLnN0cmluZ2lmeShkYXRhLmRhdGEudXNlcmluZm8pKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdob21lL+Wkp+WOhScpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcmluZm8nLCBKU09OLnN0cmluZ2lmeShkYXRhLmRhdGEudXNlcmluZm8pKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTsgLy/or7vlj5bmlbDmja5cclxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGRhdGEuY29kZT09Mil7IC8vIOeZu+W9leaIkOWKn++8jOacquWumuS5ieinkuiJslxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOi/m+WFpeWumuS5ieinkuiJsueVjOmdoiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlcnZlciA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXJ2ZXInKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKHNlcnZlcik7IFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWIm+W7uuinkuiJslxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgncmVnaXN0ZXInKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvL+i/memHjCBldmVudCDmmK/kuIDkuKogVG91Y2ggRXZlbnQg5a+56LGh77yM5L2g5Y+v5Lul6YCa6L+HIGV2ZW50LnRhcmdldCDlj5bliLDkuovku7bnmoTlj5HpgIHoioLngrlcclxuICAgICAgICAvLyB2YXIgbm9kZSA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAvLyB2YXIgYnV0dG9uID0gbm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICAvL+i/memHjOeahCBjdXN0b21FdmVudERhdGEg5Y+C5pWw5bCx562J5LqO5L2g5LmL5YmN6K6+572u55qEIFwiY2xpY2sxIHVzZXIgZGF0YVwiXHJcbiAgICAgICAgLy8gY2MubG9nKFwibm9kZT1cIiwgbm9kZS5uYW1lLCBcIiBldmVudD1cIiwgZXZlbnQudHlwZSwgXCIgZGF0YT1cIiwgY3VzdG9tRXZlbnREYXRhKTtcclxuICAgIH0sXHJcblxyXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIC8vIGNjLmxvZyhkYXRhKVxyXG4gICAgICAgIC8vIHZhciB1c2VyQ291bnQgPSAgY2MuZmluZChcIkNhbnZhcy9ncm91bmQvZWRpdGJveF9jb3VudFwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xyXG4gICAgICAgIC8vIHZhciB1c2VyUGFzc3dhcmQgPSAgY2MuZmluZChcIkNhbnZhcy9ncm91bmQvZWRpdGJveF9wYXNzd2FyZFwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi55So5oi36LSm5Y+377yaXCIrdXNlckNvdW50KyBcIueUqOaIt+Wvhuegge+8mlwiKyB1c2VyUGFzc3dhcmQpO1xyXG4gICAgICAgIC8vIEh0dHBIZWxwLmxvZ2luKHVzZXJDb3VudCx1c2VyUGFzc3dhcmQsZnVuY3Rpb24oaXNTdWNjZXNzLERhdGEpe1xyXG4gICAgICAgIC8vICAgICB2YXIgaW5mbyA9IERhdGE7XHJcbiAgICAgICAgLy8gICAgIGlmKHRydWUgPT0gaXNTdWNjZXNzKXtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwibG9naW4gIHN1Y2Nlc3MhISFcIik7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhpbmZvKTtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnVzZXJuYW1lID0gaW5mby51c2VybmFtZTtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLmdhbWVwb2ludCA9IGluZm8uZ2FtZXBvaW50O1xyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8uc2tleSA9IGluZm8uc2tleTtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnVzZXJpZCA9IGluZm8udXNlcmlkO1xyXG4gXHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby5tb25leSA9IGluZm8ubW9uZXk7XHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby51c2VyaWQgPSBpbmZvLnVzZXJpZDtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnBhc3N3b3JkID0gaW5mby5wYXNzd29yZDtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnNhbHQgPSBpbmZvLnNhbHQ7XHJcbiBcclxuICAgICAgICAvLyAgICAgICAgIC8v55m75b2V5oiQ5Yqf5ZCO5Yqg6L295Zyw5Zu+6LWE5rqQXHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21hcCcpO1xyXG4gICAgICAgIC8vICAgICB9ZWxzZXtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwibG9naW4gIGZpbGVkISEhXCIpXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICBcclxuICAgIH0sXHJcbiBcclxuICAgIHN0YXJ0ICgpIHtcclxuIFxyXG4gICAgfSxcclxuIFxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcblxyXG4gICAgc2hvd19kbGcgKCkge1xyXG4gXHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9dHJ1ZTtcclxuXHJcbiAgICB9LFxyXG4gICAgaGlkZGVuX2RsZyAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9ZmFsc2U7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=