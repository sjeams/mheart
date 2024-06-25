"use strict";
cc._RF.push(module, 'c68f7bSUadFDKbT571Wtpce', 'bag_api');
// Script/commonApi/bag_api.js

"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// 背包的api请求接口
var httpBagApi = cc.Class({
  "extends": cc.Component,
  //实例化用户信息
  http_music: function http_music() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", new Promise(function (resolve) {
                //获取全局播放器
                _this.AudioPlayer = cc.find("Audio").getComponent("AudioManager"); //停止再开启背景音乐
                // this.AudioPlayer.stopBgMusic();

                _this.AudioPlayer.playBgMusic();

                resolve(); // httpRequest.httpPost('/app/app-api/get-user',{},function (data) {
                //     //此处可能要判断登录失效 跳转、后期处理
                //     http_globalData.user_info = data.data
                //     resolve();
                // })
              }));

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  //加载材质
  http_material_yaohuang: function http_material_yaohuang() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", new Promise(function (resolve) {
                var label = '/materials/builtin_摇晃';
                cc.loader.loadRes(label, cc.Material, function (err, res) {
                  httpRequestBagApi.material_yaohuang = cc.Material.getInstantiatedMaterial(res);
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
  //实例化角色信息
  http_base_jiaose: function http_base_jiaose() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", new Promise(function (resolve) {
                httpRequest.httpPostLogin('/app/api-server/jiaose', {}, function (data) {
                  //此处可能要判断登录失效 跳转、后期处理
                  http_globalData.user_jiaose = data.data.jiaose;
                  http_globalData.user_nicheng = data.data.nicheng;
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
  //实例化用户信息
  http_user_info: function http_user_info() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", new Promise(function (resolve) {
                httpRequest.httpPost('/app/app-api/get-user', {}, function (data) {
                  //此处可能要判断登录失效 跳转、后期处理
                  http_globalData.user_info = data.data;
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
  //实例化背包信息
  http_bag_info: function http_bag_info() {
    //获取生物列表
    return new Promise(function (resolve) {
      httpRequest.httpPost('/app/app-apinew/biology-list', {}, function (data) {
        //定义常量
        http_globalData.biology = data.data.biology; //当前弹出的预制节点--物品详情--装备-卸载

        http_globalData.TipBoxPrefab_biology_detail = null; //开启战斗

        http_globalData.bag = data.data.bag;
        http_globalData.gooduse = data.data.gooduse; //物品类型

        http_globalData.zhenfa = data.data.zhenfa.data;
        http_globalData.zhenfa_info = data.data.zhenfa.info; // 临时字段
        // http_globalData.biology_id = 0;
        // http_globalData.zhenfa_id=0;

        resolve();
      });
    });
  },
  //http请求--快速请求接口
  http_update_goods: function http_update_goods(biology_id, goods_key, goodsid, is_bag) {
    //修改请求
    return new Promise(function (resolve) {
      httpRequest.httpPost('/app/app-api/biology-goods-update', {
        biology_id: biology_id,
        goods_key: goods_key,
        goodsid: goodsid,
        is_bag: is_bag
      }, function (data) {
        resolve(data);
      });
    });
  },
  //http请求--快速请求接口
  http_update_zhenfa: function http_update_zhenfa() {
    // var zhenfa =  http_globalData.zhenfa
    return new Promise(function (resolve) {
      var update_data = [];

      for (var prop in http_globalData.zhenfa) {
        var biology_id = http_globalData.zhenfa[prop];

        if (http_globalData.biology[biology_id]) {
          update_data[prop] = http_globalData.biology[biology_id].userBiologyid; //获取序号中的生物id
        } else {
          update_data[prop] = biology_id;
        }
      } //修改请求


      httpRequest.httpPost('/app/app-api/biology-zhenfa-update', {
        zhenfa: update_data
      }, function (data) {
        resolve(data);
        cc.find('Canvas/弹窗').removeAllChildren();
      });
    });
  },
  //修改倍数
  http_user_beishu_update: function http_user_beishu_update() {
    //修改请求
    var beishu = http_globalData.user_info.beishu;
    return new Promise(function (resolve) {
      httpRequest.httpPost('/app/app-api/user-beishu-update', {
        beishu: beishu
      }, function (data) {
        resolve(data);
      });
    });
  }
});
window.httpRequestBagApi = new httpBagApi();

cc._RF.pop();