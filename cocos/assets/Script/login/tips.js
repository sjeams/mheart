// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        scorllview:cc.ScorllView
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
    // cc.loader.releaseRes("test assets/anim");
    onLoad () {
        var HttpHelper = require("http"); 
        var httpRequest = new HttpHelper();
        httpRequest.httpPost('https://www.mheart.xyz/app/api-server/user-tips', [], function (data) {
            var tips  =cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
            tips.getComponent(cc.Label).string=data.data['gonggao_sx'];
            
        })
    },
 
    start () {

    },
    gonggao_sz(){
        var HttpHelper = require("http"); 
        var httpRequest = new HttpHelper();
        httpRequest.httpPost('https://www.mheart.xyz/app/api-server/user-tips', [], function (data) {
            var tips  =cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
            tips.getComponent(cc.Label).string=data.data['gonggao_sz'];
        })
    },
    gonggao_sx(){
        var HttpHelper = require("http"); 
        var httpRequest = new HttpHelper();
        httpRequest.httpPost('https://www.mheart.xyz/app/api-server/user-tips', [], function (data) {
            var tips  =cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
            tips.getComponent(cc.Label).string=data.data['gonggao_sx'];
        })
    },
    gonggao_gx(){
        var HttpHelper = require("http"); 
        var httpRequest = new HttpHelper();
        httpRequest.httpPost('https://www.mheart.xyz/app/api-server/user-tips', [], function (data) {
            var tips  =cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
            tips.getComponent(cc.Label).string=data.data['gonggao_gx'];
        })
    },
    gonggao_lx(){
        var HttpHelper = require("http"); 
        var httpRequest = new HttpHelper();
        httpRequest.httpPost('https://www.mheart.xyz/app/api-server/user-tips', [], function (data) {
            var tips  =cc.find("Canvas/tips/gonggao_tips_scorllview/view/gonggao_tips");
            tips.getComponent(cc.Label).string=data.data['gonggao_lx'];
        })
    },
    show_dlg () {
        this.node.active =true;
    },
    hidden_dlg () {
        this.node.active =false;
    }
    // update (dt) {},
});
