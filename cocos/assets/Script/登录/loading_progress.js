// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
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
