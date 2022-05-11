<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<html xmlns="http://www.w3.org/1999/xhtml">
<head>
    <title>召唤师后台模板</title>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8" />
    <meta name="keywords" content="jquery,datagrid,grid,表格控件,ajax,web开发,java开发,.net开发,tree,table,treegrid" />
    <meta name="description" content="jQuery MiniUI - 专业WebUI控件库。jQuery MiniUI是使用Javascript实现的前端Ajax组件库，支持所有浏览器，可以跨平台开发，如Java、.Net、PHP等。" />
   
    <link rel="stylesheet" href="/miniui/demo/index.css" media="all">
    <script src="/miniui/scripts/boot.js" type="text/javascript"></script>
    <script src="/miniui/scripts/miniui/miniui.js" type="text/javascript"></script>
    <script src="/miniui/scripts/jquery.min.js" type="text/javascript"></script>

    <script src="/miniui/demo/core.js" type="text/javascript"></script>

</head>
<body>
<div class="mini-layout" style="width:100%;height:100%;">
    <?php use app\commands\background\NavWidget;?>
    <?php NavWidget::begin(['data' => Yii::$app->controller->module->id]);?>
    <?php NavWidget::end();?>
    <div showHeader="false" region="south" style="border:0;text-align:center;" height="25" showSplit="false">
        Copyright © monster召唤师后台模板
    </div>
    <?php use app\commands\background\LeftWidget;?>
    <?php LeftWidget::begin(['controller' => Yii::$app->controller->id,'module' => Yii::$app->controller->module->id]);?>
    <?php LeftWidget::end();?>
    <?php echo $content ?>
</div>
</body>
</html>
<script type="text/javascript">
        mini.parse();

        var tree = mini.get("leftTree");

        function showTab(node) {
            var tabs = mini.get("mainTabs");

            var id = "tab$" + node.id;
            var tab = tabs.getTab(id);
            if (!tab) {
                tab = {};
                tab._nodeid = node.id;
                tab.name = id;
                tab.title = node.text;
                tab.showCloseButton = true;
                //这里拼接了url，实际项目，应该从后台直接获得完整的url地址
                // tab.url = mini_JSPath + "../../docs/api/" + node.id + ".html";
                // tab.url = "/admin/index/index";
                //获取模板数据
                // console.log(node);
                tab.url = node.url;
                tabs.addTab(tab);
            }
            tabs.activeTab(tab);
        }

        function onNodeSelect(e) {
            var node = e.node;
            var isLeaf = e.isLeaf;

            if (isLeaf) {
                showTab(node);
            }
        }

        // function onClick(e) {
        //     var text = this.getText();
        //     alert(text);
        // }
        function onQuickClick(e) {
            tree.expandPath("datagrid");
            tree.selectNode("datagrid");
        }

        function onTabsActiveChanged(e) {
            var tabs = e.sender;
            var tab = tabs.getActiveTab();
            if (tab && tab._nodeid) {
                
                var node = tree.getNode(tab._nodeid);
                if (node && !tree.isSelectedNode(node)) {
                    tree.selectNode(node);
                }
            }
        }
        
    </script>


<script src="/miniui/scripts/tongji.js" type="text/javascript"></script>