<style>
	.video_footer{
        z-index: 100;
        /* margin: auto  0px ; */
		/* border: 1px solid black; */
        height:40px;
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
</style>
</div>

<input type="hidden" value="0" id="top_hidden">
<input type="hidden" id="goPageCount" value="<?php echo isset($data['count'])?$data['count']:0; ?>">
<div class="video_footer center"> 
    <table class="table table-bordered  tablestyle page_bottom" style="display: none;">
        <tr class="append_top">
            <td class="btn-primary" ><a href="#top" class=" " title="回到顶端">返回顶部↑</a></td>
            <!-- <?php  if( explode('?',$_SERVER["REQUEST_URI"])[0]=='/cn/video/collect-video'){ ?>
            <?php }else{ ?>  
                <td class="btn-primary" ><a href="#top" class=" " title="回到顶端">Top</a></td>
                <td class="btn-primary" onclick="videoHidden(0)">video</td>
            <?php }  ?>   -->
        </tr>
    </table>
</div>
 
<script>
    //滚动条触发事件
    $(window).scroll(function() {
        //监听事件内容
        // console.log(getScrollHeight()) 
        // console.log(getWindowHeight() + getDocumentTop())  
        //默认不进来
        var goPageCount = $("#goPageCount").val()
        var top_hidden =$("#top_hidden").val()
        if (getScrollHeight() <= getWindowHeight() + getDocumentTop() ) {
            //当滚动条到底时,这里是触发内容
            if(goPageCount){
                var goPage = Number($("#goPage").val()) + Number(1)   
                if(goPage<=goPageCount){
                    nextPage(goPage);
                }else{
                    if(goPage>goPageCount&&top_hidden==0){
                        $('.page_bottom').css('display','table');
                        $("#top_hidden").val(1)
                    }
                }
            }else{
                if(top_hidden==0){
                    $('.page_bottom').css('display','table');
                    $("#top_hidden").val(1)
                }
            }

        }else{
            if(top_hidden==1){
                $('.page_bottom').css('display','none');
                $("#top_hidden").val(0)
            }
        }
        top_hidden=null;
        goPageCount=null;
        goPage=null;
    });
    $(function(){   
        var winHeight = $(document).scrollTop();
        var t = 0;
        $(window).scroll(function() {
            var scrollY = $(document).scrollTop();// 获取垂直滚动的距离，即滚动了多少
            if(t<=scrollY){
                    // console.log("往下滚动");
                $('.top-title').addClass('hiddened');
                $('.page_bottom').css('display','none');
                $("#top_hidden").val(0)
            }else{
                // console.log("往上滚动");
                $('.top-title').removeClass('hiddened');
                $('.page_bottom').css('display','table');
                $("#top_hidden").val(1)
            }
            setTimeout(function(){t=scrollY},0);
                
        });
    });
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