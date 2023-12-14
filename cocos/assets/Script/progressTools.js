/*
 * @Author: sjeam
 * @Date: 2023-12-14 15:37:12
 * @Description: 
 */
// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        content: cc.Node,
        progress: cc.Prefab,
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
    // //加载预制资源 PrefabUrl为 预制资源在 资源中的路径
    // cc.loader.loadRes(PrefabUrl, function(errorMessage,loadedResource){});
    // //开始实例化预制资源(这是个实例化是我自己理解的，可能说的不正确)
    // var TipBoxPrefab = cc.instantiate(loadedResource);

    // //将预制资源添加到父节点CanvasNode为画布canvas节点 是用cc.find()获得的对象
    // CanvasNode.addChild(TipBoxPrefab);
    // update (dt) {},
    // 远程加载图片
    // cc.loader.load(umlP2, function (err, tex) {
    //     var spFrame = new cc.SpriteFrame();
    //     spFrame.setTexture(tex);
    //     cc.find("Canvas/londing/playerNode2/mask/playerphoto").
    //     getComponent(cc.Sprite).spriteFrame = spFrame;
    // });
 
});
