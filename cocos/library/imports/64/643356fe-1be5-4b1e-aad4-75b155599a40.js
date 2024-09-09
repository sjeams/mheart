"use strict";
cc._RF.push(module, '64335b+G+VLHqrUdbFVWZpA', 'skill_iconTools');
// Script/战斗/skill_iconTools.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // onLoad () {},
  start: function start() {},
  //技能图片渲染
  biology_detail_skill: function biology_detail_skill(TipBoxPrefab, position_skill) {
    var _this2 = this;

    var _this = this;

    var TOOLS = [];
    var TOOLS = position_skill;

    var _loop = function _loop() {
      var skill = TOOLS[prop]; //开始实例化预制资源

      var TipBoxPrefab_icon = cc.instantiate(http_globalAsset.model_biology_SkillIcon); // 图标技能

      cc.log(http_globalAsset.http_base_asset_skill);
      TipBoxPrefab_icon.getChildByName('P技能').getComponent(cc.Sprite).spriteFrame = http_globalAsset.http_base_asset_skill[skill.image]; // });
      //技能等级

      TipBoxPrefab_icon.getChildByName('技能s').getComponent(cc.Label).string = skill.type; // 由于加载资源的操作是异步的，如果在加载完成前就绑定了事件，有可能会触发事件的自动执行。
      // 此处进行事件绑定

      TipBoxPrefab_icon.on('click', function () {
        // 事件处理逻辑
        _this.bindClickEventIcon(skill, TipBoxPrefab);
      }, _this2); //写入icon

      TipBoxPrefab.getChildByName('技能列表').addChild(TipBoxPrefab_icon);
    };

    for (var prop in position_skill) {
      _loop();
    }

    return TipBoxPrefab;
  },
  // 绑定按钮事件
  bindClickEventIcon: function bindClickEventIcon(skill, TipBoxPrefab) {
    //加载预制资源 PrefabUrl为 预制资源在 资源中的路径
    // 销毁所有弹窗--节点
    TipBoxPrefab.getChildByName('技能描述').removeAllChildren();
    var move_type = ['初始化', '回合化', '被击前触发', '被击后触发', '攻击前触发', '主动', '攻击后']; //开始实例化预制资源

    var tips_Prefab = cc.instantiate(http_globalAsset.model_biology_SkillTips);
    tips_Prefab.getChildByName('D技能图标').getComponent(cc.Sprite).spriteFrame = http_globalAsset.http_base_asset_skill[skill.image];
    tips_Prefab.getChildByName('D技能名称s').getComponent(cc.Label).string = skill.name + '-[' + skill.type + ']';
    tips_Prefab.getChildByName('D技能消耗s').getComponent(cc.Label).string = '消耗：' + Math.abs(skill.needValue);
    var attack = skill.attack == 0 ? '被动' : '主动';
    tips_Prefab.getChildByName('D技能类型s').getComponent(cc.Label).string = '触发: ' + attack;
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
  } // update (dt) {},

});

cc._RF.pop();