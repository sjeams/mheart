<style>
    .sp-replacer {
        border-width: 0;
        padding: 0;
        /*position: absolute;*/
        /*top: 50%;*/
    }

    .sp-dd {
        display: none;
    }

    
    body .mini-labelfield {
        display: inline-block;
    }
</style>
<form id="form1" method="post">
    <input name="id" class="mini-hidden" />
    <div style="padding-left:11px;padding-bottom:5px;">
        <table>
            <tr>
                <td style="width:80px;">姓名</td>
                <td style="width:150px;">    
                    <input name="name" class="mini-textbox"/>
                </td>
                <td >出现率</td>
                <td >    
                    <input name="value" class="mini-spinner" value="0" minValue="0" maxValue="100000" />
                </td>
                <td style="width:80px;">形象</td>
                <td rowspan="5" style="border:1px solid #cccccc">   
                    <a href="#" class="btn btn-info" onclick="upImage();">   
                        <img src="" id ="infor-picture" alt="形象" style="width:100%;height:160px">
                        <input name="picture" class="picture mini-textbox" style="display:none"  placeholder="图片地址">
                    </a>
                </td>
            </tr>
            <tr>
                <!-- <td >品质</td>
                <td >    
                    <input name="percent" class="mini-checkbox" text="异形" trueValue="1" falseValue="0" />
                </td> -->
                <td >品质</td>
                <td >    
                    <input name="percent" class="mini-spinner" value="1" minValue="1" maxValue="100" />
                </td>
                <td >属性数量</td>
                <td >    
                    <input name="num" class="mini-spinner" value="0" minValue="0" maxValue="10" />
                </td>
            </tr>
            <tr>

            </tr>
                <td >提炼</td>
                <td >    
                    <input name="tilian" class="mini-spinner" value="0" minValue="0" maxValue="1000000" />
                </td>
                <td >合成id</td>
                <td >    
                    <input name="belong" class="mini-spinner" value="0" minValue="0" maxValue="1000000" />
                </td>
            <tr>
                <!-- <td >颜色  <input id="full" ></td>
                <td class="colorPicker">
                    <input type="hidden" labelField="true" label="选择颜色:" id="textbox1" name="color"  emptyText="请选择颜色">
                    <input name="color" class="mini-textbox">
                </td> -->
                <td >物品等级</td>
                <td >    
                    <input name="grade" class="mini-spinner" value="1" minValue="1" maxValue="1000" />
                </td>  
                <td >类型</td>
                <td >                        
                    <select name="type" class="mini-combobox">
                        <option value="1">可用</option>
                        <option value="2">不可用</option>
                    </select>
                </td>
            </tr> 


            <tr>
                <td style="width:80px;">售卖</td>
                <td >                        
                    <select name="selltype" class="mini-combobox">
                        <option value="1">不售</option>
                        <option value="2">金币</option>
                        <option value="3">灵石</option>
                    </select>
                </td>
                <td >卖价</td>
                <td >    
                    <input name="sellout" class="mini-spinner" value="1" minValue="1" maxValue="100000" />
                </td>
                <td >价格</td>
                <td >    
                    <input name="price" class="mini-spinner" value="1" minValue="1" maxValue="1000000" />
                </td>

            </tr>   


            <tr>
    
                <td >使用类型</td>
                <td >    
                    <select name="usetype" class="mini-combobox">
                        <option value="1">材料 </option>
                        <option value="2">使用</option>
                        <option value="3">合成</option>
                    </select>
                </td>
                <td >物品类型</td>
                <td >    
                    <input name="gooduse" class="mini-combobox" onbuttonclick="onButtonEditWords"  url="/admin/api/goods-use" /> 
                </td>
                <td >所属世界</td>
                <td >    
                     <input name="gooduse" class="mini-combobox" onbuttonclick="onButtonEditWords"  url="/admin/api/wordslist" /> 
                    <!-- <input  class="mini-textboxlist" name="wordId" textName="wordName" required="true"
                                url="/admin/api/wordslist" value="cn,usa" text=""
                                valueField="id" textField="text" 
                        /> -->
                </td>
            </tr> 
            <tr>
                <td >描述</td>
                <td colspan="5">    
                    <input name="descript" class="mini-textarea" style="width:100%;" />
                </td>
            </tr>   
            <!-- <tr>
                <td >升级经验</td>
                <td >    
                    <input name="experience" class="mini-textbox"   onbuttonclick="onButtonEdit" />
                </td>
            </tr>  -->
        </table>  
    </div>
    <fieldset style="border:solid 1px #aaa;padding:3px;">
        <legend >基本信息</legend>
        <div style="padding-left:60px;">
            <table style="table-layout:fixed;">
                <tr>
                    <td >拥有人</td>
                    <td >    
                        <input name="userid" class="mini-textbox readonly" readonly  />
                    </td>
                    <td >品质</td>
                    <td >    
                        <input name="percenttype" class="mini-textbox readonly" readonly  />
                    </td>
                    <!-- <td >攻击</td>
                    <td >    
                        <input name="gongJi" class="mini-textbox readonly" readonly  />
                    </td> -->
                </tr>
            </table>
        </div>
    </fieldset>
    <div style="text-align:center;padding:10px;">               
        <a class="mini-button" onclick="onOk" style="width:60px;margin-right:20px;">确定</a>       
        <a class="mini-button" onclick="onCancel" style="width:60px;">取消</a>       
    </div>        
</form>


<script type="text/javascript">
    mini.parse();
    var Sex = [{ id: 1, text: '男' }, { id: 2, text: '女'},{ id: 3, text: '未知'}];  
    var form = new mini.Form("form1");

    var extend =['percent']
    for(var i=0;i<extend.length;i++){   
            mini.getbyName(extend[i]).on("valuechanged", function () {
            // mini.getbyName("shengMing").setValue(123); 
            extenCount();
        });
    } 
    

    // 修改弹窗--请求修改
    function SaveData() {
        var o = form.getData();            
        form.validate();
        if (form.isValid() == false) return;
        var json = mini.encode([o]);
        $.ajax({
            url: "/admin/goods-store/biology-update",
            type: 'post',
            data: { data: json },
            cache: false,
            success: function (text) {
                CloseWindow("save");
            },
            error: function (jqXHR, textStatus, errorThrown) {
                // alert(jqXHR.responseText);
                CloseWindow();
            }
        });
    }
    ////////////////////
    //标准方法接口定义
    function SetData(data) {
        if (data.action == "edit") {
            //跨页面传递的数据对象，克隆后才可以安全使用
            data = mini.clone(data);
            $.ajax({
                url: "/admin/goods-store/biology-updateone?id="+data.id,
                cache: false,
                success: function (text) {
                    var o = mini.decode(text);
                    form.setData(o);
                    form.setChanged(false);
                    onDeptChanged(); //初始化数据
                    // mini.getbyName("position").setValue(o.position);
                }
            });
        }
    }

    function GetData() {
        var o = form.getData();
        return o;
    }
    function CloseWindow(action) {            
        if (action == "close" && form.isChanged()) {
            if (confirm("数据被修改了，是否先保存？")) {
                SaveData();
            }else{
                return true;
            }
        }
        if (window.CloseOwnerWindow) return window.CloseOwnerWindow(action);
        else window.close();            
    }
    function onOk(e) {
        SaveData();
    }
    function onCancel(e) {
        CloseWindow("cancel");
    }
    ////////////////////////////////// 初始化数据
    function onDeptChanged(e) {  

            extenCount(); //初始化属性
            // 初始化图片--形象
            var picture = mini.getbyName("picture");
            picture = picture.getValue();
            document.getElementById("infor-picture").src=picture;
            //初始化数据--颜色
            // var colorname = mini.getbyName("color");
            // colorvalue = colorname.getValue();
            // $("#full").spectrum({
            //     color: colorvalue,  //初始化颜色
            //     preferredFormat: "hex3", //输入框颜色格式
            //     showInput: true,  //显示输入
            //     showPalette: true, //显示选择器面板
            //     cancelText: "取消",//取消按钮,按钮文字
            //     chooseText: "选择",//选择按钮,按钮文字
            //     palette: [
            //         ["#000", "#444", "#666", "#999", "#ccc", "#eee", "#f3f3f3", "#fff"],
            //         ["#f00", "#f90", "#ff0", "#0f0", "#0ff", "#00f", "#90f", "#f0f"],
            //         ["#f4cccc", "#fce5cd", "#fff2cc", "#d9ead3", "#d0e0e3", "#cfe2f3", "#d9d2e9", "#ead1dc"],
            //         ["#ea9999", "#f9cb9c", "#ffe599", "#b6d7a8", "#a2c4c9", "#9fc5e8", "#b4a7d6", "#d5a6bd"],
            //         ["#e06666", "#f6b26b", "#ffd966", "#93c47d", "#76a5af", "#6fa8dc", "#8e7cc3", "#c27ba0"],
            //         ["#c00", "#e69138", "#f1c232", "#6aa84f", "#45818e", "#3d85c6", "#674ea7", "#a64d79"],
            //         ["#900", "#b45f06", "#bf9000", "#38761d", "#134f5c", "#0b5394", "#351c75", "#741b47"],
            //         ["#600", "#783f04", "#7f6000", "#274e13", "#0c343d", "#073763", "#20124d", "#4c1130"]
            //     ]
            // });
    }

    // 颜色选择器
    // $(function () {
    //     $('#full').change(function() {
    //         var color = mini.getbyName("color");
    //         color.setValue($("#full").val())
    //     });

    // })

</script>
<script>
    //实例化编辑器
    var o_ueditorupload = UE.getEditor('j_ueditorupload',
        {
            autoHeightEnabled:false
        });
    o_ueditorupload.ready(function ()
    {

        o_ueditorupload.hide();//隐藏编辑器

        //监听图片上传
        // o_ueditorupload.addListener('beforeInsertImage', function (t,arg)
        // {
            // var picture = mini.getbyName("picture");
            // color.setValue($("#full").val())
            // document.getElementById("infor-full").src=arg[0].src;
        // });

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
        var arg= myImage.open();
        //监听图片上传
        o_ueditorupload.addListener('beforeInsertImage', function (t,arg)
        {
            // 形象
            document.getElementById("infor-picture").src=arg[0].src;
            var picture = mini.getbyName("picture");
            picture.setValue(arg[0].src); 
            
        });
        return false;
    }
</script>
<script type="text/plain" id="j_ueditorupload"></script>



<script>

    // var extend =['lucky','state','power','agile','intelligence','maxNature','qianNeng','character','grade','jinJie','wuXing','skill']
    // 生物属性计算
    function extenCount(){
        // 获取表单数据
        var o = form.getData(); 
        // 处理境界
        // var inter = 0;  //境界增加属性值
        var percent= parseInt(o.percent);
        if(percent>=0 &&percent<10){   var percenttype = '残破'; }
        if(percent>=10 &&percent<20){   var percenttype = '劣质'; }
        if(percent>=20 &&percent<30){   var percenttype = '普通'; }
        if(percent>=30 &&percent<40){   var percenttype = '良好'; }
        if(percent>=40 &&percent<50){   var percenttype = '优质'; }
        if(percent>=50 &&percent<60){   var percenttype = '稀有'; }
        if(percent>=60 &&percent<70){   var percenttype = '极品'; }
        if(percent>=70 &&percent<80){   var percenttype = '完美'; }
        if(percent>=80 &&percent<90){   var percenttype = '传说'; }
        if(percent>=90 &&percent<100){  var percenttype = '神话'; }
        mini.getbyName("percenttype").setValue(percenttype); 

    }
</script>



<!-- 技能弹窗 -->
<script type="text/javascript">
    mini.parse();
    function onButtonEdit(e) {
        var buttonEdit = e.sender;
        // var buttonEdit = this;
        var win = new UserSelectWindow();
        win.set({
            url: "/admin/api/api-skill",                    
            title: "生物技能",
            width: 600,
            height: 500,
            multiSelect: true,
        });
        
        win.show();
        win.search();
        //初始化数据
        win.setData(null, function (action) {
            if (action == "ok") {
                //获取数据
                var rows = win.getData();
                // console.log(rows);
                // console.log(e);
                // console.log( mini.get("datagrid1").getRow());
                if (rows) {    
                    //循环取值  
                    var ids = [], texts = [];
                    for (var i = 0, l = rows.length; i < l; i++) {
                        var row = rows[i];
                        ids.push(row.id);
                        texts.push(row.name);
                    }
                    var data = {};
                    data.id = ids.join(",");
                    data.text = texts.join(",");
                    console.log(data.id);
                    // console.log(data.text);

                    buttonEdit.setValue(data.id);
                    buttonEdit.setText(data.id);

                    extenCount();//选中技能触发属性改变

                    // var newRow = {skill: data.text};
                    win.focus();
                }
            }
        });
    }
</script>



<!-- 世界弹窗 -->
<script type="text/javascript">
        mini.parse();

    function onButtonEditWords(e) {
        var buttonEdit = e.sender;

        var win = new UserSelectWindow();
        
        win.set({
            url: "/admin/api/wordsall",                    
            title: "世界选择",
            width: 600,
            height: 500,
            multiSelect: false,
        });
        
        win.show();
        win.search();

        //初始化数据
        win.setData(null, function (action) {
            if (action == "ok") {
                //获取数据
                var row = win.getDataOne();
                // console.log(row)
                if (row) {                        
                    buttonEdit.setValue(row.id);
                    buttonEdit.setText(row.name);
                    // alert("选中记录: " + row.name);
                }
            }
        });
    }
</script>