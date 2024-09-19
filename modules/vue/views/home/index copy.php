<div id="home_vue">
    <h2 v-color="color" style="border: 1px solid;"> 按钮</h2>
    <h1>{{count}}</h1>
    <button @click="add">增加</button>
    <button @click="remove">删除</button>
</div>
<script>
    //全局变量
    // Vue.directive('color',{
    //     inserted(el){
    //         el.style.color ="green";
    //     },
    //     update(el){
    //         el.style.color ="red";
    //     }
    //     // bind: function () {},
    //     // inserted: function () {},
    //     // update: function () {},
    //     // componentUpdated: function () {},
    //     // unbind: function () {}
    // })
    new Vue({
        el: '#home_vue',
        data(){
            return {
            count:0,
            color:1
            }
        },
        created() {
            // `this` 指向 vm 实例
            console.log('a is: ' + this.a)
        },
        methods:{
            add(){
                this.count++;
                this.color =1
                // Vue.nextTick(function () {
                // // DOM 更新了
                // })
            },
            remove(){
                this.count--;
                this.color =0
            },
            someMethod(){
                console.log(this.color)
            }
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

</script>
 
