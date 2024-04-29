"use strict";
cc._RF.push(module, 'dac19va05NJXKtu/+akYA8b', 'bag_zhengfaTools');
// Script/阵法/bag_zhengfaTools.js

"use strict";

var HttpHelper = require("../http");

var httpRequest = new HttpHelper();
cc.Class({
  "extends": cc.Component,
  // onLoad () {},
  //查看生物详情_弹窗
  biology_detail_alert: function biology_detail_alert(BoxPrefab, TipBoxPrefab) {
    this.biology_detail_info(BoxPrefab, TipBoxPrefab);
  },
  biology_detail_info: function biology_detail_info(BoxPrefab, TipBoxPrefab) {
    //生物列表挂载
    TipBoxPrefab.getComponent('bag_zhengfa头像Tools').biology_detail_alert(TipBoxPrefab); //生物详情挂载--默认加载第一个

    TipBoxPrefab.getComponent('bag_zhengfa布阵Tools').biology_detail_alert(TipBoxPrefab); // // //技能列表挂载--默认挂载技能列表
    // tool.getComponent('biology_skillTools').biology_detail_alert(TipBoxPrefab,info[0])
    // // //信息列表挂载
    // tool.getComponent('biology_xinxiTools').biology_detail_alert(TipBoxPrefab,info[0])
    // // //缘分列表挂载
    // tool.getComponent('biology_yuanfenTools').biology_detail_alert(TipBoxPrefab,info[0])

    BoxPrefab.addChild(TipBoxPrefab, 1);
  }
});

cc._RF.pop();