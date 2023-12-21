<script type="text/javascript" src="/My97DatePicker/WdatePicker.js"></script>

<!-- 树形菜单选择 -->
<link rel="stylesheet" type="text/css" href="/easyui/themes/default/easyui.css">
<link rel="stylesheet" type="text/css" href="/easyui/themes/icon.css">
<script type="text/javascript" src="/easyui/jquery.easyui.min.js"></script>

<div class="span10" id="datacontent">
    <ul class="breadcrumb">
        <li><a href="/user/index/index">用户模块</a> <span class="divider">/</span></li>
        <li class="active">用户吐槽</li>
    </ul>
    <form action="<?php echo baseUrl?>/user/user-gossip/index" method="get" class="form-horizontal">
        <table class="table">
            <tr>
                <td width="250">
                    用户UID：&nbsp;&nbsp;
                    <input type="text" name="uid" value="<?php echo isset($_GET['uid'])?$_GET['uid']:'' ?>" style="width: 100px;"/>
                </td>
                <td>
                    <button class="btn btn-primary" type="submit">提交</button>
                </td>
            </tr>
        </table>
    </form>
    <form action="/user/user-comment/sort" method="post">
        <table class="table table-hover add_defined">
            <thead>
            <tr>
                <th width="80">吐槽人</th>
                <th>标题</th>
                <th>内容</th>
                <th>吐槽时间</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <?php
            foreach($data as $v) {
                ?>
                <tr>
                    <td><?php echo $v['publisher']."(".$v['uid'].")" ?></td>
                    <td><span><?php echo $v['title'] ?></span></td>
                    <td><span><?php echo $v['content'] ?></span></td>
                    <td><span><?php echo date("Y-m-d H:i:s",$v['createTime'])?></span></td>
                    <td class="notSLH" style="width: 247px;">
                        <div>
                            <a class="btn" href="/user/user-gossip/select-reply?id=<?php echo $v['id'] ?>" >查看回复</a>
                            <a class="btn" href="javascript:;" onclick="deleteGossip(<?php echo $v['id'] ?>)">删除</a>
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
        function deleteGossip(o) {
            if (confirm("确认删除这条吐槽相关的所有内容吗？")) {
                $.ajax({
                    url: "https://bbs.viplgw.cn/cn/api/delete-gossip",
                    type: "post",
                    data: {
                        gossipId: o,
                    },
                    dataType: "json",
                    success: function (data) {
                        if (data.code == 1) {
                            alert(data.message);
                            location.reload();
                        } else {
                            alert(data.message);
                        }
                    }
                })
            }
        }
    </script>