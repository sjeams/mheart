"use strict";
cc._RF.push(module, '219adMJ63lJVLPEJ9S7o9il', 'biology_iconTools');
// Script/home/biology_iconTools.js

"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var HttpHelper = require("../http");

var httpRequest = new HttpHelper();
cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  //技能图片渲染
  biology_detail_alert: function biology_detail_alert(TipBoxPrefab_model, info_list) {
    //尽量先关闭所有弹窗
    TipBoxPrefab_model.getChildByName('左边弹窗').removeAllChildren();
    TipBoxPrefab_model.getChildByName('中间弹窗').removeAllChildren();
    TipBoxPrefab_model.getChildByName('右边弹窗').removeAllChildren();

    var _this = this;

    cc.loader.loadRes('/model背包/生物头像', function (errorMessage, loadedResource_icon) {
      //检查资源加载
      if (errorMessage) {
        cc.log('载入预制资源失败, 原因:' + errorMessage);
        return;
      }

      if (!(loadedResource_icon instanceof cc.Prefab)) {
        cc.log('你载入的不是预制资源!');
        return;
      } //开始实例化预制资源


      var TipBoxPrefab = cc.instantiate(loadedResource_icon); //技能等级

      TipBoxPrefab.getChildByName('生物数量s').getComponent(cc.Label).string = '生物(' + info_list.length + '/60)'; // 由于加载资源的操作是异步的，如果在加载完成前就绑定了事件，有可能会触发事件的自动执行。

      _this.biology_detail_list(TipBoxPrefab_model, TipBoxPrefab, info_list); //写入icon


      TipBoxPrefab_model.getChildByName('生物头像').addChild(TipBoxPrefab);
      return TipBoxPrefab_model;
    });
    return TipBoxPrefab_model;
  },
  //技能图片渲染
  biology_detail_list: function biology_detail_list(TipBoxPrefab_model, TipBoxPrefab, info_list) {
    var _this = this;

    var TOOLS = [];
    var TOOLS = info_list; // var TipBoxPrefab_icon=[];
    // let image = '/技能图标/'+skill.image;
    //加载预制资源 PrefabUrl为 预制资源在 资源中的路径

    cc.loader.loadRes('/model背包/图标生物', function (errorMessage, loadedResource_icon) {
      var _loop = function _loop() {
        var info = TOOLS[prop]; //检查资源加载

        if (errorMessage) {
          cc.log('载入预制资源失败, 原因:' + errorMessage);
          return {
            v: void 0
          };
        }

        if (!(loadedResource_icon instanceof cc.Prefab)) {
          cc.log('你载入的不是预制资源!');
          return {
            v: void 0
          };
        } //开始实例化预制资源


        var TipBoxPrefab_icon = cc.instantiate(loadedResource_icon); //载入技能图片

        var image = httpRequest.httpUrl(info.picture);

        if (image) {
          cc.loader.load({
            url: image
          }, function (err, texture) {
            // cc.loader.loadRes(image, cc.SpriteFrame, function (err, texture) { 
            if (err) {
              return;
            } // TipBoxPrefab_icon.getChildByName('P头像').getComponent(cc.Sprite).spriteFrame = texture; 


            TipBoxPrefab_icon.getChildByName('P头像').getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
          });
        } else {
          TipBoxPrefab_icon.getChildByName('P头像').getComponent(cc.Sprite).spriteFrame = false;
        } //技能等级


        TipBoxPrefab_icon.getChildByName('生物名称s').getComponent(cc.Label).string = info.name;
        TipBoxPrefab_icon.getChildByName('生物等级s').getComponent(cc.Label).string = '等级' + info.grade; // 由于加载资源的操作是异步的，如果在加载完成前就绑定了事件，有可能会触发事件的自动执行。
        //绑定按钮事件

        _this.bindClickEventIcon(TipBoxPrefab_model, TipBoxPrefab_icon, info); //写入icon


        cc.find("列表/content/gridLayout", TipBoxPrefab).addChild(TipBoxPrefab_icon);
      };

      for (var prop in info_list) {
        var _ret = _loop();

        if (_typeof(_ret) === "object") return _ret.v;
      }
    }); // 定义content滚动条高度

    var scorllheight = cc.find("列表/content/gridLayout", TipBoxPrefab).parent; //滚动高度= 预制体100*个数+ 上下 预留10 的位置

    var cellHeight = cc.find("列表/content/gridLayout", TipBoxPrefab).height * 0.2;
    var height = cellHeight * Math.ceil(info_list.length) + 20;
    ;

    if (height <= 500) {
      var _height = 500;
    }

    scorllheight.setContentSize(500, height);
    return TipBoxPrefab;
  },
  // 绑定按钮事件---挂载生物详情
  bindClickEventIcon: function bindClickEventIcon(TipBoxPrefab_model, TipBoxPrefab_icon, info) {
    // 由于加载资源的操作是异步的，如果在加载完成前就绑定了事件，有可能会触发事件的自动执行。
    // 此处进行事件绑定
    TipBoxPrefab_icon.on('click', function () {
      // 事件处理逻辑
      //移除挂载
      TipBoxPrefab_model.getChildByName('生物详情').removeAllChildren(); //重新挂载

      TipBoxPrefab_model.getComponent('biology_infoTools').biology_detail_alert(TipBoxPrefab_model, info); //切换默认挂载技能列表

      TipBoxPrefab_model.getComponent('biology_skillTools').biology_detail_alert(TipBoxPrefab_model, info); // TipBoxPrefab_model.getComponent('biology_xinxiTools').biology_detail_alert(TipBoxPrefab_model,info)
      // TipBoxPrefab_model.getComponent('biology_yuanfenTools').biology_detail_alert(TipBoxPrefab_model,info)
      // _this.bindClickEventIcon(TipBoxPrefab_icon.getComponent(cc.Button),info,TipBoxPrefab_model);
    }, this); //加载预制资源 PrefabUrl为 预制资源在 资源中的路径
    // 销毁所有弹窗--节点
    // TipBoxPrefab.getChildByName('技能描述').removeAllChildren();
    // let move_type= ['初始化','回合化','被击前触发','被击后触发','攻击前触发','主动','攻击后']
    // cc.loader.loadRes('/弹窗模型/biology_生物_战斗技能提示', function(errorMessage,loadedResource){
    //     //检查资源加载
    //     if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
    //     if( !(loadedResource instanceof cc.Prefab ) ) { cc.log( '你载入的不是预制资源!' ); return; }
    //     //开始实例化预制资源
    //     let tips_Prefab = cc.instantiate(loadedResource);
    //     tips_Prefab.getChildByName('D技能图标').getComponent(cc.Sprite).spriteFrame = TipBoxPrefab_icon.getChildByName('P技能').getComponent(cc.Sprite).spriteFrame
    //     tips_Prefab.getChildByName('D技能名称s').getComponent(cc.Label).string=skill.name+'-['+skill.type+']'
    //     tips_Prefab.getChildByName('D技能消耗s').getComponent(cc.Label).string='消耗:   '+Math.abs(skill.needValue)
    //     var attack=skill.attack==0?'被动':'主动'
    //     tips_Prefab.getChildByName('D技能类型s').getComponent(cc.Label).string='触发: '+attack
    //     var star ='';    
    //     for(var i=0;i<=skill['type'];i++){
    //         star +='☆';
    //     }
    //     tips_Prefab.getChildByName('D技能星级s').getComponent(cc.Label).string='稀有程度：'+star
    //     var hurtType=skill.hurtType==1?'物理':'法术'
    //     tips_Prefab.getChildByName('D技能攻击s').getComponent(cc.Label).string='攻击类型: '+hurtType
    //     tips_Prefab.getChildByName('D技能触发s').getComponent(cc.Label).string='触发几率：'+skill.probability+'%'
    //     tips_Prefab.getChildByName('D发动时机s').getComponent(cc.Label).string='攻击类型: '+move_type[skill.belong]
    //     tips_Prefab.getChildByName('D技能来源s').getComponent(cc.Label).string='技能来源：'+skill.words 
    //     tips_Prefab.getChildByName('D技能描述s').getComponent(cc.Label).string='技能说明：'+skill.describe
    //     //载入生物详情
    //     TipBoxPrefab.getChildByName('技能描述').addChild(tips_Prefab);
    // });
  } // update (dt) {},

});

cc._RF.pop();