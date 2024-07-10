 
    
    
    //跳转页面
    function  gouSerach(){
        var goPage_list =$(".footer_go_input").val();
        $("#goPage_list").val(goPage_list);
        gou();
    }
      //优先级0
    // ;(function () {
        // alert("function执行");
    // }())
    // 优先1
    $(document).ready(function(){ 
        gouhtml(0)
    //     //搜索框
    //     // $('.go_hidden').removeClass('hiddened');
    //     // var goPage_list =$("#goPage_list").val();
    //     // var go_input ='<input type="text" value="'+goPage_list+'"   class="footer_go_input" /><span onclick="gouSerach()"  class="footer_go">GO</span>';
    //     // $('.go_hidden').html(go_input);
    //     //getbelong 获取来源
    //     var belong = $('#goBelong').val(); 
    //     var type = $('#goType').val(); 
    //     gouSerachType(belong,type);
    });
    //查询type
    function  gouSerachType(belong,type){
        $.ajax({
            url: '/cn/video-api/get-belong', // 跳转到 action 
            data:{
                belong:belong,
                type:type
            },
            type: 'post',
            dataType: 'json',
            success: function (data) {
                // console.log(data)
                if(data){
                    $("#goTypeInput").html(data.data);
                    // gou();
                }
            },
        });
    }
    
    // 优先2
    // $(function(){
    //     var is_cache =  <?php $userlogin = Yii::$app->session->get('userlogin'); echo $userlogin['is_cache'] ;?>;
    //     var page_isnext =$("#page_isnext").val(); //是否有下一页
    //     if(is_cache==1&&page_isnext==1){
    //         goCache();
    //     }
    // }); 
    // // 优先3
    // window.onload = function () {
    //     $('.collect-video-style').each(function(i){
    //      var url_link =    $('.collect-video-style').eq(i).data("url");
    //      $('.collect-video-style').eq(i).attr('style',"background-image:url('"+url_link+"')");
    //     })
    // }
    function isGetCaches(){
        var is_cache =$("#is_cache").val();
        var page_isnext =$("#page_isnext").val(); //是否有下一页
        if(is_cache==1&&page_isnext==1){
            goCache(1);
        }
    }


    function moreGetCaches(){
        var setnum =$("#setCaches").val();
        goCache(setnum)

    }
    // 开启缓存
    function goCache(setnum=0){
        // console.log(setnum)
        $('.caiji_name').text('采集...')
        var goBelong =$("#goBelong").val();
        var goType =$("#goType").val();
        if(!goType){ var  goType =''; }
        var goSearch =$("#goSearch").val();
        var goPage =$("#goPage").val();
        var goPage_list =$("#goPage_list").val();
        $.ajax({
            url: '/cn/video-api/get-cache', // 跳转到 action 
            type: 'post',
            // async:false,
            data:{ 
                setnum:setnum,
                page:goPage,
                type:goType,
                page_list:goPage_list,
                belong:goBelong,
                search:goSearch,
            },
            dataType: 'json',
            success: function (data) {
                if(data.code==1){
                    $('.caiji_name').text('采集√')
                    if(setnum>1){//手动缓存
                        $("#goPage_list").val(data.data);
                        gouhtml(0);
                    }
                }else{
                    $('.caiji_name').text('采集×')
                }
                // removeLoading()
                // window.location.reload();   
            }
        });
    }

    function typeChange(type){

        $("#goPage").val(1);
        $("#goPage_list").val(1);
        $('#goType').val(type);
        $('#listType a').removeClass('active'); 
        $('#listType a').removeClass('btn-primary'); 
        $('#type'+type).addClass('active btn-primary'); 
        // 重置状态page和search
        if($("#goBelong").val()!=0){
            $("#goSearch").val('');
        }
        
        gou();
    }

    function belongChange(belong){

        $("#goPage").val(1);
        $("#goPage_list").val(1);
        $('#goBelong').val(belong);
        $('#listBelong a').removeClass('active'); 
        $('#listBelong a').removeClass('btn-primary'); 
        $('#listBelong a').addClass('btn-success'); 
        $('#belong'+belong).addClass('active btn-primary'); 
        $('#goType').val(0);
        // 重置状态page和search
        if($("#goBelong").val()!=0){
            $("#goSearch").val('');
        }
        gou();
        gouSerachType(belong,0);
    }
    // istype 是否根据type更新 ,0 更新belong , 1更新 belong、type
    function clearModel(istype){
        addLoading()
        var goBelong =$("#goBelong").val();
        var goType =$("#goType").val();
        $.ajax({
            url: '/cn/video-api/clear-session', // 跳转到 action 
            type: 'post',
            dataType: 'json',
            data:{belong:goBelong,type:goType,istype:istype},
            success: function (data) {
                removeLoading()
                if(data.code==0){    
                    // alert(data.message)
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
                        ,content: ' <div class="center" style="margin-top:20px">'+data.message+'</div>'
                        ,success: function(layero){
                            removeLoading()
                        }
                    })
                }else{
                    $("#goPage_list").val(1);
                    gou();
                }
            }
        }); 
    }
    function clearSession(istype){
        // var goBelong =$("#goBelong").val();
        // var goType =$("#goType").val();
        // var goPage =$("#goPage").val();
        // var goSearch =$("#goSearch").val();
        // var goPage_list =$("#goPage_list").val();
        // window.location.href="/cn/video/list?clear=1&"+"page="+goPage+"&type="+goType+"&page_list="+goPage_list+"&belong="+goBelong+"&search="+goSearch;
        if(istype){
            var type_str ='清空type缓存？'; 
        }else{
            var type_str ='清空belong缓存？';
        }
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
            ,content: ' <div class="center" style="margin-top:20px">'+type_str+'</div>'
            ,success: function(layero){
                var btn = layero.find('.layui-layer-btn');
                btn.find('.layui-layer-btn0').click(function(){
                    clearModel(istype);
            });
  
            }
        })

    }

    function  prevPage(){
        $("#goPage").val(1);
        var goPage_list =$("#goPage_list").val();
        if(goPage_list>1){  $("#goPage_list").val(parseInt(goPage_list)-1); }
        gou();
    }
    function  nextPage(){
        $("#goPage").val(1);
        var goPage_list =$("#goPage_list").val();
        $("#goPage_list").val(parseInt(goPage_list)+1);
        gou();
    }

    // 手动缓存
    function  gouCache( ){
        // $.ajax({
        //     url: '/cn/video-api/ajax-start', // 跳转到 action 
        //     type: 'post',
        //     dataType: 'json',
            // success: function (data) {
                moreGetCaches()//手动缓存
            // },
        // });
    }
    //查询
    function  gou( ){
        // $.ajax({
        //     url: '/cn/video-api/ajax-start', // 跳转到 action 
        //     type: 'post',
        //     dataType: 'json',
        //     success: function (data) {
                isGetCaches()//开启缓存，固定缓存一页
                gouhtml(0);
        //     },
        // });
    }
    function  gouhtml(clearRload){
        var goBelong =$("#goBelong").val();
        var goType =$("#goType").val();
        if(!goType){ var  goType =''; }
        var goSearch =$("#goSearch").val();
        var goPage =$("#goPage").val();
        var goPage_list =$("#goPage_list").val();
        if(!goPage){
            goPage=1;
        }
        if(clearRload){
            window.location.href="/cn/video/list?page="+goPage+"&type="+goType+"&page_list="+goPage_list+"&belong="+goBelong+"&search="+goSearch;
            // $('.list_html').html('采集中，请稍后...')
        }else{
            var url ="/cn/video/list?page="+goPage+"&type="+goType+"&page_list="+goPage_list+"&belong="+goBelong+"&search="+goSearch+"&html=1";
            getprintHtml(url,getprintHtml_list_html);
        }
    } 

    
    function is_last_button(){
        var is_last_page = $("#goPage_list").val()
        if(is_last_page>1){
          var is_last_page_html ='<span  class="btn btn-primary" onclick="prevPage()">上一页</span>'
        }else{
            var is_last_page_html = '<span  class="btn btn-defult"  >上一页</span>  '
        }
        $('.is_last_page_button').html(is_last_page_html)
    }

    function is_next_button(){
        var is_next_page = $("#page_isnext").val()
        if(is_next_page){
          var is_next_page_html ='<span  class="btn btn-primary" onclick="nextPage()">下一页</span>'
        }else{
            var is_next_page_html = '<span  class="btn btn-defult"  >下一页</span>  '
        }
        $('.is_next_page_button').html(is_next_page_html)
    }


    // 刷新页面  ---刷新当前
    function  localRload(){
    //     window.location.reload();
    gouhtml(1);   
    }
    // 刷新页面  ---跳转刷新
    function  clearRload(){
        $(".video_header").css("display","inline-block");
        $(".video_footer").css("display","inline-block");
        gouhtml(0);
    }

    // 收藏
    function  Update(id){ 
        // console.log(id);
        // $(".collect_id"+id).addClass('btn-success');
        var url =$("#form"+id+"  input[name=url]").val();
        var title =$("#form"+id+"  input[name=title]").val();
        var imageurl =$("#form"+id+"  input[name=imageurl]").val();
        var belong =$("#form"+id+"  input[name=belong]").val();
        var link =$("#form"+id+"  input[name=link]").val();
        var collect = $("#form"+id+"  input[name=is_collect]").val();// 是否收藏
        $.ajax({
            url: '/cn/video-api/update', // 跳转到 action 
            type: 'post',
            data:{url:url,title:title,imageurl:imageurl,belong,belong,type:10,link:link,up:1,is_collect:collect},
            dataType: 'json',
            success: function (data) {
                if(collect==1){
                    $("#form"+id+"  input[name=is_collect]").val(0);
                    $(".collect_id"+id).removeClass('btn-success');
                    $(".collect_id"+id).addClass('btn-defult');
                }else{
                    $("#form"+id+"  input[name=is_collect]").val(1);
                    $(".collect_id"+id).removeClass('btn-defult');
                    $(".collect_id"+id).addClass('btn-success');
                }
                removeLoading()
            }
        });
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
                removeLoading()
            },
        });
    } 


    


 

 



