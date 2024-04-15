var HttpHelper = require("../http"); 
var httpRequest = new HttpHelper();
var params =[];
cc.Class({
    extends: cc.Component,

    properties: {
        // server_picture: cc.Node,
        // server_type: cc.Node,
        // server_name: cc.Node,
        // server_star: cc.Node,
        // server_shenMing: cc.Node,
        // server_moFa: cc.Node,
        // sprite_server_biology: cc.Button
    },

    // LIFE-CYCLE CALLBACKS:
    initInfo(info,biolgy_state,is_my) {
        // 初始化该道具相关信息
        // 图片
        var _this = this;
        if(info['picture']){
            var remoteUrl = httpRequest.httpUrl(info['picture']);
            // cc.loader.loadRes(httpRequest.httpUrl(info['picture']), cc.SpriteFrame, function (err, spriteFrame) {   
            //     console.log(_self)
            //     _self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame; 
            // });
            cc.loader.load({ url: remoteUrl }, function (err, texture) {  
                // _self.node.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture)
                // console.log(texture)
                if (err) {
                    // cc.error(err.message || err);
                    return;
                }
                if(texture){
                    _this.node.getChildByName('生物').getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
                    //销毁
                    // this.image.spriteFrame=null;
                }
            });
            if(is_my==0){
                //图片翻转
                this.node.getChildByName('生物').setScale(-1, 1);
            }
        }
            this.node.getChildByName('生物').color = new cc.color(info['color']); 
            this.node.getChildByName('生命s').getComponent(cc.Label).string= info['shengMing']
            this.node.getChildByName('魔法s').getComponent(cc.Label).string= info['moFa']
            this.node.getChildByName('生物名称s').getComponent(cc.Label).string= info['name'];
            this.node.getChildByName('生物等级s').getComponent(cc.Label).string= '等级'+info['grade']+'('+biolgy_state[info['state']]+')';
 
            //创建一个新button 并将其挂载到创建的精灵下
            this.bindClickEvent( this.node.getComponent(cc.Button), info);
    },
    // 绑定按钮事件
    bindClickEvent: function (button, index) {
        // console.log(index)
        var clickEventHandler = new cc.Component.EventHandler();
        //这个 node 节点是你的事件处理代码组件所属的节点
        clickEventHandler.target = this.node; 
        //这个是代码文件名
        clickEventHandler.component = "fightingTools";  // js脚本文件-绑定
        clickEventHandler.handler = "onConfirBtn";// js方法名称--绑定
        clickEventHandler.customEventData = index; // 回调内容
        button.clickEvents.push(clickEventHandler);
    },
    //按钮点击回调
    onConfirBtn:function(e,info){
        var _this=this;  
        // _this.biology_detail_alert(info)
        //技能图标挂载
        var BoxPrefab = cc.find('Canvas/弹窗')
        //图片直接传过去，不用再加载一次
        var biology_image =_this.node.getChildByName('生物').getComponent(cc.Sprite).spriteFrame;
        BoxPrefab.getComponent('biology_detailTools').biology_detail_alert(BoxPrefab,info,biology_image)
    },

   
});
