"use strict";
cc._RF.push(module, 'c68f7bSUadFDKbT571Wtpce', 'bag_api');
// Script/home/bag_api.js

"use strict";

// 背包的api请求接口
var HttpHelper = require("../http");

var httpRequest = new HttpHelper();
cc.Class({
  "extends": cc.Component,
  //http请求--快速请求接口
  htt_updatep_goods: function htt_updatep_goods(biology_id, goods_key, goodsid, is_bag) {
    //修改请求
    httpRequest.httpPost('/app/app-api/biology-goods-update', {
      biology_id: biology_id,
      goods_key: goods_key,
      goodsid: goodsid,
      is_bag: is_bag
    }, function (data) {});
  }
});

cc._RF.pop();