var HttpHelper = require("../http"); 
var httpRequest = new HttpHelper();
cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
     //技能图片渲染
     biology_detail_alert(TipBoxPrefab_model,goodsid,gooduse_type){
        //加载背包 和  背包列表
        let info = cc.globalData.bag
        let gooduse_type_name = cc.globalData.gooduse;
        //查看详情--弹出一次已装备详情
        if(goodsid){
            // cc.log(goodsid)
            TipBoxPrefab_model.getComponent('bag_详情Tools').biology_detail_alert(TipBoxPrefab_model,info[goodsid],gooduse_type,0)
        }
  
   
        // gooduse_type  1武器
        var gooduse_type=gooduse_type||1;
        var _this=this;
        cc.loader.loadRes('/model背包/背包装备', function(errorMessage,loadedResource_icon){
            //检查资源加载
            if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
            if( !(loadedResource_icon instanceof cc.Prefab ) ) { cc.log( '你载入的不是预制资源!' ); return; }
            //开始实例化预制资源
            let   TipBoxPrefab =  cc.instantiate(loadedResource_icon);
            //技能等级
            // TipBoxPrefab.getChildByName('生物数量s').getComponent(cc.Label).string='生物('+info_list.length+'/60)'
            // 由于加载资源的操作是异步的，如果在加载完成前就绑定了事件，有可能会触发事件的自动执行。
            
            
            //修改背包标题-----弹窗的标题修改
            TipBoxPrefab.getChildByName('标题s').getComponent(cc.Label).string=gooduse_type_name[gooduse_type].name


            // 由于加载资源的操作是异步的，如果在加载完成前就绑定了事件，有可能会触发事件的自动执行。
            _this.biology_detail_list(TipBoxPrefab_model,TipBoxPrefab,info,gooduse_type) 
               // 此处进行事件绑定
            _this.bind_button(TipBoxPrefab_model,TipBoxPrefab,info)
            //写入icon
            TipBoxPrefab_model.getChildByName('左边弹窗').addChild(TipBoxPrefab);
            return TipBoxPrefab_model
        })
        return TipBoxPrefab_model
    },
    //list渲染
    biology_detail_list(TipBoxPrefab_model,TipBoxPrefab,info_list,gooduse_type){
        //获取点击物品的类型
        var _this =this;
        var TOOLS =[];
        var TOOLS = info_list
 
        //加载预制资源 PrefabUrl为 预制资源在 资源中的路径
        cc.loader.loadRes('/model背包/图标背包装备', function(errorMessage,loadedResource_icon){
            var num_height=0;
            for ( var prop in TOOLS) {
                let info = TOOLS[prop];
                //1是武器
                if(info.gooduse==gooduse_type){
                    var num_height =num_height+1
                        //检查资源加载
                        if( errorMessage ) { cc.log( '载入预制资源失败, 原因:' + errorMessage ); return; }
                        if( !(loadedResource_icon instanceof cc.Prefab ) ) { cc.log( '你载入的不是预制资源!' ); return; }
                        // //开始实例化预制资源
                        let   TipBoxPrefab_icon =  cc.instantiate(loadedResource_icon);
                        // //载入技能图片
                        let image = info.point;
           
                        cc.loader.loadRes(image, cc.SpriteFrame, function (err, texture) { 
                            if (err) {
                                // cc.error(err.message || err);
                                return;
                            }
                            TipBoxPrefab_icon.getChildByName('P技能').getComponent(cc.Sprite).spriteFrame = texture; 
                        });
                        // //技能等级
                        TipBoxPrefab_icon.getChildByName('技能s').getComponent(cc.Label).string=info.name

                        // // 由于加载资源的操作是异步的，如果在加载完成前就绑定了事件，有可能会触发事件的自动执行。
                        //重新挂载
                        _this.bind_button_detail(TipBoxPrefab_model,TipBoxPrefab_icon,info,gooduse_type)
                        // //写入icon
                        // TipBoxPrefab.getChildByName('技能列表').addChild(TipBoxPrefab_icon);
                        //写入icon
                        cc.find("列表/content/gridLayout",TipBoxPrefab).addChild(TipBoxPrefab_icon);
                }
            }
    
            // 定义content滚动条高度
            let scorllheight =  cc.find("列表/content/gridLayout",TipBoxPrefab).parent;
            //滚动高度= 预制体100*个数+ 上下 预留10 的位置  
            //列个数--进1取整
            let line_hight =Math.ceil(num_height/3)
            let cellHeight =  cc.find("列表/content/gridLayout",TipBoxPrefab).height * 0.25+10;
            let  height =  cellHeight*(line_hight )
            if(height<=420){
                let height = 420
            }
            //设置滚动条高度
            scorllheight.setContentSize(500,height)

            TipBoxPrefab.getChildByName('总数s').getComponent(cc.Label).string =Math.ceil(num_height/12)
            // 此处进行事件绑定
            _this.bind_button_page(TipBoxPrefab_model,TipBoxPrefab)
        })

   
        return TipBoxPrefab
    },
    //分页
    bind_button_page(TipBoxPrefab_model,TipBoxPrefab_icon){
        TipBoxPrefab_icon.getChildByName('上一页').on('click', function () {
           var new_page = TipBoxPrefab_icon.getChildByName('页码s').getComponent(cc.Label).string
           var new_page = parseInt(new_page)
            if(new_page>1){
                new_page= parseInt(new_page-1)
                 TipBoxPrefab_icon.getChildByName('页码s').getComponent(cc.Label).string =new_page
            }
            //12个一页/3   = 每页的列数4列
           var page = new_page
           var page_size =12/3
           let cellHeight =  cc.find("列表/content/gridLayout",TipBoxPrefab_icon).height * 0.25+10;
           var scorll_page = (cellHeight*page_size*(page-1))+210;
   
           // 获取ScrollBar组件
           var scrollView = TipBoxPrefab_icon.getComponent(cc.ScrollView)
           cc.find("列表/content/gridLayout",TipBoxPrefab_icon).parent.y = scorll_page; // 水平居中
        }, this);
        TipBoxPrefab_icon.getChildByName('下一页').on('click', function () {
            var total_page = TipBoxPrefab_icon.getChildByName('总数s').getComponent(cc.Label).string
            var total_page = parseInt(total_page)
            var new_page = TipBoxPrefab_icon.getChildByName('页码s').getComponent(cc.Label).string
            var new_page = parseInt(new_page)
            if(new_page<total_page){
                new_page= parseInt(new_page+1)
                TipBoxPrefab_icon.getChildByName('页码s').getComponent(cc.Label).string =new_page
            }
           //12个一页/3   = 每页的列数4列
           var page = new_page
           var page_size =12/3
           let cellHeight =  cc.find("列表/content/gridLayout",TipBoxPrefab_icon).height * 0.25+10;
           var scorll_page = (cellHeight*page_size*(page-1))+210;
         
           // 获取ScrollBar组件
           var scrollView = TipBoxPrefab_icon.getComponent(cc.ScrollView)
           cc.find("列表/content/gridLayout",TipBoxPrefab_icon).parent.y = scorll_page; // 水平居中

        }, this);

    },
    //绑定点击事件--关闭遮罩
    bind_button(TipBoxPrefab_model,TipBoxPrefab_icon){
        TipBoxPrefab_icon.getChildByName('遮罩').on('click', function () {
            // 事件处理逻辑
            //移除挂载
            TipBoxPrefab_model.getChildByName('左边弹窗').removeAllChildren();

        }, this);

    },
    //绑定点击事件--alert详情
    bind_button_detail(TipBoxPrefab_model,TipBoxPrefab_icon,info,gooduse_type){
        TipBoxPrefab_icon.on('click', function () {
            TipBoxPrefab_model.getComponent('bag_详情Tools').biology_detail_alert(TipBoxPrefab_model,info,gooduse_type,1)
        //     // 事件处理逻辑
        //     //移除挂载
        //     TipBoxPrefab_model.getChildByName('左边弹窗').removeAllChildren();
        //     //重新挂载
        //     // TipBoxPrefab_model.getComponent('biology_skillTools').biology_detail_alert(TipBoxPrefab_model,info)
        }, this);
    },


});
