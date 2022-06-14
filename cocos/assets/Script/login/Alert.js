// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        gridLayout: cc.Node,
        toolPrefab: cc.Prefab
        // _alert:null, //提示框
        // _btnOK:null, //提示框确定按钮
        // _btnCancel:null, //提示框取消按钮
        // _title:null, //提示框标题
        // _content:null, //提示框内容
        // _btnOKCallback:null, //点击确定按钮的回调事件
        // mask:{
        //     type:cc.node,
        //     default:null
        // },
        // dlg:{
        //     type:cc.node,
        //     default:null
        // },
        // server:{
        //     type:cc.node,
        //     default:true
        // },

        // tips:{
        //     type:cc.node,
        //     default:true
        // },
        // gridLayout:{
        //     type:cc.node,
        //     default:true
        // },
        // toolPrefab:{
        //     type:cc.node,
        //     default:true
        // },
        // mask_opacity: 100,

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () { 
 
    },

    start () {
        // this.node.active =false;
    },
    spawnTools () {
        var HttpHelper = require("http"); 
        var httpRequest = new HttpHelper();
        httpRequest.httpPost('https://www.mheart.xyz/app/api-server/user-register', [], function (data) {
     
        //   for(let i = 0; i < data.server; i ++) {
        //     this.view[path + root.children[i].name] = root.children[i];
        //     this.load_all_object(root.children[i], path + root.children[i].name + "/");
        //     }
            console.log(this.gridLayout)
            let cellWidth = this.gridLayout.width * 0.105;
            let cellHeight = this.gridLayout.height * 0.215;
            let spacingX = this.gridLayout.width * 0.022;
            let spacingY = this.gridLayout.height * 0.045;

            this.gridLayout.getComponent(cc.Layout).cellSize.width = cellWidth;
            this.gridLayout.getComponent(cc.Layout).cellSize.height = cellHeight;
            this.gridLayout.getComponent(cc.Layout).spacingX = spacingX;
            this.gridLayout.getComponent(cc.Layout).spacingY = spacingY;
            // 根据TOOLS生成相应的道具
            this.toolsArray = [];
            let TOOLS = data.server;
            for (let i=0; i<data.server.length; i++) {
                let tool = cc.instantiate(this.toolPrefab);
                tool.getComponent('Tools').initInfo(TOOLS[i]);
                this.toolsArray.push(tool);
                this.gridLayout.addChild(tool);
            }
        })
    },


    show_dlg () {
        // 生成所有道具
        this.spawnTools();
        this.node.active =true;

        // this.mask,opacity = 0;
        // var ac1 =cc.fadeTo(0.3,this.mask_opacity);
        // this.mask.runAction(ac1);
        // this.dlg.scale =0;
        // var ac2 =cc.scaleTo(0.3,1).easing(cc.easeBackout());
        // this.dlg.runAction(ac2);

        // // 背包按钮
        // if (this.gridLayout.parent.active) {
        //     // 隐藏节点
        //     this.gridLayout.parent.active = false;

        //     // 删除所有道具(或者不删，只是隐藏，自己决定)
        //     this.toolsArray.forEach(element => {
        //         element.removeFromParent();
        //     });
        // }
        // else {
            // 显示节点
            // this.gridLayout.parent.active = true;

   
        // }
     
    },

    hidden_dlg () {
   
        // var ac1 =cc.fadeOut(0.3);
        // this.mask.runAction(ac1);

        // var ac2 =cc.scaleTo(0.3,0).easing(cc.easeBackIn());
        // this.dlg.runAction(ac2);

        this.node.active =false;
        // 请求更换 server

    },
    


});
