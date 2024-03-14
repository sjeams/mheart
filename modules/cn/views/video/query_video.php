<style>
/*
 * @Author: sjeam
 * @Date: 2023-03-29 17:29:52
 * @Description: 
 */
    .layui-layer-btn a{
        width: 40%;
        max-width: 200px;
    }
    #content_append td{
        height: 340px!important;
    }
</style>
<form>
    <table class="table table-bordered  tablestyle"  >
    <thead>
        <?php if($graden>0){?>
        <tr>
        <td class="btn-primary go_hidden  hiddened" ><input type="text" value="1"   class="footer_go_input" /><span  class="footer_go" onclick="gouSerach()" >GO( <span id="total_count"><?php echo isset($data['count'])?$data['count']:0; ?></span>)</span></td>
        </tr>
        <tr>
            <td >
                <div class="input_div center" style="display: block;">
                    <input name="title" class="search_input" id="appendedInputButton"   type="text" value="<?php echo $data['title']?>"/>
                    <span class="btn btn-primary  " onclick="gouSerach(1)" >搜索</span>
                </div>
                <p class="center" id="listBelong" >
                    <input type="hidden" id="goBelong"  value="<?php echo $data['belong'] ?>">
                    <a class="btn <?php echo $data['belong']==0?'active btn-primary':' btn-success'?>"  id="belong0"  onclick="belongChange(0)" href="javascript:;" >全部</a>
                    <?php foreach($list as $v){ ?>
                        <a class="btn btn-sm  <?php echo $data['belong']== $v['belong'] ?'active btn-primary':'btn-success'?>" value="<?php echo $v['belong'] ?>" id="belong<?php echo $v['belong'] ?>"  onclick="belongChange(<?php echo $v['belong'] ?>)" href="javascript:;"><?php echo $v['name'] ?></a>
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

</form>
<!-- 当前视频id -->
<input type="hidden" value="<?php echo isset($data['page'])?$data['page']:1; ?>" id="goPage">
<input type="hidden" id="goPageCount" value="<?php echo isset($data['count'])?$data['count']:0; ?>">


<script>
    function belongChange(belong){
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
        gou();
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
    function nextPage(goPage){

        var goBelong =$("#goBelong").val();
        var goType =$("#goType").val();
        if(!goType){ var  goType =''; }
        var title =  $('#appendedInputButton').val();
        var url="/cn/video/query-video?page="+goPage+"&type="+goType+"&belong="+goBelong+"&title="+title+"&html=1";
        var html = getprintHtml(url);
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
        // imageError();//图片报错监听
        // var goBelong =$("#goBelong").val();
        // var goType =$("#goType").val();
        // if(!goType){ var  goType =''; }
        // var title =  $('#appendedInputButton').val();
        // window.location.href="/cn/video/query-video?page="+goPage+"&type="+goType+"&belong="+goBelong+"&title="+title;
        // window.location.href="/cn/video/query-video?page="+goPage+"&belong=<?php echo $data['belong'] ?>&title=<?php echo $data['title'] ?>";
    }


    function  gou_new(){
        $('#content_append').html(''); 
        gou();
        var  total_count =  $('.return_count').eq(0).val();
        $('#total_count').html(total_count)
        $("#goPageCount").val(total_count)
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

    // 我的收藏
    function  Update_my(id){ 
        // $(".collect_id"+id).addClass('btn-success');
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
                }else{
                    $(".my_collect_"+id).removeClass('btn-success');
                    $(".my_collect_"+id).addClass('btn-defult');
                }
            },
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



 



