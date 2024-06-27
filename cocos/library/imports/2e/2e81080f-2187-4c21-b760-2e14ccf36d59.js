"use strict";
cc._RF.push(module, '2e810gPIYdMIbdgLhTM821Z', 'score_fighting_alert');
// Script/战斗/score_fighting_alert.js

"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

require("../common");

cc.Class({
  "extends": cc.Component,
  properties: {
    // 根据TOOLS生成相应的道具
    toolsArray: []
  },
  init: function init() {
    cc.director.getScene(); //获取当前场景
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {// this.spawnTools()
  },
  start: function start() {},
  update: function update(dt) {// console.log(3333)
  },
  reloadWord: function reloadWord() {
    var _this = this;

    httpRequest.httpPost('/app/app-apiword/map-word', {}, function (data) {
      //写入地图数据
      _this.addWordMap(data);
    });
  },
  back_map: function back_map() {
    //销毁动态合图
    // cc.dynamicAtlasManager.reset()
    // var _this = cc.find('Canvas/大厅/content').getComponent('score_fighting')
    httpRequestModel.removeBoxprefab();
    httpRequest.playGame("sence_ditu");
  },
  back_reload: function back_reload() {
    httpRequestModel.removeBoxprefab();

    var _this = cc.find('Canvas/大厅/content').getComponent('score_fighting');

    _this.playTask();

    cc.find('Canvas/结算').active = false; // 结束弹窗结果
  },
  button_beishu: function button_beishu() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // var beisu_arr =[1,2,3,4,8];
              if (http_globalData.user_info.beishu < 4) {
                http_globalData.user_info.beishu = parseInt(http_globalData.user_info.beishu) + 1;
              } else {
                http_globalData.user_info.beishu = 1;
              } //修改倍数


              _context.next = 3;
              return httpRequestBagApi.http_user_beishu_update();

            case 3:
              // http_globalData.user_info.beishu
              cc.find('Canvas/倍数/倍数s').getComponent(cc.Label).string = http_globalData.user_info.beishu;

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  // back_home(){
  //   httpRequest.playGame("sence_dating")
  // },
  //跳过回合
  back_time_show: function back_time_show() {
    // this.unscheduleAllCallbacks();//停止某组件的所有计时器
    cc.find('Canvas/结算').active = true;
  },
  back_time_hidden: function back_time_hidden() {
    cc.find('Canvas/结算').active = false;
  },
  show_dlg: function show_dlg() {
    this.node.active = true;
  },
  hidden_dlg: function hidden_dlg() {
    this.node.active = false;
  },
  remove_alert: function remove_alert() {
    // 销毁所有弹窗
    cc.find('Canvas/弹窗').removeAllChildren(); // cc.find('Canvas/弹窗').destroyAllChildren();
  },
  remove_skill: function remove_skill() {
    // 销毁所有弹窗
    this.node.getChildByName('技能描述').removeAllChildren(); // cc.find('Canvas/弹窗').destroyAllChildren();
  }
});

cc._RF.pop();