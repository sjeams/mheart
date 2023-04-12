<?php $search_title = $data['search'];?>
<input type="hidden" value="<?php echo $isnext ?>" id="page_isnext">
<input type="hidden" value="<?php $userlogin = Yii::$app->session->get('userlogin'); echo $userlogin['is_cache'] ;?>" id="is_cache">

<?php if($graden>0){ ?>
    <p class="center  "  style="margin-top:20px" id="top" >
        <a class="btn_link " href="https://laoyavideo.com/" class="btn">  老鸭头  </a><a class="btn_link " href="https://yinwovideo.com/"> 淫窝 </a>
        <a class="btn_link " href="https://sewovideo.com/"> 色窝 </a>  <a class="btn_link " href="https://siwazyw.cc/index.php/vod/type/id/20.html"> 丝袜 </a>
        <a class="btn_link " href="https://xjav10.cc/">  香蕉 </a> 
    </p>
<?php } ?> 
<!-- 视频end -->
<form action="/cn/video/list" method="post" class="  " >
    <table class="table table-bordered  tablestyle"  >
        <thead>
            <tr>
                <td>
                    <!-- <div class="layui-form-item center"> -->
                        <div class="layui-input-inline center">
                            <input type="hidden" id="goBelong"  value="<?php echo $data['belong'] ?>">
                            <p class="center" id="listBelong" >
                                <?php foreach($category as    $v){  ?>
                                    <a class="btn btn-sm  <?php echo $data['belong']== $v['belong'] ?'active btn-primary':'btn-success'?>" value="<?php echo $v['belong'] ?>" id="belong<?php echo $v['belong'] ?>" onclick="belongChange(<?php echo $v['belong'] ?>)" href="javascript:;"><?php echo $v['name'] ?></a>
                                <?php }  ?>
                            </p>
                        </div>
                        <!-- <label class="layui-form-label">类型typ</label> -->
                        <div class="layui-input-inline center" id="goTypeInput">
                            <!-- <input type="hidden" value="<?php echo $data['type'] ?>" name="goType" id="goType"> -->
                                <?php echo $categoryBelong ?>
                        </div>
                        <!-- <label class="layui-form-label">搜索</label> -->
                        <div class="layui-input-inline center">
                            <input type="<?php echo $data['issearch']==1?'text':'hidden'; ?>" class="center form-control mr-sm-2" type="search" placeholder="Search"  value="<?php echo $data['search'] ?>" id="goSearch">
                        </div>

                        <!-- <label class="layui-form-label">采集页码</label> -->
                        <div class="layui-input-inline center">
                            <span  class="btn btn-primary" onclick="prevPage()">上一页</span>
                            <input type="text" class=" " style="text-align: center;margin: 0px auto;width:28%" value="<?php echo $data['page_list'] ?>" id="goPage_list">
                
                            <?php if($isnext){ ?>
                                <span  class="btn btn-primary" onclick="nextPage()">下一页</span>    
                            <?php }else{ ?>
                                <span  class="btn btn-defult"  >下一页</span>    
                            <?php  }?>
                        </div>
                        <div class="layui-input-inline center">
                            <p class="center">
                                <input type="hidden" value="<?php echo $data['page']?>"  placeholder="page"  id="goPage">
                                <span  class="btn btn-primary" onclick="gou()"> GO  </span>
                                <span  class="btn btn-primary" onclick="clearSession(0)"> 更新 </span>
                                <span  class="btn btn-primary" onclick="clearSession(1)"> 刷新 </span>
                            </p>
                        </div>
                        <div class="layui-input-inline center">
                            <p class="center">
                                <input type="text" value="5"  placeholder="setCaches"  id="setCaches">
                                <?php if($isnext){ ?>
                                    <span  class="btn btn-primary" onclick="getCaches()"> 手动缓存 </span>
                                <?php }else{ ?>
                                    <span  class="btn btn-defult"  > 手动缓存 </span>
                                <?php  }?>     
                            </p>
                        </div>
                    <!-- </div> -->
                </td>
            </tr>
        </thead>
        <tbody class="list_html" >
                    <?php $search_title = $data['search'];?>
                    <?php if($content){ $kss=0;
                    foreach($content as $kss => $v) {  $kss= $kss+1; ?>
                        <?php if($v['belong']==0){  //视频 ?>
                            <tr>
                                <td>
                                    <div  class="video<?php echo $kss ?> collect-video-style"    style="background-image:url(<?php echo $v['imageurl']?>);"> <span  onclick="videoList(<?php echo $kss ?>,'<?php echo $kss.'c0' ?>')"  class="video_box "></span></div> 
                                    <p class="center" onclick="videoDetail('<?php echo $sessionkey?>',<?php echo $kss-1; ?> )"><span><b><?php echo $kss ?>、</b></span>    <?php echo  $search_title ? str_replace($search_title,"<span class='red'> $search_title </span> ",$v['title']) : $v['title']?></p>
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
                                <div  class="video<?php echo $v['id']?> collect-video-style"   style="background-image:url(<?php echo $v['imageurl']?>);"> <span  onclick="videoList(<?php echo $v['id']?>)"  class="video_box "></span></div> 
                                <p class="center"><span ><b><?php echo $kss ?>、</b></span>  <?php echo  $search_title ? str_replace($search_title,"<span class='red'> $search_title </span> ",$v['title']) : $v['title']?></p>
                                <!-- </a> -->
                                <p class="center"> 
                                    <!-- <span onclick="video(<?php echo $v['id']?>)" class="btn collect"> 预览</span> -->
                                    <span onclick="videoList(<?php echo $v['id']?>)" class="btn btn-primary collect"> 重播 </span>
                                    <span onclick="Update_my(<?php echo $v['id']?>)" class="btn collect my_collect_<?php echo $v['id']?> <?php echo $v['my_collect']==1?'btn-success':''  ?>"> 收藏</span>
                                    <!-- <span onclick="Update(<?php echo $v['id']?>)" class="btn collect collect_id<?php echo $v['id']?> <?php echo $v['collect']==1?'btn-success':''  ?>"> 喜欢</span> -->
                                    <span onclick="localRload( )" class="btn btn-primary collect"> 刷新 </span>
                                </p>
                            </td>
                        
                        </tr>
                        <?php
                    } } }
                    ?>
                    <tr>
                        <td class="center"  >
                            <p class="center">
                                <span  class="btn btn-primary" onclick="prevPage()">上一页</span>
                                <span  class="btn btn-primary" onclick="clearRload()"> 刷新 </span>
                                <?php if($isnext){ ?>
                                    <span  class="btn btn-primary" onclick="nextPage()">下一页</span>    
                                <?php }else{ ?>
                                    <span  class="btn btn-defult"  >下一页</span>    
                                <?php  }?> 
                            </p>
                        </td>
                    </tr>
                    <tr> <td class="center"  ><p></p></td></tr>
                    <input type="hidden" value="<?php echo $isnext ?>" id="page_isnext">                      
        </tbody>
    
    </table>

</form>
 
<script type="text/javascript" charset="utf-8" src="/ckplayer/js/videojs/list.js?v=1"></script>
 
