"use strict";
cc._RF.push(module, 'ca358Mpn0dPrJ82VRBGkbhR', 'Game');
// Script/bage/Game.js

"use strict";

var _Conf = require("./Conf");

cc.Class({
  "extends": cc.Component,
  properties: {
    gridLayout: cc.Node,
    toolPrefab: cc.Prefab
  },
  // LIFE-CYCLE CALLBACKS:
  spawnTools: function spawnTools() {
    // 首先确定gridLayout的各个属性
    var cellWidth = this.gridLayout.width * 0.105;
    var cellHeight = this.gridLayout.height * 0.215;
    var spacingX = this.gridLayout.width * 0.022;
    var spacingY = this.gridLayout.height * 0.045;
    this.gridLayout.getComponent(cc.Layout).cellSize.width = cellWidth;
    this.gridLayout.getComponent(cc.Layout).cellSize.height = cellHeight;
    this.gridLayout.getComponent(cc.Layout).spacingX = spacingX;
    this.gridLayout.getComponent(cc.Layout).spacingY = spacingY; // 根据TOOLS生成相应的道具

    this.toolsArray = [];

    for (var i = 0; i < _Conf.TOOLS.length; i++) {
      var tool = cc.instantiate(this.toolPrefab);
      tool.getComponent('Tool').initInfo(_Conf.TOOLS[i]);
      this.toolsArray.push(tool);
      this.gridLayout.addChild(tool);
    }
  },
  bagBtn: function bagBtn() {
    // 背包按钮
    if (this.gridLayout.parent.active) {
      // 隐藏节点
      this.gridLayout.parent.active = false; // 删除所有道具(或者不删，只是隐藏，自己决定)

      this.toolsArray.forEach(function (element) {
        element.removeFromParent();
      });
    } else {
      // 显示节点
      this.gridLayout.parent.active = true; // 生成所有道具

      this.spawnTools();
    }
  }
});

cc._RF.pop();