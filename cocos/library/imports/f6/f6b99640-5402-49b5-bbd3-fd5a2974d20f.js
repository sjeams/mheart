"use strict";
cc._RF.push(module, 'f6b99ZAVAJJtbvT/VopdNIP', 'word_score');
// Script/场景/word_score.js

"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

require("../common");

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return httpRequestBagApi.http_music();

            case 2:
              cc.sys.BoxPrefab = cc.find('Canvas/大厅/content');

              _this2.spawnTools();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  spawnTools: function spawnTools() {
    var _this = this;

    httpRequest.httpPost('/app/app-apiword/index', {}, function (data) {
      if (data.data) {
        _this.searchHidden();

        var TOOLS = [data.data];
        var total = 1;

        _this.showWord(TOOLS, total);
      } else {
        _this.searchShow();
      }
    });
  },
  showWord: function showWord(info, total) {
    var _this = this; //移除节点


    _this.removeBoxprefab(); //技能图标挂载


    var BoxPrefab = cc.sys.BoxPrefab;
    BoxPrefab.getComponent('wordTools').biology_detail_list(BoxPrefab, info);
  },
  addWord: function addWord() {
    var _this = this;

    httpRequest.httpPost('/app/app-apiword/rand-word', {}, function (data) {
      var TOOLS = data.data;
      var total = data.data.length;

      _this.showWord(TOOLS, total);
    });
  },
  addTouchEvent: function addTouchEvent(node_1) {
    node_1.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
    node_1.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
    node_1.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
  },
  outWord: function outWord() {
    //移除节点
    var _this = this;

    _this.removeBoxprefab();

    _this.searchShow();

    httpRequest.httpPost('/app/app-apiword/out-word', {}, function (data) {});
  },
  backHome: function backHome() {
    //移除节点
    var _this = this;

    _this.removeBoxprefab();

    httpRequest.playGame("sence_dating");
  },
  searchShow: function searchShow() {
    cc.find("Canvas/大厅/探索世界").active = true;
    cc.find("Canvas/大厅/退出世界").active = false;
  },
  searchHidden: function searchHidden() {
    cc.find("Canvas/大厅/探索世界").active = false;
    cc.find("Canvas/大厅/退出世界").active = true;
  },
  //移除容器
  removeBoxprefab: function removeBoxprefab() {
    cc.sys.BoxPrefab.removeAllChildren();
    cc.sys.BoxPrefab.destroyAllChildren();
  }
});

cc._RF.pop();