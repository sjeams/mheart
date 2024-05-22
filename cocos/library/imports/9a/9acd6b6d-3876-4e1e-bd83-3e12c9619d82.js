"use strict";
cc._RF.push(module, '9acd6ttOHZOHr2DPhLJYZ2C', 'home_scence');
// Script/场景/home_scence.js

"use strict";

require("../common");

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
    httpRequest.playGame("sence_dating");
  },
  //诸天万界
  go_sence_zhutian: function go_sence_zhutian() {
    httpRequest.playGame("sence_zhutian");
  },
  // 创造生物
  go_go_sence_chuangzao: function go_go_sence_chuangzao() {
    httpRequest.playGame("sence_chuangzao");
  },
  //神魔炼狱
  go_sence_shenmo: function go_sence_shenmo() {
    httpRequest.playGame("sence_shenmo");
  },
  //秘境探索
  go_sence_mijing: function go_sence_mijing() {
    httpRequest.playGame("sence_mijing");
  },
  //万古仙门
  go_sence_wangu: function go_sence_wangu() {
    httpRequest.playGame("sence_wangu");
  },
  //天地熔炉
  go_sence_tiandi: function go_sence_tiandi() {
    httpRequest.playGame("sence_tiandi");
  },
  //镇妖塔
  go_sence_zhenyaota: function go_sence_zhenyaota() {
    httpRequest.playGame("sence_shenmo");
  },
  //诸天地图
  go_sence_ditu: function go_sence_ditu() {
    httpRequest.playGame("sence_ditu");
  },
  //战斗场景
  go_sence_zhandou: function go_sence_zhandou() {
    httpRequest.playGame("sence_zhandou", 1, 1); //启用进度条
  }
});

cc._RF.pop();