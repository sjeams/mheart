<?php 
/*
 * @Author: sjeam
 * @Date: 2023-04-07 10:41:17
 * @Description: 
 */
//请求路径
$http_geturl = explode('/', explode('?',$_SERVER["REQUEST_URI"])[0])[2];
$http_index = explode('/', explode('?',$_SERVER["REQUEST_URI"])[0])[3];
// var_dump($http_index );die;
?>
<div class="video_header center  top-title"> 
<!-- table-bordered  -->
    <table class="table  tablestyle mb-0">
        <tr>
            <!-- //chat -->
            <?php  if( $http_geturl=='chat'){ ?>
                <?php  if( $http_index=='list'){ ?>
                <td class="btn-primary button_over_side"><a class="caiji_name" href="/cn/video/list">采集√</a></td>
                <td class="btn-primary button_over_side" style="width: 50%;"><a class="user_chat" href="/cn/chat/list">聊天</a></td>
                <td class="btn-primary button_over_side"   >
                    <input type="hidden" name="" id="menu" value="0">
                    <a class=" " href="javascript:;"  onclick="Menu()" ><?php echo $userlogin['name'] ?>&nbsp;<i class="bi bi-gear"></i></a>
                </td>
            <?php }else  if( $http_index=='chat'){ ?>
                <td class="  " >
                <!-- javascript:history.back(-1) -->
                    <a class="chat_back" href="javascript:history.back(-1)"><i class="bi bi-chevron-left"></i></a>
                    <span class="chat_title"></span>
                    <a class="chat_add"   onclick="chat_detail()"><i class="bi bi-three-dots"></i></a>
                </td>
            <?php }else { ?>
                <td class="" >
                    <a class="chat_back"    onclick="gou_back()"><i class="bi bi-chevron-left"></i></a>
                    <span class="chat_title"></span>
                </td>
                
            <?php } ?>
            <!-- //video -->
            <?php }else{ ?>   
                <?php if( $http_index=='video'){ ?>
                    <td class="btn-primary button_over_side" > <a href="javascript:history.back(-1)"><i class="bi bi-chevron-left"></i>返回</a></td>
                <?php }else { ?>    
                    <td class="btn-primary button_over_side"><a class="caiji_name" href="/cn/video/list">采集√</a></td>
                <?php } ?>
                <td class="btn-primary button_over_side" style="width: 50%;"><a class="user_chat" href="/cn/chat/list">聊天</a></td>
                <td class="btn-primary button_over_side"   >
                    <input type="hidden" name="" id="menu" value="0">
                    <a class=" " href="javascript:;"  onclick="Menu()" ><?php echo $userlogin['name'] ?>&nbsp;<i class="bi bi-gear"></i></a>
                </td>
            <?php } ?>

        </tr>
    </table>
    <ul class="list-group text-center menu_list">
        <?php if($userlogin['graden']>0) {?>
            <li class="list-group-item list-item-style btn-defult" onclick="old_content()"> 喜欢</li>
            <li class="list-group-item list-item-style btn-defult" onclick="my_collect()"> 收录</li>
            <li class="list-group-item list-item-style btn-defult" onclick="my_video()"> 收藏</li>
            <!-- <?php   if( explode('?',$_SERVER["REQUEST_URI"])[0]=='/cn/video/list'){ ?><?php }?> -->
            <li class="list-group-item list-item-style  cache_name  <?php $userlogin = Yii::$app->session->get('userlogin'); echo $userlogin['is_cache']?'btn-success':'btn-defult' ?>" onclick="isCache()"> <?php echo $userlogin['is_cache']?'缓存√':'缓存×' ?></li>
            <li class="list-group-item list-item-style  bofang_name  <?php $userlogin = Yii::$app->session->get('userlogin'); echo $userlogin['is_bofang']?'btn-success':'btn-defult' ?>" onclick="isBofang()"> <?php echo $userlogin['is_bofang']?'播放√':'播放×' ?></li>
        <?php } ?>
        <li class="list-group-item list-item-style  model_name  <?php $userlogin = Yii::$app->session->get('userlogin'); echo $userlogin['video_model']?'btn-success':'btn-defult' ?>" onclick="vidoeModel()"> <?php echo $userlogin['video_model']?'窗口√':'列表×' ?></li>
        <li class="list-group-item list-item-style btn-defult" onclick="loginOuts()"> 退出</li>
    </ul>
</div>

<div class="video_center "  id="top" > 
<input type="hidden"  id="is_bofang_type" value="<?php $userlogin = Yii::$app->session->get('userlogin'); echo $userlogin['is_bofang'] ;?>">
<input type="hidden"  id="is_model_type" value="<?php $userlogin = Yii::$app->session->get('userlogin'); echo $userlogin['video_model'] ;?>">

<!-- <script type="text/javascript" charset="utf-8" src="/ckplayer/js/header.js"></script> -->
