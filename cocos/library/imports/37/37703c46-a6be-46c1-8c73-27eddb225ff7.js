"use strict";
cc._RF.push(module, '37703xGpr5GwYxzJ+3bIl/3', 'bag_home');
// Script/背包/bag_home.js

"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// require("../common"); 
cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return httpRequestModel.model_home_openBiology();

            case 2:
              _context.next = 4;
              return httpRequestModel.model_home_biology_detail();

            case 4:
              _context.next = 6;
              return httpRequestModel.model_home_biology_detail_heard();

            case 6:
              _context.next = 8;
              return httpRequestModel.model_home_biology_detail_heard_icon();

            case 8:
              _context.next = 10;
              return httpRequestModel.model_home_zhenfa();

            case 10:
              _context.next = 12;
              return httpRequestModel.model_home_zhenfa_bag();

            case 12:
              _context.next = 14;
              return httpRequestModel.model_home_zhenfa_icon();

            case 14:
              _context.next = 16;
              return httpRequestModel.model_home_zhenfa_biology();

            case 16:
              //加载阵法生物图标
              http_globalData.BoxPrefab_alert = cc.find('Canvas/弹窗');

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  start: function start() {},
  //刷新背包--每次操作后需要刷新背包
  brushBag: function brushBag() {
    //获取生物列表--实例化背包信息
    httpRequestBagApi.http_bag_info();
  },
  //打开背包
  openBiology: function openBiology() {
    if (http_globalData.biology && http_globalData.zhenfa && http_globalData.bag) {
      // //技能图标挂载
      var BoxPrefab = http_globalData.BoxPrefab_alert;
      var TipBoxPrefab = http_globalData.model_home_openBiology;
      TipBoxPrefab.getComponent('biology_iconTools').biology_detail_alert(TipBoxPrefab); // //生物详情挂载--默认加载第一个

      TipBoxPrefab.getComponent('biology_infoTools').biology_detail_alert(TipBoxPrefab);
      BoxPrefab.addChild(TipBoxPrefab, 1);
    } else {//如果没有生物需要弹窗另一个提示
    }
  },
  //打开阵法
  openZhenfa: function openZhenfa() {
    if (http_globalData.biology && http_globalData.zhenfa && http_globalData.bag) {
      var BoxPrefab = http_globalData.BoxPrefab_alert;
      var TipBoxPrefab_model = http_globalData.model_home_zhenfa; //阵法

      var TipBoxPrefab = http_globalData.model_home_zhenfa_bag; //阵法背包
      //生物列表挂载

      TipBoxPrefab_model.getComponent('bag_zhenfa头像Tools').biology_detail_list(TipBoxPrefab_model, TipBoxPrefab);
      TipBoxPrefab.getChildByName('上阵数s').getComponent(cc.Label).string = http_globalData.zhenfa_info.num; //写入icon

      TipBoxPrefab_model.getChildByName('背包生物').addChild(TipBoxPrefab); //写入模型

      BoxPrefab.addChild(TipBoxPrefab_model, 1);
    } else {//如果没有生物需要弹窗另一个提示
    }
  }
});

cc._RF.pop();