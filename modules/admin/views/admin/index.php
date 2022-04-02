<!DOCTYPE >

<!-- <html xmlns="http://www.w3.org/1999/xhtml"> -->
<head>
    <title>PagerTree 树形分页表格</title>  
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    
</head>

<style> 
    /* 快速编辑                                                     */
    .edit-none{
        display:none;
    }
</style>

<body>
    <!-- mini-pagertree    page
    allowResize="false" expandOnLoad="false"  // 展开全部 
    allowDrag="true"  //   允许拖拽节点
    allowDrop="true" // 允许投放节点
    -->
    <!-- 任务名称：<input id="key"/><input type="button" value="查找" onclick="search()"/>
    <input type="button" value="收缩所有" onclick="collapseAll()" />
    <input type="button" value="展开所有" onclick="expandAll()" /> -->
<div>
        <a class="mini-button" iconCls="icon-add" onclick="add()" plain="true">增加</a>
        <span class="separator"></span>
        <a class="mini-button" iconCls="icon-remove" onclick="removeRow()" plain="true">取消修改</a>
        <span id="saveEdit" class="">
        <span class="separator"></span>
        <a class="mini-button" iconCls="icon-edit" onclick="saveEdit()" id="saveEdit" plain="true">快速编辑</a>  
        </span>   
        <span id="saveData" class="edit-none">
            <span class="separator"></span>
            <a class="mini-button" iconCls="icon-save" onclick="saveData()"  plain="true">保存全部</a>  
        </span>  
        <div style="float:left; " >
        <label >名称：</label>
        <input id="key" class="mini-textbox" style="width:150px;" onenter="onKeyEnter"/>
        <a class="mini-button" style="width:60px;" onclick="search()">查询</a> 
         <!-- <span>例如输入“审阅模块化代码”后点击按钮</span>   -->
        </div>

</div>
<div id="treegrid1" class="mini-treegrid" style="width:98%;height:95%" 
    url="/admin/api/admin" showTreeIcon="true"   
    treeColumn="taskname" idField="id" parentField="pid" resultAsTree="false" 
    allowResize="false" expandOnLoad="true"
    allowCellEdit="false" allowCellSelect="true"  frozenStartColumn="0" frozenEndColumn="1" 
    editNextOnEnterKey="true"
>
    <div property="columns"> 
        <!-- <div type="indexcolumn" ></div> -->
        <div field="id" width="40" headerAlign="center"  cellStyle="text-align:center;vertical-align:middle;" >id
            <!-- <input property="editor" class="mini-spinner"  minValue="0" maxValue="1000000" value="0" style="width:100%;"/> -->
        </div>
        <div name="taskname" field="title" width="240"  headerAlign="center"   >标题
            <input property="editor" class="mini-textbox" style="width:100%;" />
        </div>
        <!-- <div field="pid" width="60" align="right">工期
            <input property="editor" class="mini-spinner"  minValue="0" maxValue="1000000" value="0" style="width:100%;"/>
        </div> -->
        <div field="url" width="80"  headerAlign="center"  cellStyle="text-align:center;vertical-align:middle;" >url
             <input property="editor" class="mini-textbox" style="width:100%;" />
        </div> 
        <div field="pid" width="80"  headerAlign="center"  cellStyle="text-align:center;vertical-align:middle;" >pid
             <input property="editor" class="mini-textbox" style="width:100%;" />
        </div> 
        <div field="remark" width="80" headerAlign="center"  cellStyle="text-align:center;vertical-align:middle;" >备注
             <input property="editor" class="mini-textbox" style="width:100%;" />
        </div>
        <div field="update" width="80" headerAlign="center"  cellStyle="text-align:center;vertical-align:middle;"  >操作</div> 
        <!-- <input property="editor" class="mini-datepicker" style="width:100%;"/> -->
        <!-- <div field="edit"  width="60" headerAlign="center"  cellStyle="text-align:center;vertical-align:middle;" >  编辑标记 </div>       -->
        <!-- <div type="checkboxcolumn" field="edit" trueValue="1" falseValue="0" width="60" dateFormat="yyyy-MM-dd">关键任务    </div>                             -->
    </div>
</div>
</body>
</html>
<script type="text/javascript">
    mini.parse();
    var tree = mini.get("treegrid1");
    function search() {
        var key = mini.get("key").getValue();
        if (key == "") {
            
        } else {
            key = key.toLowerCase();

            //查找到节点
            var nodes = tree.findNodes(function (node) {
                var text = node.title ? node.title.toLowerCase() : "";
                if (text.indexOf(key) != -1) {
                    return true;
                }
            });

            //展开所有找到的节点
            for (var i = 0, l = nodes.length; i < l; i++) {
                var node = nodes[i];
                tree.expandPath(node);
            }
            
            //第一个节点选中并滚动到视图
            var firstNode = nodes[0];
            if (firstNode) {
                tree.selectNode(firstNode);    
                tree.scrollIntoView(firstNode);
            }
        }
    }
    function onKeyEnter(e) {
        search();
    }
</script>


   
<script type="text/javascript">
        
        function onAddBefore(e) {
            var tree = mini.get("treegrid1");
            var node = tree.getSelectedNode();

            var newNode = {};
            tree.addNode(newNode, "before", node);
        }
        function onAddAfter(e) {
            var tree = mini.get("treegrid1");
            var node = tree.getSelectedNode();

            var newNode = {};
            tree.addNode(newNode, "after", node);
        }
        function onAddNode(e) {
            var tree = mini.get("treegrid1");
            var node = tree.getSelectedNode();

            var newNode = {};
            // tree.addNode(newNode, "add", node);
            tree.addNode(newNode, "after", node);
        }
        //修改节点
        function onEditNode(e) {
            var tree = mini.get("treegrid1");
            var node = tree.getSelectedNode();
            if (node) {
                    mini.open({
                        url: "/admin/admin/meanu-add",
                        title: "编辑菜单", width: 480, height: 360,
                        onload: function () {
                            var iframe = this.getIFrameEl();
                            var data = { action: "edit", id: node.id };
                            iframe.contentWindow.SetData(data);
                            
                        },
                        ondestroy: function (action) {
                            tree.reload();
                            
                        }
                    });
            }
            // tree.beginEdit(node);
        }

        function add() {
            mini.open({
                url: "/admin/admin/meanu-add",
                title: "新增菜单", width: 480, height: 340,
                onload: function () {
                    var iframe = this.getIFrameEl();
                    var data = { action: "new"};
                    iframe.contentWindow.SetData(data);
                },
                ondestroy: function (action) {

                    tree.reload();
                }
            });
        }




        // 删除节点
        function onRemoveNode(e) {
            var tree = mini.get("treegrid1");
            var node = tree.getSelectedNode();
                if (node) {
                    $.ajax({
                        url: "/admin/api/meanu-delete",
                        data: node,
                        type: "post",
                        contentType:'application/x-www-form-urlencoded;charset=utf-8',
                        async : false,
                        dataType: "json",
                        success: function (data) {
                            // console.log(data);
                            if(!data){
                                alert('删除失败，请先删除子类！');
                            }else{
                                tree.reload();
                            }
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            alert('操作出错！');
                            tree.reload();
                        }
                    });
                // if (confirm("确定删除选中节点?")) {
                //     tree.removeNode(node);
                // }
            }
        }




        function onMoveNode(e) {
            var tree = mini.get("treegrid1");
            var node = tree.getSelectedNode();

            alert("moveNode");
        }

        // 取消修改  刷新树
        function   removeRow() {
            $('#saveEdit').removeClass('edit-none');
            $('#saveData').addClass('edit-none');
            tree. allowCellEdit=false;
            tree.reload();
        }
        //快速编辑
        function saveEdit() {
            var tree = mini.get("treegrid1");
            var data = tree.getData();
            $('#saveEdit').addClass('edit-none');
            $('#saveData').removeClass('edit-none');
            tree. allowCellEdit=true;
            // tree.reload();
        }


        //保存快速修改        
        function saveData() {
            var tree = mini.get("treegrid1");
            var data = tree.getData();
            // var data = tree.getChanges();
            var json = mini.encode(data,"utf-8");
            // var json = mini.decode(data,"utf-8");
            // var json =  JSON.stringify(json);
            // console.log(json);
            // alert("在线演示，不提供保存，下载开发包内有此功能。");
            tree.loading("保存中，请稍后......");
            $.ajax({
                url: "/admin/api/meanu-update",
                data: { data: json },
                type: "post",
                contentType:'application/x-www-form-urlencoded;charset=utf-8',
                async : false,
                dataType: "json",
                success: function (data) {
                    tree.reload();
                },
                error: function (jqXHR, textStatus, errorThrown) {
                    // alert('操作出错！');
                    tree.reload();
                }
            }); 
            $('#saveEdit').removeClass('edit-none');
            $('#saveData').addClass('edit-none');
            tree. allowCellEdit=false;
        }


        
    </script>

    