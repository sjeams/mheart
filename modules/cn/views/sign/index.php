 
                <!-- 表单 -->
                <form class="layui-form layui-form-pane" action="">
                  <div class="layui-form-item">
                        <div class="layui-inline">
                            <label class="layui-form-label">姓名</label>
                            <div class="layui-input-inline">
                                <input type="text" name="number" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                        <div class="layui-inline">
                            <label class="layui-form-label">联系方式</label>
                            <div class="layui-input-inline">
                                <input type="text" name="number" autocomplete="off" class="layui-input">
                            </div>
                        </div>
 
                        <div class="layui-inline">
                            <label class="layui-form-label">贷款金额</label>
                            <div class="layui-input-inline">
                                <input type="text" name="number" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                        <div class="layui-inline">
                            <label class="layui-form-label">贷款用途</label>
                            <div class="layui-input-inline">
                                <input type="text" name="number" autocomplete="off" class="layui-input">
                            </div>
                        </div>
                        <div class="layui-inline">
                            <label class="layui-form-label">性别</label>
                            <div class="layui-input-inline">
                                <input type="radio" name="sex" value="男" title="男" checked="">
                                <input type="radio" name="sex" value="女" title="女">
                                <!-- <input type="radio" name="sex" value="禁" title="禁用" disabled=""> -->
                            </div>
                        </div>
                        <div class="layui-inline">
                              <label class="layui-form-label">身份证</label>
                              <div class="layui-input-inline">
                                  <input type="text" name="number" autocomplete="off" class="layui-input">
                              </div>
                        </div>
                    

                        <div class="layui-inline">
                            <label class="layui-form-label">可选银行</label>
                            <div class="layui-input-inline">
                                <select name="interest" lay-filter="aihao">
                                    <option value="" selected=""></option>
                                    <option value="0" >平安银行</option>
                                    <option value="1" >成都银行</option>
                                    <option value="2">天誉银行</option>
                                    <option value="3">中国招商银行</option>
                                </select>
                            </div>
                        </div>
                    
                        <div class="layui-inline">
                            <label class="layui-form-label">贷款方式</label>
                            <div class="layui-input-inline">
                                <select name="interest" lay-filter="aihao">
                                    <option value="" selected=""></option>
                                    <option value="0" >个人住房消费贷款</option>
                                    <option value="1" >个人薪资保障贷款</option>
                                    <option value="2">个人助业贷款</option>
                                    <option value="3">个人综合授信贷款</option>
                                    <option value="4">个人汽车贷款</option>
                                    <option value="5">个人房屋抵押贷款</option>
                                    <option value="6">信用保证保险贷款</option>
                                </select>
                            </div>
                        </div>
 
                    <div class="layui-form-item layui-form-text">
                        <!-- <label class="layui-form-label">备注</label>
                        <div class="layui-input-block">
                            <textarea placeholder="请输入内容" class="layui-textarea"></textarea>
                        </div> -->
                    </div>
                    <div class="layui-form-item">
                        <button class="layui-btn" lay-submit="" lay-filter="demo2">提交审核</button>
                    </div>
                  </form>

            