
    <table class="table table-bordered  tablestyle"  >
    <thead>
        <?php if($graden>0){?>
        <tr>
            <td >
                <div class="input_div center" style="display: block;">
                    <input name="title" class="search_input"   id="goSearch"   type="text" value="<?php echo $data['title']?>"/>
                    <button class="btn btn-primary search_button" onclick="static_gou()"  >搜索</button>
                </div>
                <p class="center" id="listBelong" >
                    <input type="hidden" id="goBelong"  value="<?php echo $data['type'] ?>">
                    <a class="btn <?php echo $data['type']==0?'active btn-primary':' btn-success'?>"  id="belong0"  onclick="belongChange_static(0)" href="javascript:;" >全部</a>
                    <a class="btn <?php echo $data['type']==7?'active btn-primary':' btn-success'?>"  id="belong7"  onclick="belongChange_static(7)" href="javascript:;" >国产</a>
                    <a class="btn <?php echo $data['type']==8?'active btn-primary':' btn-success'?>"  id="belong8"  onclick="belongChange_static(8)" href="javascript:;" >主播</a>
                    <a class="btn <?php echo $data['type']==9?'active btn-primary':' btn-success'?>"  id="belong9"  onclick="belongChange_static(9)" href="javascript:;" >少女</a>
                    <a class="btn <?php echo $data['type']==10?'active btn-primary':' btn-success'?>"  id="belong10"  onclick="belongChange_static(10)" href="javascript:;" >精品</a>
                    <a class="btn <?php echo $data['type']==11?'active btn-primary':' btn-success'?>"  id="belong11"  onclick="belongChange_static(11)" href="javascript:;" >收藏</a>
                </p>
            </td>
                <!-- <button class="btn btn-primary" type="submit">搜索</button> -->
        </tr>
        <?php }?>
        </thead>
        <tbody>
        <?php
        foreach($content as $kss => $v) {    ?>

            <tr>
                <td  >
                    <div id="form<?php echo $v['id']?>">
                        <input type="hidden" name="video_id" value="<?php echo $v['id']?>" >
                        <input type="hidden" name="url" value="<?php echo $v['url']?>" >
                        <input type="hidden" name="title" value="<?php echo $v['title']?>" >
                        <input type="hidden" name="imageurl" value="<?php echo $v['imageurl']?>" >
                        <input type="hidden" name="type" value="<?php echo $v['type']?>" >
                        <input type="hidden" name="belong" value="<?php echo $v['belong']?>" >
                        <input type="hidden" name="link" value="<?php echo $v['link']?>" >
                        <input type="hidden"  name="is_collect" value="0">
                    </div>
                    <div id="dplay_video<?php echo $v['id']?>"  class="video<?php echo $v['id']?> collect-video-style"   style="background-image:url(<?php echo $v['imageurl']?>);"> <span  onclick="videoList(<?php echo $v['id']?>)"  class="video_box "></span></div> 
                    <p class="center"  style="width: 90%;">
                        <a href="<?php echo $v['url'] ?>"> 
                        <span ><b><?php echo $kss+1 ?>、</b></span>  <?php $search_title = $data['title']; echo  $search_title ? str_replace($search_title,"<span class='red'> $search_title </span> ",$v['title']) : $v['title']?>
                        </a>
                    </p>
                    <!-- </a> -->
                    <p class="center"> 
                        <span onclick="videoList(<?php echo $v['id']?>)" class="btn btn-primary collect"> 重播 </span>
                        <span onclick="videoup(<?php echo $v['id']?>)" class="btn videoup<?php echo $v['id']?> collect"> <?php echo $v['up']==0?'收藏':'取消'?>  </span>
                        <span onclick="Delete(<?php echo $v['id']?>)" class="btn collect"> 删除 </span>
                    </p>
                </td>
            
            </tr>
            
            <?php
        }
        ?>
          <tr><td>
            <div class="pagination pagination-left center">
                <?php use yii\widgets\LinkPager;
                echo LinkPager::widget([
                    'pagination' => $pageStr,
                    // 'options' => ['class' => 'pagination'], // 分页的容器的CSS类
                    // 'prevPageLabel' => '<i class="fa fa-angle-left"></i>', // 上一页的标签，可以是HTML标签
                    // 'nextPageLabel' => '<i class="fa fa-angle-right"></i>', // 下一页的标签
                    // 'maxButtonCount' => 5, // 最多显示的页码按钮数
                    'linkOptions' => [
                        'class' => 'page-link', // 页码的CSS类
                        'onclick' => 'js: event.preventDefault(); goStaticHtml($(this).attr("href"));', // 点击页码时执行的JavaScript代码
                    ],
                ])?>
                <div class="input_div center">
                    <input type="text"  class="search_input" value="<?php echo $data['page'] ?>" id="goPage">
                    <button class="btn btn-primary search_button" onclick="static_gou()"  >GO</button>
                </div>
            </div>

          </td></tr>
        </tbody>
    </table>

<input type="hidden" id="videotype" value="<?php echo $data['type'] ?>">
<script>
    function belongChange_static(belong){
        // 重置状态page和search
        // $("#goSearch").val('');
        // $("#goPage").val(1);
        $('#goBelong').val(belong);
        $('#listBelong a').removeClass('active'); 
        $('#listBelong a').removeClass('btn-primary'); 
        $('#listBelong a').addClass('btn-success'); 
        $('#belong'+belong).removeClass('btn-success'); 
        $('#belong'+belong).addClass('active btn-primary'); 
        static_gou()  
    }

    function  static_gou(){
        var goPage =$("#goPage").val();
        var goBelong =$("#goBelong").val();
        var goSearch =$("#goSearch").val();
        // window.location.href="/cn/video/like?page="+goPage+"&type=<?php echo $data['type'] ?>&title=<?php echo $data['title'] ?>";
        url="/cn/video/like?html=1&page="+goPage+"&type="+goBelong+"&title="+goSearch;
        goStaticHtml(url)
    }
    function  videoup(id){
        var videotype =$("#videotype").val();
        $.ajax({
            url: '/cn/video-api/up', // 跳转到 action 
            data:{
                id: id,
            },
            type: 'post',
            dataType: 'json',
            success: function (data) {
                if(data==1){
                    $('.videoup'+id).html('取消');  
                }else{
                    $('.videoup'+id).html('收藏');   
                    if(videotype==10 ){
                        // window.location.reload();
                        static_gou()
                    }
                }
            },
            error: function () {
            }
        });
    }
    function  Delete(id){
        $.ajax({
            url: '/cn/video-api/delete', // 跳转到 action 
            data:{
                id: id,
            },
            type: 'post',
            dataType: 'json',
            success: function (data) {
                if(data.code==1){
                    // window.location.reload(); 
                    static_gou()
                }
            },
        });
    }
 
</script>



 



