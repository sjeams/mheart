<link rel="stylesheet" href="https://file.viplgw.cn/ui/book/cn/css/bookList.css?v=1.1.1">
<link rel="stylesheet" href="https://file.viplgw.cn/ui/public/css/swiper.min.css">
<script src="https://file.viplgw.cn/ui/public/js/jquery-1.12.2.min.js"></script>
<script src="https://file.viplgw.cn/ui/public/js/swiper.min.js"></script>


<section class="listCover">
    <div class="Title"><a href="">首页</a> > <a href="">全部图书</a> </div>
    <div class="classification">
        <a class="classTitle" href="javascript:void(0)">分类:</a>
        <a class="ficationDetail <?php echo  $type ==1 ? 'on' :''; ?>" href="/book/list-1.html">GMAT</a>
        <a class="ficationDetail <?php echo  $type ==2 ? 'on' :''; ?>" href="/book/list-2.html">GRE</a>
        <a class="ficationDetail <?php echo  $type ==3 ? 'on' :''; ?>" href="/book/list-3.html">托福</a>
        <a class="ficationDetail <?php echo  $type ==4 ? 'on' :''; ?>" href="/book/list-4.html">雅思</a>
        <a class="ficationDetail <?php echo  $type ==5 ? 'on' :''; ?>" href="/book/list-5.html">考研</a>
    </div>
    <div class="foreignBook">
        <?php   foreach($book as $val){ ?>
            <div class="bookPiece">
                <div class="mask1"><p><?php  echo $val['belong']?></p></div>
                <div class="detail">
                    <div class="detailImg">
                        <img src="<?php  echo  !empty($val['image'])? $val['image'] :'https://file.viplgw.cn/ui/book/cn/images/home_book.png';   ?>" alt="" class="bookImg">
                        <?php  if($val['sentenceNumber']=='免费' ){ ?>
                        <img src="https://file.viplgw.cn/ui/book/cn/images/home_free.png" alt="" class="freeImg">
                        <?php   } ?>
                    </div>
                    <div class="detailWords">
                        <p><a href="/book-1.html"><?php  echo $val['name']?></a></p>
                        <?php  if($val['sentenceNumber']=='免费' ){ ?> 
                            <a href="javascript:void (0)">立即领取</a>
                        <?php   }else{ ?>
                            <a href="javascript:void (0)">预约购买</a>
                        <?php   } ?>
                    </div>
                </div>
            </div>
        <?php   } ?>
    </div>
</section>