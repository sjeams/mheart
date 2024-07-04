"use strict";
cc._RF.push(module, 'd679eQZGB9G97UmyMKOzk7Y', 'bag_详情按钮Tools');
// Script/背包/bag_详情按钮Tools.js

"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// require("../common"); 
cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  //定义按钮事件类型 is_bag  0卸下 1装备
  biology_init: function biology_init(TipBoxPrefab_model, TipBoxPrefab_icon, info, button_name, is_bag) {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var biology_id, goods_key;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //加载背包 和  背包列表
              biology_id = http_globalData.biology[http_globalData.biology_id].id;
              _context.t0 = button_name;
              _context.next = _context.t0 === "装备1" ? 4 : _context.t0 === "装备2" ? 9 : _context.t0 === "元神" ? 14 : 19;
              break;

            case 4:
              goods_key = 'gooduse1';
              _context.next = 7;
              return httpRequestBagApi.http_update_goods(biology_id, goods_key, info.id, is_bag);

            case 7:
              //1装备  0卸下
              _this.goods_update(TipBoxPrefab_model, TipBoxPrefab_icon, button_name, info, goods_key, is_bag);

              return _context.abrupt("break", 19);

            case 9:
              goods_key = 'gooduse2';
              _context.next = 12;
              return httpRequestBagApi.http_update_goods(biology_id, goods_key, info.id, is_bag);

            case 12:
              _this.goods_update(TipBoxPrefab_model, TipBoxPrefab_icon, button_name, info, goods_key, is_bag);

              return _context.abrupt("break", 19);

            case 14:
              goods_key = 'yuanShen';
              _context.next = 17;
              return httpRequestBagApi.http_update_goods(biology_id, goods_key, info.id, is_bag);

            case 17:
              _this.goods_update(TipBoxPrefab_model, TipBoxPrefab_icon, button_name, info, goods_key, is_bag);

              return _context.abrupt("break", 19);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  goods_update: function goods_update(TipBoxPrefab_model, TipBoxPrefab_icon, button_name, info, goods_key, is_bag) {
    if (is_bag == 1) {
      this.zhuangbe_up(TipBoxPrefab_model, TipBoxPrefab_icon, button_name, info, goods_key);
    } else {
      this.zhuangbei_down(TipBoxPrefab_model, TipBoxPrefab_icon, button_name, info, goods_key);
    }
  },
  //图标回填
  biology_icon: function biology_icon(TipBoxPrefab_biology, goodsid) {
    if (goodsid) {
      var goods_image = http_globalData.bag[goodsid].point;
      TipBoxPrefab_biology.getComponent(cc.Sprite).spriteFrame = http_globalAsset.http_base_asset_zhuangbei[goods_image];
    } else {
      TipBoxPrefab_biology.getComponent(cc.Sprite).spriteFrame = '';
    }
  },
  //移除预制节点--选中的节点
  TipBoxPrefab_biology_detail_shown: function TipBoxPrefab_biology_detail_shown() {
    if (http_globalData.TipBoxPrefab_biology_detail) {
      http_globalData.TipBoxPrefab_biology_detail.active = true;
    }
  },
  //隐藏
  TipBoxPrefab_biology_detail_hidden: function TipBoxPrefab_biology_detail_hidden() {
    http_globalData.TipBoxPrefab_biology_detail = null;
  },
  //选中节点
  TipBoxPrefab_biology_detail_make: function TipBoxPrefab_biology_detail_make(TipBoxPrefab_icon) {
    http_globalData.TipBoxPrefab_biology_detail = TipBoxPrefab_icon;
  },
  zhuangbei_down: function zhuangbei_down(TipBoxPrefab_model, TipBoxPrefab_icon, button_name, info, goods_key) {
    //移除预制节点
    this.TipBoxPrefab_biology_detail_hidden(); // 移除装备栏--返回背包

    http_globalData.bag[info["int"]].is_bag = 0;
    TipBoxPrefab_icon.active = true; //背包显示

    http_globalData.biology[http_globalData.biology_id][goods_key] = null; //装备栏不显示
    //icon显示     

    var TipBoxPrefab_biology = cc.find("生物详情/biology_end/" + button_name, TipBoxPrefab_model);
    this.biology_icon(TipBoxPrefab_biology, null);
    http_globalData.goodsid = ''; //如果使用就重新绑定
  },
  zhuangbe_up: function zhuangbe_up(TipBoxPrefab_model, TipBoxPrefab_icon, button_name, info, goods_key) {
    // 添加到装备栏--移出背包
    //如果原来装备栏有--装备，难么要返回背包
    if (http_globalData.biology[http_globalData.biology_id][goods_key]) {
      //返回背包
      http_globalData.bag[http_globalData.biology[http_globalData.biology_id][goods_key]].is_bag = 0;
      this.TipBoxPrefab_biology_detail_shown();
    } else {
      this.TipBoxPrefab_biology_detail_make(TipBoxPrefab_icon);
    } //隐藏当前物品
    // cc.log(goodsid)


    http_globalData.bag[info["int"]].is_bag = 1;
    TipBoxPrefab_icon.active = false;
    http_globalData.biology[http_globalData.biology_id][goods_key] = info["int"]; //info icon显示

    var TipBoxPrefab_biology = cc.find("生物详情/biology_end/" + button_name, TipBoxPrefab_model);
    this.biology_icon(TipBoxPrefab_biology, info["int"]);
    http_globalData.goodsid = info.id; //如果使用就重新绑定
  }
});

cc._RF.pop();