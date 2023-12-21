<script type="text/javascript" src="/ueditor/ueditor.config.js"></script>
<!-- 编辑器源码文件 -->
<script type="text/javascript" src="/ueditor/ueditor.all.min.js"></script>
<!-- 编辑器公式插件 -->
<script type="text/javascript" charset="utf-8" src="/ueditor/kityformula-plugin/addKityFormulaDialog.js"></script>
<script type="text/javascript" charset="utf-8" src="/ueditor/kityformula-plugin/getKfContent.js"></script>
<script type="text/javascript" charset="utf-8" src="/ueditor/kityformula-plugin/defaultFilterFix.js"></script>
<div class="span10" id="datacontent">

    <ul class="breadcrumb">
        <li><a href="/user/index/index">用户模块</a><span class="divider">/</span></li>
        <li><a href="/user/question/index">问答管理</a> <span class="divider">/</span></li>
        <li class="active">修改用户</li>
    </ul>
    <form action="/user/question/update" method="post" class="form-horizontal">
        <fieldset>
            <input type="hidden" name="id" value="<?php echo $data[0]['id']?>">
            <?php if($data[0]['type'] ==1 ){ ?>
                <div class="control-group">
                    <label for="area" class="control-label">问题标题：</label>
                    <div class="controls">
                        <textarea name="question[question]"><?php echo $data[0]['question']?></textarea>
                    </div>
                </div>
                <div class="control-group">
                <label for="area" class="control-label">问题内容：</label>
                <div class="controls">
                    <textarea name="question[content]"><?php echo $data[0]['content']?></textarea>
                </div>
                </div>
            <?php } else{ ?>
                <div class="control-group">
                    <label for="area" class="control-label">问题内容：</label>
                    <div class="controls">
                        <textarea name="question[content]"><?php echo $data[0]['content']?></textarea>
                    </div>
                </div>
                <?php
            }
            ?>
            <div class="control-group">
                <label for="area" class="control-label">提问用户：</label>
                <div class="controls">
                    <input type="text" value="<?php echo $data[0]['userName']?>" name="user[userName]" readonly>
                </div>
            </div>
            <div class="control-group">
                <label for="area" class="control-label">提问用户电话：</label>
                <div class="controls">
                    <input value="<?php echo $data[0]['phone']?>" type="text" name="user[phone]" readonly>
                </div>
            </div>
            <div class="control-group">
                <label for="area" class="control-label">提问用户邮箱：</label>
                <div class="controls">
                    <input value="<?php echo $data[0]['email']?>" type="text" name="user[email]" readonly>
                </div>
            </div>
            <div class="control-group">
                <label for="area" class="control-label">关注数量：</label>
                <div class="controls">
                    <input value="<?php echo $data[0]['follow']?>" type="text" name="question[follow]">
                </div>
            </div>
            <div class="control-group">
                <label for="area" class="control-label">浏览数：</label>
                <div class="controls">
                    <input value="<?php echo $data[0]['browse']?>" type="text" name="question[browse]">
                </div>
            </div>
            <div class="control-group">
                <label for="area" class="control-label">问题类型：</label>
                <div class="controls">
                    <select name="question[questionType]" id="">
                        <option <?php if($data[0]['questionType'] ==''){?> selected="selected"<?php }?> value="">全部</option>
                        <option <?php if($data[0]['questionType'] ==1){?> selected="selected"<?php }?> value="1">推荐</option>
                        <option <?php if($data[0]['questionType'] ==2){?> selected="selected"<?php }?> value="2">热门</option>
                    </select>
                </div>
            </div>
            <div class="control-group">
                <div class="controls">
                    <button class="btn btn-primary" type="submit">提交</button>
                </div>
            </div>
        </fieldset>
    </form>
</div>
<script>
    //实例化编辑器
    var o_ueditorupload = UE.getEditor('sss',
        {
            autoHeightEnabled:false
        });
    o_ueditorupload.ready(function ()
    {

        o_ueditorupload.hide();//隐藏编辑器

        //监听图片上传
        o_ueditorupload.addListener('beforeInsertImage', function (t,arg)
        {
            $('.image').val(arg[0].src);

        });

        /* 文件上传监听
         * 需要在ueditor.all.min.js文件中找到
         * d.execCommand("insertHtml",l)
         * 之后插入d.fireEvent('afterUpfile',b)
         */
        o_ueditorupload.addListener('afterUpfile', function (t, arg)
        {

        });
    });

    //弹出图片上传的对话框
    function upImage()
    {
        var myImage = o_ueditorupload.getDialog("insertimage");
        myImage.open();
    }

</script>
<script type="text/plain" id="sss"></script>