<script type="text/javascript" src="/My97DatePicker/WdatePicker.js"></script>

<div class="span10" id="datacontent">
    <ul class="breadcrumb">
        <li><a href="/user/evaluation/index">用户测评记录</a> <span class="divider">/</span></li>
        <li class="active">用户测评</li>
    </ul>
    <ul class="nav nav-tabs">
        <li class="active">
            <a href="javascript:;" onclick="javascript:openall();">用户测评</a>
        </li>

    </ul>
    <legend>用户测评</legend>
    <form action="<?php echo baseUrl?>/user/evaluation/index/" method="get" class="form-horizontal">
        <table class="table">
            <tr>
                <td width="100">
                    用户UID：
                </td>
                <td width="250">
                    <input name="uid" class="input-small" size="25" type="text" class="number" value="<?php echo isset($_GET['uid'])?$_GET['uid']:''?>"/>
                </td>
                <td width="100">
                    用户电话：
                </td>
                <td width="250">
                    <input name="phone" class="input-small" size="25" type="text" class="number" value="<?php echo isset($_GET['phone'])?$_GET['phone']:''?>"/>
                </td>
                <td width="100">
                    用户邮箱：
                </td>
                <td width="250">
                    <input name="email" class="input-small" size="25" type="text" class="number" value="<?php echo isset($_GET['email'])?$_GET['email']:''?>"/>
                </td>
            </tr>
            <tr>
                <td>
                    评论时间：
                </td>
                <td width="350">
                    <input class="input-small Wdate" onclick="WdatePicker()" type="text" size="10"  name="beginTime" value="<?php echo isset($_GET['beginTime'])?$_GET['beginTime']:''?>"/> - <input class="input-small Wdate" onclick="WdatePicker()"  size="10" type="text" name="endTime"  value="<?php echo isset($_GET['endTime'])?$_GET['endTime']:''?>"/>
                </td>
                <td>
                    测评类型：
                </td>
                <td>
                    <select name="type" class="input-small" >
                        <option <?php echo isset($_GET['type']) && $_GET['type'] == ''?'selected=selected':''?> value="0">全部</option>
                        <option <?php echo isset($_GET['type']) && $_GET['type'] == 1?'selected=selected':''?> value="1">初级</option>
                        <option <?php echo isset($_GET['type']) && $_GET['type'] == 2?'selected=selected':''?> value="2">中级</option>
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
    <form action="/user/evaluation/index" id="checkPush" method="post" >
        <table class="table table-hover" >
            <thead>
            <tr>
                <th width="40">ID</th>
                <th width="110">用户UID</th>
                <th width="50">用户昵称</th>
                <th width="100">用户电话</th>
                <th width="70">用户邮箱</th>
                <th width="70">测评类型</th>
                <th width="50">测评时间</th>
                <th width="60">操作</th>
            </tr>
            </thead>
            <tbody>
            <?php
            foreach($data as $v) {
                ?>
                <tr>
                    <td width="40"><?php echo $v['id']?></td>
                    <td width="110"><?php echo $v['uid']?></td>
                    <td width="50"><?php echo $v['nickname']?></td>
                    <td width="100"><?php echo $v['phone']?></td>
                    <td width="100"><?php echo $v['email']?></td>
                    <td width="70"><?php if($v['type']==1)echo '初级';else echo '中级';?></td>
                    <td width="100"><?php echo $v['createTime'];?></td>


                    <td width="60">
                        <div>
                            <a href="/evaluation_result/<?php echo $v['type']?>-<?php echo $v['uid'];?>.html" class="btn sureBtn01" ">查看详情</a>
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
        <span style="font-size:14px;color:#333;position:relative;top:-8px;">共 <?php echo $total;?> 人测评</span>
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
        <span style="font-size: 17px;position: relative;bottom: 7px;">共<?php echo $total;?>条&nbsp;</span>&nbsp;&nbsp;&nbsp;
    </div>
</div>
<script type="text/javascript">
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
        });
    });
</script>