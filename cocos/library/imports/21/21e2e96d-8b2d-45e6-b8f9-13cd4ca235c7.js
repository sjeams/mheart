"use strict";
cc._RF.push(module, '21e2eltiy1F5rj5E81MojXH', 'bag_zhenfa头像Tools');
// Script/阵法/bag_zhenfa头像Tools.js

"use strict";

var HttpHelper = require("../http");

var httpRequest = new HttpHelper();
cc.Class({
  "extends": cc.Component,
  //list渲染
  biology_detail_list: function biology_detail_list(TipBoxPrefab_model, TipBoxPrefab) {
    //获取点击物品的类型
    var _this = this; //加载预制资源 PrefabUrl为 预制资源在 资源中的路径


    cc.loader.loadRes('/model布阵/图标生物', function (errorMessage, loadedResource_icon) {
      var num_height = 0;

      var _loop = function _loop() {
        var info = cc.globalData.biology[prop]; //1是武器
        // if(info.gooduse==gooduse_type){

        num_height = num_height + 1; // //开始实例化预制资源

        var TipBoxPrefab_icon = cc.instantiate(loadedResource_icon); // //载入技能图片

        var image = info.picture;
        cc.loader.loadRes(image, cc.SpriteFrame, function (err, texture) {
          if (err) {
            // cc.error(err.message || err);
            return;
          }

          TipBoxPrefab_icon.getChildByName('P技能').getComponent(cc.Sprite).spriteFrame = texture; // TipBoxPrefab_icon.getChildByName('P移动').getComponent(cc.Sprite).spriteFrame = texture; 
          //拖拽

          _this.bind_button_detail(TipBoxPrefab_model, TipBoxPrefab, TipBoxPrefab_icon, texture);
        }); // //技能等级

        TipBoxPrefab_icon.getChildByName('技能s').getComponent(cc.Label).string = info.name; // // 由于加载资源的操作是异步的，如果在加载完成前就绑定了事件，有可能会触发事件的自动执行。
        //判断是否出战

        if (info.is_chuzhan) {
          TipBoxPrefab_icon.getChildByName('P出战').active = true;
        } else {
          TipBoxPrefab_icon.getChildByName('P出战').active = false;
        } //写入icon


        cc.find("content/列表/content/gridLayout", TipBoxPrefab).addChild(TipBoxPrefab_icon);
      };

      for (var prop in cc.globalData.biology) {
        var num_height;

        _loop();
      } // }
      // 定义content滚动条高度


      var scorllheight = cc.find("content/列表/content/gridLayout", TipBoxPrefab).parent; //滚动高度= 预制体100*个数+ 上下 预留10 的位置  
      //列个数--进1取整

      var line_hight = Math.ceil(num_height / 3);
      var cellHeight = cc.find("content/列表/content/gridLayout", TipBoxPrefab).height * 0.25 + 10;
      var height = cellHeight * line_hight;

      if (height <= 420) {
        var height = 420;
      } //设置滚动条高度


      scorllheight.setContentSize(500, height);
      TipBoxPrefab.getChildByName('总数s').getComponent(cc.Label).string = Math.ceil(num_height / 12); // 此处进行事件绑定

      _this.bind_button_page(TipBoxPrefab);
    });
    return TipBoxPrefab;
  },
  //分页
  bind_button_page: function bind_button_page(TipBoxPrefab_icon) {
    TipBoxPrefab_icon.getChildByName('上一页').on('click', function () {
      var new_page = TipBoxPrefab_icon.getChildByName('页码s').getComponent(cc.Label).string;
      var new_page = parseInt(new_page);

      if (new_page > 1) {
        new_page = parseInt(new_page - 1);
        TipBoxPrefab_icon.getChildByName('页码s').getComponent(cc.Label).string = new_page;
      } //12个一页/3   = 每页的列数4列


      var page = new_page;
      var page_size = 12 / 3;
      var cellHeight = cc.find("content/列表/content/gridLayout", TipBoxPrefab_icon).height * 0.25 + 10;
      var scorll_page = cellHeight * page_size * (page - 1) + 210; // 获取ScrollBar组件
      //    var scrollView = TipBoxPrefab_icon.getComponent(cc.ScrollView)

      cc.find("content/列表/content/gridLayout", TipBoxPrefab_icon).parent.y = scorll_page; // 水平居中
    }, this);
    TipBoxPrefab_icon.getChildByName('下一页').on('click', function () {
      var total_page = TipBoxPrefab_icon.getChildByName('总数s').getComponent(cc.Label).string;
      var total_page = parseInt(total_page);
      var new_page = TipBoxPrefab_icon.getChildByName('页码s').getComponent(cc.Label).string;
      var new_page = parseInt(new_page);

      if (new_page < total_page) {
        new_page = parseInt(new_page + 1);
        TipBoxPrefab_icon.getChildByName('页码s').getComponent(cc.Label).string = new_page;
      } //12个一页/3   = 每页的列数4列


      var page = new_page;
      var page_size = 12 / 3;
      var cellHeight = cc.find("content/列表/content/gridLayout", TipBoxPrefab_icon).height * 0.25 + 10;
      var scorll_page = cellHeight * page_size * (page - 1) + 210; // 获取ScrollBar组件
      //    var scrollView = TipBoxPrefab_icon.getComponent(cc.ScrollView)

      cc.find("content/列表/content/gridLayout", TipBoxPrefab_icon).parent.y = scorll_page; // 水平居中
    }, this);
  },
  //绑定点击事件--关闭遮罩
  // bind_button(TipBoxPrefab_model,TipBoxPrefab_icon){
  //     TipBoxPrefab_icon.getChildByName('遮罩').on('click', function () {
  //         // 事件处理逻辑
  //         //移除挂载
  //         TipBoxPrefab_model.getChildByName('左边弹窗').removeAllChildren();
  //     }, this);
  // },
  //绑定点击事件--alert详情
  bind_button_detail: function bind_button_detail(TipBoxPrefab_model, TipBoxPrefab, TipBoxPrefab_icon, texture) {
    var _this = this;

    var new_prefab = TipBoxPrefab.getChildByName('生物移动');
    var isDragging = false;
    var startPos = TipBoxPrefab_icon.position; // 关闭多点触摸
    // cc.macro.ENABLE_MULTI_TOUCH = false;
    // 开始拖拽

    TipBoxPrefab_icon.on(cc.Node.EventType.TOUCH_START, function (event) {
      // new_prefab.position = startPos;
      TipBoxPrefab.getChildByName('生物移动').position = startPos;
      TipBoxPrefab.getChildByName('生物移动').getComponent(cc.Sprite).spriteFrame = texture; // 标记为正在拖拽

      isDragging = true;
    }, TipBoxPrefab_icon); // 拖拽中

    TipBoxPrefab_icon.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
      if (isDragging) {
        // var delta = event.touch.getDelta();
        // new_prefab.x += delta.x
        // new_prefab.y += delta.y
        var location = event.getLocation();
        new_prefab.position = new_prefab.parent.convertToNodeSpaceAR(location); // 确定位置

        TipBoxPrefab.getChildByName('生物移动').active = true;
        TipBoxPrefab.getChildByName('阵法详情').children.forEach(function (targetNode) {
          var rect = targetNode.getBoundingBox();
          var location = event.getLocation();
          var point = targetNode.parent.convertToNodeSpaceAR(location);
          var zhenfa_id = targetNode.parent.children.indexOf(targetNode); //阵法id

          var TipBoxPrefab_icon_new = TipBoxPrefab.getChildByName('阵法详情').children[zhenfa_id];

          if (rect.contains(point)) {
            TipBoxPrefab_icon_new.getChildByName('生物').color = new cc.color('#3568D5');
          } else {
            TipBoxPrefab_icon_new.getChildByName('生物').color = new cc.color('#FFFFFF');
          }
        });
      }
    }, TipBoxPrefab_icon); // 松开

    TipBoxPrefab_icon.on(cc.Node.EventType.TOUCH_END, function (event) {
      TipBoxPrefab.getChildByName('生物移动').active = false; // 松开

      isDragging = false; // 松开不做任何操作
    }, TipBoxPrefab_icon); // 取消拖拽（如触摸被系统取消时）

    TipBoxPrefab_icon.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
      // 取消
      _this.movingInt(event, TipBoxPrefab_model, TipBoxPrefab, TipBoxPrefab_icon);

      TipBoxPrefab.getChildByName('生物移动').active = false;
      new_prefab.position = startPos;
      isDragging = false;
    }, TipBoxPrefab_icon);
  },
  //移动定位
  movingInt: function movingInt(event, TipBoxPrefab_model, TipBoxPrefab, TipBoxPrefab_icon) {
    var _this = this;

    TipBoxPrefab.getChildByName('阵法详情').children.forEach(function (targetNode) {
      var rect = targetNode.getBoundingBox();
      var location = event.getLocation();
      var point = targetNode.parent.convertToNodeSpaceAR(location); //进入范围替换

      if (rect.contains(point)) {
        // 如果在边界矩形内，则被拖拽到了目标节点中
        var biology_id = TipBoxPrefab_icon.parent.children.indexOf(TipBoxPrefab_icon); //生物id biology_id

        var zhenfa_id = targetNode.parent.children.indexOf(targetNode); //阵法id

        var TipBoxPrefab_icon_new = TipBoxPrefab.getChildByName('阵法详情').children[zhenfa_id]; // 使用includes方法来判断值是否在数组内

        var isInArray = cc.globalData.zhenfa.includes(biology_id); //是否在阵法中

        if (isInArray) {
          //已存在的阵法位置--需要移除
          var zhenfa_index = cc.globalData.zhenfa.indexOf(biology_id);
          var TipBoxPrefab_icon_remove = TipBoxPrefab.getChildByName('阵法详情').children[zhenfa_index]; // cc.log(isInArray + ' is in the array.');
          //需要移除已存在的节点

          TipBoxPrefab_model.getComponent('bag_zhenfa布阵Tools').biologyClickRemove(TipBoxPrefab_model, TipBoxPrefab_icon_remove);
        } else {} // cc.log(isInArray + ' is not in the array.');
        // 直接添加
        //添加到阵法


        cc.globalData.zhenfa[zhenfa_id] = biology_id;
        cc.globalData.biology[biology_id].is_chuzhan = 1; //操作提示

        TipBoxPrefab_model.getComponent('bag_zhenfaTools').biology_detail_tips(TipBoxPrefab_model, '操作成功!'); //放入布阵  

        TipBoxPrefab_model.getComponent('bag_zhenfa布阵Tools').biology_buzhen_detail(TipBoxPrefab_model, TipBoxPrefab, TipBoxPrefab_icon_new, zhenfa_id); //返回未选择中状态

        TipBoxPrefab_icon_new.getChildByName('生物').color = new cc.color('#FFFFFF');
        cc.log("拖拽到了目标节点" + zhenfa_id);
      }
    });
  }
});

cc._RF.pop();