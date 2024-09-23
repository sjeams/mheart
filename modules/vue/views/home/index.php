
<span id="home_vue" >
    <div class="layui-input-inline center">
        <p class="center  "  >
            <a class="btn_link " href="https://www.djuu.com/"> 音乐 </a>
            <a class="btn_link " href="https://www.69mj.com" class="btn">  美剧  </a>
            <a class="btn_link " href="https://www.6080yy3.com" class="btn">  6080  </a>
            <!-- <a class="btn_link " href="https://www.394tv.com" class="btn">  394tv  </a> -->
            <a class="btn_link " href="https://www.czzy55.com" class="btn">  厂长  </a>
            <a class="btn_link " href="https://www.hbotv1.com/" class="btn">  bptv  </a>
        </p>
        <p class="center  "  v-if="data.graden>0">
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
    <div class="layui-input-inline center"  >
        <a v-for="(item,index) in data.category"  :class="'btn btn-sm '+[param.belong==item.belong ?'active btn-success':'btn-success']" :value="item.belong" id="'belong'+[item.belong]" @click="belongChangeVue(item.belong)" href="javascript:;">
            {{item.name}}
            <span class="badge badge-danger" >{{item.status==1?'':'n'}}</span> 
        </a>
    </div>
     <!-- type  -->
    <div class="layui-input-inline center" v-html="data.categoryBelong"></div>
    <div class="layui-input-inline center">
        <input :type="[param.issearch==1?'text':'hidden']" readonly="readonly" class="center form-control" style="display:inline-block" placeholder="Search" v-model="param.search" id="goSearch">
    </div>
 
    <div class="layui-input-inline center">
        <span v-if="param.page_list>1"  class="btn btn-primary" @click="prevPage()">上一页</span>
        <span  v-else class="btn btn-defult"  >上一页</span> 
        <input type="text" class="btn_style "   v-model="param.page_list"  id="goPage_list" :disabled="is_disabled"  >
        <span v-if="data.isnext"  class="btn btn-primary" @click="nextPage()">下一页</span>
        <span v-else class="btn btn-defult"  >下一页</span> 
    </div>
    <p class="center" v-if="data.graden>0">
        <div class="layui-input-inline center">
            <p class="center">
                <span  class="btn btn-primary " onclick="gou()"> GO  </span>
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
                <input type="text" value="5" class="btn_style"  placeholder="setCaches"  id="setCaches" >
                <span  class="btn btn-primary " onclick="gouCache()"> 手动缓存 </span>
            </p>
        </div>
    </p>
 
<div class="d-flex align-content-start flex-wrap">
    <div class="card  col-md-6 mb-1 d-inline-block shadow p-2  bg-white rounded " v-for="(item,index) in data.content" >

        <div  :id="'dplay_video'+[item.id]" :class="'p-0 card-img-top collect-video-style rounded card-header video'+[item.id]"   :style="{backgroundImage: 'url('+item.imageurl+')'}"  alt="...">
            <span  @click="videoList(item.id)"  class="video_box "></span>
        </div>  
        <div class="p-2 ">
            <p class="center"  @click="downloadUrl(index)"> 
                <span ><b>{{index+1}}、</b></span> {{item.title}}
                <i class="bi bi-download text-success">down</i>
            </p>
            <p class="layui-input-inline center pt-2"> 
                <span @click="videoList(item.id)" class="btn btn-sm btn-primary  "> 重播 </span>
                <span @click="Update_my(index)" :class="'btn btn-sm   my_collect_'+[item.id]+[ item.my_collect ==1?' btn-success':'btn-defult' ]"> 收藏</span>
                <span @click="clearRload()" class="btn btn-sm btn-primary  "> 刷新 </span>
            </p>
        </div>

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
            }
        },
        created() {
            this.clearRload();
        },
        methods:{
            belongChangeVue(belong){
                belongChange(belong)
            },
            downloadUrl(index){
                //下载
                let value_data = this.data.content[index];
                downloadUrlMethod(value_data.id,value_data.url,value_data.title)
            },
            videoList(id){
                videoList(id)
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
                            _this.clearModelVue(istype);
                    });
        
                    }
                })
            },
            // istype 是否根据type更新 ,0 更新belong , 1更新 belong、type
            clearModelVue(istype){
                addLoading()
                var goBelong =videoVue.param.belong;
                var goType =videoVue.param.type;;
                var _this =this;
                $.ajax({
                    url: '/cn/video-api/clear-session', // 跳转到 action 
                    type: 'post',
                    dataType: 'json',
                    data:{belong:goBelong,type:goType,istype:istype},
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
                                    _this.clearRload()
                                }
                            })
                        }else{
                            _this.clearRload()
                        }
                    }
                }); 
            }
        },
        watch: {
        }
    })
    function belongChange(belong){
        videoVue.$data.param.belong = belong;
        // console.log(videoVue.$data.param.belong)
        fetchData()
    }
    //type
    function typeChange(type){
        videoVue.$data.param.type = type;
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
                    videoVue.$data.param= param.data
                    videoVue.$data.is_disabled = data.graden>0?true:false
                    scllTop()
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

</script>
