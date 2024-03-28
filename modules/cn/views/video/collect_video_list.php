
<?php $search_title = $data['title']; ?>
<?php   foreach($content as $kss => $v) { ?>
        <tr class="remove_<?php echo $v['id']?> p-0">
            <td >
                <div id="form<?php echo $v['id']?>">
                    <input type="hidden" name="video_id" value="<?php echo $v['id']?>" >
                    <input type="hidden" name="url" value="<?php echo $v['url']?>" >
                    <input type="hidden" name="title" value="<?php echo $v['title']?>" >
                    <input type="hidden" name="imageurl" value="<?php echo $v['imageurl']?>" >
                    <input type="hidden" name="type" value="<?php echo $v['type']?>" >
                    <input type="hidden" name="belong" value="<?php echo $v['belong']?>" >
                    <input type="hidden" name="link" value="<?php echo $v['link']?>" >
                </div>
                <!-- //跳转 -->
                <!-- <img  class="pimage" src="<?php   echo $v['imageurl']?>" alt="Img"> -->
                <div  id="dplay_video<?php echo $v['id']?>" class="video<?php echo $v['id']?> collect-video-style" style="background-image:url(<?php echo $v['imageurl']?>);"> <span  onclick="videoList(<?php echo $v['id']?>)"  class="video_box "></span></div> 

                <p class="center"  onclick="video(<?php echo $v['id']?>)"><span ><b>P<?php echo (($data['page']) ) ?>-<?php echo ( (($data['page']-1)*10 )+($kss+1)) ?>、</b></span>  <?php echo  $search_title ? str_replace($search_title,"<span class='red'> $search_title </span> ",$v['title']) : $v['title']?></p>
                <p class="center">
                    <!-- <span style="width: 49%!important;max-width:210px" onclick="videoList(<?php echo $v['id']?>)" class="btn btn-primary collect"> 重播 </span>
                    <span style="width: 49%!important;max-width:210px" onclick="Update_my(<?php echo $v['id']?>)" class="btn btn-danger collect my_collect_<?php echo $v['id']?> "> 移除</span> -->
                    <span   onclick="videoList(<?php echo $v['id']?>)" class="btn btn-primary collect"> 重播 </span>
                    <span   onclick="like_my(<?php echo $v['id']?>)" class="btn  collect my_like_<?php echo $v['id']?> <?php echo $v['is_like']==1?'btn-success':''  ?> ">极品</span>
                    <span   onclick="Update_my(<?php echo $v['id']?>)" class="btn btn-danger collect my_collect_<?php echo $v['id']?> "> 移除</span>
                </p>
            </td>
        </tr>
<?php  } ?>
<input class="return_count" type="hidden" value="<?php echo $data['count']?>" >