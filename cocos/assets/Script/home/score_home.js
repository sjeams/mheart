var HttpHelper = require("../http"); 
var httpRequest = new HttpHelper();
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        cc.globalData={}
        // var remoteUrl = httpRequest.httpUrlJson(figthing_remote_url);
        // cc.loader.load({ url: remoteUrl }, function (err, data) {
        this.brushBag();
    },

    start () {

    },
    //刷新背包--每次操作后需要刷新背包
    brushBag(){
        httpRequest.httpPost('/app/app-apinew/biology-list',{}, function (data) {
            //定义常量
            cc.globalData.biology = data.data;
            //开启战斗
          //   _this.goPlay( )
        });  
    },
    //打开背包
    openBag() {
        var  info =  cc.globalData.biology;
        if(info){
            //技能图标挂载
            var BoxPrefab = cc.find('Canvas/弹窗')
            BoxPrefab.getComponent('biology_bagTools').biology_detail_alert(BoxPrefab,info)
        }else{
        //如果没有生物需要弹窗另一个提示
        }
    },

    openBag_hidden(){
        // cc.find('Canvas/弹窗').active =false;
        cc.find('Canvas/弹窗').removeAllChildren();
    }
    // update (dt) {},
});