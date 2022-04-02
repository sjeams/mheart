<script type="text/javascript" src="/ueditor/ueditor.config.js"></script>
<!-- 编辑器源码文件-->
<script type="text/javascript" src="/ueditor/ueditor.all.min.js"></script>
<!-- 编辑器公式插件-->
<script type="text/javascript" charset="utf-8" src="/ueditor/kityformula-plugin/addKityFormulaDialog.js"></script>
<script type="text/javascript" charset="utf-8" src="/ueditor/kityformula-plugin/getKfContent.js"></script>
<script type="text/javascript" charset="utf-8" src="/ueditor/kityformula-plugin/defaultFilterFix.js"></script>
<script type="text/javascript" src="/My97DatePicker/WdatePicker.js"></script>
<!-- 树形菜单选择 -->
<link rel="stylesheet" type="text/css" href="/easyui/themes/default/easyui.css">
<link rel="stylesheet" type="text/css" href="/easyui/themes/icon.css">
<script type="text/javascript" src="/easyui/jquery.easyui.min.js"></script>

<div class="span10" id="datacontent">
    <ul class="breadcrumb">
        <li><a href="<?php echo baseUrl?>/content/index/index">内容模块</a> <span class="divider">/</span></li>
        <li><a href="<?php echo baseUrl?>/question/article-error/index">反馈</a> <span class="divider">/</span></li>
        <li class="active">审核反馈</li>
    </ul>
    <form action=""  class="form-horizontal" id="addForm">
        <fieldset>
            <div class="control-group">
                <label for="modulename" class="control-label">错误类型</label>
                <div class="controls">
                    <textarea class="input-xxlarge" rows="7" name="" id="sort-select" style="width: 100%"><?php echo $data['typeStr'] ?></textarea>
                </div>
            </div>
            <div class="control-group">
                <label for="modulename" class="control-label">错误详情</label>
                <div class="controls">
                    <textarea class="input-xxlarge" rows="7" name="" id="readQuestion" style="width: 100%"><?php echo $data['errorDescribe'] ?></textarea>
                </div>
            </div>
            <div class="control-group">
                <div class="controls">
                    <a href="/user/article-error/examine?id=<?php echo $data['id']?>&examine=1">通过审核</a>
                    <a href="/user/article-error/examine?id=<?php echo $data['id']?>&examine=2">不通过</a>
                </div>
            </div>
        </fieldset>
    </form>
</div>
