
<input type="hidden" value="<?php echo $isnext ?>" id="page_isnext">
<?php if($graden>0){ ?>
    <p class="center  "  >
        <a class="btn_link " href="https://laoyavideo.com/" class="btn">  老鸭头  </a><a class="btn_link " href="https://yinwovideo.com/"> 淫窝 </a>
        <a class="btn_link " href="https://sewovideo.com/"> 色窝 </a>  <a class="btn_link " href="https://siwazyw.cc/index.php/vod/type/id/20.html"> 丝袜 </a>
        <a class="btn_link " href="https://xjav10.cc/">  香蕉 </a> 
    </p>
<?php } ?> 
<!-- 视频end -->
<form action="/cn/video/list" method="post" class="  ">
    <table class="table table-bordered  tablestyle"  >
        <thead>
            <tr>
                <td>
                    <!-- <div class="layui-form-item center"> -->
                        <div class="layui-input-inline center">
                            <input type="hidden" id="goBelong"  value="<?php echo $data['belong'] ?>">
                            <p class="center" id="listBelong" >
                                <?php foreach($category as    $v){  ?>
                                    <a class="btn btn-sm  <?php echo $data['belong']== $v['belong'] ?'active btn-primary':'btn-success'?>" value="<?php echo $v['belong'] ?>" id="belong<?php echo $v['belong'] ?>" onclick="belongChange(<?php echo $v['belong'] ?>)" href="javascript:;"><?php echo $v['name'] ?></a>
                                <?php }  ?>
                            </p>
                        </div>
                        <!-- <label class="layui-form-label">类型typ</label> -->
                        <div class="layui-input-inline center" id="goTypeInput">
                            <input type="hidden" value="<?php echo $data['type'] ?>" name="goType" id="goType">
                        
                        </div>
                        <!-- <label class="layui-form-label">搜索</label> -->
                        <div class="layui-input-inline center">
                            <input type="<?php echo $data['issearch']==1?'text':'hidden'; ?>" class="center form-control mr-sm-2" type="search" placeholder="Search"  value="<?php echo $data['search'] ?>" id="goSearch">
                        </div>

                        <!-- <label class="layui-form-label">采集页码</label> -->
                        <div class="layui-input-inline center">
                            <span  class="btn btn-primary" onclick="prevPage()">上一页</span>
                            <input type="text" class=" " style="text-align: center;margin: 0px auto;width:28%" value="<?php echo $data['page_list'] ?>" id="goPage_list">
                
                            <?php if($isnext){ ?>
                                <span  class="btn btn-primary" onclick="nextPage()">下一页</span>    
                            <?php }else{ ?>
                                <span  class="btn btn-defult"  >下一页</span>    
                            <?php  }?>
                        </div>
                        <div class="layui-input-inline center">
                            <p class="center">
                                <input type="hidden" value="<?php echo $data['page']?>"  placeholder="page"  id="goPage">
                                <span  class="btn btn-primary" onclick="gou()"> GO  </span>
                                <!-- <?php if(!$data['list_type']){?> 
                                <span  class="btn btn-primary" onclick="changeType()"> 模式 </span>
                                <?php }?> -->
                                <span  class="btn btn-primary" onclick="clearModel()"> 更新 </span>
                                <span  class="btn btn-primary" onclick="clearSession()"> 刷新 </span>
                            </p>
                        </div>
                        <div class="layui-input-inline center">
                            <p class="center">
                                <input type="text" value="5"  placeholder="setCaches"  id="setCaches">
                                <span  class="btn btn-primary" onclick="setCaches()"> 手动缓存 </span>
                            </p>
                        </div>
                    <!-- </div> -->
                </td>
            </tr>
        </thead>
        <tbody class="list_html">
            <?php if($content){ $kss=0;
            foreach($content as $kss => $v) {  $kss= $kss+1; ?>
                <?php if($v['belong']==0){  //视频 ?>
                    <tr>
                        <td>
                            <!-- <p> <img class="pimage" src="<?php  echo $v['imageurl']?>"   alt="img" ></p> -->
                            <div  class="video<?php echo $kss ?> collect-video-style" style="background-image:url(<?php echo $v['imageurl']?>);"> <span  onclick="videoList(<?php echo $kss ?>,'<?php echo $kss.'c0' ?>')"  class="video_box "></span></div> 
                            <p class="center" onclick="videoDetail('<?php echo $sessionkey?>',<?php echo $kss-1; ?> )"><span><b><?php echo $kss ?>、</b></span>  <?php echo $v['title']?></p>
                </td>
                    </tr>
                    <tr>
                        <td>
                        <span class="check" style="overflow-y:auto;">
                        <?php if($v['video']){ foreach( $v['video'] as$y=> $vdieo){?>
                            <div id="form<?php echo $kss.'c'.$y?>" style="display:none">
                                <input type="hidden" name="url" value="<?php echo $vdieo['url']?>" >
                                <input type="hidden" name="imageurl" value="<?php echo $v['imageurl']?>" >
                                <input type="hidden" name="title" value="<?php echo $vdieo['title']?>" >
                            </div>
                            <!-- <a href="<?php $vdieo['url'] = str_replace('在线播放$','',$vdieo['url']);  echo $vdieo['url']   ?>" target="blank"> <?php echo $vdieo['title']?>  </a> -->
                            <!-- <a href="javascript:;"  onclick="video('<?php echo $kss.'c'.$y?>')"  > <?php echo $vdieo['title']?>  </a> -->
                            <a id="click_video<?php echo $kss.'c'.$y ?>" onclick="videoList(<?php echo $kss?>,'<?php echo $kss.'c'.$y ?>')" class="btn   collect click_video"> <?php echo $vdieo['title']?> </a>
                            <?php } }?>
                            </span>
                        </td>
                
                    </tr>

                <?php   }else{  //采集 ?>
                <div id="form<?php echo $v['id']?>">
                    <input type="hidden" name="video_id" value="<?php echo $v['id']?>" >
                    <input type="hidden" name="url" value="<?php echo $v['url']?>" >
                    <input type="hidden" name="title" value="<?php echo $v['title']?>" >
                    <input type="hidden" name="imageurl" value="<?php echo $v['imageurl']?>" >
                    <input type="hidden" name="type" value="<?php echo $v['type']?>" >
                    <input type="hidden" name="belong" value="<?php echo $v['belong']?>" >
                    <input type="hidden" name="link" value="<?php echo $v['link']?>" >
                    <input type="hidden"  name="is_collect" value="<?php echo $v['collect']?>">
                </div>
                <tr>
                    <td  >
                        <!-- // 第三方URL -->
                        <!-- https://m3u8.huakuibf3.com/m3u8/?url= -->
                        <!-- https://help.siwazywcdn2.com:5278/m3u8.php?url= -->
                        
                        <!-- <a href="https://help.siwazywcdn2.com:5278/m3u8.php?url=<?php $v['url'] = str_replace('在线播放$','',$v['url']);  echo $v['url']   ?>" target="blank"> -->
                        <!-- <p class="center"><img class="pimage" src="<?php echo $v['imageurl']?>"   alt="" ></p> -->
                        <div  class="video<?php echo $v['id']?> collect-video-style" style="background-image:url(<?php echo $v['imageurl']?>);"> <span  onclick="videoList(<?php echo $v['id']?>)"  class="video_box "></span></div> 
                        <p class="center"><span ><b><?php echo $kss ?>、</b></span>  <?php echo $v['title']?></p>
                        <!-- </a> -->
                        <p class="center"> 
                            <!-- <span onclick="video(<?php echo $v['id']?>)" class="btn collect"> 预览</span> -->
                            <span onclick="videoList(<?php echo $v['id']?>)" class="btn btn-primary collect"> 重播 </span>

                            <span onclick="Update_my(<?php echo $v['id']?>)" class="btn collect my_collect_<?php echo $v['id']?> <?php echo $v['my_collect']==1?'btn-success':''  ?>"> 收藏</span>
                            <span onclick="Update(<?php echo $v['id']?>)" class="btn collect collect_id<?php echo $v['id']?> <?php echo $v['collect']==1?'btn-success':''  ?>"> 喜欢</span>
                        </p>
                    </td>
                
                </tr>
                <?php
            } } }
            ?>
            <tr>
                <td class="center"  >
                    <p class="center">
                        <span  class="btn btn-primary" onclick="prevPage()">上一页</span>
                        <span  class="btn btn-primary" onclick="clearSession()"> 刷新 </span>
                        <?php if($isnext){ ?>
                            <span  class="btn btn-primary" onclick="nextPage()">下一页</span>    
                        <?php }else{ ?>
                            <span  class="btn btn-defult"  >下一页</span>    
                        <?php  }?> 
                    </p>
                </td>
            </tr>
        </tbody>
    
    </table>

</form>
 

 
<script>
    //跳转页面
    function  gouSerach(){
        var goPage_list =$(".footer_go_input").val();
        $("#goPage_list").val(goPage_list);
        gou();
    }
    $(function(){
        //搜索框
        // $('.go_hidden').removeClass('hiddened');
        // var goPage_list =$("#goPage_list").val();
        // var go_input ='<input type="text" value="'+goPage_list+'"   class="footer_go_input" /><span onclick="gouSerach()"  class="footer_go">GO</span>';
        // $('.go_hidden').html(go_input);

        //getbelong 获取来源
        var belong = $('#goBelong').val(); 
        var type = $('#goType').val(); 
        
        $.ajax({
            url: '/cn/video/get-belong', // 跳转到 action 
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
                }
            },
        });
 
        
    });
    // 自动加载
    $(document).ready(function(){ 
        // alert("页面加载完成！")；
        var is_cache =  <?php $userlogin = Yii::$app->session->get('userlogin'); echo $userlogin['is_cache'] ;?>;
        if(is_cache==1){
            // console.log(11);
            goCache();
        }
    }); 



    
    function setCaches(){
        $('.caiji_name').text('采集...')
        var goBelong =$("#goBelong").val();
        var goType =$("#goType").val();
        if(!goType){ var  goType =''; }
        var goSearch =$("#goSearch").val();
        var goPage =$("#goPage").val();
        var goPage_list =$("#goPage_list").val();
        var setnum =$("#setCaches").val();
        // console.log(setnum)
        $.ajax({
            url: '/cn/video/get-cache', // 跳转到 action 
            type: 'post',
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
                if(data==1){
                    $('.caiji_name').text('采集√');
                    $("#goPage_list").val(parseInt(goPage_list)+parseInt(setnum));
                }else{
                    $('.caiji_name').text('采集×');
                }
                // window.location.reload();   
            },
        });
    }

    // 开启缓存
    function goCache(){
        $('.caiji_name').text('采集...')
        var goBelong =$("#goBelong").val();
        var goType =$("#goType").val();
        if(!goType){ var  goType =''; }
        var goSearch =$("#goSearch").val();
        var goPage =$("#goPage").val();
        var goPage_list =$("#goPage_list").val();
 
        $.ajax({
            url: '/cn/video/get-cache', // 跳转到 action 
            type: 'post',
            data:{ 
                page:goPage,
                type:goType,
                page_list:goPage_list,
                belong:goBelong,
                search:goSearch,
            },
            dataType: 'json',
            success: function (data) {
                if(data==1){
                    $('.caiji_name').text('采集√')
                }else{
                    $('.caiji_name').text('采集×')
                }
                // window.location.reload();   
            },
        });
    }
    function typeChange(type){
        // 重置状态page和search
        $("#goSearch").val('');
        $("#goPage").val(1);
        $("#goPage_list").val(1);
        $('#goType').val(type);
        $('#listType a').removeClass('active'); 
        $('#listType a').removeClass('btn-primary'); 
        $('#type'+type).addClass('active btn-primary'); 
        gou();
    }

    function belongChange(belong){
        // 重置状态page和search
        $("#goSearch").val('');
        $("#goPage").val(1);
        $("#goPage_list").val(1);
        $('#goBelong').val(belong);
        $('#listBelong a').removeClass('active'); 
        $('#listBelong a').removeClass('btn-primary'); 
        $('#listBelong a').addClass('btn-success'); 
        $('#belong'+belong).addClass('active btn-primary'); 
        if(belong==0){
            var inputvalue ="";
            $("#goTypeInput").html(inputvalue);
            gou();
        }else{
            $.ajax({
                url: '/cn/video/get-belong', // 跳转到 action 
                data:{
                    belong:belong,
                    type:0
                },
                type: 'post',
                dataType: 'json',
                success: function (data) {
                    // console.log(data)
                    $("#goTypeInput").html(data.data);
                    gou();
                },
            });
        }
  
    }
    //切换类型刷新页面
    function  changeType(){
        $.ajax({
            url: '/cn/video/change-type', // 跳转到 action 
            type: 'post',
            dataType: 'json',
            success: function (data) {
                gou();
            },
        });
    } 
    function clearModel(){
        var goBelong =$("#goBelong").val();
        var goType =$("#goType").val();
        $.ajax({
            url: '/cn/video/clear-session', // 跳转到 action 
            type: 'post',
            dataType: 'json',
            data:{belong:goBelong,type:goType},
            success: function (data) {
                gou();
            },
        }); 
    }
    function clearSession(){
        var goBelong =$("#goBelong").val();
        var goType =$("#goType").val();
        var goPage =$("#goPage").val();
        var goSearch =$("#goSearch").val();
        var goPage_list =$("#goPage_list").val();
        window.location.href="/cn/video/list?clear=1&"+"page="+goPage+"&type="+goType+"&page_list="+goPage_list+"&belong="+goBelong+"&search="+goSearch;
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
    //查询
    function  gou(){
        var goBelong =$("#goBelong").val();
        var goType =$("#goType").val();
        if(!goType){ var  goType =''; }
        var goSearch =$("#goSearch").val();
        var goPage =$("#goPage").val();
        var goPage_list =$("#goPage_list").val();
        window.location.href="/cn/video/list?page="+goPage+"&type="+goType+"&page_list="+goPage_list+"&belong="+goBelong+"&search="+goSearch;
        // $('.list_html').html('采集中，请稍后...')
        // var url ="/cn/video/list?page="+goPage+"&type="+goType+"&page_list="+goPage_list+"&belong="+goBelong+"&search="+goSearch+"&html=1";
        // var list_html = getprintHtml(url);
        // $('.list_html').html(list_html)
    }

    // 收藏
    function  Update(id){ 
        console.log(id);
        // $(".collect_id"+id).addClass('btn-success');
        var url =$("#form"+id+"  input[name=url]").val();
        var title =$("#form"+id+"  input[name=title]").val();
        var imageurl =$("#form"+id+"  input[name=imageurl]").val();
        var belong =$("#form"+id+"  input[name=belong]").val();
        var link =$("#form"+id+"  input[name=link]").val();
        var collect = $("#form"+id+"  input[name=is_collect]").val();// 是否收藏
        $.ajax({
            url: '/cn/video/update', // 跳转到 action 
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
            },
        });
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
 

    
</script>

 



