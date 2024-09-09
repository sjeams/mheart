<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <title>GRE用户数据统计</title>
    <!-- Le styles -->
    <link href="/css/coreCss/bootstrap-combined.min.css" rel="stylesheet">
    <link href="/css/coreCss/layoutit.css" rel="stylesheet">
    <link href="/css/coreCss/plugin.css" rel="stylesheet">
    <script type="text/javascript" src="/js/jquery-1.7.2.js"></script>
</head>
<div class="span10" id="datacontent">
    <br />
    <ul class="breadcrumb">
        <li><a href="/user/index/index"></a> 用户数据统计<span class="divider">/</span></li>
    </ul>
    <form action="/user/user/add" method="" class="form-horizontal">
        <fieldset>
            <div class="control-group">
                <label for="area" class="control-label">对象：</label>
                <div class="controls">
                    <select name="type" id="type">
                        <option value="0">请选择</option>
                        <option value="1">做题</option>
                        <option value="2">测评</option>
                        <option value="3">模考</option>
                    </select>
                    &nbsp;&nbsp;<span id="number" style="display: none;margin: 5px;">3333</span>
                    &nbsp;&nbsp;<button class="btn btn-primary" id="tijiao" type="button" onclick="count()">提交</button>
                </div>
            </div>
        </fieldset>
    </form>
</div>
<script>
    function count(){
        var type = $("#type").val();
        if(type ==0){
            alert('请选择查询类型');
            return false;
        }
        $.ajax({
            url:'/user/user-comment/type-count',
            dataType:'json',
            data:{
                type:type,
            },
            beforeSend:function(){
                $("#tijiao").html('请稍等');
            },
            success:function(data){
                $("#number").html(data.number);
                $("#number").css('display','inline');
            },
            complete:function(){
                $("#tijiao").html('提交');
            }
        });
    }
</script>