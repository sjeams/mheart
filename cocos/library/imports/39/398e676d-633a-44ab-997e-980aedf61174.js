"use strict";
cc._RF.push(module, '398e6dtYzpEq5l+mArt9hF0', 'biology_bagTools');
// Script/home/biology_bagTools.js

"use strict";

var HttpHelper = require("../http");

var httpRequest = new HttpHelper();
cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  //查看生物详情_弹窗
  biology_detail_alert: function biology_detail_alert(BoxPrefab, info) {
    // 销毁所有弹窗
    BoxPrefab.removeAllChildren();

    var _this = this; //加载预制资源 PrefabUrl为 预制资源在 资源中的路径


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


      var TipBoxPrefab = cc.instantiate(loadedResource); //载入生物详情

      _this.biology_detail_info(BoxPrefab, TipBoxPrefab, info); //将预制资源添加到父节点
      // CanvasNode.addChild(TipBoxPrefab);

    });
  },
  biology_detail_info: function biology_detail_info(BoxPrefab, TipBoxPrefab, info) {
    var _this = this; // TipBoxPrefab.getChildByName('血s').getComponent(cc.Label).string= info.shengMing
    // TipBoxPrefab.getChildByName('蓝s').getComponent(cc.Label).string= info.moFa
    // TipBoxPrefab.getChildByName('生物名称s').getComponent(cc.Label).string=info.name
    // TipBoxPrefab.getChildByName('种族名称s').getComponent(cc.Label).string=info.zhong_zhu+'族'
    // TipBoxPrefab.getChildByName('生物等级s').getComponent(cc.Label).string='等级'+info.grade
    // TipBoxPrefab.getChildByName('触发概率s').getComponent(cc.Label).string='触发率'+info.chuFa+'%'
    // //生物命名必须叫生物
    // // TipBoxPrefab.getChildByName('生物').getComponent(cc.Sprite).spriteFrame= biology_image
    // TipBoxPrefab.getChildByName('力量s').getComponent(cc.Label).string='力量:'+info.power
    // TipBoxPrefab.getChildByName('敏捷s').getComponent(cc.Label).string='敏捷:'+info.agile
    // TipBoxPrefab.getChildByName('智力s').getComponent(cc.Label).string='智力:'+info.intelligence
    // TipBoxPrefab.getChildByName('攻击s').getComponent(cc.Label).string='攻击:'+info.gongJi
    // TipBoxPrefab.getChildByName('护甲s').getComponent(cc.Label).string='护甲:'+info.huJia
    // TipBoxPrefab.getChildByName('速度s').getComponent(cc.Label).string='速度:'+info.suDu
    // TipBoxPrefab.getChildByName('特攻s').getComponent(cc.Label).string='特攻:'+info.faGong
    // TipBoxPrefab.getChildByName('灵气s').getComponent(cc.Label).string='灵气:'+info.reiki
    // TipBoxPrefab.getChildByName('悟性s').getComponent(cc.Label).string='悟性:'+info.wuXing
    // TipBoxPrefab.getChildByName('暴击s').getComponent(cc.Label).string='暴击:'+info.baojilv+'%'
    // TipBoxPrefab.getChildByName('吸血s').getComponent(cc.Label).string='吸血:'+info.xiXue+'%'
    // TipBoxPrefab.getChildByName('暴伤s').getComponent(cc.Label).string='暴伤:'+info.baoji+'%'
    // TipBoxPrefab.getChildByName('闪避s').getComponent(cc.Label).string='闪避:'+info.shanbi+'%'
    // TipBoxPrefab.getChildByName('命中s').getComponent(cc.Label).string='闪避'+'0%'
    // TipBoxPrefab.getChildByName('增伤s').getComponent(cc.Label).string='增伤:'+info.jianShang+'%'
    // TipBoxPrefab.getChildByName('减伤s').getComponent(cc.Label).string='减伤:'+info.zhenShang+'%'
    //生物列表挂载


    cc.log(info);
    var tool = cc.instantiate(TipBoxPrefab);
    tool.getComponent('biology_iconTools').biology_detail_alert(TipBoxPrefab, info); // //生物详情挂载--默认加载第一个

    tool.getComponent('biology_infoTools').biology_detail_alert(TipBoxPrefab, info[0]); // // //技能列表挂载--默认挂载技能列表
    // tool.getComponent('biology_skillTools').biology_detail_alert(TipBoxPrefab,info[0])
    // // //信息列表挂载
    // tool.getComponent('biology_xinxiTools').biology_detail_alert(TipBoxPrefab,info[0])
    // // //缘分列表挂载
    // tool.getComponent('biology_yuanfenTools').biology_detail_alert(TipBoxPrefab,info[0])

    BoxPrefab.addChild(TipBoxPrefab, 1);
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();