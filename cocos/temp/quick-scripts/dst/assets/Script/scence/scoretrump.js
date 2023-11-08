
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/scence/scoretrump.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f6b99ZAVAJJtbvT/VopdNIP', 'scoretrump');
// Script/scence/scoretrump.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
    this.spawnTools(); // this.scroll_view.node.on("scroll-ended", this.on_scroll_ended.bind(this), this);
  },
  spawnTools: function spawnTools() {
    var _this = this;

    var HttpHelper = require("http");

    var httpRequest = new HttpHelper();
    var params = {
      'page': 1,
      'pageSize': 11
    };
    httpRequest.httpPost('https://www.aheart.cn/app/api-server/user-register', params, function (data) {
      //   console.log(data);
      // console.log(_this.content)
      // let cellWidth = _this.content.width * 0.105;
      // let cellHeight = _this.content.height * 0.215;
      // let spacingX = _this.content.width * 0.022;
      // let spacingY = _this.content.height * 0.045;
      var cellWidth = _this.person.width * 0.2;
      var cellHeight = _this.person.height * 0.15;
      var spacingX = _this.person.width * 0.08;
      var spacingY = _this.person.height * 0.05; // _this.content.getComponent(cc.Layout).cellSize.width = cellWidth;
      // _this.content.getComponent(cc.Layout).cellSize.height = cellHeight;
      // _this.content.getComponent(cc.Layout).spacingX = spacingX;
      // _this.content.getComponent(cc.Layout).spacingY = spacingY;
      // 根据TOOLS生成相应的道具

      _this.toolsArray = [];
      var TOOLS = data.data.server;

      for (var i = 0; i < data.data.server.length; i++) {
        var tool = cc.instantiate(_this.person); // console.log(TOOLS[i])
        // _this.content.addChild(tool);

        tool.getComponent('Tools').initInfo(TOOLS[i]);

        _this.toolsArray.push(tool);

        _this.content.addChild(tool);

        console.log(tool);
      } // 定义content滚动条高度


      var scorllheight = _this.content.parent; //计算滚动条高度

      var height = (cellHeight + spacingY) * Math.ceil(data.data.server.length / 2); // console.log(height);
      // scorllheight.designResolution  = new cc.Size(600, height);

      scorllheight.setContentSize(600, height);
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuY2VcXHNjb3JldHJ1bXAuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjb250ZW50IiwiTm9kZSIsInBlcnNvbiIsIlByZWZhYiIsInRlc3Rfc2Nyb2xsVmlldyIsInR5cGUiLCJTY3JvbGxWaWV3IiwidGVzdF9wYWdlVmlldyIsIlBhZ2VWaWV3Iiwib25Mb2FkIiwic3Bhd25Ub29scyIsIl90aGlzIiwiSHR0cEhlbHBlciIsInJlcXVpcmUiLCJodHRwUmVxdWVzdCIsInBhcmFtcyIsImh0dHBQb3N0IiwiZGF0YSIsImNlbGxXaWR0aCIsIndpZHRoIiwiY2VsbEhlaWdodCIsImhlaWdodCIsInNwYWNpbmdYIiwic3BhY2luZ1kiLCJ0b29sc0FycmF5IiwiVE9PTFMiLCJzZXJ2ZXIiLCJpIiwibGVuZ3RoIiwidG9vbCIsImluc3RhbnRpYXRlIiwiZ2V0Q29tcG9uZW50IiwiaW5pdEluZm8iLCJwdXNoIiwiYWRkQ2hpbGQiLCJjb25zb2xlIiwibG9nIiwic2NvcmxsaGVpZ2h0IiwicGFyZW50IiwiTWF0aCIsImNlaWwiLCJzZXRDb250ZW50U2l6ZSIsImFkZFRvdWNoRXZlbnQiLCJub2RlXzEiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwidG91Y2hTdGFydCIsIlRPVUNIX01PVkUiLCJ0b3VjaE1vdmUiLCJUT1VDSF9FTkQiLCJ0b3VjaEVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0k7QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUFDLElBQUFBLE9BQU8sRUFBRUosRUFBRSxDQUFDSyxJQTNCRjtBQTRCVkMsSUFBQUEsTUFBTSxFQUFFTixFQUFFLENBQUNPLE1BNUJEO0FBOEJWO0FBQ0FDLElBQUFBLGVBQWUsRUFBRTtBQUNmLGlCQUFTLElBRE07QUFFZkMsTUFBQUEsSUFBSSxFQUFFVCxFQUFFLENBQUNVO0FBRk0sS0EvQlA7QUFtQ1Y7QUFDQUMsSUFBQUEsYUFBYSxFQUFFO0FBQ2IsaUJBQVMsSUFESTtBQUViRixNQUFBQSxJQUFJLEVBQUVULEVBQUUsQ0FBQ1k7QUFGSTtBQXBDTCxHQUhQO0FBaURMO0FBRUFDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRixTQUFLQyxVQUFMLEdBcEJrQixDQXFCaEI7QUFDSCxHQXpFSTtBQTJFTEEsRUFBQUEsVUEzRUssd0JBMkVTO0FBQ1osUUFBSUMsS0FBSyxHQUFFLElBQVg7O0FBQ0EsUUFBSUMsVUFBVSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUF4Qjs7QUFDQSxRQUFJQyxXQUFXLEdBQUcsSUFBSUYsVUFBSixFQUFsQjtBQUNBLFFBQUlHLE1BQU0sR0FBRztBQUNMLGNBQVEsQ0FESDtBQUVMLGtCQUFZO0FBRlAsS0FBYjtBQUlBRCxJQUFBQSxXQUFXLENBQUNFLFFBQVosQ0FBcUIsb0RBQXJCLEVBQTJFRCxNQUEzRSxFQUFtRixVQUFVRSxJQUFWLEVBQWdCO0FBQ25HO0FBQ0k7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQUlDLFNBQVMsR0FBR1AsS0FBSyxDQUFDVCxNQUFOLENBQWFpQixLQUFiLEdBQXFCLEdBQXJDO0FBQ0EsVUFBSUMsVUFBVSxHQUFHVCxLQUFLLENBQUNULE1BQU4sQ0FBYW1CLE1BQWIsR0FBc0IsSUFBdkM7QUFDQSxVQUFJQyxRQUFRLEdBQUdYLEtBQUssQ0FBQ1QsTUFBTixDQUFhaUIsS0FBYixHQUFxQixJQUFwQztBQUNBLFVBQUlJLFFBQVEsR0FBR1osS0FBSyxDQUFDVCxNQUFOLENBQWFtQixNQUFiLEdBQXNCLElBQXJDLENBVitGLENBYS9GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FWLE1BQUFBLEtBQUssQ0FBQ2EsVUFBTixHQUFtQixFQUFuQjtBQUNBLFVBQUlDLEtBQUssR0FBR1IsSUFBSSxDQUFDQSxJQUFMLENBQVVTLE1BQXRCOztBQUVBLFdBQUssSUFBSUMsQ0FBQyxHQUFDLENBQVgsRUFBY0EsQ0FBQyxHQUFDVixJQUFJLENBQUNBLElBQUwsQ0FBVVMsTUFBVixDQUFpQkUsTUFBakMsRUFBeUNELENBQUMsRUFBMUMsRUFBOEM7QUFDMUMsWUFBSUUsSUFBSSxHQUFHakMsRUFBRSxDQUFDa0MsV0FBSCxDQUFlbkIsS0FBSyxDQUFDVCxNQUFyQixDQUFYLENBRDBDLENBRTFDO0FBQ0E7O0FBQ0EyQixRQUFBQSxJQUFJLENBQUNFLFlBQUwsQ0FBa0IsT0FBbEIsRUFBMkJDLFFBQTNCLENBQW9DUCxLQUFLLENBQUNFLENBQUQsQ0FBekM7O0FBQ0FoQixRQUFBQSxLQUFLLENBQUNhLFVBQU4sQ0FBaUJTLElBQWpCLENBQXNCSixJQUF0Qjs7QUFDQWxCLFFBQUFBLEtBQUssQ0FBQ1gsT0FBTixDQUFja0MsUUFBZCxDQUF1QkwsSUFBdkI7O0FBQ0FNLFFBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZUCxJQUFaO0FBRUgsT0E5QjhGLENBK0IvRjs7O0FBQ0EsVUFBSVEsWUFBWSxHQUFJMUIsS0FBSyxDQUFDWCxPQUFOLENBQWNzQyxNQUFsQyxDQWhDK0YsQ0FpQy9GOztBQUNBLFVBQUtqQixNQUFNLEdBQUksQ0FBQ0QsVUFBVSxHQUFDRyxRQUFaLElBQXdCZ0IsSUFBSSxDQUFDQyxJQUFMLENBQVd2QixJQUFJLENBQUNBLElBQUwsQ0FBVVMsTUFBVixDQUFpQkUsTUFBakIsR0FBd0IsQ0FBbkMsQ0FBdkMsQ0FsQytGLENBbUMvRjtBQUNBOztBQUNBUyxNQUFBQSxZQUFZLENBQUNJLGNBQWIsQ0FBNEIsR0FBNUIsRUFBZ0NwQixNQUFoQztBQUNILEtBdENEO0FBdUNILEdBMUhNO0FBNEhMcUIsRUFBQUEsYUE1SEsseUJBNEhTQyxNQTVIVCxFQTRIaUI7QUFDbEJBLElBQUFBLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVaEQsRUFBRSxDQUFDSyxJQUFILENBQVE0QyxTQUFSLENBQWtCQyxXQUE1QixFQUF5QyxLQUFLQyxVQUE5QyxFQUEwRCxJQUExRDtBQUNBSixJQUFBQSxNQUFNLENBQUNDLEVBQVAsQ0FBVWhELEVBQUUsQ0FBQ0ssSUFBSCxDQUFRNEMsU0FBUixDQUFrQkcsVUFBNUIsRUFBd0MsS0FBS0MsU0FBN0MsRUFBd0QsSUFBeEQ7QUFDQU4sSUFBQUEsTUFBTSxDQUFDQyxFQUFQLENBQVVoRCxFQUFFLENBQUNLLElBQUgsQ0FBUTRDLFNBQVIsQ0FBa0JLLFNBQTVCLEVBQXVDLEtBQUtDLFFBQTVDLEVBQXNELElBQXREO0FBQ0QsR0FoSUUsQ0FpSUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBbk1LLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAgICAgLy/mtYvor5VpdGVtXHJcbiAgICAgIC8vICAgY29udGVudDoge1xyXG4gICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgLy8gICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgLy8gICB9LFxyXG5cclxuICAgICAgLy8gcGVyc29uOiB7XHJcbiAgICAgIC8vICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgLy8gICB0eXBlOiBjYy5QcmVmYWJcclxuICAgICAgLy8gfSxcclxuXHJcbiAgICAgIGNvbnRlbnQ6IGNjLk5vZGUsXHJcbiAgICAgIHBlcnNvbjogY2MuUHJlZmFiLFxyXG5cclxuICAgICAgLy/liJfooahcclxuICAgICAgdGVzdF9zY3JvbGxWaWV3OiB7XHJcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB0eXBlOiBjYy5TY3JvbGxWaWV3XHJcbiAgICAgIH0sXHJcbiAgICAgIC8v57+76aG15a655ZmoXHJcbiAgICAgIHRlc3RfcGFnZVZpZXc6IHtcclxuICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIHR5cGU6IGNjLlBhZ2VWaWV3XHJcbiAgICAgIH0sXHJcblxyXG4gICAgfSxcclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgbGV0IHBlcnNvbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGVyc29uKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5jb250ZW49cGVyc29uXHJcbiAgICAgICAgLy8gICAgIC8vIHBlcnNvbi5wYXJlbnQgPSB0aGlzLmNvbnRlbnQ7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuYWRkVG91Y2hFdmVudChwZXJzb24pOyAgLy/mt7vliqDop6bmkbjkuovku7ZcclxuICAgICAgICAvLyAgIH1cclxuICAgICAgICAvLyB0aGlzLnZhbHVlX3NldCA9IFtdO1xyXG4gICAgICAgIC8vIC8vIOWmguaenOS9oOi/memHjOaYr+aOkuihjOamnO+8jOmCo+S5iOS9oOWwsXB1c2jmjpLooYzmppznmoTmlbDmja47XHJcbiAgICAgICAgLy8gZm9yKHZhciBpID0gMTsgaSA8PSAxMDA7IGkgKyspIHtcclxuICAgICAgICAvLyAgICAgdGhpcy52YWx1ZV9zZXQucHVzaChpKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMuY29udGVudCA9IHRoaXMuc2Nyb2xsX3ZpZXcuY29udGVudDtcclxuICAgICAgICAvLyB0aGlzLm9wdF9pdGVtX3NldCA9IFtdO1xyXG4gICAgICAgIC8vIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLlBBR0VfTlVNICogMzsgaSArKykge1xyXG4gICAgICAgIC8vICAgICB2YXIgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbV9wcmVmYWIpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMub3B0X2l0ZW1fc2V0LnB1c2goaXRlbSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICB0aGlzLnNwYXduVG9vbHMoKVxyXG4gICAgICAgIC8vIHRoaXMuc2Nyb2xsX3ZpZXcubm9kZS5vbihcInNjcm9sbC1lbmRlZFwiLCB0aGlzLm9uX3Njcm9sbF9lbmRlZC5iaW5kKHRoaXMpLCB0aGlzKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3Bhd25Ub29scyAoKSB7XHJcbiAgICAgIHZhciBfdGhpcyA9dGhpcztcclxuICAgICAgdmFyIEh0dHBIZWxwZXIgPSByZXF1aXJlKFwiaHR0cFwiKTsgXHJcbiAgICAgIHZhciBodHRwUmVxdWVzdCA9IG5ldyBIdHRwSGVscGVyKCk7XHJcbiAgICAgIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgJ3BhZ2UnOiAxLFxyXG4gICAgICAgICAgICAgICdwYWdlU2l6ZSc6IDExLFxyXG4gICAgICB9O1xyXG4gICAgICBodHRwUmVxdWVzdC5odHRwUG9zdCgnaHR0cHM6Ly93d3cuYWhlYXJ0LmNuL2FwcC9hcGktc2VydmVyL3VzZXItcmVnaXN0ZXInLCBwYXJhbXMsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgIC8vICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhfdGhpcy5jb250ZW50KVxyXG4gICAgICAgICAgLy8gbGV0IGNlbGxXaWR0aCA9IF90aGlzLmNvbnRlbnQud2lkdGggKiAwLjEwNTtcclxuICAgICAgICAgIC8vIGxldCBjZWxsSGVpZ2h0ID0gX3RoaXMuY29udGVudC5oZWlnaHQgKiAwLjIxNTtcclxuICAgICAgICAgIC8vIGxldCBzcGFjaW5nWCA9IF90aGlzLmNvbnRlbnQud2lkdGggKiAwLjAyMjtcclxuICAgICAgICAgIC8vIGxldCBzcGFjaW5nWSA9IF90aGlzLmNvbnRlbnQuaGVpZ2h0ICogMC4wNDU7XHJcbiAgICAgICAgICBsZXQgY2VsbFdpZHRoID0gX3RoaXMucGVyc29uLndpZHRoICogMC4yO1xyXG4gICAgICAgICAgbGV0IGNlbGxIZWlnaHQgPSBfdGhpcy5wZXJzb24uaGVpZ2h0ICogMC4xNTtcclxuICAgICAgICAgIGxldCBzcGFjaW5nWCA9IF90aGlzLnBlcnNvbi53aWR0aCAqIDAuMDg7XHJcbiAgICAgICAgICBsZXQgc3BhY2luZ1kgPSBfdGhpcy5wZXJzb24uaGVpZ2h0ICogMC4wNTtcclxuXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIF90aGlzLmNvbnRlbnQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuY2VsbFNpemUud2lkdGggPSBjZWxsV2lkdGg7XHJcbiAgICAgICAgICAvLyBfdGhpcy5jb250ZW50LmdldENvbXBvbmVudChjYy5MYXlvdXQpLmNlbGxTaXplLmhlaWdodCA9IGNlbGxIZWlnaHQ7XHJcbiAgICAgICAgICAvLyBfdGhpcy5jb250ZW50LmdldENvbXBvbmVudChjYy5MYXlvdXQpLnNwYWNpbmdYID0gc3BhY2luZ1g7XHJcbiAgICAgICAgICAvLyBfdGhpcy5jb250ZW50LmdldENvbXBvbmVudChjYy5MYXlvdXQpLnNwYWNpbmdZID0gc3BhY2luZ1k7XHJcbiAgICAgICAgICAvLyDmoLnmja5UT09MU+eUn+aIkOebuOW6lOeahOmBk+WFt1xyXG4gICAgICAgICAgX3RoaXMudG9vbHNBcnJheSA9IFtdO1xyXG4gICAgICAgICAgbGV0IFRPT0xTID0gZGF0YS5kYXRhLnNlcnZlcjtcclxuICAgICAgICBcclxuICAgICAgICAgIGZvciAobGV0IGk9MDsgaTxkYXRhLmRhdGEuc2VydmVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgbGV0IHRvb2wgPSBjYy5pbnN0YW50aWF0ZShfdGhpcy5wZXJzb24pO1xyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFRPT0xTW2ldKVxyXG4gICAgICAgICAgICAgIC8vIF90aGlzLmNvbnRlbnQuYWRkQ2hpbGQodG9vbCk7XHJcbiAgICAgICAgICAgICAgdG9vbC5nZXRDb21wb25lbnQoJ1Rvb2xzJykuaW5pdEluZm8oVE9PTFNbaV0pO1xyXG4gICAgICAgICAgICAgIF90aGlzLnRvb2xzQXJyYXkucHVzaCh0b29sKTtcclxuICAgICAgICAgICAgICBfdGhpcy5jb250ZW50LmFkZENoaWxkKHRvb2wpO1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvb2wpXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyDlrprkuYljb250ZW505rua5Yqo5p2h6auY5bqmXHJcbiAgICAgICAgICBsZXQgc2NvcmxsaGVpZ2h0ID0gIF90aGlzLmNvbnRlbnQucGFyZW50O1xyXG4gICAgICAgICAgLy/orqHnrpfmu5rliqjmnaHpq5jluqZcclxuICAgICAgICAgIGxldCAgaGVpZ2h0ID0gIChjZWxsSGVpZ2h0K3NwYWNpbmdZKSooIE1hdGguY2VpbCggZGF0YS5kYXRhLnNlcnZlci5sZW5ndGgvMikpO1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coaGVpZ2h0KTtcclxuICAgICAgICAgIC8vIHNjb3JsbGhlaWdodC5kZXNpZ25SZXNvbHV0aW9uICA9IG5ldyBjYy5TaXplKDYwMCwgaGVpZ2h0KTtcclxuICAgICAgICAgIHNjb3JsbGhlaWdodC5zZXRDb250ZW50U2l6ZSg2MDAsaGVpZ2h0KTtcclxuICAgICAgfSlcclxuICB9LFxyXG5cclxuICAgIGFkZFRvdWNoRXZlbnQobm9kZV8xKSB7XHJcbiAgICAgICAgbm9kZV8xLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIG5vZGVfMS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLnRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgbm9kZV8xLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgIH0sXHJcbiAgICAvLyBzdGFydDogZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgdGhpcy5zdGFydF95ID0gdGhpcy5jb250ZW50Lnk7XHJcbiAgICAvLyAgICAgdGhpcy5zdGFydF9pbmRleCA9IDA7IC8vIOW9k+WJjeaIkeS7rDI05LiqSXRlbeWKoOi9veeahCAxMDDpobnmlbDmja7ph4zpnaLnmoTotbflp4vmlbDmja7orrDlvZXnmoTntKLlvJU7XHJcbiAgICAvLyAgICAgdGhpcy5sb2FkX3JlY29yZCh0aGlzLnN0YXJ0X2luZGV4KTtcclxuICAgIC8vIH0sXHJcblxyXG4gICAgLy8gLy8g5LuO6L+Z5Liq57Si5byV5byA5aeL77yM5Yqg6L295pWw5o2u6K6w5b2V5Yiw5oiR5Lus55qE5rua5Yqo5YiX6KGo6YeM6Z2i55qE6YCJ6aG5XHJcbiAgICAvLyBsb2FkX3JlY29yZDogZnVuY3Rpb24oc3RhcnRfaW5kZXgpIHtcclxuICAgIC8vICAgICB0aGlzLnN0YXJ0X2luZGV4ID0gc3RhcnRfaW5kZXg7XHJcblxyXG4gICAgLy8gICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLlBBR0VfTlVNICogMzsgaSArKykge1xyXG4gICAgLy8gICAgICAgICB2YXIgbGFiZWwgPSB0aGlzLm9wdF9pdGVtX3NldFtpXS5nZXRDaGlsZEJ5TmFtZShcInNyY1wiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgLy8gICAgICAgICAvLyDmmL7npLrmiJHku6znmoTorrDlvZU7XHJcbiAgICAvLyAgICAgICAgIGxhYmVsLnN0cmluZyA9IHRoaXMudmFsdWVfc2V0W3N0YXJ0X2luZGV4ICsgaV07XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSxcclxuXHJcbiAgICAvLyBvbl9zY3JvbGxfZW5kZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgIHRoaXMuc2Nyb2xsdmVpd19sb2FkX3JlY29kZSgpO1xyXG4gICAgLy8gICAgIHRoaXMuc2Nyb2xsX3ZpZXcuZWxhc3RpYyA9IHRydWU7XHJcbiAgICAvLyB9LFxyXG5cclxuICAgIC8vIHNjcm9sbHZlaXdfbG9hZF9yZWNvZGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgICAvLyDlkJHkuIvliqDovb3kuoZcclxuICAgIC8vICAgICBpZiAodGhpcy5zdGFydF9pbmRleCArIHRoaXMuUEFHRV9OVU0gKiAzIDwgdGhpcy52YWx1ZV9zZXQubGVuZ3RoICYmXHJcbiAgICAvLyAgICAgICAgIHRoaXMuY29udGVudC55ID49IHRoaXMuc3RhcnRfeSArIHRoaXMuUEFHRV9OVU0gKiAyICogdGhpcy5PUFRfSEVJR0hUKSB7IC8vIOWKqOaAgeWKoOi9vVxyXG4gICAgICAgICAgICBcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsX3ZpZXcuX2F1dG9TY3JvbGxpbmcpIHsgLy8g562J5b6F6L+Z5Liq6Ieq5Yqo5rua5Yqo57uT5p2f5Lul5ZCO5YaN5YGa5Yqg6L29XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjcm9sbF92aWV3LmVsYXN0aWMgPSBmYWxzZTsgLy8g5pqC5pe25YWz6Zet5Zue5by55pWI5p6cXHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgIHZhciBkb3duX2xvYWRlZCA9IHRoaXMuUEFHRV9OVU07XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc3RhcnRfaW5kZXggKz0gZG93bl9sb2FkZWQ7XHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLnN0YXJ0X2luZGV4ICsgdGhpcy5QQUdFX05VTSAqIDMgPiB0aGlzLnZhbHVlX3NldC5sZW5ndGgpIHtcclxuICAgIC8vICAgICAgICAgICAgIHZhciBvdXRfbGVuID0gdGhpcy5zdGFydF9pbmRleCArIHRoaXMuUEFHRV9OVU0gKiAzIC0gdGhpcy52YWx1ZV9zZXQubGVuZ3RoO1xyXG4gICAgLy8gICAgICAgICAgICAgZG93bl9sb2FkZWQgLT0gKG91dF9sZW4pO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zdGFydF9pbmRleCAtPSAob3V0X2xlbik7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgdGhpcy5sb2FkX3JlY29yZCh0aGlzLnN0YXJ0X2luZGV4KTtcclxuXHJcbiAgICAvLyAgICAgICAgIHRoaXMuY29udGVudC55IC09IChkb3duX2xvYWRlZCAqIHRoaXMuT1BUX0hFSUdIVCk7XHJcbiAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIC8vIOWQkeS4iuWKoOi9vVxyXG4gICAgLy8gICAgIGlmICh0aGlzLnN0YXJ0X2luZGV4ID4gMCAmJiB0aGlzLmNvbnRlbnQueSA8PSB0aGlzLnN0YXJ0X3kpIHtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsX3ZpZXcuX2F1dG9TY3JvbGxpbmcpIHsgLy8g562J5b6F6L+Z5Liq6Ieq5Yqo5rua5Yqo57uT5p2f5Lul5ZCO5YaN5YGa5Yqg6L29XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjcm9sbF92aWV3LmVsYXN0aWMgPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgdmFyIHVwX2xvYWRlZCA9IHRoaXMuUEFHRV9OVU07XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc3RhcnRfaW5kZXggLT0gdXBfbG9hZGVkO1xyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5zdGFydF9pbmRleCA8IDApIHtcclxuICAgIC8vICAgICAgICAgICAgIHVwX2xvYWRlZCArPSB0aGlzLnN0YXJ0X2luZGV4O1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zdGFydF9pbmRleCA9IDA7IFxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIHRoaXMubG9hZF9yZWNvcmQodGhpcy5zdGFydF9pbmRleCk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuY29udGVudC55ICs9ICh1cF9sb2FkZWQgKiB0aGlzLk9QVF9IRUlHSFQpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICAvLyBlbmQgXHJcbiAgICAvLyB9LFxyXG4gICAgLy8gLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAvLyAgICAgdGhpcy5zY3JvbGx2ZWl3X2xvYWRfcmVjb2RlKCk7XHJcbiAgICAvLyB9LFxyXG59KTtcclxuIl19