<style>
    .layui-layer-btn a{
        width: 40%;
        max-width: 200px;
    }
    #content_append td{
        height: 340px!important;
    }
</style>


<form     >
    <table class="table table-bordered  tablestyle"  >
    <thead>
        <?php if($login>0){?>
        <tr>
            <td class="btn-primary go_hidden  hiddened" ><input type="text" value="1"   class="footer_go_input" /><span  class="footer_go"  onclick="gouSerach()">GO(232323)</span></td>
        </tr>
        <tr>
            <td >
                <div class="input_div center" style="display: block;">
                    <input name="title" class="search_input" id="appendedInputButton"   type="text" value="<?php echo $data['title']?>"/>
                    <button class="btn btn-primary search_button" onclick="nextPage()" type="sbumit">搜索</button>
                </div>
                <p class="center">
                    <a class="btn <?php echo $data['belong']==0?'active btn-primary':' btn-default'?>" href="/cn/video/collect-video?page=1&belong=0&title=<?php echo $data['title']?>" >全部</a>
                    <?php foreach($list as $v){ ?>
                        <a class="btn  <?php echo $data['belong']==$v['belong']?'active btn-primary':' btn-default'?>" href="/cn/video/collect-video?page=1&belong=<?php echo $v['belong']?>&title=<?php echo $data['title']?>" ><?php echo $v['name']?></a>
                        <?php }?>

                </p>

            </td>
                <!-- <button class="btn btn-primary" type="submit">搜索</button> -->
        </tr>
        <?php }?>
        </thead>
        <tbody id="content_append">
                        
        </tbody>
    </table>

</form>

<!-- 当前视频id -->
<input type="hidden" value="<?php echo isset($data['page'])?$data['page']:1; ?>" id="goPage">
<input type="hidden" id="goPageCount" value="<?php echo isset($data['count'])?$data['count']:0; ?>">
<input type="hidden"  id="is_bofang_type" value="<?php $userlogin = Yii::$app->session->get('userlogin'); echo $userlogin['is_bofang'] ;?>">

<script>
    $(function(){
        $('.go_hidden').removeClass('hiddened');
        gou();
    })
    function nextPage(goPage){
       var title =  $('#appendedInputButton').val();
       var url="/cn/video/collect-video?page="+goPage+"&belong=<?php echo $data['belong'] ?>&title="+title+"&html=1";
       var html = getprintHtml(url);
    //    console.log(html)
        if(html){
            $("#goPage").val(goPage);
            $('#content_append').append(html);
            //搜索框
            // var goPageCount = $("#goPageCount").val()
            // var go_input ='<input type="text" value="'+goPage+'"   class="footer_go_input" /><span onclick="gouSerach()"  class="footer_go">GO('+goPageCount+')</span>';
            // $('.go_hidden').html(go_input);
        }
    }
    function  gou(){
        var goPage =$("#goPage").val();
        nextPage(goPage);
        imageError();//图片报错监听
        // window.location.href="/cn/video/collect-video?page="+goPage+"&belong=<?php echo $data['belong'] ?>&title=<?php echo $data['title'] ?>";
    }

    //跳转页面
    function  gouSerach(){
        var gouSerach =$(".footer_go_input").val();
        // console.log(gouSerach)
        var title =  $('#appendedInputButton').val();
        window.location.href="/cn/video/query-video?page="+gouSerach+"&belong=<?php echo $data['belong'] ?>&title="+title;
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
                url: '/cn/video/myupdate', // 跳转到 action 
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
    
        //滚动条触发事件
        $(window).scroll(function() {
        //监听事件内容
        // console.log(getScrollHeight()) 
        // console.log(getWindowHeight() + getDocumentTop())  
            //自动播放插件
            var is_bofang = $('#is_bofang_type').val();
            if(is_bofang==1){
                var goPageCount = $("#goPageCount").val()
                var top_hidden =$("#top_hidden").val()
                var td_num = Math.floor((getDocumentTop()+100)/340)
                var id =  $("#content_append").find("td:eq("+td_num+") input[name=video_id]").val();
                var now_video =$("#now_video").val();
                //自动播放
                if( id!=now_video){
                    videoList(id,0,0);
                }
            }

        });
</script>



 



