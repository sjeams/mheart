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
        info = http_globalData.biology[prop]; //1是武器
        // if(info.gooduse==gooduse_type){

        num_height = num_height + 1; // //开始实例化预制资源

        var TipBoxPrefab_icon = cc.instantiate(loadedResource_icon); // //载入技能图片

        cc.loader.loadRes(http_globalData.biology[prop].picture, cc.SpriteFrame, function (err, texture) {
          TipBoxPrefab_icon.getChildByName('P技能').getComponent(cc.Sprite).spriteFrame = texture; // TipBoxPrefab_icon.getChildByName('P移动').getComponent(cc.Sprite).spriteFrame = texture; 
          // var   biology_id = TipBoxPrefab_icon.parent.children.indexOf(TipBoxPrefab_icon); //生物id biology_id
          //拖拽

          _this.bind_button_detail(TipBoxPrefab_model, TipBoxPrefab, TipBoxPrefab_icon, false);
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

      for (var prop in http_globalData.biology) {
        var info;
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

      _this.bind_button_page(TipBoxPrefab); //写入布阵


      TipBoxPrefab_model.getComponent('bag_zhenfa布阵Tools').biology_buzhen_list(TipBoxPrefab_model, TipBoxPrefab);
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
  bind_button_detail: function bind_button_detail(TipBoxPrefab_model, TipBoxPrefab, TipBoxPrefab_icon, is_zhenfa) {
    //声明
    // var is_click =true;
    var _this = this;

    var new_prefab = TipBoxPrefab.getChildByName('生物移动');
    var isDragging = false;
    var startPos = TipBoxPrefab_icon.position; //开始位置为点击位置
    // 开始拖拽

    TipBoxPrefab_icon.on(cc.Node.EventType.TOUCH_START, function (event) {
      if (is_zhenfa) {
        //点击阵法id
        http_globalData.zhenfa_id = TipBoxPrefab_icon.parent.children.indexOf(TipBoxPrefab_icon); //阵法的序号key

        http_globalData.biology_id = http_globalData.zhenfa[http_globalData.zhenfa_id]; //点击阵法时, 生物id取阵法 里面的id
      } else {
        //点击头像id
        http_globalData.biology_id = TipBoxPrefab_icon.parent.children.indexOf(TipBoxPrefab_icon); //阵法的序号key

        http_globalData.zhenfa_id = 0;
      } //生物不存在，不能拖拽


      if (http_globalData.biology[http_globalData.biology_id]) {
        TipBoxPrefab.getChildByName('生物移动').position = startPos; // var texture =  cc.find("content/列表/content/gridLayout",TipBoxPrefab).children[biology_id].getChildByName('P技能').getComponent(cc.Sprite).spriteFrame  
        //加载头像

        cc.loader.loadRes(http_globalData.biology[http_globalData.biology_id].picture, cc.SpriteFrame, function (err, texture) {
          TipBoxPrefab.getChildByName('生物移动').getComponent(cc.Sprite).spriteFrame = texture;
        }); // 标记为正在拖拽

        isDragging = true;
      } else {
        isDragging = false;
      }
    }, this); // 拖拽中

    TipBoxPrefab_icon.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
      if (isDragging) {
        is_zhenfa = false; //拖拽超出范围，这里标记为头像拖拽
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

          if (rect.contains(point)) {
            TipBoxPrefab.getChildByName('阵法详情').children[zhenfa_id].getChildByName('生物').color = new cc.color('#3568D5');
          } else {
            TipBoxPrefab.getChildByName('阵法详情').children[zhenfa_id].getChildByName('生物').color = new cc.color('#FFFFFF');
          }
        });
      }
    }, this); // 松开

    TipBoxPrefab_icon.on(cc.Node.EventType.TOUCH_END, function (event) {
      // 松开不做任何操作
      TipBoxPrefab.getChildByName('生物移动').active = false;
      isDragging = false;
      TipBoxPrefab.getChildByName('阵法详情').children[http_globalData.zhenfa_id].getChildByName('生物').color = new cc.color('#FFFFFF'); //单击移除事件--只有点击阵法才会触发移除事件

      if (is_zhenfa) {
        cc.log('移除');

        _this.biologyClickRemove(TipBoxPrefab_model, TipBoxPrefab, TipBoxPrefab_icon);
      }
    }, this); // 取消拖拽（如触摸被系统取消时）

    TipBoxPrefab_icon.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
      // 取消
      TipBoxPrefab.getChildByName('生物移动').active = false;
      isDragging = false;

      if (http_globalData.biology_id) {
        _this.movingInt(event, TipBoxPrefab_model, TipBoxPrefab); // is_click = true;

      }

      TipBoxPrefab.getChildByName('阵法详情').children[http_globalData.zhenfa_id].getChildByName('生物').color = new cc.color('#FFFFFF');
    }, this);
  },
  // 清理事件监听
  biologyClickRemove: function biologyClickRemove(TipBoxPrefab_model, TipBoxPrefab, TipBoxPrefab_icon) {
    TipBoxPrefab_icon.getChildByName('生物').active = false;
    TipBoxPrefab_icon.getChildByName('名称s').getComponent(cc.Label).string = '';
    var zhenfa_id = TipBoxPrefab_icon.parent.children.indexOf(TipBoxPrefab_icon); //阵法的序号key

    var biology_id = http_globalData.zhenfa[zhenfa_id]; //生物id biology_id

    if (http_globalData.biology[biology_id]) {
      cc.find("content/列表/content/gridLayout", TipBoxPrefab).children[biology_id].getChildByName('P出战').active = false; //移出阵法

      http_globalData.zhenfa[zhenfa_id] = null;
      http_globalData.biology[biology_id].is_chuzhan = 0;
      TipBoxPrefab_model.getComponent('bag_zhenfaTools').biology_detail_tips(TipBoxPrefab_model, '操作成功!');
    }
  },
  //移动定位
  movingInt: function movingInt(event, TipBoxPrefab_model, TipBoxPrefab) {
    var biology_id = http_globalData.biology_id; //拖拽生物原始位置

    TipBoxPrefab.getChildByName('生物移动').position = cc.find("content/列表/content/gridLayout", TipBoxPrefab).children[biology_id].position;

    var _this = this; //已存在的阵法位置--需要移除--原始位置


    var zhenfa_index = http_globalData.zhenfa.indexOf(biology_id); //--原始位置

    var TipBoxPrefab_icon_remove = TipBoxPrefab.getChildByName('阵法详情').children[zhenfa_index];
    TipBoxPrefab.getChildByName('阵法详情').children.forEach(function (targetNode) {
      var rect = targetNode.getBoundingBox();
      var location = event.getLocation();
      var point = targetNode.parent.convertToNodeSpaceAR(location); //进入范围替换

      if (rect.contains(point)) {
        // 如果在边界矩形内，则被拖拽到了目标节点中
        var zhenfa_id = targetNode.parent.children.indexOf(targetNode); //阵法id

        var TipBoxPrefab_icon_new = TipBoxPrefab.getChildByName('阵法详情').children[zhenfa_id]; //移动到的位置

        var move_biology_id = http_globalData.zhenfa[zhenfa_id]; // 使用includes方法来判断值是否在数组内

        var isInArray = http_globalData.zhenfa.includes(biology_id); //是否在阵法中

        if (isInArray) {
          // cc.log(isInArray + ' is in the array.');
          //需要移除已存在的节点
          _this.biologyClickRemove(TipBoxPrefab_model, TipBoxPrefab, TipBoxPrefab_icon_remove); //替换操作


          if (move_biology_id != null && move_biology_id != biology_id) {
            //替换原始位置
            TipBoxPrefab_model.getComponent('bag_zhenfa布阵Tools').biology_buzhen_detail(TipBoxPrefab_model, TipBoxPrefab, TipBoxPrefab_icon_remove, move_biology_id);
            http_globalData.zhenfa[zhenfa_index] = move_biology_id;
            http_globalData.biology[move_biology_id].is_chuzhan = 1;
            cc.find("content/列表/content/gridLayout", TipBoxPrefab).children[move_biology_id].getChildByName('P出战').active = true; // TipBoxPrefab_icon_remove.getChildByName('生物').color = new cc.color('#FFFFFF')

            TipBoxPrefab.getChildByName('阵法详情').children[zhenfa_index].getChildByName('生物').color = new cc.color('#FFFFFF');
          }
        } // cc.log(http_globalData.zhenfa)
        //添加到阵法


        http_globalData.zhenfa[zhenfa_id] = biology_id;
        http_globalData.biology[biology_id].is_chuzhan = 1; // cc.log(zhenfa_index)
        // cc.log(move_biology_id)
        // cc.log(zhenfa_id)
        // cc.log(biology_id)
        // cc.log(http_globalData.zhenfa)
        //放入布阵  

        cc.find("content/列表/content/gridLayout", TipBoxPrefab).children[biology_id].getChildByName('P出战').active = true;
        TipBoxPrefab_model.getComponent('bag_zhenfa布阵Tools').biology_buzhen_detail(TipBoxPrefab_model, TipBoxPrefab, TipBoxPrefab_icon_new, biology_id); //操作提示

        TipBoxPrefab_model.getComponent('bag_zhenfaTools').biology_detail_tips(TipBoxPrefab_model, '操作成功!'); //返回未选择中状态
        // TipBoxPrefab_icon_new.getChildByName('生物').color = new cc.color('#FFFFFF')

        TipBoxPrefab.getChildByName('阵法详情').children[zhenfa_id].getChildByName('生物').color = new cc.color('#FFFFFF');
        cc.log("拖拽到了目标节点" + zhenfa_id);
      }
    });
  }
});

cc._RF.pop();