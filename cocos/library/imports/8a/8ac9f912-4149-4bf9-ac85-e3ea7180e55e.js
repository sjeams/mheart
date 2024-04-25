"use strict";
cc._RF.push(module, '8ac9fkSQUlL+ayF4+pxgOVe', 'fightingTools');
// Script/fighting/fightingTools.js

"use strict";

var HttpHelper = require("../http");

var httpRequest = new HttpHelper();
var params = [];
cc.Class({
  "extends": cc.Component,
  properties: {// server_picture: cc.Node,
    // server_type: cc.Node,
    // server_name: cc.Node,
    // server_star: cc.Node,
    // server_shenMing: cc.Node,
    // server_moFa: cc.Node,
    // sprite_server_biology: cc.Button
  },
  // //生成生物
  // init_postion(postion,biolgy_state,int_px,is_my,star){
  //     var _this = this;
  //     var TOOLS =[];
  //     var TOOLS = postion;
  //     var total = postion.length;
  //     // const maps = new Map();
  //     //添加节点
  //     for (let i=0; i<total; i++) {    
  //         //死亡移除map_status
  //         var map = TOOLS[i];
  //         // console.log(map) 
  //         if(map.biology.length!=0){
  //           star++;
  //           var tool = cc.instantiate(_this.person);
  //           tool.getComponent('fightingTools').initInfo(map.biology,biolgy_state,is_my);
  //           tool.x=parseInt(map.x+int_px)
  //           tool.getChildByName('阵法s').getComponent(cc.Label).string= star-1;
  //           tool.y=map.y
  //           tool.is_my=is_my//阵容
  //           tool.jing_bi=map.biology.jingBi//金币
  //           tool.biology_int=star//阵法编号
  //           tool.shengMing=map.biology.shengMing
  //           tool.moFa=map.biology.moFa
  //           tool.biology=map.biology.id
  //           tool.biology_name=map.biology.name
  //           _this.toolsArray.push(tool);
  //           cc.sys.fightingArray[map.biology.id]=tool;
  //         //   _this.fightingArray[map.biology.id]=tool;
  //         //永久重复移动
  //           // var randomNumup = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  //           // var randomNumdown = Math.floor(Math.random() * (5 - 1 + 1)) + 1;
  //           // var seq = cc.repeatForever(
  //           //   cc.sequence(
  //           //       cc.moveBy(randomNumup, 0,5),
  //           //       // cc.scaleTo(randomNumup, 1, 1.05),
  //           //       // cc.scaleTo(randomNumdown, 1.05,1),
  //           //       cc.moveBy(randomNumdown, 0,-5)
  //           //   ));
  //           // tool.runAction(seq);
  //            cc.find('Canvas/大厅/content').addChild(tool); 
  //         }
  //     }
  //     return star;
  // },
  //生成生物
  biology_detail_list: function biology_detail_list(TipBoxPrefab_model, info_list, biolgy_state, is_my, star) {
    var _this = this;

    var TOOLS = [];
    var TOOLS = info_list; // let image = '/技能图标/'+skill.image;
    //加载预制资源 PrefabUrl为 预制资源在 资源中的路径

    cc.loader.loadRes('/model战斗/biology_生物详情', function (errorMessage, loadedResource_icon) {
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
        var info = map.biology;

        if (info.length != 0) {
          //放在资源下面
          var image = info.picture;
          cc.loader.loadRes(image, cc.SpriteFrame, function (err, texture) {
            if (err) {
              // cc.error(err.message || err);
              return;
            }

            TipBoxPrefab_icon.getChildByName('生物').getComponent(cc.Sprite).spriteFrame = texture;
          });

          if (is_my == 0) {
            //图片翻转
            TipBoxPrefab_icon.getChildByName('生物').setScale(-1, 1);
          }

          TipBoxPrefab_icon.getChildByName('生物').color = new cc.color(info.color);
          TipBoxPrefab_icon.getChildByName('生命s').getComponent(cc.Label).string = info.shengMing;
          TipBoxPrefab_icon.getChildByName('魔法s').getComponent(cc.Label).string = info.moFa;
          TipBoxPrefab_icon.getChildByName('生物名称s').getComponent(cc.Label).string = info.name;
          TipBoxPrefab_icon.getChildByName('生物等级s').getComponent(cc.Label).string = '等级' + info.grade + '(' + biolgy_state[info.state] + ')'; //创建一个新button 并将其挂载到创建的精灵下

          _this.onConfirBtn(TipBoxPrefab_icon, info); //写入icon


          TipBoxPrefab_icon.x = parseInt(map.x);
          TipBoxPrefab_icon.getChildByName('阵法s').getComponent(cc.Label).string = star - 1;
          TipBoxPrefab_icon.y = map.y;
          TipBoxPrefab_icon.is_my = is_my; //阵容

          TipBoxPrefab_icon.jing_bi = map.biology.jingBi; //金币

          TipBoxPrefab_icon.biology_int = star; //阵法编号

          TipBoxPrefab_icon.shengMing = map.biology.shengMing;
          TipBoxPrefab_icon.moFa = map.biology.moFa;
          TipBoxPrefab_icon.biology = map.biology.id;
          TipBoxPrefab_icon.biology_name = map.biology.name;
          cc.sys.toolsArray.push(TipBoxPrefab_icon);
          cc.sys.fightingArray[map.biology.id] = TipBoxPrefab_icon;
          TipBoxPrefab_model.addChild(TipBoxPrefab_icon);
        }
      };

      for (var prop in info_list) {
        _loop();
      }
    });
    return TipBoxPrefab_model;
  },
  //按钮点击回调
  onConfirBtn: function onConfirBtn(TipBoxPrefab_icon, info) {
    var _this = this;

    TipBoxPrefab_icon.on('click', function () {
      //技能图标挂载
      var alertBoxPrefab = cc.find('Canvas/弹窗'); //图片直接传过去，不用再加载一次

      var biology_image = TipBoxPrefab_icon.getChildByName('生物').getComponent(cc.Sprite).spriteFrame;
      alertBoxPrefab.getComponent('biology_detailTools').biology_detail_alert(alertBoxPrefab, info, biology_image);
    });
  }
});

cc._RF.pop();