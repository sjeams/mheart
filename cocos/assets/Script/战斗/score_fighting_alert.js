// require("../common"); 
cc.Class({
    extends: cc.Component,
 
    properties: {
      // 根据TOOLS生成相应的道具
      toolsArray:[],
   
    },
    init(){
      cc.director.getScene();//获取当前场景
    },
    // LIFE-CYCLE CALLBACKS:
    onLoad () {
      // this.spawnTools()
      
    },
    start () {
    },
    update (dt) {
      // console.log(3333)
    },
    
    // reloadWord(){
    //   var _this =this;
    //   httpRequest.httpPost('/app/app-apiword/map-word', {}, function (data) {
    //     //写入地图数据
    //     _this.addWordMap(data)
    //     })
    // },
    back_map(){
      //销毁动态合图
      // cc.dynamicAtlasManager.reset()
      // var _this = cc.find('Canvas/大厅/content').getComponent('score_fighting')
      httpRequestModel.removeBoxprefab()
      httpRequest.playGame("sence_ditu")
    },
    back_reload(){
      httpRequestModel.removeBoxprefab()
      var _this = cc.find('Canvas/大厅/content').getComponent('score_fighting')
      _this.playTask( )
      cc.find('Canvas/结算').active =false;// 结束弹窗结果
    }, 
    
    async button_beishu(){
      // var beisu_arr =[1,2,3,4,8];
      if(http_globalData.user_info.beishu<4){
        http_globalData.user_info.beishu = parseInt(http_globalData.user_info.beishu)+1
      }else{
        http_globalData.user_info.beishu=1
      }
      //修改倍数
      await httpRequestBagApi.http_user_beishu_update()
      // http_globalData.user_info.beishu
      cc.find('Canvas/倍数/倍数s').getComponent(cc.Label).string = http_globalData.user_info.beishu;
    },
    // back_home(){
    //   httpRequest.playGame("sence_dating")
    // },
    //跳过回合
    back_time_show(){ 
      // this.unscheduleAllCallbacks();//停止某组件的所有计时器
      cc.find('Canvas/结算').active =true;
    },
    back_time_hidden(){
      cc.find('Canvas/结算').active =false;
    },
    show_dlg () {
        this.node.active =true;
    },

    hidden_dlg () {
        this.node.active =false;
        
    },
    remove_alert(){
      // 销毁所有弹窗
      cc.find('Canvas/弹窗').removeAllChildren();
      // cc.find('Canvas/弹窗').destroyAllChildren();
    },

    remove_skill(){
      // 销毁所有弹窗
      this.node.getChildByName('技能描述').removeAllChildren();
      // cc.find('Canvas/弹窗').destroyAllChildren();
    }
});
