
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/fighting/score_fighting.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ed8ebeqhB9JK7/jr/MBPGZr', 'score_fighting');
// Script/fighting/score_fighting.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
// 世界操作  
var HttpHelper = require("../http");

var httpRequest = new HttpHelper();
var params = [];
cc.Class({
  "extends": cc.Component,
  properties: {
    // foo: {
    //     // ATTRIBUTES:
    //     default: null,        // The default value will be used only when the component attaching
    //                           // to a node for the first time
    //     type: cc.SpriteFrame, // optional, default is typeof default
    //     serializable: true,   // optional, default is true
    // },
    // bar: {
    //     get () {
    //         return this._bar;
    //     },
    //     set (value) {
    //         this._bar = value;
    //     }
    // },
    //测试item
    //   content: {
    //     default: null,
    //     type: cc.Node
    //   },
    // person: {
    //   default: null,
    //   type: cc.Prefab
    // },
    content: cc.Node,
    person: cc.Prefab,
    home: cc.Node,
    reload: cc.Node,
    back: cc.Node,
    //列表
    test_scrollView: {
      "default": null,
      type: cc.ScrollView
    },
    //翻页容器
    test_pageView: {
      "default": null,
      type: cc.PageView
    }
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
    // httpRequest.playGameLoading()
    this.spawnTools(); // this.scroll_view.node.on("scroll-ended", this.on_scroll_ended.bind(this), this);
  },
  spawnTools: function spawnTools() {
    var _this = this;

    var map_int = cc.sys.localStorage.getItem('figthing_map_int'); //读取数据

    var userid = cc.sys.localStorage.getItem('figthing_userid'); //读取数据

    if (map_int == '' && userid == '') {
      httpRequest.playGame('map/诸天地图');
    } else {
      var params = {
        'map_int': map_int,
        'userid': userid
      };
      httpRequest.httpPost('/app/app-apinew/fight', params, function (data) {
        var remoteUrl = httpRequest.httpUrlJson(data.data.sid); // cc.assetManager.loadRemote({});  

        cc.loader.load({
          url: remoteUrl
        }, function (err, results) {
          _this.addMapPic(results); //生成地图
          // _this.addWordMap(results) //生成生物
          // _self.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture)


          console.log(results);

          _this.addMapPic(results); //生成地图
          // _this.addWordMap(results) //生成生物

        });
      });
    }
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
    console.log(remoteUrl);
    cc.loader.load({
      url: remoteUrl
    }, function (err, texture) {
      _this.home.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    });
  },
  reloadWord: function reloadWord() {
    var _this = this;

    httpRequest.httpPost('/app/app-apiword/map-word', params, function (data) {
      //写入地图数据
      _this.addWordMap(data);
    });
  },
  //生成生物
  addWordMap: function addWordMap(data) {
    console.log(data);

    var _this = this; // 根据MapTools生成相应的道具
    // _this.toolsArray = [];


    var TOOLS = data.data.user_in_word_map;
    var total = data.data.user_in_word_map.length; // var fi = cc.fadeIn(2)//渐显效果
    // _this.content.runAction(fi);
    // var fo = cc.fadeOut(1)//渐隐效果
    // _this.content.runAction(fo);
    //移除节点

    _this.content.removeAllChildren();

    _this.content.destroyAllChildren(); //添加节点


    for (var i = 0; i < total; i++) {
      // console.log(i) 
      //死亡移除map_status
      var map = TOOLS[i];

      if (map.map_status == 1) {
        // console.log(map.x)
        // console.log(map.y)
        var tool = cc.instantiate(_this.person);
        console.log(map);
        tool.getComponent('fightingTools').initInfo(map);
        tool.x = map.x;
        tool.y = map.y; // _this.toolsArray.push(tool);
        // tool.setPosition(map.x,map.y);  

        _this.content.addChild(tool);
      }
    }
  },
  back_map: function back_map() {
    cc.director.loadScene('map/诸天地图');
  },
  back_home: function back_home() {
    cc.director.loadScene('大厅');
  },
  addTouchEvent: function addTouchEvent(node_1) {
    node_1.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
    node_1.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
    node_1.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxmaWdodGluZ1xcc2NvcmVfZmlnaHRpbmcuanMiXSwibmFtZXMiOlsiSHR0cEhlbHBlciIsInJlcXVpcmUiLCJodHRwUmVxdWVzdCIsInBhcmFtcyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiY29udGVudCIsIk5vZGUiLCJwZXJzb24iLCJQcmVmYWIiLCJob21lIiwicmVsb2FkIiwiYmFjayIsInRlc3Rfc2Nyb2xsVmlldyIsInR5cGUiLCJTY3JvbGxWaWV3IiwidGVzdF9wYWdlVmlldyIsIlBhZ2VWaWV3Iiwib25Mb2FkIiwic3Bhd25Ub29scyIsIl90aGlzIiwibWFwX2ludCIsInN5cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VyaWQiLCJwbGF5R2FtZSIsImh0dHBQb3N0IiwiZGF0YSIsInJlbW90ZVVybCIsImh0dHBVcmxKc29uIiwic2lkIiwibG9hZGVyIiwibG9hZCIsInVybCIsImVyciIsInJlc3VsdHMiLCJhZGRNYXBQaWMiLCJjb25zb2xlIiwibG9nIiwibWFwX3BpYyIsImh0dHBVcmwiLCJ0ZXh0dXJlIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJTcHJpdGVGcmFtZSIsInJlbG9hZFdvcmQiLCJhZGRXb3JkTWFwIiwiVE9PTFMiLCJ1c2VyX2luX3dvcmRfbWFwIiwidG90YWwiLCJsZW5ndGgiLCJyZW1vdmVBbGxDaGlsZHJlbiIsImRlc3Ryb3lBbGxDaGlsZHJlbiIsImkiLCJtYXAiLCJtYXBfc3RhdHVzIiwidG9vbCIsImluc3RhbnRpYXRlIiwiaW5pdEluZm8iLCJ4IiwieSIsImFkZENoaWxkIiwiYmFja19tYXAiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsImJhY2tfaG9tZSIsImFkZFRvdWNoRXZlbnQiLCJub2RlXzEiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwidG91Y2hTdGFydCIsIlRPVUNIX01PVkUiLCJ0b3VjaE1vdmUiLCJUT1VDSF9FTkQiLCJ0b3VjaEVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLFNBQUQsQ0FBeEI7O0FBQ0EsSUFBSUMsV0FBVyxHQUFHLElBQUlGLFVBQUosRUFBbEI7QUFDQSxJQUFJRyxNQUFNLEdBQUUsRUFBWjtBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQUMsSUFBQUEsT0FBTyxFQUFFSixFQUFFLENBQUNLLElBM0JGO0FBNEJWQyxJQUFBQSxNQUFNLEVBQUVOLEVBQUUsQ0FBQ08sTUE1QkQ7QUE2QlZDLElBQUFBLElBQUksRUFBRVIsRUFBRSxDQUFDSyxJQTdCQztBQThCVkksSUFBQUEsTUFBTSxFQUFFVCxFQUFFLENBQUNLLElBOUJEO0FBK0JWSyxJQUFBQSxJQUFJLEVBQUVWLEVBQUUsQ0FBQ0ssSUEvQkM7QUFnQ1Y7QUFDQU0sSUFBQUEsZUFBZSxFQUFFO0FBQ2YsaUJBQVMsSUFETTtBQUVmQyxNQUFBQSxJQUFJLEVBQUVaLEVBQUUsQ0FBQ2E7QUFGTSxLQWpDUDtBQXFDVjtBQUNBQyxJQUFBQSxhQUFhLEVBQUU7QUFDYixpQkFBUyxJQURJO0FBRWJGLE1BQUFBLElBQUksRUFBRVosRUFBRSxDQUFDZTtBQUZJO0FBdENMLEdBSFA7QUFpREw7QUFFQUMsRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNGO0FBQ0EsU0FBS0MsVUFBTCxHQXJCa0IsQ0FzQmhCO0FBQ0gsR0ExRUk7QUE0RUxBLEVBQUFBLFVBNUVLLHdCQTRFUztBQUNaLFFBQUlDLEtBQUssR0FBRSxJQUFYOztBQUNBLFFBQUlDLE9BQU8sR0FBR25CLEVBQUUsQ0FBQ29CLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsa0JBQTVCLENBQWQsQ0FGWSxDQUVtRDs7QUFDL0QsUUFBSUMsTUFBTSxHQUFHdkIsRUFBRSxDQUFDb0IsR0FBSCxDQUFPQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixpQkFBNUIsQ0FBYixDQUhZLENBR2lEOztBQUM3RCxRQUFHSCxPQUFPLElBQUUsRUFBVCxJQUFhSSxNQUFNLElBQUUsRUFBeEIsRUFBMkI7QUFDeEJ6QixNQUFBQSxXQUFXLENBQUMwQixRQUFaLENBQXFCLFVBQXJCO0FBQ0YsS0FGRCxNQUVLO0FBQ0QsVUFBSXpCLE1BQU0sR0FBRztBQUNYLG1CQUFXb0IsT0FEQTtBQUVYLGtCQUFVSTtBQUZDLE9BQWI7QUFJQXpCLE1BQUFBLFdBQVcsQ0FBQzJCLFFBQVosQ0FBcUIsdUJBQXJCLEVBQThDMUIsTUFBOUMsRUFBc0QsVUFBVTJCLElBQVYsRUFBZ0I7QUFDbEUsWUFBSUMsU0FBUyxHQUFHN0IsV0FBVyxDQUFDOEIsV0FBWixDQUF3QkYsSUFBSSxDQUFDQSxJQUFMLENBQVVHLEdBQWxDLENBQWhCLENBRGtFLENBRWxFOztBQUNBN0IsUUFBQUEsRUFBRSxDQUFDOEIsTUFBSCxDQUFVQyxJQUFWLENBQWU7QUFBRUMsVUFBQUEsR0FBRyxFQUFFTDtBQUFQLFNBQWYsRUFBbUMsVUFBVU0sR0FBVixFQUFlQyxPQUFmLEVBQXdCO0FBRXpEaEIsVUFBQUEsS0FBSyxDQUFDaUIsU0FBTixDQUFnQkQsT0FBaEIsRUFGeUQsQ0FFaEM7QUFDekI7QUFDRTs7O0FBQ0FFLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSCxPQUFaOztBQUNBaEIsVUFBQUEsS0FBSyxDQUFDaUIsU0FBTixDQUFnQkQsT0FBaEIsRUFOdUQsQ0FNOUI7QUFDekI7O0FBQ0gsU0FSRDtBQVNILE9BWkQ7QUFhSDtBQUNGLEdBckdJO0FBc0dMO0FBQ0FDLEVBQUFBLFNBdkdLLHFCQXVHS1QsSUF2R0wsRUF1R1U7QUFDWCxRQUFJUixLQUFLLEdBQUcsSUFBWjs7QUFDQSxRQUFHUSxJQUFJLENBQUNBLElBQUwsQ0FBVSxTQUFWLENBQUgsRUFBd0I7QUFDdEIsVUFBS1ksT0FBTyxHQUFFWixJQUFJLENBQUNBLElBQUwsQ0FBVSxTQUFWLENBQWQ7QUFDRCxLQUZELE1BRUs7QUFDSCxVQUFLWSxPQUFPLEdBQUVaLElBQUksQ0FBQ0EsSUFBTCxDQUFVLFNBQVYsQ0FBZDtBQUNEOztBQUNELFFBQUlDLFNBQVMsR0FBRzdCLFdBQVcsQ0FBQ3lDLE9BQVosQ0FBb0JELE9BQXBCLENBQWhCO0FBRUFGLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZVixTQUFaO0FBQ0EzQixJQUFBQSxFQUFFLENBQUM4QixNQUFILENBQVVDLElBQVYsQ0FBZTtBQUFFQyxNQUFBQSxHQUFHLEVBQUVMO0FBQVAsS0FBZixFQUFtQyxVQUFVTSxHQUFWLEVBQWVPLE9BQWYsRUFBd0I7QUFDckR0QixNQUFBQSxLQUFLLENBQUNWLElBQU4sQ0FBV2lDLFlBQVgsQ0FBd0J6QyxFQUFFLENBQUMwQyxNQUEzQixFQUFtQ0MsV0FBbkMsR0FBaUQsSUFBSTNDLEVBQUUsQ0FBQzRDLFdBQVAsQ0FBbUJKLE9BQW5CLENBQWpEO0FBQ0wsS0FGRDtBQUdILEdBcEhJO0FBcUhMSyxFQUFBQSxVQXJISyx3QkFxSE87QUFDVixRQUFJM0IsS0FBSyxHQUFFLElBQVg7O0FBQ0FwQixJQUFBQSxXQUFXLENBQUMyQixRQUFaLENBQXFCLDJCQUFyQixFQUFrRDFCLE1BQWxELEVBQTBELFVBQVUyQixJQUFWLEVBQWdCO0FBQ3hFO0FBQ0FSLE1BQUFBLEtBQUssQ0FBQzRCLFVBQU4sQ0FBaUJwQixJQUFqQjtBQUNDLEtBSEg7QUFJRCxHQTNISTtBQTRITDtBQUNBb0IsRUFBQUEsVUE3SEssc0JBNkhNcEIsSUE3SE4sRUE2SFc7QUFDZFUsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlYLElBQVo7O0FBQ0UsUUFBSVIsS0FBSyxHQUFHLElBQVosQ0FGWSxDQUdaO0FBQ0E7OztBQUNBLFFBQUk2QixLQUFLLEdBQUdyQixJQUFJLENBQUNBLElBQUwsQ0FBVXNCLGdCQUF0QjtBQUNBLFFBQUlDLEtBQUssR0FBR3ZCLElBQUksQ0FBQ0EsSUFBTCxDQUFVc0IsZ0JBQVYsQ0FBMkJFLE1BQXZDLENBTlksQ0FRWjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBaEMsSUFBQUEsS0FBSyxDQUFDZCxPQUFOLENBQWMrQyxpQkFBZDs7QUFDQWpDLElBQUFBLEtBQUssQ0FBQ2QsT0FBTixDQUFjZ0Qsa0JBQWQsR0FkWSxDQWVaOzs7QUFDQSxTQUFLLElBQUlDLENBQUMsR0FBQyxDQUFYLEVBQWNBLENBQUMsR0FBQ0osS0FBaEIsRUFBdUJJLENBQUMsRUFBeEIsRUFBNEI7QUFDeEI7QUFDQTtBQUNBLFVBQUlDLEdBQUcsR0FBRVAsS0FBSyxDQUFDTSxDQUFELENBQWQ7O0FBQ0EsVUFBR0MsR0FBRyxDQUFDQyxVQUFKLElBQWdCLENBQW5CLEVBQXFCO0FBQ25CO0FBQ0E7QUFDQSxZQUFJQyxJQUFJLEdBQUd4RCxFQUFFLENBQUN5RCxXQUFILENBQWV2QyxLQUFLLENBQUNaLE1BQXJCLENBQVg7QUFDQThCLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZaUIsR0FBWjtBQUNBRSxRQUFBQSxJQUFJLENBQUNmLFlBQUwsQ0FBa0IsZUFBbEIsRUFBbUNpQixRQUFuQyxDQUE0Q0osR0FBNUM7QUFDQUUsUUFBQUEsSUFBSSxDQUFDRyxDQUFMLEdBQU9MLEdBQUcsQ0FBQ0ssQ0FBWDtBQUNBSCxRQUFBQSxJQUFJLENBQUNJLENBQUwsR0FBT04sR0FBRyxDQUFDTSxDQUFYLENBUG1CLENBUW5CO0FBQ0E7O0FBQ0ExQyxRQUFBQSxLQUFLLENBQUNkLE9BQU4sQ0FBY3lELFFBQWQsQ0FBdUJMLElBQXZCO0FBQ0Q7QUFDSjtBQUNKLEdBOUpJO0FBK0pMTSxFQUFBQSxRQS9KSyxzQkErSks7QUFDUjlELElBQUFBLEVBQUUsQ0FBQytELFFBQUgsQ0FBWUMsU0FBWixDQUFzQixVQUF0QjtBQUNELEdBaktJO0FBa0tMQyxFQUFBQSxTQWxLSyx1QkFrS007QUFDVGpFLElBQUFBLEVBQUUsQ0FBQytELFFBQUgsQ0FBWUMsU0FBWixDQUFzQixJQUF0QjtBQUNELEdBcEtJO0FBcUtMRSxFQUFBQSxhQXJLSyx5QkFxS1NDLE1BcktULEVBcUtpQjtBQUNsQkEsSUFBQUEsTUFBTSxDQUFDQyxFQUFQLENBQVVwRSxFQUFFLENBQUNLLElBQUgsQ0FBUWdFLFNBQVIsQ0FBa0JDLFdBQTVCLEVBQXlDLEtBQUtDLFVBQTlDLEVBQTBELElBQTFEO0FBQ0FKLElBQUFBLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVcEUsRUFBRSxDQUFDSyxJQUFILENBQVFnRSxTQUFSLENBQWtCRyxVQUE1QixFQUF3QyxLQUFLQyxTQUE3QyxFQUF3RCxJQUF4RDtBQUNBTixJQUFBQSxNQUFNLENBQUNDLEVBQVAsQ0FBVXBFLEVBQUUsQ0FBQ0ssSUFBSCxDQUFRZ0UsU0FBUixDQUFrQkssU0FBNUIsRUFBdUMsS0FBS0MsUUFBNUMsRUFBc0QsSUFBdEQ7QUFDRCxHQXpLRSxDQTBLTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUE1T0ssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcbi8vIOS4lueVjOaTjeS9nCAgXHJcbnZhciBIdHRwSGVscGVyID0gcmVxdWlyZShcIi4uL2h0dHBcIik7IFxyXG52YXIgaHR0cFJlcXVlc3QgPSBuZXcgSHR0cEhlbHBlcigpO1xyXG52YXIgcGFyYW1zID1bXTtcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAgICAgLy/mtYvor5VpdGVtXHJcbiAgICAgIC8vICAgY29udGVudDoge1xyXG4gICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgLy8gICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgLy8gICB9LFxyXG5cclxuICAgICAgLy8gcGVyc29uOiB7XHJcbiAgICAgIC8vICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgLy8gICB0eXBlOiBjYy5QcmVmYWJcclxuICAgICAgLy8gfSxcclxuICBcclxuICAgICAgY29udGVudDogY2MuTm9kZSxcclxuICAgICAgcGVyc29uOiBjYy5QcmVmYWIsXHJcbiAgICAgIGhvbWU6IGNjLk5vZGUsXHJcbiAgICAgIHJlbG9hZDogY2MuTm9kZSxcclxuICAgICAgYmFjazogY2MuTm9kZSxcclxuICAgICAgLy/liJfooahcclxuICAgICAgdGVzdF9zY3JvbGxWaWV3OiB7XHJcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB0eXBlOiBjYy5TY3JvbGxWaWV3XHJcbiAgICAgIH0sXHJcbiAgICAgIC8v57+76aG15a655ZmoXHJcbiAgICAgIHRlc3RfcGFnZVZpZXc6IHtcclxuICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIHR5cGU6IGNjLlBhZ2VWaWV3XHJcbiAgICAgIH0sXHJcblxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBwZXJzb24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBlcnNvbik7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuY29udGVuPXBlcnNvblxyXG4gICAgICAgIC8vICAgICAvLyBwZXJzb24ucGFyZW50ID0gdGhpcy5jb250ZW50O1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLmFkZFRvdWNoRXZlbnQocGVyc29uKTsgIC8v5re75Yqg6Kem5pG45LqL5Lu2XHJcbiAgICAgICAgLy8gICB9XHJcbiAgICAgICAgLy8gdGhpcy52YWx1ZV9zZXQgPSBbXTtcclxuICAgICAgICAvLyAvLyDlpoLmnpzkvaDov5nph4zmmK/mjpLooYzmppzvvIzpgqPkuYjkvaDlsLFwdXNo5o6S6KGM5qac55qE5pWw5o2uO1xyXG4gICAgICAgIC8vIGZvcih2YXIgaSA9IDE7IGkgPD0gMTAwOyBpICsrKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudmFsdWVfc2V0LnB1c2goaSk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyB0aGlzLmNvbnRlbnQgPSB0aGlzLnNjcm9sbF92aWV3LmNvbnRlbnQ7XHJcbiAgICAgICAgLy8gdGhpcy5vcHRfaXRlbV9zZXQgPSBbXTtcclxuICAgICAgICAvLyBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5QQUdFX05VTSAqIDM7IGkgKyspIHtcclxuICAgICAgICAvLyAgICAgdmFyIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1fcHJlZmFiKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5jb250ZW50LmFkZENoaWxkKGl0ZW0pO1xyXG4gICAgICAgIC8vICAgICB0aGlzLm9wdF9pdGVtX3NldC5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgLy8gaHR0cFJlcXVlc3QucGxheUdhbWVMb2FkaW5nKClcclxuICAgICAgdGhpcy5zcGF3blRvb2xzKClcclxuICAgICAgICAvLyB0aGlzLnNjcm9sbF92aWV3Lm5vZGUub24oXCJzY3JvbGwtZW5kZWRcIiwgdGhpcy5vbl9zY3JvbGxfZW5kZWQuYmluZCh0aGlzKSwgdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNwYXduVG9vbHMgKCkge1xyXG4gICAgICB2YXIgX3RoaXMgPXRoaXM7XHJcbiAgICAgIHZhciBtYXBfaW50ID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaWd0aGluZ19tYXBfaW50Jyk7IC8v6K+75Y+W5pWw5o2uXHJcbiAgICAgIHZhciB1c2VyaWQgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZpZ3RoaW5nX3VzZXJpZCcpOyAvL+ivu+WPluaVsOaNrlxyXG4gICAgICBpZihtYXBfaW50PT0nJyYmdXNlcmlkPT0nJyl7XHJcbiAgICAgICAgIGh0dHBSZXF1ZXN0LnBsYXlHYW1lKCdtYXAv6K+45aSp5Zyw5Zu+Jyk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgJ21hcF9pbnQnOiBtYXBfaW50LFxyXG4gICAgICAgICAgICAndXNlcmlkJzogdXNlcmlkLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCcvYXBwL2FwcC1hcGluZXcvZmlnaHQnLCBwYXJhbXMsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgICAgdmFyIHJlbW90ZVVybCA9IGh0dHBSZXF1ZXN0Lmh0dHBVcmxKc29uKGRhdGEuZGF0YS5zaWQpO1xyXG4gICAgICAgICAgICAgIC8vIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKHt9KTsgIFxyXG4gICAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHsgdXJsOiByZW1vdGVVcmwgfSwgZnVuY3Rpb24gKGVyciwgcmVzdWx0cykge1xyXG4gICBcclxuICAgICAgICAgICAgICAgIF90aGlzLmFkZE1hcFBpYyhyZXN1bHRzKSAvL+eUn+aIkOWcsOWbvlxyXG4gICAgICAgICAgICAgICAgLy8gX3RoaXMuYWRkV29yZE1hcChyZXN1bHRzKSAvL+eUn+aIkOeUn+eJqVxyXG4gICAgICAgICAgICAgICAgICAvLyBfc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpXHJcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdHMpO1xyXG4gICAgICAgICAgICAgICAgICBfdGhpcy5hZGRNYXBQaWMocmVzdWx0cykgLy/nlJ/miJDlnLDlm75cclxuICAgICAgICAgICAgICAgICAgLy8gX3RoaXMuYWRkV29yZE1hcChyZXN1bHRzKSAvL+eUn+aIkOeUn+eJqVxyXG4gICAgICAgICAgICAgIH0pOyAgICAgICAgICBcclxuICAgICAgICAgIH0pICAgXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvL+eUn+aIkOWcsOWbvlxyXG4gICAgYWRkTWFwUGljKGRhdGEpe1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYoZGF0YS5kYXRhWydtYXBfcGljJ10pe1xyXG4gICAgICAgICAgdmFyICBtYXBfcGljID1kYXRhLmRhdGFbJ21hcF9waWMnXTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHZhciAgbWFwX3BpYyA9ZGF0YS5kYXRhWydwaWN0dXJlJ107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZW1vdGVVcmwgPSBodHRwUmVxdWVzdC5odHRwVXJsKG1hcF9waWMpO1xyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhyZW1vdGVVcmwpXHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWQoeyB1cmw6IHJlbW90ZVVybCB9LCBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7ICBcclxuICAgICAgICAgICAgICBfdGhpcy5ob21lLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJlbG9hZFdvcmQoKXtcclxuICAgICAgdmFyIF90aGlzID10aGlzO1xyXG4gICAgICBodHRwUmVxdWVzdC5odHRwUG9zdCgnL2FwcC9hcHAtYXBpd29yZC9tYXAtd29yZCcsIHBhcmFtcywgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAvL+WGmeWFpeWcsOWbvuaVsOaNrlxyXG4gICAgICAgIF90aGlzLmFkZFdvcmRNYXAoZGF0YSlcclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuICAgIC8v55Sf5oiQ55Sf54mpXHJcbiAgICBhZGRXb3JkTWFwKGRhdGEpe1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKSBcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIC8vIOagueaNrk1hcFRvb2xz55Sf5oiQ55u45bqU55qE6YGT5YW3XHJcbiAgICAgICAgLy8gX3RoaXMudG9vbHNBcnJheSA9IFtdO1xyXG4gICAgICAgIGxldCBUT09MUyA9IGRhdGEuZGF0YS51c2VyX2luX3dvcmRfbWFwO1xyXG4gICAgICAgIHZhciB0b3RhbCA9IGRhdGEuZGF0YS51c2VyX2luX3dvcmRfbWFwLmxlbmd0aDtcclxuICBcclxuICAgICAgICAvLyB2YXIgZmkgPSBjYy5mYWRlSW4oMikvL+a4kOaYvuaViOaenFxyXG4gICAgICAgIC8vIF90aGlzLmNvbnRlbnQucnVuQWN0aW9uKGZpKTtcclxuICAgICAgICAvLyB2YXIgZm8gPSBjYy5mYWRlT3V0KDEpLy/muJDpmpDmlYjmnpxcclxuICAgICAgICAvLyBfdGhpcy5jb250ZW50LnJ1bkFjdGlvbihmbyk7XHJcbiAgICAgICAgLy/np7vpmaToioLngrlcclxuICAgICAgICBfdGhpcy5jb250ZW50LnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgX3RoaXMuY29udGVudC5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICAvL+a3u+WKoOiKgueCuVxyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTx0b3RhbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGkpIFxyXG4gICAgICAgICAgICAvL+atu+S6oeenu+mZpG1hcF9zdGF0dXNcclxuICAgICAgICAgICAgdmFyIG1hcCA9VE9PTFNbaV07XHJcbiAgICAgICAgICAgIGlmKG1hcC5tYXBfc3RhdHVzPT0xKXtcclxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhtYXAueClcclxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhtYXAueSlcclxuICAgICAgICAgICAgICBsZXQgdG9vbCA9IGNjLmluc3RhbnRpYXRlKF90aGlzLnBlcnNvbik7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2cobWFwKVxyXG4gICAgICAgICAgICAgIHRvb2wuZ2V0Q29tcG9uZW50KCdmaWdodGluZ1Rvb2xzJykuaW5pdEluZm8obWFwKTtcclxuICAgICAgICAgICAgICB0b29sLng9bWFwLnhcclxuICAgICAgICAgICAgICB0b29sLnk9bWFwLnlcclxuICAgICAgICAgICAgICAvLyBfdGhpcy50b29sc0FycmF5LnB1c2godG9vbCk7XHJcbiAgICAgICAgICAgICAgLy8gdG9vbC5zZXRQb3NpdGlvbihtYXAueCxtYXAueSk7ICBcclxuICAgICAgICAgICAgICBfdGhpcy5jb250ZW50LmFkZENoaWxkKHRvb2wpOyAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGJhY2tfbWFwKCl7XHJcbiAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFwL+ivuOWkqeWcsOWbvicpO1xyXG4gICAgfSxcclxuICAgIGJhY2tfaG9tZSgpe1xyXG4gICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ+Wkp+WOhScpO1xyXG4gICAgfSxcclxuICAgIGFkZFRvdWNoRXZlbnQobm9kZV8xKSB7XHJcbiAgICAgICAgbm9kZV8xLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIG5vZGVfMS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLnRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgbm9kZV8xLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgIH0sXHJcbiAgICAvLyBzdGFydDogZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgdGhpcy5zdGFydF95ID0gdGhpcy5jb250ZW50Lnk7XHJcbiAgICAvLyAgICAgdGhpcy5zdGFydF9pbmRleCA9IDA7IC8vIOW9k+WJjeaIkeS7rDI05LiqSXRlbeWKoOi9veeahCAxMDDpobnmlbDmja7ph4zpnaLnmoTotbflp4vmlbDmja7orrDlvZXnmoTntKLlvJU7XHJcbiAgICAvLyAgICAgdGhpcy5sb2FkX3JlY29yZCh0aGlzLnN0YXJ0X2luZGV4KTtcclxuICAgIC8vIH0sXHJcblxyXG4gICAgLy8gLy8g5LuO6L+Z5Liq57Si5byV5byA5aeL77yM5Yqg6L295pWw5o2u6K6w5b2V5Yiw5oiR5Lus55qE5rua5Yqo5YiX6KGo6YeM6Z2i55qE6YCJ6aG5XHJcbiAgICAvLyBsb2FkX3JlY29yZDogZnVuY3Rpb24oc3RhcnRfaW5kZXgpIHtcclxuICAgIC8vICAgICB0aGlzLnN0YXJ0X2luZGV4ID0gc3RhcnRfaW5kZXg7XHJcblxyXG4gICAgLy8gICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLlBBR0VfTlVNICogMzsgaSArKykge1xyXG4gICAgLy8gICAgICAgICB2YXIgbGFiZWwgPSB0aGlzLm9wdF9pdGVtX3NldFtpXS5nZXRDaGlsZEJ5TmFtZShcInNyY1wiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgLy8gICAgICAgICAvLyDmmL7npLrmiJHku6znmoTorrDlvZU7XHJcbiAgICAvLyAgICAgICAgIGxhYmVsLnN0cmluZyA9IHRoaXMudmFsdWVfc2V0W3N0YXJ0X2luZGV4ICsgaV07XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSxcclxuXHJcbiAgICAvLyBvbl9zY3JvbGxfZW5kZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgIHRoaXMuc2Nyb2xsdmVpd19sb2FkX3JlY29kZSgpO1xyXG4gICAgLy8gICAgIHRoaXMuc2Nyb2xsX3ZpZXcuZWxhc3RpYyA9IHRydWU7XHJcbiAgICAvLyB9LFxyXG5cclxuICAgIC8vIHNjcm9sbHZlaXdfbG9hZF9yZWNvZGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgICAvLyDlkJHkuIvliqDovb3kuoZcclxuICAgIC8vICAgICBpZiAodGhpcy5zdGFydF9pbmRleCArIHRoaXMuUEFHRV9OVU0gKiAzIDwgdGhpcy52YWx1ZV9zZXQubGVuZ3RoICYmXHJcbiAgICAvLyAgICAgICAgIHRoaXMuY29udGVudC55ID49IHRoaXMuc3RhcnRfeSArIHRoaXMuUEFHRV9OVU0gKiAyICogdGhpcy5PUFRfSEVJR0hUKSB7IC8vIOWKqOaAgeWKoOi9vVxyXG4gICAgICAgICAgICBcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsX3ZpZXcuX2F1dG9TY3JvbGxpbmcpIHsgLy8g562J5b6F6L+Z5Liq6Ieq5Yqo5rua5Yqo57uT5p2f5Lul5ZCO5YaN5YGa5Yqg6L29XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjcm9sbF92aWV3LmVsYXN0aWMgPSBmYWxzZTsgLy8g5pqC5pe25YWz6Zet5Zue5by55pWI5p6cXHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgIHZhciBkb3duX2xvYWRlZCA9IHRoaXMuUEFHRV9OVU07XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc3RhcnRfaW5kZXggKz0gZG93bl9sb2FkZWQ7XHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLnN0YXJ0X2luZGV4ICsgdGhpcy5QQUdFX05VTSAqIDMgPiB0aGlzLnZhbHVlX3NldC5sZW5ndGgpIHtcclxuICAgIC8vICAgICAgICAgICAgIHZhciBvdXRfbGVuID0gdGhpcy5zdGFydF9pbmRleCArIHRoaXMuUEFHRV9OVU0gKiAzIC0gdGhpcy52YWx1ZV9zZXQubGVuZ3RoO1xyXG4gICAgLy8gICAgICAgICAgICAgZG93bl9sb2FkZWQgLT0gKG91dF9sZW4pO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zdGFydF9pbmRleCAtPSAob3V0X2xlbik7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgdGhpcy5sb2FkX3JlY29yZCh0aGlzLnN0YXJ0X2luZGV4KTtcclxuXHJcbiAgICAvLyAgICAgICAgIHRoaXMuY29udGVudC55IC09IChkb3duX2xvYWRlZCAqIHRoaXMuT1BUX0hFSUdIVCk7XHJcbiAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIC8vIOWQkeS4iuWKoOi9vVxyXG4gICAgLy8gICAgIGlmICh0aGlzLnN0YXJ0X2luZGV4ID4gMCAmJiB0aGlzLmNvbnRlbnQueSA8PSB0aGlzLnN0YXJ0X3kpIHtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsX3ZpZXcuX2F1dG9TY3JvbGxpbmcpIHsgLy8g562J5b6F6L+Z5Liq6Ieq5Yqo5rua5Yqo57uT5p2f5Lul5ZCO5YaN5YGa5Yqg6L29XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjcm9sbF92aWV3LmVsYXN0aWMgPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgdmFyIHVwX2xvYWRlZCA9IHRoaXMuUEFHRV9OVU07XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc3RhcnRfaW5kZXggLT0gdXBfbG9hZGVkO1xyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5zdGFydF9pbmRleCA8IDApIHtcclxuICAgIC8vICAgICAgICAgICAgIHVwX2xvYWRlZCArPSB0aGlzLnN0YXJ0X2luZGV4O1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zdGFydF9pbmRleCA9IDA7IFxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIHRoaXMubG9hZF9yZWNvcmQodGhpcy5zdGFydF9pbmRleCk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuY29udGVudC55ICs9ICh1cF9sb2FkZWQgKiB0aGlzLk9QVF9IRUlHSFQpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICAvLyBlbmQgXHJcbiAgICAvLyB9LFxyXG4gICAgLy8gLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAvLyAgICAgdGhpcy5zY3JvbGx2ZWl3X2xvYWRfcmVjb2RlKCk7XHJcbiAgICAvLyB9LFxyXG59KTtcclxuIl19