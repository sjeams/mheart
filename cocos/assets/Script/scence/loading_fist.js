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


    loadnextScene: function() {
        // 登录预加载
        cc.director.preloadScene('login', function () {
            cc.log('登录预加载');
        });
        cc.director.loadScene('login');
    },

    //登录
    login: function() {
    cc.director.loadScene('login');
    },

    //角色
    role: function() {
        cc.director.loadScene('role');
    },

    //注册
    register: function() {
        cc.director.loadScene('register');
    },

    //大厅
    home: function() {
        cc.director.loadScene('home');
    },

    //奖励
    jiangli: function() {
        cc.director.loadScene('jiangli');
    },
   
    //充值
    chongzhi: function() {
        cc.director.loadScene('chongzhi');
    },

    //支付
    zhifu: function() {
        cc.director.loadScene('zhifu');
    },


});
