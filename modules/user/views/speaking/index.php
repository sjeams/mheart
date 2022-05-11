<script type="text/javascript" src="/My97DatePicker/WdatePicker.js"></script>
<style type="text/css">
    img:hover{
        cursor: pointer;
    }
</style>
<div class="span10" id="datacontent">
    <ul class="breadcrumb">
        <li><a href="/user/index/index">用户模块</a> <span class="divider">/</span></li>
        <li class="active">口语音频管理</li>
    </ul>
<!--    <ul class="nav nav-tabs">-->
<!--        <li class="active">-->
<!--            <a href="javascript:;">口语音频管理</a>-->
<!--        </li>-->
<!--    </ul>-->
<!--    <legend>用户</legend>-->
    <ul class="nav nav-tabs">
        <?php
        ?>
        <?php
        foreach($block as $v) {
            if ($v['value'] == 'add') {
                ?>
                <li class="dropdown pull-right">

                    <a href="<?php echo baseUrl?>/user/speaking/add"><?php echo $v['name']?></a>
                </li>
            <?php
            }
        }
        ?>
    </ul>
    <form action="<?php echo baseUrl?>/user/speaking/index/" method="get" class="form-horizontal">
        <table class="table">
            <tr>
                <td>
                    用户Id：
                </td>
                <td>
                    <input name="userId" class="input-small" size="25" type="text" class="number" value="<?php echo isset($_GET['userId'])?$_GET['userId']:''?>"/>
                </td>
                <td>
                    问题Id：
                </td>
                <td>
                    <input class="input-small" name="questionId" size="25" type="text" value="<?php echo isset($_GET['questionId'])?$_GET['questionId']:''?>"/>
                </td>
            </tr>
            <tr>
                <td>
                    TPOId：
                </td>
                <td>
                    <input name="catId" class="input-small" size="25" type="text" class="number" value="<?php echo isset($_GET['catId'])?$_GET['catId']:''?>"/>
                </td>
<!--                <td>-->
<!--                    用户名：-->
<!--                </td>-->
<!--                <td>-->
<!--                    <input class="input-small" name="userName" size="25" type="text" value="--><?php //echo isset($_GET['userName'])?$_GET['userName']:''?><!--"/>-->
<!--                </td>-->
<!--                <td>-->
<!--                    用户昵称：-->
<!--                </td>-->
<!--                <td>-->
<!--                    <input class="input-small" name="nickname" size="25" type="text" value="--><?php //echo isset($_GET['nickname'])?$_GET['nickname']:''?><!--"/>-->
<!--                </td>-->
            </tr>
            <tr>
                <td>
                    <button class="btn btn-primary" type="submit">提交</button>
                </td>
            </tr>
        </table>
    </form>
    <form action="/user/discuss/publish" id="checkPush" method="post">
        <table class="table table-hover">
            <thead>
            <tr>
                <th width="80">ID</th>
                <th>问题Id</th>
<!--                <th>头像</th>-->
                <th>问题名称</th>
                <th>TPOId</th>
                <th>TPO名称</th>
                <th>用户Id</th>
                <th>答案音频</th>
                <th>模范答案</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <?php
            foreach($data as $v) {
                ?>
                <tr>
                    <td><?php echo $v['id']?></td>
                    <td><?php echo $v['contentId']?></td>
<!--                    <td><img height="30" width="30" src="--><?php //echo $v['image']?><!--"/></td>-->
                    <td><?php echo $v['name']?></td>
                    <td><?php echo $v['catId']?></td>
                    <td><?php echo $v['catName']?></td>
                    <td><?php echo $v['userId']?></td>
                    <td><img src="/cn/images/listenDe-volume01.png" alt="音频图标" onclick="playAudio(this)">
                        <audio src="<?php echo $v['answer']?>"></audio></td>
                    <td><?php echo $v['example']?'是':'否'?></td>
                    <td>
                        <div>
                            <?php
                            foreach($block as $val) {
                                ?>
                            <?php if($val['value'] == 'delete') { ?>
                                    <a class="btn"
                                       href="javascript:;" onclick="checkDelete(<?php echo $v['id']?>)"><?php echo $val['name']?></a>
                                <?php
                                }elseif($val['value'] != 'add'){
                                    ?>
                                    <a class="btn"
                                       href="<?php echo baseUrl ?>/user/speaking/<?php echo $val['value'] ?>?id=<?php echo $v['id'] ?>&url=<?php echo Yii::$app->request->getUrl() ?>"><?php echo $v['example']?'取消范例':'设为范例' ?></a>
                                <?php
                                }
                                ?>
                            <?php
                            }
                            ?>
                        </div>
                    </td>
                </tr>
            <?php
            }
            ?>
            </tbody>
        </table>
    </form>
    <div class="pagination pagination-right">
        <?php use yii\widgets\LinkPager;?>
        <?php echo LinkPager::widget([
            'pagination' => $page,
        ])?>
    </div>
</div>
<script type="text/javascript">
    function playAudio(o){
        var audio=$(o).next("audio")[0];
        if(audio.paused){
            audio.play();
        }else{
            audio.pause();
        }
    }
    function checkDelete(id){
        if(confirm("确定删除用户吗？删除后用户资料将不可恢复")){
            location.href = "/content/content/delete?url=<?php echo Yii::$app->request->getUrl()?>&id="+id;
        }

    }
    $(function() {
        $(".checkAll").change(function () {
            var sss = $(this).is(":checked");
            if(sss){
                $(".childCheck").prop("checked", true);
            }else{
                $(".childCheck").prop("checked", false);
            }
        })

        $(".push").on('click',function(){
            $("input[name='status']").val(1);
            $("#checkPush").submit();
        })
        $(".noPush").on('click',function(){
            $("input[name='status']").val(0);
            $("#checkPush").submit();
        })
    })
</script>