"use strict";
cc._RF.push(module, '4b399vzZ3RO+bGBH1k2sE4C', 'mapTools');
// Script/scence/mapTools.js

"use strict";

var HttpHelper = require("../http");

var httpRequest = new HttpHelper();
cc.Class({
  "extends": cc.Component,
  properties: {// server_picture: cc.Node,
    // server_type: cc.Node,
    // server_name: cc.Node,
    // server_star: cc.Node,
    // sprite_server_login: cc.Button
  },
  // LIFE-CYCLE CALLBACKS:
  //技能图片渲染
  biology_detail_list: function biology_detail_list(TipBoxPrefab_model, info_list) {
    var _this = this;

    var TOOLS = [];
    var TOOLS = info_list; // let image = '/技能图标/'+skill.image;
    //加载预制资源 PrefabUrl为 预制资源在 资源中的路径

    cc.loader.loadRes('/model战斗/sprite_地图', function (errorMessage, loadedResource_icon) {
      //检查资源加载
      if (errorMessage) {
        cc.log('载入预制资源失败, 原因:' + errorMessage);
        return;
      }

      if (!(loadedResource_icon instanceof cc.Prefab)) {
        cc.log('你载入的不是预制资源!');
        return;
      } //开始实例化预制资源


      var _loop = function _loop() {
        //声明节点对象
        var TipBoxPrefab_icon = cc.instantiate(loadedResource_icon);
        var map = TOOLS[prop];
        var info = map.biology_list[0];
        var total = map.biology_list.length; //战斗胜利移除

        if (map.map_status == 1) {
          TipBoxPrefab_icon.x = map.x;
          TipBoxPrefab_icon.y = map.y; //放在资源下面

          var image = info.picture;
          cc.loader.loadRes(image, cc.SpriteFrame, function (err, texture) {
            if (err) {
              // cc.error(err.message || err);
              return;
            }

            TipBoxPrefab_icon.getChildByName('生物').getComponent(cc.Sprite).spriteFrame = texture;
          });
          color = ['#FFFFFF', 'green', '#BDFF00', '#FFD100', '#FF0000', '#ffe000'];
          type_color = color[info['yiXing']]; // console.log(info)

          star = '';

          for (i = 0; i <= info['yiXing']; i++) {
            star += '⭐';
          }

          TipBoxPrefab_icon.getChildByName('名称').getComponent(cc.Label).string = info['name'] + '(' + total + ')';
          TipBoxPrefab_icon.getChildByName('名称').color = new cc.color(type_color);
          TipBoxPrefab_icon.getChildByName('等级').getComponent(cc.Label).string = 'Lv.' + info['grade'] + '(' + info['state_name']['name'] + ')';
          TipBoxPrefab_icon.getChildByName('等级').color = new cc.color(type_color);
          TipBoxPrefab_icon.getChildByName('星级').getComponent(cc.Label).string = star; //创建一个新button 并将其挂载到创建的精灵下

          _this.onConfirBtn(TipBoxPrefab_icon, map.map_int); //写入icon


          TipBoxPrefab_model.addChild(TipBoxPrefab_icon);
        }
      };

      for (var prop in info_list) {
        var color;
        var type_color;
        var star;
        var i;

        _loop();
      }
    });
    return TipBoxPrefab_model;
  },
  //按钮点击回调
  onConfirBtn: function onConfirBtn(TipBoxPrefab_icon, map_int) {
    TipBoxPrefab_icon.on('click', function () {
      //session设置战斗请求id
      cc.sys.localStorage.setItem('figthing_map_int', JSON.stringify(map_int));
      httpRequest.playGame(httpRequest.urlConfig("sence_zhandou"), 1);
    });
  }
});

cc._RF.pop();