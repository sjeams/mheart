"use strict";
cc._RF.push(module, 'c68f7bSUadFDKbT571Wtpce', 'bag_api');
// Script/背包/bag_api.js

"use strict";

// 背包的api请求接口
var HttpHelper = require("../http");

var httpRequest = new HttpHelper();
cc.Class({
  "extends": cc.Component,
  //http请求--快速请求接口
  http_update_goods: function http_update_goods(biology_id, goods_key, goodsid, is_bag) {
    //修改请求
    httpRequest.httpPost('/app/app-api/biology-goods-update', {
      biology_id: biology_id,
      goods_key: goods_key,
      goodsid: goodsid,
      is_bag: is_bag
    }, function (data) {});
  },
  //http请求--快速请求接口
  http_update_zhenfa: function http_update_zhenfa() {
    var zhenfa = http_globalData.zhenfa;
    var update_data = [];

    for (var prop in http_globalData.zhenfa) {
      var biology_id = http_globalData.zhenfa[prop];

      if (http_globalData.biology[biology_id]) {
        update_data[prop] = http_globalData.biology[biology_id].userBiologyid; //获取序号中的生物id
      } else {
        update_data[prop] = biology_id;
      }
    } //修改请求


    httpRequest.httpPost('/app/app-api/biology-zhenfa-update', {
      zhenfa: update_data
    }, function (data) {});
  }
});

cc._RF.pop();