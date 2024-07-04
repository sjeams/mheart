"use strict";
cc._RF.push(module, 'bfe2c9uBzZLZbQL4m1ej4tE', 'home_login');
// Script/登录/home_login.js

"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

require("../common");

cc.Class({
  "extends": cc.Component,
  properties: {// user_status:cc.Node,
    // user_phone:cc.Label,
    // register_login_name: cc.EditBox,
    // register_login_password: cc.EditBox
  },
  onLoad: function onLoad() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return httpRequestBagApi.http_music();

            case 2:
              _context.next = 4;
              return _this.tokenlogin();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  tokenlogin: function tokenlogin() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var token, user_status, user_phone;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
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
              token = cc.sys.localStorage.getItem('token'); // cc.log(token)
              //定位弹出窗口

              user_status = cc.find("Canvas/server/user_status");
              user_status.active = true;
              user_phone = cc.find("Canvas/server/user_status/user_phone");

              if (token) {
                httpRequest.httpPostLogin('/app/api-server/token-login', {
                  'token': token
                }, function (data) {
                  // cc.loader.release('resources/login.json'); //释放json 资源
                  // if(cc.sys.isNative){  //  jsb.fileUtils不支持 web  读写
                  //     jsb.fileUtils.writeStringToFile(data,token)
                  // }
                  cc.log(data); // 登录成功

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

            case 5:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  //开始游戏按钮--不作为登录，只是开始
  goGame: function goGame() {
    httpRequest.httpPostLogin('/app/api-server/user-login', {}, function (data) {
      // cc.log(data); 
      if (data.code == 0) {
        // 登录失败，或本地数据失效
        var user_status = cc.find("Canvas/登录弹窗");
        user_status.active = true; // 弹窗
      } else {
        // 设置服务器
        cc.sys.localStorage.setItem('server', JSON.stringify(data.data.server));

        if (data.code == 1) {
          // 登录成功，进入游戏
          // cc.log(data.data.userinfo); 
          cc.sys.localStorage.setItem('userinfo', JSON.stringify(data.data.userinfo));
          httpRequest.playGame("sence_dating"); // cc.sys.localStorage.setItem('userinfo', JSON.stringify(data.data.userinfo));
          // cc.sys.localStorage.getItem(key); //读取数据
        } else if (data.code == 2) {
          // 登录成功，未定义角色
          // 进入定义角色界面     
          // var server = JSON.parse(cc.sys.localStorage.getItem('server'));
          // cc.log(cc.sys.localStorage.getItem('token')); 
          // 创建角色
          cc.director.loadScene('login/角色');
        }
      }
    });
  },
  start: function start() {},
  show_dlg: function show_dlg() {
    this.node.active = true;
  },
  hidden_dlg: function hidden_dlg() {
    this.node.active = false;
  }
});

cc._RF.pop();