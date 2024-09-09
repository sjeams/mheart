<link rel="stylesheet" href="/cn/css/login.css"/>
<script type="text/javascript" src="/cn/js/login.js"></script>
<?php
    $success_content = Yii::$app->session->get('success_content');
    $loginOut = Yii::$app->session->get('loginOut');
    if($success_content){
        echo $success_content;
        Yii::$app->session->remove('success_content');
    }
    if($loginOut){
        echo $loginOut;
        Yii::$app->session->remove('loginOut');
    }
?>
<div class="head_logo">
    <?php
        if(!$userId) {
            ?>
            <div class="logo_div">
                <img src="/cn/images/TF_logo.png" alt="logo图标" width="200"/>

                <div>
                    <a onclick="userLogin()" href="javascript:void(0);">登录</a> | <a onclick="userRegister()" href="javascript:void(0);">注册</a><br>
<!--                    <span>全国咨询热线：</span><span class="logo_orange">400-1816-180</span>-->
                    <span>加入小申托福备考群：<span class="logo_orange">314584547</span></span>
                </div>
            </div>
        <?php
        }else {
            ?>
            <div class="logo_div">
                <img src="/cn/images/TF_logo.png" alt="logo图标" width="200"/>
                <div>
                    <div class="leftPhone">
                        <a href="#">&nbsp;</a><br>
<!--                        <span>全国咨询热线：</span><span class="logo_orange">400-1816-180</span>-->
                        <span>加入小申托福备考群：<span class="logo_orange">314584547</span></span>
                    </div>
                    <!--登录之后的显示样式-->
                    <div class="loginAfter">
                        <img class="navImage" src="<?php echo $userData['image']?$userData['image']:'/cn/images/details_defaultImg.png'?>" alt="用户头像" height="25"/>
                        <span class="navNickname"><?php echo $userData['nickname']?$userData['nickname']:$userData['userName']?></span>
                        <img src="/cn/images/peson_rightb.png" alt="箭头" class="jianT"/>
                        <ul>
                            <li>
                                <img src="/cn/images/afterLogin_icon01.png" alt="小图标"/>
                                <span><a href="/user/course.html">我的课程</a></span>
                            </li>
                            <li>
                                <div> <img src="/cn/images/afterLogin_icon10.png" alt="小图标"/></div>
                                <span><a href="/shopping-cart.html">我的购物车</a></span>
                            </li>
                            <li>
                                <div><img src="/cn/images/afterLogin_icon11.png" alt="小图标"/></div>
                                <span><a href="/order.html">我的订单</a></span>
                            </li>
                            <li>
                                <div> <img src="/cn/images/afterLogin_icon02.png" alt="小图标"/></div>
                                <span><a href="/user/listen.html">听力记录</a></span>
                            </li>
                            <li>
                                <div><img src="/cn/images/afterLogin_icon09.png" alt="小图标"/></div>
                                <span><a href="/user/speaking.html">口语记录</a></span>
                            </li>
                            <li>
                                <div><img src="/cn/images/afterLogin_icon03.png" alt="小图标"/></div>
                                <span><a href="/user/exam.html">模考记录</a></span>
                            </li>
                            <li>
                                <img src="/cn/images/afterLogin_icon04.png" alt="小图标"/>
                                <span><a href="/user/vocab.html">生词本</a></span>
                            </li>
                            <li>
                                <div><img src="/cn/images/afterLogin_icon05.png" alt="小图标"/></div>
                                <span><a href="/user/collect.html">收藏记录</a></span>
                            </li>
                            <li>
                                <img src="/cn/images/afterLogin_icon06.png" alt="小图标"/>
                                <span><a href="/user/integral.html">雷豆管理</a></span>
                            </li>
                            <li>
                                <div><img src="/cn/images/afterLogin_icon07.png" alt="小图标"/></div>
                                <span><a href="/user/manage.html">账号管理</a></span>
                            </li>
                            <li>
                                <div><img src="/cn/images/afterLogin_icon08.png" alt="小图标"/></div>
                                <span data-title="<?php echo Yii::$app->controller->action->id?>" data-value="<?php echo Yii::$app->controller->id?>" onclick="loginOut(this)">退出</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        <?php
        }
    ?>
</div>
<div class="head_nav">
    <div class="nav_div">
        <ul>
            <li <?php echo $controller=='index'?'class="on"':''?>><a href="/listen.html">首页</a></li>
            <li <?php echo $controller=='heard'?'class="on"':''?>>
                <a href="/listen/practise.html">听力练习 <i class="fa fa-caret-down"></i></a>
                <div>
                    <ul>
                        <li><a href="/listen/practise.html#userId">做题</a></li>
                        <li><a href="/listening/4447.html">精听</a></li>
                    </ul>
                </div>
            </li>
         
            <li <?php echo $controller=='spoken'?'class="on"':''?>><a href="/speaking.html">口语练习 <!--<img src="/cn/images/TF_kaifazhong.png" alt="开发中图标"/>--></a></li>
            <li <?php echo $controller=='test'?'class="on"':''?>><a target="_blank" href="/tpoExam.html">TPO模考</a></li>
            <li <?php echo $controller=='class'?'class="on"':''?>><a href="/toeflcourses.html">托福课程</a></li>
            <li <?php echo $controller=='news'?'class="on"':''?>><a href="/toeflnews.html">托福备考</a></li>
            <li <?php echo $controller=='teacher'?'class="on"':''?>><a href="/teacher.html">托福名师</a></li>
        </ul>
        <!--<div class="otherLogin">
            <input type="text"/>
            <span>用社交账号直接登录：</span>
            <img src="/cn/images/TFother_login.png" alt=""/>
        </div>-->
    </div>
</div>
<div class="maskLayer" style="display: none;"></div>
<!------------------登录框-------------------------->
<div class="Dialog login" style="display: none;">
    <!--关闭div-->
    <div class="login-close" onclick="closeLogin(this)">
        <img src="/cn/images/login_close.png" alt="关闭图标"/>
    </div>
    <div class="imgTitle">
        <img src="/cn/images/login_logo.png" alt="log图标"/>
    </div>
    <div class="group-input">
        <div>
            <input type="text" class="userName" placeholder="手机号/邮箱/用户名" onblur="notNull(this)" onkeydown="javascript: logEnterPress(event);"/>
            <p>用户名不能为空！</p>
        </div>
        <div>
            <input type="password" placeholder="请输入密码" class="userPass inputMT" onblur="verifyCode(this)" onkeydown="javascript: logEnterPress(event);"/>
            <p>密码不能为空！</p>
        </div>
        <div>
            <input type="text" placeholder="请输入验证码" class="loginCode userYZM inputMT" onblur="notNull(this)" onkeydown="javascript: logEnterPress(event);"/>
            <a href="javascript:;" class="yzmImg"><img title="点击刷新" src="/cn/api/verification-code" align="absbottom" onclick="this.src='/cn/api/verification-code?'+Math.random();"/></a>
            <div style="clear: both"></div>
            <p>验证码不能为空！</p>
        </div>
        <input onclick="subLogin()" type="button" value="登录" class="inputMT"/>
    </div>
    <div class="otherCont">
        <a href="javascript:void(0);" onclick="RegisterNow(this)">立即注册</a>
        <a href="javascript:void(0);" class="floatR" onclick="forgetPassword(this)">忘记密码？</a>
    </div>
<!--    <div class="other-login">-->
<!--        <span>还可以选择QQ登录</span>-->
<!--        <img src="/cn/images/login_qq.png" alt="qq登录"/>-->
<!--    </div>-->
</div>
<!------------------注册框-------------------------->
<div class="Dialog register DiaNone topPos">
    <!--关闭div-->
    <div class="login-close" onclick="closeLogin(this)">
        <img src="/cn/images/login_close.png" alt="关闭图标"/>
    </div>
    <div class="imgTitle">
        <img src="/cn/images/login_logo.png" alt="log图标"/>
    </div>
    <div class="group-input groupBanner">
        <div class="groupHd hd">
            <ul>
                <li class="on"><span>使用手机注册</span></li>
                <li><span>使用邮箱注册</span></li>
            </ul>
        </div>
        <div style="clear: both"></div>
        <div class="groupBd">
            <ul>
                <li>
                    <div>
                        <input type="text" class="phone" placeholder="手机号" onblur="verifyPhone(this)"/>
                        <p>手机号不能为空！</p>
                    </div>
                    <div>
                        <input type="text" placeholder="请输入验证码" class="phoneCode authCode" onblur="notNull(this)"/>
                        <input type="button" data-value="1" value="获取验证码" class="obtain" onclick="countdown(this,60)"/>
                        <p>验证码不能为空！</p>
                    </div>
                    <div>
                        <input type="text" class="phoneName" placeholder="用户名" onblur="verifyUserName(this)"/>
                        <p>用户名不能为空！</p>
                    </div>
                    <div>
                        <input type="password" placeholder="请输入密码" class="phonePass inputMT" onblur="verifyCode(this)"/>
                        <p>密码不能为空！</p>
                    </div>
                    <input onclick="phoneRegister()" type="button" value="注册" class="inputMT"/>
                </li>
            </ul>
            <ul>
                <li>
                    <div>
                        <input type="text" class="email" placeholder="邮箱" onblur="verifyEmail(this)"/>
                        <p>邮箱不能为空！</p>
                    </div>
                    <div>
                        <input type="text" placeholder="请输入验证码" class="emailCode authCode" onblur="notNull(this)"/>
                        <input type="button" data-value="2" value="获取验证码" class="obtain" onclick="countdown(this,60)"/>
                        <p>验证码不能为空！</p>
                    </div>
                    <div>
                        <input type="text" class="emailName" placeholder="用户名" onblur="verifyUserName(this)"/>
                        <p>用户名不能为空！</p>
                    </div>
                    <div>
                        <input type="password" placeholder="请输入密码" class="emailPass inputMT" onblur="verifyCode(this)"/>
                        <p>密码不能为空！</p>
                    </div>
                    <input type="button" onclick="emailRegister()" value="注册" class="inputMT"/>
                </li>
            </ul>
        </div>
    </div>
    <script type="text/javascript">
        jQuery(".groupBanner").slide({mainCell:".groupBd",trigger:"mouseover"});
    </script>
    <div class="otherCont conMB">
        <span>已有账号？</span>
        <a href="javascript:void(0);" onclick="reLogin(this)">登录到小申托福</a>
    </div>
</div>
<!-------------------找回密码框------------------>
<div class="Dialog DiaNone topPos">
    <!--关闭div-->
    <div class="login-close" onclick="closeLogin(this)">
        <img src="/cn/images/login_close.png" alt="关闭图标"/>
    </div>
    <div class="imgTitle">
        <img src="/cn/images/login_logo.png" alt="log图标"/>
    </div>
    <div class="group-input groupBanner02">
        <div class="groupHd hd">
            <ul>
                <li class="on"><span>使用手机找回密码</span></li>
                <li><span>使用邮箱找回密码</span></li>
            </ul>
        </div>
        <div style="clear: both"></div>
        <div class="groupBd">
            <ul>
                <li>
                    <div>
                        <input type="text" class="findPhone" placeholder="请输入你的手机号" onblur="verifyPhone(this)"/>
                        <p>手机号不能为空！</p>
                    </div>
                    <div>
                        <input type="text" placeholder="请输入验证码" class="findPhoneCode authCode" onblur="notNull(this)"/>
                        <input type="button" data-value="1" value="获取验证码" class="obtain" onclick="countdown(this,60)"/>
                        <p>验证码不能为空！</p>
                    </div>
                    <div>
                        <input type="password" placeholder="请输入新密码" class="findPhonePass inputMT" onblur="verifyCode(this)"/>
                        <p>密码不能为空！</p>
                    </div>
                    <input type="button" onclick="findPhone()" value="保存" class="inputMT"/>
                </li>
            </ul>
            <ul>
                <li>
                    <div>
                        <input type="text" class="findEmail" placeholder="请输入你的邮箱" onblur="verifyEmail(this)"/>
                        <p>邮箱不能为空！</p>
                    </div>
                    <div>
                        <input type="text" placeholder="请输入验证码" class="findEmailCode authCode" onblur="notNull(this)"/>
                        <input type="button" data-value="2" value="获取验证码" class="obtain" onclick="countdown(this,60)"/>
                        <p>验证码不能为空！</p>
                    </div>
                    <div>
                        <input type="password" placeholder="请输入新密码" class="findEmailPass inputMT" onblur="verifyCode(this)"/>
                        <p>密码不能为空！</p>
                    </div>
                    <input type="button" onclick="findEmail()" value="保存" class="inputMT"/>
                </li>
            </ul>
        </div>
    </div>
    <script type="text/javascript">
        jQuery(".groupBanner02").slide({mainCell:".groupBd",trigger:"mouseover"});
    </script>
    <div class="otherCont conMB">
        <a href="javascript:void(0);" class="findChange" onclick="reLoginThink(this)">又想起来了</a>
    </div>
</div>

<!---------------------------------------右边固定部分qq、微信、电话---------------------------------------------------->
<div class="consult" onclick="showFixed(this)">咨询</div>
<div id="fixed_div">
    <div class="fixed_close" onclick="closeFixed(this)"><img src="/cn/images/index_jiantouF.png" alt="箭头图标" width="40"></div>
    <a target=blank href=tencent://message/?uin=2649471578&Site=www.cnclcy&Menu=yes>
        <div class="fixed_div_img">
            <img src="/cn/images/public_qq.png" alt="qq图片"/>
            <p>QQ咨询</p>
        </div>
    </a>
    <div class="fixed_div_img fx_div_img_weixin">
        <img src="/cn/images/public_weixin.png" alt="微信图片"/>
        <p>微信咨询</p>
        <div class="img01">
            <div>
                <img src="/cn/images/right_erweima_img.jpg" alt="二维码" width="90px"/>
            </div>
        </div>
    </div>
    <div class="fixed_div_img fx_div_img_phone">
        <img src="/cn/images/public_phone.png" alt="电话图片"/>
        <p>电话咨询</p>
        <div class="img02">
            <span>400-1816-180</span>
        </div>
    </div>
    <div class="fixed_div_img fx_div_img_top" style="padding-top: 12px;" onclick="window.scrollTo('0','0');">
        <img src="/cn/images/public_top.png" alt="回到顶部"  style="height: 35px;"/>
    </div>
</div>
<div class="builder"><i class="fa fa-pencil"></i>加入生词本<span></span></div>
<div class="borderGT">
    <i class="fa fa-close" onclick="closeTC(this)"></i>
    <h3 class="wordName">listen</h3>
    <p class="wordDetail">
        <span>英['lɪs(ə)n] 美['lɪsn]</span>
        <br><span>vi. 听，倾听；听从，听信</span>
        <br><span>n. 听，倾听</span>
    </p>
    <span>已添加</span>
</div>
<script type="text/javascript">
    /**
     * 登录框
     */
    function userLogin(){
//        $('.maskLayer').show();
//        $('.login').show();
        location.href="https://login.viplgw.cn/cn/index?source=2&url=<?php echo Yii::$app->request->hostInfo.Yii::$app->request->getUrl()?>"

    }
    /**
     * 注册框
     */
    function userRegister(){
        location.href="https://login.viplgw.cn/cn/index/register?source=2&url=<?php echo Yii::$app->request->hostInfo.Yii::$app->request->getUrl()?>"
    }

    /**
     * 用户登录
     */
    function subLogin(){
        var userPass = $('.userPass').val()
        var userName = $('.userName').val();
        var verificationCode = $('.loginCode').val();
        if(verificationCode == ""){
            $('.loginCode').parent().find("p").css("visibility","visible");
            return false;
        }
        if(userName == ""){
            $('.userName').next("p").css("visibility","visible").html("请输入用户名!");
            return false;
        }
        if(userPass == ""){
            $('.userPass').next("p").css("visibility","visible").html("请输入密码");
            return false;
        }
        $.post('/cn/api/check-login',{verificationCode:verificationCode,userPass:userPass,userName:userName},function(re){
            if(re.code == 1){
                window.location.reload()
            }else{
                alert(re.message);
            }
        },'json')
    }
    /**
     * 用户enter键登录
     * e
     */
    function logEnterPress(e) {
        if (e.keyCode == 13) {
            subLogin();
        }
    }
    /**
     * 用户注册
     * @returns {boolean}
     */
    function phoneRegister(){
        var phone = $('.phone').val()
        var code = $('.phoneCode').val()
        var phonePass = $('.phonePass').val()
        var userName = $('.phoneName').val()
        if(phone == ""){
            $('.phone').next("p").css("visibility","visible").html("请输入您的手机号!");
            return false;
        }
        if(code == ""){
            $('.phoneCode').next().next("p").css("visibility","visible").html("请输入手机验证码");
            return false;
        }
        if(phonePass == ""){
            $('.phonePass').next("p").css("visibility","visible").html("请输入您的注册密码");
            return false;
        }
        if(userName == ""){
            $('.phoneName').next("p").css("visibility","visible").html("请输入您的用户名");
            return false;
        }
        var reg = /^[a-zA-Z\d]\w{1,13}[a-zA-Z\d]$/;
        if(!reg.test(userName)){
            return false;
        }
        $.post('/cn/api/register',{userName:userName,type:1,registerStr:phone,code:code,pass:phonePass},function(re){
            if(re.code == 1){
                alert(re.message);
                $.post('/cn/api/check-login',{userPass:phonePass,userName:phone},function(re){
                    document.write()
                    window.location.reload()
                },'json')
            }else{
                alert(re.message);
            }
        },'json')
    }

    /**
     * 用户注册
     * @returns {boolean}
     */
    function emailRegister(){
        var email = $('.email').val()
        var code = $('.emailCode').val()
        var emailPass = $('.emailPass').val()
        var userName = $('.emailName').val()
        if(email == ""){
            $('.email').next("p").css("visibility","visible").html("请输入您的邮箱!");
            return false;
        }
        if(code == ""){
            $('.emailCode').next().next("p").css("visibility","visible").html("请输入邮箱验证码");
            return false;
        }
        if(emailPass == ""){
            $('.emailPass').next("p").css("visibility","visible").html("请输入您的注册密码");
            return false;
        }
        if(userName == ""){
            $('.emailName').next("p").css("visibility","visible").html("请输入您的用户名");
            return false;
        }
        var reg = /^[a-zA-Z\d]\w{1,13}[a-zA-Z\d]$/;
        if(!reg.test(userName)){
            return false;
        }
        $.post('/cn/api/register',{userName:userName,type:2,registerStr:email,code:code,pass:emailPass},function(re){
            if(re.code == 1){
                alert(re.message);
                $.post('/cn/api/check-login',{userPass:emailPass,userName:email},function(re){
                    window.location.reload()
                },'json')
            }else{
                alert(re.message);
            }
        },'json')
    }

    /**
     * 用户退出
     */
    function loginOut(_this){
        $.post('/cn/api/login-out',{},function(re){
            var controller = $(_this).attr('data-value');
            var action = $(_this).attr('data-title');
            if(controller == 'person'){
                window.location.href="/listen.html"
            }else{
                window.location.reload()
            }
        },'json')
    }

    /**
     * 邮箱找回密码
     * @returns {boolean}
     */
    function findEmail(){
        var findEmail = $('.findEmail').val()
        var findEmailCode = $('.findEmailCode').val()
        var findEmailPass = $('.findEmailPass').val()
        if(findEmail == ""){
            $('.findEmail').next("p").css("visibility","visible").html("请输入您的电话!");
            return false;
        }
        if(findEmailCode == ""){
            $('.findEmailCode').next().next("p").css("visibility","visible").html("请输入电话验证码");
            return false;
        }
        if(findEmailPass == ""){
            $('.findEmailPass').next("p").css("visibility","visible").html("请输入您的新密码");
            return false;
        }
        $.post('/cn/api/find-pass',{type:2,registerStr:findEmail,code:findEmailCode,pass:findEmailPass},function(re){
            if(re.code == 1){
                alert(re.message);
                $('.findChange').click();
            }else{
                alert(re.message);
            }
        },'json')
    }

    /**
     * 手机找回密码
     * @returns {boolean}
     */
    function findPhone(){
        var findPhone = $('.findPhone').val()
        var findPhoneCode = $('.findPhoneCode').val()
        var findPhonePass = $('.findPhonePass').val()
        if(findPhone == ""){
            $('.findPhone').next("p").css("visibility","visible").html("请输入您的电话!");
            return false;
        }
        if(findPhoneCode == ""){
            $('.findPhoneCode').next().next("p").css("visibility","visible").html("请输入电话验证码");
            return false;
        }
        if(findPhonePass == ""){
            $('.findPhonePass').next("p").css("visibility","visible").html("请输入您的新密码");
            return false;
        }
        $.post('/cn/api/find-pass',{type:1,registerStr:findPhone,code:findPhoneCode,pass:findPhonePass},function(re){
            if(re.code == 1){
                alert(re.message);
                $('.findChange').click();
            }else{
                alert(re.message);
            }
        },'json')
    }
</script>

