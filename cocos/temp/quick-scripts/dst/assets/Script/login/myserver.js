
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
    cc.loader.loadRes('login.json', function (err, res) {
      //默认resources
      var json = res.json;
      var params = {
        'token': json.token
      };
      cc.log(json.token);
      var res = httpRequest.httpPost('https://www.mheart.xyz/app/api-server/token-login', params, function (data) {
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
    httpRequest.httpPost('https://www.mheart.xyz/app/api-server/login', params, function (data) {// cc.log(data); 
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

    httpRequest.httpPost('https://www.mheart.xyz/app/api-server/user-login', params, function (data) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxsb2dpblxcbXlzZXJ2ZXIuanMiXSwibmFtZXMiOlsiSHR0cEhlbHBlciIsInJlcXVpcmUiLCJodHRwUmVxdWVzdCIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiZWRpdGJveCIsIkVkaXRCb3giLCJvbkxvYWQiLCJ0b2tlbmxvZ2luIiwibG9hZGVyIiwibG9hZFJlcyIsImVyciIsInJlcyIsImpzb24iLCJwYXJhbXMiLCJ0b2tlbiIsImxvZyIsImh0dHBQb3N0IiwiZGF0YSIsInJlbGVhc2UiLCJjb2RlIiwibG9naW4iLCJidG5DbGljazEiLCJldmVudCIsImN1c3RvbUV2ZW50RGF0YSIsIkpTT04iLCJwYXJzZSIsInN5cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwic3RyaW5naWZ5Iiwic2VydmVyIiwidXNlcmluZm8iLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsImNhbGxiYWNrIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUF4QixFQUNBO0FBQ0E7OztBQUNBLElBQUlDLFdBQVcsR0FBSSxJQUFJRixVQUFKLEVBQW5CO0FBQ0FHLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxPQUFPLEVBQUVKLEVBQUUsQ0FBQ0s7QUFESixHQUhQO0FBT0xDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWTtBQUVoQjtBQUNBLFNBQUtDLFVBQUwsR0FIZ0IsQ0FHRztBQUVuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdILEdBNUJJO0FBOEJMQSxFQUFBQSxVQUFVLEVBQUUsc0JBQVU7QUFDbEI7QUFDQTtBQUNBUCxJQUFBQSxFQUFFLENB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QUFVYixLQUFWLEVBQWlCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNRdEIsSUFBQUEsRUFBRSxDQUFDaUMsUUFBSCxDQUFZQyxTQUFaLENBQXNCLEtBQXRCLEVBckJlLENBc0J2QjtBQUNBO0FBQ0E7QUFDQTtBQUVILEdBNUlJO0FBOElMRSxFQUFBQSxLQTlJSyxtQkE4SUksQ0FFUixDQWhKSSxDQWtKTDs7QUFsSkssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbnZhciBIdHRwSGVscGVyID0gcmVxdWlyZShcImh0dHBcIik7XHJcbi8vIHZhciBmcyA9IHJlcXVpcmUoJ2ZzJyk7IC8vIOW8leWFpWZz5qih5Z2XXHJcbi8vIHZhciBnbG9iYWx1c2VyaW5mbyA9IHJlcXVpcmUoXCJHbG9iYWx1c2VySW5mb1wiKTtcclxubGV0IGh0dHBSZXF1ZXN0ID0gIG5ldyBIdHRwSGVscGVyKCk7ICBcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG4gXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgZWRpdGJveDogY2MuRWRpdEJveFxyXG4gICAgfSxcclxuIFxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgIC8vIOaTjeS9nOaWh+acrC0t6K+75Y+W55So5oi35L+h5oGvXHJcbiAgICAgICAgdGhpcy50b2tlbmxvZ2luKCk7IC8vIOW/q+aNt+eZu+W9lVxyXG5cclxuICAgICAgICAvLyAvLyDotKblj7flr4bnoIHnmbvlvZVcclxuICAgICAgICAvLyB0aGlzLmxvZ2luKCk7XHJcbiAgICAgICAgLy/lgqjlrZjnvJPlrZhcclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rva2VuJywgdmFsdWUpO1xyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG5cclxuICAgICAgICAvLyDkv53lrZjmnIDpq5jliIbliLDmnKzlnLBcclxuICAgICAgICAvLyBjb25zdCBLRVlfQkVTVF9TQ09SRSA9IFwiYmVzdFNjb3JlXCI7XHJcbiAgICAgICAgLy8gbGV0IGJlc3RTY29yZSA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShLRVlfQkVTVF9TQ09SRSk7XHJcbiAgICAgICAgLy8gaWYgKGJlc3RTY29yZSA9PT0gXCJudWxsXCIgfHwgdGhpcy5zY29yZSA+IGJlc3RTY29yZSkge1xyXG4gICAgICAgIC8vICAgICBiZXN0U2NvcmUgPSB0aGlzLnNjb3JlO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oS0VZX0JFU1RfU0NPUkUsIGJlc3RTY29yZSk7XHJcbiBcclxuXHJcbiAgICB9LFxyXG4gICAgIFxyXG4gICAgdG9rZW5sb2dpbjogZnVuY3Rpb24oKXtcclxuICAgICAgICAvLyDojrflj5bmnKzlnLBqc29uICDkv6Hmga9cclxuICAgICAgICAvLyBjYy5sb2FkZXIubG9hZCggY2MudXJsLnJhdyhcInJlc291cmNlcy9sb2dpbi5qc29uXCIpLGZ1bmN0aW9uKGVycixyZXMpeyAgXHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXMoJ2xvZ2luLmpzb24nLGZ1bmN0aW9uKGVycixyZXMpeyAgIC8v6buY6K6kcmVzb3VyY2VzXHJcbiAgICAgICAgICAgIGxldCBqc29uID0gcmVzLmpzb247XHJcbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAndG9rZW4nOiBqc29uLnRva2VuLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBjYy5sb2coanNvbi50b2tlbik7IFxyXG4gICAgICAgICAgICB2YXIgcmVzID0gaHR0cFJlcXVlc3QuaHR0cFBvc3QoJ2h0dHBzOi8vd3d3Lm1oZWFydC54eXovYXBwL2FwaS1zZXJ2ZXIvdG9rZW4tbG9naW4nLCBwYXJhbXMgLGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIucmVsZWFzZSgncmVzb3VyY2VzL2xvZ2luLmpzb24nKTsgLy/ph4rmlL5qc29uIOi1hOa6kFxyXG4gICAgICAgICAgICAgICAgLy8gaWYoY2Muc3lzLmlzTmF0aXZlKXsgIC8vICBqc2IuZmlsZVV0aWxz5LiN5pSv5oyBIHdlYiAg6K+75YaZXHJcbiAgICAgICAgICAgICAgICAvLyAgICAganNiLmZpbGVVdGlscy53cml0ZVN0cmluZ1RvRmlsZShkYXRhLHRva2VuKVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgLy8gY2MubG9nKGRhdGEpOyBcclxuICAgICAgICAgICAgICAgIC8vIOacqueZu+W9leW8ueWHuueZu+W9lVxyXG4gICAgICAgICAgICAgICAgaWYoZGF0YS5jb2RlPT0wKXtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmxvZ2luYm94Lm5vZGUuYWN0aXZlID0gZmFsc2U7ICAvLyDov5vluqbpmpDol49cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0sXHJcblxyXG4gICAgbG9naW46IGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgJ2xvZ2lubmFtZSc6ICd5aW5jYW4xOTkzJyxcclxuICAgICAgICAgICAgJ3Bhc3N3b3JkJzogMTIzNDU2LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3QoJ2h0dHBzOi8vd3d3Lm1oZWFydC54eXovYXBwL2FwaS1zZXJ2ZXIvbG9naW4nLCBwYXJhbXMgLGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvZyhkYXRhKTsgXHJcbiAgICAgICAgICAgIC8v5pON5L2c5paH5pysLS3kv67mlLnnlKjmiLfkv6Hmga9cclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIGJ0bkNsaWNrMTogZnVuY3Rpb24gKGV2ZW50LCBjdXN0b21FdmVudERhdGEpIHtcclxuXHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIC8vIOivt+axgueZu+W9leaOpeWPo1xyXG4gICAgICAgIC8vIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgICAgLy8gICAgICAgICAnbG9naW5uYW1lJzogJ3lpbmNhbjE5OTMnLFxyXG4gICAgICAgIC8vICAgICAgICAgJ3Bhc3N3b3JkJzogMTIzNDU2LFxyXG4gICAgICAgIC8vICAgICAgICAgJ3NlcnZlcmlkJzogMSxcclxuICAgICAgICAvLyB9O1xyXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGFyYW1zJywgSlNPTi5zdHJpbmdpZnkocGFyYW1zKSk7XHJcbiAgICAgICAgdmFyIHBhcmFtcyA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGFyYW1zXCIpKTtcclxuICAgICAgICAvLyBjYy5sb2codmFsdWUpOyBcclxuICAgICAgICAvLyBsZXQgaHR0cFJlcXVlc3QgPSAgbmV3IEh0dHBIZWxwZXIoKTsgIFxyXG4gICAgICAgIGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCdodHRwczovL3d3dy5taGVhcnQueHl6L2FwcC9hcGktc2VydmVyL3VzZXItbG9naW4nLCBwYXJhbXMgLGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGNjLmxvZyhkYXRhKTsgXHJcbiAgICAgICAgICAgIGlmKGRhdGEuY29kZT09MCl7IC8vIOeZu+W9leWksei0pe+8jOaIluacrOWcsOaVsOaNruWkseaViFxyXG4gICAgICAgICAgICAgICAgLy8g5by556qXXHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgLy8g6K6+572u5pyN5Yqh5ZmoXHJcbiAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlcnZlcicsIEpTT04uc3RyaW5naWZ5KGRhdGEuZGF0YS5zZXJ2ZXIpKTtcclxuICAgICAgICAgICAgICAgIGlmKGRhdGEuY29kZT09MSl7Ly8g55m75b2V5oiQ5Yqf77yM6L+b5YWl5ri45oiPXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKGRhdGEuZGF0YS51c2VyaW5mbyk7IFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcmluZm8nLCBKU09OLnN0cmluZ2lmeShkYXRhLmRhdGEudXNlcmluZm8pKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdob21lL2RhdGluZycpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlcmluZm8nLCBKU09OLnN0cmluZ2lmeShkYXRhLmRhdGEudXNlcmluZm8pKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTsgLy/or7vlj5bmlbDmja5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKGRhdGEuY29kZT09Mil7IC8vIOeZu+W9leaIkOWKn++8jOacquWumuS5ieinkuiJslxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOi/m+WFpeWumuS5ieinkuiJsueVjOmdoiAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNlcnZlciA9IEpTT04ucGFyc2UoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZXJ2ZXInKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2MubG9nKHNlcnZlcik7IFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIOWIm+W7uuinkuiJslxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgncmVnaXN0ZXInKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KTtcclxuICAgICAgICBcclxuICAgICAgICAvL+i/memHjCBldmVudCDmmK/kuIDkuKogVG91Y2ggRXZlbnQg5a+56LGh77yM5L2g5Y+v5Lul6YCa6L+HIGV2ZW50LnRhcmdldCDlj5bliLDkuovku7bnmoTlj5HpgIHoioLngrlcclxuICAgICAgICAvLyB2YXIgbm9kZSA9IGV2ZW50LnRhcmdldDtcclxuICAgICAgICAvLyB2YXIgYnV0dG9uID0gbm9kZS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcclxuICAgICAgICAvL+i/memHjOeahCBjdXN0b21FdmVudERhdGEg5Y+C5pWw5bCx562J5LqO5L2g5LmL5YmN6K6+572u55qEIFwiY2xpY2sxIHVzZXIgZGF0YVwiXHJcbiAgICAgICAgLy8gY2MubG9nKFwibm9kZT1cIiwgbm9kZS5uYW1lLCBcIiBldmVudD1cIiwgZXZlbnQudHlwZSwgXCIgZGF0YT1cIiwgY3VzdG9tRXZlbnREYXRhKTtcclxuICAgIH0sXHJcblxyXG4gICAgY2FsbGJhY2s6IGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgIC8vIGNjLmxvZyhkYXRhKVxyXG4gICAgICAgIC8vIHZhciB1c2VyQ291bnQgPSAgY2MuZmluZChcIkNhbnZhcy9ncm91bmQvZWRpdGJveF9jb3VudFwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xyXG4gICAgICAgIC8vIHZhciB1c2VyUGFzc3dhcmQgPSAgY2MuZmluZChcIkNhbnZhcy9ncm91bmQvZWRpdGJveF9wYXNzd2FyZFwiKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCkuc3RyaW5nO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi55So5oi36LSm5Y+377yaXCIrdXNlckNvdW50KyBcIueUqOaIt+Wvhuegge+8mlwiKyB1c2VyUGFzc3dhcmQpO1xyXG4gICAgICAgIC8vIEh0dHBIZWxwLmxvZ2luKHVzZXJDb3VudCx1c2VyUGFzc3dhcmQsZnVuY3Rpb24oaXNTdWNjZXNzLERhdGEpe1xyXG4gICAgICAgIC8vICAgICB2YXIgaW5mbyA9IERhdGE7XHJcbiAgICAgICAgLy8gICAgIGlmKHRydWUgPT0gaXNTdWNjZXNzKXtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwibG9naW4gIHN1Y2Nlc3MhISFcIik7XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhpbmZvKTtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnVzZXJuYW1lID0gaW5mby51c2VybmFtZTtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLmdhbWVwb2ludCA9IGluZm8uZ2FtZXBvaW50O1xyXG4gICAgICAgIC8vICAgICAgICAgZ2xvYmFsdXNlcmluZm8uc2tleSA9IGluZm8uc2tleTtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnVzZXJpZCA9IGluZm8udXNlcmlkO1xyXG4gXHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby5tb25leSA9IGluZm8ubW9uZXk7XHJcbiAgICAgICAgLy8gICAgICAgICBnbG9iYWx1c2VyaW5mby51c2VyaWQgPSBpbmZvLnVzZXJpZDtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnBhc3N3b3JkID0gaW5mby5wYXNzd29yZDtcclxuICAgICAgICAvLyAgICAgICAgIGdsb2JhbHVzZXJpbmZvLnNhbHQgPSBpbmZvLnNhbHQ7XHJcbiBcclxuICAgICAgICAvLyAgICAgICAgIC8v55m75b2V5oiQ5Yqf5ZCO5Yqg6L295Zyw5Zu+6LWE5rqQXHJcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21hcCcpO1xyXG4gICAgICAgIC8vICAgICB9ZWxzZXtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwibG9naW4gIGZpbGVkISEhXCIpXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KTtcclxuICAgICAgICBcclxuICAgIH0sXHJcbiBcclxuICAgIHN0YXJ0ICgpIHtcclxuIFxyXG4gICAgfSxcclxuIFxyXG4gICAgLy8gdXBkYXRlIChkdCkge30sXHJcbn0pO1xyXG4iXX0=