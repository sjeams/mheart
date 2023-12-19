
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
        // 初始化阵容

        _this.init_postion(data); //生成生物--position_my


        _this.addMapPic(data); //生成地图

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
  //生成生物
  init_postion: function init_postion(postion) {
    var _this = this; // 根据MapTools生成相应的道具
    // _this.toolsArray = [];


    var TOOLS = postion.data.poition_my;
    var total = postion.data.poition_my.length;
    console.log(TOOLS);
    console.log(total); // var fi = cc.fadeIn(2)//渐显效果
    // _this.content.runAction(fi);
    // var fo = cc.fadeOut(1)//渐隐效果
    // _this.content.runAction(fo);
    //移除节点
    // _this.content.removeAllChildren();
    // _this.content.destroyAllChildren();
    //添加节点

    for (var i = 0; i < total; i++) {
      // console.log(i) 
      //死亡移除map_status
      var map = TOOLS[i]; // if(map.map_status==1){
      // console.log(map.x)
      // console.log(map.y)

      var tool = cc.instantiate(_this.person);
      console.log(map);
      tool.getComponent('fightingTools').initInfo(map);
      tool.x = map.x;
      tool.y = map.y; // _this.toolsArray.push(tool);
      // tool.setPosition(map.x,map.y);  

      _this.content.addChild(tool); // }

    }
  },
  reloadWord: function reloadWord() {
    var _this = this;

    httpRequest.httpPost('/app/app-apiword/map-word', params, function (data) {
      //写入地图数据
      _this.addWordMap(data);
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxmaWdodGluZ1xcc2NvcmVfZmlnaHRpbmcuanMiXSwibmFtZXMiOlsiSHR0cEhlbHBlciIsInJlcXVpcmUiLCJodHRwUmVxdWVzdCIsInBhcmFtcyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiY29udGVudCIsIk5vZGUiLCJwZXJzb24iLCJQcmVmYWIiLCJob21lIiwicmVsb2FkIiwiYmFjayIsInRlc3Rfc2Nyb2xsVmlldyIsInR5cGUiLCJTY3JvbGxWaWV3IiwidGVzdF9wYWdlVmlldyIsIlBhZ2VWaWV3Iiwib25Mb2FkIiwic3Bhd25Ub29scyIsIl90aGlzIiwiZmlndGhpbmdfcmVtb3RlX3VybCIsInN5cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJwbGF5R2FtZSIsInJlbW90ZVVybCIsImh0dHBVcmxKc29uIiwibG9hZGVyIiwibG9hZCIsInVybCIsImVyciIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaW5pdF9wb3N0aW9uIiwiYWRkTWFwUGljIiwibWFwX3BpYyIsImh0dHBVcmwiLCJ0ZXh0dXJlIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJTcHJpdGVGcmFtZSIsInBvc3Rpb24iLCJUT09MUyIsInBvaXRpb25fbXkiLCJ0b3RhbCIsImxlbmd0aCIsImkiLCJtYXAiLCJ0b29sIiwiaW5zdGFudGlhdGUiLCJpbml0SW5mbyIsIngiLCJ5IiwiYWRkQ2hpbGQiLCJyZWxvYWRXb3JkIiwiaHR0cFBvc3QiLCJhZGRXb3JkTWFwIiwiYmFja19tYXAiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsImJhY2tfaG9tZSIsImFkZFRvdWNoRXZlbnQiLCJub2RlXzEiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwidG91Y2hTdGFydCIsIlRPVUNIX01PVkUiLCJ0b3VjaE1vdmUiLCJUT1VDSF9FTkQiLCJ0b3VjaEVuZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7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QUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBN05LLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyDkuJbnlYzmk43kvZwgIFxyXG52YXIgSHR0cEhlbHBlciA9IHJlcXVpcmUoXCIuLi9odHRwXCIpOyBcclxudmFyIGh0dHBSZXF1ZXN0ID0gbmV3IEh0dHBIZWxwZXIoKTtcclxudmFyIHBhcmFtcyA9W107XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gYmFyOiB7XHJcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAgIC8v5rWL6K+VaXRlbVxyXG4gICAgICAvLyAgIGNvbnRlbnQ6IHtcclxuICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIC8vICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgIC8vICAgfSxcclxuXHJcbiAgICAgIC8vIHBlcnNvbjoge1xyXG4gICAgICAvLyAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIC8vICAgdHlwZTogY2MuUHJlZmFiXHJcbiAgICAgIC8vIH0sXHJcbiAgXHJcbiAgICAgIGNvbnRlbnQ6IGNjLk5vZGUsXHJcbiAgICAgIHBlcnNvbjogY2MuUHJlZmFiLFxyXG4gICAgICBob21lOiBjYy5Ob2RlLFxyXG4gICAgICByZWxvYWQ6IGNjLk5vZGUsXHJcbiAgICAgIGJhY2s6IGNjLk5vZGUsXHJcbiAgICAgIC8v5YiX6KGoXHJcbiAgICAgIHRlc3Rfc2Nyb2xsVmlldzoge1xyXG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgdHlwZTogY2MuU2Nyb2xsVmlld1xyXG4gICAgICB9LFxyXG4gICAgICAvL+e/u+mhteWuueWZqFxyXG4gICAgICB0ZXN0X3BhZ2VWaWV3OiB7XHJcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB0eXBlOiBjYy5QYWdlVmlld1xyXG4gICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgIC8vICAgICBsZXQgcGVyc29uID0gY2MuaW5zdGFudGlhdGUodGhpcy5wZXJzb24pO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNvbnRlbj1wZXJzb25cclxuICAgICAgICAvLyAgICAgLy8gcGVyc29uLnBhcmVudCA9IHRoaXMuY29udGVudDtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5hZGRUb3VjaEV2ZW50KHBlcnNvbik7ICAvL+a3u+WKoOinpuaRuOS6i+S7tlxyXG4gICAgICAgIC8vICAgfVxyXG4gICAgICAgIC8vIHRoaXMudmFsdWVfc2V0ID0gW107XHJcbiAgICAgICAgLy8gLy8g5aaC5p6c5L2g6L+Z6YeM5piv5o6S6KGM5qac77yM6YKj5LmI5L2g5bCxcHVzaOaOkuihjOamnOeahOaVsOaNrjtcclxuICAgICAgICAvLyBmb3IodmFyIGkgPSAxOyBpIDw9IDEwMDsgaSArKykge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnZhbHVlX3NldC5wdXNoKGkpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcy5jb250ZW50ID0gdGhpcy5zY3JvbGxfdmlldy5jb250ZW50O1xyXG4gICAgICAgIC8vIHRoaXMub3B0X2l0ZW1fc2V0ID0gW107XHJcbiAgICAgICAgLy8gZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuUEFHRV9OVU0gKiAzOyBpICsrKSB7XHJcbiAgICAgICAgLy8gICAgIHZhciBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtX3ByZWZhYik7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuY29udGVudC5hZGRDaGlsZChpdGVtKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5vcHRfaXRlbV9zZXQucHVzaChpdGVtKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgIC8vIGh0dHBSZXF1ZXN0LnBsYXlHYW1lTG9hZGluZygpXHJcbiAgICAgIHRoaXMuc3Bhd25Ub29scygpXHJcbiAgICAgICAgLy8gdGhpcy5zY3JvbGxfdmlldy5ub2RlLm9uKFwic2Nyb2xsLWVuZGVkXCIsIHRoaXMub25fc2Nyb2xsX2VuZGVkLmJpbmQodGhpcyksIHRoaXMpO1xyXG4gICAgfSxcclxuICAgIHNwYXduVG9vbHMgKCkge1xyXG4gICAgICB2YXIgX3RoaXMgPXRoaXM7XHJcbiAgICAgIHZhciBmaWd0aGluZ19yZW1vdGVfdXJsID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaWd0aGluZ19yZW1vdGVfdXJsJyk7IC8v6K+75Y+W5pWw5o2uLS3miJjmlpforrDlvZVcclxuICAgICAgaWYoZmlndGhpbmdfcmVtb3RlX3VybD09Jycpe1xyXG4gICAgICAgICBodHRwUmVxdWVzdC5wbGF5R2FtZSgnbWFwL+ivuOWkqeWcsOWbvicpO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICB2YXIgcmVtb3RlVXJsID0gaHR0cFJlcXVlc3QuaHR0cFVybEpzb24oZmlndGhpbmdfcmVtb3RlX3VybCk7XHJcbiAgICAgICAgY2MubG9hZGVyLmxvYWQoeyB1cmw6IHJlbW90ZVVybCB9LCBmdW5jdGlvbiAoZXJyLCBkYXRhKSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKSBcclxuICAgICAgICAgIC8vIF90aGlzLmFkZFdvcmRNYXAocmVzdWx0cykgLy/nlJ/miJDnlJ/nialcclxuICAgICAgICAgIC8vIF9zZWxmLm5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSlcclxuICAgICAgICAgIC8vIOWIneWni+WMlumYteWuuVxyXG4gICAgICAgICAgX3RoaXMuaW5pdF9wb3N0aW9uKGRhdGEpIC8v55Sf5oiQ55Sf54mpLS1wb3NpdGlvbl9teVxyXG4gICAgICAgICAgX3RoaXMuYWRkTWFwUGljKGRhdGEpIC8v55Sf5oiQ5Zyw5Zu+XHJcbiAgICAgIH0pOyAgICBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8v55Sf5oiQ5Zyw5Zu+XHJcbiAgICBhZGRNYXBQaWMoZGF0YSl7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICB2YXIgIG1hcF9waWMgPWRhdGEuZGF0YVsnbWFwX3BpYyddO1xyXG4gICAgICAgIHZhciByZW1vdGVVcmwgPSBodHRwUmVxdWVzdC5odHRwVXJsKG1hcF9waWMpO1xyXG4gICAgICAgIGNjLmxvYWRlci5sb2FkKHsgdXJsOiByZW1vdGVVcmwgfSwgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkgeyAgXHJcbiAgICAgICAgICBfdGhpcy5ob21lLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIC8v55Sf5oiQ55Sf54mpXHJcbiAgICBpbml0X3Bvc3Rpb24ocG9zdGlvbil7XHJcbiAgICAgIFxyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgLy8g5qC55o2uTWFwVG9vbHPnlJ/miJDnm7jlupTnmoTpgZPlhbdcclxuICAgICAgICAvLyBfdGhpcy50b29sc0FycmF5ID0gW107XHJcbiAgICAgICAgbGV0IFRPT0xTID0gcG9zdGlvbi5kYXRhLnBvaXRpb25fbXk7XHJcbiAgICAgICAgdmFyIHRvdGFsID0gcG9zdGlvbi5kYXRhLnBvaXRpb25fbXkubGVuZ3RoO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFRPT0xTKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHRvdGFsKVxyXG4gICAgICAgIC8vIHZhciBmaSA9IGNjLmZhZGVJbigyKS8v5riQ5pi+5pWI5p6cXHJcbiAgICAgICAgLy8gX3RoaXMuY29udGVudC5ydW5BY3Rpb24oZmkpO1xyXG4gICAgICAgIC8vIHZhciBmbyA9IGNjLmZhZGVPdXQoMSkvL+a4kOmakOaViOaenFxyXG4gICAgICAgIC8vIF90aGlzLmNvbnRlbnQucnVuQWN0aW9uKGZvKTtcclxuICAgICAgICAvL+enu+mZpOiKgueCuVxyXG4gICAgICAgIC8vIF90aGlzLmNvbnRlbnQucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICAvLyBfdGhpcy5jb250ZW50LmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIC8v5re75Yqg6IqC54K5XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRvdGFsOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaSkgXHJcbiAgICAgICAgICAgIC8v5q275Lqh56e76ZmkbWFwX3N0YXR1c1xyXG4gICAgICAgICAgICB2YXIgbWFwID1UT09MU1tpXTtcclxuICAgICAgICAgICAgLy8gaWYobWFwLm1hcF9zdGF0dXM9PTEpe1xyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1hcC54KVxyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1hcC55KVxyXG4gICAgICAgICAgICAgIGxldCB0b29sID0gY2MuaW5zdGFudGlhdGUoX3RoaXMucGVyc29uKTtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtYXApXHJcbiAgICAgICAgICAgICAgdG9vbC5nZXRDb21wb25lbnQoJ2ZpZ2h0aW5nVG9vbHMnKS5pbml0SW5mbyhtYXApO1xyXG4gICAgICAgICAgICAgIHRvb2wueD1tYXAueFxyXG4gICAgICAgICAgICAgIHRvb2wueT1tYXAueVxyXG4gICAgICAgICAgICAgIC8vIF90aGlzLnRvb2xzQXJyYXkucHVzaCh0b29sKTtcclxuICAgICAgICAgICAgICAvLyB0b29sLnNldFBvc2l0aW9uKG1hcC54LG1hcC55KTsgIFxyXG4gICAgICAgICAgICAgIF90aGlzLmNvbnRlbnQuYWRkQ2hpbGQodG9vbCk7ICAgXHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgcmVsb2FkV29yZCgpe1xyXG4gICAgICB2YXIgX3RoaXMgPXRoaXM7XHJcbiAgICAgIGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCcvYXBwL2FwcC1hcGl3b3JkL21hcC13b3JkJywgcGFyYW1zLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIC8v5YaZ5YWl5Zyw5Zu+5pWw5o2uXHJcbiAgICAgICAgX3RoaXMuYWRkV29yZE1hcChkYXRhKVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgYmFja19tYXAoKXtcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtYXAv6K+45aSp5Zyw5Zu+Jyk7XHJcbiAgICB9LFxyXG4gICAgYmFja19ob21lKCl7XHJcbiAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgn5aSn5Y6FJyk7XHJcbiAgICB9LFxyXG4gICAgYWRkVG91Y2hFdmVudChub2RlXzEpIHtcclxuICAgICAgICBub2RlXzEub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgbm9kZV8xLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICBub2RlXzEub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgfSxcclxuICAgIC8vIHN0YXJ0OiBmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICB0aGlzLnN0YXJ0X3kgPSB0aGlzLmNvbnRlbnQueTtcclxuICAgIC8vICAgICB0aGlzLnN0YXJ0X2luZGV4ID0gMDsgLy8g5b2T5YmN5oiR5LusMjTkuKpJdGVt5Yqg6L2955qEIDEwMOmhueaVsOaNrumHjOmdoueahOi1t+Wni+aVsOaNruiusOW9leeahOe0ouW8lTtcclxuICAgIC8vICAgICB0aGlzLmxvYWRfcmVjb3JkKHRoaXMuc3RhcnRfaW5kZXgpO1xyXG4gICAgLy8gfSxcclxuXHJcbiAgICAvLyAvLyDku47ov5nkuKrntKLlvJXlvIDlp4vvvIzliqDovb3mlbDmja7orrDlvZXliLDmiJHku6znmoTmu5rliqjliJfooajph4zpnaLnmoTpgInpoblcclxuICAgIC8vIGxvYWRfcmVjb3JkOiBmdW5jdGlvbihzdGFydF9pbmRleCkge1xyXG4gICAgLy8gICAgIHRoaXMuc3RhcnRfaW5kZXggPSBzdGFydF9pbmRleDtcclxuXHJcbiAgICAvLyAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuUEFHRV9OVU0gKiAzOyBpICsrKSB7XHJcbiAgICAvLyAgICAgICAgIHZhciBsYWJlbCA9IHRoaXMub3B0X2l0ZW1fc2V0W2ldLmdldENoaWxkQnlOYW1lKFwic3JjXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAvLyAgICAgICAgIC8vIOaYvuekuuaIkeS7rOeahOiusOW9lTtcclxuICAgIC8vICAgICAgICAgbGFiZWwuc3RyaW5nID0gdGhpcy52YWx1ZV9zZXRbc3RhcnRfaW5kZXggKyBpXTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9LFxyXG5cclxuICAgIC8vIG9uX3Njcm9sbF9lbmRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgdGhpcy5zY3JvbGx2ZWl3X2xvYWRfcmVjb2RlKCk7XHJcbiAgICAvLyAgICAgdGhpcy5zY3JvbGxfdmlldy5lbGFzdGljID0gdHJ1ZTtcclxuICAgIC8vIH0sXHJcblxyXG4gICAgLy8gc2Nyb2xsdmVpd19sb2FkX3JlY29kZTogZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgIC8vIOWQkeS4i+WKoOi9veS6hlxyXG4gICAgLy8gICAgIGlmICh0aGlzLnN0YXJ0X2luZGV4ICsgdGhpcy5QQUdFX05VTSAqIDMgPCB0aGlzLnZhbHVlX3NldC5sZW5ndGggJiZcclxuICAgIC8vICAgICAgICAgdGhpcy5jb250ZW50LnkgPj0gdGhpcy5zdGFydF95ICsgdGhpcy5QQUdFX05VTSAqIDIgKiB0aGlzLk9QVF9IRUlHSFQpIHsgLy8g5Yqo5oCB5Yqg6L29XHJcbiAgICAgICAgICAgIFxyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5zY3JvbGxfdmlldy5fYXV0b1Njcm9sbGluZykgeyAvLyDnrYnlvoXov5nkuKroh6rliqjmu5rliqjnu5PmnZ/ku6XlkI7lho3lgZrliqDovb1cclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2Nyb2xsX3ZpZXcuZWxhc3RpYyA9IGZhbHNlOyAvLyDmmoLml7blhbPpl63lm57lvLnmlYjmnpxcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgdmFyIGRvd25fbG9hZGVkID0gdGhpcy5QQUdFX05VTTtcclxuICAgIC8vICAgICAgICAgdGhpcy5zdGFydF9pbmRleCArPSBkb3duX2xvYWRlZDtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuc3RhcnRfaW5kZXggKyB0aGlzLlBBR0VfTlVNICogMyA+IHRoaXMudmFsdWVfc2V0Lmxlbmd0aCkge1xyXG4gICAgLy8gICAgICAgICAgICAgdmFyIG91dF9sZW4gPSB0aGlzLnN0YXJ0X2luZGV4ICsgdGhpcy5QQUdFX05VTSAqIDMgLSB0aGlzLnZhbHVlX3NldC5sZW5ndGg7XHJcbiAgICAvLyAgICAgICAgICAgICBkb3duX2xvYWRlZCAtPSAob3V0X2xlbik7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnN0YXJ0X2luZGV4IC09IChvdXRfbGVuKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB0aGlzLmxvYWRfcmVjb3JkKHRoaXMuc3RhcnRfaW5kZXgpO1xyXG5cclxuICAgIC8vICAgICAgICAgdGhpcy5jb250ZW50LnkgLT0gKGRvd25fbG9hZGVkICogdGhpcy5PUFRfSEVJR0hUKTtcclxuICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgLy8g5ZCR5LiK5Yqg6L29XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuc3RhcnRfaW5kZXggPiAwICYmIHRoaXMuY29udGVudC55IDw9IHRoaXMuc3RhcnRfeSkge1xyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5zY3JvbGxfdmlldy5fYXV0b1Njcm9sbGluZykgeyAvLyDnrYnlvoXov5nkuKroh6rliqjmu5rliqjnu5PmnZ/ku6XlkI7lho3lgZrliqDovb1cclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2Nyb2xsX3ZpZXcuZWxhc3RpYyA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICB2YXIgdXBfbG9hZGVkID0gdGhpcy5QQUdFX05VTTtcclxuICAgIC8vICAgICAgICAgdGhpcy5zdGFydF9pbmRleCAtPSB1cF9sb2FkZWQ7XHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLnN0YXJ0X2luZGV4IDwgMCkge1xyXG4gICAgLy8gICAgICAgICAgICAgdXBfbG9hZGVkICs9IHRoaXMuc3RhcnRfaW5kZXg7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnN0YXJ0X2luZGV4ID0gMDsgXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgdGhpcy5sb2FkX3JlY29yZCh0aGlzLnN0YXJ0X2luZGV4KTtcclxuICAgIC8vICAgICAgICAgdGhpcy5jb250ZW50LnkgKz0gKHVwX2xvYWRlZCAqIHRoaXMuT1BUX0hFSUdIVCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIC8vIGVuZCBcclxuICAgIC8vIH0sXHJcbiAgICAvLyAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgIC8vICAgICB0aGlzLnNjcm9sbHZlaXdfbG9hZF9yZWNvZGUoKTtcclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iXX0=