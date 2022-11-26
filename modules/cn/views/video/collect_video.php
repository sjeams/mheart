<style>

    .video_box{
        background: url(/ckplayer/css/images/play.png) no-repeat 70% center;
        background-size: 60% 60%;
        border: 8px solid rgba(255,255,255,.6);
        border-radius: 50%;
        box-sizing: border-box;
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        width: 80px;
        height: 80px;
        position: absolute;
        /* display: none; */
        z-index: 90;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        cursor: pointer;
        transition: .2s;
    }
    .ckplayer-ckplayer{
        border-radius: 2%;
    }
    .collect-video-style{
        border-radius:1%!important;width:100%;max-width:420px;margin:auto; height:300px;position:relative;background-repeat: no-repeat;background-position: center;background-size:auto 100%;
    }
    .layui-layer-btn a{
        width: 40%;
        max-width: 200px;
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
<input type="hidden" value="0" id="now_video"> 
<input type="hidden" value="<?php echo $data['page'] ?>" id="goPage">

<script>
    $(function(){
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
        }
    }
    function  gou(){
        var goPage =$("#goPage").val();
        nextPage(goPage);
        // window.location.href="/cn/video/collect-video?page="+goPage+"&belong=<?php echo $data['belong'] ?>&title=<?php echo $data['title'] ?>";
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


</script>



 



