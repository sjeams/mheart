<?php $adminId = Yii::$app->session->get('adminId'); ?>
<input type="hidden" id="adminId" value="<?php echo $adminId ?>">
<script type="text/javascript" src="/My97DatePicker/WdatePicker.js"></script>
<style>
     body {
           min-width: 0;
       }
    #checkPush .table th, .table td {
        word-wrap: break-word;
    }

    #checkPush table tr td:last-child, #checkPush table tr th:last-child {
        width: 120px;
    }
     .Remarks{
         /*cursor: pointer;*/
     }
    .Remarks_hover{
        line-height:28px; width:99px;text-align:center; text-overflow:ellipsis;white-space:nowrap; overflow:hidden;
    }

</style>
<div class="span11" id="datacontent">
    <ul class="breadcrumb">
        <li><a href="/user/index/index">订单模块</a> <span class="divider">/</span></li>
        <li class="active">订单管理</li>
    </ul>
    <ul class="nav nav-tabs">
        <li class="active">
            <a href="javascript:;" onclick="javascript:openall();">订单管理</a>
        </li>
        <?php
        foreach ($block as $v) {
            ?>
            <?php
            if ($v['value'] == 'add') {
                ?>
                <li class="dropdown pull-right">
                    <a href="<?php echo baseUrl ?>/user/order/add">添加订单</a>
                </li>
                <?php
            }
            ?>
            <?php
        }
        ?>
    </ul>
    <!--    <legend>订单</legend>-->
    <form action="<?php echo baseUrl ?>/user/order/index/" method="get" class="form-horizontal">
        <table class="table">
            <tr>
                <td>
                    用户姓名：
                </td>
                <td>
                    <input name="username" class="input-small" size="25" type="text" class="number"
                           value="<?php echo isset($_GET['username']) ? $_GET['username'] : '' ?>"/>
                </td>
                <td>
                    用户电话：
                </td>
                <td>
                    <input name="phone" class="input-small" size="25" type="text" class="number"
                           value="<?php echo isset($_GET['phone']) ? $_GET['phone'] : '' ?>"/>
                </td>
                <td>
                    用户邮箱：
                </td>
                <td>
                    <input name="email" class="input-small" size="25" type="text" class="number"
                           value="<?php echo isset($_GET['email']) ? $_GET['email'] : '' ?>"/>
                </td>

            </tr>
            <tr>
                <td>
                    订单Id：
                </td>
                <td>
                    <input name="id" class="input-small" size="25" type="text" class="number"
                           value="<?php echo isset($_GET['id']) ? $_GET['id'] : '' ?>"/>
                </td>
                <td>
                    订单状态：
                </td>
                <td>
                    <select name="status" class="input-small">
                        <option <?php echo isset($_GET['status']) && $_GET['status'] == '' ? 'selected=selected' : '' ?>
                                value="">全部
                        </option>
                        <option <?php echo isset($_GET['status']) && $_GET['status'] == 1 ? 'selected=selected' : '' ?>
                                value="1">未付款
                        </option>
                        <option <?php echo isset($_GET['status']) && $_GET['status'] == 2 ? 'selected=selected' : '' ?>
                                value="2">已取消
                        </option>
                        <option <?php echo isset($_GET['status']) && $_GET['status'] == 3 ? 'selected=selected' : '' ?>
                                value="3">已付款
                        </option>
                        <option <?php echo isset($_GET['status']) && $_GET['status'] == 4 ? 'selected=selected' : '' ?>
                                value="4">配送中
                        </option>
                        <option <?php echo isset($_GET['status']) && $_GET['status'] == 5 ? 'selected=selected' : '' ?>
                                value="5">已完成
                        </option>
                    </select>
                </td>
                <td>
                    订单来源：
                </td>
                <td>
                    <select name="source" class="input-small">
                        <option <?php echo isset($_GET['source']) && $_GET['source'] == '' ? 'selected=selected' : '' ?>
                                value="">全部
                        </option>
                        <option <?php echo isset($_GET['source']) && $_GET['source'] == 1 ? 'selected=selected' : '' ?>
                                value="1">用户下单
                        </option>
                        <option <?php echo isset($_GET['source']) && $_GET['source'] == 2 ? 'selected=selected' : '' ?>
                                value="2">后台创建
                        </option>
                    </select>
                </td>
            </tr>
            <tr >
                <td>
                    订单号：
                </td>
                <td>
                    <input name="orderNumber" class="input-small" size="25" type="text" class="number"
                           value="<?php echo isset($_GET['orderNumber']) ? $_GET['orderNumber'] : '' ?>"/>
                </td>
                <td width="100">
                    下单时间：
                </td>
                <td width="250" colspan="5">
                    <input class="input-small Wdate" onclick="WdatePicker()" type="text" size="10" name="beginTime"
                           value="<?php echo isset($_GET['beginTime']) ? $_GET['beginTime'] : '' ?>"/> - <input
                            class="input-small Wdate" onclick="WdatePicker()" size="10" type="text" name="endTime"
                            value="<?php echo isset($_GET['endTime']) ? $_GET['endTime'] : '' ?>"/>
                </td>

            </tr>
            <tr>
                <td colspan="6">
                    <button class="btn btn-primary" type="submit">提交</button>
                </td>
            </tr>
        </table>
    </form>
    <form action="/user/discuss/publish" id="checkPush" method="post">
        <table class="table table-hover">
            <thead>
            <tr>
                <th>ID</th>
                <th>姓名</th>
                <th>用户名</th>
                <th>收货电话</th>
                <!--                <th width="50">用户UID</th>-->
                <th>订单名称</th>
                <th>应付款</th>
                <th>实付款</th>
                <th>来源</th>
                <th>状态</th>
                <th>下单时间</th>
                <th>开始时间</th>
                <th>直播结束时间</th>
                <th>录播结束时间</th>
                <th>付款时间</th>
                <th>班次</th>
                <th width="100px">备注</th>
                <th>操作</th>
            </tr>
            </thead>
            <tbody>
            <?php
            foreach ($data as $v) {
                ?>
                <tr>
                    <td data-orderNumber="<?php echo $v['orderNumber'];?>"><?php echo $v['id'] ?></td>
                    <td><?php echo $v['name'] ?></td>
                    <td><?php echo $v['userName'] ?></td>
                    <td><?php echo $v['phone'] ?></td>
                    <!--                    <td width="50">--><?php //echo $v['uid']?><!--</td>-->
                    <td><?php echo $v['contentName']['contentName'] ?></td>
                    <!-- <td><?php //echo floor($v['totalMoney']); ?></td> -->
                    <td><?php echo  number_format($v['totalMoney'], 2); ?></td>
                   
                    <td class="orderT">
                        <!-- <p><?php //echo floor($v['payable']); ?></p> -->
                        <p><?php echo number_format($v['payable'], 2); ?></p>
                        
                        <div class="orderTotal" style="display: none">
                            <input type="text" style="width: 50px;" value="<?php echo floor($v['payable']); ?>">
                        </div>
                    </td>
                    <td><?php if ($v['source'] == 1) echo '用户下单'; else echo '后台添加'; ?></td>
                    <?php switch ($v['status']) {
                        case 1:
                            $status = '未付款';
                            break;
                        case 2:
                            $status = '已取消';
                            break;
                        case 3:
                            $status = '已付款';
                            break;
                        case 4:
                            $status = '配送中';
                            break;
                        case 5:
                            $status = '已完成';
                            break;
                        default:
                            $status = '';
                            break;
                    } ?>
                    <td class="statusXiala">
                        <p>
                            <img style="width: 20px;height: 20px;"
                                 src="<?php if ($v['status'] == 1) echo '/image/error.png'; elseif ($v['status'] == 3) echo '/image/right.png'; else echo $status; ?>"/>
                            <input type="hidden" value="<?php echo $v['status']; ?>" id="fk_status">
                        </p>
                        <!--                        <select name="" class="orderStatus" style="width: 80px;display: none;">-->
                        <!--                            <option -->
                        <?php //if($v['status']==1){ echo "selected"; } ?><!-- value="1">未付款</option>-->
                        <!--                            <option -->
                        <?php //if($v['status']==3){ echo "selected"; } ?><!-- value="3">已付款</option>-->
                        <!--                        </select>-->
                    </td>
                    <td><?php echo date("Y-m-d H:i:s", $v['createTime']) ?></td>
                    <td class="stimeTd">
                        <p style="display:<?php if ($v['startTime']) {
                            echo 'block';
                        } else {
                            echo 'none';
                        } ?>"><?php echo date("Y-m-d H:i:s", $v['startTime']) ?></p>
<!--                        <div class="chooseTime" style="display: none">-->
<!--                            <input class="input-small Wdate" onclick="WdatePicker({ dateFmt: 'yyyy-MM-dd HH:mm:ss' })"-->
<!--                                   type="text" size="10" name="beginTime"-->
<!--                                   value="--><?php //echo isset($v['startTime']) ? date("Y-m-d H:i:s", $v['startTime']) : '' ?><!--"/>-->
<!--                        </div>-->
                    </td>
                    <td class="etimeTd">
                        <p style="display:<?php if ($v['endTime']) {
                            echo 'block';
                        } else {
                            echo 'none';
                        } ?>"><?php echo date("Y-m-d H:i:s", $v['endTime']) ?></p>
<!--                        <div class="chooseTime" style="display: none">-->
<!--                            <input class="input-small Wdate"-->
<!--                                   onclick="WdatePicker({ dateFmt: 'yyyy-MM-dd HH:mm:ss' })" size="10" type="text"-->
<!--                                   name="endTime"-->
<!--                                   value="--><?php //echo isset($v['endTime']) ? date("Y-m-d H:i:s", $v['endTime']) : '' ?><!--"/>-->
<!--                        </div>-->
                    </td>
                    <td class="etimeTd2">
                        <p style="display:<?php if ($v['endTime2']) {
                            echo 'block';
                        } else {
                            echo 'none';
                        } ?>"><?php echo date("Y-m-d H:i:s", $v['endTime2']) ?></p>
<!--                        <div class="chooseTime" style="display: none">-->
<!--                            <input class="input-small Wdate"-->
<!--                                   onclick="WdatePicker({ dateFmt: 'yyyy-MM-dd HH:mm:ss' })" size="10" type="text"-->
<!--                                   name="endTime"-->
<!--                                   value="--><?php //echo isset($v['endTime2']) ? date("Y-m-d H:i:s", $v['endTime2']) : '' ?><!--"/>-->
<!--                        </div>-->
                    </td>
                    <td><?php echo $v['payTime'] ? date("Y-m-d H:i:s", $v['payTime']) : '' ?></td>
                    <td class="banciTd">
                        <p> <?php echo $v['grade'] ? $v['grade'] : '' ?></p>
<!--                        <div class="banci" style="display: none">-->
<!--                            <input type="text" style="width: 50px;"-->
<!--                                   value="--><?php //echo $v['grade'] ? $v['grade'] : '' ?><!--">-->
<!--                        </div>-->
                    </td>
                    <td class="Detail">
                        <p  class="Remarks " ><?php echo $v['favorableDetails']; ?></p>
                        <!--                        <div class="orderDetail" style="display: none">-->
                        <!--                            <input type="text" style="width: 50px;" value="--><?php //echo $v['favorableDetails'] ?><!--">-->
                        <!--                        </div>-->
                    </td>
                    <td>
                        <div style="float: left;margin-right: 5px">
                            <?php
                            foreach ($block as $val) {
                                ?>
                                <?php if ($val['value'] == 'delete') { ?>
                                    <a href="javascript:void(0);" class="btn" onclick="deleteOrder(this)">删除</a>
                                    <?php
                                } else if ($val['value'] == 'alter') {
                                    ?>
                                    <a class="btn"
                                       href="<?php echo baseUrl ?>/user/order/<?php echo $val['value'] ?>?id=<?php echo $v['id'] ?>"><?php echo $val['name'] ?></a>
                                    <?php
                                }else if ($val['value'] != 'add') {
                                    ?>
                                    <a class="btn"
                                       href="<?php echo baseUrl ?>/order/order/<?php echo $val['value'] ?>?id=<?php echo $v['id'] ?>&url=<?php echo Yii::$app->request->getUrl() ?>"><?php echo $val['name'] ?></a>
                                    <?php
                                }
                                ?>
                                <?php
                            }
                            ?>
<!--                            <a href="javascript:void(0);" class="btn sureBtn01" onclick="showUpdateK(this)">修改</a>-->
<!--                            <a href="javascript:void(0);" class="btn sureBtn" style="display: none;"-->
<!--                               onclick="sureUpdate(this)">确定</a>-->
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
        <span style="font-size:14px;color:#333;position:relative;top:-8px;">共 <?php echo $total; ?> 条</span>
        <input type="hidden" id="jumpUrl" value="<?php echo Yii::$app->request->getUrl();?>" />
        <?php if($total > 100){?>
            <span style="font-size: 17px;position: relative;bottom: 5px;">
            <a onclick="jumpPage()" style="cursor: pointer;">Go</a>&nbsp;
            <input type="text" style="width: 20px;height: 18px;" id="jumpPage">&nbsp;页
        </span>
        <?php }?>
        <?php use yii\widgets\LinkPager; ?>
        <?php echo LinkPager::widget([
            'pagination' => $page,
        ]) ?>
    </div>
</div>
<script type="text/javascript">
    // $(function () {
    //    $('.Remarks').hover(function () {
    //        $(this).removeClass('Remarks_hover')
    //    },function () {
    //        $(this).addClass('Remarks_hover')
    //    })
    // });
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
    function checkDelete(id) {
        if (confirm("确定删除用户吗？删除后用户资料将不可恢复")) {
            location.href = "/content/content/delete?url=<?php echo Yii::$app->request->getUrl()?>&id=" + id;
        }

    }

    $(function () {
        $(".checkAll").change(function () {
            var sss = $(this).is(":checked");
            if (sss) {
                $(".childCheck").prop("checked", true);
            } else {
                $(".childCheck").prop("checked", false);
            }
        })

        $(".push").on('click', function () {
            $("input[name='status']").val(1);
            $("#checkPush").submit();
        })
        $(".noPush").on('click', function () {
            $("input[name='status']").val(0);
            $("#checkPush").submit();
        });


    });

    function showUpdateK(o) {
        $(o).hide().siblings(".sureBtn").show();
        $(o).parents("td").siblings("td.stimeTd").find("p").hide().siblings(".chooseTime").show();
        $(o).parents("td").siblings("td.etimeTd").find("p").hide().siblings(".chooseTime").show();
        $(o).parents("td").siblings("td.etimeTd2").find("p").hide().siblings(".chooseTime").show();
        $(o).parents("td").siblings("td.banciTd").find("p").hide().siblings(".banci").show();
        $(o).parents("td").siblings("td.Detail").find("p").hide().siblings(".orderDetail").show();
        // $(o).parents("td").siblings("td.statusXiala").find("p").hide().siblings(".orderStatus").show();
        var fk_status = $(o).parents("td").siblings("td.statusXiala").find("#fk_status").val();
        if (fk_status == 1) {
            $(o).parents("td").siblings("td.orderT").find("p").hide().siblings(".orderTotal").show();
        }
    }

    function sureUpdate(o) {
        var val = $(o).parents("td").siblings("td.statusXiala").find("#fk_status").val();
        ;
        // var valhtml=$(o).parents("td").siblings("td.statusXiala").find(".orderStatus").find("option:selected").html();
        var startTime = $(o).parents("td").siblings("td.stimeTd").find(".chooseTime input").val();
        var endTime = $(o).parents("td").siblings("td.etimeTd").find(".chooseTime input").val();
        var endTime2 = $(o).parents("td").siblings("td.etimeTd2").find(".chooseTime input").val();
        var orderid = $(o).parents("tr").find("td:first-child").html();
        var banci = $(o).parents("td").siblings("td.banciTd").find(".banci input").val();
        var payable = $(o).parents("td").siblings("td.orderT").find(".orderTotal input").val();
        var detail = $(o).parents("td").siblings("td.Detail").find(".orderDetail input").val();
        $.ajax({
            url: "https://order.viplgw.cn/pay/api/update-order",
            type: "post",
            data: {
                orderId: orderid,
                status: val,
                startTime: startTime,
                endTime: endTime,
                endTime2: endTime2,
                grade: banci,
                payable: payable,
                favorableDetails: detail
            },
            dataType: "json",
            success: function (data) {
                if (data.code == 1) {
                    $(o).hide().siblings(".sureBtn01").show();
                    $(o).parents("td").siblings("td.banciTd").find(".banci").hide().siblings("p").show().html(banci);
                    $(o).parents("td").siblings("td.stimeTd").find("p").show().html(startTime).siblings(".chooseTime").hide();
                    $(o).parents("td").siblings("td.etimeTd").find("p").show().html(endTime).siblings(".chooseTime").hide();
                    $(o).parents("td").siblings("td.etimeTd2").find("p").show().html(endTime2).siblings(".chooseTime").hide();
                    $(o).parents("td").siblings("td.orderT").find("p").show().html(payable).siblings(".orderTotal").hide();
                    $(o).parents("td").siblings("td.Detail").find("p").show().html(detail).siblings(".orderDetail").hide();
                    // if(val == 1){
                    //     $(o).parents("td").siblings("td.statusXiala").find(".orderStatus").hide().siblings("p").show().html('<img style="width: 20px;height: 20px;" src="/image/error.png" />');
                    // }else if(val == 3){
                    //     $(o).parents("td").siblings("td.statusXiala").find(".orderStatus").hide().siblings("p").show().html('<img style="width: 20px;height: 20px;" src="/image/right.png" />');
                    // }else{
                    //     $(o).parents("td").siblings("td.statusXiala").find(".orderStatus").hide().siblings("p").show().html(valhtml);
                    // }
                } else {
                    alert(data.message);
                }
            }
        })
    }

    function deleteOrder(o) {
        var orderid = $(o).parents("tr").find("td:first-child").html();
        var orderNumber = $(o).parents("tr").find("td:first-child").attr('data-orderNumber');
        var adminId = $("#adminId").val();
        console.log(orderNumber);
        if (confirm("订单删除后不可恢复")) {
            $.ajax({
                url: "https://order.viplgw.cn/pay/api/gre-delete-order",
                type: "post",
                data: {
                    orderId: orderid,
                    managingId: adminId
                },
                dataType: "json",
                success: function (data) {
                    if (data.code == 1) {
                        alert(data.message);
                        $.ajax({
                            url:'/user/api/order-message',
                            dataType:'json',
                            type:'post',
                            data:{
                                type:2,//1-修改 2-删除,
                                orderNumber:orderNumber,
                                orderId: orderid,
                            },
                        });
                        location.reload();
                    } else {
                        alert(data.message);
                    }
                }
            })
        }
    }
</script>