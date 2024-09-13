<style>
    .layui-layer-btn a{
        width: 40%;
        max-width: 200px;
    }
    #content_append td{
        height: 340px!important;
    }
</style>
    <table class="table table-bordered  tablestyle"  >
    <thead>
        <?php if($graden>0){?>
        <tr>
            <td class="btn-primary go_hidden  hiddened" ><input type="text" value="1"   class="footer_go_input" /><span  class="footer_go"  onclick="gouSerach()">GO(<span id="total_count"><?php echo isset($data['count'])?$data['count']:0; ?></span>)</span></td>
        </tr>
        <tr>
            <td class="btn-primary " > <p class="center" onclick="full_screen()"> 全屏模式</p></td>
        </tr>
        <tr>
            <td >
                <div class="input_div center" style="display: block;">
                    <input name="title" class="search_input" id="appendedInputButton"   type="text" value="<?php echo $data['title']?>"/>
                    <span class="btn btn-primary  " onclick="gouSerach(1)" >搜索</span>
                </div>
                <p class="center" id="listBelong" >
                    <input type="hidden" id="goBelong"  value="<?php echo $data['belong'] ?>">
                    <a class="btn <?php echo $data['belong']==0?'active btn-primary':' btn-success'?>"  id="belong0"  onclick="belongChange_static(0)" href="javascript:;" >全部</a>
                    <?php foreach($list as $v){ ?>
                        <a class="btn btn-sm  <?php echo $data['belong']== $v['belong'] ?'active btn-primary':'btn-success'?>" value="<?php echo $v['belong'] ?>" id="belong<?php echo $v['belong'] ?>"  onclick="belongChange_static(<?php echo $v['belong'] ?>)" href="javascript:;"><?php echo $v['name'] ?></a>
                        <?php }?>
                </p>
                <div class="layui-input-inline center" id="goTypeInput">
                    <input type="hidden" value="<?php echo $data['type'] ?>" name="goType" id="goType">
                </div>
            </td>
                <!-- <button class="btn btn-primary" type="submit">搜索</button> -->
        </tr>
        <?php }?>
        </thead>
        <tbody id="content_append">
                        
        </tbody>
    </table>

 

<!-- 当前视频id -->
<input type="hidden" value="0" id="swiper_type">
<input type="hidden" value="0" id="swiper_page">

<input type="hidden" value="0" id="full_model">
<input type="hidden" value="<?php echo isset($data['page'])?$data['page']:1; ?>" id="goPage">
<input type="hidden" id="goPageCount" value="<?php echo isset($data['count'])?$data['count']:0; ?>">
<input type="hidden"  id="is_bofang_type" value="<?php $userlogin = Yii::$app->session->get('userlogin'); echo $userlogin['is_bofang'] ;?>">

<script>
    //全屏模式
    function full_screen(){
        $('#content_append').html("");
        //初始化
        $("#swiper_type").val(0)
        $("#swiper_page").val(0)
        $("#full_model").val(1);
        // $(".video_header tr").html(' <p class="center btn-primary" onclick="full_out()">退出全屏</p> ');
        $(".video_header").css("display","none");
        $(".video_footer").css("display","none");
        var goPage =$("#goPage").val();
        var title =  $('#appendedInputButton').val();
        var url="/cn/video/collect-video?page="+goPage+"&belong=<?php echo $data['belong'] ?>&title="+title+"&html=2";
        getprintHtml(url,getprintHtml_content_append,goPage);
    }
    //退出全屏
    function full_out(){
        $("#full_model").val(0);
        $(".video_header").css("display","block");
        $(".video_footer").css("display","block");
        $('.go_hidden').removeClass('hiddened');
        $('#content_append').html("");
        static_gou();
    }
    //滚动定位
    function scoll_click(swiper_type){
        var swiper_type =  $("#swiper_type").val()
        // 滚动条偏移
        // $(".swiper-pagination").scrollTop($(".swiper-pagination").scrollTop() + $('.swiper-pagination-bullet-active').offset().top - $(".swiper-pagination").offset().top);
        var newmsg_top = parseInt($('.swiper-pagination')[0].scrollHeight );
        var window_top =  $(window).height()/2;
        // 0上 1下
        if(swiper_type==0){
            var change_top = $(".swiper-pagination").scrollTop() + $('.swiper-pagination-bullet-active').offset().top - $(".swiper-pagination").offset().top
            // console.log(window_top)
            change_top = change_top -window_top;
            if( change_top>0){
                // --有动画效果
                $(".swiper-pagination").animate({ scrollTop:change_top  }, 100); 
            }else{
                //返回头部
                $(".swiper-pagination").animate({ scrollTop:0  }, 100); 
            }
        }else{
            var change_top = $(".swiper-pagination").scrollTop() + $('.swiper-pagination-bullet-active').offset().top - $(".swiper-pagination").offset().top
            // console.log(window_top)
            change_top = change_top -window_top;
            if(change_top<newmsg_top){
                // --有动画效果
                $(".swiper-pagination").animate({ scrollTop:change_top  }, 100); 
            }else{
                //返回底部
                $(".swiper-pagination").animate({ scrollTop:newmsg_top  }, 100); 
            }
        }

    }


    function belongChange_static(belong){
        // 重置状态page和search
        // $("#goSearch").val('');
        $("#goPage").val(1);
        $('#goBelong').val(belong);
        $('#listBelong a').removeClass('active'); 
        $('#listBelong a').removeClass('btn-primary'); 
        $('#listBelong a').addClass('btn-success'); 
        $('#belong'+belong).removeClass('btn-success'); 
        $('#belong'+belong).addClass('active btn-primary'); 
        if(belong==0){
            var inputvalue ="";
            $("#goTypeInput").html(inputvalue);
            gouSerach(1) 
        }else{
            $.ajax({
                url: '/cn/video-api/get-belong', // 跳转到 action 
                data:{
                    belong:belong,
                    type:0
                },
                type: 'post',
                dataType: 'json',
                success: function (data) {
                    if(data){
                        $("#goTypeInput").html(data.data);
                    }
                    gouSerach(1)    
                },
            });
        }
    }
    function typeChange(type){
        // 重置状态page和search
        // $("#appendedInputButton").val('');
        $("#goPage").val(1);
        $('#goType').val(type);
        $('#listType a').removeClass('active'); 
        $('#listType a').removeClass('btn-primary'); 
        $('#type'+type).addClass('active btn-primary');
        gouSerach(1)

    }



    $(function(){
        $('.go_hidden').removeClass('hiddened');
        static_gou();
        // var belong = $('#goBelong').val(); 
        // var type = $('#goType').val(); 
        // $.ajax({
        //     url: '/cn/video-api/get-belong', // 跳转到 action 
        //     data:{
        //         belong:belong,
        //         type:type
        //     },
        //     type: 'post',
        //     dataType: 'json',
        //     success: function (data) {
        //         // console.log(data)
        //         if(data&&belong!=0){
        //             $("#goTypeInput").html(data.data);
        //         }
        //     },
        // });
    })

    function static_nextPage(goPage){
        var full_model =$("#full_model").val();
        var goBelong =$("#goBelong").val();
        var goType =$("#goType").val();
        if(!goType){ var  goType =''; }
        var title =  $('#appendedInputButton').val();
        if(full_model==1){
            var url="/cn/video/collect-video?page="+goPage+"&type="+goType+"&belong="+goBelong+"&title="+title+"&html=2";
            getprintHtml(url,getprintHtml_content_append_full_model,goPage);
        }else{
            var url="/cn/video/collect-video?page="+goPage+"&type="+goType+"&belong="+goBelong+"&title="+title+"&html=1";
            getprintHtml(url,getprintHtml_content_append,goPage);
       }
    }
    function  static_gou(){
        var goPage =$("#goPage").val();
        static_nextPage(goPage);
        // imageError();//图片报错监听
    }


    function  gou_new(){
        $('#content_append').html(''); 
        static_gou();
    }

    //跳转页面
    function  gouSerach(goPage){
        if(goPage){
            $(".footer_go_input").val(goPage)
        }
        var goPage =$(".footer_go_input").val()
        $("#goPage").val(goPage);
        gou_new();
        // console.log(gouSerach)
        // var title =  $('#appendedInputButton').val();
        // window.location.href="/cn/video/query-video?page="+gouSerach+"&belong=<?php echo $data['belong'] ?>&title="+title;
    }




    // 我的收藏，极品
    function  like_my(id){ 
        // $(".collect_id"+id).addClass('btn-success');
        var video_id =$("#form"+id+"  input[name=video_id]").val();
        var title =$("#form"+id+"  input[name=title]").val();
        $.ajax({
            url: '/cn/video-api/like-update', // 跳转到 action 
            type: 'post',
            data:{video_id:video_id,title:title},
            dataType: 'json',
            success: function (data) {
                if(data.code==1){
                    $(".my_like_"+id).removeClass('btn-defult');
                    $(".my_like_"+id).addClass('btn-success');
                }else{
                    $(".my_like_"+id).removeClass('btn-success');
                    $(".my_like_"+id).addClass('btn-defult');
                }
                removeLoading()
            },
        });
    } 

     // 我的收藏
     function  Update_my(id){ 
        // layer.confirm('确认删除?', function(index){
            // layer.close(index);
        // });  
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
        ,content: ' <div class="center" style="margin-top:20px">确定删除？</div>'
        ,success: function(layero){
          var btn = layero.find('.layui-layer-btn');
          btn.find('.layui-layer-btn0').click(function(){
 
            var video_id =$("#form"+id+"  input[name=video_id]").val();
            var title =$("#form"+id+"  input[name=title]").val();
            $.ajax({
                url: '/cn/video-api/myupdate', // 跳转到 action 
                type: 'post',
                data:{video_id:video_id,title:title},
                dataType: 'json',
                success: function (data) {
                    if(data.code==1){
                        $(".my_collect_"+id).removeClass('btn-defult');
                        $(".my_collect_"+id).addClass('btn-success');
                        // window.location.reload();
                    }else{
                        $(".my_collect_"+id).removeClass('btn-success');
                        $(".my_collect_"+id).addClass('btn-defult');
                        // window.location.reload();
                        $(".remove_"+id).remove();
                        
                    }
                },
            });
  
          });
        }
        });  
 
    } 
    
        // //滚动条触发事件
        // $(window).scroll(function() {
        // //监听事件内容
        // // console.log(getScrollHeight()) 
        // // console.log(getWindowHeight() + getDocumentTop())  
        //     //自动播放插件
        //     var is_bofang = $('#is_bofang_type').val();
        //     if(is_bofang==1){
        //         var goPageCount = $("#goPageCount").val()
        //         var top_hidden =$("#top_hidden").val()
        //         var td_num = Math.floor((getDocumentTop()+100)/340)
        //         var id =  $("#content_append").find("td:eq("+td_num+") input[name=video_id]").val();
        //         var now_video =$("#now_video").val();
        //         //自动播放
        //         if( id!=now_video){
        //             videoList(id,0,0);
        //         }
        //     }

        // });
</script>



 



