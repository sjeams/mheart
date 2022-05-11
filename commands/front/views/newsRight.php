<div class="infoRight">
    <!--热门文章-->
    <div class="hotArticle">
        <h3>●热门文章</h3>
        <ul>
            <?php
                foreach($hot as $v) {
                    ?>
                    <li><a href="/toeflnews/<?php echo $v['id']?>.html"><img src="/cn/images/tiku_meidt_anniubj.png" alt="编辑小图标"> <?php echo $v['name']?></a></li>
                <?php
                }
            ?>
        </ul>
    </div>
    <!--考试指南-->
    <div class="examination">
        <h3>●考试指南</h3>
        <ul>
            <?php
                foreach($guide as $v) {
                    ?>
                    <li>
                        <a href="/toeflnews/<?php echo $v['id']?>.html">
                        <div class="blueCircle"><span></span><img src="<?php echo $v['image']?>" alt="<?php echo $v['name']?>"></div>
                        <span><?php echo $v['name']?></span>
                        </a>
                    </li>
                <?php
                }
            ?>
        </ul>
        <div style="clear: both"></div>
    </div>

    <!--特约专栏-->
    <div class="special">
        <h3>●特约专栏</h3>
        <ul>
            <?php
                foreach($special as $v) {
                    ?>
                    <li>
                        <span>GMAT备考资讯</span>
                        <a href="/toeflnews/<?php echo $v['id']?>.html"><?php echo $v['name']?></a>
                    </li>
                <?php
                }
            ?>
        </ul>
    </div>

    <!--热门话题-->
    <div class="hotHuati">
        <h3>●热门话题</h3>
        <ul>
            <li class="bac01">托福考试报名</li>
            <li class="bac02">托福备考资料</li>
            <li class="bac03">托福报名流程</li>
            <li class="mt">托福机经预测</li>
            <li class="mt">托福考试时间</li>
            <li class="mt">托福转考</li>
            <li class="mt">托福报名费用</li>
            <li class="mt">托福培训</li>
            <li class="mt">托福在线课程</li>
        </ul>
    </div>
</div>