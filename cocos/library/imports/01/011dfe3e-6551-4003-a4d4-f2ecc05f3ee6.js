"use strict";
cc._RF.push(module, '011df4+ZVFAA6TU8uzAXz7m', 'bag_物品Tools');
// Script/背包/bag_物品Tools.js

"use strict";

// require("../common"); 
cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  //技能图片渲染       // gooduse_type  1武器
  biology_detail_alert: function biology_detail_alert(goodsid, gooduse_type, button_name) {
    //加载背包 和  背包列表
    // http_globalData.gooduse   //物品类型
    var info = http_globalData.bag; //物品列表

    http_globalData.goodsid = goodsid; //操作的物品id

    http_globalData.gooduse_type = gooduse_type; // 物品类型 1

    http_globalData.button_name = button_name; //按钮 按钮1
    // let gooduse_type_name = http_globalData.gooduse;
    // http_globalData.goodsid = goodsid //操作的物品id

    cc.log(http_globalData.goodsid); // cc.log(http_globalData.gooduse_type)
    // cc.log(http_globalData.button_name)
    // cc.log(http_globalData.bag)
    // //查看详情--弹出一次已装备详情

    var _this = this; // cc.loader.loadRes('/model背包/背包装备', function(errorMessage,loadedResource_icon){
    //检查资源加载
    // if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
    // if( !(loadedResource_icon instanceof cc.Prefab ) ) { cc.log( '你载入的不是预制资源!' ); return; }
    //开始实例化预制资源


    var TipBoxPrefab = cc.instantiate(http_globalAsset.model_zhuangbei_bag); //技能等级
    // TipBoxPrefab.getChildByName('生物数量s').getComponent(cc.Label).string='生物('+info_list.length+'/60)'
    // 由于加载资源的操作是异步的，如果在加载完成前就绑定了事件，有可能会触发事件的自动执行。
    //修改背包标题-----弹窗的标题修改

    TipBoxPrefab.getChildByName('标题s').getComponent(cc.Label).string = http_globalData.gooduse[gooduse_type].name; // 由于加载资源的操作是异步的，如果在加载完成前就绑定了事件，有可能会触发事件的自动执行。

    _this.biology_detail_list(TipBoxPrefab); // 此处进行事件绑定


    _this.bind_button(TipBoxPrefab, info); //写入icon


    http_globalAsset.TipBoxPrefab_model.getChildByName('左边弹窗').addChild(TipBoxPrefab); // return http_globalAsset.TipBoxPrefab_model
    // })
    // return http_globalAsset.TipBoxPrefab_model
  },
  //list渲染
  biology_detail_list: function biology_detail_list(TipBoxPrefab) {
    //获取点击物品的类型
    var _this = this;

    var TOOLS = [];
    var TOOLS = http_globalData.bag; //加载预制资源 PrefabUrl为 预制资源在 资源中的路径
    // cc.loader.loadRes('/model背包/图标背包装备', function(errorMessage,loadedResource_icon){

    var num_height = 0;

    for (var prop in TOOLS) {
      var info = TOOLS[prop]; //1是武器

      if (info.gooduse == http_globalData.gooduse_type) {
        var num_height = num_height + 1; // //开始实例化预制资源

        var TipBoxPrefab_icon = cc.instantiate(http_globalAsset.model_zhuangbei_bag_icon); // //载入技能图片

        TipBoxPrefab_icon.getChildByName('P技能').getComponent(cc.Sprite).spriteFrame = http_globalAsset.http_base_asset_zhuangbei[info.point]; // //技能等级

        TipBoxPrefab_icon.getChildByName('技能s').getComponent(cc.Label).string = info.name; // // 由于加载资源的操作是异步的，如果在加载完成前就绑定了事件，有可能会触发事件的自动执行。
        //重新挂载

        _this.bind_button_detail(TipBoxPrefab_icon, info); //隐藏已经使用的装备


        if (info.is_bag == 1) {
          TipBoxPrefab_icon.active = false;
        } //写入icon


        cc.find("列表/content/gridLayout", TipBoxPrefab).addChild(TipBoxPrefab_icon);
      }
    } // 定义content滚动条高度


    var scorllheight = cc.find("列表/content/gridLayout", TipBoxPrefab).parent; //滚动高度= 预制体100*个数+ 上下 预留10 的位置  
    //列个数--进1取整

    var line_hight = Math.ceil(num_height / 3);
    var cellHeight = cc.find("列表/content/gridLayout", TipBoxPrefab).height * 0.25 + 10;
    var height = cellHeight * line_hight;

    if (height <= 420) {
      var _height = 420;
    } //设置滚动条高度


    scorllheight.setContentSize(500, height);
    TipBoxPrefab.getChildByName('总数s').getComponent(cc.Label).string = Math.ceil(num_height / 12); // 此处进行事件绑定

    _this.bind_button_page(TipBoxPrefab); // })
    // return TipBoxPrefab

  },
  //分页
  bind_button_page: function bind_button_page(TipBoxPrefab) {
    TipBoxPrefab.getChildByName('上一页').on('click', function () {
      var new_page = TipBoxPrefab.getChildByName('页码s').getComponent(cc.Label).string;
      var new_page = parseInt(new_page);

      if (new_page > 1) {
        new_page = parseInt(new_page - 1);
        TipBoxPrefab.getChildByName('页码s').getComponent(cc.Label).string = new_page;
      } //12个一页/3   = 每页的列数4列


      var page = new_page;
      var page_size = 12 / 3;
      var cellHeight = cc.find("列表/content/gridLayout", TipBoxPrefab).height * 0.25 + 10;
      var scorll_page = cellHeight * page_size * (page - 1) + 210; // 获取ScrollBar组件
      //    var scrollView = TipBoxPrefab.getComponent(cc.ScrollView)

      cc.find("列表/content/gridLayout", TipBoxPrefab).parent.y = scorll_page; // 水平居中
    }, this);
    TipBoxPrefab.getChildByName('下一页').on('click', function () {
      var total_page = TipBoxPrefab.getChildByName('总数s').getComponent(cc.Label).string;
      var total_page = parseInt(total_page);
      var new_page = TipBoxPrefab.getChildByName('页码s').getComponent(cc.Label).string;
      var new_page = parseInt(new_page);

      if (new_page < total_page) {
        new_page = parseInt(new_page + 1);
        TipBoxPrefab.getChildByName('页码s').getComponent(cc.Label).string = new_page;
      } //12个一页/3   = 每页的列数4列


      var page = new_page;
      var page_size = 12 / 3;
      var cellHeight = cc.find("列表/content/gridLayout", TipBoxPrefab).height * 0.25 + 10;
      var scorll_page = cellHeight * page_size * (page - 1) + 210; // 获取ScrollBar组件
      //    var scrollView = TipBoxPrefab.getComponent(cc.ScrollView)

      cc.find("列表/content/gridLayout", TipBoxPrefab).parent.y = scorll_page; // 水平居中
    }, this);
  },
  //绑定点击事件--关闭遮罩
  bind_button: function bind_button(TipBoxPrefab_icon) {
    TipBoxPrefab_icon.getChildByName('遮罩').on('click', function () {
      // 事件处理逻辑
      //移除挂载
      http_globalAsset.TipBoxPrefab_model.getChildByName('左边弹窗').removeAllChildren();
    }, this);
  },
  //绑定点击事件--alert详情
  bind_button_detail: function bind_button_detail(TipBoxPrefab_icon, info) {
    //点击 弹窗详情
    TipBoxPrefab_icon.on('click', function () {
      //点击选中的物品
      http_globalAsset.TipBoxPrefab_model.getComponent('bag_详情Tools').biology_detail_alert_goods(TipBoxPrefab_icon, info);
    }, this); // 弹窗详情 //查看详情--弹出一次已装备详情--如果点击带id，并且相等，弹窗窗口 -- 

    if (http_globalData.goodsid == info.id) {
      //当前弹出的预制节点
      http_globalData.TipBoxPrefab_biology_detail = TipBoxPrefab_icon; // cc.log(goodsid)

      http_globalAsset.TipBoxPrefab_model.getComponent('bag_详情Tools').biology_detail_alert_goods(TipBoxPrefab_icon, info);
    }
  }
});

cc._RF.pop();