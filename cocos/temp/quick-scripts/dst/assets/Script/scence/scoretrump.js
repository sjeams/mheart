
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
      //  console.log(data);
      // console.log(_this.content)
      if (data.data) {
        //跳转到世界
        cc.director.loadScene('map/诸天地图');
      } else {
        //生成世界
        _this.addWord();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuY2VcXHNjb3JldHJ1bXAuanMiXSwibmFtZXMiOlsiSHR0cEhlbHBlciIsInJlcXVpcmUiLCJodHRwUmVxdWVzdCIsInBhcmFtcyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiY29udGVudCIsIk5vZGUiLCJwZXJzb24iLCJQcmVmYWIiLCJ0ZXN0X3Njcm9sbFZpZXciLCJ0eXBlIiwiU2Nyb2xsVmlldyIsInRlc3RfcGFnZVZpZXciLCJQYWdlVmlldyIsIm9uTG9hZCIsInNwYXduVG9vbHMiLCJfdGhpcyIsImh0dHBQb3N0IiwiZGF0YSIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwiYWRkV29yZCIsImNlbGxXaWR0aCIsIndpZHRoIiwiY2VsbEhlaWdodCIsImhlaWdodCIsInNwYWNpbmdYIiwic3BhY2luZ1kiLCJnZXRDb21wb25lbnQiLCJMYXlvdXQiLCJjZWxsU2l6ZSIsInRvb2xzQXJyYXkiLCJUT09MUyIsInRvdGFsIiwibGVuZ3RoIiwiaSIsInRvb2wiLCJpbnN0YW50aWF0ZSIsImluaXRJbmZvIiwicHVzaCIsImFkZENoaWxkIiwic2NvcmxsaGVpZ2h0IiwicGFyZW50IiwiTWF0aCIsImNlaWwiLCJzZXRDb250ZW50U2l6ZSIsImFkZFRvdWNoRXZlbnQiLCJub2RlXzEiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwidG91Y2hTdGFydCIsIlRPVUNIX01PVkUiLCJ0b3VjaE1vdmUiLCJUT1VDSF9FTkQiLCJ0b3VjaEVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUlBLFVBQVUsR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBeEI7O0FBQ0EsSUFBSUMsV0FBVyxHQUFHLElBQUlGLFVBQUosRUFBbEI7QUFDQSxJQUFJRyxNQUFNLEdBQUUsRUFBWjtBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FB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MUQ7QUFDQUosSUFBQUEsTUFBTSxDQUFDQyxFQUFQLENBQVUvQyxFQUFFLENBQUNLLElBQUgsQ0FBUTJDLFNBQVIsQ0FBa0JHLFVBQTVCLEVBQXdDLEtBQUtDLFNBQTdDLEVBQXdELElBQXhEO0FBQ0FOLElBQUFBLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVL0MsRUFBRSxDQUFDSyxJQUFILENBQVEyQyxTQUFSLENBQWtCSyxTQUE1QixFQUF1QyxLQUFLQyxRQUE1QyxFQUFzRCxJQUF0RDtBQUNELEdBNUlFLENBNklMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQS9NSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8g5LiW55WM5pON5L2cICBcclxudmFyIEh0dHBIZWxwZXIgPSByZXF1aXJlKFwiaHR0cFwiKTsgXHJcbnZhciBodHRwUmVxdWVzdCA9IG5ldyBIdHRwSGVscGVyKCk7XHJcbnZhciBwYXJhbXMgPVtdO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgICAvL+a1i+ivlWl0ZW1cclxuICAgICAgLy8gICBjb250ZW50OiB7XHJcbiAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAvLyAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAvLyAgIH0sXHJcblxyXG4gICAgICAvLyBwZXJzb246IHtcclxuICAgICAgLy8gICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAvLyAgIHR5cGU6IGNjLlByZWZhYlxyXG4gICAgICAvLyB9LFxyXG5cclxuICAgICAgY29udGVudDogY2MuTm9kZSxcclxuICAgICAgcGVyc29uOiBjYy5QcmVmYWIsXHJcblxyXG4gICAgICAvL+WIl+ihqFxyXG4gICAgICB0ZXN0X3Njcm9sbFZpZXc6IHtcclxuICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIHR5cGU6IGNjLlNjcm9sbFZpZXdcclxuICAgICAgfSxcclxuICAgICAgLy/nv7vpobXlrrnlmahcclxuICAgICAgdGVzdF9wYWdlVmlldzoge1xyXG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgdHlwZTogY2MuUGFnZVZpZXdcclxuICAgICAgfSxcclxuXHJcbiAgICB9LFxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgIC8vICAgICBsZXQgcGVyc29uID0gY2MuaW5zdGFudGlhdGUodGhpcy5wZXJzb24pO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNvbnRlbj1wZXJzb25cclxuICAgICAgICAvLyAgICAgLy8gcGVyc29uLnBhcmVudCA9IHRoaXMuY29udGVudDtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5hZGRUb3VjaEV2ZW50KHBlcnNvbik7ICAvL+a3u+WKoOinpuaRuOS6i+S7tlxyXG4gICAgICAgIC8vICAgfVxyXG4gICAgICAgIC8vIHRoaXMudmFsdWVfc2V0ID0gW107XHJcbiAgICAgICAgLy8gLy8g5aaC5p6c5L2g6L+Z6YeM5piv5o6S6KGM5qac77yM6YKj5LmI5L2g5bCxcHVzaOaOkuihjOamnOeahOaVsOaNrjtcclxuICAgICAgICAvLyBmb3IodmFyIGkgPSAxOyBpIDw9IDEwMDsgaSArKykge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnZhbHVlX3NldC5wdXNoKGkpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcy5jb250ZW50ID0gdGhpcy5zY3JvbGxfdmlldy5jb250ZW50O1xyXG4gICAgICAgIC8vIHRoaXMub3B0X2l0ZW1fc2V0ID0gW107XHJcbiAgICAgICAgLy8gZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuUEFHRV9OVU0gKiAzOyBpICsrKSB7XHJcbiAgICAgICAgLy8gICAgIHZhciBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtX3ByZWZhYik7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuY29udGVudC5hZGRDaGlsZChpdGVtKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5vcHRfaXRlbV9zZXQucHVzaChpdGVtKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgIHRoaXMuc3Bhd25Ub29scygpXHJcbiAgICAgICAgLy8gdGhpcy5zY3JvbGxfdmlldy5ub2RlLm9uKFwic2Nyb2xsLWVuZGVkXCIsIHRoaXMub25fc2Nyb2xsX2VuZGVkLmJpbmQodGhpcyksIHRoaXMpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzcGF3blRvb2xzICgpIHtcclxuICAgICAgdmFyIF90aGlzID10aGlzO1xyXG5cclxuICAgICAgdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAncGFnZSc6IDEsXHJcbiAgICAgICAgICAgICAgJ3BhZ2VTaXplJzogMTIsXHJcbiAgICAgIH07XHJcbiAgICAgIGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCcvYXBwL2FwcC1hcGl3b3JkL2luZGV4JywgcGFyYW1zLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIC8vICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKF90aGlzLmNvbnRlbnQpXHJcbiAgICAgICAgICBpZihkYXRhLmRhdGEpe1xyXG4gICAgICAgICAgICAgIC8v6Lez6L2s5Yiw5LiW55WMXHJcbiAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtYXAv6K+45aSp5Zyw5Zu+Jyk7XHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAvL+eUn+aIkOS4lueVjFxyXG4gICAgICAgICAgICAgIF90aGlzLmFkZFdvcmQoKVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgYWRkV29yZCgpe1xyXG4gICAgICB2YXIgX3RoaXMgPXRoaXM7XHJcbiAgICAgIGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCcvYXBwL2FwcC1hcGl3b3JkL3JhbmQtd29yZCcsIHBhcmFtcywgZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgLy8gbGV0IGNlbGxXaWR0aCA9IF90aGlzLmNvbnRlbnQud2lkdGggKiAwLjEwNTtcclxuICAgICAgICAgIC8vIGxldCBjZWxsSGVpZ2h0ID0gX3RoaXMuY29udGVudC5oZWlnaHQgKiAwLjIxNTtcclxuICAgICAgICAgIC8vIGxldCBzcGFjaW5nWCA9IF90aGlzLmNvbnRlbnQud2lkdGggKiAwLjAyMjtcclxuICAgICAgICAgIC8vIGxldCBzcGFjaW5nWSA9IF90aGlzLmNvbnRlbnQuaGVpZ2h0ICogMC4wNDU7XHJcbiAgICAgICAgICBsZXQgY2VsbFdpZHRoID0gX3RoaXMuY29udGVudC53aWR0aCAqIDE7XHJcbiAgICAgICAgICBsZXQgY2VsbEhlaWdodCA9IF90aGlzLmNvbnRlbnQuaGVpZ2h0ICogMTtcclxuICAgICAgICAgIGxldCBzcGFjaW5nWCA9IF90aGlzLmNvbnRlbnQud2lkdGggKiAxO1xyXG4gICAgICAgICAgbGV0IHNwYWNpbmdZID0gX3RoaXMuY29udGVudC5oZWlnaHQgKiAxO1xyXG5cclxuICAgICAgICAgIF90aGlzLmNvbnRlbnQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuY2VsbFNpemUud2lkdGggPSBjZWxsV2lkdGg7XHJcbiAgICAgICAgICBfdGhpcy5jb250ZW50LmdldENvbXBvbmVudChjYy5MYXlvdXQpLmNlbGxTaXplLmhlaWdodCA9IGNlbGxIZWlnaHQ7XHJcbiAgICAgICAgICBfdGhpcy5jb250ZW50LmdldENvbXBvbmVudChjYy5MYXlvdXQpLnNwYWNpbmdYID0gc3BhY2luZ1g7XHJcbiAgICAgICAgICBfdGhpcy5jb250ZW50LmdldENvbXBvbmVudChjYy5MYXlvdXQpLnNwYWNpbmdZID0gc3BhY2luZ1k7XHJcbiAgICAgICAgICAvLyDmoLnmja5NYXBUb29sc+eUn+aIkOebuOW6lOeahOmBk+WFt1xyXG4gICAgICAgICAgX3RoaXMudG9vbHNBcnJheSA9IFtdO1xyXG4gICAgICAgICAgbGV0IFRPT0xTID0gZGF0YS5kYXRhO1xyXG4gICAgICAgICAgdmFyIHRvdGFsID0gZGF0YS5kYXRhLmxlbmd0aDtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRvdGFsKSBcclxuICAgICAgICAgIGZvciAobGV0IGk9MDsgaTx0b3RhbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGkpIFxyXG4gICAgICAgICAgICAgIGxldCB0b29sID0gY2MuaW5zdGFudGlhdGUoX3RoaXMucGVyc29uKTtcclxuICAgICAgICAgICAgICB0b29sLmdldENvbXBvbmVudCgnTWFwVG9vbHMnKS5pbml0SW5mbyhUT09MU1tpXSk7XHJcbiAgICAgICAgICAgICAgX3RoaXMudG9vbHNBcnJheS5wdXNoKHRvb2wpO1xyXG4gICAgICAgICAgICAgIF90aGlzLmNvbnRlbnQuYWRkQ2hpbGQodG9vbCk7ICAgIFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8g5a6a5LmJY29udGVudOa7muWKqOadoemrmOW6plxyXG4gICAgICAgICAgbGV0IHNjb3JsbGhlaWdodCA9ICBfdGhpcy5jb250ZW50LnBhcmVudDtcclxuICAgICAgICAgIC8v6K6h566X5rua5Yqo5p2h6auY5bqmXHJcbiAgICAgICAgICBsZXQgIGhlaWdodCA9ICAoY2VsbEhlaWdodCtzcGFjaW5nWSkqKCBNYXRoLmNlaWwodG90YWwvMikpO1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coaGVpZ2h0KTtcclxuICAgICAgICAgIC8vIHNjb3JsbGhlaWdodC5kZXNpZ25SZXNvbHV0aW9uICA9IG5ldyBjYy5TaXplKDYwMCwgaGVpZ2h0KTtcclxuICAgICAgICAgIHNjb3JsbGhlaWdodC5zZXRDb250ZW50U2l6ZSg2MDAsaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcblxyXG4gICAgYWRkVG91Y2hFdmVudChub2RlXzEpIHtcclxuICAgICAgICBub2RlXzEub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgbm9kZV8xLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICBub2RlXzEub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgfSxcclxuICAgIC8vIHN0YXJ0OiBmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICB0aGlzLnN0YXJ0X3kgPSB0aGlzLmNvbnRlbnQueTtcclxuICAgIC8vICAgICB0aGlzLnN0YXJ0X2luZGV4ID0gMDsgLy8g5b2T5YmN5oiR5LusMjTkuKpJdGVt5Yqg6L2955qEIDEwMOmhueaVsOaNrumHjOmdoueahOi1t+Wni+aVsOaNruiusOW9leeahOe0ouW8lTtcclxuICAgIC8vICAgICB0aGlzLmxvYWRfcmVjb3JkKHRoaXMuc3RhcnRfaW5kZXgpO1xyXG4gICAgLy8gfSxcclxuXHJcbiAgICAvLyAvLyDku47ov5nkuKrntKLlvJXlvIDlp4vvvIzliqDovb3mlbDmja7orrDlvZXliLDmiJHku6znmoTmu5rliqjliJfooajph4zpnaLnmoTpgInpoblcclxuICAgIC8vIGxvYWRfcmVjb3JkOiBmdW5jdGlvbihzdGFydF9pbmRleCkge1xyXG4gICAgLy8gICAgIHRoaXMuc3RhcnRfaW5kZXggPSBzdGFydF9pbmRleDtcclxuXHJcbiAgICAvLyAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuUEFHRV9OVU0gKiAzOyBpICsrKSB7XHJcbiAgICAvLyAgICAgICAgIHZhciBsYWJlbCA9IHRoaXMub3B0X2l0ZW1fc2V0W2ldLmdldENoaWxkQnlOYW1lKFwic3JjXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAvLyAgICAgICAgIC8vIOaYvuekuuaIkeS7rOeahOiusOW9lTtcclxuICAgIC8vICAgICAgICAgbGFiZWwuc3RyaW5nID0gdGhpcy52YWx1ZV9zZXRbc3RhcnRfaW5kZXggKyBpXTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9LFxyXG5cclxuICAgIC8vIG9uX3Njcm9sbF9lbmRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgdGhpcy5zY3JvbGx2ZWl3X2xvYWRfcmVjb2RlKCk7XHJcbiAgICAvLyAgICAgdGhpcy5zY3JvbGxfdmlldy5lbGFzdGljID0gdHJ1ZTtcclxuICAgIC8vIH0sXHJcblxyXG4gICAgLy8gc2Nyb2xsdmVpd19sb2FkX3JlY29kZTogZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgIC8vIOWQkeS4i+WKoOi9veS6hlxyXG4gICAgLy8gICAgIGlmICh0aGlzLnN0YXJ0X2luZGV4ICsgdGhpcy5QQUdFX05VTSAqIDMgPCB0aGlzLnZhbHVlX3NldC5sZW5ndGggJiZcclxuICAgIC8vICAgICAgICAgdGhpcy5jb250ZW50LnkgPj0gdGhpcy5zdGFydF95ICsgdGhpcy5QQUdFX05VTSAqIDIgKiB0aGlzLk9QVF9IRUlHSFQpIHsgLy8g5Yqo5oCB5Yqg6L29XHJcbiAgICAgICAgICAgIFxyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5zY3JvbGxfdmlldy5fYXV0b1Njcm9sbGluZykgeyAvLyDnrYnlvoXov5nkuKroh6rliqjmu5rliqjnu5PmnZ/ku6XlkI7lho3lgZrliqDovb1cclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2Nyb2xsX3ZpZXcuZWxhc3RpYyA9IGZhbHNlOyAvLyDmmoLml7blhbPpl63lm57lvLnmlYjmnpxcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgdmFyIGRvd25fbG9hZGVkID0gdGhpcy5QQUdFX05VTTtcclxuICAgIC8vICAgICAgICAgdGhpcy5zdGFydF9pbmRleCArPSBkb3duX2xvYWRlZDtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuc3RhcnRfaW5kZXggKyB0aGlzLlBBR0VfTlVNICogMyA+IHRoaXMudmFsdWVfc2V0Lmxlbmd0aCkge1xyXG4gICAgLy8gICAgICAgICAgICAgdmFyIG91dF9sZW4gPSB0aGlzLnN0YXJ0X2luZGV4ICsgdGhpcy5QQUdFX05VTSAqIDMgLSB0aGlzLnZhbHVlX3NldC5sZW5ndGg7XHJcbiAgICAvLyAgICAgICAgICAgICBkb3duX2xvYWRlZCAtPSAob3V0X2xlbik7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnN0YXJ0X2luZGV4IC09IChvdXRfbGVuKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB0aGlzLmxvYWRfcmVjb3JkKHRoaXMuc3RhcnRfaW5kZXgpO1xyXG5cclxuICAgIC8vICAgICAgICAgdGhpcy5jb250ZW50LnkgLT0gKGRvd25fbG9hZGVkICogdGhpcy5PUFRfSEVJR0hUKTtcclxuICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgLy8g5ZCR5LiK5Yqg6L29XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuc3RhcnRfaW5kZXggPiAwICYmIHRoaXMuY29udGVudC55IDw9IHRoaXMuc3RhcnRfeSkge1xyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5zY3JvbGxfdmlldy5fYXV0b1Njcm9sbGluZykgeyAvLyDnrYnlvoXov5nkuKroh6rliqjmu5rliqjnu5PmnZ/ku6XlkI7lho3lgZrliqDovb1cclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2Nyb2xsX3ZpZXcuZWxhc3RpYyA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICB2YXIgdXBfbG9hZGVkID0gdGhpcy5QQUdFX05VTTtcclxuICAgIC8vICAgICAgICAgdGhpcy5zdGFydF9pbmRleCAtPSB1cF9sb2FkZWQ7XHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLnN0YXJ0X2luZGV4IDwgMCkge1xyXG4gICAgLy8gICAgICAgICAgICAgdXBfbG9hZGVkICs9IHRoaXMuc3RhcnRfaW5kZXg7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnN0YXJ0X2luZGV4ID0gMDsgXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgdGhpcy5sb2FkX3JlY29yZCh0aGlzLnN0YXJ0X2luZGV4KTtcclxuICAgIC8vICAgICAgICAgdGhpcy5jb250ZW50LnkgKz0gKHVwX2xvYWRlZCAqIHRoaXMuT1BUX0hFSUdIVCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIC8vIGVuZCBcclxuICAgIC8vIH0sXHJcbiAgICAvLyAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgIC8vICAgICB0aGlzLnNjcm9sbHZlaXdfbG9hZF9yZWNvZGUoKTtcclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iXX0=