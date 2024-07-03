"use strict";
cc._RF.push(module, '6a79b2eUblM+KKQDSfvAH5a', 'model');
// Script/commonApi/model.js

"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// 背包的api请求接口
var httpModel = cc.Class({
  "extends": cc.Component,
  //引入的基础类--战斗模型
  http_base_model: function http_base_model() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(!http_globalAsset.model_biology_fightingBiology == [])) {
                _context.next = 3;
                break;
              }

              _context.next = 3;
              return httpRequestModel.model_biology_fightingBiology();

            case 3:
              if (!(!http_globalAsset.model_biology_fightingDetail == [])) {
                _context.next = 6;
                break;
              }

              _context.next = 6;
              return httpRequestModel.model_biology_fightingDetail();

            case 6:
              if (!(!http_globalAsset.model_biology_SkillIcon == [])) {
                _context.next = 9;
                break;
              }

              _context.next = 9;
              return httpRequestModel.model_biology_SkillIcon();

            case 9:
              if (!(!http_globalAsset.model_biology_SkillTips == [])) {
                _context.next = 12;
                break;
              }

              _context.next = 12;
              return httpRequestModel.model_biology_SkillTips();

            case 12:
              if (!(!http_globalAsset.model_biology_fightingEnd == [])) {
                _context.next = 15;
                break;
              }

              _context.next = 15;
              return httpRequestModel.model_biology_fightingEnd();

            case 15:
              _context.next = 17;
              return httpRequestModel.model_biology_fightingEnd();

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  //加载进度条
  model_onload_loading: function model_onload_loading() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", new Promise(function (resolve) {
                cc.loader.loadRes('/model弹窗/进度条', function (errorMessage, loadedResource) {
                  if (errorMessage) {
                    cc.log('载入预制资源失败, 原因:' + errorMessage);
                    return;
                  }

                  var TipBoxPrefab = cc.instantiate(loadedResource); // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                  //     httpRequestModel.openzhenfa_hidden()
                  // }, this);

                  http_globalAsset.model_onload_loading = TipBoxPrefab;
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
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return httpRequestBagApi.http_update_zhenfa();

            case 2:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  //返回按钮
  model_back_button: function model_back_button(sence) {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", new Promise(function (resolve) {
                cc.loader.loadRes('/model按钮/返回', function (errorMessage, loadedResource) {
                  if (errorMessage) {
                    cc.log('载入预制资源失败, 原因:' + errorMessage);
                    return;
                  }

                  var TipBoxPrefab = cc.instantiate(loadedResource);
                  TipBoxPrefab.on('click', function () {
                    httpRequest.playGame('sence_dating');
                  }, this);
                  cc.find('Canvas/按钮').addChild(TipBoxPrefab, this);
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
  //战斗--加载模板战斗生物详情
  model_fighting_map: function model_fighting_map() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", new Promise(function (resolve) {
                cc.loader.loadRes('/model战斗/sprite_地图', function (errorMessage, loadedResource) {
                  if (errorMessage) {
                    cc.log('载入预制资源失败, 原因:' + errorMessage);
                    return;
                  }

                  var TipBoxPrefab = cc.instantiate(loadedResource); // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                  //     httpRequestModel.openAlert_remove()
                  // }, this);

                  http_globalAsset.model_fighting_map = TipBoxPrefab;
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
  //战斗--加载模板战斗生物详情
  model_fighting_word: function model_fighting_word() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", new Promise(function (resolve) {
                cc.loader.loadRes('/model战斗/sprite_世界', function (errorMessage, loadedResource) {
                  if (errorMessage) {
                    cc.log('载入预制资源失败, 原因:' + errorMessage);
                    return;
                  }

                  var TipBoxPrefab = cc.instantiate(loadedResource); // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                  //     httpRequestModel.openAlert_remove()
                  // }, this);

                  http_globalAsset.model_fighting_word = TipBoxPrefab;
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
  //战斗--加载模板战斗生物详情
  model_biology_jiaose: function model_biology_jiaose() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              return _context7.abrupt("return", new Promise(function (resolve) {
                cc.loader.loadRes('/model召唤/角色选择', function (errorMessage, loadedResource) {
                  if (errorMessage) {
                    cc.log('载入预制资源失败, 原因:' + errorMessage);
                    return;
                  }

                  var TipBoxPrefab = cc.instantiate(loadedResource); // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                  //     httpRequestModel.openAlert_remove()
                  // }, this);

                  http_globalAsset.model_biology_jiaose = TipBoxPrefab;
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
  //战斗--加载模板战斗生物详情
  model_biology_fightingBiology: function model_biology_fightingBiology() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              return _context8.abrupt("return", new Promise(function (resolve) {
                cc.loader.loadRes('/model战斗/biology_生物详情', function (errorMessage, loadedResource) {
                  if (errorMessage) {
                    cc.log('载入预制资源失败, 原因:' + errorMessage);
                    return;
                  }

                  var TipBoxPrefab = cc.instantiate(loadedResource); // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                  //     httpRequestModel.openAlert_remove()
                  // }, this);

                  http_globalAsset.model_biology_fightingBiology = TipBoxPrefab;
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
  //战斗--加载模板战斗生物技能
  model_biology_fightingDetail: function model_biology_fightingDetail() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              return _context9.abrupt("return", new Promise(function (resolve) {
                cc.loader.loadRes('/model弹窗/biology_生物_战斗详情', function (errorMessage, loadedResource) {
                  if (errorMessage) {
                    cc.log('载入预制资源失败, 原因:' + errorMessage);
                    return;
                  }

                  var TipBoxPrefab = cc.instantiate(loadedResource);
                  http_globalAsset.model_biology_fightingDetail = TipBoxPrefab;
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
  //战斗--加载模板战斗生物技能--查看生物详情_弹窗
  //按钮点击回调
  model_biology_fightingBiology_button: function model_biology_fightingBiology_button(TipBoxPrefab_icon, info) {
    // var _this =this;
    TipBoxPrefab_icon.on('click', function () {
      //技能图标挂载
      var BoxPrefab = cc.find('Canvas/弹窗'); //图片直接传过去，不用再加载一次
      //  var biology_image =TipBoxPrefab_icon.getChildByName('生物').getComponent(cc.Sprite).spriteFrame;
      // 销毁所有弹窗

      BoxPrefab.removeAllChildren();
      var TipBoxPrefab = cc.instantiate(http_globalAsset.model_biology_fightingDetail); //点击事件

      TipBoxPrefab.getChildByName('遮罩').on('click', function () {
        TipBoxPrefab.getChildByName('技能描述').removeAllChildren();
        httpRequestModel.openAlert_remove();
      }, this);
      TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
        TipBoxPrefab.getChildByName('技能描述').removeAllChildren();
      }, this); //载入生物详情

      TipBoxPrefab.getChildByName('血s').getComponent(cc.Label).string = info.shengMing;
      TipBoxPrefab.getChildByName('蓝s').getComponent(cc.Label).string = info.moFa;
      TipBoxPrefab.getChildByName('生物名称s').getComponent(cc.Label).string = info.name;
      TipBoxPrefab.getChildByName('种族名称s').getComponent(cc.Label).string = info.zhong_zhu + '族';
      TipBoxPrefab.getChildByName('生物等级s').getComponent(cc.Label).string = '等级' + info.grade;
      TipBoxPrefab.getChildByName('触发概率s').getComponent(cc.Label).string = '触发率' + info.chuFa + '%'; //生物命名必须叫生物

      TipBoxPrefab.getChildByName('生物').getComponent(cc.Sprite).spriteFrame = http_globalAsset.http_base_asset_biology[info.picture];
      TipBoxPrefab.getChildByName('力量s').getComponent(cc.Label).string = '力量:' + info.power;
      TipBoxPrefab.getChildByName('敏捷s').getComponent(cc.Label).string = '敏捷:' + info.agile;
      TipBoxPrefab.getChildByName('智力s').getComponent(cc.Label).string = '智力:' + info.intelligence;
      TipBoxPrefab.getChildByName('攻击s').getComponent(cc.Label).string = '攻击:' + info.gongJi;
      TipBoxPrefab.getChildByName('护甲s').getComponent(cc.Label).string = '护甲:' + info.huJia;
      TipBoxPrefab.getChildByName('速度s').getComponent(cc.Label).string = '速度:' + info.suDu;
      TipBoxPrefab.getChildByName('特攻s').getComponent(cc.Label).string = '特攻:' + info.faGong;
      TipBoxPrefab.getChildByName('灵气s').getComponent(cc.Label).string = '灵气:' + info.reiki;
      TipBoxPrefab.getChildByName('悟性s').getComponent(cc.Label).string = '悟性:' + info.wuXing;
      TipBoxPrefab.getChildByName('暴击s').getComponent(cc.Label).string = '暴击:' + info.baojilv + '%';
      TipBoxPrefab.getChildByName('吸血s').getComponent(cc.Label).string = '吸血:' + info.xiXue + '%';
      TipBoxPrefab.getChildByName('暴伤s').getComponent(cc.Label).string = '暴伤:' + info.baoji + '%';
      TipBoxPrefab.getChildByName('闪避s').getComponent(cc.Label).string = '闪避:' + info.shanbi + '%';
      TipBoxPrefab.getChildByName('命中s').getComponent(cc.Label).string = '闪避' + '0%';
      TipBoxPrefab.getChildByName('增伤s').getComponent(cc.Label).string = '增伤:' + info.jianShang + '%';
      TipBoxPrefab.getChildByName('减伤s').getComponent(cc.Label).string = '减伤:' + info.zhenShang + '%'; //技能图标挂载

      var tool = cc.instantiate(TipBoxPrefab);
      tool.getComponent('skill_iconTools').biology_detail_skill(TipBoxPrefab, info.position_skill);
      BoxPrefab.addChild(TipBoxPrefab, 1);
    });
  },
  //战斗--加载模板战斗生物技能
  model_biology_SkillIcon: function model_biology_SkillIcon() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              return _context10.abrupt("return", new Promise(function (resolve) {
                cc.loader.loadRes('/model弹窗/biology_生物_技能图标', function (errorMessage, loadedResource) {
                  if (errorMessage) {
                    cc.log('载入预制资源失败, 原因:' + errorMessage);
                    return;
                  }

                  var TipBoxPrefab = cc.instantiate(loadedResource);
                  http_globalAsset.model_biology_SkillIcon = TipBoxPrefab;
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
  //战斗--加载模板战斗生物技能
  model_biology_SkillTips: function model_biology_SkillTips() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              return _context11.abrupt("return", new Promise(function (resolve) {
                cc.loader.loadRes('/model弹窗/biology_生物_战斗技能提示', function (errorMessage, loadedResource) {
                  if (errorMessage) {
                    cc.log('载入预制资源失败, 原因:' + errorMessage);
                    return;
                  }

                  var TipBoxPrefab = cc.instantiate(loadedResource); // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                  //     httpRequestModel.openzhenfa_hidden()
                  // }, this);

                  http_globalAsset.model_biology_SkillTips = TipBoxPrefab;
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
  },
  //战斗-战斗结束
  model_biology_fightingEnd: function model_biology_fightingEnd() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
      return regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              return _context12.abrupt("return", new Promise(function (resolve) {
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
                    httpRequestModel.removeBoxprefab();
                    httpRequest.playGame("sence_ditu");
                  }, this);
                  TipBoxPrefab.getChildByName('重播').on('click', function () {
                    httpRequestModel.removeBoxprefab();
                    cc.find('Canvas/大厅').getComponent('home_fighting').playTask();
                    httpRequestModel.openAlert_hidden();
                  }, this);
                  http_globalData.model_biology_fightingEnd = TipBoxPrefab;
                  resolve();
                });
              }));

            case 1:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    }))();
  },
  //生成战斗结束
  fightingEnd: function fightingEnd() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
      return regeneratorRuntime.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              return _context13.abrupt("return", new Promise(function (resolve) {
                var fighting_list = http_globalData.fighting.data; //开始实例化预制资源

                var TipBoxPrefab = http_globalData.model_biology_fightingEnd;

                if (fighting_list.poition_winner == 1) {
                  TipBoxPrefab.getChildByName('结果s').getComponent(cc.Label).string = '胜利！';
                } else {
                  TipBoxPrefab.getChildByName('结果s').getComponent(cc.Label).string = '失败！';
                } //将预制资源添加到父节点


                cc.find('Canvas/结算/弹框').addChild(TipBoxPrefab, _this);
                resolve();
              }));

            case 1:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13);
    }))();
  },
  //背包
  model_home_openBiology: function model_home_openBiology() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
      return regeneratorRuntime.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              return _context14.abrupt("return", new Promise(function (resolve) {
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
              return _context14.stop();
          }
        }
      }, _callee14);
    }))();
  },
  //阵法
  model_home_zhenfa: function model_home_zhenfa() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
      return regeneratorRuntime.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              return _context15.abrupt("return", new Promise(function (resolve) {
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
              return _context15.stop();
          }
        }
      }, _callee15);
    }))();
  },
  //阵法
  model_home_zhenfa_bag: function model_home_zhenfa_bag() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
      return regeneratorRuntime.wrap(function _callee16$(_context16) {
        while (1) {
          switch (_context16.prev = _context16.next) {
            case 0:
              return _context16.abrupt("return", new Promise(function (resolve) {
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
              return _context16.stop();
          }
        }
      }, _callee16);
    }))();
  },
  //阵法
  model_home_zhenfa_icon: function model_home_zhenfa_icon() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
      return regeneratorRuntime.wrap(function _callee17$(_context17) {
        while (1) {
          switch (_context17.prev = _context17.next) {
            case 0:
              return _context17.abrupt("return", new Promise(function (resolve) {
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
              return _context17.stop();
          }
        }
      }, _callee17);
    }))();
  },
  //阵法
  model_home_zhenfa_biology: function model_home_zhenfa_biology() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
      return regeneratorRuntime.wrap(function _callee18$(_context18) {
        while (1) {
          switch (_context18.prev = _context18.next) {
            case 0:
              return _context18.abrupt("return", new Promise(function (resolve) {
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
              return _context18.stop();
          }
        }
      }, _callee18);
    }))();
  },
  model_zhaohuan_chuangzao: function model_zhaohuan_chuangzao() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
      return regeneratorRuntime.wrap(function _callee19$(_context19) {
        while (1) {
          switch (_context19.prev = _context19.next) {
            case 0:
              return _context19.abrupt("return", new Promise(function (resolve) {
                cc.loader.loadRes('/model召唤/A创造', function (errorMessage, loadedResource) {
                  if (errorMessage) {
                    cc.log('载入预制资源失败, 原因:' + errorMessage);
                    return;
                  }

                  var TipBoxPrefab = cc.instantiate(loadedResource); // TipBoxPrefab.getChildByName('关闭弹窗').on('click', function () {
                  //     httpRequestModel.openzhenfa_hidden()
                  // }, this);

                  http_globalAsset.model_zhaohuan_chuangzao = TipBoxPrefab;
                  resolve();
                });
              }));

            case 1:
            case "end":
              return _context19.stop();
          }
        }
      }, _callee19);
    }))();
  }
});
window.httpRequestModel = new httpModel();

cc._RF.pop();