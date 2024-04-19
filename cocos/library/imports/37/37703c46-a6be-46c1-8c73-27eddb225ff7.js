"use strict";
cc._RF.push(module, '37703xGpr5GwYxzJ+3bIl/3', 'score_home');
// Script/home/score_home.js

"use strict";

var HttpHelper = require("../http");

var httpRequest = new HttpHelper();
cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    cc.globalData = {}; // var remoteUrl = httpRequest.httpUrlJson(figthing_remote_url);
    // cc.loader.load({ url: remoteUrl }, function (err, data) {

    httpRequest.httpPost('/app/app-apinew/biology-list', {}, function (data) {
      //定义常量
      cc.globalData.biology = data.data; //开启战斗
      //   _this.goPlay( )
    });
  },
  start: function start() {},
  //打开背包
  openBag: function openBag() {
    info = cc.globalData.biology;

    if (info) {
      //技能图标挂载
      var BoxPrefab = cc.find('Canvas/弹窗');
      BoxPrefab.getComponent('biology_bagTools').biology_detail_alert(BoxPrefab, info);
    } else {//如果没有生物需要弹窗另一个提示
    }
  },
  openBag_hidden: function openBag_hidden() {
    // cc.find('Canvas/弹窗').active =false;
    cc.find('Canvas/弹窗').removeAllChildren();
  } // update (dt) {},

});

cc._RF.pop();