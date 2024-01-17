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
            <?php $kss=1; $v =$data;  if($v['belong']==0){  //视频 ?>
                <tr>
                    <td>
                            <!-- <p> <img class="pimage" src="<?php  echo $v['imageurl']?>"   alt="img" ></p> -->
                            <div  class="video<?php echo $kss ?> collect-video-style" style="background-image:url(<?php echo $v['imageurl']?>);"> <span  onclick="videoList(<?php echo $kss ?>,'<?php echo $kss.'c0' ?>')"  class="video_box "></span></div> 
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
            <?php   }  ?>
        </table>
    </body>
</html>

<script>
    $(function(){
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