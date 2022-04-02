<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>CellEdit 单元格编辑 </title>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    
</head>
<body>
    <!-- <h1>CellEdit 单元格编辑</h1> -->
    <div style="width:800px;">
        <div class="mini-toolbar" style="border-bottom:0;padding:0px;">
            <table style="width:100%;">
                <tr>
                    <td style="width:100%;">
                        <a class="mini-button" iconCls="icon-add" onclick="addRow()" plain="true" tooltip="增加...">增加</a>
                        <a class="mini-button" iconCls="icon-add" onclick="editRow()" plain="true" tooltip="增加...">编辑</a>
                        <a class="mini-button" iconCls="icon-remove" onclick="removeRow()" plain="true">删除</a>
                        <span class="separator"></span>
                        <a class="mini-button" iconCls="icon-save" onclick="saveData()" plain="true">保存</a>   
                        <span class="separator"></span>
                        <a class="mini-button" iconCls="icon-reload" onclick="BrushData()" plain="true">刷新</a>            
                    </td>
                    <td style="white-space:nowrap;">
                        <input id="key" class="mini-textbox" emptyText="请输入生物名称" style="width:150px;" onenter="onKeyEnter"/>   
                        <a class="mini-button" onclick="search()">查询</a>
                    </td>
                    <td>
                        <select name="type" id="using">
                            <option value="0">全部</option>
                            <option value="1">普通</option>
                            <option value="2">商店</option>
                            <option value="3">NPC</option>
                            <option value="4">不可用</option>
                        </select>
                    </td>
                </tr>
            </table>           
        </div>
    </div>

    <div id="datagrid1" class="mini-datagrid" style="width:98%;height:94%"
        url="/admin/biology-create/api-index" idField="id" 
        allowResize="true" pageSize="20" sizeList="[10,20,30,50,100]"
        allowCellEdit="true" allowCellSelect="true" multiSelect="true" 

        
    >
        <div property="columns">
            <div type="indexcolumn"></div>
            <div type="checkcolumn"></div>
            <div  field="name" headerAlign="center" allowSort="true" width="150" >生物名称
                <input name="name" property="editor" class="mini-textbox" style="width:100%;" minWidth="150" />
            </div>

            <!--ComboBox：本地数据-->         
            <div type="comboboxcolumn" autoShowPopup="true"  field="biology" width="100"  allowSort="true"  align="center" headerAlign="center">种族
                <input name="biology" property="editor" class="mini-combobox" style="width:100%;" url="/admin/api/biologyall" />                
            </div>
            <!-- data="States"   定义属性 也可以用url  -->
            <div type="comboboxcolumn" autoShowPopup="true"  field="state" width="100"  allowSort="true"  align="center" headerAlign="center">生物境界
                <input name="state" property="editor" class="mini-combobox" style="width:100%;" url="/admin/api/biology-stateall" />   
            </div>

            <div field="power" width="100"  allowSort="true" >力量
                <input name="power" property="editor" class="mini-spinner"  minValue="1" maxValue="200" value="25" style="width:100%;"/>
            </div>
            <div field="agile" width="100"  allowSort="true" >敏捷
                <input name="agile" property="editor" class="mini-spinner"  minValue="1" maxValue="200" value="25" style="width:100%;"/>
            </div>
            <div field="intelligence" width="100"  allowSort="true" >智力
                <input name="intelligence" property="editor" class="mini-spinner"  minValue="1" maxValue="200" value="25" style="width:100%;"/>
            </div>
            <div field="wuXing" width="100"  allowSort="true" >悟性
                <input name="wuXing" property="editor" class="mini-spinner"  minValue="1" maxValue="200" value="25" style="width:100%;"/>
            </div>
            
            <div field="skill" headerAlign="center" allowSort="true" width="150" >生物技能
                <!-- <input property="editor" class="mini-textbox" style="width:100%;" minWidth="200" /> -->
                <input property="editor" name="skill"  class="mini-buttonedit" style="width:100%;" minWidth="150" onbuttonclick="onButtonEdit"/>
            </div>
            

            <div type="comboboxcolumn" autoShowPopup="true"  field="wordId" width="100"  allowSort="true"  align="center" headerAlign="center">生物世界
                <input name="wordId" property="editor" class="mini-combobox" style="width:100%;" url="/admin/api/wordslist" />   
            </div>

            <!-- <div field="birthday" width="100"  allowSort="true" dateFormat="yyyy-MM-dd">出生日期
                <input name="birthday"  property="editor" class="mini-datepicker" style="width:100%;"/>
            </div>     -->
            <div field="descript" width="150" headerAlign="center" allowSort="true">描述
                <input name="descript" property="editor" class="mini-textarea mini-textbox" style="width:200px;" minWidth="200" minHeight="50"/>
            </div>
            <div type="comboboxcolumn" autoShowPopup="true"  field="type" width="100"  allowSort="true"  align="center" headerAlign="center">生物类型
                <input name="type" property="editor" class="mini-combobox" style="width:100%;"  data="Types" />                
            </div>
            <!--ComboBox：本地数据-->         
            <!-- <div type="comboboxcolumn" autoShowPopup="true" name="biologyid" field="biologyid" width="100"  allowSort="true"  align="center" headerAlign="center">生物模板
                <input property="editor" class="mini-combobox" style="width:100%;" url="/admin/api/wordslist" />                
            </div> -->
            <!--ComboBox：远程数据-->
            <!-- <div type="comboboxcolumn" field="country" width="100"  headerAlign="center" >国家
                <input property="editor" class="mini-combobox" style="width:100%;" url="/miniui/demo/data/countrys.txt" />                
            </div>    -->
            <div type="checkboxcolumn" field="yiXing" name="yiXing" trueValue="1" falseValue="0" width="60" headerAlign="center">是否异形</div> 
                      
        </div>
    </div>

    </body>
</html>

    <script type="text/javascript">
        // var Biologys = [{ id: 1, text: '人' }, { id: 2, text: '鬼'},{ id: 3, text: '妖'},{ id: 4, text: '神'},{ id: 5, text: '魔'},{ id: 6, text: '异'}];
        // var States = [{ id: 1, text: '先天' }, { id: 2, text: '筑基'},{ id: 3, text: '金丹'},{ id: 4, text: '元婴'},{ id: 5, text: '渡劫'},{ id: 6, text: '地仙'},{ id: 7, text: '天仙'},{ id: 8, text: '金仙'}];
        var Types = [{ id: 1, text: '普通' }, { id: 2, text: '特殊'}, { id: 3, text: 'NPC'}, { id: 4, text: '不可用'}]
        // var Genders = [{ id: 1, text: '男' }, { id: 2, text: '女'}, { id: 3, text: '未知'}];

        mini.parse();

        var grid = mini.get("datagrid1");
        grid.load();
        

        //////////////////////////////////////////////////////
        // 查询
        $("#using").change(function(){
            search();
        });
        function search() {
            var key = mini.get("key").getValue();
            var type = $("#using").val();
            grid.load({ key: key,type: type  });
        }

        function onKeyEnter(e) {
            search();
        }
        // 随机数
        function roundNum(one,two) { 
            // var num =  parseInt (Math.random()*two+one);
            var num = Math.floor(Math.random()*two+one);
            return num;
        }
        function addRow() {  
            var type = $("#using").val();
            if(type==0){ type=1;}
            $.ajax({
            url: "/admin/biology-create/biology-rand",
            data: { type: type },
            type: "post",
            success: function (text) {
                grid.reload();// 添加后刷新页面
            
                }
            });
        }
        function removeRow() {
            var rows = grid.getSelecteds();
            var json = mini.encode(rows);
            // console.log(json);
            if (rows.length > 0) {
                if (confirm("删除不可恢复，是否继续本次操作？")) {
                    $.ajax({
                    url: "/admin/biology-create/biology-delete",
                    data: { data: json },
                    type: "post",
                    success: function (text) {
                        // 移除列
                        grid.removeRows(rows, true);
                        }  
                    });
                }
            }
        }
        //保存和修改
        function saveData() {            
            var data = grid.getChanges();
            var json = mini.encode(data);
            grid.loading("保存中，请稍后......");
            $.ajax({
                url: "/admin/biology-create/biology-add",
                data: { data: json },
                type: "post",
                success: function (text) {
                    grid.reload();
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert(jqXHR.responseText);
                }
            });
        }

        // 编辑详情
        function editRow() {
            if (grid.getChanges().length > 0) {
                if (confirm("有增删改的数据未保存，是否保存本次操作？")) {
                    saveData();
                }
            }else{
                editmethod();
            }
            
        }


        // 编辑调用方法
        function editmethod() {
            var row = grid.getSelected();
            // console.log(row);
            if (row) {
                mini.open({
                    url: "/admin/biology-create/employee-window",
                    title: "生物详情", width: 800, height: 780,
                    onload: function () {
                        var iframe = this.getIFrameEl();
                        var data = { action: "edit", id: row.id };
                        iframe.contentWindow.SetData(data);
                        
                    },
                    ondestroy: function (action) {
                        grid.reload();
                        
                    }
                });
                
            } else {
                alert("请选中一条记录");
            }
        }

        grid.on("celleditenter", function (e) {
            var index = grid.indexOf(e.record);
            if (index == grid.getData().length - 1) {
                var row = {};
                grid.addRow(row);
            }
        });

        grid.on("beforeload", function (e) {
            // if (grid.getChanges().length > 0) {
            //     if (confirm("有增删改的数据未保存，是否继续本次操作？")) {
            //         e.cancel = true;
            //     }
            // }
        });


//        grid.on("cellcommitedit", function (e) {
//            if (e.field == "loginname") {
//                if (e.value == "111") {
//                    alert("不允许为111");
//                    e.cancel = true;
//                }
//            }
//        });


    function BrushData(){
        grid.reload();
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
                
                    var newRow = {skill: data.text};
                    // grid.addRow(newRow,buttonEdit.ownerRowID0);
                    grid.getChanges(data.text, "skill");
                    grid.beginEditCell(newRow, "skill");
                    // e.source._oldValue = data.id;
                    e.source.value=data.id;
                }
            }
        });
    }
    
</script>

