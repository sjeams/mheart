<script type="text/javascript" src="/My97DatePicker/WdatePicker.js"></script>

<!-- 树形菜单选择 -->
<link rel="stylesheet" type="text/css" href="/easyui/themes/default/easyui.css">
<link rel="stylesheet" type="text/css" href="/easyui/themes/icon.css">
<script type="text/javascript" src="/easyui/jquery.easyui.min.js"></script>

<div class="span10" id="datacontent">
    <ul class="breadcrumb">
        <li><a href="/user/index/index">用户模块</a> <span class="divider">/</span></li>
        <li class="active">用户回复</li>
    </ul>
    <form action="/user/user-comment/sort" method="post">
        <table class="table table-hover add_defined">
            <thead>
            <tr>
                <th width="80">ID</th>
                <th>题目ID</th>
                <th>文章ID</th>
                <th>回复用户</th>
                <th>被回复用户</th>
                <th>评论描述</th>
                <th>评论时间</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <?php
            foreach($data as $v) {
                ?>
                <tr>
                    <td><?php echo $v['id'] ?></td>
                    <td><span><?php echo $v['questionId'] ?></span></td>
                    <td><span><?php echo $v['contentId'] ?></span></td>
                    <td><span><?php echo $v['replyName'] ?></span></td>
                    <td><span><?php echo $v['nickname'] ?></span></td>
                    <td><span><?php echo $v['content'] ?></span></td>
                    <td><span><?php echo date("Y-m-d H:i:s",$v['createTime'])?></span></td>
                    <td class="notSLH" style="width: 247px;">
                        <div>
                            <a class="btn" href="/user/user-comment/edit?id=<?php echo $v['id'] ?>" >修改</a>
                            <a class="btn" href="javascript:;" onclick="replyDelete(<?php echo $v['id'] ?>)">删除</a>
                        </div>
                    </td>
                </tr>
                <?php
            }
            ?>
            </tbody>
        </table>
        <input type="hidden" name="url" value="">
    </form>
    <div class="pagination pagination-right">
        <?php use yii\widgets\LinkPager;?>
        <?php echo LinkPager::widget([
            'pagination' => $page,
        ])?>
    </div>
    <script>
        function replyDelete(o) {
            var r = confirm("是否确定删除评论");
            if (r == true) {
                $.ajax({
                    url: "/user/user-comment/delete",
                    dataType: "json",
                    data: {
                        id: o //ID
                    },
                    type: "get",
                    success: function (re) {
                        alert(re.message);
                        location.reload();
                    }
                });
            }
        }
    </script>