"use strict";
cc._RF.push(module, 'b01edRwcatPzotunS35qvWZ', 'common');
// Script/common.js

"use strict";

require("./commonApi/http"); //引入基础http请求--初始化实例


require("./commonApi/bag_api"); //引入背包


require("./commonApi/figthingExtend"); //引入战斗动作


require("./commonApi/alert"); //引入弹窗样式


require("./commonApi/model"); //引入模型


require("./commonApi/asset"); //引入资源图片
//全局变量--随着数据改变


window.http_globalData = {
  progress: 0,
  //进度条百分比
  user_info: [],
  //用户信息
  jiaose: [],
  //角色基本信息
  fighting: [],
  biology: [],
  bag: [],
  gooduse: [],
  zhenfa: [],
  //临时操作存储id
  biology_id: 0,
  //生物id
  zhenfa_id: 0,
  //阵法id
  move_biology_id: 0,
  //生物id
  move_zhenfa_id: 0,
  //阵法id
  model_biology_fightingEnd: [] //战斗结果，每次都是变化的

}; //全局资源--唯一不变

window.http_globalAsset = {
  http_base_redict_sence: '',
  http_base_asset_num: 0,
  //加载的资源目录
  loading_asset: [{
    url: '图标生物',
    type: '图标生物',
    describe: '加载生物模型..'
  }, // {url:'图标装备',type:'图标装备',describe:'加载装备模型..'},
  {
    url: '图标技能',
    type: '图标技能',
    describe: '加载技能模型..'
  }, {
    url: '图标技能效果',
    type: '图标技能效果',
    describe: '加载技能效果..'
  } // {url:'图标世界',type:'图标世界',describe:'加载世界模型..'},
  ],
  // image 
  http_base_asset_biology: [],
  http_base_asset_skill: [],
  http_base_asset_xiaoguo: [],
  http_base_asset_zhuangbei: [],
  http_base_asset_word: [],
  // model
  model_biology_fightingBiology: [],
  model_biology_fightingDetail: [],
  model_biology_SkillIcon: [],
  model_biology_SkillTips: []
};

cc._RF.pop();