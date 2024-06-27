"use strict";
cc._RF.push(module, '37703xGpr5GwYxzJ+3bIl/3', 'bag_home');
// Script/背包/bag_home.js

"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

require("../common");

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {// cc.log(http_globalData.playerName)
    //大厅需要加载的全局变量
    // http_globalData={}
    // var remoteUrl = httpRequest.httpUrlJson(figthing_remote_url);
    // cc.loader.load({ url: remoteUrl }, function (err, data) {
    // this.brushBag();
    // var _urls ='/app_resources/loading/武侠.mp3';
    // var new_url = httpRequest.httpUrl(new_url);
    // cc.audioEngine.playMusic(cc.url.raw(_urls), true);
    // cc.audioEngine.play(_urls, false, 1);  
  },
  start: function start() {},
  //刷新背包--每次操作后需要刷新背包
  brushBag: function brushBag() {
    //获取生物列表--实例化背包信息
    httpRequestBagApi.http_bag_info();
  },
  //打开背包
  openBag: function openBag() {
    if (http_globalData.biology && http_globalData.zhenfa && http_globalData.bag) {
      //技能图标挂载
      var BoxPrefab = cc.find('Canvas/弹窗'); // 销毁所有弹窗

      BoxPrefab.removeAllChildren();
      cc.loader.loadRes('/model背包/A生物背包', function (errorMessage, loadedResource) {
        //检查资源加载
        if (errorMessage) {
          cc.log('载入预制资源失败, 原因:' + errorMessage);
          return;
        }

        if (!(loadedResource instanceof cc.Prefab)) {
          cc.log('你载入的不是预制资源!');
          return;
        } //开始实例化预制资源


        var TipBoxPrefab = cc.instantiate(loadedResource);
        TipBoxPrefab.getComponent('biology_bagTools').biology_detail_alert(BoxPrefab, TipBoxPrefab);
      }); // BoxPrefab.getComponent('biology_bagTools').biology_detail_alert(BoxPrefab,info)
    } else {//如果没有生物需要弹窗另一个提示
      }
  },
  //打开阵法
  openZhenfa: function openZhenfa() {
    if (http_globalData.biology && http_globalData.zhenfa && http_globalData.bag) {
      //技能图标挂载
      var BoxPrefab = cc.find('Canvas/弹窗'); // 销毁所有弹窗

      BoxPrefab.removeAllChildren();
      cc.loader.loadRes('/model布阵/A生物布阵', function (errorMessage, loadedResource) {
        //检查资源加载
        if (errorMessage) {
          cc.log('载入预制资源失败, 原因:' + errorMessage);
          return;
        }

        if (!(loadedResource instanceof cc.Prefab)) {
          cc.log('你载入的不是预制资源!');
          return;
        } //开始实例化预制资源


        var TipBoxPrefab = cc.instantiate(loadedResource);
        TipBoxPrefab.getComponent('bag_zhenfaTools').biology_detail_alert(BoxPrefab, TipBoxPrefab);
      }); // BoxPrefab.getComponent('biology_bagTools').biology_detail_alert(BoxPrefab,info)
    } else {//如果没有生物需要弹窗另一个提示
      }
  },
  //没有处理逻辑，可以共用--关闭窗口
  // openBag_hidden(){
  //     // cc.find('Canvas/弹窗').active =false;
  //     cc.find('Canvas/弹窗').removeAllChildren();
  // },
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
  } // update (dt) {},

});

cc._RF.pop();