
OrderItemGrid = function () {

    OrderItemGrid.superclass.constructor.call(this);

}
mini.extend(OrderItemGrid, mini.Box, {
    width: 600,
    height: 250,

    url: "",
    orderID: "",

    addRow: function () {
        var newRow = {};
        this.grid.addRow(newRow, 0);
        this.grid.beginEditRow(newRow);
    },
    editRow: function (row_uid) {
        var grid = this.grid;
        var row = grid.getRowByUID(row_uid);
        if (row) {
            grid.cancelEdit();
            grid.beginEditRow(row);
        }
    },
    removeRow: function (row_uid) {
        var grid = this.grid;
        var row = grid.getRowByUID(row_uid);
        if (row) {
            grid.removeRow(row);

        }
    },
    getDefaultColumns: function () {
        var uid = this.uid;

        var me = this;
        var columns = [
            { type: "indexcolumn", header: "序号", width: 40 },
            { field: "name", header: "批次号", width: "100%",
                editor: {
                    type: "textbox", style: "width:100%"
                }
            },
            { field: "state", header: "状态" },
            { name: "action", header: "",
                renderer: function (e) {
                    var grid = e.sender;
                    var html = "";
                    var rowUID = e.record._uid;
                    if (e.rowIndex < 3) {
                        html = "";
                    } else {
                        html = '<a href="javascript:mini.getbyUID(\'' + uid + '\').addRow(\'' + rowUID + '\')">Add</a> '
                                + '<a href="javascript:mini.getbyUID(\'' + uid + '\').editRow(\'' + rowUID + '\')">Edit</a> '
                                + '<a href="javascript:mini.getbyUID(\'' + uid + '\').removeRow(\'' + rowUID + '\')">Remove</a> ';
                    }
                    return html;
                }
            }
        ];

        return columns;
    },

    uiCls: "uc-orderitemgrid",
    _create: function () {
        OrderItemGrid.superclass._create.call(this);

        this.setControls([
            { type: "toolbar", borderStyle: "border-left:0;border-top:0;border-right:0;",
                controls: [
                    { type: 'button', text: '新增', plain: true, name: "add", iconCls: "icon-add" },
                    { type: 'button', text: '修改', plain: true, name: "edit", iconCls: "icon-edit" },
                    { name: "del", type: 'button', text: '删除', plain: true, iconCls: "icon-remove" }
                ]
            },
            { type: "fit",
                controls: [
                    { name: "grid", type: "datagrid", width: '100%', height: '100%', borderStyle: "border:0",
                        columns: this.getDefaultColumns()
                    }
                ]
            }
        ]);

        this.grid = mini.getbyName("grid", this);
        this.delBtn = mini.getbyName("del", this);
    },
    setUrl: function (value) {
        this.url = value;
        this.grid.setUrl(value);
    },
    updateState: function () {
        if (this.orderID == 1000) {
            //this.grid.hideColumn("action");
            this.delBtn.setVisible(false);
        } else {
            this.grid.showColumn("action");
            //this.delBtn.setVisible(true);
        }
    },
    setOrderID: function (value) {
        this.orderID = value;
        this.updateState();
    },
    load: function (args) {

        this.grid.load(args);
    },
    getAttrs: function (el) {

        var attrs = mini.DataGrid.superclass.getAttrs.call(this, el);


        mini._ParseString(el, attrs,
            [
                "url"]
        );
        return attrs;
    }

});
mini.regClass(OrderItemGrid, "orderitemgrid");