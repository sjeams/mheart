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
    <input name="createid" class="mini-hidden" />
    <!-- <input name="score" class="mini-hidden" /> -->
    <div style="padding-left:11px;padding-bottom:5px;">
        <table>
            <tr>
                <td style="width:80px;">姓名</td>
                <td style="width:150px;">    
                    <input name="name" class="mini-textbox"/>
                </td>
                <td >训练</td>
                <td >    
                    <input name="xunLian" class="mini-spinner" value="1" minValue="1" maxValue="100000" />
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
                <td style="width:80px;">性别</td>
                <td >                        
                    <select name="sex" class="mini-combobox">
                        <option value="1">男</option>
                        <option value="2">女</option>
                        <option value="3">未知</option>
                    </select>
                </td>
                <td >刷新</td>
                <td >    
                    <input name="shuaXin" class="mini-spinner" value="1" minValue="1" maxValue="100000" />
                </td>
            </tr>
            <tr>
                <td >是否异形</td>
                <td >    
                    <input name="yiXing" class="mini-checkbox" text="异形" trueValue="1" falseValue="0" />
                </td>
                <td >悟性</td>
                <td >    
                    <input name="wuXing" class="mini-spinner" value="1" minValue="1" maxValue="100000" />
                </td>
            </tr>
            <tr>
                <td >颜色  <input id="full" ></td>
                <td class="colorPicker">
                    <!-- <input type="hidden" labelField="true" label="选择颜色:" id="textbox1" name="color"  emptyText="请选择颜色"> -->
                    <input name="color" class="mini-textbox">
                </td>
                <td >幸运</td>
                <td >    
                    <input name="lucky" class="mini-spinner" value="1" minValue="1" maxValue="1000" />
                </td>  
            </tr> 

            <tr>
                <td >进阶(升星)</td>
                <td >    
                    <input name="jinJie" class="mini-spinner" value="1" minValue="1" maxValue="100000" />
                </td>
                <td >灵气</td>
                <td >    
                    <input name="reiki" class="mini-spinner" value="1" minValue="1" maxValue="100000" />
                </td>
            </tr> 

            <tr>
                <td >力量max</td>
                <td >    
                    <input name="power"  class="mini-spinner" value="1" minValue="1" maxValue="100000" />
                </td>
                <td >敏捷max</td>
                <td >    
                    <input name="agile"  class="mini-spinner" value="1" minValue="1" maxValue="100000" />
                </td>
                <td >智力max</td>
                <td >    
                    <input name="intelligence"  class="mini-spinner" value="1" minValue="1" maxValue="100000" />
                </td>
            </tr>  
            <tr>
                <td >经验条</td>
                <td colspan="3">   
                <div id="percent" class="mini-progressbar"  name="percent" style="width: 100%;" value="0"></div>
                    <!-- <a href="#" class="btn btn-info" onclick="upImage();">   
                        <img src="" id ="infor-picture" alt="形象" style="width:100%;height:160px">
                        <input name="picture" class="picture mini-textbox" style="display:none"  placeholder="图片地址">
                    </a> -->
                </td>
                <td >经验值</td>
                <td>    
                    <input name="experience"  class="mini-spinner" value="0" minValue="0" maxValue="3015000" />
                </td>
                <!-- <td >力量min</td>
                <td >    
                    <input name="minPower"  class="mini-spinner" value="1" minValue="1" maxValue="100000" />
                </td>
                <td >敏捷min</td>
                <td >    
                    <input name="minAgile"  class="mini-spinner" value="1" minValue="1" maxValue="100000" />
                </td>
                <td >智力min</td>
                <td >    
                    <input name="minIntelligence"  class="mini-spinner" value="1" minValue="1" maxValue="100000" />
                </td> -->
            </tr>  
            
            <tr>
                <td >自由属性</td>
                <td >    
                    <input name="maxNature" class="mini-spinner" value="1" minValue="1" maxValue="100000" />
                </td>
                <td >潜能</td>
                <td >    
                    <input name="qianNeng" class="mini-spinner" value="1" minValue="1" maxValue="100000" />
                </td>
                <td >触发</td>
                <td >    
                    <input name="chuFa" class="mini-textbox"  />
                </td>
            </tr> 

            <tr>
                <td >等级</td>
                <td >    
                    <!-- <input name="grade" class="mini-spinner" value="1" minValue="1" maxValue="100000" /> -->
                    <input name="grade" class="mini-textbox readonly" readonly  />
                </td>
                <!-- <td >元神</td>
                <td >    
                    <input name="yuanShen" class="mini-textbox" />
                </td> -->
                <td style="width:80px;">身份</td>
                <td >                        
                    <select name="shenFen" class="mini-combobox">
                        <option value="1">普通</option>
                        <option value="2">精英</option>
                        <option value="3">头目</option>
                        <option value="4">主角</option>
                        <option value="5">命运</option>
                    </select>
                </td>
                <td >缘分</td>
                <td >    
                    <input name="fate" class="mini-textbox" />
                </td>
            </tr> 

            <tr>
                <td style="width:80px;">境界</td>
                <td style="width:150px;">    
                    <input  name="state" class="mini-combobox"  emptyText="请选择境界" url="/admin/api/biology-stateall" />    
                </td>
                <td style="width:80px;">种族</td>
                <td style="width:150px;">    
                    <input name="biology" class="mini-combobox"  emptyText="请选择种族" url="/admin/api/biologyall" /> 
                </td>
                <td >性格</td>
                <td >    
                    <input name="character" class="mini-combobox" url="/admin/api/biology-characterall" /> 
                </td>
            </tr>   

            <tr>
                <td >类型</td>
                <td >                        
                    <select name="type" class="mini-combobox">
                        <option value="1">普通</option>
                        <option value="2">商店</option>
                        <option value="3">NPC</option>
                        <option value="4">不可用</option>
                    </select>
                </td>
                <td >生物世界</td>
                <td >    
                    <input name="wordId" class="mini-combobox" onbuttonclick="onButtonEditWords"  url="/admin/api/wordslist" /> 
                </td>
                <td >技能</td>
                <td >    
                    <input name="skill" class="mini-combobox"   onbuttonclick="onButtonEdit" />
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
                    <td >生命</td>
                    <td >    
                        <input name="shengMing" class="mini-textbox readonly" readonly  />
                    </td>
                    <td >魔法</td>
                    <td >    
                        <input name="moFa" class="mini-textbox readonly" readonly  />
                    </td>
                    <td >攻击</td>
                    <td >    
                        <input name="gongJi" class="mini-textbox readonly" readonly  />
                    </td>
                </tr>
                <tr>
                    <td >护甲</td>
                    <td >    
                        <input name="huJia" class="mini-textbox readonly" readonly  />
                    </td>
                    <td >特攻</td>
                    <td >    
                        <input name="faGong" class="mini-textbox readonly" readonly  />
                    </td>
                    <td >法抗</td>
                    <td >    
                        <input name="fakang" class="mini-textbox readonly" readonly  />
                    </td>
                </tr>       
                <tr>
                    <td >减伤</td>
                    <td >    
                        <input name="jianShang" class="mini-textbox readonly" readonly  />
                    </td>
                    <td >真实伤害</td>
                    <td >    
                        <input name="zhenShang" class="mini-textbox readonly" readonly  />
                    </td>
                    <td >闪避</td>
                    <td >    
                        <input name="shanbi" class="mini-textbox readonly" readonly  />
                    </td>
                </tr>   
                <tr>
                    <td >速度</td>
                    <td >    
                        <input name="suDu" class="mini-textbox readonly" readonly  />
                    </td>
                    <td >暴击</td>
                    <td >    
                        <input name="baoji" class="mini-textbox readonly" readonly  />
                    </td>
                    <td >暴击率</td>
                    <td >    
                        <input name="baojilv" class="mini-textbox readonly" readonly  />
                    </td>
                </tr>  
                <tr>
                    <td >丹毒</td>
                    <td >    
                        <input name="danDu" class="mini-textbox readonly" readonly  />
                    </td>
                    <td >评分</td>
                    <td >    
                        <input name="score" class="mini-textbox readonly" readonly  />
                    </td>
                    <td >评分等级</td>
                    <td >    
                        <input name="scoreGrade" class="mini-textbox readonly" readonly  />
                    </td>
                </tr>   
                <tr>
                    <td >战力</td>
                    <td >    
                        <input name="special" class="mini-textbox readonly" readonly  />
                    </td>
                    <td >金币</td>
                    <td >    
                        <input name="jingBi" class="mini-textbox readonly" readonly  />
                    </td>
                    <td >经验</td>
                    <td >    
                        <input name="jingYan" class="mini-textbox readonly" readonly  />
                    </td>
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


    var extend =['reiki','lucky','state','power','agile','intelligence','character','grade','jinJie','wuXing','skill']
    for(var i=0;i<extend.length;i++){   
            mini.getbyName(extend[i]).on("valuechanged", function () {
            // mini.getbyName("shengMing").setValue(123); 
            // 修改境界
            updateState();
            extenCount(); // 初始化属性
            // updateeExperience(); //初始化经验条
        });
    } 
    //经验条变化
    mini.getbyName('experience').on("valuechanged", function () {
        updateExperience(); //初始化经验条
    });
 
    // 修改弹窗--请求修改
    function SaveData() {
        var o = form.getData();            
        form.validate();
        if (form.isValid() == false) return;
      
        var json = mini.encode([o]);
        // alert( json);
        $.ajax({
            url: "/admin/user-biology/biology-update",
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
                url: "/admin/user-biology/biology-updateone?id="+data.id,
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
                updateStatefalse(); // 取消境界修改
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
        updateStatefalse(); // 取消境界修改
        CloseWindow("cancel");

    }
    ////////////////////////////////// 初始化数据
    function onDeptChanged(e) {  
            //修改经验条
            updateExperience();
            // 初始化图片--形象
            var picture = mini.getbyName("picture");
            picture = picture.getValue();
            document.getElementById("infor-picture").src=picture;
            //初始化数据--颜色
            var colorname = mini.getbyName("color");
            colorvalue = colorname.getValue();
            $("#full").spectrum({
                color: colorvalue,  //初始化颜色
                preferredFormat: "hex3", //输入框颜色格式
                showInput: true,  //显示输入
                showPalette: true, //显示选择器面板
                cancelText: "取消",//取消按钮,按钮文字
                chooseText: "选择",//选择按钮,按钮文字
                palette: [
                    ["#000", "#444", "#666", "#999", "#ccc", "#eee", "#f3f3f3", "#fff"],
                    ["#f00", "#f90", "#ff0", "#0f0", "#0ff", "#00f", "#90f", "#f0f"],
                    ["#f4cccc", "#fce5cd", "#fff2cc", "#d9ead3", "#d0e0e3", "#cfe2f3", "#d9d2e9", "#ead1dc"],
                    ["#ea9999", "#f9cb9c", "#ffe599", "#b6d7a8", "#a2c4c9", "#9fc5e8", "#b4a7d6", "#d5a6bd"],
                    ["#e06666", "#f6b26b", "#ffd966", "#93c47d", "#76a5af", "#6fa8dc", "#8e7cc3", "#c27ba0"],
                    ["#c00", "#e69138", "#f1c232", "#6aa84f", "#45818e", "#3d85c6", "#674ea7", "#a64d79"],
                    ["#900", "#b45f06", "#bf9000", "#38761d", "#134f5c", "#0b5394", "#351c75", "#741b47"],
                    ["#600", "#783f04", "#7f6000", "#274e13", "#0c343d", "#073763", "#20124d", "#4c1130"]
                ]
            });
     
            extenCount(); //初始化属性
    }

    // 颜色选择器
    $(function () {
        $('#full').change(function() {
            var color = mini.getbyName("color");
            color.setValue($("#full").val())
        });

    })

    //取消境界修改
    function updateStatefalse() {
        var createid = mini.getbyName("createid").getValue();
        $.ajax({
                url: "/admin/api/state-false",
                data:{
                    createid:createid,
                    },
                type: 'post',
                success: function (text) {
                    extenCount();
                }
            });

    }

    //修改境界
    function updateState() {
        var createid = mini.getbyName("createid").getValue();
        var state = mini.getbyName("state").getValue();
        var power = mini.getbyName("power").getValue();
        var agile = mini.getbyName("agile").getValue();
        var intelligence = mini.getbyName("intelligence").getValue();
        $.ajax({
            url: "/admin/api/state-change",
            data:{
                createid:createid,
                state:state,
                power:power,
                agile:agile,
                intelligence:intelligence,
                },
            type: 'post',
            success: function (text) {
                var statenum = mini.decode(text);
                mini.getbyName("power").setValue(statenum.power);
                mini.getbyName("agile").setValue(statenum.agile);
                mini.getbyName("intelligence").setValue(statenum.intelligence);
                extenCount();
            }
        });

    }

    //修改经验条
    function updateExperience() {
        var createid = mini.getbyName("createid").getValue();
        var power = mini.getbyName("power").getValue();
        var agile = mini.getbyName("agile").getValue();
        var intelligence = mini.getbyName("intelligence").getValue();
        var maxNature = mini.getbyName("maxNature").getValue();
        var wuXing = mini.getbyName("wuXing").getValue();
        var reiki = mini.getbyName("reiki").getValue();
         
        var experience = mini.getbyName("experience").getValue();
        var grade = mini.getbyName("grade").getValue();
        $.ajax({
            url: "/admin/api/experience",
            data:{
                createid:createid,
                power:power,
                agile:agile,
                intelligence:intelligence,
                maxNature:maxNature,
                wuXing:wuXing,
                reiki:reiki,
                experience:experience,
                grade:grade
                },
            type: 'post',
            success: function (text) {
                var exp = mini.decode(text);
                mini.getbyName("power").setValue(exp.power);
                mini.getbyName("agile").setValue(exp.agile);
                mini.getbyName("intelligence").setValue(exp.intelligence);
                mini.getbyName("maxNature").setValue(exp.maxNature);
                mini.getbyName("reiki").setValue(exp.reiki);
                

                mini.getbyName("grade").setValue(exp.newGrade);
                mini.getbyName("experience").setValue(exp.experience);
                mini.get("percent").setValue(exp.percent);
                extenCount();
            }
        });

    }
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
        var state= parseInt(o.state);
        var skill =o.skill; //技能
        var reiki =parseInt(o.reiki); //悟性
        var wuXing =parseInt(o.wuXing); //悟性
        var grade =parseInt(o.grade); //等级
        var lucky =parseInt(o.lucky); //幸运

        var power =parseInt(o.power);  //力
        var agile =parseInt(o.agile);  //敏
        var state =parseInt(o.state);  //敏
        var intelligence =parseInt(o.intelligence); //智

        var score =parseInt(o.score); //智
        $.ajax({
            url: "/admin/api/brush-biology",
            data:{
                score:score,
                skill:skill,
                state:state,
                reiki:reiki,
                wuXing:wuXing,
                grade:grade,
                grade:grade,
                lucky:lucky,
                power:power,
                agile:agile,
                intelligence:intelligence,
                },
            type: 'post',
            success: function (text) {
                var biology = mini.decode(text);
                // console.log(biology);
                mini.getbyName("shengMing").setValue(biology.shengMing); 
                mini.getbyName("moFa").setValue(biology.moFa); 
                mini.getbyName("gongJi").setValue(biology.gongJi); 
                mini.getbyName("huJia").setValue(biology.huJia); 
                mini.getbyName("faGong").setValue(biology.faGong); 
                mini.getbyName("fakang").setValue(biology.fakang); 
                mini.getbyName("faGong").setValue(biology.faGong); 
                mini.getbyName("fakang").setValue(biology.fakang); 
                mini.getbyName("jianShang").setValue(biology.jianShang); 
                mini.getbyName("zhenShang").setValue(biology.zhenShang); 
                mini.getbyName("shanbi").setValue(biology.shanbi); 
                mini.getbyName("suDu").setValue(biology.suDu); 
                mini.getbyName("special").setValue(biology.special); 
                // mini.getbyName("score").setValue(biology.score); 
                // mini.getbyName("scoreGrade").setValue(biology.scoreGrade); 
                mini.getbyName("jingBi").setValue(biology.jingBi); 
                mini.getbyName("jingYan").setValue(biology.jingYan); 
            }
        });
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
                    // console.log(data.id);
                    // console.log(data.text);

                    buttonEdit.setValue(data.id);
                    buttonEdit.setText(data.id);
                    extenCount();//选中技能触发属性改变
                    // var newRow = {skill: data.text};
                    // e.source.value=data.id;
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