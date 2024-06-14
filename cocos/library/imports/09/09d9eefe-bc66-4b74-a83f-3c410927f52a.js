"use strict";
cc._RF.push(module, '09d9e7+vGZLdKg/PEEJJ/Uq', 'map_score');
// Script/场景/map_score.js

"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

require("../common");

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
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
              //全局定义容器节点
              cc.sys.BoxPrefab = cc.find('Canvas/战斗/content');

              _this2.spawnTools(); // this.scroll_view.node.on("scroll-ended", this.on_scroll_ended.bind(this), this);


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
      // _this.addMapPic(data) //生成地图
      if (!data.data) {
        //刷新地图
        // httpRequest.playGame( "sence_ditu")
        _this.reloadWord(); //刷新世界地图

      } else {
        //生成世界
        _this.addWordMap(data.data); //生成生物

      }
    });
  },
  // //生成地图
  // addMapPic(data){
  //     var _this = this;
  //     if(data.data['map_pic']){
  //       var  map_pic =data.data['map_pic'];
  //     }else{
  //       var  map_pic =data.data['picture'];
  //     }
  //     var remoteUrl = httpRequest.httpUrl(map_pic);
  //       cc.loader.load({ url: remoteUrl }, function (err, texture) {  
  //         if(texture!=null){
  //           _this.home.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
  //         }
  //     });
  // },
  //生成生物
  addWordMap: function addWordMap(data) {
    cc.log(data);
    cc.find('Canvas/当前世界').getComponent(cc.Label).string = data.name + '(' + data.time + '年)';
    cc.find('Canvas/流速').getComponent(cc.Label).string = '流速: ' + data.time + '年/S';
    cc.find('Canvas/类型').getComponent(cc.Label).string = '类型: ' + data.type_name;
    var info = data.user_in_word_map; //技能图标挂载

    var BoxPrefab = cc.sys.BoxPrefab;
    BoxPrefab.getComponent('mapTools').biology_detail_list(BoxPrefab, info);
  },
  addTouchEvent: function addTouchEvent(node_1) {
    node_1.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
    node_1.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
    node_1.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
  },
  reloadWord: function reloadWord() {
    var _this = this;

    httpRequest.httpPost('/app/app-apiword/map-word', {}, function (data) {
      //移除节点
      _this.removeBoxprefab(); //写入地图数据


      _this.addWordMap(data.data);
    });
  },
  back_map: function back_map() {
    //移除节点
    var _this = this;

    _this.removeBoxprefab();

    httpRequest.playGame("sence_zhutian");
  },
  //移除容器
  removeBoxprefab: function removeBoxprefab() {
    cc.sys.BoxPrefab.removeAllChildren();
    cc.sys.BoxPrefab.destroyAllChildren();
  }
});

cc._RF.pop();