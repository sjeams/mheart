<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>layui</title>
    <meta name="renderer" content="webkit">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    <link rel="stylesheet" href="/layuimini/lib/layui-v2.5.4/css/layui.css" media="all">
    <link rel="stylesheet" href="/layuimini/css/public.css" media="all">
</head>
<body>
<div class="layuimini-container">
    <div class="layuimini-main">
        <form class="layui-form" action="" id ="newsFrom">
            <div class="layui-form-item">
                <label class="layui-form-label">单行输入框</label>
                <div class="layui-input-block">
                    <input type="text" name="title" lay-verify="title" autocomplete="off" placeholder="请输入标题" class="layui-input">
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label">验证必填项</label>
                <div class="layui-input-block">
                    <input type="text" name="username" lay-verify="required" lay-reqtext="用户名是必填项，岂能为空？" placeholder="请输入" autocomplete="off" class="layui-input">
                </div>
            </div>


            <div class="layui-form-item">
                <label class="layui-form-label">联动选择框</label>
                <div class="layui-input-inline">
                    <select name="quiz1">
                        <option value="">请选择省</option>
                        <option value="浙江" selected="">浙江省</option>
                        <option value="你的工号">江西省</option>
                        <option value="你最喜欢的老师">福建省</option>
                    </select>
                </div>
                <div class="layui-input-inline">
                    <select name="quiz2">
                        <option value="">请选择市</option>
                        <option value="杭州">杭州</option>
                        <option value="宁波" disabled="">宁波</option>
                        <option value="温州">温州</option>
                        <option value="温州">台州</option>
                        <option value="温州">绍兴</option>
                    </select>
                </div>
                <div class="layui-input-inline">
                    <select name="quiz3">
                        <option value="">请选择县/区</option>
                        <option value="西湖区">西湖区</option>
                        <option value="余杭区">余杭区</option>
                        <option value="拱墅区">临安市</option>
                    </select>
                </div>
                <div class="layui-form-mid layui-word-aux">此处只是演示联动排版，并未做联动交互</div>
            </div>

            <div class="layui-form-item">
                <label class="layui-form-label">复选框</label>
                <div class="layui-input-block">
                    <input type="checkbox" name="like[write]" title="写作">
                    <input type="checkbox" name="like[read]" title="阅读" checked="">
                    <input type="checkbox" name="like[game]" title="游戏">
                </div>
            </div>

            <div class="layui-form-item">
                <label class="layui-form-label">开关-默认开</label>
                <div class="layui-input-block">
                    <input type="checkbox" checked="" name="open" lay-skin="switch" lay-filter="switchTest" lay-text="ON|OFF">
                </div>
            </div>
            <div class="layui-form-item">
                <label class="layui-form-label">单选框</label>
                <div class="layui-input-block">
                    <input type="radio" name="sex" value="男" title="男" checked="">
                    <input type="radio" name="sex" value="女" title="女">
                    <input type="radio" name="sex" value="禁" title="禁用" disabled="">
                </div>
            </div>
            <div class="layui-form-item layui-form-text">
                <label class="layui-form-label">普通文本域</label>
                <div class="layui-input-block">
                    <textarea placeholder="请输入内容" class="layui-textarea"></textarea>
                </div>
            </div>
            <div class="layui-form-item">
                <div class="layui-input-block">
                    <button class="layui-btn" lay-submit="" lay-filter="demo1">立即提交</button>
                    <button type="reset" class="layui-btn layui-btn-danger">重置</button>
                    <button id="closeIframe" class="layui-btn layui-btn-primary ">取消</button>
                </div>
            </div>
        </form>

    </div>
</div>

<script src="/layuimini/lib/layui-v2.5.4/layui.js" charset="utf-8"></script>
<!-- 注意：如果你直接复制所有代码到本地，上述js路径需要改成你本地的 -->
<script>
    layui.use(['form', 'layedit', 'laydate'], function () {
        var form = layui.form
            , layer = layui.layer
            , layedit = layui.layedit
            , laydate = layui.laydate;

        //日期
        laydate.render({
            elem: '#date'
        });
        laydate.render({
            elem: '#date1'
        });

        //创建一个编辑器
        var editIndex = layedit.build('LAY_demo_editor');

        //自定义验证规则
        form.verify({
            title: function (value) {
                if (value.length < 5) {
                    return '标题至少得5个字符啊';
                }
            }
            , pass: [
                /^[\S]{6,12}$/
                , '密码必须6到12位，且不能出现空格'
            ]
            , content: function (value) {
                layedit.sync(editIndex);
            }
        });

        //监听指定开关
        form.on('switch(switchTest)', function (data) {
            layer.msg('开关checked：' + (this.checked ? 'true' : 'false'), {
                offset: '6px'
            });
            layer.tips('温馨提示：请注意开关状态的文字可以随意定义，而不仅仅是ON|OFF', data.othis)
        });

        //监听提交
        form.on('submit(demo1)', function (data) {
            // layer.alert(JSON.stringify(data.field), {
            //     title: '最终的提交信息'
            // })
            return data.field;
            // return false;
        });

        //表单初始赋值
        form.val('example', {
            "username": "贤心" // "name": "value"
            , "password": "123456"
            , "interest": 1
            , "like[write]": true //复选框选中状态
            , "close": true //开关状态
            , "sex": "女"
            , "desc": "我爱 layui"
        })


    });
    $('#closeIframe').click(function(){
        var index = parent.layer.getFrameIndex(window.name); //先得到当前iframe层的索引
        parent.layer.close(index); //再执行关闭

        // layer.closeAll('loading'); //关闭加载层
    })



</script>

</body>
</html>