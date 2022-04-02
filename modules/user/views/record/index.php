<script type="text/javascript" src="/My97DatePicker/WdatePicker.js"></script>

<div class="span10" id="datacontent">
    <ul class="breadcrumb">
        <li><a href="/user/index/index">用户模块</a> <span class="divider">/</span></li>
        <li class="active">管理员记录</li>
    </ul>
    <ul class="nav nav-tabs">
        <li class="active">
            <a href="javascript:;">管理员记录</a>
        </li>
    </ul>
    <legend>用户</legend>
    <form action="<?php echo baseUrl?>/user/record/index/" method="get" class="form-horizontal">
        <table class="table">
            <tr>
                <td>
                    管理员Id：
                </td>
                <td>
                    <input name="user" class="input-small" size="25" type="text" class="number" value="<?php echo isset($_GET['user'])?$_GET['user']:''?>"/>
                </td>
                <td>
                    操作时间：
                </td>
                <td>
                    <input class="input-small Wdate" onclick="WdatePicker()" type="text" size="10"  name="beginTime" value="<?php echo isset($_GET['beginTime'])?$_GET['beginTime']:''?>"/> - <input class="input-small Wdate" onclick="WdatePicker()"  size="10" type="text" name="endTime"  value="<?php echo isset($_GET['endTime'])?$_GET['endTime']:''?>"/>
                </td>
            </tr>
            </tr>
            <tr>
                <td>
                    <button class="btn btn-primary" type="submit">提交</button>
                    <button class="btn btn-primary" type="button" onclick="download_excel()">下载日志</button>
                </td>
            </tr>
        </table>
    </form>
    <form action="/user/discuss/publish" id="checkPush" method="post">
        <table class="table table-hover">
            <thead>
            <tr>
                <th>账号</th>
                <th>时间</th>
                <th>商品名</th>
                <th>客户名字</th>
                <th>有效期</th>
                <th>操作日志</th>
                <th>备注</th>
            </tr>
            </thead>
            <tbody>
            <?php
            foreach($data as $v) {
                ?>
                <tr>
                    <td><?php echo $v['user']?></td>
                    <td><?php echo date("Y-m-d H:i:s",$v['createTime'])?></td>
                    <td><?php echo $v['contentName']?></td>
                    <td><?php echo $v['consignee']?></td>
                    <td><?php echo date("Y-m-d H:i:s",$v['endTime'])?></td>
                    <td><?php echo $v['content']?></td>
                    <td><?php echo $v['remark']?></td>
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

<script>
    function download_excel() {
        location.href = "/user/api/download-record";
    }
</script>
