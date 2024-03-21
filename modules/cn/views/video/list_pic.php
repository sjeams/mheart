<?php $search_title = $data['search'];?>
<?php if($content){ $kss=0;
foreach($content as $kss => $v) {  $kss= $kss+1; ?>
        <tr>
            <td onclick="picDetail('<?php echo $sessionkey?>',<?php echo $kss-1; ?> )">
                <div id="video<?php echo $kss?>" class="video<?php echo $kss ?> collect-video-style"    style="background-image:url(<?php echo $v['imageurl']?>);"> 
                <!-- <span  onclick="videoList(<?php echo $kss ?>,'<?php echo $kss.'c0' ?>')"  class="video_box "></span> -->
                </div> 
                <p class="center" style="width: 90%;" >
                    <span><b><?php echo $kss ?>、</b></span>    <?php echo  $search_title ? str_replace($search_title,"<span class='red'> $search_title </span> ",$v['title']) : $v['title']?>
                </p>
            </td>
        </tr>
    <?php
  } }
?>
<tr>
    <td class="center"  >
        <p class="center">
            <span  class="btn btn-primary" onclick="prevPage()">上一页</span>
            <span  class="btn btn-primary" onclick="clearRload()"> 刷新 </span>
            <span class="is_next_page_button"></span>
        </p>
    </td>
</tr>
<!-- <tr> <td class="center"  ><p></p></td></tr> -->
<input type="hidden" value="<?php echo $isnext ?>" id="page_isnext">     
