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
            <div class="layui-input-inline center">
                <input type="text" readonly="readonly" class="center form-control mr-sm-2" style="display:inline-block"   placeholder="Search"  value="<?php echo $data['title'] ?>" id="goSearch">
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
<input type="hidden" value="<?php echo isset($data['page'])?$data['page']:1; ?>" id="goPage">
<input type="hidden" id="goPageCount" value="<?php echo isset($data['count'])?$data['count']:0; ?>">


<script>



$('#goSearch').click(function(){
        var goSearch =$("#goSearch").val();
        var belong =$("#goBelong").val();
        $.ajax({
            url: '/cn/video-api/get-kwords', // 跳转到 action
            data:{
                belong: belong,
            },
            type: 'post',
            dataType: 'json',
            success: function (data) {
                // 关键词
                if(data.code==1){    
                    var str ='<p>搜索</p><p> <input type="text" class="center form-control mr-sm-2"   placeholder="Search"  value="'+goSearch+'" id="search_text"><span class="btn btn-primary  " onclick="layerReSerach()">重新采集</span><span class="btn btn-primary  " onclick="layerGoSearch()">搜索</span><span class="btn btn-primary  " onclick="cancelSerach()">取消</span></p> <div class="layui-btn-container">';
                    $.each(data.data,function(index,value){
                        str = str+'<span class="btn btn-sm  btn-success"  onclick=layerSearch("'+value.search+'")>'+value.search+'</span>';
                    })
                    var content  = str+'</div>';
                    // <table class="layui-table" lay-even="" lay-skin="nob">
                    layer.open({
                        type: 1
                        ,title: false //不显示标题栏
                        ,closeBtn: false
                        ,area: ['100%','100%']
                        // ,area: '300px;'// 由于样式会乱，所以设置一个小的背景
                        ,shade: 0.8
                        // ,shadeClose:false
                        ,id: 'LAY_layuipro_kwords' //设定一个id，防止重复弹出
                        // ,btn: ['搜索', '取消']
                        ,btnAlign: 'c'

                        ,fixed:true //固定
                        ,moveType: 1 //拖拽模式，0或者1
                        ,content: ' <div class="center rotatable-element" style="padding:20px">'+content+'</div>'
                        ,success: function(layero){
                            // var btn = layero.find('.layui-layer-btn');
                            // btn.find('.layui-layer-btn0').click(function(){
                            //     var search_text =$('#search_text').val()
                            //     layerSearch(search_text)
                            // })
                            // btn.find('.layui-layer-btn1').click(function(){
                            //     removeLoading()
                            // })
                        }
                    })
                }else{
                    removeLoading()
                }
            } 
        }); 
    })

    //不能搜索空内容
    function layerGoSearch(){
        var search_text =$('#search_text').val()
        if(search_text){
            layerSearch(search_text);
        }else{
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
                ,content: ' <div class="center" style="margin-top:20px">搜索不能为空!</div>'
                ,success: function(layero){
                    removeLoading()
                }
            })
        }
    }
    function layerSearch(search_text){
        cancelSerach();
        $('#goSearch').val(search_text);
        $('#appendedInputButton').val(search_text);
        gouSerach(1);//重新搜索
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

        var goBelong =$("#goBelong").val();
        var goType =$("#goType").val();
        if(!goType){ var  goType =''; }
        var title =  $('#appendedInputButton').val();
        var url="/cn/video/query-video?page="+goPage+"&type="+goType+"&belong="+goBelong+"&title="+title+"&html=1";
        getprintHtml(url,getprintHtml_content_append,goPage);
        // var html = getprintHtml(url);
        // if(html){
        //     $("#goPage").val(goPage);
        //     $('#content_append').append(html);
        //     //搜索框
        //     // var goPageCount = $("#goPageCount").val()
        //     // var go_input ='<input type="text" value="'+goPage+'"   class="footer_go_input" /><span onclick="gouSerach()"  class="footer_go">GO('+goPageCount+')</span>';
        //     // $('.go_hidden').html(go_input);
        // }
    }
    function  static_gou(){
        var goPage =$("#goPage").val();
        static_nextPage(goPage);
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



 



