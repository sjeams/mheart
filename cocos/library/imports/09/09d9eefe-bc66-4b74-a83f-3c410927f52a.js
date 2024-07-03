"use strict";
cc._RF.push(module, '09d9e7+vGZLdKg/PEEJJ/Uq', 'home_map');
// Script/场景/home_map.js

"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// require("../common"); 
cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //全局定义容器节点
              http_globalData.BoxPrefab_content = cc.find('Canvas/大厅/content');
              _context.next = 3;
              return httpRequestModel.model_back_button('sence_zhutian');

            case 3:
              _context.next = 5;
              return httpRequestBagApi.http_music();

            case 5:
              _context.next = 7;
              return httpRequestBagApi.http_user_word_index();

            case 7:
              _context.next = 9;
              return httpRequestModel.model_fighting_map();

            case 9:
              _context.next = 11;
              return _this.spawnTools();

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  spawnTools: function spawnTools() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!http_globalData.http_user_word_index) {
                _context2.next = 5;
                break;
              }

              _context2.next = 3;
              return _this2.addWordMap(http_globalData.http_user_word_index);

            case 3:
              _context2.next = 7;
              break;

            case 5:
              _context2.next = 7;
              return _this2.reloadWord();

            case 7:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  //生成生物
  addWordMap: function addWordMap(data) {
    var _this3 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var info, BoxPrefab;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              // cc.log(data)
              cc.find('Canvas/当前世界').getComponent(cc.Label).string = data.name + '(' + data.time + '年)';
              cc.find('Canvas/流速').getComponent(cc.Label).string = '流速: ' + data.time + '年/S';
              cc.find('Canvas/类型').getComponent(cc.Label).string = '类型: ' + data.type_name;
              info = data.user_in_word_map; //技能图标挂载

              BoxPrefab = http_globalData.BoxPrefab_content;
              _context3.next = 7;
              return _this3.biology_detail_list(BoxPrefab, info);

            case 7:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  addTouchEvent: function addTouchEvent(node_1) {
    node_1.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
    node_1.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
    node_1.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
  },
  reloadWord: function reloadWord() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var data;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return httpRequestBagApi.http_user_word_new();

            case 2:
              data = _context4.sent;
              _context4.next = 5;
              return _this4.addWordMap(data.data);

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  //技能图片渲染
  biology_detail_list: function biology_detail_list(TipBoxPrefab_model, info_list) {
    var _this5 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", new Promise(function (resolve) {
                var TOOLS = [];
                var TOOLS = info_list; //开始实例化预制资源

                for (var prop in info_list) {
                  //声明节点对象
                  var TipBoxPrefab_icon = cc.instantiate(http_globalAsset.model_fighting_map);
                  var map = TOOLS[prop];
                  var info = map.biology_list[0];
                  var total = map.biology_list.length; //战斗胜利移除

                  if (map.map_status == 1) {
                    //设置距离
                    TipBoxPrefab_icon.x = httpRequest.number_map_rand(map.x, 150); //设置随x机偏移量0-49

                    TipBoxPrefab_icon.y = httpRequest.number_map_rand(map.y, 25); //设置随机y偏移量0-49
                    //放在资源下面
                    // let image = info.picture;

                    TipBoxPrefab_icon.getChildByName('生物').getComponent(cc.Sprite).spriteFrame = http_globalAsset.http_base_asset_biology[info.picture];
                    var color = ['#FFFFFF', 'green', '#BDFF00', '#FFD100', '#FF0000', '#ffe000'];
                    var type_color = color[info['yiXing']]; // console.log(info)

                    var star = '';

                    for (var i = 0; i <= info['yiXing']; i++) {
                      star += '⭐';
                    }

                    TipBoxPrefab_icon.getChildByName('名称').getComponent(cc.Label).string = info['name'] + '(' + total + ')';
                    TipBoxPrefab_icon.getChildByName('名称').color = new cc.color(type_color);
                    TipBoxPrefab_icon.getChildByName('等级').getComponent(cc.Label).string = 'Lv.' + info['grade'] + '(' + info['state_name']['name'] + ')';
                    TipBoxPrefab_icon.getChildByName('等级').color = new cc.color(type_color);
                    TipBoxPrefab_icon.getChildByName('星级').getComponent(cc.Label).string = star; //创建一个新button 并将其挂载到创建的精灵下

                    _this5.onConfirBtn(TipBoxPrefab_icon, map.map_int); //写入icon


                    TipBoxPrefab_model.addChild(TipBoxPrefab_icon);
                  }
                }

                resolve();
              }));

            case 1:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  },
  //按钮点击回调
  onConfirBtn: function onConfirBtn(TipBoxPrefab_icon, map_int) {
    TipBoxPrefab_icon.on('click', function () {
      //session设置战斗请求id
      cc.sys.localStorage.setItem('figthing_map_int', JSON.stringify(map_int));
      cc.log(333);
      httpRequest.playGame("sence_zhandou", 1, 1);
    });
  }
});

cc._RF.pop();