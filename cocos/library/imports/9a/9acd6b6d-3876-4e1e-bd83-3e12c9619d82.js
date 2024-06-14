"use strict";
cc._RF.push(module, '9acd6ttOHZOHr2DPhLJYZ2C', 'home_scence');
// Script/场景/home_scence.js

"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

require("../common");

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
              return httpRequestBagApi.http_music();

            case 2:
              _context.next = 4;
              return httpRequestBagApi.http_user_info();

            case 4:
              _context.next = 6;
              return httpRequestBagApi.http_bag_info();

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  start: function start() {},
  ProgressBar: function ProgressBar() {},
  // update (dt) {},
  //大厅
  go_sence_dating: function go_sence_dating() {
    httpRequest.playGame("sence_dating");
  },
  //诸天万界
  go_sence_zhutian: function go_sence_zhutian() {
    httpRequest.playGame("sence_zhutian");
  },
  // 创造生物
  go_go_sence_chuangzao: function go_go_sence_chuangzao() {
    httpRequest.playGame("sence_chuangzao");
  },
  //神魔炼狱
  go_sence_shenmo: function go_sence_shenmo() {
    httpRequest.playGame("sence_shenmo");
  },
  //秘境探索
  go_sence_mijing: function go_sence_mijing() {
    httpRequest.playGame("sence_mijing");
  },
  //万古仙门
  go_sence_wangu: function go_sence_wangu() {
    httpRequest.playGame("sence_wangu");
  },
  //天地熔炉
  go_sence_tiandi: function go_sence_tiandi() {
    httpRequest.playGame("sence_tiandi");
  },
  //镇妖塔
  go_sence_zhenyaota: function go_sence_zhenyaota() {
    httpRequest.playGame("sence_shenmo");
  },
  //诸天地图
  go_sence_ditu: function go_sence_ditu() {
    httpRequest.playGame("sence_ditu");
  },
  //战斗场景
  go_sence_zhandou: function go_sence_zhandou() {
    httpRequest.playGame("sence_zhandou", 1, 1); //启用进度条
  }
});

cc._RF.pop();