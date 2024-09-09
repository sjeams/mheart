// 进度条
cc.Class({
    extends: cc.Component,

    properties: {
    },
    // LIFE-CYCLE CALLBACKS:
    async onLoad () {
        await httpRequestBagApi.http_music()
        // if(http_globalAsset.http_base_asset_num==http_globalAsset.loading_asset.length-1){
        //     httpRequest.playGame("sence_login",0,1)
        // }
        httpRequest.playGame("sence_login",0,1)
        // httpRequest.playGame("sence_login",0,1)
    },
    start () {

    },
    // update (dt) {},
});
