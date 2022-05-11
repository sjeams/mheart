<div title="north" region="north" class="app-header" bodyStyle="overflow:hidden;" height="80" showHeader="false" showSplit="false">
<div class="logo">Monster</div>
 <!-- <a class="mini-button" iconCls="fa-home">首页</a> -->
    <div class="topNav">    
        皮肤：
        <select id="selectSkin" onchange="onSkinChange(this.value)" style="width:100px;margin-right:10px;" >
            <optgroup label="传统风格">
                <option value="default">default</option>
                <option value="blue">blue</option>
                <option value="pure">pure</option>
                <option value="gray">gray</option>                
                <option value="olive2003">olive2003</option>
                <option value="blue2003" >blue2003</option>
                <option value="blue2010" >blue2010</option>
                <option value="bootstrap">bootstrap</option>   
                <option value="jqueryui-cupertino">jqueryui-cupertino</option>
                <option value="jqueryui-smoothness">jqueryui-smoothness</option>                                     
            </optgroup>
            <optgroup label="扁平风格">
                <option value="cupertino" selected>cupertino</option>
                <option value="metro-white" >metro-white</option>
                <option value="metro-green">metro-green</option>
                <option value="metro-orange">metro-orange</option>
                <option value="metro-gray">metro-gray</option>
                <option value="metro-blue">metro-blue</option>                    
            </optgroup>
        </select>
        尺寸：
        <select id="selectMode" onchange="onModeChange(this.value)" style="width:100px;" >
            <option value="default">Default</option>
            <option value="medium" selected >Medium</option>
            <option value="large">Large</option>                
        </select>
    </div>

    <div style="position:absolute;right:12px;bottom:8px;font-size:12px;line-height:25px;font-weight:normal;">
        <!-- <a class="dropdown-toggle userinfo">
            <img class="user-img" src="res/images/user.jpg" />个人资料<i class="fa fa-angle-down"></i>
        </a>
        <a href="#"><i class="fa fa-eye "></i> 用户信息</a> -->
        <a href="#"><i class="fa fa-user"></i> 退出登录</a>
        <!-- <a class="mini-button mini-button-iconTop" iconCls="icon-add" onclick="onQuickClick" plain="true">快捷</a>    
        <a class="mini-button mini-button-iconTop" iconCls="icon-edit" onclick="onClick"  plain="true" >首页</a>        
        <a class="mini-button mini-button-iconTop" iconCls="icon-date" onclick="onClick"  plain="true" >消息</a>        
        <a class="mini-button mini-button-iconTop" iconCls="icon-edit" onclick="onClick"  plain="true" >设置</a>        
        <a class="mini-button mini-button-iconTop" iconCls="icon-close" onclick="onClick"  plain="true" >关闭</a>   -->
        <!-- <a href="../index.html">首页</a> |
        <a href="../demo/index.html">在线示例</a> |
        <a href="../docs/api/index.html">Api手册</a> |            
        <a href="../index.html#tutorial">开发教程</a> |
        <a href="../index.html#quickstart">快速入门</a> -->
    </div>
</div>