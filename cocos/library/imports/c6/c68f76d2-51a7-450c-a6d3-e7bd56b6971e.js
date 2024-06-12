"use strict";
cc._RF.push(module, 'c68f7bSUadFDKbT571Wtpce', 'bag_api');
// Script/commonApi/bag_api.js

"use strict";

// 背包的api请求接口
var httpBagApi = cc.Class({
  "extends": cc.Component,
  //实例化用户信息
  http_user_info: function http_user_info() {
    //修改请求--等待响应后回调
    return new Promise(function (resolve) {
      httpRequest.httpPost('/app/app-api/get-user', {}, function (data) {
        //此处可能要判断登录失效 跳转、后期处理
        http_globalData.user_info = data.data;
        resolve();
      });
    });
  },
  //实例化背包信息
  http_bag_info: function http_bag_info() {
    //获取生物列表
    return new Promise(function (resolve) {
      httpRequest.httpPost('/app/app-apinew/biology-list', {}, function (data) {
        //定义常量
        http_globalData.biology = data.data.biology; //当前弹出的预制节点--物品详情--装备-卸载

        http_globalData.TipBoxPrefab_biology_detail = null; //开启战斗

        http_globalData.bag = data.data.bag;
        http_globalData.gooduse = data.data.gooduse; //物品类型

        http_globalData.zhenfa = data.data.zhenfa.data;
        http_globalData.zhenfa_info = data.data.zhenfa.info; // 临时字段
        // http_globalData.biology_id = 0;
        // http_globalData.zhenfa_id=0;

        resolve();
      });
    });
  },
  //http请求--快速请求接口
  http_update_goods: function http_update_goods(biology_id, goods_key, goodsid, is_bag) {
    //修改请求
    return new Promise(function (resolve) {
      httpRequest.httpPost('/app/app-api/biology-goods-update', {
        biology_id: biology_id,
        goods_key: goods_key,
        goodsid: goodsid,
        is_bag: is_bag
      }, function (data) {
        resolve(data);
      });
    });
  },
  //http请求--快速请求接口
  http_update_zhenfa: function http_update_zhenfa() {
    // var zhenfa =  http_globalData.zhenfa
    return new Promise(function (resolve) {
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
      }, function (data) {
        resolve(data);
        cc.find('Canvas/弹窗').removeAllChildren();
      });
    });
  }
});
httpRequestBagApi = new httpBagApi();

cc._RF.pop();