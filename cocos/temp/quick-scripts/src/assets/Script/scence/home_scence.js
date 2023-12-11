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
  // loadnextScene: function() {
  //     // 登录预加载
  //     cc.director.preloadScene('login', function () {
  //         cc.log('登录预加载');
  //     });
  //     cc.director.loadScene('login');
  // },
  //登录
  诸天万界: function _() {
    cc.director.loadScene('home/诸天万界');
  },
  //登录
  大厅: function _() {
    cc.director.loadScene('home/大厅');
  },
  创造生物: function _() {
    cc.director.loadScene('home/创造生物');
  },
  //注册
  神魔炼狱: function _() {
    cc.director.loadScene('home/神魔炼狱');
  },
  //大厅
  秘境探索: function _() {
    cc.director.loadScene('home/秘境探索');
  },
  //奖励
  万古仙门: function _() {
    cc.director.loadScene('home/万古仙门');
  },
  //充值
  天地熔炉: function _() {
    cc.director.loadScene('home/天地熔炉');
  },
  //支付
  镇妖塔: function _() {
    cc.director.loadScene('home/镇妖塔');
  }
});

cc._RF.pop();