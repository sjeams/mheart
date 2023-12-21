<!-- 报告详情 -->
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="title" content="GRE后台在线后台">
    <meta name="description" content="GRE后台在线后台">
    <meta name="keywords" content="GRE后台在线后台">
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <title>天誉后台</title>
    <!-- Le styles -->
    <link href="https://file.viplgw.cn/ui/gre/backStage/css/coreCss/bootstrap-combined.min.css?v=1" rel="stylesheet">
    <link href="https://file.viplgw.cn/ui/gre/backStage/css/coreCss/layoutit.css" rel="stylesheet">
    <link href="https://file.viplgw.cn/ui/gre/backStage/css/coreCss/plugin.css" rel="stylesheet">

    <script type="text/javascript" src="/easyui/jquery.min.js"></script>
    <script type="text/javascript" src="/ueditor/ueditor.config.js"></script>
    <!-- 编辑器源码文件 -->
    <script type="text/javascript" src="/ueditor/ueditor.all.min.js"></script>
    <!-- 编辑器公式插件 -->
    <!-- <script type="text/javascript" charset="utf-8" src="/ueditor/kityformula-plugin/addKityFormulaDialog.js"></script>
    <script type="text/javascript" charset="utf-8" src="/ueditor/kityformula-plugin/getKfContent.js"></script>
    <script type="text/javascript" charset="utf-8" src="/ueditor/kityformula-plugin/defaultFilterFix.js"></script> -->
    <script type="text/javascript" src="/My97DatePicker/WdatePicker.js"></script>
</head>
 
 
<!-- 按钮 -->
<link href="https://file.viplgw.cn/ui/gre/backStage/js/honeySwitch/honeySwitch.css" rel="stylesheet">
<script type="text/javascript" src="https://file.viplgw.cn/ui/gre/backStage/js/honeySwitch/honeySwitch.js"></script>
<script src="/laydate/laydate.js"></script>
<div class=" " id="datacontent">
    <ul class="breadcrumb">
        <!-- <li><a href="/cn/sign/index">内容模块</a> <span class="divider">/</span></li> -->
        <li><a href="/user.html">内容模块</a> <span class="divider">/</span></li>
        <li class="active">后台目录</li>
    </ul>
    <form action="/cn/user/index/" method="get" class="form-horizontal">
        <table class="table">
            <tr>
                <td>
                    手机号：
                    <input name="phone" class="input-small" size="25" type="text" class="number" value="<?php echo isset($_GET['phone'])?$_GET['phone']:''?>"/>
                </td>
                <td>
                    用户名：
                    <input name="username" class="input-small" size="25" type="text" class="number" value="<?php echo isset($_GET['username'])?$_GET['username']:''?>"/>
                </td>
                <td>
                    操作时间：
                </td>
                <td>
                    <input class="input-small Wdate" onclick="WdatePicker()" type="text" size="10"  name="beginTime" value="<?php echo isset($_GET['beginTime'])?$_GET['beginTime']:''?>"/> - <input class="input-small Wdate" onclick="WdatePicker()"  size="10" type="text" name="endTime"  value="<?php echo isset($_GET['endTime'])?$_GET['endTime']:''?>"/>
                </td>
                <td>
                    <button class="btn btn-primary" type="submit">搜索</button>
                </td>
            </tr>
        </table>
    </form>
    <form action="/content/jump/index" method="post">
        <table class="table table-hover add_defined">
            <thead>
            <tr>
                <!-- <th style="width: 120px;">排序</th> -->
                <th >贷款编号</th>
                <th style=" ">姓名</th>
                <th>月收入</th>
                <th>需求金额</th>
                <th>放款金额</th>
                <th>购买时间</th>
                <th>贷款金额</th>
                <th>是否面签人</th>
                <th>联系方式</th>
                <th >身份证</th>
                <th >是否放款</th>
                <!-- <th >操作</th> -->
            </tr>
            </thead>
            <tbody>
            <?php
            foreach($content as $kss => $v) {
                if($kss == 10){
                    break;
                }
                ?>
                <tr style=" background-color:  <?php   if(!$v['follow_person']){  echo '#ffb2b2'; }else{ echo '#b9eca4'; }  ?>">
                    <!-- <input name="id[]" type="hidden"  value="<?php echo $v['id']?>"> -->
                    <td ><span><?php echo $v['order_id'] ?></span></td>
                    <td><span><a href="/detail-<?php echo $v['order_id']?>.html"><?php echo $v['username']?></a></span></td>
                    <td><span><?php echo $v['Income_month']?></span></td>
                    <td><span><?php echo $v['demand_amount']?></span></td>
                    <td><span><?php echo $v['loan_amount']?></span></td>
                    <td><span><?php echo date('Y-m-d H:i:s',$v['create_time'])  ?></span></td>
                    <td ><span><?php echo $v['loan_amount'] ?></span></td>
                    <td ><span><?php echo $v['belong']==1?'是':'否' ?></span></td>
                    <td ><span><?php echo $v['phone'] ?></span></td>
                    <td ><span><?php echo $v['card'] ?></span></td>
           
                    <!-- <td ><span><?php echo $v['is_amount'] ?></div></td> -->
                    <td>	
                        <div class="cell-right"><span class="<?php if($v['is_amount']==1){ ?>switch-on<?php } else { ?>switch-off<?php } ?>" onclick="updateStatus(this)" data-id="<?php echo $v['id']; ?>" data-value="<?php echo $v['is_amount']; ?>" class="wifi"></span></div>
                    </td>

                    <!-- <td  class="notSLH" style="width: 247px;">
                        <div>
                            <a class="btn" href="/user/brush/delete?id=<?php echo $v['id'] ; ?>" >删除</a>
                        </div>
                    </td> -->
                </tr>
                <?php
            }
            ?>
            </tbody>
        </table>
        <!-- <button class="push btn btn-primary" type="submit">排序</button> -->
    </form>


    <div class="pagination pagination-right">
        <?php use yii\widgets\LinkPager;
        echo LinkPager::widget([
            'pagination' => $page,
        ])?>
    </div>
</div>

<script>
  function  updateStatus(obj){
      var id = $(obj).data('id');
      var status = $(obj).data('value');
    if(status==1){status=0;}else{status=1;}
    $.ajax({
        url: '/cn/user/updatestatus', // 跳转到 action 
        data:{
            id: id,
            status: status,
            // editStatus : 1,
        },
        type: 'post',
        // dataType: 'json',
        success: function (data) {
            //查看还是取消
            if(status==0){ var shownum =parseInt( $('#brush b').text( ))+1;  }else{  var shownum =parseInt( $('#brush b').text( ))-1;}
            
            if(shownum==0){    
                $('#brush b').css('display','none');
            }else{
                $('#brush b').css('display','inline-block');
            }
            $('#brush b').text(shownum );
            // alert(status);
            $(obj).data('value',status);  // 修改状态
        },
        error: function () {
        }
    });
  }
</script>



<style>



