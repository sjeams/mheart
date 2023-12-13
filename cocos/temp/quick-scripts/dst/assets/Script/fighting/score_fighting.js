
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
        console.log(data); // var sn_id ='/app_resources/fighting/history/'+data.data+'.json';
        // var remoteUrl = httpRequest.httpUrlJson(sn_id);
        // cc.loader.load({ url: remoteUrl }, function (err, results) {  
        //     // _self.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture)
        //     console.log(results);
        // });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcU2NyaXB0XFxmaWdodGluZ1xcc2NvcmVfZmlnaHRpbmcuanMiXSwibmFtZXMiOlsiSHR0cEhlbHBlciIsInJlcXVpcmUiLCJodHRwUmVxdWVzdCIsInBhcmFtcyIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiY29udGVudCIsIk5vZGUiLCJwZXJzb24iLCJQcmVmYWIiLCJob21lIiwicmVsb2FkIiwiYmFjayIsInRlc3Rfc2Nyb2xsVmlldyIsInR5cGUiLCJTY3JvbGxWaWV3IiwidGVzdF9wYWdlVmlldyIsIlBhZ2VWaWV3Iiwib25Mb2FkIiwic3Bhd25Ub29scyIsIl90aGlzIiwibWFwX2ludCIsInN5cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1c2VyaWQiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsImh0dHBQb3N0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJhZGRNYXBQaWMiLCJtYXBfcGljIiwicmVtb3RlVXJsIiwiaHR0cFVybCIsImxvYWRlciIsImxvYWQiLCJ1cmwiLCJlcnIiLCJ0ZXh0dXJlIiwiZ2V0Q29tcG9uZW50IiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJTcHJpdGVGcmFtZSIsInJlbG9hZFdvcmQiLCJhZGRXb3JkTWFwIiwiVE9PTFMiLCJ1c2VyX2luX3dvcmRfbWFwIiwidG90YWwiLCJsZW5ndGgiLCJyZW1vdmVBbGxDaGlsZHJlbiIsImRlc3Ryb3lBbGxDaGlsZHJlbiIsImkiLCJtYXAiLCJtYXBfc3RhdHVzIiwidG9vbCIsImluc3RhbnRpYXRlIiwiaW5pdEluZm8iLCJ4IiwieSIsImFkZENoaWxkIiwiYmFja19tYXAiLCJiYWNrX2hvbWUiLCJhZGRUb3VjaEV2ZW50Iiwibm9kZV8xIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsInRvdWNoU3RhcnQiLCJUT1VDSF9NT1ZFIiwidG91Y2hNb3ZlIiwiVE9VQ0hfRU5EIiwidG91Y2hFbmQiXSwibWFwcGluZ3MiOiI7Ozs7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SUFBMUQ7QUFDQUosSUFBQUEsTUFBTSxDQUFDQyxFQUFQLENBQVVoRSxFQUFFLENBQUNLLElBQUgsQ0FBUTRELFNBQVIsQ0FBa0JHLFVBQTVCLEVBQXdDLEtBQUtDLFNBQTdDLEVBQXdELElBQXhEO0FBQ0FOLElBQUFBLE1BQU0sQ0FBQ0MsRUFBUCxDQUFVaEUsRUFBRSxDQUFDSyxJQUFILENBQVE0RCxTQUFSLENBQWtCSyxTQUE1QixFQUF1QyxLQUFLQyxRQUE1QyxFQUFzRCxJQUF0RDtBQUNELEdBdExFLENBdUxMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXpQSyxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBjYy5DbGFzczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvY2xhc3MuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuLy8g5LiW55WM5pON5L2cICBcclxudmFyIEh0dHBIZWxwZXIgPSByZXF1aXJlKFwiaHR0cFwiKTsgXHJcbnZhciBodHRwUmVxdWVzdCA9IG5ldyBIdHRwSGVscGVyKCk7XHJcbnZhciBwYXJhbXMgPVtdO1xyXG5jYy5DbGFzcyh7XHJcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXHJcblxyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICAgIC8vIGZvbzoge1xyXG4gICAgICAgIC8vICAgICAvLyBBVFRSSUJVVEVTOlxyXG4gICAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLCAgICAgICAgLy8gVGhlIGRlZmF1bHQgdmFsdWUgd2lsbCBiZSB1c2VkIG9ubHkgd2hlbiB0aGUgY29tcG9uZW50IGF0dGFjaGluZ1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdG8gYSBub2RlIGZvciB0aGUgZmlyc3QgdGltZVxyXG4gICAgICAgIC8vICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgaXMgdHlwZW9mIGRlZmF1bHRcclxuICAgICAgICAvLyAgICAgc2VyaWFsaXphYmxlOiB0cnVlLCAgIC8vIG9wdGlvbmFsLCBkZWZhdWx0IGlzIHRydWVcclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgIC8vIGJhcjoge1xyXG4gICAgICAgIC8vICAgICBnZXQgKCkge1xyXG4gICAgICAgIC8vICAgICAgICAgcmV0dXJuIHRoaXMuX2JhcjtcclxuICAgICAgICAvLyAgICAgfSxcclxuICAgICAgICAvLyAgICAgc2V0ICh2YWx1ZSkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5fYmFyID0gdmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LFxyXG4gICAgICAgICAgICAvL+a1i+ivlWl0ZW1cclxuICAgICAgLy8gICBjb250ZW50OiB7XHJcbiAgICAgIC8vICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAvLyAgICAgdHlwZTogY2MuTm9kZVxyXG4gICAgICAvLyAgIH0sXHJcblxyXG4gICAgICAvLyBwZXJzb246IHtcclxuICAgICAgLy8gICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAvLyAgIHR5cGU6IGNjLlByZWZhYlxyXG4gICAgICAvLyB9LFxyXG4gIFxyXG4gICAgICBjb250ZW50OiBjYy5Ob2RlLFxyXG4gICAgICBwZXJzb246IGNjLlByZWZhYixcclxuICAgICAgaG9tZTogY2MuTm9kZSxcclxuICAgICAgcmVsb2FkOiBjYy5Ob2RlLFxyXG4gICAgICBiYWNrOiBjYy5Ob2RlLFxyXG4gICAgICAvL+WIl+ihqFxyXG4gICAgICB0ZXN0X3Njcm9sbFZpZXc6IHtcclxuICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgIHR5cGU6IGNjLlNjcm9sbFZpZXdcclxuICAgICAgfSxcclxuICAgICAgLy/nv7vpobXlrrnlmahcclxuICAgICAgdGVzdF9wYWdlVmlldzoge1xyXG4gICAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgICAgdHlwZTogY2MuUGFnZVZpZXdcclxuICAgICAgfSxcclxuXHJcbiAgICB9LFxyXG5cclxuXHJcbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAvLyBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAvLyAgICAgbGV0IHBlcnNvbiA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGVyc29uKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5jb250ZW49cGVyc29uXHJcbiAgICAgICAgLy8gICAgIC8vIHBlcnNvbi5wYXJlbnQgPSB0aGlzLmNvbnRlbnQ7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuYWRkVG91Y2hFdmVudChwZXJzb24pOyAgLy/mt7vliqDop6bmkbjkuovku7ZcclxuICAgICAgICAvLyAgIH1cclxuICAgICAgICAvLyB0aGlzLnZhbHVlX3NldCA9IFtdO1xyXG4gICAgICAgIC8vIC8vIOWmguaenOS9oOi/memHjOaYr+aOkuihjOamnO+8jOmCo+S5iOS9oOWwsXB1c2jmjpLooYzmppznmoTmlbDmja47XHJcbiAgICAgICAgLy8gZm9yKHZhciBpID0gMTsgaSA8PSAxMDA7IGkgKyspIHtcclxuICAgICAgICAvLyAgICAgdGhpcy52YWx1ZV9zZXQucHVzaChpKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMuY29udGVudCA9IHRoaXMuc2Nyb2xsX3ZpZXcuY29udGVudDtcclxuICAgICAgICAvLyB0aGlzLm9wdF9pdGVtX3NldCA9IFtdO1xyXG4gICAgICAgIC8vIGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLlBBR0VfTlVNICogMzsgaSArKykge1xyXG4gICAgICAgIC8vICAgICB2YXIgaXRlbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuaXRlbV9wcmVmYWIpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQoaXRlbSk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMub3B0X2l0ZW1fc2V0LnB1c2goaXRlbSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICB0aGlzLnNwYXduVG9vbHMoKVxyXG4gICAgICAgIC8vIHRoaXMuc2Nyb2xsX3ZpZXcubm9kZS5vbihcInNjcm9sbC1lbmRlZFwiLCB0aGlzLm9uX3Njcm9sbF9lbmRlZC5iaW5kKHRoaXMpLCB0aGlzKTtcclxuICAgIH0sXHJcblxyXG4gICAgc3Bhd25Ub29scyAoKSB7XHJcbiAgICAgIHZhciBfdGhpcyA9dGhpcztcclxuICAgICAgdmFyIG1hcF9pbnQgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2ZpZ3RoaW5nX21hcF9pbnQnKTsgLy/or7vlj5bmlbDmja5cclxuICAgICAgdmFyIHVzZXJpZCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmlndGhpbmdfdXNlcmlkJyk7IC8v6K+75Y+W5pWw5o2uXHJcbiAgICAgIGlmKG1hcF9pbnQ9PScnJiZ1c2VyaWQ9PScnKXtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21hcC/or7jlpKnlnLDlm74nKTtcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB2YXIgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAnbWFwX2ludCc6IG1hcF9pbnQsXHJcbiAgICAgICAgICAgICd1c2VyaWQnOiB1c2VyaWQsXHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGh0dHBSZXF1ZXN0Lmh0dHBQb3N0KCcvYXBwL2FwcC1hcGluZXcvZmlnaHQnLCBwYXJhbXMsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgICAgICAgICAvLyB2YXIgc25faWQgPScvYXBwX3Jlc291cmNlcy9maWdodGluZy9oaXN0b3J5LycrZGF0YS5kYXRhKycuanNvbic7XHJcbiAgICAgICAgICAgIC8vIHZhciByZW1vdGVVcmwgPSBodHRwUmVxdWVzdC5odHRwVXJsSnNvbihzbl9pZCk7XHJcbiAgICAgICAgICAgIC8vIGNjLmxvYWRlci5sb2FkKHsgdXJsOiByZW1vdGVVcmwgfSwgZnVuY3Rpb24gKGVyciwgcmVzdWx0cykgeyAgXHJcbiAgICAgICAgICAgIC8vICAgICAvLyBfc2VsZi5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpXHJcbiAgICAgICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhyZXN1bHRzKTtcclxuICAgICAgICAgICAgLy8gfSk7XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvLyBpZighZGF0YS5kYXRhKXtcclxuICAgICAgICAgICAgLy8gICAgIC8v5Yi35paw5Zyw5Zu+XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21hcC/or7jlpKnlnLDlm74nKTtcclxuICAgICAgICAgICAgLy8gICAgIF90aGlzLnJlbG9hZFdvcmQoKS8v5Yi35paw5LiW55WM5Zyw5Zu+XHJcbiAgICAgICAgICAgIC8vIH1lbHNle1xyXG4gICAgICAgICAgICAvLyAgICAgLy/nlJ/miJDkuJbnlYxcclxuICAgICAgICAgICAgLy8gICAgIC8vIGxldCBjZWxsV2lkdGggPSBfdGhpcy5jb250ZW50LndpZHRoICogMC4xMDU7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBsZXQgY2VsbEhlaWdodCA9IF90aGlzLmNvbnRlbnQuaGVpZ2h0ICogMC4yMTU7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBsZXQgc3BhY2luZ1ggPSBfdGhpcy5jb250ZW50LndpZHRoICogMC4wMjI7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBsZXQgc3BhY2luZ1kgPSBfdGhpcy5jb250ZW50LmhlaWdodCAqIDAuMDQ1O1xyXG5cclxuICAgICAgICAgICAgLy8gICAgIC8vIF90aGlzLmNvbnRlbnQuZ2V0Q29tcG9uZW50KGNjLkxheW91dCkuY2VsbFNpemUud2lkdGggPSBjZWxsV2lkdGg7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBfdGhpcy5jb250ZW50LmdldENvbXBvbmVudChjYy5MYXlvdXQpLmNlbGxTaXplLmhlaWdodCA9IGNlbGxIZWlnaHQ7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBfdGhpcy5jb250ZW50LmdldENvbXBvbmVudChjYy5MYXlvdXQpLnNwYWNpbmdYID0gc3BhY2luZ1g7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBfdGhpcy5jb250ZW50LmdldENvbXBvbmVudChjYy5MYXlvdXQpLnNwYWNpbmdZID0gc3BhY2luZ1k7XHJcblxyXG4gICAgICAgICAgICAvLyAgICAgX3RoaXMuYWRkTWFwUGljKGRhdGEpIC8v55Sf5oiQ5Zyw5Zu+XHJcbiAgICAgICAgICAgIC8vICAgICBfdGhpcy5hZGRXb3JkTWFwKGRhdGEpIC8v55Sf5oiQ55Sf54mpXHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgIFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy/nlJ/miJDlnLDlm75cclxuICAgIGFkZE1hcFBpYyhkYXRhKXtcclxuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIGlmKGRhdGEuZGF0YVsnbWFwX3BpYyddKXtcclxuICAgICAgICAgIHZhciAgbWFwX3BpYyA9ZGF0YS5kYXRhWydtYXBfcGljJ107XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB2YXIgIG1hcF9waWMgPWRhdGEuZGF0YVsncGljdHVyZSddO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgcmVtb3RlVXJsID0gaHR0cFJlcXVlc3QuaHR0cFVybChtYXBfcGljKTtcclxuICAgICAgICAgIGNjLmxvYWRlci5sb2FkKHsgdXJsOiByZW1vdGVVcmwgfSwgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkgeyAgXHJcbiAgICAgICAgICAgICAgX3RoaXMuaG9tZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0sXHJcbiAgICByZWxvYWRXb3JkKCl7XHJcbiAgICAgIHZhciBfdGhpcyA9dGhpcztcclxuICAgICAgaHR0cFJlcXVlc3QuaHR0cFBvc3QoJy9hcHAvYXBwLWFwaXdvcmQvbWFwLXdvcmQnLCBwYXJhbXMsIGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgLy/lhpnlhaXlnLDlm77mlbDmja5cclxuICAgICAgICBfdGhpcy5hZGRXb3JkTWFwKGRhdGEpXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICAvL+eUn+aIkOeUn+eJqVxyXG4gICAgYWRkV29yZE1hcChkYXRhKXtcclxuICAgICAgY29uc29sZS5sb2coZGF0YSkgXHJcbiAgICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuICAgICAgICAvLyDmoLnmja5NYXBUb29sc+eUn+aIkOebuOW6lOeahOmBk+WFt1xyXG4gICAgICAgIC8vIF90aGlzLnRvb2xzQXJyYXkgPSBbXTtcclxuICAgICAgICBsZXQgVE9PTFMgPSBkYXRhLmRhdGEudXNlcl9pbl93b3JkX21hcDtcclxuICAgICAgICB2YXIgdG90YWwgPSBkYXRhLmRhdGEudXNlcl9pbl93b3JkX21hcC5sZW5ndGg7XHJcbiAgXHJcbiAgICAgICAgLy8gdmFyIGZpID0gY2MuZmFkZUluKDIpLy/muJDmmL7mlYjmnpxcclxuICAgICAgICAvLyBfdGhpcy5jb250ZW50LnJ1bkFjdGlvbihmaSk7XHJcbiAgICAgICAgLy8gdmFyIGZvID0gY2MuZmFkZU91dCgxKS8v5riQ6ZqQ5pWI5p6cXHJcbiAgICAgICAgLy8gX3RoaXMuY29udGVudC5ydW5BY3Rpb24oZm8pO1xyXG4gICAgICAgIC8v56e76Zmk6IqC54K5XHJcbiAgICAgICAgX3RoaXMuY29udGVudC5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIF90aGlzLmNvbnRlbnQuZGVzdHJveUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgLy/mt7vliqDoioLngrlcclxuICAgICAgICBmb3IgKGxldCBpPTA7IGk8dG90YWw7IGkrKykge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpKSBcclxuICAgICAgICAgICAgLy/mrbvkuqHnp7vpmaRtYXBfc3RhdHVzXHJcbiAgICAgICAgICAgIHZhciBtYXAgPVRPT0xTW2ldO1xyXG4gICAgICAgICAgICBpZihtYXAubWFwX3N0YXR1cz09MSl7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobWFwLngpXHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobWFwLnkpXHJcbiAgICAgICAgICAgICAgbGV0IHRvb2wgPSBjYy5pbnN0YW50aWF0ZShfdGhpcy5wZXJzb24pO1xyXG4gICAgICAgICAgICAgIHRvb2wuZ2V0Q29tcG9uZW50KCdtYXBUb29scycpLmluaXRJbmZvKG1hcCk7XHJcbiAgICAgICAgICAgICAgdG9vbC54PW1hcC54XHJcbiAgICAgICAgICAgICAgdG9vbC55PW1hcC55XHJcbiAgICAgICAgICAgICAgLy8gX3RoaXMudG9vbHNBcnJheS5wdXNoKHRvb2wpO1xyXG4gICAgICAgICAgICAgIC8vIHRvb2wuc2V0UG9zaXRpb24obWFwLngsbWFwLnkpOyAgXHJcbiAgICAgICAgICAgICAgX3RoaXMuY29udGVudC5hZGRDaGlsZCh0b29sKTsgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBiYWNrX21hcCgpe1xyXG4gICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ21hcC/or7jlpKnlnLDlm74nKTtcclxuICAgIH0sXHJcbiAgICBiYWNrX2hvbWUoKXtcclxuICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCflpKfljoUnKTtcclxuICAgIH0sXHJcbiAgICBhZGRUb3VjaEV2ZW50KG5vZGVfMSkge1xyXG4gICAgICAgIG5vZGVfMS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy50b3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICBub2RlXzEub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy50b3VjaE1vdmUsIHRoaXMpO1xyXG4gICAgICAgIG5vZGVfMS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMudG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICB9LFxyXG4gICAgLy8gc3RhcnQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgLy8gICAgIHRoaXMuc3RhcnRfeSA9IHRoaXMuY29udGVudC55O1xyXG4gICAgLy8gICAgIHRoaXMuc3RhcnRfaW5kZXggPSAwOyAvLyDlvZPliY3miJHku6wyNOS4qkl0ZW3liqDovb3nmoQgMTAw6aG55pWw5o2u6YeM6Z2i55qE6LW35aeL5pWw5o2u6K6w5b2V55qE57Si5byVO1xyXG4gICAgLy8gICAgIHRoaXMubG9hZF9yZWNvcmQodGhpcy5zdGFydF9pbmRleCk7XHJcbiAgICAvLyB9LFxyXG5cclxuICAgIC8vIC8vIOS7jui/meS4que0ouW8leW8gOWni++8jOWKoOi9veaVsOaNruiusOW9leWIsOaIkeS7rOeahOa7muWKqOWIl+ihqOmHjOmdoueahOmAiemhuVxyXG4gICAgLy8gbG9hZF9yZWNvcmQ6IGZ1bmN0aW9uKHN0YXJ0X2luZGV4KSB7XHJcbiAgICAvLyAgICAgdGhpcy5zdGFydF9pbmRleCA9IHN0YXJ0X2luZGV4O1xyXG5cclxuICAgIC8vICAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5QQUdFX05VTSAqIDM7IGkgKyspIHtcclxuICAgIC8vICAgICAgICAgdmFyIGxhYmVsID0gdGhpcy5vcHRfaXRlbV9zZXRbaV0uZ2V0Q2hpbGRCeU5hbWUoXCJzcmNcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcclxuICAgIC8vICAgICAgICAgLy8g5pi+56S65oiR5Lus55qE6K6w5b2VO1xyXG4gICAgLy8gICAgICAgICBsYWJlbC5zdHJpbmcgPSB0aGlzLnZhbHVlX3NldFtzdGFydF9pbmRleCArIGldO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH0sXHJcblxyXG4gICAgLy8gb25fc2Nyb2xsX2VuZGVkOiBmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICB0aGlzLnNjcm9sbHZlaXdfbG9hZF9yZWNvZGUoKTtcclxuICAgIC8vICAgICB0aGlzLnNjcm9sbF92aWV3LmVsYXN0aWMgPSB0cnVlO1xyXG4gICAgLy8gfSxcclxuXHJcbiAgICAvLyBzY3JvbGx2ZWl3X2xvYWRfcmVjb2RlOiBmdW5jdGlvbigpIHtcclxuICAgIC8vICAgICAgLy8g5ZCR5LiL5Yqg6L295LqGXHJcbiAgICAvLyAgICAgaWYgKHRoaXMuc3RhcnRfaW5kZXggKyB0aGlzLlBBR0VfTlVNICogMyA8IHRoaXMudmFsdWVfc2V0Lmxlbmd0aCAmJlxyXG4gICAgLy8gICAgICAgICB0aGlzLmNvbnRlbnQueSA+PSB0aGlzLnN0YXJ0X3kgKyB0aGlzLlBBR0VfTlVNICogMiAqIHRoaXMuT1BUX0hFSUdIVCkgeyAvLyDliqjmgIHliqDovb1cclxuICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLnNjcm9sbF92aWV3Ll9hdXRvU2Nyb2xsaW5nKSB7IC8vIOetieW+hei/meS4quiHquWKqOa7muWKqOe7k+adn+S7peWQjuWGjeWBmuWKoOi9vVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY3JvbGxfdmlldy5lbGFzdGljID0gZmFsc2U7IC8vIOaaguaXtuWFs+mXreWbnuW8ueaViOaenFxyXG4gICAgLy8gICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgLy8gICAgICAgICB9XHJcblxyXG4gICAgLy8gICAgICAgICB2YXIgZG93bl9sb2FkZWQgPSB0aGlzLlBBR0VfTlVNO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnN0YXJ0X2luZGV4ICs9IGRvd25fbG9hZGVkO1xyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5zdGFydF9pbmRleCArIHRoaXMuUEFHRV9OVU0gKiAzID4gdGhpcy52YWx1ZV9zZXQubGVuZ3RoKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB2YXIgb3V0X2xlbiA9IHRoaXMuc3RhcnRfaW5kZXggKyB0aGlzLlBBR0VfTlVNICogMyAtIHRoaXMudmFsdWVfc2V0Lmxlbmd0aDtcclxuICAgIC8vICAgICAgICAgICAgIGRvd25fbG9hZGVkIC09IChvdXRfbGVuKTtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc3RhcnRfaW5kZXggLT0gKG91dF9sZW4pO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIHRoaXMubG9hZF9yZWNvcmQodGhpcy5zdGFydF9pbmRleCk7XHJcblxyXG4gICAgLy8gICAgICAgICB0aGlzLmNvbnRlbnQueSAtPSAoZG93bl9sb2FkZWQgKiB0aGlzLk9QVF9IRUlHSFQpO1xyXG4gICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICAvLyDlkJHkuIrliqDovb1cclxuICAgIC8vICAgICBpZiAodGhpcy5zdGFydF9pbmRleCA+IDAgJiYgdGhpcy5jb250ZW50LnkgPD0gdGhpcy5zdGFydF95KSB7XHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLnNjcm9sbF92aWV3Ll9hdXRvU2Nyb2xsaW5nKSB7IC8vIOetieW+hei/meS4quiHquWKqOa7muWKqOe7k+adn+S7peWQjuWGjeWBmuWKoOi9vVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5zY3JvbGxfdmlldy5lbGFzdGljID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgIHZhciB1cF9sb2FkZWQgPSB0aGlzLlBBR0VfTlVNO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnN0YXJ0X2luZGV4IC09IHVwX2xvYWRlZDtcclxuICAgIC8vICAgICAgICAgaWYgKHRoaXMuc3RhcnRfaW5kZXggPCAwKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB1cF9sb2FkZWQgKz0gdGhpcy5zdGFydF9pbmRleDtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuc3RhcnRfaW5kZXggPSAwOyBcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB0aGlzLmxvYWRfcmVjb3JkKHRoaXMuc3RhcnRfaW5kZXgpO1xyXG4gICAgLy8gICAgICAgICB0aGlzLmNvbnRlbnQueSArPSAodXBfbG9hZGVkICogdGhpcy5PUFRfSEVJR0hUKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgLy8gZW5kIFxyXG4gICAgLy8gfSxcclxuICAgIC8vIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXHJcbiAgICAvLyB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgLy8gICAgIHRoaXMuc2Nyb2xsdmVpd19sb2FkX3JlY29kZSgpO1xyXG4gICAgLy8gfSxcclxufSk7XHJcbiJdfQ==