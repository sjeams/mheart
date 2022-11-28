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
            <td >
                <div class="input_div center" style="display: block;">
                    <input name="title" class="search_input" id="appendedInputButton"   type="text" value="<?php echo $data['title']?>"/>
                    <button class="btn btn-primary search_button" onclick="nextPage()" type="sbumit">搜索</button>
                </div>
                <p class="center">
                    <a class="btn <?php echo $data['belong']==0?'active btn-primary':' btn-default'?>" href="/cn/video/query-video?page=1&belong=0&title=<?php echo $data['title']?>" >全部</a>
                    <?php foreach($list as $v){ ?>
                        <a class="btn  <?php echo $data['belong']==$v['belong']?'active btn-primary':' btn-default'?>" href="/cn/video/query-video?page=1&belong=<?php echo $v['belong']?>&title=<?php echo $data['title']?>" ><?php echo $v['name']?></a>
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

<input type="hidden" value="<?php echo $data['page'] ?>" id="goPage">
<input type="hidden" id="goPageCount" value="<?php echo isset($data['count'])?$data['count']:0; ?>">
<input type="hidden"  id="is_bofang_type" value="<?php $userlogin = Yii::$app->session->get('userlogin'); echo $userlogin['is_bofang'] ;?>">

<script>
    $(function(){
        gou();
    })
    function nextPage(goPage){
       var title =  $('#appendedInputButton').val();
       var url="/cn/video/query-video?page="+goPage+"&belong=<?php echo $data['belong'] ?>&title="+title+"&html=1";
       var html = getprintHtml(url);
    //    console.log(html)
        if(html){
            $("#goPage").val(goPage);
            $('#content_append').append(html);
        }
    }
    function  gou(){
        var goPage =$("#goPage").val();
        nextPage(goPage);
        // window.location.href="/cn/video/query-video?page="+goPage+"&belong=<?php echo $data['belong'] ?>&title=<?php echo $data['title'] ?>";
    }

    // 我的收藏
    function  Update_my(id){ 
        // $(".collect_id"+id).addClass('btn-success');
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
                }else{
                    $(".my_collect_"+id).removeClass('btn-success');
                    $(".my_collect_"+id).addClass('btn-defult');
                }
            },
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



 



