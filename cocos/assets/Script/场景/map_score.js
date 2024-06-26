// require("../common"); 
cc.Class({
    extends: cc.Component,
    properties: {  
    },
    // LIFE-CYCLE CALLBACKS:

    async onLoad() {
      await httpRequestBagApi.http_music()
      //全局定义容器节点
      http_globalData.BoxPrefab_content= cc.find('Canvas/战斗/content')
      this.spawnTools()
        // this.scroll_view.node.on("scroll-ended", this.on_scroll_ended.bind(this), this);
    },
    spawnTools () {
      var _this =this;
      httpRequest.httpPost('/app/app-apiword/index',{}, function (data) {
          // _this.addMapPic(data) //生成地图
          if(!data.data){
              //刷新地图
              // httpRequest.playGame( "sence_ditu")
              _this.reloadWord()//刷新世界地图
          }else{
              //生成世界
              _this.addWordMap(data.data) //生成生物
          }
      })
    },
    // //生成地图
    // addMapPic(data){
    //     var _this = this;
    //     if(data.data['map_pic']){
    //       var  map_pic =data.data['map_pic'];
    //     }else{
    //       var  map_pic =data.data['picture'];
    //     }
    //     var remoteUrl = httpRequest.httpUrl(map_pic);
    //       cc.loader.load({ url: remoteUrl }, function (err, texture) {  
    //         if(texture!=null){
    //           _this.home.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(texture);
    //         }
    //     });
    // },

    //生成生物
    addWordMap(data){
        cc.log(data)
 
        cc.find('Canvas/当前世界').getComponent(cc.Label).string = data.name+'('+data.time+'年)' 
        cc.find('Canvas/流速').getComponent(cc.Label).string = '流速: '+data.time+'年/S' 
        cc.find('Canvas/类型').getComponent(cc.Label).string = '类型: '+data.type_name
        let info =data.user_in_word_map;

        //技能图标挂载
        var BoxPrefab =http_globalData.BoxPrefab_content
        BoxPrefab.getComponent('mapTools').biology_detail_list(BoxPrefab,info)
    },
    addTouchEvent(node_1) {
        node_1.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        node_1.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        node_1.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
    },
    reloadWord(){
      var _this =this;
      httpRequest.httpPost('/app/app-apiword/map-word',{}, function (data) {
        //移除节点
        httpRequestModel.removeBoxprefab()
        //写入地图数据
        _this.addWordMap(data.data)
        })
    },
    back_map(){
      //移除节点
      // var _this = this;
      httpRequestModel.removeBoxprefab()
      httpRequest.playGame("sence_zhutian")
    },

});
