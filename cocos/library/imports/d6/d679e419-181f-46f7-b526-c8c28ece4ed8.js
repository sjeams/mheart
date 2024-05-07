"use strict";
cc._RF.push(module, 'd679eQZGB9G97UmyMKOzk7Y', 'bag_详情按钮Tools');
// Script/背包/bag_详情按钮Tools.js

"use strict";

var HttpHelper = require("../http");

var httpRequest = new HttpHelper();
cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  //定义按钮事件类型 is_bag  0卸下 1装备
  biology_init: function biology_init(TipBoxPrefab_model, TipBoxPrefab_icon, goodsid, button_name, is_bag) {
    //加载背包 和  背包列表
    var biology_id = http_globalData.biology[http_globalData.biology_id].id;

    switch (button_name) {
      case "装备1":
        var goods_key = 'gooduse1';
        TipBoxPrefab_model.getComponent('bag_api').htt_updatep_goods(biology_id, goods_key, goodsid, is_bag); //1装备  0卸下

        this.goods_update(TipBoxPrefab_model, TipBoxPrefab_icon, button_name, goodsid, goods_key, is_bag);
        break;

      case "装备2":
        var goods_key = 'gooduse2';
        TipBoxPrefab_model.getComponent('bag_api').htt_updatep_goods(biology_id, goods_key, goodsid, is_bag);
        this.goods_update(TipBoxPrefab_model, TipBoxPrefab_icon, button_name, goodsid, goods_key, is_bag);
        break;

      case "元神":
        var goods_key = 'yuanShen';
        TipBoxPrefab_model.getComponent('bag_api').htt_updatep_goods(biology_id, goods_key, goodsid, is_bag);
        this.goods_update(TipBoxPrefab_model, TipBoxPrefab_icon, button_name, goodsid, goods_key, is_bag);
        break;

      default:
    } // TipBoxPrefab_model.getChildByName('生物详情').removeAllChildren();
    //重新挂载info
    // TipBoxPrefab_model.getComponent('biology_infoTools').biology_detail_alert(TipBoxPrefab_model,http_globalData.biology[goodsid])

  },
  goods_update: function goods_update(TipBoxPrefab_model, TipBoxPrefab_icon, button_name, goodsid, goods_key, is_bag) {
    if (is_bag == 1) {
      this.zhuangbe_up(TipBoxPrefab_model, TipBoxPrefab_icon, button_name, goodsid, goods_key);
    } else {
      this.zhuangbei_down(TipBoxPrefab_model, TipBoxPrefab_icon, button_name, goodsid, goods_key);
    }
  },
  //图标回填
  biology_icon: function biology_icon(TipBoxPrefab_biology, goodsid) {
    if (goodsid) {
      var goods_image = http_globalData.bag[goodsid].point;
      cc.loader.loadRes(goods_image, cc.SpriteFrame, function (err, texture) {
        if (err) {
          // cc.error(err.message || err);
          return;
        }

        TipBoxPrefab_biology.getComponent(cc.Sprite).spriteFrame = texture;
      });
    } else {
      TipBoxPrefab_biology.getComponent(cc.Sprite).spriteFrame = '';
    }
  },
  //移除预制节点--选中的节点
  TipBoxPrefab_biology_detail_shown: function TipBoxPrefab_biology_detail_shown() {
    if (http_globalData.TipBoxPrefab_biology_detail) {
      http_globalData.TipBoxPrefab_biology_detail.active = true;
    }
  },
  //隐藏
  TipBoxPrefab_biology_detail_hidden: function TipBoxPrefab_biology_detail_hidden() {
    http_globalData.TipBoxPrefab_biology_detail = null;
  },
  //选中节点
  TipBoxPrefab_biology_detail_make: function TipBoxPrefab_biology_detail_make(TipBoxPrefab_icon) {
    http_globalData.TipBoxPrefab_biology_detail = TipBoxPrefab_icon;
  },
  zhuangbei_down: function zhuangbei_down(TipBoxPrefab_model, TipBoxPrefab_icon, button_name, goodsid, goods_key) {
    //移除预制节点
    this.TipBoxPrefab_biology_detail_hidden(); // 移除装备栏--返回背包

    http_globalData.bag[goodsid].is_bag = 0;
    TipBoxPrefab_icon.active = true; //背包显示

    http_globalData.biology[http_globalData.biology_id][goods_key] = null; //装备栏不显示
    //icon显示     

    var TipBoxPrefab_biology = cc.find("生物详情/biology_end/" + button_name, TipBoxPrefab_model);
    this.biology_icon(TipBoxPrefab_biology, null);
  },
  zhuangbe_up: function zhuangbe_up(TipBoxPrefab_model, TipBoxPrefab_icon, button_name, goodsid, goods_key) {
    // 添加到装备栏--移出背包
    //如果原来装备栏有--装备，难么要返回背包
    if (http_globalData.biology[http_globalData.biology_id][goods_key]) {
      //返回背包
      http_globalData.bag[http_globalData.biology[http_globalData.biology_id][goods_key]].is_bag = 0;
      this.TipBoxPrefab_biology_detail_shown();
    } else {
      this.TipBoxPrefab_biology_detail_make(TipBoxPrefab_icon);
    } //隐藏当前物品


    http_globalData.bag[goodsid].is_bag = 1;
    TipBoxPrefab_icon.active = false;
    http_globalData.biology[http_globalData.biology_id][goods_key] = goodsid; //info icon显示

    var TipBoxPrefab_biology = cc.find("生物详情/biology_end/" + button_name, TipBoxPrefab_model);
    this.biology_icon(TipBoxPrefab_biology, goodsid);
  } // zhuangbei2_down(TipBoxPrefab_model,TipBoxPrefab_icon,button_name,goodsid){
  //     //移除预制节点
  //     this.TipBoxPrefab_biology_detail_hidden()
  //     // 移除装备栏--返回背包
  //     http_globalData.bag[goodsid].is_bag=0;
  //     TipBoxPrefab_icon.active=true //背包显示
  //     http_globalData.biology[http_globalData.biology_id].gooduse2=null; //装备栏不显示
  //     //icon显示
  //     let TipBoxPrefab_biology = cc.find("生物详情/biology_end/"+button_name,TipBoxPrefab_model)
  //     this.biology_icon(TipBoxPrefab_biology,null)
  // },
  // zhuangbe2_up(TipBoxPrefab_model,TipBoxPrefab_icon,button_name,goodsid){
  //     // 添加到装备栏--移出背包
  //     //如果原来装备栏有--装备，难么要返回背包
  //     if(http_globalData.biology[http_globalData.biology_id].gooduse2){
  //         //返回背包
  //         http_globalData.bag[http_globalData.biology[http_globalData.biology_id].gooduse2].is_bag=0;
  //         this.TipBoxPrefab_biology_detail_shown()
  //     }else{
  //         this.TipBoxPrefab_biology_detail_make(TipBoxPrefab_icon)
  //     }
  //     http_globalData.bag[goodsid].is_bag=1;
  //     TipBoxPrefab_icon.active=false
  //     http_globalData.biology[http_globalData.biology_id].gooduse2=goodsid;
  //     //icon显示
  //     let TipBoxPrefab_biology = cc.find("生物详情/biology_end/"+button_name,TipBoxPrefab_model)
  //     this.biology_icon(TipBoxPrefab_biology,goodsid)
  // },
  // yuanshen_down(TipBoxPrefab_model,TipBoxPrefab_icon,button_name,goodsid){
  //     //移除预制节点
  //     this.TipBoxPrefab_biology_detail_hidden()
  //     // 移除装备栏--返回背包
  //     http_globalData.bag[goodsid].is_bag=0;
  //     TipBoxPrefab_icon.active=true //背包显示
  //     http_globalData.biology[http_globalData.biology_id].yuanShen=null; //装备栏不显示
  //     //icon显示
  //     let TipBoxPrefab_biology = cc.find("生物详情/biology_end/"+button_name,TipBoxPrefab_model)
  //     this.biology_icon(TipBoxPrefab_biology,null)
  // },
  // yuansehn_up(TipBoxPrefab_model,TipBoxPrefab_icon,button_name,goodsid){
  //     // 添加到装备栏--移出背包
  //     //如果原来装备栏有--装备，难么要返回背包
  //     if(http_globalData.biology[http_globalData.biology_id].yuanShen){
  //         //返回背包
  //         http_globalData.bag[http_globalData.biology[http_globalData.biology_id].yuanShen].is_bag=0;
  //         this.TipBoxPrefab_biology_detail_shown()
  //     }else{
  //         this.TipBoxPrefab_biology_detail_make(TipBoxPrefab_icon)
  //     }
  //     http_globalData.bag[goodsid].is_bag=1;
  //     TipBoxPrefab_icon.active=false
  //     http_globalData.biology[http_globalData.biology_id].yuanShen=goodsid;
  //     //icon显示
  //     let TipBoxPrefab_biology = cc.find("生物详情/biology_end/"+button_name,TipBoxPrefab_model)
  //     this.biology_icon(TipBoxPrefab_biology,goodsid)
  // },
  //  //技能图片渲染  is_use  0卸下  1使用
  //  biology_detail_alert(TipBoxPrefab_model,info,gooduse_type,is_use){
  //     //加载背包 和  背包列表
  //     let bag_list = http_globalData.bag
  //     let gooduse_list = http_globalData.gooduse;
  //     cc.log(gooduse_list)
  //     // gooduse_type  1武器  详情类型必传，不然无法区分类型
  //     var _this=this;
  //     cc.loader.loadRes('/model背包/背包装备详情', function(errorMessage,loadedResource_icon){
  //         //检查资源加载
  //         if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
  //         if( !(loadedResource_icon instanceof cc.Prefab ) ) { cc.log( '你载入的不是预制资源!' ); return; }
  //         //开始实例化预制资源
  //         let   TipBoxPrefab =  cc.instantiate(loadedResource_icon);
  //         //按钮
  //         if(is_use==1){
  //             TipBoxPrefab.getChildByName('卸下s').getComponent(cc.Label).string=gooduse_list[gooduse_type].button_name
  //         }
  //         //技能等级
  //         // TipBoxPrefab.getChildByName('生物数量s').getComponent(cc.Label).string='生物('+info_list.length+'/60)'
  //         // 由于加载资源的操作是异步的，如果在加载完成前就绑定了事件，有可能会触发事件的自动执行。
  //         // 由于加载资源的操作是异步的，如果在加载完成前就绑定了事件，有可能会触发事件的自动执行。
  //         //渲染详情
  //         _this.biology_detail_list(TipBoxPrefab,info,gooduse_type)
  //            // 此处进行事件绑定
  //         _this.bind_button(TipBoxPrefab_model,TipBoxPrefab,info)
  //         //写入icon
  //         TipBoxPrefab_model.getChildByName('中间弹窗').addChild(TipBoxPrefab);
  //         return TipBoxPrefab_model
  //     })
  //     return TipBoxPrefab_model
  // },
  // //绑定点击事件--关闭遮罩
  // bind_button(TipBoxPrefab_model,TipBoxPrefab,info){
  //     TipBoxPrefab.getChildByName('遮罩').on('click', function () {
  //         // 事件处理逻辑
  //         //移除挂载
  //         TipBoxPrefab_model.getChildByName('中间弹窗').removeAllChildren();
  //         //重新挂载
  //         // TipBoxPrefab_model.getComponent('biology_skillTools').biology_detail_alert(TipBoxPrefab_model,info)
  //     }, this);
  //     //物品使用事件
  //     TipBoxPrefab.getChildByName('卸下').on('click', function () {
  //         cc.log('卸下')
  //         // 事件处理逻辑
  //         //移除挂载
  //         TipBoxPrefab_model.getChildByName('中间弹窗').removeAllChildren();
  //         //重新挂载--按钮事件类型
  //         // TipBoxPrefab_model.getComponent('biology_skillTools').biology_detail_alert(TipBoxPrefab_model,info)
  //     }, this);
  // },
  // biology_detail_list(TipBoxPrefab,info,gooduse_type){
  //     let image = info.point;
  //     cc.loader.loadRes(image, cc.SpriteFrame, function (err, texture) { 
  //         if (err) {
  //             // cc.error(err.message || err);
  //             return;
  //         }
  //         TipBoxPrefab.getChildByName('P技能').getComponent(cc.Sprite).spriteFrame = texture; 
  //     });
  //     TipBoxPrefab.getChildByName('名称s').getComponent(cc.Label).string=info.name
  //     TipBoxPrefab.getChildByName('名称s').color = new cc.color(info.nature_color);
  //     TipBoxPrefab.getChildByName('介绍s').getComponent(cc.Label).string=info.describe
  //     // (白 绿 蓝 紫 金 红 橙) 鬼仙神（彩）
  //     TipBoxPrefab.getChildByName('评分s').getComponent(cc.Label).string=info.nature_grade
  //     TipBoxPrefab.getChildByName('属性s').getComponent(cc.Label).string=info.nature
  // },

});

cc._RF.pop();