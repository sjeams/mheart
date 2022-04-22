
    <!-- 表单 -->
    <form class="layui-form layui-form-pane"  method="post"  action="javascript:submit();" >
        <div class="layui-form-item">
            <div class="layui-inline">
                <label class="layui-form-label">客户姓名</label>
                <div class="layui-input-inline">
                    <input type="text" name="username" autocomplete="off" class="layui-input">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">手机号码</label>
                <div class="layui-input-inline">
                    <input type="text" name="phone" autocomplete="off" class="layui-input">
                </div>
            </div>

            <div class="layui-inline">
                <label class="layui-form-label">身份证</label>
                <div class="layui-input-inline">
                    <input type="text" name="card" autocomplete="off" class="layui-input">
                </div>
            </div>

            <div class="layui-inline">
                <label class="layui-form-label">身份证类型</label>
                <div class="layui-input-inline">
                    <select name="card_type" lay-filter="aihao">
                        <option value="0" >居民身份证</option>
                        <option value="1" >护照</option>
                        <option value="2">军官证</option>
                        <option value="3">港澳通行证</option>
                        <option value="4">其他</option>
                    </select>
                </div>
            </div>

            <div class="layui-inline">
                <label class="layui-form-label">出生日期</label>
                <!-- <div class="layui-input-inline">
                    <input type="text" name="day" autocomplete="off" class="layui-input">
                </div> -->

                <div class="layui-input-block">
                        <input type="text" name="day" id="date1" autocomplete="off" class="layui-input" lay-key="2">
                </div>


            </div>
            <div class="layui-inline">
                <label class="layui-form-label">性别</label>
                <div class="layui-input-inline">
                    <input type="radio" name="sex" value="0" title="男" checked="">
                    <input type="radio" name="sex" value="1" title="女">
                    <!-- <input type="radio" name="sex" value="禁" title="禁用" disabled=""> -->
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">最高学历</label>
                <div class="layui-input-inline">
                    <select name="class" lay-filter="aihao">
                        <option value="0" >研究生及以上</option>
                        <option value="1" >大学本科</option>
                        <option value="2">大专和专科</option>
                        <option value="3">中专</option>
                        <option value="4">技工学习</option>
                        <option value="5">高中</option>
                        <option value="6">初中</option>
                    </select>
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">婚姻状况</label>
                <div class="layui-input-inline">
                    <select name="marry" lay-filter="aihao">
                        <option value="0" >未婚</option>
                        <option value="1" >已婚无子女</option>
                        <option value="2">已婚有子女</option>
                        <option value="3">离婚</option>
                        <option value="4">丧偶</option>
                        <option value="5">其他</option>
                    </select>
                </div>
            </div>


            <div class="layui-inline">
                <label class="layui-form-label">工作情况</label>
                <div class="layui-input-inline">
                    <select name="work" lay-filter="aihao">
                        <option value="" selected=""></option>
                        <option value="0" >自雇企业主</option>
                        <option value="1" >上班</option>
                        <option value="2">其他</option>
                    </select>
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">单位名称</label>
                <div class="layui-input-inline">
                    <input type="text" name="unit" autocomplete="off" class="layui-input">
                </div>
            </div>

            <div class="layui-inline">
                <label class="layui-form-label">家庭地址</label>
                <div class="layui-input-inline">
                    <input type="text" name="home_address" autocomplete="off" class="layui-input">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">单位地址</label>
                <div class="layui-input-inline">
                    <input type="text" name="unit_address" autocomplete="off" class="layui-input">
                </div>
            </div>


          <!-- 联系人 -->


            <div class="layui-inline">
                <label class="layui-form-label">家庭收入</label>
                <div class="layui-input-inline">
                    <input type="text" name="Income_home" autocomplete="off" class="layui-input">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">本月收入</label>
                <div class="layui-input-inline">
                    <input type="text" name="Income_month" autocomplete="off" class="layui-input">
                </div>
            </div>

            <div class="layui-inline">
                <label class="layui-form-label">贷款类型</label>
                <div class="layui-input-inline">
                    <select name="lona_type" lay-filter="aihao">
                        <option value="0" >信用贷</option>
                        <option value="1" >企业贷</option>
                        <option value="2">房、车按揭</option>
                    </select>
                </div>
            </div>

            

            <!-- ----资产信息 -->

            <div class="layui-inline">
                <label class="layui-form-label">社保</label>
                <div class="layui-input-inline">
                    <input type="radio" name="social_security" value="0" title="无" checked="" lay-filter="social_security">
                    <input type="radio" name="social_security" value="1" title="有" lay-filter="social_security">
                  
                    <!-- <input type="radio" name="sex" value="禁" title="禁用" disabled=""> -->
                </div>
            </div>

            <div class="layui-inline">
                <label class="layui-form-label social_security_money displaynone">社保年限</label>
                <div class="layui-input-inline">
                    <input id="social_security_money" type="hidden" name="social_security_money" autocomplete="off" class="layui-input">
                </div>
            </div>

            <div class="layui-inline">
                <label class="layui-form-label">公积金</label>
                <div class="layui-input-inline">
                <input type="radio" name="public_accumulation" value="0" title="无"  checked="" lay-filter="public_accumulation">
                    <input type="radio" name="public_accumulation" value="1" title="有" lay-filter="public_accumulation">
    
                </div>
            </div>
            <div class="layui-inline public_accumulation_money displaynone">
                <label class="layui-form-label">公积金金额</label>
                <div class="layui-input-inline">
                    <input id="public_accumulation_money" type="hidden" name="public_accumulation_money" autocomplete="off" class="layui-input" value="">
                </div>
            </div>

            <div class="layui-inline">
                <label class="layui-form-label">商业保单</label>
                <div class="layui-input-inline">
                    <input type="radio" name="insurance_policy" value="0" title="无"  checked="" lay-filter="insurance_policy">
                    <input type="radio" name="insurance_policy" value="1" title="有" lay-filter="insurance_policy">
                    <!-- <input type="radio" name="sex" value="禁" title="禁用" disabled=""> -->
                </div>
            </div>

            <div class="layui-inline insurance_policy_money displaynone">
                <label class="layui-form-label">保单年限</label>
                <div class="layui-input-inline">
                    <input id="insurance_policy_money" type="hidden" name="insurance_policy_money" autocomplete="off" class="layui-input" value="">
                </div>
            </div>


            <div class="layui-inline">
                <label class="layui-form-label">营业执照</label>
                <div class="layui-input-inline">
                    <input type="radio" name="business_license" value="0" title="无"  checked="">
                    <input type="radio" name="business_license" value="1" title="有">
        
                    <!-- <input type="radio" name="sex" value="禁" title="禁用" disabled=""> -->
                </div>
            </div>

            <div class="layui-inline">
                <label class="layui-form-label">房产</label>
                <div class="layui-input-inline">
                    <select name="house" lay-filter="aihao">
                        <option value="0" selected="">无</option>
                        <option value="1" >按揭</option>
                        <option value="2" >全款</option>
                    </select>
                </div>
            </div>


            <div class="layui-inline">
                <label class="layui-form-label">车</label>
                <div class="layui-input-inline">
                    <select name="car" lay-filter="aihao">
                        <option value="0" selected="">无</option>
                        <option value="1" >按揭</option>
                        <option value="2" >全款</option>
                    </select>
                </div>
            </div>
 
            <div class="layui-inline">
                <label class="layui-form-label">直属联系人</label>
                <div class="layui-input-inline">
                    <input type="text" name="contact_related" autocomplete="off" class="layui-input">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">直属电话</label>
                <div class="layui-input-inline">
                    <input type="text" name="contact_related_phone" autocomplete="off" class="layui-input">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">同事联系人</label>
                <div class="layui-input-inline">
                    <input type="text" name="contact_colleague" autocomplete="off" class="layui-input">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">同事电话</label>
                <div class="layui-input-inline">
                    <input type="text" name="contact_colleague_phone" autocomplete="off" class="layui-input">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">其它联系人</label>
                <div class="layui-input-inline">
                    <input type="text" name="contact_other" autocomplete="off" class="layui-input">
                </div>
            </div>
            <div class="layui-inline">
                <label class="layui-form-label">其它电话</label>
                <div class="layui-input-inline">
                    <input type="text" name="contact_other_phone" autocomplete="off" class="layui-input">
                </div>
            </div>

            <div class="layui-inline">
                <label class="layui-form-label">需求金额</label>
                <div class="layui-input-inline">
                    <input type="text" name="demand_amount" autocomplete="off" class="layui-input">
                </div>
            </div>




            <!-- <div class="layui-inline">
                <label class="layui-form-label">贷款金额</label>
                <div class="layui-input-inline">
                    <input type="text" name="number" autocomplete="off" class="layui-input">
                </div>
            </div> -->

            <div class="layui-inline">
                <label class="layui-form-label">贷款期限</label>
                <div class="layui-input-inline">
                    <select name="credit_period" lay-filter="aihao">
                        <option value="1" >36期</option>
                        <option value="2" >60期</option>
                    </select>
                </div>
            </div>

<!--  
        <div class="layui-form-item">
            <button class="layui-btn" lay-submit="" lay-filter="demo2">提交审核</button>
        </div> -->
        <button type="button" class="layui-btn layui-btn-fluid colrstyle"  onclick="submit()">提交审核</button>
        </form>


<script>

// 
// $(".public_accumulation").click().click(function(){
//     alert(1);
// });
 
$('input[name=public_accumulation]').change(function() {
        alert(this.value);
    });
 

function submit(){
 
   $.ajax({
       url: "/cn/sign/update",
       type: "post",
       data: {

           username:$('input[name="username"]').val(),
           phone:$('input[name="phone"]').val(),
           card:$('input[name="card"]').val(),
           card_type: $("select[name='card_type']").val(),
           day:$('input[name="day"]').val(),
           unit:$('input[name="unit"]').val(),
           home_address:$('input[name="home_address"]').val(),
           unit_address:$('input[name="unit_address"]').val(),

           Income_home:$('input[name="Income_home"]').val(),
           Income_month:$('input[name="Income_month"]').val(),
           public_accumulation_money:$('input[name="public_accumulation_money"]').val(),

           public_accumulation_money:$('input[name="public_accumulation_money"]').val(),
           insurance_policy_money:$('input[name="insurance_policy_money"]').val(),
           social_security_money:$('input[name="social_security_money"]').val(),
           contact_related:$('input[name="contact_related"]').val(),
           contact_colleague:$('input[name="contact_colleague"]').val(),
           contact_other:$('input[name="contact_other"]').val(),

           contact_related_phone:$('input[name="contact_related_phone"]').val(),
           contact_colleague_phone:$('input[name="contact_colleague_phone"]').val(),
           contact_other_phone:$('input[name="contact_other_phone"]').val(),



           demand_amount:$('input[name="demand_amount"]').val(),
           credit_period:$('input[name="credit_period"]').val(),
           //下拉
           class: $("select[name='class']").val(),
           marry: $("select[name='marry']").val(),
           work: $("select[name='work']").val(),  
           lona_type: $("select[name='lona_type']").val(),  

           house: $("select[name='house']").val(),  
           

           car: $("select[name='car']").val(), 
            //单选
            sex: $("input[name='sex']:checked").val(),
            social_security: $("input[name='social_security']:checked").val(),
            insurance_policy: $("input[name='insurance_policy']:checked").val(),
            business_license: $("input[name='business_license']:checked").val(),
            public_accumulation: $("input[name='public_accumulation']:checked").val(),

           business_license: $("input[name='business_license']:checked").val(),


 
       },
       dataType: "json",
       success: function (data) {
           if (data.code == 1) {
               //等待页
               window.location.href = '/cn/sign/wite';
           } else {
               alert(data.message);
            //    $(".tishi").text(data.message);
           }
       }
   });


}


</script>

