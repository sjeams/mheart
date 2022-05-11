"use strict";
cc._RF.push(module, '49a64EsluZBxJenF/5eS2wy', 'Tool');
// Script/bage/Tool.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  initInfo: function initInfo(info) {
    // 初始化该道具相关信息
    // 图片
    var self = this;
    cc.loader.loadRes(info['picUrl'], cc.SpriteFrame, function (err, spriteFrame) {
      self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
    }); // 介绍

    this.node.intro = info['intro'];
  }
});

cc._RF.pop();