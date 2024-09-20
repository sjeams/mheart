<div id="home_vue" >
<div class="layui-input-inline center" v-html="data.categoryBelong"></div>
<div class="d-flex align-content-start flex-wrap">
    <div class="card  col-md-6 mb-1 d-inline-block shadow p-2  bg-white rounded " v-for="(item,index) in data.content" >
        <div   style="background-image: url('https://img.ukuapi.com/upload/vod/20220718-1/b12b8a33d054606dc8dc3ba21ab87e74.jpg');"  class="card-img-top collect-video-style rounded card-header" alt="...">
        </div>
        <div class="card-body">
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
    </div>
 
</div>

</div>
<script>
    //全局变量
    let videoVue = new Vue({
        el: '#home_vue',
        data(){
            return {
                data:[],
                param:[],
            }
        },
        created() {
            // `this` 指向 vm 实例
            // console.log('a is: ' + this.a)
            this.$nextTick(()=>{
                fetchData()
            })
        },
        methods:{
        },
        //局部变量
        directives:{
            'color':{
                //初始化
                bind(el){
                    el.style.color =  'dark'  
                },
                update(el,binding) {
                    console.log(binding)
                    if(binding.value==1){
                        el.style.color =  'green'
                    }else{
                        el.style.color =  'red'       
                    }
                }
            }
        },
        watch: {
            //监听值
            // color: function (val, oldVal) {
            // console.log('new: %s, old: %s', val, oldVal)
            // },
            //监听 回调方法
            count: 'someMethod',
            // 该回调会在任何被侦听的对象的 property 改变时被调用，不论其被嵌套多深
        }
    })

    //type
    function typeChange(type){
        videoVue.$data.param.type = type;
        console.log(videoVue.$data.param.type)
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
                    videoVue.$data.data = data.data
                    videoVue.$data.param=data.data.data
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
