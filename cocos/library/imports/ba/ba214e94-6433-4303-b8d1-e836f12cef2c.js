"use strict";
cc._RF.push(module, 'ba2146UZDNDA7jR6DbxLO8s', 'role');
// Script/login/role.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var HttpHelper = require("http"); // var fs = require('fs'); // 引入fs模块
// var globaluserinfo = require("GlobaluserInfo");


var httpRequest = new HttpHelper();
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
  //创建角色
  create_role: function create_role() {
    var server = JSON.parse(cc.sys.localStorage.getItem('server')); // 请求登录接口

    var params = {
      'loginid': server.loginid,
      'server': server.id,
      'name': '测试',
      'servername': server.name
    }; // cc.log(server); 

    httpRequest.httpPost('http://www.monster.com/app/api-server/user-role', params, function (data) {
      cc.log(data);

      if (data.code == 0) {
        // 登录失败，或本地数据失效
        cc.director.loadScene('login');
      } else {
        cc.sys.localStorage.setItem('userinfo', JSON.stringify(data.data.userinfo));
        cc.director.loadScene('model/dating');
      }
    });
  } // update (dt) {},

});

cc._RF.pop();