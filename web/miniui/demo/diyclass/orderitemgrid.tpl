    <div style="width:700px;">
        <div class="mini-toolbar" style="border-bottom:0;padding:0px;">
            <table style="width:100%;">
                <tr>
                    <td style="width:100%;">
                        <a class="mini-button" iconCls="icon-add" onclick="addRow()" plain="true">增加</a>
                        <a class="mini-button" iconCls="icon-remove" onclick="removeRow()" plain="true">删除</a>
                        <span class="separator"></span>
                        <a class="mini-button" iconCls="icon-save" onclick="saveData()" plain="true">保存</a>            
                    </td>
                    <td style="white-space:nowrap;">
                        <input id="key" class="mini-textbox" emptyText="请输入姓名" style="width:150px;" onenter="onKeyEnter"/>   
                        <a class="mini-button" onclick="search()">查询</a>
                    </td>
                </tr>
            </table>           
        </div>
    </div>
    
    <div id="datagrid1" class="mini-datagrid" style="width:700px;height:280px;" 
        url="../data/AjaxService.php?method=SearchEmployees"  idField="id" allowResize="true"
        sizeList="[20,30,50,100]" pageSize="20"  
    >
        <div property="columns">
            <div type="indexcolumn" ></div>
            <div field="loginname" width="120" headerAlign="center" allowSort="true">员工帐号</div>    
            <div field="name" width="120" headerAlign="center" allowSort="true">姓名</div>                            
            <div field="gender" width="100" renderer="onGenderRenderer" align="center" headerAlign="center">性别</div>
            <div field="salary" width="100" allowSort="true">薪资</div>                                    
            <div field="age" width="100" allowSort="true">年龄</div>
            <div field="createtime" width="100" headerAlign="center" dateFormat="yyyy-MM-dd" allowSort="true">创建日期</div>                
        </div>
    </div>  