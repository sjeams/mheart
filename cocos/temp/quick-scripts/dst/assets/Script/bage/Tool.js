
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/bage/Tool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxiYWdlXFxUb29sLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiaW5pdEluZm8iLCJpbmZvIiwic2VsZiIsImxvYWRlciIsImxvYWRSZXMiLCJTcHJpdGVGcmFtZSIsImVyciIsInNwcml0ZUZyYW1lIiwibm9kZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsImludHJvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU1MO0FBRUFDLEVBQUFBLFFBUkssb0JBUUtDLElBUkwsRUFRVztBQUNaO0FBRUE7QUFDQSxRQUFJQyxJQUFJLEdBQUcsSUFBWDtBQUNBTixJQUFBQSxFQUFFLENBQUNPLE1BQUgsQ0FBVUMsT0FBVixDQUFrQkgsSUFBSSxDQUFDLFFBQUQsQ0FBdEIsRUFBa0NMLEVBQUUsQ0FBQ1MsV0FBckMsRUFBa0QsVUFBVUMsR0FBVixFQUFlQyxXQUFmLEVBQTRCO0FBQzFFTCxNQUFBQSxJQUFJLENBQUNNLElBQUwsQ0FBVUMsWUFBVixDQUF1QmIsRUFBRSxDQUFDYyxNQUExQixFQUFrQ0gsV0FBbEMsR0FBZ0RBLFdBQWhEO0FBQ0gsS0FGRCxFQUxZLENBU1o7O0FBQ0EsU0FBS0MsSUFBTCxDQUFVRyxLQUFWLEdBQWtCVixJQUFJLENBQUMsT0FBRCxDQUF0QjtBQUNIO0FBbkJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICB9LFxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIGluaXRJbmZvIChpbmZvKSB7XHJcbiAgICAgICAgLy8g5Yid5aeL5YyW6K+l6YGT5YW355u45YWz5L+h5oGvXHJcblxyXG4gICAgICAgIC8vIOWbvueJh1xyXG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhpbmZvWydwaWNVcmwnXSwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7XHJcbiAgICAgICAgICAgIHNlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyDku4vnu41cclxuICAgICAgICB0aGlzLm5vZGUuaW50cm8gPSBpbmZvWydpbnRybyddO1xyXG4gICAgfSxcclxufSk7XHJcbiJdfQ==