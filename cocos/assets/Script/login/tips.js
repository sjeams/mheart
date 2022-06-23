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

    onLoad () {
        var _this =this;
        var HttpHelper = require("http"); 
        var httpRequest = new HttpHelper();
        var params = {
 
        };
        httpRequest.httpPost('https://www.mheart.xyz/app/api-server/user-tips', params, function (data) {
            var tips = data.data;
        })
    },

    start () {

    },

    gonggao_sz(){
        console.log(tips);
    },
    gonggao_sx(){

    },
    gonggao_gx(){

    },
    gonggao_lx(){

    },
    // update (dt) {},
});
