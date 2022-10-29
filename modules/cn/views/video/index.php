 
<style>
 input{
     height: 30px!important;
     border-radius: 5px!important;
     width: 50%!important;
 }
.name{
    margin-top: 20px;
}
.pimage {
  
    margin: 0px auto;
    display: block;
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
         /* float: left; */
         margin: 0px auto ;
         clear: both;
         /* padding: 5px; */
         
         
     }
     .check a{
        display: inline-block;
        width: 38%;
        padding: 10px 5%;
        border: 1px solid black;
        text-align: center;  
        border-radius: 5px; 
        margin:  5px auto;
     }

     .center{
        text-align: center;
        margin:  10px  auto  ;
      
     }

     .collect{
        display: inline-block;
        width: 20%;
        padding: 10px 10%;
        border: 1px solid black;
        text-align: center;  
        border-radius: 5px; 
        margin: auto 10px;
     }
 </style>
<link rel="stylesheet" type="text/css" href="/ckplayer/css/ckplayer.css">
<script type="text/javascript" src="/ckplayer/hls.js/hls.min.js"></script>
<script type="text/javascript" charset="utf-8" src="/ckplayer/js/ckplayer.js"></script>
<link href="/backStage/css/coreCss/layoutit.css" rel="stylesheet">
<link href="/backStage/css/coreCss/plugin.css" rel="stylesheet">
<script src="/laydate/laydate.js"></script>
<!-- Le styles -->
<script type="text/javascript" src="/easyui/jquery.min.js"></script>
<script type="text/javascript" src="/ueditor/ueditor.config.js"></script>
<!-- 编辑器源码文件 -->
<script type="text/javascript" src="/ueditor/ueditor.all.min.js"></script>
<link href="/backStage/css/coreCss/bootstrap-combined.min.css" rel="stylesheet">
<script type="text/javascript" src="/My97DatePicker/WdatePicker.js"></script>
<div class="container">
    <ul class="breadcrumb">
        <!-- <li><a href="/cn/sign/index">内容模块</a> <span class="divider">/</span></li> -->
        <li><a href="/cn/video/list">采集</a> <span class="divider">/</span></li>
        <li class="active">内容</li>
    </ul>
    <form action="/cn/video/index" method="get"  >
        <table class="table table-bordered  "  >
        <thead>
            <?php if($login==1){?>
            <tr>
                <td >
                    <div class="input-append center" style="display: block;">
                        <input name="title" class="span2" id="appendedInputButton"   type="text" value="<?php echo isset($_GET['title'])?$_GET['title']:''?>"/>
                        <button class="btn btn-primary" type="sbumit">搜索</button>
                    </div>
                    <p class="check">
                    <a href="/cn/video/index?page=1<?php //echo isset($_GET['page'])?$_GET['page']:''?>&title=<?php echo isset($_GET['title'])?$_GET['title']:''?>" >全部</a>
                    <a href="/cn/video/index?type=0&page=1<?php //echo isset($_GET['page'])?$_GET['page']:''?>&title=<?php echo isset($_GET['title'])?$_GET['title']:''?>" >0国产</a>
                    <a href="/cn/video/index?type=1&page=1<?php //echo isset($_GET['page'])?$_GET['page']:''?>&title=<?php echo isset($_GET['title'])?$_GET['title']:''?>" >1主播</a>
                    <a href="/cn/video/index?type=2&page=1<?php //echo isset($_GET['page'])?$_GET['page']:''?>&title=<?php echo isset($_GET['title'])?$_GET['title']:''?>" >2少女</a>
                
                    <a href="/cn/video/index?type=3&page=1<?php //echo isset($_GET['page'])?$_GET['page']:''?>&title=<?php echo isset($_GET['title'])?$_GET['title']:''?>" >3欧美</a>
                    <a href="/cn/video/index?type=4&page=1<?php //echo isset($_GET['page'])?$_GET['page']:''?>&title=<?php echo isset($_GET['title'])?$_GET['title']:''?>" >4日韩</a>
                    <a href="/cn/video/index?type=5&page=1<?php //echo isset($_GET['page'])?$_GET['page']:''?>&title=<?php echo isset($_GET['title'])?$_GET['title']:''?>" >5其它</a>
                    <a href="/cn/video/index?type=6&page=1<?php //echo isset($_GET['page'])?$_GET['page']:''?>&title=<?php echo isset($_GET['title'])?$_GET['title']:''?>" >6AI/明星</a>
         
                    <a href="/cn/video/index?type=7&page=1<?php //echo isset($_GET['page'])?$_GET['page']:''?>&title=<?php echo isset($_GET['title'])?$_GET['title']:''?>" >7三级</a>
                    <a href="/cn/video/index?type=8&page=1<?php //echo isset($_GET['page'])?$_GET['page']:''?>&title=<?php echo isset($_GET['title'])?$_GET['title']:''?>" >8精品</a>
                    <a href="/cn/video/index?type=9&page=1<?php //echo isset($_GET['page'])?$_GET['page']:''?>&title=<?php echo isset($_GET['title'])?$_GET['title']:''?>" >9无码</a>
                    <a href="/cn/video/index?type=10&page=1<?php //echo isset($_GET['page'])?$_GET['page']:''?>&title=<?php echo isset($_GET['title'])?$_GET['title']:''?>" >10收藏</a>
                    </p>

                </td>
                    <!-- <button class="btn btn-primary" type="submit">搜索</button> -->
            </tr>
            <?php }?>
            </thead>
            <tbody>
            <?php
            foreach($content as $kss => $v) {
                if($kss == 10){
                    break;
                }
                ?>
                <tr>
 
                    <td  style=" width:25%">
                        <a href="https://help.siwazywcdn2.com:5278/m3u8.php?url=<?php $v['url'] = str_replace('在线播放$','',$v['url']);  echo $v['url']   ?>" target="blank">
                        <p class="center"> <img class="pimage" src="<?php echo $v['imageurl']?>" alt="<?php echo $v['imageurl']?>"></p>
                        <p class="center"> <?php echo $v['title']?></p>
 
                        </a>
                        <p class="center">
                            <span onclick="videoup(<?php echo $v['id']?>)" class="videoup<?php echo $v['id']?> collect"> <?php echo $v['up']==0?'收藏':'取消'?>  </span>
                            <span onclick="Delete(<?php echo $v['id']?>)" class="collect"> 删除 </span>
                        </p>
                    </td>
                </tr>
                <?php
            }
            ?>
            </tbody>
        </table>
    </form>
 

   <input type="hidden" id="videotype" value="<?php echo  isset($_GET['type'])?$_GET['type']:''?>">
    <div class="pagination pagination-left">
        <?php use yii\widgets\LinkPager;
        echo LinkPager::widget([
            'pagination' => $page,
        ])?>
    </div>
    <p>
        <input type="text" value="<?php echo isset($_GET['page'])?$_GET['page']:''?>" id="goPage">
        <input type="button"  onclick="gou()" value="GO">

    </p>

</div>

<script>
 
    function  gou(){
        var goPage =$("#goPage").val();
        window.location.href="/cn/video/index?page="+goPage+"&type=<?php echo isset($_GET['type'])?$_GET['type']:''?>&title=<?php echo isset($_GET['title'])?$_GET['title']:''?>";
    }
    function  videoup(id){
        var videotype =$("#videotype").val();

        $.ajax({
            url: '/cn/video/up', // 跳转到 action 
            data:{
                id: id,
            },
            type: 'post',
            // dataType: 'json',
            success: function (data) {
                console.log(data)
                if(data==1){
                    $('.videoup'+id).html('取消');  
      
                }else{
                    $('.videoup'+id).html('收藏');   
                    if(videotype==10 ){
                        window.location.reload();
                    }
                }
            },
            error: function () {
            }
        });
    }

    
    function  Delete(id){
        $.ajax({
            url: '/cn/video/delete', // 跳转到 action 
            data:{
                id: id,
            },
            type: 'post',
            // dataType: 'json',
            success: function (data) {
                window.location.reload();
          
            },
        });
    }
$(document).keyup(function(event){
    if(event.keyCode ==13){
        gou();
    }
});
</script>



 



