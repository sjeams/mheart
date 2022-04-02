<!-- 树形菜单选择 -->
<link rel="stylesheet" type="text/css" href="/easyui/themes/default/easyui.css">
<link rel="stylesheet" type="text/css" href="/easyui/themes/icon.css">
<script type="text/javascript" src="/easyui/jquery.easyui.min.js"></script>

<script type="text/javascript" src="/My97DatePicker/WdatePicker.js"></script>
<!--日期的插件-->
<link rel="stylesheet" href="/BeatPicker/css/reset.css"/>
<link rel="stylesheet" href="/BeatPicker/css/BeatPicker.min.css"/>
<link rel="stylesheet" href="/BeatPicker/css/demos.css"/>
<link rel="stylesheet" href="/BeatPicker/css/prism.css"/>
<style type="text/css">
    .anne-xiala{
        position: relative;
    }
    .anne-down{
        width: 218px;
        height: 100px;
        overflow: auto;
        border: 1px #ccc solid;
        border-radius: 5px;
        position: absolute;
        top: 55px;
        left: 0;
        background-color: white;
        display: none;
        z-index: 11;
    }
    .anne-down ul{
        margin: 0;padding: 0;
    }
    .anne-down ul li{
        padding: 5px 0 5px 10px;
        list-style: none;
    }
    .anne-down ul li:hover{
        cursor: pointer;
        color: white;
        background-color: #0088cc;
    }
</style>
<!--<script src="http://www.jq22.com/jquery/jquery-1.10.2.js"></script>-->
<script src="/BeatPicker/js/BeatPicker.min.js"></script>
<script src="/BeatPicker/js/prism.js"></script>
<div class="span10" id="datacontent">
    <form action="/user/user/add-block" method="post">
        <div class="control-group">
            <label for="modulename" class="control-label">真实姓名</label>
            <div class="controls">
                <input type="text"  id="name" name="name">
            </div>
        </div>
        <div class="control-group anne-xiala">
            <label for="modulename" class="control-label">商品子内容ID(通过课程名称搜索)</label>
            <div class="controls">
                <input type="text" id="goodsId" name="goodsId" oninput="searchContent(this)"/>
            </div>
            <div class="anne-down">

            </div>
        </div>
        <div class="control-group anne-xiala">
            <label for="modulename" class="control-label">用户(通过用户电话邮箱搜索)</label>
            <div class="controls" id="inputUserId">
                <input type="text" id="userId" name="userId">
<!--                <input type="text"  name="" >-->
            </div>
            <input type="button" style="margin-bottom: 10px" value="搜索" onclick="searchUserAnne()"/>
            <script>
                $("#userId").keydown(function(e) {
                    if (e.keyCode == 13) {
                        searchUserAnne();
                    }
                });
            </script>
            <div class="anne-down">

            </div>
        </div>

        <div class="control-group">
            <label for="modulename" class="control-label">电话号码</label>
            <div class="controls">
                <input type="text" id="phone" name="phone" placeholder="选填项">
            </div>
        </div>

        <div class="control-group" >
            <label for="modulename" class="control-label">录播班次</label>
            <div class="controls">
                <input type="text" id="grade" name="grade" value="">
            </div>
        </div>

        <div class="control-group zhibo" style="display: none" >
            <label for="modulename" class="control-label">直播开始时间</label>
            <div class="controls">
                <input class="input-small Wdate" onclick="WdatePicker({ dateFmt: 'yyyy-MM-dd' })"  size="10" type="text" id="startTime"  value=""/>
            </div>
        </div>

        <div class="control-group zhibo" style="display: none" >
            <label for="modulename" class="control-label">直播结束时间</label>
            <div class="controls">
                <input class="input-small Wdate" onclick="WdatePicker({ dateFmt: 'yyyy-MM-dd' })"  size="10" type="text" id="endTime"  value=""/>
            </div>
        </div>
        <div class="control-group lubo zhibo" style="display: none" >
            <label for="modulename" class="control-label">录播结束时间</label>
            <div class="controls">
                <input class="input-small Wdate" onclick="WdatePicker({ dateFmt: 'yyyy-MM-dd' })"  size="10" type="text" id="endTime2"  value=""/>
            </div>
        </div>

        <div class="control-group mianshou" style="display: none" >
            <label for="modulename" class="control-label">面授有效期</label>
            <div class="controls">
                <input class="input-small Wdate" onclick="WdatePicker({ dateFmt: 'yyyy-MM-dd HH:mm:ss' })"  size="10" type="text" id="endTime3"  value=""/>
            </div>
        </div>
        <div class="control-group" >
            <label for="modulename" class="control-label">订单总价格</label>
            <div class="controls">
                <input type="text" class="totalMoney" name="totalMoney" id="totalMoney" value="0">
            </div>
        </div>
        <div class="control-group" >
            <label for="modulename" class="control-label">订单详情（备注）</label>
            <div class="controls">
                <textarea  class="favorableDetails" style="width: 300px;height: 150px;" id="favorableDetails" name="favorableDetails"></textarea>
            </div>
           </div>
        <div class="control-group" >
            <label for="modulename" class="control-label">是否付款</label>
            <div class="controls">
                <select name="payment" id="payment">
                    <option value="3">已付款</option>
                    <option value="1">未付款</option>
                </select>
            </div>
        </div>
        <div class="control-group">
            <div class="controls">
                <input type="hidden" id="code" value="2" />
                <input type="button"  onclick="subOrder()" class="btn btn-primary" value="提交">
            </div>
        </div>
    </div>
    </form>
</div>
<script>
//    点击其他地方隐藏下拉框
    $(document).click(function (even) {
        var ev=even||window.event;
        var target=ev.target||ev.srcElement;
        var flag=$(target).is(".anne-down");//可能点击的只是该样式的div
        var flag02=$(target).parents(".anne-down").is(".anne-down");//可能点击的是该样式div里面的内容
        if(!(flag || flag02)){
            $(".anne-down").slideUp();
        }
    });

    function searchCategory(){
    var category = $('#category').val();
    $('.content').combotree({
        url:'/order/api/search-content?keywords='+category+'&type=2',
        method:'get',
        cascadeCheck:false
    });
}

    function searchUser(){
        var keywords = $('#user').val();
        $('.user').combotree({
            url:'/order/api/search-user?keywords='+keywords,
            method:'get',
            cascadeCheck:false
        });
    }

    $('.user').combotree({
        onClick: function (node) {
            $("input[name='userId']").val(node.id);
            $('#user_consignee').show();
            $('.consignee').combotree({
                url:'/order/api/search-consignee?userId='+node.id,
                method:'get',
                cascadeCheck:false
            });
        }
    });

    function subOrder(){
        var name = $('#name').val();
        if(name == ''){
            alert('请填写真实姓名');
            return false;
        }
        var goods = $('#goodsId').val();
        if(goods == ''){
            alert('请选择商品');
            return false;
        }
        var userId = $('#userId').attr('data-id');
        if(userId == '' || !userId){
            alert('请选择用户');
            return false;
        }
        var grade = $('#grade').val();
        if(grade == ''){
            alert('请选择班次');
            return false;
        }
        var code = $('#code').val();
        var startTime = $('#startTime').val();//直播开始时间
        var endTime = $('#endTime').val();//直播结束时间
        var endTime2 = $('#endTime2').val();//录播结束时间
        var endTime3 = $('#ednTime3').val();//面授有限期
        if(code ==1){
            if(startTime == ''){
                alert('请选择直播开始时间');
                return false;
            }
            if(endTime == ''){
                alert('请选择直播结束时间');
                return false;
            }
            if(endTime2 == ''){
                alert('请选择录播结束时间');
                return false;
            }
            endTime += ' 23:59:59';
            endTime2 += ' 23:59:59';
        }
        if(code ==2){
            if(endTime2 == ''){
                alert('请选择录播结束时间');
                return false;
            }
            endTime2 += ' 23:59:59';
        }
        if(code ==3){
            if(endTime3 == ''){
                alert('请选择面授有效期');
                return false;
            }
            endTime3 += ' 23:59:59';
        }
        var totalMoney = $('#totalMoney').val();
        if(totalMoney == '' || totalMoney <= 0){
            alert('请输入订单总金额');
            return false;
        }
        var favorableDetails = $('#favorableDetails').val();
        var payment = $('#payment').val();
        var name = $('#name').val();
        var phone = $('#phone').val();
        $.post('/user/api/create-order',{goods:$('#goodsId').attr("data-id"),userId:$('#userId').attr("data-id"),totalMoney:totalMoney,name:name,phone:phone,favorableDetails:favorableDetails,payment:payment,grade:grade,endTime2:endTime2,endTime:endTime,startTime:startTime,endTime3:endTime3},function(re){
            alert(re.message)
        if(re.code == 1){
            window.location.href="/user/order/index";
        }
        },'json')

    }
    function searchContent(o) {
        var key=o.value;
        var str='';
        $.ajax({
            url:'/user/api/select-content',
            type:"get",
            data:{
                wordKey:key
            },
            dataType:"json",
            success:function (data) {
                var da=data.data;
                str+='<ul>';
                for(var i=0;i<da.length;i++){
                    str+='<li data-id="'+da[i].id+'" data-code="'+da[i].code+'" data-price="'+da[i].price+'" onclick="anneFuzhi(this,'+da[i].code+','+da[i].price+')" >'+da[i].name+'</li>';
                }
                str+='</ul>';
                $(o).parents(".controls").siblings(".anne-down").html(str).slideDown();
            }
        });
    }
    function searchUserAnne() {
        var wordKey=$('#userId').val();
        var str='';
        $.ajax({
            url:'/user/api/select-user',
            type:"get",
            data:{
                wordKey:wordKey
            },
            dataType:"json",
            success:function (data) {
                var da=data.data;
                str+='<ul>';
                for(var i=0;i<da.length;i++){  //by sjeam 修改
                    // str+='<li data-id="'+da[i].uid+'" onclick="anneFuzhi(this)">'+da[i].phone+'-'+da[i].email+'</li>';
                    if( da[i].phone){
                        str+='<li data-id="'+da[i].uid+'" onclick="anneFuzhi(this)">'+da[i].phone+'</li>';
                    }
                    if( da[i].email){
                        str+='<li data-id="'+da[i].uid+'" onclick="anneFuzhi(this)">'+da[i].email+'</li>';
                    }
     
                }
                str+='</ul>';
                $('#userId').parents(".controls").siblings(".anne-down").html(str).slideDown();
            }
        });
    }
    function anneFuzhi(o,code=0,price=0) {
        var html=$(o).html();
        var id=$(o).attr("data-id");
        $(o).parents(".anne-down").slideUp().siblings(".controls").find("input").val(html).attr("data-id",id);
        if(code >0){
            $('#totalMoney').val(price);
            $('.zhibo').css('display','none');
            $('.lubo').css('display','none');
            $('.mianshou').css('display','none');
            $("#startTime").val('');
            $('#endTime').val('');
            $('#endTime2').val('');
            $('#endTime3').val('');
            if(code ==1){
                $('.zhibo').css('display','block');
            }
            if(code ==2){
                $('.lubo').css('display','block');
            }
            if(code ==3){
                $('.mianshou').css('display','block');
            }
            $('#code').val(code);
        }
    }
</script>