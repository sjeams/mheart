DeptSelect = function () {
    
    DeptSelect.superclass.constructor.call(this);

}

mini.extend(DeptSelect, mini.PopupEdit, {
    url: "",

    popupWidth: 300,
    popupHeight: 200,

    uiCls: "my-deptselect",
    _createPopup: function () {
        
        DeptSelect.superclass._createPopup.call(this);

        this.popup.set({
            allowResize: true,
            controls: [
                { name: "depttree", type: "depttree", width: "100%", height: "100%", borderStyle: "border:0" }
            ]
        });

        this.depttree = mini.getbyName("depttree", this.popup);        
    },
    setUrl: function (value) {
        this.url = value;
        this.depttree.setUrl(value);
    },
    getAttrs: function (el) {

        var attrs = DeptSelect.superclass.getAttrs.call(this, el);


        mini._ParseString(el, attrs,
            [
                "url"]
        );
        return attrs;
    }
});
mini.regClass(DeptSelect, "deptselect");