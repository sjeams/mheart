"use strict";
cc._RF.push(module, '9acd6ttOHZOHr2DPhLJYZ2C', 'home_scence');
// Script/scence/home_scence.js

"use strict";

var HttpHelper = require("../http");

var httpRequest = new HttpHelper();
cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {// 常驻节点
    // cc.game.addPersistRootNode( myNode)
    // cc.game.removePersistRootNode( myNode)
  },
  start: function start() {},
  ProgressBar: function ProgressBar() {},
  // update (dt) {},
  //大厅
  go_sence_dating: function go_sence_dating() {
    httpRequest.playGame(httpRequest.urlConfig("sence_dating"));
  },
  //诸天万界
  go_sence_zhutian: function go_sence_zhutian() {
    httpRequest.playGame(httpRequest.urlConfig("sence_zhutian"));
  },
  // 创造生物
  go_go_sence_chuangzao: function go_go_sence_chuangzao() {
    httpRequest.playGame(httpRequest.urlConfig("sence_chuangzao"));
  },
  //神魔炼狱
  go_sence_shenmo: function go_sence_shenmo() {
    httpRequest.playGame(httpRequest.urlConfig("sence_shenmo"));
  },
  //秘境探索
  go_sence_mijing: function go_sence_mijing() {
    httpRequest.playGame(httpRequest.urlConfig("sence_mijing"));
  },
  //万古仙门
  go_sence_wangu: function go_sence_wangu() {
    httpRequest.playGame(httpRequest.urlConfig("sence_wangu"));
  },
  //天地熔炉
  go_sence_tiandi: function go_sence_tiandi() {
    httpRequest.playGame(httpRequest.urlConfig("sence_tiandi"));
  },
  //镇妖塔
  go_sence_zhenyaota: function go_sence_zhenyaota() {
    httpRequest.playGame(httpRequest.urlConfig("sence_shenmo"));
  },
  //诸天地图
  go_sence_ditu: function go_sence_ditu() {
    httpRequest.playGame(httpRequest.urlConfig("sence_ditu"));
  },
  //战斗场景
  go_sence_zhandou: function go_sence_zhandou() {
    httpRequest.playGame(httpRequest.urlConfig("sence_zhandou"));
  }
});

cc._RF.pop();