<html>
    <head>
        <title>在线视频</title>
        <meta http-equiv="Access-Control-Allow-Origin" content="*">
        <link rel="stylesheet" type="text/css" href="/ckplayer/css/ckplayer.css">
        <script type="text/javascript" src="/ckplayer/hls.js/hls.min.js"></script>
        <script type="text/javascript" charset="utf-8" src="/ckplayer/js/ckplayer.js"></script>
    </head>
<style>
    .video_center {
        margin: 0px;
    }
    table{
        margin-bottom:0px!important;
    }
</style>
    <body>
        <table class="table table-bordered  tablestyle" >
        <?php  foreach(  $m3u8['imageurl'] as$y=> $image){?>
            <tr>
                <td> 
                    <a href="<?php echo $image?>" > <img class="pimage" src="<?php  echo $image?>" style="width:100%"   alt="img" ></a>
                    <!-- <div  class="video<?php echo $kss ?> collect-video-style" style="background-image:url(<?php echo $image?>);"> </div>  -->
                </td>
            </tr>
            <?php }  ?>
        </table>
    </body>
</html>

<script>
    $(function(){
        $("#defult_video").trigger("click");
        // 默认播放第一个视频
        // videoList(1,'1c0');
        // 列表模式播放
        $('.model_name').text('列表×');
        $('.model_name').removeClass('btn-success');
        $('.model_name').addClass('btn-defult');
        $('#is_model_type').val(0)
        //隐藏窗口播放栏
        $('.video_old').css('display','none');
    })
</script>