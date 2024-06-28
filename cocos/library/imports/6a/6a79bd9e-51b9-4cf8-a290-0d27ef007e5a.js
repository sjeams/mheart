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
  openAlert_remove: function openAlert_remove() {
    // cc.find('Canvas/弹窗').active =false;
    cc.find('Canvas/弹窗').removeAllChildren(); // 结束弹窗结果
  },
  openAlert_hidden: function openAlert_hidden() {
    // cc.find('Canvas/弹窗').active =false;
    cc.find('Canvas/结算').active = false; // 结束弹窗结果
  },
  //阵法 关闭 提交结果，需要单独处理了
  openzhenfa_hidden: function openzhenfa_hidden() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return httpRequestBagApi.http_update_zhenfa();

            case 2:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  //战斗--加载模板战斗生物详情
  model_biology_fightingBiology: function model_biology_fightingBiology() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", new Promise(function (resolve) {
                cc.loader.loadRes('/model战斗/biology_生物详情', function (errorMessage, loadedResource) {
                  if (errorMessage) {
                    cc.log('载入预制资源失败, 原因:' + errorMessage);
                    return;
                  }

                  var TipBoxPrefab = cc.instantiate(loadedResource); // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                  //     httpRequestModel.openzhenfa_hidden()
                  // }, this);

                  http_globalData.model_biology_fightingBiology = TipBoxPrefab;
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
  //战斗--加载模板战斗生物技能
  model_biology_fightingDetail: function model_biology_fightingDetail() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", new Promise(function (resolve) {
                cc.loader.loadRes('/model弹窗/biology_生物_战斗详情', function (errorMessage, loadedResource) {
                  if (errorMessage) {
                    cc.log('载入预制资源失败, 原因:' + errorMessage);
                    return;
                  }

                  var TipBoxPrefab = cc.instantiate(loadedResource); // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                  //     httpRequestModel.openzhenfa_hidden()
                  // }, this);

                  http_globalData.model_biology_fightingDetail = TipBoxPrefab;
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
  //战斗--加载模板战斗生物技能
  model_biology_SkillIcon: function model_biology_SkillIcon() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", new Promise(function (resolve) {
                cc.loader.loadRes('/model弹窗/biology_生物_技能图标', function (errorMessage, loadedResource) {
                  if (errorMessage) {
                    cc.log('载入预制资源失败, 原因:' + errorMessage);
                    return;
                  }

                  var TipBoxPrefab = cc.instantiate(loadedResource); // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                  //     httpRequestModel.openzhenfa_hidden()
                  // }, this);

                  http_globalData.model_biology_SkillIcon = TipBoxPrefab;
                  resolve();
                });
              }));

            case 1:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  //战斗--加载模板战斗生物技能
  model_biology_SkillTips: function model_biology_SkillTips() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", new Promise(function (resolve) {
                cc.loader.loadRes('/model弹窗/biology_生物_战斗技能提示', function (errorMessage, loadedResource) {
                  if (errorMessage) {
                    cc.log('载入预制资源失败, 原因:' + errorMessage);
                    return;
                  }

                  var TipBoxPrefab = cc.instantiate(loadedResource); // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                  //     httpRequestModel.openzhenfa_hidden()
                  // }, this);

                  http_globalData.model_biology_SkillTips = TipBoxPrefab;
                  resolve();
                });
              }));

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
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
  //战斗-战斗结束
  model_biology_fightingEnd: function model_biology_fightingEnd() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", new Promise(function (resolve) {
                cc.loader.loadRes('/model弹窗/biology_结算', function (errorMessage, loadedResource) {
                  if (errorMessage) {
                    cc.log('载入预制资源失败, 原因:' + errorMessage);
                    return;
                  }

                  var TipBoxPrefab = cc.instantiate(loadedResource);
                  TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                    httpRequestModel.openAlert_hidden();
                  }, this);
                  TipBoxPrefab.getChildByName('canser').on('click', function () {
                    httpRequestModel.openAlert_hidden();
                  }, this);
                  TipBoxPrefab.getChildByName('返回地图').on('click', function () {
                    httpRequest.playGame("sence_ditu");
                  }, this);
                  TipBoxPrefab.getChildByName('重播').on('click', function () {
                    httpRequestModel.removeBoxprefab();
                    cc.find('Canvas/大厅/content').getComponent('score_fighting').playTask();
                    httpRequestModel.openAlert_hidden();
                  }, this);
                  http_globalData.model_biology_fightingEnd = TipBoxPrefab;
                  resolve();
                });
              }));

            case 1:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }))();
  },
  //背包
  model_home_openBiology: function model_home_openBiology() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              return _context7.abrupt("return", new Promise(function (resolve) {
                cc.loader.loadRes('/model背包/A生物背包', function (errorMessage, loadedResource) {
                  if (errorMessage) {
                    cc.log('载入预制资源失败, 原因:' + errorMessage);
                    return;
                  }

                  var TipBoxPrefab = cc.instantiate(loadedResource);
                  TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                    httpRequestModel.openAlert_remove();
                  }, this);
                  http_globalData.model_home_openBiology = TipBoxPrefab;
                  resolve();
                });
              }));

            case 1:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }))();
  },
  //阵法
  model_home_zhenfa: function model_home_zhenfa() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              return _context8.abrupt("return", new Promise(function (resolve) {
                cc.loader.loadRes('/model布阵/A生物布阵', function (errorMessage, loadedResource) {
                  if (errorMessage) {
                    cc.log('载入预制资源失败, 原因:' + errorMessage);
                    return;
                  }

                  var TipBoxPrefab = cc.instantiate(loadedResource);
                  TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                    httpRequestModel.openzhenfa_hidden();
                  }, this);
                  http_globalData.model_home_zhenfa = TipBoxPrefab;
                  resolve();
                });
              }));

            case 1:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }))();
  },
  //阵法
  model_home_zhenfa_bag: function model_home_zhenfa_bag() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              return _context9.abrupt("return", new Promise(function (resolve) {
                cc.loader.loadRes('/model布阵/背包生物', function (errorMessage, loadedResource) {
                  if (errorMessage) {
                    cc.log('载入预制资源失败, 原因:' + errorMessage);
                    return;
                  }

                  var TipBoxPrefab = cc.instantiate(loadedResource); // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                  //     httpRequestModel.openzhenfa_hidden()
                  // }, this);

                  http_globalData.model_home_zhenfa_bag = TipBoxPrefab;
                  resolve();
                });
              }));

            case 1:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }))();
  },
  //阵法
  model_home_zhenfa_icon: function model_home_zhenfa_icon() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              return _context10.abrupt("return", new Promise(function (resolve) {
                cc.loader.loadRes('/model布阵/图标生物', function (errorMessage, loadedResource) {
                  if (errorMessage) {
                    cc.log('载入预制资源失败, 原因:' + errorMessage);
                    return;
                  }

                  var TipBoxPrefab = cc.instantiate(loadedResource); // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                  //     httpRequestModel.openzhenfa_hidden()
                  // }, this);

                  http_globalData.model_home_zhenfa_icon = TipBoxPrefab;
                  resolve();
                });
              }));

            case 1:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }))();
  },
  //阵法
  model_home_zhenfa_biology: function model_home_zhenfa_biology() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              return _context11.abrupt("return", new Promise(function (resolve) {
                cc.loader.loadRes('/model布阵/图标阵法', function (errorMessage, loadedResource) {
                  if (errorMessage) {
                    cc.log('载入预制资源失败, 原因:' + errorMessage);
                    return;
                  }

                  var TipBoxPrefab = cc.instantiate(loadedResource); // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                  //     httpRequestModel.openzhenfa_hidden()
                  // }, this);

                  http_globalData.model_home_zhenfa_biology = TipBoxPrefab;
                  resolve();
                });
              }));

            case 1:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }))();
  }
});
window.httpRequestModel = new httpModel();

cc._RF.pop();