<!-- 修改 -->
<ul class="breadcrumb">
    <li><a href="/user.html">内容模块</a> <span class="divider">/</span></li>
    <li class="active">后台目录</li>
</ul>

<style>
 .detail{
     width: 35%;
     float: left;
 }
 .spaniline span{
     margin: 20px;;
 }
 .form-horizontal{
     margin-left: -20px;;
 }

</style>

<div class="detail spaniline">
    <p>客户基本信息：</p>

    <p>综合评分： <span style="color:red"><?php echo $data['num']?> </span> </p>
    <p>订单号:  <span><?php echo $data['order_id']?> </span> </p>
    <p>客户姓名:  <span><?php echo $data['username']?> </span>  </p>
    <p>手机号码:  <span><?php echo $data['phone']?> </span> </p>
    <p>身份证:  <span><?php echo $data['card']?> </span> </p>
    <p>身份证类型:  <span><?php echo $data['card_type']?> </span> </p>
    <p>出生日期:  <span><?php echo $data['day']?> </span> </p>
    <p>性别:  <span><?php echo $data['sex']==0?'男':'女'?> </span> </p>
    <p>最高学历:  <span><?php echo $data['class']?> </span> </p>
    <p>是否结婚:  <span><?php echo $data['marry']==0?'否':'是'?> </span> </p>
    <p>工作情况:  <span><?php echo $data['work']?> </span> </p>
    <p>单位名称:  <span><?php echo $data['unit']?> </span> </p>
    <p>家庭地址:  <span><?php echo $data['home_address']?> </span> </p>
    <p>单位地址:  <span><?php echo $data['unit_address']?> </span> </p>

    <p>家庭收入:  <span><?php echo $data['Income_home']?> </span> </p>
    <p>本月收入:  <span><?php echo $data['Income_month']?> </span> </p>
    
 

    <p>贷款类型:  <span> <?php echo $data['lona_type']==0? '信用贷': ($data['lona_type']==1? '企业贷':  '房、车按揭' ); ?> </span> </p>
    <p>是否有社保:  <span><?php echo $data['social_security']==0?'否':'是'?> </span> </p>
    <p>社保年限:  <span><?php echo $data['social_security_money']?> </span> </p>
    
    <p>公积金:  <span><?php echo $data['public_accumulation']==0?'否':'是'?> </span> </p>
    <p>公积金金额:  <span><?php echo $data['public_accumulation_money']?> </span> </p>


    <p>保险单:  <span><?php echo $data['insurance_policy']==0?'否':'是'?> </span> </p>
    <p>保单年限:  <span><?php echo $data['insurance_policy_money']?> </span> </p>
    
    <p>营业执照:  <span><?php echo $data['business_license']==0?'否':'是'?> </span> </p>
    <p>房产:  <span style="color:<?php echo $data['house']==0?'red':'green'?>"><?php echo $data['house']==0? '无': ($data['house']==1? '按揭':  '全款' ); ?> </span> </p>
    
    <p>是否有车:  <span style="color:<?php echo $data['car']==0?'red':'green'?>" ><?php echo $data['car']==0? '无':  ($data['car']==1? '按揭':  '全款' ); ?> </span> </p>
    <p>需求金额:  <span><?php echo $data['demand_amount']?> </span> </p>
    <p>贷款期限:  <span><?php echo $data['credit_period']?> </span> </p>
    <p>贷款金额:  <span><?php echo $data['loan_amount']?> </span> </p> 
    
    <p>直系亲属:  <span><?php echo $data['contact_related']?> </span> </p>
    <p>亲属号码:  <span><?php echo $data['contact_related_phone']?> </span> </p>
    <p>同事姓名:  <span><?php echo $data['contact_colleague']?> </span> </p>
    <p>手同事号码:  <span><?php echo $data['contact_colleague_phone']?> </span> </p>
    <p>其它联系人:  <span><?php echo $data['contact_other']?> </span> </p>
    <p>其它号码:  <span><?php echo $data['contact_other_phone']?> </span> </p>

    <p>是否面签人:  <span><?php echo $data['belong']==0?'否':'是'?> </span> </p> 
    
    
</div>

<div class="detail">
<form action="/cn/user/useradd" method="post" class="form-horizontal">
        <input type="hidden" name="order_id" value="<?php echo isset($data['order_id'])?$data['order_id']:'';  ?>" />
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
                    <select name="content[template]" >
                        <?php foreach($template as $key=> $v){ ?>
                            <option value="<?php echo $key ?>" <?php echo isset($data['template'])&&$data['template']== $key?'selected':'' ;?>  ><?php echo $v ?></option>
                        <?php } ?>
                    </select>
                </div>
            </div>
            <div class="control-group">
                <label for="modulename" class="control-label">备注</label>
                <div class="controls">
                    <textarea name="content[remarks]" style="width: 400px;height: 120px;" ><?php echo isset($data['remarks'])?$data['remarks']:''?></textarea>
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
</div>
