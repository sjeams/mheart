"use strict";
cc._RF.push(module, '2d439N7n31MKaIKyBD7OFib', 'zhaohuan_home');
// Script/召唤/zhaohuan_home.js

"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

require("../common");

cc.Class({
  "extends": cc.Component,
  properties: {
    // material: cc.Material = null,
    time: number = 0
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // cc.loader.loadRes(label, cc.Material, function(err, res) {
              //     httpRequestBagApi.builtin_yaohuang = cc.Material.getInstantiatedMaterial(res)
              //     httpRequestBagApi.builtin_yaohuang.setProperty("u_time", 131);
              // })
              // httpRequestBagApi.builtin_yaohuang.setProperty("u_time", 1.0)
              // var iBoxPrefab = cc.find('Canvas/菜单/创造b') 
              // let label = "";
              // label = "2d-sprite";//原色
              // // label = "2d-gray-sprite";//灰色
              // label ="/audio_music/builtin_描边"
              // // iBoxPrefab.getComponent(cc.Sprite).setMaterial(0, cc.Material.getBuiltinMaterial(label,iBoxPrefab));
              // cc.loader.loadRes(label, cc.Material, function(err, res) {
              //     var material = cc.Material.getInstantiatedMaterial(res)
              //     // let localPos = this.outlineSprite.node.parent.convertToNodeSpaceAR(e.getLocation());
              //     // //判断鼠标移入图片内，则设置颜色为红色
              //     // if (this.outlineSprite.node.getBoundingBox().contains(localPos)) {
              //     //     material.setProperty("imgColor", new cc.Vec4(255, 0, 0, 255));
              //     //     material.setProperty("radius", 0.002);
              //     //     //判断鼠标移出图片，则设置颜色为0，还原成本来颜色
              //     // } else {
              //         material.setProperty("imgColor", new cc.Vec4(0, 0, 0, 255));
              //     // }
              //     iBoxPrefab.getComponent(cc.Sprite).setMaterial(0, material)
              // })
              //大厅需要加载的全局变量
              http_globalData.chuanzao_xibao = []; //细胞

              _context.next = 3;
              return httpRequestAlert.alert_getTips();

            case 3:
              _context.next = 5;
              return httpRequestAlert.alert_biologyDetail();

            case 5:
              _context.next = 7;
              return httpRequestAlert.alert_shangdian();

            case 7:
              _context.next = 9;
              return httpRequestBagApi.http_user_info();

            case 9:
              _context.next = 11;
              return _this2.menu_chuangzao();

            case 11:
              _context.next = 13;
              return _this2.menu_ronghe();

            case 13:
              _context.next = 15;
              return _this2.menu_xunlian();

            case 15:
              _context.next = 17;
              return _this2.menu_huishou();

            case 17:
              //加载召唤菜单
              http_globalData.check_Prefab = cc.find('Canvas/大厅/创造');
              httpRequestBagApi.materialTime(http_globalData.materialPrefab); //预制体晃动
              // httpRequestBagApi.materialTime(cc.find('Canvas/大厅').getComponent(cc.Sprite).getMaterial(0))  //预制体晃动

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  // updateAnimation(dt) {
  // //     // dt 是时间间隔，每帧 dt 的值大概是 0.016 秒（即 1/60 秒）
  // //     // 这里可以放置每帧都需要执行的逻辑
  //     // if(http_globalData.materialPrefab){
  //     //     this.time += dt;
  //     //     http_globalData.materialPrefab.setProperty("u_time",this.time*1)  //这里可以设置摇晃速度
  //     // }
  // // },
  // // onDestroy() {
  // //     // 如果你想在组件被销毁时取消定时器，可以使用 this.unschedule 方法
  // //     httpRequestBagApi.updateEveryFrame=null;
  // //     this.unschedule(httpRequestBagApi.updateEveryFrame);
  // },
  //加载菜单-创造
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

                  _this.onclick_chuangzao(TipBoxPrefab);

                  http_globalData.materialPrefab = cc.find('云游商人/云游商人b', TipBoxPrefab).getComponent(cc.Sprite).getMaterial(0);
                  httpRequestAlert.actionBlink_show(TipBoxPrefab.getChildByName('左旋转1'), 1, 10, -10, 10, 1.2);
                  httpRequestAlert.actionBlink_show(TipBoxPrefab.getChildByName('左旋转1'), 1, 10, 20, -20, 1.2);
                  httpRequestAlert.actionBlink_show(TipBoxPrefab.getChildByName('左旋转2'), 1, 5, 5, -5, 1.2);
                  httpRequestAlert.actionBlink_show(TipBoxPrefab.getChildByName('右旋转'), 1, 2, 20, 20, 1.2);
                  httpRequestAlert.actionBlink_show(TipBoxPrefab.getChildByName('生物创造'), 1, 20, 360, 360, 1.1);
                  httpRequestAlert.actionBlink_show(TipBoxPrefab.getChildByName('生物细胞'), 1, 10, 10, -10, 1.05);
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
    var _this = this; //图片点击


    cc.find(TipBoxPrefab_model_ename, TipBoxPrefab).on('click', function () {
      _this.menu_chuangzao_xibao_button(TipBoxPrefab, TipBoxPrefab_model_ename, TipBoxPrefab_model_name, type);
    }, this); //图片上面的数字点击

    cc.find(TipBoxPrefab_model_name, TipBoxPrefab).on('click', function () {
      _this.menu_chuangzao_xibao_button(TipBoxPrefab, TipBoxPrefab_model_ename, TipBoxPrefab_model_name, type);
    }, this);
  },
  menu_chuangzao_xibao_button: function menu_chuangzao_xibao_button(TipBoxPrefab, TipBoxPrefab_model_ename, TipBoxPrefab_model_name, type) {
    var _this = this;

    if (http_globalData.chuanzao_xibao.length >= 3) {
      httpRequestAlert.alert_goTips("材料已满，请创造"); //提示材料已经满
    } else {
      var string_num = cc.find(TipBoxPrefab_model_name, TipBoxPrefab).getComponent(cc.Label).string; // cc.log(http_globalData.chuanzao_xibao)

      if (string_num > 0) {
        var now_num = parseInt(string_num) - 1;
        var item = {
          type: type,
          now_num: now_num,
          TipBoxPrefab_model_ename: TipBoxPrefab_model_ename,
          TipBoxPrefab_model_name: TipBoxPrefab_model_name
        };
        http_globalData.chuanzao_xibao.push(item);

        _this.menu_chuangzao_xibao_update(TipBoxPrefab, TipBoxPrefab_model_name, now_num); //载入图片


        var texture = cc.find(TipBoxPrefab_model_ename, TipBoxPrefab).getComponent(cc.Sprite).spriteFrame;
        cc.find("生物创造/细胞" + http_globalData.chuanzao_xibao.length, TipBoxPrefab).getComponent(cc.Sprite).spriteFrame = texture;
      }
    }
  },
  onclick_chuangzao: function onclick_chuangzao(TipBoxPrefab) {
    var _this = this;

    cc.find("/重置", TipBoxPrefab).on('click', function () {
      _this.button_zhaohuan_clear(TipBoxPrefab);
    }, this);
    cc.find("创造", TipBoxPrefab).on('click', function () {
      _this.button_zhaohuan_creater(TipBoxPrefab);
    }, this);
    cc.find("云游商人", TipBoxPrefab).on('click', function () {
      _this.button_shangdian(TipBoxPrefab);
    }, this);
  },
  //重置
  button_zhaohuan_clear: function button_zhaohuan_clear(TipBoxPrefab) {
    var _this = this; // cc.find("生物创造/细胞"+http_globalData.chuanzao_xibao.length,TipBoxPrefab).getComponent(cc.Sprite).spriteFrame =texture


    var texture = cc.find("创造", TipBoxPrefab).getComponent(cc.Sprite).spriteFrame;

    for (var index = 0; index < http_globalData.chuanzao_xibao.length; index++) {
      var item = http_globalData.chuanzao_xibao[index];
      var string_num = http_globalData.user_info['biology' + item.type];

      _this.menu_chuangzao_xibao_update(TipBoxPrefab, item.TipBoxPrefab_model_name, string_num);
    }

    cc.find("生物创造/细胞1", TipBoxPrefab).getComponent(cc.Sprite).spriteFrame = texture;
    cc.find("生物创造/细胞2", TipBoxPrefab).getComponent(cc.Sprite).spriteFrame = texture;
    cc.find("生物创造/细胞3", TipBoxPrefab).getComponent(cc.Sprite).spriteFrame = texture;
    http_globalData.chuanzao_xibao = [];
  },
  //创造生物
  button_zhaohuan_creater: function button_zhaohuan_creater(TipBoxPrefab) {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      var randomIndex, biology_type, data, index, item;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return httpRequestAlert.alert_biologyTips(TipBoxPrefab);

            case 2:
              if (!(http_globalData.chuanzao_xibao.length < 3)) {
                _context3.next = 5;
                break;
              }

              httpRequestAlert.alert_goTips("材料不足，请添加材料！！！"); //提示材料已经满

              return _context3.abrupt("return");

            case 5:
              //随机数0-1
              randomIndex = Math.floor(Math.random() * http_globalData.chuanzao_xibao.length);
              biology_type = http_globalData.chuanzao_xibao[randomIndex].type; //细胞类型

              _context3.next = 9;
              return httpRequestBagApi.http_user_add_biology(biology_type);

            case 9:
              data = _context3.sent;

              //返回成功的data
              if (data.code == 1) {
                for (index = 0; index < http_globalData.chuanzao_xibao.length; index++) {
                  item = http_globalData.chuanzao_xibao[index];
                  http_globalData.user_info['biology' + item.type] = item.now_num;
                }

                _this4.button_zhaohuan_clear(TipBoxPrefab); // var TipBoxPrefab_tips = cc.instantiate(http_globalData.alert_tips)
                // TipBoxPrefab_tips.getChildByName('提示s').getComponent(cc.Label).string=tips
                // TipBoxPrefab_tips.runAction(cc.sequence( cc.fadeIn(0.1),cc.delayTime(0.3),cc.fadeOut(0.2)),cc.callFunc(function(){ 
                //     //移除挂载
                //     TipBoxPrefab_tips.destroy();
                // },this)); 

              }

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  // -------------------
  //加载菜单
  menu_ronghe: function menu_ronghe() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", new Promise(function (resolve) {
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
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  //加载菜单
  menu_xunlian: function menu_xunlian() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", new Promise(function (resolve) {
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
              return _context5.stop();
          }
        }
      }, _callee5);
    }))();
  },
  //加载菜单
  menu_huishou: function menu_huishou() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              return _context6.abrupt("return", new Promise(function (resolve) {
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
              return _context6.stop();
          }
        }
      }, _callee6);
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
  button_shangdian: function button_shangdian() {
    cc.find('Canvas/弹窗').addChild(http_globalData.alert_shangdian);
  },
  back_home: function back_home() {
    httpRequest.playGame('sence_dating');
  } // //打开背包
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

});

cc._RF.pop();