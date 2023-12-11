
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
        var _this = this; // cc.loader.release('resources/login.json'); //释放json 资源
        // if(cc.sys.isNative){  //  jsb.fileUtils不支持 web  读写
        //     jsb.fileUtils.writeStringToFile(data,token)
        // }
        // cc.log(data); 
        // 未登录弹出登录
        // 登录成功


        if (data.code == 1) {
          // 其中slice(start, end)：用于提取字符串的片段
          // str.slice(1) 指下标为1之后的所有元素
          var loginname = data.data.userinfo.loginname;
          var phone = loginname.slice(0, 3) + "****" + loginname.slice(7, 10);
          user_phone.getComponent(cc.Label).string = phone; // this.loginbox.node.active = false;  // 进度隐藏
        } else {
          user_phone.getComponent(cc.Label).string = data.message; // this.loginbox.node.active = false;  // 进度隐藏
        }
      });
    } else {
      user_phone.getComponent(cc.Label).string = "未登录";
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

    httpRequest.httpPostLogin('/app/api-server/login', params, function (data) {
      cc.log(data);

      if (data.code == 1) {
        // _this.register_alert.color =  new cc.color('#BDFF00');
        _this.register_alert.string = '';
        cc.sys.localStorage.setItem('token', data.data.token);
        cc.sys.localStorage.setItem('loginname', loginname);
        cc.sys.localStorage.setItem('password', password);
        _this.node.active = false;
        cc.find("Canvas/server/user_status/user_phone");

        _this.tokenlogin(); // var mycomponet =  _this.node.getComponent(register)
        // mycomponet.tokenlogin(); // 快捷登录

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxccmVnaXN0ZXIuanMiXSwibmFtZXMiOlsiSHR0cEhlbHBlciIsInJlcXVpcmUiLCJodHRwUmVxdWVzdCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicmVnaXN0ZXJfYWxlcnQiLCJMYWJlbCIsInJlZ2lzdGVyX2xvZ2luX25hbWUiLCJFZGl0Qm94IiwicmVnaXN0ZXJfbG9naW5fcGFzc3dvcmQiLCJvbkxvYWQiLCJsb2dpbm5hbWUiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicGFzc3dvcmQiLCJnZXRDb21wb25lbnQiLCJzdHJpbmciLCJ0b2tlbmxvZ2luIiwidG9rZW4iLCJ1c2VyX3N0YXR1cyIsImZpbmQiLCJhY3RpdmUiLCJ1c2VyX3Bob25lIiwiaHR0cFBvc3RMb2dpbiIsImRhdGEiLCJfdGhpcyIsImNvZGUiLCJ1c2VyaW5mbyIsInBob25lIiwic2xpY2UiLCJtZXNzYWdlIiwibG9naW4iLCJwYXJhbXMiLCJsb2ciLCJzZXRJdGVtIiwibm9kZSIsImNhbGxiYWNrIiwiZXZlbnQiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsInN0YXJ0Iiwic2hvd19kbGciLCJoaWRkZW5fZGxnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBeEIsRUFDQTtBQUNBOzs7QUFDQSxJQUFJQyxXQUFXLEdBQUksSUFBSUYsVUFBSixFQUFuQjtBQUNBRyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsY0FBYyxFQUFFSixFQUFFLENBQUNLLEtBRFg7QUFFUkMsSUFBQUEsbUJBQW1CLEVBQUVOLEVBQUUsQ0FBQ08sT0FGaEI7QUFHUkMsSUFBQUEsdUJBQXVCLEVBQUVSLEVBQUUsQ0FBQ087QUFIcEIsR0FIUDtBQVNMRSxFQUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFDaEIsUUFBSUMsU0FBUyxHQUFFVixFQUFFLENBQUNXLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsV0FBNUIsQ0FBZjtBQUNBLFFBQUlDLFFBQVEsR0FBRWQsRUFBRSxDQUFDVyxHQUFILENBQU9DLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLFVBQTVCLENBQWQsQ0FGZ0IsQ0FHaEI7O0FBQ0EsUUFBR0gsU0FBSCxFQUFhO0FBQ1YsV0FBS0osbUJBQUwsQ0FBeUJTLFlBQXpCLENBQXNDZixFQUFFLENBQUNPLE9BQXpDLEVBQWtEUyxNQUFsRCxHQUF5RE4sU0FBekQ7QUFDRjs7QUFDRCxRQUFHQSxTQUFILEVBQWE7QUFDVCxXQUFLRix1QkFBTCxDQUE2Qk8sWUFBN0IsQ0FBMENmLEVBQUUsQ0FBQ08sT0FBN0MsRUFBc0RTLE1BQXRELEdBQTZERixRQUE3RDtBQUNILEtBVGUsQ0FVaEI7OztBQUNBLFNBQUtHLFVBQUwsR0FYZ0IsQ0FXRztBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNILEdBbkNJO0FBb0NMQSxFQUFBQSxVQUFVLEVBQUUsc0JBQVU7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBLFFBQUlDLEtBQUssR0FBRWxCLEVBQUUsQ0FBQ1csR0FBSCxDQUFPQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixPQUE1QixDQUFYLENBdkJrQixDQXdCbEI7O0FBQ0EsUUFBSU0sV0FBVyxHQUFHbkIsRUFBRSxDQUFDb0IsSUFBSCxDQUFRLDJCQUFSLENBQWxCO0FBQ0FELElBQUFBLFdBQVcsQ0FBQ0UsTUFBWixHQUFtQixJQUFuQjtBQUNBLFFBQUlDLFVBQVUsR0FBR3RCLEVBQUUsQ0FBQ29CLElBQUgsQ0FBUSxzQ0FBUixDQUFqQjs7QUFDQSxRQUFHRixLQUFILEVBQVM7QUFDRG5CLE1BQUFBLFdBQVcsQ0FBQ3dCLGFBQVosQ0FBMEIsNkJBQTFCLEVBQXlEO0FBQUMsaUJBQVFMO0FBQVQsT0FBekQsRUFBMEUsVUFBVU0sSUFBVixFQUFnQjtBQUN0RixZQUFJQyxLQUFLLEdBQUUsSUFBWCxDQURzRixDQUV0RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRDs7O0FBQ0MsWUFBR0QsSUFBSSxDQUFDRSxJQUFMLElBQVcsQ0FBZCxFQUFnQjtBQUNaO0FBQ0E7QUFDQSxjQUFJaEIsU0FBUyxHQUFJYyxJQUFJLENBQUNBLElBQUwsQ0FBVUcsUUFBVixDQUFtQmpCLFNBQXBDO0FBQ0EsY0FBSWtCLEtBQUssR0FBR2xCLFNBQVMsQ0FBQ21CLEtBQVYsQ0FBZ0IsQ0FBaEIsRUFBa0IsQ0FBbEIsSUFBdUIsTUFBdkIsR0FBZ0NuQixTQUFTLENBQUNtQixLQUFWLENBQWdCLENBQWhCLEVBQWtCLEVBQWxCLENBQTVDO0FBQ0FQLFVBQUFBLFVBQVUsQ0FBQ1AsWUFBWCxDQUF3QmYsRUFBRSxDQUFDSyxLQUEzQixFQUFrQ1csTUFBbEMsR0FBeUNZLEtBQXpDLENBTFksQ0FNWjtBQUNILFNBUEQsTUFPSztBQUNETixVQUFBQSxVQUFVLENBQUNQLFlBQVgsQ0FBd0JmLEVBQUUsQ0FBQ0ssS0FBM0IsRUFBa0NXLE1BQWxDLEdBQXlDUSxJQUFJLENBQUNNLE9BQTlDLENBREMsQ0FFRDtBQUNIO0FBQ1IsT0FwQkc7QUFzQlAsS0F2QkQsTUF1Qks7QUFDRFIsTUFBQUEsVUFBVSxDQUFDUCxZQUFYLENBQXdCZixFQUFFLENBQUNLLEtBQTNCLEVBQWtDVyxNQUFsQyxHQUF5QyxLQUF6QztBQUNIO0FBQ0osR0ExRkk7QUE0RkxlLEVBQUFBLEtBQUssRUFBRSxpQkFBVTtBQUVkLFFBQUlyQixTQUFTLEdBQUcsS0FBS0osbUJBQUwsQ0FBeUJTLFlBQXpCLENBQXNDZixFQUFFLENBQUNPLE9BQXpDLEVBQWtEUyxNQUFsRTtBQUNBLFFBQUlGLFFBQVEsR0FBRyxLQUFLTix1QkFBTCxDQUE2Qk8sWUFBN0IsQ0FBMENmLEVBQUUsQ0FBQ08sT0FBN0MsRUFBc0RTLE1BQXJFO0FBQ0MsUUFBSWdCLE1BQU0sR0FBRztBQUNULG1CQUFhdEIsU0FESjtBQUVULGtCQUFZSSxRQUZILENBR1Q7QUFDQTs7QUFKUyxLQUFiOztBQU9BLFFBQUlXLEtBQUssR0FBRSxJQUFYOztBQUNBMUIsSUFBQUEsV0FBVyxDQUFDd0IsYUFBWixDQUEwQix1QkFBMUIsRUFBbURTLE1BQW5ELEVBQTJELFVBQVVSLElBQVYsRUFBZ0I7QUFDdkV4QixNQUFBQSxFQUFFLENBQUNpQyxHQUFILENBQU9ULElBQVA7O0FBQ0EsVUFBR0EsSUFBSSxDQUFDRSxJQUFMLElBQVcsQ0FBZCxFQUFnQjtBQUNaO0FBQ0FELFFBQUFBLEtBQUssQ0FBQ3JCLGNBQU4sQ0FBcUJZLE1BQXJCLEdBQTZCLEVBQTdCO0FBQ0FoQixRQUFBQSxFQUFFLENBQUNXLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQnNCLE9BQXBCLENBQTRCLE9BQTVCLEVBQXFDVixJQUFJLENBQUNBLElBQUwsQ0FBVU4sS0FBL0M7QUFDQWxCLFFBQUFBLEVBQUUsQ0FBQ1csR0FBSCxDQUFPQyxZQUFQLENBQW9Cc0IsT0FBcEIsQ0FBNEIsV0FBNUIsRUFBeUN4QixTQUF6QztBQUNBVixRQUFBQSxFQUFFLENBQUNXLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQnNCLE9BQXBCLENBQTRCLFVBQTVCLEVBQXdDcEIsUUFBeEM7QUFDQVcsUUFBQUEsS0FBSyxDQUFDVSxJQUFOLENBQVdkLE1BQVgsR0FBbUIsS0FBbkI7QUFDQXJCLFFBQUFBLEVBQUUsQ0FBQ29CLElBQUgsQ0FBUSxzQ0FBUjs7QUFDSUssUUFBQUEsS0FBSyxDQUFDUixVQUFOLEdBUlEsQ0FTWjtBQUNBOztBQUNILE9BWEQsTUFXSztBQUNEUSxRQUFBQSxLQUFLLENBQUNyQixjQUFOLENBQXFCWSxNQUFyQixHQUE2QixTQUE3QjtBQUNILE9BZnNFLENBZ0J2RTs7QUFDSCxLQWpCRDtBQW1CSCxHQTNISTtBQThITG9CLEVBQUFBLFFBQVEsRUFBRSxrQkFBVUMsS0FBVixFQUFpQjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDUXJDLElBQUFBLEVBQUUsQ0FBQ3NDLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixLQUF0QixFQXJCZSxDQXNCdkI7QUFDQTtBQUNBO0FBQ0E7QUFFSCxHQXpKSTtBQTJKTEMsRUFBQUEsS0EzSkssbUJBMkpJLENBRVIsQ0E3Skk7QUErSkw7QUFFQUMsRUFBQUEsUUFqS0ssc0JBaUtPO0FBQ1IsU0FBS04sSUFBTCxDQUFVZCxNQUFWLEdBQWtCLElBQWxCO0FBQ0gsR0FuS0k7QUFvS0xxQixFQUFBQSxVQXBLSyx3QkFvS1M7QUFDVixTQUFLUCxJQUFMLENBQVVkLE1BQVYsR0FBa0IsS0FBbEI7QUFDSDtBQXRLSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIEh0dHBIZWxwZXIgPSByZXF1aXJlKFwiaHR0cFwiKTtcclxuLy8gdmFyIGZzID0gcmVxdWlyZSgnZnMnKTsgLy8g5byV5YWlZnPmqKHlnZdcclxuLy8gdmFyIGdsb2JhbHVzZXJpbmZvID0gcmVxdWlyZShcIkdsb2JhbHVzZXJJbmZvXCIpO1xyXG5sZXQgaHR0cFJlcXVlc3QgPSAgbmV3IEh0dHBIZWxwZXIoKTsgIFxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiBcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICByZWdpc3Rlcl9hbGVydDogY2MuTGFiZWwsXHJcbiAgICAgICAgcmVnaXN0ZXJfbG9naW5fbmFtZTogY2MuRWRpdEJveCxcclxuICAgICAgICByZWdpc3Rlcl9sb2dpbl9wYXNzd29yZDogY2MuRWRpdEJveFxyXG4gICAgfSxcclxuIFxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIGxvZ2lubmFtZSA9Y2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2dpbm5hbWUnKTtcclxuICAgICAgICB2YXIgcGFzc3dvcmQgPWNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGFzc3dvcmQnKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhsb2dpbm5hbWUpXHJcbiAgICAgICAgaWYobG9naW5uYW1lKXtcclxuICAgICAgICAgICB0aGlzLnJlZ2lzdGVyX2xvZ2luX25hbWUuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZz1sb2dpbm5hbWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGxvZ2lubmFtZSl7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJfbG9naW5fcGFzc3dvcmQuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZz1wYXNzd29yZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8g5pON5L2c5paH5pysLS3or7vlj5bnlKjmiLfkv6Hmga9cclxuICAgICAgICB0aGlzLnRva2VubG9naW4oKTsgLy8g5b+r5o2355m75b2VXHJcbiAgICAgICAgLy8gLy8g6LSm5Y+35a+G56CB55m75b2VXHJcbiAgICAgICAgLy8gdGhpcy5sb2dpbigpO1xyXG4gICAgICAgIC8v5YKo5a2Y57yT5a2YXHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIHZhbHVlKTtcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcclxuXHJcbiAgICAgICAgLy8g5L+d5a2Y5pyA6auY5YiG5Yiw5pys5ZywXHJcbiAgICAgICAgLy8gY29uc3QgS0VZX0JFU1RfU0NPUkUgPSBcImJlc3RTY29yZVwiO1xyXG4gICAgICAgIC8vIGxldCBiZXN0U2NvcmUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oS0VZX0JFU1RfU0NPUkUpO1xyXG4gICAgICAgIC8vIGlmIChiZXN0U2NvcmUgPT09IFwibnVsbFwiIHx8IHRoaXMuc2NvcmUgPiBiZXN0U2NvcmUpIHtcclxuICAgICAgICAvLyAgICAgYmVzdFNjb3JlID0gdGhpcy5zY29yZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKEtFWV9CRVNUX1NDT1JFLCBiZXN0U2NvcmUpO1xyXG4gICAgfSxcclxuICAgIHRva2VubG9naW46IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy8g6I635Y+W5pys5ZywanNvbiAg5L+h5oGvXHJcbiAgICAgICAgLy8gY2MubG9hZGVyLmxvYWQoIGNjLnVybC5yYXcoXCJyZXNvdXJjZXMvbG9naW4uanNvblwiKSxmdW5jdGlvbihlcnIscmVzKXsgIFxyXG4gICAgICAgIC8vIGNjLmxvYWRlci5sb2FkUmVzKCdsb2dpbi5qc29uJyxmdW5jdGlvbihlcnIscmVzKXsgICAvL+m7mOiupHJlc291cmNlc1xyXG4gICAgICAgIC8vICAgICBsZXQganNvbiA9IHJlcy5qc29uO1xyXG4gICAgICAgIC8vICAgICB2YXIgcGFyYW1zID0ge1xyXG4gICAgICAgIC8vICAgICAgICAgJ3Rva2VuJzoganNvbi50b2tlbixcclxuICAgICAgICAvLyAgICAgfTtcclxuICAgICAgICAvLyAgICAgY2MubG9nKGpzb24udG9rZW4pOyBcclxuICAgICAgICAvLyAgICAgdmFyIHJlcyA9IGh0dHBSZXF1ZXN0Lmh0dHBQb3N0TG9naW4oJy9hcHAvYXBpLXNlcnZlci90b2tlbi1sb2dpbicsIHBhcmFtcyAsZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAvLyAgICAgICAgIGNjLmxvYWRlci5yZWxlYXNlKCdyZXNvdXJjZXMvbG9naW4uanNvbicpOyAvL+mHiuaUvmpzb24g6LWE5rqQXHJcbiAgICAgICAgLy8gICAgICAgICAvLyBpZihjYy5zeXMuaXNOYXRpdmUpeyAgLy8gIGpzYi5maWxlVXRpbHPkuI3mlK/mjIEgd2ViICDor7vlhplcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICBqc2IuZmlsZVV0aWxzLndyaXRlU3RyaW5nVG9GaWxlKGRhdGEsdG9rZW4pXHJcbiAgICAgICAgLy8gICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gICAgICAgICAvLyBjYy5sb2coZGF0YSk7IFxyXG4gICAgICAgIC8vICAgICAgICAgLy8g5pyq55m75b2V5by55Ye655m75b2VXHJcbiAgICAgICAgLy8gICAgICAgICBpZihkYXRhLmNvZGU9PTApe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIHRoaXMubG9naW5ib3gubm9kZS5hY3RpdmUgPSBmYWxzZTsgIC8vIOi/m+W6pumakOiXj1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIC8vIH0pXHJcbiAgICAgICAgdmFyIHRva2VuID1jYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rva2VuJyk7XHJcbiAgICAgICAgLy/lrprkvY3lvLnlh7rnqpflj6NcclxuICAgICAgICB2YXIgdXNlcl9zdGF0dXMgID1jYy5maW5kKFwiQ2FudmFzL3NlcnZlci91c2VyX3N0YXR1c1wiKTtcclxuICAgICAgICB1c2VyX3N0YXR1cy5hY3RpdmU9dHJ1ZTtcclxuICAgICAgICB2YXIgdXNlcl9waG9uZSAgPWNjLmZpbmQoXCJDYW52YXMvc2VydmVyL3VzZXJfc3RhdHVzL3VzZXJfcGhvbmVcIik7XHJcbiAgICAgICAgaWYodG9rZW4pe1xyXG4gICAgICAgICAgICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3RMb2dpbignL2FwcC9hcGktc2VydmVyL3Rva2VuLWxvZ2luJywgeyd0b2tlbic6dG9rZW59ICxmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBfdGhpcyA9dGhpcztcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2FkZXIucmVsZWFzZSgncmVzb3VyY2VzL2xvZ2luLmpzb24nKTsgLy/ph4rmlL5qc29uIOi1hOa6kFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmKGNjLnN5cy5pc05hdGl2ZSl7ICAvLyAganNiLmZpbGVVdGlsc+S4jeaUr+aMgSB3ZWIgIOivu+WGmVxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBqc2IuZmlsZVV0aWxzLndyaXRlU3RyaW5nVG9GaWxlKGRhdGEsdG9rZW4pXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhkYXRhKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g5pyq55m75b2V5by55Ye655m75b2VXHJcbiAgICAgICAgICAgICAgICAgICAvLyDnmbvlvZXmiJDlip9cclxuICAgICAgICAgICAgICAgICAgICBpZihkYXRhLmNvZGU9PTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDlhbbkuK1zbGljZShzdGFydCwgZW5kKe+8mueUqOS6juaPkOWPluWtl+espuS4sueahOeJh+autVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzdHIuc2xpY2UoMSkg5oyH5LiL5qCH5Li6MeS5i+WQjueahOaJgOacieWFg+e0oFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbG9naW5uYW1lID0gIGRhdGEuZGF0YS51c2VyaW5mby5sb2dpbm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwaG9uZSA9IGxvZ2lubmFtZS5zbGljZSgwLDMpICsgXCIqKioqXCIgKyBsb2dpbm5hbWUuc2xpY2UoNywxMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfcGhvbmUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9cGhvbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubG9naW5ib3gubm9kZS5hY3RpdmUgPSBmYWxzZTsgIC8vIOi/m+W6pumakOiXj1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1c2VyX3Bob25lLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWRhdGEubWVzc2FnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5sb2dpbmJveC5ub2RlLmFjdGl2ZSA9IGZhbHNlOyAgLy8g6L+b5bqm6ZqQ6JePXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHVzZXJfcGhvbmUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9XCLmnKrnmbvlvZVcIjtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgIGxvZ2luOiBmdW5jdGlvbigpe1xyXG4gICAgXHJcbiAgICAgICB2YXIgbG9naW5uYW1lID0gdGhpcy5yZWdpc3Rlcl9sb2dpbl9uYW1lLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XHJcbiAgICAgICB2YXIgcGFzc3dvcmQgPSB0aGlzLnJlZ2lzdGVyX2xvZ2luX3Bhc3N3b3JkLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgJ2xvZ2lubmFtZSc6IGxvZ2lubmFtZSxcclxuICAgICAgICAgICAgJ3Bhc3N3b3JkJzogcGFzc3dvcmQsXHJcbiAgICAgICAgICAgIC8vICdsb2dpbm5hbWUnOiAneWluY2FuMTk5MycsXHJcbiAgICAgICAgICAgIC8vICdwYXNzd29yZCc6IDEyMzQ1NixcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2YXIgX3RoaXM9IHRoaXM7XHJcbiAgICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3RMb2dpbignL2FwcC9hcGktc2VydmVyL2xvZ2luJywgcGFyYW1zICxmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBjYy5sb2coZGF0YSk7IFxyXG4gICAgICAgICAgICBpZihkYXRhLmNvZGU9PTEpe1xyXG4gICAgICAgICAgICAgICAgLy8gX3RoaXMucmVnaXN0ZXJfYWxlcnQuY29sb3IgPSAgbmV3IGNjLmNvbG9yKCcjQkRGRjAwJyk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5yZWdpc3Rlcl9hbGVydC5zdHJpbmcgPScnO1xyXG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2tlbicsIGRhdGEuZGF0YS50b2tlbik7XHJcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvZ2lubmFtZScsIGxvZ2lubmFtZSk7XHJcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Bhc3N3b3JkJywgcGFzc3dvcmQpO1xyXG4gICAgICAgICAgICAgICAgX3RoaXMubm9kZS5hY3RpdmUgPWZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2MuZmluZChcIkNhbnZhcy9zZXJ2ZXIvdXNlcl9zdGF0dXMvdXNlcl9waG9uZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy50b2tlbmxvZ2luKClcclxuICAgICAgICAgICAgICAgIC8vIHZhciBteWNvbXBvbmV0ID0gIF90aGlzLm5vZGUuZ2V0Q29tcG9uZW50KHJlZ2lzdGVyKVxyXG4gICAgICAgICAgICAgICAgLy8gbXljb21wb25ldC50b2tlbmxvZ2luKCk7IC8vIOW/q+aNt+eZu+W9lVxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIF90aGlzLnJlZ2lzdGVyX2FsZXJ0LnN0cmluZyA9J+i0puWPt+WvhueggemUmeivryEnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5pON5L2c5paH5pysLS3kv67mlLnnlKjmiLfkv6Hmga9cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIFxyXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIC8vIGNjLmxvZyhkYXRhKVxyXG4gICAgICAgIC8vIHZhciB1c2VyQ291bnQgPSAgY2MuZmluZChcIkNhbnZhcy9ncm91bmQvZWRpdGJveF9jb3VudFwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xyXG4gICAgICAgIC8vIHZhciB1c2VyUGFzc3dhcmQgPSAgY2MuZmluZChcIkNhbnZhcy9ncm91bmQvZWRpdGJveF9wYXNzd2FyZFwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi55So5oi36LSm5Y+377yaXCIrdXNlckNvdW50KyBcIueUqOaIt+Wvhuegge+8mlwiKyB1c2VyUGFzc3dhcmQpO1xyXG4gICAgICAgIC8vIEh0dHBIZWxwLmxvZ2luKHVzZXJDb3VudCx1c2VyUGFzc3dhcmQsZnVuY3Rpb24oaXNTdWNjZXNzLERhdGEpe1xyXG4gICAgICAgIC8vICAgICB2YXIgaW5mbyA9IERhdGE7XHJcbiAgICAgICAgLy8gICAgIGlmKHRydWUgPT0gaXNTdWNjZXNzKXtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwibG9naW4gIHN1Y2Nlc3MhISFcIik7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhpbmZvKTtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnVzZXJuYW1lID0gaW5mby51c2VybmFtZTtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLmdhbWVwb2ludCA9IGluZm8uZ2FtZXBvaW50O1xyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8uc2tleSA9IGluZm8uc2tleTtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnVzZXJpZCA9IGluZm8udXNlcmlkO1xyXG4gXHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby5tb25leSA9IGluZm8ubW9uZXk7XHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby51c2VyaWQgPSBpbmZvLnVzZXJpZDtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnBhc3N3b3JkID0gaW5mby5wYXNzd29yZDtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnNhbHQgPSBpbmZvLnNhbHQ7XHJcbiBcclxuICAgICAgICAvLyAgICAgICAgIC8v55m75b2V5oiQ5Yqf5ZCO5Yqg6L295Zyw5Zu+6LWE5rqQXHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21hcCcpO1xyXG4gICAgICAgIC8vICAgICB9ZWxzZXtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwibG9naW4gIGZpbGVkISEhXCIpXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICBcclxuICAgIH0sXHJcbiBcclxuICAgIHN0YXJ0ICgpIHtcclxuIFxyXG4gICAgfSxcclxuIFxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcblxyXG4gICAgc2hvd19kbGcgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPXRydWU7XHJcbiAgICB9LFxyXG4gICAgaGlkZGVuX2RsZyAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9ZmFsc2U7XHJcbiAgICB9XHJcbn0pO1xyXG4iXX0=