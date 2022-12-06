<style>
	.video_footer{
        z-index: 100;
        /* margin: auto  0px ; */
		/* border: 1px solid black; */
        height:45px;
        width: 100%;
        position: fixed;
        margin:0px  auto;
        left:0; 
        right:0; 
        /* top:0;  */
        bottom:0;
        display: inline-block;
	}
    .video_footer td{
        background-color: white;
        /* border: 1px solid #0044cc; */
        text-align: center ;
        width: 50%;
    }
    .video_footer td a{
        color: white;
        width: 100%;
        margin: auto;
        display: inline-block;
    }
    .footer_go{
        line-height: 45px;
        height:45px;
        width:50%;height:45px;vertical-align: center;text-align:center; float: right;
    }
    .footer_go_input{
        line-height: 45px!important;
        height:45px!important;
        margin-bottom:0px!important;
        width:50%; text-align:center
    }
 
</style>
</div>

<!-- <input type="hidden" value="0" id="top_hidden"> -->

<div class="video_footer center"> 
    <table class="table table-bordered  tablestyle page_bottom" style="display: none;">
        <!-- <tr class="append_top">
            <input name="title" class="search_input" id="appendedInputButton"   type="text" value="<?php //cho $data['title']?>"/>
            <button class="btn btn-primary search_button" onclick="nextPage()" type="sbumit">GO</button>
        </tr> -->
        <tr class="append_top">
            <td class="btn-primary"  ><a href="#top" class=" " title="回到顶端">返回顶部↑</a></td> 
            <!-- <td class="btn-primary go_hidden  hiddened" ><input type="text" value="1"   class="footer_go_input" /><span  class="footer_go">GO(232323)</span></td> -->

            <td class="btn-primary  video_old"  onclick="videoHidden()" style="display: <?php $userlogin = Yii::$app->session->get('userlogin'); echo $userlogin['video_model']==1?'table-cell':'none';?>;" > 
                <span  class=" btn-primary" >  video</span>
 
            </td>
            
            <!-- <?php  if( explode('?',$_SERVER["REQUEST_URI"])[0]=='/cn/video/collect-video'){ ?>
            <?php }else{ ?>  
                <td class="btn-primary" ><a href="#top" class=" " title="回到顶端">Top</a></td>
                <td class="btn-primary" onclick="videoHidden(0)">video</td>
            <?php }  ?>   -->
        </tr>
    </table>
</div>
 
<script>
    //滚动条头部和底部隐藏事件
    $(function(){   
        // t/scrollY  记录滚动条高度，判断上下   getScrollHeight()/ etWindowHeight() + getDocumentTop() 窗口高度
        var winHeight = $(document).scrollTop();
        var t = 0;
        $(window).scroll(function() {
            getPage();  //分页
            var scrollY = $(document).scrollTop();// 获取垂直滚动的距离，即滚动了多少
            //上下滚动操作
            if(t<=scrollY&&t>=160){
                // console.log("往下滚动");
                header_title_hidden();
            }else{
                // console.log("往上滚动");
                header_title_show();
             }
            setTimeout(function(){t=scrollY},0);

        });
    });
    //滚动条触发事件--分页
    // $(window).scroll(function() {
    //     //监听事件内容
    //     // console.log(getScrollHeight()) 
    //     // console.log(getWindowHeight() + getDocumentTop())  
    //     // console.log(id)
    //     if (getScrollHeight() <= getWindowHeight() + getDocumentTop() ) {
    //         var goPageCount = $('#goPageCount').val();
    //         //当滚动条到底时,这里是触发内容
    //         //分页
    //         if(goPageCount){
    //             var goPage = Number($("#goPage").val()) + Number(1)   
    //             if(goPage<=goPageCount){
    //                 nextPage(goPage);
    //             }
    //         }
    //     }
    //     goPageCount=null;
    //     goPage=null;
    // });
     //监听分页
    function getPage(){
        //窗口高度 = 滚动高度+页面高度+160.触发
        if (getScrollHeight()<= getWindowHeight() + getDocumentTop()+160) {
            var goPageCount = $('#goPageCount').val();
            //当滚动条到底时,这里是触发内容
            //判断是否使用分页插件
            if(goPageCount){
                var goPage = Number($("#goPage").val()) + Number(1)   
                if(goPage<=goPageCount){
                    nextPage(goPage);
                }else{
                    //到底部距离160 显示 底部
                    if(getScrollHeight()<= getWindowHeight() + getDocumentTop()+160){
                        header_title_show();
                    }
                }
            }
        }
        goPageCount=null;
        goPage=null;
    }


    function header_title_show(){
        $('.top-title').removeClass('hiddened');
        $('.page_bottom').css('display','table');
        $('.video_hidden_button').css('display','block');
    }
    function header_title_hidden(){
        $('.top-title').addClass('hiddened');
        $('.page_bottom').css('display','none');
        $('.video_hidden_button').css('display','none');
    }

</script>

</script>
    <!-- 窗口滚动异步事件 -->
    <script>
    //文档高度
    function getDocumentTop() {
        var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
        if (document.body) {
            bodyScrollTop = document.body.scrollTop;
        }
        if (document.documentElement) {
            documentScrollTop = document.documentElement.scrollTop;
        }
        scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
        return scrollTop;
    }

    //可视窗口高度
    function getWindowHeight() {
        var windowHeight = 0;
        if (document.compatMode == "CSS1Compat") {
            windowHeight = document.documentElement.clientHeight;
        } else {
            windowHeight = document.body.clientHeight;
        }
        return windowHeight;
    }

    //滚动条滚动高度
    function getScrollHeight() {
        var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
        if (document.body) {
            bodyScrollHeight = document.body.scrollHeight;
        }

        if (document.documentElement) {
            documentScrollHeight = document.documentElement.scrollHeight;
        }
        scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
        return scrollHeight;
    }


    /*
    当滚动条滑动，触发事件，判断是否到达最底部
    然后调用ajax处理函数异步加载数据
    */
    // window.onscroll = function () {
    //     //监听事件内容
    //     if (getScrollHeight() == getWindowHeight() + getDocumentTop()) {
    //         //当滚动条到底时,这里是触发内容
    //         //异步请求数据,局部刷新dom
    //         ajax_function(); 
    //     }
    // }
    
    // function ajax_function() {
    //     $.get(
    //         url,
    //         data,
    //         function (data) {
    //             // dosomething
    //         }
    //     );
    // }
</script>