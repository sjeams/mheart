"use strict";
cc._RF.push(module, '9acd6ttOHZOHr2DPhLJYZ2C', 'home_scence');
// Script/scence/home_scence.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var HttpHelper = require("../http"); // var httpRequest = new HttpHelper();


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
  onLoad: function onLoad() {// 常驻节点
    // cc.game.addPersistRootNode( myNode)
    // cc.game.removePersistRootNode( myNode)
  },
  start: function start() {},
  ProgressBar: function ProgressBar() {},
  // update (dt) {},
  // loadnextScene: function() {
  //     // 登录预加载
  //     cc.director.preloadScene('login', function () {
  //         cc.log('登录预加载');
  //     });
  //     cc.director.loadScene('login');
  // },
  //登录
  诸天万界: function _() {
    var params = {
      'page': 1,
      'pageSize': 12
    };
    httpRequest.httpPost('/app/app-apiword/index', params, function (data) {
      //  console.log(data);
      // console.log(_this.content)
      if (data.data) {
        //跳转到世界
        // cc.director.preloadScene("loading", function () {
        // cc.director.loadScene('map/诸天地图');
        httpRequest.playGame('map/诸天地图'); // });
      } else {
        //  httpRequest.playGame('home/诸天万界');
        httpRequest.playGame('home/诸天万界');
      }
    });
  },
  //登录
  大厅: function _() {
    httpRequest.playGame('home/大厅');
  },
  创造生物: function _() {
    httpRequest.playGame('home/创造生物');
  },
  //注册
  神魔炼狱: function _() {
    httpRequest.playGame('home/神魔炼狱');
  },
  //大厅
  秘境探索: function _() {
    httpRequest.playGame('home/秘境探索');
  },
  //奖励
  万古仙门: function _() {
    httpRequest.playGame('home/万古仙门');
  },
  //充值
  天地熔炉: function _() {
    httpRequest.playGame('home/天地熔炉');
  },
  //支付
  镇妖塔: function _() {
    httpRequest.playGame('home/镇妖塔');
  }
});

cc._RF.pop();