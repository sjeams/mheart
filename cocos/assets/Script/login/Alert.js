var HttpHelper = require("../http"); 
var httpRequest = new HttpHelper();
cc.Class({
    extends: cc.Component,

    properties: {
        gridLayout: cc.Node,
        toolPrefab: cc.Prefab,
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
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad () { 
         // 生成所有道具
         this.spawnTools();   
    },

    start () {
        // this.node.active =false;
    },
    spawnTools () {
        var _this =this;
        var params = {
                'page': 1,
                'pageSize': 11,
        };
        httpRequest.httpPostLogin('/app/api-server/user-register', params, function (data) {
        //   console.log(data);
            // console.log(_this.gridLayout)
            // let cellWidth = _this.gridLayout.width * 0.105;
            // let cellHeight = _this.gridLayout.height * 0.215;
            // let spacingX = _this.gridLayout.width * 0.022;
            // let spacingY = _this.gridLayout.height * 0.045;
            let cellWidth = _this.gridLayout.width * 0.45;
            let cellHeight = _this.gridLayout.height * 0.15;
            let spacingX = _this.gridLayout.width * 0.08;
            let spacingY = _this.gridLayout.height * 0.05;
            
            _this.gridLayout.getComponent(cc.Layout).cellSize.width = cellWidth;
            _this.gridLayout.getComponent(cc.Layout).cellSize.height = cellHeight;
            _this.gridLayout.getComponent(cc.Layout).spacingX = spacingX;
            _this.gridLayout.getComponent(cc.Layout).spacingY = spacingY;
            // 根据TOOLS生成相应的道具
            _this.toolsArray = [];
            let TOOLS = data.data.server;
          
            for (let i=0; i<data.data.server.length; i++) {
                let tool = cc.instantiate(_this.toolPrefab);
                // console.log(TOOLS[i])
                // _this.gridLayout.addChild(tool);
                tool.getComponent('Tools').initInfo(TOOLS[i]);
                _this.toolsArray.push(tool);
                _this.gridLayout.addChild(tool);
                
            }
            // 定义content滚动条高度
            let scorllheight =  _this.gridLayout.parent;
            //计算滚动条高度
            let  height =  (cellHeight+spacingY)*( Math.ceil( data.data.server.length/2));
            // console.log(height);
            // scorllheight.designResolution  = new cc.Size(600, height);
            scorllheight.setContentSize(600,height);
        })
    },


    show_dlg () {
      

        this.node.active =true;
        //     // 删除所有道具(或者不删，只是隐藏，自己决定)
        //     this.toolsArray.forEach(element => {
        //         element.removeFromParent();
        //     });
     
    },

    hidden_dlg () {
        this.node.active =false;
        // 请求更换 server
    },
 


});
