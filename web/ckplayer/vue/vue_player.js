    // // 慢加载
    // window.onload = function () {
    //     // lazyLoad();        // 初始化执行
    //     // 滚动执行
    //     window.addEventListener("scroll", function () {
    //         lazyLoad( );
    //     });
    // };
    // function lazyLoad() {
    //     $(".collect-video-style").each(function(){  //遍历所有图片
    //         console.log(0)
    //         var  othis = $(this)//当前图片对象	
    //         var  top = othis.offset().top - $(window).scrollTop(); 
    //         //计算图片top-滚动条top
    //         if (top > $(window).height()) {   //如果两者之差小于屏幕高度
    //                 return;   //不管
    //         } else {       
    //             othis.css({'background-image': 'url('+othis.attr('data-image')+')'});
    //             //可见的时候把占位值替换 并删除占位属性
    //         };	            
    //     });
    // }
    function btn_layer_tips_type1(id,area,btn,content,callback,param=[]){
        layer.open({
            type: 1
            ,title: false //不显示标题栏
            ,closeBtn: false
            ,area: area
            ,shade: 0.8
            ,id:id
            // ,id: 'LAY_layuipro_error' //设定一个id，防止重复弹出
            ,btn:btn
            ,btnAlign: 'c'
            ,fixed:true //固定
            ,moveType: 1 //拖拽模式，0或者1
            ,content:content
            // ,content: ' <div class="center" style="margin-top:20px">'+data.message+'</div>'
            ,success: function(layero){
                // $("#belong_badge_show"+goBelong).text('n');
                callback(layero,param)
            }
        })
    }

    function vueRrload(layero){
        videoVue.clearRload()
    }

    function layerClearModel(layero,istype){
        var btn = layero.find('.layui-layer-btn');
        btn.find('.layui-layer-btn0').click(function(){
                clearModelVue(istype);
        });
    }
    



