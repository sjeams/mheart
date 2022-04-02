<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>菜单管理</title>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    
    <script src="/miniui/scripts/boot.js" type="text/javascript"></script>
    <script src="/miniui/demo/CommonLibs/TreeSelectWindow.js" type="text/javascript"></script>   
    <script src="/miniui/scripts/miniui/miniui.js" type="text/javascript"></script>    

    <style type="text/css">
    html, body
    {        
        padding:0;
        margin:0;
        border:0;
        height:100%;
        overflow:hidden;
        font-family: cursive;
    }
    </style>
</head>
<body>    
     
    <form id="form1" method="post">
        <input name="id" class="mini-hidden" />
        <div style="padding-left:11px;padding-bottom:5px;">
            <table style="table-layout:fixed;">
                <tr>
                    <td >标题：</td>
                    <td >    
                        <input name="title" class="mini-textbox"  required="true"  emptyText="请输入标题"/> 
                    </td>
                    <td >模块：</td>
                    <td >    
                        <input name="name" class="mini-textbox" style="width:99%;" />
                    </td>
                </tr>    
                <tr>
                    <td >路径：</td>
                    <td colspan="3">    
                        <input name="url" class="mini-textarea" style="width:386px;" />
                    </td>
                </tr>   
                <tr>
                    <td >分类：</td>
                    <td colspan="3">    
                        <!-- <input name="url" class="mini-textarea" style="width:386px;" /> -->
                        <input name="pid" id="pid" class="mini-buttonedit" onbuttonclick="onButtonEdit"/>
                        <!-- <input id="btnEdit1" class="mini-buttonedit" onbuttonclick="onButtonEdit"/> (默认父级为0) -->
                    </td>
                </tr>   
                <tr>
                    <td >按钮</td>
                    <td colspan="3">    
                        <input name="update" class="mini-textarea" style="width:386px; height:80px" value='<input type="button" value="编辑节点" onclick="onEditNode()"/> <input type="button" value="删除节点" onclick="onRemoveNode()"/>' />
                    </td>
                </tr>  
                <tr>
                    <td >备注：</td>
                    <td colspan="3">    
                        <input name="remark" class="mini-textarea" style="width:386px;" />
                    </td>
                </tr>           
            </table>
        </div>


        <div style="text-align:center;padding:10px;">               
            <a class="mini-button" onclick="onOk" style="width:60px;margin-right:20px;">确定</a>       
            <a class="mini-button" onclick="onCancel" style="width:60px;">取消</a>       
        </div>        
    </form>
    <script type="text/javascript">
        mini.parse();


        var form = new mini.Form("form1");

        function SaveData() {
            var o = form.getData();            

            form.validate();
            if (form.isValid() == false) return;

            var json = mini.encode([o]);
            $.ajax({
                url: "/admin/api/meanu-add",
		        type: 'post',
                data: { data: json },
                cache: false,
                success: function (text) {
                    CloseWindow("save");
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    alert(jqXHR.responseText);
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
                    url: "/admin/api/meanu-findone",
                    type: "post",
                    data: { id: data.id },
                    cache: false,
                    success: function (text) {
                        var o = mini.decode(text);
                        console.log(o);
                        form.setData(o);
                        form.setChanged(false);
                        // onDeptChanged();
                        // mini.getbyName("title").setValue(o.title);
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
            // CloseWindow();
      
        }
        //////////////////////////////////
        function onDeptChanged(e) {
            var deptCombo = mini.getbyName("id");
            // console.log(deptCombo);
            var positionCombo = mini.getbyName("position");
            var dept_id = deptCombo.getValue();
            // console.log(dept_id);
            // positionCombo.load("../data/AjaxService.php?method=GetPositionsByDepartmenId&id=" + dept_id);
            positionCombo.setValue("");
        }



    </script>
    <!-- 弹出树 -->
    <script type="text/javascript">
        mini.parse();

        function onButtonEdit(e) {
            var buttonEdit = e.sender;
            
            var win = new TreeSelectWindow();
            win.set({
//                multiSelect: true,
//                showFolderCheckBox: true,
//                checkRecursive: true,                
                url: "/admin/api/meanu-tree",    
                title: "选择树形",
                width: 350,
                height: 320
            });
            
            win.show();

            //初始化数据
            win.setData(null, function (action) {
                if (action == "ok") {
                    //获取数据
                    var data = win.getData();
                    console.log(data);
                    if (data) {
                        buttonEdit.setValue(data.id);
                        buttonEdit.setText(data.text);
                        // buttonEdit.setText(data.pid);
                    }
                }
            });
        }
        
    </script>
</body>
</html>
