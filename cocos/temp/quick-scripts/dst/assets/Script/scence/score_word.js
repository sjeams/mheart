
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/scence/score_word.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '09d9e7+vGZLdKg/PEEJJ/Uq', 'score_word');
// Script/scence/score_word.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
// 世界操作  
var HttpHelper = require("http");

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

    var params = {
      'page': 1,
      'pageSize': 12
    };
    httpRequest.httpPost('/app/app-apiword/index', params, function (data) {
      console.log(data); // console.log(_this.content)

      if (data.data) {//刷新地图
        // cc.director.loadScene('map/诸天地图');
      } else {//生成地图
          // _this.addWord()
        }
    });
  },
  addWord: function addWord() {
    var _this = this;

    httpRequest.httpPost('/app/app-apiword/rand-word', params, function (data) {
      // console.log(data);
      // let cellWidth = _this.content.width * 0.105;
      // let cellHeight = _this.content.height * 0.215;
      // let spacingX = _this.content.width * 0.022;
      // let spacingY = _this.content.height * 0.045;
      var cellWidth = _this.content.width * 1;
      var cellHeight = _this.content.height * 1;
      var spacingX = _this.content.width * 1;
      var spacingY = _this.content.height * 1;
      _this.content.getComponent(cc.Layout).cellSize.width = cellWidth;
      _this.content.getComponent(cc.Layout).cellSize.height = cellHeight;
      _this.content.getComponent(cc.Layout).spacingX = spacingX;
      _this.content.getComponent(cc.Layout).spacingY = spacingY; // 根据MapTools生成相应的道具

      _this.toolsArray = [];
      var TOOLS = data.data;
      var total = data.data.length; // console.log(total) 

      for (var i = 0; i < total; i++) {
        // console.log(i) 
        var tool = cc.instantiate(_this.person);
        tool.getComponent('MapTools').initInfo(TOOLS[i]);

        _this.toolsArray.push(tool);

        _this.content.addChild(tool);
      } // 定义content滚动条高度


      var scorllheight = _this.content.parent; //计算滚动条高度

      var height = (cellHeight + spacingY) * Math.ceil(total / 2); // console.log(height);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuY2VcXHNjb3JlX3dvcmQuanMiXSwibmFtZXMiOlsiSHR0cEhlbHBlciIsInJlcXVpcmUiLCJodHRwUmVxdWVzdCIsInBhcmFtcyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiY29udGVudCIsIk5vZGUiLCJwZXJzb24iLCJQcmVmYWIiLCJ0ZXN0X3Njcm9sbFZpZXciLCJ0eXBlIiwiU2Nyb2xsVmlldyIsInRlc3RfcGFnZVZpZXciLCJQYWdlVmlldyIsIm9uTG9hZCIsInNwYXduVG9vbHMiLCJfdGhpcyIsImh0dHBQb3N0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJhZGRXb3JkIiwiY2VsbFdpZHRoIiwid2lkdGgiLCJjZWxsSGVpZ2h0IiwiaGVpZ2h0Iiwic3BhY2luZ1giLCJzcGFjaW5nWSIsImdldENvbXBvbmVudCIsIkxheW91dCIsImNlbGxTaXplIiwidG9vbHNBcnJheSIsIlRPT0xTIiwidG90YWwiLCJsZW5ndGgiLCJpIiwidG9vbCIsImluc3RhbnRpYXRlIiwiaW5pdEluZm8iLCJwdXNoIiwiYWRkQ2hpbGQiLCJzY29ybGxoZWlnaHQiLCJwYXJlbnQiLCJNYXRoIiwiY2VpbCIsInNldENvbnRlbnRTaXplIiwiYWRkVG91Y2hFdmVudCIsIm5vZGVfMSIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJ0b3VjaFN0YXJ0IiwiVE9VQ0hfTU9WRSIsInRvdWNoTW92ZSIsIlRPVUNIX0VORCIsInRvdWNoRW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUF4Qjs7QUFDQSxJQUFJQyxXQUFXLEdBQUcsSUFBSUYsVUFBSixFQUFsQjtBQUNBLElBQUlHLE1BQU0sR0FBRSxFQUFaO0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0ws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QyxFQUFFLENBQUNLLElBQUgsQ0FBUTJDLFNBQVIsQ0FBa0JHLFVBQTVCLEVBQXdDLEtBQUtDLFNBQTdDLEVBQXdELElBQXhEO0FBQ0FOLElBQUFBLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVL0MsRUFBRSxDQUFDSyxJQUFILENBQVEyQyxTQUFSLENBQWtCSyxTQUE1QixFQUF1QyxLQUFLQyxRQUE1QyxFQUFzRCxJQUF0RDtBQUNELEdBMUlFLENBMklMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQTdNSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8g5LiW55WM5pON5L2cICBcclxudmFyIEh0dHBIZWxwZXIgPSByZXF1aXJlKFwiaHR0cFwiKTsgXHJcbnZhciBodHRwUmVxdWVzdCA9IG5ldyBIdHRwSGVscGVyKCk7XHJcbnZhciBwYXJhbXMgPVtdO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgICAvL+a1i+ivlWl0ZW1cclxuICAgICAgLy8gICBjb250ZW50OiB7XHJcbiAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAvLyAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAvLyAgIH0sXHJcblxyXG4gICAgICAvLyBwZXJzb246IHtcclxuICAgICAgLy8gICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAvLyAgIHR5cGU6IGNjLlByZWZhYlxyXG4gICAgICAvLyB9LFxyXG5cclxuICAgICAgY29udGVudDogY2MuTm9kZSxcclxuICAgICAgcGVyc29uOiBjYy5QcmVmYWIsXHJcblxyXG4gICAgICAvL+WIl+ihqFxyXG4gICAgICB0ZXN0X3Njcm9sbFZpZXc6IHtcclxuICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIHR5cGU6IGNjLlNjcm9sbFZpZXdcclxuICAgICAgfSxcclxuICAgICAgLy/nv7vpobXlrrnlmahcclxuICAgICAgdGVzdF9wYWdlVmlldzoge1xyXG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgdHlwZTogY2MuUGFnZVZpZXdcclxuICAgICAgfSxcclxuXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgbGV0IHBlcnNvbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGVyc29uKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5jb250ZW49cGVyc29uXHJcbiAgICAgICAgLy8gICAgIC8vIHBlcnNvbi5wYXJlbnQgPSB0aGlzLmNvbnRlbnQ7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuYWRkVG91Y2hFdmVudChwZXJzb24pOyAgLy/mt7vliqDop6bmkbjkuovku7ZcclxuICAgICAgICAvLyAgIH1cclxuICAgICAgICAvLyB0aGlzLnZhbHVlX3NldCA9IFtdO1xyXG4gICAgICAgIC8vIC8vIOWmguaenOS9oOi/memHjOaYr+aOkuihjOamnO+8jOmCo+S5iOS9oOWwsXB1c2jmjpLooYzmppznmoTmlbDmja47XHJcbiAgICAgICAgLy8gZm9yKHZhciBpID0gMTsgaSA8PSAxMDA7IGkgKyspIHtcclxuICAgICAgICAvLyAgICAgdGhpcy52YWx1ZV9zZXQucHVzaChpKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMuY29udGVudCA9IHRoaXMuc2Nyb2xsX3ZpZXcuY29udGVudDtcclxuICAgICAgICAvLyB0aGlzLm9wdF9pdGVtX3NldCA9IFtdO1xyXG4gICAgICAgIC8vIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLlBBR0VfTlVNICogMzsgaSArKykge1xyXG4gICAgICAgIC8vICAgICB2YXIgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbV9wcmVmYWIpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMub3B0X2l0ZW1fc2V0LnB1c2goaXRlbSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICB0aGlzLnNwYXduVG9vbHMoKVxyXG4gICAgICAgIC8vIHRoaXMuc2Nyb2xsX3ZpZXcubm9kZS5vbihcInNjcm9sbC1lbmRlZFwiLCB0aGlzLm9uX3Njcm9sbF9lbmRlZC5iaW5kKHRoaXMpLCB0aGlzKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3Bhd25Ub29scyAoKSB7XHJcbiAgICAgIHZhciBfdGhpcyA9dGhpcztcclxuXHJcbiAgICAgIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgJ3BhZ2UnOiAxLFxyXG4gICAgICAgICAgICAgICdwYWdlU2l6ZSc6IDEyLFxyXG4gICAgICB9O1xyXG4gICAgICBodHRwUmVxdWVzdC5odHRwUG9zdCgnL2FwcC9hcHAtYXBpd29yZC9pbmRleCcsIHBhcmFtcywgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhfdGhpcy5jb250ZW50KVxyXG4gICAgICAgICAgaWYoZGF0YS5kYXRhKXtcclxuICAgICAgICAgICAgICAvL+WIt+aWsOWcsOWbvlxyXG4gICAgICAgICAgICAgIC8vIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFwL+ivuOWkqeWcsOWbvicpO1xyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgLy/nlJ/miJDlnLDlm75cclxuICAgICAgICAgICAgICAvLyBfdGhpcy5hZGRXb3JkKClcclxuICAgICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sXHJcblxyXG5cclxuICAgIGFkZFdvcmQoKXtcclxuICAgICAgdmFyIF90aGlzID10aGlzO1xyXG4gICAgICBodHRwUmVxdWVzdC5odHRwUG9zdCgnL2FwcC9hcHAtYXBpd29yZC9yYW5kLXdvcmQnLCBwYXJhbXMsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIC8vIGxldCBjZWxsV2lkdGggPSBfdGhpcy5jb250ZW50LndpZHRoICogMC4xMDU7XHJcbiAgICAgICAgICAvLyBsZXQgY2VsbEhlaWdodCA9IF90aGlzLmNvbnRlbnQuaGVpZ2h0ICogMC4yMTU7XHJcbiAgICAgICAgICAvLyBsZXQgc3BhY2luZ1ggPSBfdGhpcy5jb250ZW50LndpZHRoICogMC4wMjI7XHJcbiAgICAgICAgICAvLyBsZXQgc3BhY2luZ1kgPSBfdGhpcy5jb250ZW50LmhlaWdodCAqIDAuMDQ1O1xyXG4gICAgICAgICAgbGV0IGNlbGxXaWR0aCA9IF90aGlzLmNvbnRlbnQud2lkdGggKiAxO1xyXG4gICAgICAgICAgbGV0IGNlbGxIZWlnaHQgPSBfdGhpcy5jb250ZW50LmhlaWdodCAqIDE7XHJcbiAgICAgICAgICBsZXQgc3BhY2luZ1ggPSBfdGhpcy5jb250ZW50LndpZHRoICogMTtcclxuICAgICAgICAgIGxldCBzcGFjaW5nWSA9IF90aGlzLmNvbnRlbnQuaGVpZ2h0ICogMTtcclxuXHJcbiAgICAgICAgICBfdGhpcy5jb250ZW50LmdldENvbXBvbmVudChjYy5MYXlvdXQpLmNlbGxTaXplLndpZHRoID0gY2VsbFdpZHRoO1xyXG4gICAgICAgICAgX3RoaXMuY29udGVudC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS5jZWxsU2l6ZS5oZWlnaHQgPSBjZWxsSGVpZ2h0O1xyXG4gICAgICAgICAgX3RoaXMuY29udGVudC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS5zcGFjaW5nWCA9IHNwYWNpbmdYO1xyXG4gICAgICAgICAgX3RoaXMuY29udGVudC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS5zcGFjaW5nWSA9IHNwYWNpbmdZO1xyXG4gICAgICAgICAgLy8g5qC55o2uTWFwVG9vbHPnlJ/miJDnm7jlupTnmoTpgZPlhbdcclxuICAgICAgICAgIF90aGlzLnRvb2xzQXJyYXkgPSBbXTtcclxuICAgICAgICAgIGxldCBUT09MUyA9IGRhdGEuZGF0YTtcclxuICAgICAgICAgIHZhciB0b3RhbCA9IGRhdGEuZGF0YS5sZW5ndGg7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0b3RhbCkgXHJcbiAgICAgICAgICBmb3IgKGxldCBpPTA7IGk8dG90YWw7IGkrKykge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpKSBcclxuICAgICAgICAgICAgICBsZXQgdG9vbCA9IGNjLmluc3RhbnRpYXRlKF90aGlzLnBlcnNvbik7XHJcbiAgICAgICAgICAgICAgdG9vbC5nZXRDb21wb25lbnQoJ01hcFRvb2xzJykuaW5pdEluZm8oVE9PTFNbaV0pO1xyXG4gICAgICAgICAgICAgIF90aGlzLnRvb2xzQXJyYXkucHVzaCh0b29sKTtcclxuICAgICAgICAgICAgICBfdGhpcy5jb250ZW50LmFkZENoaWxkKHRvb2wpOyAgICBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIOWumuS5iWNvbnRlbnTmu5rliqjmnaHpq5jluqZcclxuICAgICAgICAgIGxldCBzY29ybGxoZWlnaHQgPSAgX3RoaXMuY29udGVudC5wYXJlbnQ7XHJcbiAgICAgICAgICAvL+iuoeeul+a7muWKqOadoemrmOW6plxyXG4gICAgICAgICAgbGV0ICBoZWlnaHQgPSAgKGNlbGxIZWlnaHQrc3BhY2luZ1kpKiggTWF0aC5jZWlsKHRvdGFsLzIpKTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGhlaWdodCk7XHJcbiAgICAgICAgICAvLyBzY29ybGxoZWlnaHQuZGVzaWduUmVzb2x1dGlvbiAgPSBuZXcgY2MuU2l6ZSg2MDAsIGhlaWdodCk7XHJcbiAgICAgICAgICBzY29ybGxoZWlnaHQuc2V0Q29udGVudFNpemUoNjAwLGhlaWdodCk7XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuICAgIGFkZFRvdWNoRXZlbnQobm9kZV8xKSB7XHJcbiAgICAgICAgbm9kZV8xLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIG5vZGVfMS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLnRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgbm9kZV8xLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgIH0sXHJcbiAgICAvLyBzdGFydDogZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgdGhpcy5zdGFydF95ID0gdGhpcy5jb250ZW50Lnk7XHJcbiAgICAvLyAgICAgdGhpcy5zdGFydF9pbmRleCA9IDA7IC8vIOW9k+WJjeaIkeS7rDI05LiqSXRlbeWKoOi9veeahCAxMDDpobnmlbDmja7ph4zpnaLnmoTotbflp4vmlbDmja7orrDlvZXnmoTntKLlvJU7XHJcbiAgICAvLyAgICAgdGhpcy5sb2FkX3JlY29yZCh0aGlzLnN0YXJ0X2luZGV4KTtcclxuICAgIC8vIH0sXHJcblxyXG4gICAgLy8gLy8g5LuO6L+Z5Liq57Si5byV5byA5aeL77yM5Yqg6L295pWw5o2u6K6w5b2V5Yiw5oiR5Lus55qE5rua5Yqo5YiX6KGo6YeM6Z2i55qE6YCJ6aG5XHJcbiAgICAvLyBsb2FkX3JlY29yZDogZnVuY3Rpb24oc3RhcnRfaW5kZXgpIHtcclxuICAgIC8vICAgICB0aGlzLnN0YXJ0X2luZGV4ID0gc3RhcnRfaW5kZXg7XHJcblxyXG4gICAgLy8gICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLlBBR0VfTlVNICogMzsgaSArKykge1xyXG4gICAgLy8gICAgICAgICB2YXIgbGFiZWwgPSB0aGlzLm9wdF9pdGVtX3NldFtpXS5nZXRDaGlsZEJ5TmFtZShcInNyY1wiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgLy8gICAgICAgICAvLyDmmL7npLrmiJHku6znmoTorrDlvZU7XHJcbiAgICAvLyAgICAgICAgIGxhYmVsLnN0cmluZyA9IHRoaXMudmFsdWVfc2V0W3N0YXJ0X2luZGV4ICsgaV07XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSxcclxuXHJcbiAgICAvLyBvbl9zY3JvbGxfZW5kZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgIHRoaXMuc2Nyb2xsdmVpd19sb2FkX3JlY29kZSgpO1xyXG4gICAgLy8gICAgIHRoaXMuc2Nyb2xsX3ZpZXcuZWxhc3RpYyA9IHRydWU7XHJcbiAgICAvLyB9LFxyXG5cclxuICAgIC8vIHNjcm9sbHZlaXdfbG9hZF9yZWNvZGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgICAvLyDlkJHkuIvliqDovb3kuoZcclxuICAgIC8vICAgICBpZiAodGhpcy5zdGFydF9pbmRleCArIHRoaXMuUEFHRV9OVU0gKiAzIDwgdGhpcy52YWx1ZV9zZXQubGVuZ3RoICYmXHJcbiAgICAvLyAgICAgICAgIHRoaXMuY29udGVudC55ID49IHRoaXMuc3RhcnRfeSArIHRoaXMuUEFHRV9OVU0gKiAyICogdGhpcy5PUFRfSEVJR0hUKSB7IC8vIOWKqOaAgeWKoOi9vVxyXG4gICAgICAgICAgICBcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsX3ZpZXcuX2F1dG9TY3JvbGxpbmcpIHsgLy8g562J5b6F6L+Z5Liq6Ieq5Yqo5rua5Yqo57uT5p2f5Lul5ZCO5YaN5YGa5Yqg6L29XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjcm9sbF92aWV3LmVsYXN0aWMgPSBmYWxzZTsgLy8g5pqC5pe25YWz6Zet5Zue5by55pWI5p6cXHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgIHZhciBkb3duX2xvYWRlZCA9IHRoaXMuUEFHRV9OVU07XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc3RhcnRfaW5kZXggKz0gZG93bl9sb2FkZWQ7XHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLnN0YXJ0X2luZGV4ICsgdGhpcy5QQUdFX05VTSAqIDMgPiB0aGlzLnZhbHVlX3NldC5sZW5ndGgpIHtcclxuICAgIC8vICAgICAgICAgICAgIHZhciBvdXRfbGVuID0gdGhpcy5zdGFydF9pbmRleCArIHRoaXMuUEFHRV9OVU0gKiAzIC0gdGhpcy52YWx1ZV9zZXQubGVuZ3RoO1xyXG4gICAgLy8gICAgICAgICAgICAgZG93bl9sb2FkZWQgLT0gKG91dF9sZW4pO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zdGFydF9pbmRleCAtPSAob3V0X2xlbik7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgdGhpcy5sb2FkX3JlY29yZCh0aGlzLnN0YXJ0X2luZGV4KTtcclxuXHJcbiAgICAvLyAgICAgICAgIHRoaXMuY29udGVudC55IC09IChkb3duX2xvYWRlZCAqIHRoaXMuT1BUX0hFSUdIVCk7XHJcbiAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIC8vIOWQkeS4iuWKoOi9vVxyXG4gICAgLy8gICAgIGlmICh0aGlzLnN0YXJ0X2luZGV4ID4gMCAmJiB0aGlzLmNvbnRlbnQueSA8PSB0aGlzLnN0YXJ0X3kpIHtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsX3ZpZXcuX2F1dG9TY3JvbGxpbmcpIHsgLy8g562J5b6F6L+Z5Liq6Ieq5Yqo5rua5Yqo57uT5p2f5Lul5ZCO5YaN5YGa5Yqg6L29XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjcm9sbF92aWV3LmVsYXN0aWMgPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgdmFyIHVwX2xvYWRlZCA9IHRoaXMuUEFHRV9OVU07XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc3RhcnRfaW5kZXggLT0gdXBfbG9hZGVkO1xyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5zdGFydF9pbmRleCA8IDApIHtcclxuICAgIC8vICAgICAgICAgICAgIHVwX2xvYWRlZCArPSB0aGlzLnN0YXJ0X2luZGV4O1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zdGFydF9pbmRleCA9IDA7IFxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIHRoaXMubG9hZF9yZWNvcmQodGhpcy5zdGFydF9pbmRleCk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuY29udGVudC55ICs9ICh1cF9sb2FkZWQgKiB0aGlzLk9QVF9IRUlHSFQpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICAvLyBlbmQgXHJcbiAgICAvLyB9LFxyXG4gICAgLy8gLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAvLyAgICAgdGhpcy5zY3JvbGx2ZWl3X2xvYWRfcmVjb2RlKCk7XHJcbiAgICAvLyB9LFxyXG59KTtcclxuIl19