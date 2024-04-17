var HttpHelper = require("../http"); 
var httpRequest = new HttpHelper();
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

    // onLoad () {},

    start () {

    },

    //打开背包
    openBag() {

        cc.log(111)
        var _this=this;  
        var info =[]
        // _this.biology_detail_alert(info)
        //技能图标挂载
        var BoxPrefab = cc.find('Canvas/弹窗')
        BoxPrefab.getComponent('biology_bagTools').biology_detail_alert(BoxPrefab,info)
    },

  
    // update (dt) {},
});
