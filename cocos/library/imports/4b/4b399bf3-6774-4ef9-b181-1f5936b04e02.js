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
    var TOOLS = info_list; // var TipBoxPrefab_icon=[];
    // let image = '/技能图标/'+skill.image;
    //加载预制资源 PrefabUrl为 预制资源在 资源中的路径

    cc.loader.loadRes('/fighting/sprite_地图', function (errorMessage, loadedResource_icon) {
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
        var info = TOOLS[prop].biology_list[0];
        var total = TOOLS[prop].biology_list.length; //战斗胜利移除

        if (map.map_status == 1) {
          TipBoxPrefab_icon.x = map.x;
          TipBoxPrefab_icon.y = map.y; // TipBoxPrefab_icon.setPosition(map.x,map.y);  
          //载入技能图片
          // let image =  httpRequest.httpUrl(info.picture);
          // if(image){
          //     cc.loader.load({ url: image }, function (err, texture) {  
          //     // cc.loader.loadRes(image, cc.SpriteFrame, function (err, texture) { 
          //         if (err) {
          //             return;
          //         }
          //         // TipBoxPrefab_icon.getChildByName('P头像').getComponent(cc.Sprite).spriteFrame = texture; 
          //         TipBoxPrefab_icon.getChildByName('生物').getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
          //     });
          // }else{
          //     TipBoxPrefab_icon.getChildByName('P头像').getComponent(cc.Sprite).spriteFrame = false; 
          // }
          //放在资源下面

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
  // initInfo (info_list) {
  //     // console.log(info_list)
  //     var info=info_list['biology_list'][0];
  //     var total =info_list['biology_list'].length;
  //     // 初始化该道具相关信息
  //     // 图片
  //     var _this = this;
  //     if(info['picture']){
  //         var remoteUrl = httpRequest.httpUrl(info['picture']);
  //         // cc.loader.loadRes(httpRequest.httpUrl(info['picture']), cc.SpriteFrame, function (err, spriteFrame) {   
  //         //     console.log(_self)
  //         //     _self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame; 
  //         // });
  //         cc.loader.load({ url: remoteUrl }, function (err, texture) {  
  //             // _self.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture)
  //             if (err) {
  //                 // cc.error(err.message || err);
  //                 return;
  //             }
  //             if(texture){
  //                 _this.node.getChildByName('生物').getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
  //             }
  //         });
  //     }
  //     // this.server_type.getComponent(cc.Label).string=info['type'];
  //     // if(info['type']==1){
  //     //     this.server_type.getComponent(cc.Label).string='空闲';
  //     //     this.node.getChildByName('server_type').color = new cc.color('green');
  //     // }else if(info['num']<500&&info['num']>=100){
  //     //     this.server_type.getComponent(cc.Label).string='流畅';
  //     //     this.node.getChildByName('server_type').color = new cc.color('#BDFF00');
  //     // }else if(info['num']<1000&&info['num']>=500){
  //     //     this.server_type.getComponent(cc.Label).string='拥挤';
  //     //     this.node.getChildByName('server_type').color = new cc.color('#FFD100');
  //     // }else{
  //     //     this.server_type.getComponent(cc.Label).string='爆满';
  //     //     this.node.getChildByName('server_type').color = new cc.color('#FF0000'); 
  //     // }
  //     var color = ['#FFFFFF','green','#BDFF00','#FFD100','#FF0000','#ffe000',];
  //     var type_color = color[info['yiXing']];
  //     // console.log(info)
  //     var star ='';    
  //     for(var i=0;i<=info['yiXing'];i++){
  //         star +='⭐';
  //     }
  //     this.node.getChildByName('名称').getComponent(cc.Label).string=info['name']+'('+total+')';
  //     this.node.getChildByName('名称').color = new cc.color(type_color);
  //     this.node.getChildByName('等级').getComponent(cc.Label).string='Lv.'+info['grade']+'('+info['state_name']['name']+')';
  //     this.node.getChildByName('等级').color = new cc.color(type_color);
  //     this.node.getChildByName('星级').getComponent(cc.Label).string= star;
  //     //创建一个新button 并将其挂载到创建的精灵下
  //     this.bindClickEvent( this.node.getComponent(cc.Button),info_list.map_int);
  // },
  // // 绑定按钮事件
  // bindClickEvent: function (button, index) {
  //     // console.log(index)
  //     var clickEventHandler = new cc.Component.EventHandler();
  //     //这个 node 节点是你的事件处理代码组件所属的节点
  //     clickEventHandler.target = this.node; 
  //     //这个是代码文件名
  //     clickEventHandler.component = "mapTools";  // js脚本文件-绑定
  //     clickEventHandler.handler = "onConfirBtn";// js方法名称--绑定
  //     clickEventHandler.customEventData = index; // 回调内容
  //     button.clickEvents.push(clickEventHandler);
  // },
  //按钮点击回调
  onConfirBtn: function onConfirBtn(TipBoxPrefab_icon, map_int) {
    TipBoxPrefab_icon.on('click', function () {
      //session设置战斗请求id
      cc.sys.localStorage.setItem('figthing_map_int', JSON.stringify(map_int));
      httpRequest.playGame(httpRequest.urlConfig("sence_zhandou"), 1);
    }); // console.log(info)
    // var HttpHelper = require("../http"); 
    // var httpRequest = new HttpHelper();
    // httpRequest.httpPost('/app/app-apiword/in-word', {
    //     'id': info['id'],
    //     'star': info['star'],
    //     'token': null
    // }, function (data) {
    //     //跳转到世界
    //     // cc.director.loadScene('战斗场景');
    //     cc.sys.localStorage.setItem('figthing', JSON.stringify(info)); 
    //     // console.log(data);
    //     // var server_choes_label  =cc.find("Canvas/server/server_choes/server_choes_label");
    //     // server_choes_label.getComponent(cc.Label).string=info['name'];
    //     // var server_choes_type  =cc.find("Canvas/server/server_choes/server_choes_type");
    //     // server_choes_type.getComponent(cc.Label).string=info['type'];
    //     // server_choes_type.color = new cc.color(info['color']); 
    // })
    // var mask =cc.find("Canvas/mask");
    // mask.active=false
    // var mask =  this.node.getChildByName('mask')
    // console.log(this.node.getSiblingIndex())
    // console.log( this.node.parent.getComponent(cc.Button));
    // this.node.getChildByName("sprite_server_login").on('click',function(event){
    //     console.log("点击到按钮");
    //     callback();
    // },this);
    // this.node.active =false; // 直接去掉模型节点
  }
});

cc._RF.pop();