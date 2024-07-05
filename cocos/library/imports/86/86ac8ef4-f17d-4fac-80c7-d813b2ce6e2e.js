"use strict";
cc._RF.push(module, '86ac8708X1PrIDH2BOyzm4u', 'bag_详情Tools');
// Script/背包/bag_详情Tools.js

"use strict";

// require("../common"); 
cc.Class({
  "extends": cc.Component,
  properties: {},
  //技能图片渲染  is_use  0卸下  1使用
  biology_detail_alert_goods: function biology_detail_alert_goods(TipBoxPrefab_icon, info) {
    http_globalData.goodsinfo = info; //选择物品
    // let gooduse_list = http_globalData.gooduse;
    // gooduse_type  1武器  详情类型必传，不然无法区分类型

    var _this = this;

    cc.loader.loadRes('/model背包/背包装备详情', function (errorMessage, loadedResource_icon) {
      //检查资源加载
      if (errorMessage) {
        cc.log('载入预制资源失败, 原因:' + errorMessage);
        return;
      }

      if (!(loadedResource_icon instanceof cc.Prefab)) {
        cc.log('你载入的不是预制资源!');
        return;
      } //开始实例化预制资源


      var TipBoxPrefab = cc.instantiate(loadedResource_icon); //按钮--物品是否相等

      if (http_globalData.goodsid != http_globalData.goodsinfo.id) {
        TipBoxPrefab.getChildByName('卸下s').getComponent(cc.Label).string = http_globalData.gooduse[http_globalData.gooduse_type].type_name;
      } //技能等级
      // TipBoxPrefab.getChildByName('生物数量s').getComponent(cc.Label).string='生物('+info_list.length+'/60)'
      // 由于加载资源的操作是异步的，如果在加载完成前就绑定了事件，有可能会触发事件的自动执行。
      // 由于加载资源的操作是异步的，如果在加载完成前就绑定了事件，有可能会触发事件的自动执行。
      //渲染详情


      _this.biology_detail_list(TipBoxPrefab); // 此处进行事件绑定


      _this.bind_button(TipBoxPrefab_icon, TipBoxPrefab); //写入icon


      http_globalAsset.TipBoxPrefab_model.getChildByName('中间弹窗').addChild(TipBoxPrefab); // return     http_globalAsset.TipBoxPrefab_model
    }); // return     http_globalAsset.TipBoxPrefab_model
  },
  //绑定点击事件--关闭遮罩
  bind_button: function bind_button(TipBoxPrefab_icon, TipBoxPrefab) {
    TipBoxPrefab.getChildByName('遮罩').on('click', function () {
      // 事件处理逻辑
      //移除挂载
      http_globalAsset.TipBoxPrefab_model.getChildByName('中间弹窗').removeAllChildren(); //重新挂载
      //     http_globalAsset.TipBoxPrefab_model.getComponent('biology_skillTools').biology_detail_alert(info)
    }, this); //物品使用事件

    TipBoxPrefab.getChildByName('卸下').on('click', function () {
      // 事件处理逻辑
      //移除挂载
      http_globalAsset.TipBoxPrefab_model.getChildByName('中间弹窗').removeAllChildren(); //重新挂载--按钮事件类型--定义按钮事件类型

      http_globalAsset.TipBoxPrefab_model.getComponent('bag_详情按钮Tools').biology_init(TipBoxPrefab_icon);
    }, this);
  },
  biology_detail_list: function biology_detail_list(TipBoxPrefab) {
    TipBoxPrefab.getChildByName('P技能').getComponent(cc.Sprite).spriteFrame = http_globalAsset.http_base_asset_zhuangbei[http_globalData.goodsinfo.point];
    TipBoxPrefab.getChildByName('名称s').getComponent(cc.Label).string = http_globalData.goodsinfo.name;
    TipBoxPrefab.getChildByName('名称s').color = new cc.color(http_globalData.goodsinfo.nature_color);
    TipBoxPrefab.getChildByName('介绍s').getComponent(cc.Label).string = http_globalData.goodsinfo.describe; // (白 绿 蓝 紫 金 红 橙) 鬼仙神（彩）

    TipBoxPrefab.getChildByName('评分s').getComponent(cc.Label).string = http_globalData.goodsinfo.nature_grade;
    TipBoxPrefab.getChildByName('属性s').getComponent(cc.Label).string = http_globalData.goodsinfo.nature;
  }
});

cc._RF.pop();