"use strict";
cc._RF.push(module, 'ed8ebeqhB9JK7/jr/MBPGZr', 'home_fighting');
// Script/战斗/home_fighting.js

"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// require("../common"); 
cc.Class({
  "extends": cc.Component,
  properties: {
    // 根据TOOLS生成相应的道具
    toolsArray: [],
    fightingArray: [],
    home: cc.Node,
    back_time: cc.Node //跳过回合

  },
  init: function init() {// cc.director.getScene();//获取当前场景
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              //全局定义容器节点
              http_globalData.BoxPrefab_content = cc.find('Canvas/大厅/content');
              cc.sys.fightingArray = [];
              cc.sys.toolsArray = [];
              _context.next = 5;
              return httpRequestModel.model_back_button('sence_ditu');

            case 5:
              _context.next = 7;
              return httpRequestBagApi.http_music();

            case 7:
              _context.next = 9;
              return httpRequestBagApi.http_user_info();

            case 9:
              _context.next = 11;
              return httpRequestModel.http_base_model();

            case 11:
              _context.next = 13;
              return _this2.spawnTools();

            case 13:
              _context.next = 15;
              return httpRequestModel.fightingEnd();

            case 15:
              _context.next = 17;
              return _this2.playTask();

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  //task
  playTask: function playTask() {
    var _this3 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _this3.goPlay();

            case 2:
              _context2.next = 4;
              return httpRequestFightingExtend.alertBoat('准备回合');

            case 4:
              _context2.next = 6;
              return _this3.fighting_boat();

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }))();
  },
  start: function start() {},
  update: function update(dt) {// console.log(3333)
  },
  spawnTools: function spawnTools() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              return _context3.abrupt("return", new Promise(function (resolve) {
                //开启倍数
                cc.find('Canvas/倍数/倍数s').getComponent(cc.Label).string = http_globalData.user_info.beishu; // var _this =this;

                var figthing_remote_url = cc.sys.localStorage.getItem('figthing_remote_url'); //读取数据--战斗记录

                if (figthing_remote_url == null) {
                  httpRequest.playGame("sence_ditu");
                  resolve();
                } else {
                  var remoteUrl = httpRequest.httpUrlJson(figthing_remote_url);
                  cc.loader.load({
                    url: remoteUrl
                  }, function (err, data) {
                    //定义常量
                    http_globalData.fighting = data; //开启战斗

                    resolve();
                  });
                }
              }));

            case 1:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }))();
  },
  //开启战斗--加载生物
  goPlay: function goPlay() {
    var _this4 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
      var data, biolgy_state, poition_my, poition_enemy, BoxPrefab;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              // return new Promise(resolve => {
              //播放器先清除所有定时器
              _this4.unscheduleAllCallbacks(); //停止某组件的所有计时器


              data = http_globalData.fighting; // cc.log(data)

              biolgy_state = data.data.biolgy_state;
              poition_my = data.data.poition_my;
              poition_enemy = data.data.poition_enemy; //生物挂载

              BoxPrefab = http_globalData.BoxPrefab_content;
              _context4.next = 8;
              return _this4.biology_detail_list(BoxPrefab, poition_my, biolgy_state, 1, 0);

            case 8:
              _context4.next = 10;
              return _this4.biology_detail_list(BoxPrefab, poition_enemy, biolgy_state, 0, poition_my.length);

            case 10:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }))();
  },
  //生成生物
  biology_detail_list: function biology_detail_list(TipBoxPrefab_model, info_list, biolgy_state, is_my, star) {
    var _this5 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
      return regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", new Promise(function (resolve) {
                var _this = _this5;
                var TOOLS = [];
                var TOOLS = info_list;

                for (var prop in info_list) {
                  //声明节点对象
                  var TipBoxPrefab_icon = cc.instantiate(http_globalAsset.model_biology_fightingBiology);
                  var map = TOOLS[prop];
                  var info = map.biology; //设置距离

                  var map_value = 50;

                  if (is_my) {
                    var map_x = map.x - map_value;
                  } else {
                    var map_x = map.x + map_value;
                  }

                  if (info.length != 0) {
                    //放在资源下面
                    //加载图片
                    TipBoxPrefab_icon.getChildByName('生物').getComponent(cc.Sprite).spriteFrame = http_globalAsset.http_base_asset_biology[info.picture];

                    if (is_my == 0) {
                      //图片翻转
                      TipBoxPrefab_icon.getChildByName('生物').setScale(-1, 1);
                    }

                    TipBoxPrefab_icon.getChildByName('生物').color = new cc.color(info.color);
                    TipBoxPrefab_icon.getChildByName('生命s').getComponent(cc.Label).string = httpRequest.number_string_wan(info.shengMing, 2);
                    TipBoxPrefab_icon.getChildByName('魔法s').getComponent(cc.Label).string = httpRequest.number_string_wan(info.moFa, 2);
                    TipBoxPrefab_icon.getChildByName('生物名称s').getComponent(cc.Label).string = info.name;
                    TipBoxPrefab_icon.getChildByName('生物等级s').getComponent(cc.Label).string = '等级' + info.grade + '(' + biolgy_state[info.state] + ')'; //创建一个新button 并将其挂载到创建的精灵下

                    httpRequestModel.model_biology_fightingBiology_button(TipBoxPrefab_icon, info); //写入icon

                    TipBoxPrefab_icon.x = parseInt(map_x); //重新定义了间距

                    TipBoxPrefab_icon.getChildByName('阵法s').getComponent(cc.Label).string = parseInt(prop) + 1;
                    TipBoxPrefab_icon.y = map.y;
                    TipBoxPrefab_icon.is_my = is_my; //阵容

                    TipBoxPrefab_icon.jing_bi = map.biology.jingBi; //金币

                    TipBoxPrefab_icon.biology_int = parseInt(prop) + 1; //阵法编号

                    TipBoxPrefab_icon.shengMing = map.biology.shengMing;
                    TipBoxPrefab_icon.moFa = map.biology.moFa;
                    TipBoxPrefab_icon.biology = map.biology.id;
                    TipBoxPrefab_icon.biology_name = map.biology.name;
                    cc.sys.toolsArray.push(TipBoxPrefab_icon);
                    cc.sys.fightingArray[map.biology.id] = TipBoxPrefab_icon;
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
  // 战斗回合
  fighting_boat: function fighting_boat() {
    var _this6 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
      var _this, fighting_list, boat_length, history_count, fighting_history, boat, boat_count, bpage;

      return regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _this = _this6; // return new Promise(resolve => {

              fighting_list = http_globalData.fighting.data;
              boat_length = fighting_list.fighting_history.length;
              history_count = fighting_list.history_count;
              fighting_history = fighting_list.fighting_history;

              if (!(boat_length != 0)) {
                _context6.next = 26;
                break;
              }

              boat = 0;
              boat_count = -1; //一条或多条执行语句
              // _this.schedule(function(){
              //循环历史行动条数

              bpage = 0;

            case 9:
              if (!(bpage < boat_length)) {
                _context6.next = 26;
                break;
              }

              // _this.schedule(function(){
              boat_count++;

              if (history_count[boat].total < boat_count) {
                boat++;
              }

              _context6.next = 14;
              return httpRequestFightingExtend.alertBoat('第' + parseInt(boat + 1) + '回合');

            case 14:
              if (!fighting_history[boat_count]) {
                _context6.next = 23;
                break;
              }

              _context6.next = 17;
              return _this.fighting_historyWait(fighting_history[boat_count]);

            case 17:
              _context6.next = 19;
              return _this.fighting_historyGo(fighting_history[boat_count]);

            case 19:
              _context6.next = 21;
              return _this.fighting_historyDo(fighting_history[boat_count]);

            case 21:
              _context6.next = 23;
              return _this.fighting_history(fighting_history[boat_count]);

            case 23:
              bpage++;
              _context6.next = 9;
              break;

            case 26:
              return _context6.abrupt("return", new Promise(function (resolve) {
                _this.alertResult();

                resolve();
              }));

            case 27:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }))();
  },
  //暂停并且跳过回合
  onButtonClicked: function onButtonClicked(event) {// return new Promise(resolve => {    _this.alertResult();  resolve()  })
    // 跳过回合
    // var _this =this
    // _this.unscheduleAllCallbacks();//停止某组件的所有计时器
    //   cc.log('跳过')
  },
  alertResult: function alertResult() {
    var _this = this;

    cc.find('Canvas/结算').active = true; // 结束弹窗结果
    // _this.unschedule();

    _this.unscheduleAllCallbacks(); //停止某组件的所有计时器

  },
  //预备回合
  fighting_historyWait: function fighting_historyWait(his_log) {
    var _this7 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
      var _this;

      return regeneratorRuntime.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _this = _this7;

              if (!(his_log.h_yubei.length != 0)) {
                _context7.next = 4;
                break;
              }

              _context7.next = 4;
              return _this.readySkill(his_log.h_yubei);

            case 4:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }))();
  },
  //发起被动
  fighting_historyGo: function fighting_historyGo(his_log) {
    var _this8 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
      var _this;

      return regeneratorRuntime.wrap(function _callee8$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _this = _this8;

              if (!(his_log.h_go.length != 0)) {
                _context8.next = 7;
                break;
              }

              _context8.next = 4;
              return _this.playSkill(his_log.h_go);

            case 4:
              if (!(his_log.h_need.length != 0)) {
                _context8.next = 7;
                break;
              }

              _context8.next = 7;
              return _this.needSkill(his_log.h_need);

            case 7:
            case "end":
              return _context8.stop();
          }
        }
      }, _callee8);
    }))();
  },
  //发起技能
  fighting_historyDo: function fighting_historyDo(his_log) {
    var _this9 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
      var _this;

      return regeneratorRuntime.wrap(function _callee9$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _this = _this9;

              if (!(his_log.h_do.length != 0)) {
                _context9.next = 7;
                break;
              }

              _context9.next = 4;
              return _this.playSkill(his_log.h_do);

            case 4:
              if (!(his_log.h_need.length != 0)) {
                _context9.next = 7;
                break;
              }

              _context9.next = 7;
              return _this.needSkill(his_log.h_need);

            case 7:
            case "end":
              return _context9.stop();
          }
        }
      }, _callee9);
    }))();
  },
  //战斗回合
  fighting_history: function fighting_history(his_log) {
    var _this10 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
      var _this;

      return regeneratorRuntime.wrap(function _callee10$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              // return new Promise(resolve => {
              _this = _this10; //回合结束
              // if(his_log.h_end.length!=0){
              //   cc.log('回合结束')
              // }
              // cc.log(his_log)
              //反击
              // if(his_log.h_back.length!=0){
              //   _this.playFight(_this_hero_node,_targ_hero_node,biology,his_log.h_back)
              // }
              //普通攻击

              if (!(his_log.h_putong.length != 0)) {
                _context10.next = 4;
                break;
              }

              _context10.next = 4;
              return _this.playFight(his_log.h_putong);

            case 4:
            case "end":
              return _context10.stop();
          }
        }
      }, _callee10);
    }))();
  },
  //生成地图
  addMapPic: function addMapPic(data) {
    var _this = this;

    var map_pic = data.data['map_pic'];
    var remoteUrl = httpRequest.httpUrl(map_pic); // console.log(remoteUrl)

    cc.loader.load({
      url: remoteUrl
    }, function (err, texture) {
      if (texture != null) {
        _this.home.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
      }
    });
  },
  //技能准备动作
  readySkill: function readySkill(his_log_extend) {
    var _this11 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
      var _this, npage, biology, _this_hero_node, _targ_hero_node;

      return regeneratorRuntime.wrap(function _callee11$(_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              if (!(his_log_extend.length != 0)) {
                _context11.next = 12;
                break;
              }

              _this = _this11;
              npage = 0;

            case 3:
              if (!(npage < his_log_extend.length)) {
                _context11.next = 12;
                break;
              }

              biology = his_log_extend[npage];
              _this_hero_node = cc.sys.fightingArray[biology.goid];
              _targ_hero_node = cc.sys.fightingArray[biology.doid];
              _context11.next = 9;
              return httpRequestFightingExtend.buttonReady(_this_hero_node, biology, 0);

            case 9:
              npage++;
              _context11.next = 3;
              break;

            case 12:
            case "end":
              return _context11.stop();
          }
        }
      }, _callee11);
    }))();
  },
  //技能消耗动作
  needSkill: function needSkill(his_log_extend) {
    var _this12 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
      var _this, npage, biology, _this_hero_node, _targ_hero_node;

      return regeneratorRuntime.wrap(function _callee12$(_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              if (!(his_log_extend.length != 0)) {
                _context12.next = 12;
                break;
              }

              _this = _this12;
              npage = 0;

            case 3:
              if (!(npage < his_log_extend.length)) {
                _context12.next = 12;
                break;
              }

              biology = his_log_extend[npage];
              _this_hero_node = cc.sys.fightingArray[biology.goid];
              _targ_hero_node = cc.sys.fightingArray[biology.doid]; // _this.buttonShake(0.5,_targ_hero_node,biology)//技能攻击
              // _this.schedule(function(){

              _context12.next = 9;
              return httpRequestFightingExtend.buttonSkill(_this_hero_node, biology, 0);

            case 9:
              npage++;
              _context12.next = 3;
              break;

            case 12:
            case "end":
              return _context12.stop();
          }
        }
      }, _callee12);
    }))();
  },
  //技能攻击动作
  playSkill: function playSkill(his_log_extend) {
    var _this13 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
      var _this, npage, biology, _this_hero_node, _targ_hero_node;

      return regeneratorRuntime.wrap(function _callee13$(_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              if (!(his_log_extend.length != 0)) {
                _context13.next = 12;
                break;
              }

              _this = _this13;
              npage = 0;

            case 3:
              if (!(npage < his_log_extend.length)) {
                _context13.next = 12;
                break;
              }

              biology = his_log_extend[npage];
              _this_hero_node = cc.sys.fightingArray[biology.goid];
              _targ_hero_node = cc.sys.fightingArray[biology.doid]; //2个攻击类型只能二选一 
              // _this.buttonShake(0.1,_targ_hero_node,biology)//技能攻击，动作后伤害

              _context13.next = 9;
              return httpRequestFightingExtend.playAction(_targ_hero_node, biology, 1);

            case 9:
              npage++;
              _context13.next = 3;
              break;

            case 12:
            case "end":
              return _context13.stop();
          }
        }
      }, _callee13);
    }))();
  },
  //普通攻击动作
  playFight: function playFight(his_log_extend) {
    var _this14 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
      var _this, npage, biology, _this_hero_node, _targ_hero_node;

      return regeneratorRuntime.wrap(function _callee14$(_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              if (!(his_log_extend.length != 0)) {
                _context14.next = 17;
                break;
              }

              _this = _this14;
              npage = 0;

            case 3:
              if (!(npage < his_log_extend.length)) {
                _context14.next = 17;
                break;
              }

              biology = his_log_extend[npage]; // cc.log(cc.sys.fightingArray)

              _this_hero_node = cc.sys.fightingArray[biology.goid];
              _targ_hero_node = cc.sys.fightingArray[biology.doid];

              if (!(biology.goid == biology.doid)) {
                _context14.next = 12;
                break;
              }

              _context14.next = 10;
              return httpRequestFightingExtend.buttonReady(_this_hero_node, biology, 0);

            case 10:
              _context14.next = 14;
              break;

            case 12:
              _context14.next = 14;
              return httpRequestFightingExtend.buttonMove(_this_hero_node, _targ_hero_node, biology, 0);

            case 14:
              npage++;
              _context14.next = 3;
              break;

            case 17:
            case "end":
              return _context14.stop();
          }
        }
      }, _callee14);
    }))();
  },
  //生物渐隐-淡出-淡入
  // nodefadeIn(time,type,node){
  //   // cc.log(node)
  //   var fin_arr=[];
  //   if(type==0){
  //     //先让透明度为0
  //     node.getChildByName('扣血s').opacity=0
  //     fin_arr.push(cc.fadeIn(time));
  //   }else{
  //     //先让透明度为255
  //     node.getChildByName('扣血s').opacity=255
  //     fin_arr.push(cc.fadeOut(time));
  //   }
  //   fin_arr.push(cc.spawn(cc.delayTime(0.5),cc.callFunc(function(){
  //     node.getChildByName('扣血s').active=false
  //   },this)) )
  //   node.getChildByName('扣血s').runAction(fin_arr);
  // },
  bagBtn: function bagBtn() {
    // 背包按钮
    if (this.gridLayout.parent.active) {
      // 隐藏节点
      this.gridLayout.parent.active = false; // 删除所有道具(或者不删，只是隐藏，自己决定)
      // this.toolsArray.forEach(element => {
      //     element.removeFromParent();
      // });

      cc.sys.toolsArray.forEach(function (element) {
        element.removeFromParent();
      });
    } else {
      // 显示节点
      this.gridLayout.parent.active = true; // 生成所有道具

      this.spawnTools();
    }
  },
  // 刷新血条
  hp_update: function hp_update(node) {
    //受到15伤害
    this.hp -= 15; // 求出伤害血量占比并显示

    var fill = this.hp / this.all_hp;
    this.hp_now.fillstart = 1 - fill; // 血条延迟，秒执行一次，一共执行六次，延迟为0
    // this.schedule(function(){
    //     this.magnetnumber-=5/8;
    // },1,6,0);
    //0.5秒内闪烁

    var act_shan = cc.sequence(cc.fadeTo(0.05, 0), cc.fadeTo(0.05, 255));
    element.runAction(cc.repeat(act_shan, 5)); // //0.5秒后还可以被攻击
    //   this.scheduleOnce(function() {
    //     this.state = 0;
    //   }.bind(this),0.5);
  },
  // reloadWord(){
  //   var _this =this;
  //   httpRequest.httpPost('/app/app-apiword/map-word',{}, function (data) {
  //     //写入地图数据
  //     _this.addWordMap(data)
  //     })
  // },
  // back_map(){
  //   //移除节点
  //   // var _this = this;
  //   // httpRequestModel.removeBoxprefab()
  //   httpRequest.playGame("sence_ditu")
  // },
  //重播
  back_reload: function back_reload() {
    //移除节点
    var _this = this;

    httpRequestModel.removeBoxprefab();

    _this.playTask();

    cc.find('Canvas/结算').active = false; // 结束弹窗结果
  },
  back_home: function back_home() {
    //移除节点
    // var _this = this;
    httpRequestModel.removeBoxprefab();
    httpRequest.playGame("sence_dating");
  },
  addTouchEvent: function addTouchEvent(node_1) {
    node_1.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
    node_1.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
    node_1.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
  },
  // onDestroy() {
  //     // 停止定时器
  //     this.unschedule(this.fighting_history);
  // }
  button_beishu: function button_beishu() {
    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
      return regeneratorRuntime.wrap(function _callee15$(_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              // var beisu_arr =[1,2,3,4,8];
              if (http_globalData.user_info.beishu < 4) {
                http_globalData.user_info.beishu = parseInt(http_globalData.user_info.beishu) + 1;
              } else {
                http_globalData.user_info.beishu = 1;
              } //修改倍数


              _context15.next = 3;
              return httpRequestBagApi.http_user_beishu_update();

            case 3:
              // http_globalData.user_info.beishu
              cc.find('Canvas/倍数/倍数s').getComponent(cc.Label).string = http_globalData.user_info.beishu;

            case 4:
            case "end":
              return _context15.stop();
          }
        }
      }, _callee15);
    }))();
  },
  // back_home(){
  //   httpRequest.playGame("sence_dating")
  // },
  //跳过回合
  back_time_show: function back_time_show() {
    // this.unscheduleAllCallbacks();//停止某组件的所有计时器
    cc.find('Canvas/结算').active = true;
  }
});

cc._RF.pop();