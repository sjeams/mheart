
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/bage/Conf');
require('./assets/Script/bage/Game');
require('./assets/Script/bage/Tool');
require('./assets/Script/commonjs/alert');
require('./assets/Script/commonjs/post');
require('./assets/Script/home_js/userinfo');
require('./assets/Script/login/Alert');
require('./assets/Script/login/ProgressBarScript');
require('./assets/Script/login/SpriteTextTool');
require('./assets/Script/login/Tools');
require('./assets/Script/login/background');
require('./assets/Script/login/button_check');
require('./assets/Script/login/button_xieyi');
require('./assets/Script/login/http');
require('./assets/Script/login/jspfile');
require('./assets/Script/login/loading');
require('./assets/Script/login/myserver');
require('./assets/Script/login/popup_dlg');
require('./assets/Script/login/register');
require('./assets/Script/login/register_in');
require('./assets/Script/login/register_knows');
require('./assets/Script/login/tips');
require('./assets/Script/scence/loading_fist');
require('./assets/Script/scence/scoretrump');
require('./assets/Script/scence/wap');

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
//------QC-SOURCE-SPLIT------

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

var HttpHelper = require("http"); // var fs = require('fs'); // ??????fs??????
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
    // // ????????????--??????????????????
    // this.tokenlogin(); // ????????????
    // // ??????????????????
    // this.login();
    //????????????
    // cc.sys.localStorage.setItem('token', value);
    // cc.sys.localStorage.getItem(key);
    // cc.sys.localStorage.removeItem(key);
    // ????????????????????????
    // const KEY_BEST_SCORE = "bestScore";
    // let bestScore = cc.sys.localStorage.getItem(KEY_BEST_SCORE);
    // if (bestScore === "null" || this.score > bestScore) {
    //     bestScore = this.score;
    // }
    // cc.sys.localStorage.setItem(KEY_BEST_SCORE, bestScore);
  },
  tokenlogin: function tokenlogin() {
    // ????????????json  ??????
    // cc.loader.load( cc.url.raw("resources/login.json"),function(err,res){  
    // cc.loader.loadRes('login.json',function(err,res){   //??????resources
    //     let json = res.json;
    //     var params = {
    //         'token': json.token,
    //     };
    //     cc.log(json.token); 
    //     var res = httpRequest.httpPost('https://www.mheart.xyz/app/api-server/token-login', params ,function (data) {
    //         cc.loader.release('resources/login.json'); //??????json ??????
    //         // if(cc.sys.isNative){  //  jsb.fileUtils????????? web  ??????
    //         //     jsb.fileUtils.writeStringToFile(data,token)
    //         // }
    //         // cc.log(data); 
    //         // ?????????????????????
    //         if(data.code==0){
    //             // this.loginbox.node.active = false;  // ????????????
    //         }
    //     });
    // })
    var token = cc.sys.localStorage.getItem('token');

    if (token) {
      httpRequest.httpPost('https://www.mheart.xyz/app/api-server/token-login', {
        'token': token
      }, function (data) {
        var _this = this; // cc.loader.release('resources/login.json'); //??????json ??????
        // if(cc.sys.isNative){  //  jsb.fileUtils????????? web  ??????
        //     jsb.fileUtils.writeStringToFile(data,token)
        // }
        // cc.log(data); 
        // ?????????????????????


        if (data.code == 0) {// this.loginbox.node.active = false;  // ????????????
        } else {// this.loginbox.node.active = false;  // ????????????
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
  //             _this.register_alert.string ='??????????????????!';
  //         }
  //         //????????????--??????????????????
  //     });
  // },
  //
  // btnClick1: function (event, customEventData) {
  //     // // ??????????????????
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
  //     httpRequest.httpPost('https://www.mheart.xyz/app/api-server/user-login', {'token':token} ,function (data) {
  //         cc.log(data); 
  //         if(data.code==0){ // ????????????????????????????????????
  //             // ??????
  //         }else{
  //             // ???????????????
  //             cc.sys.localStorage.setItem('server', JSON.stringify(data.data.server));
  //             if(data.code==1){// ???????????????????????????
  //                 // cc.log(data.data.userinfo); 
  //                 cc.sys.localStorage.setItem('userinfo', JSON.stringify(data.data.userinfo)); 
  //                 cc.director.loadScene('home/dating');
  //                 // cc.sys.localStorage.setItem('userinfo', JSON.stringify(data.data.userinfo));
  //                 // cc.sys.localStorage.getItem(key); //????????????
  //             }
  //             if(data.code==2){ // ??????????????????????????????
  //                 // ????????????????????????     
  //                 var server = JSON.parse(cc.sys.localStorage.getItem('server'));
  //                 // cc.log(server); 
  //                 // ????????????
  //                 cc.director.loadScene('register');
  //             }
  //         }
  //     });
  //     //?????? event ????????? Touch Event ???????????????????????? event.target ???????????????????????????
  //     // var node = event.target;
  //     // var button = node.getComponent(cc.Button);
  //     //????????? customEventData ????????????????????????????????? "click1 user data"
  //     // cc.log("node=", node.name, " event=", event.type, " data=", customEventData);
  // },
  // callback: function (event) {
  //     // cc.log(data)
  //     // var userCount =  cc.find("Canvas/ground/editbox_count").getComponent(cc.EditBox).string;
  //     // var userPassward =  cc.find("Canvas/ground/editbox_passward").getComponent(cc.EditBox).string;
  //     // console.log("???????????????"+userCount+ "???????????????"+ userPassward);
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
  //     //         //?????????????????????????????????
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
    this.register_knows_webview.url = 'https://www.mheart.xyz/app/api-user/xieyi';
    this.node.active = true;
  },
  xieyi_hidden_dlg: function xieyi_hidden_dlg() {
    this.node.active = false;
  },
  yinsi_show_dlg: function yinsi_show_dlg() {
    this.register_knows_webview.url = 'https://www.mheart.xyz/app/api-user/yinsi';
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxccmVnaXN0ZXJfa25vd3MuanMiXSwibmFtZXMiOlsiSHR0cEhlbHBlciIsInJlcXVpcmUiLCJodHRwUmVxdWVzdCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwicmVnaXN0ZXJfa25vd3Nfd2VidmlldyIsIldlYlZpZXciLCJvbkxvYWQiLCJ0b2tlbmxvZ2luIiwidG9rZW4iLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiaHR0cFBvc3QiLCJkYXRhIiwiX3RoaXMiLCJjb2RlIiwic3RhcnQiLCJzaG93X2RsZyIsIm5vZGUiLCJhY3RpdmUiLCJoaWRkZW5fZGxnIiwieGlleWlfc2hvd19kbGciLCJ1cmwiLCJ4aWV5aV9oaWRkZW5fZGxnIiwieWluc2lfc2hvd19kbGciLCJ5aW5zaV9oaWRkZW5fZGxnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBeEIsRUFDQTtBQUNBOzs7QUFDQSxJQUFJQyxXQUFXLEdBQUksSUFBSUYsVUFBSixFQUFuQjtBQUVBRyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUjtBQUNBO0FBQ0E7QUFDQUMsSUFBQUEsc0JBQXNCLEVBQUNKLEVBQUUsQ0FBQ0s7QUFKbEIsR0FIUDtBQVVMQyxFQUFBQSxNQUFNLEVBQUUsa0JBQVksQ0FDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUgsR0F2Q0k7QUF3Q0xDLEVBQUFBLFVBQVUsRUFBRSxzQkFBVTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0EsUUFBSUMsS0FBSyxHQUFFUixFQUFFLENBQUNTLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsT0FBNUIsQ0FBWDs7QUFDQSxRQUFHSCxLQUFILEVBQVM7QUFDRFQsTUFBQUEsV0FBVyxDQUFDYSxRQUFaLENBQXFCLG1EQUFyQixFQUEwRTtBQUFDLGlCQUFRSjtBQUFULE9BQTFFLEVBQTJGLFVBQVVLLElBQVYsRUFBZ0I7QUFDdkcsWUFBSUMsS0FBSyxHQUFFLElBQVgsQ0FEdUcsQ0FFdkc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxZQUFHRCxJQUFJLENBQUNFLElBQUwsSUFBVyxDQUFkLEVBQWdCLENBQ1o7QUFDSCxTQUZELE1BRUssQ0FDQTtBQUNKO0FBQ1IsT0FiRztBQWVQO0FBQ0osR0FsRkk7QUFvRkw7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQyxFQUFBQSxLQTFMSyxtQkEwTEksQ0FFUixDQTVMSTtBQThMTDtBQUVBQyxFQUFBQSxRQWhNSyxzQkFnTU87QUFDUixTQUFLQyxJQUFMLENBQVVDLE1BQVYsR0FBa0IsSUFBbEI7QUFDSCxHQWxNSTtBQW1NTEMsRUFBQUEsVUFuTUssd0JBbU1TO0FBQ1YsU0FBS0YsSUFBTCxDQUFVQyxNQUFWLEdBQWtCLEtBQWxCO0FBQ0gsR0FyTUk7QUF1TUxFLEVBQUFBLGNBdk1LLDRCQXVNYTtBQUNkLFNBQUtqQixzQkFBTCxDQUE0QmtCLEdBQTVCLEdBQWlDLDJDQUFqQztBQUNBLFNBQUtKLElBQUwsQ0FBVUMsTUFBVixHQUFrQixJQUFsQjtBQUNILEdBMU1JO0FBMk1MSSxFQUFBQSxnQkEzTUssOEJBMk1lO0FBQ2hCLFNBQUtMLElBQUwsQ0FBVUMsTUFBVixHQUFrQixLQUFsQjtBQUNILEdBN01JO0FBOE1MSyxFQUFBQSxjQTlNSyw0QkE4TWE7QUFDZCxTQUFLcEIsc0JBQUwsQ0FBNEJrQixHQUE1QixHQUFpQywyQ0FBakM7QUFDQSxTQUFLSixJQUFMLENBQVVDLE1BQVYsR0FBa0IsSUFBbEI7QUFDSCxHQWpOSTtBQWtOTE0sRUFBQUEsZ0JBbE5LLDhCQWtOZTtBQUNoQixTQUFLUCxJQUFMLENBQVVDLE1BQVYsR0FBa0IsS0FBbEI7QUFDSDtBQXBOSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIEh0dHBIZWxwZXIgPSByZXF1aXJlKFwiaHR0cFwiKTtcclxuLy8gdmFyIGZzID0gcmVxdWlyZSgnZnMnKTsgLy8g5byV5YWlZnPmqKHlnZdcclxuLy8gdmFyIGdsb2JhbHVzZXJpbmZvID0gcmVxdWlyZShcIkdsb2JhbHVzZXJJbmZvXCIpO1xyXG5sZXQgaHR0cFJlcXVlc3QgPSAgbmV3IEh0dHBIZWxwZXIoKTsgIFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gcmVnaXN0ZXJfYWxlcnQ6IGNjLkxhYmVsLFxyXG4gICAgICAgIC8vIHJlZ2lzdGVyX2xvZ2luX25hbWU6IGNjLkVkaXRCb3gsXHJcbiAgICAgICAgLy8gcmVnaXN0ZXJfbG9naW5fcGFzc3dvcmQ6IGNjLkVkaXRCb3gsXHJcbiAgICAgICAgcmVnaXN0ZXJfa25vd3Nfd2VidmlldzpjYy5XZWJWaWV3XHJcbiAgICB9LFxyXG4gXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyB2YXIgbG9naW5uYW1lID1jYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvZ2lubmFtZScpO1xyXG4gICAgICAgIC8vIHZhciBwYXNzd29yZCA9Y2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwYXNzd29yZCcpO1xyXG4gICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKGxvZ2lubmFtZSlcclxuICAgICAgICAvLyBpZihsb2dpbm5hbWUpe1xyXG4gICAgICAgIC8vICAgIHRoaXMucmVnaXN0ZXJfbG9naW5fbmFtZS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nPWxvZ2lubmFtZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gaWYobG9naW5uYW1lKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5yZWdpc3Rlcl9sb2dpbl9wYXNzd29yZC5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nPXBhc3N3b3JkO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyAvLyDmk43kvZzmlofmnKwtLeivu+WPlueUqOaIt+S/oeaBr1xyXG4gICAgICAgIC8vIHRoaXMudG9rZW5sb2dpbigpOyAvLyDlv6vmjbfnmbvlvZVcclxuICAgICAgICAvLyAvLyDotKblj7flr4bnoIHnmbvlvZVcclxuICAgICAgICAvLyB0aGlzLmxvZ2luKCk7XHJcbiAgICAgICAgLy/lgqjlrZjnvJPlrZhcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdmFsdWUpO1xyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG5cclxuICAgICAgICAvLyDkv53lrZjmnIDpq5jliIbliLDmnKzlnLBcclxuICAgICAgICAvLyBjb25zdCBLRVlfQkVTVF9TQ09SRSA9IFwiYmVzdFNjb3JlXCI7XHJcbiAgICAgICAgLy8gbGV0IGJlc3RTY29yZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShLRVlfQkVTVF9TQ09SRSk7XHJcbiAgICAgICAgLy8gaWYgKGJlc3RTY29yZSA9PT0gXCJudWxsXCIgfHwgdGhpcy5zY29yZSA+IGJlc3RTY29yZSkge1xyXG4gICAgICAgIC8vICAgICBiZXN0U2NvcmUgPSB0aGlzLnNjb3JlO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oS0VZX0JFU1RfU0NPUkUsIGJlc3RTY29yZSk7XHJcbiAgICAgICAgXHJcblxyXG4gXHJcbiAgICB9LFxyXG4gICAgdG9rZW5sb2dpbjogZnVuY3Rpb24oKXtcclxuICAgICAgICAvLyDojrflj5bmnKzlnLBqc29uICDkv6Hmga9cclxuICAgICAgICAvLyBjYy5sb2FkZXIubG9hZCggY2MudXJsLnJhdyhcInJlc291cmNlcy9sb2dpbi5qc29uXCIpLGZ1bmN0aW9uKGVycixyZXMpeyAgXHJcbiAgICAgICAgLy8gY2MubG9hZGVyLmxvYWRSZXMoJ2xvZ2luLmpzb24nLGZ1bmN0aW9uKGVycixyZXMpeyAgIC8v6buY6K6kcmVzb3VyY2VzXHJcbiAgICAgICAgLy8gICAgIGxldCBqc29uID0gcmVzLmpzb247XHJcbiAgICAgICAgLy8gICAgIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgICAgLy8gICAgICAgICAndG9rZW4nOiBqc29uLnRva2VuLFxyXG4gICAgICAgIC8vICAgICB9O1xyXG4gICAgICAgIC8vICAgICBjYy5sb2coanNvbi50b2tlbik7IFxyXG4gICAgICAgIC8vICAgICB2YXIgcmVzID0gaHR0cFJlcXVlc3QuaHR0cFBvc3QoJ2h0dHBzOi8vd3d3Lm1oZWFydC54eXovYXBwL2FwaS1zZXJ2ZXIvdG9rZW4tbG9naW4nLCBwYXJhbXMgLGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBjYy5sb2FkZXIucmVsZWFzZSgncmVzb3VyY2VzL2xvZ2luLmpzb24nKTsgLy/ph4rmlL5qc29uIOi1hOa6kFxyXG4gICAgICAgIC8vICAgICAgICAgLy8gaWYoY2Muc3lzLmlzTmF0aXZlKXsgIC8vICBqc2IuZmlsZVV0aWxz5LiN5pSv5oyBIHdlYiAg6K+75YaZXHJcbiAgICAgICAgLy8gICAgICAgICAvLyAgICAganNiLmZpbGVVdGlscy53cml0ZVN0cmluZ1RvRmlsZShkYXRhLHRva2VuKVxyXG4gICAgICAgIC8vICAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vICAgICAgICAgLy8gY2MubG9nKGRhdGEpOyBcclxuICAgICAgICAvLyAgICAgICAgIC8vIOacqueZu+W9leW8ueWHuueZu+W9lVxyXG4gICAgICAgIC8vICAgICAgICAgaWYoZGF0YS5jb2RlPT0wKXtcclxuICAgICAgICAvLyAgICAgICAgICAgICAvLyB0aGlzLmxvZ2luYm94Lm5vZGUuYWN0aXZlID0gZmFsc2U7ICAvLyDov5vluqbpmpDol49cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgLy8gfSlcclxuICAgICAgICB2YXIgdG9rZW4gPWNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuICAgICAgICBpZih0b2tlbil7XHJcbiAgICAgICAgICAgICAgICBodHRwUmVxdWVzdC5odHRwUG9zdCgnaHR0cHM6Ly93d3cubWhlYXJ0Lnh5ei9hcHAvYXBpLXNlcnZlci90b2tlbi1sb2dpbicsIHsndG9rZW4nOnRva2VufSAsZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgX3RoaXMgPXRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9hZGVyLnJlbGVhc2UoJ3Jlc291cmNlcy9sb2dpbi5qc29uJyk7IC8v6YeK5pS+anNvbiDotYTmupBcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZihjYy5zeXMuaXNOYXRpdmUpeyAgLy8gIGpzYi5maWxlVXRpbHPkuI3mlK/mjIEgd2ViICDor7vlhplcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAganNiLmZpbGVVdGlscy53cml0ZVN0cmluZ1RvRmlsZShkYXRhLHRva2VuKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coZGF0YSk7IFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOacqueZu+W9leW8ueWHuueZu+W9lVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGRhdGEuY29kZT09MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMubG9naW5ib3gubm9kZS5hY3RpdmUgPSBmYWxzZTsgIC8vIOi/m+W6pumakOiXj1xyXG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5sb2dpbmJveC5ub2RlLmFjdGl2ZSA9IGZhbHNlOyAgLy8g6L+b5bqm6ZqQ6JePXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSBcclxuICAgIH0sXHJcblxyXG4gICAgLy8gbG9naW46IGZ1bmN0aW9uKCl7XHJcbiAgICBcclxuICAgIC8vICAgIHZhciBsb2dpbm5hbWUgPSB0aGlzLnJlZ2lzdGVyX2xvZ2luX25hbWUuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZztcclxuICAgIC8vICAgIHZhciBwYXNzd29yZCA9IHRoaXMucmVnaXN0ZXJfbG9naW5fcGFzc3dvcmQuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZztcclxuICAgIC8vICAgICB2YXIgcGFyYW1zID0ge1xyXG4gICAgLy8gICAgICAgICAnbG9naW5uYW1lJzogbG9naW5uYW1lLFxyXG4gICAgLy8gICAgICAgICAncGFzc3dvcmQnOiBwYXNzd29yZCxcclxuICAgIC8vICAgICAgICAgLy8gJ2xvZ2lubmFtZSc6ICd5aW5jYW4xOTkzJyxcclxuICAgIC8vICAgICAgICAgLy8gJ3Bhc3N3b3JkJzogMTIzNDU2LFxyXG4gICAgLy8gICAgIH07XHJcblxyXG4gICAgLy8gICAgIHZhciBfdGhpcz0gdGhpcztcclxuICAgIC8vICAgICBodHRwUmVxdWVzdC5odHRwUG9zdCgnaHR0cHM6Ly93d3cubWhlYXJ0Lnh5ei9hcHAvYXBpLXNlcnZlci9sb2dpbicsIHBhcmFtcyAsZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgIC8vICAgICAgICAgY2MubG9nKGRhdGEpOyBcclxuICAgIC8vICAgICAgICAgaWYoZGF0YS5jb2RlPT0xKXtcclxuICAgIC8vICAgICAgICAgICAgIC8vIF90aGlzLnJlZ2lzdGVyX2FsZXJ0LmNvbG9yID0gIG5ldyBjYy5jb2xvcignI0JERkYwMCcpO1xyXG4gICAgLy8gICAgICAgICAgICAgX3RoaXMucmVnaXN0ZXJfYWxlcnQuc3RyaW5nID0nJztcclxuICAgIC8vICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBkYXRhLmRhdGEudG9rZW4pO1xyXG4gICAgLy8gICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2dpbm5hbWUnLCBsb2dpbm5hbWUpO1xyXG4gICAgLy8gICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwYXNzd29yZCcsIHBhc3N3b3JkKTtcclxuICAgIC8vICAgICAgICAgICAgIF90aGlzLm5vZGUuYWN0aXZlID1mYWxzZTtcclxuICAgIC8vICAgICAgICAgfWVsc2V7XHJcbiAgICAvLyAgICAgICAgICAgICBfdGhpcy5yZWdpc3Rlcl9hbGVydC5zdHJpbmcgPSfotKblj7flr4bnoIHplJnor68hJztcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAvL+aTjeS9nOaWh+acrC0t5L+u5pS555So5oi35L+h5oGvXHJcbiAgICAvLyAgICAgfSk7XHJcblxyXG4gICAgLy8gfSxcclxuICAgIC8vXHJcbiAgICAvLyBidG5DbGljazE6IGZ1bmN0aW9uIChldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XHJcbiAgICAvLyAgICAgLy8gLy8g6K+35rGC55m75b2V5o6l5Y+jXHJcbiAgICAvLyAgICAgLy8gdmFyIHBhcmFtcyA9IHtcclxuICAgIC8vICAgICAvLyAgICAgICAgICdsb2dpbm5hbWUnOiAneWluY2FuMTk5MycsXHJcbiAgICAvLyAgICAgLy8gICAgICAgICAncGFzc3dvcmQnOiAxMjM0NTYsXHJcbiAgICAvLyAgICAgLy8gICAgICAgICAnc2VydmVyaWQnOiAxLFxyXG4gICAgLy8gICAgIC8vIH07XHJcbiAgICAvLyAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwYXJhbXMnLCBKU09OLnN0cmluZ2lmeShwYXJhbXMpKTtcclxuICAgIC8vICAgICB2YXIgcGFyYW1zID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwYXJhbXNcIikpO1xyXG4gICAgLy8gICAgIHZhciB0b2tlbiA9Y2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgXHJcbiAgICAvLyAgICAgLy8gY2MubG9nKHZhbHVlKTsgXHJcbiAgICAvLyAgICAgLy8gbGV0IGh0dHBSZXF1ZXN0ID0gIG5ldyBIdHRwSGVscGVyKCk7ICBcclxuICAgIC8vICAgICBodHRwUmVxdWVzdC5odHRwUG9zdCgnaHR0cHM6Ly93d3cubWhlYXJ0Lnh5ei9hcHAvYXBpLXNlcnZlci91c2VyLWxvZ2luJywgeyd0b2tlbic6dG9rZW59ICxmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgLy8gICAgICAgICBjYy5sb2coZGF0YSk7IFxyXG4gICAgLy8gICAgICAgICBpZihkYXRhLmNvZGU9PTApeyAvLyDnmbvlvZXlpLHotKXvvIzmiJbmnKzlnLDmlbDmja7lpLHmlYhcclxuICAgIC8vICAgICAgICAgICAgIC8vIOW8ueeql1xyXG4gICAgLy8gICAgICAgICB9ZWxzZXtcclxuICAgIC8vICAgICAgICAgICAgIC8vIOiuvue9ruacjeWKoeWZqFxyXG4gICAgLy8gICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZXJ2ZXInLCBKU09OLnN0cmluZ2lmeShkYXRhLmRhdGEuc2VydmVyKSk7XHJcbiAgICAvLyAgICAgICAgICAgICBpZihkYXRhLmNvZGU9PTEpey8vIOeZu+W9leaIkOWKn++8jOi/m+WFpea4uOaIj1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhkYXRhLmRhdGEudXNlcmluZm8pOyBcclxuICAgIC8vICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJpbmZvJywgSlNPTi5zdHJpbmdpZnkoZGF0YS5kYXRhLnVzZXJpbmZvKSk7IFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnaG9tZS9kYXRpbmcnKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJpbmZvJywgSlNPTi5zdHJpbmdpZnkoZGF0YS5kYXRhLnVzZXJpbmZvKSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7IC8v6K+75Y+W5pWw5o2uXHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgICAgICBpZihkYXRhLmNvZGU9PTIpeyAvLyDnmbvlvZXmiJDlip/vvIzmnKrlrprkuYnop5LoibJcclxuICAgIC8vICAgICAgICAgICAgICAgICAvLyDov5vlhaXlrprkuYnop5LoibLnlYzpnaIgICAgIFxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHZhciBzZXJ2ZXIgPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VydmVyJykpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhzZXJ2ZXIpOyBcclxuICAgIC8vICAgICAgICAgICAgICAgICAvLyDliJvlu7rop5LoibJcclxuICAgIC8vICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ3JlZ2lzdGVyJyk7XHJcbiAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAvLyAgICAgLy/ov5nph4wgZXZlbnQg5piv5LiA5LiqIFRvdWNoIEV2ZW50IOWvueixoe+8jOS9oOWPr+S7pemAmui/hyBldmVudC50YXJnZXQg5Y+W5Yiw5LqL5Lu255qE5Y+R6YCB6IqC54K5XHJcbiAgICAvLyAgICAgLy8gdmFyIG5vZGUgPSBldmVudC50YXJnZXQ7XHJcbiAgICAvLyAgICAgLy8gdmFyIGJ1dHRvbiA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAvLyAgICAgLy/ov5nph4znmoQgY3VzdG9tRXZlbnREYXRhIOWPguaVsOWwseetieS6juS9oOS5i+WJjeiuvue9rueahCBcImNsaWNrMSB1c2VyIGRhdGFcIlxyXG4gICAgLy8gICAgIC8vIGNjLmxvZyhcIm5vZGU9XCIsIG5vZGUubmFtZSwgXCIgZXZlbnQ9XCIsIGV2ZW50LnR5cGUsIFwiIGRhdGE9XCIsIGN1c3RvbUV2ZW50RGF0YSk7XHJcbiAgICAvLyB9LFxyXG5cclxuICAgIC8vIGNhbGxiYWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgIC8vICAgICAvLyBjYy5sb2coZGF0YSlcclxuICAgIC8vICAgICAvLyB2YXIgdXNlckNvdW50ID0gIGNjLmZpbmQoXCJDYW52YXMvZ3JvdW5kL2VkaXRib3hfY291bnRcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZztcclxuICAgIC8vICAgICAvLyB2YXIgdXNlclBhc3N3YXJkID0gIGNjLmZpbmQoXCJDYW52YXMvZ3JvdW5kL2VkaXRib3hfcGFzc3dhcmRcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZztcclxuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhcIueUqOaIt+i0puWPt++8mlwiK3VzZXJDb3VudCsgXCLnlKjmiLflr4bnoIHvvJpcIisgdXNlclBhc3N3YXJkKTtcclxuICAgIC8vICAgICAvLyBIdHRwSGVscC5sb2dpbih1c2VyQ291bnQsdXNlclBhc3N3YXJkLGZ1bmN0aW9uKGlzU3VjY2VzcyxEYXRhKXtcclxuICAgIC8vICAgICAvLyAgICAgdmFyIGluZm8gPSBEYXRhO1xyXG4gICAgLy8gICAgIC8vICAgICBpZih0cnVlID09IGlzU3VjY2Vzcyl7XHJcbiAgICAvLyAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2luICBzdWNjZXNzISEhXCIpO1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgY29uc29sZS5sb2coaW5mbyk7XHJcbiAgICAvLyAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby51c2VybmFtZSA9IGluZm8udXNlcm5hbWU7XHJcbiAgICAvLyAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby5nYW1lcG9pbnQgPSBpbmZvLmdhbWVwb2ludDtcclxuICAgIC8vICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnNrZXkgPSBpbmZvLnNrZXk7XHJcbiAgICAvLyAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby51c2VyaWQgPSBpbmZvLnVzZXJpZDtcclxuIFxyXG4gICAgLy8gICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8ubW9uZXkgPSBpbmZvLm1vbmV5O1xyXG4gICAgLy8gICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8udXNlcmlkID0gaW5mby51c2VyaWQ7XHJcbiAgICAvLyAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby5wYXNzd29yZCA9IGluZm8ucGFzc3dvcmQ7XHJcbiAgICAvLyAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby5zYWx0ID0gaW5mby5zYWx0O1xyXG4gXHJcbiAgICAvLyAgICAgLy8gICAgICAgICAvL+eZu+W9leaIkOWKn+WQjuWKoOi9veWcsOWbvui1hOa6kFxyXG4gICAgLy8gICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtYXAnKTtcclxuICAgIC8vICAgICAvLyAgICAgfWVsc2V7XHJcbiAgICAvLyAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2luICBmaWxlZCEhIVwiKVxyXG4gICAgLy8gICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgLy8gfSk7XHJcbiAgICAvLyB9LFxyXG4gXHJcbiAgICBzdGFydCAoKSB7XHJcbiBcclxuICAgIH0sXHJcbiBcclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG5cclxuICAgIHNob3dfZGxnICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID10cnVlO1xyXG4gICAgfSxcclxuICAgIGhpZGRlbl9kbGcgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPWZhbHNlO1xyXG4gICAgfSxcclxuXHJcbiAgICB4aWV5aV9zaG93X2RsZyAoKSB7XHJcbiAgICAgICAgdGhpcy5yZWdpc3Rlcl9rbm93c193ZWJ2aWV3LnVybCA9J2h0dHBzOi8vd3d3Lm1oZWFydC54eXovYXBwL2FwaS11c2VyL3hpZXlpJztcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID10cnVlO1xyXG4gICAgfSxcclxuICAgIHhpZXlpX2hpZGRlbl9kbGcgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPWZhbHNlO1xyXG4gICAgfSxcclxuICAgIHlpbnNpX3Nob3dfZGxnICgpIHtcclxuICAgICAgICB0aGlzLnJlZ2lzdGVyX2tub3dzX3dlYnZpZXcudXJsID0naHR0cHM6Ly93d3cubWhlYXJ0Lnh5ei9hcHAvYXBpLXVzZXIveWluc2knO1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPXRydWU7XHJcbiAgICB9LFxyXG4gICAgeWluc2lfaGlkZGVuX2RsZyAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9ZmFsc2U7XHJcbiAgICB9XHJcblxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/home_js/userinfo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cb9c9nq1ARCEIGdOhdxiwAf', 'userinfo');
// Script/home_js/userinfo.js

"use strict";

var HttpHelper = require("http"); // var fs = require('fs'); // ??????fs??????
// var globaluserinfo = require("GlobaluserInfo");


var httpRequest = new HttpHelper();
cc.Class({
  "extends": cc.Component,
  properties: {
    editbox: cc.EditBox
  },
  onLoad: function onLoad() {
    // ????????????--??????????????????
    this.tokenlogin(); // ????????????
    // // ??????????????????
    // this.login();
    //????????????
    // cc.sys.localStorage.setItem('token', value);
    // cc.sys.localStorage.getItem(key);
    // cc.sys.localStorage.removeItem(key);
  },
  tokenlogin: function tokenlogin() {
    // ????????????json  ??????
    // cc.loader.load( cc.url.raw("resources/login.json"),function(err,res){  
    cc.loader.loadRes('login.json', function (err, res) {
      //??????resources
      var json = res.json;
      var params = {
        'token': json.token
      };
      cc.log(json.token);
      var res = httpRequest.httpPost('https://www.mheart.xyz/app/api-server/token-login', params, function (data) {
        cc.loader.release('resources/login.json'); //??????json ??????
        // if(cc.sys.isNative){  //  jsb.fileUtils????????? web  ??????
        //     jsb.fileUtils.writeStringToFile(data,token)
        // }
        // cc.log(data); 
        // ?????????????????????

        if (data.code == 0) {// this.loginbox.node.active = false;  // ????????????
        }
      });
    });
  },
  login: function login() {
    var params = {
      'loginname': 'yincan1993',
      'password': 123456
    };
    httpRequest.httpPost('https://www.mheart.xyz/app/api-server/login', params, function (data) {// cc.log(data); 
      //????????????--??????????????????
    });
  },
  btnClick1: function btnClick1(event, customEventData) {
    // // ??????????????????
    // var params = {
    //         'loginname': 'yincan1993',
    //         'password': 123456,
    //         'serverid': 1,
    // };
    // cc.sys.localStorage.setItem('params', JSON.stringify(params));
    var params = JSON.parse(cc.sys.localStorage.getItem("params")); // cc.log(value); 
    // let httpRequest =  new HttpHelper();  

    httpRequest.httpPost('https://www.mheart.xyz/app/api-server/user-login', params, function (data) {
      cc.log(data);

      if (data.code == 0) {// ????????????????????????????????????
        // ??????
      } else {
        // ???????????????
        cc.sys.localStorage.setItem('server', JSON.stringify(data.data.server));

        if (data.code == 1) {
          // ???????????????????????????
          // cc.log(data.data.userinfo); 
          cc.sys.localStorage.setItem('userinfo', JSON.stringify(data.data.userinfo));
          cc.director.loadScene('home/dating'); // cc.sys.localStorage.setItem('userinfo', JSON.stringify(data.data.userinfo));
          // cc.sys.localStorage.getItem(key); //????????????
        }

        if (data.code == 2) {
          // ??????????????????????????????
          // ????????????????????????     
          var server = JSON.parse(cc.sys.localStorage.getItem('server')); // cc.log(server); 
          // ????????????

          cc.director.loadScene('register');
        }
      }
    }); //?????? event ????????? Touch Event ???????????????????????? event.target ???????????????????????????
    // var node = event.target;
    // var button = node.getComponent(cc.Button);
    //????????? customEventData ????????????????????????????????? "click1 user data"
    // cc.log("node=", node.name, " event=", event.type, " data=", customEventData);
  },
  callback: function callback(event) {
    // cc.log(data)
    // var userCount =  cc.find("Canvas/ground/editbox_count").getComponent(cc.EditBox).string;
    // var userPassward =  cc.find("Canvas/ground/editbox_passward").getComponent(cc.EditBox).string;
    // console.log("???????????????"+userCount+ "???????????????"+ userPassward);
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
    //         //?????????????????????????????????
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxob21lX2pzXFx1c2VyaW5mby5qcyJdLCJuYW1lcyI6WyJIdHRwSGVscGVyIiwicmVxdWlyZSIsImh0dHBSZXF1ZXN0IiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJlZGl0Ym94IiwiRWRpdEJveCIsIm9uTG9hZCIsInRva2VubG9naW4iLCJsb2FkZXIiLCJsb2FkUmVzIiwiZXJyIiwicmVzIiwianNvbiIsInBhcmFtcyIsInRva2VuIiwibG9nIiwiaHR0cFBvc3QiLCJkYXRhIiwicmVsZWFzZSIsImNvZGUiLCJsb2dpbiIsImJ0bkNsaWNrMSIsImV2ZW50IiwiY3VzdG9tRXZlbnREYXRhIiwiSlNPTiIsInBhcnNlIiwic3lzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJzZXJ2ZXIiLCJ1c2VyaW5mbyIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwiY2FsbGJhY2siLCJzdGFydCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXhCLEVBQ0E7QUFDQTs7O0FBQ0EsSUFBSUMsV0FBVyxHQUFJLElBQUlGLFVBQUosRUFBbkI7QUFDQUcsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLE9BQU8sRUFBRUosRUFBRSxDQUFDSztBQURKLEdBSFA7QUFPTEMsRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBRWhCO0FBQ0EsU0FBS0MsVUFBTCxHQUhnQixDQUdHO0FBRW5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNILEdBbEJJO0FBb0JMQSxFQUFBQSxVQUFVLEVBQUUsc0JBQVU7QUFDbEI7QUFDQTtBQUNBUCxJQUFBQSxFQUFFLENBQUNRLE1BQUgsQ0FBVUMsT0FBVixDQUFrQixZQUFsQixF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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNRdEIsSUFBQUEsRUFBRSxDQUFDaUMsUUFBSCxDQUFZQyxTQUFaLENBQXNCLEtBQXRCLEVBckJlLENBc0J2QjtBQUNBO0FBQ0E7QUFDQTtBQUVILEdBbElJO0FBb0lMRSxFQUFBQSxLQXBJSyxtQkFvSUksQ0FFUixDQXRJSSxDQXdJTDs7QUF4SUssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBIdHRwSGVscGVyID0gcmVxdWlyZShcImh0dHBcIik7XHJcbi8vIHZhciBmcyA9IHJlcXVpcmUoJ2ZzJyk7IC8vIOW8leWFpWZz5qih5Z2XXHJcbi8vIHZhciBnbG9iYWx1c2VyaW5mbyA9IHJlcXVpcmUoXCJHbG9iYWx1c2VySW5mb1wiKTtcclxubGV0IGh0dHBSZXF1ZXN0ID0gIG5ldyBIdHRwSGVscGVyKCk7ICBcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgZWRpdGJveDogY2MuRWRpdEJveFxyXG4gICAgfSxcclxuIFxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIC8vIOaTjeS9nOaWh+acrC0t6K+75Y+W55So5oi35L+h5oGvXHJcbiAgICAgICAgdGhpcy50b2tlbmxvZ2luKCk7IC8vIOW/q+aNt+eZu+W9lVxyXG5cclxuICAgICAgICAvLyAvLyDotKblj7flr4bnoIHnmbvlvZVcclxuICAgICAgICAvLyB0aGlzLmxvZ2luKCk7XHJcbiAgICAgICAgLy/lgqjlrZjnvJPlrZhcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdmFsdWUpO1xyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gICAgfSxcclxuICAgICBcclxuICAgIHRva2VubG9naW46IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgLy8g6I635Y+W5pys5ZywanNvbiAg5L+h5oGvXHJcbiAgICAgICAgLy8gY2MubG9hZGVyLmxvYWQoIGNjLnVybC5yYXcoXCJyZXNvdXJjZXMvbG9naW4uanNvblwiKSxmdW5jdGlvbihlcnIscmVzKXsgIFxyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKCdsb2dpbi5qc29uJyxmdW5jdGlvbihlcnIscmVzKXsgICAvL+m7mOiupHJlc291cmNlc1xyXG4gICAgICAgICAgICBsZXQganNvbiA9IHJlcy5qc29uO1xyXG4gICAgICAgICAgICB2YXIgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgJ3Rva2VuJzoganNvbi50b2tlbixcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgY2MubG9nKGpzb24udG9rZW4pOyBcclxuICAgICAgICAgICAgdmFyIHJlcyA9IGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCdodHRwczovL3d3dy5taGVhcnQueHl6L2FwcC9hcGktc2VydmVyL3Rva2VuLWxvZ2luJywgcGFyYW1zICxmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLnJlbGVhc2UoJ3Jlc291cmNlcy9sb2dpbi5qc29uJyk7IC8v6YeK5pS+anNvbiDotYTmupBcclxuICAgICAgICAgICAgICAgIC8vIGlmKGNjLnN5cy5pc05hdGl2ZSl7ICAvLyAganNiLmZpbGVVdGlsc+S4jeaUr+aMgSB3ZWIgIOivu+WGmVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIGpzYi5maWxlVXRpbHMud3JpdGVTdHJpbmdUb0ZpbGUoZGF0YSx0b2tlbilcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhkYXRhKTsgXHJcbiAgICAgICAgICAgICAgICAvLyDmnKrnmbvlvZXlvLnlh7rnmbvlvZVcclxuICAgICAgICAgICAgICAgIGlmKGRhdGEuY29kZT09MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5sb2dpbmJveC5ub2RlLmFjdGl2ZSA9IGZhbHNlOyAgLy8g6L+b5bqm6ZqQ6JePXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGxvZ2luOiBmdW5jdGlvbigpe1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICdsb2dpbm5hbWUnOiAneWluY2FuMTk5MycsXHJcbiAgICAgICAgICAgICdwYXNzd29yZCc6IDEyMzQ1NixcclxuICAgICAgICB9O1xyXG4gICAgICAgIGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCdodHRwczovL3d3dy5taGVhcnQueHl6L2FwcC9hcGktc2VydmVyL2xvZ2luJywgcGFyYW1zICxmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAvLyBjYy5sb2coZGF0YSk7IFxyXG4gICAgICAgICAgICAvL+aTjeS9nOaWh+acrC0t5L+u5pS555So5oi35L+h5oGvXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfSxcclxuXHJcbiAgICBidG5DbGljazE6IGZ1bmN0aW9uIChldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XHJcblxyXG5cclxuICAgICAgICBcclxuICAgICAgICAvLyAvLyDor7fmsYLnmbvlvZXmjqXlj6NcclxuICAgICAgICAvLyB2YXIgcGFyYW1zID0ge1xyXG4gICAgICAgIC8vICAgICAgICAgJ2xvZ2lubmFtZSc6ICd5aW5jYW4xOTkzJyxcclxuICAgICAgICAvLyAgICAgICAgICdwYXNzd29yZCc6IDEyMzQ1NixcclxuICAgICAgICAvLyAgICAgICAgICdzZXJ2ZXJpZCc6IDEsXHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BhcmFtcycsIEpTT04uc3RyaW5naWZ5KHBhcmFtcykpO1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInBhcmFtc1wiKSk7XHJcbiAgICAgICAgLy8gY2MubG9nKHZhbHVlKTsgXHJcbiAgICAgICAgLy8gbGV0IGh0dHBSZXF1ZXN0ID0gIG5ldyBIdHRwSGVscGVyKCk7ICBcclxuICAgICAgICBodHRwUmVxdWVzdC5odHRwUG9zdCgnaHR0cHM6Ly93d3cubWhlYXJ0Lnh5ei9hcHAvYXBpLXNlcnZlci91c2VyLWxvZ2luJywgcGFyYW1zICxmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBjYy5sb2coZGF0YSk7IFxyXG4gICAgICAgICAgICBpZihkYXRhLmNvZGU9PTApeyAvLyDnmbvlvZXlpLHotKXvvIzmiJbmnKzlnLDmlbDmja7lpLHmlYhcclxuICAgICAgICAgICAgICAgIC8vIOW8ueeql1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIC8vIOiuvue9ruacjeWKoeWZqFxyXG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZXJ2ZXInLCBKU09OLnN0cmluZ2lmeShkYXRhLmRhdGEuc2VydmVyKSk7XHJcbiAgICAgICAgICAgICAgICBpZihkYXRhLmNvZGU9PTEpey8vIOeZu+W9leaIkOWKn++8jOi/m+WFpea4uOaIj1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhkYXRhLmRhdGEudXNlcmluZm8pOyBcclxuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJpbmZvJywgSlNPTi5zdHJpbmdpZnkoZGF0YS5kYXRhLnVzZXJpbmZvKSk7IFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnaG9tZS9kYXRpbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJpbmZvJywgSlNPTi5zdHJpbmdpZnkoZGF0YS5kYXRhLnVzZXJpbmZvKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7IC8v6K+75Y+W5pWw5o2uXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihkYXRhLmNvZGU9PTIpeyAvLyDnmbvlvZXmiJDlip/vvIzmnKrlrprkuYnop5LoibJcclxuICAgICAgICAgICAgICAgICAgICAvLyDov5vlhaXlrprkuYnop5LoibLnlYzpnaIgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZXJ2ZXIgPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VydmVyJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhzZXJ2ZXIpOyBcclxuICAgICAgICAgICAgICAgICAgICAvLyDliJvlu7rop5LoibJcclxuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ3JlZ2lzdGVyJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy/ov5nph4wgZXZlbnQg5piv5LiA5LiqIFRvdWNoIEV2ZW50IOWvueixoe+8jOS9oOWPr+S7pemAmui/hyBldmVudC50YXJnZXQg5Y+W5Yiw5LqL5Lu255qE5Y+R6YCB6IqC54K5XHJcbiAgICAgICAgLy8gdmFyIG5vZGUgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgLy8gdmFyIGJ1dHRvbiA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgLy/ov5nph4znmoQgY3VzdG9tRXZlbnREYXRhIOWPguaVsOWwseetieS6juS9oOS5i+WJjeiuvue9rueahCBcImNsaWNrMSB1c2VyIGRhdGFcIlxyXG4gICAgICAgIC8vIGNjLmxvZyhcIm5vZGU9XCIsIG5vZGUubmFtZSwgXCIgZXZlbnQ9XCIsIGV2ZW50LnR5cGUsIFwiIGRhdGE9XCIsIGN1c3RvbUV2ZW50RGF0YSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAvLyBjYy5sb2coZGF0YSlcclxuICAgICAgICAvLyB2YXIgdXNlckNvdW50ID0gIGNjLmZpbmQoXCJDYW52YXMvZ3JvdW5kL2VkaXRib3hfY291bnRcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZztcclxuICAgICAgICAvLyB2YXIgdXNlclBhc3N3YXJkID0gIGNjLmZpbmQoXCJDYW52YXMvZ3JvdW5kL2VkaXRib3hfcGFzc3dhcmRcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZztcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIueUqOaIt+i0puWPt++8mlwiK3VzZXJDb3VudCsgXCLnlKjmiLflr4bnoIHvvJpcIisgdXNlclBhc3N3YXJkKTtcclxuICAgICAgICAvLyBIdHRwSGVscC5sb2dpbih1c2VyQ291bnQsdXNlclBhc3N3YXJkLGZ1bmN0aW9uKGlzU3VjY2VzcyxEYXRhKXtcclxuICAgICAgICAvLyAgICAgdmFyIGluZm8gPSBEYXRhO1xyXG4gICAgICAgIC8vICAgICBpZih0cnVlID09IGlzU3VjY2Vzcyl7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2luICBzdWNjZXNzISEhXCIpO1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coaW5mbyk7XHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby51c2VybmFtZSA9IGluZm8udXNlcm5hbWU7XHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby5nYW1lcG9pbnQgPSBpbmZvLmdhbWVwb2ludDtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnNrZXkgPSBpbmZvLnNrZXk7XHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby51c2VyaWQgPSBpbmZvLnVzZXJpZDtcclxuIFxyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8ubW9uZXkgPSBpbmZvLm1vbmV5O1xyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8udXNlcmlkID0gaW5mby51c2VyaWQ7XHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby5wYXNzd29yZCA9IGluZm8ucGFzc3dvcmQ7XHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby5zYWx0ID0gaW5mby5zYWx0O1xyXG4gXHJcbiAgICAgICAgLy8gICAgICAgICAvL+eZu+W9leaIkOWKn+WQjuWKoOi9veWcsOWbvui1hOa6kFxyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtYXAnKTtcclxuICAgICAgICAvLyAgICAgfWVsc2V7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2luICBmaWxlZCEhIVwiKVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gXHJcbiAgICBzdGFydCAoKSB7XHJcbiBcclxuICAgIH0sXHJcbiBcclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/commonjs/alert.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '264a58ZMhVJpLKSN93M4Wxc', 'alert');
// Script/commonjs/alert.js

"use strict";

// //??????alert    
// let alert = require('alert');
// //????????????
// alert.show.call(this, "?????????????????????", "??????", "??????", function (type) {
//    if (type == "??????") {
//        console.log("??????");
//    }
//    if (type == "??????") {
//        console.log("??????");
//    }
// });
var tipAlert = {
  _alert: null,
  //prefab
  _animSpeed: 0.3 //??????????????????

};
/**
 * @param tipStr
 * @param leftStr
 * @param rightStr
 * @param callback
 */

var show = function show(tipStr, leftStr, rightStr, callback) {
  cc.loader.loadRes("alert/tipAlert", cc.Prefab, function (error, prefab) {
    if (error) {
      cc.error(error);
      return;
    }

    tipAlert._alert = cc.instantiate(prefab);
    cc.director.getScene().addChild(tipAlert._alert, 3);
    cc.find("tipAlert/content/top/tip").getComponent(cc.Label).string = tipStr;
    cc.find("tipAlert/content/bottom/left_btn/leftbtn").getComponent(cc.Label).string = leftStr;
    cc.find("tipAlert/content/bottom/right_btn/rightbtn").getComponent(cc.Label).string = rightStr;

    if (callback) {
      cc.find("tipAlert/content/bottom/left_btn").on('click', function (event) {
        dismiss();
        callback(leftStr);
      }, this);
      cc.find("tipAlert/content/bottom/right_btn").on('click', function (event) {
        dismiss();
        callback(rightStr);
      }, this);
    } //??????parent ??????????????????Canvas ???position???????????????


    tipAlert._alert.parent = cc.find("Canvas");
    startFadeIn();
  });
}; // ??????????????????


var startFadeIn = function startFadeIn() {
  //??????
  tipAlert._alert.setScale(2);

  tipAlert._alert.opacity = 0;
  var cbFadeIn = cc.callFunc(onFadeInFinish, this);
  var actionFadeIn = cc.sequence(cc.spawn(cc.fadeTo(tipAlert._animSpeed, 255), cc.scaleTo(tipAlert._animSpeed, 1.0)), cbFadeIn);

  tipAlert._alert.runAction(actionFadeIn);
}; // ????????????????????????


var onFadeInFinish = function onFadeInFinish() {}; // ??????????????????


var dismiss = function dismiss() {
  if (!tipAlert._alert) {
    return;
  }

  var cbFadeOut = cc.callFunc(onFadeOutFinish, this);
  var actionFadeOut = cc.sequence(cc.spawn(cc.fadeTo(tipAlert._animSpeed, 0), cc.scaleTo(tipAlert._animSpeed, 2.0)), cbFadeOut);

  tipAlert._alert.runAction(actionFadeOut);
}; // ????????????????????????


var onFadeOutFinish = function onFadeOutFinish() {
  onDestroy();
};

var onDestroy = function onDestroy() {
  if (tipAlert._alert != null) {
    tipAlert._alert.removeFromParent();

    tipAlert._alert = null;
  }
};

module.exports = {
  show: show
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb21tb25qc1xcYWxlcnQuanMiXSwibmFtZXMiOlsidGlwQWxlcnQiLCJfYWxlcnQiLCJfYW5pbVNwZWVkIiwic2hvdyIsInRpcFN0ciIsImxlZnRTdHIiLCJyaWdodFN0ciIsImNhbGxiYWNrIiwiY2MiLCJsb2FkZXIiLCJsb2FkUmVzIiwiUHJlZmFiIiwiZXJyb3IiLCJwcmVmYWIiLCJpbnN0YW50aWF0ZSIsImRpcmVjdG9yIiwiZ2V0U2NlbmUiLCJhZGRDaGlsZCIsImZpbmQiLCJnZXRDb21wb25lbnQiLCJMYWJlbCIsInN0cmluZyIsIm9uIiwiZXZlbnQiLCJkaXNtaXNzIiwicGFyZW50Iiwic3RhcnRGYWRlSW4iLCJzZXRTY2FsZSIsIm9wYWNpdHkiLCJjYkZhZGVJbiIsImNhbGxGdW5jIiwib25GYWRlSW5GaW5pc2giLCJhY3Rpb25GYWRlSW4iLCJzZXF1ZW5jZSIsInNwYXduIiwiZmFkZVRvIiwic2NhbGVUbyIsInJ1bkFjdGlvbiIsImNiRmFkZU91dCIsIm9uRmFkZU91dEZpbmlzaCIsImFjdGlvbkZhZGVPdXQiLCJvbkRlc3Ryb3kiLCJyZW1vdmVGcm9tUGFyZW50IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUEsSUFBSUEsUUFBUSxHQUFHO0FBQ1hDLEVBQUFBLE1BQU0sRUFBRSxJQURHO0FBQ2E7QUFDeEJDLEVBQUFBLFVBQVUsRUFBRSxHQUZELENBRWE7O0FBRmIsQ0FBZjtBQUtBOzs7Ozs7O0FBTUEsSUFBSUMsSUFBSSxHQUFHLFNBQVBBLElBQU8sQ0FBVUMsTUFBVixFQUFpQkMsT0FBakIsRUFBeUJDLFFBQXpCLEVBQWtDQyxRQUFsQyxFQUE0QztBQUNuREMsRUFBQUEsRUFBRSxDQUFDQyxNQUFILENBQVVDLE9BQVYsQ0FBa0IsZ0JBQWxCLEVBQW1DRixFQUFFLENBQUNHLE1BQXRDLEVBQThDLFVBQVVDLEtBQVYsRUFBaUJDLE1BQWpCLEVBQXdCO0FBQ2xFLFFBQUlELEtBQUosRUFBVTtBQUNOSixNQUFBQSxFQUFFLENBQUNJLEtBQUgsQ0FBU0EsS0FBVDtBQUNBO0FBQ0g7O0FBQ0RaLElBQUFBLFFBQVEsQ0FBQ0MsTUFBVCxHQUFrQk8sRUFBRSxDQUFDTSxXQUFILENBQWVELE1BQWYsQ0FBbEI7QUFDQUwsSUFBQUEsRUFBRSxDQUFDTyxRQUFILENBQVlDLFFBQVosR0FBdUJDLFFBQXZCLENBQWdDakIsUUFBUSxDQUFDQyxNQUF6QyxFQUFnRCxDQUFoRDtBQUNBTyxJQUFBQSxFQUFFLENBQUNVLElBQUgsQ0FBUSwwQkFBUixFQUFvQ0MsWUFBcEMsQ0FBaURYLEVBQUUsQ0FBQ1ksS0FBcEQsRUFBMkRDLE1BQTNELEdBQW9FakIsTUFBcEU7QUFDQUksSUFBQUEsRUFBRSxDQUFDVSxJQUFILENBQVEsMENBQVIsRUFBb0RDLFlBQXBELENBQWlFWCxFQUFFLENBQUNZLEtBQXBFLEVBQTJFQyxNQUEzRSxHQUFvRmhCLE9BQXBGO0FBQ0FHLElBQUFBLEVBQUUsQ0FBQ1UsSUFBSCxDQUFRLDRDQUFSLEVBQXNEQyxZQUF0RCxDQUFtRVgsRUFBRSxDQUFDWSxLQUF0RSxFQUE2RUMsTUFBN0UsR0FBc0ZmLFFBQXRGOztBQUNBLFFBQUdDLFFBQUgsRUFBWTtBQUNSQyxNQUFBQSxFQUFFLENBQUNVLElBQUgsQ0FBUSxrQ0FBUixFQUE0Q0ksRUFBNUMsQ0FBK0MsT0FBL0MsRUFBd0QsVUFBVUMsS0FBVixFQUFpQjtBQUNyRUMsUUFBQUEsT0FBTztBQUNQakIsUUFBQUEsUUFBUSxDQUFDRixPQUFELENBQVI7QUFDSCxPQUhELEVBR0csSUFISDtBQUtBRyxNQUFBQSxFQUFFLENBQUNVLElBQUgsQ0FBUSxtQ0FBUixFQUE2Q0ksRUFBN0MsQ0FBZ0QsT0FBaEQsRUFBeUQsVUFBVUMsS0FBVixFQUFpQjtBQUN0RUMsUUFBQUEsT0FBTztBQUNQakIsUUFBQUEsUUFBUSxDQUFDRCxRQUFELENBQVI7QUFDSCxPQUhELEVBR0csSUFISDtBQUlILEtBcEJpRSxDQXFCbEU7OztBQUNBTixJQUFBQSxRQUFRLENBQUNDLE1BQVQsQ0FBZ0J3QixNQUFoQixHQUF5QmpCLEVBQUUsQ0FBQ1UsSUFBSCxDQUFRLFFBQVIsQ0FBekI7QUFDQVEsSUFBQUEsV0FBVztBQUNkLEdBeEJEO0FBeUJILENBMUJELEVBNEJBOzs7QUFDQSxJQUFJQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFZO0FBQzFCO0FBQ0ExQixFQUFBQSxRQUFRLENBQUNDLE1BQVQsQ0FBZ0IwQixRQUFoQixDQUF5QixDQUF6Qjs7QUFDQTNCLEVBQUFBLFFBQVEsQ0FBQ0MsTUFBVCxDQUFnQjJCLE9BQWhCLEdBQTBCLENBQTFCO0FBQ0EsTUFBSUMsUUFBUSxHQUFHckIsRUFBRSxDQUFDc0IsUUFBSCxDQUFZQyxjQUFaLEVBQTRCLElBQTVCLENBQWY7QUFDQSxNQUFJQyxZQUFZLEdBQUd4QixFQUFFLENBQUN5QixRQUFILENBQVl6QixFQUFFLENBQUMwQixLQUFILENBQVMxQixFQUFFLENBQUMyQixNQUFILENBQVVuQyxRQUFRLENBQUNFLFVBQW5CLEVBQStCLEdBQS9CLENBQVQsRUFBOENNLEVBQUUsQ0FBQzRCLE9BQUgsQ0FBV3BDLFFBQVEsQ0FBQ0UsVUFBcEIsRUFBZ0MsR0FBaEMsQ0FBOUMsQ0FBWixFQUFpRzJCLFFBQWpHLENBQW5COztBQUNBN0IsRUFBQUEsUUFBUSxDQUFDQyxNQUFULENBQWdCb0MsU0FBaEIsQ0FBMEJMLFlBQTFCO0FBQ0gsQ0FQRCxFQVVBOzs7QUFDQSxJQUFJRCxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQVksQ0FDaEMsQ0FERCxFQUdBOzs7QUFDQSxJQUFJUCxPQUFPLEdBQUcsU0FBVkEsT0FBVSxHQUFZO0FBQ3RCLE1BQUksQ0FBQ3hCLFFBQVEsQ0FBQ0MsTUFBZCxFQUFzQjtBQUNsQjtBQUNIOztBQUNELE1BQUlxQyxTQUFTLEdBQUc5QixFQUFFLENBQUNzQixRQUFILENBQVlTLGVBQVosRUFBNkIsSUFBN0IsQ0FBaEI7QUFDQSxNQUFJQyxhQUFhLEdBQUdoQyxFQUFFLENBQUN5QixRQUFILENBQVl6QixFQUFFLENBQUMwQixLQUFILENBQVMxQixFQUFFLENBQUMyQixNQUFILENBQVVuQyxRQUFRLENBQUNFLFVBQW5CLEVBQStCLENBQS9CLENBQVQsRUFBNENNLEVBQUUsQ0FBQzRCLE9BQUgsQ0FBV3BDLFFBQVEsQ0FBQ0UsVUFBcEIsRUFBZ0MsR0FBaEMsQ0FBNUMsQ0FBWixFQUErRm9DLFNBQS9GLENBQXBCOztBQUNBdEMsRUFBQUEsUUFBUSxDQUFDQyxNQUFULENBQWdCb0MsU0FBaEIsQ0FBMEJHLGFBQTFCO0FBQ0gsQ0FQRCxFQVNBOzs7QUFDQSxJQUFJRCxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQVk7QUFDOUJFLEVBQUFBLFNBQVM7QUFDWixDQUZEOztBQUlBLElBQUlBLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQVk7QUFDeEIsTUFBSXpDLFFBQVEsQ0FBQ0MsTUFBVCxJQUFtQixJQUF2QixFQUE2QjtBQUN6QkQsSUFBQUEsUUFBUSxDQUFDQyxNQUFULENBQWdCeUMsZ0JBQWhCOztBQUNBMUMsSUFBQUEsUUFBUSxDQUFDQyxNQUFULEdBQWtCLElBQWxCO0FBQ0g7QUFDSixDQUxEOztBQU9BMEMsTUFBTSxDQUFDQyxPQUFQLEdBQWU7QUFDYnpDLEVBQUFBLElBQUksRUFBSkE7QUFEYSxDQUFmIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyAvL+W8leWFpWFsZXJ0ICAgIFxyXG4vLyBsZXQgYWxlcnQgPSByZXF1aXJlKCdhbGVydCcpO1xyXG5cclxuLy8gLy/lvLnnqpfosIPnlKhcclxuLy8gYWxlcnQuc2hvdy5jYWxsKHRoaXMsIFwi56Gu6K6k6YCA5Ye65ri45oiP77yfXCIsIFwi5Y+W5raIXCIsIFwi56Gu6K6kXCIsIGZ1bmN0aW9uICh0eXBlKSB7XHJcbi8vICAgIGlmICh0eXBlID09IFwi5Y+W5raIXCIpIHtcclxuLy8gICAgICAgIGNvbnNvbGUubG9nKFwi5Y+W5raIXCIpO1xyXG4vLyAgICB9XHJcbi8vICAgIGlmICh0eXBlID09IFwi56Gu6K6kXCIpIHtcclxuLy8gICAgICAgIGNvbnNvbGUubG9nKFwi56Gu6K6kXCIpO1xyXG4vLyAgICB9XHJcbi8vIH0pO1xyXG5cclxuXHJcblxyXG5sZXQgdGlwQWxlcnQgPSB7XHJcbiAgICBfYWxlcnQ6IG51bGwsICAgICAgICAgICAvL3ByZWZhYlxyXG4gICAgX2FuaW1TcGVlZDogMC4zLCAgICAgICAgLy/lvLnnqpfliqjnlLvpgJ/luqZcclxufTtcclxuIFxyXG4vKipcclxuICogQHBhcmFtIHRpcFN0clxyXG4gKiBAcGFyYW0gbGVmdFN0clxyXG4gKiBAcGFyYW0gcmlnaHRTdHJcclxuICogQHBhcmFtIGNhbGxiYWNrXHJcbiAqL1xyXG5sZXQgc2hvdyA9IGZ1bmN0aW9uICh0aXBTdHIsbGVmdFN0cixyaWdodFN0cixjYWxsYmFjaykge1xyXG4gICAgY2MubG9hZGVyLmxvYWRSZXMoXCJhbGVydC90aXBBbGVydFwiLGNjLlByZWZhYiwgZnVuY3Rpb24gKGVycm9yLCBwcmVmYWIpe1xyXG4gICAgICAgIGlmIChlcnJvcil7XHJcbiAgICAgICAgICAgIGNjLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aXBBbGVydC5fYWxlcnQgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFNjZW5lKCkuYWRkQ2hpbGQodGlwQWxlcnQuX2FsZXJ0LDMpO1xyXG4gICAgICAgIGNjLmZpbmQoXCJ0aXBBbGVydC9jb250ZW50L3RvcC90aXBcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aXBTdHI7XHJcbiAgICAgICAgY2MuZmluZChcInRpcEFsZXJ0L2NvbnRlbnQvYm90dG9tL2xlZnRfYnRuL2xlZnRidG5cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBsZWZ0U3RyO1xyXG4gICAgICAgIGNjLmZpbmQoXCJ0aXBBbGVydC9jb250ZW50L2JvdHRvbS9yaWdodF9idG4vcmlnaHRidG5cIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSByaWdodFN0cjtcclxuICAgICAgICBpZihjYWxsYmFjayl7XHJcbiAgICAgICAgICAgIGNjLmZpbmQoXCJ0aXBBbGVydC9jb250ZW50L2JvdHRvbS9sZWZ0X2J0blwiKS5vbignY2xpY2snLCBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgIGRpc21pc3MoKTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGxlZnRTdHIpO1xyXG4gICAgICAgICAgICB9LCB0aGlzKTtcclxuIFxyXG4gICAgICAgICAgICBjYy5maW5kKFwidGlwQWxlcnQvY29udGVudC9ib3R0b20vcmlnaHRfYnRuXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICAgICAgZGlzbWlzcygpO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2socmlnaHRTdHIpO1xyXG4gICAgICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/orr7nva5wYXJlbnQg5Li65b2T5YmN5Zy65pmv55qEQ2FudmFzIO+8jHBvc2l0aW9u6Lef6ZqP54i26IqC54K5XHJcbiAgICAgICAgdGlwQWxlcnQuX2FsZXJ0LnBhcmVudCA9IGNjLmZpbmQoXCJDYW52YXNcIik7XHJcbiAgICAgICAgc3RhcnRGYWRlSW4oKTtcclxuICAgIH0pO1xyXG59O1xyXG4gXHJcbi8vIOaJp+ihjOW8uei/m+WKqOeUu1xyXG5sZXQgc3RhcnRGYWRlSW4gPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAvL+WKqOeUu1xyXG4gICAgdGlwQWxlcnQuX2FsZXJ0LnNldFNjYWxlKDIpO1xyXG4gICAgdGlwQWxlcnQuX2FsZXJ0Lm9wYWNpdHkgPSAwO1xyXG4gICAgbGV0IGNiRmFkZUluID0gY2MuY2FsbEZ1bmMob25GYWRlSW5GaW5pc2gsIHRoaXMpO1xyXG4gICAgbGV0IGFjdGlvbkZhZGVJbiA9IGNjLnNlcXVlbmNlKGNjLnNwYXduKGNjLmZhZGVUbyh0aXBBbGVydC5fYW5pbVNwZWVkLCAyNTUpLCBjYy5zY2FsZVRvKHRpcEFsZXJ0Ll9hbmltU3BlZWQsIDEuMCkpLCBjYkZhZGVJbik7XHJcbiAgICB0aXBBbGVydC5fYWxlcnQucnVuQWN0aW9uKGFjdGlvbkZhZGVJbik7XHJcbn07XHJcbiBcclxuIFxyXG4vLyDlvLnov5vliqjnlLvlrozmiJDlm57osINcclxubGV0IG9uRmFkZUluRmluaXNoID0gZnVuY3Rpb24gKCkge1xyXG59O1xyXG4gXHJcbi8vIOaJp+ihjOW8ueWHuuWKqOeUu1xyXG5sZXQgZGlzbWlzcyA9IGZ1bmN0aW9uICgpIHtcclxuICAgIGlmICghdGlwQWxlcnQuX2FsZXJ0KSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgbGV0IGNiRmFkZU91dCA9IGNjLmNhbGxGdW5jKG9uRmFkZU91dEZpbmlzaCwgdGhpcyk7XHJcbiAgICBsZXQgYWN0aW9uRmFkZU91dCA9IGNjLnNlcXVlbmNlKGNjLnNwYXduKGNjLmZhZGVUbyh0aXBBbGVydC5fYW5pbVNwZWVkLCAwKSwgY2Muc2NhbGVUbyh0aXBBbGVydC5fYW5pbVNwZWVkLCAyLjApKSwgY2JGYWRlT3V0KTtcclxuICAgIHRpcEFsZXJ0Ll9hbGVydC5ydW5BY3Rpb24oYWN0aW9uRmFkZU91dCk7XHJcbn07XHJcbiBcclxuLy8g5by55Ye65Yqo55S75a6M5oiQ5Zue6LCDXHJcbmxldCBvbkZhZGVPdXRGaW5pc2ggPSBmdW5jdGlvbiAoKSB7XHJcbiAgICBvbkRlc3Ryb3koKTtcclxufTtcclxuIFxyXG5sZXQgb25EZXN0cm95ID0gZnVuY3Rpb24gKCkge1xyXG4gICAgaWYgKHRpcEFsZXJ0Ll9hbGVydCAhPSBudWxsKSB7XHJcbiAgICAgICAgdGlwQWxlcnQuX2FsZXJ0LnJlbW92ZUZyb21QYXJlbnQoKTtcclxuICAgICAgICB0aXBBbGVydC5fYWxlcnQgPSBudWxsO1xyXG4gICAgfVxyXG59O1xyXG4gXHJcbm1vZHVsZS5leHBvcnRzPXtcclxuICBzaG93XHJcbn07Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/bage/Conf.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '97691f40R5PXJGQYZGIsa5O', 'Conf');
// Script/bage/Conf.js

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TOOLS = void 0;
var TOOLS = [{
  name: '??????',
  // ?????????????????????resources/tools??????????????????
  intro: '??????????????????',
  // ??????????????????????????????????????????????????????????????????
  picUrl: 'tools/??????' // ??????????????????

}, {
  name: '??????',
  intro: '???????????????????????????',
  picUrl: 'tools/??????'
}, {
  name: '??????',
  intro: '????????????',
  picUrl: 'tools/??????'
}, {
  name: '??????',
  intro: '????????????',
  picUrl: 'tools/??????'
}, {
  name: '??????',
  intro: '????????????????????????????????????????????????',
  picUrl: 'tools/??????'
}, {
  name: '?????????',
  intro: '??????????????????',
  picUrl: 'tools/?????????'
}, {
  name: '?????????',
  intro: '???????????????',
  picUrl: 'tools/?????????'
}, {
  name: '??????',
  intro: '???????????????????????????????????????',
  picUrl: 'tools/??????'
}];
exports.TOOLS = TOOLS;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxiYWdlXFxDb25mLmpzIl0sIm5hbWVzIjpbIlRPT0xTIiwibmFtZSIsImludHJvIiwicGljVXJsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxLQUFLLEdBQUcsQ0FDVjtBQUNJQyxFQUFBQSxJQUFJLEVBQUUsSUFEVjtBQUN1QztBQUNuQ0MsRUFBQUEsS0FBSyxFQUFFLFFBRlg7QUFFb0M7QUFDaENDLEVBQUFBLE1BQU0sRUFBRSxVQUhaLENBR3VDOztBQUh2QyxDQURVLEVBTVY7QUFDSUYsRUFBQUEsSUFBSSxFQUFFLElBRFY7QUFFSUMsRUFBQUEsS0FBSyxFQUFFLFdBRlg7QUFHSUMsRUFBQUEsTUFBTSxFQUFFO0FBSFosQ0FOVSxFQVdWO0FBQ0lGLEVBQUFBLElBQUksRUFBRSxJQURWO0FBRUlDLEVBQUFBLEtBQUssRUFBRSxNQUZYO0FBR0lDLEVBQUFBLE1BQU0sRUFBRTtBQUhaLENBWFUsRUFnQlY7QUFDSUYsRUFBQUEsSUFBSSxFQUFFLElBRFY7QUFFSUMsRUFBQUEsS0FBSyxFQUFFLE1BRlg7QUFHSUMsRUFBQUEsTUFBTSxFQUFFO0FBSFosQ0FoQlUsRUFxQlY7QUFDSUYsRUFBQUEsSUFBSSxFQUFFLElBRFY7QUFFSUMsRUFBQUEsS0FBSyxFQUFFLGtCQUZYO0FBR0lDLEVBQUFBLE1BQU0sRUFBRTtBQUhaLENBckJVLEVBMEJWO0FBQ0lGLEVBQUFBLElBQUksRUFBRSxLQURWO0FBRUlDLEVBQUFBLEtBQUssRUFBRSxRQUZYO0FBR0lDLEVBQUFBLE1BQU0sRUFBRTtBQUhaLENBMUJVLEVBK0JWO0FBQ0lGLEVBQUFBLElBQUksRUFBRSxLQURWO0FBRUlDLEVBQUFBLEtBQUssRUFBRSxPQUZYO0FBR0lDLEVBQUFBLE1BQU0sRUFBRTtBQUhaLENBL0JVLEVBb0NWO0FBQ0lGLEVBQUFBLElBQUksRUFBRSxJQURWO0FBRUlDLEVBQUFBLEtBQUssRUFBRSxlQUZYO0FBR0lDLEVBQUFBLE1BQU0sRUFBRTtBQUhaLENBcENVLENBQWQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFRPT0xTID0gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICfljbfovbQnLCAgICAgICAgICAgICAgICAgICAgICAgIC8vIOmBk+WFt+WQjeensO+8jOWvueW6lHJlc291cmNlcy90b29sc+S4reeahOWbvueJh+WQjeWtl1xyXG4gICAgICAgIGludHJvOiAn6L+Z5piv5LiA5Liq5Y236L20JywgICAgICAgICAgICAgICAgLy8g6YGT5YW35LuL57uN77yM5b2T546p5a625Zyo6IOM5YyF5Lit54K55Ye76YGT5YW35ZCO77yM5pi+56S65LuL57uNXHJcbiAgICAgICAgcGljVXJsOiAndG9vbHMv5Y236L20JyAgICAgICAgICAgICAgICAgLy8g5Yqo5oCB5Yqg6L296Lev5b6EXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICflv4Pnu48nLFxyXG4gICAgICAgIGludHJvOiAn5qyy57uD5q2k5Yqf77yM5b+F5YWI6Ieq5a6rJyxcclxuICAgICAgICBwaWNVcmw6ICd0b29scy/lv4Pnu48nICAgICAgICAgICAgICAgXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICfngavohb8nLFxyXG4gICAgICAgIGludHJvOiAn5p2l6Ieq6YeR5Y2OJyxcclxuICAgICAgICBwaWNVcmw6ICd0b29scy/ngavohb8nIFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAn54WO6aW6JyxcclxuICAgICAgICBpbnRybzogJ+aMuuWlveWQg+eahCcsXHJcbiAgICAgICAgcGljVXJsOiAndG9vbHMv54WO6aW6JyBcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ+eDiOmFkicsXHJcbiAgICAgICAgaW50cm86ICfmrabmnb7lvZPlubTllp3ov5nkuKrnmoTor53vvIzlj6/og73ov4fkuI3kuoblspcnLFxyXG4gICAgICAgIHBpY1VybDogJ3Rvb2xzL+eDiOmFkicgXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICfph5HpkqXljJknLFxyXG4gICAgICAgIGludHJvOiAn6YeR6Imy55qE6KaB6ZKl5YyZJyxcclxuICAgICAgICBwaWNVcmw6ICd0b29scy/ph5HpkqXljJknXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICfpk7bpkqXljJknLFxyXG4gICAgICAgIGludHJvOiAn6ZO26Imy55qE6ZKl5YyZJyxcclxuICAgICAgICBwaWNVcmw6ICd0b29scy/pk7bpkqXljJknIFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAn6buE55+zJyxcclxuICAgICAgICBpbnRybzogJ+adpeiHqum7hOefs+WFrOWbreeahOefs+WktOWPq+WBmum7hOefsycsXHJcbiAgICAgICAgcGljVXJsOiAndG9vbHMv6buE55+zJyBcclxuICAgIH1cclxuXTtcclxuXHJcbmV4cG9ydCB7VE9PTFN9OyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/login/ProgressBarScript.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f03637Rq8NIL4xawPe0R84Z', 'ProgressBarScript');
// Script/login/ProgressBarScript.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    speed: 1,
    progressBarView: {
      type: cc.ProgressBar,
      "default": null
    }
  },
  //????????????????????????????????? `node`???????????????
  onLoad: function onLoad() {
    this._ping = true;
    this.progressBarView.progress = 0;
  },
  update: function update(dt) {
    this._updateProgressBar(this.progressBarView, dt);
  },
  _updateProgressBar: function _updateProgressBar(progressBar, dt) {
    var progress = progressBar.progress;

    if (progress < 1.0 && this._ping) {
      progress += dt * this.speed;
    } else {
      progress -= dt * this.speed;
      this._ping = progress <= 0;
    }

    progressBar.progress = progress;
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcUHJvZ3Jlc3NCYXJTY3JpcHQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzcGVlZCIsInByb2dyZXNzQmFyVmlldyIsInR5cGUiLCJQcm9ncmVzc0JhciIsIm9uTG9hZCIsIl9waW5nIiwicHJvZ3Jlc3MiLCJ1cGRhdGUiLCJkdCIsIl91cGRhdGVQcm9ncmVzc0JhciIsInByb2dyZXNzQmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFFUkMsSUFBQUEsS0FBSyxFQUFFLENBRkM7QUFHUkMsSUFBQUEsZUFBZSxFQUFFO0FBQ2JDLE1BQUFBLElBQUksRUFBRU4sRUFBRSxDQUFDTyxXQURJO0FBRWIsaUJBQVM7QUFGSTtBQUhULEdBSFA7QUFZRDtBQUNKQyxFQUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFFaEIsU0FBS0MsS0FBTCxHQUFhLElBQWI7QUFDQSxTQUFLSixlQUFMLENBQXFCSyxRQUFyQixHQUFnQyxDQUFoQztBQUNILEdBakJJO0FBbUJMQyxFQUFBQSxNQUFNLEVBQUUsZ0JBQVVDLEVBQVYsRUFBYztBQUNsQixTQUFLQyxrQkFBTCxDQUF3QixLQUFLUixlQUE3QixFQUE4Q08sRUFBOUM7QUFDSCxHQXJCSTtBQXVCTEMsRUFBQUEsa0JBQWtCLEVBQUUsNEJBQVNDLFdBQVQsRUFBc0JGLEVBQXRCLEVBQXlCO0FBRXpDLFFBQUlGLFFBQVEsR0FBR0ksV0FBVyxDQUFDSixRQUEzQjs7QUFDQSxRQUFHQSxRQUFRLEdBQUcsR0FBWCxJQUFrQixLQUFLRCxLQUExQixFQUFnQztBQUM1QkMsTUFBQUEsUUFBUSxJQUFJRSxFQUFFLEdBQUcsS0FBS1IsS0FBdEI7QUFDSCxLQUZELE1BR0s7QUFDRE0sTUFBQUEsUUFBUSxJQUFJRSxFQUFFLEdBQUcsS0FBS1IsS0FBdEI7QUFDQSxXQUFLSyxLQUFMLEdBQWFDLFFBQVEsSUFBSSxDQUF6QjtBQUNIOztBQUNESSxJQUFBQSxXQUFXLENBQUNKLFFBQVosR0FBdUJBLFFBQXZCO0FBQ0gsR0FsQ0ksQ0FxQ0w7O0FBckNLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG5cclxuICAgICAgICBzcGVlZDogMSxcclxuICAgICAgICBwcm9ncmVzc0JhclZpZXc6IHtcclxuICAgICAgICAgICAgdHlwZTogY2MuUHJvZ3Jlc3NCYXIsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxuICAgICAgICAvL+W9k+aIkeS7rOWwhuiEmuacrOa3u+WKoOWIsOiKgueCuSBgbm9kZWDkuIrpnaLnmoTml7blgJlcclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5fcGluZyA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0JhclZpZXcucHJvZ3Jlc3MgPSAwO1xyXG4gICAgfSxcclxuXHJcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgICAgIHRoaXMuX3VwZGF0ZVByb2dyZXNzQmFyKHRoaXMucHJvZ3Jlc3NCYXJWaWV3LCBkdCk7XHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICBfdXBkYXRlUHJvZ3Jlc3NCYXI6IGZ1bmN0aW9uKHByb2dyZXNzQmFyLCBkdCl7XHJcblxyXG4gICAgICAgIHZhciBwcm9ncmVzcyA9IHByb2dyZXNzQmFyLnByb2dyZXNzO1xyXG4gICAgICAgIGlmKHByb2dyZXNzIDwgMS4wICYmIHRoaXMuX3Bpbmcpe1xyXG4gICAgICAgICAgICBwcm9ncmVzcyArPSBkdCAqIHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBwcm9ncmVzcyAtPSBkdCAqIHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuX3BpbmcgPSBwcm9ncmVzcyA8PSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm9ncmVzc0Jhci5wcm9ncmVzcyA9IHByb2dyZXNzO1xyXG4gICAgfSxcclxuXHJcblxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/scence/loading_fist.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c9df1hntNVFBZSGCCOYdkEb', 'loading_fist');
// Script/scence/loading_fist.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {},
  // update (dt) {},
  loadnextScene: function loadnextScene() {
    // ???????????????
    cc.director.preloadScene('login', function () {
      cc.log('???????????????');
    });
    cc.director.loadScene('login');
  },
  //??????
  login: function login() {
    cc.director.loadScene('login');
  },
  //??????
  role: function role() {
    cc.director.loadScene('role');
  },
  //??????
  register: function register() {
    cc.director.loadScene('register');
  },
  //??????
  home: function home() {
    cc.director.loadScene('home');
  },
  //??????
  jiangli: function jiangli() {
    cc.director.loadScene('jiangli');
  },
  //??????
  chongzhi: function chongzhi() {
    cc.director.loadScene('chongzhi');
  },
  //??????
  zhifu: function zhifu() {
    cc.director.loadScene('zhifu');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuY2VcXGxvYWRpbmdfZmlzdC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwibG9hZG5leHRTY2VuZSIsImRpcmVjdG9yIiwicHJlbG9hZFNjZW5lIiwibG9nIiwibG9hZFNjZW5lIiwibG9naW4iLCJyb2xlIiwicmVnaXN0ZXIiLCJob21lIiwiamlhbmdsaSIsImNob25nemhpIiwiemhpZnUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxDQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZRLEdBSFA7QUFxQkw7QUFFQTtBQUVBQyxFQUFBQSxLQXpCSyxtQkF5QkksQ0FFUixDQTNCSTtBQTZCTDtBQUdBQyxFQUFBQSxhQUFhLEVBQUUseUJBQVc7QUFDdEI7QUFDQUwsSUFBQUEsRUFBRSxDQUFDTSxRQUFILENBQVlDLFlBQVosQ0FBeUIsT0FBekIsRUFBa0MsWUFBWTtBQUMxQ1AsTUFBQUEsRUFBRSxDQUFDUSxHQUFILENBQU8sT0FBUDtBQUNILEtBRkQ7QUFHQVIsSUFBQUEsRUFBRSxDQUFDTSxRQUFILENBQVlHLFNBQVosQ0FBc0IsT0FBdEI7QUFDSCxHQXRDSTtBQXdDTDtBQUNBQyxFQUFBQSxLQUFLLEVBQUUsaUJBQVc7QUFDbEJWLElBQUFBLEVBQUUsQ0FBQ00sUUFBSCxDQUFZRyxTQUFaLENBQXNCLE9BQXRCO0FBQ0MsR0EzQ0k7QUE2Q0w7QUFDQUUsRUFBQUEsSUFBSSxFQUFFLGdCQUFXO0FBQ2JYLElBQUFBLEVBQUUsQ0FBQ00sUUFBSCxDQUFZRyxTQUFaLENBQXNCLE1BQXRCO0FBQ0gsR0FoREk7QUFrREw7QUFDQUcsRUFBQUEsUUFBUSxFQUFFLG9CQUFXO0FBQ2pCWixJQUFBQSxFQUFFLENBQUNNLFFBQUgsQ0FBWUcsU0FBWixDQUFzQixVQUF0QjtBQUNILEdBckRJO0FBdURMO0FBQ0FJLEVBQUFBLElBQUksRUFBRSxnQkFBVztBQUNiYixJQUFBQSxFQUFFLENBQUNNLFFBQUgsQ0FBWUcsU0FBWixDQUFzQixNQUF0QjtBQUNILEdBMURJO0FBNERMO0FBQ0FLLEVBQUFBLE9BQU8sRUFBRSxtQkFBVztBQUNoQmQsSUFBQUEsRUFBRSxDQUFDTSxRQUFILENBQVlHLFNBQVosQ0FBc0IsU0FBdEI7QUFDSCxHQS9ESTtBQWlFTDtBQUNBTSxFQUFBQSxRQUFRLEVBQUUsb0JBQVc7QUFDakJmLElBQUFBLEVBQUUsQ0FBQ00sUUFBSCxDQUFZRyxTQUFaLENBQXNCLFVBQXRCO0FBQ0gsR0FwRUk7QUFzRUw7QUFDQU8sRUFBQUEsS0FBSyxFQUFFLGlCQUFXO0FBQ2RoQixJQUFBQSxFQUFFLENBQUNNLFFBQUgsQ0FBWUcsU0FBWixDQUFzQixPQUF0QjtBQUNIO0FBekVJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG5cclxuXHJcbiAgICBsb2FkbmV4dFNjZW5lOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyDnmbvlvZXpooTliqDovb1cclxuICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoJ2xvZ2luJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjYy5sb2coJ+eZu+W9lemihOWKoOi9vScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbG9naW4nKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy/nmbvlvZVcclxuICAgIGxvZ2luOiBmdW5jdGlvbigpIHtcclxuICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbG9naW4nKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy/op5LoibJcclxuICAgIHJvbGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgncm9sZScpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvL+azqOWGjFxyXG4gICAgcmVnaXN0ZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgncmVnaXN0ZXInKTtcclxuICAgIH0sXHJcblxyXG4gICAgLy/lpKfljoVcclxuICAgIGhvbWU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnaG9tZScpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvL+WlluWKsVxyXG4gICAgamlhbmdsaTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdqaWFuZ2xpJyk7XHJcbiAgICB9LFxyXG4gICBcclxuICAgIC8v5YWF5YC8XHJcbiAgICBjaG9uZ3poaTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdjaG9uZ3poaScpO1xyXG4gICAgfSxcclxuXHJcbiAgICAvL+aUr+S7mFxyXG4gICAgemhpZnU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnemhpZnUnKTtcclxuICAgIH0sXHJcblxyXG5cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/login/background.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e483aavH0JDcYCPFVIozWXt', 'background');
// Script/login/background.js

"use strict";

// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {// this.loadingBackground();
  },
  start: function start() {},
  // update (dt) {},
  loadingBackground: function loadingBackground() {
    // ???????????????
    // ?????? url ??????????????????
    var remoteUrl = "http://127.0.0.1/ceshi.php?url=https://www.mheart.xyz/app/loading/loading.jpg";
    var self = this; // cc.loader.load(remoteUrl, function (err, texture) {

    cc.loader.load({
      url: remoteUrl,
      type: 'jpg'
    }, function (err, texture) {
      //   ????????????????????????
      // cc.loader.release(texture);
      // // ???????????? prefab ??????????????????????????????
      // var deps = cc.loader.getDependsRecursively('url_photo');
      // cc.loader.release(deps);
      // // ??????????????? prefab ???????????????????????????????????????????????????????????????????????????????????????????????????
      // // 1. ?????????????????????????????????????????????
      // cc.loader.setAutoRelease(this.background, false);
      // // 2. ???????????????????????????????????????
      // var deps = cc.loader.getDependsRecursively('url_photo');
      // var index = deps.indexOf(this.background);
      // if (index !== -1)
      //     deps.splice(index, 1);
      // cc.loader.release(deps);
      // this.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture)
      //  // ?????? cc.url.raw????????????????????? resources ????????????????????????
      // //  var realUrl = cc.url.raw("loading");
      // //  var texture = cc.textureCache.addImage(realUrl);
      // console.log( texture);    
      self.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture); // self.node.spriteFrame.setTexture(texture.url);
      // self.node.spriteFrame.setContentSize(res.getContentSize());
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcYmFja2dyb3VuZC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsInN0YXJ0IiwibG9hZGluZ0JhY2tncm91bmQiLCJyZW1vdGVVcmwiLCJzZWxmIiwibG9hZGVyIiwibG9hZCIsInVybCIsInR5cGUiLCJlcnIiLCJ0ZXh0dXJlIiwibm9kZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwiU3ByaXRlRnJhbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxDQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZRLEdBSFA7QUFxQkw7QUFFQUMsRUFBQUEsTUF2Qkssb0JBdUJLLENBQ047QUFDSCxHQXpCSTtBQTJCTEMsRUFBQUEsS0EzQkssbUJBMkJJLENBRVIsQ0E3Qkk7QUErQkw7QUFFQUMsRUFBQUEsaUJBQWlCLEVBQUUsNkJBQVU7QUFDVDtBQUNaO0FBQ0EsUUFBSUMsU0FBUyxHQUFHLCtFQUFoQjtBQUNBLFFBQUlDLElBQUksR0FBRyxJQUFYLENBSnFCLENBS3JCOztBQUNBUixJQUFBQSxFQUFFLENBQUNTLE1BQUgsQ0FBVUMsSUFBVixDQUFlO0FBQUVDLE1BQUFBLEdBQUcsRUFBRUosU0FBUDtBQUFrQkssTUFBQUEsSUFBSSxFQUFFO0FBQXhCLEtBQWYsRUFBZ0QsVUFBVUMsR0FBVixFQUFlQyxPQUFmLEVBQXdCO0FBRXBFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUpOLE1BQUFBLElBQUksQ0FBQ08sSUFBTCxDQUFVQyxZQUFWLENBQXVCaEIsRUFBRSxDQUFDaUIsTUFBMUIsRUFBa0NDLFdBQWxDLEdBQWdELElBQUlsQixFQUFFLENBQUNtQixXQUFQLENBQW1CTCxPQUFuQixDQUFoRCxDQTdCd0UsQ0E4QnhFO0FBQ0E7QUFHQyxLQWxDRDtBQW1DUDtBQTFFSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly9kb2NzLmNvY29zMmQteC5vcmcvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL2RvY3MuY29jb3MyZC14Lm9yZy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8gIC0gW0VuZ2xpc2hdIGh0dHBzOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICAvLyB0aGlzLmxvYWRpbmdCYWNrZ3JvdW5kKCk7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG5cclxuICAgIGxvYWRpbmdCYWNrZ3JvdW5kOiBmdW5jdGlvbigpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDkuIvovb3otYTmupDljIVcclxuICAgICAgICAgICAgLy8g6L+c56iLIHVybCDluKblm77niYflkI7nvIDlkI1cclxuICAgICAgICAgICAgdmFyIHJlbW90ZVVybCA9IFwiaHR0cDovLzEyNy4wLjAuMS9jZXNoaS5waHA/dXJsPWh0dHBzOi8vd3d3Lm1oZWFydC54eXovYXBwL2xvYWRpbmcvbG9hZGluZy5qcGdcIjtcclxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgICAgICAvLyBjYy5sb2FkZXIubG9hZChyZW1vdGVVcmwsIGZ1bmN0aW9uIChlcnIsIHRleHR1cmUpIHtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoeyB1cmw6IHJlbW90ZVVybCwgdHlwZTogJ2pwZycgfSwgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkgeyAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gICDnm7TmjqXph4rmlL7mn5DkuKrotLTlm75cclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvYWRlci5yZWxlYXNlKHRleHR1cmUpO1xyXG4gICAgICAgICAgICAgICAgLy8gLy8g6YeK5pS+5LiA5LiqIHByZWZhYiDku6Xlj4rmiYDmnInlroPkvp3otZbnmoTotYTmupBcclxuICAgICAgICAgICAgICAgIC8vIHZhciBkZXBzID0gY2MubG9hZGVyLmdldERlcGVuZHNSZWN1cnNpdmVseSgndXJsX3Bob3RvJyk7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2FkZXIucmVsZWFzZShkZXBzKTtcclxuICAgICAgICAgICAgICAgIC8vIC8vIOWmguaenOWcqOi/meS4qiBwcmVmYWIg5Lit5pyJ5LiA5Lqb5ZKM5Zy65pmv5YW25LuW6YOo5YiG5YWx5Lqr55qE6LWE5rqQ77yM5L2g5LiN5biM5pyb5a6D5Lus6KKr6YeK5pS+77yM5pyJ5Lik56eN5pa55rOV77yaXHJcbiAgICAgICAgICAgICAgICAvLyAvLyAxLiDmmL7lvI/lo7DmmI7npoHmraLmn5DkuKrotYTmupDnmoToh6rliqjph4rmlL5cclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvYWRlci5zZXRBdXRvUmVsZWFzZSh0aGlzLmJhY2tncm91bmQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIC8vIC8vIDIuIOWwhui/meS4qui1hOa6kOS7juS+nei1luWIl+ihqOS4reWIoOmZpFxyXG4gICAgICAgICAgICAgICAgLy8gdmFyIGRlcHMgPSBjYy5sb2FkZXIuZ2V0RGVwZW5kc1JlY3Vyc2l2ZWx5KCd1cmxfcGhvdG8nKTtcclxuICAgICAgICAgICAgICAgIC8vIHZhciBpbmRleCA9IGRlcHMuaW5kZXhPZih0aGlzLmJhY2tncm91bmQpO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgKGluZGV4ICE9PSAtMSlcclxuICAgICAgICAgICAgICAgIC8vICAgICBkZXBzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjYy5sb2FkZXIucmVsZWFzZShkZXBzKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSlcclxuICAgICAgICAgICAgICAgIC8vICAvLyDmlLnnlKggY2MudXJsLnJhd++8jOatpOaXtumcgOimgeWjsOaYjiByZXNvdXJjZXMg55uu5b2V5ZKM5paH5Lu25ZCO57yA5ZCNXHJcbiAgICAgICAgICAgICAgICAvLyAvLyAgdmFyIHJlYWxVcmwgPSBjYy51cmwucmF3KFwibG9hZGluZ1wiKTtcclxuICAgICAgICAgICAgICAgIC8vIC8vICB2YXIgdGV4dHVyZSA9IGNjLnRleHR1cmVDYWNoZS5hZGRJbWFnZShyZWFsVXJsKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCB0ZXh0dXJlKTsgICAgXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICBzZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSlcclxuICAgICAgICAgICAgLy8gc2VsZi5ub2RlLnNwcml0ZUZyYW1lLnNldFRleHR1cmUodGV4dHVyZS51cmwpO1xyXG4gICAgICAgICAgICAvLyBzZWxmLm5vZGUuc3ByaXRlRnJhbWUuc2V0Q29udGVudFNpemUocmVzLmdldENvbnRlbnRTaXplKCkpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/commonjs/post.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9f677Nj9JlG454nbHimbjZS', 'post');
// Script/commonjs/post.js

"use strict";

var HttpHelper = cc.Class({
  "extends": cc.Component,

  /**
   * get??????
   * @param {string} url 
   * @param {function} callback 
   */
  get: function get(url, callback) {
    var xhr = cc.loader.getXMLHttpRequest();
    console.log("Status: Send Get Request to " + url);
    xhr.open("GET", url, true);

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status <= 207) {
        callback(true, xhr.responseText);
      }
    };

    xhr.send();
  },

  /**
   * post??????
   * @param {string} url 
   * @param {object} params 
   * @param {function} callback 
   */
  post: function post(url, params, callback) {
    var nums = arguments.length;

    if (nums == 2) {
      callback = arguments[1];
      params = "";
    }

    var xhr = cc.loader.getXMLHttpRequest();
    xhr.open("POST", url);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status <= 207) {
        callback(true, xhr.responseText);
      }
    };

    xhr.send(params);
  } // update (dt) {},

});
window.HttpHelper = new HttpHelper(); // const socket = new WebSocket('ws://localhost:8080');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxjb21tb25qc1xccG9zdC5qcyJdLCJuYW1lcyI6WyJIdHRwSGVscGVyIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsImdldCIsInVybCIsImNhbGxiYWNrIiwieGhyIiwibG9hZGVyIiwiZ2V0WE1MSHR0cFJlcXVlc3QiLCJjb25zb2xlIiwibG9nIiwib3BlbiIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25zZVRleHQiLCJzZW5kIiwicG9zdCIsInBhcmFtcyIsIm51bXMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJzZXRSZXF1ZXN0SGVhZGVyIiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLFVBQVUsR0FBR0MsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDeEIsYUFBU0QsRUFBRSxDQUFDRSxTQURZOztBQUd4Qjs7Ozs7QUFLQUMsRUFBQUEsR0FSd0IsZUFRcEJDLEdBUm9CLEVBUWZDLFFBUmUsRUFRTDtBQUNmLFFBQUlDLEdBQUcsR0FBR04sRUFBRSxDQUFDTyxNQUFILENBQVVDLGlCQUFWLEVBQVY7QUFDQUMsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksaUNBQWlDTixHQUE3QztBQUNBRSxJQUFBQSxHQUFHLENBQUNLLElBQUosQ0FBUyxLQUFULEVBQWdCUCxHQUFoQixFQUFxQixJQUFyQjs7QUFDQUUsSUFBQUEsR0FBRyxDQUFDTSxrQkFBSixHQUF5QixZQUFZO0FBQ2pDLFVBQUlOLEdBQUcsQ0FBQ08sVUFBSixLQUFtQixDQUFuQixJQUF5QlAsR0FBRyxDQUFDUSxNQUFKLElBQWMsR0FBZCxJQUFxQlIsR0FBRyxDQUFDUSxNQUFKLElBQWMsR0FBaEUsRUFBc0U7QUFDbEVULFFBQUFBLFFBQVEsQ0FBQyxJQUFELEVBQU1DLEdBQUcsQ0FBQ1MsWUFBVixDQUFSO0FBQ0g7QUFDSixLQUpEOztBQUtBVCxJQUFBQSxHQUFHLENBQUNVLElBQUo7QUFDSCxHQWxCdUI7O0FBb0J4Qjs7Ozs7O0FBTUFDLEVBQUFBLElBMUJ3QixnQkEwQm5CYixHQTFCbUIsRUEwQmRjLE1BMUJjLEVBMEJOYixRQTFCTSxFQTBCSTtBQUN4QixRQUFJYyxJQUFJLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBckI7O0FBQ0EsUUFBR0YsSUFBSSxJQUFJLENBQVgsRUFBYTtBQUNUZCxNQUFBQSxRQUFRLEdBQUdlLFNBQVMsQ0FBQyxDQUFELENBQXBCO0FBQ0FGLE1BQUFBLE1BQU0sR0FBRyxFQUFUO0FBQ0g7O0FBQ0QsUUFBSVosR0FBRyxHQUFHTixFQUFFLENBQUNPLE1BQUgsQ0FBVUMsaUJBQVYsRUFBVjtBQUNBRixJQUFBQSxHQUFHLENBQUNLLElBQUosQ0FBUyxNQUFULEVBQWlCUCxHQUFqQjtBQUNBRSxJQUFBQSxHQUFHLENBQUNnQixnQkFBSixDQUFxQixjQUFyQixFQUFvQyxnQ0FBcEM7O0FBQ0FoQixJQUFBQSxHQUFHLENBQUNNLGtCQUFKLEdBQXlCLFlBQVk7QUFDakMsVUFBSU4sR0FBRyxDQUFDTyxVQUFKLEtBQW1CLENBQW5CLElBQXlCUCxHQUFHLENBQUNRLE1BQUosSUFBYyxHQUFkLElBQXFCUixHQUFHLENBQUNRLE1BQUosSUFBYyxHQUFoRSxFQUFzRTtBQUNsRVQsUUFBQUEsUUFBUSxDQUFDLElBQUQsRUFBTUMsR0FBRyxDQUFDUyxZQUFWLENBQVI7QUFDSDtBQUNKLEtBSkQ7O0FBS0FULElBQUFBLEdBQUcsQ0FBQ1UsSUFBSixDQUFTRSxNQUFUO0FBQ0gsR0F6Q3VCLENBMEN2Qjs7QUExQ3VCLENBQVQsQ0FBbkI7QUE2Q0FLLE1BQU0sQ0FBQ3hCLFVBQVAsR0FBb0IsSUFBSUEsVUFBSixFQUFwQixFQUVBIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBIdHRwSGVscGVyID0gY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V06K+35rGCXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgXHJcbiAgICAgKi9cclxuICAgIGdldCh1cmwsIGNhbGxiYWNrKSB7XHJcbiAgICAgICAgdmFyIHhociA9IGNjLmxvYWRlci5nZXRYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU3RhdHVzOiBTZW5kIEdldCBSZXF1ZXN0IHRvIFwiICsgdXJsKTtcclxuICAgICAgICB4aHIub3BlbihcIkdFVFwiLCB1cmwsIHRydWUpO1xyXG4gICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8PSAyMDcpKSB7ICBcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRydWUseGhyLnJlc3BvbnNlVGV4dCk7IFxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgIH0sXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBwb3N06K+35rGCXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsIFxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBhcmFtcyBcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIFxyXG4gICAgICovXHJcbiAgICBwb3N0KHVybCwgcGFyYW1zLCBjYWxsYmFjaykge1xyXG4gICAgICAgIHZhciBudW1zID0gYXJndW1lbnRzLmxlbmd0aCAgXHJcbiAgICAgICAgaWYobnVtcyA9PSAyKXsgIFxyXG4gICAgICAgICAgICBjYWxsYmFjayA9IGFyZ3VtZW50c1sxXTsgIFxyXG4gICAgICAgICAgICBwYXJhbXMgPSBcIlwiOyAgXHJcbiAgICAgICAgfSAgXHJcbiAgICAgICAgdmFyIHhociA9IGNjLmxvYWRlci5nZXRYTUxIdHRwUmVxdWVzdCgpOyAgXHJcbiAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHVybCk7ICBcclxuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLFwiYXBwbGljYXRpb24vanNvbjtjaGFyc2V0PVVURi04XCIpOyAgXHJcbiAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHsgIFxyXG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgKHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPD0gMjA3KSkgeyAgXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlLHhoci5yZXNwb25zZVRleHQpOyBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07ICBcclxuICAgICAgICB4aHIuc2VuZChwYXJhbXMpOyBcclxuICAgIH1cclxuICAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcblxyXG53aW5kb3cuSHR0cEhlbHBlciA9IG5ldyBIdHRwSGVscGVyKCk7XHJcblxyXG4vLyBjb25zdCBzb2NrZXQgPSBuZXcgV2ViU29ja2V0KCd3czovL2xvY2FsaG9zdDo4MDgwJyk7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/login/SpriteTextTool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '522f7RUlNhOh5+SscH5tMhK', 'SpriteTextTool');
// Script/login/SpriteTextTool.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    content: "1000",
    text_sprite: {
      "default": null,
      type: cc.SpriteFrame
    }
  },
  start: function start() {
    this.setContent("8934873");
  },
  // ????????????
  setContent: function setContent(str) {
    this.content = str;
    this.onSetContentChange();
  },
  onSetContentChange: function onSetContentChange() {
    this.createSpriteText();
  },
  createSpriteText: function createSpriteText() {
    this.clearItem();
    var childs = this.node.children;
    var count = childs.length;

    for (var i = 0; i < this.content.length; i++) {
      var item = null;
      var sprite = null;

      if (i < count) {
        item = childs[i];
        item.active = true;
        sprite = item.getComponent(cc.Sprite);
      } else {
        item = new cc.Node("item");
        sprite = item.addComponent(cc.Sprite);
      }

      this.setSprite(this.content[i], sprite);
      item.parent = this.node;
    }
  },
  // ????????????
  getSprite: function getSprite(index) {
    var sprite = this.text_sprite.clone(); // ??????????????????

    var width = sprite.getRect().width / 10;
    var height = sprite.getRect().height;
    var x = sprite.getRect().x + index * width;
    var y = sprite.getRect().y;
    var tmpRect = new cc.Rect(x, y, width, height);
    sprite.setRect(tmpRect); // ?????? SpriteFrame ?????????????????????

    return sprite;
  },
  // ????????????
  setSprite: function setSprite(value, sprite) {
    switch (value) {
      case "0":
        sprite.spriteFrame = this.getSprite(0);
        break;

      case "1":
        sprite.spriteFrame = this.getSprite(1);
        break;

      case "2":
        sprite.spriteFrame = this.getSprite(2);
        break;

      case "3":
        sprite.spriteFrame = this.getSprite(3);
        break;

      case "4":
        sprite.spriteFrame = this.getSprite(4);
        break;

      case "5":
        sprite.spriteFrame = this.getSprite(5);
        break;

      case "6":
        sprite.spriteFrame = this.getSprite(6);
        break;

      case "7":
        sprite.spriteFrame = this.getSprite(7);
        break;

      case "8":
        sprite.spriteFrame = this.getSprite(8);
        break;

      case "9":
        sprite.spriteFrame = this.getSprite(9);
        break;

      default:
        console.log("value not find :" + value);
        break;
    }
  },
  clearItem: function clearItem() {
    var childs = this.node.children;

    for (var i = 0; i < childs.length; i++) {
      childs[i].active = false;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcU3ByaXRlVGV4dFRvb2wuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjb250ZW50IiwidGV4dF9zcHJpdGUiLCJ0eXBlIiwiU3ByaXRlRnJhbWUiLCJzdGFydCIsInNldENvbnRlbnQiLCJzdHIiLCJvblNldENvbnRlbnRDaGFuZ2UiLCJjcmVhdGVTcHJpdGVUZXh0IiwiY2xlYXJJdGVtIiwiY2hpbGRzIiwibm9kZSIsImNoaWxkcmVuIiwiY291bnQiLCJsZW5ndGgiLCJpIiwiaXRlbSIsInNwcml0ZSIsImFjdGl2ZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsIk5vZGUiLCJhZGRDb21wb25lbnQiLCJzZXRTcHJpdGUiLCJwYXJlbnQiLCJnZXRTcHJpdGUiLCJpbmRleCIsImNsb25lIiwid2lkdGgiLCJnZXRSZWN0IiwiaGVpZ2h0IiwieCIsInkiLCJ0bXBSZWN0IiwiUmVjdCIsInNldFJlY3QiLCJ2YWx1ZSIsInNwcml0ZUZyYW1lIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLE9BQU8sRUFBRyxNQURGO0FBRVJDLElBQUFBLFdBQVcsRUFBQztBQUNSLGlCQUFVLElBREY7QUFFUkMsTUFBQUEsSUFBSSxFQUFHTixFQUFFLENBQUNPO0FBRkY7QUFGSixHQUhQO0FBV0xDLEVBQUFBLEtBWEssbUJBWUw7QUFDSSxTQUFLQyxVQUFMLENBQWdCLFNBQWhCO0FBQ0gsR0FkSTtBQWdCTDtBQUNBQSxFQUFBQSxVQWpCSyxzQkFpQk1DLEdBakJOLEVBa0JMO0FBQ0ksU0FBS04sT0FBTCxHQUFlTSxHQUFmO0FBQ0EsU0FBS0Msa0JBQUw7QUFDSCxHQXJCSTtBQXVCTEEsRUFBQUEs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QUFLLEdBQUw7QUFDSVIsUUFBQUEsTUFBTSxDQUFDb0IsV0FBUCxHQUFxQixLQUFLWixTQUFMLENBQWUsQ0FBZixDQUFyQjtBQUNBOztBQUNKLFdBQUssR0FBTDtBQUNJUixRQUFBQSxNQUFNLENBQUNvQixXQUFQLEdBQXFCLEtBQUtaLFNBQUwsQ0FBZSxDQUFmLENBQXJCO0FBQ0E7O0FBQ0osV0FBSyxHQUFMO0FBQ0lSLFFBQUFBLE1BQU0sQ0FBQ29CLFdBQVAsR0FBcUIsS0FBS1osU0FBTCxDQUFlLENBQWYsQ0FBckI7QUFDQTs7QUFDSixXQUFLLEdBQUw7QUFDSVIsUUFBQUEsTUFBTSxDQUFDb0IsV0FBUCxHQUFxQixLQUFLWixTQUFMLENBQWUsQ0FBZixDQUFyQjtBQUNBOztBQUNKLFdBQUssR0FBTDtBQUNJUixRQUFBQSxNQUFNLENBQUNvQixXQUFQLEdBQXFCLEtBQUtaLFNBQUwsQ0FBZSxDQUFmLENBQXJCO0FBQ0E7O0FBQ0o7QUFDSWEsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQXFCSCxLQUFqQztBQUNBO0FBakNSO0FBbUNILEdBdkdJO0FBeUdMM0IsRUFBQUEsU0F6R0ssdUJBMEdMO0FBQ0ksUUFBSUMsTUFBTSxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsUUFBdkI7O0FBQ0EsU0FBSyxJQUFJRyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTCxNQUFNLENBQUNJLE1BQTNCLEVBQW1DQyxDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDTCxNQUFBQSxNQUFNLENBQUNLLENBQUQsQ0FBTixDQUFVRyxNQUFWLEdBQW1CLEtBQW5CO0FBQ0g7QUFDSjtBQS9HSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiBcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBjb250ZW50IDogXCIxMDAwXCIsXHJcbiAgICAgICAgdGV4dF9zcHJpdGU6e1xyXG4gICAgICAgICAgICBkZWZhdWx0IDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZSA6IGNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICB9LFxyXG4gXHJcbiAgICBzdGFydCgpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zZXRDb250ZW50KFwiODkzNDg3M1wiKTtcclxuICAgIH0sXHJcbiBcclxuICAgIC8vIOiuvue9ruaWh+acrFxyXG4gICAgc2V0Q29udGVudChzdHIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jb250ZW50ID0gc3RyO1xyXG4gICAgICAgIHRoaXMub25TZXRDb250ZW50Q2hhbmdlKCk7XHJcbiAgICB9LFxyXG4gXHJcbiAgICBvblNldENvbnRlbnRDaGFuZ2UoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlU3ByaXRlVGV4dCgpOyAgICBcclxuICAgIH0sXHJcbiBcclxuICAgIGNyZWF0ZVNwcml0ZVRleHQoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY2xlYXJJdGVtKCk7XHJcbiAgICAgICAgdmFyIGNoaWxkcyA9IHRoaXMubm9kZS5jaGlsZHJlbjtcclxuICAgICAgICB2YXIgY291bnQgPSBjaGlsZHMubGVuZ3RoO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb250ZW50Lmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSBudWxsO1xyXG4gICAgICAgICAgICB2YXIgc3ByaXRlID0gbnVsbDtcclxuICAgICAgICAgICAgaWYoaSA8IGNvdW50KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpdGVtID0gY2hpbGRzW2ldO1xyXG4gICAgICAgICAgICAgICAgaXRlbS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgc3ByaXRlID0gaXRlbS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSBuZXcgY2MuTm9kZShcIml0ZW1cIik7XHJcbiAgICAgICAgICAgICAgICBzcHJpdGUgPSBpdGVtLmFkZENvbXBvbmVudChjYy5TcHJpdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3ByaXRlKHRoaXMuY29udGVudFtpXSxzcHJpdGUpO1xyXG4gICAgICAgICAgICBpdGVtLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gXHJcbiAgICAvLyDojrflj5botLTlm75cclxuICAgIGdldFNwcml0ZShpbmRleClcclxuICAgIHtcclxuICAgICAgICB2YXIgc3ByaXRlID0gdGhpcy50ZXh0X3Nwcml0ZS5jbG9uZSgpOyAvLyDlhYvpmobkuIDlvKDlm77niYdcclxuICAgICAgICB2YXIgd2lkdGggPSBzcHJpdGUuZ2V0UmVjdCgpLndpZHRoLzEwO1xyXG4gICAgICAgIHZhciBoZWlnaHQgPSBzcHJpdGUuZ2V0UmVjdCgpLmhlaWdodDtcclxuICAgICAgICB2YXIgeCA9IHNwcml0ZS5nZXRSZWN0KCkueCArIGluZGV4ICogd2lkdGg7XHJcbiAgICAgICAgdmFyIHkgPSBzcHJpdGUuZ2V0UmVjdCgpLnk7XHJcbiAgICAgICAgdmFyIHRtcFJlY3QgPSBuZXcgY2MuUmVjdCh4LHksd2lkdGgsaGVpZ2h0KTtcclxuICAgICAgICBzcHJpdGUuc2V0UmVjdCh0bXBSZWN0KTsgICAvLyDorr7nva4gU3ByaXRlRnJhbWUg55qE57q555CG55+p5b2i5Yy65Z+fXHJcbiAgICAgICAgcmV0dXJuIHNwcml0ZTtcclxuICAgIH0sXHJcbiAgICAvLyDorr7nva7otLTlm75cclxuICAgIHNldFNwcml0ZSh2YWx1ZSxzcHJpdGUpXHJcbiAgICB7XHJcbiAgICAgICAgc3dpdGNoICh2YWx1ZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiMFwiOlxyXG4gICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5nZXRTcHJpdGUoMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjFcIjpcclxuICAgICAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuZ2V0U3ByaXRlKDEpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCIyXCI6XHJcbiAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmdldFNwcml0ZSgyKTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjNcIjpcclxuICAgICAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuZ2V0U3ByaXRlKDMpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCI0XCI6XHJcbiAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmdldFNwcml0ZSg0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiNVwiOlxyXG4gICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5nZXRTcHJpdGUoNSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjZcIjpcclxuICAgICAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuZ2V0U3ByaXRlKDYpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCI3XCI6XHJcbiAgICAgICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSB0aGlzLmdldFNwcml0ZSg3KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiOFwiOlxyXG4gICAgICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5nZXRTcHJpdGUoOCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcIjlcIjpcclxuICAgICAgICAgICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMuZ2V0U3ByaXRlKDkpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInZhbHVlIG5vdCBmaW5kIDpcIiArIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfSxcclxuIFxyXG4gICAgY2xlYXJJdGVtKClcclxuICAgIHtcclxuICAgICAgICB2YXIgY2hpbGRzID0gdGhpcy5ub2RlLmNoaWxkcmVuO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY2hpbGRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNoaWxkc1tpXS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/login/jspfile.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '418e4mQmD5NULo0MWDBNMnw', 'jspfile');
// Script/login/jspfile.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //    default: null,      // The default value will be used only when the component attaching
    //                           to a node for the first time
    //    url: cc.Texture2D,  // optional, default is typeof default
    //    serializable: true, // optional, default is true
    //    visible: true,      // optional, default is true
    //    displayName: 'Foo', // optional
    //    readonly: false,    // optional, default is false
    // },
    // ...
  },
  // use this for initialization
  onLoad: function onLoad() {
    // jsb.fileUtils?????????????????????????????????, cc.director;
    // ??????????????????????????????????????????????????????????????????????????????;
    // ???????????????????????????????????????OS?????????APP??????????????????????????????; 
    // jsb --> javascript binding --> jsb????????????h5???
    var writeable_path = jsb.fileUtils.getWritablePath();
    console.log(writeable_path); // ?????????????????????????????????????????????

    var new_dir = writeable_path + "new_dir"; // ?????????????????? ???????????????????????????????????????????????????????????????;
    // getWritablePath?????????????????????????????????????????????????????????,?????????????????????????????????????????????????????????APP????????????;

    if (!jsb.fileUtils.isDirectoryExist(new_dir)) {
      jsb.fileUtils.createDirectory(new_dir);
    } else {
      console.log("dir is exist!!!");
    } // ???????????????????????????,????????????, ???????????????;
    // (1)??????????????????,??????????????????string??????


    var str_data = jsb.fileUtils.getStringFromFile(new_dir + "/test_str_read.txt");
    console.log(str_data);
    str_data = "hello test_write !!!!!";
    jsb.fileUtils.writeStringToFile(str_data, new_dir + "/test_str_write.txt"); // (2)????????????????????????, Uint8Array --> js??????

    var bin_array = jsb.fileUtils.getDataFromFile(new_dir + "/test_bin_read.png");
    console.log(bin_array[0], bin_array[1]); // ?????????????????????????????????????????????????????????;

    jsb.fileUtils.writeDataToFile(bin_array, new_dir + "/test_bin_write.png"); // end 
    // ????????????????????????
    // jsb.fileUtils.removeFile(new_dir + "/test_bin_write.png"); 
    // jsb.fileUtils.removeDirectory(new_dir);
  } // called every frame, uncomment this function to activate update callback
  // update: function (dt) {
  // },

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcanNwZmlsZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIm9uTG9hZCIsIndyaXRlYWJsZV9wYXRoIiwianNiIiwiZmlsZVV0aWxzIiwiZ2V0V3JpdGFibGVQYXRoIiwiY29uc29sZSIsImxvZyIsIm5ld19kaXIiLCJpc0RpcmVjdG9yeUV4aXN0IiwiY3JlYXRlRGlyZWN0b3J5Iiwic3RyX2RhdGEiLCJnZXRTdHJpbmdGcm9tRmlsZSIsIndyaXRlU3RyaW5nVG9GaWxlIiwiYmluX2FycmF5IiwiZ2V0RGF0YUZyb21GaWxlIiwid3JpdGVEYXRhVG9GaWxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVZRLEdBSFA7QUFnQkw7QUFDQUMsRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBSUMsY0FBYyxHQUFHQyxHQUFHLENBQUNDLFNBQUosQ0FBY0MsZUFBZCxFQUFyQjtBQUNBQyxJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUwsY0FBWixFQU5nQixDQVNoQjs7QUFDQSxRQUFJTSxPQUFPLEdBQUdOLGNBQWMsR0FBRyxTQUEvQixDQVZnQixDQVdoQjtBQUNBOztBQUNBLFFBQUcsQ0FBQ0MsR0FBRyxDQUFDQyxTQUFKLENBQWNLLGdCQUFkLENBQStCRCxPQUEvQixDQUFKLEVBQTZDO0FBQ3pDTCxNQUFBQSxHQUFHLENBQUNDLFNBQUosQ0FBY00sZUFBZCxDQUE4QkYsT0FBOUI7QUFDSCxLQUZELE1BR0s7QUFDREYsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVo7QUFDSCxLQWxCZSxDQW9CaEI7QUFDQTs7O0FBQ0EsUUFBSUksUUFBUSxHQUFHUixHQUFHLENBQUNDLFNBQUosQ0FBY1EsaUJBQWQsQ0FBZ0NKLE9BQU8sR0FBRyxvQkFBMUMsQ0FBZjtBQUNBRixJQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUksUUFBWjtBQUNBQSxJQUFBQSxRQUFRLEdBQUcsd0JBQVg7QUFDQVIsSUFBQUEsR0FBRyxDQUFDQyxTQUFKLENBQWNTLGlCQUFkLENBQWdDRixRQUFoQyxFQUEwQ0gsT0FBTyxHQUFHLHFCQUFwRCxFQXpCZ0IsQ0EwQmhCOztBQUNBLFFBQUlNLFNBQVMsR0FBR1gsR0FBRyxDQUFDQyxTQUFKLENBQWNXLGVBQWQsQ0FBOEJQLE9BQU8sR0FBRyxvQkFBeEMsQ0FBaEI7QUFDQUYsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlPLFNBQVMsQ0FBQyxDQUFELENBQXJCLEVBQTBCQSxTQUFTLENBQUMsQ0FBRCxDQUFuQyxFQTVCZ0IsQ0E0QnlCOztBQUN6Q1gsSUFBQUEsR0FBRyxDQUFDQyxTQUFKLENBQWNZLGVBQWQsQ0FBOEJGLFNBQTlCLEVBQXlDTixPQUFPLEdBQUcscUJBQW5ELEVBN0JnQixDQThCaEI7QUFFQTtBQUNBO0FBQ0E7QUFDSCxHQXBESSxDQXNETDtBQUNBO0FBRUE7O0FBekRLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgdXJsOiBjYy5UZXh0dXJlMkQsICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIHZpc2libGU6IHRydWUsICAgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vICAgIGRpc3BsYXlOYW1lOiAnRm9vJywgLy8gb3B0aW9uYWxcclxuICAgICAgICAvLyAgICByZWFkb25seTogZmFsc2UsICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIGZhbHNlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyAuLi5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBqc2IuZmlsZVV0aWxz6I635Y+W5YWo5bGA55qE5bel5YW357G755qE5a6e5L6LLCBjYy5kaXJlY3RvcjtcclxuICAgICAgICAvLyDlpoLmnpzmmK/lnKjnlLXohJHnmoTmqKHmi5/lmajkuIrvvIzlsLHkvJrmmK/lronoo4Xot6/lvoTkuIvmqKHmi5/lmajnmoTkvY3nva47XHJcbiAgICAgICAgLy8g5aaC5p6c5piv5omL5py65LiK77yM6YKj5LmI5bCx5piv5omL5py6T1PkuLrov5nkuKpBUFDliIbphY3nmoTlj6/ku6Xor7vlhpnnmoTot6/lvoQ7IFxyXG4gICAgICAgIC8vIGpzYiAtLT4gamF2YXNjcmlwdCBiaW5kaW5nIC0tPiBqc2LmmK/kuI3mlK/mjIFoNeeahFxyXG4gICAgICAgIHZhciB3cml0ZWFibGVfcGF0aCA9IGpzYi5maWxlVXRpbHMuZ2V0V3JpdGFibGVQYXRoKCk7XHJcbiAgICAgICAgY29uc29sZS5sb2cod3JpdGVhYmxlX3BhdGgpO1xyXG5cclxuXHJcbiAgICAgICAgLy8g6KaB5Zyo5Y+v5YaZ55qE6Lev5b6E5YWI5Yib5bu65LiA5Liq5paH5Lu25aS5XHJcbiAgICAgICAgdmFyIG5ld19kaXIgPSB3cml0ZWFibGVfcGF0aCArIFwibmV3X2RpclwiO1xyXG4gICAgICAgIC8vIOi3r+W+hOS5n+WPr+S7peaYryDlpJbpg6jlrZjlgqjnmoTot6/lvoTvvIzlj6ropoHkvaDmnInlj6/lhpnlpJbpg6jlrZjlgqjnmoTmnYPpmZA7XHJcbiAgICAgICAgLy8gZ2V0V3JpdGFibGVQYXRo6L+Z5Liq6Lev5b6E5LiL77yM5Lya6ZqP552A5oiR5Lus55qE56iL5bqP5Y246L296ICM5Yig6ZmkLOWklumDqOWtmOWCqOmZpOmdnuS9oOiHquW3seWIoOmZpO+8jOWQpuiAheeahOivne+8jOWNuOi9vUFQUOaVsOaNrui/mOWcqDtcclxuICAgICAgICBpZighanNiLmZpbGVVdGlscy5pc0RpcmVjdG9yeUV4aXN0KG5ld19kaXIpKSB7XHJcbiAgICAgICAgICAgIGpzYi5maWxlVXRpbHMuY3JlYXRlRGlyZWN0b3J5KG5ld19kaXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJkaXIgaXMgZXhpc3QhISFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIOivu+WGmeaWh+S7tuaIkeS7rOWIhuS4pOenjSzmlofmnKzmlofku7YsIOS6jOi/m+WItuaWh+S7tjtcclxuICAgICAgICAvLyAoMSnmlofmnKzmlofku7bnmoTor7ss6L+U5Zue55qE5piv5LiA5Liqc3RyaW5n5a+56LGhXHJcbiAgICAgICAgdmFyIHN0cl9kYXRhID0ganNiLmZpbGVVdGlscy5nZXRTdHJpbmdGcm9tRmlsZShuZXdfZGlyICsgXCIvdGVzdF9zdHJfcmVhZC50eHRcIik7IFxyXG4gICAgICAgIGNvbnNvbGUubG9nKHN0cl9kYXRhKTtcclxuICAgICAgICBzdHJfZGF0YSA9IFwiaGVsbG8gdGVzdF93cml0ZSAhISEhIVwiXHJcbiAgICAgICAganNiLmZpbGVVdGlscy53cml0ZVN0cmluZ1RvRmlsZShzdHJfZGF0YSwgbmV3X2RpciArIFwiL3Rlc3Rfc3RyX3dyaXRlLnR4dFwiKTtcclxuICAgICAgICAvLyAoMinkuozov5vliLbmlofku7bnmoTor7vlhpksIFVpbnQ4QXJyYXkgLS0+IGpz5a+56LGhXHJcbiAgICAgICAgdmFyIGJpbl9hcnJheSA9IGpzYi5maWxlVXRpbHMuZ2V0RGF0YUZyb21GaWxlKG5ld19kaXIgKyBcIi90ZXN0X2Jpbl9yZWFkLnBuZ1wiKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhiaW5fYXJyYXlbMF0sIGJpbl9hcnJheVsxXSk7IC8vIOS9v+eUqOi/meS4quWwseiDveiuv+mXruS6jOi/m+WItueahOavj+S4gOS4quWtl+iKguaVsOaNrjtcclxuICAgICAgICBqc2IuZmlsZVV0aWxzLndyaXRlRGF0YVRvRmlsZShiaW5fYXJyYXksIG5ld19kaXIgKyBcIi90ZXN0X2Jpbl93cml0ZS5wbmdcIik7XHJcbiAgICAgICAgLy8gZW5kIFxyXG5cclxuICAgICAgICAvLyDliKDpmaTmlofku7blkozmlofku7blpLlcclxuICAgICAgICAvLyBqc2IuZmlsZVV0aWxzLnJlbW92ZUZpbGUobmV3X2RpciArIFwiL3Rlc3RfYmluX3dyaXRlLnBuZ1wiKTsgXHJcbiAgICAgICAgLy8ganNiLmZpbGVVdGlscy5yZW1vdmVEaXJlY3RvcnkobmV3X2Rpcik7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG5cclxuICAgIC8vIH0sXHJcbn0pO1xyXG5cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/login/Tools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9c99erZc29ESIVQKwP6Lsma', 'Tools');
// Script/login/Tools.js

"use strict";

/*
 * @Author: sjeam
 * @Date: 2022-06-14 16:01:41
 * @Description: 
 */
cc.Class({
  "extends": cc.Component,
  properties: {
    server_type: cc.Node,
    server_name: cc.Node,
    sprite_server_login: cc.Button
  },
  // LIFE-CYCLE CALLBACKS:
  initInfo: function initInfo(info) {
    // ??????????????????????????????
    // ??????
    var self = this;

    if (info['picUrl']) {
      cc.loader.loadRes(info['picUrl'], cc.SpriteFrame, function (err, spriteFrame) {
        self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
      });
    } // this.server_type.getComponent(cc.Label).string=info['type'];
    // if(info['num']<100){
    //     this.server_type.getComponent(cc.Label).string='??????';
    //     this.node.getChildByName('server_type').color = new cc.color('green');
    // }else if(info['num']<500&&info['num']>=100){
    //     this.server_type.getComponent(cc.Label).string='??????';
    //     this.node.getChildByName('server_type').color = new cc.color('#BDFF00');
    // }else if(info['num']<1000&&info['num']>=500){
    //     this.server_type.getComponent(cc.Label).string='??????';
    //     this.node.getChildByName('server_type').color = new cc.color('#FFD100');
    // }else{
    //     this.server_type.getComponent(cc.Label).string='??????';
    //     this.node.getChildByName('server_type').color = new cc.color('#FF0000'); 
    // }    


    this.server_type.getComponent(cc.Label).string = info['type'];
    this.node.getChildByName('server_type').color = new cc.color(info['color']);
    this.server_name.getComponent(cc.Label).string = info['id'] + '???  -  ' + info['name']; //???????????????button ????????????????????????????????????

    this.bindClickEvent(this.sprite_server_login.getComponent(cc.Button), info);
  },
  // ??????????????????
  bindClickEvent: function bindClickEvent(button, index) {
    // console.log(index)
    var clickEventHandler = new cc.Component.EventHandler(); //?????? node ??????????????????????????????????????????????????????

    clickEventHandler.target = this.node; //????????????????????????

    clickEventHandler.component = "Tools"; // js????????????-??????

    clickEventHandler.handler = "onConfirBtn"; // js????????????--??????

    clickEventHandler.customEventData = index; // ????????????

    button.clickEvents.push(clickEventHandler);
  },
  //??????????????????
  onConfirBtn: function onConfirBtn(e, info) {
    console.log(info);

    var HttpHelper = require("http");

    var httpRequest = new HttpHelper();
    httpRequest.httpPost('https://www.mheart.xyz/app/api-server/user-server', {
      'id': info['id'],
      'token': null
    }, function (data) {
      console.log(data);
      var server_choes_label = cc.find("Canvas/server/server_choes/server_choes_label");
      server_choes_label.getComponent(cc.Label).string = info['name'];
      var server_choes_type = cc.find("Canvas/server/server_choes/server_choes_type");
      server_choes_type.getComponent(cc.Label).string = info['type'];
      server_choes_type.color = new cc.color(info['color']);
    });
    var mask = cc.find("Canvas/mask");
    mask.active = false; // var mask =  this.node.getChildByName('mask')
    // console.log(this.node.getSiblingIndex())
    // console.log( this.node.parent.getComponent(cc.Button));
    // this.node.getChildByName("sprite_server_login").on('click',function(event){
    //     console.log("???????????????");
    //     callback();
    // },this);
    // this.node.active =false; // ????????????????????????
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcVG9vbHMuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzZXJ2ZXJfdHlwZSIsIk5vZGUiLCJzZXJ2ZXJfbmFtZSIsInNwcml0ZV9zZXJ2ZXJfbG9naW4iLCJCdXR0b24iLCJpbml0SW5mbyIsImluZm8iLCJzZWxmIiwibG9hZGVyIiwibG9hZFJlcyIsIlNwcml0ZUZyYW1lIiwiZXJyIiwic3ByaXRlRnJhbWUiLCJub2RlIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwiTGFiZWwiLCJzdHJpbmciLCJnZXRDaGlsZEJ5TmFtZSIsImNvbG9yIiwiYmluZENsaWNrRXZlbnQiLCJidXR0b24iLCJpbmRleCIsImNsaWNrRXZlbnRIYW5kbGVyIiwiRXZlbnRIYW5kbGVyIiwidGFyZ2V0IiwiY29tcG9uZW50IiwiaGFuZGxlciIsImN1c3RvbUV2ZW50RGF0YSIsImNsaWNrRXZlbnRzIiwicHVzaCIsIm9uQ29uZmlyQnRuIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJIdHRwSGVscGVyIiwicmVxdWlyZSIsImh0dHBSZXF1ZXN0IiwiaHR0cFBvc3QiLCJkYXRhIiwic2VydmVyX2Nob2VzX2xhYmVsIiwiZmluZCIsInNlcnZlcl9jaG9lc190eXBlIiwibWFzayIsImFjdGl2ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFLQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBRVJDLElBQUFBLFdBQVcsRUFBRUosRUFBRSxDQUFDSyxJQUZSO0FBR1JDLElBQUFBLFdBQVcsRUFBRU4sRUFBRSxDQUFDSyxJQUhSO0FBSVJFLElBQUFBLG1CQUFtQixFQUFFUCxFQUFFLENBQUNRO0FBSmhCLEdBSFA7QUFVTDtBQUVBQyxFQUFBQSxRQVpLLG9CQVlLQyxJQVpMLEVBWVc7QUFDWjtB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QWlCLEdBQUc5QyxFQUFFLENBQUM2QyxJQUFILENBQVEsOENBQVIsQ0FBeEI7QUFDQUMsTUFBQUEsaUJBQWlCLENBQUM1QixZQUFsQixDQUErQmxCLEVBQUUsQ0FBQ29CLEtBQWxDLEVBQXlDQyxNQUF6QyxHQUFnRFgsSUFBSSxDQUFDLE1BQUQsQ0FBcEQ7QUFDQW9DLE1BQUFBLGlCQUFpQixDQUFDdkIsS0FBbEIsR0FBMEIsSUFBSXZCLEVBQUUsQ0FBQ3VCLEtBQVAsQ0FBYWIsSUFBSSxDQUFDLE9BQUQsQ0FBakIsQ0FBMUI7QUFDSCxLQVZEO0FBWUEsUUFBSXFDLElBQUksR0FBRS9DLEVBQUUsQ0FBQzZDLElBQUgsQ0FBUSxhQUFSLENBQVY7QUFHQUUsSUFBQUEsSUFBSSxDQUFDQyxNQUFMLEdBQVksS0FBWixDQW5Cd0IsQ0FxQnhCO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSDtBQTNGSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBAQXV0aG9yOiBzamVhbVxyXG4gKiBARGF0ZTogMjAyMi0wNi0xNCAxNjowMTo0MVxyXG4gKiBARGVzY3JpcHRpb246IFxyXG4gKi9cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICBcclxuICAgICAgICBzZXJ2ZXJfdHlwZTogY2MuTm9kZSxcclxuICAgICAgICBzZXJ2ZXJfbmFtZTogY2MuTm9kZSxcclxuICAgICAgICBzcHJpdGVfc2VydmVyX2xvZ2luOiBjYy5CdXR0b25cclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgaW5pdEluZm8gKGluZm8pIHtcclxuICAgICAgICAvLyDliJ3lp4vljJbor6XpgZPlhbfnm7jlhbPkv6Hmga9cclxuXHJcbiAgICAgICAgLy8g5Zu+54mHXHJcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGluZm9bJ3BpY1VybCddKXtcclxuICAgICAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoaW5mb1sncGljVXJsJ10sIGNjLlNwcml0ZUZyYW1lLCBmdW5jdGlvbiAoZXJyLCBzcHJpdGVGcmFtZSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7IFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgXHJcbiAgICAgICAgLy8gdGhpcy5zZXJ2ZXJfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1pbmZvWyd0eXBlJ107XHJcbiAgICAgICAgLy8gaWYoaW5mb1snbnVtJ108MTAwKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5zZXJ2ZXJfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz0n56m66ZeyJztcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzZXJ2ZXJfdHlwZScpLmNvbG9yID0gbmV3IGNjLmNvbG9yKCdncmVlbicpO1xyXG4gICAgICAgIC8vIH1lbHNlIGlmKGluZm9bJ251bSddPDUwMCYmaW5mb1snbnVtJ10+PTEwMCl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuc2VydmVyX3R5cGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9J+a1geeVhSc7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnc2VydmVyX3R5cGUnKS5jb2xvciA9IG5ldyBjYy5jb2xvcignI0JERkYwMCcpO1xyXG4gICAgICAgIC8vIH1lbHNlIGlmKGluZm9bJ251bSddPDEwMDAmJmluZm9bJ251bSddPj01MDApe1xyXG4gICAgICAgIC8vICAgICB0aGlzLnNlcnZlcl90eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPSfmi6XmjKQnO1xyXG4gICAgICAgIC8vICAgICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3NlcnZlcl90eXBlJykuY29sb3IgPSBuZXcgY2MuY29sb3IoJyNGRkQxMDAnKTtcclxuICAgICAgICAvLyB9ZWxzZXtcclxuICAgICAgICAvLyAgICAgdGhpcy5zZXJ2ZXJfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz0n54iG5ruhJztcclxuICAgICAgICAvLyAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzZXJ2ZXJfdHlwZScpLmNvbG9yID0gbmV3IGNjLmNvbG9yKCcjRkYwMDAwJyk7IFxyXG4gICAgICAgIC8vIH0gICAgXHJcbiAgICAgICAgdGhpcy5zZXJ2ZXJfdHlwZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1pbmZvWyd0eXBlJ107XHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdzZXJ2ZXJfdHlwZScpLmNvbG9yID0gbmV3IGNjLmNvbG9yKGluZm9bJ2NvbG9yJ10pO1xyXG5cclxuICAgICAgICB0aGlzLnNlcnZlcl9uYW1lLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPSBpbmZvWydpZCddKyfljLogIC0gICcraW5mb1snbmFtZSddO1xyXG4gICAgICAgIC8v5Yib5bu65LiA5Liq5pawYnV0dG9uIOW5tuWwhuWFtuaMgui9veWIsOWIm+W7uueahOeyvueBteS4i1xyXG4gICAgICAgIHRoaXMuYmluZENsaWNrRXZlbnQoIHRoaXMuc3ByaXRlX3NlcnZlcl9sb2dpbi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKSwgaW5mbyk7XHJcbiAgICB9LFxyXG4gICAgLy8g57uR5a6a5oyJ6ZKu5LqL5Lu2XHJcbiAgICBiaW5kQ2xpY2tFdmVudDogZnVuY3Rpb24gKGJ1dHRvbiwgaW5kZXgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhpbmRleClcclxuICAgICAgICB2YXIgY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG4gICAgICAgIC8v6L+Z5LiqIG5vZGUg6IqC54K55piv5L2g55qE5LqL5Lu25aSE55CG5Luj56CB57uE5Lu25omA5bGe55qE6IqC54K5XHJcbiAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIudGFyZ2V0ID0gdGhpcy5ub2RlOyBcclxuICAgICAgICAvL+i/meS4quaYr+S7o+eggeaWh+S7tuWQjVxyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmNvbXBvbmVudCA9IFwiVG9vbHNcIjsgIC8vIGpz6ISa5pys5paH5Lu2Lee7keWumlxyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcIm9uQ29uZmlyQnRuXCI7Ly8ganPmlrnms5XlkI3np7AtLee7keWumlxyXG4gICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmN1c3RvbUV2ZW50RGF0YSA9IGluZGV4OyAvLyDlm57osIPlhoXlrrlcclxuICAgICAgICBidXR0b24uY2xpY2tFdmVudHMucHVzaChjbGlja0V2ZW50SGFuZGxlcik7XHJcbiAgICB9LFxyXG4gXHJcblxyXG4gICAgLy/mjInpkq7ngrnlh7vlm57osINcclxuICAgIG9uQ29uZmlyQnRuOmZ1bmN0aW9uKGUsaW5mbyl7XHJcbiAgICAgICAgY29uc29sZS5sb2coaW5mbylcclxuICAgICAgICB2YXIgSHR0cEhlbHBlciA9IHJlcXVpcmUoXCJodHRwXCIpOyBcclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3QgPSBuZXcgSHR0cEhlbHBlcigpO1xyXG4gICAgICAgIGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCdodHRwczovL3d3dy5taGVhcnQueHl6L2FwcC9hcGktc2VydmVyL3VzZXItc2VydmVyJywge1xyXG4gICAgICAgICAgICAnaWQnOiBpbmZvWydpZCddLFxyXG4gICAgICAgICAgICAndG9rZW4nOiBudWxsXHJcbiAgICAgICAgfSwgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAgIHZhciBzZXJ2ZXJfY2hvZXNfbGFiZWwgID1jYy5maW5kKFwiQ2FudmFzL3NlcnZlci9zZXJ2ZXJfY2hvZXMvc2VydmVyX2Nob2VzX2xhYmVsXCIpO1xyXG4gICAgICAgICAgICBzZXJ2ZXJfY2hvZXNfbGFiZWwuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9aW5mb1snbmFtZSddO1xyXG4gICAgICAgICAgICB2YXIgc2VydmVyX2Nob2VzX3R5cGUgID1jYy5maW5kKFwiQ2FudmFzL3NlcnZlci9zZXJ2ZXJfY2hvZXMvc2VydmVyX2Nob2VzX3R5cGVcIik7XHJcbiAgICAgICAgICAgIHNlcnZlcl9jaG9lc190eXBlLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWluZm9bJ3R5cGUnXTtcclxuICAgICAgICAgICAgc2VydmVyX2Nob2VzX3R5cGUuY29sb3IgPSBuZXcgY2MuY29sb3IoaW5mb1snY29sb3InXSk7IFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHZhciBtYXNrID1jYy5maW5kKFwiQ2FudmFzL21hc2tcIik7XHJcbiAgICAgIFxyXG5cclxuICAgICAgICBtYXNrLmFjdGl2ZT1mYWxzZVxyXG4gICAgICBcclxuICAgICAgICAvLyB2YXIgbWFzayA9ICB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ21hc2snKVxyXG4gICAgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ub2RlLmdldFNpYmxpbmdJbmRleCgpKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCB0aGlzLm5vZGUucGFyZW50LmdldENvbXBvbmVudChjYy5CdXR0b24pKTtcclxuICAgICBcclxuICAgICAgICAvLyB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcHJpdGVfc2VydmVyX2xvZ2luXCIpLm9uKCdjbGljaycsZnVuY3Rpb24oZXZlbnQpe1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcIueCueWHu+WIsOaMiemSrlwiKTtcclxuICAgICAgICAvLyAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAvLyB9LHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5hY3RpdmUgPWZhbHNlOyAvLyDnm7TmjqXljrvmjonmqKHlnovoioLngrlcclxuICAgIH0sXHJcbiBcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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

var HttpHelper = require("http"); // var fs = require('fs'); // ??????fs??????
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
    this.tokenlogin(); // ????????????
    // ????????????--??????????????????
    // // ??????????????????
    // this.login();
    //????????????
    // cc.sys.localStorage.setItem('token', value);
    // cc.sys.localStorage.getItem(key);
    // cc.sys.localStorage.removeItem(key);
    // ????????????????????????
    // const KEY_BEST_SCORE = "bestScore";
    // let bestScore = cc.sys.localStorage.getItem(KEY_BEST_SCORE);
    // if (bestScore === "null" || this.score > bestScore) {
    //     bestScore = this.score;
    // }
    // cc.sys.localStorage.setItem(KEY_BEST_SCORE, bestScore);
  },
  tokenlogin: function tokenlogin() {
    // ????????????json  ??????
    // cc.loader.load( cc.url.raw("resources/login.json"),function(err,res){  
    // cc.loader.loadRes('login.json',function(err,res){   //??????resources
    //     let json = res.json;
    //     var params = {
    //         'token': json.token,
    //     };
    //     cc.log(json.token); 
    //     var res = httpRequest.httpPost('https://www.mheart.xyz/app/api-server/token-login', params ,function (data) {
    //         cc.loader.release('resources/login.json'); //??????json ??????
    //         // if(cc.sys.isNative){  //  jsb.fileUtils????????? web  ??????
    //         //     jsb.fileUtils.writeStringToFile(data,token)
    //         // }
    //         // cc.log(data); 
    //         // ?????????????????????
    //         if(data.code==0){
    //             // this.loginbox.node.active = false;  // ????????????
    //         }
    //     });
    // })
    var token = cc.sys.localStorage.getItem('token');

    if (token) {
      httpRequest.httpPost('https://www.mheart.xyz/app/api-server/token-login', {
        'token': token
      }, function (data) {
        // cc.loader.release('resources/login.json'); //??????json ??????
        // if(cc.sys.isNative){  //  jsb.fileUtils????????? web  ??????
        //     jsb.fileUtils.writeStringToFile(data,token)
        // }
        // cc.log(data); 
        // ????????????
        if (data.code == 1) {
          //??????????????????
          var user_status = cc.find("Canvas/server/user_status");
          user_status.active = true;
          var user_phone = cc.find("Canvas/server/user_status/user_phone");
          var loginname = data.data.userinfo.loginname; // ??????slice(start, end)?????????????????????????????????
          // str.slice(1) ????????????1?????????????????????

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
  //             _this.register_alert.string ='??????????????????!';
  //         }
  //         //????????????--??????????????????
  //     });
  // },
  btnClick1: function btnClick1(event, customEventData) {
    // // ??????????????????
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
      if (data.code == 0) {// ????????????????????????????????????
        // ??????
      } else {
        // ???????????????
        cc.sys.localStorage.setItem('server', JSON.stringify(data.data.server));

        if (data.code == 1) {
          // ???????????????????????????
          // cc.log(data.data.userinfo); 
          cc.sys.localStorage.setItem('userinfo', JSON.stringify(data.data.userinfo));
          cc.director.loadScene('home/dating'); // cc.sys.localStorage.setItem('userinfo', JSON.stringify(data.data.userinfo));
          // cc.sys.localStorage.getItem(key); //????????????
        }

        if (data.code == 2) {
          // ??????????????????????????????
          // ????????????????????????     
          var server = JSON.parse(cc.sys.localStorage.getItem('server')); // cc.log(server); 
          // ????????????

          cc.director.loadScene('register');
        }
      }
    }); //?????? event ????????? Touch Event ???????????????????????? event.target ???????????????????????????
    // var node = event.target;
    // var button = node.getComponent(cc.Button);
    //????????? customEventData ????????????????????????????????? "click1 user data"
    // cc.log("node=", node.name, " event=", event.type, " data=", customEventData);
  },
  callback: function callback(event) {
    // cc.log(data)
    // var userCount =  cc.find("Canvas/ground/editbox_count").getComponent(cc.EditBox).string;
    // var userPassward =  cc.find("Canvas/ground/editbox_passward").getComponent(cc.EditBox).string;
    // console.log("???????????????"+userCount+ "???????????????"+ userPassward);
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
    //         //?????????????????????????????????
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcbXlzZXJ2ZXIuanMiXSwibmFtZXMiOlsiSHR0cEhlbHBlciIsInJlcXVpcmUiLCJodHRwUmVxdWVzdCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwidXNlcl9zdGF0dXMiLCJOb2RlIiwidXNlcl9waG9uZSIsIkxhYmVsIiwib25Mb2FkIiwidG9rZW5sb2dpbiIsInRva2VuIiwic3lzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImh0dHBQb3N0IiwiZGF0YSIsImNvZGUiLCJmaW5kIiwiYWN0aXZlIiwibG9naW5uYW1lIiwidXNlcmluZm8iLCJwaG9uZSIsInNsaWNlIiwiZ2V0Q29tcG9uZW50Iiwic3RyaW5nIiwiYnRuQ2xpY2sxIiwiZXZlbnQiLCJjdXN0b21FdmVudERhdGEiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsInNlcnZlciIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwicGFyc2UiLCJjYWxsYmFjayIsInN0YXJ0Iiwic2hvd19kbGciLCJub2RlIiwiaGlkZGVuX2RsZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXhCLEVBQ0E7QUFDQTs7O0FBQ0EsSUFBSUMsV0FBVyxHQUFJLElBQUlGLFVBQUosRUFBbkI7QUFDQUcsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFdBQVcsRUFBQ0osRUFBRSxDQUFDSyxJQURQO0FBRVJDLElBQUFBLFVBQVUsRUFBQ04sRUFBRSxDQUFDTyxLQUZOLENBR1I7QUFDQTs7QUFKUSxHQUhQO0FBVUxDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWTtBQUVoQixTQUFLQyxVQUFMLEdBRmdCLENBRUc7QUFFbkI7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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Q0QsWUFBR2xCLElBQUksQ0FBQ0MsSUFBTCxJQUFXLENBQWQsRUFBZ0I7QUFBRTtBQUNkO0FBQ0EsY0FBSWUsTUFBTSxHQUFHRixJQUFJLENBQUNLLEtBQUwsQ0FBV2xDLEVBQUUsQ0FBQ1csR0FBSCxDQUFPQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixRQUE1QixDQUFYLENBQWIsQ0FGWSxDQUdaO0FBQ0E7O0FBQ0FiLFVBQUFBLEVBQUUsQ0FBQ2dDLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixVQUF0QjtBQUNIO0FBQ0o7QUFFSixLQXZCRCxFQWJ5QyxDQXNDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNILEdBL0pJO0FBaUtMRSxFQUFBQSxRQUFRLEVBQUUsa0JBQVVULEtBQVYsRUFBaUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ1ExQixJQUFBQSxFQUFFLENBQUNnQyxRQUFILENBQVlDLFNBQVosQ0FBc0IsS0FBdEIsRUFyQmUsQ0FzQnZCO0FBQ0E7QUFDQTtBQUNBO0FBRUgsR0E1TEk7QUE4TExHLEVBQUFBLEtBOUxLLG1CQThMSSxDQUVSLENBaE1JO0FBa01MO0FBRUFDLEVBQUFBLFFBcE1LLHNCQW9NTztBQUVSLFNBQUtDLElBQUwsQ0FBVXBCLE1BQVYsR0FBa0IsSUFBbEI7QUFFSCxHQXhNSTtBQXlNTHFCLEVBQUFBLFVBek1LLHdCQXlNUztBQUNWLFNBQUtELElBQUwsQ0FBVXBCLE1BQVYsR0FBa0IsS0FBbEI7QUFDSDtBQTNNSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIEh0dHBIZWxwZXIgPSByZXF1aXJlKFwiaHR0cFwiKTtcclxuLy8gdmFyIGZzID0gcmVxdWlyZSgnZnMnKTsgLy8g5byV5YWlZnPmqKHlnZdcclxuLy8gdmFyIGdsb2JhbHVzZXJpbmZvID0gcmVxdWlyZShcIkdsb2JhbHVzZXJJbmZvXCIpO1xyXG5sZXQgaHR0cFJlcXVlc3QgPSAgbmV3IEh0dHBIZWxwZXIoKTsgIFxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiBcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICB1c2VyX3N0YXR1czpjYy5Ob2RlLFxyXG4gICAgICAgIHVzZXJfcGhvbmU6Y2MuTGFiZWwsXHJcbiAgICAgICAgLy8gcmVnaXN0ZXJfbG9naW5fbmFtZTogY2MuRWRpdEJveCxcclxuICAgICAgICAvLyByZWdpc3Rlcl9sb2dpbl9wYXNzd29yZDogY2MuRWRpdEJveFxyXG4gICAgfSxcclxuIFxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7ICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy50b2tlbmxvZ2luKCk7IC8vIOW/q+aNt+eZu+W9lVxyXG5cclxuICAgICAgICAvLyDmk43kvZzmlofmnKwtLeivu+WPlueUqOaIt+S/oeaBr1xyXG4gICBcclxuICAgICAgICAvLyAvLyDotKblj7flr4bnoIHnmbvlvZVcclxuICAgICAgICAvLyB0aGlzLmxvZ2luKCk7XHJcbiAgICAgICAgLy/lgqjlrZjnvJPlrZhcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdmFsdWUpO1xyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG5cclxuICAgICAgICAvLyDkv53lrZjmnIDpq5jliIbliLDmnKzlnLBcclxuICAgICAgICAvLyBjb25zdCBLRVlfQkVTVF9TQ09SRSA9IFwiYmVzdFNjb3JlXCI7XHJcbiAgICAgICAgLy8gbGV0IGJlc3RTY29yZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShLRVlfQkVTVF9TQ09SRSk7XHJcbiAgICAgICAgLy8gaWYgKGJlc3RTY29yZSA9PT0gXCJudWxsXCIgfHwgdGhpcy5zY29yZSA+IGJlc3RTY29yZSkge1xyXG4gICAgICAgIC8vICAgICBiZXN0U2NvcmUgPSB0aGlzLnNjb3JlO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oS0VZX0JFU1RfU0NPUkUsIGJlc3RTY29yZSk7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gICAgdG9rZW5sb2dpbjogZnVuY3Rpb24oKXtcclxuICAgIFxyXG4gICAgICAgIC8vIOiOt+WPluacrOWcsGpzb24gIOS/oeaBr1xyXG4gICAgICAgIC8vIGNjLmxvYWRlci5sb2FkKCBjYy51cmwucmF3KFwicmVzb3VyY2VzL2xvZ2luLmpzb25cIiksZnVuY3Rpb24oZXJyLHJlcyl7ICBcclxuICAgICAgICAvLyBjYy5sb2FkZXIubG9hZFJlcygnbG9naW4uanNvbicsZnVuY3Rpb24oZXJyLHJlcyl7ICAgLy/pu5jorqRyZXNvdXJjZXNcclxuICAgICAgICAvLyAgICAgbGV0IGpzb24gPSByZXMuanNvbjtcclxuICAgICAgICAvLyAgICAgdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAvLyAgICAgICAgICd0b2tlbic6IGpzb24udG9rZW4sXHJcbiAgICAgICAgLy8gICAgIH07XHJcbiAgICAgICAgLy8gICAgIGNjLmxvZyhqc29uLnRva2VuKTsgXHJcbiAgICAgICAgLy8gICAgIHZhciByZXMgPSBodHRwUmVxdWVzdC5odHRwUG9zdCgnaHR0cHM6Ly93d3cubWhlYXJ0Lnh5ei9hcHAvYXBpLXNlcnZlci90b2tlbi1sb2dpbicsIHBhcmFtcyAsZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAvLyAgICAgICAgIGNjLmxvYWRlci5yZWxlYXNlKCdyZXNvdXJjZXMvbG9naW4uanNvbicpOyAvL+mHiuaUvmpzb24g6LWE5rqQXHJcbiAgICAgICAgLy8gICAgICAgICAvLyBpZihjYy5zeXMuaXNOYXRpdmUpeyAgLy8gIGpzYi5maWxlVXRpbHPkuI3mlK/mjIEgd2ViICDor7vlhplcclxuICAgICAgICAvLyAgICAgICAgIC8vICAgICBqc2IuZmlsZVV0aWxzLndyaXRlU3RyaW5nVG9GaWxlKGRhdGEsdG9rZW4pXHJcbiAgICAgICAgLy8gICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gICAgICAgICAvLyBjYy5sb2coZGF0YSk7IFxyXG4gICAgICAgIC8vICAgICAgICAgLy8g5pyq55m75b2V5by55Ye655m75b2VXHJcbiAgICAgICAgLy8gICAgICAgICBpZihkYXRhLmNvZGU9PTApe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vIHRoaXMubG9naW5ib3gubm9kZS5hY3RpdmUgPSBmYWxzZTsgIC8vIOi/m+W6pumakOiXj1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAvLyB9KVxyXG4gICAgIFxyXG4gICAgICAgIHZhciB0b2tlbiA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9rZW4nKTtcclxuXHJcbiAgICAgICAgaWYodG9rZW4pe1xyXG4gICAgICAgICAgICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3QoJ2h0dHBzOi8vd3d3Lm1oZWFydC54eXovYXBwL2FwaS1zZXJ2ZXIvdG9rZW4tbG9naW4nLCB7J3Rva2VuJzp0b2tlbn0gLGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvYWRlci5yZWxlYXNlKCdyZXNvdXJjZXMvbG9naW4uanNvbicpOyAvL+mHiuaUvmpzb24g6LWE5rqQXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYoY2Muc3lzLmlzTmF0aXZlKXsgIC8vICBqc2IuZmlsZVV0aWxz5LiN5pSv5oyBIHdlYiAg6K+75YaZXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGpzYi5maWxlVXRpbHMud3JpdGVTdHJpbmdUb0ZpbGUoZGF0YSx0b2tlbilcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKGRhdGEpOyBcclxuICAgICAgICAgICAgICAgICAgICAvLyDnmbvlvZXmiJDlip9cclxuICAgICAgICAgICAgICAgICAgICBpZihkYXRhLmNvZGU9PTEpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy/lrprkvY3lvLnlh7rnqpflj6NcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHVzZXJfc3RhdHVzICA9Y2MuZmluZChcIkNhbnZhcy9zZXJ2ZXIvdXNlcl9zdGF0dXNcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfc3RhdHVzLmFjdGl2ZT10cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdXNlcl9waG9uZSAgPWNjLmZpbmQoXCJDYW52YXMvc2VydmVyL3VzZXJfc3RhdHVzL3VzZXJfcGhvbmVcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsb2dpbm5hbWUgPSAgZGF0YS5kYXRhLnVzZXJpbmZvLmxvZ2lubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5YW25Litc2xpY2Uoc3RhcnQsIGVuZCnvvJrnlKjkuo7mj5Dlj5blrZfnrKbkuLLnmoTniYfmrrVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc3RyLnNsaWNlKDEpIOaMh+S4i+agh+S4ujHkuYvlkI7nmoTmiYDmnInlhYPntKBcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBob25lID0gbG9naW5uYW1lLnNsaWNlKDAsMykgKyBcIioqKipcIiArIGxvZ2lubmFtZS5zbGljZSg3LDEwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJfcGhvbmUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9cGhvbmU7XHJcbiAgXHJcbiAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH0gXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIGxvZ2luOiBmdW5jdGlvbigpe1xyXG4gICAgXHJcbiAgICAvLyAgICB2YXIgbG9naW5uYW1lID0gdGhpcy5yZWdpc3Rlcl9sb2dpbl9uYW1lLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XHJcbiAgICAvLyAgICB2YXIgcGFzc3dvcmQgPSB0aGlzLnJlZ2lzdGVyX2xvZ2luX3Bhc3N3b3JkLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XHJcbiAgICAvLyAgICAgdmFyIHBhcmFtcyA9IHtcclxuICAgIC8vICAgICAgICAgJ2xvZ2lubmFtZSc6IGxvZ2lubmFtZSxcclxuICAgIC8vICAgICAgICAgJ3Bhc3N3b3JkJzogcGFzc3dvcmQsXHJcbiAgICAvLyAgICAgICAgIC8vICdsb2dpbm5hbWUnOiAneWluY2FuMTk5MycsXHJcbiAgICAvLyAgICAgICAgIC8vICdwYXNzd29yZCc6IDEyMzQ1NixcclxuICAgIC8vICAgICB9O1xyXG4gICAgLy8gICAgIHZhciBfdGhpcz0gdGhpcztcclxuICAgIC8vICAgICBodHRwUmVxdWVzdC5odHRwUG9zdCgnaHR0cHM6Ly93d3cubWhlYXJ0Lnh5ei9hcHAvYXBpLXNlcnZlci9sb2dpbicsIHBhcmFtcyAsZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgIC8vICAgICAgICAgY2MubG9nKGRhdGEpOyBcclxuICAgIC8vICAgICAgICAgaWYoZGF0YS5jb2RlPT0xKXtcclxuICAgIC8vICAgICAgICAgICAgIC8vIF90aGlzLnJlZ2lzdGVyX2FsZXJ0LmNvbG9yID0gIG5ldyBjYy5jb2xvcignI0JERkYwMCcpO1xyXG4gICAgLy8gICAgICAgICAgICAgX3RoaXMucmVnaXN0ZXJfYWxlcnQuc3RyaW5nID0nJztcclxuICAgIC8vICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCBkYXRhLmRhdGEudG9rZW4pO1xyXG4gICAgLy8gICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2dpbm5hbWUnLCBsb2dpbm5hbWUpO1xyXG4gICAgLy8gICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwYXNzd29yZCcsIHBhc3N3b3JkKTtcclxuICAgIC8vICAgICAgICAgICAgIF90aGlzLm5vZGUuYWN0aXZlID1mYWxzZTtcclxuICAgIC8vICAgICAgICAgfWVsc2V7XHJcbiAgICAvLyAgICAgICAgICAgICBfdGhpcy5yZWdpc3Rlcl9hbGVydC5zdHJpbmcgPSfotKblj7flr4bnoIHplJnor68hJztcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAvL+aTjeS9nOaWh+acrC0t5L+u5pS555So5oi35L+h5oGvXHJcbiAgICAvLyAgICAgfSk7XHJcblxyXG4gICAgLy8gfSxcclxuXHJcbiAgICBidG5DbGljazE6IGZ1bmN0aW9uIChldmVudCwgY3VzdG9tRXZlbnREYXRhKSB7XHJcbiAgICAgICAgLy8gLy8g6K+35rGC55m75b2V5o6l5Y+jXHJcbiAgICAgICAgLy8gdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAvLyAgICAgICAgICdsb2dpbm5hbWUnOiAneWluY2FuMTk5MycsXHJcbiAgICAgICAgLy8gICAgICAgICAncGFzc3dvcmQnOiAxMjM0NTYsXHJcbiAgICAgICAgLy8gICAgICAgICAnc2VydmVyaWQnOiAxLFxyXG4gICAgICAgIC8vIH07XHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwYXJhbXMnLCBKU09OLnN0cmluZ2lmeShwYXJhbXMpKTtcclxuICAgICAgICAvLyB2YXIgcGFyYW1zID0gSlNPTi5wYXJzZShjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwYXJhbXNcIikpO1xyXG4gICAgICAgIHZhciB0b2tlbiA9Y2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpO1xyXG4gICAgXHJcbiAgICAgICAgLy8gY2MubG9nKHZhbHVlKTsgXHJcbiAgICAgICAgLy8gbGV0IGh0dHBSZXF1ZXN0ID0gIG5ldyBIdHRwSGVscGVyKCk7ICBcclxuICAgICAgICBodHRwUmVxdWVzdC5odHRwUG9zdCgnaHR0cHM6Ly93d3cubWhlYXJ0Lnh5ei9hcHAvYXBpLXNlcnZlci91c2VyLWxvZ2luJywgeyd0b2tlbic6dG9rZW59ICxmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAvLyBjYy5sb2coZGF0YSk7IFxyXG4gICAgICAgICAgICBpZihkYXRhLmNvZGU9PTApeyAvLyDnmbvlvZXlpLHotKXvvIzmiJbmnKzlnLDmlbDmja7lpLHmlYhcclxuICAgICAgICAgICAgICAgIC8vIOW8ueeql1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIC8vIOiuvue9ruacjeWKoeWZqFxyXG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZXJ2ZXInLCBKU09OLnN0cmluZ2lmeShkYXRhLmRhdGEuc2VydmVyKSk7XHJcbiAgICAgICAgICAgICAgICBpZihkYXRhLmNvZGU9PTEpey8vIOeZu+W9leaIkOWKn++8jOi/m+WFpea4uOaIj1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhkYXRhLmRhdGEudXNlcmluZm8pOyBcclxuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJpbmZvJywgSlNPTi5zdHJpbmdpZnkoZGF0YS5kYXRhLnVzZXJpbmZvKSk7IFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnaG9tZS9kYXRpbmcnKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJpbmZvJywgSlNPTi5zdHJpbmdpZnkoZGF0YS5kYXRhLnVzZXJpbmZvKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7IC8v6K+75Y+W5pWw5o2uXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZihkYXRhLmNvZGU9PTIpeyAvLyDnmbvlvZXmiJDlip/vvIzmnKrlrprkuYnop5LoibJcclxuICAgICAgICAgICAgICAgICAgICAvLyDov5vlhaXlrprkuYnop5LoibLnlYzpnaIgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBzZXJ2ZXIgPSBKU09OLnBhcnNlKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VydmVyJykpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLmxvZyhzZXJ2ZXIpOyBcclxuICAgICAgICAgICAgICAgICAgICAvLyDliJvlu7rop5LoibJcclxuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ3JlZ2lzdGVyJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy/ov5nph4wgZXZlbnQg5piv5LiA5LiqIFRvdWNoIEV2ZW50IOWvueixoe+8jOS9oOWPr+S7pemAmui/hyBldmVudC50YXJnZXQg5Y+W5Yiw5LqL5Lu255qE5Y+R6YCB6IqC54K5XHJcbiAgICAgICAgLy8gdmFyIG5vZGUgPSBldmVudC50YXJnZXQ7XHJcbiAgICAgICAgLy8gdmFyIGJ1dHRvbiA9IG5vZGUuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XHJcbiAgICAgICAgLy/ov5nph4znmoQgY3VzdG9tRXZlbnREYXRhIOWPguaVsOWwseetieS6juS9oOS5i+WJjeiuvue9rueahCBcImNsaWNrMSB1c2VyIGRhdGFcIlxyXG4gICAgICAgIC8vIGNjLmxvZyhcIm5vZGU9XCIsIG5vZGUubmFtZSwgXCIgZXZlbnQ9XCIsIGV2ZW50LnR5cGUsIFwiIGRhdGE9XCIsIGN1c3RvbUV2ZW50RGF0YSk7XHJcbiAgICB9LFxyXG5cclxuICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoZXZlbnQpIHtcclxuICAgICAgICAvLyBjYy5sb2coZGF0YSlcclxuICAgICAgICAvLyB2YXIgdXNlckNvdW50ID0gIGNjLmZpbmQoXCJDYW52YXMvZ3JvdW5kL2VkaXRib3hfY291bnRcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZztcclxuICAgICAgICAvLyB2YXIgdXNlclBhc3N3YXJkID0gIGNjLmZpbmQoXCJDYW52YXMvZ3JvdW5kL2VkaXRib3hfcGFzc3dhcmRcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZztcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIueUqOaIt+i0puWPt++8mlwiK3VzZXJDb3VudCsgXCLnlKjmiLflr4bnoIHvvJpcIisgdXNlclBhc3N3YXJkKTtcclxuICAgICAgICAvLyBIdHRwSGVscC5sb2dpbih1c2VyQ291bnQsdXNlclBhc3N3YXJkLGZ1bmN0aW9uKGlzU3VjY2VzcyxEYXRhKXtcclxuICAgICAgICAvLyAgICAgdmFyIGluZm8gPSBEYXRhO1xyXG4gICAgICAgIC8vICAgICBpZih0cnVlID09IGlzU3VjY2Vzcyl7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2luICBzdWNjZXNzISEhXCIpO1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coaW5mbyk7XHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby51c2VybmFtZSA9IGluZm8udXNlcm5hbWU7XHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby5nYW1lcG9pbnQgPSBpbmZvLmdhbWVwb2ludDtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnNrZXkgPSBpbmZvLnNrZXk7XHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby51c2VyaWQgPSBpbmZvLnVzZXJpZDtcclxuIFxyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8ubW9uZXkgPSBpbmZvLm1vbmV5O1xyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8udXNlcmlkID0gaW5mby51c2VyaWQ7XHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby5wYXNzd29yZCA9IGluZm8ucGFzc3dvcmQ7XHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby5zYWx0ID0gaW5mby5zYWx0O1xyXG4gXHJcbiAgICAgICAgLy8gICAgICAgICAvL+eZu+W9leaIkOWKn+WQjuWKoOi9veWcsOWbvui1hOa6kFxyXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtYXAnKTtcclxuICAgICAgICAvLyAgICAgfWVsc2V7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcImxvZ2luICBmaWxlZCEhIVwiKVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgXHJcbiAgICB9LFxyXG4gXHJcbiAgICBzdGFydCAoKSB7XHJcbiBcclxuICAgIH0sXHJcbiBcclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG5cclxuICAgIHNob3dfZGxnICgpIHtcclxuIFxyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPXRydWU7XHJcblxyXG4gICAgfSxcclxuICAgIGhpZGRlbl9kbGcgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPWZhbHNlO1xyXG4gICAgfVxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/login/button_check.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '59db4kGzMNC6oyQTKOxxvj5', 'button_check');
// Script/login/button_check.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {// scorllview:cc.ScorllView
  },
  // LIFE-CYCLE CALLBACKS:
  // cc.loader.releaseRes("test assets/anim");
  onLoad: function onLoad() {},
  start: function start() {},
  // gonggao_sz(){
  //         var tips  =cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
  //         tips.getComponent(cc.Label).string=cc.sys.localStorage.getItem('gonggao_sz');
  // },
  // gonggao_sx(){
  //     var tips  =cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
  //     tips.getComponent(cc.Label).string=cc.sys.localStorage.getItem('gonggao_sx');
  // },
  // gonggao_gx(){
  //     var tips  =cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
  //     tips.getComponent(cc.Label).string=cc.sys.localStorage.getItem('gonggao_gx');
  // },
  // gonggao_lx(){
  //     var tips  =cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
  //     tips.getComponent(cc.Label).string=cc.sys.localStorage.getItem('gonggao_lx');
  // },
  show_dlg: function show_dlg() {
    this.node.active = true;
  },
  hidden_dlg: function hidden_dlg() {
    this.node.active = false;
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcYnV0dG9uX2NoZWNrLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwic3RhcnQiLCJzaG93X2RsZyIsIm5vZGUiLCJhY3RpdmUiLCJoaWRkZW5fZGxnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQURRLEdBSFA7QUFPTDtBQUNBO0FBQ0FDLEVBQUFBLE1BVEssb0JBU0ssQ0FFVCxDQVhJO0FBYUxDLEVBQUFBLEtBYkssbUJBYUksQ0FFUixDQWZJO0FBZ0JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0FDLEVBQUFBLFFBbkNLLHNCQW1DTztBQUNSLFNBQUtDLElBQUwsQ0FBVUMsTUFBVixHQUFrQixJQUFsQjtBQUNILEdBckNJO0FBc0NMQyxFQUFBQSxVQXRDSyx3QkFzQ1M7QUFDVixTQUFLRixJQUFMLENBQVVDLE1BQVYsR0FBa0IsS0FBbEI7QUFDSCxHQXhDSSxDQXlDTDs7QUF6Q0ssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBzY29ybGx2aWV3OmNjLlNjb3JsbFZpZXdcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICAvLyBjYy5sb2FkZXIucmVsZWFzZVJlcyhcInRlc3QgYXNzZXRzL2FuaW1cIik7XHJcbiAgICBvbkxvYWQgKCkge1xyXG4gXHJcbiAgICB9LFxyXG4gXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuICAgIC8vIGdvbmdnYW9fc3ooKXtcclxuICAgIC8vICAgICAgICAgdmFyIHRpcHMgID1jYy5maW5kKFwiQ2FudmFzL3RpcHMvZ29uZ2dhb190aXBzX3Njb3JsbHZpZXcvdmlldy9nb25nZ2FvX3RpcHNcIik7XHJcbiAgICAvLyAgICAgICAgIHRpcHMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9Y2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnb25nZ2FvX3N6Jyk7XHJcbiAgICAvLyB9LFxyXG4gICAgLy8gZ29uZ2dhb19zeCgpe1xyXG4gXHJcbiAgICAvLyAgICAgdmFyIHRpcHMgID1jYy5maW5kKFwiQ2FudmFzL3RpcHMvZ29uZ2dhb190aXBzX3Njb3JsbHZpZXcvdmlldy9nb25nZ2FvX3RpcHNcIik7XHJcbiAgICAvLyAgICAgdGlwcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1jYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dvbmdnYW9fc3gnKTtcclxuICAgIC8vIH0sXHJcbiAgICAvLyBnb25nZ2FvX2d4KCl7XHJcbiBcclxuICAgIC8vICAgICB2YXIgdGlwcyAgPWNjLmZpbmQoXCJDYW52YXMvdGlwcy9nb25nZ2FvX3RpcHNfc2Nvcmxsdmlldy92aWV3L2dvbmdnYW9fdGlwc1wiKTtcclxuICAgIC8vICAgICB0aXBzLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ29uZ2dhb19neCcpO1xyXG4gICAgLy8gfSxcclxuICAgIC8vIGdvbmdnYW9fbHgoKXtcclxuIFxyXG4gICAgLy8gICAgIHZhciB0aXBzICA9Y2MuZmluZChcIkNhbnZhcy90aXBzL2dvbmdnYW9fdGlwc19zY29ybGx2aWV3L3ZpZXcvZ29uZ2dhb190aXBzXCIpO1xyXG4gICAgLy8gICAgIHRpcHMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9Y2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnb25nZ2FvX2x4Jyk7XHJcbiAgICAvLyB9LFxyXG4gICAgc2hvd19kbGcgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPXRydWU7XHJcbiAgICB9LFxyXG4gICAgaGlkZGVuX2RsZyAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9ZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/login/popup_dlg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f10d1IxjONKCYev3tfm660U', 'popup_dlg');
// Script/login/popup_dlg.js

"use strict";

// popup_dlg.js
cc.Class({
  "extends": cc.Component,
  properties: {
    // foo: {
    //    default: null,      // The default value will be used only when the component attaching
    //                           to a node for the first time
    //    url: cc.Texture2D,  // optional, default is typeof default
    //    serializable: true, // optional, default is true
    //    visible: true,      // optional, default is true
    //    displayName: 'Foo', // optional
    //    readonly: false,    // optional, default is false
    // },
    // ...
    mask: {
      type: cc.Node,
      "default": null
    },
    mask_opacity: 128,
    content: {
      type: cc.Node,
      "default": null
    }
  },
  // use this for initialization
  onLoad: function onLoad() {},
  show_dlg: function show_dlg() {
    this.node.active = true; // mask ????????????;

    this.mask.opacity = 0;
    var fin = cc.fadeTo(0.3, this.mask_opacity);
    this.mask.runAction(fin); // dlg????????????

    this.content.scale = 0;
    var s = cc.scaleTo(0.4, 1).easing(cc.easeBackOut());
    this.content.runAction(s);
  },
  hide_dlg: function hide_dlg() {
    // 
    var fout = cc.fadeOut(0.3);
    this.mask.runAction(fout);
    var s = cc.scaleTo(0.3, 0).easing(cc.easeBackIn());
    var end_func = cc.callFunc(function () {
      this.node.active = false;
    }.bind(this));
    var seq = cc.sequence([s, end_func]);
    this.content.runAction(seq);
  } // called every frame, uncomment this function to activate update callback
  // update: function (dt) {
  // },

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxccG9wdXBfZGxnLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwibWFzayIsInR5cGUiLCJOb2RlIiwibWFza19vcGFjaXR5IiwiY29udGVudCIsIm9uTG9hZCIsInNob3dfZGxnIiwibm9kZSIsImFjdGl2ZSIsIm9wYWNpdHkiLCJmaW4iLCJmYWRlVG8iLCJydW5BY3Rpb24iLCJzY2FsZSIsInMiLCJzY2FsZVRvIiwiZWFzaW5nIiwiZWFzZUJhY2tPdXQiLCJoaWRlX2RsZyIsImZvdXQiLCJmYWRlT3V0IiwiZWFzZUJhY2tJbiIsImVuZF9mdW5jIiwiY2FsbEZ1bmMiLCJiaW5kIiwic2VxIiwic2VxdWVuY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQ0EsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFFTkMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUNEO0FBQ0M7QUFDRDtBQUNDO0FBQ0M7QUFDRDtBQUNBO0FBQ0M7QUFDQUMsSUFBQUEsSUFBSSxFQUFFO0FBQ0ZDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTSxJQURQO0FBRUosaUJBQVM7QUFGTCxLQVhDO0FBZ0JQQyxJQUFBQSxZQUFZLEVBQUUsR0FoQlA7QUFrQlJDLElBQUFBLE9BQU8sRUFBRTtBQUNMSCxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ00sSUFESjtBQUVKLGlCQUFTO0FBRkw7QUFsQkQsR0FGTjtBQTJCTjtBQUNDRyxFQUFBQSxNQUFNLEVBQUUsa0JBQVksQ0FFcEIsQ0E5Qks7QUFnQ0xDLEVBQUFBLFFBQVEsRUFBRSxvQkFBVztBQUNqQixTQUFLQyxJQUFMLENBQVVDLE1BQVYsR0FBbUIsSUFBbkIsQ0FEaUIsQ0FFakI7O0FBQ0EsU0FBS1IsSUFBTCxDQUFVUyxPQUFWLEdBQW9CLENBQXBCO0FBQ0EsUUFBSUMsR0FBRyxHQUFHZCxFQUFFLENBQUNlLE1BQUgsQ0FBVSxHQUFWLEVBQWUsS0FBS1IsWUFBcEIsQ0FBVjtBQUNELFNBQUtILElBQUwsQ0FBVVksU0FBVixDQUFvQkYsR0FBcEIsRUFMa0IsQ0FNckI7O0FBRUcsU0FBS04sT0FBTCxDQUFhUyxLQUFiLEdBQXFCLENBQXJCO0FBQ0EsUUFBSUMsQ0FBQyxHQUFHbEIsRUFBRSxDQUFDbUIsT0FBSCxDQUFXLEdBQVgsRUFBZ0IsQ0FBaEIsRUFBbUJDLE1BQW5CLENBQTBCcEIsRUFBRSxDQUFDcUIsV0FBSCxFQUExQixDQUFSO0FBQ0MsU0FBS2IsT0FBTCxDQUFhUSxTQUFiLENBQXVCRSxDQUF2QjtBQUNILEdBM0NJO0FBNkNMSSxFQUFBQSxRQUFRLEVBQUUsb0JBQVc7QUFDakI7QUFDQSxRQUFJQyxJQUFJLEdBQUd2QixFQUFFLENBQUN3QixPQUFILENBQVcsR0FBWCxDQUFYO0FBQ0YsU0FBS3BCLElBQUwsQ0FBVVksU0FBVixDQUFvQk8sSUFBcEI7QUFFQyxRQUFJTCxDQUFDLEdBQUdsQixFQUFFLENBQUNtQixPQUFILENBQVcsR0FBWCxFQUFnQixDQUFoQixFQUFtQkMsTUFBbkIsQ0FBMEJwQixFQUFFLENBQUN5QixVQUFILEVBQTFCLENBQVI7QUFDQSxRQUFJQyxRQUFRLEdBQUcxQixFQUFFLENBQUMyQixRQUFILENBQVksWUFBVztBQUNqQyxXQUFLaEIsSUFBTCxDQUFVQyxNQUFWLEdBQW1CLEtBQW5CO0FBQ0gsS0FGeUIsQ0FFeEJnQixJQUZ3QixDQUVuQixJQUZtQixDQUFaLENBQWY7QUFJQyxRQUFJQyxHQUFHLEdBQUc3QixFQUFFLENBQUM4QixRQUFILENBQVksQ0FBQ1osQ0FBRCxFQUFJUSxRQUFKLENBQVosQ0FBVjtBQUNELFNBQUtsQixPQUFMLENBQWFRLFNBQWIsQ0FBdUJhLEdBQXZCO0FBQ0YsR0F6REksQ0EwREw7QUFDQTtBQUVBOztBQTdESyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBwb3B1cF9kbGcuanNcclxuIGNjLkNsYXNzKHtcclxuICAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgZGVmYXVsdDogbnVsbCwgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICB1cmw6IGNjLlRleHR1cmUyRCwgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAvLyAgICBzZXJpYWxpemFibGU6IHRydWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyAgICB2aXNpYmxlOiB0cnVlLCAgICAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAgLy8gICAgZGlzcGxheU5hbWU6ICdGb28nLCAvLyBvcHRpb25hbFxyXG4gICAgICAgIC8vICAgIHJlYWRvbmx5OiBmYWxzZSwgICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgZmFsc2VcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgICAvLyAuLi5cclxuICAgICAgICAgbWFzazoge1xyXG4gICAgICAgICAgICAgdHlwZTogY2MuTm9kZSxcclxuICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICB9LFxyXG4gXHJcbiAgICAgICAgIG1hc2tfb3BhY2l0eTogMTI4LFxyXG4gXHJcbiAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICB0eXBlOiBjYy5Ob2RlLFxyXG4gICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgLy8gdXNlIHRoaXMgZm9yIGluaXRpYWxpemF0aW9uXHJcbiAgICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICAgc2hvd19kbGc6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgLy8gbWFzayDmuJDlj5jlh7rmnaU7XHJcbiAgICAgICAgIHRoaXMubWFzay5vcGFjaXR5ID0gMDtcclxuICAgICAgICAgdmFyIGZpbiA9IGNjLmZhZGVUbygwLjMsIHRoaXMubWFza19vcGFjaXR5KTtcclxuICAgICAgICB0aGlzLm1hc2sucnVuQWN0aW9uKGZpbik7XHJcbiAgICAgLy8gZGxn55Sx5bCP5Yiw5aSnXHJcblxyXG4gICAgICAgIHRoaXMuY29udGVudC5zY2FsZSA9IDA7XHJcbiAgICAgICAgdmFyIHMgPSBjYy5zY2FsZVRvKDAuNCwgMSkuZWFzaW5nKGNjLmVhc2VCYWNrT3V0KCkpO1xyXG4gICAgICAgICB0aGlzLmNvbnRlbnQucnVuQWN0aW9uKHMpO1xyXG4gICAgIH0sXHJcbiBcclxuICAgICBoaWRlX2RsZzogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgIC8vIFxyXG4gICAgICAgICB2YXIgZm91dCA9IGNjLmZhZGVPdXQoMC4zKTtcclxuICAgICAgIHRoaXMubWFzay5ydW5BY3Rpb24oZm91dCk7XHJcblxyXG4gICAgICAgIHZhciBzID0gY2Muc2NhbGVUbygwLjMsIDApLmVhc2luZyhjYy5lYXNlQmFja0luKCkpO1xyXG4gICAgICAgIHZhciBlbmRfZnVuYyA9IGNjLmNhbGxGdW5jKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICB9LmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICAgdmFyIHNlcSA9IGNjLnNlcXVlbmNlKFtzLCBlbmRfZnVuY10pO1xyXG4gICAgICAgIHRoaXMuY29udGVudC5ydW5BY3Rpb24oc2VxKTtcclxuICAgICB9LFxyXG4gICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuXHJcbiAgICAgLy8gfSxcclxuIH0pOyJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/login/button_xieyi.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3c4c53ciJpKSqPn6g8QBdAn', 'button_xieyi');
// Script/login/button_xieyi.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {// scorllview:cc.ScorllView
  },
  // LIFE-CYCLE CALLBACKS:
  // cc.loader.releaseRes("test assets/anim");
  onLoad: function onLoad() {},
  start: function start() {},
  // gonggao_sz(){
  //         var tips  =cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
  //         tips.getComponent(cc.Label).string=cc.sys.localStorage.getItem('gonggao_sz');
  // },
  // gonggao_sx(){
  //     var tips  =cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
  //     tips.getComponent(cc.Label).string=cc.sys.localStorage.getItem('gonggao_sx');
  // },
  // gonggao_gx(){
  //     var tips  =cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
  //     tips.getComponent(cc.Label).string=cc.sys.localStorage.getItem('gonggao_gx');
  // },
  // gonggao_lx(){
  //     var tips  =cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
  //     tips.getComponent(cc.Label).string=cc.sys.localStorage.getItem('gonggao_lx');
  // },
  show_dlg: function show_dlg() {
    this.node.active = true;
  },
  hidden_dlg: function hidden_dlg() {
    this.node.active = false;
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcYnV0dG9uX3hpZXlpLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwic3RhcnQiLCJzaG93X2RsZyIsIm5vZGUiLCJhY3RpdmUiLCJoaWRkZW5fZGxnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQURRLEdBSFA7QUFPTDtBQUNBO0FBQ0FDLEVBQUFBLE1BVEssb0JBU0ssQ0FFVCxDQVhJO0FBYUxDLEVBQUFBLEtBYkssbUJBYUksQ0FFUixDQWZJO0FBZ0JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0FDLEVBQUFBLFFBbkNLLHNCQW1DTztBQUNSLFNBQUtDLElBQUwsQ0FBVUMsTUFBVixHQUFrQixJQUFsQjtBQUNILEdBckNJO0FBc0NMQyxFQUFBQSxVQXRDSyx3QkFzQ1M7QUFDVixTQUFLRixJQUFMLENBQVVDLE1BQVYsR0FBa0IsS0FBbEI7QUFDSCxHQXhDSSxDQXlDTDs7QUF6Q0ssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBzY29ybGx2aWV3OmNjLlNjb3JsbFZpZXdcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICAvLyBjYy5sb2FkZXIucmVsZWFzZVJlcyhcInRlc3QgYXNzZXRzL2FuaW1cIik7XHJcbiAgICBvbkxvYWQgKCkge1xyXG4gXHJcbiAgICB9LFxyXG4gXHJcbiAgICBzdGFydCAoKSB7XHJcblxyXG4gICAgfSxcclxuICAgIC8vIGdvbmdnYW9fc3ooKXtcclxuICAgIC8vICAgICAgICAgdmFyIHRpcHMgID1jYy5maW5kKFwiQ2FudmFzL3RpcHMvZ29uZ2dhb190aXBzX3Njb3JsbHZpZXcvdmlldy9nb25nZ2FvX3RpcHNcIik7XHJcbiAgICAvLyAgICAgICAgIHRpcHMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9Y2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnb25nZ2FvX3N6Jyk7XHJcbiAgICAvLyB9LFxyXG4gICAgLy8gZ29uZ2dhb19zeCgpe1xyXG4gXHJcbiAgICAvLyAgICAgdmFyIHRpcHMgID1jYy5maW5kKFwiQ2FudmFzL3RpcHMvZ29uZ2dhb190aXBzX3Njb3JsbHZpZXcvdmlldy9nb25nZ2FvX3RpcHNcIik7XHJcbiAgICAvLyAgICAgdGlwcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1jYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dvbmdnYW9fc3gnKTtcclxuICAgIC8vIH0sXHJcbiAgICAvLyBnb25nZ2FvX2d4KCl7XHJcbiBcclxuICAgIC8vICAgICB2YXIgdGlwcyAgPWNjLmZpbmQoXCJDYW52YXMvdGlwcy9nb25nZ2FvX3RpcHNfc2Nvcmxsdmlldy92aWV3L2dvbmdnYW9fdGlwc1wiKTtcclxuICAgIC8vICAgICB0aXBzLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ29uZ2dhb19neCcpO1xyXG4gICAgLy8gfSxcclxuICAgIC8vIGdvbmdnYW9fbHgoKXtcclxuIFxyXG4gICAgLy8gICAgIHZhciB0aXBzICA9Y2MuZmluZChcIkNhbnZhcy90aXBzL2dvbmdnYW9fdGlwc19zY29ybGx2aWV3L3ZpZXcvZ29uZ2dhb190aXBzXCIpO1xyXG4gICAgLy8gICAgIHRpcHMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9Y2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnb25nZ2FvX2x4Jyk7XHJcbiAgICAvLyB9LFxyXG4gICAgc2hvd19kbGcgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPXRydWU7XHJcbiAgICB9LFxyXG4gICAgaGlkZGVuX2RsZyAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9ZmFsc2U7XHJcbiAgICB9XHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/login/loading.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '77e07WCeNBJrJqHjwTfqjkf', 'loading');
// Script/login/loading.js

"use strict";

var self = void 0;
cc.Class({
  "extends": cc.Component,
  properties: {
    speed: 1,
    progressBar: {
      "default": null,
      type: cc.ProgressBar,
      text: cc.Sprite
    },
    audio: {
      "default": null,
      type: cc.AudioClip
    },
    play: function play() {
      this.audioSource.play();
    },
    pause: function pause() {
      this.audioSource.pause();
    },
    bmp_font: {
      "default": null,
      type: cc.Label
    } // //????????????
    // headpic:{
    //     type:cc.SpriteFrame,
    //     default:null,
    // },
    //??????
    // background:{
    //     default:null,
    //     type:cc.Sprite,
    // },

  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    console.log(this.node);
    console.log('??????????????????'); // // ?????? url ?????????????????????????????????????????????????????????????????????
    // remoteUrl = "http://unknown.org/emoji?id=124982374";
    // cc.loader.load({url: remoteUrl, type: 'png'}, function () {
    //     // Use texture to create sprite frame
    // });
    // // ????????????????????????????????????????????????????????????
    // var absolutePath = "/dara/data/some/path/to/image.png"
    // cc.loader.load(absolutePath, function () {
    //     // Use texture to create sprite frame
    // });

    console.log('??????????????????????????????????????????...'); // ???????????????

    this._urls = [// {url:'https://www.mheart.xyz/app/api/file-content?url=https://www.mheart.xyz/app/loading/jianzhicangmang.mp3', type:'mp3'},
      // {url:'https://www.mheart.xyz/app/api/file-content?url=https://www.mheart.xyz/app/loading/loading.jpg', type:'jpg'},
      // {url:'https://www.mheart.xyz/app/api/file-content?url=http://127.0.0.1/123.jpg', type:'jpg'},
      // {url:'https://www.mheart.xyz/app/api/file-content?url=http://127.0.0.1/ccc.png', type:'png'},
      // {url:'https://www.mheart.xyz/app/api/file-content?url=http://127.0.0.1/jq22honey.zip', type:'zip'},
      // {url:'https://www.mheart.xyz/app/api/file-content?url=http://127.0.0.1/monster.zip', type:'zip'},
      // {url:'https://www.mheart.xyz/app/api/file-content?url=http://127.0.0.1???????????????????????????ip)/image2.png', type:'png'}, 
    ];
    console.log(this.progressBar); // console.log( this.sprite); 

    this.resource = null;
    this.progressBar.progress = 0;
    this.bmp_font.string = "0%"; // this.ProgressBar.progress += math_random / 100; 

    this._clearAll();

    cc.loader.load(this._urls, this._progressCallback.bind(this), this._completeCallback.bind(this));
  },
  start: function start() {},
  _clearAll: function _clearAll() {
    for (var i = 0; i < this._urls.length; ++i) {
      var url = this._urls[i];
      cc.loader.release(url);
    }
  },
  _progressCallback: function _progressCallback(completeCount, totalCount, res) {
    //??????????????????
    // console.log('?????? ' + completeCount + '??????????????????????????????...');
    // console.log('??????????????????');
    this.progress = completeCount / totalCount;
    this.resource = res;
    this.completeCount = completeCount;
    this.totalCount = totalCount; // ??????????????????cc.Label??????, ??????????????????
    //?????????????????????cc.Label??????

    var sys_label = this.node.getChildByName("sys_label").getComponent(cc.Label);
    sys_label.string = parseInt(this.progress * 100) + '%';

    if (this.resource.type == 'json') {// console.log(this.resource);  // json
      // ??????????????????mp3???????????????
      // this.audio.clip = ret;
      // this.audio.play();
    }

    if (this.resource.type == 'png' || this.resource.type == 'jpg') {
      console.log(res); // json
      //res???cc.Texture2D???????????? 
      //   this.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(res)
      // this.headpic.spriteFrame.setTexture(res);
      // this.node.spriteFrame.setTexture(res);
      // this.sprite.spriteFrame.setContentSize(res.getContentSize());
      // this.node.getComponent(cc.Sprite).spriteFrame = res;
    }

    if (this.resource.type == 'mp3') {
      console.log(res); // mp3
      // this.audio.clip = res;
      // this.audio.play();
      // ??????????????????mp3???????????????

      this.current = cc.audioEngine.play(res.url, false, 1);
    }
  },
  _completeCallback: function _completeCallback(err, texture) {
    //??????????????????
    this.loadnextScene(); // ???????????? 
  },
  update: function update(dt) {
    if (!this.resource) {
      return;
    }

    var progress = this.progressBar.progress;

    if (progress >= 1) {
      console.log('????????????'); //????????????

      this.progressBar.node.active = false; //???????????????

      this.bmp_font.node.active = false; // ????????????

      this.enabled = false;
      return;
    }

    if (progress < this.progress) {
      progress += dt;
    }

    this.progressBar.progress = progress;
  },
  loadnextScene: function loadnextScene() {
    // ???????????????
    cc.director.preloadScene('index', function () {
      cc.log('???????????????'); // // ??????????????????
      // var params = {
      //         'loginname': 'yincan1993',
      //         'password': 123456,
      //         'serverid': 1,
      // };
    });
    var params = cc.sys.localStorage.getItem("params");

    if (params) {
      cc.log('????????????');
      cc.log(params);
      cc.director.loadScene('index'); // cc.sys.localStorage.setItem('params', JSON.stringify(params)); 
    } else {
      cc.log('????????????/??????');
      cc.director.loadScene('index'); // cc.sys.localStorage.setItem('params', JSON.stringify(params));
    }
  } // ?????? changeBj: function(){
  // ????????????var url = 'globalUI/video/gVideoPlayClick';
  // ????????????var _this = this; cc.loader.loadRes(url,cc.SpriteFrame,function(err,spriteFrame)
  // ????????????{ ???
  // ??????????????????_this.isPlay.spriteFrame = spriteFrame;
  // ???????????? });
  // ?????????
  // ????????????//??????????????????
  //         var url = "www.monster.com/web/app/loading.jpg";
  //         cc.loader.load({url: url, type: 'png'}, function(err,img){
  //             var mylogo  = new cc.SpriteFrame(img); 
  //             self.logo.spriteFrame = mylogo;
  //         });
  // ?????????},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcbG9hZGluZy5qcyJdLCJuYW1lcyI6WyJzZWxmIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzcGVlZCIsInByb2dyZXNzQmFyIiwidHlwZSIsIlByb2dyZXNzQmFyIiwidGV4dCIsIlNwcml0ZSIsImF1ZGlvIiwiQXVkaW9DbGlwIiwicGxheSIsImF1ZGlvU291cmNlIiwicGF1c2UiLCJibXBfZm9udCIsIkxhYmVsIiwib25Mb2FkIiwiY29uc29sZSIsImxvZyIsIm5vZGUiLCJfdXJscyIsInJlc291cmNlIiwicHJvZ3Jlc3MiLCJzdHJpbmciLCJfY2xlYXJBbGwiLCJsb2FkZXIiLCJsb2FkIiwiX3Byb2dyZXNzQ2FsbGJhY2siLCJiaW5kIiwiX2NvbXBsZXRlQ2FsbGJhY2siLCJzdGFydCIsImkiLCJsZW5ndGgiLCJ1cmwiLCJyZWxlYXNlIiwiY29tcGxldGVDb3VudCIsInRvdGFsQ291bnQiLCJyZXMiLCJzeXNfbGFiZWwiLCJnZXRDaGlsZEJ5TmFtZSIsImdldENvbXBvbmVudCIsInBhcnNlSW50IiwiY3VycmVudCIsImF1ZGlvRW5naW5lIiwiZXJyIiwidGV4dHVyZSIsImxvYWRuZXh0U2NlbmUiLCJ1cGRhdGUiLCJkdCIsImFjdGl2ZSIsImVuYWJsZWQiLCJkaXJlY3RvciIsInByZWxvYWRTY2VuZSIsInBhcmFtcyIsInN5cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJsb2FkU2NlbmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsSUFBSSxTQUFSO0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxLQUFLLEVBQUUsQ0FEQztBQUVSQyxJQUFBQSxXQUFXLEVBQUM7QUFDUixpQkFBUSxJQURBO0FBRVJDLE1BQUFBLElBQUksRUFBQ04sRUFB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cztcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgc3BlZWQ6IDEsXHJcbiAgICAgICAgcHJvZ3Jlc3NCYXI6e1xyXG4gICAgICAgICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgICAgIHR5cGU6Y2MuUHJvZ3Jlc3NCYXIsXHJcbiAgICAgICAgICAgIHRleHQ6Y2MuU3ByaXRlLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXVkaW86IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBwbGF5OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXVkaW9Tb3VyY2UucGxheSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgcGF1c2U6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy5hdWRpb1NvdXJjZS5wYXVzZSgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm1wX2ZvbnQ6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuTGFiZWwsXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyAvL+m7mOiupOWktOWDj1xyXG4gICAgICAgIC8vIGhlYWRwaWM6e1xyXG4gICAgICAgIC8vICAgICB0eXBlOmNjLlNwcml0ZUZyYW1lLFxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvL+WktOWDj1xyXG4gICAgICAgIC8vIGJhY2tncm91bmQ6e1xyXG4gICAgICAgIC8vICAgICBkZWZhdWx0Om51bGwsXHJcbiAgICAgICAgLy8gICAgIHR5cGU6Y2MuU3ByaXRlLFxyXG4gICAgICAgIC8vIH0sXHJcbiAgICB9LFxyXG5cclxuICAgICAgICBcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuIFxyXG4gICAgb25Mb2FkICgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5vZGUpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5q2j5Zyo5a+55q+U6LWE5rqQJyk7XHJcbiAgICAgICAgICAgIC8vIC8vIOi/nOeoiyB1cmwg5LiN5bim5Zu+54mH5ZCO57yA5ZCN77yM5q2k5pe25b+F6aG75oyH5a6a6L+c56iL5Zu+54mH5paH5Lu255qE57G75Z6LXHJcbiAgICAgICAgICAgIC8vIHJlbW90ZVVybCA9IFwiaHR0cDovL3Vua25vd24ub3JnL2Vtb2ppP2lkPTEyNDk4MjM3NFwiO1xyXG4gICAgICAgICAgICAvLyBjYy5sb2FkZXIubG9hZCh7dXJsOiByZW1vdGVVcmwsIHR5cGU6ICdwbmcnfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gVXNlIHRleHR1cmUgdG8gY3JlYXRlIHNwcml0ZSBmcmFtZVxyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIC8vIOeUqOe7neWvuei3r+W+hOWKoOi9veiuvuWkh+WtmOWCqOWGheeahOi1hOa6kO+8jOavlOWmguebuOWGjFxyXG4gICAgICAgICAgICAvLyB2YXIgYWJzb2x1dGVQYXRoID0gXCIvZGFyYS9kYXRhL3NvbWUvcGF0aC90by9pbWFnZS5wbmdcIlxyXG4gICAgICAgICAgICAvLyBjYy5sb2FkZXIubG9hZChhYnNvbHV0ZVBhdGgsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gICAgIC8vIFVzZSB0ZXh0dXJlIHRvIGNyZWF0ZSBzcHJpdGUgZnJhbWVcclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmraPlnKjliqDovb3lnLrmma/otYTmupDvvIzor7fogJDlv4PnrYnlvoUuLi4nKTtcclxuICAgICAgICAvLyDliqDovb3otYTmupDljIVcclxuICAgICAgICB0aGlzLl91cmxzID0gW1xyXG4gICAgICAgICAgICAvLyB7dXJsOidodHRwczovL3d3dy5taGVhcnQueHl6L2FwcC9hcGkvZmlsZS1jb250ZW50P3VybD1odHRwczovL3d3dy5taGVhcnQueHl6L2FwcC9sb2FkaW5nL2ppYW56aGljYW5nbWFuZy5tcDMnLCB0eXBlOidtcDMnfSxcclxuICAgICAgICAgICAgLy8ge3VybDonaHR0cHM6Ly93d3cubWhlYXJ0Lnh5ei9hcHAvYXBpL2ZpbGUtY29udGVudD91cmw9aHR0cHM6Ly93d3cubWhlYXJ0Lnh5ei9hcHAvbG9hZGluZy9sb2FkaW5nLmpwZycsIHR5cGU6J2pwZyd9LFxyXG4gICAgICAgICAgICAvLyB7dXJsOidodHRwczovL3d3dy5taGVhcnQueHl6L2FwcC9hcGkvZmlsZS1jb250ZW50P3VybD1odHRwOi8vMTI3LjAuMC4xLzEyMy5qcGcnLCB0eXBlOidqcGcnfSxcclxuICAgICAgICAgICAgLy8ge3VybDonaHR0cHM6Ly93d3cubWhlYXJ0Lnh5ei9hcHAvYXBpL2ZpbGUtY29udGVudD91cmw9aHR0cDovLzEyNy4wLjAuMS9jY2MucG5nJywgdHlwZToncG5nJ30sXHJcbiAgICAgICAgICAgIC8vIHt1cmw6J2h0dHBzOi8vd3d3Lm1oZWFydC54eXovYXBwL2FwaS9maWxlLWNvbnRlbnQ/dXJsPWh0dHA6Ly8xMjcuMC4wLjEvanEyMmhvbmV5LnppcCcsIHR5cGU6J3ppcCd9LFxyXG4gICAgICAgICAgICAvLyB7dXJsOidodHRwczovL3d3dy5taGVhcnQueHl6L2FwcC9hcGkvZmlsZS1jb250ZW50P3VybD1odHRwOi8vMTI3LjAuMC4xL21vbnN0ZXIuemlwJywgdHlwZTonemlwJ30sXHJcbiAgICAgICAgICAgIC8vIHt1cmw6J2h0dHBzOi8vd3d3Lm1oZWFydC54eXovYXBwL2FwaS9maWxlLWNvbnRlbnQ/dXJsPWh0dHA6Ly8xMjcuMC4wLjHvvIjov5nph4zloavkvaDnmoTmnI3liqHlmahpcCkvaW1hZ2UyLnBuZycsIHR5cGU6J3BuZyd9LCBcclxuICAgICAgICBdO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCB0aGlzLnByb2dyZXNzQmFyKTsgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coIHRoaXMuc3ByaXRlKTsgXHJcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcyA9MDtcclxuXHJcbiAgICAgICAgdGhpcy5ibXBfZm9udC5zdHJpbmcgPSBcIjAlXCI7XHJcbiAgICAgICAgLy8gdGhpcy5Qcm9ncmVzc0Jhci5wcm9ncmVzcyArPSBtYXRoX3JhbmRvbSAvIDEwMDsgXHJcbiAgICAgICAgdGhpcy5fY2xlYXJBbGwoKTtcclxuICAgICAgIFxyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkKHRoaXMuX3VybHMsIHRoaXMuX3Byb2dyZXNzQ2FsbGJhY2suYmluZCh0aGlzKSwgdGhpcy5fY29tcGxldGVDYWxsYmFjay5iaW5kKHRoaXMpKTtcclxuICAgIH0sXHJcbiBcclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG4gXHJcbiAgICBfY2xlYXJBbGw6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLl91cmxzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgIHZhciB1cmwgPSB0aGlzLl91cmxzW2ldO1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIucmVsZWFzZSh1cmwpO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiBcclxuICAgIF9wcm9ncmVzc0NhbGxiYWNrOiBmdW5jdGlvbihjb21wbGV0ZUNvdW50LCB0b3RhbENvdW50LCByZXMpIHtcclxuICAgICAgICAvL+WKoOi9vei/m+W6puWbnuiwg1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfotYTmupAgJyArIGNvbXBsZXRlQ291bnQgKyAn5Yqg6L295a6M5oiQ77yB6LWE5rqQ5Yqg6L295LitLi4uJyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ+WKoOi9veWcuuaZr+i1hOa6kCcpO1xyXG4gICAgICAgIHRoaXMucHJvZ3Jlc3MgPSBjb21wbGV0ZUNvdW50IC8gdG90YWxDb3VudDtcclxuICAgICAgICB0aGlzLnJlc291cmNlID0gcmVzO1xyXG4gICAgICAgIHRoaXMuY29tcGxldGVDb3VudCA9IGNvbXBsZXRlQ291bnQ7XHJcbiAgICAgICAgdGhpcy50b3RhbENvdW50ID0gdG90YWxDb3VudDtcclxuXHJcbiAgICAgICAgLy8g5Luj56CB6YeM6Z2i6I635Y+WY2MuTGFiZWznu4Tku7YsIOS/ruaUueaWh+acrOWGheWuuVxyXG4gICAgICAgIC8v5Zyo5Luj56CB6YeM6Z2i6I635Y+WY2MuTGFiZWznu4Tku7ZcclxuICAgICAgICB2YXIgc3lzX2xhYmVsID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3lzX2xhYmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAgICAgc3lzX2xhYmVsLnN0cmluZyA9IHBhcnNlSW50KHRoaXMucHJvZ3Jlc3MgKiAxMDApICsgJyUnO1xyXG5cclxuICAgICAgICBpZiggdGhpcy5yZXNvdXJjZS50eXBlPT0nanNvbicpe1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnJlc291cmNlKTsgIC8vIGpzb25cclxuICAgICAgICAgICAgLy8g5LuO5pyN5Yqh5Zmo5Yqg6L29bXAz5p2l6L+b6KGM5pKt5pS+XHJcbiAgICAgICAgICAgIC8vIHRoaXMuYXVkaW8uY2xpcCA9IHJldDtcclxuICAgICAgICAgICAgLy8gdGhpcy5hdWRpby5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCB0aGlzLnJlc291cmNlLnR5cGU9PSdwbmcnfHx0aGlzLnJlc291cmNlLnR5cGU9PSdqcGcnKXtcclxuICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7ICAvLyBqc29uXHJcbiAgICAgICAgICAgIC8vcmVz5pivY2MuVGV4dHVyZTJE6L+Z5qC35a+56LGhIFxyXG4gICAgICAgICAgICAvLyAgIHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZShyZXMpXHJcbiAgICAgICAgICAgIC8vIHRoaXMuaGVhZHBpYy5zcHJpdGVGcmFtZS5zZXRUZXh0dXJlKHJlcyk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5zcHJpdGVGcmFtZS5zZXRUZXh0dXJlKHJlcyk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc3ByaXRlLnNwcml0ZUZyYW1lLnNldENvbnRlbnRTaXplKHJlcy5nZXRDb250ZW50U2l6ZSgpKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gcmVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiggdGhpcy5yZXNvdXJjZS50eXBlPT0nbXAzJyl7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7ICAvLyBtcDNcclxuICAgICAgICAgICAgLy8gdGhpcy5hdWRpby5jbGlwID0gcmVzO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmF1ZGlvLnBsYXkoKTtcclxuICAgICAgICAgICAgLy8g5LuO5pyN5Yqh5Zmo5Yqg6L29bXAz5p2l6L+b6KGM5pKt5pS+XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkocmVzLnVybCwgZmFsc2UsIDEpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgfSxcclxuIFxyXG4gICAgX2NvbXBsZXRlQ2FsbGJhY2s6IGZ1bmN0aW9uKGVyciwgdGV4dHVyZSkge1xyXG4gICAgICAgIC8v5Yqg6L295a6M5oiQ5Zue6LCDXHJcbiAgICAgICAgdGhpcy5sb2FkbmV4dFNjZW5lKCk7ICAvLyDkuIvkuIDlnLrmma8gXHJcbiAgICB9LFxyXG4gXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYoIXRoaXMucmVzb3VyY2Upe1xyXG4gICAgICAgICAgICByZXR1cm4gO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcHJvZ3Jlc3MgPSB0aGlzLnByb2dyZXNzQmFyLnByb2dyZXNzO1xyXG4gICAgICAgIGlmKHByb2dyZXNzID49IDEpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygn5Yqg6L295a6M5oiQJylcclxuICAgICAgICAgICAgLy/liqDovb3lrozmiJBcclxuICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5ub2RlLmFjdGl2ZSA9IGZhbHNlOyAvL+i/m+W6puadoemakOiXj1xyXG4gICAgICAgICAgICB0aGlzLmJtcF9mb250Lm5vZGUuYWN0aXZlID0gZmFsc2U7ICAvLyDov5vluqbpmpDol49cclxuICAgICAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybiA7XHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgaWYocHJvZ3Jlc3MgPCB0aGlzLnByb2dyZXNzKXtcclxuICAgICAgICAgICAgcHJvZ3Jlc3MgKz0gZHQ7XHJcbiAgICAgICAgfVxyXG4gICBcclxuICAgICAgICB0aGlzLnByb2dyZXNzQmFyLnByb2dyZXNzID0gcHJvZ3Jlc3M7XHJcbiAgIFxyXG4gICAgfSxcclxuXHJcbiAgICBsb2FkbmV4dFNjZW5lOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAvLyDnmbvlvZXpooTliqDovb1cclxuICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoJ2luZGV4JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBjYy5sb2coJ+eZu+W9lemihOWKoOi9vScpO1xyXG4gICAgICAgICAgICAvLyAvLyDor7fmsYLnmbvlvZXmjqXlj6NcclxuICAgICAgICAgICAgLy8gdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAnbG9naW5uYW1lJzogJ3lpbmNhbjE5OTMnLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICdwYXNzd29yZCc6IDEyMzQ1NixcclxuICAgICAgICAgICAgLy8gICAgICAgICAnc2VydmVyaWQnOiAxLFxyXG4gICAgICAgICAgICAvLyB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwYXJhbXNcIilcclxuICAgICAgICBpZihwYXJhbXMpe1xyXG4gICAgICAgICAgICBjYy5sb2coJ+W/q+mAn+eZu+W9lScpO1xyXG4gICAgICAgICAgICBjYy5sb2cocGFyYW1zKTtcclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdpbmRleCcpO1xyXG4gICAgICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BhcmFtcycsIEpTT04uc3RyaW5naWZ5KHBhcmFtcykpOyBcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgY2MubG9nKCfotKblj7fms6jlhowv55m75b2VJyk7XHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnaW5kZXgnKTtcclxuICAgICAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwYXJhbXMnLCBKU09OLnN0cmluZ2lmeShwYXJhbXMpKTtcclxuICAgICAgICB9XHJcbiAgXHJcbiAgICB9LFxyXG5cclxuLy8g44CA44CAIGNoYW5nZUJqOiBmdW5jdGlvbigpe1xyXG4vLyDjgIDjgIDjgIDjgIB2YXIgdXJsID0gJ2dsb2JhbFVJL3ZpZGVvL2dWaWRlb1BsYXlDbGljayc7XHJcbi8vIOOAgOOAgOOAgOOAgHZhciBfdGhpcyA9IHRoaXM7IGNjLmxvYWRlci5sb2FkUmVzKHVybCxjYy5TcHJpdGVGcmFtZSxmdW5jdGlvbihlcnIsc3ByaXRlRnJhbWUpXHJcbi8vIOOAgOOAgOOAgOOAgHsg44CAXHJcbi8vIOOAgOOAgOOAgOOAgOOAgOOAgF90aGlzLmlzUGxheS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4vLyDjgIDjgIDjgIDjgIAgfSk7XHJcbiAgICBcclxuLy8g44CA44CA44CAXHJcbi8vIOOAgOOAgOOAgOOAgC8v5Yqg6L29572R57uc5Zu+54mHXHJcbi8vICAgICAgICAgdmFyIHVybCA9IFwid3d3Lm1vbnN0ZXIuY29tL3dlYi9hcHAvbG9hZGluZy5qcGdcIjtcclxuLy8gICAgICAgICBjYy5sb2FkZXIubG9hZCh7dXJsOiB1cmwsIHR5cGU6ICdwbmcnfSwgZnVuY3Rpb24oZXJyLGltZyl7XHJcbi8vICAgICAgICAgICAgIHZhciBteWxvZ28gID0gbmV3IGNjLlNwcml0ZUZyYW1lKGltZyk7IFxyXG4vLyAgICAgICAgICAgICBzZWxmLmxvZ28uc3ByaXRlRnJhbWUgPSBteWxvZ287XHJcbi8vICAgICAgICAgfSk7XHJcbi8vIOOAgOOAgOOAgH0sXHJcbn0pO1xyXG5cclxuXHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/login/http.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8228eqRxUNJ4IVqrOVz3ZWN', 'http');
// Script/login/http.js

"use strict";

/*
 * @Author: sjeam
 * @Date: 2022-06-13 16:34:52
 * @Description: 
 */

/**
 * Http ????????????
 */
var HttpHelper = cc.Class({
  "extends": cc.Component,
  statics: {},
  properties: {},
  onLoad: function onLoad() {
    // ??????????????????mp3???????????????
    this.current = cc.audioEngine.play(res.url, false, 1);
  },

  /**
   * get??????
   * @param {string} url 
   * @param {function} callback 
   */
  httpGets: function httpGets(url, callback) {
    var xhr = cc.loader.getXMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
        var respone = xhr.responseText;
        callback(respone);
      }
    };

    xhr.open("GET", url, true);

    if (cc.sys.isNative) {
      xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
    } // note: In Internet Explorer, the timeout property may be set only after calling the open()
    // method and before calling the send() method.


    xhr.timeout = 5000; // 5 seconds for timeout

    xhr.send();
  },
  httpPost: function httpPost(url, params, callback) {
    var xhr = cc.loader.getXMLHttpRequest();

    xhr.onreadystatechange = function () {
      // cc.log('xhr.readyState='+xhr.readyState+'  xhr.status='+xhr.status);
      if (xhr.readyState === 4 && xhr.status >= 200 && xhr.status < 300) {
        var respone = xhr.responseText;
        callback(JSON.parse(respone)); // json ?????????
      } else {//   callback(-1);
        }
    };

    xhr.open("POST", url, true);

    if (cc.sys.isNative) {
      xhr.setRequestHeader("Accept-Encoding", "gzip,deflate");
    } // xhr.setRequestHeader("Http-Edition", "1.0.0.0");  // ??????
    // xhr.setRequestHeader("Ip", "192.168.1.1");
    // xhr.setRequestHeader("Http-Token", "gzipdeflate");


    xhr.timeout = 5000; // 5 seconds for timeout
    // xhr.setRequestHeader('Content-Type', 'application/json,multipart/form-data');

    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // xhr.send(JSON.stringify(params));

    xhr.send('data=' + JSON.stringify(params)); //  xhr.send(params);
  }
});
window.HttpHelper = new HttpHelper();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcaHR0cC5qcyJdLCJuYW1lcyI6WyJIdHRwSGVscGVyIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInN0YXRpY3MiLCJwcm9wZXJ0aWVzIiwib25Mb2FkIiwiY3VycmVudCIsImF1ZGlvRW5naW5lIiwicGxheSIsInJlcyIsInVybCIsImh0dHBHZXRzIiwiY2FsbGJhY2siLCJ4aHIiLCJsb2FkZXIiLCJnZXRYTUxIdHRwUmVxdWVzdCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25lIiwicmVzcG9uc2VUZXh0Iiwib3BlbiIsInN5cyIsImlzTmF0aXZlIiwic2V0UmVxdWVzdEhlYWRlciIsInRpbWVvdXQiLCJzZW5kIiwiaHR0cFBvc3QiLCJwYXJhbXMiLCJKU09OIiwicGFyc2UiLCJzdHJpbmdpZnkiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7OztBQUtBOzs7QUFHQSxJQUFNQSxVQUFVLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ3hCLGFBQVNELEVBQUUsQ0FBQ0UsU0FEWTtBQUd4QkMsRUFBQUEsT0FBTyxFQUFFLEVBSGU7QUFNeEJDLEVBQUFBLFVBQVUsRUFBRSxFQU5ZO0FBU3hCQyxFQUFBQSxNQVR3QixvQkFTZDtBQUVOO0FBQ0EsU0FBS0MsT0FBTCxHQUFlTixFQUFFLENBQUNPLFdBQUgsQ0FBZUMsSUFBZixDQUFvQkMsR0FBRyxDQUFDQyxHQUF4QixFQUE2QixLQUE3QixFQUFvQyxDQUFwQyxDQUFmO0FBQ0gsR0FidUI7O0FBY3hCOzs7OztBQU1JQyxFQUFBQSxRQUFRLEVBQUUsa0JBQVVELEdBQVYsRUFBZUUsUUFBZixFQUF5QjtBQUMvQixRQUFJQyxHQUFHLEdBQUdiLEVBQUUsQ0FBQ2MsTUFBSCxDQUFVQyxpQkFBVixFQUFWOztBQUNBRixJQUFBQSxHQUFHLENBQUNHLGtCQUFKLEdBQXlCLFlBQVk7QUFDakMsVUFBSUgsR0FBRyxDQUFDSSxVQUFKLEtBQW1CLENBQW5CLElBQXlCSixHQUFHLENBQUNLLE1BQUosSUFBYyxHQUFkLElBQXFCTCxHQUFHLENBQUNLLE1BQUosR0FBYSxHQUEvRCxFQUFxRTtBQUNqRSxZQUFJQyxPQUFPLEdBQUdOLEdBQUcsQ0FBQ08sWUFBbEI7QUFDQVIsUUFBQUEsUUFBUSxDQUFDTyxPQUFELENBQVI7QUFDSDtBQUNKLEtBTEQ7O0FBTUFOLElBQUFBLEdBQUcsQ0FBQ1EsSUFBSixDQUFTLEtBQVQsRUFBZ0JYLEdBQWhCLEVBQXFCLElBQXJCOztBQUNBLFFBQUlWLEVBQUUsQ0FBQ3NCLEdBQUgsQ0FBT0MsUUFBWCxFQUFxQjtBQUNqQlYsTUFBQUEsR0FBRyxDQUFDVyxnQkFBSixDQUFxQixpQkFBckIsRUFBd0MsY0FBeEM7QUFDSCxLQVg4QixDQWEvQjtBQUNBOzs7QUFDQVgsSUFBQUEsR0FBRyxDQUFDWSxPQUFKLEdBQWMsSUFBZCxDQWYrQixDQWVaOztBQUVuQlosSUFBQUEsR0FBRyxDQUFDYSxJQUFKO0FBQ0gsR0F0Q21CO0FBd0NwQkMsRUFBQUEsUUFBUSxFQUFFLGtCQUFVakIsR0FBVixFQUFla0IsTUFBZixFQUF1QmhCLFFBQXZCLEVBQWlDO0FBQ3ZDLFFBQUlDLEdBQUcsR0FBR2IsRUFBRSxDQUFDYyxNQUFILENBQVVDLGlCQUFWLEVBQVY7O0FBQ0FGLElBQUFBLEdBQUcsQ0FBQ0csa0JBQUosR0FBeUIsWUFBWTtBQUNqQztBQUNBLFVBQUlILEdBQUcsQ0FBQ0ksVUFBSixLQUFtQixDQUFuQixJQUF5QkosR0FBRyxDQUFDSyxNQUFKLElBQWMsR0FBZCxJQUFxQkwsR0FBRyxDQUFDSyxNQUFKLEdBQWEsR0FBL0QsRUFBcUU7QUFDakUsWUFBSUMsT0FBTyxHQUFHTixHQUFHLENBQUNPLFlBQWxCO0FBQ0FSLFFBQUFBLFFBQVEsQ0FBQ2lCLElBQUksQ0FBQ0MsS0FBTCxDQUFXWCxPQUFYLENBQUQsQ0FBUixDQUZpRSxDQUVqQztBQUNuQyxPQUhELE1BR0ssQ0FDRDtBQUNIO0FBQ0osS0FSRDs7QUFTQU4sSUFBQUEsR0FBRyxDQUFDUSxJQUFKLENBQVMsTUFBVCxFQUFpQlgsR0FBakIsRUFBc0IsSUFBdEI7O0FBQ0EsUUFBSVYsRUFBRSxDQUFDc0IsR0FBSCxDQUFPQyxRQUFYLEVBQXFCO0FBQ2pCVixNQUFBQSxHQUFHLENBQUNXLGdCQUFKLENBQXFCLGlCQUFyQixFQUF3QyxjQUF4QztBQUNILEtBZHNDLENBZXZDO0FBQ0E7QUFDQTs7O0FBQ0FYLElBQUFBLEdBQUcsQ0FBQ1ksT0FBSixHQUFjLElBQWQsQ0FsQnVDLENBa0JwQjtBQUNuQjs7QUFDQVosSUFBQUEsR0FBRyxDQUFDVyxnQkFBSixDQUFxQixjQUFyQixFQUFxQyxtQ0FBckMsRUFwQnVDLENBcUJ2Qzs7QUFDQVgsSUFBQUEsR0FBRyxDQUFDYSxJQUFKLENBQVMsVUFBUUcsSUFBSSxDQUFDRSxTQUFMLENBQWVILE1BQWYsQ0FBakIsRUF0QnVDLENBdUJ2QztBQUVIO0FBakVtQixDQUFULENBQW5CO0FBb0VBSSxNQUFNLENBQUNqQyxVQUFQLEdBQW9CLElBQUlBLFVBQUosRUFBcEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAqIEBBdXRob3I6IHNqZWFtXHJcbiAqIEBEYXRlOiAyMDIyLTA2LTEzIDE2OjM0OjUyXHJcbiAqIEBEZXNjcmlwdGlvbjogXHJcbiAqL1xyXG4vKipcclxuICogSHR0cCDor7fmsYLlsIHoo4VcclxuICovXHJcbmNvbnN0IEh0dHBIZWxwZXIgPSBjYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgc3RhdGljczoge1xyXG4gICAgfSxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcblxyXG4gICAgfSxcclxuICAgIG9uTG9hZCAoKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8g5LuO5pyN5Yqh5Zmo5Yqg6L29bXAz5p2l6L+b6KGM5pKt5pS+XHJcbiAgICAgICAgdGhpcy5jdXJyZW50ID0gY2MuYXVkaW9FbmdpbmUucGxheShyZXMudXJsLCBmYWxzZSwgMSk7ICBcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIGdldOivt+axglxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHVybCBcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIFxyXG4gICAgICovXHJcbiAgICBcclxuICAgICAgICBodHRwR2V0czogZnVuY3Rpb24gKHVybCwgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdmFyIHhociA9IGNjLmxvYWRlci5nZXRYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmICh4aHIuc3RhdHVzID49IDIwMCAmJiB4aHIuc3RhdHVzIDwgMzAwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXNwb25lID0geGhyLnJlc3BvbnNlVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXNwb25lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgdXJsLCB0cnVlKTtcclxuICAgICAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBY2NlcHQtRW5jb2RpbmdcIiwgXCJnemlwLGRlZmxhdGVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgLy8gbm90ZTogSW4gSW50ZXJuZXQgRXhwbG9yZXIsIHRoZSB0aW1lb3V0IHByb3BlcnR5IG1heSBiZSBzZXQgb25seSBhZnRlciBjYWxsaW5nIHRoZSBvcGVuKClcclxuICAgICAgICAgICAgLy8gbWV0aG9kIGFuZCBiZWZvcmUgY2FsbGluZyB0aGUgc2VuZCgpIG1ldGhvZC5cclxuICAgICAgICAgICAgeGhyLnRpbWVvdXQgPSA1MDAwOy8vIDUgc2Vjb25kcyBmb3IgdGltZW91dFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgXHJcbiAgICAgICAgaHR0cFBvc3Q6IGZ1bmN0aW9uICh1cmwsIHBhcmFtcywgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgdmFyIHhociA9IGNjLmxvYWRlci5nZXRYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKCd4aHIucmVhZHlTdGF0ZT0nK3hoci5yZWFkeVN0YXRlKycgIHhoci5zdGF0dXM9Jyt4aHIuc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiAoeGhyLnN0YXR1cyA+PSAyMDAgJiYgeGhyLnN0YXR1cyA8IDMwMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzcG9uZSA9IHhoci5yZXNwb25zZVRleHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soSlNPTi5wYXJzZShyZXNwb25lKSk7ICAvLyBqc29uIOi9rOaVsOe7hFxyXG4gICAgICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICBjYWxsYmFjaygtMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCB1cmwsIHRydWUpO1xyXG4gICAgICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdC1FbmNvZGluZ1wiLCBcImd6aXAsZGVmbGF0ZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkh0dHAtRWRpdGlvblwiLCBcIjEuMC4wLjBcIik7ICAvLyDniYjmnKxcclxuICAgICAgICAgICAgLy8geGhyLnNldFJlcXVlc3RIZWFkZXIoXCJJcFwiLCBcIjE5Mi4xNjguMS4xXCIpO1xyXG4gICAgICAgICAgICAvLyB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkh0dHAtVG9rZW5cIiwgXCJnemlwZGVmbGF0ZVwiKTtcclxuICAgICAgICAgICAgeGhyLnRpbWVvdXQgPSA1MDAwOy8vIDUgc2Vjb25kcyBmb3IgdGltZW91dFxyXG4gICAgICAgICAgICAvLyB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24sbXVsdGlwYXJ0L2Zvcm0tZGF0YScpO1xyXG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcpO1xyXG4gICAgICAgICAgICAvLyB4aHIuc2VuZChKU09OLnN0cmluZ2lmeShwYXJhbXMpKTtcclxuICAgICAgICAgICAgeGhyLnNlbmQoJ2RhdGE9JytKU09OLnN0cmluZ2lmeShwYXJhbXMpKTtcclxuICAgICAgICAgICAgLy8gIHhoci5zZW5kKHBhcmFtcyk7XHJcblxyXG4gICAgICAgIH1cclxufSk7XHJcblxyXG53aW5kb3cuSHR0cEhlbHBlciA9IG5ldyBIdHRwSGVscGVyKCk7Il19
//------QC-SOURCE-SPLIT------

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

var HttpHelper = require("http"); // var fs = require('fs'); // ??????fs??????
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
    } // ????????????--??????????????????


    this.tokenlogin(); // ????????????
    // // ??????????????????
    // this.login();
    //????????????
    // cc.sys.localStorage.setItem('token', value);
    // cc.sys.localStorage.getItem(key);
    // cc.sys.localStorage.removeItem(key);
    // ????????????????????????
    // const KEY_BEST_SCORE = "bestScore";
    // let bestScore = cc.sys.localStorage.getItem(KEY_BEST_SCORE);
    // if (bestScore === "null" || this.score > bestScore) {
    //     bestScore = this.score;
    // }
    // cc.sys.localStorage.setItem(KEY_BEST_SCORE, bestScore);
  },
  tokenlogin: function tokenlogin() {
    // ????????????json  ??????
    // cc.loader.load( cc.url.raw("resources/login.json"),function(err,res){  
    // cc.loader.loadRes('login.json',function(err,res){   //??????resources
    //     let json = res.json;
    //     var params = {
    //         'token': json.token,
    //     };
    //     cc.log(json.token); 
    //     var res = httpRequest.httpPost('https://www.mheart.xyz/app/api-server/token-login', params ,function (data) {
    //         cc.loader.release('resources/login.json'); //??????json ??????
    //         // if(cc.sys.isNative){  //  jsb.fileUtils????????? web  ??????
    //         //     jsb.fileUtils.writeStringToFile(data,token)
    //         // }
    //         // cc.log(data); 
    //         // ?????????????????????
    //         if(data.code==0){
    //             // this.loginbox.node.active = false;  // ????????????
    //         }
    //     });
    // })
    var token = cc.sys.localStorage.getItem('token');

    if (token) {
      httpRequest.httpPost('https://www.mheart.xyz/app/api-server/token-login', {
        'token': token
      }, function (data) {
        var _this = this; // cc.loader.release('resources/login.json'); //??????json ??????
        // if(cc.sys.isNative){  //  jsb.fileUtils????????? web  ??????
        //     jsb.fileUtils.writeStringToFile(data,token)
        // }
        // cc.log(data); 
        // ?????????????????????


        if (data.code == 0) {// this.loginbox.node.active = false;  // ????????????
        } else {// this.loginbox.node.active = false;  // ????????????
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
        _this.register_alert.string = '??????????????????!';
      } //????????????--??????????????????

    });
  },
  callback: function callback(event) {
    // cc.log(data)
    // var userCount =  cc.find("Canvas/ground/editbox_count").getComponent(cc.EditBox).string;
    // var userPassward =  cc.find("Canvas/ground/editbox_passward").getComponent(cc.EditBox).string;
    // console.log("???????????????"+userCount+ "???????????????"+ userPassward);
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
    //         //?????????????????????????????????
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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/login/Alert.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2045b71nHFDw7X/Kgx+6xMy', 'Alert');
// Script/login/Alert.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    gridLayout: cc.Node,
    toolPrefab: cc.Prefab // _alert:null, //?????????
    // _btnOK:null, //?????????????????????
    // _btnCancel:null, //?????????????????????
    // _title:null, //???????????????
    // _content:null, //???????????????
    // _btnOKCallback:null, //?????????????????????????????????
    // mask:{
    //     type:cc.node,
    //     default:null
    // },

  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    // ??????????????????
    this.spawnTools();
  },
  start: function start() {// this.node.active =false;
  },
  spawnTools: function spawnTools() {
    var _this = this;

    var HttpHelper = require("http");

    var httpRequest = new HttpHelper();
    var params = {
      'page': 1,
      'pageSize': 11
    };
    httpRequest.httpPost('https://www.mheart.xyz/app/api-server/user-register', params, function (data) {
      //   console.log(data);
      // console.log(_this.gridLayout)
      // let cellWidth = _this.gridLayout.width * 0.105;
      // let cellHeight = _this.gridLayout.height * 0.215;
      // let spacingX = _this.gridLayout.width * 0.022;
      // let spacingY = _this.gridLayout.height * 0.045;
      var cellWidth = _this.gridLayout.width * 0.45;
      var cellHeight = _this.gridLayout.height * 0.15;
      var spacingX = _this.gridLayout.width * 0.08;
      var spacingY = _this.gridLayout.height * 0.05;
      _this.gridLayout.getComponent(cc.Layout).cellSize.width = cellWidth;
      _this.gridLayout.getComponent(cc.Layout).cellSize.height = cellHeight;
      _this.gridLayout.getComponent(cc.Layout).spacingX = spacingX;
      _this.gridLayout.getComponent(cc.Layout).spacingY = spacingY; // ??????TOOLS?????????????????????

      _this.toolsArray = [];
      var TOOLS = data.data.server;

      for (var i = 0; i < data.data.server.length; i++) {
        var tool = cc.instantiate(_this.toolPrefab); // console.log(TOOLS[i])
        // _this.gridLayout.addChild(tool);

        tool.getComponent('Tools').initInfo(TOOLS[i]);

        _this.toolsArray.push(tool);

        _this.gridLayout.addChild(tool);
      } // ??????content???????????????


      var scorllheight = _this.gridLayout.parent; //?????????????????????

      var height = (cellHeight + spacingY) * Math.ceil(data.data.server.length / 2); // console.log(height);
      // scorllheight.designResolution  = new cc.Size(600, height);

      scorllheight.setContentSize(600, height);
    });
  },
  show_dlg: function show_dlg() {
    this.node.active = true; //     // ??????????????????(??????????????????????????????????????????)
    //     this.toolsArray.forEach(element => {
    //         element.removeFromParent();
    //     });
  },
  hidden_dlg: function hidden_dlg() {
    this.node.active = false; // ???????????? server
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcQWxlcnQuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJncmlkTGF5b3V0IiwiTm9kZSIsInRvb2xQcmVmYWIiLCJQcmVmYWIiLCJvbkxvYWQiLCJzcGF3blRvb2xzIiwic3RhcnQiLCJfdGhpcyIsIkh0dHBIZWxwZXIiLCJyZXF1aXJlIiwiaHR0cFJlcXVlc3QiLCJwYXJhbXMiLCJodHRwUG9zdCIsImRhdGEiLCJjZWxsV2lkdGgiLCJ3aWR0aCIsImNlbGxIZWlnaHQiLCJoZWlnaHQiLCJzcGFjaW5nWCIsInNwYWNpbmdZIiwiZ2V0Q29tcG9uZW50IiwiTGF5b3V0IiwiY2VsbFNpemUiLCJ0b29sc0FycmF5IiwiVE9PTFMiLCJzZXJ2ZXIiLCJpIiwibGVuZ3RoIiwidG9vbCIsImluc3RhbnRpYXRlIiwiaW5pdEluZm8iLCJwdXNoIiwiYWRkQ2hpbGQiLCJzY29ybGxoZWlnaHQiLCJwYXJlbnQiLCJNYXRoIiwiY2VpbCIsInNldENvbnRlbnRTaXplIiwic2hvd19kbGciLCJub2RlIiwiYWN0aXZlIiwiaGlkZGVuX2RsZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFVBQVUsRUFBRUosRUFBRSxDQUFDSyxJQURQO0FBRVJDLElBQUFBLFVBQVUsRUFBRU4sRUFBRSxDQUFDTyxNQUZQLENBR1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBWlEsR0FIUDtBQWtCTDtBQUVBQyxFQUFBQSxNQXBCSyxvQkFvQks7QUFDTDtBQUNBLFNBQUtDLFVBQUw7QUFDSixHQXZCSTtBQXlCTEMsRUFBQUEsS0F6QkssbUJBeUJJ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cUIsRUFBQUEsUUE1RUssc0JBNEVPO0FBR1IsU0FBS0MsSUFBTCxDQUFVQyxNQUFWLEdBQWtCLElBQWxCLENBSFEsQ0FJUjtBQUNBO0FBQ0E7QUFDQTtBQUVILEdBckZJO0FBdUZMQyxFQUFBQSxVQXZGSyx3QkF1RlM7QUFDVixTQUFLRixJQUFMLENBQVVDLE1BQVYsR0FBa0IsS0FBbEIsQ0FEVSxDQUVWO0FBQ0g7QUExRkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIGdyaWRMYXlvdXQ6IGNjLk5vZGUsXHJcbiAgICAgICAgdG9vbFByZWZhYjogY2MuUHJlZmFiLFxyXG4gICAgICAgIC8vIF9hbGVydDpudWxsLCAvL+aPkOekuuahhlxyXG4gICAgICAgIC8vIF9idG5PSzpudWxsLCAvL+aPkOekuuahhuehruWumuaMiemSrlxyXG4gICAgICAgIC8vIF9idG5DYW5jZWw6bnVsbCwgLy/mj5DnpLrmoYblj5bmtojmjInpkq5cclxuICAgICAgICAvLyBfdGl0bGU6bnVsbCwgLy/mj5DnpLrmoYbmoIfpophcclxuICAgICAgICAvLyBfY29udGVudDpudWxsLCAvL+aPkOekuuahhuWGheWuuVxyXG4gICAgICAgIC8vIF9idG5PS0NhbGxiYWNrOm51bGwsIC8v54K55Ye756Gu5a6a5oyJ6ZKu55qE5Zue6LCD5LqL5Lu2XHJcbiAgICAgICAgLy8gbWFzazp7XHJcbiAgICAgICAgLy8gICAgIHR5cGU6Y2Mubm9kZSxcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDpudWxsXHJcbiAgICAgICAgLy8gfSxcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkICgpIHsgXHJcbiAgICAgICAgIC8vIOeUn+aIkOaJgOaciemBk+WFt1xyXG4gICAgICAgICB0aGlzLnNwYXduVG9vbHMoKTsgICBcclxuICAgIH0sXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIHRoaXMubm9kZS5hY3RpdmUgPWZhbHNlO1xyXG4gICAgfSxcclxuICAgIHNwYXduVG9vbHMgKCkge1xyXG4gICAgICAgIHZhciBfdGhpcyA9dGhpcztcclxuICAgICAgICB2YXIgSHR0cEhlbHBlciA9IHJlcXVpcmUoXCJodHRwXCIpOyBcclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3QgPSBuZXcgSHR0cEhlbHBlcigpO1xyXG4gICAgICAgIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAncGFnZSc6IDEsXHJcbiAgICAgICAgICAgICAgICAncGFnZVNpemUnOiAxMSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCdodHRwczovL3d3dy5taGVhcnQueHl6L2FwcC9hcGktc2VydmVyL3VzZXItcmVnaXN0ZXInLCBwYXJhbXMsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coX3RoaXMuZ3JpZExheW91dClcclxuICAgICAgICAgICAgLy8gbGV0IGNlbGxXaWR0aCA9IF90aGlzLmdyaWRMYXlvdXQud2lkdGggKiAwLjEwNTtcclxuICAgICAgICAgICAgLy8gbGV0IGNlbGxIZWlnaHQgPSBfdGhpcy5ncmlkTGF5b3V0LmhlaWdodCAqIDAuMjE1O1xyXG4gICAgICAgICAgICAvLyBsZXQgc3BhY2luZ1ggPSBfdGhpcy5ncmlkTGF5b3V0LndpZHRoICogMC4wMjI7XHJcbiAgICAgICAgICAgIC8vIGxldCBzcGFjaW5nWSA9IF90aGlzLmdyaWRMYXlvdXQuaGVpZ2h0ICogMC4wNDU7XHJcbiAgICAgICAgICAgIGxldCBjZWxsV2lkdGggPSBfdGhpcy5ncmlkTGF5b3V0LndpZHRoICogMC40NTtcclxuICAgICAgICAgICAgbGV0IGNlbGxIZWlnaHQgPSBfdGhpcy5ncmlkTGF5b3V0LmhlaWdodCAqIDAuMTU7XHJcbiAgICAgICAgICAgIGxldCBzcGFjaW5nWCA9IF90aGlzLmdyaWRMYXlvdXQud2lkdGggKiAwLjA4O1xyXG4gICAgICAgICAgICBsZXQgc3BhY2luZ1kgPSBfdGhpcy5ncmlkTGF5b3V0LmhlaWdodCAqIDAuMDU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBfdGhpcy5ncmlkTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpLmNlbGxTaXplLndpZHRoID0gY2VsbFdpZHRoO1xyXG4gICAgICAgICAgICBfdGhpcy5ncmlkTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpLmNlbGxTaXplLmhlaWdodCA9IGNlbGxIZWlnaHQ7XHJcbiAgICAgICAgICAgIF90aGlzLmdyaWRMYXlvdXQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuc3BhY2luZ1ggPSBzcGFjaW5nWDtcclxuICAgICAgICAgICAgX3RoaXMuZ3JpZExheW91dC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS5zcGFjaW5nWSA9IHNwYWNpbmdZO1xyXG4gICAgICAgICAgICAvLyDmoLnmja5UT09MU+eUn+aIkOebuOW6lOeahOmBk+WFt1xyXG4gICAgICAgICAgICBfdGhpcy50b29sc0FycmF5ID0gW107XHJcbiAgICAgICAgICAgIGxldCBUT09MUyA9IGRhdGEuZGF0YS5zZXJ2ZXI7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgICAgZm9yIChsZXQgaT0wOyBpPGRhdGEuZGF0YS5zZXJ2ZXIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCB0b29sID0gY2MuaW5zdGFudGlhdGUoX3RoaXMudG9vbFByZWZhYik7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhUT09MU1tpXSlcclxuICAgICAgICAgICAgICAgIC8vIF90aGlzLmdyaWRMYXlvdXQuYWRkQ2hpbGQodG9vbCk7XHJcbiAgICAgICAgICAgICAgICB0b29sLmdldENvbXBvbmVudCgnVG9vbHMnKS5pbml0SW5mbyhUT09MU1tpXSk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy50b29sc0FycmF5LnB1c2godG9vbCk7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5ncmlkTGF5b3V0LmFkZENoaWxkKHRvb2wpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g5a6a5LmJY29udGVudOa7muWKqOadoemrmOW6plxyXG4gICAgICAgICAgICBsZXQgc2NvcmxsaGVpZ2h0ID0gIF90aGlzLmdyaWRMYXlvdXQucGFyZW50O1xyXG4gICAgICAgICAgICAvL+iuoeeul+a7muWKqOadoemrmOW6plxyXG4gICAgICAgICAgICBsZXQgIGhlaWdodCA9ICAoY2VsbEhlaWdodCtzcGFjaW5nWSkqKCBNYXRoLmNlaWwoIGRhdGEuZGF0YS5zZXJ2ZXIubGVuZ3RoLzIpKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaGVpZ2h0KTtcclxuICAgICAgICAgICAgLy8gc2NvcmxsaGVpZ2h0LmRlc2lnblJlc29sdXRpb24gID0gbmV3IGNjLlNpemUoNjAwLCBoZWlnaHQpO1xyXG4gICAgICAgICAgICBzY29ybGxoZWlnaHQuc2V0Q29udGVudFNpemUoNjAwLGhlaWdodCk7XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcblxyXG5cclxuICAgIHNob3dfZGxnICgpIHtcclxuICAgICAgXHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPXRydWU7XHJcbiAgICAgICAgLy8gICAgIC8vIOWIoOmZpOaJgOaciemBk+WFtyjmiJbogIXkuI3liKDvvIzlj6rmmK/pmpDol4/vvIzoh6rlt7HlhrPlrpopXHJcbiAgICAgICAgLy8gICAgIHRoaXMudG9vbHNBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgZWxlbWVudC5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgIFxyXG4gICAgfSxcclxuXHJcbiAgICBoaWRkZW5fZGxnICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID1mYWxzZTtcclxuICAgICAgICAvLyDor7fmsYLmm7TmjaIgc2VydmVyXHJcbiAgICB9LFxyXG4gXHJcblxyXG5cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/login/tips.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1e7f7ciNQRLOoO7QCll/I0d', 'tips');
// Script/login/tips.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {
    scorllview: cc.ScorllView
  },
  // LIFE-CYCLE CALLBACKS:
  // cc.loader.releaseRes("test assets/anim");
  onLoad: function onLoad() {
    cc.sys.localStorage.removeItem('server_tips');

    var HttpHelper = require("http");

    var httpRequest = new HttpHelper();
    httpRequest.httpPost('https://www.mheart.xyz/app/api-server/user-tips', [], function (data) {
      var tips = cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
      tips.getComponent(cc.Label).string = data.data['gonggao_sz']; // ?????????
      // cc.log(JSON.parse( data.data ));
      // ???json
      // cc.log(JSON.stringify( data.data ));

      for (var value in data.data) {
        cc.sys.localStorage.setItem(value, data.data[value]);
      } // cc.sys.localStorage.getItem('server_tips');

    });
  },
  start: function start() {},
  gonggao_sz: function gonggao_sz() {
    var tips = cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
    tips.getComponent(cc.Label).string = cc.sys.localStorage.getItem('gonggao_sz');
  },
  gonggao_sx: function gonggao_sx() {
    var tips = cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
    tips.getComponent(cc.Label).string = cc.sys.localStorage.getItem('gonggao_sx');
  },
  gonggao_gx: function gonggao_gx() {
    var tips = cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
    tips.getComponent(cc.Label).string = cc.sys.localStorage.getItem('gonggao_gx');
  },
  gonggao_lx: function gonggao_lx() {
    var tips = cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
    tips.getComponent(cc.Label).string = cc.sys.localStorage.getItem('gonggao_lx');
  },
  show_dlg: function show_dlg() {
    this.node.active = true;
  },
  hidden_dlg: function hidden_dlg() {
    this.node.active = false;
  } // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcdGlwcy5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNjb3JsbHZpZXciLCJTY29ybGxWaWV3Iiwib25Mb2FkIiwic3lzIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsIkh0dHBIZWxwZXIiLCJyZXF1aXJlIiwiaHR0cFJlcXVlc3QiLCJodHRwUG9zdCIsImRhdGEiLCJ0aXBzIiwiZmluZCIsImdldENvbXBvbmVudCIsIkxhYmVsIiwic3RyaW5nIiwidmFsdWUiLCJzZXRJdGVtIiwic3RhcnQiLCJnb25nZ2FvX3N6IiwiZ2V0SXRlbSIsImdvbmdnYW9fc3giLCJnb25nZ2FvX2d4IiwiZ29uZ2dhb19seCIsInNob3dfZGxnIiwibm9kZSIsImFjdGl2ZSIsImhpZGRlbl9kbGciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxVQUFVLEVBQUNKLEVBQUUsQ0FBQ0s7QUFETixHQUhQO0FBT0w7QUFDQTtBQUNBQyxFQUFBQSxNQVRLLG9CQVNLO0FBQ05OLElBQUFBLEVBQUUsQ0FBQ08sR0FBSCxDQUFPQyxZQUFQLENBQW9CQyxVQUFwQixDQUErQixhQUEvQjs7QUFDQSxRQUFJQyxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXhCOztBQUNBLFFBQUlDLFdBQVcsR0FBRyxJQUFJRixVQUFKLEVBQWxCO0FBQ0FFLElBQUFBLFdBQVcsQ0FBQ0MsUUFBWixDQUFxQixpREFBckIsRUFBd0UsRUFBeEUsRUFBNEUsVUFBVUMsSUFBVixFQUFnQjtBQUN4RixVQUFJQyxJQUFJLEdBQUdmLEVBQUUsQ0FBQ2dCLElBQUgsQ0FBUSx1REFBUixDQUFYO0FBQ0FELE1BQUFBLElBQUksQ0FBQ0UsWUFBTCxDQUFrQmpCLEVBQUUsQ0FBQ2tCLEtBQXJCLEVBQTRCQyxNQUE1QixHQUFtQ0wsSUFBSSxDQUFDQSxJQUFMLENBQVUsWUFBVixDQUFuQyxDQUZ3RixDQUd4RjtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxXQUFJLElBQUlNLEtBQVIsSUFBaUJOLElBQUksQ0FBQ0EsSUFBdEIsRUFBMkI7QUFDdkJkLFFBQUFBLEVBQUUsQ0FBQ08sR0FBSCxDQUFPQyxZQUFQLENBQW9CYSxPQUFwQixDQUE0QkQsS0FBNUIsRUFBa0NOLElBQUksQ0FBQ0EsSUFBTCxDQUFVTSxLQUFWLENBQWxDO0FBQ0gsT0FUdUYsQ0FVeEY7O0FBQ0gsS0FYRDtBQVlILEdBekJJO0FBMkJMRSxFQUFBQSxLQTNCSyxtQkEyQkksQ0FFUixDQTdCSTtBQThCTEMsRUFBQUEsVUE5Qkssd0JBOEJPO0FBQ0osUUFBSVIsSUFBSSxHQUFHZixFQUFFLENBQUNnQixJQUFILENBQVEsdURBQVIsQ0FBWDtBQUNBRCxJQUFBQSxJQUFJLENBQUNFLFlBQUwsQ0FBa0JqQixFQUFFLENBQUNrQixLQUFyQixFQUE0QkMsTUFBNUIsR0FBbUNuQixFQUFFLENBQUNPLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQmdCLE9BQXBCLENBQTRCLFlBQTVCLENBQW5DO0FBQ1AsR0FqQ0k7QUFrQ0xDLEVBQUFBLFVBbENLLHdCQWtDTztBQUVSLFFBQUlWLElBQUksR0FBR2YsRUFBRSxDQUFDZ0IsSUFBSCxDQUFRLHVEQUFSLENBQVg7QUFDQUQsSUFBQUEsSUFBSSxDQUFDRSxZQUFMLENBQWtCakIsRUFBRSxDQUFDa0IsS0FBckIsRUFBNEJDLE1BQTVCLEdBQW1DbkIsRUFBRSxDQUFDTyxHQUFILENBQU9DLFlBQVAsQ0FBb0JnQixPQUFwQixDQUE0QixZQUE1QixDQUFuQztBQUNILEdBdENJO0FBdUNMRSxFQUFBQSxVQXZDSyx3QkF1Q087QUFFUixRQUFJWCxJQUFJLEdBQUdmLEVBQUUsQ0FBQ2dCLElBQUgsQ0FBUSx1REFBUixDQUFYO0FBQ0FELElBQUFBLElBQUksQ0FBQ0UsWUFBTCxDQUFrQmpCLEVBQUUsQ0FBQ2tCLEtBQXJCLEVBQTRCQyxNQUE1QixHQUFtQ25CLEVBQUUsQ0FBQ08sR0FBSCxDQUFPQyxZQUFQLENBQW9CZ0IsT0FBcEIsQ0FBNEIsWUFBNUIsQ0FBbkM7QUFDSCxHQTNDSTtBQTRDTEcsRUFBQUEsVUE1Q0ssd0JBNENPO0FBRVIsUUFBSVosSUFBSSxHQUFHZixFQUFFLENBQUNnQixJQUFILENBQVEsdURBQVIsQ0FBWDtBQUNBRCxJQUFBQSxJQUFJLENBQUNFLFlBQUwsQ0FBa0JqQixFQUFFLENBQUNrQixLQUFyQixFQUE0QkMsTUFBNUIsR0FBbUNuQixFQUFFLENBQUNPLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQmdCLE9BQXBCLENBQTRCLFlBQTVCLENBQW5DO0FBQ0gsR0FoREk7QUFpRExJLEVBQUFBLFFBakRLLHNCQWlETztBQUNSLFNBQUtDLElBQUwsQ0FBVUMsTUFBVixHQUFrQixJQUFsQjtBQUNILEdBbkRJO0FBb0RMQyxFQUFBQSxVQXBESyx3QkFvRFM7QUFDVixTQUFLRixJQUFMLENBQVVDLE1BQVYsR0FBa0IsS0FBbEI7QUFDSCxHQXRESSxDQXVETDs7QUF2REssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBzY29ybGx2aWV3OmNjLlNjb3JsbFZpZXdcclxuICAgIH0sXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcbiAgICAvLyBjYy5sb2FkZXIucmVsZWFzZVJlcyhcInRlc3QgYXNzZXRzL2FuaW1cIik7XHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnc2VydmVyX3RpcHMnKTtcclxuICAgICAgICB2YXIgSHR0cEhlbHBlciA9IHJlcXVpcmUoXCJodHRwXCIpOyBcclxuICAgICAgICB2YXIgaHR0cFJlcXVlc3QgPSBuZXcgSHR0cEhlbHBlcigpO1xyXG4gICAgICAgIGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCdodHRwczovL3d3dy5taGVhcnQueHl6L2FwcC9hcGktc2VydmVyL3VzZXItdGlwcycsIFtdLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICB2YXIgdGlwcyAgPWNjLmZpbmQoXCJDYW52YXMvdGlwcy9nb25nZ2FvX3RpcHNfc2Nvcmxsdmlldy92aWV3L2dvbmdnYW9fdGlwc1wiKTtcclxuICAgICAgICAgICAgdGlwcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1kYXRhLmRhdGFbJ2dvbmdnYW9fc3onXTtcclxuICAgICAgICAgICAgLy8g6L2s5pWw57uEXHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhKU09OLnBhcnNlKCBkYXRhLmRhdGEgKSk7XHJcbiAgICAgICAgICAgIC8vIOi9rGpzb25cclxuICAgICAgICAgICAgLy8gY2MubG9nKEpTT04uc3RyaW5naWZ5KCBkYXRhLmRhdGEgKSk7XHJcbiAgICAgICAgICAgIGZvcihsZXQgdmFsdWUgaW4gZGF0YS5kYXRhKXtcclxuICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSh2YWx1ZSxkYXRhLmRhdGFbdmFsdWVdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlcnZlcl90aXBzJyk7XHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiBcclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG4gICAgZ29uZ2dhb19zeigpe1xyXG4gICAgICAgICAgICB2YXIgdGlwcyAgPWNjLmZpbmQoXCJDYW52YXMvdGlwcy9nb25nZ2FvX3RpcHNfc2Nvcmxsdmlldy92aWV3L2dvbmdnYW9fdGlwc1wiKTtcclxuICAgICAgICAgICAgdGlwcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1jYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dvbmdnYW9fc3onKTtcclxuICAgIH0sXHJcbiAgICBnb25nZ2FvX3N4KCl7XHJcbiBcclxuICAgICAgICB2YXIgdGlwcyAgPWNjLmZpbmQoXCJDYW52YXMvdGlwcy9nb25nZ2FvX3RpcHNfc2Nvcmxsdmlldy92aWV3L2dvbmdnYW9fdGlwc1wiKTtcclxuICAgICAgICB0aXBzLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nPWNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ29uZ2dhb19zeCcpO1xyXG4gICAgfSxcclxuICAgIGdvbmdnYW9fZ3goKXtcclxuIFxyXG4gICAgICAgIHZhciB0aXBzICA9Y2MuZmluZChcIkNhbnZhcy90aXBzL2dvbmdnYW9fdGlwc19zY29ybGx2aWV3L3ZpZXcvZ29uZ2dhb190aXBzXCIpO1xyXG4gICAgICAgIHRpcHMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmc9Y2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnb25nZ2FvX2d4Jyk7XHJcbiAgICB9LFxyXG4gICAgZ29uZ2dhb19seCgpe1xyXG4gXHJcbiAgICAgICAgdmFyIHRpcHMgID1jYy5maW5kKFwiQ2FudmFzL3RpcHMvZ29uZ2dhb190aXBzX3Njb3JsbHZpZXcvdmlldy9nb25nZ2FvX3RpcHNcIik7XHJcbiAgICAgICAgdGlwcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZz1jYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dvbmdnYW9fbHgnKTtcclxuICAgIH0sXHJcbiAgICBzaG93X2RsZyAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9dHJ1ZTtcclxuICAgIH0sXHJcbiAgICBoaWRkZW5fZGxnICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID1mYWxzZTtcclxuICAgIH1cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/bage/Tool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '49a64EsluZBxJenF/5eS2wy', 'Tool');
// Script/bage/Tool.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  initInfo: function initInfo(info) {
    // ??????????????????????????????
    // ??????
    var self = this; //????????????

    cc.loader.loadRes(info['picUrl'], cc.SpriteFrame, function (err, spriteFrame) {
      self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
    }); // ????????????
    // cc.loader.release(info['picUrl'])
    // ??????

    this.node.intro = info['intro'];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxiYWdlXFxUb29sLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaW5pdEluZm8iLCJpbmZvIiwic2VsZiIsImxvYWRlciIsImxvYWRSZXMiLCJTcHJpdGVGcmFtZSIsImVyciIsInNwcml0ZUZyYW1lIiwibm9kZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsImludHJvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU1MO0FBRUFDLEVBQUFBLFFBUkssb0JBUUtDLElBUkwsRUFRVztBQUNaO0FBRUE7QUFDQSxRQUFJQyxJQUFJLEdBQUcsSUFBWCxDQUpZLENBS1o7O0FBQ0FOLElBQUFBLEVBQUUsQ0FBQ08sTUFBSCxDQUFVQyxPQUFWLENBQWtCSCxJQUFJLENBQUMsUUFBRCxDQUF0QixFQUFrQ0wsRUFBRSxDQUFDUyxXQUFyQyxFQUFrRCxVQUFVQyxHQUFWLEVBQWVDLFdBQWYsRUFBNEI7QUFDMUVMLE1BQUFBLElBQUksQ0FBQ00sSUFBTCxDQUFVQyxZQUFWLENBQXVCYixFQUFFLENBQUNjLE1BQTFCLEVBQWtDSCxXQUFsQyxHQUFnREEsV0FBaEQ7QUFDSCxLQUZELEVBTlksQ0FTWjtBQUNBO0FBQ0E7O0FBQ0EsU0FBS0MsSUFBTCxDQUFVRyxLQUFWLEdBQWtCVixJQUFJLENBQUMsT0FBRCxDQUF0QjtBQUNIO0FBckJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIGluaXRJbmZvIChpbmZvKSB7XHJcbiAgICAgICAgLy8g5Yid5aeL5YyW6K+l6YGT5YW355u45YWz5L+h5oGvXHJcblxyXG4gICAgICAgIC8vIOWbvueJh1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICAvL+WKoOi9vei1hOa6kFxyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKGluZm9bJ3BpY1VybCddLCBjYy5TcHJpdGVGcmFtZSwgZnVuY3Rpb24gKGVyciwgc3ByaXRlRnJhbWUpIHtcclxuICAgICAgICAgICAgc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8g6YeK5pS+6LWE5rqQXHJcbiAgICAgICAgLy8gY2MubG9hZGVyLnJlbGVhc2UoaW5mb1sncGljVXJsJ10pXHJcbiAgICAgICAgLy8g5LuL57uNXHJcbiAgICAgICAgdGhpcy5ub2RlLmludHJvID0gaW5mb1snaW50cm8nXTtcclxuICAgIH0sXHJcbn0pO1xyXG4iXX0=
//------QC-SOURCE-SPLIT------

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

var HttpHelper = require("http"); // var fs = require('fs'); // ??????fs??????
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
  onLoad: function onLoad() {// this.tokenlogin(); // ????????????
    // ????????????--??????????????????
    // // ??????????????????
    // this.login();
    //????????????
    // cc.sys.localStorage.setItem('token', value);
    // cc.sys.localStorage.getItem(key);
    // cc.sys.localStorage.removeItem(key);
    // ????????????????????????
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
    var repassword = this.repassword_register_in_login.getComponent(cc.EditBox).string; // ????????????

    var toggle = this.toggle_register_in.getComponent(cc.Toggle).isChecked;

    var _this = this; //??????????????????


    var phoneReg = /(^1[3|4|5|6|7|8|9]\d{9}$)|(^09\d{8}$)/;

    if (loginname == false) {
      _this.alert_register_in.string = '?????????????????????!';
      return false;
    } else if (phoneReg == false) {
      _this.alert_register_in.string = '????????????????????????!';
      return false;
    } else if (password.length < 6) {
      _this.alert_register_in.string = '??????????????????6??????!';
      return false;
    } else if (password != repassword) {
      _this.alert_register_in.string = '???????????????????????????!';
      return false;
    } else if (toggle == false) {
      _this.alert_register_in.string = '??????????????????????????????!';
      return false;
    } else {
      var params = {
        'loginname': loginname,
        'password': password // 'loginname': 'yincan1993',
        // 'password': 123456,

      };
      httpRequest.httpPost('https://www.mheart.xyz/app/api-server/register-in', params, function (data) {
        cc.log(data);

        if (data.code == 1) {
          // _this.register_alert.color =  new cc.color('#BDFF00');
          _this.alert_register_in.string = ''; // cc.sys.localStorage.setItem('token', data.data.token);

          cc.sys.localStorage.setItem('loginname', loginname);
          cc.sys.localStorage.setItem('password', password);
          _this.node.active = false;
        } else {
          _this.alert_register_in.string = '??????????????????????????????!';
        } //????????????--??????????????????

      });
    }
  },
  callback: function callback(event) {// cc.log(data)
    // var userCount =  cc.find("Canvas/ground/editbox_count").getComponent(cc.EditBox).string;
    // var userPassward =  cc.find("Canvas/ground/editbox_passward").getComponent(cc.EditBox).string;
    // console.log("???????????????"+userCount+ "???????????????"+ userPassward);
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
    //         //?????????????????????????????????
    // cc.director.loadScene('map');
    //     }else{
    //         console.log("login  filed!!!")
    //     }
    // });
  },
  start: function start() {},
  // update (dt) {},
  show_dlg: function show_dlg() {
    //????????????????????????
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxccmVnaXN0ZXJfaW4uanMiXSwibmFtZXMiOlsiSHR0cEhlbHBlciIsInJlcXVpcmUiLCJodHRwUmVxdWVzdCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYWxlcnRfcmVnaXN0ZXJfaW4iLCJMYWJlbCIsIm5hbWVfcmVnaXN0ZXJfaW5fbG9naW4iLCJFZGl0Qm94IiwicGFzc3dvcmRfcmVnaXN0ZXJfaW5fbG9naW4iLCJyZXBhc3N3b3JkX3JlZ2lzdGVyX2luX2xvZ2luIiwidG9nZ2xlX3JlZ2lzdGVyX2luIiwiVG9nZ2xlIiwib25Mb2FkIiwicmVnaXN0ZXIiLCJsb2dpbm5hbWUiLCJnZXRDb21wb25lbnQiLCJzdHJpbmciLCJwYXNzd29yZCIsInJlcGFzc3dvcmQiLCJ0b2dnbGUiLCJpc0NoZWNrZWQiLCJfdGhpcyIsInBob25lUmVnIiwibGVuZ3RoIiwicGFyYW1zIiwiaHR0cFBvc3QiLCJkYXRhIiwibG9nIiwiY29kZSIsInN5cyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJub2RlIiwiYWN0aXZlIiwiY2FsbGJhY2siLCJldmVudCIsInN0YXJ0Iiwic2hvd19kbGciLCJoaWRkZW5fZGxnIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBeEIsRUFDQTtBQUNBOzs7QUFDQSxJQUFJQyxXQUFXLEdBQUksSUFBSUYsVUFBSixFQUFuQjtBQUNBRyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsaUJBQWlCLEVBQUVKLEVBQUUsQ0FBQ0ssS0FEZDtBQUVSQyxJQUFBQSxzQkFBc0IsRUFBRU4sRUFBRSxDQUFDTyxPQUZuQjtBQUdSQyxJQUFBQSwwQkFBMEIsRUFBRVIsRUFBRSxDQUFDTyxPQUh2QjtBQUlSRSxJQUFBQSw0QkFBNEIsRUFBRVQsRUFBRSxDQUFDTyxPQUp6QjtBQUtSRyxJQUFBQSxrQkFBa0IsRUFBRVYsRUFBRSxDQUFDVztBQUxmLEdBSFA7QUFXTEMsRUFBQUEsTUFBTSxFQUFFLGtCQUFZLENBRWhCO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVILEdBaENJO0FBa0NMQyxFQUFBQSxRQUFRLEVBQUUsb0JBQVU7QUFFaEIsUUFBSUMsU0FBUyxHQUFHLEtBQUtSLHNCQUFMLENBQTRCUyxZQUE1QixDQUF5Q2YsRUFBRSxDQUFDTyxPQUE1QyxFQUFxRFMsTUFBckU7QUFDQSxRQUFJQyxRQUFRLEdBQUcsS0FBS1QsMEJBQUwsQ0FBZ0NPLFlBQWhDLENBQTZDZixFQUFFLENBQUNPLE9BQWhELEVBQXlEUyxNQUF4RTtBQUNBLFFBQUlFLFVBQVUsR0FBRyxLQUFLVCw0QkFBTCxDQUFrQ00sWUFBbEMsQ0FBK0NmLEVBQUUsQ0FBQ08sT0FBbEQsRUFBMkRTLE1BQTVFLENBSmdCLENBS2hCOztBQUNBLFFBQUlHLE1BQU0sR0FBRyxLQUFLVCxrQkFBTCxDQUF3QkssWUFBeEIsQ0FBcUNmLEVBQUUsQ0FBQ1csTUFBeEMsRUFBZ0RTLFNBQTdEOztBQUNBLFFBQUtDLEtBQUssR0FBRSxJQUFaLENBUGdCLENBUWhCOzs7QUFDQSxRQUFJQyxRQUFRLEdBQUcsdUNBQWY7O0FBQ0EsUUFBR1IsU0FBUyxJQUFFLEtBQWQsRUFBb0I7QUFDaEJPLE1BQUFBLEtBQUssQ0FBQ2pCLGlCQUFOLENBQXdCWSxNQUF4QixHQUFnQyxVQUFoQztBQUNBLGFBQU8sS0FBUDtBQUNILEtBSEQsTUFHTSxJQUFHTSxRQUFRLElBQUUsS0FBYixFQUFtQjtBQUNyQkQsTUFBQUEsS0FBSyxDQUFDakIsaUJBQU4sQ0FBd0JZLE1BQXhCLEdBQWdDLFdBQWhDO0FBQ0EsYUFBTyxLQUFQO0FBQ0gsS0FISyxNQUdBLElBQUdDLFFBQVEsQ0FBQ00sTUFBVCxHQUFnQixDQUFuQixFQUFxQjtBQUN2QkYsTUFBQUEsS0FBSyxDQUFDakIsaUJBQU4sQ0FBd0JZLE1BQXhCLEdBQWdDLFlBQWhDO0FBQ0EsYUFBTyxLQUFQO0FBQ0gsS0FISyxNQUdBLElBQUdDLFFBQVEsSUFBRUMsVUFBYixFQUF3QjtBQUMxQkcsTUFBQUEsS0FBSyxDQUFDakIsaUJBQU4sQ0FBd0JZLE1BQXhCLEdBQWdDLFlBQWhDO0FBQ0EsYUFBTyxLQUFQO0FBQ0gsS0FISyxNQUdBLElBQUdHLE1BQU0sSUFBRSxLQUFYLEVBQWlCO0FBQ25CRSxNQUFBQSxLQUFLLENBQUNqQixpQkFBTixDQUF3QlksTUFBeEIsR0FBZ0MsYUFBaEM7QUFDRCxhQUFPLEtBQVA7QUFDRixLQUhLLE1BR0Q7QUFDRCxVQUFJUSxNQUFNLEdBQUc7QUFDVCxxQkFBYVYsU0FESjtBQUVULG9CQUFZRyxRQUZILENBR1Q7QUFDQTs7QUFKUyxPQUFiO0FBT0FsQixNQUFBQSxXQUFXLENBQUMwQixRQUFaLENBQXFCLG1EQUFyQixFQUEwRUQsTUFBMUUsRUFBa0YsVUFBVUUsSUFBVixFQUFnQjtBQUM5RjFCLFFBQUFBLEVBQUUsQ0FBQzJCLEdBQUgsQ0FBT0QsSUFBUDs7QUFDQSxZQUFHQSxJQUFJLENBQUNFLElBQUwsSUFBVyxDQUFkLEVBQWdCO0FBQ1o7QUFDQVAsVUFBQUEsS0FBSyxDQUFDakIsaUJBQU4sQ0FBd0JZLE1BQXhCLEdBQWdDLEVBQWhDLENBRlksQ0FHWjs7QUFDQWhCLFVBQUFBLEVBQUUsQ0FBQzZCLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsV0FBNUIsRUFBeUNqQixTQUF6QztBQUNBZCxVQUFBQSxFQUFFLENBQUM2QixHQUFILENBQU9DLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLFVBQTVCLEVBQXdDZCxRQUF4QztBQUNBSSxVQUFBQSxLQUFLLENBQUNXLElBQU4sQ0FBV0MsTUFBWCxHQUFtQixLQUFuQjtBQUNILFNBUEQsTUFPSztBQUNEWixVQUFBQSxLQUFLLENBQUNqQixpQkFBTixDQUF3QlksTUFBeEIsR0FBZ0MsYUFBaEM7QUFDSCxTQVg2RixDQVk5Rjs7QUFDSCxPQWJEO0FBY0o7QUFLSCxHQXRGSTtBQXlGTGtCLEVBQUFBLFFBQVEsRUFBRSxrQkFBVUMsS0FBVixFQUFpQixDQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBRUgsR0FwSEk7QUFzSExDLEVBQUFBLEtBdEhLLG1CQXNISSxDQUVSLENBeEhJO0FBMEhMO0FBRUFDLEVBQUFBLFFBNUhLLHNCQTRITztBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQUtMLElBQUwsQ0FBVUMsTUFBVixHQUFrQixJQUFsQjtBQUVILEdBeElJO0FBeUlMSyxFQUFBQSxVQXpJSyx3QkF5SVM7QUFDVixTQUFLTixJQUFMLENBQVVDLE1BQVYsR0FBa0IsS0FBbEI7QUFDSDtBQTNJSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxudmFyIEh0dHBIZWxwZXIgPSByZXF1aXJlKFwiaHR0cFwiKTtcclxuLy8gdmFyIGZzID0gcmVxdWlyZSgnZnMnKTsgLy8g5byV5YWlZnPmqKHlnZdcclxuLy8gdmFyIGdsb2JhbHVzZXJpbmZvID0gcmVxdWlyZShcIkdsb2JhbHVzZXJJbmZvXCIpO1xyXG5sZXQgaHR0cFJlcXVlc3QgPSAgbmV3IEh0dHBIZWxwZXIoKTsgIFxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcbiBcclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBhbGVydF9yZWdpc3Rlcl9pbjogY2MuTGFiZWwsXHJcbiAgICAgICAgbmFtZV9yZWdpc3Rlcl9pbl9sb2dpbjogY2MuRWRpdEJveCxcclxuICAgICAgICBwYXNzd29yZF9yZWdpc3Rlcl9pbl9sb2dpbjogY2MuRWRpdEJveCxcclxuICAgICAgICByZXBhc3N3b3JkX3JlZ2lzdGVyX2luX2xvZ2luOiBjYy5FZGl0Qm94LFxyXG4gICAgICAgIHRvZ2dsZV9yZWdpc3Rlcl9pbjogY2MuVG9nZ2xlXHJcbiAgICB9LFxyXG4gXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHsgICAgICBcclxuICAgICAgICBcclxuICAgICAgICAvLyB0aGlzLnRva2VubG9naW4oKTsgLy8g5b+r5o2355m75b2VXHJcblxyXG4gICAgICAgIC8vIOaTjeS9nOaWh+acrC0t6K+75Y+W55So5oi35L+h5oGvXHJcbiAgIFxyXG4gICAgICAgIC8vIC8vIOi0puWPt+WvhueggeeZu+W9lVxyXG4gICAgICAgIC8vIHRoaXMubG9naW4oKTtcclxuICAgICAgICAvL+WCqOWtmOe8k+WtmFxyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB2YWx1ZSk7XHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XHJcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XHJcblxyXG4gICAgICAgIC8vIOS/neWtmOacgOmrmOWIhuWIsOacrOWcsFxyXG4gICAgICAgIC8vIGNvbnN0IEtFWV9CRVNUX1NDT1JFID0gXCJiZXN0U2NvcmVcIjtcclxuICAgICAgICAvLyBsZXQgYmVzdFNjb3JlID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKEtFWV9CRVNUX1NDT1JFKTtcclxuICAgICAgICAvLyBpZiAoYmVzdFNjb3JlID09PSBcIm51bGxcIiB8fCB0aGlzLnNjb3JlID4gYmVzdFNjb3JlKSB7XHJcbiAgICAgICAgLy8gICAgIGJlc3RTY29yZSA9IHRoaXMuc2NvcmU7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShLRVlfQkVTVF9TQ09SRSwgYmVzdFNjb3JlKTtcclxuICAgICAgICBcclxuICAgIH0sXHJcbiBcclxuICAgIHJlZ2lzdGVyOiBmdW5jdGlvbigpe1xyXG4gICAgICAgXHJcbiAgICAgICAgdmFyIGxvZ2lubmFtZSA9IHRoaXMubmFtZV9yZWdpc3Rlcl9pbl9sb2dpbi5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xyXG4gICAgICAgIHZhciBwYXNzd29yZCA9IHRoaXMucGFzc3dvcmRfcmVnaXN0ZXJfaW5fbG9naW4uZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZztcclxuICAgICAgICB2YXIgcmVwYXNzd29yZCA9IHRoaXMucmVwYXNzd29yZF9yZWdpc3Rlcl9pbl9sb2dpbi5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xyXG4gICAgICAgIC8vIOaYr+WQpuWLvumAiVxyXG4gICAgICAgIHZhciB0b2dnbGUgPSB0aGlzLnRvZ2dsZV9yZWdpc3Rlcl9pbi5nZXRDb21wb25lbnQoY2MuVG9nZ2xlKS5pc0NoZWNrZWQ7XHJcbiAgICAgICAgdmFyICBfdGhpcyA9dGhpcztcclxuICAgICAgICAvL+aJi+acuuagvOW8j+mqjOivgVxyXG4gICAgICAgIGxldCBwaG9uZVJlZyA9IC8oXjFbM3w0fDV8Nnw3fDh8OV1cXGR7OX0kKXwoXjA5XFxkezh9JCkvO1xyXG4gICAgICAgIGlmKGxvZ2lubmFtZT09ZmFsc2Upe1xyXG4gICAgICAgICAgICBfdGhpcy5hbGVydF9yZWdpc3Rlcl9pbi5zdHJpbmcgPSfor7fovpPlhaXmiYvmnLrlj7fnoIEhJztcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1lbHNlIGlmKHBob25lUmVnPT1mYWxzZSl7XHJcbiAgICAgICAgICAgIF90aGlzLmFsZXJ0X3JlZ2lzdGVyX2luLnN0cmluZyA9J+aJi+acuuWPt+eggeagvOW8j+mUmeivryEnO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfWVsc2UgaWYocGFzc3dvcmQubGVuZ3RoPDYpe1xyXG4gICAgICAgICAgICBfdGhpcy5hbGVydF9yZWdpc3Rlcl9pbi5zdHJpbmcgPSflr4bnoIHkuI3og73lsJHkuo425L2N5pWwISc7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9ZWxzZSBpZihwYXNzd29yZCE9cmVwYXNzd29yZCl7XHJcbiAgICAgICAgICAgIF90aGlzLmFsZXJ0X3JlZ2lzdGVyX2luLnN0cmluZyA9J+S4pOasoei+k+WFpeWvhueggeS4jeS4gOiHtCEnO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfWVsc2UgaWYodG9nZ2xlPT1mYWxzZSl7XHJcbiAgICAgICAgICAgIF90aGlzLmFsZXJ0X3JlZ2lzdGVyX2luLnN0cmluZyA9J+ivt+mYheivu+W5tuWQjOaEj+ebuOWFs+WNj+iuriEnO1xyXG4gICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAgICdsb2dpbm5hbWUnOiBsb2dpbm5hbWUsXHJcbiAgICAgICAgICAgICAgICAncGFzc3dvcmQnOiBwYXNzd29yZCxcclxuICAgICAgICAgICAgICAgIC8vICdsb2dpbm5hbWUnOiAneWluY2FuMTk5MycsXHJcbiAgICAgICAgICAgICAgICAvLyAncGFzc3dvcmQnOiAxMjM0NTYsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCdodHRwczovL3d3dy5taGVhcnQueHl6L2FwcC9hcGktc2VydmVyL3JlZ2lzdGVyLWluJywgcGFyYW1zICxmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY2MubG9nKGRhdGEpOyBcclxuICAgICAgICAgICAgICAgIGlmKGRhdGEuY29kZT09MSl7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gX3RoaXMucmVnaXN0ZXJfYWxlcnQuY29sb3IgPSAgbmV3IGNjLmNvbG9yKCcjQkRGRjAwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuYWxlcnRfcmVnaXN0ZXJfaW4uc3RyaW5nID0nJztcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgZGF0YS5kYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvZ2lubmFtZScsIGxvZ2lubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwYXNzd29yZCcsIHBhc3N3b3JkKTtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5ub2RlLmFjdGl2ZSA9ZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5hbGVydF9yZWdpc3Rlcl9pbi5zdHJpbmcgPSfmiYvmnLrlj7flt7LlrZjlnKjvvIzor7fph43or5UhJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8v5pON5L2c5paH5pysLS3kv67mlLnnlKjmiLfkv6Hmga9cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgfSxcclxuXHJcbiAgXHJcbiAgICBjYWxsYmFjazogZnVuY3Rpb24gKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gY2MubG9nKGRhdGEpXHJcbiAgICAgICAgLy8gdmFyIHVzZXJDb3VudCA9ICBjYy5maW5kKFwiQ2FudmFzL2dyb3VuZC9lZGl0Ym94X2NvdW50XCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XHJcbiAgICAgICAgLy8gdmFyIHVzZXJQYXNzd2FyZCA9ICBjYy5maW5kKFwiQ2FudmFzL2dyb3VuZC9lZGl0Ym94X3Bhc3N3YXJkXCIpLmdldENvbXBvbmVudChjYy5FZGl0Qm94KS5zdHJpbmc7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLnlKjmiLfotKblj7fvvJpcIit1c2VyQ291bnQrIFwi55So5oi35a+G56CB77yaXCIrIHVzZXJQYXNzd2FyZCk7XHJcbiAgICAgICAgLy8gSHR0cEhlbHAubG9naW4odXNlckNvdW50LHVzZXJQYXNzd2FyZCxmdW5jdGlvbihpc1N1Y2Nlc3MsRGF0YSl7XHJcbiAgICAgICAgLy8gICAgIHZhciBpbmZvID0gRGF0YTtcclxuICAgICAgICAvLyAgICAgaWYodHJ1ZSA9PSBpc1N1Y2Nlc3Mpe1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJsb2dpbiAgc3VjY2VzcyEhIVwiKTtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGluZm8pO1xyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8udXNlcm5hbWUgPSBpbmZvLnVzZXJuYW1lO1xyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8uZ2FtZXBvaW50ID0gaW5mby5nYW1lcG9pbnQ7XHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby5za2V5ID0gaW5mby5za2V5O1xyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8udXNlcmlkID0gaW5mby51c2VyaWQ7XHJcbiBcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLm1vbmV5ID0gaW5mby5tb25leTtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnVzZXJpZCA9IGluZm8udXNlcmlkO1xyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8ucGFzc3dvcmQgPSBpbmZvLnBhc3N3b3JkO1xyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8uc2FsdCA9IGluZm8uc2FsdDtcclxuIFxyXG4gICAgICAgIC8vICAgICAgICAgLy/nmbvlvZXmiJDlip/lkI7liqDovb3lnLDlm77otYTmupBcclxuICAgICAgICAgICAgICAgIC8vIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFwJyk7XHJcbiAgICAgICAgLy8gICAgIH1lbHNle1xyXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJsb2dpbiAgZmlsZWQhISFcIilcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfSxcclxuIFxyXG4gICAgc3RhcnQgKCkge1xyXG4gXHJcbiAgICB9LFxyXG4gXHJcbiAgICAvLyB1cGRhdGUgKGR0KSB7fSxcclxuXHJcbiAgICBzaG93X2RsZyAoKSB7XHJcbiAgICAgICAgLy/mmL7npLrlh7rnjrDotKblj7flr4bnoIFcclxuICAgICAgICAvLyB2YXIgbG9naW5uYW1lID1jYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvZ2lubmFtZScpO1xyXG4gICAgICAgIC8vIHZhciBwYXNzd29yZCA9Y2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwYXNzd29yZCcpO1xyXG4gICAgICAgIC8vIGlmKGxvZ2lubmFtZSl7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucmVnaXN0ZXJfbG9naW5fbmFtZS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nPWxvZ2lubmFtZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gaWYobG9naW5uYW1lKXtcclxuICAgICAgICAvLyAgICAgdGhpcy5yZWdpc3Rlcl9sb2dpbl9wYXNzd29yZC5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nPXBhc3N3b3JkO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID10cnVlO1xyXG5cclxuICAgIH0sXHJcbiAgICBoaWRkZW5fZGxnICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuYWN0aXZlID1mYWxzZTtcclxuICAgIH1cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/scence/wap.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b005bs3OsxEXphcM4J27bYW', 'wap');
// Script/scence/wap.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {// foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {// this.updateCanvasSize();
    // cc.view.setResizeCallback(() => {
    //     this.updateCanvasSize();
    // })
  } // ?????????????????????????????????????????????????????????????????????
  // updateCanvasSize() {
  //     let size = cc.view.getFrameSize();
  //     if (size.width > size.height) {
  //         this.canvas.fitWidth = false;
  //         this.canvas.fitHeight = true;
  //         this.canvas.designResolution = cc.size(1920, 1080);
  //         this.showLandscape();
  //     } else {
  //         this.canvas.fitWidth = true;
  //         this.canvas.fitHeight = false;
  //         this.canvas.designResolution = cc.size(1080, 1920);
  //         this.showPortait();
  //     }
  // },
  // update (dt) {},

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuY2VcXHdhcC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsQ0FDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmUSxHQUhQO0FBcUJMO0FBRUE7QUFFQUMsRUFBQUEsS0F6QkssbUJBeUJHLENBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDSCxHQTlCSSxDQWdDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFoREssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgfSxcclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICAvLyBvbkxvYWQgKCkge30sXHJcblxyXG4gICAgc3RhcnQoKSB7XHJcbiAgICAgICAgLy8gdGhpcy51cGRhdGVDYW52YXNTaXplKCk7XHJcbiAgICAgICAgLy8gY2Mudmlldy5zZXRSZXNpemVDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudXBkYXRlQ2FudmFzU2l6ZSgpO1xyXG4gICAgICAgIC8vIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIOiHqueUseWIh+aNouaoquerluWxj++8jOWKqOaAgeiuvue9ruiuvuiuoeWIhui+qOeOh+WSjOmAgumFjeaooeW8j+OAglxyXG4gICAgLy8gdXBkYXRlQ2FudmFzU2l6ZSgpIHtcclxuICAgIC8vICAgICBsZXQgc2l6ZSA9IGNjLnZpZXcuZ2V0RnJhbWVTaXplKCk7XHJcbiAgICAvLyAgICAgaWYgKHNpemUud2lkdGggPiBzaXplLmhlaWdodCkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmNhbnZhcy5maXRXaWR0aCA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmNhbnZhcy5maXRIZWlnaHQgPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmNhbnZhcy5kZXNpZ25SZXNvbHV0aW9uID0gY2Muc2l6ZSgxOTIwLCAxMDgwKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5zaG93TGFuZHNjYXBlKCk7XHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5jYW52YXMuZml0V2lkdGggPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmNhbnZhcy5maXRIZWlnaHQgPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgdGhpcy5jYW52YXMuZGVzaWduUmVzb2x1dGlvbiA9IGNjLnNpemUoMTA4MCwgMTkyMCk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc2hvd1BvcnRhaXQoKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/scence/scoretrump.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f6b99ZAVAJJtbvT/VopdNIP', 'scoretrump');
// Script/scence/scoretrump.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    // foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
    //??????item
    content: {
      "default": null,
      type: cc.Node
    },
    person: {
      "default": null,
      type: cc.Prefab
    },
    //??????
    test_scrollView: {
      "default": null,
      type: cc.ScrollView
    },
    //????????????
    test_pageView: {
      "default": null,
      type: cc.PageView
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    for (var i = 0; i < 10; i++) {
      var person = cc.instantiate(this.person);
      this.conten = person; // person.parent = this.content;
      // this.addTouchEvent(person);  //??????????????????
    } // this.value_set = [];
    // // ??????????????????????????????????????????push??????????????????;
    // for(var i = 1; i <= 100; i ++) {
    //     this.value_set.push(i);
    // }
    // this.content = this.scroll_view.content;
    // this.opt_item_set = [];
    // for(var i = 0; i < this.PAGE_NUM * 3; i ++) {
    //     var item = cc.instantiate(this.item_prefab);
    //     this.content.addChild(item);
    //     this.opt_item_set.push(item);
    // }
    // this.scroll_view.node.on("scroll-ended", this.on_scroll_ended.bind(this), this);

  },
  addTouchEvent: function addTouchEvent(node_1) {
    node_1.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
    node_1.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
    node_1.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
  } // start: function() {
  //     this.start_y = this.content.y;
  //     this.start_index = 0; // ????????????24???Item????????? 100?????????????????????????????????????????????;
  //     this.load_record(this.start_index);
  // },
  // // ?????????????????????????????????????????????????????????????????????????????????
  // load_record: function(start_index) {
  //     this.start_index = start_index;
  //     for(var i = 0; i < this.PAGE_NUM * 3; i ++) {
  //         var label = this.opt_item_set[i].getChildByName("src").getComponent(cc.Label);
  //         // ?????????????????????;
  //         label.string = this.value_set[start_index + i];
  //     }
  // },
  // on_scroll_ended: function() {
  //     this.scrollveiw_load_recode();
  //     this.scroll_view.elastic = true;
  // },
  // scrollveiw_load_recode: function() {
  //      // ???????????????
  //     if (this.start_index + this.PAGE_NUM * 3 < this.value_set.length &&
  //         this.content.y >= this.start_y + this.PAGE_NUM * 2 * this.OPT_HEIGHT) { // ????????????
  //         if (this.scroll_view._autoScrolling) { // ????????????????????????????????????????????????
  //             this.scroll_view.elastic = false; // ????????????????????????
  //             return;
  //         }
  //         var down_loaded = this.PAGE_NUM;
  //         this.start_index += down_loaded;
  //         if (this.start_index + this.PAGE_NUM * 3 > this.value_set.length) {
  //             var out_len = this.start_index + this.PAGE_NUM * 3 - this.value_set.length;
  //             down_loaded -= (out_len);
  //             this.start_index -= (out_len);
  //         }
  //         this.load_record(this.start_index);
  //         this.content.y -= (down_loaded * this.OPT_HEIGHT);
  //         return;
  //     }
  //     // ????????????
  //     if (this.start_index > 0 && this.content.y <= this.start_y) {
  //         if (this.scroll_view._autoScrolling) { // ????????????????????????????????????????????????
  //             this.scroll_view.elastic = false;
  //             return;
  //         }
  //         var up_loaded = this.PAGE_NUM;
  //         this.start_index -= up_loaded;
  //         if (this.start_index < 0) {
  //             up_loaded += this.start_index;
  //             this.start_index = 0; 
  //         }
  //         this.load_record(this.start_index);
  //         this.content.y += (up_loaded * this.OPT_HEIGHT);
  //     }
  //     // end 
  // },
  // // called every frame, uncomment this function to activate update callback
  // update: function (dt) {
  //     this.scrollveiw_load_recode();
  // },

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuY2VcXHNjb3JldHJ1bXAuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjb250ZW50IiwidHlwZSIsIk5vZGUiLCJwZXJzb24iLCJQcmVmYWIiLCJ0ZXN0X3Njcm9sbFZpZXciLCJTY3JvbGxWaWV3IiwidGVzdF9wYWdlVmlldyIsIlBhZ2VWaWV3Iiwib25Mb2FkIiwiaSIsImluc3RhbnRpYXRlIiwiY29udGVuIiwiYWRkVG91Y2hFdmVudCIsIm5vZGVfMSIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJ0b3VjaFN0YXJ0IiwiVE9VQ0hfTU9WRSIsInRvdWNoTW92ZSIsIlRPVUNIX0VORCIsInRvdWNoRW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSTtBQUNKQyxJQUFBQSxPQUFPLEVBQUU7QUFDUCxpQkFBUyxJQURGO0FBRVBDLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDTTtBQUZGLEtBakJEO0FBc0JWQyxJQUFBQSxNQUFNLEVBQUU7QUFDTixpQkFBUyxJQURIO0FBRU5GLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDUTtBQUZILEtBdEJFO0FBMEJWO0FBQ0FDLElBQUFBLGVBQWUsRUFBRTtBQUNmLGlCQUFTLElBRE07QUFFZkosTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNVO0FBRk0sS0EzQlA7QUErQlY7QUFDQUMsSUFBQUEsYUFBYSxFQUFFO0FBQ2IsaUJBQVMsSUFESTtBQUViTixNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ1k7QUFGSTtBQWhDTCxHQUhQO0FBNkNMO0FBRUFDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWTtBQUNoQixTQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7QUFDekIsVUFBSVAsTUFBTSxHQUFHUCxFQUFFLENBQUNlLFdBQUgsQ0FBZSxLQUFLUixNQUFwQixDQUFiO0FBQ0EsV0FBS1MsTUFBTCxHQUFZVCxNQUFaLENBRnlCLENBR3pCO0FBQ0E7QUFDRCxLQU5hLENBT2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNILEdBckVJO0FBc0VMVSxFQUFBQSxhQXRFSyx5QkFzRVNDLE1BdEVULEVBc0VpQjtBQUNsQkEsSUFBQUEsTUFBTSxDQUFDQyxFQUFQLENBQVVuQixFQUFFLENBQUNNLElBQUgsQ0FBUWMsU0FBUixDQUFrQkMsV0FBNUIsRUFBeUMsS0FBS0MsVUFBOUMsRUFBMEQsSUFBMUQ7QUFDQUosSUFBQUEsTUFBTSxDQUFDQyxFQUFQLENBQVVuQixFQUFFLENBQUNNLElBQUgsQ0FBUWMsU0FBUixDQUFrQkcsVUFBNUIsRUFBd0MsS0FBS0MsU0FBN0MsRUFBd0QsSUFBeEQ7QUFDQU4sSUFBQUEsTUFBTSxDQUFDQyxFQUFQLENBQVVuQixFQUFFLENBQUNNLElBQUgsQ0FBUWMsU0FBUixDQUFrQkssU0FBNUIsRUFBdUMsS0FBS0MsUUFBNUMsRUFBc0QsSUFBdEQ7QUFDRCxHQTFFRSxDQTJFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUE3SUssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgICAvL+a1i+ivlWl0ZW1cclxuICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICBwZXJzb246IHtcclxuICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIHR5cGU6IGNjLlByZWZhYlxyXG4gICAgICB9LFxyXG4gICAgICAvL+WIl+ihqFxyXG4gICAgICB0ZXN0X3Njcm9sbFZpZXc6IHtcclxuICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIHR5cGU6IGNjLlNjcm9sbFZpZXdcclxuICAgICAgfSxcclxuICAgICAgLy/nv7vpobXlrrnlmahcclxuICAgICAgdGVzdF9wYWdlVmlldzoge1xyXG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgdHlwZTogY2MuUGFnZVZpZXdcclxuICAgICAgfSxcclxuXHJcbiAgICB9LFxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgcGVyc29uID0gY2MuaW5zdGFudGlhdGUodGhpcy5wZXJzb24pO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbj1wZXJzb25cclxuICAgICAgICAgICAgLy8gcGVyc29uLnBhcmVudCA9IHRoaXMuY29udGVudDtcclxuICAgICAgICAgICAgLy8gdGhpcy5hZGRUb3VjaEV2ZW50KHBlcnNvbik7ICAvL+a3u+WKoOinpuaRuOS6i+S7tlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMudmFsdWVfc2V0ID0gW107XHJcbiAgICAgICAgLy8gLy8g5aaC5p6c5L2g6L+Z6YeM5piv5o6S6KGM5qac77yM6YKj5LmI5L2g5bCxcHVzaOaOkuihjOamnOeahOaVsOaNrjtcclxuICAgICAgICAvLyBmb3IodmFyIGkgPSAxOyBpIDw9IDEwMDsgaSArKykge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnZhbHVlX3NldC5wdXNoKGkpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcy5jb250ZW50ID0gdGhpcy5zY3JvbGxfdmlldy5jb250ZW50O1xyXG4gICAgICAgIC8vIHRoaXMub3B0X2l0ZW1fc2V0ID0gW107XHJcbiAgICAgICAgLy8gZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuUEFHRV9OVU0gKiAzOyBpICsrKSB7XHJcbiAgICAgICAgLy8gICAgIHZhciBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtX3ByZWZhYik7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuY29udGVudC5hZGRDaGlsZChpdGVtKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5vcHRfaXRlbV9zZXQucHVzaChpdGVtKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMuc2Nyb2xsX3ZpZXcubm9kZS5vbihcInNjcm9sbC1lbmRlZFwiLCB0aGlzLm9uX3Njcm9sbF9lbmRlZC5iaW5kKHRoaXMpLCB0aGlzKTtcclxuICAgIH0sXHJcbiAgICBhZGRUb3VjaEV2ZW50KG5vZGVfMSkge1xyXG4gICAgICAgIG5vZGVfMS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICBub2RlXzEub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIG5vZGVfMS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICB9LFxyXG4gICAgLy8gc3RhcnQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgIHRoaXMuc3RhcnRfeSA9IHRoaXMuY29udGVudC55O1xyXG4gICAgLy8gICAgIHRoaXMuc3RhcnRfaW5kZXggPSAwOyAvLyDlvZPliY3miJHku6wyNOS4qkl0ZW3liqDovb3nmoQgMTAw6aG55pWw5o2u6YeM6Z2i55qE6LW35aeL5pWw5o2u6K6w5b2V55qE57Si5byVO1xyXG4gICAgLy8gICAgIHRoaXMubG9hZF9yZWNvcmQodGhpcy5zdGFydF9pbmRleCk7XHJcbiAgICAvLyB9LFxyXG5cclxuICAgIC8vIC8vIOS7jui/meS4que0ouW8leW8gOWni++8jOWKoOi9veaVsOaNruiusOW9leWIsOaIkeS7rOeahOa7muWKqOWIl+ihqOmHjOmdoueahOmAiemhuVxyXG4gICAgLy8gbG9hZF9yZWNvcmQ6IGZ1bmN0aW9uKHN0YXJ0X2luZGV4KSB7XHJcbiAgICAvLyAgICAgdGhpcy5zdGFydF9pbmRleCA9IHN0YXJ0X2luZGV4O1xyXG5cclxuICAgIC8vICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5QQUdFX05VTSAqIDM7IGkgKyspIHtcclxuICAgIC8vICAgICAgICAgdmFyIGxhYmVsID0gdGhpcy5vcHRfaXRlbV9zZXRbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJzcmNcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgIC8vICAgICAgICAgLy8g5pi+56S65oiR5Lus55qE6K6w5b2VO1xyXG4gICAgLy8gICAgICAgICBsYWJlbC5zdHJpbmcgPSB0aGlzLnZhbHVlX3NldFtzdGFydF9pbmRleCArIGldO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0sXHJcblxyXG4gICAgLy8gb25fc2Nyb2xsX2VuZGVkOiBmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICB0aGlzLnNjcm9sbHZlaXdfbG9hZF9yZWNvZGUoKTtcclxuICAgIC8vICAgICB0aGlzLnNjcm9sbF92aWV3LmVsYXN0aWMgPSB0cnVlO1xyXG4gICAgLy8gfSxcclxuXHJcbiAgICAvLyBzY3JvbGx2ZWl3X2xvYWRfcmVjb2RlOiBmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICAgLy8g5ZCR5LiL5Yqg6L295LqGXHJcbiAgICAvLyAgICAgaWYgKHRoaXMuc3RhcnRfaW5kZXggKyB0aGlzLlBBR0VfTlVNICogMyA8IHRoaXMudmFsdWVfc2V0Lmxlbmd0aCAmJlxyXG4gICAgLy8gICAgICAgICB0aGlzLmNvbnRlbnQueSA+PSB0aGlzLnN0YXJ0X3kgKyB0aGlzLlBBR0VfTlVNICogMiAqIHRoaXMuT1BUX0hFSUdIVCkgeyAvLyDliqjmgIHliqDovb1cclxuICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLnNjcm9sbF92aWV3Ll9hdXRvU2Nyb2xsaW5nKSB7IC8vIOetieW+hei/meS4quiHquWKqOa7muWKqOe7k+adn+S7peWQjuWGjeWBmuWKoOi9vVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY3JvbGxfdmlldy5lbGFzdGljID0gZmFsc2U7IC8vIOaaguaXtuWFs+mXreWbnuW8ueaViOaenFxyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICB2YXIgZG93bl9sb2FkZWQgPSB0aGlzLlBBR0VfTlVNO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnN0YXJ0X2luZGV4ICs9IGRvd25fbG9hZGVkO1xyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5zdGFydF9pbmRleCArIHRoaXMuUEFHRV9OVU0gKiAzID4gdGhpcy52YWx1ZV9zZXQubGVuZ3RoKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB2YXIgb3V0X2xlbiA9IHRoaXMuc3RhcnRfaW5kZXggKyB0aGlzLlBBR0VfTlVNICogMyAtIHRoaXMudmFsdWVfc2V0Lmxlbmd0aDtcclxuICAgIC8vICAgICAgICAgICAgIGRvd25fbG9hZGVkIC09IChvdXRfbGVuKTtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc3RhcnRfaW5kZXggLT0gKG91dF9sZW4pO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIHRoaXMubG9hZF9yZWNvcmQodGhpcy5zdGFydF9pbmRleCk7XHJcblxyXG4gICAgLy8gICAgICAgICB0aGlzLmNvbnRlbnQueSAtPSAoZG93bl9sb2FkZWQgKiB0aGlzLk9QVF9IRUlHSFQpO1xyXG4gICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICAvLyDlkJHkuIrliqDovb1cclxuICAgIC8vICAgICBpZiAodGhpcy5zdGFydF9pbmRleCA+IDAgJiYgdGhpcy5jb250ZW50LnkgPD0gdGhpcy5zdGFydF95KSB7XHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLnNjcm9sbF92aWV3Ll9hdXRvU2Nyb2xsaW5nKSB7IC8vIOetieW+hei/meS4quiHquWKqOa7muWKqOe7k+adn+S7peWQjuWGjeWBmuWKoOi9vVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY3JvbGxfdmlldy5lbGFzdGljID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgIHZhciB1cF9sb2FkZWQgPSB0aGlzLlBBR0VfTlVNO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnN0YXJ0X2luZGV4IC09IHVwX2xvYWRlZDtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuc3RhcnRfaW5kZXggPCAwKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB1cF9sb2FkZWQgKz0gdGhpcy5zdGFydF9pbmRleDtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc3RhcnRfaW5kZXggPSAwOyBcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB0aGlzLmxvYWRfcmVjb3JkKHRoaXMuc3RhcnRfaW5kZXgpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmNvbnRlbnQueSArPSAodXBfbG9hZGVkICogdGhpcy5PUFRfSEVJR0hUKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgLy8gZW5kIFxyXG4gICAgLy8gfSxcclxuICAgIC8vIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgLy8gICAgIHRoaXMuc2Nyb2xsdmVpd19sb2FkX3JlY29kZSgpO1xyXG4gICAgLy8gfSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/bage/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ca358Mpn0dPrJ82VRBGkbhR', 'Game');
// Script/bage/Game.js

"use strict";

var _Conf = require("./Conf");

cc.Class({
  "extends": cc.Component,
  properties: {
    gridLayout: cc.Node,
    toolPrefab: cc.Prefab
  },
  // LIFE-CYCLE CALLBACKS:
  spawnTools: function spawnTools() {
    // ????????????gridLayout???????????????
    var cellWidth = this.gridLayout.width * 0.105;
    var cellHeight = this.gridLayout.height * 0.215;
    var spacingX = this.gridLayout.width * 0.022;
    var spacingY = this.gridLayout.height * 0.045;
    this.gridLayout.getComponent(cc.Layout).cellSize.width = cellWidth;
    this.gridLayout.getComponent(cc.Layout).cellSize.height = cellHeight;
    this.gridLayout.getComponent(cc.Layout).spacingX = spacingX;
    this.gridLayout.getComponent(cc.Layout).spacingY = spacingY; // ??????TOOLS?????????????????????

    this.toolsArray = [];

    for (var i = 0; i < _Conf.TOOLS.length; i++) {
      var tool = cc.instantiate(this.toolPrefab);
      tool.getComponent('Tool').initInfo(_Conf.TOOLS[i]);
      this.toolsArray.push(tool);
      this.gridLayout.addChild(tool);
    }
  },
  bagBtn: function bagBtn() {
    // ????????????
    if (this.gridLayout.parent.active) {
      // ????????????
      this.gridLayout.parent.active = false; // ??????????????????(??????????????????????????????????????????)

      this.toolsArray.forEach(function (element) {
        element.removeFromParent();
      });
    } else {
      // ????????????
      this.gridLayout.parent.active = true; // ??????????????????

      this.spawnTools();
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxiYWdlXFxHYW1lLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZ3JpZExheW91dCIsIk5vZGUiLCJ0b29sUHJlZmFiIiwiUHJlZmFiIiwic3Bhd25Ub29scyIsImNlbGxXaWR0aCIsIndpZHRoIiwiY2VsbEhlaWdodCIsImhlaWdodCIsInNwYWNpbmdYIiwic3BhY2luZ1kiLCJnZXRDb21wb25lbnQiLCJMYXlvdXQiLCJjZWxsU2l6ZSIsInRvb2xzQXJyYXkiLCJpIiwiVE9PTFMiLCJsZW5ndGgiLCJ0b29sIiwiaW5zdGFudGlhdGUiLCJpbml0SW5mbyIsInB1c2giLCJhZGRDaGlsZCIsImJhZ0J0biIsInBhcmVudCIsImFjdGl2ZSIsImZvckVhY2giLCJlbGVtZW50IiwicmVtb3ZlRnJvbVBhcmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFVBQVUsRUFBRUosRUFBRSxDQUFDSyxJQURQO0FBRVJDLElBQUFBLFVBQVUsRUFBRU4sRUFBRSxDQUFDTztBQUZQLEdBSFA7QUFRTDtBQUVBQyxFQUFBQSxVQVZLLHdCQVVTO0FBQ1Y7QUFDQSxRQUFJQyxTQUFTLEdBQUcsS0FBS0wsVUFBTCxDQUFnQk0sS0FBaEIsR0FBd0IsS0FBeEM7QUFDQSxRQUFJQyxVQUFVLEdBQUcsS0FBS1AsVUFBTCxDQUFnQlEsTUFBaEIsR0FBeUIsS0FBMUM7QUFDQSxRQUFJQyxRQUFRLEdBQUcsS0FBS1QsVUFBTCxDQUFnQk0sS0FBaEIsR0FBd0IsS0FBdkM7QUFDQSxRQUFJSSxRQUFRLEdBQUcsS0FBS1YsVUFBTCxDQUFnQlEsTUFBaEIsR0FBeUIsS0FBeEM7QUFFQSxTQUFLUixVQUFMLENBQWdCVyxZQUFoQixDQUE2QmYsRUFBRSxDQUFDZ0IsTUFBaEMsRUFBd0NDLFFBQXhDLENBQWlEUCxLQUFqRCxHQUF5REQsU0FBekQ7QUFDQSxTQUFLTCxVQUFMLENBQWdCVyxZQUFoQixDQUE2QmYsRUFBRSxDQUFDZ0IsTUFBaEMsRUFBd0NDLFFBQXhDLENBQWlETCxNQUFqRCxHQUEwREQsVUFBMUQ7QUFDQSxTQUFLUCxVQUFMLENBQWdCVyxZQUFoQixDQUE2QmYsRUFBRSxDQUFDZ0IsTUFBaEMsRUFBd0NILFFBQXhDLEdBQW1EQSxRQUFuRDtBQUNBLFNBQUtULFVBQUwsQ0FBZ0JXLFlBQWhCLENBQTZCZixFQUFFLENBQUNnQixNQUFoQyxFQUF3Q0YsUUFBeEMsR0FBbURBLFFBQW5ELENBVlUsQ0FZVjs7QUFDQSxTQUFLSSxVQUFMLEdBQWtCLEVBQWxCOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxHQUFDQyxZQUFNQyxNQUF0QixFQUE4QkYsQ0FBQyxFQUEvQixFQUFtQztBQUMvQixVQUFJRyxJQUFJLEdBQUd0QixFQUFFLENBQUN1QixXQUFILENBQWUsS0FBS2pCLFVBQXBCLENBQVg7QUFDQWdCLE1BQUFBLElBQUksQ0FBQ1AsWUFBTCxDQUFrQixNQUFsQixFQUEwQlMsUUFBMUIsQ0FBbUNKLFlBQU1ELENBQU4sQ0FBbkM7QUFDQSxXQUFLRCxVQUFMLENBQWdCTyxJQUFoQixDQUFxQkgsSUFBckI7QUFDQSxXQUFLbEIsVUFBTCxDQUFnQnNCLFFBQWhCLENBQXlCSixJQUF6QjtBQUNIO0FBQ0osR0E5Qkk7QUFnQ0xLLEVBQUFBLE1BaENLLG9CQWdDSztBQUNOO0FBQ0EsUUFBSSxLQUFLdkIsVUFBTCxDQUFnQndCLE1BQWhCLENBQXVCQyxNQUEzQixFQUFtQztBQUMvQjtBQUNBLFdBQUt6QixVQUFMLENBQWdCd0IsTUFBaEIsQ0FBdUJDLE1BQXZCLEdBQWdDLEtBQWhDLENBRitCLENBSS9COztBQUNBLFdBQUtYLFVBQUwsQ0FBZ0JZLE9BQWhCLENBQXdCLFVBQUFDLE9BQU8sRUFBSTtBQUMvQkEsUUFBQUEsT0FBTyxDQUFDQyxnQkFBUjtBQUNILE9BRkQ7QUFHSCxLQVJELE1BU0s7QUFDRDtBQUNBLFdBQUs1QixVQUFMLENBQWdCd0IsTUFBaEIsQ0FBdUJDLE1BQXZCLEdBQWdDLElBQWhDLENBRkMsQ0FJRDs7QUFDQSxXQUFLckIsVUFBTDtBQUNIO0FBQ0o7QUFsREksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtUT09MU30gZnJvbSAnLi9Db25mJztcclxuXHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgZ3JpZExheW91dDogY2MuTm9kZSxcclxuICAgICAgICB0b29sUHJlZmFiOiBjYy5QcmVmYWIsXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIHNwYXduVG9vbHMgKCkge1xyXG4gICAgICAgIC8vIOmmluWFiOehruWummdyaWRMYXlvdXTnmoTlkITkuKrlsZ7mgKdcclxuICAgICAgICBsZXQgY2VsbFdpZHRoID0gdGhpcy5ncmlkTGF5b3V0LndpZHRoICogMC4xMDU7XHJcbiAgICAgICAgbGV0IGNlbGxIZWlnaHQgPSB0aGlzLmdyaWRMYXlvdXQuaGVpZ2h0ICogMC4yMTU7XHJcbiAgICAgICAgbGV0IHNwYWNpbmdYID0gdGhpcy5ncmlkTGF5b3V0LndpZHRoICogMC4wMjI7XHJcbiAgICAgICAgbGV0IHNwYWNpbmdZID0gdGhpcy5ncmlkTGF5b3V0LmhlaWdodCAqIDAuMDQ1O1xyXG5cclxuICAgICAgICB0aGlzLmdyaWRMYXlvdXQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuY2VsbFNpemUud2lkdGggPSBjZWxsV2lkdGg7XHJcbiAgICAgICAgdGhpcy5ncmlkTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpLmNlbGxTaXplLmhlaWdodCA9IGNlbGxIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5ncmlkTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpLnNwYWNpbmdYID0gc3BhY2luZ1g7XHJcbiAgICAgICAgdGhpcy5ncmlkTGF5b3V0LmdldENvbXBvbmVudChjYy5MYXlvdXQpLnNwYWNpbmdZID0gc3BhY2luZ1k7XHJcblxyXG4gICAgICAgIC8vIOagueaNrlRPT0xT55Sf5oiQ55u45bqU55qE6YGT5YW3XHJcbiAgICAgICAgdGhpcy50b29sc0FycmF5ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPFRPT0xTLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB0b29sID0gY2MuaW5zdGFudGlhdGUodGhpcy50b29sUHJlZmFiKTtcclxuICAgICAgICAgICAgdG9vbC5nZXRDb21wb25lbnQoJ1Rvb2wnKS5pbml0SW5mbyhUT09MU1tpXSk7XHJcbiAgICAgICAgICAgIHRoaXMudG9vbHNBcnJheS5wdXNoKHRvb2wpO1xyXG4gICAgICAgICAgICB0aGlzLmdyaWRMYXlvdXQuYWRkQ2hpbGQodG9vbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuXHJcbiAgICBiYWdCdG4gKCkge1xyXG4gICAgICAgIC8vIOiDjOWMheaMiemSrlxyXG4gICAgICAgIGlmICh0aGlzLmdyaWRMYXlvdXQucGFyZW50LmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAvLyDpmpDol4/oioLngrlcclxuICAgICAgICAgICAgdGhpcy5ncmlkTGF5b3V0LnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIC8vIOWIoOmZpOaJgOaciemBk+WFtyjmiJbogIXkuI3liKDvvIzlj6rmmK/pmpDol4/vvIzoh6rlt7HlhrPlrpopXHJcbiAgICAgICAgICAgIHRoaXMudG9vbHNBcnJheS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8g5pi+56S66IqC54K5XHJcbiAgICAgICAgICAgIHRoaXMuZ3JpZExheW91dC5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIOeUn+aIkOaJgOaciemBk+WFt1xyXG4gICAgICAgICAgICB0aGlzLnNwYXduVG9vbHMoKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------
