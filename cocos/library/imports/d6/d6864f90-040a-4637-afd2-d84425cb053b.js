"use strict";
cc._RF.push(module, 'd6864+QBApGN6/S2EQlywU7', 'alert');
// Script/commonApi/alert.js

"use strict";

// 背包的api请求接口
var httpAlert = cc.Class({
  "extends": cc.Component,
  getNicheng: function getNicheng() {
    var arr = http_globalData.user_nicheng;
    var r_num = Math.round(Math.random() * (3 - 1) + 1); //随机1-3

    var stag_name = '';

    for (var i = 0; i <= r_num; i++) {
      var round = Math.round(Math.random() * (arr.length - 1)); //随机 0-arr.length 的变量  

      stag_name = stag_name + arr[round];
    }

    return stag_name;
  },
  // 隐藏弹窗
  hidePopup: function hidePopup(popupNode) {
    // 播放隐藏动画
    popupNode.active = false;
    popupNode.runAction(cc.sequence(cc.fadeOut(0.2), cc.callFunc(function () {// 动画播放完成后将节点设置为不可见
    }, this)));
  },
  // 显示弹窗
  showPopup: function showPopup(popupNode) {
    // 设置节点为可见并播放显示动画
    // 播放动画，"showAnimation" 是弹窗显示的动画名称
    // 设置节点为可见并播放显示动画
    popupNode.active = true; // 播放动画，"showAnimation" 是弹窗显示的动画名称

    popupNode.runAction(cc.sequence(cc.fadeOut(0.01), cc.fadeIn(0.5), cc.callFunc(function () {// 动画播放完成的回调
    }, this)));
  }
});
window.httpRequestAlert = new httpAlert();

cc._RF.pop();