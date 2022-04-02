
function del1() {
    //询问框
    layer.msg('删除成功', {icon: 1},function(){
        // self.location.reload();
    }
);

}

function del2() {
    //询问框
    layer.confirm('是否删除数据？', {
        skin: 'layui-layer-molv', //样式类名
        shift: 6, //动画类型
        title: '删除提示', //不显示标题
        btn: ['确定','取消'] //按钮
    }, function(){
        $.ajax({
            url : '/cn/api/examuser',
            type : 'post',
            data: $.param({'id':id})+'&'+form,
            dataType : 'json',
            success : function ($data) {
              if ($data == true) {
                layer.msg('删除成功', {icon: 1});
              }else{
                layer.msg('删除失败', {icon: 1});
              }
            }
        });
    });
}


//iframe层-修改
function update1() {
layer.open({
    type: 2,
    area: ['700px', '450px'],
    fixed: false, //不固定
    maxmin: true,
    content: '/admin/admin/admin-update'
  });
    // layer.full(index);
}

// layer.open({
//     type: 2,
//     title: "弹出层标题",
//     area: '800px',
//     shadeClose: true,
//     btn: ['确定', '取消'],
//     success: function(layero, index){
//         layer.iframeAuto(index)
//     },
//     content: 'xxx'
// });