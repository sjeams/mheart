"use strict";
cc._RF.push(module, 'd6864+QBApGN6/S2EQlywU7', 'alert');
// Script/commonApi/alert.js

"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// 背包的api请求接口
var httpAlert = cc.Class({
  "extends": cc.Component,
  openBag_hidden: function openBag_hidden() {
    // cc.find('Canvas/弹窗').active =false;
    cc.find('Canvas/弹窗').removeAllChildren();
  },
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
  alert_getTips: function alert_getTips() {
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
  //操作加载弹窗模板
  alert_biologyDetail: function alert_biologyDetail() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", new Promise(function (resolve) {
                var _this = _this2;
                cc.loader.loadRes('/model召唤/A召唤详情', function (errorMessage, loadedResource) {
                  var TipBoxPrefab = cc.instantiate(loadedResource);
                  TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                    _this.openBag_hidden();
                  }, this);
                  http_globalData.alert_biologyDetail = TipBoxPrefab;
                  resolve();
                });
              }));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  //操作加载弹窗模板
  alert_shangdian: function alert_shangdian() {
    var _this3 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", new Promise(function (resolve) {
                var _this = _this3;
                cc.loader.loadRes('/model商店/A商店', function (errorMessage, loadedResource) {
                  // var TipBoxPrefab_tips = cc.instantiate(loadedResource);
                  var TipBoxPrefab = cc.instantiate(loadedResource);
                  TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                    _this.openBag_hidden();
                  }, this);
                  http_globalData.alert_shangdian = TipBoxPrefab;
                  resolve();
                });
              }));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  //操作提示
  alert_goTips: function alert_goTips(tips) {
    var TipBoxPrefab_tips = cc.instantiate(http_globalData.alert_tips);
    TipBoxPrefab_tips.getChildByName('提示s').getComponent(cc.Label).string = tips;
    TipBoxPrefab_tips.runAction(cc.sequence(cc.fadeIn(0.1), cc.delayTime(0.5), cc.fadeOut(0.2)), cc.callFunc(function () {
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
  },
  //创建生物弹窗
  alert_biologyTips: function alert_biologyTips(TipBoxPrefab) {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", new Promise(function (resolve) {
                httpRequestAlert.actionBlink_show(TipBoxPrefab.getChildByName('右旋转'), 0, 1, 360, 360, 1.6);
                httpRequestAlert.actionBlink_show(TipBoxPrefab.getChildByName('生物创造'), 0, 1, 360, 360, 1.6); // var TipBoxPrefab_tips = cc.instantiate(http_globalData.alert_tips)
                // TipBoxPrefab_tips.getChildByName('提示s').getComponent(cc.Label).string=tips

                _this4.schedule(function () {
                  var TipBoxPrefab_tips = http_globalData.alert_biologyDetail; // TipBoxPrefab_tips.getChildByName('提示s').getComponent(cc.Label).string=tips
                  // TipBoxPrefab_tips.runAction(cc.sequence( cc.fadeIn(0.1),cc.delayTime(0.3),cc.fadeOut(0.2)),cc.callFunc(function(){ 
                  //     //移除挂载
                  //     TipBoxPrefab_tips.destroy();
                  // },this)); 

                  cc.find('Canvas/弹窗').addChild(TipBoxPrefab_tips);
                  resolve();
                }, 1, 0);
              }));

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  //重复闪烁旋转   time 时常/角度
  actionBlink_show: function actionBlink_show(TipBoxPrefab_icon, runing, time, ratation, ratation_back, big) {
    // TipBoxPrefab_icon.getChildByName('旋转')
    // var _this=this;
    // 创建旋转动作，这里以每秒绕X轴旋转360度为例
    // const rotateAction = cc.rotateBy(5,360)
    // const rotateAction = cc.blink(1,1)
    // const actionhiddenOn = cc.fadeTo(0.1,0);
    // const actionhiddenoff = cc.fadeTo(0.1,255); 
    if (runing) {
      var actionhiddenBig = cc.spawn(cc.rotateBy(time, ratation), cc.scaleTo(time, big, big), cc.delayTime(1));
      var actionhiddenSmoll = cc.spawn(cc.rotateBy(time, ratation_back), cc.scaleTo(time, 1, 1), cc.delayTime(1));
      var repeatAction = cc.repeatForever(cc.sequence(actionhiddenBig, actionhiddenSmoll), cc.callFunc(function () {}, this));
      TipBoxPrefab_icon.runAction(repeatAction);
    } else {
      var _actionhiddenBig = cc.spawn(cc.rotateBy(time, ratation), cc.scaleTo(time, big, big), cc.delayTime(1));

      var _actionhiddenSmoll = cc.spawn(cc.rotateBy(time, ratation_back), cc.scaleTo(time, 1, 1), cc.delayTime(1));

      TipBoxPrefab_icon.runAction(cc.sequence(_actionhiddenBig, _actionhiddenSmoll), cc.callFunc(function () {}, this)); // const actionhiddenSmoll   = cc.spawn(cc.rotateBy(0.01,0),cc.scaleTo(0.01,1,1),cc.delayTime(0.01))
      // const  repeatAction  = cc.repeatForever(cc.sequence(actionhiddenSmoll),cc.callFunc(function(){   },this))
      // TipBoxPrefab_icon.runAction(repeatAction);
      // TipBoxPrefab_icon.stopAllActions();
    }
  }
});
window.httpRequestAlert = new httpAlert();

cc._RF.pop();