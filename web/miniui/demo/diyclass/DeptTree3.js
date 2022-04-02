//html从外部加载
DeptTree3 = function () {

    DeptTree3.superclass.constructor.call(this);

}
mini.extend(DeptTree3, mini.Box, {
    width: 300,
    height: 150,

    url: "",
    idField: "id",
    textField: "text",

    uiCls: "my-depttree3",
    _create: function () {
        DeptTree3.superclass._create.call(this);

        var html = getRemoteText(bootPATH + "../demo/diyclass/depttree3.tpl");
        this.setControls([html]);

        this.tree = mini.getbyName("tree", this);
    },
    setUrl: function (value) {
        this.url = value;
        this.tree.setUrl(value);
    },
    getAttrs: function (el) {
        var attrs = DeptTree3.superclass.getAttrs.call(this, el);
        mini._ParseString(el, attrs,
            [
                "url"]
        );
        return attrs;
    }

});
mini.regClass(DeptTree3, "depttree3");

getRemoteText = function (url, params, success, error, type) {
    var returnText = null;
    jQuery.ajax({
        url: url,
        data: params,
        async: false,
        type: type ? type : "get",
        cache: false,
        dataType: "text",
        success: function (text, http) {
            returnText = text;
            if (success) success(text, http);
        },
        error: error
    });
    return returnText;
}