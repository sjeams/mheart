<span id="home_vue" >
    <span v-show="show" >
        <div class="layui-input-inline center pt-2">
            <p class="center "  >
                <a class="btn_link " href="https://www.djuu.com/"> 音乐 </a>
                <a class="btn_link " href="https://www.69mj.com" class="btn">  美剧  </a>
                <a class="btn_link " href="https://www.6080yy3.com" class="btn">  6080  </a>
                <!-- <a class="btn_link " href="https://www.394tv.com" class="btn">  394tv  </a> -->
                <a class="btn_link " href="https://www.czzy55.com" class="btn">  厂长  </a>
                <a class="btn_link " href="https://www.wwgz.cn" class="btn"> wwgz  </a>
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
            <a v-for="(item,index) in data.category"  :class="'btn btn-sm '+[param.belong==item.belong ?'  btn-primary':'btn-success']" :value="item.belong"  @click="belongChangeVue(item.belong)" href="javascript:;">
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
    </span>
 
        <div class="d-flex align-content-start flex-wrap">
            <div class="card col-sm-12 col-md-6 col-lg-3 mb-1 d-inline-block shadow p-0  bg-white rounded " v-for="(item,index) in data.content" :key="item.key" >
                    <!-- :style="{backgroundImage: 'url('+item.imageurl+')'}"  :data-image="item.imageurl"  图片改为懒加载 -->
                <div  :id="'dplay_video'+[item.id]" :class="'p-0 card-img-top collect-video-style rounded card-header video'+[item.id]"  :style="{backgroundImage: 'url('+item.imageurl+')'}" alt="..." v-html="item.player"></div>  
    
                <span  v-if="item.belong!=0" >
                    <p class="center p-1"  @click="downloadUrl(index)"  style="width: 90%;"> 
                        <b>{{index+1}}、</b><span v-html="item.title"></span>   
                        <i class="bi bi-download text-success">down</i>
                    </p>
                    <!-- video  -->
                    <p  class="layui-input-inline center pt-2"> 
                        <span @click="videoListVue(index,0)" class="btn btn-sm btn-primary  "> 重播 </span>
                        <span @click="Update_my(index)" :class="'btn btn-sm   my_collect_'+[item.id]+[item.my_collect ==1?' btn-success':' btn-secondary' ]"> 收藏</span>
                        <span @click="clearRload()" class="btn btn-sm btn-primary  "> 刷新 </span>
                    </p>
                </span>
                <span v-else >
                    <p class="center p-1" style="width: 90%;"> 
                        <b>{{index+1}}、</b><span v-html="item.title"></span>   
                    </p>
                    <!-- 影视 -->
                    <p    class="layui-input-inline center pt-2"> 
                        <span class="check" style="overflow-y:auto;">
                            <a  v-for="(video,video_index) in item.video"  @click="videoListVue(index,video_index)" :id="'click_video'+[index+'n'+video_index]" class="btn btn-sm  btn-secondary  collect click_video" v-html="video.title"> </a>
                        </span>
                    </p>
                </span>
            </div>

            <div class="layui-input-inline center">
                <span v-if="param.page_list>1"  class="btn btn-primary" @click="prevPage()">上一页</span>
                <span  v-else class="btn btn-secondary"  >上一页</span> 
                <input type="text" class="btn_style "   v-model="param.page_list"  id="goPage_list" :disabled="is_disabled"  >
                <span v-if="data.isnext"  class="btn btn-primary" @click="nextPage()">下一页</span>
                <span v-else class="btn btn-secondary"  >下一页</span> 
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
                param:{
                    belong:0,
                    issearch:1,
                },
                is_cache:0,
                setCaches:5,
                video_index:0,
                video_id:0,
                show:true,
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
            videoListVue(index,video_index){
                videoListVue(index,video_index)
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
    function  videoListVue(index,video_child_index){
        var video_child_index =video_child_index||0;
        var value_data = videoVue.$data.data.content[index];
        // isbofang //滚动自动播放时为0，使用ckplayer播放器(能自动播放)--- 不滚动播放时为1，使用移动端自带控制器(会出现暂停)。 请根据情况进行传值
        var id =value_data.id
        // var key=key||'1c0';
        if(value_data.belong==0){
            var new_value_data =value_data.video[video_child_index] //数据为子元素
        }
        //判断播放器类型
        var isbofang  = $("#is_bofang_type").val();
        var video_index = videoVue.$data.video_index
        //存入当前id
        if(videoVue.$data.video_id!=0&&videoVue.$data.video_id!=id){
            scoreSort(video_index) //覆盖
        }
        videoVue.$data.video_index=index;  //暂停在播视频
        videoVue.$data.video_id=id;    //存储当前的视频id
        //判断是否是影视，影视不为空
        var goBelong  = videoVue.$data.param.belong
        if(goBelong==0){
            //获取视频
            // var url = $("#form"+key+"  input[name=url]").val();
            // var title =$("#form"+key+"  input[name=title]").val();
            // var imageurl =$("#form"+key+"  input[name=imageurl]").val();
            $('.click_video').removeClass('btn-success');
            $('#click_video'+index+'n'+video_child_index).addClass('btn-success');
            // var video_index_str =video_index+',"'+key+'"';
            // $("#video_index_key").val(key);
            //获取视频
            var url =new_value_data.url
        }else{
            //获取视频
            var url =value_data.url
        }
        var title =value_data.title
        var imageurl =value_data.imageurl
        var video_index_str = video_index;

        //选择视频
        if(isbofang==1){
        //1 ckplayer 播放器
            ckplayerVideo(id,video_index,isbofang,video_index_str,url,imageurl,title)
        }else{
        //0 dplayer 播放器
            dplayerVideo(id,video_index,isbofang,video_index_str,url,imageurl,title)
        }
        //因为对象覆盖了，所以要放最后面--实例化后加上标签

    }
    //覆盖视频
    function scoreSort(video_index){
        let value_data_old = videoVue.$data.data.content[video_index];
        let sort = Date.now()+'_'+value_data_old.id+'_'+video_index
            videoVue.$data.data.content[video_index].key = sort;
            videoVue.$data.data.content[video_index].player = '<span  id="'+sort+'" onclick="videoListVue('+video_index+',0)"  class="video_box "></span>';
    }

    function belongChange(belong){
        videoVue.param.page_list=1 //返回第一页
        videoVue.$data.param.belong = belong;
        videoVue.$data.param.type = 0
        videoVue.$data.param.search='' //搜索置为空
        // console.log(videoVue.$data.param.belong)
        fetchData()
    }
    //type
    function typeChange(type){
        videoVue.param.page_list=1 //返回第一页
        videoVue.$data.param.type = type;
        videoVue.$data.param.search=''  //搜索置为空
        // console.log(videoVue.$data.param.type)
        fetchData()
    }

    //弹窗提示
    function  layOpen(){
        var content =' <div class="center" style="margin-top:20px">请求失败,请重新操作!</div>'
        btn_layer_tips_type1('LAY_layuipro_error','300px',['确定'],content,removeLoading)
    }

    function  clearSession(istype){
            var _this =this;
            if(istype){
                var content =' <div class="center" style="margin-top:20px"> 清空type缓存?</div>'
            }else{
                var content =' <div class="center" style="margin-top:20px"> 清空belong缓存?</div>'
            }
            btn_layer_tips_type1('LAY_layuipro','300px',['确定', '取消'],content,layerClearModel,istype)
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
                        var content =' <div class="center" style="margin-top:20px">'+data.message+'</div>'
                        btn_layer_tips_type1('LAY_layuipro_error','300px',['确定'],content,vueRrload)
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
                            var content =' <div class="center rotatable-element " >'+content+'</div>'
                                btn_layer_tips_type1('LAY_layuipro_kwords',['100%','100%'],'',content,removeLoading)
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
                var content = ' <div class="center" style="margin-top:20px">搜索不能为空!</div>'
                    btn_layer_tips_type1('LAY_layuipro_error','300px',['确定'],content,removeLoading)

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
        //请求数据
        function fetchData(){
            $.ajax({
                url: '/vue/home/get-list', // 跳转到 action 
                type: 'post',
                data:videoVue.$data.param,
                dataType: 'json',
                success: function (data) {
                    if(data.code){

                        // lazyLoad() //加载图片
                    }else{
                        layOpen()
                    }
             
                    let param = data.data //返回的值
                        videoVue.$data.data = param
                        console.log(param)
                        videoVue.$data.param = param.data
                        videoVue.$data.is_disabled = data.graden>0?true:false
                        scllTop()
                        videoDestory() //切换后销毁视频

                }
            })
        }
        function menu_show() {
            videoVue.$data.show = !videoVue.$data.show;
        }
</script>
