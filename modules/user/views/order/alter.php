<!-- 树形菜单选择 -->
<link rel="stylesheet" type="text/css" href="/easyui/themes/default/easyui.css">
<link rel="stylesheet" type="text/css" href="/easyui/themes/icon.css">
<script type="text/javascript" src="/easyui/jquery.easyui.min.js"></script>

<script type="text/javascript" src="/My97DatePicker/WdatePicker.js"></script>
<!--日期的插件-->
<!-- <link rel="stylesheet" href="/BeatPicker/css/reset.css"/>
<link rel="stylesheet" href="/BeatPicker/css/BeatPicker.min.css"/>
<link rel="stylesheet" href="/BeatPicker/css/demos.css"/>
<link rel="stylesheet" href="/BeatPicker/css/prism.css"/> -->
<style type="text/css">
    .anne-xiala{
        position: relative;
    }
    .anne-down{
        width: 218px;
        height: 100px;
        overflow: auto;
        border: 1px #ccc solid;
        border-radius: 5px;
        position: absolute;
        top: 55px;
        left: 0;
        background-color: white;
        display: none;
        z-index: 11;
    }
    .anne-down ul{
        margin: 0;padding: 0;
    }
    .anne-down ul li{
        padding: 5px 0 5px 10px;
        list-style: none;
    }
    .anne-down ul li:hover{
        cursor: pointer;
        color: white;
        background-color: #0088cc;
    }
</style>
<!--<script src="http://www.jq22.com/jquery/jquery-1.10.2.js"></script>-->
<!-- <script src="/BeatPicker/js/BeatPicker.min.js"></script>
<script src="/BeatPicker/js/prism.js"></script> -->
<div class="span10" id="datacontent">
    <form>
        <div class="control-group">
            <label for="modulename" class="control-label">姓名:</label>
            <div class="controls">
                <input type="text"  id="name" name="name" value="<?php echo $order['name']?>" readonly>
            </div>
        </div>
        <div class="control-group">
            <label for="modulename" class="control-label">用户名</label>
            <div class="controls">
                <input type="text"  id="userName" name="userName" value="<?php echo $order['userName']?>" readonly>
            </div>
        </div>
        <div class="control-group">
            <label for="modulename" class="control-label">收货电话</label>
            <div class="controls">
                <input type="text"  id="phone" name="phone" value="<?php echo $order['phone']?>" readonly>
            </div>
        </div>
        <div class="control-group">
            <label for="modulename" class="control-label">订单名称</label>
            <div class="controls">
                <input type="text"  id="contentName" name="contentName" value="<?php echo $order['contentName']['contentName']?>" readonly>
            </div>
        </div>
        <div class="control-group">
            <label for="modulename" class="control-label">应付款</label>
            <div class="controls">
                <input type="text"  id="totalMoney" name="totalMoney" value="<?php echo $order['totalMoney']?>" readonly>
            </div>
        </div>
        <div class="control-group">
            <label for="modulename" class="control-label">实付款</label>
            <div class="controls">
                <input type="text"  id="payable" name="payable" value="<?php echo $order['payable']?>" <?php if($order['source'] != 1 || $order['status'] != 1) echo 'readonly';?>>
            </div>
        </div>
        <div class="control-group">
            <label for="modulename" class="control-label">来源</label>
            <div class="controls">
                <input type="text"  id="source" name="source" value="<?php if ($order['source'] == 1) echo '用户下单'; else echo '后台添加'; ?>" readonly>
            </div>
        </div>
        <div class="control-group">
            <label for="modulename" class="control-label">状态</label>
            <div class="controls">
                <?php switch ($order['status']) {
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
                <input type="text"  id="status" name="status" data-status="<?php echo $order['status'];?>" value="<?php echo $status?>" readonly>
            </div>
        </div>
        <div class="control-group">
            <label for="modulename" class="control-label">下单时间</label>
            <div class="controls">
                <input type="text"  id="createTime" name="createTime" value="<?php echo date("Y-m-d H:i:s", $order['createTime']) ?>" readonly>
            </div>
        </div>
        <div class="control-group">
            <label for="modulename" class="control-label">付款时间</label>
            <div class="controls">
                <input type="text"  id="payTime" name="payTime" value="<?php echo $order['payTime'] ? date("Y-m-d H:i:s", $order['payTime']) : '' ?>" readonly>
            </div>
        </div>
        <div class="control-group" >
            <label for="modulename" class="control-label">开始时间</label>
            <div class="controls">
                <input class="input-small Wdate" onclick="WdatePicker({ dateFmt: 'yyyy-MM-dd' })"  size="10" type="text" id="startTime"  value="<?php echo $order['startTime']?date("Y-m-d", $order['startTime']):'' ?>"/>
            </div>
        </div>
        <div class="control-group" >
            <label for="modulename" class="control-label">直播结束时间</label>
            <div class="controls">
                <input class="input-small Wdate" onclick="WdatePicker({ dateFmt: 'yyyy-MM-dd' })"  size="10" type="text" id="endTime"  value="<?php echo $order['endTime']?date("Y-m-d", $order['endTime']):'' ?>"/>
            </div>
        </div>
        <div class="control-group" >
            <label for="modulename" class="control-label">录播结束时间</label>
            <div class="controls">
                <input class="input-small Wdate" onclick="WdatePicker({ dateFmt: 'yyyy-MM-dd' })"  size="10" type="text" id="endTime2"  value="<?php echo $order['endTime2']?date("Y-m-d", $order['endTime2']):'' ?>"/>
            </div>
        </div>
        <div class="control-group">
            <label for="modulename" class="control-label">班次</label>
            <div class="controls">
                <input type="text" id="grade" name="grade" value="<?php echo $order['grade'];?>">
            </div>
        </div>
        <div class="control-group">
            <label for="modulename" class="control-label">备注</label>
            <div class="controls">
                <textarea name="detail" id="detail"><?php echo $order['favorableDetails'];?></textarea>
            </div>
        </div>
        <div class="control-group">
            <div class="controls">
                <input type="hidden" value="<?php echo $order['id'];?>"  id="orderId"/>
                <input type="hidden" value="<?php echo $order['orderNumber'];?>"  id="orderNumber"/>
                <input type="hidden" id="orderUrl" value="<?php echo Yii::$app->session->get('orderUrl');;?>"  />
                <input type="button"  onclick="sureUpdate()" class="btn btn-primary" value="提交">
            </div>
        </div>
    </div>
    </form>
</div>
<script>
//    点击其他地方隐藏下拉框
    $(document).click(function (even) {
        var ev=even||window.event;
        var target=ev.target||ev.srcElement;
        var flag=$(target).is(".anne-down");//可能点击的只是该样式的div
        var flag02=$(target).parents(".anne-down").is(".anne-down");//可能点击的是该样式div里面的内容
        if(!(flag || flag02)){
            $(".anne-down").slideUp();
        }
    });

function sureUpdate(o) {
      var orderid = $('#orderId').val();
      var startTime = $('#startTime').val();
      var endTime = $('#endTime').val();
      var endTime2 = $('#endTime2').val();
      var detail = $('#detail').val();
      var banci = $('#grade').val();
      var payable = $('#payable').val();
      var status = $('#status').attr('data-status');
      if(endTime){
          endTime += ' 23:59:59';
      }
      if(endTime2){
          endTime2 += ' 23:59:59';
      }
    $.ajax({
        url: "https://order.viplgw.cn/pay/api/update-order",
        type: "post",
        data: {
            orderId: orderid,
            startTime: startTime,
            endTime: endTime,
            endTime2: endTime2,
            grade: banci,
            favorableDetails: detail,
            payable:payable,
            user:<?php echo Yii::$app->session->get('adminId')?>,
            status:status,
        },
        dataType: "json",
        success: function (data) {
            if (data.code == 1) {
                alert('修改成功');
                var url = $('#orderUrl').val();
                var orderNumber = $('#orderNumber').val();
                $.ajax({
                    url:'/user/api/order-message',
                    dataType:'json',
                    type:'post',
                    data:{
                        type:1,//1-修改 2-删除,
                        orderNumber:orderNumber,
                        orderId: orderid,
                    },
                });
                window.location.href = url;
            } else {
                alert(data.message);
            }
        }
    })
}
</script>