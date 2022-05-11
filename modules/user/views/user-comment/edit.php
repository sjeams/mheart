<div class="span10" id="datacontent">

    <ul class="breadcrumb">
        <li><a href="/user/index/index"></a> 用户管理<span class="divider">/</span></li>
        <li><a href="/user/user-comment/index">用户评论</a> <span class="divider">/</span></li>
        <li class="active">修改评论</li>
    </ul>
    <ul class="nav nav-tabs">
        <li class="active">
            <a href="#">修改讨论</a>
        </li>
    </ul>
    <form action="/user/user-comment/edit" method="post" class="form-horizontal">
        <fieldset>
            <div class="control-group">
                <label for="area" class="control-label">题目ID：</label>
                <div class="controls">
                    <input type="text" name="contentId" value="<?php echo $comment['questionId']?>" disabled/>
                </div>
            </div>
            <div class="control-group">
                <label for="area" class="control-label">文章ID：</label>
                <div class="controls">
                    <input type="text" name="contentId" value="<?php echo $comment['contentId']?>" disabled/>
                </div>
            </div>
            <div class="control-group">
                <label for="area" class="control-label">评论用户：</label>
                <div class="controls">
                    <input type="text" name="nickname" value="<?php echo $comment['nickname']?>" disabled />
                </div>
            </div>
            <div class="control-group">
                <label for="area" class="control-label">评论内容：</label>
                <div class="controls">
                    <textarea name="content" id="content"  value="" /><?php echo $comment['content']?></textarea>
                </div>
            </div>
            <div class="control-group">
                <label for="area" class="control-label">评论时间：</label>
                <div class="controls">
                    <input type="text" name="createTime" value="<?php echo date('Y-m-d H:i:s',$comment['createTime']);?>" />
                </div>
            </div>


            <div class="control-group">
                <div class="controls">
                    <button class="btn btn-primary" type="submit">提交</button>
                    <input type="hidden" name="id" value="<?php echo $comment['id']?>"/>
                </div>
            </div>
        </fieldset>
    </form>
</div>