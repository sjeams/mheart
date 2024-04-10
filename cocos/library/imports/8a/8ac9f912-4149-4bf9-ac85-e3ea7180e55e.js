"use strict";
cc._RF.push(module, '8ac9fkSQUlL+ayF4+pxgOVe', 'fightingTools');
// Script/fighting/fightingTools.js

"use strict";

var HttpHelper = require("../http");

var httpRequest = new HttpHelper();
var params = [];
cc.Class({
  "extends": cc.Component,
  properties: {// server_picture: cc.Node,
    // server_type: cc.Node,
    // server_name: cc.Node,
    // server_star: cc.Node,
    // server_shenMing: cc.Node,
    // server_moFa: cc.Node,
    // sprite_server_biology: cc.Button
  },
  // LIFE-CYCLE CALLBACKS:
  initInfo: function initInfo(info, biolgy_state, is_my) {
    // 初始化该道具相关信息
    // 图片
    var _this = this;

    if (info['picture']) {
      var remoteUrl = httpRequest.httpUrl(info['picture']); // cc.loader.loadRes(httpRequest.httpUrl(info['picture']), cc.SpriteFrame, function (err, spriteFrame) {   
      //     console.log(_self)
      //     _self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame; 
      // });

      cc.loader.load({
        url: remoteUrl
      }, function (err, texture) {
        // _self.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture)
        // console.log(texture)
        if (err) {
          // cc.error(err.message || err);
          return;
        }

        if (texture) {
          _this.node.getChildByName('生物').getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture); //销毁
          // this.image.spriteFrame=null;
        }
      });

      if (is_my == 0) {
        //图片翻转
        this.node.getChildByName('生物').setScale(-1, 1);
      }
    } // this.server_type.getComponent(cc.Label).string=info['type'];
    // if(info['type']==1){
    //     this.server_type.getComponent(cc.Label).string='空闲';
    //     this.node.getChildByName('server_type').color = new cc.color('green');
    // }else if(info['num']<500&&info['num']>=100){
    //     this.server_type.getComponent(cc.Label).string='流畅';
    //     this.node.getChildByName('server_type').color = new cc.color('#BDFF00');
    // }else if(info['num']<1000&&info['num']>=500){
    //     this.server_type.getComponent(cc.Label).string='拥挤';
    //     this.node.getChildByName('server_type').color = new cc.color('#FFD100');
    // }else{
    //     this.server_type.getComponent(cc.Label).string='爆满';
    //     this.node.getChildByName('server_type').color = new cc.color('#FF0000'); 
    // }
    // var color = ['#FFFFFF','green','#BDFF00','#FFD100','#FF0000','#ffe000',];
    // var type_color = color[info['yiXing']];
    // console.log(info['color']);


    this.node.getChildByName('生物').color = new cc.color(info['color']); // console.log(info)
    // var star ='';    
    // for(i=0;i<=info['yiXing'];i++){
    //     star +='⭐';
    // }
    // this.node.getChildByName('生命s').getComponent(cc.Label).string= info['shengMing']+'/'+info['shengMing'];

    this.node.getChildByName('生命s').getComponent(cc.Label).string = info['shengMing']; // this.node.getChildByName('魔法s').getComponent(cc.Label).string= info['moFa']+'/'+info['moFa'];

    this.node.getChildByName('魔法s').getComponent(cc.Label).string = info['moFa'];
    this.node.getChildByName('生物名称s').getComponent(cc.Label).string = info['name'];
    this.node.getChildByName('生物等级s').getComponent(cc.Label).string = '等级' + info['grade'] + '(' + biolgy_state[info['state']] + ')'; // this.node.getChildByName('星星s').getComponent(cc.Label).string= star;
    // this.node.getChildByName('悟性s').getComponent(cc.Label).string= info['wuXing'];
    // this.server_star.getComponent(cc.Label).string= star;
    // this.server_type.getComponent(cc.Label).string='Lv.'+info['grade']+'('+biolgy_state[info['state']]+')';
    // this.server_type.color = new cc.color(type_color);
    // this.node.getChildByName('server_type').color = new cc.color(type_color);
    // this.server_name.getComponent(cc.Label).string=info['name'];
    // this.server_name.color = new cc.color(type_color);
    // this.node.getChildByName('server_name').color = new cc.color(type_color);
    //创建一个新button 并将其挂载到创建的精灵下

    this.bindClickEvent(this.node.getComponent(cc.Button), info);
  },
  // 绑定按钮事件
  bindClickEvent: function bindClickEvent(button, index) {
    // console.log(index)
    var clickEventHandler = new cc.Component.EventHandler(); //这个 node 节点是你的事件处理代码组件所属的节点

    clickEventHandler.target = this.node; //这个是代码文件名

    clickEventHandler.component = "fightingTools"; // js脚本文件-绑定

    clickEventHandler.handler = "onConfirBtn"; // js方法名称--绑定

    clickEventHandler.customEventData = index; // 回调内容

    button.clickEvents.push(clickEventHandler);
  },
  //按钮点击回调
  onConfirBtn: function onConfirBtn(e, info) {
    console.log(info);

    var _this = this;

    _this.biology_detail_alert(info); // var HttpHelper = require("../http"); 
    // var httpRequest = new HttpHelper();
    // httpRequest.httpPost('/app/app-apiword/in-word', {
    //     'id': info['id'],
    //     'star': info['star'],
    //     'token': null
    // }, function (data) {
    //     //跳转到世界
    //     httpRequest.playGame(httpRequest.urlConfig("sence_zhutian"));
    //     // console.log(data);
    //     // var server_choes_label  =cc.find("Canvas/server/server_choes/server_choes_label");
    //     // server_choes_label.getComponent(cc.Label).string=info['name'];
    //     // var server_choes_type  =cc.find("Canvas/server/server_choes/server_choes_type");
    //     // server_choes_type.getComponent(cc.Label).string=info['type'];
    //     // server_choes_type.color = new cc.color(info['color']); 
    // })
    // var mask =cc.find("Canvas/mask");
    // mask.active=false
    // var mask =  this.node.getChildByName('mask')
    // console.log(this.node.getSiblingIndex())
    // console.log( this.node.parent.getComponent(cc.Button));
    // this.node.getChildByName("sprite_server_biology").on('click',function(event){
    //     console.log("点击到按钮");
    //     callback();
    // },this);
    // this.node.active =false; // 直接去掉模型节点

  },
  //查看生物详情_弹窗
  biology_detail_alert: function biology_detail_alert(info) {
    // 销毁所有弹窗
    cc.find('Canvas/弹窗').removeAllChildren(); // console.log(222)
    // var _task =task||0;

    var _this = this; //加载预制资源 PrefabUrl为 预制资源在 资源中的路径


    cc.loader.loadRes('/弹窗模型/biology_生物_战斗详情', function (errorMessage, loadedResource) {
      //检查资源加载
      if (errorMessage) {
        cc.log('载入预制资源失败, 原因:' + errorMessage);
        return;
      }

      if (!(loadedResource instanceof cc.Prefab)) {
        cc.log('你载入的不是预制资源!');
        return;
      } //开始实例化预制资源


      var TipBoxPrefab = cc.instantiate(loadedResource); //载入生物详情

      _this.biology_detail_info(TipBoxPrefab, info); //将预制资源添加到父节点
      // CanvasNode.addChild(TipBoxPrefab);
      //请求战斗记录
      // if(_task==1){
      //     console.log(11111)
      //     _this.fightint(sence);
      // }else{
      //     _this.progress(sence);
      // }

    });
  },
  biology_detail_info: function biology_detail_info(TipBoxPrefab, info) {
    var _this = this;

    TipBoxPrefab.getChildByName('血s').getComponent(cc.Label).string = info.shengMing;
    TipBoxPrefab.getChildByName('蓝s').getComponent(cc.Label).string = info.moFa;
    TipBoxPrefab.getChildByName('生物名称s').getComponent(cc.Label).string = info.name;
    TipBoxPrefab.getChildByName('种族名称s').getComponent(cc.Label).string = info.zhong_zhu + '族';
    TipBoxPrefab.getChildByName('生物等级s').getComponent(cc.Label).string = '等级' + info.grade;
    TipBoxPrefab.getChildByName('触发概率s').getComponent(cc.Label).string = '触发率' + info.chuFa + '%';
    TipBoxPrefab.getChildByName('生物').getComponent(cc.Sprite).spriteFrame = this.node.getChildByName('生物').getComponent(cc.Sprite).spriteFrame;
    TipBoxPrefab.getChildByName('力量s').getComponent(cc.Label).string = '力量:' + info.power;
    TipBoxPrefab.getChildByName('敏捷s').getComponent(cc.Label).string = '敏捷:' + info.agile;
    TipBoxPrefab.getChildByName('智力s').getComponent(cc.Label).string = '智力:' + info.intelligence;
    TipBoxPrefab.getChildByName('攻击s').getComponent(cc.Label).string = '攻击:' + info.gongJi;
    TipBoxPrefab.getChildByName('护甲s').getComponent(cc.Label).string = '护甲:' + info.huJia;
    TipBoxPrefab.getChildByName('速度s').getComponent(cc.Label).string = '速度:' + info.suDu;
    TipBoxPrefab.getChildByName('特攻s').getComponent(cc.Label).string = '特攻:' + info.faGong;
    TipBoxPrefab.getChildByName('灵气s').getComponent(cc.Label).string = '灵气:' + info.reiki;
    TipBoxPrefab.getChildByName('悟性s').getComponent(cc.Label).string = '悟性:' + info.wuXing;
    TipBoxPrefab.getChildByName('暴击s').getComponent(cc.Label).string = '暴击:' + info.baojilv + '%';
    TipBoxPrefab.getChildByName('吸血s').getComponent(cc.Label).string = '吸血:' + info.xiXue + '%';
    TipBoxPrefab.getChildByName('暴伤s').getComponent(cc.Label).string = '暴伤:' + info.baoji + '%';
    TipBoxPrefab.getChildByName('闪避s').getComponent(cc.Label).string = '闪避:' + info.shanbi + '%';
    TipBoxPrefab.getChildByName('命中s').getComponent(cc.Label).string = '闪避' + '0%';
    TipBoxPrefab.getChildByName('增伤s').getComponent(cc.Label).string = '增伤:' + info.jianShang + '%';
    TipBoxPrefab.getChildByName('减伤s').getComponent(cc.Label).string = '减伤:' + info.zhenShang + '%'; // content: cc.Node,
    // person: cc.Prefab,

    _this.biology_detail_skill(TipBoxPrefab, info.position_skill);

    cc.find('Canvas/弹窗').addChild(TipBoxPrefab, 1);
  },
  //技能图片渲染
  biology_detail_skill: function biology_detail_skill(TipBoxPrefab, position_skill) {
    var _this = this;

    var TOOLS = [];
    var TOOLS = position_skill;
    var TipBoxPrefab_icon = [];

    var _loop = function _loop() {
      var skill = TOOLS[prop];
      var image = '/技能图标/' + skill.image; //加载预制资源 PrefabUrl为 预制资源在 资源中的路径

      cc.loader.loadRes('/弹窗模型/biology_生物_技能图标', function (errorMessage, loadedResource_icon) {
        //检查资源加载
        if (errorMessage) {
          cc.log('载入预制资源失败, 原因:' + errorMessage);
          return;
        }

        if (!(loadedResource_icon instanceof cc.Prefab)) {
          cc.log('你载入的不是预制资源!');
          return;
        } //开始实例化预制资源


        var TipBoxPrefab_icon = cc.instantiate(loadedResource_icon); //载入技能图片

        if (image != '') {
          cc.loader.loadRes(image, cc.SpriteFrame, function (err, texture) {
            if (err) {
              // cc.error(err.message || err);
              return;
            }

            TipBoxPrefab_icon.getChildByName('P技能').getComponent(cc.Sprite).spriteFrame = texture;
          });
        } else {
          TipBoxPrefab_icon.getChildByName('P技能').getComponent(cc.Sprite).spriteFrame = false;
        } //技能等级


        TipBoxPrefab_icon.getChildByName('技能s').getComponent(cc.Label).string = skill.type; // 由于加载资源的操作是异步的，如果在加载完成前就绑定了事件，有可能会触发事件的自动执行。
        // 此处进行事件绑定

        TipBoxPrefab_icon.on('click', function () {
          // 事件处理逻辑
          _this.bindClickEventIcon(TipBoxPrefab_icon.getComponent(cc.Button), skill, TipBoxPrefab, TipBoxPrefab_icon);
        }, this); //写入icon

        TipBoxPrefab.getChildByName('技能列表').addChild(TipBoxPrefab_icon);
      });
    };

    for (var prop in position_skill) {
      _loop();
    }

    return TipBoxPrefab;
  },
  // 绑定按钮事件
  bindClickEventIcon: function bindClickEventIcon(button, skill, TipBoxPrefab, TipBoxPrefab_icon) {
    // cc.log(skill)
    //加载预制资源 PrefabUrl为 预制资源在 资源中的路径
    var move_type = ['初始化', '回合化', '被击前触发', '被击后触发', '攻击前触发', '主动', '攻击后'];
    cc.loader.loadRes('/弹窗模型/biology_生物_战斗技能提示', function (errorMessage, loadedResource) {
      //检查资源加载
      if (errorMessage) {
        cc.log('载入预制资源失败, 原因:' + errorMessage);
        return;
      }

      if (!(loadedResource instanceof cc.Prefab)) {
        cc.log('你载入的不是预制资源!');
        return;
      } //开始实例化预制资源


      var tips_Prefab = cc.instantiate(loadedResource);
      tips_Prefab.getChildByName('D技能图标').getComponent(cc.Sprite).spriteFrame = TipBoxPrefab_icon.getChildByName('P技能').getComponent(cc.Sprite).spriteFrame;
      tips_Prefab.getChildByName('D技能名称s').getComponent(cc.Label).string = skill.name + '-[' + skill.type + ']';
      tips_Prefab.getChildByName('D技能消耗s').getComponent(cc.Label).string = Math.abs(skill.needValue);
      var attack = skill.attack == 0 ? '被动' : '主动';
      tips_Prefab.getChildByName('D技能类型s').getComponent(cc.Label).string = attack;
      var star = '';

      for (var i = 0; i <= skill['type']; i++) {
        star += '☆';
      }

      tips_Prefab.getChildByName('D技能星级s').getComponent(cc.Label).string = '稀有程度：' + star;
      var hurtType = skill.hurtType == 1 ? '物理' : '法术';
      tips_Prefab.getChildByName('D技能攻击s').getComponent(cc.Label).string = '攻击类型: ' + hurtType;
      tips_Prefab.getChildByName('D技能触发s').getComponent(cc.Label).string = '触发几率：' + skill.probability + '%';
      tips_Prefab.getChildByName('D发动时机s').getComponent(cc.Label).string = '攻击类型: ' + move_type[skill.belong];
      tips_Prefab.getChildByName('D技能来源s').getComponent(cc.Label).string = '技能来源：' + skill.words;
      tips_Prefab.getChildByName('D技能描述s').getComponent(cc.Label).string = '技能说明：' + skill.describe; //载入生物详情

      TipBoxPrefab.getChildByName('技能描述').addChild(tips_Prefab);
    });
  }
});

cc._RF.pop();