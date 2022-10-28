
<link rel="stylesheet" type="text/css" href="/ckplayer/css/ckplayer.css">
<script type="text/javascript" src="/ckplayer/hls.js/hls.min.js"></script>
<script type="text/javascript" charset="utf-8" src="/ckplayer/js/ckplayer.js"></script>
<style>
#goPage_list{
    display: inline-block;
    width:60px;
}
.pimage {
    margin: 0px auto;
    display: block;
 }
.name{
    margin-top: 20px;

}

.videohidden{
    display: table-column-group;
}

.bord{
    display: inline-block;
    text-align: center;
    width:80px;
    height:20px;
    border: 1px solid wheat;
}

.on{
    
    background-color: #fbb450a3;
    border-radius: 2px;
}
</style>

 <style>
      input{
     height: 30px!important;
     border-radius: 5px!important;
     /* width: 50%!important; */
 }
     .check{
         /* display: flex; */
         /* float: left; */
      
        clear: both;
        /* padding: 5px; */
         display: inline-block;
        overflow-y: scroll;
        max-height: 220px;
        width: 100%;
        margin: 0px auto ;
         text-align: center;
     }
     .check a{
        display: inline-block;
        min-width: 38%;
        padding: 10px  5%;
        border: 1px solid black;
        text-align: center;  
        border-radius: 5px; 
        margin:  5px auto;
        font-size: 12px;
     }


     .center{
        text-align: center;
        margin:  10px  auto  ;
     }

     .collect{
        display: inline-block;
        width: 65px;
        padding: 5px 20px;
        border: 1px solid black;
        text-align: center;  
        border-radius: 5px; 
        margin: auto 10px;
        background-color:  #5879f3a3;
        cursor: pointer;
     }
     .nav-item{
        display: inline-block;
     }

 </style>
 
 
<script src="/laydate/laydate.js"></script>
 <!-- Le styles -->
 
<script type="text/javascript" src="/easyui/jquery.min.js"></script>
<script type="text/javascript" src="/ueditor/ueditor.config.js"></script>
<!-- 编辑器源码文件 -->
<script type="text/javascript" src="/ueditor/ueditor.all.min.js"></script>
<!-- 编辑器公式插件 -->
<!-- <script type="text/javascript" charset="utf-8" src="/ueditor/kityformula-plugin/addKityFormulaDialog.js"></script>
<script type="text/javascript" charset="utf-8" src="/ueditor/kityformula-plugin/getKfContent.js"></script>
<script type="text/javascript" charset="utf-8" src="/ueditor/kityformula-plugin/defaultFilterFix.js"></script> -->
<link href="/backStage/css/coreCss/bootstrap-combined.min.css" rel="stylesheet">
<script type="text/javascript" src="/My97DatePicker/WdatePicker.js"></script>
    <!-- 视频 -->
    <meta name="viewport"   content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <div class="center ">
        <input type="hidden" name="" id="hiddenvalue" value="0">
        <button style="position:fixed;z-index:101;width:50%;;margin: auto  0px; float:rigth" onclick="videoHidden()">video</button>
        <div style="height:300px;position:relative"  class="videohidden">
            <div class="video" style="position:fixed;z-index:100;width:100%;height:38%;margin: auto -20px; "> </div>
        </div>
    </div>
        <script type="text/javascript">
            //定义一个变量：videoObject，用来做为视频初始化配置
            var videoObject = {
                container: '.video', //“#”代表容器的ID，“.”或“”代表容器的class
                plug:'hls.js',//设置使用hls插件
                autoplay:true,
                video: ''//视频地址
            };
            new ckplayer(videoObject);//初始化播放器
    </script>

<div class="container">

    <ul class="breadcrumb">
        <!-- <li><a href="/cn/sign/list">内容模块</a> <span class="divider">/</span></li> -->
        <li class="active">采集 <span class="divider">/</span></li>
        <?php if($login==1){ ?>
        <li><a href="/cn/video/index">内容</a> </li>
        <?php  } ?>
    </ul>  

    <?php if($login==1){ ?>

        <p class="center">
            <a href="https://laoyavideo.com/"><button>老鸭头</button> </a><a href="https://yinwovideo.com/"><button>淫窝</button></a>
            <a href="https://sewovideo.com/"><button>色窝</button></a>  <a href="https://siwazyw.cc/index.php/vod/type/id/20.html"><button>丝袜</button></a>
            <a href="https://xjav10.cc/"><button>香蕉</button></a> 
        </p>

    <?php } ?>
    <!-- 视频end -->
    <form action="/cn/video/list" method="post" class="  ">
        <table class="table table-bordered  "  >
            <thead>
                <tr>
                    <td>
                        <div class="layui-form-item center">
                                <!-- <label class="layui-form-label">来源belong</label> -->
                                <div class="layui-input-inline btn-group">
        
                                    <input type="hidden" id="goBelong"  value="<?php echo $data['belong'] ?>">
                                    <p class="center" id="listBelong" >
                                        <?php foreach($category as $v){  ?>
                                            <a class="btn btn-sm <?php echo $data['belong']== $v['id'] ?'active btn-primary':''?>" value="<?php echo $v['id'] ?>" id="belong<?php echo $v['id'] ?>" onclick="belongChange(<?php echo $v['id'] ?>)" href="#"><?php echo $v['name'] ?></a>
                                        <?php }  ?>
                                    </p>
                                </div>
                                <!-- <label class="layui-form-label">类型typ</label> -->
                                <div class="layui-input-inline" id="goTypeInput">
                                    <input type="text" value="<?php echo $data['type'] ?>" name="goType" id="goType">
                                </div>

                                <!-- <label class="layui-form-label">搜索</label> -->
                                <div class="layui-input-inline">
                                    <input type="text" class="center form-control mr-sm-2" type="search" placeholder="Search"  value="<?php echo $data['search'] ?>" id="goSearch">
                                </div>

                                <!-- <label class="layui-form-label">采集页码</label> -->
                                <div class="layui-input-inline">
                                    <span  class="btn btn-primary" onclick="prevPage()">上一页</span>
                                    <input type="text" class="center" value="<?php echo $data['page_list'] ?>" id="goPage_list">
                                    <span  class="btn btn-primary" onclick="nextPage()">下一页</span>    
                                </div>
                            <p class="center">
                                <input type="hidden" value="<?php echo $data['page']?>"  placeholder="page"  id="goPage">
                                <span  class="btn btn-primary" onclick="gou()"> GO  </span>
                                <span  class="btn btn-primary" onclick="changeType()"> 模式 </span>
                                <span  class="btn btn-primary" onclick="clearModel()"> 更新 </span>
                                <span  class="btn btn-primary" onclick="clearSession()"> 刷新 </span>
                            </p>
                        </div>
                    </td>
                </tr>
            </thead>
            <tbody>
                <?php if($content){
                foreach($content as $kss => $v) {  ?>
                    <?php if($v['belong']==0){   ?>
                        <tr>
                            <td  >
                                <p> <img class="pimage" src="<?php  echo $v['imageurl']?>"   alt="<?php echo $v['imageurl']?>" ></p>
                                <p class="center"> <?php echo $v['title']?></p>
                            <td  >
                        </tr>
                        <tr>
                            <td>
                            <span class="check" style="overflow-y:auto;">
                            <?php if($v['video']){ foreach( $v['video'] as$y=> $vdieo){?>
                                <div id="form<?php echo $kss.'c'.$y?>" style="display:none">
                                    <input type="hidden" name="url" value="<?php echo $vdieo['url']?>" >
                                </div>

                                <!-- <a href="<?php $vdieo['url'] = str_replace('在线播放$','',$vdieo['url']);  echo $vdieo['url']   ?>" target="blank"> <?php echo $vdieo['title']?>  </a> -->
                                <a href="#"  onclick="video('<?php echo $kss.'c'.$y?>')"  > <?php echo $vdieo['title']?>  </a>
        

                                <?php } }?>
                                </span>
                            </td>
                    
                        </tr>

                    <?php   }else{ ?>
                    <div id="form<?php echo $kss?>">
                        <input type="hidden" name="url" value="<?php echo $v['url']?>" >
                        <input type="hidden" name="title" value="<?php echo $v['title']?>" >
                        <input type="hidden" name="imageurl" value="<?php echo $v['imageurl']?>" >
                        <input type="hidden" name="type" value="<?php echo $v['type']?>" >
                        <input type="hidden" name="belong" value="<?php echo $v['belong']?>" >
                        <input type="hidden" name="link" value="<?php echo $v['link']?>" >
                    </div>
                    <tr>
                        <td  >
                            <!-- // 第三方URL -->
                            <!-- https://m3u8.huakuibf3.com/m3u8/?url= -->
                            <a href="<?php $v['url'] = str_replace('在线播放$','',$v['url']);  echo $v['url']   ?>" target="blank">
                            <p class="center">  <img class="pimage" src="<?php  echo $v['imageurl']?>"   alt="<?php echo $v['imageurl']?>" ></p>
                            <p class="center">  <?php echo $v['title']?></p>
                            </a>
                            <p class="center"> 
                                <span onclick="video(<?php echo $kss?>)" class="collect"> 预览</span>
                                <span onclick="Update(<?php echo $kss?>)" class="collect"> 收藏</span>
                            </p>
                        </td>
                    
                    </tr>
                    <?php
                } } }
                ?>
            </tbody>
       
        </table>
 
    </form>
 
   <div class="pagination pagination-left center" >
        <?php use yii\widgets\LinkPager;
        echo LinkPager::widget([
            'pagination' => $page,
        ])?>
    </div>


    <div style="height:20px;overflow:hidden"></div>            

</div>

<script>
    $(function(){
        var belong = $('#goBelong').val(); 
        var type = $('#goType').val(); 
        // console.log(belong)
        // if(belong==0){
        //     var inputvalue ="";
        //     $("#goTypeInput").html(inputvalue);
        // }else{
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
        // }
    });
    // function searchfunc(){
    //     $('#goSearch').val(''); 
    // }
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
                // console.log(data)
                // window.location.reload();
                gou();
            },
        });
    }

    
    function clearModel(){
        $.ajax({
            url: '/cn/video/clear-session', // 跳转到 action 
            type: 'post',
            dataType: 'json',
            success: function (data) {
                // console.log(data)
                // window.location.reload();
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
    function  gou(){
        var goBelong =$("#goBelong").val();
        var goType =$("#goType").val();
        if(!goType){ var  goType =''; }
        var goSearch =$("#goSearch").val();
        var goPage =$("#goPage").val();
        var goPage_list =$("#goPage_list").val();
        window.location.href="/cn/video/list?page="+goPage+"&type="+goType+"&page_list="+goPage_list+"&belong="+goBelong+"&search="+goSearch;
    }
    // 预览
    function  video(id){
        var url =$("#form"+id+"  input[name=url]").val();
        // console.log(url);
        // var url ='https://wolongzywcdn2.com:65/20220417/nJ0C6TnT/index.m3u8';
        var videoObject = {
                container: '.video', //“#”代表容器的ID，“.”或“”代表容器的class
                plug:'hls.js',//设置使用hls插件
                autoplay:true,
                video: url//视频地址
            };
            new ckplayer(videoObject);//初始化播放器
   
    }
    // 收藏
    function  Update(id){

        var url =$("#form"+id+"  input[name=url]").val();
        var title =$("#form"+id+"  input[name=title]").val();
        var imageurl =$("#form"+id+"  input[name=imageurl]").val();
        var belong =$("#form"+id+"  input[name=belong]").val();
        var link =$("#form"+id+"  input[name=link]").val();
        $.ajax({
            url: '/cn/video/update', // 跳转到 action 
            type: 'post',
            data:{url:url,title:title,imageurl:imageurl,belong,belong,type:10,link:link,up:1},
            dataType: 'json',
            success: function (data) {
                // window.location.reload();
            },
        });
    }

    function videoHidden(){

        var hiddenvalue = $("#hiddenvalue").val();
        if(hiddenvalue==1){
            $("#hiddenvalue").val(0); 
            $('.videohidden').css("display","table-column");
        }else{
            $("#hiddenvalue").val(1); 
            $('.videohidden').css("display","block");
        }
  
    
    }
  
$(document).keyup(function(event){
    if(event.keyCode ==13){
        gou();
    }
});
</script>

 



