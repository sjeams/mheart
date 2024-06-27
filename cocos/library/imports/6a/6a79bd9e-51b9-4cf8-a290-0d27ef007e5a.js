"use strict";
cc._RF.push(module, '6a79b2eUblM+KKQDSfvAH5a', 'model');
// Script/commonApi/model.js

"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// 背包的api请求接口
var httpModel = cc.Class({
  "extends": cc.Component,
  //移除容器
  removeBoxprefab: function removeBoxprefab() {
    http_globalData.BoxPrefab_content.removeAllChildren();
    http_globalData.BoxPrefab_content.destroyAllChildren();
  },
  openBag_hidden: function openBag_hidden() {
    // cc.find('Canvas/弹窗').active =false;
    cc.find('Canvas/弹窗').removeAllChildren();
  },
  //加载模板战斗生物详情
  model_biology_fighting: function model_biology_fighting() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", new Promise(function (resolve) {
                cc.loader.loadRes('/model战斗/biology_生物详情', function (errorMessage, loadedResource) {
                  if (errorMessage) {
                    cc.log('载入预制资源失败, 原因:' + errorMessage);
                    return;
                  } // var TipBoxPrefab_tips = cc.instantiate(loadedResource);


                  http_globalData.model_biology_fighting = loadedResource;
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
  // //操作提示
  // alert_goTips(tips){
  //     var TipBoxPrefab_tips = cc.instantiate(http_globalData.alert_tips)
  //     TipBoxPrefab_tips.getChildByName('提示s').getComponent(cc.Label).string=tips
  //     TipBoxPrefab_tips.runAction(cc.sequence( cc.fadeIn(0.1),cc.delayTime(0.3),cc.fadeOut(0.2)),cc.callFunc(function(){ 
  //         //移除挂载
  //         TipBoxPrefab_tips.destroy();
  //     },this)); 
  //     cc.find('Canvas').addChild(TipBoxPrefab_tips); 
  // },
  //战斗结束
  model_biology_fightingEnd: function model_biology_fightingEnd() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", new Promise(function (resolve) {
                cc.loader.loadRes('/model弹窗/biology_结算', function (errorMessage, loadedResource) {
                  if (errorMessage) {
                    cc.log('载入预制资源失败, 原因:' + errorMessage);
                    return;
                  }

                  var TipBoxPrefab = cc.instantiate(loadedResource);
                  TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                    cc.find('Canvas/结算').active = false; // 结束弹窗结果
                  }, this);
                  TipBoxPrefab.getChildByName('canser').on('click', function () {
                    cc.find('Canvas/结算').active = false; // 结束弹窗结果
                  }, this);
                  TipBoxPrefab.getChildByName('返回地图').on('click', function () {
                    httpRequest.playGame("sence_ditu");
                  }, this);
                  TipBoxPrefab.getChildByName('重播').on('click', function () {
                    httpRequestModel.removeBoxprefab();
                    cc.find('Canvas/大厅/content').getComponent('score_fighting').playTask();
                    cc.find('Canvas/结算').active = false; // 结束弹窗结果
                  }, this);
                  http_globalData.model_biology_fightingEnd = TipBoxPrefab;
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
  }
});
window.httpRequestModel = new httpModel();

cc._RF.pop();