// 世界操作  
var HttpHelper = require("../http"); 
var httpRequest = new HttpHelper();
cc.Class({
    extends: cc.Component,

    properties: {
    },
    onLoad: function () {
      cc.sys.BoxPrefab= cc.find('Canvas/大厅/content')
      this.spawnTools()
    },
    spawnTools () {
      var _this =this;
      httpRequest.httpPost('/app/app-apiword/index',{}, function (data) {
          if(data.data){
            _this.searchHidden()
            var TOOLS = [data.data];
            var total = 1;
            _this.showWord(TOOLS,total)
          }else{
            _this.searchShow()
          }
      })
    },
    showWord(info,total){
      var _this =this;
      //移除节点
      _this.removeBoxprefab()
      //技能图标挂载
      var BoxPrefab =cc.sys.BoxPrefab
      BoxPrefab.getComponent('wordTools').biology_detail_list(BoxPrefab,info)
    },
    addWord(){
      var _this =this;
      httpRequest.httpPost('/app/app-apiword/rand-word',{},function (data) {
        var TOOLS = data.data;
        var total = data.data.length;
        _this.showWord(TOOLS,total)
      })
    },

    addTouchEvent(node_1) {
        node_1.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        node_1.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        node_1.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
      },

    outWord(){
        //移除节点
        var _this = this;
        _this.removeBoxprefab()
        _this.searchShow()
        httpRequest.httpPost('/app/app-apiword/out-word',{},function (data) {
          
        })
      },
      backHome(){
        //移除节点
        var _this = this;
        _this.removeBoxprefab()
        httpRequest.playGame(httpRequest.urlConfig("sence_dating"));
    },
      searchShow(){
        cc.find("Canvas/大厅/探索世界").active = true;
        cc.find("Canvas/大厅/退出世界").active = false;
      },
      searchHidden(){
        cc.find("Canvas/大厅/探索世界").active = false;
        cc.find("Canvas/大厅/退出世界").active = true;
      },
    //移除容器
    removeBoxprefab(){
      cc.sys.BoxPrefab.removeAllChildren();
      cc.sys.BoxPrefab.destroyAllChildren();
    }
});
