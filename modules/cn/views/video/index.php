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
    <form action="/cn/video/index" method="get" class="form-horizontal">
        <table class="table">
            <tr>
                <td>
                    标题：
                    <input name="title" class="input-small" size="25" type="text" class="number" value="<?php echo isset($_GET['title'])?$_GET['title']:''?>"/>
                </td>
                <td>
                    <button class="btn btn-primary" type="submit">搜索</button>
                </td>
            </tr>
        </table>
    </form>
    <form action="/cn/video/index" method="post">
        <table class="table table-hover add_defined">
            <thead>
            <tr>
                <!-- <th style="width: 120px;">排序</th> -->
                <th >标题</th>
 
                <th>图片</th>
 
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
                <tr>
                    <!-- <input name="id[]" type="hidden"  value="<?php echo $v['id']?>"> -->
                  
                    <td  style=" width:15%"><span><a href="<?php echo $v['url']?>" target="blank"><?php echo $v['title']?></a></span></td>
                    <td  ><span> <img src="<?php echo $v['imageurl']?>" alt="<?php echo $v['imageurl']?>"></span></td>
     
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


    <div class="pagination pagination-left">
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


