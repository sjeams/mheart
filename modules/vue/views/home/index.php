<span id="home_vue" >
    <div class="layui-input-inline center pt-2">
        <p class="center "  >
            <a class="btn_link " href="https://www.djuu.com/"> 音乐 </a>
            <a class="btn_link " href="https://www.69mj.com" class="btn">  美剧  </a>
            <a class="btn_link " href="https://www.6080yy3.com" class="btn">  6080  </a>
            <!-- <a class="btn_link " href="https://www.394tv.com" class="btn">  394tv  </a> -->
            <a class="btn_link " href="https://www.czzy55.com" class="btn">  厂长  </a>
            <a class="btn_link " href="https://www.hbotv1.com/" class="btn">  bptv  </a>
        </p>
        <p class="center "   v-if="data.graden>0">
            <a class="btn_link " href="https://laoyavideo.com/" class="btn">  老鸭头  </a>
            <!-- <a class="btn_link " href="https://yinwovideo.com/"> 淫窝 </a> -->
            <a class="btn_link " href="https://677062.com/"> 草榴 </a>
                <a class="btn_link " href="https://gk8vh7pc2i2ze.top:8443/video/hot/4.html">  少女 </a>
            <!-- <a class="btn_link " href="https://www.fi11cc96.com/"> fi11 </a> -->
            <a class="btn_link " href="https://sewovideo.com/"> 色窝 </a>
            <a class="btn_link " href="https://siwazyw.com"> 丝袜 </a>
            <a class="btn_link " href="https://6584.xyz"> 色色 </a>
            <!-- <a class="btn_link " href="https://xjav10.cc/">  香蕉 </a>   -->
            <!-- <a class="btn_link " href="https://bfqde2023llsplde12qd27qdl.820723.com/search?tag=少女">  少女 </a>  -->
            <a class="btn_link " href="http://www.newxiuren.com/"> 秀人网 </a> 
        </p>
    </div>
    <!-- belong  -->
    <div class="layui-input-inline center  pt-2"  >
        <a v-for="(item,index) in data.category"  :class="'btn btn-sm '+[param.belong==item.belong ?'active btn-success':'btn-success']" :value="item.belong"  @click="belongChangeVue(item.belong)" href="javascript:;">
            {{item.name}}
            <span class="badge badge-danger" >{{item.status==1?'':'n'}}</span> 
        </a>
    </div>
     <!-- type  -->
    <div class="layui-input-inline center" v-html="data.categoryBelong"></div>
    <div class="layui-input-inline center">
        <input :type="[param.issearch==1?'text':'hidden']" readonly="readonly" class="center form-control" style="display:inline-block" placeholder="Search" v-model="param.search"  @click="goSearchVue()">
    </div>
 
    <div class="layui-input-inline center">
        <span v-if="param.page_list>1"  class="btn btn-primary" @click="prevPage()">上一页</span>
        <span  v-else class="btn btn-secondary"  >上一页</span> 
        <input type="text" class="btn_style "   v-model="param.page_list"  id="goPage_list" :disabled="is_disabled"  >
        <span v-if="data.isnext"  class="btn btn-primary" @click="nextPage()">下一页</span>
        <span v-else class="btn btn-secondary"  >下一页</span> 
    </div>
    <p class="center" v-if="data.graden>0">
        <div class="layui-input-inline center">
            <p class="center">
                <span  class="btn btn-primary " @click="clearRload()"> GO  </span>
                <span  class="btn btn-primary btn_style " @click="clearSessionVue(0)"> 更新 </span>
                <span  class="btn btn-primary " @click="clearSessionVue(1)"> 刷新 </span>
            </p>
        </div>
        <div class="layui-input-inline center">
            <p class="center">
                <!-- <span  class="btn btn-primary" onclick="gouSuper()"> 极品 </span> -->
                <!-- //自动缓存，请不要操作 -->
                <span  class="btn btn-primary startCache " style="display: inline-block;" onclick="startCache()"> 自动缓存 </span>
                <span  class="btn btn-danger endCache " style="display: none;" onclick="endCache()">停止(<span class="end_cache_num">0</span>)</span>
                <input type="text" v-model="setCaches" class="btn_style"  placeholder="setCaches"  >
                <!-- <span  class="btn btn-primary " onclick="moreGetCaches()"> 手动缓存 </span> -->
                <span  :class="'btn '+[param.is_local == 0 ?' btn-danger':' btn-secondary']"  @click="changeLocal()"> 本地 </span>
            </p>
        </div>
    </p>
 
<div class="d-flex align-content-start flex-wrap">
    <div class="card  col-md-6 mb-1 d-inline-block shadow p-0  bg-white rounded " v-for="(item,index) in data.content" >
            <!-- :style="{backgroundImage: 'url('+item.imageurl+')'}"  图片改为懒加载 -->
        <div  :id="'dplay_video'+[item.id]" :class="'p-0 card-img-top collect-video-style rounded card-header video'+[item.id]"  :data-image="item.imageurl" :key="item.key"   alt="..." v-html="item.player">
 
        
        </div>  

        <p class="center p-1"  @click="downloadUrl(index)"> 
            <b>{{index+1}}、</b><span v-html="item.title"></span>   
            <i class="bi bi-download text-success">down</i>
        </p>
        <p class="layui-input-inline center pt-2"> 
            <span @click="videoListVue(index)" class="btn btn-sm btn-primary  "> 重播 </span>
            <span @click="Update_my(index)" :class="'btn btn-sm   my_collect_'+[item.id]+[item.my_collect ==1?' btn-success':' btn-secondary' ]"> 收藏</span>
            <span @click="clearRload()" class="btn btn-sm btn-primary  "> 刷新 </span>
        </p>
    

    </div>
 
</div>
</span>
<script>
    //全局变量
    let videoVue = new Vue({
        el: '#home_vue',
        data(){
            return {
                is_disabled:false,
                data:[],
                param:[],
                is_cache:0,
                setCaches:5,
            }
        },
        created() {
            this.clearRload();
        },
        methods:{
            changeLocal(){ 
                $.ajax({
                    url: '/cn/video-api/update-category-status', // 跳转到 action 
                    type: 'post',
                    data:{belong:videoVue.param.belong},
                    dataType: 'json',
                    success: function (data) {
                        if(data.code==1){
                            //返回状态
                            // videoVue.param.is_local =data.data;
                            videoVue.clearRload();
                        }
                    },
                });   
            },
            belongChangeVue(belong){
                belongChange(belong)
            },
            downloadUrl(index){
                //下载
                let value_data = videoVue.data.content[index];
                downloadUrlMethod(value_data.id,value_data.url,value_data.title)
            },
            videoListVue(){
                videoListVue(index)
            },
            Update_my(index){
                let value_data = this.data.content[index];
                $.ajax({
                    url: '/cn/video-api/myupdate', // 跳转到 action 
                    type: 'post',
                    data:{video_id:value_data.id,title:value_data.title},
                    dataType: 'json',
                    success: function (data) {
                        if(data.code==1){
                            videoVue.data.content[index].my_collect=1
                        }else{
                            videoVue.data.content[index].my_collect=0
                        }
                    },
                });
            },
            
            clearRload(){
                this.$nextTick(()=>{
                    //搜索条件不变
                    fetchData()
                })
            },
            prevPage(){
                videoVue.param.page_list = parseInt(videoVue.param.page_list)-1
                this.clearRload()
            },
            nextPage(){
                videoVue.param.page_list = parseInt(videoVue.param.page_list)+1
                this.clearRload()
            },
            clearSessionVue(istype){
                clearSession(istype)
            },
            goSearchVue(){
                goSearch()
            }
        },
        watch: {
        }
    })
    function  videoListVue(index){
        let value_data = videoVue.$data.data.content[index];
    // isbofang //滚动自动播放时为0，使用ckplayer播放器(能自动播放)--- 不滚动播放时为1，使用移动端自带控制器(会出现暂停)。 请根据情况进行传值
        var id =value_data.id
        var key=key||'1c0';
        //判断播放器类型
        var isbofang  = $("#is_bofang_type").val();
        //暂停在播视频
        var now_video =$("#now_video").val();
        //存储当前的视频id
        $("#now_video").val(index); 
        //判断是否是影视，影视不为空
        var goBelong  = videoVue.$data.param.belong
        //判断是否是采集页面--只有采集页面才有影视
        // var isCollect  = $("#isCollect").val();
        if(goBelong==0){
            //获取视频
            // var url = $("#form"+key+"  input[name=url]").val();
            // var title =$("#form"+key+"  input[name=title]").val();
            // var imageurl =$("#form"+key+"  input[name=imageurl]").val();
            // $('.click_video').removeClass('btn-success');
            // $('#click_video'+key).addClass('btn-success');
            // var now_video_str =now_video+',"'+key+'"';
            // $("#now_video_key").val(key);
        }else{
            //获取视频
            var url =value_data.url
            var title =value_data.title
            var imageurl =value_data.imageurl
            var now_video_str = now_video;
        }
        // console.log(key)
        // console.log(url)
        //选择视频
        if(isbofang==1){
        //1 ckplayer 播放器
            ckplayerVideo(id,now_video,isbofang,now_video_str,url,imageurl,title)
            // var _this =this;
            // _this.newdplayer.destroy();
        }else{
        //0 dplayer 播放器
            dplayerVideo(id,now_video,isbofang,now_video_str,url,imageurl,title)
            // var _this =this;
            // _this.newplayer.remove();
        }
        
        //因为对象覆盖了，所以要放最后面--实例化后加上标签
        let sort = md5(Date.now()+now_video)
            videoVue.$data.data.content[now_video].key = sort;
    }



    function belongChange(belong){
        videoVue.$data.param.belong = belong;
        videoVue.$data.param.type = 0
        videoVue.$data.param.search='' //搜索置为空
        // console.log(videoVue.$data.param.belong)
        fetchData()
    }
    //type
    function typeChange(type){
        videoVue.$data.param.type = type;
        videoVue.$data.param.search=''  //搜索置为空
        // console.log(videoVue.$data.param.type)
        fetchData()

    }
    //请求数据
    function fetchData(){
        $.ajax({
            url: '/vue/home/get-list', // 跳转到 action 
            type: 'post',
            data:videoVue.$data.param,
            dataType: 'json',
            success: function (data) {
                if(data.code){
                    let param = data.data //返回的值
                    videoVue.$data.data = param
                    videoVue.$data.param = param.data
                    videoVue.$data.is_disabled = data.graden>0?true:false
                    scllTop()
                    videoDestory() //切换后销毁视频
                }else{
                   layOpen()
                }
            }
        })
    }
    //弹窗提示
    function  layOpen(){
        layer.open({
            type: 1
            ,title: false //不显示标题栏
            ,closeBtn: false
            ,area: '300px;'
            ,shade: 0.8
            ,id: 'LAY_layuipro_error' //设定一个id，防止重复弹出
            ,btn: ['确定']
            ,btnAlign: 'c'
            ,moveType: 1 //拖拽模式，0或者1
            ,content: ' <div class="center" style="margin-top:20px">请求失败,请重新操作!</div>'
            ,success: function(layero){
                removeLoading()
            }
        })  
    }

    function  clearSession(istype){
            var _this =this;
            if(istype){
                var type_str ='清空type缓存？'; 
            }else{
                var type_str ='清空belong缓存？';
            }
            layer.open({
                type: 1
                ,title: false //不显示标题栏
                ,closeBtn: false
                ,area: '300px;'
                ,shade: 0.8
                ,id: 'LAY_layuipro' //设定一个id，防止重复弹出
                ,btn: ['确定', '取消']
                ,btnAlign: 'c'
                ,moveType: 1 //拖拽模式，0或者1
                ,content: ' <div class="center" style="margin-top:20px">'+type_str+'</div>'
                ,success: function(layero){
                    var btn = layero.find('.layui-layer-btn');
                    btn.find('.layui-layer-btn0').click(function(){
                        clearModelVue(istype);
                });
    
                }
            })
        }
        // istype 是否根据type更新 ,0 更新belong , 1更新 belong、type
        function   clearModelVue(istype){
            addLoading()
            var belong =  videoVue.$data.param.belong     
            var type =  videoVue.$data.param.type  
            var _this =this;
            $.ajax({
                url: '/cn/video-api/clear-session', // 跳转到 action 
                type: 'post',
                dataType: 'json',
                data:{belong:belong,type:type,istype:istype},
                success: function (data) {
                    removeLoading()
                    if(data.code==0){    
                        // alert(data.message)
                        layer.open({
                            type: 1
                            ,title: false //不显示标题栏
                            ,closeBtn: false
                            ,area: '300px;'
                            ,shade: 0.8
                            ,id: 'LAY_layuipro_error' //设定一个id，防止重复弹出
                            ,btn: ['确定']
                            ,btnAlign: 'c'
                            ,moveType: 1 //拖拽模式，0或者1
                            ,content: ' <div class="center" style="margin-top:20px">'+data.message+'</div>'
                            ,success: function(layero){
                                // $("#belong_badge_show"+goBelong).text('n');
                                videoVue.clearRload()
                            }
                        })
                    }else{
                        videoVue.clearRload()
                    }
                }
            }); 
        }
          function  goSearch(){
                var goSearch =  videoVue.$data.param.search     
                var belong =  videoVue.$data.param.belong  
                $.ajax({
                    url: '/cn/video-api/get-kwords', // 跳转到 action
                    data:{
                        belong: belong,
                    },
                    type: 'post',
                    dataType: 'json',
                    success: function (data) {
                        // 关键词
                        if(data.code==1){    
                            var str =' <p> <input type="text" class="center form-control mr-sm-2"   placeholder="Search"  value="'+goSearch+'" id="search_text"></p><p class="pt-2"><span class="btn btn-primary  " onclick="layerReSerach()">重新采集</span><span class="btn btn-primary  " onclick="layerGoSearch()">搜索</span><span class="btn btn-primary  " onclick="cancelSerach()">取消</span></p> <div class="layui-btn-container">';
                            $.each(data.data,function(index,value){
                                str = str+'<span class="btn btn-sm  btn-success"  onclick=layerSearch("'+value.search+'")>'+value.search+'</span>';
                            })
                            var content  = str+'</div>';
                            layer.open({
                                type: 1
                                ,title: false //不显示标题栏
                                ,closeBtn: false
                                ,area: ['100%','100%']
                                // ,area: '300px;'// 由于样式会乱，所以设置一个小的背景
                                ,shade: 0.8
                                // ,shadeClose:false
                                ,id: 'LAY_layuipro_kwords' //设定一个id，防止重复弹出
                                // ,btn: ['搜索', '取消']
                                ,btnAlign: 'c'
                                ,fixed:true //固定
                                ,moveType: 1 //拖拽模式，0或者1
                                ,content: ' <div class="center rotatable-element " >'+content+'</div>'
                                ,success: function(layero){
                                }
                            })
                        }else{
                            removeLoading()
                        }
                    } 
                }); 
            }

        //搜索弹窗按钮    
        function cancelSerach(){
            removeLoadingPage();//关闭弹窗page
        }   

        //重新搜索指定内容
        function layerReSerach(){
            addLoading()
            var goSearch =  videoVue.$data.param.search     
            var belong =  videoVue.$data.param.belong   
            var type =  videoVue.$data.param.type    
            $.ajax({
                url: '/cn/video-api/clear-search', // 跳转到 action 
                type: 'post',
                dataType: 'json',
                data:{search:goSearch,belong:belong,type:type},
                success: function (data) {
                    layerGoSearch()
                },error:function(data){
                    removeLoading()
                }
            }); 
        }
        //不能搜索空内容
        function layerGoSearch(){
            var goSearch   = $("#search_text").val();
            videoVue.$data.param.search  =    goSearch
            if(goSearch){
                layerSearch(goSearch);
            }else{
                layer.open({
                    type: 1
                    ,title: false //不显示标题栏
                    ,closeBtn: false
                    ,area: '300px;'
                    ,shade: 0.8
                    ,id: 'LAY_layuipro_error' //设定一个id，防止重复弹出
                    ,btn: ['确定']
                    ,btnAlign: 'c'
                    ,moveType: 1 //拖拽模式，0或者1
                    ,content: ' <div class="center" style="margin-top:20px">搜索不能为空!</div>'
                    ,success: function(layero){
                        removeLoading()
                    }
                })
            }
        }
        function layerSearch(goSearch){
            cancelSerach();
            //弹窗搜索，才会带search
            videoVue.$data.param.search=goSearch
            fetchData();
        }



        //单页缓存
        function isGetCaches(){
            var is_cache = videoVue.$data.is_cache
            var page_isnext = videoVue.$data.data.isnext //是否有下一页
            if(is_cache!=0&&page_isnext==1){
                goCache(1);
            }
        }
        //自动缓存--自动采集
        function startCache(){
            $('.endCache').css('display','inline-block');
            $('.startCache').css('display','none');
            // $("#is_cache").val(2)
            videoVue.$data.is_cache=2
            isGetCaches()
        }
        function endCache(){
            $('.endCache').css('display','none');
            $('.startCache').css('display','inline-block');
            // $("#is_cache").val(0)
            videoVue.$data.is_cache=0
            $('.end_cache_num').text(0);
            //结束后 跳转到当前页面
            // gouhtml(0);
        }
        //手动缓存
        function moreGetCaches(){
            var setnum =  videoVue.$data.setCaches
            goCache(setnum)
        }
        // 开启缓存
        function goCache(setnum=0){
            var is_cache =videoVue.$data.is_cache
            $('.caiji_name').text('采集...')
            let new_param = videoVue.$data.param;
                new_param.setnum =setnum
                new_param.is_cache =is_cache
            $.ajax({
                url: '/cn/video-api/get-cache', // 跳转到 action 
                type: 'post',
                // async:false,
                data:new_param,
                dataType: 'json',
                success: function (data) {
                    removeLoading()
                    if(data.code==1){
                        // 自动缓存-循环执行
                        if(is_cache==2){
                            videoVue.$data.param.page_list = data.data
                            // 可以不进跳转
                            //已缓存+1
                            $('.end_cache_num').text(parseInt($('.end_cache_num').text())+1);
                            //检查是否继续下一页缓存
                            isGetCaches()
                        }else{
                            $('.caiji_name').text('采集√')
                            if(setnum>1){//手动缓存
                                videoVue.$data.param.page_list = data.data
                                videoVue.clearRload()
                            }
                        }
                    }else{
                        //结束缓存--跳转到尾页
                        if(is_cache==2){
                            endCache()
                            videoVue.clearRload()
                        }
                        $('.caiji_name').text('采集√')
                    }
                },error: function (data) {
                    if(is_cache==2){
                        isGetCaches()
                    }
                }
            });
        }
        // 慢加载
        window.onload = function () {
            // 初始化执行
            lazyLoad( );
            // 滚动执行
            window.addEventListener("scroll", function () {
            lazyLoad( );
            });
            function lazyLoad( ) {
                $(".collect-video-style").each(function(){  //遍历所有图片
                    var  othis = $(this)//当前图片对象	
                    var  top = othis.offset().top - $(window).scrollTop(); 
                            //计算图片top-滚动条top
                    if (top > $(window).height()) {   //如果两者之差小于屏幕高度
                            return;   //不管
                    } else {                
                        othis.css({'background-image': 'url('+othis.attr('data-image')+')'});
                        //可见的时候把占位值替换 并删除占位属性
                    };	            
                });
            }
        };
</script>
