<?php
$uid = Yii::$app->session->get('uid');
$userData = Yii::$app->session->get('userData');
?>
<!DOCTYPE html>
<html>

<head>

    <!--阻止浏览器缓存-->
    <title>雷哥网LGW-留学·GMAT·GRE·SAT·托福·雅思-雷哥培训，不只是课程，更是解决方案，慧申科技旗下教育品牌</title>
    <meta http-equiv="pragma" content="no-cache">
    <meta http-equiv="Cache-Control" content="no-cache, must-revalidate">
    <meta http-equiv="expires" content="0">
    <meta http-equiv="Cache" content="no-cache">
    <!--禁止百度转码-->
    <meta http-equiv="Cache-Control" content="no-siteapp" />
    <!-- Basic Page Needs
     ================================================== -->
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <!-- 让IE浏览器用最高级内核渲染页面 还有用 Chrome 框架的页面用webkit 内核
    ================================================== -->
    <meta http-equiv="X-UA-Compatible" content="chrome=1,IE=edge">
    <!-- IOS6全屏 Chrome高版本全屏
    ================================================== -->
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="mobile-web-app-capable" content="yes">
    <!-- 让360双核浏览器用webkit内核渲染页面
      ================================================== -->
    <meta name="renderer" content="webkit">
    <meta name="keywords" content="雷哥网，GMAT考试，GMAT培训，GMAT网课、GRE考试，GRE培训，GRE网课，SAT培训、SAT课程、托福培训，托福考试，雅思考试，雅思培训，留学中介，美国留学，英国留学，留学文书，雷哥培训。">
    <meta name="description" content="雷哥网，慧申科技旗下教育品牌，成立于2012年，提供大数据驱动下的国际教育O＋O服务。雷哥网GMAT、GRE、SAT、托福、雅思通过PC、WAP和APP等互联网平台和工具，搭建在线题库、模考库和知识库等，
    分析研究用户的做题数据和学习轨迹，以人工智能为用户提供精准的留学英语备考服务。雷哥网留学通过院校库、案例库和录取条件库等建立选校模型，为客户的留学申请精准定位，提供个性化留学选校与申请服务，并以雷哥网学习中心提供留学与出国英语辅导线下服务，二者相辅相成。">
    <link rel="stylesheet" href="https://file.viplgw.cn/ui/book/cn/css/public.css?v=1.0.2">
    <link rel="stylesheet" href="https://file.viplgw.cn/ui/home/cn/css/animate.min.css">
    <link rel="stylesheet" href="https://file.viplgw.cn/ui/home/cn/css/index-3.css?v=2.1.11">
    <script>
        //        百度监控访问数据

    </script>
    <script type="text/javascript" src="https://file.viplgw.cn/ui/home/cn/js/jquery-1.11.1.min.js"></script>
    <script type="text/javascript" src="https://file.viplgw.cn/ui/home/cn/js/jquery.SuperSlide.2.1.1.js"></script>
    <script type="text/javascript" src="https://file.viplgw.cn/ui/book/cn/js/index.js"></script>
</head>

<body>
<script>
    var regExp = new RegExp("http://", 'g');
    $('body')[0].innerHTML = $('body')[0].innerHTML.replace(regExp, 'https://');
</script>
<!--顶部第一栏导航-->
<div class="new-grey-nav">
    <div class="auto-box">
        <div class="n-g-left">雷哥网，不只是课程，更是解决方案！</div>
        <div class="n-g-left" style="background: white;height: 20px;margin-top: 7px;padding:0 8px;line-height: 20px"> 国家高新技术认定企业</div>
        <div class="n-g-right">
            <ul>
                <li class="jiameng"><a href="/cn/index/join-us"><img src="https://file.viplgw.cn/ui/home/cn/images/newIndex/top/top_add.png" alt="加盟图标" /> 加盟</a></li>
                <li class="padding-pos">
                    <a href="javascript:void(0);">手机站 <img src="https://file.viplgw.cn/ui/home/cn/images/new-index/home-topSJ.png" alt="箭头" /></a>
                    <div class="blog-drop common-show" style="width: 110px;left: -20px;padding: 10px 0 0 0;">
                        <ul>
                            <li style="width: 100%;text-align: center;">
                                <img src="https://file.viplgw.cn/ui/home/cn/images/new-index/home-phoneZ.png" alt="二维码图片" style="width: 80px;height: 80px;" />
                                <p>雷哥网手机站</p>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="padding-pos">
                    <a href="javascript:void(0);">APP <img src="https://file.viplgw.cn/ui/home/cn/images/new-index/home-topSJ.png" alt="箭头" /></a>
                    <div class="pull_down common-show">
                        <ul>
                            <li>
                                <a href="http://gmat.viplgw.cn/DownloadApp.html">
                                    <div class="first_layer">
                                        <img src="http://gmat.viplgw.cn/app/web_core/styles/images-3/gmatapp_logo.jpg" alt="app logo图标">
                                        <span>雷哥网GMAT</span>
                                    </div>
                                </a>
                                <div class="code_box">
                                    <img src="http://gmat.viplgw.cn/app/web_core/styles/images-3/gmat.jpg" alt="app二维码图片">
                                </div>
                            </li>
                            <li>
                                <a href="https://gre.viplgw.cn/tool.html">
                                    <div class="first_layer">
                                        <img src="https://file.viplgw.cn/ui/smart/cn/images/gmatapp_logo.jpg" alt="app logo图标" />
                                        <span>雷哥网GRE</span>
                                    </div>
                                    <div class="code_box">
                                        <img src="http://gmat.viplgw.cn/app/web_core/styles/images-3/gre.jpg" alt="app二维码图片" />
                                    </div>
                                </a>
                            </li>
                            <!--    <li>
                                <a href="http://gmat.viplgw.cn/DownloadApp.html">
                                    <div class="first_layer">
                                        <img src="http://gmat.viplgw.cn/app/web_core/styles/images-3/gmatapp_logo.jpg" alt="app logo图标">
                                        <span>雷哥网GMAT安卓版</span>
                                    </div>
                                </a>
                                <div class="code_box">
                                    <img src="http://gmat.viplgw.cn/app/web_core/styles/images-3/leige-android.png" alt="app二维码图片">
                                </div>
                            </li>-->
                            <li>
                                <a href="http://toefl.viplgw.cn/toefl_app.html">
                                    <div class="first_layer">
                                        <img src="http://gmat.viplgw.cn/app/web_core/styles/images-3/toeflapp_logo.jpg" alt="app logo图标">
                                        <span>雷哥托福</span>
                                    </div>
                                </a>
                                <div class="code_box">
                                    <img src="http://gmat.viplgw.cn/app/web_core/styles/images-3/toefl.png" alt="app二维码图片">
                                </div>
                            </li>
                            <!--   <li>
                               <a href="http://toefl.viplgw.cn/toefl_app.html">
                                   <div class="first_layer">
                                       <img src="http://gmat.viplgw.cn/app/web_core/styles/images-3/toeflapp_logo.jpg" alt="app logo图标">
                                       <span>雷哥托福安卓版</span>
                                   </div>
                               </a>
                               <div class="code_box">
                                   <img src="http://toefl.viplgw.cn/cn/images/app-android.png" alt="app二维码图片">
                               </div>
                           </li>-->
                            <li>
                                <a href="https://sat.viplgw.cn">
                                    <div class="first_layer">
                                        <img src="https://file.viplgw.cn/ui/home/cn/images/SAT_logo.png" alt="app logo图标">
                                        <span>雷哥SAT安卓版</span>
                                    </div>
                                </a>
                                <div class="code_box">
                                    <img src="https://file.viplgw.cn/ui/home/cn/images/SAT_QR.png" alt="app二维码图片">
                                </div>
                            </li>
                            <li>
                                <a href="http://liuxue.viplgw.cn/app.html">
                                    <div class="first_layer">
                                        <img src="http://file.viplgw.cn/ui/smart/cn/images/smart-appLogo.png" alt="app logo图标" />
                                        <span>雷哥选校</span>
                                    </div>
                                </a>
                                <div class="code_box">
                                    <img src="http://gmat.viplgw.cn/app/web_core/styles/images-3/school.jpg" alt="app二维码图片" />
                                </div>
                            </li>
                            <!--  <li>
                              <a href="http://liuxue.viplgw.cn/app.html">
                                  <div class="first_layer">
                                      <img src="http://file.viplgw.cn/ui/smart/cn/images/smart-appLogo.png" alt="app logo图标"/>
                                      <span>雷哥选校安卓版</span>
                                  </div>
                              </a>
                              <div class="code_box">
                                  <img src="http://liuxue.viplgw.cn/cn/images/anroid-smartapp.png" alt="app二维码图片"/>
                              </div>
                          </li>-->
                            <li>
                                <a href="http://words.viplgw.cn/" target="_blank">
                                    <div class="first_layer">
                                        <img src="http://gmat.viplgw.cn/app/web_core/styles/images/words-iosLogo.jpg" alt="app logo图标" />
                                        <span>雷哥单词</span>
                                    </div>
                                </a>
                                <div class="code_box">
                                    <img src="http://gmat.viplgw.cn/app/web_core/styles/images-3/word.jpg" alt="app二维码图片" />
                                </div>
                            </li>
                            <!-- <li>
                             <a href="http://words.viplgw.cn/" target="_blank">
                                 <div class="first_layer">
                                     <img src="http://gmat.viplgw.cn/app/web_core/styles/images/words-iosLogo.jpg" alt="app logo图标"/>
                                     <span>雷哥单词安卓版</span>
                                 </div>
                             </a>
                             <div class="code_box">
                                 <img src="http://gre.viplgw.cn/cn/images/word_android.png" alt="app二维码图片"/>
                             </div>
                         </li>-->
                        </ul>
                    </div>
                </li>
                <li class="padding-pos">
                    <a href="javascript:void(0);">微博 <img src="https://file.viplgw.cn/ui/home/cn/images/new-index/home-topSJ.png" alt="箭头" /></a>
                    <div class="blog-drop common-show">
                        <ul>
                            <li>
                                <img src="https://file.viplgw.cn/ui/home/cn/images/new-index/code/home-codeBeimei.png" alt="二维码图片" />
                                <p>小申菌要去北美</p>
                            </li>
                            <li>
                                <img src="https://file.viplgw.cn/ui/home/cn/images/new-index/code/home-codeGmat.png" alt="二维码图片" />
                                <p>雷哥网GMAT在线</p>
                            </li>
                            <li>
                                <img src="https://file.viplgw.cn/ui/home/cn/images/new-index/code/home-codeGre.png" alt="二维码图片" />
                                <p>雷哥网GRE在线</p>
                            </li>
                            <li>
                                <img src="https://file.viplgw.cn/ui/home/cn/images/new-index/code/home-codeToefl.jpg" alt="二维码图片" style="width: 56px;height: 56px;margin-top: 4px;" />
                                <p>雷哥托福在线</p>
                            </li>
                            <li>
                                <img src="https://file.viplgw.cn/ui/home/cn/images/new-index/code/home-codeIelts.png" alt="二维码图片" />
                                <p>雷哥雅思在线</p>
                            </li>
                            <li>
                                <img src="https://file.viplgw.cn/ui/home/cn/images/new-index/code/home-codeSat.jpg" alt="二维码图片" style="width: 56px;height: 56px;margin-top: 4px;" />
                                <p>雷哥 SAT</p>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="padding-pos">
                    <a href="javascript:void(0);">微信 <img src="https://file.viplgw.cn/ui/home/cn/images/new-index/home-topSJ.png" alt="箭头" /></a>
                    <div class="blog-drop common-show">
                        <ul>
                            <li style="width: auto;margin-left: 7px;">
                                <img src="https://file.viplgw.cn/ui/home/cn/images/new-index/code/home-smartWX.jpg" alt="二维码图片" />
                                <p>雷哥留学网</p>
                            </li>
                            <li style="width: auto;margin-left: 7px;">
                                <img src="https://file.viplgw.cn/ui/home/cn/images/new-index/code/home-benkeWX.jpg" alt="二维码图片" />
                                <p>雷哥本科留学</p>
                            </li>
                            <li style="width: auto;margin-left: 7px;">
                                <img src="https://file.viplgw.cn/ui/home/cn/images/new-index/code/home-gmatWX.jpg" alt="二维码图片" />
                                <p>雷哥网GMAT
                                    <!--<br/>与商科留学-->
                                </p>
                            </li>
                            <li style="width: auto;margin-left: 7px;">
                                <img src="https://file.viplgw.cn/ui/home/cn/images/new-index/code/home-greWX.jpg" alt="二维码图片" />
                                <p>雷哥网GRE</p>
                            </li>
                            <li style="width: auto;margin-left: 14px;">
                                <img src="https://file.viplgw.cn/ui/home/cn/images/new-index/code/home-toeflWX.jpg" alt="二维码图片" />
                                <p>雷哥托福</p>
                            </li>
                            <li style="width: auto;margin-left: 10px;">
                                <img src="https://file.viplgw.cn/ui/home/cn/images/new-index/code/home-satWX.jpg" alt="二维码图片" />
                                <p>雷哥SAT</p>
                            </li>
                            <li style="width: auto;margin-left: 7px;">
                                <img src="https://file.viplgw.cn/ui/home/cn/images/new-index/code/home-ieltsWX.jpg" alt="二维码图片" />
                                <p>雷哥雅思</p>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="padding-pos webNav">
                    <a href="javascript:void(0);">网站导航 <img src="https://file.viplgw.cn/ui/home/cn/images/new-index/home-topSJ.png" alt="箭头" /></a>
                    <div class="webNav-box">
                        <ul>
                            <li>
                                <div class="wn-left">
                                    <h4><a href="https://www.viplgw.cn/">雷哥网</a></h4>
                                </div>
                                <div class="wn-right">
                                    <ul>
                                        <li><a href="https://class.viplgw.cn/">雷哥课程</a></li>
                                        <li><a href="https://open.viplgw.cn/">公开课</a></li>
                                        <li><a href="https://bbs.viplgw.cn/" target="_blank">雷哥社区</a></li>
                                        <li><a href="https://class.viplgw.cn/studyTool.html">APP工具</a></li>
                                        <li><a href="https://class.viplgw.cn/studyGroup.html">学习小组</a></li>
                                        <li><a href="https://class.viplgw.cn/vip.html">VIP会员</a></li>
                                        <li><a href="https://fm.viplgw.cn/">电台FM</a></li>
                                        <li><a href="https://schools.viplgw.cn/schools.html" target="_blank">院校库</a></li>
                                        <li><a href="https://liuxue.viplgw.cn/cn/project.html" target="_blank">实习就业</a></li>
                                        <li><a href="https://liuxue.viplgw.cn/cn/know.html" target="_blank">Mentor来了</a></li>
                                        <li><a href="https://liuxue.viplgw.cn/" target="_blank">雷哥留学</a></li>
                                        <li><a href="https://words.viplgw.cn/" target="_blank">单词</a></li>
                                        <li><a href="https://lgwcet.viplgw.cn/" target="_blank">四六级</a></li>
                                    </ul>
                                </div>
                                <div class="clearfixd"></div>
                            </li>
                            <li>
                                <div class="wn-left">
                                    <h4><a href="https://gmat.viplgw.cn/index.html" target="_blank">GMAT</a></h4>
                                </div>
                                <div class="wn-right">
                                    <ul>
                                        <li><a href="https://gmat.viplgw.cn/topic.html" target="_blank">刷题团</a></li>
                                        <li><a href="https://gmat.viplgw.cn/newquestion.html" target="_blank">搜题工具</a></li>
                                        <li><a href="https://gmat.viplgw.cn/practise/index.html" target="_blank">做题练习</a></li>
                                        <li><a href="https://gmat.viplgw.cn/exam/index.html" target="_blank">在线模考</a></li>
                                        <li><a href="https://gmat.viplgw.cn/test/index.html" target="_blank">智能测评</a></li>
                                        <li><a href="https://gmat.viplgw.cn/learn/index.html" target="_blank">知识讲堂</a></li>
                                        <li><a href="https://gmat.viplgw.cn/analyze" target="_blank">GMAT报告</a></li>
                                        <li><a href="https://gmat.viplgw.cn/gmatbeginner.html" target="_blank">GMAT零基础</a></li>
                                        <li><a href="https://gmat.viplgw.cn/gmat600.html" target="_blank">考过600以下</a></li>
                                        <li><a href="https://gmat.viplgw.cn/gmat700.html" target="_blank">考过700以下</a></li>
                                        <li><a href="https://gmat.viplgw.cn/gmatcourses/index.html" target="_blank">我要上700</a></li>
                                        <li><a href="https://gmat.viplgw.cn/gmatcourses/index.html" target="_blank">备考故事</a></li>
                                        <li><a href="https://gmat.viplgw.cn/gmatcourses/index.html" target="_blank">名师专栏</a></li>
                                        <li><a href="https://gmat.viplgw.cn/beikao/index.html" target="_blank">GMAT资讯</a></li>
                                        <li><a href="https://bbs.viplgw.cn/" target="_blank">论坛</a></li>
                                        <li><a href="https://gmat.viplgw.cn/teachers/index.html" target="_blank">名师</a></li>
                                        <li><a href="https://gmat.viplgw.cn/question_index.html" target="_blank">智能问答</a></li>
                                    </ul>
                                </div>
                                <div class="clearfixd"></div>
                            </li>
                            <li>
                                <div class="wn-left">
                                    <h4><a href="https://gre.viplgw.cn/" target="_blank">GRE</a></h4>
                                </div>
                                <div class="wn-right">
                                    <ul>
                                        <li><a href="https://gre.viplgw.cn/words.html" target="_blank">再要你命3000</a></li>
                                        <li><a href="https://gre.viplgw.cn/search.html" target="_blank">搜题</a>
                                            <!--                                            <img src="https://file.viplgw.cn/ui/home/cn/images/kfz_icon.png" alt="图标" class="pos_i"/>-->
                                        </li>
                                        <li><a href="https://gre.viplgw.cn/practice.html" target="_blank">做题</a>
                                            <!--                                            <img src="https://file.viplgw.cn/ui/home/cn/images/kfz_icon.png" alt="图标" class="pos_i"/>-->
                                        </li>
                                        <li><a href="https://gre.viplgw.cn/course.html" target="_blank">GRE课程</a></li>
                                        <li><a href="https://gre.viplgw.cn/activity.html" target="_blank">GRE活动</a></li>
                                        <li><a href="https://bbs.viplgw.cn/post/list/41.html#41" target="_blank">GRE机经真题</a></li>
                                        <li><a href="https://gre.viplgw.cn/beikao.html" target="_blank">GRE备考</a></li>
                                        <li><a href="https://gre.viplgw.cn/information.html" target="_blank">GRE资讯</a></li>
                                    </ul>
                                </div>
                                <div class="clearfixd"></div>
                            </li>
                            <li>
                                <div class="wn-left">
                                    <h4><a href="https://toefl.viplgw.cn/" target="_blank">托福</a></h4>
                                </div>
                                <div class="wn-right">
                                    <ul>
                                        <li><a href="https://toefl.viplgw.cn/winterClass.html" target="_blank">寒假班</a></li>
                                        <li><a href="https://toefl.viplgw.cn/closeClass.html" target="_blank">暑期封闭班</a></li>
                                        <li><a href="https://toefl.viplgw.cn/toeflcourses/18524.html" target="_blank">名师视频课</a></li>
                                        <li><a href="https://toefl.viplgw.cn/toeflcourses/18051.html" target="_blank">实时直播课</a></li>
                                        <li><a href="https://toefl.viplgw.cn/toeflcourses/18528.html" target="_blank">100分直达课</a></li>
                                        <li><a href="https://toefl.viplgw.cn/toeflcourses/18541.html" target="_blank">110分直达课</a></li>
                                        <li><a href="https://toefl.viplgw.cn/evaluation.html" target="_blank">入学测评</a></li>
                                        <li><a href="https://toefl.viplgw.cn/listen/practise.html" target="_blank">听力练习</a></li>
                                        <li><a href="https://toefl.viplgw.cn/speaking.html" target="_blank">口语练习</a></li>
                                        <li><a href="https://toefl.viplgw.cn/reading.html" target="_blank">阅读练习</a></li>
                                        <li><a href="https://toefl.viplgw.cn/writing.html" target="_blank">写作练习</a></li>
                                        <li><a href="https://toefl.viplgw.cn/tpoExam.html" target="_blank">TPO模考</a></li>
                                        <li><a href="https://toefl.viplgw.cn/words.html" target="_blank">词汇</a></li>
                                        <li><a href="https://bbs.viplgw.cn/post/list/2.html#2" target="_blank">托福圈</a></li>
                                        <li><a href="https://toefl.viplgw.cn/case.html" target="_blank">高分故事</a></li>
                                        <li><a href="https://toefl.viplgw.cn/toeflnews.html" target="_blank">托福资讯</a></li>
                                        <li><a href="https://toefl.viplgw.cn/teacher.html" target="_blank">托福名师</a></li>
                                    </ul>
                                </div>
                                <div class="clearfixd"></div>
                            </li>
                            <li>
                                <div class="wn-left">
                                    <h4><a href="https://ielts.viplgw.cn/" target="_blank">雅思</a></h4>
                                </div>
                                <div class="wn-right">
                                    <ul>
                                        <li><a href="https://ielts.viplgw.cn/cn/course.html#md-1" target="_blank">基础课程</a></li>
                                        <li><a href="https://ielts.viplgw.cn/cn/course.html#md-2" target="_blank">强化课程</a></li>
                                        <li><a href="https://ielts.viplgw.cn/cn/course.html#md-3" target="_blank">冲刺课程</a></li>
                                        <li><a href="https://ielts.viplgw.cn/cn/course.html#md-4" target="_blank">一对一课程</a></li>
                                        <li><a href="https://ielts.viplgw.cn/cn/know.html?class=336#md-1" target="_blank">入门常识</a></li>
                                        <li><a href="https://ielts.viplgw.cn/cn/know.html?class=321#md-1" target="_blank">考试资讯</a></li>
                                        <li><a href="https://ielts.viplgw.cn/cn/proforma.html?class=323#md-1" target="_blank">听力</a></li>
                                        <li><a href="https://ielts.viplgw.cn/cn/proforma.html?class=324#md-1" target="_blank">口语</a></li>
                                        <li><a href="https://ielts.viplgw.cn/cn/proforma.html?class=325#md-1" target="_blank">阅读</a></li>
                                        <li><a href="https://ielts.viplgw.cn/cn/proforma.html?class=326#md-1" target="_blank">写作</a></li>
                                        <li><a href="https://ielts.viplgw.cn/cn/experience.html" target="_blank">高分经验</a></li>
                                        <li><a href="https://ielts.viplgw.cn/cn/teacher.html" target="_blank">雅思团队</a></li>
                                        <li><a href="https://bbs.viplgw.cn/" target="_blank">雅思社区</a>
                                            <!--                                            <img src="https://file.viplgw.cn/ui/home/cn/images/kfz_icon.png" alt="图标" class="pos_i" style="left: 48px;"/>-->
                                        </li>
                                    </ul>
                                </div>
                                <div class="clearfixd"></div>
                            </li>
                            <li>
                                <div class="wn-left">
                                    <h4><a href="https://sat.viplgw.cn/" target="_blank">SAT</a></h4>
                                </div>
                                <div class="wn-right">
                                    <ul>
                                        <li><a href="https://sat.viplgw.cn/exercise.html?m=Reading" target="_blank">练习</a></li>
                                        <li><a href="https://sat.viplgw.cn/evaulation.html" target="_blank">测评</a></li>
                                        <li><a href="https://sat.viplgw.cn/mock.html" target="_blank">模考</a></li>
                                        <li><a href="https://sat.viplgw.cn/re.html" target="_blank">报告</a></li>
                                        <li><a href="https://sat.viplgw.cn/class.html" target="_blank">SAT课程</a></li>
                                        <li><a href="https://sat.viplgw.cn/pubclass.html" target="_blank">公开课</a></li>
                                        <li><a href="https://sat.viplgw.cn/info.html" target="_blank">SAT资讯</a></li>
                                        <li><a href="https://sat.viplgw.cn/act.html" target="_blank">ACT</a></li>
                                        <li><a href="https://sat.viplgw.cn/US_abroad.html" target="_blank">美国留学</a></li>
                                        <li><a href="https://sat.viplgw.cn/teachers.html" target="_blank">名师团队</a></li>
                                    </ul>
                                </div>
                                <div class="clearfixd"></div>
                            </li>
                            <li>
                                <div class="wn-left">
                                    <h4><a href="https://liuxue.viplgw.cn/" target="_blank">留学</a></h4>
                                </div>
                                <div class="wn-right">
                                    <ul>
                                        <li><a href="https://schools.viplgw.cn/schools.html" target="_blank">院校查询</a></li>
                                        <li><a href="https://liuxue.viplgw.cn/major.html" target="_blank">专业解析</a></li>
                                        <li><a href="https://liuxue.viplgw.cn/cn/ranking/296-308.html" target="_blank">大学排名</a></li>
                                        <li><a href="https://liuxue.viplgw.cn/cn/case.html" target="_blank">案例库</a></li>
                                        <li><a href="https://liuxue.viplgw.cn/background-test.html" target="_blank">背景测评</a></li>
                                        <li><a href="https://liuxue.viplgw.cn/school-choice.html" target="_blank">选校测评</a></li>
                                        <li><a href="https://liuxue.viplgw.cn/percentages-test.html" target="_blank">录取测评</a></li>
                                        <li><a href="https://liuxue.viplgw.cn/cn/project.html" target="_blank">硕士实习</a></li>
                                        <li><a href="https://liuxue.viplgw.cn/activity_scheduling.html" target="_blank">本科活动</a></li>
                                        <li><a href="https://bbs.viplgw.cn/topic_square.html" target="_blank">话题广场</a></li>
                                        <li><a href="https://bbs.viplgw.cn/post/list/14.html#14" target="_blank">留学社区</a></li>
                                        <li><a href="https://liuxue.viplgw.cn/question-tag/0.html" target="_blank">留学问答</a></li>
                                        <li><a href="https://liuxue.viplgw.cn/cn/know.html" target="_blank">Mentor课程</a></li>
                                        <li><a href="https://liuxue.viplgw.cn/cn/admission-requirement" target="_blank">硕士动态</a></li>
                                        <li><a href="https://liuxue.viplgw.cn/information.html" target="_blank">本科动态</a></li>
                                        <li><a href="https://liuxue.viplgw.cn/sat_information.html" target="_blank">ACT/SAT考试</a></li>
                                        <li><a href="https://liuxue.viplgw.cn/level_information.html" target="_blank">A-level考试</a></li>
                                        <li><a href="https://liuxue.viplgw.cn/study-abroad.html" target="_blank">在线留学申请</a></li>
                                    </ul>
                                </div>
                                <div class="clearfixd"></div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li class="padding-pos branch">
                    <a href="javascript:void(0);">全国分支 <img src="https://file.viplgw.cn/ui/home/cn/images/new-index/home-topSJ.png" alt="箭头" /></a>
                    <div class="address-box">
                        <ul>
                            <li>
                                <a href="javascript:void(0);">雷哥网-北京中心</a>
                                <div class="address-left">
                                    <img src="https://file.viplgw.cn/ui/home/cn/images/biaozhu/biaozhu-city07.png" alt="图片" />
                                    <a href="https://p.qiao.baidu.com/im/index?siteid=7905926&amp;ucid=18329536&amp;cp=&amp;cr=&amp;cw=" target="_blank" class="btn">免费咨询</a>
                                    <div class="address-purple">
                                        <p>
                                            <b>咨询热线：</b>
                                            010-82194388
                                        </p>
                                        <span class="m-b-address">地址：北京市朝阳区雅宝路7号 E园EPARK大厦508</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:void(0);">雷哥网-上海中心</a>
                                <div class="address-left">
                                    <img src="https://file.viplgw.cn/ui/home/cn/images/biaozhu/biaozhu-city08.png" alt="图片" />
                                    <a href="https://p.qiao.baidu.com/im/index?siteid=7905926&amp;ucid=18329536&amp;cp=&amp;cr=&amp;cw=" target="_blank" class="btn">免费咨询</a>
                                    <div class="address-purple">
                                        <p>
                                            <b>咨询热线：</b>
                                            021-52986736
                                        </p>
                                        <span class="m-b-address">地址：上海市徐汇区文定路218号 德必徐家汇WE艺术湾B座205</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:void(0);">雷哥网-广州中心</a>
                                <div class="address-left">
                                    <img src="https://file.viplgw.cn/ui/home/cn/images/biaozhu/biaozhu-city05.png" alt="图片" />
                                    <a href="https://p.qiao.baidu.com/im/index?siteid=7905926&amp;ucid=18329536&amp;cp=&amp;cr=&amp;cw=" target="_blank" class="btn">免费咨询</a>
                                    <div class="address-purple">
                                        <p>
                                            <b>咨询热线：</b>
                                            020-87589724
                                        </p>
                                        <span class="m-b-address">地址：广州市天河区冼村路11号保利威座北塔3502室</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:void(0);">雷哥网-成都中心</a>
                                <div class="address-left">
                                    <img src="https://file.viplgw.cn/ui/home/cn/images/biaozhu/biaozhu-city01.png" alt="图片" />
                                    <a href="https://p.qiao.baidu.com/im/index?siteid=7905926&amp;ucid=18329536&amp;cp=&amp;cr=&amp;cw=" target="_blank" class="btn">免费咨询</a>
                                    <div class="address-purple" style="height: 100px;">
                                        <p>
                                            <b>咨询热线</b>：
                                            028-64442708
                                        </p>
                                        <span class="m-b-address">地址：成都市锦江区东大街下东大街段258号西部国际金融中心（WIFC）2号楼20层（近太古里、东门大桥）</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:void(0);">雷哥网-杭州中心</a>
                                <div class="address-left">
                                    <img src="https://file.viplgw.cn/ui/home/cn/images/biaozhu/biaozhu-city02.png" alt="图片" />
                                    <a href="https://p.qiao.baidu.com/im/index?siteid=7905926&amp;ucid=18329536&amp;cp=&amp;cr=&amp;cw=" target="_blank" class="btn">免费咨询</a>
                                    <div class="address-purple">
                                        <p>
                                            <b>咨询热线：</b>
                                            0571-87214168
                                        </p>
                                        <span class="m-b-address">地址：杭州市江干区江锦路159号 平安金融中心B座8楼</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:void(0);">雷哥网-武汉中心</a>
                                <div class="address-left">
                                    <img src="https://file.viplgw.cn/ui/home/cn/images/biaozhu/biaozhu-city03.png" alt="图片" />
                                    <a href="https://p.qiao.baidu.com/im/index?siteid=7905926&amp;ucid=18329536&amp;cp=&amp;cr=&amp;cw=" target="_blank" class="btn">免费咨询</a>
                                    <div class="address-purple">
                                        <p>
                                            <b>咨询热线：</b>
                                            027-87132585
                                        </p>
                                        <span class="m-b-address">地址：武汉市珞瑜路光谷世界城1栋1单元 14层 11421</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:void(0);">雷哥网-南京中心</a>
                                <div class="address-left">
                                    <img src="https://file.viplgw.cn/ui/home/cn/images/biaozhu/biaozhu-city04.png" alt="图片" />
                                    <a href="https://p.qiao.baidu.com/im/index?siteid=7905926&amp;ucid=18329536&amp;cp=&amp;cr=&amp;cw=" target="_blank" class="btn">免费咨询</a>
                                    <div class="address-purple">
                                        <p>
                                            <b>咨询热线：</b>
                                            13253521360
                                        </p>
                                        <span class="m-b-address">地址：南京市秦淮区中山东路532号金蝶科技园H1幢308号B25室 （明故宫地铁站1号口向东200米）</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:void(0);">雷哥网-深圳中心</a>
                                <div class="address-left">
                                    <img src="https://file.viplgw.cn/ui/home/cn/images/biaozhu/biaozhu-city06.png" alt="图片" />
                                    <a href="https://p.qiao.baidu.com/im/index?siteid=7905926&amp;ucid=18329536&amp;cp=&amp;cr=&amp;cw=" target="_blank" class="btn">免费咨询</a>
                                    <div class="address-purple">
                                        <p>
                                            <b>咨询热线：</b>
                                            400-600-1123
                                        </p>
                                        <span class="m-b-address">地址：深圳市罗湖区书城路都市名园B栋5楼B区（只接受预约拜访）</span>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="javascript:void(0);">雷哥网-西安中心</a>
                                <div class="address-left">
                                    <img src="https://file.viplgw.cn/ui/home/cn/images/biaozhu/biaozhu-city10.png" alt="图片" />
                                    <a href="https://p.qiao.baidu.com/im/index?siteid=7905926&amp;ucid=18329536&amp;cp=&amp;cr=&amp;cw=" target="_blank" class="btn">免费咨询</a>
                                    <div class="address-purple">
                                        <p>
                                            <b>咨询热线：</b>
                                            18180691631
                                        </p>
                                        <span class="m-b-address">地址：西安市莲湖区北大街88号嘉会广场C座4层倍格官邸B021号</span>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                <?php
                if (!$uid) {
                    ?>
                    <li><a href="javascript:void(0);" onclick="userLogin()">登录</a></li>
                    <li><a href="javascript:void(0);" onclick="userRegister()">注册</a></li>
                    <?php
                } else {
                    ?>
                    <li><a href="javascript:void(0);">您好！<?php echo $userData['nickname'] ?></a></li>
                    <?php
                }
                ?>
            </ul>
        </div>
        <div class="clearfix"></div>
    </div>
</div>
<div class="newNav-out">
    <div class="newNav">
        <div>
            <div class="new-left" style="padding-bottom: 5px">
                <a href="https://www.viplgw.cn"><img src="https://file.viplgw.cn/ui/audio/cn/images/home-logo.png" alt="logo"></a>
            </div>
            <div class="new-right" style="margin-top:2px;margin-left: 50px;float: left">
                <ul>
                    <li> <div class="n-r-new"><a href="https://www.viplgw.cn">首页</a></div></li>
                    <li> <div class="n-r-new"><a href="https://toefl.viplgw.cn/" target="_blank">托福</a></div></li>
                    <li> <div class="n-r-new"><a href="https://gre.viplgw.cn/" target="_blank">GRE</a></div></li>
                    <li> <div class="n-r-new"><a href="https://gmat.viplgw.cn/" target="_blank">GMAT</a></div></li>
                    <li> <div class="n-r-new"><a href="https://ielts.viplgw.cn/" target="_blank">雅思</a></div></li>
                    <li> <div class="n-r-new"><a href="https://sat.viplgw.cn/" target="_blank">SAT</a></div></li>
                    <li> <div class="n-r-new"><a href="https://liuxue.viplgw.cn/" target="_blank">留学</a></div></li>
                    <li> <div class="n-r-new"><a href="https://kaoyan.viplgw.cn/">考研</a></div></li>
                    <li> <div class="n-r-new"><a href="https://lgwcet.viplgw.cn/" target="_blank">四六级</a></div></li>
                    <li> <div class="n-r-new"><a href="https://words.viplgw.cn/" target="_blank">单词</a></div></li>
                    <li> <div class="n-r-new"><a href="https://liuxue.viplgw.cn/question-tag/0.html" target="_blank">留学问答</a></div></li>
                    <li> <div class="n-r-new"><a href="https://open.viplgw.cn" target="_blank">公开课</a></div></li>
                    <li> <div class="n-r-new"><a href="https://bbs.viplgw.cn" target="_blank">论坛</a></div></li>
                    <li> <div class="n-r-new"><a href="https://fm.viplgw.cn/" target="_blank">电台FM</a></div></li>
                    <li> <div class="n-r-new"><a href="https://schools.viplgw.cn/schools.html">院校库</a></div></li>
                    <li> <div class="n-r-new"><a href="https://liuxue.viplgw.cn/cn/project.html">实习就业</a></div></li>
                    <li> <div class="n-r-new"><a href="">图书</a></div></li>
                </ul>
            </div>
            <div class="clearfix"></div>
        </div>
    </div>
</div>


<?= $content ?>
<!--尾部-->

<!--footer-->
<footer>
    <div class="w12 tm" style="padding: 30px 0">
        <ul class="footer-list">
            <li>
                <a href="javascript:void(0);">课程类型</a>
            </li>
            <li><a href="https://gmat.viplgw.cn/" target="_blank">GMAT</a></li>
            <li><a href="https://gre.viplgw.cn/" target="_blank">GRE</a></li>
            <li><a href="https://toefl.viplgw.cn/" target="_blank">TOEFL</a></li>
            <li><a href="https://ielts.viplgw.cn/" target="_blank">IELTS</a></li>
            <li><a href="https://sat.viplgw.cn/" target="_blank">SAT</a></li>
            <li><a href="https://liuxue.viplgw.cn/" target="_blank">留学</a></li>
        </ul>
        <ul class="footer-list">
            <li>
                <a href="javascript:void(0);">APP下载</a>
            </li>
            <li><a href="https://class.viplgw.cn/studyTool.html">雷哥网GMAT</a></li>
            <li><a href="https://class.viplgw.cn/studyTool.html">雷哥网GRE</a></li>
            <li><a href="https://class.viplgw.cn/studyTool.html">雷哥托福</a></li>
            <li><a href="https://class.viplgw.cn/studyTool.html">雷哥选校</a></li>
            <li><a href="https://words.viplgw.cn/">雷哥单词</a></li>
        </ul>
        <ul class="footer-list erm-3-wrap">
            <li>
                <a href="javascript:void(0);">关注我们</a>
            </li>
            <li>
                <a href="javascript:void(0);">雷哥网GMAT</a>
                <div class="erm-3"><img src="https://file.viplgw.cn/ui/home/cn/images/new-index/code/home-gmatWX.jpg" alt="二维码图标"></div>
            </li>
            <li>
                <a href="javascript:void(0);">雷哥网GRE</a>
                <div class="erm-3"><img src="https://file.viplgw.cn/ui/home/cn/images/new-index/code/home-greWX.jpg" alt="二维码图标"></div>
            </li>
            <li>
                <a href="javascript:void(0);">雷哥托福</a>
                <div class="erm-3"><img src="https://file.viplgw.cn/ui/home/cn/images/new-index/code/home-toeflWX.jpg" alt="二维码图标"></div>
            </li>
            <li>
                <a href="javascript:void(0);">雷哥雅思</a>
                <div class="erm-3"><img src="https://file.viplgw.cn/ui/home/cn/images/new-index/code/home-ieltsWX.jpg" alt="二维码图标"></div>
            </li>
            <li>
                <a href="javascript:void(0);">雷哥SAT</a>
                <div class="erm-3"><img src="https://file.viplgw.cn/ui/home/cn/images/new-index/code/home-satWX.jpg" alt="二维码图标"></div>
            </li>
            <li>
                <a href="javascript:void(0);">雷哥留学</a>
                <div class="erm-3"><img src="https://file.viplgw.cn/ui/home/cn/images/new-index/code/home-smartWX.jpg" alt="二维码图标"></div>
            </li>
        </ul>
        <!-- 什么是雷豆 -->
        <ul class="footer-list">
            <li>
                <a href="javascript:void(0);">什么是雷豆？</a>
            </li>
            <li><a href="/about/leidou-introduce.html">什么是雷豆</a></li>
            <li><a href="/about/get-leidou.html">获取雷豆</a></li>
            <li><a href="/about/use-leidou.html">使用雷豆</a></li>
        </ul>
        <!-- 关于我们 -->
        <ul class="footer-list">
            <li>
                <a href="javascript:void(0);">关于我们</a>
            </li>
            <li><a href="/about/detail.html">雷哥网简介</a></li>
            <li><a href="/about/join.html">加入我们</a></li>
            <li><a href="/about/connect.html">联系我们</a></li>
            <li><a href="https://gmat.viplgw.cn/aboutUs/16.html#free_shengm" target="_blank">免责声明</a></li>
        </ul>
        <div class="lgw-gzh">
            <img src="https://file.viplgw.cn/ui/home/cn/images/new-index/home-fGZH.jpg" alt="公总号二维码" />
            <p>雷哥网公众号</p>
        </div>
        <div class="leige-tag">
            <div><img src="https://file.viplgw.cn/ui/home/cn/images/about/logo.png" alt="logo2" /></div>
            <div class="ft-tag-bg">
                <div class="ft-tag">
                    <div>
                        <span><em class="point"></em>优质教学</span>
                        <span><em class="point"></em>海量题库</span>
                    </div>
                    <div>
                        <span><em class="point"></em>全方位服务</span>
                        <span><em class="point"></em>超值课程礼包</span>
                    </div>
                </div>
            </div>
            <p class="ft-de">雷哥网，互联网一站式出国留学智能<br />备考平台，国家高新技术认定企业</p>
        </div>
    </div>
    <div class="copyRight tm">
        ©2020 北京慧申教育科技有限公司&nbsp;&nbsp;viplgw.cn All Rights Reserved
        <a href="http://beian.miit.gov.cn/publish/query/indexFirst.action"> 京ICP备15001182号-1 </a>
        <a href="http://www.beian.gov.cn/portal/index.do">京公网安备11010802017681</a>
    </div>
</footer>
<!-------------------咨询框------------------------>
<div class="refer_small" style="display: block" onclick="showZiXun()">
    <!--    <img src="https://file.viplgw.cn/ui/home/cn/images/newyear_refer/lx_pic_1.png">-->

</div>
<div class="referBox" style="display: none;">
    <div class="refer_close" onclick="closeRefer()"></div>
    <div class="refer_top"></div>
    <div class="refer_con">
        <ul>
            <li>
                <a href="<?php echo Yii::$app->params['navUrl']; ?>" target="_blank">
                    <div class="comSize diffBG01"></div>
                    <p>在线咨询</p>
                </a>
            </li>
            <li>
                <a href="javascript:void(0);">
                    <div class="comSize diffBG02"></div>
                    <p>微信</p>
                    <div class="tanc_mask01 animated"><img src="https://file.viplgw.cn/ui/home/cn/images/smartapply_ewm.png" alt="二维码图片"></div>
                </a>
            </li>
            <li>
                <a href="tencent://message/?uin=1746295647&amp;Site=www.cnclcy&amp;Menu=yes" target="_blank">
                    <div class="comSize diffBG03"></div>
                    <p>QQ</p>
                </a>
            </li>
            <li>
                <a href="javascript:void(0);">
                    <div class="comSize diffBG04"></div>
                    <p>电话</p>
                    <div class="tanc_mask02 animated">400-1816-180</div>
                </a>
            </li>
            <li>
                <a href="tencent://message/?uin=1746295647&amp;Site=www.cnclcy&amp;Menu=yes" target="_blank">
                    <div class="comSize diffBG05"></div>
                    <p>吐槽入口</p>
                </a>
            </li>
            <li>
                <a href="javascript:void(0);" onclick="referTop();">
                    <div class="diffBG06 animated">
                        <img src="https://file.viplgw.cn/ui/home/cn/images/refer_icon06.png" alt="回到顶部图标" />
                    </div>
                </a>
            </li>
            <!--    <li style="padding-bottom: 10px">
            <a href="javascript:void(0);" onclick="referTop();">
                <div class="diffBG06 animated">
                    <img src="https://file.viplgw.cn/ui/home/cn/images/newyear_refer/tu-1/down.png" alt="回到顶部图标"/>
                </div>
            </a>
        </li>-->
        </ul>
    </div>
</div>
<!--底部领取资料框-->
<!--<div class="receiveMaterial02">-->
<!--    <img src="https://file.viplgw.cn/ui/home/cn/images/index-maskClose.png" alt="close" class="close" onclick="closeReceive()"/>-->
<!--    <div class="in-receive">-->
<!--        <img src="https://file.viplgw.cn/ui/home/cn/images/index-maskCon.png" alt="中间内容" class="con"/>-->
<!--        <input type="text" class="mask-input fir" id="userName02"/>-->
<!--        <input type="text" class="mask-input sec" id="weChat02"/>-->
<!--        <div class="mask-free" onclick="submitUser('#userName02','#weChat02')"></div>-->
<!--    </div>-->
<!--</div>-->

</body>

<script type="text/javascript">
    /**
     * 登录框
     */
    function userLogin() {
        location.href = "https://login.viplgw.cn/cn/index?source=25&url=<?php echo Yii::$app->request->hostInfo . Yii::$app->request->getUrl() ?>"
    }
    /**
     * 注册框
     */
    function userRegister() {
        location.href = "https://login.viplgw.cn/cn/index/phone-register?source=25&url=<?php echo Yii::$app->request->hostInfo . Yii::$app->request->getUrl() ?>"
    }
</script>



</html>
