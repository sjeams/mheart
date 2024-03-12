<?php $search_title = $data['search'];?>
<!-- <input type="hidden" value="<?php echo $isnext ?>" id="page_isnext"> -->
<input type="hidden" value="<?php $userlogin = Yii::$app->session->get('userlogin'); echo $userlogin['is_cache'] ;?>" id="is_cache">
<!-- 视频end -->
<form action="/cn/video/list" method="post" class="  " >
    <table class="table table-bordered  tablestyle"  >
        <thead>
            <tr>
                <td>
                <div class="layui-input-inline center">
                    <p class="center  "  >
                        <a class="btn_link " href="https://www.djuu.com/"> 音乐 </a>
                        <a class="btn_link " href="https://www.69mj.com" class="btn">  美剧  </a>
                        <a class="btn_link " href="https://www.6080yy3.com" class="btn">  6080  </a>
                        <!-- <a class="btn_link " href="https://www.394tv.com" class="btn">  394tv  </a> -->
                        <a class="btn_link " href="https://www.czzy55.com" class="btn">  厂长  </a>
                    </p>
                    <?php if($graden>0){ ?>
                        <p class="center  "  >
                            <a class="btn_link " href="https://laoyavideo.com/" class="btn">  老鸭头  </a><a class="btn_link " href="https://yinwovideo.com/"> 淫窝 </a>
                            <a class="btn_link " href="https://sewovideo.com/"> 色窝 </a>  <a class="btn_link " href="https://siwazyw.cc/index.php/vod/type/id/20.html"> 丝袜 </a>
                            <a class="btn_link " href="https://xjav10.cc/">  香蕉 </a>  <a class="btn_link " href="https://bfqde2023llsplde12qd27qdl.820723.com/search?tag=少女">  少女 </a> 
                        </p>
                    <?php } ?> 
                    </div>
                </td>
            </tr>
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
                            <input type="<?php echo $data['issearch']==1?'text':'hidden'; ?>" readonly="readonly" class="center form-control mr-sm-2" style="display:inline-block"   placeholder="Search"  value="<?php echo $data['search'] ?>" id="goSearch">
                        </div>

                        <!-- <label class="layui-form-label">采集页码</label> -->
                        <div class="layui-input-inline center">
                            <span  class="btn btn-primary" onclick="prevPage()">上一页</span>
                            <input type="text" class=" " style="text-align: center;margin: 0px auto;width:28%" value="<?php echo $data['page_list'] ?>" id="goPage_list">
                
                            <span class="is_next_page_button"></span>
                        </div>
                        <?php if($graden>0){ ?>
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
                                    <span  class="btn btn-primary" onclick="gouCache()"> 手动缓存 </span>
                                </p>
                            </div>
                        <?php } ?>
                    <!-- </div> -->
                </td>
            </tr>
        </thead>
        <tbody class="list_html" >
                 
        </tbody>
    
    </table>
</form>


<script type="text/javascript" charset="utf-8" src="/ckplayer/js/videojs/list.js?v=1"></script>
<script>
        $('#goSearch').click(function(){
            var goSearch =$("#goSearch").val();
            var belong =$("#goBelong").val();
            $.ajax({
                url: '/cn/video-api/get-kwords', // 跳转到 action
                data:{
                    belong: belong,
                },
                type: 'post',
                dataType: 'json',
                success: function (data) {
                    // 关键词
                    if(data.code==1){    
                        var str ='<p>搜索</p><p> <input type="text" class="center form-control mr-sm-2"   placeholder="Search"  value="'+goSearch+'" id="search_text"><span class="btn btn-primary  " onclick="layerReSerach()">重新采集</span><span class="btn btn-primary  " onclick="layerGoSearch()">搜索</span><span class="btn btn-primary  " onclick="cancelSerach()">取消</span></p> <div class="layui-btn-container">';
                        $.each(data.data,function(index,value){
                            str = str+'<button class="btn btn-sm  btn-success"  onclick=layerSearch("'+value.search+'")>'+value.search+'</button>';
                        })
                        var content  = str+'</div>';
                        // <table class="layui-table" lay-even="" lay-skin="nob">
                        layer.open({
                            type: 1
                            ,title: false //不显示标题栏
                            ,closeBtn: false
                            ,area: ['100%','90%']
                            ,shade: 0.8
                            ,id: 'LAY_layuipro_kwords' //设定一个id，防止重复弹出
                            // ,btn: ['搜索', '取消']
                            ,btnAlign: 'c'
                            ,moveType: 1 //拖拽模式，0或者1
                            ,content: ' <div class="center" style="padding:20px">'+content+'</div>'
                            ,success: function(layero){
                                // var btn = layero.find('.layui-layer-btn');
                                // btn.find('.layui-layer-btn0').click(function(){
                                //     var search_text =$('#search_text').val()
                                //     layerSearch(search_text)
                                // })
                                // btn.find('.layui-layer-btn1').click(function(){
                                //     removeLoading()
                                // })
                            }
                        })
                    }else{
                        removeLoading()
                    }
                } 
            }); 
        })
        function cancelSerach(){
            removeLoadingPage();//关闭弹窗page
        }   

        //重新搜索指定内容
        function layerReSerach(){
            addLoading()
            var search_text =$('#search_text').val()
            var goBelong =$("#goBelong").val();
            var goType =$("#goType").val();
            $.ajax({
                url: '/cn/video-api/clear-search', // 跳转到 action 
                type: 'post',
                dataType: 'json',
                data:{search:search_text,belong:goBelong,type:goType},
                success: function (data) {
                    layerGoSearch()
                },error:function(data){
                    removeLoading()
                }
            }); 
        }
        //不能搜索空内容
        function layerGoSearch(){
            var search_text =$('#search_text').val()
            if(search_text){
                layerSearch(search_text);
            }else{
                layer.open({
                    type: 1
                    ,title: false //不显示标题栏
                    ,closeBtn: false
                    ,area: '300px;'
                    ,shade: 0.8
                    ,id: 'LAY_layuipro_error' //设定一个id，防止重复弹出
                    ,btn: ['确定']
                    ,btnAlign: 'c'
                    ,moveType: 1 //拖拽模式，0或者1
                    ,content: ' <div class="center" style="margin-top:20px">搜索不能为空!</div>'
                    ,success: function(layero){
                        removeLoading()
                    }
                })
            }
        }
        function layerSearch(search_text){
            $('#goSearch').val(search_text);
            cancelSerach();
            gou();
        }

</script>
