"use strict";
cc._RF.push(module, '09d9e7+vGZLdKg/PEEJJ/Uq', 'map_score');
// Script/scence/map_score.js

"use strict";

var HttpHelper = require("../http");

var httpRequest = new HttpHelper();
cc.Class({
  "extends": cc.Component,
  properties: {// content: cc.Node,
    // // person: cc.Prefab,
    // // home: cc.Node,
    // // reload: cc.Node,
    // //列表
    // test_scrollView: {
    //   default: null,
    //   type: cc.ScrollView
    // },
    // //翻页容器
    // test_pageView: {
    //   default: null,
    //   type: cc.PageView
    // },
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    // for (let i = 0; i < 10; i++) {
    //     let person = cc.instantiate(this.person);
    //     this.conten=person
    //     // person.parent = this.content;
    //     // this.addTouchEvent(person);  //添加触摸事件
    //   }
    // this.value_set = [];
    // // 如果你这里是排行榜，那么你就push排行榜的数据;
    // for(var i = 1; i <= 100; i ++) {
    //     this.value_set.push(i);
    // }
    // this.content = this.scroll_view.content;
    // this.opt_item_set = [];
    // for(var i = 0; i < this.PAGE_NUM * 3; i ++) {
    //     var item = cc.instantiate(this.item_prefab);
    //     this.content.addChild(item);
    //     this.opt_item_set.push(item);
    // }
    this.spawnTools(); // this.scroll_view.node.on("scroll-ended", this.on_scroll_ended.bind(this), this);
  },
  spawnTools: function spawnTools() {
    var _this = this;

    httpRequest.httpPost('/app/app-apiword/index', {}, function (data) {
      // _this.addMapPic(data) //生成地图
      if (!data.data) {
        //刷新地图
        // httpRequest.playGame(httpRequest.urlConfig("sence_ditu"));
        _this.reloadWord(); //刷新世界地图

      } else {
        //生成世界
        // let cellWidth = cc.find('Canvas/战斗/content').width * 0.105;
        // let cellHeight = cc.find('Canvas/战斗/content').height * 0.215;
        // let spacingX = cc.find('Canvas/战斗/content').width * 0.022;
        // let spacingY = cc.find('Canvas/战斗/content').height * 0.045;
        // cc.find('Canvas/战斗/content').getComponent(cc.Layout).cellSize.width = cellWidth;
        // cc.find('Canvas/战斗/content').getComponent(cc.Layout).cellSize.height = cellHeight;
        // cc.find('Canvas/战斗/content').getComponent(cc.Layout).spacingX = spacingX;
        // cc.find('Canvas/战斗/content').getComponent(cc.Layout).spacingY = spacingY;
        _this.addWordMap(data); //生成生物

      }
    });
  },
  //生成地图
  addMapPic: function addMapPic(data) {
    var _this = this;

    if (data.data['map_pic']) {
      var map_pic = data.data['map_pic'];
    } else {
      var map_pic = data.data['picture'];
    }

    var remoteUrl = httpRequest.httpUrl(map_pic);
    cc.loader.load({
      url: remoteUrl
    }, function (err, texture) {
      if (texture != null) {
        _this.home.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
      }
    });
  },
  reloadWord: function reloadWord() {
    var _this = this; // var params = {
    //   'page': 1,
    //   'pageSize': 12,
    // };


    httpRequest.httpPost('/app/app-apiword/map-word', {}, function (data) {
      //移除节点
      cc.find('Canvas/战斗/content').removeAllChildren();
      cc.find('Canvas/战斗/content').destroyAllChildren(); //写入地图数据

      _this.addWordMap(data);
    });
  },
  //生成生物
  addWordMap: function addWordMap(data) {
    // cc.log(data)
    cc.find('Canvas/tips/当前世界').getComponent(cc.Label).string = data.data.name + '(' + data.data.time + '年)';
    cc.find('Canvas/tips/流速').getComponent(cc.Label).string = '流速: ' + data.data.time + '年/S';
    cc.find('Canvas/tips/类型').getComponent(cc.Label).string = '类型: ' + data.data.type_name; // cc.find('Canvas/tips/时间').getComponent(cc.Label).string = '世界时间: '+data.data.name+'('+data.data.time+'年)' 

    var info = data.data.user_in_word_map; //技能图标挂载

    var BoxPrefab = cc.find('Canvas/战斗/content');
    BoxPrefab.getComponent('mapTools').biology_detail_list(BoxPrefab, info);
  },
  addTouchEvent: function addTouchEvent(node_1) {
    node_1.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
    node_1.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
    node_1.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
  },
  back_map: function back_map() {
    //移除节点
    var _this = this;

    cc.find('Canvas/战斗/content').removeAllChildren();
    cc.find('Canvas/战斗/content').destroyAllChildren();
    httpRequest.playGame(httpRequest.urlConfig("sence_zhutian"));
  } // start: function() {
  //     this.start_y = this.content.y;
  //     this.start_index = 0; // 当前我们24个Item加载的 100项数据里面的起始数据记录的索引;
  //     this.load_record(this.start_index);
  // },
  // // 从这个索引开始，加载数据记录到我们的滚动列表里面的选项
  // load_record: function(start_index) {
  //     this.start_index = start_index;
  //     for(var i = 0; i < this.PAGE_NUM * 3; i ++) {
  //         var label = this.opt_item_set[i].getChildByName("src").getComponent(cc.Label);
  //         // 显示我们的记录;
  //         label.string = this.value_set[start_index + i];
  //     }
  // },
  // on_scroll_ended: function() {
  //     this.scrollveiw_load_recode();
  //     this.scroll_view.elastic = true;
  // },
  // scrollveiw_load_recode: function() {
  //      // 向下加载了
  //     if (this.start_index + this.PAGE_NUM * 3 < this.value_set.length &&
  //         this.content.y >= this.start_y + this.PAGE_NUM * 2 * this.OPT_HEIGHT) { // 动态加载
  //         if (this.scroll_view._autoScrolling) { // 等待这个自动滚动结束以后再做加载
  //             this.scroll_view.elastic = false; // 暂时关闭回弹效果
  //             return;
  //         }
  //         var down_loaded = this.PAGE_NUM;
  //         this.start_index += down_loaded;
  //         if (this.start_index + this.PAGE_NUM * 3 > this.value_set.length) {
  //             var out_len = this.start_index + this.PAGE_NUM * 3 - this.value_set.length;
  //             down_loaded -= (out_len);
  //             this.start_index -= (out_len);
  //         }
  //         this.load_record(this.start_index);
  //         this.content.y -= (down_loaded * this.OPT_HEIGHT);
  //         return;
  //     }
  //     // 向上加载
  //     if (this.start_index > 0 && this.content.y <= this.start_y) {
  //         if (this.scroll_view._autoScrolling) { // 等待这个自动滚动结束以后再做加载
  //             this.scroll_view.elastic = false;
  //             return;
  //         }
  //         var up_loaded = this.PAGE_NUM;
  //         this.start_index -= up_loaded;
  //         if (this.start_index < 0) {
  //             up_loaded += this.start_index;
  //             this.start_index = 0; 
  //         }
  //         this.load_record(this.start_index);
  //         this.content.y += (up_loaded * this.OPT_HEIGHT);
  //     }
  //     // end 
  // },
  // // called every frame, uncomment this function to activate update callback
  // update: function (dt) {
  //     this.scrollveiw_load_recode();
  // },

});

cc._RF.pop();