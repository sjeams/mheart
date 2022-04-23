<p> 申请编号：<?php echo $res['order_id'] ?> </p> 
<p> 客户姓名：<?php echo $res['username'] ?> </p> 
<p> 身份证号： <?php echo $res['card'] ?> </p> 
<p> 终审额度： <?php echo $res['loan_amount'] ? $res['loan_amount'] .'元'  : '<span style="color:red">批款中信服度不高</span>'?> </p> 
<p> 利息： 0.45～1.08</p> 
<p> 还款方式：  等额本息/先息后本 </p> 
<p> 备注： <?php echo $res['discript'] ?>  </p> 

<p>紧急联系人员须具备条件如下:</p> 
<p>1.国企、央企、事业单位、机关单位、公积金个人月缴存600元以上,且连续缴纳满1年,无高额负债</p> 
<p>2.正式编制职工,且公积金个人月缴存超过1000元以上，且连续缴纳满1年，无高额负债</p> 
<p>3.全国范围内按揭房,还款满1年(成都房月供满半年即可)</p> 
<p>4.作为投保人购买过2年以上保险,年缴费金额大于3000</p> 
<p>5.成都全款房</p> 
<p>6成都社保缴纳满2年</p> 
<p>7.有营业执照或烟草许可证或良好纳税(法人股东均可)</p> 
<p>以上7项满足其中任意-项1即可协助办理。(注 ;紧急联系人需征信良好,无小贷网贷,无恶意逾期记录)</p> 
<p>&nbsp;</p>
<?php if($res['belong']==0&&$res['template']!=5){?>
    <button type="button" class="layui-btn layui-btn-fluid colrstyle"  onclick="submit()">二次审核</button>
<?php } ?>

<script>
    function submit(){
        window.location.href = '/cn/sign/login?fllow=<?php echo $res['id'] ?>';
    }

</script>