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
        this.brushBag();
    },

    start () {

    },
    //刷新背包--每次操作后需要刷新背包
    brushBag(){
        //获取生物列表
        httpRequest.httpPost('/app/app-apinew/biology-list',{}, function (data) {
            //定义常量
            http_globalData.biology = data.data.biology;
            //当前弹出的预制节点--物品详情--装备-卸载
            http_globalData.TipBoxPrefab_biology_detail = null;
            //开启战斗
            http_globalData.bag = data.data.bag;  
            http_globalData.gooduse = data.data.gooduse;  //物品类型
            http_globalData.zhenfa = data.data.zhenfa.data;
            http_globalData.zhenfa_info = data.data.zhenfa.info;
            cc.log(http_globalData.zhenfa_info)
            // 临时字段
            // http_globalData.biology_id = 0;
            // http_globalData.zhenfa_id=0;
        })
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
        await httpRequestBagApi.http_update_zhenfa()
        // cc.find('Canvas/弹窗').removeAllChildren();
    }
    // update (dt) {},
});
