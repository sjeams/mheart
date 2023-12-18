
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

    var figthing_remote_url = cc.sys.localStorage.getItem('figthing_remote_url'); //读取数据--战斗记录

    if (figthing_remote_url == '') {
      httpRequest.playGame('map/诸天地图');
    } else {
      var remoteUrl = httpRequest.httpUrlJson(figthing_remote_url);
      cc.loader.load({
        url: remoteUrl
      }, function (err, data) {
        console.log(data); // _this.addWordMap(results) //生成生物
        // _self.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture)

        _this.addMapPic(data); //生成地图


        _this.addWordMap(data); //生成生物

      });
    }
  },
  //生成地图
  addMapPic: function addMapPic(data) {
    var _this = this;

    var map_pic = data.data['map_pic'];
    var remoteUrl = httpRequest.httpUrl(map_pic);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxmaWdodGluZ1xcc2NvcmVfZmlnaHRpbmcuanMiXSwibmFtZXMiOlsiSHR0cEhlbHBlciIsInJlcXVpcmUiLCJodHRwUmVxdWVzdCIsInBhcmFtcyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiY29udGVudCIsIk5vZGUiLCJwZXJzb24iLCJQcmVmYWIiLCJob21lIiwicmVsb2FkIiwiYmFjayIsInRlc3Rfc2Nyb2xsVmlldyIsInR5cGUiLCJTY3JvbGxWaWV3IiwidGVzdF9wYWdlVmlldyIsIlBhZ2VWaWV3Iiwib25Mb2FkIiwic3Bhd25Ub29scyIsIl90aGlzIiwiZmlndGhpbmdfcmVtb3RlX3VybCIsInN5cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwbGF5R2FtZSIsInJlbW90ZVVybCIsImh0dHBVcmxKc29uIiwibG9hZGVyIiwibG9hZCIsInVybCIsImVyciIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiYWRkTWFwUGljIiwiYWRkV29yZE1hcCIsIm1hcF9waWMiLCJodHRwVXJsIiwidGV4dHVyZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwiU3ByaXRlRnJhbWUiLCJyZWxvYWRXb3JkIiwiaHR0cFBvc3QiLCJUT09MUyIsInVzZXJfaW5fd29yZF9tYXAiLCJ0b3RhbCIsImxlbmd0aCIsInJlbW92ZUFsbENoaWxkcmVuIiwiZGVzdHJveUFsbENoaWxkcmVuIiwiaSIsIm1hcCIsIm1hcF9zdGF0dXMiLCJ0b29sIiwiaW5zdGFudGlhdGUiLCJpbml0SW5mbyIsIngiLCJ5IiwiYWRkQ2hpbGQiLCJiYWNrX21hcCIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwiYmFja19ob21lIiwiYWRkVG91Y2hFdmVudCIsIm5vZGVfMSIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJ0b3VjaFN0YXJ0IiwiVE9VQ0hfTU9WRSIsInRvdWNoTW92ZSIsIlRPVUNIX0VORCIsInRvdWNoRW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUF4Qjs7QUFDQSxJQUFJQyxXQUFXLEdBQUcsSUFBSUYsVUFBSixFQUFsQjtBQUNBLElBQUlHLE1BQU0sR0FBRSxFQUFaO0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNJO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQyxJQUFBQSxPQUFPLEVBQUVKLEVBQUUsQ0FBQ0ssSUEzQkY7QUE0QlZDLElBQUFBLE1BQU0sRUFBRU4sRUFBRSxDQUFDTyxNQTVCRDtBQTZCVkMsSUFBQUEsSUFBSSxFQUFFUixFQUFFLENBQUNLLElBN0JDO0FBOEJWSSxJQUFBQSxNQUFNLEVBQUVULEVBQUUsQ0FBQ0ssSUE5QkQ7QUErQlZLLElBQUFBLElBQUksRUFBRVYsRUFBRSxDQUFDSyxJQS9CQztBQWdDVjtBQUNBTSxJQUFBQSxlQUFlLEVBQUU7QUFDZixpQkFBUyxJQURNO0FBRWZDLE1BQUFBLElBQUksRUFBRVosRUFBRSxDQUFDYTtBQUZNLEtBakNQO0FBcUNWO0FBQ0FDLElBQUFBLGFBQWEsRUFBRTtBQUNiLGlCQUFTLElBREk7QUFFYkYsTUFBQUEsSUFBSSxFQUFFWixFQUFFLENBQUNlO0FBRkk7QUF0Q0wsR0FIUDtBQWlETDtBQUVBQyxFQUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Y7QUFDQSxTQUFLQyxVQUFMLEdBckJrQixDQXNCaEI7QUFDSCxHQTFFSTtBQTRFTEEsRUFBQUEsVUE1RUssd0JBNEVTO0FBQ1osUUFBSUMsS0FBSyxHQUFFLElBQVg7O0FBQ0EsUUFBSUMsbUJBQW1CLEdBQUduQixFQUFFLENBQUNvQixHQUFILENBQU9DLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLHFCQUE1QixDQUExQixDQUZZLENBRWtFOztBQUM5RSxRQUFHSCxtQkFBbUIsSUFBRSxFQUF4QixFQUEyQjtBQUN4QnJCLE1BQUFBLFdBQVcsQ0FBQ3lCLFFBQVosQ0FBcUIsVUFBckI7QUFDRixLQUZELE1BRUs7QUFDSCxVQUFJQyxTQUFTLEdBQUcxQixXQUFXLENBQUMyQixXQUFaLENBQXdCTixtQkFBeEIsQ0FBaEI7QUFDQW5CLE1BQUFBLEVBQUUsQ0FBQzBCLE1BQUgsQ0FBVUMsSUFBVixDQUFlO0FBQUVDLFFBQUFBLEdBQUcsRUFBRUo7QUFBUCxPQUFmLEVBQW1DLFVBQVVLLEdBQVYsRUFBZUMsSUFBZixFQUFxQjtBQUN0REMsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLElBQVosRUFEc0QsQ0FFdEQ7QUFDQTs7QUFDQVosUUFBQUEsS0FBSyxDQUFDZSxTQUFOLENBQWdCSCxJQUFoQixFQUpzRCxDQUloQzs7O0FBQ3RCWixRQUFBQSxLQUFLLENBQUNnQixVQUFOLENBQWlCSixJQUFqQixFQUxzRCxDQUsvQjs7QUFDMUIsT0FOQztBQU9EO0FBQ0YsR0EzRkk7QUE0Rkw7QUFDQUcsRUFBQUEsU0E3RksscUJBNkZLSCxJQTdGTCxFQTZGVTtBQUNYLFFBQUlaLEtBQUssR0FBRyxJQUFaOztBQUNBLFFBQUtpQixPQUFPLEdBQUVMLElBQUksQ0FBQ0EsSUFBTCxDQUFVLFNBQVYsQ0FBZDtBQUNBLFFBQUlOLFNBQVMsR0FBRzFCLFdBQVcsQ0FBQ3NDLE9BQVosQ0FBb0JELE9BQXBCLENBQWhCO0FBQ0FuQyxJQUFBQSxFQUFFLENBQUMwQixNQUFILENBQVVDLElBQVYsQ0FBZTtBQUFFQyxNQUFBQSxHQUFHLEVBQUVKO0FBQVAsS0FBZixFQUFtQyxVQUFVSyxHQUFWLEVBQWVRLE9BQWYsRUFBd0I7QUFDckRuQixNQUFBQSxLQUFLLENBQUNWLElBQU4sQ0FBVzhCLFlBQVgsQ0FBd0J0QyxFQUFFLENBQUN1QyxNQUEzQixFQUFtQ0MsV0FBbkMsR0FBaUQsSUFBSXhDLEVBQUUsQ0FBQ3lDLFdBQVAsQ0FBbUJKLE9BQW5CLENBQWpEO0FBQ0wsS0FGRDtBQUdILEdBcEdJO0FBcUdMSyxFQUFBQSxVQXJHSyx3QkFxR087QUFDVixRQUFJeEIsS0FBSyxHQUFFLElBQVg7O0FBQ0FwQixJQUFBQSxXQUFXLENBQUM2QyxRQUFaLENBQXFCLDJCQUFyQixFQUFrRDVDLE1BQWxELEVBQTBELFVBQVUrQixJQUFWLEVBQWdCO0FBQ3hFO0FBQ0FaLE1BQUFBLEtBQUssQ0FBQ2dCLFVBQU4sQ0FBaUJKLElBQWpCO0FBQ0MsS0FISDtBQUlELEdBM0dJO0FBNEdMO0FBQ0FJLEVBQUFBLFVBN0dLLHNCQTZHTUosSUE3R04sRUE2R1c7QUFFWixRQUFJWixLQUFLLEdBQUcsSUFBWixDQUZZLENBR1o7QUFDQTs7O0FBQ0EsUUFBSTBCLEtBQUssR0FBR2QsSUFBSSxDQUFDQSxJQUFMLENBQVVlLGdCQUF0QjtBQUNBLFFBQUlDLEtBQUssR0FBR2hCLElBQUksQ0FBQ0EsSUFBTCxDQUFVZSxnQkFBVixDQUEyQkUsTUFBdkMsQ0FOWSxDQVFaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0E3QixJQUFBQSxLQUFLLENBQUNkLE9BQU4sQ0FBYzRDLGlCQUFkOztBQUNBOUIsSUFBQUEsS0FBSyxDQUFDZCxPQUFOLENBQWM2QyxrQkFBZCxHQWRZLENBZVo7OztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxHQUFDSixLQUFoQixFQUF1QkksQ0FBQyxFQUF4QixFQUE0QjtBQUN4QjtBQUNBO0FBQ0EsVUFBSUMsR0FBRyxHQUFFUCxLQUFLLENBQUNNLENBQUQsQ0FBZDs7QUFDQSxVQUFHQyxHQUFHLENBQUNDLFVBQUosSUFBZ0IsQ0FBbkIsRUFBcUI7QUFDbkI7QUFDQTtBQUNBLFlBQUlDLElBQUksR0FBR3JELEVBQUUsQ0FBQ3NELFdBQUgsQ0FBZXBDLEtBQUssQ0FBQ1osTUFBckIsQ0FBWDtBQUNBeUIsUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVltQixHQUFaO0FBQ0FFLFFBQUFBLElBQUksQ0FBQ2YsWUFBTCxDQUFrQixlQUFsQixFQUFtQ2lCLFFBQW5DLENBQTRDSixHQUE1QztBQUNBRSxRQUFBQSxJQUFJLENBQUNHLENBQUwsR0FBT0wsR0FBRyxDQUFDSyxDQUFYO0FBQ0FILFFBQUFBLElBQUksQ0FBQ0ksQ0FBTCxHQUFPTixHQUFHLENBQUNNLENBQVgsQ0FQbUIsQ0FRbkI7QUFDQTs7QUFDQXZDLFFBQUFBLEtBQUssQ0FBQ2QsT0FBTixDQUFjc0QsUUFBZCxDQUF1QkwsSUFBdkI7QUFDRDtBQUNKO0FBQ0osR0E5SUk7QUErSUxNLEVBQUFBLFFBL0lLLHNCQStJSztBQUNSM0QsSUFBQUEsRUFBRSxDQUFDNEQsUUFBSCxDQUFZQyxTQUFaLENBQXNCLFVBQXRCO0FBQ0QsR0FqSkk7QUFrSkxDLEVBQUFBLFNBbEpLLHVCQWtKTTtBQUNUOUQsSUFBQUEsRUFBRSxDQUFDNEQsUUFBSCxDQUFZQyxTQUFaLENBQXNCLElBQXRCO0FBQ0QsR0FwSkk7QUFxSkxFLEVBQUFBLGFBckpLLHlCQXFKU0MsTUFySlQsRUFxSmlCO0FBQ2xCQSxJQUFBQSxNQUFNLENBQUNDLEVBQVAsQ0FBVWpFLEVBQUUsQ0FBQ0ssSUFBSCxDQUFRNkQsU0FBUixDQUFrQkMsV0FBNUIsRUFBeUMsS0FBS0MsVUFBOUMsRUFBMEQsSUFBMUQ7QUFDQUosSUFBQUEsTUFBTSxDQUFDQyxFQUFQLENBQVVqRSxFQUFFLENBQUNLLElBQUgsQ0FBUTZELFNBQVIsQ0FBa0JHLFVBQTVCLEVBQXdDLEtBQUtDLFNBQTdDLEVBQXdELElBQXhEO0FBQ0FOLElBQUFBLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVakUsRUFBRSxDQUFDSyxJQUFILENBQVE2RCxTQUFSLENBQWtCSyxTQUE1QixFQUF1QyxLQUFLQyxRQUE1QyxFQUFzRCxJQUF0RDtBQUNELEdBekpFLENBMEpMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQTVOSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8g5LiW55WM5pON5L2cICBcclxudmFyIEh0dHBIZWxwZXIgPSByZXF1aXJlKFwiLi4vaHR0cFwiKTsgXHJcbnZhciBodHRwUmVxdWVzdCA9IG5ldyBIdHRwSGVscGVyKCk7XHJcbnZhciBwYXJhbXMgPVtdO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgICAvL+a1i+ivlWl0ZW1cclxuICAgICAgLy8gICBjb250ZW50OiB7XHJcbiAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAvLyAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAvLyAgIH0sXHJcblxyXG4gICAgICAvLyBwZXJzb246IHtcclxuICAgICAgLy8gICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAvLyAgIHR5cGU6IGNjLlByZWZhYlxyXG4gICAgICAvLyB9LFxyXG4gIFxyXG4gICAgICBjb250ZW50OiBjYy5Ob2RlLFxyXG4gICAgICBwZXJzb246IGNjLlByZWZhYixcclxuICAgICAgaG9tZTogY2MuTm9kZSxcclxuICAgICAgcmVsb2FkOiBjYy5Ob2RlLFxyXG4gICAgICBiYWNrOiBjYy5Ob2RlLFxyXG4gICAgICAvL+WIl+ihqFxyXG4gICAgICB0ZXN0X3Njcm9sbFZpZXc6IHtcclxuICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIHR5cGU6IGNjLlNjcm9sbFZpZXdcclxuICAgICAgfSxcclxuICAgICAgLy/nv7vpobXlrrnlmahcclxuICAgICAgdGVzdF9wYWdlVmlldzoge1xyXG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgdHlwZTogY2MuUGFnZVZpZXdcclxuICAgICAgfSxcclxuXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgbGV0IHBlcnNvbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGVyc29uKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5jb250ZW49cGVyc29uXHJcbiAgICAgICAgLy8gICAgIC8vIHBlcnNvbi5wYXJlbnQgPSB0aGlzLmNvbnRlbnQ7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuYWRkVG91Y2hFdmVudChwZXJzb24pOyAgLy/mt7vliqDop6bmkbjkuovku7ZcclxuICAgICAgICAvLyAgIH1cclxuICAgICAgICAvLyB0aGlzLnZhbHVlX3NldCA9IFtdO1xyXG4gICAgICAgIC8vIC8vIOWmguaenOS9oOi/memHjOaYr+aOkuihjOamnO+8jOmCo+S5iOS9oOWwsXB1c2jmjpLooYzmppznmoTmlbDmja47XHJcbiAgICAgICAgLy8gZm9yKHZhciBpID0gMTsgaSA8PSAxMDA7IGkgKyspIHtcclxuICAgICAgICAvLyAgICAgdGhpcy52YWx1ZV9zZXQucHVzaChpKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMuY29udGVudCA9IHRoaXMuc2Nyb2xsX3ZpZXcuY29udGVudDtcclxuICAgICAgICAvLyB0aGlzLm9wdF9pdGVtX3NldCA9IFtdO1xyXG4gICAgICAgIC8vIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLlBBR0VfTlVNICogMzsgaSArKykge1xyXG4gICAgICAgIC8vICAgICB2YXIgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbV9wcmVmYWIpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMub3B0X2l0ZW1fc2V0LnB1c2goaXRlbSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAvLyBodHRwUmVxdWVzdC5wbGF5R2FtZUxvYWRpbmcoKVxyXG4gICAgICB0aGlzLnNwYXduVG9vbHMoKVxyXG4gICAgICAgIC8vIHRoaXMuc2Nyb2xsX3ZpZXcubm9kZS5vbihcInNjcm9sbC1lbmRlZFwiLCB0aGlzLm9uX3Njcm9sbF9lbmRlZC5iaW5kKHRoaXMpLCB0aGlzKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3Bhd25Ub29scyAoKSB7XHJcbiAgICAgIHZhciBfdGhpcyA9dGhpcztcclxuICAgICAgdmFyIGZpZ3RoaW5nX3JlbW90ZV91cmwgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZpZ3RoaW5nX3JlbW90ZV91cmwnKTsgLy/or7vlj5bmlbDmja4tLeaImOaWl+iusOW9lVxyXG4gICAgICBpZihmaWd0aGluZ19yZW1vdGVfdXJsPT0nJyl7XHJcbiAgICAgICAgIGh0dHBSZXF1ZXN0LnBsYXlHYW1lKCdtYXAv6K+45aSp5Zyw5Zu+Jyk7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHZhciByZW1vdGVVcmwgPSBodHRwUmVxdWVzdC5odHRwVXJsSnNvbihmaWd0aGluZ19yZW1vdGVfdXJsKTtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZCh7IHVybDogcmVtb3RlVXJsIH0sIGZ1bmN0aW9uIChlcnIsIGRhdGEpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpIFxyXG4gICAgICAgICAgLy8gX3RoaXMuYWRkV29yZE1hcChyZXN1bHRzKSAvL+eUn+aIkOeUn+eJqVxyXG4gICAgICAgICAgLy8gX3NlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKVxyXG4gICAgICAgICAgX3RoaXMuYWRkTWFwUGljKGRhdGEpIC8v55Sf5oiQ5Zyw5Zu+XHJcbiAgICAgICAgICBfdGhpcy5hZGRXb3JkTWFwKGRhdGEpIC8v55Sf5oiQ55Sf54mpXHJcbiAgICAgIH0pOyAgICBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8v55Sf5oiQ5Zyw5Zu+XHJcbiAgICBhZGRNYXBQaWMoZGF0YSl7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgIG1hcF9waWMgPWRhdGEuZGF0YVsnbWFwX3BpYyddO1xyXG4gICAgICAgIHZhciByZW1vdGVVcmwgPSBodHRwUmVxdWVzdC5odHRwVXJsKG1hcF9waWMpO1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkKHsgdXJsOiByZW1vdGVVcmwgfSwgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkgeyAgXHJcbiAgICAgICAgICAgICAgX3RoaXMuaG9tZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICByZWxvYWRXb3JkKCl7XHJcbiAgICAgIHZhciBfdGhpcyA9dGhpcztcclxuICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3QoJy9hcHAvYXBwLWFwaXdvcmQvbWFwLXdvcmQnLCBwYXJhbXMsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgLy/lhpnlhaXlnLDlm77mlbDmja5cclxuICAgICAgICBfdGhpcy5hZGRXb3JkTWFwKGRhdGEpXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICAvL+eUn+aIkOeUn+eJqVxyXG4gICAgYWRkV29yZE1hcChkYXRhKXtcclxuICAgIFxyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgLy8g5qC55o2uTWFwVG9vbHPnlJ/miJDnm7jlupTnmoTpgZPlhbdcclxuICAgICAgICAvLyBfdGhpcy50b29sc0FycmF5ID0gW107XHJcbiAgICAgICAgbGV0IFRPT0xTID0gZGF0YS5kYXRhLnVzZXJfaW5fd29yZF9tYXA7XHJcbiAgICAgICAgdmFyIHRvdGFsID0gZGF0YS5kYXRhLnVzZXJfaW5fd29yZF9tYXAubGVuZ3RoO1xyXG4gIFxyXG4gICAgICAgIC8vIHZhciBmaSA9IGNjLmZhZGVJbigyKS8v5riQ5pi+5pWI5p6cXHJcbiAgICAgICAgLy8gX3RoaXMuY29udGVudC5ydW5BY3Rpb24oZmkpO1xyXG4gICAgICAgIC8vIHZhciBmbyA9IGNjLmZhZGVPdXQoMSkvL+a4kOmakOaViOaenFxyXG4gICAgICAgIC8vIF90aGlzLmNvbnRlbnQucnVuQWN0aW9uKGZvKTtcclxuICAgICAgICAvL+enu+mZpOiKgueCuVxyXG4gICAgICAgIF90aGlzLmNvbnRlbnQucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICBfdGhpcy5jb250ZW50LmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIC8v5re75Yqg6IqC54K5XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRvdGFsOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaSkgXHJcbiAgICAgICAgICAgIC8v5q275Lqh56e76ZmkbWFwX3N0YXR1c1xyXG4gICAgICAgICAgICB2YXIgbWFwID1UT09MU1tpXTtcclxuICAgICAgICAgICAgaWYobWFwLm1hcF9zdGF0dXM9PTEpe1xyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1hcC54KVxyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1hcC55KVxyXG4gICAgICAgICAgICAgIGxldCB0b29sID0gY2MuaW5zdGFudGlhdGUoX3RoaXMucGVyc29uKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtYXApXHJcbiAgICAgICAgICAgICAgdG9vbC5nZXRDb21wb25lbnQoJ2ZpZ2h0aW5nVG9vbHMnKS5pbml0SW5mbyhtYXApO1xyXG4gICAgICAgICAgICAgIHRvb2wueD1tYXAueFxyXG4gICAgICAgICAgICAgIHRvb2wueT1tYXAueVxyXG4gICAgICAgICAgICAgIC8vIF90aGlzLnRvb2xzQXJyYXkucHVzaCh0b29sKTtcclxuICAgICAgICAgICAgICAvLyB0b29sLnNldFBvc2l0aW9uKG1hcC54LG1hcC55KTsgIFxyXG4gICAgICAgICAgICAgIF90aGlzLmNvbnRlbnQuYWRkQ2hpbGQodG9vbCk7ICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYmFja19tYXAoKXtcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtYXAv6K+45aSp5Zyw5Zu+Jyk7XHJcbiAgICB9LFxyXG4gICAgYmFja19ob21lKCl7XHJcbiAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgn5aSn5Y6FJyk7XHJcbiAgICB9LFxyXG4gICAgYWRkVG91Y2hFdmVudChub2RlXzEpIHtcclxuICAgICAgICBub2RlXzEub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgbm9kZV8xLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICBub2RlXzEub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgfSxcclxuICAgIC8vIHN0YXJ0OiBmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICB0aGlzLnN0YXJ0X3kgPSB0aGlzLmNvbnRlbnQueTtcclxuICAgIC8vICAgICB0aGlzLnN0YXJ0X2luZGV4ID0gMDsgLy8g5b2T5YmN5oiR5LusMjTkuKpJdGVt5Yqg6L2955qEIDEwMOmhueaVsOaNrumHjOmdoueahOi1t+Wni+aVsOaNruiusOW9leeahOe0ouW8lTtcclxuICAgIC8vICAgICB0aGlzLmxvYWRfcmVjb3JkKHRoaXMuc3RhcnRfaW5kZXgpO1xyXG4gICAgLy8gfSxcclxuXHJcbiAgICAvLyAvLyDku47ov5nkuKrntKLlvJXlvIDlp4vvvIzliqDovb3mlbDmja7orrDlvZXliLDmiJHku6znmoTmu5rliqjliJfooajph4zpnaLnmoTpgInpoblcclxuICAgIC8vIGxvYWRfcmVjb3JkOiBmdW5jdGlvbihzdGFydF9pbmRleCkge1xyXG4gICAgLy8gICAgIHRoaXMuc3RhcnRfaW5kZXggPSBzdGFydF9pbmRleDtcclxuXHJcbiAgICAvLyAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuUEFHRV9OVU0gKiAzOyBpICsrKSB7XHJcbiAgICAvLyAgICAgICAgIHZhciBsYWJlbCA9IHRoaXMub3B0X2l0ZW1fc2V0W2ldLmdldENoaWxkQnlOYW1lKFwic3JjXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAvLyAgICAgICAgIC8vIOaYvuekuuaIkeS7rOeahOiusOW9lTtcclxuICAgIC8vICAgICAgICAgbGFiZWwuc3RyaW5nID0gdGhpcy52YWx1ZV9zZXRbc3RhcnRfaW5kZXggKyBpXTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9LFxyXG5cclxuICAgIC8vIG9uX3Njcm9sbF9lbmRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgdGhpcy5zY3JvbGx2ZWl3X2xvYWRfcmVjb2RlKCk7XHJcbiAgICAvLyAgICAgdGhpcy5zY3JvbGxfdmlldy5lbGFzdGljID0gdHJ1ZTtcclxuICAgIC8vIH0sXHJcblxyXG4gICAgLy8gc2Nyb2xsdmVpd19sb2FkX3JlY29kZTogZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgIC8vIOWQkeS4i+WKoOi9veS6hlxyXG4gICAgLy8gICAgIGlmICh0aGlzLnN0YXJ0X2luZGV4ICsgdGhpcy5QQUdFX05VTSAqIDMgPCB0aGlzLnZhbHVlX3NldC5sZW5ndGggJiZcclxuICAgIC8vICAgICAgICAgdGhpcy5jb250ZW50LnkgPj0gdGhpcy5zdGFydF95ICsgdGhpcy5QQUdFX05VTSAqIDIgKiB0aGlzLk9QVF9IRUlHSFQpIHsgLy8g5Yqo5oCB5Yqg6L29XHJcbiAgICAgICAgICAgIFxyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5zY3JvbGxfdmlldy5fYXV0b1Njcm9sbGluZykgeyAvLyDnrYnlvoXov5nkuKroh6rliqjmu5rliqjnu5PmnZ/ku6XlkI7lho3lgZrliqDovb1cclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2Nyb2xsX3ZpZXcuZWxhc3RpYyA9IGZhbHNlOyAvLyDmmoLml7blhbPpl63lm57lvLnmlYjmnpxcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgdmFyIGRvd25fbG9hZGVkID0gdGhpcy5QQUdFX05VTTtcclxuICAgIC8vICAgICAgICAgdGhpcy5zdGFydF9pbmRleCArPSBkb3duX2xvYWRlZDtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuc3RhcnRfaW5kZXggKyB0aGlzLlBBR0VfTlVNICogMyA+IHRoaXMudmFsdWVfc2V0Lmxlbmd0aCkge1xyXG4gICAgLy8gICAgICAgICAgICAgdmFyIG91dF9sZW4gPSB0aGlzLnN0YXJ0X2luZGV4ICsgdGhpcy5QQUdFX05VTSAqIDMgLSB0aGlzLnZhbHVlX3NldC5sZW5ndGg7XHJcbiAgICAvLyAgICAgICAgICAgICBkb3duX2xvYWRlZCAtPSAob3V0X2xlbik7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnN0YXJ0X2luZGV4IC09IChvdXRfbGVuKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB0aGlzLmxvYWRfcmVjb3JkKHRoaXMuc3RhcnRfaW5kZXgpO1xyXG5cclxuICAgIC8vICAgICAgICAgdGhpcy5jb250ZW50LnkgLT0gKGRvd25fbG9hZGVkICogdGhpcy5PUFRfSEVJR0hUKTtcclxuICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgLy8g5ZCR5LiK5Yqg6L29XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuc3RhcnRfaW5kZXggPiAwICYmIHRoaXMuY29udGVudC55IDw9IHRoaXMuc3RhcnRfeSkge1xyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5zY3JvbGxfdmlldy5fYXV0b1Njcm9sbGluZykgeyAvLyDnrYnlvoXov5nkuKroh6rliqjmu5rliqjnu5PmnZ/ku6XlkI7lho3lgZrliqDovb1cclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2Nyb2xsX3ZpZXcuZWxhc3RpYyA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICB2YXIgdXBfbG9hZGVkID0gdGhpcy5QQUdFX05VTTtcclxuICAgIC8vICAgICAgICAgdGhpcy5zdGFydF9pbmRleCAtPSB1cF9sb2FkZWQ7XHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLnN0YXJ0X2luZGV4IDwgMCkge1xyXG4gICAgLy8gICAgICAgICAgICAgdXBfbG9hZGVkICs9IHRoaXMuc3RhcnRfaW5kZXg7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnN0YXJ0X2luZGV4ID0gMDsgXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgdGhpcy5sb2FkX3JlY29yZCh0aGlzLnN0YXJ0X2luZGV4KTtcclxuICAgIC8vICAgICAgICAgdGhpcy5jb250ZW50LnkgKz0gKHVwX2xvYWRlZCAqIHRoaXMuT1BUX0hFSUdIVCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIC8vIGVuZCBcclxuICAgIC8vIH0sXHJcbiAgICAvLyAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgIC8vICAgICB0aGlzLnNjcm9sbHZlaXdfbG9hZF9yZWNvZGUoKTtcclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iXX0=