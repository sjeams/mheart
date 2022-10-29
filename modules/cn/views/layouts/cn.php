
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
.btn {min-width: 60px;}
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
        max-height: 260px;
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
        width: 100%;
        text-align: center;
        margin:  5px  auto  ;
        display: inline-block;
        cursor: pointer;
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
<link rel="stylesheet" type="text/css" href="/ckplayer/css/ckplayer.css">
<script type="text/javascript" src="/ckplayer/hls.js/hls.min.js"></script>
<script type="text/javascript" charset="utf-8" src="/ckplayer/js/ckplayer.js"></script>
 
<link href="/backStage/css/coreCss/bootstrap-combined.min.css" rel="stylesheet">

<script type="text/javascript" src="/easyui/jquery.min.js"></script>
<script type="text/javascript" src="/ueditor/ueditor.config.js"></script>
<!-- 编辑器源码文件 -->
<script type="text/javascript" src="/ueditor/ueditor.all.min.js"></script>
<script type="text/javascript" src="/My97DatePicker/WdatePicker.js"></script>

<?= $content ?>
<div>   </div>
<style>
    .footer{
        margin-left: auto;
        float: right;
        height: 60px;
        /* width: 20px; */
        position: fixed;

        bottom: 0;

        }
</style>
<!-- <div class="footer"><a href="#top" class="btn" title="回到顶端">top</a></div> -->
<div class="center"><a href="#top" class="btn" title="回到顶端">回到顶部</a></div>

<div style="height:30px;overflow:hidden"></div>   

<script>
// 视频隐藏
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
// 点击事件监听
$(document).keyup(function(event){
    if(event.keyCode ==13){
        gou();
    }
});
</script>