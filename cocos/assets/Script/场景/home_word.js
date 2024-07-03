// require("../common"); 
cc.Class({
    extends: cc.Component,

    properties: {
    },
    async onLoad () {
      await httpRequestModel.model_back_button('sence_dating')//返回按钮
      await httpRequestBagApi.http_music()
      await httpRequestModel.model_fighting_word();  // 引入 战斗模型model
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
      // BoxPrefab.getComponent('wordTools').biology_detail_list(BoxPrefab,info)
      this.biology_detail_list(BoxPrefab,info)
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
    //技能图片渲染
    biology_detail_list(TipBoxPrefab_model,info_list){
        var _this =this;
        var TOOLS =[];
        var TOOLS = info_list;
        //开始实例化预制资源
        for (var prop in info_list) {
            //声明节点对象
            let TipBoxPrefab_icon =  cc.instantiate(http_globalAsset.model_fighting_word);
            let info = TOOLS[prop];
            //放在资源下面
            let image = info.picture;
            TipBoxPrefab_icon.getChildByName('世界').getComponent(cc.Sprite).spriteFrame = http_globalAsset.http_base_asset_word[image]; 
            var color = ['#ffffff','green','#BDFF00','#FFD100','#FF0000','#ffe000',];
            var type_color = color[info['type']];
            // console.log(info)
            var star ='';    
            for(var i=0;i<=info['star'];i++){
                star +='⭐';
            }
            TipBoxPrefab_icon.getChildByName('名称').getComponent(cc.Label).string=info.name;
            TipBoxPrefab_icon.getChildByName('名称').color = new cc.color(type_color);
            TipBoxPrefab_icon.getChildByName('世界等级').getComponent(cc.Label).string= info.type_name;
            TipBoxPrefab_icon.getChildByName('世界等级').color = new cc.color(type_color);
            TipBoxPrefab_icon.getChildByName('星级').getComponent(cc.Label).string= star;
            //创建一个新button 并将其挂载到创建的精灵下
            _this.onConfirBtn(TipBoxPrefab_icon,info);
            //写入icon
            TipBoxPrefab_model.addChild(TipBoxPrefab_icon);
        }
        return TipBoxPrefab_model
    },
    //按钮点击回调
    onConfirBtn:function(TipBoxPrefab_icon,info){
        var _this =this;
        TipBoxPrefab_icon.on('click', function () {
            httpRequest.httpPost('/app/app-apiword/in-word', {
                'wordid': info.id,
                'star': info.star,
            }, function (data) {
                //跳转到世界
                httpRequest.playGame("sence_ditu")
            })
        })
    },
});
