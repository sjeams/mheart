"use strict";
cc._RF.push(module, '21e2eltiy1F5rj5E81MojXH', 'bag_zhenfa头像Tools');
// Script/阵法/bag_zhenfa头像Tools.js

"use strict";

require("../common");

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
  bind_button_detail: function bind_button_detail(TipBoxPrefab_model, TipBoxPrefab, TipBoxPrefab_icon, is_zhenfa_state) {
    //声明
    // var is_click =true;
    var _this = this;

    var new_prefab = TipBoxPrefab.getChildByName('生物移动');
    var isDragging = false;
    var startPos = TipBoxPrefab_icon.position; //开始位置为点击位置
    // 开始拖拽

    TipBoxPrefab_icon.on(cc.Node.EventType.TOUCH_START, function (event) {
      http_globalData.is_zhenfa = is_zhenfa_state; //重新赋值点击事件，不然会冲突

      if (http_globalData.is_zhenfa) {
        http_globalData.is_zhenfa_chaochu = true; //点击阵法id

        http_globalData.zhenfa_id = TipBoxPrefab_icon.parent.children.indexOf(TipBoxPrefab_icon); //阵法的序号key

        http_globalData.biology_id = http_globalData.zhenfa[http_globalData.zhenfa_id]; //点击阵法时, 生物id取阵法 里面的id
      } else {
        http_globalData.is_zhenfa_chaochu = false; //点击头像id
        // http_globalData.zhenfa_id = null;
        // 检查阵法是否存在生物id

        http_globalData.biology_id = TipBoxPrefab_icon.parent.children.indexOf(TipBoxPrefab_icon); //阵法的序号key

        if (http_globalData.zhenfa.includes(http_globalData.biology_id)) {
          http_globalData.zhenfa_id = http_globalData.zhenfa.indexOf(http_globalData.biology_id); //--原始位置
        } else {
          http_globalData.zhenfa_id = null;
        }
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
        http_globalData.is_zhenfa_chaochu = false; //拖拽超出范围，这里标记为头像拖拽
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

          if (rect.contains(point)) {
            http_globalData.move_zhenfa_id = targetNode.parent.children.indexOf(targetNode); //移动阵法id
            // http_globalData.move_biology_id = http_globalData.zhenfa[http_globalData.move_zhenfa_id]  //点击阵法时, 生物id取阵法 里面的id

            TipBoxPrefab.getChildByName('阵法详情').children[http_globalData.move_zhenfa_id].getChildByName('生物').color = new cc.color('#3568D5');
          } else {
            TipBoxPrefab.getChildByName('阵法详情').children[http_globalData.move_zhenfa_id].getChildByName('生物').color = new cc.color('#FFFFFF');
          }
        });
      }
    }, this); // 松开

    TipBoxPrefab_icon.on(cc.Node.EventType.TOUCH_END, function (event) {
      //拖拽头像， 阵法id 为null 
      if (isDragging) {
        //单击移除事件--只有点击阵法才会触发移除事件
        if (http_globalData.is_zhenfa) {
          //超出范围
          if (http_globalData.is_zhenfa_chaochu) {
            _this.biologyClickRemove(TipBoxPrefab_model, TipBoxPrefab);

            TipBoxPrefab_model.getComponent('bag_zhenfaTools').biology_detail_tips(TipBoxPrefab_model, '操作成功!');
            cc.log('移除');
          } else {
            cc.log('无');
          } // cc.log('点击阵法')

        } else {
          cc.log('点击头像'); //绑定按钮事件
          // _this.bindClickEventIcon(TipBoxPrefab_model,TipBoxPrefab_icon);
        }
      } // 松开不做任何操作


      TipBoxPrefab.getChildByName('生物移动').active = false;
      isDragging = false;
    }, this); // 取消拖拽（如触摸被系统取消时）

    TipBoxPrefab_icon.on(cc.Node.EventType.TOUCH_CANCEL, function (event) {
      if (isDragging) {
        if (http_globalData.biology_id != null) {
          _this.movingInt(event, TipBoxPrefab_model, TipBoxPrefab);
        } //移入颜色修改


        TipBoxPrefab.getChildByName('阵法详情').children[http_globalData.move_zhenfa_id].getChildByName('生物').color = new cc.color('#FFFFFF');
      } // 取消


      TipBoxPrefab.getChildByName('生物移动').active = false;
      isDragging = false;
    }, this);
  },
  // 绑定按钮事件---挂载生物详情
  bindClickEventIcon: function bindClickEventIcon(TipBoxPrefab_model, TipBoxPrefab_icon) {
    // 由于加载资源的操作是异步的，如果在加载完成前就绑定了事件，有可能会触发事件的自动执行。
    // 此处进行事件绑定
    TipBoxPrefab_icon.on('click', function () {
      //当前选中的生物序号 index---定义全局变量
      http_globalData.biology_id = TipBoxPrefab_icon.parent.children.indexOf(TipBoxPrefab_icon); // 事件处理逻辑
      //移除挂载

      TipBoxPrefab_model.getChildByName('生物详情').removeAllChildren(); //重新挂载

      TipBoxPrefab_model.getComponent('bag_详情Tools').biology_detail_alert(TipBoxPrefab_model); // 切换默认挂载信息列表
      // TipBoxPrefab_model.getComponent('biology_skillTools').biology_detail_alert(TipBoxPrefab_model,info)
      // TipBoxPrefab_model.getComponent('biology_xinxiTools').biology_detail_alert(TipBoxPrefab_model,info)
      // TipBoxPrefab_model.getComponent('biology_yuanfenTools').biology_detail_alert(TipBoxPrefab_model,info)
      // _this.bindClickEventIcon(TipBoxPrefab_icon.getComponent(cc.Button),info,TipBoxPrefab_model);
    }, this);
  },
  //移动定位
  movingInt: function movingInt(event, TipBoxPrefab_model, TipBoxPrefab) {
    var _this = this; //-原始位置
    //移动图标，放回头像位置


    TipBoxPrefab.getChildByName('生物移动').position = cc.find("content/列表/content/gridLayout", TipBoxPrefab).children[http_globalData.biology_id].position; //已存在的阵法位置--需要移除--原始位置
    //需要移除已存在的节点

    TipBoxPrefab.getChildByName('阵法详情').children.forEach(function (targetNode) {
      var rect = targetNode.getBoundingBox();
      var location = event.getLocation();
      var point = targetNode.parent.convertToNodeSpaceAR(location); //进入范围替换

      if (rect.contains(point)) {
        // 如果在边界矩形内，则被拖拽到了目标节点中
        http_globalData.move_zhenfa_id = targetNode.parent.children.indexOf(targetNode); //移动阵法id

        http_globalData.move_biology_id = http_globalData.zhenfa[http_globalData.move_zhenfa_id]; //点击阵法时, 生物id取阵法 里面的id
        // 使用includes方法来判断值是否在数组内

        var TipBoxPrefab_icon_move = TipBoxPrefab.getChildByName('阵法详情').children[http_globalData.zhenfa_id]; //拖动的起始位置--先删除和添加移动的

        var TipBoxPrefab_icon_new = TipBoxPrefab.getChildByName('阵法详情').children[http_globalData.move_zhenfa_id]; //落下的位置
        //替换原始位置
        // _this.biologyClickChange(TipBoxPrefab_model,TipBoxPrefab,TipBoxPrefab_icon_move,TipBoxPrefab_icon_new,true) //拖动的对象
        //替换操作--如果不是移动的同一个生物，生物存在，那么要替换--判断有没有阵法id ，没有就是拖拽头像，有就是拖拽阵法

        _this.move_biologyClickRemove(TipBoxPrefab_model, TipBoxPrefab); //删除替换


        _this.biologyClickRemove(TipBoxPrefab_model, TipBoxPrefab); //删除移动


        _this.biologyClickAdd(TipBoxPrefab_model, TipBoxPrefab, TipBoxPrefab_icon_new, http_globalData.move_zhenfa_id, http_globalData.biology_id); //拖动的对象--写入
        //写入拖动对象--如果已经存在，就替换--落下的地方有生物id才进行替换--并且拖动在阵法位置，才能写入
        // if (http_globalData.move_biology_id) {
        //如果是同一个位置--替换，不加不减


        _this.biologyClickAdd(TipBoxPrefab_model, TipBoxPrefab, TipBoxPrefab_icon_move, http_globalData.zhenfa_id, http_globalData.move_biology_id); //替换的对象--替换
        // }
        //操作提示
        // TipBoxPrefab_model.getComponent('bag_zhenfaTools').biology_detail_tips(TipBoxPrefab_model,'操作成功!')

      }
    });
  },
  //放入布阵
  biologyClickAdd: function biologyClickAdd(TipBoxPrefab_model, TipBoxPrefab, TipBoxPrefab_icon, zhenfa_id, biology_id) {
    //阵法对象编号不能为false， 没有阵法编号，怎么添加？
    if (TipBoxPrefab_icon) {
      if (http_globalData.biology[biology_id]) {
        if (parseInt(http_globalData.zhenfa_info.num + 1) > 5) {
          //操作提示
          TipBoxPrefab_model.getComponent('bag_zhenfaTools').biology_detail_tips(TipBoxPrefab_model, '上阵数不能大于5!');
          return false;
        } //如果阵法上没有这生物，那么加1


        http_globalData.zhenfa_info.num = parseInt(http_globalData.zhenfa_info.num + 1);
        TipBoxPrefab.getChildByName('上阵数s').getComponent(cc.Label).string = http_globalData.zhenfa_info.num;
        TipBoxPrefab_model.getComponent('bag_zhenfa布阵Tools').biology_buzhen_detail(TipBoxPrefab_model, TipBoxPrefab, TipBoxPrefab_icon, biology_id);
        cc.find("content/列表/content/gridLayout", TipBoxPrefab).children[biology_id].getChildByName('P出战').active = true;
        http_globalData.zhenfa[zhenfa_id] = biology_id;
        http_globalData.biology[biology_id].is_chuzhan = 1;
        TipBoxPrefab_model.getComponent('bag_zhenfaTools').biology_detail_tips(TipBoxPrefab_model, '操作成功!');
      }
    }
  },
  // 移除布阵
  biologyClickRemove: function biologyClickRemove(TipBoxPrefab_model, TipBoxPrefab) {
    //如果阵容已存在，就获取阵容id，并且移除
    var biology_id = http_globalData.biology_id;
    var zhenfa_id = http_globalData.zhenfa_id;

    if (http_globalData.zhenfa.includes(biology_id) || http_globalData.zhenfa_id == null) {
      if (http_globalData.biology[biology_id]) {
        //阵法中是有这个生物的
        if (http_globalData.zhenfa.includes(biology_id)) {
          http_globalData.zhenfa_info.num = parseInt(http_globalData.zhenfa_info.num - 1);
          TipBoxPrefab.getChildByName('上阵数s').getComponent(cc.Label).string = http_globalData.zhenfa_info.num;
          cc.find("content/列表/content/gridLayout", TipBoxPrefab).children[biology_id].getChildByName('P出战').active = false;
          http_globalData.biology[biology_id].is_chuzhan = 0;
        }

        if (zhenfa_id != null) {
          TipBoxPrefab.getChildByName('阵法详情').children[zhenfa_id].getChildByName('生物').active = false;
          TipBoxPrefab.getChildByName('阵法详情').children[zhenfa_id].getChildByName('名称s').getComponent(cc.Label).string = '';
          http_globalData.zhenfa[zhenfa_id] = null;
          TipBoxPrefab.getChildByName('阵法详情').children[zhenfa_id].getChildByName('生物').color = new cc.color('#FFFFFF');
        }
      }
    }
  },
  // 移除布阵
  move_biologyClickRemove: function move_biologyClickRemove(TipBoxPrefab_model, TipBoxPrefab) {
    //如果阵容已存在，就获取阵容id，并且移除
    var biology_id = http_globalData.move_biology_id;
    var zhenfa_id = http_globalData.move_zhenfa_id;

    if (http_globalData.zhenfa.includes(biology_id) || http_globalData.zhenfa_id == null) {
      if (http_globalData.biology[biology_id]) {
        //阵法中是有这个生物的
        if (http_globalData.zhenfa.includes(biology_id)) {
          http_globalData.zhenfa_info.num = parseInt(http_globalData.zhenfa_info.num - 1);
          TipBoxPrefab.getChildByName('上阵数s').getComponent(cc.Label).string = http_globalData.zhenfa_info.num;
          cc.find("content/列表/content/gridLayout", TipBoxPrefab).children[biology_id].getChildByName('P出战').active = false;
          http_globalData.biology[biology_id].is_chuzhan = 0;
        }

        if (zhenfa_id != null) {
          TipBoxPrefab.getChildByName('阵法详情').children[zhenfa_id].getChildByName('生物').active = false;
          TipBoxPrefab.getChildByName('阵法详情').children[zhenfa_id].getChildByName('名称s').getComponent(cc.Label).string = '';
          http_globalData.zhenfa[zhenfa_id] = null;
          TipBoxPrefab.getChildByName('阵法详情').children[zhenfa_id].getChildByName('生物').color = new cc.color('#FFFFFF');
        }
      }
    }
  }
});

cc._RF.pop();