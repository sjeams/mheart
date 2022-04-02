

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>menu</title>
    <link rel="stylesheet" href="/layuimini/lib/layui-v2.5.4/css/layui.css" media="all">
    <link rel="stylesheet" href="/layuimini/css/public.css" media="all">
    <style>
        .layui-btn:not(.layui-btn-lg ):not(.layui-btn-sm):not(.layui-btn-xs) {
            height: 34px;
            line-height: 34px;
            padding: 0 8px;
        }
    </style>
</head>
<body>
<div class="layuimini-container">
    <div class="layuimini-main">
        <div>
            <div class="layui-btn-group">
                <button class="layui-btn" id="btn-expand">全部展开</button>
                <button class="layui-btn" id="btn-fold">全部折叠</button>
                <button class="layui-btn layui-btn-normal" id="addIframe">添加</button>
                
            </div>
            <table id="munu-table" class="layui-table" lay-filter="munu-table"></table>
        </div>
    </div>
</div>
<!-- 操作列 -->
<script type="text/html" id="auth-state">
    <a class="layui-btn layui-btn-primary layui-btn-xs" lay-event="edit">修改</a>
    <a class="layui-btn layui-btn-danger layui-btn-xs" lay-event="del">删除</a>
</script>

<script src="/layuimini/lib/layui-v2.5.4/layui.js" charset="utf-8"></script>
<script src="/layuimini/js/lay-config.js?v=1.0.4" charset="utf-8"></script>
<!-- 公用弹窗 -->
<script src=" /layuimini/js/common/lay-alert.js "></script>  
<script src=" /layuimini/js/common/common-alert.js "></script>  
<script>
    layui.use(['table', 'treetable'], function () {
        var $ = layui.jquery;
        var table = layui.table;
        var treetable = layui.treetable;
        var renderTable =function(){
            // 渲染表格
            layer.load(2);
            treetable.render({
                treeColIndex: 1, //树形图标显示在第几列
                treeSpid: 1, //最上级的父级id
                treeIdName: 'id', //id字段的名称
                treePidName: 'parentId', //pid字段的名称
                treeDefaultClose: false,//是否默认折叠
                treeLinkage: false,//父级展开时是否自动展开所有子级
                even:true,  //开启间隔行变色
                elem: '#munu-table',
                url: '/admin/api/admin',
                // cellMinWidth: 80,
                page: false, // 是否开启分页：true/false，默认true
                // limit: 2,   //默认十条数据一页        我这里设置了两条每页
                // limits: [10, 20, 30, 50],  //数据分页条
                // where :data,
                cols: [[
                    {type: 'numbers'},
                    {field: 'title', minWidth: 200, title: '权限名称'},
                    {field: 'name', title: '权限标识'},
                    {field: 'icon', title: '权限标签'},
                    {field: 'href', title: '权限Url'},
                    // {field: 'orderNumber', width: 80, align: 'center', title: '排序号'},
                    {
                        field: 'isMenu', width: 80, align: 'center', templet: function (d) {
                            if (d.isMenu == 1) {
                                return '<span class="layui-badge layui-bg-gray">按钮</span>';
                            }
                            if (d.parentId == -1) {
                                return '<span class="layui-badge layui-bg-blue">目录</span>';
                            } else {
                                return '<span class="layui-badge-rim">菜单</span>';
                            }
                        }, title: '类型'
                    },
                    {templet: '#auth-state', width: 120, align: 'center', title: '操作'}
                ]],

                done: function () {
                    layer.closeAll('loading');
                }
            });
        }
        renderTable();
        $('#btn-expand').click(function () {
            treetable.expandAll('#munu-table');
        });

        $('#btn-fold').click(function () {
            treetable.foldAll('#munu-table');
        });

        //监听工具条
        table.on('tool(munu-table)', function (obj) {
            var data = obj.data;
            var layEvent = obj.event;

            if (layEvent === 'del') {
                del1();
                renderTable(); //刷新
                // layer.msg('删除' + data.id);
            } else if (layEvent === 'edit') {
                updateRander();  //修改弹窗
                // layer.msg('修改' + data.id);
            }
        });
    });

    var updateRander =function(){
    layer.open({
        type: 2,
        title: "修改",
        area: ['700px','650px'],
        fixed: true, //固定
        maxmin: true,
        content: '/admin/admin/admin-update',
        btnAlign: 'c', //按钮居中
        shadeClose: true,
        shade: 0.4,
        shift: 4,
        //打开效果：0-6 。0放大，1从上到下，2下到上，3左到右放大，4翻滚效果；5渐变；6抖窗口
        // btn: ['确定', '取消',],
        offset: 'top',  //居中
        yes: function(index,layero){
            // alert(111);
            var newsFrom = layer.getChildFrame('#newsFrom',index); 
            console.log(newsFrom);
            $.ajax({
                url : '/admin/admin/admin-updater',
                type : 'post',
                // data: $.param({'id':id})+'&'+form,
                // dataType : 'json',
                success : function (data) {
                if ($data == true) {
                    layer.msg('删除成功', {icon: 1});
                    layer.close(index);
                }else{
                    layer.msg('删除失败', {icon: 1});
                    layer.close(index);
                }
                }
            });
        }
    });

}

</script>


</body>
</html>