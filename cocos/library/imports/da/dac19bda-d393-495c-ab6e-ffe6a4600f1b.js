"use strict";
cc._RF.push(module, 'dac19va05NJXKtu/+akYA8b', 'bag_zhenfaTools');
// Script/阵法/bag_zhenfaTools.js

"use strict";

var HttpHelper = require("../http");

var httpRequest = new HttpHelper();
cc.Class({
  "extends": cc.Component,
  // onLoad () {},
  //查看生物详情_弹窗
  biology_detail_alert: function biology_detail_alert(BoxPrefab, TipBoxPrefab_model) {
    this.biology_detail_info(BoxPrefab, TipBoxPrefab_model);
  },
  biology_detail_info: function biology_detail_info(BoxPrefab, TipBoxPrefab_model) {
    cc.loader.loadRes('/model布阵/背包生物', function (errorMessage, loadedResource_icon) {
      //开始实例化预制资源
      var TipBoxPrefab = cc.instantiate(loadedResource_icon); //生物列表挂载

      TipBoxPrefab_model.getComponent('bag_zhenfa头像Tools').biology_detail_list(TipBoxPrefab_model, TipBoxPrefab); //写入icon

      TipBoxPrefab_model.getChildByName('背包生物').addChild(TipBoxPrefab);
    });
    BoxPrefab.addChild(TipBoxPrefab_model, 1);
  },
  //操作提示
  biology_detail_tips: function biology_detail_tips(TipBoxPrefab_model, tips) {
    var tips = tips || null;
    var box_tips = TipBoxPrefab_model.getChildByName('阵法提示');

    if (tips) {
      box_tips.getChildByName('阵法提示s').getComponent(cc.Label).string = tips;
    } else {
      box_tips.getChildByName('阵法提示s').getComponent(cc.Label).string = '操作成功!';
    }

    box_tips.active = true;
    box_tips.runAction(cc.sequence(cc.fadeIn(0.01), cc.scaleTo(0.3, 1.1, 1.3), cc.fadeOut(0.1), cc.scaleTo(0.3, 1, 1), cc.callFunc(function () {
      box_tips.active = false;
    }, this)));
  }
});

cc._RF.pop();