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
                            <option value="">全部</option>
                            <option value="1">不售</option>
                            <option value="2">金币</option>
                            <option value="3">灵石</option>
                        </select>
                    </td>
                    <td>
                        <select name="gooduse" id="gooduse">
                            <option value="">全部</option>
                            <?php foreach ($gooduse as $v){ ?> 
                            <option value="<?php echo $v['id'] ?>"><?php echo $v['name'] ?></option>
                            <?php } ?>
                        </select>
                    </td>
                </tr>
            </table>           
        </div>
    </div>
    <div id="datagrid1" class="mini-datagrid" style="width:98%;height:94%"
        url="/admin/goods-store/api-index" idField="id" 
        allowResize="true" pageSize="20" sizeList="[10,20,30,50,100]"
        allowCellEdit="true" allowCellSelect="true" multiSelect="true" 
        
    >
        <div property="columns">
            <div type="checkcolumn"></div>
            <div type="indexcolumn" headerAlign="center" >编号</div>
            <div  field="name" headerAlign="center" allowSort="true" width="150" >生物名称
                <input name="name" property="editor" class="mini-textbox" style="width:100%;" minWidth="150" />
            </div>

            <div field="value" width="100"  allowSort="true" >出现率
                <input name="value" property="editor" class="mini-spinner"  minValue="0" maxValue="10000" value="10" style="width:100%;"/>
            </div>

            <div field="describe" width="150" headerAlign="center" allowSort="true">描述
                <input name="describe" property="editor" class="mini-textarea mini-textbox" style="width:200px;" minWidth="200" minHeight="50"/>
            </div>
            <div field="sellout" width="100"  allowSort="true" >售卖
                <input name="sellout" property="editor" class="mini-spinner"  minValue="0" maxValue="1000000" value="10" style="width:100%;"/>
            </div>
            <div field="price" width="100"  allowSort="true" >购买
                <input name="price" property="editor" class="mini-spinner"  minValue="0" maxValue="1000000" value="10" style="width:100%;"/>
            </div>
            <!--ComboBox：本地数据-->         
            <div type="comboboxcolumn" autoShowPopup="true" name="selltype" field="selltype" width="100"  allowSort="true"  align="center" headerAlign="center">类型
                <input property="editor" class="mini-combobox" style="width:100%;" data="Selltypes" />                
            </div>
            <div type="comboboxcolumn" autoShowPopup="true" name="type" field="type" width="100"  allowSort="true"  align="center" headerAlign="center">状态
                <input property="editor" class="mini-combobox" style="width:100%;" data="Types" />                
            </div>     
        </div>
    </div>

    </body>
</html>
    <script type="text/javascript">
        var Selltypes = [{ id: 1, text: '不售' },{ id: 2, text: '金币' }, { id: 3, text: '灵石'}];
        var Types = [{ id: 1, text: '可用' }, { id: 2, text: '不可用'}];
        
        mini.parse();

        var grid = mini.get("datagrid1");
        grid.load();
        

        //////////////////////////////////////////////////////
        // 查询
        $("#using").change(function(){
            search();
        });
        // 查询
        $("#gooduse").change(function(){
            search();
        });

        function search() {
            var key = mini.get("key").getValue();
            var type = $("#using").val();
            var gooduse = $("#gooduse").val();
            grid.load({ key: key,type: type ,gooduse: gooduse  });
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
            //随机生成并添加生物
            $.ajax({
            url: "/admin/goods-store/add",
            data: { wordId: 1 },
            type: "post",
            success: function (data) {
                // 刷新
                grid.load();
                // var newRow = { name: "未知生物",biology: 1,state: 1,power: roundNum(1,70),agile:roundNum(1,70),intelligence: roundNum(1,70),wuXing:roundNum(5,30),skill: "",wordId: 1 ,descript: "",sex: 1,yiXing: 0};
                // grid.addRow(newRow, 0);
                // grid.beginEditCell(newRow, "name");
                }  
            });

        }
        function removeRow() {
            var rows = grid.getSelecteds();
            var json = mini.encode(rows);
            // console.log(json);
            if (rows.length > 0) {

                mini.confirm("确定删除记录？", "确定？",function (action) {
                    if (action == "ok") {
                        $.ajax({
                        url: "/admin/goods-store/biology-delete",
                        data: { data: json },
                        type: "post",
                        success: function (text) {
                            // 移除列
                            grid.removeRows(rows, true);
                            }  
                        });
                    }   
                });
                // if (confirm("删除不可恢复，是否继续本次操作？")) {
                //     $.ajax({
                //     url: "/admin/goods-store/biology-delete",
                //     data: { data: json },
                //     type: "post",
                //     success: function (text) {
                //         // 移除列
                //         grid.removeRows(rows, true);
                //         }  
                //     });
                // }
            }
        }
        //保存和修改
        function saveData() {            
            var data = grid.getChanges();
            var json = mini.encode(data);
            grid.loading("保存中，请稍后......");
            $.ajax({
                url: "/admin/goods-store/biology-add",
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
            console.log(row);
            if (row) {
                mini.open({
                    url: "/admin/goods-store/employee-window",
                    title: "物品详情", width: 800, height: 480,
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

