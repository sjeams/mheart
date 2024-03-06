"use strict";
cc._RF.push(module, 'ed8ebeqhB9JK7/jr/MBPGZr', 'score_fighting');
// Script/fighting/score_fighting.js

"use strict";

// 世界操作  
var HttpHelper = require("../http");

var httpRequest = new HttpHelper();

var FightingExtend = require("figthingExtend");

var getFightingExtend = new FightingExtend(); // var httpRequest = new HttpHelper();

var params = [];
cc.Class({
  "extends": cc.Component,
  properties: {
    // 根据TOOLS生成相应的道具
    toolsArray: [],
    fightingArray: [],
    content: cc.Node,
    person: cc.Prefab,
    home: cc.Node,
    reload: cc.Node,
    back: cc.Node,
    //列表
    test_scrollView: {
      "default": null,
      type: cc.ScrollView
    },
    //翻页容器
    test_pageView: {
      "default": null,
      type: cc.PageView
    }
  },
  init: function init() {
    cc.director.getScene(); //获取当前场景
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    this.spawnTools();
  },
  start: function start() {},
  update: function update(dt) {// console.log(3333)
  },
  spawnTools: function spawnTools() {
    var _this = this;

    var figthing_remote_url = cc.sys.localStorage.getItem('figthing_remote_url'); //读取数据--战斗记录

    if (figthing_remote_url == null) {
      httpRequest.playGame(httpRequest.urlConfig("sence_ditu"));
    } else {
      var remoteUrl = httpRequest.httpUrlJson(figthing_remote_url);
      cc.loader.load({
        url: remoteUrl
      }, function (err, data) {
        // console.log(data) 
        //移除节点
        // _this.content.removeAllChildren();
        // _this.content.destroyAllChildren();
        //先让透明度为0
        // _this.nodefadeIn(1,0,_this.content)
        // 初始化阵容
        var star = 0; //阵容序号

        var star = _this.init_postion(data.data.poition_my, data.data.biolgy_state, -0, 1, star); //生成生物--position_my


        var star = _this.init_postion(data.data.poition_enemy, data.data.biolgy_state, 0, 0, star); //生成生物--position_ememy


        _this.addMapPic(data); //生成地图
        // console.log( _this.toolsArray)
        // console.log( _this.fightingArray )


        var fighting_list = data.data;
        var boat_length = fighting_list.fighting_history.length;
        var history_count = fighting_list.history_count;
        var fighting_history = fighting_list.fighting_history;

        if (boat_length != 0) {
          var boat = 0;
          var boat_count = -1; //一条或多条执行语句
          // _this.schedule(function(){
          //循环历史行动条数

          _this.schedule(function () {
            boat_count++;

            if (history_count[boat].total < boat_count) {
              boat++;
            } //因为是从0开始，所以相等就结束 


            if (boat_count == boat_length) {
              // cc.log(111)
              // 在第六次执行回调时取消这个计时器
              _this.fightingEnd(fighting_list);

              _this.unschedule();
            } else {
              // cc.log(boat_count)
              cc.find('Canvas/大厅/回合/time').getComponent(cc.Label).string = '回合' + parseInt(boat + 1); // cc.log(fighting_history[boat_count])

              _this.fighting_history(fighting_history[boat_count]); //执行战斗顺序 

            }
          }, 1, boat_length, 1); ////10秒后执行1次间隔5秒

        }
      });
    }
  },
  fighting_history: function fighting_history(his_log) {
    // cc.log(his_log)
    var _this = this; //反击
    // if(his_log.h_back.length!=0){
    //   _this.playFight(_this_hero_node,_targ_hero_node,biology,his_log.h_back)
    // }
    //消耗魔法 --技能名称和消耗放一起了


    if (his_log.h_need.length != 0) {
      _this.readySkill(his_log.h_need);
    } // // 发起技能名称被动


    if (his_log.h_go.length != 0) {
      _this.readySkill(his_log.h_go);
    } //普通攻击


    if (his_log.h_putong.length != 0) {
      _this.playFight(his_log.h_putong);
    } // 执行技能


    if (his_log.h_do.length != 0) {
      _this.playSkill(his_log.h_do);
    }
  },
  //战斗结束
  fightingEnd: function fightingEnd(fighting_list) {
    // var _task =task||0;
    var _this = this; //加载预制资源 PrefabUrl为 预制资源在 资源中的路径


    cc.loader.loadRes('/biology_结算', function (errorMessage, loadedResource) {
      //检查资源加载
      if (errorMessage) {
        cc.log('载入预制资源失败, 原因:' + errorMessage);
        return;
      }

      if (!(loadedResource instanceof cc.Prefab)) {
        cc.log('你载入的不是预制资源!');
        return;
      } //开始实例化预制资源


      var TipBoxPrefab = cc.instantiate(loadedResource); // TipBoxPrefab.getComponent('fightingTools').initInfo(fighting_list); //写入奖励物品预制体

      if (fighting_list.poition_winner == 1) {
        TipBoxPrefab.getChildByName('结果s').getComponent(cc.Label).string = '胜利！';
      } else {
        TipBoxPrefab.getChildByName('结果s').getComponent(cc.Label).string = '失败！';
      } //将预制资源添加到父节点
      // CanvasNode.addChild(TipBoxPrefab);


      cc.find('Canvas').addChild(TipBoxPrefab, 1); //请求战斗记录
      // if(_task==1){
      //     console.log(11111)
      //     _this.fightint(sence);
      // }else{
      //     _this.progress(sence);
      // }
    });
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
  //生成生物
  init_postion: function init_postion(postion, biolgy_state, int_px, is_my, star) {
    var _this = this;

    var TOOLS = [];
    var TOOLS = postion;
    var total = postion.length; // const maps = new Map();
    //添加节点

    for (var i = 0; i < total; i++) {
      //死亡移除map_status
      var map = TOOLS[i]; // console.log(map) 

      if (map.biology.length != 0) {
        star++;
        var tool = cc.instantiate(_this.person);
        tool.getComponent('fightingTools').initInfo(map.biology, biolgy_state, is_my);
        tool.x = parseInt(map.x + int_px);
        tool.getChildByName('阵法s').getComponent(cc.Label).string = star - 1;
        tool.y = map.y;
        tool.is_my = is_my; //阵容

        tool.jing_bi = map.biology.jingBi; //金币

        tool.biology_int = star; //阵法编号

        tool.shengMing = map.biology.shengMing;
        tool.moFa = map.biology.moFa;
        tool.biology = map.biology.id;
        tool.biology_name = map.biology.name;

        _this.toolsArray.push(tool);

        _this.fightingArray[map.biology.id] = tool; //永久重复移动
        // var randomNumup = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
        // var randomNumdown = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
        // var seq = cc.repeatForever(
        //   cc.sequence(
        //       cc.moveBy(randomNumup, 0,5),
        //       // cc.scaleTo(randomNumup, 1, 1.05),
        //       // cc.scaleTo(randomNumdown, 1.05,1),
        //       cc.moveBy(randomNumdown, 0,-5)
        //   ));
        // tool.runAction(seq);

        _this.content.addChild(tool);
      }
    }

    return star;
  },
  //技能准备动作
  readySkill: function readySkill(his_log_extend) {
    // console.log(his_log_extend)
    if (his_log_extend.length != 0) {
      var _this = this;

      for (var npage = 0; npage < his_log_extend.length; npage++) {
        // var npage=-1;
        // var n_length = his_log_extend.length-1<0?0:his_log_extend.length-1;
        // _this.schedule(function(){
        // npage++
        var biology = his_log_extend[npage];
        var _this_hero_node = this.fightingArray[biology.goid];
        var _targ_hero_node = this.fightingArray[biology.doid];

        var res = _this.buttonReady(0, _this_hero_node, biology); //自己变大--加载技能动作
        // },1,n_length,0.5);//只执行一次

      } // return res

    }

    return new Promise(function (resolve) {
      resolve();
    });
  },
  //技能消耗动作
  needSkill: function needSkill(his_log_extend) {
    if (his_log_extend.length != 0) {
      var _this = this;

      for (var npage = 0; npage < his_log_extend.length; npage++) {
        var biology = his_log_extend[npage]; // cc.log(biology)

        var _this_hero_node = this.fightingArray[biology.goid];
        var _targ_hero_node = this.fightingArray[biology.doid]; // _this.buttonShake(0.5,_targ_hero_node,biology)//技能攻击
        // _this.schedule(function(){

        getFightingExtend.playAction(_targ_hero_node, biology, 0); //不需要其它动作，瞬发伤害动作
        // },1)
      }
    }

    return new Promise(function (resolve) {
      resolve();
    });
  },
  //技能攻击动作
  playSkill: function playSkill(his_log_extend) {
    if (his_log_extend.length != 0) {
      var _this = this;

      for (var npage = 0; npage < his_log_extend.length; npage++) {
        var biology = his_log_extend[npage]; // cc.log(biology)

        var _this_hero_node = this.fightingArray[biology.goid];
        var _targ_hero_node = this.fightingArray[biology.doid]; // _this.buttonShake(0.5,_targ_hero_node,biology)//技能攻击
        // _this.schedule(function(){

        getFightingExtend.playAction(_targ_hero_node, biology, 1); //不需要其它动作，瞬发伤害动作
        // },1)
      }
    }

    return new Promise(function (resolve) {
      resolve();
    });
  },
  //普通攻击动作
  playFight: function playFight(his_log_extend) {
    if (his_log_extend.length != 0) {
      var _this = this;

      for (var npage = 0; npage < his_log_extend.length; npage++) {
        var biology = his_log_extend[npage]; // cc.log(this.fightingArray)

        var _this_hero_node = this.fightingArray[biology.goid];
        var _targ_hero_node = this.fightingArray[biology.doid];

        if (biology.goid == biology.doid) {
          // _this.buttonShake(0,_targ_hero_node,biology)//自己闪动
          var res = _this.buttonReady(0, _this_hero_node, biology); //自己变大--加载技能动作

        } else {
          var res = _this.buttonMove(0.1, _this_hero_node, _targ_hero_node, biology); //移动

        }
      }

      return res;
    }

    return new Promise(function (resolve) {
      resolve();
    });
  },
  //准备动作--变大
  buttonReady: function buttonReady(waite_time, node, biology) {
    var _this = this;

    var waite_time = waite_time || 0;
    var actionhiddenBig = cc.scaleTo(0.1, 1, 1.2);
    var actionWaite = cc.delayTime(waite_time); //等待攻击时间

    var actionhiddenOn = cc.fadeTo(0.05, 0); // const actionLeft = cc.moveBy(0.1, cc.v2(-5, 0));
    // const actionRight = cc.moveBy(0.1, cc.v2(10, 0));
    // const actionLeftSecond = cc.moveBy(0.1, cc.v2(-10, 0));
    // const actionRightSecond = cc.moveBy(0.1, cc.v2(5, 0));
    // actionLeft, actionRight, actionLeftSecond, actionRightSecond,

    var actionhiddenoff = cc.fadeTo(0.05, 255);
    var actionhiddenSmoll = cc.scaleTo(0.1, 1, 1); // cc.spwan( 同时完成

    return new Promise(function (resolve) {
      node.runAction(cc.sequence(actionhiddenBig, actionWaite, actionhiddenOn, actionhiddenoff, actionhiddenSmoll, // 执行动作完成之后调用的方法
      cc.callFunc(function () {
        // cc.log(node);
        // cc.log(biology);
        //先走提示再动作
        // _this.schedule(function(){
        getFightingExtend.playTips(node, biology);
        getFightingExtend.playAction(node, biology); // },1)

        resolve();
      })));
    });
  },
  //移动
  buttonMove: function buttonMove(waite_time, node, m_node, biology) {
    var arr = [];

    var _this = this;

    var m_x = 10;
    var m_y = 0;
    var m_x_move = 0;

    if (node.is_my == 1) {
      m_x_move = -120;
    } else {
      m_x_move = 120;
    }

    if (node.x != m_node.x) m_x = m_node.x - node.x + m_x_move;
    if (node.y != m_node.y) m_y = m_node.y - node.y; //普通攻击

    var actionLeft = cc.spawn(cc.moveBy(0.2, cc.v2(m_x, m_y)), cc.scaleTo(0.1, 1, 1.2), cc.callFunc(function () {}, this));
    var actionWaite = cc.delayTime(0.1);
    var actionRight = cc.spawn(cc.moveBy(0.2, cc.v2(-m_x, -m_y)), cc.scaleTo(0.1, 1, 1)); // 让节点在向上移动的同时缩放
    // arr.push(cc.scaleTo(0.1, 1,1))

    return new Promise(function (resolve) {
      node.runAction(cc.sequence(actionLeft, actionWaite, actionRight, cc.callFunc(function () {
        //等待攻击完成
        _this.buttonShake(waite_time, m_node, biology);

        resolve();
      })));
    });
  },
  //受击
  buttonShake: function buttonShake(waite_time, node, biology) {
    var _this = this;

    var waite_time = waite_time || 0;
    var actionWaite = cc.delayTime(waite_time); //等待攻击时间

    var actionhiddenOn = cc.fadeTo(0.05, 0);
    var actionLeft = cc.moveBy(0.1, cc.v2(-5, 0));
    var actionRight = cc.moveBy(0.1, cc.v2(10, 0));
    var actionLeftSecond = cc.moveBy(0.1, cc.v2(-10, 0));
    var actionRightSecond = cc.moveBy(0.1, cc.v2(5, 0));
    var actionhiddenoff = cc.fadeTo(0.05, 255); // cc.spwan( 同时完成

    return new Promise(function (resolve) {
      node.runAction(cc.sequence(actionWaite, actionLeft, actionRight, actionLeftSecond, actionRightSecond, actionhiddenOn, actionhiddenoff, // 执行动作完成之后调用的方法
      cc.callFunc(function () {
        // cc.log(node);
        // cc.log(biology);
        // _this.schedule(function(){
        getFightingExtend.playAction(node, biology); // },1)

        resolve();
      })));
    });
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

      this.toolsArray.forEach(function (element) {
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
  reloadWord: function reloadWord() {
    var _this = this;

    httpRequest.httpPost('/app/app-apiword/map-word', params, function (data) {
      //写入地图数据
      _this.addWordMap(data);
    });
  },
  back_map: function back_map() {
    //销毁动态合图
    cc.dynamicAtlasManager.reset();
    httpRequest.playGame(httpRequest.urlConfig("sence_ditu"));
  },
  back_reload: function back_reload() {
    // this.parent.active=false
    //销毁动态合图
    cc.dynamicAtlasManager.reset();
    httpRequest.playGame(httpRequest.urlConfig("sence_zhandou"));
  },
  back_home: function back_home() {
    //销毁动态合图
    cc.dynamicAtlasManager.reset();
    httpRequest.playGame(httpRequest.urlConfig("sence_dating"));
  },
  addTouchEvent: function addTouchEvent(node_1) {
    node_1.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
    node_1.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
    node_1.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
  }
});

cc._RF.pop();