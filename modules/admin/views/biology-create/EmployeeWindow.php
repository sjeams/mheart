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
                <td >力量min</td>
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
                </td>
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
                    <input name="grade" class="mini-spinner" value="1" minValue="1" maxValue="100000" />
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
            url: "/admin/biology-create/biology-update",
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
                url: "/admin/biology-create/biology-updateone?id="+data.id,
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
    }

    // 颜色选择器
    $(function () {
        $('#full').change(function() {
            var color = mini.getbyName("color");
            color.setValue($("#full").val())
        });

    })

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
        var inter = 0;  //境界增加属性值
        var state= parseInt(o.state);
        if(state>1){   var inter = inter+200;  }
        if(state>2){   var inter = inter+300;  }
        if(state>3){   var inter = inter+500;  }
        if(state>4){   var inter = inter+800;  }
        if(state>5){   var inter = inter+1000;  }
        if(state>6){   var inter = inter+1500;  }
        if(state>7){   var inter = inter+2000;  }
        if(state>8){   var inter = inter+2500;  }
        if(state>9){   var inter = inter+3000;  }
        if(state>10){   var inter = inter+4000;  }
        if(state>11){   var inter = inter+6000;  }
        if(state>12){   var inter = inter+10000;  }


        var skill =o.skill; //技能
        var skillleng =  skill.split(',').length;
        // console.log(skillleng);
        // console.log(skillleng.length);
        var reiki =parseInt(o.reiki); //悟性
        var wuXing =parseInt(o.wuXing); //悟性
        var grade =parseInt(o.grade); //等级
        var lucky =parseInt(o.lucky); //幸运

        var power =parseInt(o.power)*(1+wuXing/10)*grade+inter;  //力
        var agile =parseInt(o.agile)*(1+wuXing/10)*grade+inter;  //敏
        var intelligence =parseInt(o.intelligence)*(1+wuXing/10)*grade+inter; //智

        var  shengMing = parseInt(100+grade*100+power*10+agile*3+intelligence*3+reiki*10); //等级+力量 
        var  moFa =parseInt(20+grade*1+intelligence*0.2+reiki*0.15); // 等级+智力
        var  gongJi = parseInt((power*0.1+agile*0.3+intelligence*0.1+reiki*0.15)*1.2);
        var  huJia = parseInt(power*0.1+agile*0.3+intelligence*0.1+reiki*0.15);
        var  faGong = parseInt((power*0.1+agile*0.1+intelligence*0.3+reiki*0.15)*1.2);
        var  fakang = parseInt(power*0.1+agile*0.1+intelligence*0.3+reiki*0.15);

        // var  jianShang = parseInt(reiki*0.3+reiki*lucky*(1+wuXing/10)*0.1);
        // var  zhenShang = parseInt(reiki*lucky*0.15+reiki*0.5);
        var  jianShang = 0;
        var  zhenShang = 0;
        var  shanbi = parseInt((lucky*0.25+(lucky*10+reiki+grade*10)*0.0075));  // 最大值为1000
        var  suDu = parseInt(100+agile*0.25+reiki*0.3); //速度
        // var  baoji = 10;
        // var  baojilv = 10;
        // var  danDu = 10;

        var  special = parseInt(shengMing+moFa+gongJi+huJia+faGong+fakang+jianShang+zhenShang+shanbi+suDu);
        var  score = parseInt(skillleng*10+parseInt(o.power)+parseInt(o.agile)+parseInt(o.intelligence));  //属性最大值为80/10 ,评分满值为340
        if(score>1){   var scoreGrade = 'D';  }
        if(score>70){   var scoreGrade = 'C';  }
        if(score>90){   var scoreGrade = 'B';  }
        if(score>110){   var scoreGrade = 'A';  }
        if(score>130){   var scoreGrade = 'S';  }
        if(score>150){   var scoreGrade = 'SS';  }
        if(score>180){   var scoreGrade = 'SSS';  }
        if(score>210){   var scoreGrade = '传说';  }
        if(score>240){   var scoreGrade = '神话';  }

        var  jingBi =  score*2+grade+state*2;
        var  jingYan = score+grade+state*3;
        
        mini.getbyName("shengMing").setValue(shengMing); 
        mini.getbyName("moFa").setValue(moFa); 
        mini.getbyName("gongJi").setValue(gongJi); 
        mini.getbyName("huJia").setValue(huJia); 
        mini.getbyName("faGong").setValue(faGong); 
        mini.getbyName("fakang").setValue(fakang); 
        mini.getbyName("faGong").setValue(faGong); 
        mini.getbyName("fakang").setValue(fakang); 
        mini.getbyName("jianShang").setValue(jianShang); 
        mini.getbyName("zhenShang").setValue(zhenShang); 
        mini.getbyName("shanbi").setValue(shanbi); 
        mini.getbyName("suDu").setValue(suDu); 
        mini.getbyName("special").setValue(special); 
        mini.getbyName("score").setValue(score); 
        mini.getbyName("scoreGrade").setValue(scoreGrade); 
        mini.getbyName("jingBi").setValue(jingBi); 
        mini.getbyName("jingYan").setValue(jingYan); 

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