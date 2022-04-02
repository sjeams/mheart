<script type="text/javascript" src="/My97DatePicker/WdatePicker.js"></script>

<!-- 树形菜单选择 -->
<link rel="stylesheet" type="text/css" href="/easyui/themes/default/easyui.css">
<link rel="stylesheet" type="text/css" href="/easyui/themes/icon.css">
<script type="text/javascript" src="/easyui/jquery.easyui.min.js"></script>

<div class="span10" id="datacontent">
    <ul class="breadcrumb">
        <li><a href="/user/index/index">用户模块</a> <span class="divider">/</span></li>
        <li><a href="/user/user/index">用户管理</a> <span class="divider">/</span></li>
        <li class="active">用户订单</li>
    </ul>
    <form action="<?php echo baseUrl?>/user/user/user-order" method="get" class="form-horizontal">
        <table class="table">
            <tr>
            </tr>
        </table>
    </form>
    <form action="/user/user-comment/sort" method="post">
        <table class="table table-hover add_defined">
            <thead>
            <tr>
                <th width="150">订单号</th>
                <th>姓名</th>
                <th>用户名</th>
                <th>电话</th>
                <th>订单名称</th>
                <th>应付款</th>
                <th>实付款</th>
                <th>状态</th>
                <th>班次</th>
                <th>来源</th>
                <th>下单时间</th>
            </tr>
            </thead>
            <tbody>
            <?php
            foreach($data as $v) {
                ?>
                <tr>
                    <td><?php echo $v['orderNumber']; ?></td>
                    <td><span><?php echo $v['name']; ?></span></td>
                    <td><span><?php echo $userName?$userName:''; ?></span></td>
                    <td><span><?php echo $v['phone']; ?></span></td>
                    <td><span><?php echo $v['contentName']['contentName']; ?></span></td>
                    <td><span><?php echo $v['totalMoney']; ?></span></td>
                    <td><span><?php echo $v['payable']; ?></span></td>
                    <td><span><img style="width: 20px;height: 20px;" src="<?php if($v['status'] == 1) echo '/image/error.png';elseif($v['status'] == 3) echo '/image/right.png';else echo $status;?>" /></span></td>
                    <td><span><?php echo $v['grade']?$v['grade']:''?></span></td>
                    <td><span><?php if($v['source'] == 1) echo '用户下单';else echo '后台添加';?></span></td>
                    <td><span><?php echo date("Y-m-d H:i:s",$v['createTime'])?></span></td>
                </tr>
                <?php
            }
            ?>
            </tbody>
        </table>
        <input type="hidden" name="url" value="">
    </form>
    <div class="pagination pagination-right">
        <span style="font-size:14px;color:#333;position:relative;top:-8px;">共 <?php echo $total;?> 条</span>
        <?php use yii\widgets\LinkPager;?>
        <?php echo LinkPager::widget([
            'pagination' => $page,
        ])?>
    </div>
