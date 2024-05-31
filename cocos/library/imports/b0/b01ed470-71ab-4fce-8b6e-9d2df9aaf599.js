"use strict";
cc._RF.push(module, 'b01edRwcatPzotunS35qvWZ', 'common');
// Script/common.js

"use strict";

require("commonApi/http"); //引入基础http请求
// var httpRequest = new HttpHelper();


require("commonApi/bag_api"); //引入背包
// var httpBagApi = new httpBagApi();


require("commonApi/figthingExtend"); //引入战斗动作
// var getFightingExtend = new FightingExtend();
//全局变量


window.http_globalData = {
  user_info: [],
  //用户信息
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
  move_zhenfa_id: 0 //阵法id

};

cc._RF.pop();