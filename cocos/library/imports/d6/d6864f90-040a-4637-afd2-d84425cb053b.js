"use strict";
cc._RF.push(module, 'd6864+QBApGN6/S2EQlywU7', 'alert');
// Script/commonApi/alert.js

"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
  //操作加载弹窗模板
  getTips: function getTips() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", new Promise(function (resolve) {
                cc.loader.loadRes('/model弹窗/弹窗提示', function (errorMessage, loadedResource) {
                  // var TipBoxPrefab_tips = cc.instantiate(loadedResource);
                  http_globalData.alert_tips = loadedResource;
                  resolve();
                });
              }));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  //操作提示
  goTips: function goTips(tips) {
    var TipBoxPrefab_tips = cc.instantiate(http_globalData.alert_tips);
    TipBoxPrefab_tips.getChildByName('提示s').getComponent(cc.Label).string = tips;
    TipBoxPrefab_tips.runAction(cc.sequence(cc.fadeIn(0.1), cc.delayTime(0.3), cc.fadeOut(0.2)), cc.callFunc(function () {
      //移除挂载
      TipBoxPrefab_tips.destroy();
    }, this));
    cc.find('Canvas').addChild(TipBoxPrefab_tips);
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