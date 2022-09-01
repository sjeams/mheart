 
<title>在线视频</title>
<link rel="stylesheet" type="text/css" href="/ckplayer/css/ckplayer.css">
<script type="text/javascript" src="/ckplayer/hls.js/hls.min.js"></script>
<script type="text/javascript" charset="utf-8" src="/ckplayer/js/ckplayer.js"></script>

<style>
.pimage {

     margin: 0px auto;
     display: block;
 }
.name{
    margin-top: 20px;

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
     .check{
         /* display: flex; */
         float: left;
         margin: 0px auto ;
         clear: both;
         padding: 5px;

        overflow-y: scroll;
        max-height: 240px;
         
     }
     .check a{
        display: inline-block;
        width: 120px;
        padding: 4px 20px;
        border: 1px solid black;
        text-align: center;  
        border-radius: 5px; 
        margin:  5px auto;
        font-size: 12px;

     }


     .center{
        text-align: center;
        margin: auto 0px;
     }

     .collect{
        display: inline-block;
        width: 65px;
        padding: 5px 20px;
        border: 1px solid black;
        text-align: center;  
        border-radius: 5px; 
        margin: auto 10px;
     }
 </style>
 
 
<!-- 按钮 -->
<!-- <link href="https://file.viplgw.cn/ui/gre/backStage/js/honeySwitch/honeySwitch.css" rel="stylesheet"> -->
<!-- <script type="text/javascript" src="https://file.viplgw.cn/ui/gre/backStage/js/honeySwitch/honeySwitch.js"></script> -->
<script src="/laydate/laydate.js"></script>
 <!-- Le styles -->
<link href="https://file.viplgw.cn/ui/gre/backStage/css/coreCss/bootstrap-combined.min.css?v=1" rel="stylesheet">
<!-- <link href="https://file.viplgw.cn/ui/gre/backStage/css/coreCss/layoutit.css" rel="stylesheet"> -->
<!-- <link href="https://file.viplgw.cn/ui/gre/backStage/css/coreCss/plugin.css" rel="stylesheet"> -->

<script type="text/javascript" src="/easyui/jquery.min.js"></script>
<script type="text/javascript" src="/ueditor/ueditor.config.js"></script>
<!-- 编辑器源码文件 -->
<script type="text/javascript" src="/ueditor/ueditor.all.min.js"></script>
<!-- 编辑器公式插件 -->
<!-- <script type="text/javascript" charset="utf-8" src="/ueditor/kityformula-plugin/addKityFormulaDialog.js"></script>
<script type="text/javascript" charset="utf-8" src="/ueditor/kityformula-plugin/getKfContent.js"></script>
<script type="text/javascript" charset="utf-8" src="/ueditor/kityformula-plugin/defaultFilterFix.js"></script> -->
<script type="text/javascript" src="/My97DatePicker/WdatePicker.js"></script>
    <!-- 视频 -->
 
    <meta name="viewport"   content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <div class="center ">
    <input type="hidden" name="" id="hiddenvalue" value="1">
    <button style="position:fixed;z-index:101;width:50%;;margin: auto  0px; float:rigth" onclick="videoHidden()">video</button>
     <div style="height:300px;position:relative"  class="videohidden">
        <div class="video" style="position:fixed;z-index:100;width:100%;height:300px;margin: auto -20px; "> </div>
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
        <li><a href="/cn/video/index">内容</a> </li>
    </ul>
    <!-- 视频end -->
    <form action="/cn/video/list" method="post" class="  ">
        <table class="table table-bordered  "  >
            <!-- <thead>
            </thead> -->
       
            <tbody>
            <?php if($content){
            foreach($content as $kss => $v) {  ?>
                <?php if($v['belong']==0){   ?>
                    <tr>
                    <td  >
                    <p> <img class="pimage" src="<?php   echo $v['imageurl']?>"   alt="<?php echo $v['imageurl']?>" ></p>
                    <p> <?php echo $v['title']?></p>
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
                        <!-- <p class="center"> 
                             <span onclick="Update(<?php echo $kss?>)" class="collect"> 写入收藏</span>
                             <span onclick="video(<?php echo $kss?>)" class="collect"> 预览</span>
                        </p> -->

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
                        <a href="<?php $v['url'] = str_replace('在线播放$','',$v['url']);  echo $v['url']   ?>" target="blank">
                        <p> <img class="pimage"  src="<?php echo $v['imageurl']?>"   alt="<?php echo $v['imageurl']?>" ></p>
                        <p> <?php echo $v['title']?></p>
                        </a>
                        <p class="center"> 
                             <span onclick="Update(<?php echo $kss?>)" class="collect"> 写入收藏</span>
                             <span onclick="video(<?php echo $kss?>)" class="collect"> 预览</span>
                        </p>
                    </td>
                 
                </tr>
                <?php
            } } }
            ?>
            <tr>
            <td>
                <div class="layui-form-item center">
                        <label class="layui-form-label">来源belong</label>
                        <div class="layui-input-inline">
                            <select name="belong" id="goBelong" onchange="func()">
                                <?php  foreach($category as $v){  ?>
                                    <option value="<?php echo $v['id'] ?>"<?php echo   isset($_GET['belong'])?( $_GET['belong']== $v['id'] ?'selected':'') :($v['id'] ==0?'selected':'')?>><?php echo $v['name'] ?></option>
                                <?php  } ?>
                            </select>
                        </div>
                        <label class="layui-form-label">类型typ</label>
                        <div class="layui-input-inline" id="goTypeInput">
   
                        </div>
                        <label class="layui-form-label">采集页码</label>
                        <div class="layui-input-inline">
                        <input type="text" class="center" value="<?php echo isset($_GET['page_list'])?$_GET['page_list']:'1'?>" id="goPage_list">
                        </div>
                    <p class="center">
                    <input type="hidden" value="<?php echo isset($_GET['page'])?$_GET['page']:'1'?>" id="goPage">
                    <input type="button"  onclick="gou()" value="GO">
                    <input type="button"  onclick="clearSession()" value="刷新">
                    </p>
                </div>

            </td>

            </tr>
            </tbody>
       
        </table>
 
    </form>
   <input type="hidden" id="videotype"  value="<?php echo  isset($_GET['type'])?$_GET['type']:''?>">
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
        var belong =$("#goType").val();
        if(!belong){
            var inputvalue ='<input type="text" value="<?php echo isset($_GET['type'])?$_GET['type']:''?>" name="goType" id="goType">';
            $("#goTypeInput").html(inputvalue);
        }else{
            $.ajax({
                url: '/cn/video/get-belong', // 跳转到 action 
                data:{
                    belong:'<?php echo isset($_GET['belong'])?$_GET['belong']:'0'?>',
                    type:'<?php echo isset($_GET['type'])?$_GET['type']:''?>'
                },
                type: 'post',
                dataType: 'json',
                success: function (data) {
                    console.log(data)
                    $("#goTypeInput").html(data.data);
                },
            });
        }
    });

    function func(){  
    //获取被选中的option标签  
        var belong = $('#goBelong  option:selected').val(); 
        if(belong==0){
            var inputvalue ='<input type="text" value="<?php echo isset($_GET['type'])?$_GET['type']:''?>" name="goType">';
            $("#goTypeInput").html(inputvalue);
        }else{
            $.ajax({
            url: '/cn/video/get-belong', // 跳转到 action 
            data:{
                belong:belong,
                type:'<?php echo isset($_GET['type'])?$_GET['type']:'8'?>'
            },
            type: 'post',
            dataType: 'json',
            success: function (data) {
                console.log(data)
                $("#goTypeInput").html(data.data);
            },
            });
        }

    }  


    function clearSession(){
        var goBelong =$("#goBelong").val();
        var goType =$("#goType").val();
        var goPage =$("#goPage").val();
        var goPage_list =$("#goPage_list").val();
        window.location.href="/cn/video/list?page="+goPage+"&type="+goType+"&page_list="+goPage_list+"&belong="+goBelong+"&clear=1";
    }


    function  gou(){
        var goBelong =$("#goBelong").val();
        var goType =$("#goType").val();
        var goPage =$("#goPage").val();
        var goPage_list =$("#goPage_list").val();
        window.location.href="/cn/video/list?page="+goPage+"&type="+goType+"&page_list="+goPage_list+"&belong="+goBelong;
    }
    // 预览
    function  video(id){
        var url =$("#form"+id+"  input[name=url]").val();
        console.log(url);
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
  
 
</script>







