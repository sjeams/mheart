"use strict";
cc._RF.push(module, '3e2cd+1hUpPeoprtt7DBClW', 'home_map_detail');
// Script/场景/home_map_detail.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {} // LIFE-CYCLE CALLBACKS:
  // //技能图片渲染
  // async biology_detail_list(TipBoxPrefab_model,info_list){
  //     return new Promise(resolve => {
  //       var TOOLS =[];
  //       var TOOLS = info_list;
  //       //开始实例化预制资源
  //       for (var prop in info_list) {
  //           //声明节点对象
  //           let  TipBoxPrefab_icon =  cc.instantiate(http_globalAsset.model_fighting_map);
  //           let map = TOOLS[prop];
  //           let info = map.biology_list[0];
  //           let total = map.biology_list.length;
  //           //战斗胜利移除
  //           if(map.map_status==1){
  //               //设置距离
  //               TipBoxPrefab_icon.x=httpRequest.number_map_rand(map.x,100) //设置随x机偏移量0-49
  //               TipBoxPrefab_icon.y=httpRequest.number_map_rand(map.y,10)//设置随机y偏移量0-49
  //               //放在资源下面
  //               // let image = info.picture;
  //               TipBoxPrefab_icon.getChildByName('生物').getComponent(cc.Sprite).spriteFrame =   http_globalAsset.http_base_asset_biology[info.picture]
  //               var color = ['#FFFFFF','green','#BDFF00','#FFD100','#FF0000','#ffe000',];
  //               var type_color = color[info['yiXing']];
  //               // console.log(info)
  //               var star ='';    
  //               for(var i=0;i<=info['yiXing'];i++){
  //                   star +='⭐';
  //               }
  //               TipBoxPrefab_icon.getChildByName('名称').getComponent(cc.Label).string=info['name']+'('+total+')';
  //               TipBoxPrefab_icon.getChildByName('名称').color = new cc.color(type_color);
  //               TipBoxPrefab_icon.getChildByName('等级').getComponent(cc.Label).string='Lv.'+info['grade']+'('+info['state_name']['name']+')';
  //               TipBoxPrefab_icon.getChildByName('等级').color = new cc.color(type_color);
  //               TipBoxPrefab_icon.getChildByName('星级').getComponent(cc.Label).string= star;
  //               //创建一个新button 并将其挂载到创建的精灵下
  //               this.onConfirBtn(TipBoxPrefab_icon,map.map_int);
  //               //写入icon
  //               TipBoxPrefab_model.addChild(TipBoxPrefab_icon);
  //           }
  //       }
  //       resolve();
  //   })
  //     // return TipBoxPrefab_model
  // },
  // //按钮点击回调
  // onConfirBtn:function(TipBoxPrefab_icon,map_int){
  //     TipBoxPrefab_icon.on('click', function () {
  //         //session设置战斗请求id
  //         cc.sys.localStorage.setItem('figthing_map_int', JSON.stringify(map_int)); 
  //         // cc.log(333)
  //         httpRequest.playGame("sence_zhandou",1,1)
  //     })
  // },
  // update (dt) {},

});

cc._RF.pop();