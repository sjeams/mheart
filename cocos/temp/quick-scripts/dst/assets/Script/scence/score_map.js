
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
    content: cc.Node,
    person: cc.Prefab,
    home: cc.Node,
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
        _this.addWord(); //刷新世界地图

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
  addWord: function addWord() {
    var _this = this;

    httpRequest.httpPost('/app/app-apiword/map-word', params, function (data) {
      //写入地图数据
      _this.addWordMap(data);
    });
  },
  addWordMap: function addWordMap(data) {
    console.log(data);

    var _this = this; // 根据MapTools生成相应的道具
    // _this.toolsArray = [];


    var TOOLS = data.data.user_in_word_map;
    var total = data.data.user_in_word_map.length;
    var fi = cc.fadeIn(2); //渐显效果

    _this.content.runAction(fi);

    var fo = cc.fadeOut(1); //渐隐效果

    _this.content.runAction(fo); //移除节点


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuY2VcXHNjb3JlX21hcC5qcyJdLCJuYW1lcyI6WyJIdHRwSGVscGVyIiwicmVxdWlyZSIsImh0dHBSZXF1ZXN0IiwicGFyYW1zIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjb250ZW50IiwiTm9kZSIsInBlcnNvbiIsIlByZWZhYiIsImhvbWUiLCJ0ZXN0X3Njcm9sbFZpZXciLCJ0eXBlIiwiU2Nyb2xsVmlldyIsInRlc3RfcGFnZVZpZXciLCJQYWdlVmlldyIsIm9uTG9hZCIsInNwYXduVG9vbHMiLCJfdGhpcyIsImh0dHBQb3N0IiwiZGF0YSIsImFkZFdvcmQiLCJhZGRNYXBQaWMiLCJhZGRXb3JkTWFwIiwibWFwX3BpYyIsInJlbW90ZVVybCIsImh0dHBVcmwiLCJsb2FkZXIiLCJsb2FkIiwidXJsIiwiZXJyIiwidGV4dHVyZSIsImdldENvbXBvbmVudCIsIlNwcml0ZSIsInNwcml0ZUZyYW1lIiwiU3ByaXRlRnJhbWUiLCJjb25zb2xlIiwibG9nIiwiVE9PTFMiLCJ1c2VyX2luX3dvcmRfbWFwIiwidG90YWwiLCJsZW5ndGgiLCJmaSIsImZhZGVJbiIsInJ1bkFjdGlvbiIsImZvIiwiZmFkZU91dCIsInJlbW92ZUFsbENoaWxkcmVuIiwiZGVzdHJveUFsbENoaWxkcmVuIiwiaSIsIm1hcCIsIm1hcF9zdGF0dXMiLCJ0b29sIiwiaW5zdGFudGlhdGUiLCJpbml0SW5mbyIsIngiLCJ5IiwiYWRkQ2hpbGQiLCJhZGRUb3VjaEV2ZW50Iiwibm9kZV8xIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsInRvdWNoU3RhcnQiLCJUT1VDSF9NT1ZFIiwidG91Y2hNb3ZlIiwiVE9VQ0hfRU5EIiwidG91Y2hFbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxN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QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBbk9LLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyDkuJbnlYzmk43kvZwgIFxyXG52YXIgSHR0cEhlbHBlciA9IHJlcXVpcmUoXCJodHRwXCIpOyBcclxudmFyIGh0dHBSZXF1ZXN0ID0gbmV3IEh0dHBIZWxwZXIoKTtcclxudmFyIHBhcmFtcyA9W107XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gYmFyOiB7XHJcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAgIC8v5rWL6K+VaXRlbVxyXG4gICAgICAvLyAgIGNvbnRlbnQ6IHtcclxuICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIC8vICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgIC8vICAgfSxcclxuXHJcbiAgICAgIC8vIHBlcnNvbjoge1xyXG4gICAgICAvLyAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIC8vICAgdHlwZTogY2MuUHJlZmFiXHJcbiAgICAgIC8vIH0sXHJcbiAgXHJcbiAgICAgIGNvbnRlbnQ6IGNjLk5vZGUsXHJcbiAgICAgIHBlcnNvbjogY2MuUHJlZmFiLFxyXG4gICAgICBob21lOiBjYy5Ob2RlLFxyXG4gICAgICAvL+WIl+ihqFxyXG4gICAgICB0ZXN0X3Njcm9sbFZpZXc6IHtcclxuICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIHR5cGU6IGNjLlNjcm9sbFZpZXdcclxuICAgICAgfSxcclxuICAgICAgLy/nv7vpobXlrrnlmahcclxuICAgICAgdGVzdF9wYWdlVmlldzoge1xyXG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgdHlwZTogY2MuUGFnZVZpZXdcclxuICAgICAgfSxcclxuXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgbGV0IHBlcnNvbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGVyc29uKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5jb250ZW49cGVyc29uXHJcbiAgICAgICAgLy8gICAgIC8vIHBlcnNvbi5wYXJlbnQgPSB0aGlzLmNvbnRlbnQ7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuYWRkVG91Y2hFdmVudChwZXJzb24pOyAgLy/mt7vliqDop6bmkbjkuovku7ZcclxuICAgICAgICAvLyAgIH1cclxuICAgICAgICAvLyB0aGlzLnZhbHVlX3NldCA9IFtdO1xyXG4gICAgICAgIC8vIC8vIOWmguaenOS9oOi/memHjOaYr+aOkuihjOamnO+8jOmCo+S5iOS9oOWwsXB1c2jmjpLooYzmppznmoTmlbDmja47XHJcbiAgICAgICAgLy8gZm9yKHZhciBpID0gMTsgaSA8PSAxMDA7IGkgKyspIHtcclxuICAgICAgICAvLyAgICAgdGhpcy52YWx1ZV9zZXQucHVzaChpKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMuY29udGVudCA9IHRoaXMuc2Nyb2xsX3ZpZXcuY29udGVudDtcclxuICAgICAgICAvLyB0aGlzLm9wdF9pdGVtX3NldCA9IFtdO1xyXG4gICAgICAgIC8vIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLlBBR0VfTlVNICogMzsgaSArKykge1xyXG4gICAgICAgIC8vICAgICB2YXIgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbV9wcmVmYWIpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMub3B0X2l0ZW1fc2V0LnB1c2goaXRlbSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICB0aGlzLnNwYXduVG9vbHMoKVxyXG4gICAgICAgIC8vIHRoaXMuc2Nyb2xsX3ZpZXcubm9kZS5vbihcInNjcm9sbC1lbmRlZFwiLCB0aGlzLm9uX3Njcm9sbF9lbmRlZC5iaW5kKHRoaXMpLCB0aGlzKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3Bhd25Ub29scyAoKSB7XHJcbiAgICAgIHZhciBfdGhpcyA9dGhpcztcclxuXHJcbiAgICAgIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgJ3BhZ2UnOiAxLFxyXG4gICAgICAgICAgICAgICdwYWdlU2l6ZSc6IDEyLFxyXG4gICAgICB9O1xyXG4gICAgICBodHRwUmVxdWVzdC5odHRwUG9zdCgnL2FwcC9hcHAtYXBpd29yZC9pbmRleCcsIHBhcmFtcywgZnVuY3Rpb24gKGRhdGEpIHtcclxuXHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhfdGhpcy5jb250ZW50KVxyXG4gICAgICAgICAgaWYoIWRhdGEuZGF0YSl7XHJcbiAgICAgICAgICAgICAgLy/liLfmlrDlnLDlm75cclxuICAgICAgICAgICAgICAvLyBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21hcC/or7jlpKnlnLDlm74nKTtcclxuICAgICAgICAgICAgICBfdGhpcy5hZGRXb3JkKCkvL+WIt+aWsOS4lueVjOWcsOWbvlxyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgLy/nlJ/miJDkuJbnlYxcclxuICAgICAgICAgICAgICAvLyBsZXQgY2VsbFdpZHRoID0gX3RoaXMuY29udGVudC53aWR0aCAqIDAuMTA1O1xyXG4gICAgICAgICAgICAgIC8vIGxldCBjZWxsSGVpZ2h0ID0gX3RoaXMuY29udGVudC5oZWlnaHQgKiAwLjIxNTtcclxuICAgICAgICAgICAgICAvLyBsZXQgc3BhY2luZ1ggPSBfdGhpcy5jb250ZW50LndpZHRoICogMC4wMjI7XHJcbiAgICAgICAgICAgICAgLy8gbGV0IHNwYWNpbmdZID0gX3RoaXMuY29udGVudC5oZWlnaHQgKiAwLjA0NTtcclxuXHJcbiAgICAgICAgICAgICAgLy8gX3RoaXMuY29udGVudC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS5jZWxsU2l6ZS53aWR0aCA9IGNlbGxXaWR0aDtcclxuICAgICAgICAgICAgICAvLyBfdGhpcy5jb250ZW50LmdldENvbXBvbmVudChjYy5MYXlvdXQpLmNlbGxTaXplLmhlaWdodCA9IGNlbGxIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgLy8gX3RoaXMuY29udGVudC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS5zcGFjaW5nWCA9IHNwYWNpbmdYO1xyXG4gICAgICAgICAgICAgIC8vIF90aGlzLmNvbnRlbnQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuc3BhY2luZ1kgPSBzcGFjaW5nWTtcclxuXHJcbiAgICAgICAgICAgICAgX3RoaXMuYWRkTWFwUGljKGRhdGEpIC8v55Sf5oiQ5Zyw5Zu+XHJcbiAgICAgICAgICAgICAgX3RoaXMuYWRkV29yZE1hcChkYXRhKSAvL+eUn+aIkOeUn+eJqVxyXG4gICAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIGFkZE1hcFBpYyhkYXRhKXtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmKGRhdGEuZGF0YVsnbWFwX3BpYyddKXtcclxuICAgICAgICAgIHZhciAgbWFwX3BpYyA9ZGF0YS5kYXRhWydtYXBfcGljJ107XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB2YXIgIG1hcF9waWMgPWRhdGEuZGF0YVsncGljdHVyZSddO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVtb3RlVXJsID0gaHR0cFJlcXVlc3QuaHR0cFVybChtYXBfcGljKTtcclxuICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHsgdXJsOiByZW1vdGVVcmwgfSwgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkgeyAgXHJcbiAgICAgICAgICAgICAgX3RoaXMuaG9tZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBhZGRXb3JkKCl7XHJcbiAgICAgIHZhciBfdGhpcyA9dGhpcztcclxuICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3QoJy9hcHAvYXBwLWFwaXdvcmQvbWFwLXdvcmQnLCBwYXJhbXMsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgLy/lhpnlhaXlnLDlm77mlbDmja5cclxuICAgICAgICBfdGhpcy5hZGRXb3JkTWFwKGRhdGEpXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBhZGRXb3JkTWFwKGRhdGEpe1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhKSBcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIC8vIOagueaNrk1hcFRvb2xz55Sf5oiQ55u45bqU55qE6YGT5YW3XHJcbiAgICAgICAgLy8gX3RoaXMudG9vbHNBcnJheSA9IFtdO1xyXG4gICAgICAgIGxldCBUT09MUyA9IGRhdGEuZGF0YS51c2VyX2luX3dvcmRfbWFwO1xyXG4gICAgICAgIHZhciB0b3RhbCA9IGRhdGEuZGF0YS51c2VyX2luX3dvcmRfbWFwLmxlbmd0aDtcclxuICBcclxuICAgICAgICB2YXIgZmkgPSBjYy5mYWRlSW4oMikvL+a4kOaYvuaViOaenFxyXG4gICAgICAgIF90aGlzLmNvbnRlbnQucnVuQWN0aW9uKGZpKTtcclxuICAgICAgICB2YXIgZm8gPSBjYy5mYWRlT3V0KDEpLy/muJDpmpDmlYjmnpxcclxuICAgICAgICBfdGhpcy5jb250ZW50LnJ1bkFjdGlvbihmbyk7XHJcbiAgICAgICAgLy/np7vpmaToioLngrlcclxuICAgICAgICBfdGhpcy5jb250ZW50LnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgX3RoaXMuY29udGVudC5kZXN0cm95QWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICAvL+a3u+WKoOiKgueCuVxyXG4gICAgICAgIGZvciAobGV0IGk9MDsgaTx0b3RhbDsgaSsrKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGkpIFxyXG4gICAgICAgICAgICAvL+atu+S6oeenu+mZpG1hcF9zdGF0dXNcclxuICAgICAgICAgICAgdmFyIG1hcCA9VE9PTFNbaV07XHJcbiAgICAgICAgICAgIGlmKG1hcC5tYXBfc3RhdHVzPT0xKXtcclxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhtYXAueClcclxuICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhtYXAueSlcclxuICAgICAgICAgICAgICBsZXQgdG9vbCA9IGNjLmluc3RhbnRpYXRlKF90aGlzLnBlcnNvbik7XHJcbiAgICAgICAgICAgICAgdG9vbC5nZXRDb21wb25lbnQoJ21hcFRvb2xzJykuaW5pdEluZm8obWFwKTtcclxuICAgICAgICAgICAgICB0b29sLng9bWFwLnhcclxuICAgICAgICAgICAgICB0b29sLnk9bWFwLnlcclxuICAgICAgICAgICAgICAvLyBfdGhpcy50b29sc0FycmF5LnB1c2godG9vbCk7XHJcbiAgICAgICAgICAgICAgLy8gdG9vbC5zZXRQb3NpdGlvbihtYXAueCxtYXAueSk7ICBcclxuICAgICAgICAgICAgICBfdGhpcy5jb250ZW50LmFkZENoaWxkKHRvb2wpOyAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFkZFRvdWNoRXZlbnQobm9kZV8xKSB7XHJcbiAgICAgICAgbm9kZV8xLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIG5vZGVfMS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLnRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgbm9kZV8xLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy50b3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgIH0sXHJcbiAgICAvLyBzdGFydDogZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgdGhpcy5zdGFydF95ID0gdGhpcy5jb250ZW50Lnk7XHJcbiAgICAvLyAgICAgdGhpcy5zdGFydF9pbmRleCA9IDA7IC8vIOW9k+WJjeaIkeS7rDI05LiqSXRlbeWKoOi9veeahCAxMDDpobnmlbDmja7ph4zpnaLnmoTotbflp4vmlbDmja7orrDlvZXnmoTntKLlvJU7XHJcbiAgICAvLyAgICAgdGhpcy5sb2FkX3JlY29yZCh0aGlzLnN0YXJ0X2luZGV4KTtcclxuICAgIC8vIH0sXHJcblxyXG4gICAgLy8gLy8g5LuO6L+Z5Liq57Si5byV5byA5aeL77yM5Yqg6L295pWw5o2u6K6w5b2V5Yiw5oiR5Lus55qE5rua5Yqo5YiX6KGo6YeM6Z2i55qE6YCJ6aG5XHJcbiAgICAvLyBsb2FkX3JlY29yZDogZnVuY3Rpb24oc3RhcnRfaW5kZXgpIHtcclxuICAgIC8vICAgICB0aGlzLnN0YXJ0X2luZGV4ID0gc3RhcnRfaW5kZXg7XHJcblxyXG4gICAgLy8gICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLlBBR0VfTlVNICogMzsgaSArKykge1xyXG4gICAgLy8gICAgICAgICB2YXIgbGFiZWwgPSB0aGlzLm9wdF9pdGVtX3NldFtpXS5nZXRDaGlsZEJ5TmFtZShcInNyY1wiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xyXG4gICAgLy8gICAgICAgICAvLyDmmL7npLrmiJHku6znmoTorrDlvZU7XHJcbiAgICAvLyAgICAgICAgIGxhYmVsLnN0cmluZyA9IHRoaXMudmFsdWVfc2V0W3N0YXJ0X2luZGV4ICsgaV07XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfSxcclxuXHJcbiAgICAvLyBvbl9zY3JvbGxfZW5kZWQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgIHRoaXMuc2Nyb2xsdmVpd19sb2FkX3JlY29kZSgpO1xyXG4gICAgLy8gICAgIHRoaXMuc2Nyb2xsX3ZpZXcuZWxhc3RpYyA9IHRydWU7XHJcbiAgICAvLyB9LFxyXG5cclxuICAgIC8vIHNjcm9sbHZlaXdfbG9hZF9yZWNvZGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgICAvLyDlkJHkuIvliqDovb3kuoZcclxuICAgIC8vICAgICBpZiAodGhpcy5zdGFydF9pbmRleCArIHRoaXMuUEFHRV9OVU0gKiAzIDwgdGhpcy52YWx1ZV9zZXQubGVuZ3RoICYmXHJcbiAgICAvLyAgICAgICAgIHRoaXMuY29udGVudC55ID49IHRoaXMuc3RhcnRfeSArIHRoaXMuUEFHRV9OVU0gKiAyICogdGhpcy5PUFRfSEVJR0hUKSB7IC8vIOWKqOaAgeWKoOi9vVxyXG4gICAgICAgICAgICBcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsX3ZpZXcuX2F1dG9TY3JvbGxpbmcpIHsgLy8g562J5b6F6L+Z5Liq6Ieq5Yqo5rua5Yqo57uT5p2f5Lul5ZCO5YaN5YGa5Yqg6L29XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjcm9sbF92aWV3LmVsYXN0aWMgPSBmYWxzZTsgLy8g5pqC5pe25YWz6Zet5Zue5by55pWI5p6cXHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgIHZhciBkb3duX2xvYWRlZCA9IHRoaXMuUEFHRV9OVU07XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc3RhcnRfaW5kZXggKz0gZG93bl9sb2FkZWQ7XHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLnN0YXJ0X2luZGV4ICsgdGhpcy5QQUdFX05VTSAqIDMgPiB0aGlzLnZhbHVlX3NldC5sZW5ndGgpIHtcclxuICAgIC8vICAgICAgICAgICAgIHZhciBvdXRfbGVuID0gdGhpcy5zdGFydF9pbmRleCArIHRoaXMuUEFHRV9OVU0gKiAzIC0gdGhpcy52YWx1ZV9zZXQubGVuZ3RoO1xyXG4gICAgLy8gICAgICAgICAgICAgZG93bl9sb2FkZWQgLT0gKG91dF9sZW4pO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zdGFydF9pbmRleCAtPSAob3V0X2xlbik7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgdGhpcy5sb2FkX3JlY29yZCh0aGlzLnN0YXJ0X2luZGV4KTtcclxuXHJcbiAgICAvLyAgICAgICAgIHRoaXMuY29udGVudC55IC09IChkb3duX2xvYWRlZCAqIHRoaXMuT1BUX0hFSUdIVCk7XHJcbiAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIC8vIOWQkeS4iuWKoOi9vVxyXG4gICAgLy8gICAgIGlmICh0aGlzLnN0YXJ0X2luZGV4ID4gMCAmJiB0aGlzLmNvbnRlbnQueSA8PSB0aGlzLnN0YXJ0X3kpIHtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuc2Nyb2xsX3ZpZXcuX2F1dG9TY3JvbGxpbmcpIHsgLy8g562J5b6F6L+Z5Liq6Ieq5Yqo5rua5Yqo57uT5p2f5Lul5ZCO5YaN5YGa5Yqg6L29XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnNjcm9sbF92aWV3LmVsYXN0aWMgPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgdmFyIHVwX2xvYWRlZCA9IHRoaXMuUEFHRV9OVU07XHJcbiAgICAvLyAgICAgICAgIHRoaXMuc3RhcnRfaW5kZXggLT0gdXBfbG9hZGVkO1xyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5zdGFydF9pbmRleCA8IDApIHtcclxuICAgIC8vICAgICAgICAgICAgIHVwX2xvYWRlZCArPSB0aGlzLnN0YXJ0X2luZGV4O1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zdGFydF9pbmRleCA9IDA7IFxyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIHRoaXMubG9hZF9yZWNvcmQodGhpcy5zdGFydF9pbmRleCk7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuY29udGVudC55ICs9ICh1cF9sb2FkZWQgKiB0aGlzLk9QVF9IRUlHSFQpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICAvLyBlbmQgXHJcbiAgICAvLyB9LFxyXG4gICAgLy8gLy8gY2FsbGVkIGV2ZXJ5IGZyYW1lLCB1bmNvbW1lbnQgdGhpcyBmdW5jdGlvbiB0byBhY3RpdmF0ZSB1cGRhdGUgY2FsbGJhY2tcclxuICAgIC8vIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAvLyAgICAgdGhpcy5zY3JvbGx2ZWl3X2xvYWRfcmVjb2RlKCk7XHJcbiAgICAvLyB9LFxyXG59KTtcclxuIl19