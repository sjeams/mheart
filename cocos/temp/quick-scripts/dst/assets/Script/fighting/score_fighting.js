
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
    this.spawnTools(); // this.scroll_view.node.on("scroll-ended", this.on_scroll_ended.bind(this), this);
  },
  spawnTools: function spawnTools() {
    var _this = this;

    var map_int = cc.sys.localStorage.getItem('figthing_map_int'); //读取数据

    var userid = cc.sys.localStorage.getItem('figthing_userid'); //读取数据

    if (map_int == '' && userid == '') {
      cc.director.loadScene('map/诸天地图');
    } else {
      var params = {
        'map_int': map_int,
        'userid': userid
      };
      httpRequest.httpPost('/app/app-apinew/fight', params, function (data) {
        // var sn_id ='/app_resources/fighting/history/'+data.data+'.json';
        var remoteUrl = httpRequest.httpUrlJson(data.data);
        cc.loader.load({
          url: remoteUrl
        }, function (err, results) {
          // _self.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture)
          console.log(results);
        });
      }); // if(!data.data){
      //     //刷新地图
      //     // cc.director.loadScene('map/诸天地图');
      //     _this.reloadWord()//刷新世界地图
      // }else{
      //     //生成世界
      //     // let cellWidth = _this.content.width * 0.105;
      //     // let cellHeight = _this.content.height * 0.215;
      //     // let spacingX = _this.content.width * 0.022;
      //     // let spacingY = _this.content.height * 0.045;
      //     // _this.content.getComponent(cc.Layout).cellSize.width = cellWidth;
      //     // _this.content.getComponent(cc.Layout).cellSize.height = cellHeight;
      //     // _this.content.getComponent(cc.Layout).spacingX = spacingX;
      //     // _this.content.getComponent(cc.Layout).spacingY = spacingY;
      //     _this.addMapPic(data) //生成地图
      //     _this.addWordMap(data) //生成生物
      // }
    }
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

    httpRequest.httpPost('/app/app-apiword/map-word', params, function (data) {
      //写入地图数据
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
        tool.getComponent('mapTools').initInfo(map);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxmaWdodGluZ1xcc2NvcmVfZmlnaHRpbmcuanMiXSwibmFtZXMiOlsiSHR0cEhlbHBlciIsInJlcXVpcmUiLCJodHRwUmVxdWVzdCIsInBhcmFtcyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiY29udGVudCIsIk5vZGUiLCJwZXJzb24iLCJQcmVmYWIiLCJob21lIiwicmVsb2FkIiwiYmFjayIsInRlc3Rfc2Nyb2xsVmlldyIsInR5cGUiLCJTY3JvbGxWaWV3IiwidGVzdF9wYWdlVmlldyIsIlBhZ2VWaWV3Iiwib25Mb2FkIiwic3Bhd25Ub29scyIsIl90aGlzIiwibWFwX2ludCIsInN5cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VyaWQiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsImh0dHBQb3N0IiwiZGF0YSIsInJlbW90ZVVybCIsImh0dHBVcmxKc29uIiwibG9hZGVyIiwibG9hZCIsInVybCIsImVyciIsInJlc3VsdHMiLCJjb25zb2xlIiwibG9nIiwiYWRkTWFwUGljIiwibWFwX3BpYyIsImh0dHBVcmwiLCJ0ZXh0dXJlIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJTcHJpdGVGcmFtZSIsInJlbG9hZFdvcmQiLCJhZGRXb3JkTWFwIiwiVE9PTFMiLCJ1c2VyX2luX3dvcmRfbWFwIiwidG90YWwiLCJsZW5ndGgiLCJyZW1vdmVBbGxDaGlsZHJlbiIsImRlc3Ryb3lBbGxDaGlsZHJlbiIsImkiLCJtYXAiLCJtYXBfc3RhdHVzIiwidG9vbCIsImluc3RhbnRpYXRlIiwiaW5pdEluZm8iLCJ4IiwieSIsImFkZENoaWxkIiwiYmFja19tYXAiLCJiYWNrX2hvbWUiLCJhZGRUb3VjaEV2ZW50Iiwibm9kZV8xIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsInRvdWNoU3RhcnQiLCJUT1VDSF9NT1ZFIiwidG91Y2hNb3ZlIiwiVE9VQ0hfRU5EIiwidG91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QUUsQ0FBQ3dCLFFBQUgsQ0FBWUMsU0FBWixDQUFzQixJQUF0QjtBQUNELEdBL0tJO0FBZ0xMdUMsRUFBQUEsYUFoTEsseUJBZ0xTQyxNQWhMVCxFQWdMaUI7QUFDbEJBLElBQUFBLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVbEUsRUFBRSxDQUFDSyxJQUFILENBQVE4RCxTQUFSLENBQWtCQyxXQUE1QixFQUF5QyxLQUFLQyxVQUE5QyxFQUEwRCxJQUExRDtBQUNBSixJQUFBQSxNQUFNLENBQUNDLEVBQVAsQ0FBVWxFLEVBQUUsQ0FBQ0ssSUFBSCxDQUFROEQsU0FBUixDQUFrQkcsVUFBNUIsRUFBd0MsS0FBS0MsU0FBN0MsRUFBd0QsSUFBeEQ7QUFDQU4sSUFBQUEsTUFBTSxDQUFDQyxFQUFQLENBQVVsRSxFQUFFLENBQUNLLElBQUgsQ0FBUThELFNBQVIsQ0FBa0JLLFNBQTVCLEVBQXVDLEtBQUtDLFFBQTVDLEVBQXNELElBQXREO0FBQ0QsR0FwTEUsQ0FxTEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBdlBLLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG4vLyDkuJbnlYzmk43kvZwgIFxyXG52YXIgSHR0cEhlbHBlciA9IHJlcXVpcmUoXCIuLi9odHRwXCIpOyBcclxudmFyIGh0dHBSZXF1ZXN0ID0gbmV3IEh0dHBIZWxwZXIoKTtcclxudmFyIHBhcmFtcyA9W107XHJcbmNjLkNsYXNzKHtcclxuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAgICAgLy8gZm9vOiB7XHJcbiAgICAgICAgLy8gICAgIC8vIEFUVFJJQlVURVM6XHJcbiAgICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsICAgICAgICAvLyBUaGUgZGVmYXVsdCB2YWx1ZSB3aWxsIGJlIHVzZWQgb25seSB3aGVuIHRoZSBjb21wb25lbnQgYXR0YWNoaW5nXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0byBhIG5vZGUgZm9yIHRoZSBmaXJzdCB0aW1lXHJcbiAgICAgICAgLy8gICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLCAvLyBvcHRpb25hbCwgZGVmYXVsdCBpcyB0eXBlb2YgZGVmYXVsdFxyXG4gICAgICAgIC8vICAgICBzZXJpYWxpemFibGU6IHRydWUsICAgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHJ1ZVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgLy8gYmFyOiB7XHJcbiAgICAgICAgLy8gICAgIGdldCAoKSB7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm4gdGhpcy5fYmFyO1xyXG4gICAgICAgIC8vICAgICB9LFxyXG4gICAgICAgIC8vICAgICBzZXQgKHZhbHVlKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLl9iYXIgPSB2YWx1ZTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH0sXHJcbiAgICAgICAgICAgIC8v5rWL6K+VaXRlbVxyXG4gICAgICAvLyAgIGNvbnRlbnQ6IHtcclxuICAgICAgLy8gICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIC8vICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICAgIC8vICAgfSxcclxuXHJcbiAgICAgIC8vIHBlcnNvbjoge1xyXG4gICAgICAvLyAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIC8vICAgdHlwZTogY2MuUHJlZmFiXHJcbiAgICAgIC8vIH0sXHJcbiAgXHJcbiAgICAgIGNvbnRlbnQ6IGNjLk5vZGUsXHJcbiAgICAgIHBlcnNvbjogY2MuUHJlZmFiLFxyXG4gICAgICBob21lOiBjYy5Ob2RlLFxyXG4gICAgICByZWxvYWQ6IGNjLk5vZGUsXHJcbiAgICAgIGJhY2s6IGNjLk5vZGUsXHJcbiAgICAgIC8v5YiX6KGoXHJcbiAgICAgIHRlc3Rfc2Nyb2xsVmlldzoge1xyXG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgdHlwZTogY2MuU2Nyb2xsVmlld1xyXG4gICAgICB9LFxyXG4gICAgICAvL+e/u+mhteWuueWZqFxyXG4gICAgICB0ZXN0X3BhZ2VWaWV3OiB7XHJcbiAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICB0eXBlOiBjYy5QYWdlVmlld1xyXG4gICAgICB9LFxyXG5cclxuICAgIH0sXHJcblxyXG5cclxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxyXG5cclxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xyXG4gICAgICAgIC8vICAgICBsZXQgcGVyc29uID0gY2MuaW5zdGFudGlhdGUodGhpcy5wZXJzb24pO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNvbnRlbj1wZXJzb25cclxuICAgICAgICAvLyAgICAgLy8gcGVyc29uLnBhcmVudCA9IHRoaXMuY29udGVudDtcclxuICAgICAgICAvLyAgICAgLy8gdGhpcy5hZGRUb3VjaEV2ZW50KHBlcnNvbik7ICAvL+a3u+WKoOinpuaRuOS6i+S7tlxyXG4gICAgICAgIC8vICAgfVxyXG4gICAgICAgIC8vIHRoaXMudmFsdWVfc2V0ID0gW107XHJcbiAgICAgICAgLy8gLy8g5aaC5p6c5L2g6L+Z6YeM5piv5o6S6KGM5qac77yM6YKj5LmI5L2g5bCxcHVzaOaOkuihjOamnOeahOaVsOaNrjtcclxuICAgICAgICAvLyBmb3IodmFyIGkgPSAxOyBpIDw9IDEwMDsgaSArKykge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnZhbHVlX3NldC5wdXNoKGkpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcy5jb250ZW50ID0gdGhpcy5zY3JvbGxfdmlldy5jb250ZW50O1xyXG4gICAgICAgIC8vIHRoaXMub3B0X2l0ZW1fc2V0ID0gW107XHJcbiAgICAgICAgLy8gZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuUEFHRV9OVU0gKiAzOyBpICsrKSB7XHJcbiAgICAgICAgLy8gICAgIHZhciBpdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5pdGVtX3ByZWZhYik7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuY29udGVudC5hZGRDaGlsZChpdGVtKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5vcHRfaXRlbV9zZXQucHVzaChpdGVtKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgIHRoaXMuc3Bhd25Ub29scygpXHJcbiAgICAgICAgLy8gdGhpcy5zY3JvbGxfdmlldy5ub2RlLm9uKFwic2Nyb2xsLWVuZGVkXCIsIHRoaXMub25fc2Nyb2xsX2VuZGVkLmJpbmQodGhpcyksIHRoaXMpO1xyXG4gICAgfSxcclxuXHJcbiAgICBzcGF3blRvb2xzICgpIHtcclxuICAgICAgdmFyIF90aGlzID10aGlzO1xyXG4gICAgICB2YXIgbWFwX2ludCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlndGhpbmdfbWFwX2ludCcpOyAvL+ivu+WPluaVsOaNrlxyXG4gICAgICB2YXIgdXNlcmlkID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmaWd0aGluZ191c2VyaWQnKTsgLy/or7vlj5bmlbDmja5cclxuICAgICAgaWYobWFwX2ludD09JycmJnVzZXJpZD09Jycpe1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFwL+ivuOWkqeWcsOWbvicpO1xyXG4gICAgICB9ZWxzZXtcclxuICAgICAgICAgIHZhciBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICdtYXBfaW50JzogbWFwX2ludCxcclxuICAgICAgICAgICAgJ3VzZXJpZCc6IHVzZXJpZCxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBodHRwUmVxdWVzdC5odHRwUG9zdCgnL2FwcC9hcHAtYXBpbmV3L2ZpZ2h0JywgcGFyYW1zLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAvLyB2YXIgc25faWQgPScvYXBwX3Jlc291cmNlcy9maWdodGluZy9oaXN0b3J5LycrZGF0YS5kYXRhKycuanNvbic7XHJcbiAgICAgICAgICAgIHZhciByZW1vdGVVcmwgPSBodHRwUmVxdWVzdC5odHRwVXJsSnNvbihkYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICBjYy5sb2FkZXIubG9hZCh7IHVybDogcmVtb3RlVXJsIH0sIGZ1bmN0aW9uIChlcnIsIHJlc3VsdHMpIHsgIFxyXG4gICAgICAgICAgICAgICAgLy8gX3NlbGYubm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0cyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy8gaWYoIWRhdGEuZGF0YSl7XHJcbiAgICAgICAgICAgIC8vICAgICAvL+WIt+aWsOWcsOWbvlxyXG4gICAgICAgICAgICAvLyAgICAgLy8gY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtYXAv6K+45aSp5Zyw5Zu+Jyk7XHJcbiAgICAgICAgICAgIC8vICAgICBfdGhpcy5yZWxvYWRXb3JkKCkvL+WIt+aWsOS4lueVjOWcsOWbvlxyXG4gICAgICAgICAgICAvLyB9ZWxzZXtcclxuICAgICAgICAgICAgLy8gICAgIC8v55Sf5oiQ5LiW55WMXHJcbiAgICAgICAgICAgIC8vICAgICAvLyBsZXQgY2VsbFdpZHRoID0gX3RoaXMuY29udGVudC53aWR0aCAqIDAuMTA1O1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gbGV0IGNlbGxIZWlnaHQgPSBfdGhpcy5jb250ZW50LmhlaWdodCAqIDAuMjE1O1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gbGV0IHNwYWNpbmdYID0gX3RoaXMuY29udGVudC53aWR0aCAqIDAuMDIyO1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gbGV0IHNwYWNpbmdZID0gX3RoaXMuY29udGVudC5oZWlnaHQgKiAwLjA0NTtcclxuXHJcbiAgICAgICAgICAgIC8vICAgICAvLyBfdGhpcy5jb250ZW50LmdldENvbXBvbmVudChjYy5MYXlvdXQpLmNlbGxTaXplLndpZHRoID0gY2VsbFdpZHRoO1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gX3RoaXMuY29udGVudC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS5jZWxsU2l6ZS5oZWlnaHQgPSBjZWxsSGVpZ2h0O1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gX3RoaXMuY29udGVudC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS5zcGFjaW5nWCA9IHNwYWNpbmdYO1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gX3RoaXMuY29udGVudC5nZXRDb21wb25lbnQoY2MuTGF5b3V0KS5zcGFjaW5nWSA9IHNwYWNpbmdZO1xyXG5cclxuICAgICAgICAgICAgLy8gICAgIF90aGlzLmFkZE1hcFBpYyhkYXRhKSAvL+eUn+aIkOWcsOWbvlxyXG4gICAgICAgICAgICAvLyAgICAgX3RoaXMuYWRkV29yZE1hcChkYXRhKSAvL+eUn+aIkOeUn+eJqVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICBcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8v55Sf5oiQ5Zyw5Zu+XHJcbiAgICBhZGRNYXBQaWMoZGF0YSl7XHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICBpZihkYXRhLmRhdGFbJ21hcF9waWMnXSl7XHJcbiAgICAgICAgICB2YXIgIG1hcF9waWMgPWRhdGEuZGF0YVsnbWFwX3BpYyddO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdmFyICBtYXBfcGljID1kYXRhLmRhdGFbJ3BpY3R1cmUnXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHJlbW90ZVVybCA9IGh0dHBSZXF1ZXN0Lmh0dHBVcmwobWFwX3BpYyk7XHJcbiAgICAgICAgICBjYy5sb2FkZXIubG9hZCh7IHVybDogcmVtb3RlVXJsIH0sIGZ1bmN0aW9uIChlcnIsIHRleHR1cmUpIHsgIFxyXG4gICAgICAgICAgICAgIF90aGlzLmhvbWUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcmVsb2FkV29yZCgpe1xyXG4gICAgICB2YXIgX3RoaXMgPXRoaXM7XHJcbiAgICAgIGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCcvYXBwL2FwcC1hcGl3b3JkL21hcC13b3JkJywgcGFyYW1zLCBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgIC8v5YaZ5YWl5Zyw5Zu+5pWw5o2uXHJcbiAgICAgICAgX3RoaXMuYWRkV29yZE1hcChkYXRhKVxyXG4gICAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgLy/nlJ/miJDnlJ/nialcclxuICAgIGFkZFdvcmRNYXAoZGF0YSl7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEpIFxyXG4gICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgLy8g5qC55o2uTWFwVG9vbHPnlJ/miJDnm7jlupTnmoTpgZPlhbdcclxuICAgICAgICAvLyBfdGhpcy50b29sc0FycmF5ID0gW107XHJcbiAgICAgICAgbGV0IFRPT0xTID0gZGF0YS5kYXRhLnVzZXJfaW5fd29yZF9tYXA7XHJcbiAgICAgICAgdmFyIHRvdGFsID0gZGF0YS5kYXRhLnVzZXJfaW5fd29yZF9tYXAubGVuZ3RoO1xyXG4gIFxyXG4gICAgICAgIC8vIHZhciBmaSA9IGNjLmZhZGVJbigyKS8v5riQ5pi+5pWI5p6cXHJcbiAgICAgICAgLy8gX3RoaXMuY29udGVudC5ydW5BY3Rpb24oZmkpO1xyXG4gICAgICAgIC8vIHZhciBmbyA9IGNjLmZhZGVPdXQoMSkvL+a4kOmakOaViOaenFxyXG4gICAgICAgIC8vIF90aGlzLmNvbnRlbnQucnVuQWN0aW9uKGZvKTtcclxuICAgICAgICAvL+enu+mZpOiKgueCuVxyXG4gICAgICAgIF90aGlzLmNvbnRlbnQucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgICAgICBfdGhpcy5jb250ZW50LmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIC8v5re75Yqg6IqC54K5XHJcbiAgICAgICAgZm9yIChsZXQgaT0wOyBpPHRvdGFsOyBpKyspIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coaSkgXHJcbiAgICAgICAgICAgIC8v5q275Lqh56e76ZmkbWFwX3N0YXR1c1xyXG4gICAgICAgICAgICB2YXIgbWFwID1UT09MU1tpXTtcclxuICAgICAgICAgICAgaWYobWFwLm1hcF9zdGF0dXM9PTEpe1xyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1hcC54KVxyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1hcC55KVxyXG4gICAgICAgICAgICAgIGxldCB0b29sID0gY2MuaW5zdGFudGlhdGUoX3RoaXMucGVyc29uKTtcclxuICAgICAgICAgICAgICB0b29sLmdldENvbXBvbmVudCgnbWFwVG9vbHMnKS5pbml0SW5mbyhtYXApO1xyXG4gICAgICAgICAgICAgIHRvb2wueD1tYXAueFxyXG4gICAgICAgICAgICAgIHRvb2wueT1tYXAueVxyXG4gICAgICAgICAgICAgIC8vIF90aGlzLnRvb2xzQXJyYXkucHVzaCh0b29sKTtcclxuICAgICAgICAgICAgICAvLyB0b29sLnNldFBvc2l0aW9uKG1hcC54LG1hcC55KTsgIFxyXG4gICAgICAgICAgICAgIF90aGlzLmNvbnRlbnQuYWRkQ2hpbGQodG9vbCk7ICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgYmFja19tYXAoKXtcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdtYXAv6K+45aSp5Zyw5Zu+Jyk7XHJcbiAgICB9LFxyXG4gICAgYmFja19ob21lKCl7XHJcbiAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgn5aSn5Y6FJyk7XHJcbiAgICB9LFxyXG4gICAgYWRkVG91Y2hFdmVudChub2RlXzEpIHtcclxuICAgICAgICBub2RlXzEub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgbm9kZV8xLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsIHRoaXMudG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICBub2RlXzEub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgfSxcclxuICAgIC8vIHN0YXJ0OiBmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICB0aGlzLnN0YXJ0X3kgPSB0aGlzLmNvbnRlbnQueTtcclxuICAgIC8vICAgICB0aGlzLnN0YXJ0X2luZGV4ID0gMDsgLy8g5b2T5YmN5oiR5LusMjTkuKpJdGVt5Yqg6L2955qEIDEwMOmhueaVsOaNrumHjOmdoueahOi1t+Wni+aVsOaNruiusOW9leeahOe0ouW8lTtcclxuICAgIC8vICAgICB0aGlzLmxvYWRfcmVjb3JkKHRoaXMuc3RhcnRfaW5kZXgpO1xyXG4gICAgLy8gfSxcclxuXHJcbiAgICAvLyAvLyDku47ov5nkuKrntKLlvJXlvIDlp4vvvIzliqDovb3mlbDmja7orrDlvZXliLDmiJHku6znmoTmu5rliqjliJfooajph4zpnaLnmoTpgInpoblcclxuICAgIC8vIGxvYWRfcmVjb3JkOiBmdW5jdGlvbihzdGFydF9pbmRleCkge1xyXG4gICAgLy8gICAgIHRoaXMuc3RhcnRfaW5kZXggPSBzdGFydF9pbmRleDtcclxuXHJcbiAgICAvLyAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMuUEFHRV9OVU0gKiAzOyBpICsrKSB7XHJcbiAgICAvLyAgICAgICAgIHZhciBsYWJlbCA9IHRoaXMub3B0X2l0ZW1fc2V0W2ldLmdldENoaWxkQnlOYW1lKFwic3JjXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XHJcbiAgICAvLyAgICAgICAgIC8vIOaYvuekuuaIkeS7rOeahOiusOW9lTtcclxuICAgIC8vICAgICAgICAgbGFiZWwuc3RyaW5nID0gdGhpcy52YWx1ZV9zZXRbc3RhcnRfaW5kZXggKyBpXTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9LFxyXG5cclxuICAgIC8vIG9uX3Njcm9sbF9lbmRlZDogZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgdGhpcy5zY3JvbGx2ZWl3X2xvYWRfcmVjb2RlKCk7XHJcbiAgICAvLyAgICAgdGhpcy5zY3JvbGxfdmlldy5lbGFzdGljID0gdHJ1ZTtcclxuICAgIC8vIH0sXHJcblxyXG4gICAgLy8gc2Nyb2xsdmVpd19sb2FkX3JlY29kZTogZnVuY3Rpb24oKSB7XHJcbiAgICAvLyAgICAgIC8vIOWQkeS4i+WKoOi9veS6hlxyXG4gICAgLy8gICAgIGlmICh0aGlzLnN0YXJ0X2luZGV4ICsgdGhpcy5QQUdFX05VTSAqIDMgPCB0aGlzLnZhbHVlX3NldC5sZW5ndGggJiZcclxuICAgIC8vICAgICAgICAgdGhpcy5jb250ZW50LnkgPj0gdGhpcy5zdGFydF95ICsgdGhpcy5QQUdFX05VTSAqIDIgKiB0aGlzLk9QVF9IRUlHSFQpIHsgLy8g5Yqo5oCB5Yqg6L29XHJcbiAgICAgICAgICAgIFxyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5zY3JvbGxfdmlldy5fYXV0b1Njcm9sbGluZykgeyAvLyDnrYnlvoXov5nkuKroh6rliqjmu5rliqjnu5PmnZ/ku6XlkI7lho3lgZrliqDovb1cclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2Nyb2xsX3ZpZXcuZWxhc3RpYyA9IGZhbHNlOyAvLyDmmoLml7blhbPpl63lm57lvLnmlYjmnpxcclxuICAgIC8vICAgICAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgdmFyIGRvd25fbG9hZGVkID0gdGhpcy5QQUdFX05VTTtcclxuICAgIC8vICAgICAgICAgdGhpcy5zdGFydF9pbmRleCArPSBkb3duX2xvYWRlZDtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuc3RhcnRfaW5kZXggKyB0aGlzLlBBR0VfTlVNICogMyA+IHRoaXMudmFsdWVfc2V0Lmxlbmd0aCkge1xyXG4gICAgLy8gICAgICAgICAgICAgdmFyIG91dF9sZW4gPSB0aGlzLnN0YXJ0X2luZGV4ICsgdGhpcy5QQUdFX05VTSAqIDMgLSB0aGlzLnZhbHVlX3NldC5sZW5ndGg7XHJcbiAgICAvLyAgICAgICAgICAgICBkb3duX2xvYWRlZCAtPSAob3V0X2xlbik7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnN0YXJ0X2luZGV4IC09IChvdXRfbGVuKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB0aGlzLmxvYWRfcmVjb3JkKHRoaXMuc3RhcnRfaW5kZXgpO1xyXG5cclxuICAgIC8vICAgICAgICAgdGhpcy5jb250ZW50LnkgLT0gKGRvd25fbG9hZGVkICogdGhpcy5PUFRfSEVJR0hUKTtcclxuICAgIC8vICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgLy8g5ZCR5LiK5Yqg6L29XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuc3RhcnRfaW5kZXggPiAwICYmIHRoaXMuY29udGVudC55IDw9IHRoaXMuc3RhcnRfeSkge1xyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5zY3JvbGxfdmlldy5fYXV0b1Njcm9sbGluZykgeyAvLyDnrYnlvoXov5nkuKroh6rliqjmu5rliqjnu5PmnZ/ku6XlkI7lho3lgZrliqDovb1cclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc2Nyb2xsX3ZpZXcuZWxhc3RpYyA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICB2YXIgdXBfbG9hZGVkID0gdGhpcy5QQUdFX05VTTtcclxuICAgIC8vICAgICAgICAgdGhpcy5zdGFydF9pbmRleCAtPSB1cF9sb2FkZWQ7XHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLnN0YXJ0X2luZGV4IDwgMCkge1xyXG4gICAgLy8gICAgICAgICAgICAgdXBfbG9hZGVkICs9IHRoaXMuc3RhcnRfaW5kZXg7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnN0YXJ0X2luZGV4ID0gMDsgXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgdGhpcy5sb2FkX3JlY29yZCh0aGlzLnN0YXJ0X2luZGV4KTtcclxuICAgIC8vICAgICAgICAgdGhpcy5jb250ZW50LnkgKz0gKHVwX2xvYWRlZCAqIHRoaXMuT1BUX0hFSUdIVCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIC8vIGVuZCBcclxuICAgIC8vIH0sXHJcbiAgICAvLyAvLyBjYWxsZWQgZXZlcnkgZnJhbWUsIHVuY29tbWVudCB0aGlzIGZ1bmN0aW9uIHRvIGFjdGl2YXRlIHVwZGF0ZSBjYWxsYmFja1xyXG4gICAgLy8gdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcclxuICAgIC8vICAgICB0aGlzLnNjcm9sbHZlaXdfbG9hZF9yZWNvZGUoKTtcclxuICAgIC8vIH0sXHJcbn0pO1xyXG4iXX0=