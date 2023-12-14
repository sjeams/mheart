
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
      // console.log(_this.content)
      if (!data.data) {
        //刷新地图
        // cc.director.loadScene('map/诸天地图');
        _this.reloadWord(); //刷新世界地图

      } else {
        //生成世界
        // let cellWidth = _this.content.width * 0.105;
        // let cellHeight = _this.content.height * 0.215;
        // let spacingX = _this.content.width * 0.022;
        // let spacingY = _this.content.height * 0.045;
        // _this.content.getComponent(cc.Layout).cellSize.width = cellWidth;
        // _this.content.getComponent(cc.Layout).cellSize.height = cellHeight;
        // _this.content.getComponent(cc.Layout).spacingX = spacingX;
        // _this.content.getComponent(cc.Layout).spacingY = spacingY;
        _this.addMapPic(data); //生成地图


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
      _this.home.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    });
  },
  reloadWord: function reloadWord() {
    var _this = this;

    var params = {
      'page': 1,
      'pageSize': 12
    };
    httpRequest.httpPost('/app/app-apiword/map-word', params, function (data) {
      //移除节点
      _this.content.removeAllChildren();

      _this.content.destroyAllChildren(); //写入地图数据


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
    //添加节点

    for (var i = 0; i < total; i++) {
      // console.log(i) 
      //死亡移除map_status
      var map = TOOLS[i];

      if (map.map_status == 1) {
        // console.log(map.x)
        // console.log(map.y)
        var tool = cc.instantiate(_this.person);
        tool.getComponent('mapTools').initInfo(map);
        tool.x = map.x;
        tool.y = map.y; // _this.toolsArray.push(tool);
        // tool.setPosition(map.x,map.y);  

        _this.content.addChild(tool);
      }
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuY2VcXHNjb3JlX21hcC5qcyJdLCJuYW1lcyI6WyJIdHRwSGVscGVyIiwicmVxdWlyZSIsImh0dHBSZXF1ZXN0IiwicGFyYW1zIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjb250ZW50IiwiTm9kZSIsInBlcnNvbiIsIlByZWZhYiIsImhvbWUiLCJyZWxvYWQiLCJ0ZXN0X3Njcm9sbFZpZXciLCJ0eXBlIiwiU2Nyb2xsVmlldyIsInRlc3RfcGFnZVZpZXciLCJQYWdlVmlldyIsIm9uTG9hZCIsInNwYXduVG9vbHMiLCJfdGhpcyIsImh0dHBQb3N0IiwiZGF0YSIsInJlbG9hZFdvcmQiLCJhZGRNYXBQaWMiLCJhZGRXb3JkTWFwIiwibWFwX3BpYyIsInJlbW90ZVVybCIsImh0dHBVcmwiLCJsb2FkZXIiLCJsb2FkIiwidXJsIiwiZXJyIiwidGV4dHVyZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwiU3ByaXRlRnJhbWUiLCJyZW1vdmVBbGxDaGlsZHJlbiIsImRlc3Ryb3lBbGxDaGlsZHJlbiIsImNvbnNvbGUiLCJsb2ciLCJUT09MUyIsInVzZXJfaW5fd29yZF9tYXAiLCJ0b3RhbCIsImxlbmd0aCIsImkiLCJtYXAiLCJtYXBfc3RhdHVzIiwidG9vbCIsImluc3RhbnRpYXRlIiwiaW5pdEluZm8iLCJ4IiwieSIsImFkZENoaWxkIiwiYWRkVG91Y2hFdmVudCIsIm5vZGVfMSIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJ0b3VjaFN0YXJ0IiwiVE9VQ0hfTU9WRSIsInRvdWNoTW92ZSIsIlRPVUNIX0VORCIsInRvdWNoRW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSUEsVUFBVSxHQUFHQyxPQUFPLENBQUMsU0FBRCxDQUF4Qjs7QUFDQSxJQUFJQyxXQUFXLEdB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBek9LLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyDkuJbnlYzmk43kvZwgIFxyXG52YXIgSHR0cEhlbHBlciA9IHJlcXVpcmUoXCIuLi9odHRwXCIpOyBcclxudmFyIGh0dHBSZXF1ZXN0ID0gbmV3IEh0dHBIZWxwZXIoKTtcclxudmFyIHBhcmFtcyA9W107XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gYmFyOiB7XHJcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAgIC8v5rWL6K+VaXRlbVxyXG4gICAgICAvLyAgIGNvbnRlbnQ6IHtcclxuICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIC8vICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgIC8vICAgfSxcclxuXHJcbiAgICAgIC8vIHBlcnNvbjoge1xyXG4gICAgICAvLyAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIC8vICAgdHlwZTogY2MuUHJlZmFiXHJcbiAgICAgIC8vIH0sXHJcbiAgXHJcbiAgICAgIGNvbnRlbnQ6IGNjLk5vZGUsXHJcbiAgICAgIHBlcnNvbjogY2MuUHJlZmFiLFxyXG4gICAgICBob21lOiBjYy5Ob2RlLFxyXG4gICAgICByZWxvYWQ6IGNjLk5vZGUsXHJcbiAgICAgIC8v5YiX6KGoXHJcbiAgICAgIHRlc3Rfc2Nyb2xsVmlldzoge1xyXG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgdHlwZTogY2MuU2Nyb2xsVmlld1xyXG4gICAgICB9LFxyXG4gICAgICAvL+e/u+mhteWuueWZqFxyXG4gICAgICB0ZXN0X3BhZ2VWaWV3OiB7XHJcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB0eXBlOiBjYy5QYWdlVmlld1xyXG4gICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgIC8vICAgICBsZXQgcGVyc29uID0gY2MuaW5zdGFudGlhdGUodGhpcy5wZXJzb24pO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNvbnRlbj1wZXJzb25cclxuICAgICAgICAvLyAgICAgLy8gcGVyc29uLnBhcmVudCA9IHRoaXMuY29udGVudDtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5hZGRUb3VjaEV2ZW50KHBlcnNvbik7ICAvL+a3u+WKoOinpuaRuOS6i+S7tlxyXG4gICAgICAgIC8vICAgfVxyXG4gICAgICAgIC8vIHRoaXMudmFsdWVfc2V0ID0gW107XHJcbiAgICAgICAgLy8gLy8g5aaC5p6c5L2g6L+Z6YeM5piv5o6S6KGM5qac77yM6YKj5LmI5L2g5bCxcHVzaOaOkuihjOamnOeahOaVsOaNrjtcclxuICAgICAgICAvLyBmb3IodmFyIGkgPSAxOyBpIDw9IDEwMDsgaSArKykge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnZhbHVlX3NldC5wdXNoKGkpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcy5jb250ZW50ID0gdGhpcy5zY3JvbGxfdmlldy5jb250ZW50O1xyXG4gICAgICAgIC8vIHRoaXMub3B0X2l0ZW1fc2V0ID0gW107XHJcbiAgICAgICAgLy8gZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuUEFHRV9OVU0gKiAzOyBpICsrKSB7XHJcbiAgICAgICAgLy8gICAgIHZhciBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtX3ByZWZhYik7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuY29udGVudC5hZGRDaGlsZChpdGVtKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5vcHRfaXRlbV9zZXQucHVzaChpdGVtKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgIHRoaXMuc3Bhd25Ub29scygpXHJcbiAgICAgICAgLy8gdGhpcy5zY3JvbGxfdmlldy5ub2RlLm9uKFwic2Nyb2xsLWVuZGVkXCIsIHRoaXMub25fc2Nyb2xsX2VuZGVkLmJpbmQodGhpcyksIHRoaXMpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzcGF3blRvb2xzICgpIHtcclxuICAgICAgdmFyIF90aGlzID10aGlzO1xyXG5cclxuICAgICAgdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAgICAgICAncGFnZSc6IDEsXHJcbiAgICAgICAgICAgICAgJ3BhZ2VTaXplJzogMTIsXHJcbiAgICAgIH07XHJcbiAgICAgIGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCcvYXBwL2FwcC1hcGl3b3JkL2luZGV4JywgcGFyYW1zLCBmdW5jdGlvbiAoZGF0YSkge1xyXG5cclxuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKF90aGlzLmNvbnRlbnQpXHJcbiAgICAgICAgICBpZighZGF0YS5kYXRhKXtcclxuICAgICAgICAgICAgICAvL+WIt+aWsOWcsOWbvlxyXG4gICAgICAgICAgICAgIC8vIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFwL+ivuOWkqeWcsOWbvicpO1xyXG4gICAgICAgICAgICAgIF90aGlzLnJlbG9hZFdvcmQoKS8v5Yi35paw5LiW55WM5Zyw5Zu+XHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAvL+eUn+aIkOS4lueVjFxyXG4gICAgICAgICAgICAgIC8vIGxldCBjZWxsV2lkdGggPSBfdGhpcy5jb250ZW50LndpZHRoICogMC4xMDU7XHJcbiAgICAgICAgICAgICAgLy8gbGV0IGNlbGxIZWlnaHQgPSBfdGhpcy5jb250ZW50LmhlaWdodCAqIDAuMjE1O1xyXG4gICAgICAgICAgICAgIC8vIGxldCBzcGFjaW5nWCA9IF90aGlzLmNvbnRlbnQud2lkdGggKiAwLjAyMjtcclxuICAgICAgICAgICAgICAvLyBsZXQgc3BhY2luZ1kgPSBfdGhpcy5jb250ZW50LmhlaWdodCAqIDAuMDQ1O1xyXG5cclxuICAgICAgICAgICAgICAvLyBfdGhpcy5jb250ZW50LmdldENvbXBvbmVudChjYy5MYXlvdXQpLmNlbGxTaXplLndpZHRoID0gY2VsbFdpZHRoO1xyXG4gICAgICAgICAgICAgIC8vIF90aGlzLmNvbnRlbnQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuY2VsbFNpemUuaGVpZ2h0ID0gY2VsbEhlaWdodDtcclxuICAgICAgICAgICAgICAvLyBfdGhpcy5jb250ZW50LmdldENvbXBvbmVudChjYy5MYXlvdXQpLnNwYWNpbmdYID0gc3BhY2luZ1g7XHJcbiAgICAgICAgICAgICAgLy8gX3RoaXMuY29udGVudC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS5zcGFjaW5nWSA9IHNwYWNpbmdZO1xyXG4gICAgICAgICAgICAgIF90aGlzLmFkZE1hcFBpYyhkYXRhKSAvL+eUn+aIkOWcsOWbvlxyXG4gICAgICAgICAgICAgIF90aGlzLmFkZFdvcmRNYXAoZGF0YSkgLy/nlJ/miJDnlJ/nialcclxuICAgICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICAvL+eUn+aIkOWcsOWbvlxyXG4gICAgYWRkTWFwUGljKGRhdGEpe1xyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgaWYoZGF0YS5kYXRhWydtYXBfcGljJ10pe1xyXG4gICAgICAgICAgdmFyICBtYXBfcGljID1kYXRhLmRhdGFbJ21hcF9waWMnXTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIHZhciAgbWFwX3BpYyA9ZGF0YS5kYXRhWydwaWN0dXJlJ107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciByZW1vdGVVcmwgPSBodHRwUmVxdWVzdC5odHRwVXJsKG1hcF9waWMpO1xyXG4gICAgICAgICAgY2MubG9hZGVyLmxvYWQoeyB1cmw6IHJlbW90ZVVybCB9LCBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7ICBcclxuICAgICAgICAgICAgICBfdGhpcy5ob21lLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHJlbG9hZFdvcmQoKXtcclxuICAgICAgdmFyIF90aGlzID10aGlzO1xyXG5cclxuICAgICAgdmFyIHBhcmFtcyA9IHtcclxuICAgICAgICAncGFnZSc6IDEsXHJcbiAgICAgICAgJ3BhZ2VTaXplJzogMTIsXHJcbiAgICAgIH07XHJcbiAgICAgIGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCcvYXBwL2FwcC1hcGl3b3JkL21hcC13b3JkJywgcGFyYW1zLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIC8v56e76Zmk6IqC54K5XHJcbiAgICAgICAgX3RoaXMuY29udGVudC5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIF90aGlzLmNvbnRlbnQuZGVzdHJveUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgLy/lhpnlhaXlnLDlm77mlbDmja5cclxuICAgICAgICBfdGhpcy5hZGRXb3JkTWFwKGRhdGEpXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICAvL+eUn+aIkOeUn+eJqVxyXG4gICAgYWRkV29yZE1hcChkYXRhKXtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhKSBcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIC8vIOagueaNrk1hcFRvb2xz55Sf5oiQ55u45bqU55qE6YGT5YW3XHJcbiAgICAgICAgLy8gX3RoaXMudG9vbHNBcnJheSA9IFtdO1xyXG4gICAgICAgIGxldCBUT09MUyA9IGRhdGEuZGF0YS51c2VyX2luX3dvcmRfbWFwO1xyXG4gICAgICAgIHZhciB0b3RhbCA9IGRhdGEuZGF0YS51c2VyX2luX3dvcmRfbWFwLmxlbmd0aDtcclxuICAgICAgICAvLyB2YXIgZmkgPSBjYy5mYWRlSW4oMikvL+a4kOaYvuaViOaenFxyXG4gICAgICAgIC8vIF90aGlzLmNvbnRlbnQucnVuQWN0aW9uKGZpKTtcclxuICAgICAgICAvLyB2YXIgZm8gPSBjYy5mYWRlT3V0KDEpLy/muJDpmpDmlYjmnpxcclxuICAgICAgICAvLyBfdGhpcy5jb250ZW50LnJ1bkFjdGlvbihmbyk7XHJcbiAgICAgICAgLy/mt7vliqDoioLngrlcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8dG90YWw7IGkrKykge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpKSBcclxuICAgICAgICAgICAgLy/mrbvkuqHnp7vpmaRtYXBfc3RhdHVzXHJcbiAgICAgICAgICAgIHZhciBtYXAgPVRPT0xTW2ldO1xyXG4gICAgICAgICAgICBpZihtYXAubWFwX3N0YXR1cz09MSl7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobWFwLngpXHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobWFwLnkpXHJcbiAgICAgICAgICAgICAgbGV0IHRvb2wgPSBjYy5pbnN0YW50aWF0ZShfdGhpcy5wZXJzb24pO1xyXG4gICAgICAgICAgICAgIHRvb2wuZ2V0Q29tcG9uZW50KCdtYXBUb29scycpLmluaXRJbmZvKG1hcCk7XHJcbiAgICAgICAgICAgICAgdG9vbC54PW1hcC54XHJcbiAgICAgICAgICAgICAgdG9vbC55PW1hcC55XHJcbiAgICAgICAgICAgICAgLy8gX3RoaXMudG9vbHNBcnJheS5wdXNoKHRvb2wpO1xyXG4gICAgICAgICAgICAgIC8vIHRvb2wuc2V0UG9zaXRpb24obWFwLngsbWFwLnkpOyAgXHJcbiAgICAgICAgICAgICAgX3RoaXMuY29udGVudC5hZGRDaGlsZCh0b29sKTsgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBhZGRUb3VjaEV2ZW50KG5vZGVfMSkge1xyXG4gICAgICAgIG5vZGVfMS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICBub2RlXzEub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIG5vZGVfMS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICB9LFxyXG4gICAgLy8gc3RhcnQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgIHRoaXMuc3RhcnRfeSA9IHRoaXMuY29udGVudC55O1xyXG4gICAgLy8gICAgIHRoaXMuc3RhcnRfaW5kZXggPSAwOyAvLyDlvZPliY3miJHku6wyNOS4qkl0ZW3liqDovb3nmoQgMTAw6aG55pWw5o2u6YeM6Z2i55qE6LW35aeL5pWw5o2u6K6w5b2V55qE57Si5byVO1xyXG4gICAgLy8gICAgIHRoaXMubG9hZF9yZWNvcmQodGhpcy5zdGFydF9pbmRleCk7XHJcbiAgICAvLyB9LFxyXG5cclxuICAgIC8vIC8vIOS7jui/meS4que0ouW8leW8gOWni++8jOWKoOi9veaVsOaNruiusOW9leWIsOaIkeS7rOeahOa7muWKqOWIl+ihqOmHjOmdoueahOmAiemhuVxyXG4gICAgLy8gbG9hZF9yZWNvcmQ6IGZ1bmN0aW9uKHN0YXJ0X2luZGV4KSB7XHJcbiAgICAvLyAgICAgdGhpcy5zdGFydF9pbmRleCA9IHN0YXJ0X2luZGV4O1xyXG5cclxuICAgIC8vICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5QQUdFX05VTSAqIDM7IGkgKyspIHtcclxuICAgIC8vICAgICAgICAgdmFyIGxhYmVsID0gdGhpcy5vcHRfaXRlbV9zZXRbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJzcmNcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgIC8vICAgICAgICAgLy8g5pi+56S65oiR5Lus55qE6K6w5b2VO1xyXG4gICAgLy8gICAgICAgICBsYWJlbC5zdHJpbmcgPSB0aGlzLnZhbHVlX3NldFtzdGFydF9pbmRleCArIGldO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0sXHJcblxyXG4gICAgLy8gb25fc2Nyb2xsX2VuZGVkOiBmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICB0aGlzLnNjcm9sbHZlaXdfbG9hZF9yZWNvZGUoKTtcclxuICAgIC8vICAgICB0aGlzLnNjcm9sbF92aWV3LmVsYXN0aWMgPSB0cnVlO1xyXG4gICAgLy8gfSxcclxuXHJcbiAgICAvLyBzY3JvbGx2ZWl3X2xvYWRfcmVjb2RlOiBmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICAgLy8g5ZCR5LiL5Yqg6L295LqGXHJcbiAgICAvLyAgICAgaWYgKHRoaXMuc3RhcnRfaW5kZXggKyB0aGlzLlBBR0VfTlVNICogMyA8IHRoaXMudmFsdWVfc2V0Lmxlbmd0aCAmJlxyXG4gICAgLy8gICAgICAgICB0aGlzLmNvbnRlbnQueSA+PSB0aGlzLnN0YXJ0X3kgKyB0aGlzLlBBR0VfTlVNICogMiAqIHRoaXMuT1BUX0hFSUdIVCkgeyAvLyDliqjmgIHliqDovb1cclxuICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLnNjcm9sbF92aWV3Ll9hdXRvU2Nyb2xsaW5nKSB7IC8vIOetieW+hei/meS4quiHquWKqOa7muWKqOe7k+adn+S7peWQjuWGjeWBmuWKoOi9vVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY3JvbGxfdmlldy5lbGFzdGljID0gZmFsc2U7IC8vIOaaguaXtuWFs+mXreWbnuW8ueaViOaenFxyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICB2YXIgZG93bl9sb2FkZWQgPSB0aGlzLlBBR0VfTlVNO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnN0YXJ0X2luZGV4ICs9IGRvd25fbG9hZGVkO1xyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5zdGFydF9pbmRleCArIHRoaXMuUEFHRV9OVU0gKiAzID4gdGhpcy52YWx1ZV9zZXQubGVuZ3RoKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB2YXIgb3V0X2xlbiA9IHRoaXMuc3RhcnRfaW5kZXggKyB0aGlzLlBBR0VfTlVNICogMyAtIHRoaXMudmFsdWVfc2V0Lmxlbmd0aDtcclxuICAgIC8vICAgICAgICAgICAgIGRvd25fbG9hZGVkIC09IChvdXRfbGVuKTtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc3RhcnRfaW5kZXggLT0gKG91dF9sZW4pO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIHRoaXMubG9hZF9yZWNvcmQodGhpcy5zdGFydF9pbmRleCk7XHJcblxyXG4gICAgLy8gICAgICAgICB0aGlzLmNvbnRlbnQueSAtPSAoZG93bl9sb2FkZWQgKiB0aGlzLk9QVF9IRUlHSFQpO1xyXG4gICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICAvLyDlkJHkuIrliqDovb1cclxuICAgIC8vICAgICBpZiAodGhpcy5zdGFydF9pbmRleCA+IDAgJiYgdGhpcy5jb250ZW50LnkgPD0gdGhpcy5zdGFydF95KSB7XHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLnNjcm9sbF92aWV3Ll9hdXRvU2Nyb2xsaW5nKSB7IC8vIOetieW+hei/meS4quiHquWKqOa7muWKqOe7k+adn+S7peWQjuWGjeWBmuWKoOi9vVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY3JvbGxfdmlldy5lbGFzdGljID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgIHZhciB1cF9sb2FkZWQgPSB0aGlzLlBBR0VfTlVNO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnN0YXJ0X2luZGV4IC09IHVwX2xvYWRlZDtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuc3RhcnRfaW5kZXggPCAwKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB1cF9sb2FkZWQgKz0gdGhpcy5zdGFydF9pbmRleDtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc3RhcnRfaW5kZXggPSAwOyBcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB0aGlzLmxvYWRfcmVjb3JkKHRoaXMuc3RhcnRfaW5kZXgpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmNvbnRlbnQueSArPSAodXBfbG9hZGVkICogdGhpcy5PUFRfSEVJR0hUKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgLy8gZW5kIFxyXG4gICAgLy8gfSxcclxuICAgIC8vIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgLy8gICAgIHRoaXMuc2Nyb2xsdmVpd19sb2FkX3JlY29kZSgpO1xyXG4gICAgLy8gfSxcclxufSk7XHJcbiJdfQ==