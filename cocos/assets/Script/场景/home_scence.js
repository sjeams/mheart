require("../common"); 
cc.Class({

     extends: cc.Component,

     properties: {

     },
   async  onLoad () {
          // 常驻节点
          // cc.game.addPersistRootNode( myNode)
          // cc.game.removePersistRootNode( myNode)
         //获取生物列表--实例化用户登录信息
         await httpRequestBagApi.http_music()
         await httpRequestBagApi.http_user_info()
         await httpRequestBagApi.http_bag_info()
     },

     start () {

     },
     ProgressBar(){

     },
     // update (dt) {},
     //大厅
     go_sence_dating: function() {
          httpRequest.playGame("sence_dating");
     },
     //诸天万界
     go_sence_zhutian: function() {
          httpRequest.playGame("sence_zhutian");
     },
     // 创造生物
     go_go_sence_chuangzao: function() {
          httpRequest.playGame("sence_chuangzao");
     },
     //神魔炼狱
     go_sence_shenmo: function() {
          httpRequest.playGame("sence_shenmo");
     },

     //秘境探索
     go_sence_mijing: function() {
          httpRequest.playGame("sence_mijing");
     },

     //万古仙门
     go_sence_wangu: function() {
          httpRequest.playGame("sence_wangu");
     },

     //天地熔炉
     go_sence_tiandi: function() {
     httpRequest.playGame("sence_tiandi");
     },
     //镇妖塔
     go_sence_zhenyaota: function() {
          httpRequest.playGame("sence_shenmo");
     },
    //诸天地图
     go_sence_ditu: function() {
          httpRequest.playGame("sence_ditu");
     },
    //战斗场景
     go_sence_zhandou: function() {
          httpRequest.playGame("sence_zhandou",1,1); //启用进度条
     },
});
