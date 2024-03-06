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
      httpRequest.playGame(httpRequest.urlConfig("sence_zhandou"));
    },
    back_home(){
      httpRequest.playGame(httpRequest.urlConfig("sence_dating"));
    },
 

});
