"use strict";
cc._RF.push(module, '2e810gPIYdMIbdgLhTM821Z', 'score_fighting_alert');
// Script/fighting/score_fighting_alert.js

"use strict";

/*
 * @Author: sjeam
 * @Date: 2024-01-05 16:13:51
 * @Description: 
 */
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
    // cc.dynamicAtlasManager.reset()
    httpRequest.playGame(httpRequest.urlConfig("sence_ditu"));
  },
  back_reload: function back_reload() {
    // this.parent.active=false
    httpRequest.playGame(httpRequest.urlConfig("sence_zhandou"));
  },
  back_home: function back_home() {
    httpRequest.playGame(httpRequest.urlConfig("sence_dating"));
  },
  //跳过回合
  back_time_show: function back_time_show() {
    this.unscheduleAllCallbacks(this); //停止某组件的所有计时器

    cc.find('Canvas/结算').active = true;
  },
  back_time_hidden: function back_time_hidden() {
    cc.find('Canvas/结算').active = false;
  },
  show_dlg: function show_dlg() {
    this.node.active = true;
  },
  hidden_dlg: function hidden_dlg() {
    this.node.active = false;
  },
  remove_alert: function remove_alert() {
    // 销毁所有弹窗
    cc.find('Canvas/弹窗').removeAllChildren(); // cc.find('Canvas/弹窗').destroyAllChildren();
  }
});

cc._RF.pop();