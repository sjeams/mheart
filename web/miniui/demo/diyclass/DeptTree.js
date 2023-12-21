
DeptTree = function () {

    DeptTree.superclass.constructor.call(this);

}
mini.extend(DeptTree, mini.Box, {
    width: 300,
    height: 150,

    url: "",
    idField: "id",
    textField: "text",

    uiCls: "my-depttree",
    _create: function () {
        DeptTree.superclass._create.call(this);

        this.setControls([
            { type: "toolbar", borderStyle: "border-left:0;border-top:0;border-right:0;",
                controls: [
                        { type: 'button', text: '新增', plain: true, name: "add" },
                        { type: 'button', text: '修改', plain: true, name: "edit" },
                        { type: 'button', text: '删除', plain: true }
                    ]
            },
            { type: "fit",
                controls: [
                    { name: "tree", type: "tree", style: "width:100%;height:100%", showTreeIcon: true,
                        idField: this.idField, textField: this.textField, resultAsTree: false
                    }
                ]
            }
        ]);

        this.tree = mini.getbyName("tree", this);
        this.addBtn = mini.getbyName("add", this);
        this.editBtn = mini.getbyName("edit", this);

        /////////////////////////////////////////////
        var me = this;
        this.addBtn.on("click", function (e) {
            var tree = me.tree;
            var node = tree.getSelectedNode();
            var newNode = {};
            tree.addNode(newNode, "before", node);
        });
        this.editBtn.on("click", function (e) {
            var tree = me.tree;
            var node = tree.getSelectedNode();
            var json = mini.encode(node);
            alert(json);
        });
    },
    setUrl: function (value) {
        this.url = value;
        this.tree.setUrl(value);
    },
    getAttrs: function (el) {

        var attrs = DeptTree.superclass.getAttrs.call(this, el);


        mini._ParseString(el, attrs,
            [
                "url"]
        );
        return attrs;
    }

});
mini.regClass(DeptTree, "depttree");