"use strict";
cc._RF.push(module, 'c11295LCyNAsZsJFE9jtZru', 'biology_infoTools');
// Script/背包/biology_infoTools.js

"use strict";

// require("../common"); 
cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  //技能图片渲染
  biology_detail_alert: function biology_detail_alert() {
    //info 为选中生物的info
    var info = http_globalData.biology[http_globalData.biology_id]; // cc.log(http_globalData.bag)

    http_globalAsset.TipBoxPrefab_model.getChildByName('左边弹窗').removeAllChildren();
    http_globalAsset.TipBoxPrefab_model.getChildByName('中间弹窗').removeAllChildren();
    http_globalAsset.TipBoxPrefab_model.getChildByName('右边弹窗').removeAllChildren();

    var _this = this;

    var TipBoxPrefab = cc.instantiate(http_globalAsset.model_home_biology_detail); //生物详情
    //技能等级
    // TipBoxPrefab.getChildByName('生物数量s').getComponent(cc.Label).string='生物('+info_list.length+'/60)'
    // 由于加载资源的操作是异步的，如果在加载完成前就绑定了事件，有可能会触发事件的自动执行。

    _this.biology_detail_list(TipBoxPrefab, info); //绑定按钮事件


    _this.bind_button(TipBoxPrefab, info); //写入icon


    http_globalAsset.TipBoxPrefab_model.getChildByName('生物详情').addChild(TipBoxPrefab); // //技能列表挂载--默认挂载信息

    http_globalAsset.TipBoxPrefab_model.getComponent('biology_xinxiTools').biology_detail_alert(info);
  },
  //技能图片渲染
  biology_detail_list: function biology_detail_list(TipBoxPrefab, info) {
    TipBoxPrefab.getChildByName('生物名称s').getComponent(cc.Label).string = info.name;
    TipBoxPrefab.getChildByName('种族s').getComponent(cc.Label).string = info.zhong_zhu + '族';
    TipBoxPrefab.getChildByName('生物等级s').getComponent(cc.Label).string = '等级' + info.grade; // TipBoxPrefab.getChildByName('触发概率s').getComponent(cc.Label).string='触发率'+info.chuFa+'%'

    TipBoxPrefab.getChildByName('生物').getComponent(cc.Sprite).spriteFrame = http_globalAsset.http_base_asset_biology[info.picture];
    TipBoxPrefab.getChildByName('战力s').getComponent(cc.Label).string = '战力' + info.special;
    TipBoxPrefab.getChildByName('评分s').getComponent(cc.Label).string = '评分:' + info.score / 10;

    if (info.yiXing == 1) {
      // cc.log(1111)
      TipBoxPrefab.getChildByName('异形').active = true;
    } else {
      // cc.log(222)
      TipBoxPrefab.getChildByName('异形').active = false;
    }

    TipBoxPrefab.getChildByName('稀有s').getComponent(cc.Label).string = info.scoreGrade;
    TipBoxPrefab.getChildByName('慧根值s').getComponent(cc.Label).string = info.maxNature;
    TipBoxPrefab.getChildByName('经验s').getComponent(cc.Label).string = info.need_expe;
    TipBoxPrefab.getChildByName('境界s').getComponent(cc.Label).string = info.state_name; //有背包物品

    if (http_globalData.bag) {
      if (info.gooduse1) {
        var goods_image = http_globalData.bag[info.gooduse1].point;
        TipBoxPrefab.getChildByName('装备1').getComponent(cc.Sprite).spriteFrame = http_globalAsset.http_base_asset_zhuangbei[goods_image];
      }

      if (info.gooduse2) {
        var goods_image = http_globalData.bag[info.gooduse2].point;
        TipBoxPrefab.getChildByName('装备2').getComponent(cc.Sprite).spriteFrame = http_globalAsset.http_base_asset_zhuangbei[goods_image];
      }

      if (info.yuanShen) {
        var goods_image = http_globalData.bag[info.yuanShen].point;
        TipBoxPrefab.getChildByName('元神').getComponent(cc.Sprite).spriteFrame = http_globalAsset.http_base_asset_zhuangbei[goods_image];
      }
    }

    return TipBoxPrefab;
  },
  //绑定点击事件
  bind_button: function bind_button(TipBoxPrefab, info) {
    http_globalAsset.TipBoxPrefab_model.getChildByName('左边弹窗').removeAllChildren();
    http_globalAsset.TipBoxPrefab_model.getChildByName('中间弹窗').removeAllChildren();
    http_globalAsset.TipBoxPrefab_model.getChildByName('右边弹窗').removeAllChildren(); //  cc.find("列表/content/gridLayout",TipBoxPrefab)

    TipBoxPrefab.getChildByName('装备1').on('click', function () {
      // TipBoxPrefab_model.getChildByName('生物信息').removeAllChildren();
      //重新挂载
      http_globalAsset.TipBoxPrefab_model.getComponent('bag_物品Tools').biology_detail_alert(info.gooduse1, 1, '装备1');
    }, this);
    TipBoxPrefab.getChildByName('装备2').on('click', function () {
      // TipBoxPrefab_model.getChildByName('生物信息').removeAllChildren();
      //重新挂载
      http_globalAsset.TipBoxPrefab_model.getComponent('bag_物品Tools').biology_detail_alert(info.gooduse2, 1, '装备2');
    }, this);
    TipBoxPrefab.getChildByName('元神').on('click', function () {
      // TipBoxPrefab_model.getChildByName('生物信息').removeAllChildren();
      //重新挂载
      http_globalAsset.TipBoxPrefab_model.getComponent('bag_物品Tools').biology_detail_alert(info.yuanShen, 4, '元神');
    }, this); // TipBoxPrefab.getChildByName('缘分').on('click', function () {
    //     TipBoxPrefab_model.getChildByName('生物信息').removeAllChildren();
    //     //重新挂载
    //     TipBoxPrefab_model.getComponent('biology_yuanfenTools').biology_detail_alert(info)
    // }, this);
  } // update (dt) {},

});

cc._RF.pop();