
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
        console.log(111); //刷新地图
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
    var _this = this; // 根据MapTools生成相应的道具
    // _this.toolsArray = [];


    var TOOLS = data.data.user_in_word_map;
    var total = data.data.user_in_word_map.length;
    console.log(TOOLS);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxzY2VuY2VcXHNjb3JlX21hcC5qcyJdLCJuYW1lcyI6WyJIdHRwSGVscGVyIiwicmVxdWlyZSIsImh0dHBSZXF1ZXN0IiwicGFyYW1zIiwiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJjb250ZW50IiwiTm9kZSIsInBlcnNvbiIsIlByZWZhYiIsImhvbWUiLCJ0ZXN0X3Njcm9sbFZpZXciLCJ0eXBlIiwiU2Nyb2xsVmlldyIsInRlc3RfcGFnZVZpZXciLCJQYWdlVmlldyIsIm9uTG9hZCIsInNwYXduVG9vbHMiLCJfdGhpcyIsImh0dHBQb3N0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJhZGRXb3JkIiwiYWRkTWFwUGljIiwiYWRkV29yZE1hcCIsIm1hcF9waWMiLCJyZW1vdGVVcmwiLCJodHRwVXJsIiwibG9hZGVyIiwibG9hZCIsInVybCIsImVyciIsInRleHR1cmUiLCJnZXRDb21wb25lbnQiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsIlNwcml0ZUZyYW1lIiwiVE9PTFMiLCJ1c2VyX2luX3dvcmRfbWFwIiwidG90YWwiLCJsZW5ndGgiLCJmaSIsImZhZGVJbiIsInJ1bkFjdGlvbiIsImZvIiwiZmFkZU91dCIsInJlbW92ZUFsbENoaWxkcmVuIiwiZGVzdHJveUFsbENoaWxkcmVuIiwiaSIsIm1hcCIsIm1hcF9zdGF0dXMiLCJ0b29sIiwiaW5zdGFudGlhdGUiLCJpbml0SW5mbyIsIngiLCJ5IiwiYWRkQ2hpbGQiLCJhZGRUb3VjaEV2ZW50Iiwibm9kZV8xIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsInRvdWNoU3RhcnQiLCJUT1VDSF9NT1ZFIiwidG91Y2hNb3ZlIiwiVE9VQ0hfRU5EIiwidG91Y2hFbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJQSxVQUFVLEdBQUdDLE9BQU8sQ0FBQyxN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Q0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXBPSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8g5LiW55WM5pON5L2cICBcclxudmFyIEh0dHBIZWxwZXIgPSByZXF1aXJlKFwiaHR0cFwiKTsgXHJcbnZhciBodHRwUmVxdWVzdCA9IG5ldyBIdHRwSGVscGVyKCk7XHJcbnZhciBwYXJhbXMgPVtdO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgICAvL+a1i+ivlWl0ZW1cclxuICAgICAgLy8gICBjb250ZW50OiB7XHJcbiAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAvLyAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAvLyAgIH0sXHJcblxyXG4gICAgICAvLyBwZXJzb246IHtcclxuICAgICAgLy8gICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAvLyAgIHR5cGU6IGNjLlByZWZhYlxyXG4gICAgICAvLyB9LFxyXG4gIFxyXG4gICAgICBjb250ZW50OiBjYy5Ob2RlLFxyXG4gICAgICBwZXJzb246IGNjLlByZWZhYixcclxuICAgICAgaG9tZTogY2MuTm9kZSxcclxuICAgICAgLy/liJfooahcclxuICAgICAgdGVzdF9zY3JvbGxWaWV3OiB7XHJcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB0eXBlOiBjYy5TY3JvbGxWaWV3XHJcbiAgICAgIH0sXHJcbiAgICAgIC8v57+76aG15a655ZmoXHJcbiAgICAgIHRlc3RfcGFnZVZpZXc6IHtcclxuICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIHR5cGU6IGNjLlBhZ2VWaWV3XHJcbiAgICAgIH0sXHJcblxyXG4gICAgfSxcclxuXHJcblxyXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gICAgb25Mb2FkOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBwZXJzb24gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBlcnNvbik7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuY29udGVuPXBlcnNvblxyXG4gICAgICAgIC8vICAgICAvLyBwZXJzb24ucGFyZW50ID0gdGhpcy5jb250ZW50O1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLmFkZFRvdWNoRXZlbnQocGVyc29uKTsgIC8v5re75Yqg6Kem5pG45LqL5Lu2XHJcbiAgICAgICAgLy8gICB9XHJcbiAgICAgICAgLy8gdGhpcy52YWx1ZV9zZXQgPSBbXTtcclxuICAgICAgICAvLyAvLyDlpoLmnpzkvaDov5nph4zmmK/mjpLooYzmppzvvIzpgqPkuYjkvaDlsLFwdXNo5o6S6KGM5qac55qE5pWw5o2uO1xyXG4gICAgICAgIC8vIGZvcih2YXIgaSA9IDE7IGkgPD0gMTAwOyBpICsrKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudmFsdWVfc2V0LnB1c2goaSk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyB0aGlzLmNvbnRlbnQgPSB0aGlzLnNjcm9sbF92aWV3LmNvbnRlbnQ7XHJcbiAgICAgICAgLy8gdGhpcy5vcHRfaXRlbV9zZXQgPSBbXTtcclxuICAgICAgICAvLyBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5QQUdFX05VTSAqIDM7IGkgKyspIHtcclxuICAgICAgICAvLyAgICAgdmFyIGl0ZW0gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLml0ZW1fcHJlZmFiKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5jb250ZW50LmFkZENoaWxkKGl0ZW0pO1xyXG4gICAgICAgIC8vICAgICB0aGlzLm9wdF9pdGVtX3NldC5wdXNoKGl0ZW0pO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgdGhpcy5zcGF3blRvb2xzKClcclxuICAgICAgICAvLyB0aGlzLnNjcm9sbF92aWV3Lm5vZGUub24oXCJzY3JvbGwtZW5kZWRcIiwgdGhpcy5vbl9zY3JvbGxfZW5kZWQuYmluZCh0aGlzKSwgdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHNwYXduVG9vbHMgKCkge1xyXG4gICAgICB2YXIgX3RoaXMgPXRoaXM7XHJcblxyXG4gICAgICB2YXIgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICdwYWdlJzogMSxcclxuICAgICAgICAgICAgICAncGFnZVNpemUnOiAxMixcclxuICAgICAgfTtcclxuICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3QoJy9hcHAvYXBwLWFwaXdvcmQvaW5kZXgnLCBwYXJhbXMsIGZ1bmN0aW9uIChkYXRhKSB7XHJcblxyXG4gICAgICAgICAgLy8gY29uc29sZS5sb2coX3RoaXMuY29udGVudClcclxuICAgICAgICAgIGlmKCFkYXRhLmRhdGEpe1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygxMTEpO1xyXG4gICAgICAgICAgICAgIC8v5Yi35paw5Zyw5Zu+XHJcbiAgICAgICAgICAgICAgLy8gY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtYXAv6K+45aSp5Zyw5Zu+Jyk7XHJcbiAgICAgICAgICAgICAgX3RoaXMuYWRkV29yZCgpLy/liLfmlrDkuJbnlYzlnLDlm75cclxuICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgIC8v55Sf5oiQ5LiW55WMXHJcbiAgICAgICAgICAgICAgLy8gbGV0IGNlbGxXaWR0aCA9IF90aGlzLmNvbnRlbnQud2lkdGggKiAwLjEwNTtcclxuICAgICAgICAgICAgICAvLyBsZXQgY2VsbEhlaWdodCA9IF90aGlzLmNvbnRlbnQuaGVpZ2h0ICogMC4yMTU7XHJcbiAgICAgICAgICAgICAgLy8gbGV0IHNwYWNpbmdYID0gX3RoaXMuY29udGVudC53aWR0aCAqIDAuMDIyO1xyXG4gICAgICAgICAgICAgIC8vIGxldCBzcGFjaW5nWSA9IF90aGlzLmNvbnRlbnQuaGVpZ2h0ICogMC4wNDU7XHJcblxyXG4gICAgICAgICAgICAgIC8vIF90aGlzLmNvbnRlbnQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuY2VsbFNpemUud2lkdGggPSBjZWxsV2lkdGg7XHJcbiAgICAgICAgICAgICAgLy8gX3RoaXMuY29udGVudC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS5jZWxsU2l6ZS5oZWlnaHQgPSBjZWxsSGVpZ2h0O1xyXG4gICAgICAgICAgICAgIC8vIF90aGlzLmNvbnRlbnQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuc3BhY2luZ1ggPSBzcGFjaW5nWDtcclxuICAgICAgICAgICAgICAvLyBfdGhpcy5jb250ZW50LmdldENvbXBvbmVudChjYy5MYXlvdXQpLnNwYWNpbmdZID0gc3BhY2luZ1k7XHJcblxyXG4gICAgICAgICAgICAgIF90aGlzLmFkZE1hcFBpYyhkYXRhKSAvL+eUn+aIkOWcsOWbvlxyXG4gICAgICAgICAgICAgIF90aGlzLmFkZFdvcmRNYXAoZGF0YSkgLy/nlJ/miJDnlJ/nialcclxuICAgICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBhZGRNYXBQaWMoZGF0YSl7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZihkYXRhLmRhdGFbJ21hcF9waWMnXSl7XHJcbiAgICAgICAgICB2YXIgIG1hcF9waWMgPWRhdGEuZGF0YVsnbWFwX3BpYyddO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdmFyICBtYXBfcGljID1kYXRhLmRhdGFbJ3BpY3R1cmUnXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlbW90ZVVybCA9IGh0dHBSZXF1ZXN0Lmh0dHBVcmwobWFwX3BpYyk7XHJcbiAgICAgICAgICBjYy5sb2FkZXIubG9hZCh7IHVybDogcmVtb3RlVXJsIH0sIGZ1bmN0aW9uIChlcnIsIHRleHR1cmUpIHsgIFxyXG4gICAgICAgICAgICAgIF90aGlzLmhvbWUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgYWRkV29yZCgpe1xyXG4gICAgICB2YXIgX3RoaXMgPXRoaXM7XHJcbiAgICAgIGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCcvYXBwL2FwcC1hcGl3b3JkL21hcC13b3JkJywgcGFyYW1zLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIC8v5YaZ5YWl5Zyw5Zu+5pWw5o2uXHJcbiAgICAgICAgX3RoaXMuYWRkV29yZE1hcChkYXRhKVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgYWRkV29yZE1hcChkYXRhKXtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIC8vIOagueaNrk1hcFRvb2xz55Sf5oiQ55u45bqU55qE6YGT5YW3XHJcbiAgICAgICAgLy8gX3RoaXMudG9vbHNBcnJheSA9IFtdO1xyXG4gICAgICAgIGxldCBUT09MUyA9IGRhdGEuZGF0YS51c2VyX2luX3dvcmRfbWFwO1xyXG4gICAgICAgIHZhciB0b3RhbCA9IGRhdGEuZGF0YS51c2VyX2luX3dvcmRfbWFwLmxlbmd0aDtcclxuICAgICAgICBjb25zb2xlLmxvZyhUT09MUykgXHJcblxyXG4gICAgICAgIHZhciBmaSA9IGNjLmZhZGVJbigyKS8v5riQ5pi+5pWI5p6cXHJcbiAgICAgICAgX3RoaXMuY29udGVudC5ydW5BY3Rpb24oZmkpO1xyXG4gICAgICAgIHZhciBmbyA9IGNjLmZhZGVPdXQoMSkvL+a4kOmakOaViOaenFxyXG4gICAgICAgIF90aGlzLmNvbnRlbnQucnVuQWN0aW9uKGZvKTtcclxuICAgICAgICAvL+enu+mZpOiKgueCuVxyXG4gICAgICAgIF90aGlzLmNvbnRlbnQucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICBfdGhpcy5jb250ZW50LmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIC8v5re75Yqg6IqC54K5XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRvdGFsOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaSkgXHJcbiAgICAgICAgICAgIC8v5q275Lqh56e76ZmkbWFwX3N0YXR1c1xyXG4gICAgICAgICAgICB2YXIgbWFwID1UT09MU1tpXTtcclxuICAgICAgICAgICAgaWYobWFwLm1hcF9zdGF0dXM9PTEpe1xyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1hcC54KVxyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1hcC55KVxyXG4gICAgICAgICAgICAgIGxldCB0b29sID0gY2MuaW5zdGFudGlhdGUoX3RoaXMucGVyc29uKTtcclxuICAgICAgICAgICAgICB0b29sLmdldENvbXBvbmVudCgnbWFwVG9vbHMnKS5pbml0SW5mbyhtYXApO1xyXG4gICAgICAgICAgICAgIHRvb2wueD1tYXAueFxyXG4gICAgICAgICAgICAgIHRvb2wueT1tYXAueVxyXG4gICAgICAgICAgICAgIC8vIF90aGlzLnRvb2xzQXJyYXkucHVzaCh0b29sKTtcclxuICAgICAgICAgICAgICAvLyB0b29sLnNldFBvc2l0aW9uKG1hcC54LG1hcC55KTsgIFxyXG4gICAgICAgICAgICAgIF90aGlzLmNvbnRlbnQuYWRkQ2hpbGQodG9vbCk7ICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYWRkVG91Y2hFdmVudChub2RlXzEpIHtcclxuICAgICAgICBub2RlXzEub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgbm9kZV8xLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICBub2RlXzEub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgfSxcclxuICAgIC8vIHN0YXJ0OiBmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICB0aGlzLnN0YXJ0X3kgPSB0aGlzLmNvbnRlbnQueTtcclxuICAgIC8vICAgICB0aGlzLnN0YXJ0X2luZGV4ID0gMDsgLy8g5b2T5YmN5oiR5LusMjTkuKpJdGVt5Yqg6L2955qEIDEwMOmhueaVsOaNrumHjOmdoueahOi1t+Wni+aVsOaNruiusOW9leeahOe0ouW8lTtcclxuICAgIC8vICAgICB0aGlzLmxvYWRfcmVjb3JkKHRoaXMuc3RhcnRfaW5kZXgpO1xyXG4gICAgLy8gfSxcclxuXHJcbiAgICAvLyAvLyDku47ov5nkuKrntKLlvJXlvIDlp4vvvIzliqDovb3mlbDmja7orrDlvZXliLDmiJHku6znmoTmu5rliqjliJfooajph4zpnaLnmoTpgInpoblcclxuICAgIC8vIGxvYWRfcmVjb3JkOiBmdW5jdGlvbihzdGFydF9pbmRleCkge1xyXG4gICAgLy8gICAgIHRoaXMuc3RhcnRfaW5kZXggPSBzdGFydF9pbmRleDtcclxuXHJcbiAgICAvLyAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuUEFHRV9OVU0gKiAzOyBpICsrKSB7XHJcbiAgICAvLyAgICAgICAgIHZhciBsYWJlbCA9IHRoaXMub3B0X2l0ZW1fc2V0W2ldLmdldENoaWxkQnlOYW1lKFwic3JjXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAvLyAgICAgICAgIC8vIOaYvuekuuaIkeS7rOeahOiusOW9lTtcclxuICAgIC8vICAgICAgICAgbGFiZWwuc3RyaW5nID0gdGhpcy52YWx1ZV9zZXRbc3RhcnRfaW5kZXggKyBpXTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9LFxyXG5cclxuICAgIC8vIG9uX3Njcm9sbF9lbmRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgdGhpcy5zY3JvbGx2ZWl3X2xvYWRfcmVjb2RlKCk7XHJcbiAgICAvLyAgICAgdGhpcy5zY3JvbGxfdmlldy5lbGFzdGljID0gdHJ1ZTtcclxuICAgIC8vIH0sXHJcblxyXG4gICAgLy8gc2Nyb2xsdmVpd19sb2FkX3JlY29kZTogZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgIC8vIOWQkeS4i+WKoOi9veS6hlxyXG4gICAgLy8gICAgIGlmICh0aGlzLnN0YXJ0X2luZGV4ICsgdGhpcy5QQUdFX05VTSAqIDMgPCB0aGlzLnZhbHVlX3NldC5sZW5ndGggJiZcclxuICAgIC8vICAgICAgICAgdGhpcy5jb250ZW50LnkgPj0gdGhpcy5zdGFydF95ICsgdGhpcy5QQUdFX05VTSAqIDIgKiB0aGlzLk9QVF9IRUlHSFQpIHsgLy8g5Yqo5oCB5Yqg6L29XHJcbiAgICAgICAgICAgIFxyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5zY3JvbGxfdmlldy5fYXV0b1Njcm9sbGluZykgeyAvLyDnrYnlvoXov5nkuKroh6rliqjmu5rliqjnu5PmnZ/ku6XlkI7lho3lgZrliqDovb1cclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2Nyb2xsX3ZpZXcuZWxhc3RpYyA9IGZhbHNlOyAvLyDmmoLml7blhbPpl63lm57lvLnmlYjmnpxcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgdmFyIGRvd25fbG9hZGVkID0gdGhpcy5QQUdFX05VTTtcclxuICAgIC8vICAgICAgICAgdGhpcy5zdGFydF9pbmRleCArPSBkb3duX2xvYWRlZDtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuc3RhcnRfaW5kZXggKyB0aGlzLlBBR0VfTlVNICogMyA+IHRoaXMudmFsdWVfc2V0Lmxlbmd0aCkge1xyXG4gICAgLy8gICAgICAgICAgICAgdmFyIG91dF9sZW4gPSB0aGlzLnN0YXJ0X2luZGV4ICsgdGhpcy5QQUdFX05VTSAqIDMgLSB0aGlzLnZhbHVlX3NldC5sZW5ndGg7XHJcbiAgICAvLyAgICAgICAgICAgICBkb3duX2xvYWRlZCAtPSAob3V0X2xlbik7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnN0YXJ0X2luZGV4IC09IChvdXRfbGVuKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB0aGlzLmxvYWRfcmVjb3JkKHRoaXMuc3RhcnRfaW5kZXgpO1xyXG5cclxuICAgIC8vICAgICAgICAgdGhpcy5jb250ZW50LnkgLT0gKGRvd25fbG9hZGVkICogdGhpcy5PUFRfSEVJR0hUKTtcclxuICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgLy8g5ZCR5LiK5Yqg6L29XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuc3RhcnRfaW5kZXggPiAwICYmIHRoaXMuY29udGVudC55IDw9IHRoaXMuc3RhcnRfeSkge1xyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5zY3JvbGxfdmlldy5fYXV0b1Njcm9sbGluZykgeyAvLyDnrYnlvoXov5nkuKroh6rliqjmu5rliqjnu5PmnZ/ku6XlkI7lho3lgZrliqDovb1cclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2Nyb2xsX3ZpZXcuZWxhc3RpYyA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICB2YXIgdXBfbG9hZGVkID0gdGhpcy5QQUdFX05VTTtcclxuICAgIC8vICAgICAgICAgdGhpcy5zdGFydF9pbmRleCAtPSB1cF9sb2FkZWQ7XHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLnN0YXJ0X2luZGV4IDwgMCkge1xyXG4gICAgLy8gICAgICAgICAgICAgdXBfbG9hZGVkICs9IHRoaXMuc3RhcnRfaW5kZXg7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnN0YXJ0X2luZGV4ID0gMDsgXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgdGhpcy5sb2FkX3JlY29yZCh0aGlzLnN0YXJ0X2luZGV4KTtcclxuICAgIC8vICAgICAgICAgdGhpcy5jb250ZW50LnkgKz0gKHVwX2xvYWRlZCAqIHRoaXMuT1BUX0hFSUdIVCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIC8vIGVuZCBcclxuICAgIC8vIH0sXHJcbiAgICAvLyAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgIC8vICAgICB0aGlzLnNjcm9sbHZlaXdfbG9hZF9yZWNvZGUoKTtcclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iXX0=