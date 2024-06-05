<?php $search_title = $data['search'];?>
<?php if($content){ $kss=0;
foreach($content as $kss => $v) {  $kss= $kss+1; ?>
    <?php if($v['belong']==0){  //视频 ?>
        <tr>
            <td>
                <div id="dplay_video<?php echo $kss ?>"  class="video<?php echo $kss ?> collect-video-style"    style="background-image:url(<?php echo $v['imageurl']?>);"> <span  onclick="videoList(<?php echo $kss ?>,'<?php echo $kss.'c0' ?>')"  class="video_box "></span></div> 
                <p class="center" style="width: 90%;" onclick="videoDetail('<?php echo $sessionkey?>',<?php echo $kss-1; ?> )">
                    <span><b><?php echo $kss ?>、</b></span>    <?php echo  $search_title ? str_replace($search_title,"<span class='red'> $search_title </span> ",$v['title']) : $v['title']?>
                </p>
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
            <div id="dplay_video<?php echo $v['id']?>"  class="video<?php echo $v['id']?> collect-video-style"   style="background-image:url(<?php echo $v['imageurl']?>);"> <span  onclick="videoList(<?php echo $v['id']?>)"  class="video_box "></span></div> 
            <p class="center"  style="width: 90%;">
                <a href="<?php echo $v['url'] ?>"> 
                <span ><b><?php echo $kss ?>、</b></span>  <?php echo  $search_title ? str_replace($search_title,"<span class='red'> $search_title </span> ",$v['title']) : $v['title']?>
                </a>
            </p>
            <!-- </a> -->
            <p class="center"> 
                <!-- <span onclick="video(<?php echo $v['id']?>)" class="btn collect"> 预览</span> -->
                <span onclick="videoList(<?php echo $v['id']?>)" class="btn btn-primary collect"> 重播 </span>
                <span onclick="Update_my(<?php echo $v['id']?>)" class="btn collect my_collect_<?php echo $v['id']?> <?php echo $v['my_collect']==1?'btn-success':''  ?>"> 收藏</span>
                <!-- <span onclick="Update(<?php echo $v['id']?>)" class="btn collect collect_id<?php echo $v['id']?> <?php echo $v['collect']==1?'btn-success':''  ?>"> 喜欢</span> -->
                <span onclick="clearRload( )" class="btn btn-primary collect"> 刷新 </span>
            </p>
        </td>
    
    </tr>
    <?php
} } }
?>
<tr>
    <td class="center"  >
        <p class="center">
            <!-- <span  class="btn btn-primary" onclick="prevPage()">上一页</span> -->
            <span class="is_last_page_button"></span>
            <span  class="btn btn-primary" onclick="clearRload()"> 刷新 </span>
            <span class="is_next_page_button"></span>
        </p>
    </td>
</tr>
<!-- <tr> <td class="center"  ><p></p></td></tr> -->
<input type="hidden" value="<?php echo $isnext ?>" id="page_isnext">     
