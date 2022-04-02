<?php $userData = Yii::$app->session->get('userData') ?>
<?php $level = Yii::$app->session->get('level') ?>
<div class="centerTop bg_f tm">
    <div class="userInfo_wrap inm">
        <div class="userImg_1 inm"><img id="headImage"
                                        src="<?php echo isset($userData['image']) ? $userData['image'] : '/cn/images/gre_userCenter/test_user.png' ?>"
                                        alt=""></div>
        <div class="inm">
            <p class="username ellipsis"><?php echo isset($userData['nickname']) ? $userData['nickname'] : $userData['userName'] ?></p>
            <p class="userLevel"><i class="iconfont icon-level"></i><span><?php echo $level ?></span></p>
            <a class="link_set" href="/user.html">个人设置</a>
        </div>
    </div>
    <div class="testItme_wrap inm">
        <div class="test_item">
            <div class="inm tem_text">
                <p class="item_tit">做题总数</p>
                <p class="item_data"><?php echo $questionTotal ?></p>
            </div>
            <div class="inm">
                <i class="iconfont icon icon-shunxulianxi-copy"></i>
            </div>
        </div>
        <div class="test_item">
            <div class="inm tem_text">
                <p class="item_tit">正确率</p>
                <p class="item_data"><?php echo round($correctNum / $questionTotal * 100); ?>%</p>
            </div>
            <div class="inm">
                <i class="iconfont icon icon-shuju"></i>
            </div>
        </div>
        <div class="test_item">
            <div class="inm tem_text">
                <p class="item_tit">单词记忆总数</p>
                <p class="item_data"><?php echo $wordNum ?></p>
            </div>
            <div class="inm">
                <i class="iconfont icon icon-danciben"></i>
            </div>
        </div>
        <div class="test_item">
            <div class="inm tem_text">
                <p class="item_tit">复习天数</p>
                <p class="item_data"><?php echo ceil((time() - $userData['createTime']) / 86400) ?>天</p>
            </div>
            <div class="inm">
                <i class="iconfont icon icon-calendar"></i>
            </div>
        </div>
    </div>
</div>