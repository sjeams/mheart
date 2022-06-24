"use strict";
cc._RF.push(module, '1e7f7ciNQRLOoO7QCll/I0d', 'tips');
// Script/login/tips.js

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
    scorllview: cc.ScorllView // foo: {
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
  // cc.loader.releaseRes("test assets/anim");
  onLoad: function onLoad() {
    cc.sys.localStorage.removeItem('server_tips');

    var HttpHelper = require("http");

    var httpRequest = new HttpHelper();
    httpRequest.httpPost('https://www.mheart.xyz/app/api-server/user-tips', [], function (data) {
      var tips = cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
      tips.getComponent(cc.Label).string = data.data['gonggao_sz']; // 转数组
      // cc.log(JSON.parse( data.data ));
      // 转json
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