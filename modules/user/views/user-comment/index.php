<script type="text/javascript" src="/My97DatePicker/WdatePicker.js"></script>

<!-- 树形菜单选择 -->
<link rel="stylesheet" type="text/css" href="/easyui/themes/default/easyui.css">
<link rel="stylesheet" type="text/css" href="/easyui/themes/icon.css">
<script type="text/javascript" src="/easyui/jquery.easyui.min.js"></script>

<div class="span10" id="datacontent">
    <ul class="breadcrumb">
        <li><a href="/user/index/index">用户模块</a> <span class="divider">/</span></li>
        <li class="active">用户评论</li>
    </ul>
    <form action="<?php echo baseUrl?>/user/user-comment/index" method="get" class="form-horizontal">
        <table class="table">
            <tr>
                <td width="250">
                    试题ID：&nbsp;&nbsp;
                    <input type="text" name="questionId" value="<?php echo isset($_GET['questionId'])?$_GET['questionId']:'' ?>" style="width: 100px;"/>
                </td>
                <td width="250">
                    文章内容ID：&nbsp;&nbsp;
                    <input type="text" name="contentId" value="<?php echo isset($_GET['contentId'])?$_GET['contentId']:'' ?>" style="width: 100px;"/>
                </td>
                <td width="350">
                    评论时间：
                    <input class="input-small Wdate" onclick="WdatePicker()" type="text" size="10"  name="beginTime" value="<?php echo isset($_GET['beginTime'])?$_GET['beginTime']:''?>"/> - <input class="input-small Wdate" onclick="WdatePicker()"  size="10" type="text" name="endTime"  value="<?php echo isset($_GET['endTime'])?$_GET['endTime']:''?>"/>
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
                <th width="80">ID</th>
                <th>题目ID</th>
                <th>文章ID</th>
                <th>评论用户</th>
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
                    <td><span><?php echo $v['nickname'] ?></span></td>
                    <td><span><?php echo $v['content'] ?></span></td>
                    <td><span><?php echo date("Y-m-d H:i:s",$v['createTime'])?></span></td>
                    <td class="notSLH" style="width: 247px;">
                        <div>
                            <a class="btn" href="/user/user-comment/select-reply?id=<?php echo $v['id'] ?>" >查看回复</a>
                            <a class="btn" href="/user/user-comment/edit?id=<?php echo $v['id'] ?>" >修改</a>
                            <a class="btn" href="javascript:;" onclick="commetDelete(<?php echo $v['id'] ?>)">删除</a>
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
        <span style="font-size: 17px;position: relative;bottom: 7px;">共<?php echo $total;?>条&nbsp;</span>&nbsp;&nbsp;&nbsp;
        <input type="hidden" id="jumpUrl" value="<?php echo Yii::$app->request->getUrl();?>" />
        <?php if($total > 100){?>
            <span style="font-size: 17px;position: relative;bottom: 5px;">
            <a onclick="jumpPage()" style="cursor: pointer;">Go</a>&nbsp;
            <input type="text" style="width: 20px;height: 18px;" id="jumpPage">&nbsp;页
        </span>
        <?php }?>
        <?php use yii\widgets\LinkPager;?>
        <?php echo LinkPager::widget([
            'pagination' => $page,
        ])?>
    </div>
    <script>
        function jumpPage(){
            var url = $('#jumpUrl').val();
            var page = $("#jumpPage").val();
            if(isNaN(page) || page <= 0 || !page){
                alert('请输入正确的数值');
                return false;
            }
            var res = url.indexOf('page');
            if(res > 0){
                var u = url.replace(/page=(\d+)/,'page='+page);
            }else{
                var re = url.indexOf('?');
                if(re > 0){
                    u = url+'&page='+page;
                }else{
                    u = url+'?page='+page;
                }
            }
            location.href = u;
        }
        function commetDelete(o) {
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