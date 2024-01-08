"use strict";
cc._RF.push(module, '9adcftif51KeZIlmwZNZJeu', 'figthingExtend');
// Script/fighting/figthingExtend.js

"use strict";

/*
 * @Author: sjeam
 * @Date: 2024-01-08 15:33:42
 * @Description: 
 */
var FightingExtend = cc.Class({
  playAction: function playAction(node, biology) {
    if (biology.extend == 'shengMing') {
      //血条动作
      node.getChildByName('扣血s').color = new cc.color('FF0000');
      node.getChildByName('扣血s').getComponent(cc.Label).string = biology.hurt_msg;
      node.getChildByName('生命s').getComponent(cc.Label).string = biology.hurt_go_value + '/' + node.shengMing;
      var progressBar = node.getChildByName('生命').getComponent(cc.ProgressBar);
      progressBar.progress = biology.hurt_go_value / node.shengMing;
      progressBar.completeCount = biology.hurt_go_value;
      progressBar.totalCount = node.shengMing; //扣血渐隐

      node.getChildByName('扣血s').active = true;
      node.getChildByName('扣血s').opacity = 255;
      node.getChildByName('扣血s').runAction(cc.moveBy(1, cc.v2(0, 100)));
      node.getChildByName('扣血s').runAction(cc.fadeOut(1), cc.callFunc(function () {
        node.getChildByName('扣血s').active = false;
      }, this));
      node.getChildByName('扣血s').runAction(cc.moveBy(0.01, cc.v2(0, -100))); //受伤动画

      node.getChildByName('受伤').active = true;
      node.getChildByName('受伤').opacity = 255;
      node.getChildByName('受伤').runAction(cc.fadeOut(1), cc.callFunc(function () {
        node.getChildByName('受伤').active = false;
      }, this));

      if (biology.hurt_go_value == 0) {
        node.getChildByName('悟性').active = false;
        node.getChildByName('生命').active = false;
        node.getChildByName('魔法').active = false;
        node.getChildByName('悟性s').active = false;
        node.getChildByName('生命s').active = false;
        node.getChildByName('魔法s').active = false;
        node.getChildByName('生物').active = false; // node.getChildByName('扣血s').active=false 
        // node.getChildByName('扣蓝s').active=false 
        // 死亡

        node.getChildByName('死亡').active = true; // cc.loader.loadRes('biology_pic/1墓碑', function (err, texture) {  
        //   node.getChildByName('受伤').getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
        // })

        if (node.is_my == 0) {
          //图片翻转
          node.getChildByName('生物').setScale(-1, 1);
        } // cc.log(biology)
        // node.getChildByName('受伤').runAction(cc.fadeIn(1),cc.callFunc(function(){  node.getChildByName('受伤').active=false },this));
        //金币


        node.getChildByName('金币s').getComponent(cc.Label).string = '+$' + node.jing_bi;
        node.getChildByName('金币s').active = true;
        node.getChildByName('金币s').opacity = 255; // node.getChildByName('金币s').runAction(cc.moveBy(3,cc.v2(0,100)));

        node.getChildByName('金币s').runAction(cc.fadeOut(3), cc.callFunc(function () {
          node.getChildByName('金币s').active = false;
        }, this)); // node.getChildByName('金币s').runAction(cc.moveBy(0.01,cc.v2(0,-100)));
      }
    }

    if (biology.extend == 'moFa') {
      // node.getChildByName('扣血s').color = new cc.color('#3568D5');
      node.getChildByName('扣蓝s').getComponent(cc.Label).string = biology.hurt_msg;
      node.getChildByName('魔法s').getComponent(cc.Label).string = biology.hurt_go_value + '/' + node.moFa;
      var progressBar = node.getChildByName('魔法').getComponent(cc.ProgressBar);
      progressBar.progress = biology.hurt_go_value / node.moFa;
      progressBar.completeCount = biology.hurt_go_value;
      progressBar.totalCount = node.moFa; //扣蓝渐隐

      node.getChildByName('扣蓝s').active = true;
      node.getChildByName('扣蓝s').opacity = 255;
      node.getChildByName('扣蓝s').runAction(cc.moveBy(1, cc.v2(0, 100)));
      node.getChildByName('扣蓝s').runAction(cc.fadeOut(1), cc.callFunc(function () {
        node.getChildByName('扣血s').active = false;
      }, this));
      node.getChildByName('扣蓝s').runAction(cc.moveBy(0.01, cc.v2(0, -100)));
    }
  }
});
getFightingExtend = new FightingExtend();

cc._RF.pop();