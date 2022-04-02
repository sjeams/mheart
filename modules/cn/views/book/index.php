



<style>

/* 实现了宽度为父容器宽度减去固定的300像素  */
/* div{ 
    width:-webkit-calc(100% - 300px); 
    width:-moz-calc(100% - 300px); 
    width:calc(100% - 300px); 
} */


/* 视频背景 */
.log{ width: 80px;  height:80%;
    filter: drop-shadow(0 0 2px #2b002b) drop-shadow(0 0 15px #141427) drop-shadow(0 0 5px #f0f);-webkit-filter: drop-shadow(0 0 2px #2b002b) drop-shadow(0 0 15px #ff0000) drop-shadow(0 0 5px #f0f);

}
.fullscreenvideo {
    position: fixed;
    top: 50%;
    left: calc(50% - 15px);
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -100;
    -webkit-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
    -webkit-transition: 1s opacity;
    transition: 1s opacity;
}
 
.videocontainer{
    position: fixed;
    width: 100%;
    height: 100%;
    overflow: scroll;
    overflow-x:hidden;
    z-index: -100; 
    left: -1px;
    top: 0;
}


 
.videocontainer:before{
    content: "";
    position: absolute;
    width: calc(100% - 15px);
    height: 100%;
    display: block;
    z-index: -1;
    top: 0;
    left: 0;
    background: rgba(0,0,0,0);
}


/* 布局 */
.header{ position:fixed; margin:0px auto; left:0; right:0;top:0;width:100%; height:40px;  background: #000000; text-align: center; line-height: 40px; z-index: 100; color:  white;}
.content{  position:absolute; margin:40px auto ; left:0; top:0; right:0;bottom:0;  width:calc(100% - 360px);  height:100%; }
.left{ position:fixed; margin:40px 40px; float: left; }
.center{  position:relative; margin:0px auto;  left:-1px; 
 }

.gonggao{width:100%; height:80px; }

 .box{     box-shadow:2px 2px 6px #000000 inset;  border-radius: 1px; background: rgba(0, 0, 0, 0.3) ;
}
.right{ position:fixed; margin:40px 40px; right:10px;bottom:20px;  color: white;
    box-shadow:2px 2px 6px rgba(0, 0, 0, 0) inset; width:120px; height:120px; border-radius: 1px; background: rgba(255, 255, 255, 0); 
    }


.foot{ position:fixed; margin:0px auto; left:0; right:0;bottom:0;width:100%; height:30px;  background: rgba(0, 0, 0, 0.3); text-align: center; line-height: 30px; z-index: 100;color:  #FFFFFF; }
/* .box2 img {box-shadow:2px 0px 0px #000}  */
.clear{position: absolute; margin:10px 10px; color:white }
.saoma{width: 100%; text-align: center} 
/* height:20vw;  */
.topBanner{ height: 380px;      border-radius: 1px; left:-1px;  }
.imgwidth{
    opacity: 0.9;
    /* border: 1px solid blue; */
    position: absolute;
    /* margin-top:0px ; */
    height: 400px;
    width: 100%;
    margin: 0px auto;
    /* background: url(pc/image/lunbo/lunbo5) no-repeat; */
    background-size: cover;
}

.zhnshi{ width:100%; height:240px; }

.span-check{ border: 1px solid red; display:inline-block; width:60px; text-align: center; background-color: rgba(43, 43, 44, 0.8); padding: 2px; height: 30px; line-height: 30px; }
.title{margin: 0px -10px; }
.goodbox{width:300px;height:160px; position: relative; float: left;  left:-20px; margin: 20px 10px;}
.monster-img{ width: 120px;  height: 100%;  float: left;}
.monster-des{ margin-left: 10px; margin-top: 10px;   float: left;}

</style>
<!-- <link rel="stylesheet" href="https://file.viplgw.cn/ui/book/cn/css/bookIndex.css?v=1.1.2"> -->
<link rel="stylesheet" href="public/css/swiper.min.css">
<script src="public/js/jquery-1.12.2.min.js"></script>
<script src="public/js/swiper.min.js"></script>

<section>
    <div class="header">
           轮回之门官网
    </div> 
    <div class="videocontainer">
        <video class="fullscreenvideo" playsinline="" autoplay="" muted="" loop="">
        <!-- <source src="http://fd.aigei.com/pvvdo_fast/vdo/mp4/f7/f77c9af3b0364be4b94f52fee154fc99.mp4?e=1592421660&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:EvR2Ky4jnZqjJzgzSLcWJvt9lcQ=" type="video/mp4"> -->
        <!-- <source src="http://fd.aigei.com/pvvdo_fast/vdo/mp4/d1/d195d6afd6154b0badc1a5858ae2cdc8.mp4?e=1592421660&token=P7S2Xpzfz11vAkASLTkfHN7Fw-oOZBecqeJaxypL:TyTx7zapVGwPgVDhzvtOI8sLWg0=" type="video/mp4"> -->
        <source src="/public/music/video.mp4" type="video/mp4">
        
        
        </video>
        <div class="left box2"><img src="pc/image/video/lunhui.png" alt="" class="log">  
        <!-- <iframe src="https://zhanyuzhang.github.io/lovely-cat/cat.html" id="catIframe" frameborder="0"></iframe> -->
        </div> 
        <div class="content">


            <!-- <div class="center box">
                <div class="clear">最新公告：<br>
                    服务器于2020年9月进行公测！
                </div>
            </div>  -->
            <div class="center gonggao ">
                <div class="clear">最新公告：<br>
                    服务器于2020年9月进行公测！
                </div>
            </div> 

            <!--    轮播-->
            <div class="banner">
                <div class="swiper-container  topBanner">
                    <div class="swiper-wrapper">
                        <!-- <div class="swiper-slide imgwidth"><a href="javascript:void(0);"><img src="pc/image/lunbo/lunbo1.jpg" alt=""></a></div> -->
                        <div class="swiper-slide "><a href="javascript:void(0);"><img src="pc/image/lunbo/lunbo1.jpg" alt="" class="imgwidth"></a></div>
                        <!-- <div class="swiper-slide "><a href="javascript:void(0);"><img src="pc/image/lunbo/lunbo2.jpg" alt="" class="imgwidth"></a></div> -->
                        <!-- <div class="swiper-slide "><a href="javascript:void(0);"><img src="pc/image/lunbo/lunbo3.jpg" alt="" class="imgwidth"></a></div> -->
                        <div class="swiper-slide "><a href="javascript:void(0);"><img src="pc/image/lunbo/lunbo4.jpg" alt="" class="imgwidth"></a></div>
                        <div class="swiper-slide "><a href="javascript:void(0);"><img src="pc/image/lunbo/lunbo5.jpg" alt="" class="imgwidth"></a></div>
                        <div class="swiper-slide "><a href="javascript:void(0);"><img src="pc/image/lunbo/lunbo6.jpg" alt="" class="imgwidth"></a></div>
                        <div class="swiper-slide "><a href="javascript:void(0);"><img src="pc/image/lunbo/lunbo7.jpg" alt="" class="imgwidth"></a></div>
                        <div class="swiper-slide "><a href="javascript:void(0);"><img src="pc/image/lunbo/lunbo8.jpg" alt="" class="imgwidth"></a></div>
                        <div class="swiper-slide "><a href="javascript:void(0);"><img src="pc/image/lunbo/lunbo9.jpg" alt="" class="imgwidth"></a></div>

                    </div>
                    <!-- Add Pagination -->
                    <div class="swiper-pagination topPagination"></div>
                </div>
            </div>


            <div class="center zhnshi box">
                <div class="clear">
                    <div>
                        <span>评论</span>
                    </div>
                    
                    最新公告：<br>
                    服务器于2020年9月进行公测！
                </div>
            </div> 

            <div class="center zhnshi">
                <div class="clear">
                    <div class="title">
                        <span class="span-check">奖励</span>
                        <span class="span-check">人物</span>
                        <span class="span-check">武器</span>
                        <span class="span-check">丹药</span>
                    </div>

                    <div class="monster">
                        <div class="goodbox  box"> 
                            <img class="monster-img" src="/files/attach/images/20200619/1592577261835160.jpg" alt="">
                            <div class="monster-des">
                                名称：幽灵<br>
                                种族：鬼<br>
                                背景：<br>
                                <div>
                                    存在于传说的幽灵，
                                </div>
                            </div>
                        </div>
                        <div class="goodbox  box"> 
                            <img class="monster-img" src="/files/attach/images/20200619/1592577261835160.jpg" alt="">
                            <div class="monster-des">
                                名称：幽灵<br>
                                种族：鬼<br>
                                背景：<br>
                                <div>
                                    存在于传说的幽灵，
                                </div>
                            </div>
                        </div>

                        <div class="goodbox  box"> 
                            <img class="monster-img" src="/files/attach/images/20200619/1592577261835160.jpg" alt="">
                            <div class="monster-des">
                                名称：幽灵<br>
                                种族：鬼<br>
                                背景：<br>
                                <div>
                                    存在于传说的幽灵，
                                </div>
                            </div>
                        </div>


                        <div class="goodbox  box"> 
                            <img class="monster-img" src="/files/attach/images/20200619/1592577261835160.jpg" alt="">
                            <div class="monster-des">
                                名称：幽灵<br>
                                种族：鬼<br>
                                背景：<br>
                                <div>
                                    存在于传说的幽灵，
                                </div>
                            </div>
                        </div>

                        <div class="goodbox  box"> 
                            <img class="monster-img" src="/files/attach/images/20200619/1592577261835160.jpg" alt="">
                            <div class="monster-des">
                                名称：幽灵<br>
                                种族：鬼<br>
                                背景：<br>
                                <div>
                                    存在于传说的幽灵，
                                </div>
                            </div>
                        </div>
                        <div class="goodbox  box"> 
                            <img class="monster-img" src="/files/attach/images/20200619/1592577261835160.jpg" alt="">
                            <div class="monster-des">
                                名称：幽灵<br>
                                种族：鬼<br>
                                背景：<br>
                                <div>
                                    存在于传说的幽灵，
                                </div>
                            </div>
                        </div>
                        <div class="goodbox  box"> 
                            <img class="monster-img" src="/files/attach/images/20200619/1592577261835160.jpg" alt="">
                            <div class="monster-des">
                                名称：幽灵<br>
                                种族：鬼<br>
                                背景：<br>
                                <div>
                                    存在于传说的幽灵，
                                </div>
                            </div>
                        </div>
                        <div class="goodbox  box"> 
                            <img class="monster-img" src="/files/attach/images/20200619/1592577261835160.jpg" alt="">
                            <div class="monster-des">
                                名称：幽灵<br>
                                种族：鬼<br>
                                背景：<br>
                                <div>
                                    存在于传说的幽灵，
                                </div>
                            </div>
                        </div>
                        <div class="goodbox  box"> 
                            <img class="monster-img" src="/files/attach/images/20200619/1592577261835160.jpg" alt="">
                            <div class="monster-des">
                                名称：幽灵<br>
                                种族：鬼<br>
                                背景：<br>
                                <div>
                                    存在于传说的幽灵，
                                </div>
                            </div>
                        </div>
                        <div class="goodbox  box"> 
                            <img class="monster-img" src="/files/attach/images/20200619/1592577261835160.jpg" alt="">
                            <div class="monster-des">
                                名称：幽灵<br>
                                种族：鬼<br>
                                背景：<br>
                                <div>
                                    存在于传说的幽灵，
                                </div>
                            </div>
                        </div>
                        <div class="goodbox  box"> 
                            <img class="monster-img" src="/files/attach/images/20200619/1592577261835160.jpg" alt="">
                            <div class="monster-des">
                                名称：幽灵<br>
                                种族：鬼<br>
                                背景：<br>
                                <div>
                                    存在于传说的幽灵，
                                </div>
                            </div>
                        </div>
                        <div class="goodbox  box"> 
                            <img class="monster-img" src="/files/attach/images/20200619/1592577261835160.jpg" alt="">
                            <div class="monster-des">
                                名称：幽灵<br>
                                种族：鬼<br>
                                背景：<br>
                                <div>
                                    存在于传说的幽灵，
                                </div>
                            </div>
                        </div>
                        <div class="goodbox  box"> 
                            <img class="monster-img" src="/files/attach/images/20200619/1592577261835160.jpg" alt="">
                            <div class="monster-des">
                                名称：幽灵<br>
                                种族：鬼<br>
                                背景：<br>
                                <div>
                                    存在于传说的幽灵，
                                </div>
                            </div>
                        </div>

                                                <div class="goodbox  box"> 
                            <img class="monster-img" src="/files/attach/images/20200619/1592577261835160.jpg" alt="">
                            <div class="monster-des">
                                名称：幽灵<br>
                                种族：鬼<br>
                                背景：<br>
                                <div>
                                    存在于传说的幽灵，
                                </div>
                            </div>
                        </div>                        <div class="goodbox  box"> 
                            <img class="monster-img" src="/files/attach/images/20200619/1592577261835160.jpg" alt="">
                            <div class="monster-des">
                                名称：幽灵<br>
                                种族：鬼<br>
                                背景：<br>
                                <div>
                                    存在于传说的幽灵，
                                </div>
                            </div>
                        </div>

                        <div class="goodbox  box"> 
                            <img class="monster-img" src="/files/attach/images/20200619/1592577261835160.jpg" alt="">
                            <div class="monster-des">
                                名称：幽灵<br>
                                种族：鬼<br>
                                背景：<br>
                                <div>
                                    存在于传说的幽灵，
                                </div>
                            </div>
                        </div>
                        <div class="goodbox  box"> 
                            <img class="monster-img" src="/files/attach/images/20200619/1592577261835160.jpg" alt="">
                            <div class="monster-des">
                                名称：幽灵<br>
                                种族：鬼<br>
                                背景：<br>
                                <div>
                                    存在于传说的幽灵，
                                </div>
                            </div>
                        </div>
                        <div class="goodbox  box"> 
                            <img class="monster-img" src="/files/attach/images/20200619/1592577261835160.jpg" alt="">
                            <div class="monster-des">
                                名称：幽灵<br>
                                种族：鬼<br>
                                背景：<br>
                                <div>
                                    存在于传说的幽灵，
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style="height:40px; width: 100;"> </div>
             
                </div>
            </div> 


            <div style="height:40px;"> </div>
        </div>
        <div class="right">
            <img src="pc/image/kefu/lun1.png" style="width:100%;height:100%"   alt="">
            <div class="saoma">APP下载</div>
        </div> 
        <div class="foot">
                轮回工作室-邮箱：359824901@qq.com
        </div> 
    </div>


</section>


<audio autoplay="autoplay" loop="loop" controls="controls" style="display:none">
    <source src="/public/music/如忆玉儿曲2.mp3"
        type="audio/mpeg">
</audio> 
<!-- <embed src="/public/music/如忆玉儿曲2.mp3" width=170 height=25 loop="true" autostart="true"> -->
<script>
        var BannerSwiper = new Swiper('.topBanner', {
            slidesPerView: 1,
            loop: true,
            tdFlow:{
                rotate:-30,  //旋转的角度
                stretch:10,  //拉伸
                depth:150,  //深度
                modifier:1, //修正值（该值越大前面的效果越明显）
                slideShadows:true  //页面阴影效果
            },
            pagination: {
                el: '.topPagination',
                clickable: true,
            },

            autoplay: {
                disableOnInteraction: false,//操作之后是否默认停止
                delay: 2000,//1秒切换一次
            },

        });
        // $('.btnActive').click(function () {
        //     $('.btnActive').removeClass('on');
        //     $(this).addClass('on');
        //     $('.hotBookCover').css({'display':'none'});
        //     $('.hotBookCover').eq($(this).index()).css({'display':'flex'});
        // });
        var  TeacherSwiper = new Swiper('.teacherCoverContainer', {
            slidesPerView: 4,
            spaceBetween: 30,
            loop : true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    </script>
