
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/scence/score_map.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '09d9e7+vGZLdKg/PEEJJ/Uq', 'score_map');
// Script/scence/score_map.js

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
    home: cc.Node,
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
      var _self = this;

      console.log(data); // console.log(_this.content)

      if (!data.data) {//刷新地图
        // cc.director.loadScene('map/诸天地图');
      } else {
        if (data.data['picture']) {
          var remoteUrl = httpRequest.httpUrl(data.data['picture']);
          console.log(remoteUrl); // cc.loader.loadRes(httpRequest.httpUrl(info['picture']), cc.SpriteFrame, function (err, spriteFrame) {   
          //     console.log(_self)
          //     _self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame; 
          // });

          cc.loader.load({
            url: remoteUrl
          }, function (err, texture) {
            // _self.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture)
            _this.home.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
          });
        } //生成地图
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuY2VcXHNjb3JlX21hcC5qcyJdLCJuYW1lcyI6WyJIdHRwSGVscGVyIiwicmVxdWlyZSIsImh0dHBSZXF1ZXN0IiwicGFyYW1zIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJob21lIiwiTm9kZSIsImNvbnRlbnQiLCJwZXJzb24iLCJQcmVmYWIiLCJ0ZXN0X3Njcm9sbFZpZXciLCJ0eXBlIiwiU2Nyb2xsVmlldyIsInRlc3RfcGFnZVZpZXciLCJQYWdlVmlldyIsIm9uTG9hZCIsInNwYXduVG9vbHMiLCJfdGhpcyIsImh0dHBQb3N0IiwiZGF0YSIsIl9zZWxmIiwiY29uc29sZSIsImxvZyIsInJlbW90ZVVybCIsImh0dHBVcmwiLCJsb2FkZXIiLCJsb2FkIiwidXJsIiwiZXJyIiwidGV4dHVyZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwiU3ByaXRlRnJhbWUiLCJhZGRXb3JkIiwiY2VsbFdpZHRoIiwid2lkdGgiLCJjZWxsSGVpZ2h0IiwiaGVpZ2h0Iiwic3BhY2luZ1giLCJzcGFjaW5nWSIsIkxheW91dCIsImNlbGxTaXplIiwidG9vbHNBcnJheSIsIlRPT0xTIiwidG90YWwiLCJsZW5ndGgiLCJpIiwidG9vbCIsImluc3RhbnRpYXRlIiwiaW5pdEluZm8iLCJwdXNoIiwiYWRkQ2hpbGQiLCJzY29ybGxoZWlnaHQiLCJwYXJlbnQiLCJNYXRoIiwiY2VpbCIsInNldENvbnRlbnRTaXplIiwiYWRkVG91Y2hFdmVudCIsIm5vZGVfMSIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJ0b3VjaFN0YXJ0IiwiVE9VQ0hfTU9WRSIsInRvdWNoTW92ZSIsIlRPVUNIX0VORCIsInRvdWNoRW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENB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Q0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQTVOSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8g5LiW55WM5pON5L2cICBcclxudmFyIEh0dHBIZWxwZXIgPSByZXF1aXJlKFwiaHR0cFwiKTsgXHJcbnZhciBodHRwUmVxdWVzdCA9IG5ldyBIdHRwSGVscGVyKCk7XHJcbnZhciBwYXJhbXMgPVtdO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgICAvL+a1i+ivlWl0ZW1cclxuICAgICAgLy8gICBjb250ZW50OiB7XHJcbiAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAvLyAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAvLyAgIH0sXHJcblxyXG4gICAgICAvLyBwZXJzb246IHtcclxuICAgICAgLy8gICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAvLyAgIHR5cGU6IGNjLlByZWZhYlxyXG4gICAgICAvLyB9LFxyXG4gICAgICBob21lOiBjYy5Ob2RlLFxyXG4gICAgICBjb250ZW50OiBjYy5Ob2RlLFxyXG4gICAgICBwZXJzb246IGNjLlByZWZhYixcclxuXHJcbiAgICAgIC8v5YiX6KGoXHJcbiAgICAgIHRlc3Rfc2Nyb2xsVmlldzoge1xyXG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgdHlwZTogY2MuU2Nyb2xsVmlld1xyXG4gICAgICB9LFxyXG4gICAgICAvL+e/u+mhteWuueWZqFxyXG4gICAgICB0ZXN0X3BhZ2VWaWV3OiB7XHJcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB0eXBlOiBjYy5QYWdlVmlld1xyXG4gICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgIC8vICAgICBsZXQgcGVyc29uID0gY2MuaW5zdGFudGlhdGUodGhpcy5wZXJzb24pO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNvbnRlbj1wZXJzb25cclxuICAgICAgICAvLyAgICAgLy8gcGVyc29uLnBhcmVudCA9IHRoaXMuY29udGVudDtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5hZGRUb3VjaEV2ZW50KHBlcnNvbik7ICAvL+a3u+WKoOinpuaRuOS6i+S7tlxyXG4gICAgICAgIC8vICAgfVxyXG4gICAgICAgIC8vIHRoaXMudmFsdWVfc2V0ID0gW107XHJcbiAgICAgICAgLy8gLy8g5aaC5p6c5L2g6L+Z6YeM5piv5o6S6KGM5qac77yM6YKj5LmI5L2g5bCxcHVzaOaOkuihjOamnOeahOaVsOaNrjtcclxuICAgICAgICAvLyBmb3IodmFyIGkgPSAxOyBpIDw9IDEwMDsgaSArKykge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnZhbHVlX3NldC5wdXNoKGkpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcy5jb250ZW50ID0gdGhpcy5zY3JvbGxfdmlldy5jb250ZW50O1xyXG4gICAgICAgIC8vIHRoaXMub3B0X2l0ZW1fc2V0ID0gW107XHJcbiAgICAgICAgLy8gZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuUEFHRV9OVU0gKiAzOyBpICsrKSB7XHJcbiAgICAgICAgLy8gICAgIHZhciBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtX3ByZWZhYik7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuY29udGVudC5hZGRDaGlsZChpdGVtKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5vcHRfaXRlbV9zZXQucHVzaChpdGVtKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgIHRoaXMuc3Bhd25Ub29scygpXHJcbiAgICAgICAgLy8gdGhpcy5zY3JvbGxfdmlldy5ub2RlLm9uKFwic2Nyb2xsLWVuZGVkXCIsIHRoaXMub25fc2Nyb2xsX2VuZGVkLmJpbmQodGhpcyksIHRoaXMpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzcGF3blRvb2xzICgpIHtcclxuICAgICAgdmFyIF90aGlzID10aGlzO1xyXG5cclxuICAgICAgdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAncGFnZSc6IDEsXHJcbiAgICAgICAgICAgICAgJ3BhZ2VTaXplJzogMTIsXHJcbiAgICAgIH07XHJcbiAgICAgIGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCcvYXBwL2FwcC1hcGl3b3JkL2luZGV4JywgcGFyYW1zLCBmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgICAgICB2YXIgX3NlbGYgPSB0aGlzO1xyXG4gICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKF90aGlzLmNvbnRlbnQpXHJcbiAgICAgICAgICBpZighZGF0YS5kYXRhKXtcclxuICAgICAgICAgICAgICAvL+WIt+aWsOWcsOWbvlxyXG4gICAgICAgICAgICAgIC8vIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFwL+ivuOWkqeWcsOWbvicpO1xyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIGlmKGRhdGEuZGF0YVsncGljdHVyZSddKXtcclxuICAgICAgICAgICAgICAgIHZhciByZW1vdGVVcmwgPSBodHRwUmVxdWVzdC5odHRwVXJsKGRhdGEuZGF0YVsncGljdHVyZSddKTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlbW90ZVVybClcclxuICAgICAgICAgICAgICAgIC8vIGNjLmxvYWRlci5sb2FkUmVzKGh0dHBSZXF1ZXN0Lmh0dHBVcmwoaW5mb1sncGljdHVyZSddKSwgY2MuU3ByaXRlRnJhbWUsIGZ1bmN0aW9uIChlcnIsIHNwcml0ZUZyYW1lKSB7ICAgXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coX3NlbGYpXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgX3NlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lOyBcclxuICAgICAgICAgICAgICAgIC8vIH0pO1xyXG4gICAgICAgICAgICAgICAgY2MubG9hZGVyLmxvYWQoeyB1cmw6IHJlbW90ZVVybCB9LCBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7ICBcclxuICAgICAgICAgICAgICAgICAgICAvLyBfc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpXHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuaG9tZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgIC8v55Sf5oiQ5Zyw5Zu+XHJcbiAgICAgICAgICAgICAgLy8gX3RoaXMuYWRkV29yZCgpXHJcbiAgICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICBhZGRXb3JkKCl7XHJcbiAgICAgIHZhciBfdGhpcyA9dGhpcztcclxuICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3QoJy9hcHAvYXBwLWFwaXdvcmQvcmFuZC13b3JkJywgcGFyYW1zLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgICAvLyBsZXQgY2VsbFdpZHRoID0gX3RoaXMuY29udGVudC53aWR0aCAqIDAuMTA1O1xyXG4gICAgICAgICAgLy8gbGV0IGNlbGxIZWlnaHQgPSBfdGhpcy5jb250ZW50LmhlaWdodCAqIDAuMjE1O1xyXG4gICAgICAgICAgLy8gbGV0IHNwYWNpbmdYID0gX3RoaXMuY29udGVudC53aWR0aCAqIDAuMDIyO1xyXG4gICAgICAgICAgLy8gbGV0IHNwYWNpbmdZID0gX3RoaXMuY29udGVudC5oZWlnaHQgKiAwLjA0NTtcclxuICAgICAgICAgIGxldCBjZWxsV2lkdGggPSBfdGhpcy5jb250ZW50LndpZHRoICogMTtcclxuICAgICAgICAgIGxldCBjZWxsSGVpZ2h0ID0gX3RoaXMuY29udGVudC5oZWlnaHQgKiAxO1xyXG4gICAgICAgICAgbGV0IHNwYWNpbmdYID0gX3RoaXMuY29udGVudC53aWR0aCAqIDE7XHJcbiAgICAgICAgICBsZXQgc3BhY2luZ1kgPSBfdGhpcy5jb250ZW50LmhlaWdodCAqIDE7XHJcblxyXG4gICAgICAgICAgX3RoaXMuY29udGVudC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS5jZWxsU2l6ZS53aWR0aCA9IGNlbGxXaWR0aDtcclxuICAgICAgICAgIF90aGlzLmNvbnRlbnQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuY2VsbFNpemUuaGVpZ2h0ID0gY2VsbEhlaWdodDtcclxuICAgICAgICAgIF90aGlzLmNvbnRlbnQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuc3BhY2luZ1ggPSBzcGFjaW5nWDtcclxuICAgICAgICAgIF90aGlzLmNvbnRlbnQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuc3BhY2luZ1kgPSBzcGFjaW5nWTtcclxuICAgICAgICAgIC8vIOagueaNrk1hcFRvb2xz55Sf5oiQ55u45bqU55qE6YGT5YW3XHJcbiAgICAgICAgICBfdGhpcy50b29sc0FycmF5ID0gW107XHJcbiAgICAgICAgICBsZXQgVE9PTFMgPSBkYXRhLmRhdGE7XHJcbiAgICAgICAgICB2YXIgdG90YWwgPSBkYXRhLmRhdGEubGVuZ3RoO1xyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2codG90YWwpIFxyXG4gICAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRvdGFsOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaSkgXHJcbiAgICAgICAgICAgICAgbGV0IHRvb2wgPSBjYy5pbnN0YW50aWF0ZShfdGhpcy5wZXJzb24pO1xyXG4gICAgICAgICAgICAgIHRvb2wuZ2V0Q29tcG9uZW50KCdNYXBUb29scycpLmluaXRJbmZvKFRPT0xTW2ldKTtcclxuICAgICAgICAgICAgICBfdGhpcy50b29sc0FycmF5LnB1c2godG9vbCk7XHJcbiAgICAgICAgICAgICAgX3RoaXMuY29udGVudC5hZGRDaGlsZCh0b29sKTsgICAgXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAvLyDlrprkuYljb250ZW505rua5Yqo5p2h6auY5bqmXHJcbiAgICAgICAgICBsZXQgc2NvcmxsaGVpZ2h0ID0gIF90aGlzLmNvbnRlbnQucGFyZW50O1xyXG4gICAgICAgICAgLy/orqHnrpfmu5rliqjmnaHpq5jluqZcclxuICAgICAgICAgIGxldCAgaGVpZ2h0ID0gIChjZWxsSGVpZ2h0K3NwYWNpbmdZKSooIE1hdGguY2VpbCh0b3RhbC8yKSk7XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhoZWlnaHQpO1xyXG4gICAgICAgICAgLy8gc2NvcmxsaGVpZ2h0LmRlc2lnblJlc29sdXRpb24gID0gbmV3IGNjLlNpemUoNjAwLCBoZWlnaHQpO1xyXG4gICAgICAgICAgc2NvcmxsaGVpZ2h0LnNldENvbnRlbnRTaXplKDYwMCxoZWlnaHQpO1xyXG5cclxuICAgICAgICB9KVxyXG4gICAgfSxcclxuXHJcbiAgICBhZGRUb3VjaEV2ZW50KG5vZGVfMSkge1xyXG4gICAgICAgIG5vZGVfMS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICBub2RlXzEub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIG5vZGVfMS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICB9LFxyXG4gICAgLy8gc3RhcnQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgIHRoaXMuc3RhcnRfeSA9IHRoaXMuY29udGVudC55O1xyXG4gICAgLy8gICAgIHRoaXMuc3RhcnRfaW5kZXggPSAwOyAvLyDlvZPliY3miJHku6wyNOS4qkl0ZW3liqDovb3nmoQgMTAw6aG55pWw5o2u6YeM6Z2i55qE6LW35aeL5pWw5o2u6K6w5b2V55qE57Si5byVO1xyXG4gICAgLy8gICAgIHRoaXMubG9hZF9yZWNvcmQodGhpcy5zdGFydF9pbmRleCk7XHJcbiAgICAvLyB9LFxyXG5cclxuICAgIC8vIC8vIOS7jui/meS4que0ouW8leW8gOWni++8jOWKoOi9veaVsOaNruiusOW9leWIsOaIkeS7rOeahOa7muWKqOWIl+ihqOmHjOmdoueahOmAiemhuVxyXG4gICAgLy8gbG9hZF9yZWNvcmQ6IGZ1bmN0aW9uKHN0YXJ0X2luZGV4KSB7XHJcbiAgICAvLyAgICAgdGhpcy5zdGFydF9pbmRleCA9IHN0YXJ0X2luZGV4O1xyXG5cclxuICAgIC8vICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5QQUdFX05VTSAqIDM7IGkgKyspIHtcclxuICAgIC8vICAgICAgICAgdmFyIGxhYmVsID0gdGhpcy5vcHRfaXRlbV9zZXRbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJzcmNcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgIC8vICAgICAgICAgLy8g5pi+56S65oiR5Lus55qE6K6w5b2VO1xyXG4gICAgLy8gICAgICAgICBsYWJlbC5zdHJpbmcgPSB0aGlzLnZhbHVlX3NldFtzdGFydF9pbmRleCArIGldO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0sXHJcblxyXG4gICAgLy8gb25fc2Nyb2xsX2VuZGVkOiBmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICB0aGlzLnNjcm9sbHZlaXdfbG9hZF9yZWNvZGUoKTtcclxuICAgIC8vICAgICB0aGlzLnNjcm9sbF92aWV3LmVsYXN0aWMgPSB0cnVlO1xyXG4gICAgLy8gfSxcclxuXHJcbiAgICAvLyBzY3JvbGx2ZWl3X2xvYWRfcmVjb2RlOiBmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICAgLy8g5ZCR5LiL5Yqg6L295LqGXHJcbiAgICAvLyAgICAgaWYgKHRoaXMuc3RhcnRfaW5kZXggKyB0aGlzLlBBR0VfTlVNICogMyA8IHRoaXMudmFsdWVfc2V0Lmxlbmd0aCAmJlxyXG4gICAgLy8gICAgICAgICB0aGlzLmNvbnRlbnQueSA+PSB0aGlzLnN0YXJ0X3kgKyB0aGlzLlBBR0VfTlVNICogMiAqIHRoaXMuT1BUX0hFSUdIVCkgeyAvLyDliqjmgIHliqDovb1cclxuICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLnNjcm9sbF92aWV3Ll9hdXRvU2Nyb2xsaW5nKSB7IC8vIOetieW+hei/meS4quiHquWKqOa7muWKqOe7k+adn+S7peWQjuWGjeWBmuWKoOi9vVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY3JvbGxfdmlldy5lbGFzdGljID0gZmFsc2U7IC8vIOaaguaXtuWFs+mXreWbnuW8ueaViOaenFxyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICB2YXIgZG93bl9sb2FkZWQgPSB0aGlzLlBBR0VfTlVNO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnN0YXJ0X2luZGV4ICs9IGRvd25fbG9hZGVkO1xyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5zdGFydF9pbmRleCArIHRoaXMuUEFHRV9OVU0gKiAzID4gdGhpcy52YWx1ZV9zZXQubGVuZ3RoKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB2YXIgb3V0X2xlbiA9IHRoaXMuc3RhcnRfaW5kZXggKyB0aGlzLlBBR0VfTlVNICogMyAtIHRoaXMudmFsdWVfc2V0Lmxlbmd0aDtcclxuICAgIC8vICAgICAgICAgICAgIGRvd25fbG9hZGVkIC09IChvdXRfbGVuKTtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc3RhcnRfaW5kZXggLT0gKG91dF9sZW4pO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIHRoaXMubG9hZF9yZWNvcmQodGhpcy5zdGFydF9pbmRleCk7XHJcblxyXG4gICAgLy8gICAgICAgICB0aGlzLmNvbnRlbnQueSAtPSAoZG93bl9sb2FkZWQgKiB0aGlzLk9QVF9IRUlHSFQpO1xyXG4gICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICAvLyDlkJHkuIrliqDovb1cclxuICAgIC8vICAgICBpZiAodGhpcy5zdGFydF9pbmRleCA+IDAgJiYgdGhpcy5jb250ZW50LnkgPD0gdGhpcy5zdGFydF95KSB7XHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLnNjcm9sbF92aWV3Ll9hdXRvU2Nyb2xsaW5nKSB7IC8vIOetieW+hei/meS4quiHquWKqOa7muWKqOe7k+adn+S7peWQjuWGjeWBmuWKoOi9vVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY3JvbGxfdmlldy5lbGFzdGljID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgIHZhciB1cF9sb2FkZWQgPSB0aGlzLlBBR0VfTlVNO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnN0YXJ0X2luZGV4IC09IHVwX2xvYWRlZDtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuc3RhcnRfaW5kZXggPCAwKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB1cF9sb2FkZWQgKz0gdGhpcy5zdGFydF9pbmRleDtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc3RhcnRfaW5kZXggPSAwOyBcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB0aGlzLmxvYWRfcmVjb3JkKHRoaXMuc3RhcnRfaW5kZXgpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmNvbnRlbnQueSArPSAodXBfbG9hZGVkICogdGhpcy5PUFRfSEVJR0hUKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgLy8gZW5kIFxyXG4gICAgLy8gfSxcclxuICAgIC8vIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgLy8gICAgIHRoaXMuc2Nyb2xsdmVpd19sb2FkX3JlY29kZSgpO1xyXG4gICAgLy8gfSxcclxufSk7XHJcbiJdfQ==