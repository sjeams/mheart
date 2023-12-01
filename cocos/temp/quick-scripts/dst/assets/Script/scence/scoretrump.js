
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
// 世界操作  
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
      'pageSize': 12
    };
    httpRequest.httpPost('https://www.aheart.cn/app-apiword/index', params, function (data) {
      console.log(data); // console.log(_this.content)
      // let cellWidth = _this.content.width * 0.105;
      // let cellHeight = _this.content.height * 0.215;
      // let spacingX = _this.content.width * 0.022;
      // let spacingY = _this.content.height * 0.045;
      // let cellWidth = _this.content.width * 0.15;
      // let cellHeight = _this.content.height * 0.15;
      // let spacingX = _this.content.width * 0.08;
      // let spacingY = _this.content.height * 0.05;
      // _this.content.getComponent(cc.Layout).cellSize.width = cellWidth;
      // _this.content.getComponent(cc.Layout).cellSize.height = cellHeight;
      // _this.content.getComponent(cc.Layout).spacingX = spacingX;
      // _this.content.getComponent(cc.Layout).spacingY = spacingY;
      // // 根据TOOLS生成相应的道具
      // _this.toolsArray = [];
      // let TOOLS = data.data.server;
      // for (let i=0; i<data.data.server.length; i++) {
      //     let tool = cc.instantiate(_this.person);
      //     console.log(TOOLS[i])
      //     // _this.content.addChild(tool);
      //     tool.getComponent('Tools').initInfo(TOOLS[i]);
      //     _this.toolsArray.push(tool);
      //     _this.content.addChild(tool);
      //     console.log(tool)
      // }
      // // 定义content滚动条高度
      // let scorllheight =  _this.content.parent;
      // //计算滚动条高度
      // let  height =  (cellHeight+spacingY)*( Math.ceil( data.data.server.length/2));
      // // console.log(height);
      // // scorllheight.designResolution  = new cc.Size(600, height);
      // scorllheight.setContentSize(600,height);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuY2VcXHNjb3JldHJ1bXAuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjb250ZW50IiwiTm9kZSIsInBlcnNvbiIsIlByZWZhYiIsInRlc3Rfc2Nyb2xsVmlldyIsInR5cGUiLCJTY3JvbGxWaWV3IiwidGVzdF9wYWdlVmlldyIsIlBhZ2VWaWV3Iiwib25Mb2FkIiwic3Bhd25Ub29scyIsIl90aGlzIiwiSHR0cEhlbHBlciIsInJlcXVpcmUiLCJodHRwUmVxdWVzdCIsInBhcmFtcyIsImh0dHBQb3N0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJhZGRUb3VjaEV2ZW50Iiwibm9kZV8xIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsInRvdWNoU3RhcnQiLCJUT1VDSF9NT1ZFIiwidG91Y2hNb3ZlIiwiVE9VQ0hfRU5EIiwidG91Y2hFbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0k7QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUFDLElBQUFBLE9BQU8sRUFBRUosRUFBRSxDQUFDSyxJQTNCRjtBQTRCVkMsSUFBQUEsTUFBTSxFQUFFTixFQUFFLENBQUNPLE1BNUJEO0FBOEJWO0FBQ0FDLElBQUFBLGVBQWUsRUFBRTtBQUNmLGlCQUFTLElBRE07QUFFZkMsTUFBQUEsSUFBSSxFQUFFVCxFQUFFLENBQUNVO0FBRk0sS0EvQlA7QUFtQ1Y7QUFDQUMsSUFBQUEsYUFBYSxFQUFFO0FBQ2IsaUJBQVMsSUFESTtBQUViRixNQUFBQSxJQUFJLEVBQUVULEVBQUUsQ0FBQ1k7QUFGSTtBQXBDTCxHQUhQO0FBaURMO0FBRUFDLEVBQUFBLE1BQU0sRUFBRSxrQkFBWTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDRixTQUFLQyxVQUFMLEdBcEJrQixDQXFCaEI7QUFDSCxHQXpFSTtBQTJFTEEsRUFBQUEsVUEzRUssd0JBMkVTO0FBQ1osUUFBSUMsS0FBSyxHQUFFLElBQVg7O0FBQ0EsUUFBSUMsVUFBVSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUF4Qjs7QUFDQSxRQUFJQyxXQUFXLEdBQUcsSUFBSUYsVUFBSixFQUFsQjtBQUNBLFFBQUlHLE1BQU0sR0FBRztBQUNMLGNBQVEsQ0FESDtBQUVMLGtCQUFZO0FBRlAsS0FBYjtBQUlBRCxJQUFBQSxXQUFXLENBQUNFLFFBQVosQ0FBcUIseUNBQXJCLEVBQWdFRCxNQUFoRSxFQUF3RSxVQUFVRSxJQUFWLEVBQWdCO0FBQ3RGQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWixFQURzRixDQUVwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsS0F0Q0Q7QUF1Q0gsR0ExSE07QUE0SExHLEVBQUFBLGFBNUhLLHlCQTRIU0MsTUE1SFQsRUE0SGlCO0FBQ2xCQSxJQUFBQSxNQUFNLENBQUNDLEVBQVAsQ0FBVTFCLEVBQUUsQ0FBQ0ssSUFBSCxDQUFRc0IsU0FBUixDQUFrQkMsV0FBNUIsRUFBeUMsS0FBS0MsVUFBOUMsRUFBMEQsSUFBMUQ7QUFDQUosSUFBQUEsTUFBTSxDQUFDQyxFQUFQLENBQVUxQixFQUFFLENBQUNLLElBQUgsQ0FBUXNCLFNBQVIsQ0FBa0JHLFVBQTVCLEVBQXdDLEtBQUtDLFNBQTdDLEVBQXdELElBQXhEO0FBQ0FOLElBQUFBLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVMUIsRUFBRSxDQUFDSyxJQUFILENBQVFzQixTQUFSLENBQWtCSyxTQUE1QixFQUF1QyxLQUFLQyxRQUE1QyxFQUFzRCxJQUF0RDtBQUNELEdBaElFLENBaUlMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQW5NSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8g5LiW55WM5pON5L2cICBcclxuY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICAvLyBmb286IHtcclxuICAgICAgICAvLyAgICAgLy8gQVRUUklCVVRFUzpcclxuICAgICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCwgICAgICAgIC8vIFRoZSBkZWZhdWx0IHZhbHVlIHdpbGwgYmUgdXNlZCBvbmx5IHdoZW4gdGhlIGNvbXBvbmVudCBhdHRhY2hpbmdcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRvIGEgbm9kZSBmb3IgdGhlIGZpcnN0IHRpbWVcclxuICAgICAgICAvLyAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHR5cGVvZiBkZWZhdWx0XHJcbiAgICAgICAgLy8gICAgIHNlcmlhbGl6YWJsZTogdHJ1ZSwgICAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0cnVlXHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAvLyBiYXI6IHtcclxuICAgICAgICAvLyAgICAgZ2V0ICgpIHtcclxuICAgICAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLl9iYXI7XHJcbiAgICAgICAgLy8gICAgIH0sXHJcbiAgICAgICAgLy8gICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuX2JhciA9IHZhbHVlO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfSxcclxuICAgICAgICAgICAgLy/mtYvor5VpdGVtXHJcbiAgICAgIC8vICAgY29udGVudDoge1xyXG4gICAgICAvLyAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgLy8gICAgIHR5cGU6IGNjLk5vZGVcclxuICAgICAgLy8gICB9LFxyXG5cclxuICAgICAgLy8gcGVyc29uOiB7XHJcbiAgICAgIC8vICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgLy8gICB0eXBlOiBjYy5QcmVmYWJcclxuICAgICAgLy8gfSxcclxuXHJcbiAgICAgIGNvbnRlbnQ6IGNjLk5vZGUsXHJcbiAgICAgIHBlcnNvbjogY2MuUHJlZmFiLFxyXG5cclxuICAgICAgLy/liJfooahcclxuICAgICAgdGVzdF9zY3JvbGxWaWV3OiB7XHJcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB0eXBlOiBjYy5TY3JvbGxWaWV3XHJcbiAgICAgIH0sXHJcbiAgICAgIC8v57+76aG15a655ZmoXHJcbiAgICAgIHRlc3RfcGFnZVZpZXc6IHtcclxuICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIHR5cGU6IGNjLlBhZ2VWaWV3XHJcbiAgICAgIH0sXHJcblxyXG4gICAgfSxcclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgbGV0IHBlcnNvbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGVyc29uKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5jb250ZW49cGVyc29uXHJcbiAgICAgICAgLy8gICAgIC8vIHBlcnNvbi5wYXJlbnQgPSB0aGlzLmNvbnRlbnQ7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuYWRkVG91Y2hFdmVudChwZXJzb24pOyAgLy/mt7vliqDop6bmkbjkuovku7ZcclxuICAgICAgICAvLyAgIH1cclxuICAgICAgICAvLyB0aGlzLnZhbHVlX3NldCA9IFtdO1xyXG4gICAgICAgIC8vIC8vIOWmguaenOS9oOi/memHjOaYr+aOkuihjOamnO+8jOmCo+S5iOS9oOWwsXB1c2jmjpLooYzmppznmoTmlbDmja47XHJcbiAgICAgICAgLy8gZm9yKHZhciBpID0gMTsgaSA8PSAxMDA7IGkgKyspIHtcclxuICAgICAgICAvLyAgICAgdGhpcy52YWx1ZV9zZXQucHVzaChpKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMuY29udGVudCA9IHRoaXMuc2Nyb2xsX3ZpZXcuY29udGVudDtcclxuICAgICAgICAvLyB0aGlzLm9wdF9pdGVtX3NldCA9IFtdO1xyXG4gICAgICAgIC8vIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLlBBR0VfTlVNICogMzsgaSArKykge1xyXG4gICAgICAgIC8vICAgICB2YXIgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbV9wcmVmYWIpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMub3B0X2l0ZW1fc2V0LnB1c2goaXRlbSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICB0aGlzLnNwYXduVG9vbHMoKVxyXG4gICAgICAgIC8vIHRoaXMuc2Nyb2xsX3ZpZXcubm9kZS5vbihcInNjcm9sbC1lbmRlZFwiLCB0aGlzLm9uX3Njcm9sbF9lbmRlZC5iaW5kKHRoaXMpLCB0aGlzKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3Bhd25Ub29scyAoKSB7XHJcbiAgICAgIHZhciBfdGhpcyA9dGhpcztcclxuICAgICAgdmFyIEh0dHBIZWxwZXIgPSByZXF1aXJlKFwiaHR0cFwiKTsgXHJcbiAgICAgIHZhciBodHRwUmVxdWVzdCA9IG5ldyBIdHRwSGVscGVyKCk7XHJcbiAgICAgIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgJ3BhZ2UnOiAxLFxyXG4gICAgICAgICAgICAgICdwYWdlU2l6ZSc6IDEyLFxyXG4gICAgICB9O1xyXG4gICAgICBodHRwUmVxdWVzdC5odHRwUG9zdCgnaHR0cHM6Ly93d3cuYWhlYXJ0LmNuL2FwcC1hcGl3b3JkL2luZGV4JywgcGFyYW1zLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coX3RoaXMuY29udGVudClcclxuICAgICAgICAgIC8vIGxldCBjZWxsV2lkdGggPSBfdGhpcy5jb250ZW50LndpZHRoICogMC4xMDU7XHJcbiAgICAgICAgICAvLyBsZXQgY2VsbEhlaWdodCA9IF90aGlzLmNvbnRlbnQuaGVpZ2h0ICogMC4yMTU7XHJcbiAgICAgICAgICAvLyBsZXQgc3BhY2luZ1ggPSBfdGhpcy5jb250ZW50LndpZHRoICogMC4wMjI7XHJcbiAgICAgICAgICAvLyBsZXQgc3BhY2luZ1kgPSBfdGhpcy5jb250ZW50LmhlaWdodCAqIDAuMDQ1O1xyXG4gICAgICAgICAgLy8gbGV0IGNlbGxXaWR0aCA9IF90aGlzLmNvbnRlbnQud2lkdGggKiAwLjE1O1xyXG4gICAgICAgICAgLy8gbGV0IGNlbGxIZWlnaHQgPSBfdGhpcy5jb250ZW50LmhlaWdodCAqIDAuMTU7XHJcbiAgICAgICAgICAvLyBsZXQgc3BhY2luZ1ggPSBfdGhpcy5jb250ZW50LndpZHRoICogMC4wODtcclxuICAgICAgICAgIC8vIGxldCBzcGFjaW5nWSA9IF90aGlzLmNvbnRlbnQuaGVpZ2h0ICogMC4wNTtcclxuXHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8vIF90aGlzLmNvbnRlbnQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuY2VsbFNpemUud2lkdGggPSBjZWxsV2lkdGg7XHJcbiAgICAgICAgICAvLyBfdGhpcy5jb250ZW50LmdldENvbXBvbmVudChjYy5MYXlvdXQpLmNlbGxTaXplLmhlaWdodCA9IGNlbGxIZWlnaHQ7XHJcbiAgICAgICAgICAvLyBfdGhpcy5jb250ZW50LmdldENvbXBvbmVudChjYy5MYXlvdXQpLnNwYWNpbmdYID0gc3BhY2luZ1g7XHJcbiAgICAgICAgICAvLyBfdGhpcy5jb250ZW50LmdldENvbXBvbmVudChjYy5MYXlvdXQpLnNwYWNpbmdZID0gc3BhY2luZ1k7XHJcbiAgICAgICAgICAvLyAvLyDmoLnmja5UT09MU+eUn+aIkOebuOW6lOeahOmBk+WFt1xyXG4gICAgICAgICAgLy8gX3RoaXMudG9vbHNBcnJheSA9IFtdO1xyXG4gICAgICAgICAgLy8gbGV0IFRPT0xTID0gZGF0YS5kYXRhLnNlcnZlcjtcclxuICAgICAgICBcclxuICAgICAgICAgIC8vIGZvciAobGV0IGk9MDsgaTxkYXRhLmRhdGEuc2VydmVyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAvLyAgICAgbGV0IHRvb2wgPSBjYy5pbnN0YW50aWF0ZShfdGhpcy5wZXJzb24pO1xyXG4gICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKFRPT0xTW2ldKVxyXG4gICAgICAgICAgLy8gICAgIC8vIF90aGlzLmNvbnRlbnQuYWRkQ2hpbGQodG9vbCk7XHJcbiAgICAgICAgICAvLyAgICAgdG9vbC5nZXRDb21wb25lbnQoJ1Rvb2xzJykuaW5pdEluZm8oVE9PTFNbaV0pO1xyXG4gICAgICAgICAgLy8gICAgIF90aGlzLnRvb2xzQXJyYXkucHVzaCh0b29sKTtcclxuICAgICAgICAgIC8vICAgICBfdGhpcy5jb250ZW50LmFkZENoaWxkKHRvb2wpO1xyXG4gICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKHRvb2wpXHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAvLyAvLyDlrprkuYljb250ZW505rua5Yqo5p2h6auY5bqmXHJcbiAgICAgICAgICAvLyBsZXQgc2NvcmxsaGVpZ2h0ID0gIF90aGlzLmNvbnRlbnQucGFyZW50O1xyXG4gICAgICAgICAgLy8gLy/orqHnrpfmu5rliqjmnaHpq5jluqZcclxuICAgICAgICAgIC8vIGxldCAgaGVpZ2h0ID0gIChjZWxsSGVpZ2h0K3NwYWNpbmdZKSooIE1hdGguY2VpbCggZGF0YS5kYXRhLnNlcnZlci5sZW5ndGgvMikpO1xyXG4gICAgICAgICAgLy8gLy8gY29uc29sZS5sb2coaGVpZ2h0KTtcclxuICAgICAgICAgIC8vIC8vIHNjb3JsbGhlaWdodC5kZXNpZ25SZXNvbHV0aW9uICA9IG5ldyBjYy5TaXplKDYwMCwgaGVpZ2h0KTtcclxuICAgICAgICAgIC8vIHNjb3JsbGhlaWdodC5zZXRDb250ZW50U2l6ZSg2MDAsaGVpZ2h0KTtcclxuICAgICAgfSlcclxuICB9LFxyXG5cclxuICAgIGFkZFRvdWNoRXZlbnQobm9kZV8xKSB7XHJcbiAgICAgICAgbm9kZV8xLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIG5vZGVfMS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLnRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgbm9kZV8xLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgIH0sXHJcbiAgICAvLyBzdGFydDogZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgdGhpcy5zdGFydF95ID0gdGhpcy5jb250ZW50Lnk7XHJcbiAgICAvLyAgICAgdGhpcy5zdGFydF9pbmRleCA9IDA7IC8vIOW9k+WJjeaIkeS7rDI05LiqSXRlbeWKoOi9veeahCAxMDDpobnmlbDmja7ph4zpnaLnmoTotbflp4vmlbDmja7orrDlvZXnmoTntKLlvJU7XHJcbiAgICAvLyAgICAgdGhpcy5sb2FkX3JlY29yZCh0aGlzLnN0YXJ0X2luZGV4KTtcclxuICAgIC8vIH0sXHJcblxyXG4gICAgLy8gLy8g5LuO6L+Z5Liq57Si5byV5byA5aeL77yM5Yqg6L295pWw5o2u6K6w5b2V5Yiw5oiR5Lus55qE5rua5Yqo5YiX6KGo6YeM6Z2i55qE6YCJ6aG5XHJcbiAgICAvLyBsb2FkX3JlY29yZDogZnVuY3Rpb24oc3RhcnRfaW5kZXgpIHtcclxuICAgIC8vICAgICB0aGlzLnN0YXJ0X2luZGV4ID0gc3RhcnRfaW5kZXg7XHJcblxyXG4gICAgLy8gICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLlBBR0VfTlVNICogMzsgaSArKykge1xyXG4gICAgLy8gICAgICAgICB2YXIgbGFiZWwgPSB0aGlzLm9wdF9pdGVtX3NldFtpXS5nZXRDaGlsZEJ5TmFtZShcInNyY1wiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgLy8gICAgICAgICAvLyDmmL7npLrmiJHku6znmoTorrDlvZU7XHJcbiAgICAvLyAgICAgICAgIGxhYmVsLnN0cmluZyA9IHRoaXMudmFsdWVfc2V0W3N0YXJ0X2luZGV4ICsgaV07XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSxcclxuXHJcbiAgICAvLyBvbl9zY3JvbGxfZW5kZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgIHRoaXMuc2Nyb2xsdmVpd19sb2FkX3JlY29kZSgpO1xyXG4gICAgLy8gICAgIHRoaXMuc2Nyb2xsX3ZpZXcuZWxhc3RpYyA9IHRydWU7XHJcbiAgICAvLyB9LFxyXG5cclxuICAgIC8vIHNjcm9sbHZlaXdfbG9hZF9yZWNvZGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgICAvLyDlkJHkuIvliqDovb3kuoZcclxuICAgIC8vICAgICBpZiAodGhpcy5zdGFydF9pbmRleCArIHRoaXMuUEFHRV9OVU0gKiAzIDwgdGhpcy52YWx1ZV9zZXQubGVuZ3RoICYmXHJcbiAgICAvLyAgICAgICAgIHRoaXMuY29udGVudC55ID49IHRoaXMuc3RhcnRfeSArIHRoaXMuUEFHRV9OVU0gKiAyICogdGhpcy5PUFRfSEVJR0hUKSB7IC8vIOWKqOaAgeWKoOi9vVxyXG4gICAgICAgICAgICBcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsX3ZpZXcuX2F1dG9TY3JvbGxpbmcpIHsgLy8g562J5b6F6L+Z5Liq6Ieq5Yqo5rua5Yqo57uT5p2f5Lul5ZCO5YaN5YGa5Yqg6L29XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjcm9sbF92aWV3LmVsYXN0aWMgPSBmYWxzZTsgLy8g5pqC5pe25YWz6Zet5Zue5by55pWI5p6cXHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgIHZhciBkb3duX2xvYWRlZCA9IHRoaXMuUEFHRV9OVU07XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc3RhcnRfaW5kZXggKz0gZG93bl9sb2FkZWQ7XHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLnN0YXJ0X2luZGV4ICsgdGhpcy5QQUdFX05VTSAqIDMgPiB0aGlzLnZhbHVlX3NldC5sZW5ndGgpIHtcclxuICAgIC8vICAgICAgICAgICAgIHZhciBvdXRfbGVuID0gdGhpcy5zdGFydF9pbmRleCArIHRoaXMuUEFHRV9OVU0gKiAzIC0gdGhpcy52YWx1ZV9zZXQubGVuZ3RoO1xyXG4gICAgLy8gICAgICAgICAgICAgZG93bl9sb2FkZWQgLT0gKG91dF9sZW4pO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zdGFydF9pbmRleCAtPSAob3V0X2xlbik7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgdGhpcy5sb2FkX3JlY29yZCh0aGlzLnN0YXJ0X2luZGV4KTtcclxuXHJcbiAgICAvLyAgICAgICAgIHRoaXMuY29udGVudC55IC09IChkb3duX2xvYWRlZCAqIHRoaXMuT1BUX0hFSUdIVCk7XHJcbiAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIC8vIOWQkeS4iuWKoOi9vVxyXG4gICAgLy8gICAgIGlmICh0aGlzLnN0YXJ0X2luZGV4ID4gMCAmJiB0aGlzLmNvbnRlbnQueSA8PSB0aGlzLnN0YXJ0X3kpIHtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsX3ZpZXcuX2F1dG9TY3JvbGxpbmcpIHsgLy8g562J5b6F6L+Z5Liq6Ieq5Yqo5rua5Yqo57uT5p2f5Lul5ZCO5YaN5YGa5Yqg6L29XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjcm9sbF92aWV3LmVsYXN0aWMgPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgdmFyIHVwX2xvYWRlZCA9IHRoaXMuUEFHRV9OVU07XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc3RhcnRfaW5kZXggLT0gdXBfbG9hZGVkO1xyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5zdGFydF9pbmRleCA8IDApIHtcclxuICAgIC8vICAgICAgICAgICAgIHVwX2xvYWRlZCArPSB0aGlzLnN0YXJ0X2luZGV4O1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zdGFydF9pbmRleCA9IDA7IFxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIHRoaXMubG9hZF9yZWNvcmQodGhpcy5zdGFydF9pbmRleCk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuY29udGVudC55ICs9ICh1cF9sb2FkZWQgKiB0aGlzLk9QVF9IRUlHSFQpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICAvLyBlbmQgXHJcbiAgICAvLyB9LFxyXG4gICAgLy8gLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAvLyAgICAgdGhpcy5zY3JvbGx2ZWl3X2xvYWRfcmVjb2RlKCk7XHJcbiAgICAvLyB9LFxyXG59KTtcclxuIl19