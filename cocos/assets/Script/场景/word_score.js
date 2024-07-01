// require("../common"); 
cc.Class({
    extends: cc.Component,

    properties: {
    },
    async onLoad () {
      await httpRequestBagApi.http_music()
      await httpRequestAsset.http_base_asset();  // 引入 资源图片asset
      await httpRequestModel.http_base_model();  // 引入 战斗模型model
      http_globalData.BoxPrefab_content = cc.find('Canvas/大厅/content')
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
      httpRequestModel.removeBoxprefab()
      //技能图标挂载
      var BoxPrefab =http_globalData.BoxPrefab_content
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
        httpRequestModel.removeBoxprefab()
        _this.searchShow()
        httpRequest.httpPost('/app/app-apiword/out-word',{},function (data) {
          
        })
      },
    backHome(){
        //移除节点
        // var _this = this;
        httpRequestModel.removeBoxprefab()
        httpRequest.playGame("sence_dating")
    },
      searchShow(){
        cc.find("Canvas/大厅/探索世界").active = true;
        cc.find("Canvas/大厅/退出世界").active = false;
      },
      searchHidden(){
        cc.find("Canvas/大厅/探索世界").active = false;
        cc.find("Canvas/大厅/退出世界").active = true;
      },

});
