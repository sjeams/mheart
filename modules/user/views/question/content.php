
<script type="text/javascript" src="/My97DatePicker/WdatePicker.js"></script>

<div class="span10" id="datacontent">
    <ul class="breadcrumb">
        <li><a href="/user/index/index">用户模块</a> <span class="divider">/</span></li>
        <li class="active">问答管理</li>
    </ul>
    <ul class="nav nav-tabs">
        <li class="active">
            <a href="javascript:;" onclick="javascript:openall();">用户管理</a>
        </li>
        <li class="dropdown pull-right">
            <a href="<?php echo baseUrl?>/user/question/add">添加问题</a>
        </li>
    </ul>
    <legend>用户</legend>
    <form action="/user/discuss/publish" id="checkPush" method="post">
        <table class="table table-hover">
            <thead>
            <tr>
                <th width="80">回答ID</th>
                <th>回答用户</th>
                <!--                <th>头像</th>-->
                <th>回答内容</th>
                <th>用户电话</th>
                <th>用户邮箱</th>
                <th>回答时间</th>
                <th>关注数量</th>
                <th>浏览数量</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <?php
            foreach($data as $v) {
                ?>
                <tr>
                    <td><?php echo $v['id']?></td>
                    <td><?php echo $v['userName']?></td>
                    <!--                    <td><img height="30" width="30" src="--><?php //echo $v['image']?><!--"/></td>-->
                    <td><?php echo $v['content'];?></td>
                    <td><?php echo $v['phone']?></td>
                    <td><?php echo $v['email']?></td>
                    <td><?php echo $v['addTime']?></td>
                    <td><?php echo $v['follow']?></td>
                    <td><?php echo $v['browse']?></td>
                    <td>
                        <div>
                            <a class="btn" href="<?php echo baseUrl ?>/user/question/acontent?id=<?php echo $v['id'] ?>&type=3">回复管理</a>
                            <a class="btn" href="<?php echo baseUrl ?>/user/question/update?id=<?php echo $v['id'] ?>&type=<?php if($v['type'] ==3){echo 3; } else{ echo 2;} ?>">修改</a>
                            <a class="btn" href="<?php echo baseUrl ?>/user/question/delete?id=<?php echo $v['id'] ?>">删除</a>
                        </div>
                    </td>
                </tr>
            <?php }
            ?>
            </tbody>
        </table>
    </form>
</div>