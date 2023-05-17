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
                            <input type="<?php echo $data['issearch']==1?'text':'hidden'; ?>" readonly="readonly" class="center form-control mr-sm-2"   placeholder="Search"  value="<?php echo $data['search'] ?>" id="goSearch">
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
                                    <span  class="btn btn-primary" onclick="gou(1)"> 手动缓存 </span>
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
                <?php echo $html ?>
        </tbody>
    
    </table>
</form>




<script type="text/javascript" charset="utf-8" src="/ckplayer/js/videojs/list.js?v=1"></script>
<script>
        $('#goSearch').click(function(){
            $.ajax({
                url: '/cn/video-api/get-kwords', // 跳转到 action 
                type: 'post',
                dataType: 'json',
                success: function (data) {
                    // 关键词
                    if(data.code==1){    
                        var str ='<p>搜索</p><input type="text" class="center form-control mr-sm-2"   placeholder="Search"  value="" id="search_text"><div class="layui-btn-container">';
                        $.each(data.data,function(index,value){
                            str = str+'<button class="btn btn-sm  btn-success"  onclick=layerSearch("'+value.search+'")>'+value.search+'</button>';
                        })
                        var content  = str+'</div>';
                        // <table class="layui-table" lay-even="" lay-skin="nob">
                        layer.open({
                            type: 1
                            ,title: false //不显示标题栏
                            ,closeBtn: false
                            ,area: ['100%','80%']
                            ,shade: 0.8
                            ,id: 'LAY_layuipro_kwords' //设定一个id，防止重复弹出
                            ,btn: ['搜索', '取消']
                            ,btnAlign: 'c'
                            ,moveType: 1 //拖拽模式，0或者1
                            ,content: ' <div class="center" style="padding:20px">'+content+'</div>'
                            ,success: function(layero){
                                var btn = layero.find('.layui-layer-btn');
                                btn.find('.layui-layer-btn0').click(function(){
                                    var search_text =$('#search_text').val()
                                    layerSearch(search_text)
                                })
                                btn.find('.layui-layer-btn1').click(function(){
                                    removeLoading()
                                })
                            }
                        })
                    }else{
                        removeLoading()
                    }
                },error:function(data){
                    removeLoading()
                }
            }); 
        })
        function layerSearch(search_text){
            $('#goSearch').val(search_text);
            gou();
        }
</script>
