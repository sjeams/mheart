/*
 * @Author: sjeam
 * @Date: 2024-01-05 16:13:51
 * @Description: 
 */
// 世界操作  
var HttpHelper = require("../http"); 
var httpRequest = new HttpHelper();
var params =[];
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
    
    reloadWord(){
      var _this =this;
      httpRequest.httpPost('/app/app-apiword/map-word', params, function (data) {
        //写入地图数据
        _this.addWordMap(data)
        })
    },
    back_map(){
      //销毁动态合图
      // cc.dynamicAtlasManager.reset()
      httpRequest.playGame(httpRequest.urlConfig("sence_ditu"));
    },
    back_reload(){
      // this.parent.active=false
      // httpRequest.playGame(httpRequest.urlConfig("sence_zhandou"));
      // cc.find('Canvas/重播').click()
      // cc.find('Canvas/重播', this.node).on('touchstart', this.onButtonClick, this);
      //这个 node 节点是你的事件处理代码组件所属的节点
 
      // var clickEventHandler = new cc.Component.EventHandler();
      // //这个 node 节点是你的事件处理代码组件所属的节点
      // clickEventHandler.target =  cc.find('Canvas/重播'); 
      // //这个是代码文件名
      // clickEventHandler.component = "CircleBoard";
      // clickEventHandler.handler = "callback";
      // // clickEventHandler.customEventData = index;
      // button.clickEvents.push(clickEventHandler);
 
    },
 
       

    back_home(){
      httpRequest.playGame(httpRequest.urlConfig("sence_dating"));
    },
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








//游戏背包  点击事件
// initBoard: function () {
//   for (let i = 0; i < this.node.children.length; i++) {
//       let node = this.node.children[I];
//       this.bindClickEvent(node.getComponent(cc.Button), i);
//   }
// },

// bindClickEvent: function (button, index) {
//   var clickEventHandler = new cc.Component.EventHandler();
//   //这个 node 节点是你的事件处理代码组件所属的节点
//   clickEventHandler.target = this.node; 
//   //这个是代码文件名
//   clickEventHandler.component = "CircleBoard";
//   clickEventHandler.handler = "callback";
//   clickEventHandler.customEventData = index;
//   button.clickEvents.push(clickEventHandler);
// },

// //点击事件回调 target ==》node， customEventData ==》 index
// callback: function (target, customEventData) {
//   this.nodeList[customEventData].getComponent("Circle").updateCircle();
// },