"use strict";
cc._RF.push(module, 'c68f7bSUadFDKbT571Wtpce', 'bag_api');
// Script/commonApi/bag_api.js

"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// 背包的api请求接口
var httpBagApi = cc.Class({
  "extends": cc.Component,
  //没有处理逻辑，可以共用--关闭窗口
  //实例化用户信息
  http_music: function http_music() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (http_globalAsset.model_onload_loading) {
                _context.next = 3;
                break;
              }

              _context.next = 3;
              return httpRequestModel.model_onload_loading();

            case 3:
              if (http_globalAsset.AudioPlayer) {
                _context.next = 6;
                break;
              }

              _context.next = 6;
              return httpRequestBagApi.http_home_music();

            case 6:
              if (http_globalAsset.alert_tips) {
                _context.next = 9;
                break;
              }

              _context.next = 9;
              return httpRequestAlert.alert_tips();

            case 9:
              // 没有资源，需要重新加载资源
              if (http_globalAsset.http_base_asset_num == 0) {
                httpRequest.playGame("", 0, 1); //加载资源的进度条
              }

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  //加载音乐
  http_home_music: function http_home_music() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", new Promise(function (resolve) {
                //获取全局播放器
                if (cc.find("Audio")) {
                  http_globalAsset.AudioPlayer = cc.find("Audio").getComponent("home_music"); //停止再开启背景音乐
                  // this.AudioPlayer.stopBgMusic();

                  http_globalAsset.AudioPlayer.playBgMusic();
                }

                resolve(); // httpRequest.httpPost('/app/app-api/get-user',{},function (data) {
                //     //此处可能要判断登录失效 跳转、后期处理
                //     http_globalData.user_info = data.data
                //     resolve();
                // })
              }));

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  //加载材质
  http_material_yaohuang: function http_material_yaohuang() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", new Promise(function (resolve) {
                var label = '/materials/builtin_摇晃';
                cc.loader.loadRes(label, cc.Material, function (err, res) {
                  httpRequestBagApi.material_yaohuang = cc.Material.getInstantiatedMaterial(res); // // 计算每帧的纹理偏移量
                  // this.uvOffset = 1 / this.totalFrames;
                  // // 开始播放动画
                  // this.schedule(this.updateAnimation, 1 / this.framesPerSecond);

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
  materialTime: function materialTime(materialPrefab) {
    if (materialPrefab) {
      // 定义一个回调函数
      // httpRequestBagApi.
      // 使用 this.schedule 方法来调用这个回调函数，它每帧都会被执行
      // this.schedule(this.update,0);
      // 定义一个回调函数
      var time = 0;

      this.updateEveryFrame = function (dt) {
        // dt 是时间间隔，每帧 dt 的值大概是 0.016 秒（即 1/60 秒）
        // 这里可以放置每帧都需要执行的逻辑
        time += dt;
        materialPrefab.setProperty("u_time", time);
      }; // 使用 this.schedule 方法来调用这个回调函数，它每帧都会被执行


      this.schedule(this.updateEveryFrame, 0);
    }
  },
  //实例化角色信息
  http_base_jiaose: function http_base_jiaose() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", new Promise(function (resolve) {
                httpRequest.httpPostLogin('/app/api-server/jiaose', {}, function (data) {
                  //此处可能要判断登录失效 跳转、后期处理
                  http_globalData.user_jiaose = data.data.jiaose;
                  http_globalData.user_nicheng = data.data.nicheng;
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
  //实例化用户信息
  http_user_info: function http_user_info() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", new Promise(function (resolve) {
                httpRequest.httpPost('/app/app-api/get-user', {}, function (data) {
                  //此处可能要判断登录失效 跳转、后期处理
                  http_globalData.user_info = data.data;
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

        http_globalData.biology_id = 0; //默认选择的生物id

        http_globalData.zhenfa_id = null; //默认选择的阵法id

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
  },
  //获取生物
  http_user_add_biology: function http_user_add_biology(biology_type) {
    //修改请求
    return new Promise(function (resolve) {
      httpRequest.httpPost('/app/app-apinew/user-biology', {
        biology_type: biology_type
      }, function (data) {
        resolve(data);
      });
    });
  }
});
window.httpRequestBagApi = new httpBagApi();

cc._RF.pop();