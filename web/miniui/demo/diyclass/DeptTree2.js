
DeptTree2 = function () {

    DeptTree2.superclass.constructor.call(this);

}
mini.extend(DeptTree2, mini.Box, {
    width: 300,
    height: 150,

    url: "",
    idField: "id",
    textField: "text",

    uiCls: "my-depttree2",
    _create: function () {
        DeptTree2.superclass._create.call(this);

        var html =  '<div class="mini-toolbar" borderStyle="border-left:0;border-top:0;border-right:0;">'
                        + '<a class="mini-button">新增</a> <a class="mini-button">修改</a> <a class="mini-button">删除</a>'
                    + '</div>'
                    + '<div class="mini-fit">'
                            + '<div name="tree" class="mini-tree"  style="width:100%;height:100%" showTreeIcon="true" resultAsTree="false"></div>'
                    + '</div>';
        this.setControls([html]);

        this.tree = mini.getbyName("tree", this);
    },
    setUrl: function (value) {
        this.url = value;
        this.tree.setUrl(value);
    },
    getAttrs: function (el) {
        var attrs = DeptTree2.superclass.getAttrs.call(this, el);
        mini._ParseString(el, attrs,
            [
                "url"]
        );
        return attrs;
    }

});
mini.regClass(DeptTree2, "depttree2");