// require("../common"); 
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    //定义按钮事件类型 is_bag  0卸下 1装备
    async biology_init(TipBoxPrefab_icon){
        //加载背包 和  背包列表
       var biology_id =  http_globalData.biology[http_globalData.biology_id].id;
       //相同  卸下
       if(http_globalData.goodsid==http_globalData.goodsinfo.id){ var is_bag=0 }else{ var is_bag=1 }
        switch (http_globalData.button_name) {
            case ("装备1"):
                var goods_key ='gooduse1';
                await   httpRequestBagApi.http_update_goods(biology_id,goods_key,http_globalData.goodsinfo.id,is_bag)
                //1装备  0卸下
                this.goods_update(TipBoxPrefab_icon,goods_key,is_bag)
                break;
            case ("装备2"):
                var goods_key ='gooduse2';
                await  httpRequestBagApi.http_update_goods(biology_id,goods_key,http_globalData.goodsinfo.id,is_bag)
                this.goods_update(TipBoxPrefab_icon,goods_key,is_bag)
                break;
            case ("元神"):
                var goods_key ='yuanShen';
                await  httpRequestBagApi.http_update_goods(biology_id,goods_key,http_globalData.goodsinfo.id,is_bag)
                this.goods_update(TipBoxPrefab_icon,goods_key,is_bag)
                break;
            default:
        
        }

    },

    goods_update(TipBoxPrefab_icon,goods_key,is_bag){
        if(is_bag==1){
            this.zhuangbe_up(TipBoxPrefab_icon,goods_key)
        }else{
            this.zhuangbei_down(TipBoxPrefab_icon,goods_key)
        }
    },
    //图标回填
    biology_icon(TipBoxPrefab_biology,goodsid){
        if(goodsid){
            var goods_image = http_globalData.bag[goodsid].point
            TipBoxPrefab_biology.getComponent(cc.Sprite).spriteFrame = http_globalAsset.http_base_asset_zhuangbei[goods_image]
        }else{
            TipBoxPrefab_biology.getComponent(cc.Sprite).spriteFrame = ''; 
        }

    },
    //移除预制节点--选中的节点
    TipBoxPrefab_biology_detail_shown(){
        if(http_globalData.TipBoxPrefab_biology_detail){
            http_globalData.TipBoxPrefab_biology_detail.active =true;
        }
    },
    //隐藏
    TipBoxPrefab_biology_detail_hidden(){
        http_globalData.TipBoxPrefab_biology_detail = null
    },
    //选中节点
    TipBoxPrefab_biology_detail_make(TipBoxPrefab_icon){
        http_globalData.TipBoxPrefab_biology_detail = TipBoxPrefab_icon
    },
    zhuangbei_down(TipBoxPrefab_icon,goods_key){
        //移除预制节点
        this.TipBoxPrefab_biology_detail_hidden()
        // 移除装备栏--返回背包
        http_globalData.bag[http_globalData.goodsinfo.id].is_bag=0;
        TipBoxPrefab_icon.active=true //背包显示
        http_globalData.biology[http_globalData.biology_id][goods_key]=null; //装备栏不显示
         //icon显示     
        let TipBoxPrefab_biology = cc.find("生物详情/biology_end/"+http_globalData.button_name,http_globalAsset.TipBoxPrefab_model)
        this.biology_icon(TipBoxPrefab_biology,null)
        http_globalData.goodsid = ''            //如果使用就重新绑定
    },

    zhuangbe_up(TipBoxPrefab_icon,goods_key){
        // 添加到装备栏--移出背包
        //如果原来装备栏有--装备，难么要返回背包
        if(http_globalData.biology[http_globalData.biology_id][goods_key]){
            //返回背包
            http_globalData.bag[http_globalData.biology[http_globalData.biology_id][goods_key]].is_bag=0;
            this.TipBoxPrefab_biology_detail_shown()
        }else{
            this.TipBoxPrefab_biology_detail_make(TipBoxPrefab_icon)
        }
        //隐藏当前物品
        // cc.log(goodsid)
        http_globalData.bag[http_globalData.goodsinfo.id].is_bag=1;
        TipBoxPrefab_icon.active=false
        http_globalData.biology[http_globalData.biology_id][goods_key]=http_globalData.goodsinfo.id;
        //info icon显示
        let TipBoxPrefab_biology = cc.find("生物详情/biology_end/"+http_globalData.button_name,http_globalAsset.TipBoxPrefab_model)
        this.biology_icon(TipBoxPrefab_biology,http_globalData.goodsinfo.id)
        http_globalData.goodsid = http_globalData.goodsinfo.id    //如果使用就重新绑定
    },

 
});
