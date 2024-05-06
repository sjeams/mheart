/*
 * @Author: sjeam
 * @Date: 2024-01-08 15:33:42
 * @Description: 
 */
const FightingExtend = cc.Class({
  //提示动作
  playTips(node,biology,is_skill){
        //技能名称
        if(biology.descript_go_msg!=''){
          // cc.log(biology.descript_go_msg)
            node.getChildByName('技能s').getComponent(cc.Label).string=biology.descript_go_msg

            node.getChildByName('技能背景').active=true
            node.getChildByName('技能背景').opacity=255
            node.getChildByName('技能s').active=true
            node.getChildByName('技能s').opacity=255
            node.getChildByName('技能背景').runAction(cc.sequence(cc.fadeIn(0.01),cc.scaleTo(0.1, 1.1, 1.3),cc.moveBy(0.5,cc.v2(0,0)),cc.fadeOut(0.1),cc.scaleTo(0.01, 1, 1),cc.moveBy(0.01,cc.v2(0,0)),cc.callFunc(function(){  node.getChildByName('技能背景').active=false },this)));
            node.getChildByName('技能s').runAction(cc.sequence(cc.fadeIn(0.01),cc.scaleTo(0.1, 1.1, 1.3),cc.moveBy(0.5,cc.v2(0,0)),cc.fadeOut(0.1),cc.scaleTo(0.01, 1, 1),cc.moveBy(0.01,cc.v2(0,0)),cc.callFunc(function(){  node.getChildByName('技能s').active=false },this)));

        }
  },

  //攻击动作
  playAction(node,biology,is_skill){
    var is_skill=is_skill||0
    //准备动作
    var _this =this;
    _this.playReady(node,biology)
    _this.playMove(node,biology,is_skill)
  },
  // 准备动作--悟性-治疗-中毒-冰冻-眩晕 持续伤害--回合前结算等
  playReady(node,biology){
    if(biology.extend=='wuXingTotal'){
        node.getChildByName('悟性s').getComponent(cc.Label).string= biology.hurt_go_value%100;  //除100 取余
        node.getChildByName('悟性s').runAction(cc.sequence(cc.fadeIn(0.01),cc.scaleTo(0.1, 1.5, 1.5),cc.moveBy(0.3,cc.v2(0,0)),cc.scaleTo(0.2, 1, 1),cc.callFunc(function(){   },this)));
      
        node.getChildByName('悟性动作').active=true
        node.getChildByName('悟性动作').opacity=255
  
        node.getChildByName('悟性动作').runAction(cc.sequence(cc.fadeIn(0.01),cc.scaleTo(0.5, 1.1, 1.1),cc.fadeOut(0.2),cc.scaleTo(0.1, 1, 1),cc.callFunc(function(){  node.getChildByName('悟性动作').active=false  },this)));
        
        //向下取整
        var wuxing_floor = Math.floor(biology.hurt_go_value/100)
        if(wuxing_floor>0){
          node.getChildByName('悟性星星').active=true
          node.getChildByName('进化s').active=true
          node.getChildByName('进化s').getComponent(cc.Label).string= wuxing_floor;
          node.getChildByName('进化s').runAction(cc.sequence(cc.fadeIn(0.01),cc.scaleTo(0.1, 1.5, 1.5),cc.moveBy(0.3,cc.v2(0,0)),cc.scaleTo(0.2, 1, 1),cc.callFunc(function(){   },this))); 
          node.getChildByName('悟性星星').runAction(cc.sequence(cc.fadeIn(0.01),cc.scaleTo(0.1, 1.5, 1.5),cc.moveBy(0.3,cc.v2(0,0)),cc.scaleTo(0.2, 1, 1),cc.callFunc(function(){   },this))); 
        }
    }

  },
  //行动--技能攻击 和 普通攻击
  playMove(node,biology,is_skill){

    //攻击动作
    var is_skill=is_skill||0
    //技能--攻击动画
    if(is_skill!=0){
      node.getChildByName('技能效果').active=true
      node.getChildByName('技能效果').opacity=255
      node.getChildByName('技能效果').runAction(cc.sequence(cc.fadeIn(0.01),cc.scaleTo(0.5, 1.1, 1.1),cc.fadeOut(0.2),cc.scaleTo(0.1, 1, 1),cc.callFunc(function(){  node.getChildByName('技能效果').active=false  },this)));
    }

    if(biology.extend=='moFa'){
      // cc.log(biology.hurt_msg)
      // cc.log(biology)
      // node.getChildByName('扣血s').color = new cc.color('#3568D5');
      // node.getChildByName('魔法s').getComponent(cc.Label).string= biology.hurt_go_value+'/'+node.moFa
      node.getChildByName('魔法s').getComponent(cc.Label).string= biology.hurt_go_value
      var progressBar = node.getChildByName('魔法').getComponent(cc.ProgressBar)
      progressBar.progress = biology.hurt_go_value / node.moFa
      progressBar.completeCount = biology.hurt_go_value;
      progressBar.totalCount = node.moFa;
      //  耗蓝为0跳过0跳过
      if(biology.hurt_msg<0){
        //扣蓝渐隐
        node.getChildByName('扣蓝s').getComponent(cc.Label).string= biology.hurt_msg
        node.getChildByName('扣蓝s').active=true
        node.getChildByName('扣蓝s').opacity=255
        node.getChildByName('扣蓝s').runAction(cc.sequence(cc.fadeIn(0.01),cc.scaleTo(0.1, 1.1, 1.3),cc.moveBy(0.5,cc.v2(0,40)),cc.fadeOut(0.1),cc.scaleTo(0.01, 1, 1),cc.moveBy(0.01,cc.v2(0,-40)),cc.callFunc(function(){  node.getChildByName('扣蓝s').active=false },this)));
      }else   if(biology.hurt_msg>0){
        //扣蓝渐隐
        node.getChildByName('加蓝s').getComponent(cc.Label).string= biology.hurt_msg
        node.getChildByName('加蓝s').active=true
        node.getChildByName('加蓝s').opacity=255
        node.getChildByName('加蓝s').runAction(cc.sequence(cc.fadeIn(0.01),cc.scaleTo(0.1, 1.1, 1.3),cc.moveBy(0.5,cc.v2(0,40)),cc.fadeOut(0.1),cc.scaleTo(0.01, 1, 1),cc.moveBy(0.01,cc.v2(0,-40)),cc.callFunc(function(){  node.getChildByName('加蓝s').active=false },this)));

      }

    }

    if(biology.extend=='shengMing'){
      //血条动作
      // node.getChildByName('生命s').getComponent(cc.Label).string= biology.hurt_go_value +'/'+ node.shengMing 
      node.getChildByName('生命s').getComponent(cc.Label).string= biology.hurt_go_value
      var progressBar = node.getChildByName('生命').getComponent(cc.ProgressBar)
      progressBar.progress = biology.hurt_go_value / node.shengMing
      progressBar.completeCount = biology.hurt_go_value;
      progressBar.totalCount = node.shengMing;
      if(biology.hurt_go>=0){
        //加血渐隐
        // node.getChildByName('加血s').color = new cc.color('FF0000');
        node.getChildByName('加血s').getComponent(cc.Label).string= biology.hurt_msg
        node.getChildByName('加血s').active=true
        node.getChildByName('加血s').opacity=255
        node.getChildByName('加血s').runAction(cc.sequence(cc.fadeIn(0.01),cc.scaleTo(0.1, 1.1, 1.3),cc.moveBy(0.5,cc.v2(0,40)),cc.fadeOut(0.1),cc.scaleTo(0.01, 1, 1),cc.moveBy(0.01,cc.v2(0,-40)),cc.callFunc(function(){  node.getChildByName('加血s').active=false },this)));
        
      }else{
      
        //扣血渐隐
        if(biology.is_baoji==1){
          //暴击样式
          node.getChildByName('暴击s').active=true
          node.getChildByName('暴击s').opacity=255
          node.getChildByName('暴击s').getComponent(cc.Label).string= '暴击'+biology.hurt_msg
          // node.getChildByName('扣血s').color = new cc.color('#FF5700');
          node.getChildByName('暴击s').runAction(cc.sequence(cc.fadeIn(0.01),cc.scaleTo(0.1, 1.1,1.5),cc.moveBy(0.5,cc.v2(0,40)),cc.fadeOut(0.1),cc.scaleTo(0.01, 1, 1),cc.moveBy(0.01,cc.v2(0,-40)),cc.callFunc(function(){  node.getChildByName('暴击s').active=false },this)));
        }else{
          //普通样式
          node.getChildByName('扣血s').active=true
          node.getChildByName('扣血s').opacity=255
          node.getChildByName('扣血s').getComponent(cc.Label).string= biology.hurt_msg
          // node.getChildByName('扣血s').color = new cc.color('#FBD800');
          node.getChildByName('扣血s').runAction(cc.sequence(cc.fadeIn(0.01),cc.scaleTo(0.1, 1.1, 1.3),cc.moveBy(0.5,cc.v2(0,40)),cc.fadeOut(0.1),cc.scaleTo(0.01, 1, 1),cc.moveBy(0.01,cc.v2(0,-40)),cc.callFunc(function(){  node.getChildByName('扣血s').active=false },this)));
        }


        //受伤动画
        node.getChildByName('受伤').active=true
        node.getChildByName('受伤').opacity=255
        node.getChildByName('受伤').runAction(cc.fadeOut(1),cc.callFunc(function(){  node.getChildByName('受伤').active=false },this));
      }
      //死亡
      if(biology.hurt_go_value==0){
        node.getChildByName('悟性').active=false
        node.getChildByName('生命').active=false
        node.getChildByName('魔法').active=false
        node.getChildByName('悟性s').active=false
        node.getChildByName('生命s').active=false
        node.getChildByName('魔法s').active=false
        node.getChildByName('魔法s').active=false
        node.getChildByName('魔法s').active=false
        node.getChildByName('生物').active=false
        node.getChildByName('悟性星星').active=false
        node.getChildByName('进化s').active=false
        // 死亡
        node.getChildByName('死亡').active=true
        // cc.loader.loadRes('biology_pic/1墓碑', function (err, texture) {  
        //   node.getChildByName('受伤').getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        // })
        if(node.is_my==0){
          //图片翻转
            node.getChildByName('生物').setScale(-1, 1);
        }
        // cc.log(biology)
        // node.getChildByName('受伤').runAction(cc.fadeIn(1),cc.callFunc(function(){  node.getChildByName('受伤').active=false },this)));
        //金币
        // node.getChildByName('金币s').getComponent(cc.Label).string= '+$'+node.jing_bi
        // node.getChildByName('金币s').active=true
        // node.getChildByName('金币s').opacity=255
        // // node.getChildByName('金币s').runAction(cc.moveBy(3,cc.v2(0,60)));
        // node.getChildByName('金币s').runAction(cc.fadeOut(3),cc.callFunc(function(){  node.getChildByName('金币s').active=false },this)));
        // // node.getChildByName('金币s').runAction(cc.moveBy(0.01,cc.v2(0,-40)));
      }
    }

    if(biology.extend=='闪避'){
      node.getChildByName('技能s').getComponent(cc.Label).string='闪避';
      node.getChildByName('技能s').active=true
      node.getChildByName('技能s').opacity=255
      // node.getChildByName('技能s').runAction(cc.moveBy(3,cc.v2(0,60)));
      // node.getChildByName('技能s').runAction(cc.sequence(cc.scaleTo(0.5, 1.1, 1.1),cc.fadeOut(0.2),cc.scaleTo(0.1, 1, 1),cc.callFunc(function(){  node.getChildByName('技能s').active=false },this)));
      node.getChildByName('技能s').runAction(cc.sequence(cc.fadeIn(0.01),cc.scaleTo(0.1, 1.1, 1.3),cc.moveBy(0.5,cc.v2(0,0)),cc.fadeOut(0.1),cc.scaleTo(0.01, 1, 1),cc.moveBy(0.01,cc.v2(0,0)),cc.callFunc(function(){  node.getChildByName('技能s').active=false },this)));

    }



  }
});
