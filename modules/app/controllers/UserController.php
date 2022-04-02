<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2018/8/29
 * Time: 13:48
 */
namespace app\modules\app\controllers;

use app\libs\Method;
use app\libs\Pager;
use app\libs\AppApiControl;
use app\modules\cn\models\Category;
use app\modules\cn\models\Collect;

use app\modules\cn\models\Login;
use app\modules\cn\models\MockExam;
use app\modules\cn\models\MockRecord;
use app\modules\cn\models\MockResult;
use app\modules\cn\models\Question;
use app\modules\cn\models\QuestionLevel;
use app\modules\cn\models\QuestionReward;
use app\modules\cn\models\SharRewards;
use app\modules\cn\models\SynchroLog;
use app\modules\cn\models\TeachercolumnComment;
use app\modules\cn\models\UpdateLog;
use app\modules\cn\models\UserAnalysis;
use app\modules\cn\models\UserCollection;
use app\modules\cn\models\UserComment;
use app\modules\cn\models\UserNote;
use app\modules\cn\models\QuestionsStatistics;
use app\modules\cn\models\QuestionCat;
use app\modules\cn\models\UserFollow;
use app\modules\cn\models\UserSurvey;

use app\modules\cn\models\TeacherCollection;
use app\modules\cn\models\ReportErrors;
use app\modules\cn\models\UserSign;
use app\modules\cn\models\UserBankMark;
use app\modules\cn\models\SourceCat;


use app\modules\app\models\UserAnswer;
use app\modules\app\models\Content;
use app\modules\app\models\Course;


use app\modules\question\models\Questions;
use app\modules\question\models\LibraryQuestion;
use app\modules\question\models\QuestionKnow;
use app\modules\question\models\QuestionLibrary;
use app\modules\question\models\QuestionSource;

use app\modules\content\models\Teacher;
use app\modules\content\models\ContentTag;
use app\modules\content\models\Livesdkid;
use app\modules\content\models\Video;

use app\modules\app\models\Means;
use app\modules\app\models\Jump;
use app\modules\app\models\Teachers;
use app\modules\app\models\User;
use app\modules\app\models\PushMessage;
use app\modules\app\models\WeekRecord;
use app\modules\app\models\Culling;



use Yii;
use UploadFile;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-Requested-With');
header('P3P: CP="CURa ADMa DEVa PSAo PSDo OUR BUS UNI PUR INT DEM STA PRE COM NAV OTC NOI DSP COR"');

class UserController extends AppApiControl{
    
     function init(){
        // Yii::$app->session->set('uid',30186);
        // Yii::$app->session->set('userId',40888);
        parent::init();
         include_once($_SERVER['DOCUMENT_ROOT'].'/../libs/ucenter/ucenter.php');
    }
    public $enableCsrfValidation = false;

 /**
     * 用户调查
     * by  yanni
     */
     public function actionUserSurvey(){
        $uid = Yii::$app->session->get('uid');
        if(!$uid){
            die(json_encode(['code'=>99,'data'=>'','message'=>'请登录后再访问']));
        }
        $diaoCha = UserSurvey::find()->asArray()->where("uid={$uid}")->one();
        if(!empty($diaoCha)){
            $res = ['code'=>1,'data'=>$diaoCha,'message'=>'已有调查'];
        } else{
            $res = ['code'=>2,'data'=>[],'message'=>'还未生成调查'];
        }
        die(json_encode($res));
    }

    /**
     * 提交用户调查
     */
    public function actionSubSurvey(){
        $uid = Yii::$app->session->get('uid');
        if(!$uid){
            die(json_encode(['code'=>99,'data'=>'','message'=>'登录失效']));
        }
        $testTimes = Yii::$app->request->post('testTimes');   //考试次数
        $whether = Yii::$app->request->post('whether');       //是否参加考试
        $estimatedTime = Yii::$app->request->post('estimatedTime');   //预计考试时间
        $targetScore = Yii::$app->request->post('targetScore');       //目标分数
        $check = UserSurvey::find()->asArray()->where("uid={$uid}")->one();
        if(!empty($check)){
            $sign = UserSurvey::updateAll(['testTimes'=>$testTimes,'whether'=>$whether,'estimatedTime'=>$estimatedTime,'targetScore'=>$targetScore],"uid={$uid}");
        } else{
            $model = new UserSurvey();
            $model->testTimes = $testTimes;
            $model->whether = $whether;
            $model->estimatedTime = $estimatedTime;
            $model->targetScore  = $targetScore;
            $model->uid = $uid;
            $sign = $model->save();
        }
        if($sign){
            $res = ['code'=>1,'message'=>'保存成功'];
        } else{
            $res = ['code'=>0,'message'=>'保存失败'];
        }
        die(json_encode($res));
    }

    /**
     * 个人中心
     * by  yanni
     */
    public function actionPersonalCenter(){
        $uid = Yii::$app->session->get('uid');
        $userId = Yii::$app->session->get('userId');
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'请登录']));
        }
        // by jeam 新增
        WeekRecord::handleWeekMsg($userId,$uid);    //周报处理
        $questionTotal = UserAnswer::find()->asArray()->where("uid={$uid}")->count();   //做题总数
        $correctNum = UserAnswer::find()->asArray()->where("uid={$uid} and correct=1")->count();  //正确总数
        $userSurvey = UserSurvey::find()->asArray()->where("uid={$uid}")->one();          //用户调查
        $day = date("Y-m-d");
        $UserSign = UserSign::find()->asArray()->where("uid=$uid and createDay='$day'")->one();  //用户是否打卡
        if(empty($UserSign)){
            $sign = 0;
        } else{
            $sign = 1;
        }
        $userSurvey['dateTime'] = date('Y-m-d',$userSurvey['estimatedTime']);    //预计考试时间格式化
        $countDown = $userSurvey['estimatedTime']-time();
        $userSurvey['countDown'] = ceil($countDown/86400);        //倒计时
        $userInfor = User::find()->asArray()->where("uid={$uid}")->one();        //用户信息
        if(empty($userInfor['image'])){ $userInfor['image']='/cn/images/details_defaultImg.png';}
        $look = Method::post("https://bbs.viplgw.cn/cn/api/check-look",['uid' => $uid]);//默认头像
        $look = json_decode($look,'true');
        if($look['code']==1){
            $isLook = 1;
        } else{
            $isLook = 0;
        }
        $userMessage = PushMessage::find()->asArray()->select(['id'])->where("uid={$uid} and status=1")->count();    //未看系统推送消息
        $replyUser = UserComment::find()->asArray()->select(['id'])->where("replyUid={$uid} and status=1")->count();   //未看被回复消息
        if($userMessage>0 || $replyUser>0){
            $isGreLook = 1;
        } else{
            $isGreLook = 0;
        }
        $correctRate = round($correctNum / $questionTotal * 100)."%";
        $edition = '1.0';
        $publicNumber = '雷哥GRE';
        $groupNumber = '317282270';
        $officialWebsite = 'gre.viplgw.cn/';
        $data = ['questionTotal'=>$questionTotal,'correctRate'=>$correctRate,'userInfor'=>$userInfor,'userSurvey'=>$userSurvey,'edition'=>$edition,'publicNumber'=>$publicNumber,'groupNumber'=>$groupNumber,'officialWebsite'=>$officialWebsite,'isLook'=>$isLook,'isGreLook'=>$isGreLook,'sign'=>$sign];
        die(json_encode(['code'=>1,'data'=>$data,'message'=>'数据请求成功']));
    }
    /**
     * GRE 个人中心
     * 题目收藏
     * cy
     */
    public function actionQuestionCollect(){
        $uid = Yii::$app->session->get('uid');
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'请登录']));
        }
        $cat = Yii::$app->request->get("sectionId",0);//类型
        $source = Yii::$app->request->get("sourceId",0);//来源
        $level = Yii::$app->request->get("levelId",0);//难度等级
        $page = Yii::$app->request->get('page',1);
        $pageSize = Yii::$app->request->get('pageSize',10);
        $where = " where qc.uid = $uid";
        if($cat > 0){
            $where .= " and q.catId = $cat";
        }
        if($source > 0){
            $where .= " and q.sourceId = $source";
        }
        if($level>0){
            $where .= " and q.levelId = $level";
        }
        $limit = " limit ".(($page-1)*10).",".$pageSize;
        $cats =QuestionCat::find()->asArray()->all();
        $sources = QuestionSource::find()->asArray()->all();
        $levels = QuestionLevel::find()->asArray()->all();
        $model = new Question();
        $ques = $model->getCollectQuestion($where,$limit);
        $questions = $ques['questions'];
        $totalPage = ceil($ques['totalPage']/$pageSize);
        $data = ['code'=>1,'message'=>'success','data'=>['sections'=>$cats,'sources'=>$sources,'levels'=>$levels,'questions'=>$questions,'totalPage'=>$totalPage]];
        die(json_encode($data));
    }
    /**
     * gre 个人中心
     * 用户笔记
     * cy
     */
    public function actionUserNote(){
        $uid = Yii::$app->session->get('uid');
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'请登录']));
        }
        $cat = Yii::$app->request->get("catId",1);//1-填空 2-阅读 3-数学
        $page = Yii::$app->request->get("page",1);
        $pageSize = Yii::$app->request->get("pageSize",10);
        $limit = " limit ".(($page-1)*$pageSize).','.$pageSize;
        $questionNotes = Question::getUserNotes($uid,$cat,$limit);
        $data = ['code'=>1,'message'=>'success','data'=>['notes'=>$questionNotes]];
        die(json_encode($data));
    }
    /**
     * gre 个人中心
     * 我的收藏
     * cy
     */
    public function actionMyCollect(){
        $uid = Yii::$app->session->get('uid');
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'请登录']));
        }
        $type = Yii::$app->request->get("type",1);//1-活动咨询 2-真题下载 3-机经下载 4-高分案例（暂无）
        $page = Yii::$app->request->get('page',1);
        $pageSize = Yii::$app->request->get("pageSize",10);
        $limit = " limit ".(($page-1)*$pageSize).','.$pageSize;
        if($type == 1){
            $contents = UserCollection::getUserCollectContent($uid,$limit);
        }elseif($type == 2){
            $contents = Method::post("https://bbs.viplgw.cn/cn/api/user-collect",['uid'=>$uid,'catId'=>42,'page'=>$page,'pageSize'=>$pageSize]);
            $contents = json_decode($contents,true);
        }elseif($type == 3){
            $contents = Method::post("https://bbs.viplgw.cn/cn/api/user-collect",['uid'=>$uid,'catId'=>43,'page'=>$page,'pageSize'=>$pageSize]);
            $contents = json_decode($contents,true);
        }else{
            $contents = [];
        }
        $data = ['code'=>1,'message'=>' success','data'=>['contents'=>$contents]];
        die(json_encode($data));
    }

    /**
     * 做题记录接口
     * by yanni
     */
    public function actionRecordMake(){
        $uid = Yii::$app->session->get('uid');
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'请登录']));
        }
        $sectionId = Yii::$app->request->get('sectionId');
        $sourceId = Yii::$app->request->get('sourceId');
        $levelId = Yii::$app->request->get('levelId');
        $state = Yii::$app->request->get('state');
        $page = Yii::$app->request->get('page',1);
        $where = " ua.uid=$uid";
        if($sectionId){
            $where .= " and q.catId={$sectionId}";
            $sources =\Yii::$app->db->createCommand("select * from {{%source_cat}} as sc left join {{%question_source}} as qs on sc.sourceId=qs.id where sc.catId={$sectionId}")->queryAll();
        } else {
            $sources = QuestionSource::find()->asArray()->all();
        }
        if($sourceId){
            $where .= " and q.sourceId={$sourceId}";
        }
        if($levelId){
            $where .= " and q.levelId={$levelId}";
        }
        if($state){    //做题情况  （正确1 错误2）
            $where .= " and ua.correct=$state";
        }
        $userModel = new User();
        $data = $userModel->getDoneQuestionsRecord($where,$page,10,'','ORDER BY ua.createTime desc');
        foreach($data['data'] as $k=>$v){
            $data['data'][$k]['doNum'] = UserAnswer::find()->select("id")->where("questionId={$v['id']}")->groupBy("uid")->count();
            $qmodel = new Questions();
            $data['data'][$k]['sectionName'] = $qmodel->getSection($v['catId']);
            $data['data'][$k]['sourceName'] = $qmodel->getSource($v['sourceId'])['name'];
        }
//                var_dump($data);die;
        $arrData['questions'] = $data['data'];        //做题记录
        $arrData['totalPage'] = $data['totalPage'];    //总页数
        $arrData['sources'] = $sources;               //来源
        $arrData['levels'] = QuestionLevel::find()->asArray()->all();    //难度
        $arrData['sections'] =  QuestionCat::find()->asArray()->all();   //单项分类
        $res = ['code'=>1,'data'=>$arrData,'message'=>'数据请求成功'];
        die(json_encode($res));
    }

    /**
     * 错题记录接口
     */
    public function actionErrorRecord(){
        $uid = Yii::$app->session->get('uid');
        $sectionId = Yii::$app->request->get('sectionId');
        $sourceId = Yii::$app->request->get('sourceId');
        $levelId = Yii::$app->request->get('levelId');
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'请登录']));
        }
        $where = " ua.uid=$uid";
        if($sectionId){
            $where .= " and q.catId={$sectionId}";
            $sources =\Yii::$app->db->createCommand("select * from {{%source_cat}} as sc left join {{%question_source}} as qs on sc.sourceId=qs.id where catId={$sectionId}")->queryAll();
        } else {
            $sources = QuestionSource::find()->asArray()->all();
        }
        if($sourceId){
            $where .= " and q.sourceId={$sourceId}";
        }
        if($levelId){
            $where .= " and q.levelId={$levelId}";
        }
        $userModel = new User();
        $data = $userModel->getErrorRecord($where,$sectionId,'ORDER BY ua.createTime desc');
        //var_dump($data);die;
        $arrData['errorRecord'] = $data;
        $arrData['sources'] = $sources;
        $arrData['levels'] = QuestionLevel::find()->asArray()->all();
        $arrData['sections'] =  QuestionCat::find()->asArray()->all();   //单项分类
        $res = ['code'=>1,'data'=>$arrData,'message'=>'数据请求成功'];
        die(json_encode($res));
    }
    /**
     * 小库错题记录接口
     */
    public function actionErrorRecordDetail(){
        $limit = Yii::$app->request->get('page',1);
        $uid = Yii::$app->session->get('uid');
        $sectionId = Yii::$app->request->get('sectionId');
        $sourceId = Yii::$app->request->get('sourceId');
        $levelId = Yii::$app->request->get('levelId');
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'请登录']));
        }
        $where = " ua.uid=$uid";
        if($sectionId){
            $where .= " and q.catId={$sectionId}";
        }
        if($sourceId){
            $where .= " and q.sourceId={$sourceId}";
        }
        if($levelId){
            $where .= " and q.levelId={$levelId}";
        }
        $userModel = new User();
        $data['questions'] = $userModel->getErrorRecordDetail($where,'ORDER BY ua.createTime desc',$limit);
        $res = ['code'=>1,'data'=>$data,'message'=>'数据请求成功'];
        die(json_encode($res));
    }
    /**
     * 开始做错题
     * by  yanni
     */
    public function actionStartWrongQuestion(){
        $plKey = Yii::$app->request->get('page');    //第几套题
        $uid = Yii::$app->session->get('uid');
        $sectionId = Yii::$app->request->get('sectionId');
        $sourceId = Yii::$app->request->get('sourceId');
        $levelId = Yii::$app->request->get('levelId');
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'请登录']));
        } else{
            Yii::$app->session->remove('doQuestionStr');
            Yii::$app->session->remove('errorQueIds');
            $where = " ua.uid=$uid";
            if($sectionId){
                $where .= " and q.catId={$sectionId}";
            }
            if($sourceId){
                $where .= " and q.sourceId={$sourceId}";
            }
            if($levelId){
                $where .= " and q.levelId={$levelId}";
            }
            $userModel = new User();
            $data = $userModel->getErrorRecordDetail($where,'ORDER BY ua.createTime desc',$plKey);   //获取错题小库
            $queIdStr = '';
            foreach($data as $v){
                $queIdStr .= $v['questionId'].',';
            }
            $queIdStr = rtrim($queIdStr, ',');
            Yii::$app->session->set('errorQueIds',$queIdStr);   //session保存做题小库
            die(json_encode(['code'=>1,'message'=>'小库信息获取成功']));
        }
    }

    /**
     * 做错题接口
     * by  yanni
     */
    public function actionDoWrongQuestion(){
        $uid = Yii::$app->session->get('uid');
        $source = Yii::$app->request->get('source');
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'请登录']));
        }
        $errorQueIds = Yii::$app->session->get('errorQueIds');   //session获取错题小库
        if(!$errorQueIds){
            die(json_encode(['code'=>0,'message'=>'session失效请重新做题']));
        }
        $doQuestionStr = Yii::$app->session->get('doQuestionStr');   //session获取错题小库已做题目
        $doQuestionStr = (!empty($doQuestionStr))?$doQuestionStr :'false';
        $model = new UserAnswer();
        $c_question = $model->getErrorQuestion($errorQueIds,$doQuestionStr,$uid);   //排除已做题目获取题目
        if(empty($c_question)){
            die(json_encode(['code'=>98,'message'=>'小库题目已做完']));
        }if($doQuestionStr == 'false'){
            $do_num = 0;
        } else{
            $do_num = count(explode(',',$doQuestionStr));
        }
        if($source==1 && ($c_question['typeId']==5 || $c_question['typeId']==6 || $c_question['typeId']==7)){
            $c_question['details'] = strip_tags($c_question['details']);
        }
        $data['question'] = $c_question;
        $status['doNum'] = $do_num;
        $status['totalNum'] = count(explode(",",$errorQueIds));
        $data['status'] = $status;
        die(json_encode(['code'=>1,'data'=>$data,'message'=>'成功获取错误题目']));
    }
    /**
     * 错题答题
     * yanni
     */
    public function actionWrongQuestionAnswer(){
        $uid = Yii::$app->session->get('uid');
        if($uid){
            $questionId = Yii::$app->request->post('questionId');
            $answer = Yii::$app->request->post('answer');
            $useTime = Yii::$app->request->post('useTime');
            if(!$questionId || !$answer || !$useTime){
                die(json_encode(['code' => 0,'message'=>'请检查你的参数']));
            }
            $doQuestionStr = Yii::$app->session->get('doQuestionStr');   //获取已做题目ID
            if(!empty($doQuestionStr)){
                $doQuestionStr .= ",".$questionId;
            } else {
                $doQuestionStr = $questionId;
            }
            $model = new UserAnswer();
            $correct = $model->checkCorrect($questionId,$answer);  //检查用户提交答案是否正确
            UserAnswer::updateAll(['answer'=>$answer,'useTime'=>$useTime,'correct'=>$correct],"uid={$uid} and questionId={$questionId}");
            Yii::$app->session->set('doQuestionStr',$doQuestionStr);
            SynchroLog::updateAll(['lastTime'=>time()],"uid={$uid}");
            $res = ['code' => 1,'message'=>'答题成功'];
        }else{
            $res = ['code' => 99,'message'=>'请登录'];
        }
        die(json_encode($res));
    }
    /**
     * 修改用户资料
     * @Obelisk
     */

    public function actionChangeUserInfo()
    {

        $model = new Login();

        $session = Yii::$app->session;

        $uid = $session->get('uid');

        $phoneCode = Yii::$app->request->post('phoneCode', '');

        $phone = Yii::$app->request->post('phone', '');

        $nickname = Yii::$app->request->post('nickname', '');

        $school = Yii::$app->request->post('school');

        $major = Yii::$app->request->post('major');

        $grade = Yii::$app->request->post('grade');

        $userInfo = [];
        if ($nickname) {
            $status = uc_user_checknickname($nickname);
            if($status != 1){
                $res['code'] = 0;
                $res['message'] = '该昵称已被占用';
                die(json_encode($res));
            } else{
                uc_user_nickname_edit($nickname,$uid);
            }
            $userInfo['nickname'] = $nickname;
        }
        if ($school) {
            $userInfo['school'] = $school;
        }
        if ($major) {
            $userInfo['major'] = $major;
        }
        if ($grade) {
            $userInfo['grade'] = $grade;
        }
        if ($phone) {
            $userInfo['phone'] = $phone;
            $signPhone = Login::find()->where("uid=$uid AND phone='$phone'")->one();

            if (!$signPhone) {

                $status = uc_user_checkphone($phone);
                if ($status == -7) {
                    die(json_encode(['code' => 0, 'message' => '该手机已被其他用户绑定']));
                }
                $checkTime = $model->checkTime();
                if ($checkTime) {

                    $checkCode = $model->checkCode($phone, $phoneCode);

                    if ($checkCode) {

                        $model->updateAll($userInfo, "uid=$uid");

                        $userData = $model->find()->where("uid=$uid")->one();

                        Yii::$app->session->set('userData', $userData);
                        setcookie('loginData',json_encode($userData), time()+3600*24*30,'/');

                        $res['code'] = 1;

                        $res['message'] = '保存成功';
                        uc_user_edit($userData->userName,'','','',$phone,1);

                    } else {

                        $res['code'] = 0;

                        $res['message'] = '验证码错误';

                    }

                } else {

                    $res['code'] = 0;

                    $res['message'] = '验证码过期';

                }

            } else {

                $model->updateAll($userInfo, "uid=$uid");

                $userData = $model->find()->where("uid=$uid")->one();

                Yii::$app->session->set('userData', $userData);
                setcookie('loginData',json_encode($userData), time()+3600*24*30,'/');

                $res['code'] = 1;

                $res['message'] = '保存成功';

            }

        } else {

            $model->updateAll($userInfo, "uid=$uid");

            $userData = $model->find()->where("uid=$uid")->one();

            Yii::$app->session->set('userData', $userData);
            setcookie('loginData',json_encode($userData), time()+3600*24*30,'/');

            $res['code'] = 1;

            $res['message'] = '保存成功';

        }

        die(json_encode($res));

    }

    /**
     * 修改用户邮箱
     * @Obelisk
     */

    public function actionChangeUserEmail()
    {

        $model = new Login();

        $session = Yii::$app->session;

        $uid = $session->get('uid');

        $emailCode = Yii::$app->request->post('emailCode');

        $email = Yii::$app->request->post('email');

        $sign = uc_user_checkemail($email);

        if ($sign == -6) {

            die(json_encode(['code' => 0, 'message' => '该邮箱已被使用']));

        }

        $checkTime = $model->checkTime();

        if ($checkTime) {

            $checkCode = $model->checkCode($email, $emailCode);

            if ($checkCode) {

                $model->updateAll(['email' => $email], "uid=$uid");

                $userData = $model->find()->where("uid=$uid")->one();

                Yii::$app->session->set('userData', $userData);
                setcookie('loginData',json_encode($userData), time()+3600*24*30,'/');

                $res['code'] = 1;

                $res['message'] = '保存成功';
                uc_user_edit($userData->userName,'','',$email,'',1);

            } else {

                $res['code'] = 0;

                $res['message'] = '验证码错误';

            }

        } else {

            $res['code'] = 0;

            $res['message'] = '验证码过期';

        }

        die(json_encode($res));

    }

    /**
     * 修改用户密码
     * @Obelisk
     */

    public function actionChangeUserPass()
    {

        $model = new Login();

        $session = Yii::$app->session;

        $uid = $session->get('uid');
        $oldPassword = Yii::$app->request->post('oldPassword',123456);

        $userData = $model->find()->where("uid=$uid")->one();

        $newPassword = Yii::$app->request->post('newPassword',1234567);

        $sign = uc_user_edit($userData->userName,$oldPassword,$newPassword,'','');

        if ($sign == -1) {

            die(json_encode(['code' => 0, 'message' => '旧密码不正确']));

        } else {

            $model->updateAll(['userPass' => md5($newPassword)], "uid=$uid");

            $userData = $model->find()->where("uid=$uid")->one();

            Yii::$app->session->set('userData', $userData);

            $res['code'] = 1;

            $res['message'] = '保存成功';

        }

        die(json_encode($res));

    }
    /**
     * 修改头像
     * BY yanni
     */
    public function actionUpImage()
    {

        $session = Yii::$app->session;

        $uid = $session->get('uid');

        $userData = $session->get('userData');

        $image = Yii::$app->request->post('image');

        $sign = Login::updateAll(['image' => $image], "uid=$uid");

        if ($sign) {

            $userData['image'] = $image;

            $session->set('userData', $userData);

            $res['code'] = 1;
            $res['data'] = $image;
            $res['message'] = '更换成功';

        } else {

            $res['code'] = 0;

            $res['message'] = '更换失败，请重试';

        }

        die(json_encode($res));
    }




    /**
     * APP下单详情
     * by  yanni
     */
    public function actionOrderDetail(){
        $id = Yii::$app->request->get('id');
        $timeId = Yii::$app->request->get('timeId');
        if(!$timeId){
            $uid = Yii::$app->session->get('uid');
            if(!$uid){
                die(json_encode(['code' => 99, 'message' => '请登录']));
            }
        }else{
            $uid = $timeId;
        }
        $model = new Content();
        $course =  $model->getClass(['fields' => 'price','where' =>"c.id=".$id,'pageSize' => 1]);
        $address = Method::post("https://order.viplgw.cn/pay/api/get-consignee",['uid' => $uid]);
        $leiDou = uc_user_integral1($uid);
        $data['id'] = $course[0]['id'];
        $data['courseName'] = $course[0]['name'];
        $data['image'] = $course[0]['image'];
        $data['coursePrice'] = $course[0]['price'];
        $data['userAddress'] = json_decode($address,true);
        $data['leiDou'] = $leiDou['integral'];
        $res = ['code'=>1,'message'=>'请求成功','data'=>$data];
        die(json_encode($res));
    }

    /**
     * app默认用户地址
     * by yanni
     */
    public function actionDefaultAddress(){
        $addressId = Yii::$app->request->get('addressId');
        $timeId = Yii::$app->request->get('timeId');
        if($timeId){
            $uid = $timeId;
        }else{
            $uid = Yii::$app->session->get('uid');
            if(!$uid){
                die(json_encode(['code' => 99,'message'=>'请登录']));
            }
        }
        $data = Method::post("https://order.viplgw.cn/pay/api/default-address",['id' => $addressId,'uid'=>$uid]);
        $data = json_decode($data, true);
        if($data['code']==1){
            $res = ['code'=>1,'message'=>'设置成功'];
        } else{
            $res = $data;
        }
        die(json_encode($res));
    }

    /**
     * app添加收货地址
     */
    public function actionAddReceivingAddress(){
        $timeId = Yii::$app->request->post('timeId');
        if($timeId){
            $uid = $timeId;
        }else{
            $uid = Yii::$app->session->get('uid');
            if(!$uid){
                die(json_encode(['code' => 99,'message'=>'请登录']));
            }
        }
        $addressId = Yii::$app->request->post('addressId');
        $name = Yii::$app->request->post('name');
        $phone = Yii::$app->request->post('phone');
        $province = Yii::$app->request->post('province');
        $city = Yii::$app->request->post('city');
        $area = Yii::$app->request->post('area');
        $alias = Yii::$app->request->post('alias');
        if($addressId){
            $address = Method::post("https://order.viplgw.cn/pay/api/add-receiving-address",['addressId'=>$addressId,'uid' => $uid,'name'=>$name,'phone'=>$phone,'province'=>$province,'city'=>$city,'area'=>$area,'alias'=>$alias]);
        } else{
            $address = Method::post("https://order.viplgw.cn/pay/api/add-receiving-address",['uid' => $uid,'name'=>$name,'phone'=>$phone,'province'=>$province,'city'=>$city,'area'=>$area,'alias'=>$alias]);
        }
        $address = json_decode($address,true);
        die(json_encode($address));
    }

    /**
     *app 删除地址
     */
    public function actionDelReceivingAddress(){
        $timeId = Yii::$app->request->get('timeId');
        if($timeId){
            $uid = $timeId;
        }else{
            $uid = Yii::$app->session->get('uid');
            if(!$uid){
                die(json_encode(['code' => 99,'message'=>'请登录']));
            }
        }
        $id = Yii::$app->request->get('id');
        $data = Method::post("https://order.viplgw.cn/pay/api/del-receiving-address",['uid' => $uid,'id'=>$id]);
        $data = json_decode($data,true);
        die(json_encode($data));
    }
    /**
     * 模考记录
     * cy
     * type 1-语文 2-数学 3-全套
     */
    public function actionMockRecord(){
        $uid = Yii::$app->session->get('uid');
        if(!$uid){
            die(json_encode(['code' => 99,'message'=>'请登录']));
        }
        $type = Yii::$app->request->post('type',1);//1-语文 2-数学 3-全套
        $page = Yii::$app->request->post('page',1);
        $offset = 10*($page-1);
        $mockResult = MockResult::find()->where("uid = $uid and type = $type")->asArray()->offset($offset)->limit(10)->orderBy("endTime desc")->all();
        if(empty($mockResult)){

            $data = ['code'=>1,'message'=>'success'];
        }else{
            foreach($mockResult as $k =>$v){
                $mockExamId = $v['mockExamId'];
                $mockExam = new  MockExam();
                $mockName = $mockExam->getName($mockExamId);
                $firsttime = date('Y-m-d H:i',$v['createTime']);
                $correctMsg = unserialize($v['correctMsg']);
                if($type == 1){
                    $correctCount = $correctMsg['verbal']['do'];//做题数
                    $total = 40;
                }elseif($type == 2){
                    $correctCount = $correctMsg['quant']['do'];
                    $total = 40;
                }else{
                    $correctCount = $correctMsg['all']['do'];
                    $total = 100;
                }
                $status = $v['status'];//1-完成 0-未完成
                if($status == 0){
                    $correctCount = MockRecord::find()->select("id")->where("uid = $uid and mockExamId = $mockExamId and correct = 1")->count();
                }
                $usetime = $v['useTime'];
                $minute = floor($usetime/60);
                $seconds = floor($usetime-60*$minute);
                $times = $minute.'m'.$seconds.'s';
                $score = $v['score'];
                $mock = ['mockExamId'=>$mockExamId,'firstTime'=>$firsttime,'score'=>$score,'mockName'=>$mockName,'correct'=>$correctCount,'total'=>$total,'correctRate'=>$v['correctRate'],'times'=>$times,'status'=>$v['status'],'mockType'=>$v['type']];
                $mocks[] = $mock;
            }
            $data = ['code'=>1,'message'=>'success','data'=>$mocks];
        }
        die(json_encode($data));
    }
    /**
     * app雷豆记录
     * by  yanni
     */
    public function actionIntegralRecord(){
        $uid = Yii::$app->session->get('uid');
        if(!$uid){
            die(json_encode( ['code'=>99,'message'=>'请登录']));
        }
        $page = Yii::$app->request->get('page',1);
        $type = Yii::$app->request->get('type');
        $where = '';
        if($type == 1){
            $where .= 'AND type=1';
        }
        if($type == 2){
            $where .= 'AND type=2';
        }
        $pageSize = 10;
        $limit = (($page-1)*$pageSize).",$pageSize";
        $data = uc_user_integral1($uid,"limit $limit",$where);
        if(!is_array($data['details'])){
            $data['details'] = [];
            $res = ['code'=>1,'message'=>'没有雷豆流水','data'=>$data];
        } else{
            $res = ['code'=>1,'message'=>'获取成功','data'=>$data];
        }
        die(json_encode($res));
    }
    /**
     * appGRE订单（已购课程）
     * by  yanni
     */
    public function actionMyOrder(){
        $timeId = Yii::$app->request->get('timeId');
        if($timeId){
            $uid = $timeId;
        }else{
            $uid = Yii::$app->session->get('uid');
            if(!$uid){
                die(json_encode( ['code'=>99,'message'=>'请登录']));
            }
        }
        $page = Yii::$app->request->get('page',1);
        $type = Yii::$app->request->get('type',1);
        $model = new Content();
        if($type==1){
            $strArr = $model->getCurriculumIdArr(4329);
        } elseif($type==2){
            $strArr = $model->getCurriculumIdArr(4330);
        }elseif($type==3){
            $strArr = $model->getCurriculumIdArr(8282);
        } else {
            $strArr ='';
        }
        $str ='';
        if($strArr) {
            foreach ($strArr as $v) {
                $str .= $v['contentId'] . ',';
            }
            $str = rtrim($str, ",");
        }
        $data = Method::post("https://order.viplgw.cn/pay/api/gre-order",['uid' => $uid,'idStr' => $str,'pageSize' => 5,'page' => $page]);
        $data = json_decode($data,true);
        $user = User::find()->asArray()->select(['username','nickname'])->where("uid=$uid")->one();
        if($user['nickname']==''){
            $nickname = $user['username'];
        } else{
            $nickname = $user['nickname'];
        }
        $arrData = array();
        foreach($data['data'] as $k=>$v){
            $videos = [];
            $sign = $model->getClass(['fields' => 'duration,commencement,performance','where' =>"c.id={$v['contentId']}",'pageSize' => 1]);
            $detail = '';
            $detail['duration'] = $sign[0]['duration'];
            $detail['commencement'] = $sign[0]['commencement'];
            $detail['performance'] = $sign[0]['performance'];
            $detail['name'] = $sign[0]['name'];
            $detail['image'] = $sign[0]['image'];
            $arrData[$k]['detail'] =  $detail;
            $arrData[$k]['id'] = $v['id'];
            $arrData[$k]['orderNumber'] = $v['orderNumber'];
            $arrData[$k]['totalMoney'] = $v['totalMoney'];
            $arrData[$k]['freight'] = $v['freight'];
            $arrData[$k]['status'] = $v['status'];
            $arrData[$k]['createTime'] = $v['createTime'];
            $arrData[$k]['expireTime'] = $v['endTime2'];
            $arrData[$k]['payTime'] = $v['payTime'];
            $arrData[$k]['price'] = $v['price'];
            $arrData[$k]['contentId'] = $v['contentId'];
            $arrData[$k]['num'] = $v['num'];
            $arrData[$k]['nickname'] = $nickname;
            $arrData[$k]['consignee'] = $v['consignee'];
            if($v['startTime']<=time() && $v['endTime2']>=time()) {
                $sdk = Livesdkid::find()->asArray()->select(['livesdkid','clientKey','auditionKey','classroom','sdkType'])->where("contentId={$v['contentId']}")->one();
                if($v['endTime']<time()){
                    $sdk['livesdkid'] = '';
                }
                $arrData[$k]['Livesdkid'] =  $sdk;
                $types = Video::find()->select("type")->asArray()->where("cid={$v['contentId']} and grade='".$v['grade']."'")->groupBy("type")->orderBy("typeSort asc")->all();
                foreach($types as $j => $t){
                    $video = Video::find()->asArray()->select(['name','sdk','pwd','liveId'])->where("cid={$v['contentId']} and grade='".$v['grade']."' and type = '".$t['type']."'")->orderBy("sort desc")->all();
                    $videos[] = ['type'=>$t['type'],'data'=>$video];
                }
                $arrData[$k]['video'] = $videos;
            }
        }

        die(json_encode(['code'=>1,'data'=>$arrData]));
    }
    /**
     * app订单详情（已购课程）
     * by  yanni
     */
    public function actionPayOrderDetail()
    {
        $uid = Yii::$app->session->get('uid');
        if (!$uid) {
            die(json_encode(['code' => 99, 'message' => '请登录']));
        }
        $orderId = Yii::$app->request->get('orderId');
        $order = Method::post("https://order.viplgw.cn/pay/api/select-order",['orderId' => $orderId]);
        $order = json_decode($order,true);
        $model = new Content();
        $data = $model->getClass(['fields' => 'duration,commencement,performance','where' =>"c.id={$order['contentId']}",'pageSize' => 1]);
        $order['duration'] = $data[0]['duration'];
        $order['commencement'] = $data[0]['commencement'];
        $order['performance'] = $data[0]['performance'];
        $order['name'] = $data[0]['name'];
        $order['image'] = $data[0]['image'];
        die(json_encode(['code' => 1, 'data' => $order]));
    }

    /**
     * 个人中心：我的消息
     * by yanni
     */
    public function actionSystemMessage(){
        $uid = Yii::$app->session->get('uid');
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'请登录']));
        }
        $page = Yii::$app->request->post('page',1);
        $pageSize = Yii::$app->request->post('pageSize',10);
        $model = new PushMessage();
        $data = $model->getMyMessage($page,$pageSize,$uid);
        die(json_encode(['code'=>1,'data'=>$data]));
    }

    /**
     * 个人中心：我的题目评论
     * by  yanni
     */
    public function actionMyQuestionComment(){
        $uid = Yii::$app->session->get('uid');
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'请登录']));
        }
        $page = Yii::$app->request->post('page',1);
        $pageSize = Yii::$app->request->post('pageSize',10);
        $type = Yii::$app->request->post('type',1);
        $model = new UserComment();
        if($type==1){   //我的评论
            $data = $model->getByUidComment($page,$pageSize,$uid,1);
        } else {    //我的回复
            $data = $model->getReplyUser($page,$pageSize,$uid,1);
        }
        $replyMyNum = UserComment::find()->select(['id'])->where("replyUid={$uid}")->count();
        die(json_encode(['code'=>1,'data'=>['comments'=>$data,'replyMyNum'=>$replyMyNum]]));
    }

    /**
     * 个人中心：我的文章评论
     * by  yanni
     */
    public function actionMyArticleComment(){
        $uid = Yii::$app->session->get('uid');
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'请登录']));
        }
        $page = Yii::$app->request->post('page',1);
        $pageSize = Yii::$app->request->post('pageSize',10);
        $type = Yii::$app->request->post('type',1);
        $model = new UserComment();
        if($type==1){   //我的评论
            $data = $model->getByUidComment($page,$pageSize,$uid,2);
        } else {    //我的回复
            $data = $model->getReplyUser($page,$pageSize,$uid,2);
        }
        $replyMyNum = UserComment::find()->select(['id'])->where("replyUid={$uid}")->count();
        die(json_encode(['code'=>1,'data'=>['comments'=>$data,'replyMyNum'=>$replyMyNum]]));
    }







  /**
    *GRE  会员vip积分和称号  新增3
    * by  sjeam
    * post接口： /app/user/my-behavior
    * 参    数：
    */
    public  function actionMyBehavior(){
        
              $uid = Yii::$app->session->get('uid');
              // $uid =30185;
              include_once($_SERVER['DOCUMENT_ROOT'].'/../libs/ucenter/ucenter.php');
              if($uid){
                  $behavior = uc_user_behavior($uid)['behavior'];
              }else{
                  $behavior = 0;
              }
              //行为积分对应称号
              if($behavior<10){
                  $behaviorName = '';
                  $behaviorNow = 10-intval($behavior);
              }elseif($behavior<30){
                  $behaviorName = '青铜学水';
                  $behaviorNow = 30-intval($behavior);
              }elseif($behavior<50){
                  $behaviorName = '白银学沫';
                  $behaviorNow = 50-intval($behavior);
              }elseif($behavior<140){
                  $behaviorName = '黄金学渣';
                  $behaviorNow = 140-intval($behavior);
              }elseif($behavior<300){
                  $behaviorName = '铂金学痞';
                  $behaviorNow = 300-intval($behavior);
              }elseif($behavior<450){
                  $behaviorName = '钻石学霸';
                  $behaviorNow = 450-intval($behavior);
              }elseif($behavior<800){
                  $behaviorName = '星耀学神';
                  $behaviorNow = 800-intval($behavior);
              }else{
                  $behaviorName = '王者学魔';
                  $behaviorNow =null;
              }
      
              $behaviorClass= User:: getBehaviorClass();
      
              $data = array('behavior'=>$behavior,'behaviorName'=> $behaviorName,'behaviorNow'=>$behaviorNow,'behaviorClass'=>$behaviorClass);
      
      
            //   var_dump($data);die;
              die(Method::jsonGenerate(1,['data'=>$data],'succes'));
          }
      
      
      
          /**
          *GRE  我的雷豆  新增4
          * by  sjeam
          * post接口： /app/app-apinew /my-integral
          * 参    数：
          */
        //   public function actionMyIntegral(){
        //       $page = Yii::$app->request->post('page',1);
        //       $pageSize = Yii::$app->request->post('pageSize',10);
        //       $type = Yii::$app->request->post('type'); //1增加 2减少  //所有为空
        //       // $type =2;
        //       $uid = Yii::$app->session->get('uid');
        //       // 积分分页
        //       $limit ='limit '.(($page-1)*$pageSize).",$pageSize";
        //       // 条件筛选条件
        //       !empty($type) ? $where = " and type =$type" : $where = "";
        //       $integral = uc_user_integral1($uid,$limit,$where);
        //       $integral['total']= ceil($integral['count']/$pageSize);
        //       $integral['page'] = $page;
        //       is_array($integral['details']) ? $integral['details'] : $integral['details']=null;
        //       // var_dump($integral);die;
        //       die(Method::jsonGenerate(1,['data'=>$integral],'succes'));
      
        //   }



    /** 
    *GRE  消息中心 首页
    * by  sjeam
    * post接口： /app/user/notice-center     
    * 参    数： page  pagesize   search  1查询 所有，没做分页
    */
    public function actionNoticeCenter()
    {
        $userId      = Yii::$app->session->get('userId');
        $uid         = Yii::$app->session->get('uid');
        // var_dump($uid);die;
    //     $userId =40888;
    //    $uid = 30186;
    //--所有消息         
        //系统通知
        $sys         = count(PushMessage::find()->asArray()->where("uid =$uid and status= 1" )->orderBy('id desc')->All());
        //精选活动
        $culling     = count(Yii::$app->db->createCommand("select id from {{%culling}} where uid=$uid and isLook=1 ")->queryAll());
        //评论
        $gossip      = count(Yii::$app->db->createCommand("select r.id from gossip.{{%reply}}  r left join gossip.{{%gossip}} g on r.gossipId=g.id  where r.type=2 and  r.replyUser=$uid and r.isLook= 1 and g.belong =3 ")->queryAll());//吐槽八卦gossip
        $goss_post   = count(Yii::$app->db->createCommand("select r.id from gossip.{{%post_reply}} r left join gossip.{{%post}} p on r.postid=p.id where r.replyUid=$uid and (p.catId=42 or p.catId=43) and r.see=1 ")->queryAll());//资料、鸡精
        $question    = count(Yii::$app->db->createCommand("select id from {{%user_comment}} where replyUid=$uid and questionId is not null and status =1 ")->queryAll());    //做题评论    
        $information = count(Yii::$app->db->createCommand("select q.id from {{%user_comment}} q left join {{%content}} c on c.id=q.contentId where q.replyUid=$uid AND c.catId in (531,543,568) and q.contentid is not null and q.status =1")->queryAll()); //资讯评论
        $comment     = $gossip + $goss_post + $question + $information;
        // 总共消息条数
        $total = $sys+$comment+$culling;
        $count = ['system' => $sys, 'comment' => $comment, 'culling' => $culling];
    //--最新消息
        // 最新一条消息 by sjeam
       $sysMessage = PushMessage::find()->asArray()->where("uid =$uid and status= 1 " )->orderBy('id desc')->one();  //系统
       $activeMessage  = Yii::$app->db->createCommand("select c.*,co.name as title from {{%culling}} c left join {{%content}} co on c.noticeId=co.id where c.uid=$uid and c.isLook= 1 order by id desc")->queryOne(); // 活动   
       //最新评论
       $commentMessage [1]   = Yii::$app->db->createCommand("select  r.id,r.isLook,r.createTime,r.content,g.title,g.id as inforid,r.uName as replyName from gossip.{{%reply}} r left join gossip.{{%gossip}} g on r.gossipId=g.id where r.replyUser=$uid and g.belong = 3 and r.isLook= 1 order by r.createTime desc")->queryOne();//吐槽八卦gossip
       $commentMessage [2]   = Yii::$app->db->createCommand("select  r.id,r.see as isLook,r.createTime,r.content,p.title,p.id as inforid,r.replyName from gossip.{{%post_reply}} r left join gossip.{{%post}} p on r.postid=p.id where r.replyUid=$uid  and (p.catId=42 or p.catId=43) and  r.see = 1  order by r.createTime desc")->queryOne();//资料、鸡精
       $commentMessage [3]   = Yii::$app->db->createCommand("select  c.id,c.status as isLook,c.createTime,c.content,c.questionId as inforid,q.stem as title,s.name from {{%user_comment}} c left join {{%questions}} q on c.questionid=q.id left join {{%question_know}} s on q.knowId=s.id where c.replyUid=$uid and c.questionid is not null and c.status= 1  order by createTime desc")->queryOne();    //做题评论
       $commentMessage [4]   = Yii::$app->db->createCommand("select  c.id,c.status as isLook,c.createTime,c.content,c.contentId as inforid,q.name as title  from {{%user_comment}} c left join {{%content}} q on c.contentid=q.id where c.replyUid=$uid and c.contentid is not null and q.catId=543 and c.status= 1  order by createTime desc")->queryOne(); //资讯评论-考试指南、资讯内容
       $commentMessage [5]   = Yii::$app->db->createCommand("select  c.id,c.status as isLook,c.createTime,c.content,c.contentId as inforid,q.name as title  from {{%user_comment}} c left join {{%content}} q on c.contentid=q.id where c.replyUid=$uid and c.contentid is not null and q.catId=531 and c.status= 1 order by createTime desc")->queryOne(); //资讯评论-高分案例
       $commentMessage [6]   = Yii::$app->db->createCommand("select  c.id,c.status as isLook,c.createTime,c.content,c.contentId as inforid,q.name as title  from {{%user_comment}} c left join {{%content}} q on c.contentid=q.id where c.replyUid=$uid and c.contentid is not null and q.catId =568 and c.status= 1 order by createTime desc")->queryOne(); //资讯评论-知识讲堂
      
      
       //  var_dump( $commentMessage);
    // 根据 数组  中的时间 重新排序
        array_multisort($commentMessage,SORT_DESC,$commentMessage);
        $commentMessage=$commentMessage[0];
        // var_dump($commentMessage);die;
        // var_dump($count);die;
        !empty($sysMessage) ?$sysMessage:$sysMessage=null;
        !empty($activeMessage) ?$activeMessage:$activeMessage=null;
        !empty($commentMessage) ?$commentMessage:$commentMessage=null;
        // var_dump($sysMessage);die;
        $message =array('sysMessage'=>$sysMessage,'activeMessage'=>$activeMessage,'commentMessage'=>$commentMessage);
        die(Method::jsonGenerate(1, ['count' => $count,'total'=>$total,'message'=>$message],'succes'));
    }

    
    /**
     * 系统消息-列表
     * by  sjeam
     * post接口： /app/user/system-notice    
     */
     public function actionSystemNotice()
     {
         $uid   = Yii::$app->session->get('uid');
         $page     = Yii::$app->request->post("page",1);
         $pageSize = Yii::$app->request->post("pageSize",10);
         $system   = PushMessage::find()->asArray()->where(['uid' => $uid])->orderBy('id desc')->offset(($page-1)*$pageSize)->limit($pageSize)->all();
         $system   = PushMessage::handleNoticeType($system);
         foreach($system as$ky=> $v){
             $system[$ky]['content']= strip_tags( htmlspecialchars_decode($v['content']));
         }
         //  清楚查看系统消息状态
         PushMessage::updateAll(['status' => 1],['uid' => $uid,'status' => 0]);
         die(Method::jsonGenerate(1, ['system' => $system],'succes'));
     }
       
    /**
     * 活动列表-列表
     * by  sjeam
     * post接口： /app/user/activity    
     */ 
     public function actionActivity()
     {
         $uid      = Yii::$app->session->get('uid');
         $page     = Yii::$app->request->post("page",1);
         $pageSize = Yii::$app->request->post("pageSize",10);
         $now_page = ($page - 1) * $pageSize;
         $data  = Yii::$app->db->createCommand("select c.*,co.name as title from {{%culling}} c left join {{%content}} co on c.noticeId=co.id where c.uid=$uid and c.isLook= 1 order by id desc limit $now_page,$pageSize")->queryAll(); // 活动   
         die(Method::jsonGenerate(1, ['content' => $data],'succes'));
     }



    /**
     * 周报详情
     * by  sjeam
     * post接口： /app/user/week-msg-details    
     */
     public function actionWeekMsgDetails()
     {
         $uid       = Yii::$app->session->get('uid');
         $week_data = WeekRecord::find()->asArray()->select('questionNum,beanNum,mybean')->where(['uid' => $uid])->one();
         //  清楚查看系统消息状态
        //  PushMessage::updateAll(['status' => 1],['uid' => $uid,'status' => 0]);
         die(Method::jsonGenerate(1, ['week' => $week_data],'success'));
     }

     

     /**
     * 活动精选-消息查看状态修改
     * by  sjeam
     * post接口： /app/user/active-look
     */
     public function actionActiveLook()
     {
        $uid  = Yii::$app->session->get('uid');
        $id   = Yii::$app->request->post("id");
        Culling::updateLook($uid,$id);
        die(Method::jsonGenerate(1,null,'succes'));
    }

    
     /**
      * 回复我的-消息查看状态修改  type :
      * by  sjeam
      * post接口：/app/user/reply-look
     */
     public function actionReplyLook()
     {
        $id   = Yii::$app->request->post("id");
        $type   = Yii::$app->request->post("type"); //1吐槽 2鸡精/资料 3做题 4资讯 5案例  6知识讲堂
        if($type==1){
            Yii::$app->db->createCommand("update gossip.{{%reply}} set isLook = 0 where id=$id")->execute();
        }else if($type==2){
            Yii::$app->db->createCommand("update gossip.{{%post_reply}} set isLook = 0 where id=$id")->execute();
        }else{
            Yii::$app->db->createCommand("update {{%user_comment}} set status = 0 where id=$id")->execute();
        }
        // Culling::updateLook($userId,$id);
        die(Method::jsonGenerate(1,null,'succes'));
    }



    /**
     * 我的评论
     * by  sjeam
     * 响应参数type: 1吐槽 2鸡精下载 3做题 4资讯 5 高分案例  6知识讲堂
     * post接口：/app/user/comment-list
    */
     public function actionCommentList()
     {
         $uid      = Yii::$app->session->get('uid');
         $page     = Yii::$app->request->post("page",1);
         $pageSize = Yii::$app->request->post("pageSize",10);
         $type     = Yii::$app->request->post("type",2); //1、回复我的；2、我的评论
         $arr      = [];
         //TODO 评论 5类：(吐槽gossip reply八卦 相同) 吐槽gossip(post_reply帖子 catId 3、资料8、鸡精) 做题评论q_comment questionid 资讯q_comment contentid
         if ($type == 2){    //我的评论
             $gossip       = Yii::$app->db->createCommand("select  r.id,r.isLook,r.createTime,r.content,g.title,g.id as inforid from gossip.{{%reply}} r left join gossip.{{%gossip}} g on r.gossipId=g.id where r.uid=$uid and g.belong =3 ")->queryAll();//吐槽八卦gossip
             $goss_post    = Yii::$app->db->createCommand("select  r.id,r.see as isLook,r.createTime,r.content,p.title,p.id as inforid from gossip.{{%post_reply}} r left join gossip.{{%post}} p on r.postid=p.id where r.uid=$uid and (p.catId=42 or p.catId=43)")->queryAll();//资料、鸡精
             $question     = Yii::$app->db->createCommand("select  c.*,c.status as isLook,c.createTime,c.content,c.questionId as inforid,q.stem as title,s.name from {{%user_comment}} c left join {{%questions}} q on c.questionid=q.id left join {{%question_know}} s on q.knowId=s.id where c.uid=$uid and c.questionid is not null order by createTime desc")->queryAll();    //做题评论
             $information1 = Yii::$app->db->createCommand("select  c.*,c.status as isLook,c.createTime,c.content,c.contentId as inforid,q.name as title  from {{%user_comment}} c left join {{%content}} q on c.contentid=q.id where c.uid=$uid and c.contentid is not null and q.catId=543  order by createTime desc")->queryAll(); //资讯评论
             $information2 = Yii::$app->db->createCommand("select  c.*,c.status as isLook,c.createTime,c.content,c.contentId as inforid,q.name as title  from {{%user_comment}} c left join {{%content}} q on c.contentid=q.id where c.uid=$uid and c.contentid is not null and q.catId=531 order by createTime desc")->queryAll(); //资讯案例
             $information3 = Yii::$app->db->createCommand("select  c.*,c.status as isLook,c.createTime,c.content,c.contentId as inforid,q.name as title  from {{%user_comment}} c left join {{%content}} q on c.contentid=q.id where c.uid=$uid and c.contentid is not null and q.catId =568 order by createTime desc")->queryAll(); //资讯 知识讲堂
         }else{  //回复我的 by sjeam
            $gossip        = Yii::$app->db->createCommand("select  r.id,r.isLook,r.createTime,r.content,g.title,g.id as inforid,r.uName as replyName from gossip.{{%reply}} r left join gossip.{{%gossip}} g on r.gossipId=g.id where r.replyUser=$uid and g.belong = 3 order by r.createTime desc")->queryAll();//吐槽八卦gossip
            $goss_post     = Yii::$app->db->createCommand("select  r.id,r.see as isLook,r.createTime,r.content,p.title,p.id as inforid,r.replyName from gossip.{{%post_reply}} r left join gossip.{{%post}} p on r.postid=p.id where r.replyUid=$uid  and (p.catId=42 or p.catId=43) order by r.createTime desc")->queryAll();//资料、鸡精
            $question      = Yii::$app->db->createCommand("select  c.*,c.status as isLook,c.createTime,c.content,c.questionId as inforid,q.stem as title,s.name from {{%user_comment}} c left join {{%questions}} q on c.questionid=q.id left join {{%question_know}} s on q.knowId=s.id where c.replyUid=$uid and c.questionid is not null order by createTime desc")->queryAll();    //做题评论
            $information1  = Yii::$app->db->createCommand("select  c.*,c.status as isLook,c.createTime,c.content,c.contentId as inforid,q.name as title  from {{%user_comment}} c left join {{%content}} q on c.contentid=q.id where c.replyUid=$uid and c.contentid is not null and q.catId=543  order by createTime desc")->queryAll(); //资讯评论-考试指南、资讯内容
            $information2  = Yii::$app->db->createCommand("select  c.*,c.status as isLook,c.createTime,c.content,c.contentId as inforid,q.name as title  from {{%user_comment}} c left join {{%content}} q on c.contentid=q.id where c.replyUid=$uid and c.contentid is not null and q.catId=531 order by createTime desc")->queryAll(); //资讯评论-高分案例   
            $information3  = Yii::$app->db->createCommand("select  c.*,c.status as isLook,c.createTime,c.content,c.contentId as inforid,q.name as title  from {{%user_comment}} c left join {{%content}} q on c.contentid=q.id where c.replyUid=$uid and c.contentid is not null and q.catId  =568 order by createTime desc")->queryAll(); //资讯评论-知识讲堂   
        }
         if (!empty($gossip)){
             $gossip = Method::handleMyComment(1, $gossip);  //处理回复类型
             $arr    = array_merge($arr, $gossip);
         }
         if (!empty($goss_post)){
             $goss_post = Method::handleMyComment(2, $goss_post);
             $arr       = array_merge($arr, $goss_post);
         }
         if (!empty($question)){
             $question = Method::handleMyComment(3, $question);
             $arr      = array_merge($arr, $question);
         }
         if (!empty($information1)){
             $information1 = Method::handleMyComment(4, $information1);
             $arr         = array_merge($arr, $information1);
         }
         if (!empty($information2)){
             $information2 = Method::handleMyComment(5, $information2);
             $arr         = array_merge($arr, $information2);
         }
         if (!empty($information3)){
            $information2 = Method::handleMyComment(6, $information2);
            $arr         = array_merge($arr, $information2);
        }
  
         if (!empty($arr)){  //按照createTime排序
             array_multisort(array_column($arr, 'createTime'),SORT_DESC,$arr);
         }
         $data = array_splice($arr, ($page - 1) * $pageSize, $pageSize);
        //  var_dump($data);die;
         die(Method::jsonGenerate(1, ['content' => $data],'succes'));
     }



    
    /**
     * 行为积分 公用调动接口
     * sjeam
     * post接口： /app/app-apinew/user-behavior
     * 7 分享   （参照prame ）
     */
     public function actionUserBehavior(){
        $uid = Yii::$app->session->get('uid');
        $behavior = Yii::$app->request->post("behavior",7);
        $giveIntergral=  User::addBehavior($behavior,$uid);
        die(Method::jsonGenerate(1,['giveIntergral'=>$giveIntergral],'succes'));
    }

    /**
     * ios
     * 登录后合并数据
     * 未登录与登录状态下的数据
     * cy
     */
     public function actionMergeData(){
        $timeId = Yii::$app->request->post('timeId');
        $uid = Yii::$app->request->post('uid');
        $integral = Yii::$app->request->post('integral');
        if(!$uid || !$timeId){
            $data = ['code'=>0,'message'=>'参数错误'];
        }else{
            Method::post("https://order.viplgw.cn/cn/api/gre-merge-data",['uid' => $uid,'timeId'=>$timeId]);
            uc_user_edit_integral2($uid,1,$integral);
            $data = ['code'=>1,'message'=>'success'];
        }
        die(json_encode($data));
    }


    //安卓版本更新  新增10  待上传市场后更新
    public function actionVersions(){
        $data = [
            'versions' =>7,
            'text' => '
            ①修复部分数学题目题干，选项公式加载出错问题
            ②优化登陆界面
            ⑤修复其他bug',
            'apk' => 'https://file.viplgw.cn/gre/gre7.apk'
        ];
        die(json_encode(['code'=>1,'message'=>'success','data'=>$data]));
    }



    /**
     * 关注小编接口
     * by  sjeam
     */
    public function actionUserFollow(){
        $authorId = Yii::$app->request->get('authorId');
        $uid = Yii::$app->session->get('uid');
        if($uid){
            $inspect = UserFollow::find()->asArray()->where("uid={$uid} and followUser={$authorId}")->one();
            if($inspect){
                UserFollow::deleteAll("uid = {$uid} and followUser = {$authorId}");
                $res = ['code' => 1,'message'=>'你已取消关注'];
            } else {
                $model = new UserFollow();
                $model->uid = $uid;
                $model->followUser = $authorId;
                $model->createTime = time();
                $re = $model->save();
                if($re>0){
                    $res = ['code' => 1,'message'=>'关注成功'];
                } else {
                    $res = ['code' => 0,'message'=>'关注失败'];
                }
            }
        } else {
            $res = ['code' => 0,'message'=>'请登录'];
        }
        die(json_encode($res));
    }


    /**
     * 用户评论接口
     * by sjeam
     */
    public function actionUserComment(){
        $uid = Yii::$app->session->get('uid');
        $contentId = Yii::$app->request->post('contentId');
        $content = Yii::$app->request->post('content');
        $commentImage = Yii::$app->request->post('commentImage');
        if(!$uid){
            die(json_encode(['code' => 99,'message'=>'请登录']));
        }
        if($content && $contentId){
            $prent = Content::find()->asArray()->select(['pid'])->where("id={$contentId}")->one();
            if($prent['pid']!=0){
                $contentId = $prent['pid'];
            }
            $model = new UserComment();
            $model->contentId = $contentId;
            $model->uid = $uid;
            $model->content = $content;
            $model->type = 1;
            $model->createTime = time();
            $model->commentImage = $commentImage;
            $r = $model->save();
            if($r>0){
                $data = $model->getCommentById($model->primaryKey);
                $res = ['code' => 1,'message'=>'评论成功','data'=>$data];
            } else {
                $res = ['code' => 0,'message'=>'评论失败'];
            }
        }else{
            $res = ['code' => 0,'message'=>'评论不能为空'];
        }
        die(json_encode($res));
    }


        /**
     * 用户回复接口
     * bysjeam
     */
    public function actionUserReply(){
        $uid = Yii::$app->session->get('uid');
        $contentId = Yii::$app->request->post('contentId');
        $content = Yii::$app->request->post('content');
        $replyName = Yii::$app->request->post('replyName');
        $commentId = Yii::$app->request->post('commentId');
        $commentImage = Yii::$app->request->post('commentImage');
        $replyUid = Yii::$app->request->post('replyUid');
        if(!$uid){
            die(json_encode(['code' => 0,'message'=>'请登录']));
        }
        if($content && $contentId && $commentId && $replyName){
            $prent = Content::find()->asArray()->select(['pid'])->where("id={$contentId}")->one();
            if($prent['pid']!=0){
                $contentId = $prent['pid'];
            }
            $model = new UserComment();
            $model->contentId = $contentId;
            $model->pid = $commentId;
            $model->uid = $uid;
            $model->content = $content;
            $model->type = 2;
            $model->createTime = time();
            $model->replyName = $replyName;
            $model->replyUid = $replyUid;
            $model->commentImage = $commentImage;
            $r = $model->save();
            if($r>0){
                $data = $model->getCommentById($model->primaryKey);
                $res = ['code' => 1,'message'=>'回复成功','data'=>$data];
            } else {
                $res = ['code' => 0,'message'=>'回复失败'];
            }
        }else{
            $res = ['code' => 2,'message'=>'回复不能为空'];
        }
        die(json_encode($res));
    }


    /**
     * 分享奖励
     * by  yanni
     */
     public function actionSharingRewards(){
        $uid = Yii::$app->session->get('uid');
        if($uid){
            $dayTime = date("Y-m-d",time());
            $rewards = SharRewards::find()->asArray()->where("uid={$uid} and rewardDate='$dayTime'")->one();
            if(empty($rewards)){
                $model = new SharRewards();
                $model->uid = $uid;
                $model->rewardNumber = 1;
                $model->rewardDate = date("Y-m-d",time());
                $model->save();
                $res = ['code'=>1,'message'=>'获得10点积分奖励'];
                uc_user_edit_integral1($uid,'分享奖励',1,10);
            } else{
                SharRewards::updateAll(['rewardNumber'=>$rewards['rewardNumber']+1],"uid={$uid} and rewardDate='{$dayTime}'");
                if($rewards['rewardNumber']>10){
                    $res = ['code'=>1,'message'=>'每天只能获得十次分享奖励'];
                } else{
                    uc_user_edit_integral1($uid,'分享奖励',1,10);
                    $res = ['code'=>1,'message'=>'获得10点积分奖励'];
                }
            }
        } else{
            $res = ['code'=>1,'message'=>'分享成功'];
        }
        die(json_encode($res));
    }
}