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

    start() {
        // this.updateCanvasSize();
        // cc.view.setResizeCallback(() => {
        //     this.updateCanvasSize();
        // })
    },

    // 自由切换横竖屏，动态设置设计分辨率和适配模式。
    // updateCanvasSize() {
    //     let size = cc.view.getFrameSize();
    //     if (size.width > size.height) {
    //         this.canvas.fitWidth = false;
    //         this.canvas.fitHeight = true;
    //         this.canvas.designResolution = cc.size(1920, 1080);
    //         this.showLandscape();
    //     } else {
    //         this.canvas.fitWidth = true;
    //         this.canvas.fitHeight = false;
    //         this.canvas.designResolution = cc.size(1080, 1920);
    //         this.showPortait();
    //     }
    // },

    // update (dt) {},
});
