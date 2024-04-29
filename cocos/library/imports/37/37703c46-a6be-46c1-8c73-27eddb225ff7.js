"use strict";
cc._RF.push(module, '37703xGpr5GwYxzJ+3bIl/3', 'score_home');
// Script/背包/score_home.js

"use strict";

var HttpHelper = require("../http");

var httpRequest = new HttpHelper();
cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    //大厅需要加载的全局变量
    cc.globalData = {}; // var remoteUrl = httpRequest.httpUrlJson(figthing_remote_url);
    // cc.loader.load({ url: remoteUrl }, function (err, data) {

    this.brushBag();
  },
  start: function start() {},
  //刷新背包--每次操作后需要刷新背包
  brushBag: function brushBag() {
    //获取生物列表
    httpRequest.httpPost('/app/app-apinew/biology-list', {}, function (data) {
      //定义常量
      cc.globalData.biology = data.data; //当前选中的生物id

      cc.globalData.biology_id = 0; //当前弹出的预制节点--物品详情--装备-卸载

      cc.globalData.TipBoxPrefab_biology_detail = null; //开启战斗
      //   _this.goPlay( )
    }); //获取背包

    httpRequest.httpPost('/app/app-apinew/gooduse-bag', {}, function (data) {
      cc.globalData.bag = data.data;
    }); //获取背包

    httpRequest.httpPost('/app/app-apinew/gooduse-type', {}, function (data) {
      cc.globalData.gooduse = data.data;
    }); //获取阵法

    httpRequest.httpPost('/app/app-apinew/get-position', {}, function (data) {
      cc.globalData.zhengfa = data.data;
    });
  },
  //打开背包
  openBag: function openBag() {
    if (cc.globalData.biology) {
      //技能图标挂载
      var BoxPrefab = cc.find('Canvas/弹窗'); // 销毁所有弹窗

      BoxPrefab.removeAllChildren();
      cc.loader.loadRes('/model背包/A生物背包', function (errorMessage, loadedResource) {
        //检查资源加载
        if (errorMessage) {
          cc.log('载入预制资源失败, 原因:' + errorMessage);
          return;
        }

        if (!(loadedResource instanceof cc.Prefab)) {
          cc.log('你载入的不是预制资源!');
          return;
        } //开始实例化预制资源


        var TipBoxPrefab = cc.instantiate(loadedResource);
        TipBoxPrefab.getComponent('biology_bagTools').biology_detail_alert(BoxPrefab, TipBoxPrefab);
      }); // BoxPrefab.getComponent('biology_bagTools').biology_detail_alert(BoxPrefab,info)
    } else {//如果没有生物需要弹窗另一个提示
      }
  },
  //打开阵法
  openZhengfa: function openZhengfa() {
    if (cc.globalData.biology) {
      //技能图标挂载
      var BoxPrefab = cc.find('Canvas/弹窗'); // 销毁所有弹窗

      BoxPrefab.removeAllChildren();
      cc.loader.loadRes('/model布阵/A生物布阵', function (errorMessage, loadedResource) {
        //检查资源加载
        if (errorMessage) {
          cc.log('载入预制资源失败, 原因:' + errorMessage);
          return;
        }

        if (!(loadedResource instanceof cc.Prefab)) {
          cc.log('你载入的不是预制资源!');
          return;
        } //开始实例化预制资源


        var TipBoxPrefab = cc.instantiate(loadedResource);
        TipBoxPrefab.getComponent('bag_zhengfaTools').biology_detail_alert(BoxPrefab, TipBoxPrefab);
      }); // BoxPrefab.getComponent('biology_bagTools').biology_detail_alert(BoxPrefab,info)
    } else {//如果没有生物需要弹窗另一个提示
      }
  },
  openBag_hidden: function openBag_hidden() {
    // cc.find('Canvas/弹窗').active =false;
    cc.find('Canvas/弹窗').removeAllChildren();
  } // update (dt) {},

});

cc._RF.pop();