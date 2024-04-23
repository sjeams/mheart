"use strict";
cc._RF.push(module, '86ac8708X1PrIDH2BOyzm4u', 'bag_描述Tools');
// Script/home/bag_描述Tools.js

"use strict";

var HttpHelper = require("../http");

var httpRequest = new HttpHelper();
cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  //技能图片渲染
  biology_detail_alert: function biology_detail_alert(TipBoxPrefab_model, info) {
    var _this = this;

    cc.loader.loadRes('/model背包/生物信息', function (errorMessage, loadedResource_icon) {
      //检查资源加载
      if (errorMessage) {
        cc.log('载入预制资源失败, 原因:' + errorMessage);
        return;
      }

      if (!(loadedResource_icon instanceof cc.Prefab)) {
        cc.log('你载入的不是预制资源!');
        return;
      } //开始实例化预制资源


      var TipBoxPrefab = cc.instantiate(loadedResource_icon); //技能等级
      // TipBoxPrefab.getChildByName('生物数量s').getComponent(cc.Label).string='生物('+info_list.length+'/60)'
      // 由于加载资源的操作是异步的，如果在加载完成前就绑定了事件，有可能会触发事件的自动执行。
      // 此处进行事件绑定

      _this.bind_button(TipBoxPrefab_model, TipBoxPrefab, info); //写入icon


      TipBoxPrefab_model.getChildByName('生物信息').addChild(TipBoxPrefab);
      return TipBoxPrefab_model;
    });
    return TipBoxPrefab_model;
  },
  //绑定点击事件
  bind_button: function bind_button(TipBoxPrefab_model, TipBoxPrefab, info) {
    //  cc.find("列表/content/gridLayout",TipBoxPrefab)
    TipBoxPrefab.getChildByName('技能').on('click', function () {
      // 事件处理逻辑
      //移除挂载
      TipBoxPrefab_model.getChildByName('生物信息').removeAllChildren(); //重新挂载

      TipBoxPrefab_model.getComponent('biology_skillTools').biology_detail_alert(TipBoxPrefab_model, info);
    }, this);
    TipBoxPrefab.getChildByName('缘分').on('click', function () {
      // 事件处理逻辑
      //移除挂载
      TipBoxPrefab_model.getChildByName('生物信息').removeAllChildren(); //重新挂载

      TipBoxPrefab_model.getComponent('biology_yuanfenTools').biology_detail_alert(TipBoxPrefab_model, info);
    }, this);
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
    //技能图标挂载


    var tool = cc.instantiate(TipBoxPrefab); // tool.getComponent('skill_iconTools').biology_detail_skill(TipBoxPrefab,info.position_skill)

    BoxPrefab.addChild(TipBoxPrefab, 1);
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();