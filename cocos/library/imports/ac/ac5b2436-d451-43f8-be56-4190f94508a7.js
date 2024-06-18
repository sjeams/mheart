"use strict";
cc._RF.push(module, 'ac5b2Q21FFD+L5WQZD5RQin', 'score_jiaose');
// Script/登录/score_jiaose.js

"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

require("../common");

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    var _this2 = this;

    return _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this2.biology_detail_list();

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  start: function start() {},
  //技能图片渲染
  biology_detail_list: function biology_detail_list() {
    var info_list = http_globalData.user_jiaose;
    cc.log(info_list);
    var TipBoxPrefab_model = cc.find('Canvas/大厅/content');

    var _this = this;

    var TOOLS = [];
    var TOOLS = info_list; // let image = '/技能图标/'+skill.image;
    //加载预制资源 PrefabUrl为 预制资源在 资源中的路径

    cc.loader.loadRes('/model召唤/sprite_生物角色', function (errorMessage, loadedResource_icon) {
      //检查资源加载
      if (errorMessage) {
        cc.log('载入预制资源失败, 原因:' + errorMessage);
        return;
      }

      if (!(loadedResource_icon instanceof cc.Prefab)) {
        cc.log('你载入的不是预制资源!');
        return;
      } //开始实例化预制资源


      var _loop = function _loop() {
        //声明节点对象
        var TipBoxPrefab_icon = cc.instantiate(loadedResource_icon);
        var info = TOOLS[prop]; //放在资源下面

        var image = info.jiaose.picture;

        if (info.jiaose) {
          cc.loader.loadRes(image, cc.SpriteFrame, function (err, texture) {
            if (err) {
              // cc.error(err.message || err);
              return;
            }

            TipBoxPrefab_icon.getChildByName('生物').getComponent(cc.Sprite).spriteFrame = texture;
          });
          TipBoxPrefab_icon.info = info; // var color = ['#ffffff','green','#BDFF00','#FFD100','#FF0000','#ffe000',];
          // var type_color = color[info['type']];
          // // console.log(info)
          // var star ='';    
          // for(var i=0;i<=info['star'];i++){
          //     star +='⭐';
          // }
          // TipBoxPrefab_icon.getChildByName('名称').getComponent(cc.Label).string=info.name;
          // TipBoxPrefab_icon.getChildByName('名称').color = new cc.color(type_color);
          // TipBoxPrefab_icon.getChildByName('世界等级').getComponent(cc.Label).string= info.type_name;
          // TipBoxPrefab_icon.getChildByName('世界等级').color = new cc.color(type_color);
          // TipBoxPrefab_icon.getChildByName('星级').getComponent(cc.Label).string= star;
          //创建一个新button 并将其挂载到创建的精灵下

          _this.onConfirBtn(TipBoxPrefab_icon); //写入icon


          TipBoxPrefab_model.addChild(TipBoxPrefab_icon);
        }
      };

      for (var prop in info_list) {
        _loop();
      }

      _this.clickButton(cc.find('Canvas/大厅/content').children[0]);
    }); // return TipBoxPrefab_model;
    // TipBoxPrefab_model.children[0].emit('click', _this.onConfirBtn,this);
    // onConfirBtn(TipBoxPrefab_model.children[0],info_list[0].jiaose.picture)
  },
  //按钮点击回调
  onConfirBtn: function onConfirBtn(TipBoxPrefab_icon) {
    var _this = this;

    _this.actionBlink_show(TipBoxPrefab_icon, 1);

    TipBoxPrefab_icon.on('click', function () {
      _this.clickButton(TipBoxPrefab_icon); //session设置战斗请求id
      // cc.sys.localStorage.setItem('figthing_map_int', JSON.stringify(map_int)); 
      // httpRequest.playGame("sence_zhandou",1,1)

    });
  },
  clickButton: function clickButton(TipBoxPrefab_icon) {
    if (http_globalData.user_jiaose_check) {
      http_globalData.user_jiaose_check.getChildByName('遮罩').active = true; // this.actionBlink_show(http_globalData.user_jiaose_check,0)
    }

    TipBoxPrefab_icon.getChildByName('遮罩').active = false;
    http_globalData.user_jiaose_check = TipBoxPrefab_icon; // this.actionBlink_show(TipBoxPrefab_icon,1)
  },
  //重复闪烁
  actionBlink_show: function actionBlink_show(TipBoxPrefab_icon, runing) {
    var _this = this; // 创建旋转动作，这里以每秒绕X轴旋转360度为例
    // const rotateAction = cc.rotateBy(5,360)
    // const rotateAction = cc.blink(1,1)
    // const actionhiddenOn = cc.fadeTo(0.1,0);
    // const actionhiddenoff = cc.fadeTo(0.1,255); 


    var actionhiddenBig = cc.spawn(cc.rotateBy(5, 360), cc.scaleTo(5, 1.2, 1.2), cc.delayTime(1));
    var actionhiddenSmoll = cc.spawn(cc.rotateBy(5, 360), cc.scaleTo(5, 1, 1), cc.delayTime(1));

    if (runing) {
      var repeatAction = cc.repeatForever(cc.sequence(actionhiddenBig, actionhiddenSmoll), cc.callFunc(function () {}, this));
      TipBoxPrefab_icon.getChildByName('旋转').runAction(repeatAction);
    } else {
      TipBoxPrefab_icon.getChildByName('旋转').stopAllActions();
    }
  },
  // update (dt) {},
  //创建角色 ，登录 ，跳转大厅
  createUser: function createUser() {// cc.sys.localStorage.setItem('userinfo', JSON.stringify(data.data.userinfo)); 
    // httpRequest.playGame("sence_dating");
  },
  back_login: function back_login() {
    //移除节点
    // httpRequest.playGame("sence_login")
    cc.director.loadScene(httpRequest.urlConfig("sence_login"));
  }
});

cc._RF.pop();