"use strict";
cc._RF.push(module, '2e810gPIYdMIbdgLhTM821Z', 'score_fighting_alert');
// Script/fighting/score_fighting_alert.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
// 世界操作  
var HttpHelper = require("../http");

var httpRequest = new HttpHelper();
var params = [];
cc.Class({
  "extends": cc.Component,
  properties: {
    // 根据TOOLS生成相应的道具
    toolsArray: []
  },
  init: function init() {
    cc.director.getScene(); //获取当前场景
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {// this.spawnTools()
  },
  start: function start() {},
  update: function update(dt) {// console.log(3333)
  },
  reloadWord: function reloadWord() {
    var _this = this;

    httpRequest.httpPost('/app/app-apiword/map-word', params, function (data) {
      //写入地图数据
      _this.addWordMap(data);
    });
  },
  back_map: function back_map() {
    //销毁动态合图
    cc.dynamicAtlasManager.reset();
    httpRequest.playGame('map/诸天地图');
  },
  back_reload: function back_reload() {
    // this.parent.active=false
    //销毁动态合图
    cc.dynamicAtlasManager.reset();
    httpRequest.playGame('战斗场景');
  },
  back_home: function back_home() {
    //销毁动态合图
    cc.dynamicAtlasManager.reset();
    cc.director.loadScene('大厅');
  }
});

cc._RF.pop();