// require("../common"); 
cc.Class({
    extends: cc.Component,
    properties: {  
    },
    async onLoad() {
      //全局定义容器节点
      http_globalData.BoxPrefab_content= cc.find('Canvas/大厅/content')
      await httpRequestModel.model_back_button('sence_zhutian')//返回按钮
      await httpRequestBagApi.http_music()
      await httpRequestBagApi.http_user_word_index()
      await httpRequestModel.model_fighting_map();  // 引入 战斗模型model
      await this.spawnTools()
    },
    async spawnTools () {
        if(http_globalData.http_user_word_index){
        //生成世界
       await  this.addWordMap(http_globalData.http_user_word_index) //生成生物
        }else{
            //刷新地图
        await this.reloadWord()//刷新世界地图
        }
    },
    //生成生物
    async addWordMap(data){
        // cc.log(data)
        cc.find('Canvas/当前世界').getComponent(cc.Label).string = data.name+'('+data.time+'年)' 
        cc.find('Canvas/流速').getComponent(cc.Label).string = '流速: '+data.time+'年/S' 
        cc.find('Canvas/类型').getComponent(cc.Label).string = '类型: '+data.type_name
        let info =data.user_in_word_map;
        //技能图标挂载
        var BoxPrefab =http_globalData.BoxPrefab_content
        await  this.biology_detail_list(BoxPrefab,info)
        // await BoxPrefab.getComponent('home_map_detail').biology_detail_list(BoxPrefab,info)
    },
    addTouchEvent(node_1) {
        node_1.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        node_1.on(cc.Node.EventType.TOUCH_MOVE, this.touchMove, this);
        node_1.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);
    },
    async reloadWord(){
        var data= await httpRequestBagApi.http_user_word_new()
        //写入地图数据
        await this.addWordMap(data.data)

    },
    //技能图片渲染
    async biology_detail_list(TipBoxPrefab_model,info_list){
        return new Promise(resolve => {
        var TOOLS =[];
        var TOOLS = info_list;
        //开始实例化预制资源
        for (var prop in info_list) {
            //声明节点对象
            let  TipBoxPrefab_icon =  cc.instantiate(http_globalAsset.model_fighting_map);
            let map = TOOLS[prop];
            let info = map.biology_list[0];
            let total = map.biology_list.length;
            //战斗胜利移除
            if(map.map_status==1){
                //设置距离
                TipBoxPrefab_icon.x=httpRequest.number_map_rand(map.x,100) //设置随x机偏移量0-49
                TipBoxPrefab_icon.y=httpRequest.number_map_rand(map.y,10)//设置随机y偏移量0-49
                //放在资源下面
                // let image = info.picture;
                TipBoxPrefab_icon.getChildByName('生物').getComponent(cc.Sprite).spriteFrame =   http_globalAsset.http_base_asset_biology[info.picture]
                var color = ['#FFFFFF','green','#BDFF00','#FFD100','#FF0000','#ffe000',];
                var type_color = color[info['yiXing']];
                // console.log(info)
                var star ='';    
                for(var i=0;i<=info['yiXing'];i++){
                    star +='⭐';
                }
                TipBoxPrefab_icon.getChildByName('名称').getComponent(cc.Label).string=info['name']+'('+total+')';
                TipBoxPrefab_icon.getChildByName('名称').color = new cc.color(type_color);
                TipBoxPrefab_icon.getChildByName('等级').getComponent(cc.Label).string='Lv.'+info['grade']+'('+info['state_name']['name']+')';
                TipBoxPrefab_icon.getChildByName('等级').color = new cc.color(type_color);
                TipBoxPrefab_icon.getChildByName('星级').getComponent(cc.Label).string= star;
                //创建一个新button 并将其挂载到创建的精灵下
                this.onConfirBtn(TipBoxPrefab_icon,map.map_int);
                //写入icon
                TipBoxPrefab_model.addChild(TipBoxPrefab_icon);
            }
        }
        resolve();
    })
        // return TipBoxPrefab_model
    },
    //按钮点击回调
    onConfirBtn:function(TipBoxPrefab_icon,map_int){
        TipBoxPrefab_icon.on('click', function () {
            //session设置战斗请求id
            cc.sys.localStorage.setItem('figthing_map_int', JSON.stringify(map_int)); 
            // cc.log(333)
            httpRequest.playGame("sence_zhandou",1,1)
        })
    },
});
