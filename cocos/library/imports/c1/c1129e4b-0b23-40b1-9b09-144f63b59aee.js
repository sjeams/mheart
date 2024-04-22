"use strict";
cc._RF.push(module, 'c11295LCyNAsZsJFE9jtZru', 'biology_infoTools');
// Script/home/biology_infoTools.js

"use strict";

var HttpHelper = require("../http");

var httpRequest = new HttpHelper();
cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  //技能图片渲染
  biology_detail_alert: function biology_detail_alert(TipBoxPrefab_model, info) {
    var _this = this;

    cc.loader.loadRes('/model背包/生物详情', function (errorMessage, loadedResource_icon) {
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
      // TipBoxPrefab.getChildByName('生物数量s').getComponent(cc.Label).string='生物('+info_list.length+'/60)'
      // 由于加载资源的操作是异步的，如果在加载完成前就绑定了事件，有可能会触发事件的自动执行。

      _this.biology_detail_list(TipBoxPrefab, info); //写入icon


      TipBoxPrefab_model.getChildByName('生物详情').addChild(TipBoxPrefab);
      return TipBoxPrefab_model;
    });
    return TipBoxPrefab_model;
  },
  //技能图片渲染
  biology_detail_list: function biology_detail_list(TipBoxPrefab, info) {
    // TipBoxPrefab.getChildByName('血s').getComponent(cc.Label).string= info.shengMing
    // TipBoxPrefab.getChildByName('蓝s').getComponent(cc.Label).string= info.moFa
    TipBoxPrefab.getChildByName('生物名称s').getComponent(cc.Label).string = info.name;
    TipBoxPrefab.getChildByName('种族s').getComponent(cc.Label).string = info.zhong_zhu + '族';
    TipBoxPrefab.getChildByName('生物等级s').getComponent(cc.Label).string = '等级' + info.grade; // TipBoxPrefab.getChildByName('触发概率s').getComponent(cc.Label).string='触发率'+info.chuFa+'%'
    // //生物命名必须叫生物
    //载入技能图片

    var image = httpRequest.httpUrl(info.picture);

    if (image) {
      cc.loader.load({
        url: image
      }, function (err, texture) {
        // cc.loader.loadRes(image, cc.SpriteFrame, function (err, texture) { 
        if (err) {
          return;
        } // TipBoxPrefab_icon.getChildByName('P头像').getComponent(cc.Sprite).spriteFrame = texture; 


        TipBoxPrefab.getChildByName('生物').getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
      });
    } else {
      TipBoxPrefab.getChildByName('生物').getComponent(cc.Sprite).spriteFrame = false;
    }

    TipBoxPrefab.getChildByName('战力s').getComponent(cc.Label).string = '战力' + info.special;
    TipBoxPrefab.getChildByName('评分s').getComponent(cc.Label).string = '评分:' + info.score / 10;

    if (info.yiXing == 1) {
      // cc.log(1111)
      TipBoxPrefab.getChildByName('异形').active = true;
    } else {
      // cc.log(222)
      TipBoxPrefab.getChildByName('异形').active = false;
    }

    cc.log(info);
    TipBoxPrefab.getChildByName('稀有s').getComponent(cc.Label).string = info.scoreGrade;
    TipBoxPrefab.getChildByName('慧根值s').getComponent(cc.Label).string = info.maxNature;
    TipBoxPrefab.getChildByName('经验s').getComponent(cc.Label).string = info.need_expe;
    TipBoxPrefab.getChildByName('境界s').getComponent(cc.Label).string = info.state_name; // TipBoxPrefab.getChildByName('稀有s').getComponent(cc.Label).string= info.scoreGrade
    // TipBoxPrefab.getChildByName('稀有s').getComponent(cc.Label).string= info.scoreGrade
    // TipBoxPrefab.getChildByName('稀有s').getComponent(cc.Label).string= info.scoreGrade
    // TipBoxPrefab.getChildByName('战力s').getComponent(cc.Label).string='力量:'+info.power
    // TipBoxPrefab.getChildByName('战力s').getComponent(cc.Label).string='力量:'+info.power
    // TipBoxPrefab.getChildByName('战力s').getComponent(cc.Label).string='力量:'+info.power
    // TipBoxPrefab.getChildByName('力量s').getComponent(cc.Label).string='力量:'+info.power
    // TipBoxPrefab.getChildByName('敏捷s').getComponent(cc.Label).string='敏捷:'+info.agile
    // TipBoxPrefab.getChildByName('智力s').getComponent(cc.Label).string='智力:'+info.intelligence
    // TipBoxPrefab.getChildByName('攻击s').getComponent(cc.Label).string='攻击:'+info.gongJi
    // TipBoxPrefab.getChildByName('护甲s').getComponent(cc.Label).string='护甲:'+info.huJia
    // TipBoxPrefab.getChildByName('速度s').getComponent(cc.Label).string='速度:'+info.suDu
    // TipBoxPrefab.getChildByName('特攻s').getComponent(cc.Label).string='特攻:'+info.faGong
    // TipBoxPrefab.getChildByName('灵气s').getComponent(cc.Label).string='灵气:'+info.reiki
    // TipBoxPrefab.getChildByName('悟性s').getComponent(cc.Label).string='悟性:'+info.wuXing
    // TipBoxPrefab.getChildByName('暴击s').getComponent(cc.Label).string='暴击:'+info.baojilv+'%'
    // TipBoxPrefab.getChildByName('吸血s').getComponent(cc.Label).string='吸血:'+info.xiXue+'%'
    // TipBoxPrefab.getChildByName('暴伤s').getComponent(cc.Label).string='暴伤:'+info.baoji+'%'
    // TipBoxPrefab.getChildByName('闪避s').getComponent(cc.Label).string='闪避:'+info.shanbi+'%'
    // TipBoxPrefab.getChildByName('命中s').getComponent(cc.Label).string='闪避'+'0%'
    // TipBoxPrefab.getChildByName('增伤s').getComponent(cc.Label).string='增伤:'+info.jianShang+'%'
    // TipBoxPrefab.getChildByName('减伤s').getComponent(cc.Label).string='减伤:'+info.zhenShang+'%'

    return TipBoxPrefab;
  },
  // 绑定按钮事件---挂载生物详情
  bindClickEventIcon: function bindClickEventIcon(button, info, TipBoxPrefab, TipBoxPrefab_icon) {// cc.log(info)
    //加载预制资源 PrefabUrl为 预制资源在 资源中的路径
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