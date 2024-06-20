"use strict";
cc._RF.push(module, '2d439N7n31MKaIKyBD7OFib', 'zhaohuan_home');
// Script/召唤/zhaohuan_home.js

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
              return httpRequestAlert.getTips();

            case 2:
              //加载弹窗模板
              // cc.log(http_globalData.user_info)
              //大厅需要加载的全局变量
              httpRequestBagApi.chuanzao_xibao = []; //细胞

              _context.next = 5;
              return httpRequestBagApi.http_user_info();

            case 5:
              _context.next = 7;
              return _this2.menu_chuangzao();

            case 7:
              _context.next = 9;
              return _this2.menu_ronghe();

            case 9:
              _context.next = 11;
              return _this2.menu_xunlian();

            case 11:
              _context.next = 13;
              return _this2.menu_huishou();

            case 13:
              //加载召唤菜单
              http_globalData.check_Prefab = cc.find('Canvas/大厅/创造');

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  start: function start() {},
  //加载菜单
  menu_chuangzao: function menu_chuangzao() {
    var _this3 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var _this;

      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this = _this3;
              cc.log(http_globalData.user_info);
              return _context2.abrupt("return", new Promise(function (resolve) {
                //技能图标挂载
                var BoxPrefab = cc.find('Canvas/大厅/创造');
                cc.loader.loadRes('/model召唤/A创造', function (errorMessage, loadedResource) {
                  //开始实例化预制资源
                  var TipBoxPrefab = cc.instantiate(loadedResource);
                  var TipBoxPrefab_model_name1 = "生物细胞/金/金s";
                  var TipBoxPrefab_model_name2 = "生物细胞/木/木s";
                  var TipBoxPrefab_model_name3 = "生物细胞/水/水s";
                  var TipBoxPrefab_model_name4 = "生物细胞/火/火s";
                  var TipBoxPrefab_model_name5 = "生物细胞/土/土s";
                  var TipBoxPrefab_model_name6 = "生物细胞/无/无s";

                  _this.menu_chuangzao_xibao_update(TipBoxPrefab, TipBoxPrefab_model_name1, http_globalData.user_info.biology1);

                  _this.menu_chuangzao_xibao_update(TipBoxPrefab, TipBoxPrefab_model_name2, http_globalData.user_info.biology2);

                  _this.menu_chuangzao_xibao_update(TipBoxPrefab, TipBoxPrefab_model_name3, http_globalData.user_info.biology3);

                  _this.menu_chuangzao_xibao_update(TipBoxPrefab, TipBoxPrefab_model_name4, http_globalData.user_info.biology4);

                  _this.menu_chuangzao_xibao_update(TipBoxPrefab, TipBoxPrefab_model_name5, http_globalData.user_info.biology5);

                  _this.menu_chuangzao_xibao_update(TipBoxPrefab, TipBoxPrefab_model_name6, http_globalData.user_info.biology6);

                  _this.menu_chuangzao_xibao(TipBoxPrefab, "生物细胞/金", TipBoxPrefab_model_name1, 1);

                  _this.menu_chuangzao_xibao(TipBoxPrefab, "生物细胞/木", TipBoxPrefab_model_name2, 2);

                  _this.menu_chuangzao_xibao(TipBoxPrefab, "生物细胞/水", TipBoxPrefab_model_name3, 3);

                  _this.menu_chuangzao_xibao(TipBoxPrefab, "生物细胞/火", TipBoxPrefab_model_name4, 4);

                  _this.menu_chuangzao_xibao(TipBoxPrefab, "生物细胞/土", TipBoxPrefab_model_name5, 5);

                  _this.menu_chuangzao_xibao(TipBoxPrefab, "生物细胞/无", TipBoxPrefab_model_name6, 6);

                  BoxPrefab.addChild(TipBoxPrefab, 1); // 预制体、zindex层级

                  resolve();
                });
              }));

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  menu_chuangzao_xibao_update: function menu_chuangzao_xibao_update(TipBoxPrefab, TipBoxPrefab_model_name, num) {
    cc.find(TipBoxPrefab_model_name, TipBoxPrefab).getComponent(cc.Label).string = num;
  },
  //绑定点击事件--关闭遮罩
  menu_chuangzao_xibao: function menu_chuangzao_xibao(TipBoxPrefab, TipBoxPrefab_model_ename, TipBoxPrefab_model_name, type) {
    var _this = this; // var TipBoxPrefab_model = cc.find(TipBoxPrefab_model_ename,TipBoxPrefab);
    //图片点击


    cc.find(TipBoxPrefab_model_ename, TipBoxPrefab).on('click', function () {
      _this.menu_chuangzao_xibao_button(TipBoxPrefab, TipBoxPrefab_model_ename, TipBoxPrefab_model_name, type);
    }, this); //图片上面的数字点击

    cc.find(TipBoxPrefab_model_name, TipBoxPrefab).on('click', function () {
      _this.menu_chuangzao_xibao_button(TipBoxPrefab, TipBoxPrefab_model_ename, TipBoxPrefab_model_name, type);
    }, this);
  },
  menu_chuangzao_xibao_button: function menu_chuangzao_xibao_button(TipBoxPrefab, TipBoxPrefab_model_ename, TipBoxPrefab_model_name, type) {
    var _this = this;

    if (httpRequestBagApi.chuanzao_xibao.length >= 3) {
      httpRequestAlert.goTips("材料已满，请创造"); //提示材料已经满
    } else {
      var string_num = cc.find(TipBoxPrefab_model_name, TipBoxPrefab).getComponent(cc.Label).string;
      cc.log(httpRequestBagApi.chuanzao_xibao);

      if (string_num > 0) {
        httpRequestBagApi.chuanzao_xibao.push(type);

        _this.menu_chuangzao_xibao_update(TipBoxPrefab, TipBoxPrefab_model_name, parseInt(string_num) - 1); //载入图片


        var texture = cc.find(TipBoxPrefab_model_ename, TipBoxPrefab).getComponent(cc.Sprite).spriteFrame;
        cc.find("生物创造/细胞" + httpRequestBagApi.chuanzao_xibao.length, TipBoxPrefab).getComponent(cc.Sprite).spriteFrame = texture;
      }
    }
  },
  //加载菜单
  menu_ronghe: function menu_ronghe() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", new Promise(function (resolve) {
                //技能图标挂载
                var BoxPrefab = cc.find('Canvas/大厅/融合');
                cc.loader.loadRes('/model召唤/A融合', function (errorMessage, loadedResource) {
                  //开始实例化预制资源
                  var TipBoxPrefab = cc.instantiate(loadedResource);
                  BoxPrefab.addChild(TipBoxPrefab, 1); // 预制体、zindex层级

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
  //加载菜单
  menu_xunlian: function menu_xunlian() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", new Promise(function (resolve) {
                //技能图标挂载
                var BoxPrefab = cc.find('Canvas/大厅/训练');
                cc.loader.loadRes('/model召唤/A训练', function (errorMessage, loadedResource) {
                  //开始实例化预制资源
                  var TipBoxPrefab = cc.instantiate(loadedResource);
                  BoxPrefab.addChild(TipBoxPrefab, 1); // 预制体、zindex层级

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
  //加载菜单
  menu_huishou: function menu_huishou() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", new Promise(function (resolve) {
                //技能图标挂载
                var BoxPrefab = cc.find('Canvas/大厅/回收');
                cc.loader.loadRes('/model召唤/A回收', function (errorMessage, loadedResource) {
                  //开始实例化预制资源
                  var TipBoxPrefab = cc.instantiate(loadedResource);
                  BoxPrefab.addChild(TipBoxPrefab, 1); // 预制体、zindex层级

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
  button_zhaohuan: function button_zhaohuan() {
    http_globalData.check_Prefab.active = false;
    http_globalData.check_Prefab = cc.find('Canvas/大厅/创造');
    http_globalData.check_Prefab.active = true;
  },
  button_ronghe: function button_ronghe() {
    http_globalData.check_Prefab.active = false;
    http_globalData.check_Prefab = cc.find('Canvas/大厅/融合');
    http_globalData.check_Prefab.active = true;
  },
  button_xunlian: function button_xunlian() {
    http_globalData.check_Prefab.active = false;
    http_globalData.check_Prefab = cc.find('Canvas/大厅/训练');
    http_globalData.check_Prefab.active = true;
  },
  button_huishou: function button_huishou() {
    http_globalData.check_Prefab.active = false;
    http_globalData.check_Prefab = cc.find('Canvas/大厅/回收');
    http_globalData.check_Prefab.active = true;
  },
  // //打开背包
  // openBag() {
  //     if(http_globalData.biology&&http_globalData.zhenfa&&http_globalData.bag){
  //         //技能图标挂载
  //         var BoxPrefab = cc.find('Canvas/弹窗')
  //         // 销毁所有弹窗
  //         BoxPrefab.removeAllChildren();
  //         cc.loader.loadRes('/model背包/A生物背包', function(errorMessage,loadedResource){
  //             //检查资源加载
  //             if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
  //             if( !(loadedResource instanceof cc.Prefab ) ) { cc.log( '你载入的不是预制资源!' ); return; }
  //             //开始实例化预制资源
  //             var TipBoxPrefab = cc.instantiate(loadedResource);
  //             TipBoxPrefab.getComponent('biology_bagTools').biology_detail_alert(BoxPrefab,TipBoxPrefab)
  //         })
  //         // BoxPrefab.getComponent('biology_bagTools').biology_detail_alert(BoxPrefab,info)
  //     }else{
  //     //如果没有生物需要弹窗另一个提示
  //     }
  // },
  // //打开阵法
  // openZhenfa() {
  //     if(http_globalData.biology&&http_globalData.zhenfa&&http_globalData.bag){
  //         //技能图标挂载
  //         var BoxPrefab = cc.find('Canvas/弹窗')
  //         // 销毁所有弹窗
  //         BoxPrefab.removeAllChildren();
  //         cc.loader.loadRes('/model布阵/A生物布阵', function(errorMessage,loadedResource){
  //             //检查资源加载
  //             if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
  //             if( !(loadedResource instanceof cc.Prefab ) ) { cc.log( '你载入的不是预制资源!' ); return; }
  //             //开始实例化预制资源
  //             var TipBoxPrefab = cc.instantiate(loadedResource);
  //             TipBoxPrefab.getComponent('bag_zhenfaTools').biology_detail_alert(BoxPrefab,TipBoxPrefab)
  //         })
  //         // BoxPrefab.getComponent('biology_bagTools').biology_detail_alert(BoxPrefab,info)
  //     }else{
  //     //如果没有生物需要弹窗另一个提示
  //     }
  // },
  // //没有处理逻辑，可以共用--关闭窗口
  // openBag_hidden(){
  //     // cc.find('Canvas/弹窗').active =false;
  //     cc.find('Canvas/弹窗').removeAllChildren();
  // },
  // //阵法 关闭 提交结果，需要单独处理了
  // async openzhenfa_hidden(){
  //     // cc.log(http_globalData.zhenfa)   
  //     await httpRequestBagApi.http_update_zhenfa()
  //     // cc.find('Canvas/弹窗').removeAllChildren();
  // },
  // update (dt) {},
  back_home: function back_home() {
    httpRequest.playGame('sence_dating');
  }
});

cc._RF.pop();