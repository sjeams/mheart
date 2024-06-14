require("../common"); 
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        // cc.log(http_globalData.playerName)
        //大厅需要加载的全局变量
        // http_globalData={}
        // var remoteUrl = httpRequest.httpUrlJson(figthing_remote_url);
        // cc.loader.load({ url: remoteUrl }, function (err, data) {
        // this.brushBag();
        // var _urls ='/app_resources/loading/武侠.mp3';
        // var new_url = httpRequest.httpUrl(new_url);
        // cc.audioEngine.playMusic(cc.url.raw(_urls), true);

        // cc.audioEngine.play(_urls, false, 1);  
    },

    start () {

    },
    //刷新背包--每次操作后需要刷新背包
    brushBag(){
        //获取生物列表--实例化背包信息
        httpRequestBagApi.http_bag_info()
    },
    //打开背包
    openBag() {
        if(http_globalData.biology&&http_globalData.zhenfa&&http_globalData.bag){
            //技能图标挂载
            var BoxPrefab = cc.find('Canvas/弹窗')
            // 销毁所有弹窗
            BoxPrefab.removeAllChildren();
            cc.loader.loadRes('/model背包/A生物背包', function(errorMessage,loadedResource){
                //检查资源加载
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                if( !(loadedResource instanceof cc.Prefab ) ) { cc.log( '你载入的不是预制资源!' ); return; }
                //开始实例化预制资源
                var TipBoxPrefab = cc.instantiate(loadedResource);
                TipBoxPrefab.getComponent('biology_bagTools').biology_detail_alert(BoxPrefab,TipBoxPrefab)
            })
            // BoxPrefab.getComponent('biology_bagTools').biology_detail_alert(BoxPrefab,info)
        }else{
        //如果没有生物需要弹窗另一个提示
        }
    },

    //打开阵法
    openZhenfa() {
        if(http_globalData.biology&&http_globalData.zhenfa&&http_globalData.bag){
            //技能图标挂载
            var BoxPrefab = cc.find('Canvas/弹窗')
            // 销毁所有弹窗
            BoxPrefab.removeAllChildren();
            cc.loader.loadRes('/model布阵/A生物布阵', function(errorMessage,loadedResource){
                //检查资源加载
                if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                if( !(loadedResource instanceof cc.Prefab ) ) { cc.log( '你载入的不是预制资源!' ); return; }
                //开始实例化预制资源
                var TipBoxPrefab = cc.instantiate(loadedResource);
                TipBoxPrefab.getComponent('bag_zhenfaTools').biology_detail_alert(BoxPrefab,TipBoxPrefab)
            })
            // BoxPrefab.getComponent('biology_bagTools').biology_detail_alert(BoxPrefab,info)
        }else{
        //如果没有生物需要弹窗另一个提示
        }
    },
    //没有处理逻辑，可以共用--关闭窗口
    openBag_hidden(){
        // cc.find('Canvas/弹窗').active =false;
        cc.find('Canvas/弹窗').removeAllChildren();
    },
    //阵法 关闭 提交结果，需要单独处理了
    async openzhenfa_hidden(){
        // cc.log(http_globalData.zhenfa)   
        await  httpRequestBagApi.http_update_zhenfa()
        // cc.find('Canvas/弹窗').removeAllChildren();
    }
    // update (dt) {},
});
