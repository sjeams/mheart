// Learn cc.Class:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/class.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://docs.cocos2d-x.org/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] https://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

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
        // this.loadingBackground();
    },

    start () {

    },

    // update (dt) {},

    loadingBackground: function(){
                        // 下载资源包
            // 远程 url 带图片后缀名
            var remoteUrl = "http://127.0.0.1/ceshi.php?url=http://www.monster.com/app/loading/loading.jpg";
            var self = this;
            // cc.loader.load(remoteUrl, function (err, texture) {
            cc.loader.load({ url: remoteUrl, type: 'jpg' }, function (err, texture) {  
            
                //   直接释放某个贴图
                // cc.loader.release(texture);
                // // 释放一个 prefab 以及所有它依赖的资源
                // var deps = cc.loader.getDependsRecursively('url_photo');
                // cc.loader.release(deps);
                // // 如果在这个 prefab 中有一些和场景其他部分共享的资源，你不希望它们被释放，有两种方法：
                // // 1. 显式声明禁止某个资源的自动释放
                // cc.loader.setAutoRelease(this.background, false);
                // // 2. 将这个资源从依赖列表中删除
                // var deps = cc.loader.getDependsRecursively('url_photo');
                // var index = deps.indexOf(this.background);
                // if (index !== -1)
                //     deps.splice(index, 1);
                // cc.loader.release(deps);

                // this.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture)
                //  // 改用 cc.url.raw，此时需要声明 resources 目录和文件后缀名
                // //  var realUrl = cc.url.raw("loading");
                // //  var texture = cc.textureCache.addImage(realUrl);
                // console.log( texture);    







            self.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture)
            // self.node.spriteFrame.setTexture(texture.url);
            // self.node.spriteFrame.setContentSize(res.getContentSize());


            });
    }
});
