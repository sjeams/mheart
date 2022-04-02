
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
<form action="<?php echo baseUrl?>/user/question/index/" method="get" class="form-horizontal">
    <table class="table">
        <tr>
            <td>
                问题ID：
            </td>
            <td>
                <input name="id" class="input-small" size="25" type="text" class="number" value="<?php echo isset($_GET['id'])?$_GET['id']:''?>"/>
            </td>
            <td>
                提问时间：
            </td>
            <td>
                <input class="input-small Wdate" onclick="WdatePicker()" type="text" size="10"  name="beginTime" value="<?php echo isset($_GET['beginTime'])?$_GET['beginTime']:''?>"/> - <input class="input-small Wdate" onclick="WdatePicker()"  size="10" type="text" name="endTime"  value="<?php echo isset($_GET['endTime'])?$_GET['endTime']:''?>"/>
            </td>
            <td>
                用户邮箱：
            </td>
            <td>
                <input class="input-small" name="email" size="25" type="text" value="<?php echo isset($_GET['email'])?$_GET['email']:''?>"/>
            </td>
        </tr>
        <tr>
            <td>
                用户电话：
            </td>
            <td>
                <input name="phone" class="input-small" size="25" type="text" class="number" value="<?php echo isset($_GET['phone'])?$_GET['phone']:''?>"/>
            </td>
            <td>
                提问用户：
            </td>
            <td>
                <input class="input-small" name="userName" size="25" type="text" value="<?php echo isset($_GET['userName'])?$_GET['userName']:''?>"/>
            </td>
            <td>
                问题分类：
            </td>
            <td>
                <select name="questionType" id="">
                    <option <?php if($_GET['questionType'] ==''){?> selected="selected"<?php }?> value="">全部</option>
                    <option <?php if($_GET['questionType'] ==1){?> selected="selected"<?php }?> value="1">推荐</option>
                    <option <?php if($_GET['questionType'] ==2){?> selected="selected"<?php }?> value="2">热门</option>
                </select>
            </td>
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
            <th width="80">问题ID</th>
            <th>提问用户</th>
            <!--                <th>头像</th>-->
            <th>提问内容</th>
            <th>用户电话</th>
            <th>用户邮箱</th>
            <th>提问时间</th>
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
                <td><?php echo $v['question']?></td>
                <td><?php echo $v['phone']?></td>
                <td><?php echo $v['email']?></td>
                <td><?php echo $v['addTime']?></td>
                <td><?php echo $v['follow']?></td>
                <td><?php echo $v['browse']?></td>
                <td>
                    <div>
                        <a class="btn" href="<?php echo baseUrl ?>/user/question/acontent?id=<?php echo $v['id'] ?>&type=2">回答管理</a>
                        <a class="btn" href="<?php echo baseUrl ?>/user/question/update?id=<?php echo $v['id'] ?>&type=1">修改</a>
                        <a class="btn" href="javascript:;" onclick="checkDelete(<?php echo $v['id']?>)">删除</a>
                    </div>
                </td>
            </tr>
        <?php }
        ?>
        </tbody>
    </table>
</form>
</div>
<script type="text/javascript">
    function checkDelete(id){
        if(confirm("确定删除吗？删除后资料将不可恢复")){
            location.href = "/user/question/delete?id="+id;
        }
    }
</script>