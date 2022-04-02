<div class="beikao-right fr sidebar">
    <div class="theiaStickySidebar">
    <div class="baike-title">
        <img src="/cn/images/beikao/beikao-baike.png" alt="图标"/>
        <span>GRE百科</span>
    </div>
    <div class="baike-content">
        <ul>
            <?php
            foreach($baiKe as $v) {
                ?>
                <li>
                    <a href="/beikao/d-544-<?php echo $v['id'] ?>.html">
                        <img src="<?php echo $v['image'] ?>" alt="图片"/>

                        <p><?php echo $v['name'] ?></p>
                    </a>
                </li>
                <?php
            }
            ?>
        </ul>
    </div>
    <div class="baike-title">
        <img src="/cn/images/beikao/beikao-our.png" alt="图标"/>
        <span>大家都在看</span>
    </div>
    <div class="baike-us">
        <ul>
            <?php
            foreach($browse as $v) {
                ?>
                <li>
                    <div class="us-left">
                        <a href="/beikao/d-537-<?php echo $v['id'] ?>.html">
                            <img src="<?php echo $v['image'] ?>" alt="图片"/>
                        </a>
                    </div>
                    <div class="us-right">
                        <p class="ellipsis-2">
                            <a href="/beikao/d-537-<?php echo $v['id'] ?>.html"><?php echo $v['name'] ?></a>
                        </p>
                        <span><?php echo date("Y-m-d",strtotime($v['alternatives'])) ?>| 关注度：<?php echo $v['viewCount'] ?></span>
                    </div>
                    <div class="clearfix"></div>
                </li>
                <?php
            }
            ?>
    </div>
    <div class="beikao-sideBar">
        <?php
        $res = \app\modules\cn\models\Content::getClass(['where' => 'c.pid=0','fields' => 'answer','category' => '565','order'=>' RAND()','page'=>1,'pageSize' => 1]);
        foreach($res as $v) {
            ?>
            <a href="<?php echo $v['answer'] ?>"><img src="<?php echo $v['image'] ?>" alt="图片"/></a>
            <?php
        }
        ?>
    </div>
    </div>
</div>
<script type="text/javascript">
    $(document).ready(function() {
        $('.content,.sidebar').theiaStickySidebar();
    });
</script>