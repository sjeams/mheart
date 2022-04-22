<!-- 修改 -->
<ul class="breadcrumb">
    <li><a href="/user.html">内容模块</a> <span class="divider">/</span></li>
    <li class="active">后台目录</li>
</ul>
<form action="/content/curriculum/add" method="post" class="form-horizontal">
        <input type="hidden" name="id" value="<?php echo isset($data['id'])?$data['id']:'';  ?>" />
        <fieldset>
            <div class="control-group">
                <label for="modulename" class="control-label">批款额度</label>
                <div class="controls">
                    <input type="text" id="input1" name="content[loan_amount]" value="<?php echo isset($data['loan_amount'])?$data['loan_amount']:''?>" datatype="userName" needle="needle" msg="您必须输入批款额度">
                    <span class="help-block">请输入批款额度</span>
                </div>
            </div>
            <div class="control-group">
                <label for="modulename" class="control-label" >跟进人</label>
                <div class="controls">
                    <input type="text" name="content[follow_person]" value="<?php echo isset($data['follow_person']) ? $data['follow_person'] : '' ?>">
                </div>
            </div>
            <div class="control-group">
                <label for="modulename" class="control-label">选用模板</label>
                <div class="controls">
                    <!-- <input type="text" name="content[sort]" value="1"> -->
                    <select name="content[belong]" >
                        <?php foreach($template as $key=> $v){ ?>
                            <option value="<?php echo $key ?>" <?php echo isset($data['belong'])&&$data['belong']== $key?'selected':'' ;?>  ><?php echo $v ?></option>
                        <?php } ?>
                    </select>
                </div>
            </div>
            <div class="control-group">
                <label for="modulename" class="control-label">备注</label>
                <div class="controls">
                    <textarea name="content[courseIds]" style="width: 400px;height: 120px;" ><?php echo isset($data['contentid'])?$data['contentid']:''?></textarea>
                    <span class="help-block">对当前客户进行备注说明</span>
                </div>
            </div>
 

            <div class="control-group">
                <div class="controls">
                    <input type="submit" class="btn btn-primary" value="提交">
                </div>
            </div>
        </fieldset>
    </form>