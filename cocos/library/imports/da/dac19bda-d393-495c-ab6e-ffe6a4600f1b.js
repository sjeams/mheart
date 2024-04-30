"use strict";
cc._RF.push(module, 'dac19va05NJXKtu/+akYA8b', 'bag_zhengfaTools');
// Script/阵法/bag_zhengfaTools.js

"use strict";

var HttpHelper = require("../http");

var httpRequest = new HttpHelper();
cc.Class({
  "extends": cc.Component,
  // onLoad () {},
  //查看生物详情_弹窗
  biology_detail_alert: function biology_detail_alert(BoxPrefab, TipBoxPrefab_model) {
    this.biology_detail_info(BoxPrefab, TipBoxPrefab_model);
  },
  biology_detail_info: function biology_detail_info(BoxPrefab, TipBoxPrefab_model) {
    var biology = cc.globalData.biology;
    var zhengfa = cc.globalData.zhengfa;
    cc.loader.loadRes('/model布阵/背包生物', function (errorMessage, loadedResource_icon) {
      //开始实例化预制资源
      var TipBoxPrefab = cc.instantiate(loadedResource_icon); //技能等级
      // TipBoxPrefab.getChildByName('生物数量s').getComponent(cc.Label).string='生物('+info_list.length+'/60)'
      // 由于加载资源的操作是异步的，如果在加载完成前就绑定了事件，有可能会触发事件的自动执行。
      //修改背包标题-----弹窗的标题修改
      // TipBoxPrefab.getChildByName('标题s').getComponent(cc.Label).string=gooduse_type_name[gooduse_type].name
      // 由于加载资源的操作是异步的，如果在加载完成前就绑定了事件，有可能会触发事件的自动执行。
      // _this.biology_detail_list(TipBoxPrefab_model,TipBoxPrefab,info_list) 
      // 此处进行事件绑定
      // _this.bind_button(TipBoxPrefab_model,TipBoxPrefab)
      //生物列表挂载

      TipBoxPrefab_model.getComponent('bag_zhengfa布阵Tools').biology_buzhen_list(TipBoxPrefab_model, TipBoxPrefab, biology, zhengfa);
      TipBoxPrefab_model.getComponent('bag_zhengfa头像Tools').biology_detail_list(TipBoxPrefab_model, TipBoxPrefab, biology); //写入icon

      TipBoxPrefab_model.getChildByName('背包生物').addChild(TipBoxPrefab);
    }); // //生物详情挂载--默认加载第一个
    // TipBoxPrefab.getComponent('bag_zhengfa布阵Tools').biology_detail_alert(TipBoxPrefab)
    // //生物列表挂载
    // TipBoxPrefab.getComponent('bag_zhengfa头像Tools').biology_detail_alert(TipBoxPrefab)
    // // //技能列表挂载--默认挂载技能列表
    // tool.getComponent('biology_skillTools').biology_detail_alert(TipBoxPrefab,info[0])
    // // //信息列表挂载
    // tool.getComponent('biology_xinxiTools').biology_detail_alert(TipBoxPrefab,info[0])
    // // //缘分列表挂载
    // tool.getComponent('biology_yuanfenTools').biology_detail_alert(TipBoxPrefab,info[0])

    BoxPrefab.addChild(TipBoxPrefab_model, 1);
  }
});

cc._RF.pop();