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

    // onLoad () {},

    start () {

    },

    // update (dt) {},


    // loadnextScene: function() {
    //     // 登录预加载
    //     cc.director.preloadScene('login', function () {
    //         cc.log('登录预加载');
    //     });
    //     cc.director.loadScene('login');
    // },

    //登录
    诸天万界: function() {
    cc.director.loadScene('home/诸天万界');
    },

 
    创造生物: function() {
        cc.director.loadScene('home/创造生物');
    },

    //注册
    神魔炼狱: function() {
        cc.director.loadScene('home/神魔炼狱');
    },

    //大厅
    秘境探索: function() {
        cc.director.loadScene('home/秘境探索');
    },

    //奖励
    万古仙门: function() {
        cc.director.loadScene('home/万古仙门');
    },
   
    //充值
    天地熔炉: function() {
        cc.director.loadScene('home/天地熔炉');
    },

    //支付
    镇妖塔: function() {
        cc.director.loadScene('home/镇妖塔');
    },


});
