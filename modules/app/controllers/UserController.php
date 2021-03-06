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
     * ????????????
     * by  yanni
     */
     public function actionUserSurvey(){
        $uid = Yii::$app->session->get('uid');
        if(!$uid){
            die(json_encode(['code'=>99,'data'=>'','message'=>'?????????????????????']));
        }
        $diaoCha = UserSurvey::find()->asArray()->where("uid={$uid}")->one();
        if(!empty($diaoCha)){
            $res = ['code'=>1,'data'=>$diaoCha,'message'=>'????????????'];
        } else{
            $res = ['code'=>2,'data'=>[],'message'=>'??????????????????'];
        }
        die(json_encode($res));
    }

    /**
     * ??????????????????
     */
    public function actionSubSurvey(){
        $uid = Yii::$app->session->get('uid');
        if(!$uid){
            die(json_encode(['code'=>99,'data'=>'','message'=>'????????????']));
        }
        $testTimes = Yii::$app->request->post('testTimes');   //????????????
        $whether = Yii::$app->request->post('whether');       //??????????????????
        $estimatedTime = Yii::$app->request->post('estimatedTime');   //??????????????????
        $targetScore = Yii::$app->request->post('targetScore');       //????????????
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
            $res = ['code'=>1,'message'=>'????????????'];
        } else{
            $res = ['code'=>0,'message'=>'????????????'];
        }
        die(json_encode($res));
    }

    /**
     * ????????????
     * by  yanni
     */
    public function actionPersonalCenter(){
        $uid = Yii::$app->session->get('uid');
        $userId = Yii::$app->session->get('userId');
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'?????????']));
        }
        // by jeam ??????
        WeekRecord::handleWeekMsg($userId,$uid);    //????????????
        $questionTotal = UserAnswer::find()->asArray()->where("uid={$uid}")->count();   //????????????
        $correctNum = UserAnswer::find()->asArray()->where("uid={$uid} and correct=1")->count();  //????????????
        $userSurvey = UserSurvey::find()->asArray()->where("uid={$uid}")->one();          //????????????
        $day = date("Y-m-d");
        $UserSign = UserSign::find()->asArray()->where("uid=$uid and createDay='$day'")->one();  //??????????????????
        if(empty($UserSign)){
            $sign = 0;
        } else{
            $sign = 1;
        }
        $userSurvey['dateTime'] = date('Y-m-d',$userSurvey['estimatedTime']);    //???????????????????????????
        $countDown = $userSurvey['estimatedTime']-time();
        $userSurvey['countDown'] = ceil($countDown/86400);        //?????????
        $userInfor = User::find()->asArray()->where("uid={$uid}")->one();        //????????????
        if(empty($userInfor['image'])){ $userInfor['image']='/cn/images/details_defaultImg.png';}
        $look = Method::post("https://bbs.viplgw.cn/cn/api/check-look",['uid' => $uid]);//????????????
        $look = json_decode($look,'true');
        if($look['code']==1){
            $isLook = 1;
        } else{
            $isLook = 0;
        }
        $userMessage = PushMessage::find()->asArray()->select(['id'])->where("uid={$uid} and status=1")->count();    //????????????????????????
        $replyUser = UserComment::find()->asArray()->select(['id'])->where("replyUid={$uid} and status=1")->count();   //?????????????????????
        if($userMessage>0 || $replyUser>0){
            $isGreLook = 1;
        } else{
            $isGreLook = 0;
        }
        $correctRate = round($correctNum / $questionTotal * 100)."%";
        $edition = '1.0';
        $publicNumber = '??????GRE';
        $groupNumber = '317282270';
        $officialWebsite = 'gre.viplgw.cn/';
        $data = ['questionTotal'=>$questionTotal,'correctRate'=>$correctRate,'userInfor'=>$userInfor,'userSurvey'=>$userSurvey,'edition'=>$edition,'publicNumber'=>$publicNumber,'groupNumber'=>$groupNumber,'officialWebsite'=>$officialWebsite,'isLook'=>$isLook,'isGreLook'=>$isGreLook,'sign'=>$sign];
        die(json_encode(['code'=>1,'data'=>$data,'message'=>'??????????????????']));
    }
    /**
     * GRE ????????????
     * ????????????
     * cy
     */
    public function actionQuestionCollect(){
        $uid = Yii::$app->session->get('uid');
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'?????????']));
        }
        $cat = Yii::$app->request->get("sectionId",0);//??????
        $source = Yii::$app->request->get("sourceId",0);//??????
        $level = Yii::$app->request->get("levelId",0);//????????????
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
     * gre ????????????
     * ????????????
     * cy
     */
    public function actionUserNote(){
        $uid = Yii::$app->session->get('uid');
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'?????????']));
        }
        $cat = Yii::$app->request->get("catId",1);//1-?????? 2-?????? 3-??????
        $page = Yii::$app->request->get("page",1);
        $pageSize = Yii::$app->request->get("pageSize",10);
        $limit = " limit ".(($page-1)*$pageSize).','.$pageSize;
        $questionNotes = Question::getUserNotes($uid,$cat,$limit);
        $data = ['code'=>1,'message'=>'success','data'=>['notes'=>$questionNotes]];
        die(json_encode($data));
    }
    /**
     * gre ????????????
     * ????????????
     * cy
     */
    public function actionMyCollect(){
        $uid = Yii::$app->session->get('uid');
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'?????????']));
        }
        $type = Yii::$app->request->get("type",1);//1-???????????? 2-???????????? 3-???????????? 4-????????????????????????
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
     * ??????????????????
     * by yanni
     */
    public function actionRecordMake(){
        $uid = Yii::$app->session->get('uid');
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'?????????']));
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
        if($state){    //????????????  ?????????1 ??????2???
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
        $arrData['questions'] = $data['data'];        //????????????
        $arrData['totalPage'] = $data['totalPage'];    //?????????
        $arrData['sources'] = $sources;               //??????
        $arrData['levels'] = QuestionLevel::find()->asArray()->all();    //??????
        $arrData['sections'] =  QuestionCat::find()->asArray()->all();   //????????????
        $res = ['code'=>1,'data'=>$arrData,'message'=>'??????????????????'];
        die(json_encode($res));
    }

    /**
     * ??????????????????
     */
    public function actionErrorRecord(){
        $uid = Yii::$app->session->get('uid');
        $sectionId = Yii::$app->request->get('sectionId');
        $sourceId = Yii::$app->request->get('sourceId');
        $levelId = Yii::$app->request->get('levelId');
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'?????????']));
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
        $arrData['sections'] =  QuestionCat::find()->asArray()->all();   //????????????
        $res = ['code'=>1,'data'=>$arrData,'message'=>'??????????????????'];
        die(json_encode($res));
    }
    /**
     * ????????????????????????
     */
    public function actionErrorRecordDetail(){
        $limit = Yii::$app->request->get('page',1);
        $uid = Yii::$app->session->get('uid');
        $sectionId = Yii::$app->request->get('sectionId');
        $sourceId = Yii::$app->request->get('sourceId');
        $levelId = Yii::$app->request->get('levelId');
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'?????????']));
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
        $res = ['code'=>1,'data'=>$data,'message'=>'??????????????????'];
        die(json_encode($res));
    }
    /**
     * ???????????????
     * by  yanni
     */
    public function actionStartWrongQuestion(){
        $plKey = Yii::$app->request->get('page');    //????????????
        $uid = Yii::$app->session->get('uid');
        $sectionId = Yii::$app->request->get('sectionId');
        $sourceId = Yii::$app->request->get('sourceId');
        $levelId = Yii::$app->request->get('levelId');
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'?????????']));
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
            $data = $userModel->getErrorRecordDetail($where,'ORDER BY ua.createTime desc',$plKey);   //??????????????????
            $queIdStr = '';
            foreach($data as $v){
                $queIdStr .= $v['questionId'].',';
            }
            $queIdStr = rtrim($queIdStr, ',');
            Yii::$app->session->set('errorQueIds',$queIdStr);   //session??????????????????
            die(json_encode(['code'=>1,'message'=>'????????????????????????']));
        }
    }

    /**
     * ???????????????
     * by  yanni
     */
    public function actionDoWrongQuestion(){
        $uid = Yii::$app->session->get('uid');
        $source = Yii::$app->request->get('source');
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'?????????']));
        }
        $errorQueIds = Yii::$app->session->get('errorQueIds');   //session??????????????????
        if(!$errorQueIds){
            die(json_encode(['code'=>0,'message'=>'session?????????????????????']));
        }
        $doQuestionStr = Yii::$app->session->get('doQuestionStr');   //session??????????????????????????????
        $doQuestionStr = (!empty($doQuestionStr))?$doQuestionStr :'false';
        $model = new UserAnswer();
        $c_question = $model->getErrorQuestion($errorQueIds,$doQuestionStr,$uid);   //??????????????????????????????
        if(empty($c_question)){
            die(json_encode(['code'=>98,'message'=>'?????????????????????']));
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
        die(json_encode(['code'=>1,'data'=>$data,'message'=>'????????????????????????']));
    }
    /**
     * ????????????
     * yanni
     */
    public function actionWrongQuestionAnswer(){
        $uid = Yii::$app->session->get('uid');
        if($uid){
            $questionId = Yii::$app->request->post('questionId');
            $answer = Yii::$app->request->post('answer');
            $useTime = Yii::$app->request->post('useTime');
            if(!$questionId || !$answer || !$useTime){
                die(json_encode(['code' => 0,'message'=>'?????????????????????']));
            }
            $doQuestionStr = Yii::$app->session->get('doQuestionStr');   //??????????????????ID
            if(!empty($doQuestionStr)){
                $doQuestionStr .= ",".$questionId;
            } else {
                $doQuestionStr = $questionId;
            }
            $model = new UserAnswer();
            $correct = $model->checkCorrect($questionId,$answer);  //????????????????????????????????????
            UserAnswer::updateAll(['answer'=>$answer,'useTime'=>$useTime,'correct'=>$correct],"uid={$uid} and questionId={$questionId}");
            Yii::$app->session->set('doQuestionStr',$doQuestionStr);
            SynchroLog::updateAll(['lastTime'=>time()],"uid={$uid}");
            $res = ['code' => 1,'message'=>'????????????'];
        }else{
            $res = ['code' => 99,'message'=>'?????????'];
        }
        die(json_encode($res));
    }
    /**
     * ??????????????????
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
                $res['message'] = '?????????????????????';
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
                    die(json_encode(['code' => 0, 'message' => '?????????????????????????????????']));
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

                        $res['message'] = '????????????';
                        uc_user_edit($userData->userName,'','','',$phone,1);

                    } else {

                        $res['code'] = 0;

                        $res['message'] = '???????????????';

                    }

                } else {

                    $res['code'] = 0;

                    $res['message'] = '???????????????';

                }

            } else {

                $model->updateAll($userInfo, "uid=$uid");

                $userData = $model->find()->where("uid=$uid")->one();

                Yii::$app->session->set('userData', $userData);
                setcookie('loginData',json_encode($userData), time()+3600*24*30,'/');

                $res['code'] = 1;

                $res['message'] = '????????????';

            }

        } else {

            $model->updateAll($userInfo, "uid=$uid");

            $userData = $model->find()->where("uid=$uid")->one();

            Yii::$app->session->set('userData', $userData);
            setcookie('loginData',json_encode($userData), time()+3600*24*30,'/');

            $res['code'] = 1;

            $res['message'] = '????????????';

        }

        die(json_encode($res));

    }

    /**
     * ??????????????????
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

            die(json_encode(['code' => 0, 'message' => '?????????????????????']));

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

                $res['message'] = '????????????';
                uc_user_edit($userData->userName,'','',$email,'',1);

            } else {

                $res['code'] = 0;

                $res['message'] = '???????????????';

            }

        } else {

            $res['code'] = 0;

            $res['message'] = '???????????????';

        }

        die(json_encode($res));

    }

    /**
     * ??????????????????
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

            die(json_encode(['code' => 0, 'message' => '??????????????????']));

        } else {

            $model->updateAll(['userPass' => md5($newPassword)], "uid=$uid");

            $userData = $model->find()->where("uid=$uid")->one();

            Yii::$app->session->set('userData', $userData);

            $res['code'] = 1;

            $res['message'] = '????????????';

        }

        die(json_encode($res));

    }
    /**
     * ????????????
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
            $res['message'] = '????????????';

        } else {

            $res['code'] = 0;

            $res['message'] = '????????????????????????';

        }

        die(json_encode($res));
    }




    /**
     * APP????????????
     * by  yanni
     */
    public function actionOrderDetail(){
        $id = Yii::$app->request->get('id');
        $timeId = Yii::$app->request->get('timeId');
        if(!$timeId){
            $uid = Yii::$app->session->get('uid');
            if(!$uid){
                die(json_encode(['code' => 99, 'message' => '?????????']));
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
        $res = ['code'=>1,'message'=>'????????????','data'=>$data];
        die(json_encode($res));
    }

    /**
     * app??????????????????
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
                die(json_encode(['code' => 99,'message'=>'?????????']));
            }
        }
        $data = Method::post("https://order.viplgw.cn/pay/api/default-address",['id' => $addressId,'uid'=>$uid]);
        $data = json_decode($data, true);
        if($data['code']==1){
            $res = ['code'=>1,'message'=>'????????????'];
        } else{
            $res = $data;
        }
        die(json_encode($res));
    }

    /**
     * app??????????????????
     */
    public function actionAddReceivingAddress(){
        $timeId = Yii::$app->request->post('timeId');
        if($timeId){
            $uid = $timeId;
        }else{
            $uid = Yii::$app->session->get('uid');
            if(!$uid){
                die(json_encode(['code' => 99,'message'=>'?????????']));
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
     *app ????????????
     */
    public function actionDelReceivingAddress(){
        $timeId = Yii::$app->request->get('timeId');
        if($timeId){
            $uid = $timeId;
        }else{
            $uid = Yii::$app->session->get('uid');
            if(!$uid){
                die(json_encode(['code' => 99,'message'=>'?????????']));
            }
        }
        $id = Yii::$app->request->get('id');
        $data = Method::post("https://order.viplgw.cn/pay/api/del-receiving-address",['uid' => $uid,'id'=>$id]);
        $data = json_decode($data,true);
        die(json_encode($data));
    }
    /**
     * ????????????
     * cy
     * type 1-?????? 2-?????? 3-??????
     */
    public function actionMockRecord(){
        $uid = Yii::$app->session->get('uid');
        if(!$uid){
            die(json_encode(['code' => 99,'message'=>'?????????']));
        }
        $type = Yii::$app->request->post('type',1);//1-?????? 2-?????? 3-??????
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
                    $correctCount = $correctMsg['verbal']['do'];//?????????
                    $total = 40;
                }elseif($type == 2){
                    $correctCount = $correctMsg['quant']['do'];
                    $total = 40;
                }else{
                    $correctCount = $correctMsg['all']['do'];
                    $total = 100;
                }
                $status = $v['status'];//1-?????? 0-?????????
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
     * app????????????
     * by  yanni
     */
    public function actionIntegralRecord(){
        $uid = Yii::$app->session->get('uid');
        if(!$uid){
            die(json_encode( ['code'=>99,'message'=>'?????????']));
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
            $res = ['code'=>1,'message'=>'??????????????????','data'=>$data];
        } else{
            $res = ['code'=>1,'message'=>'????????????','data'=>$data];
        }
        die(json_encode($res));
    }
    /**
     * appGRE????????????????????????
     * by  yanni
     */
    public function actionMyOrder(){
        $timeId = Yii::$app->request->get('timeId');
        if($timeId){
            $uid = $timeId;
        }else{
            $uid = Yii::$app->session->get('uid');
            if(!$uid){
                die(json_encode( ['code'=>99,'message'=>'?????????']));
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
     * app??????????????????????????????
     * by  yanni
     */
    public function actionPayOrderDetail()
    {
        $uid = Yii::$app->session->get('uid');
        if (!$uid) {
            die(json_encode(['code' => 99, 'message' => '?????????']));
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
     * ???????????????????????????
     * by yanni
     */
    public function actionSystemMessage(){
        $uid = Yii::$app->session->get('uid');
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'?????????']));
        }
        $page = Yii::$app->request->post('page',1);
        $pageSize = Yii::$app->request->post('pageSize',10);
        $model = new PushMessage();
        $data = $model->getMyMessage($page,$pageSize,$uid);
        die(json_encode(['code'=>1,'data'=>$data]));
    }

    /**
     * ?????????????????????????????????
     * by  yanni
     */
    public function actionMyQuestionComment(){
        $uid = Yii::$app->session->get('uid');
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'?????????']));
        }
        $page = Yii::$app->request->post('page',1);
        $pageSize = Yii::$app->request->post('pageSize',10);
        $type = Yii::$app->request->post('type',1);
        $model = new UserComment();
        if($type==1){   //????????????
            $data = $model->getByUidComment($page,$pageSize,$uid,1);
        } else {    //????????????
            $data = $model->getReplyUser($page,$pageSize,$uid,1);
        }
        $replyMyNum = UserComment::find()->select(['id'])->where("replyUid={$uid}")->count();
        die(json_encode(['code'=>1,'data'=>['comments'=>$data,'replyMyNum'=>$replyMyNum]]));
    }

    /**
     * ?????????????????????????????????
     * by  yanni
     */
    public function actionMyArticleComment(){
        $uid = Yii::$app->session->get('uid');
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'?????????']));
        }
        $page = Yii::$app->request->post('page',1);
        $pageSize = Yii::$app->request->post('pageSize',10);
        $type = Yii::$app->request->post('type',1);
        $model = new UserComment();
        if($type==1){   //????????????
            $data = $model->getByUidComment($page,$pageSize,$uid,2);
        } else {    //????????????
            $data = $model->getReplyUser($page,$pageSize,$uid,2);
        }
        $replyMyNum = UserComment::find()->select(['id'])->where("replyUid={$uid}")->count();
        die(json_encode(['code'=>1,'data'=>['comments'=>$data,'replyMyNum'=>$replyMyNum]]));
    }







  /**
    *GRE  ??????vip???????????????  ??????3
    * by  sjeam
    * post????????? /app/user/my-behavior
    * ???    ??????
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
              //????????????????????????
              if($behavior<10){
                  $behaviorName = '';
                  $behaviorNow = 10-intval($behavior);
              }elseif($behavior<30){
                  $behaviorName = '????????????';
                  $behaviorNow = 30-intval($behavior);
              }elseif($behavior<50){
                  $behaviorName = '????????????';
                  $behaviorNow = 50-intval($behavior);
              }elseif($behavior<140){
                  $behaviorName = '????????????';
                  $behaviorNow = 140-intval($behavior);
              }elseif($behavior<300){
                  $behaviorName = '????????????';
                  $behaviorNow = 300-intval($behavior);
              }elseif($behavior<450){
                  $behaviorName = '????????????';
                  $behaviorNow = 450-intval($behavior);
              }elseif($behavior<800){
                  $behaviorName = '????????????';
                  $behaviorNow = 800-intval($behavior);
              }else{
                  $behaviorName = '????????????';
                  $behaviorNow =null;
              }
      
              $behaviorClass= User:: getBehaviorClass();
      
              $data = array('behavior'=>$behavior,'behaviorName'=> $behaviorName,'behaviorNow'=>$behaviorNow,'behaviorClass'=>$behaviorClass);
      
      
            //   var_dump($data);die;
              die(Method::jsonGenerate(1,['data'=>$data],'succes'));
          }
      
      
      
          /**
          *GRE  ????????????  ??????4
          * by  sjeam
          * post????????? /app/app-apinew /my-integral
          * ???    ??????
          */
        //   public function actionMyIntegral(){
        //       $page = Yii::$app->request->post('page',1);
        //       $pageSize = Yii::$app->request->post('pageSize',10);
        //       $type = Yii::$app->request->post('type'); //1?????? 2??????  //????????????
        //       // $type =2;
        //       $uid = Yii::$app->session->get('uid');
        //       // ????????????
        //       $limit ='limit '.(($page-1)*$pageSize).",$pageSize";
        //       // ??????????????????
        //       !empty($type) ? $where = " and type =$type" : $where = "";
        //       $integral = uc_user_integral1($uid,$limit,$where);
        //       $integral['total']= ceil($integral['count']/$pageSize);
        //       $integral['page'] = $page;
        //       is_array($integral['details']) ? $integral['details'] : $integral['details']=null;
        //       // var_dump($integral);die;
        //       die(Method::jsonGenerate(1,['data'=>$integral],'succes'));
      
        //   }



    /** 
    *GRE  ???????????? ??????
    * by  sjeam
    * post????????? /app/user/notice-center     
    * ???    ?????? page  pagesize   search  1?????? ?????????????????????
    */
    public function actionNoticeCenter()
    {
        $userId      = Yii::$app->session->get('userId');
        $uid         = Yii::$app->session->get('uid');
        // var_dump($uid);die;
    //     $userId =40888;
    //    $uid = 30186;
    //--????????????         
        //????????????
        $sys         = count(PushMessage::find()->asArray()->where("uid =$uid and status= 1" )->orderBy('id desc')->All());
        //????????????
        $culling     = count(Yii::$app->db->createCommand("select id from {{%culling}} where uid=$uid and isLook=1 ")->queryAll());
        //??????
        $gossip      = count(Yii::$app->db->createCommand("select r.id from gossip.{{%reply}}  r left join gossip.{{%gossip}} g on r.gossipId=g.id  where r.type=2 and  r.replyUser=$uid and r.isLook= 1 and g.belong =3 ")->queryAll());//????????????gossip
        $goss_post   = count(Yii::$app->db->createCommand("select r.id from gossip.{{%post_reply}} r left join gossip.{{%post}} p on r.postid=p.id where r.replyUid=$uid and (p.catId=42 or p.catId=43) and r.see=1 ")->queryAll());//???????????????
        $question    = count(Yii::$app->db->createCommand("select id from {{%user_comment}} where replyUid=$uid and questionId is not null and status =1 ")->queryAll());    //????????????    
        $information = count(Yii::$app->db->createCommand("select q.id from {{%user_comment}} q left join {{%content}} c on c.id=q.contentId where q.replyUid=$uid AND c.catId in (531,543,568) and q.contentid is not null and q.status =1")->queryAll()); //????????????
        $comment     = $gossip + $goss_post + $question + $information;
        // ??????????????????
        $total = $sys+$comment+$culling;
        $count = ['system' => $sys, 'comment' => $comment, 'culling' => $culling];
    //--????????????
        // ?????????????????? by sjeam
       $sysMessage = PushMessage::find()->asArray()->where("uid =$uid and status= 1 " )->orderBy('id desc')->one();  //??????
       $activeMessage  = Yii::$app->db->createCommand("select c.*,co.name as title from {{%culling}} c left join {{%content}} co on c.noticeId=co.id where c.uid=$uid and c.isLook= 1 order by id desc")->queryOne(); // ??????   
       //????????????
       $commentMessage [1]   = Yii::$app->db->createCommand("select  r.id,r.isLook,r.createTime,r.content,g.title,g.id as inforid,r.uName as replyName from gossip.{{%reply}} r left join gossip.{{%gossip}} g on r.gossipId=g.id where r.replyUser=$uid and g.belong = 3 and r.isLook= 1 order by r.createTime desc")->queryOne();//????????????gossip
       $commentMessage [2]   = Yii::$app->db->createCommand("select  r.id,r.see as isLook,r.createTime,r.content,p.title,p.id as inforid,r.replyName from gossip.{{%post_reply}} r left join gossip.{{%post}} p on r.postid=p.id where r.replyUid=$uid  and (p.catId=42 or p.catId=43) and  r.see = 1  order by r.createTime desc")->queryOne();//???????????????
       $commentMessage [3]   = Yii::$app->db->createCommand("select  c.id,c.status as isLook,c.createTime,c.content,c.questionId as inforid,q.stem as title,s.name from {{%user_comment}} c left join {{%questions}} q on c.questionid=q.id left join {{%question_know}} s on q.knowId=s.id where c.replyUid=$uid and c.questionid is not null and c.status= 1  order by createTime desc")->queryOne();    //????????????
       $commentMessage [4]   = Yii::$app->db->createCommand("select  c.id,c.status as isLook,c.createTime,c.content,c.contentId as inforid,q.name as title  from {{%user_comment}} c left join {{%content}} q on c.contentid=q.id where c.replyUid=$uid and c.contentid is not null and q.catId=543 and c.status= 1  order by createTime desc")->queryOne(); //????????????-???????????????????????????
       $commentMessage [5]   = Yii::$app->db->createCommand("select  c.id,c.status as isLook,c.createTime,c.content,c.contentId as inforid,q.name as title  from {{%user_comment}} c left join {{%content}} q on c.contentid=q.id where c.replyUid=$uid and c.contentid is not null and q.catId=531 and c.status= 1 order by createTime desc")->queryOne(); //????????????-????????????
       $commentMessage [6]   = Yii::$app->db->createCommand("select  c.id,c.status as isLook,c.createTime,c.content,c.contentId as inforid,q.name as title  from {{%user_comment}} c left join {{%content}} q on c.contentid=q.id where c.replyUid=$uid and c.contentid is not null and q.catId =568 and c.status= 1 order by createTime desc")->queryOne(); //????????????-????????????
      
      
       //  var_dump( $commentMessage);
    // ?????? ??????  ???????????? ????????????
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
     * ????????????-??????
     * by  sjeam
     * post????????? /app/user/system-notice    
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
         //  ??????????????????????????????
         PushMessage::updateAll(['status' => 1],['uid' => $uid,'status' => 0]);
         die(Method::jsonGenerate(1, ['system' => $system],'succes'));
     }
       
    /**
     * ????????????-??????
     * by  sjeam
     * post????????? /app/user/activity    
     */ 
     public function actionActivity()
     {
         $uid      = Yii::$app->session->get('uid');
         $page     = Yii::$app->request->post("page",1);
         $pageSize = Yii::$app->request->post("pageSize",10);
         $now_page = ($page - 1) * $pageSize;
         $data  = Yii::$app->db->createCommand("select c.*,co.name as title from {{%culling}} c left join {{%content}} co on c.noticeId=co.id where c.uid=$uid and c.isLook= 1 order by id desc limit $now_page,$pageSize")->queryAll(); // ??????   
         die(Method::jsonGenerate(1, ['content' => $data],'succes'));
     }



    /**
     * ????????????
     * by  sjeam
     * post????????? /app/user/week-msg-details    
     */
     public function actionWeekMsgDetails()
     {
         $uid       = Yii::$app->session->get('uid');
         $week_data = WeekRecord::find()->asArray()->select('questionNum,beanNum,mybean')->where(['uid' => $uid])->one();
         //  ??????????????????????????????
        //  PushMessage::updateAll(['status' => 1],['uid' => $uid,'status' => 0]);
         die(Method::jsonGenerate(1, ['week' => $week_data],'success'));
     }

     

     /**
     * ????????????-????????????????????????
     * by  sjeam
     * post????????? /app/user/active-look
     */
     public function actionActiveLook()
     {
        $uid  = Yii::$app->session->get('uid');
        $id   = Yii::$app->request->post("id");
        Culling::updateLook($uid,$id);
        die(Method::jsonGenerate(1,null,'succes'));
    }

    
     /**
      * ????????????-????????????????????????  type :
      * by  sjeam
      * post?????????/app/user/reply-look
     */
     public function actionReplyLook()
     {
        $id   = Yii::$app->request->post("id");
        $type   = Yii::$app->request->post("type"); //1?????? 2??????/?????? 3?????? 4?????? 5??????  6????????????
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
     * ????????????
     * by  sjeam
     * ????????????type: 1?????? 2???????????? 3?????? 4?????? 5 ????????????  6????????????
     * post?????????/app/user/comment-list
    */
     public function actionCommentList()
     {
         $uid      = Yii::$app->session->get('uid');
         $page     = Yii::$app->request->post("page",1);
         $pageSize = Yii::$app->request->post("pageSize",10);
         $type     = Yii::$app->request->post("type",2); //1??????????????????2???????????????
         $arr      = [];
         //TODO ?????? 5??????(??????gossip reply?????? ??????) ??????gossip(post_reply?????? catId 3?????????8?????????) ????????????q_comment questionid ??????q_comment contentid
         if ($type == 2){    //????????????
             $gossip       = Yii::$app->db->createCommand("select  r.id,r.isLook,r.createTime,r.content,g.title,g.id as inforid from gossip.{{%reply}} r left join gossip.{{%gossip}} g on r.gossipId=g.id where r.uid=$uid and g.belong =3 ")->queryAll();//????????????gossip
             $goss_post    = Yii::$app->db->createCommand("select  r.id,r.see as isLook,r.createTime,r.content,p.title,p.id as inforid from gossip.{{%post_reply}} r left join gossip.{{%post}} p on r.postid=p.id where r.uid=$uid and (p.catId=42 or p.catId=43)")->queryAll();//???????????????
             $question     = Yii::$app->db->createCommand("select  c.*,c.status as isLook,c.createTime,c.content,c.questionId as inforid,q.stem as title,s.name from {{%user_comment}} c left join {{%questions}} q on c.questionid=q.id left join {{%question_know}} s on q.knowId=s.id where c.uid=$uid and c.questionid is not null order by createTime desc")->queryAll();    //????????????
             $information1 = Yii::$app->db->createCommand("select  c.*,c.status as isLook,c.createTime,c.content,c.contentId as inforid,q.name as title  from {{%user_comment}} c left join {{%content}} q on c.contentid=q.id where c.uid=$uid and c.contentid is not null and q.catId=543  order by createTime desc")->queryAll(); //????????????
             $information2 = Yii::$app->db->createCommand("select  c.*,c.status as isLook,c.createTime,c.content,c.contentId as inforid,q.name as title  from {{%user_comment}} c left join {{%content}} q on c.contentid=q.id where c.uid=$uid and c.contentid is not null and q.catId=531 order by createTime desc")->queryAll(); //????????????
             $information3 = Yii::$app->db->createCommand("select  c.*,c.status as isLook,c.createTime,c.content,c.contentId as inforid,q.name as title  from {{%user_comment}} c left join {{%content}} q on c.contentid=q.id where c.uid=$uid and c.contentid is not null and q.catId =568 order by createTime desc")->queryAll(); //?????? ????????????
         }else{  //???????????? by sjeam
            $gossip        = Yii::$app->db->createCommand("select  r.id,r.isLook,r.createTime,r.content,g.title,g.id as inforid,r.uName as replyName from gossip.{{%reply}} r left join gossip.{{%gossip}} g on r.gossipId=g.id where r.replyUser=$uid and g.belong = 3 order by r.createTime desc")->queryAll();//????????????gossip
            $goss_post     = Yii::$app->db->createCommand("select  r.id,r.see as isLook,r.createTime,r.content,p.title,p.id as inforid,r.replyName from gossip.{{%post_reply}} r left join gossip.{{%post}} p on r.postid=p.id where r.replyUid=$uid  and (p.catId=42 or p.catId=43) order by r.createTime desc")->queryAll();//???????????????
            $question      = Yii::$app->db->createCommand("select  c.*,c.status as isLook,c.createTime,c.content,c.questionId as inforid,q.stem as title,s.name from {{%user_comment}} c left join {{%questions}} q on c.questionid=q.id left join {{%question_know}} s on q.knowId=s.id where c.replyUid=$uid and c.questionid is not null order by createTime desc")->queryAll();    //????????????
            $information1  = Yii::$app->db->createCommand("select  c.*,c.status as isLook,c.createTime,c.content,c.contentId as inforid,q.name as title  from {{%user_comment}} c left join {{%content}} q on c.contentid=q.id where c.replyUid=$uid and c.contentid is not null and q.catId=543  order by createTime desc")->queryAll(); //????????????-???????????????????????????
            $information2  = Yii::$app->db->createCommand("select  c.*,c.status as isLook,c.createTime,c.content,c.contentId as inforid,q.name as title  from {{%user_comment}} c left join {{%content}} q on c.contentid=q.id where c.replyUid=$uid and c.contentid is not null and q.catId=531 order by createTime desc")->queryAll(); //????????????-????????????   
            $information3  = Yii::$app->db->createCommand("select  c.*,c.status as isLook,c.createTime,c.content,c.contentId as inforid,q.name as title  from {{%user_comment}} c left join {{%content}} q on c.contentid=q.id where c.replyUid=$uid and c.contentid is not null and q.catId  =568 order by createTime desc")->queryAll(); //????????????-????????????   
        }
         if (!empty($gossip)){
             $gossip = Method::handleMyComment(1, $gossip);  //??????????????????
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
  
         if (!empty($arr)){  //??????createTime??????
             array_multisort(array_column($arr, 'createTime'),SORT_DESC,$arr);
         }
         $data = array_splice($arr, ($page - 1) * $pageSize, $pageSize);
        //  var_dump($data);die;
         die(Method::jsonGenerate(1, ['content' => $data],'succes'));
     }



    
    /**
     * ???????????? ??????????????????
     * sjeam
     * post????????? /app/app-apinew/user-behavior
     * 7 ??????   ?????????prame ???
     */
     public function actionUserBehavior(){
        $uid = Yii::$app->session->get('uid');
        $behavior = Yii::$app->request->post("behavior",7);
        $giveIntergral=  User::addBehavior($behavior,$uid);
        die(Method::jsonGenerate(1,['giveIntergral'=>$giveIntergral],'succes'));
    }

    /**
     * ios
     * ?????????????????????
     * ????????????????????????????????????
     * cy
     */
     public function actionMergeData(){
        $timeId = Yii::$app->request->post('timeId');
        $uid = Yii::$app->request->post('uid');
        $integral = Yii::$app->request->post('integral');
        if(!$uid || !$timeId){
            $data = ['code'=>0,'message'=>'????????????'];
        }else{
            Method::post("https://order.viplgw.cn/cn/api/gre-merge-data",['uid' => $uid,'timeId'=>$timeId]);
            uc_user_edit_integral2($uid,1,$integral);
            $data = ['code'=>1,'message'=>'success'];
        }
        die(json_encode($data));
    }


    //??????????????????  ??????10  ????????????????????????
    public function actionVersions(){
        $data = [
            'versions' =>7,
            'text' => '
            ??????????????????????????????????????????????????????????????????
            ?????????????????????
            ???????????????bug',
            'apk' => 'https://file.viplgw.cn/gre/gre7.apk'
        ];
        die(json_encode(['code'=>1,'message'=>'success','data'=>$data]));
    }



    /**
     * ??????????????????
     * by  sjeam
     */
    public function actionUserFollow(){
        $authorId = Yii::$app->request->get('authorId');
        $uid = Yii::$app->session->get('uid');
        if($uid){
            $inspect = UserFollow::find()->asArray()->where("uid={$uid} and followUser={$authorId}")->one();
            if($inspect){
                UserFollow::deleteAll("uid = {$uid} and followUser = {$authorId}");
                $res = ['code' => 1,'message'=>'??????????????????'];
            } else {
                $model = new UserFollow();
                $model->uid = $uid;
                $model->followUser = $authorId;
                $model->createTime = time();
                $re = $model->save();
                if($re>0){
                    $res = ['code' => 1,'message'=>'????????????'];
                } else {
                    $res = ['code' => 0,'message'=>'????????????'];
                }
            }
        } else {
            $res = ['code' => 0,'message'=>'?????????'];
        }
        die(json_encode($res));
    }


    /**
     * ??????????????????
     * by sjeam
     */
    public function actionUserComment(){
        $uid = Yii::$app->session->get('uid');
        $contentId = Yii::$app->request->post('contentId');
        $content = Yii::$app->request->post('content');
        $commentImage = Yii::$app->request->post('commentImage');
        if(!$uid){
            die(json_encode(['code' => 99,'message'=>'?????????']));
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
                $res = ['code' => 1,'message'=>'????????????','data'=>$data];
            } else {
                $res = ['code' => 0,'message'=>'????????????'];
            }
        }else{
            $res = ['code' => 0,'message'=>'??????????????????'];
        }
        die(json_encode($res));
    }


        /**
     * ??????????????????
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
            die(json_encode(['code' => 0,'message'=>'?????????']));
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
                $res = ['code' => 1,'message'=>'????????????','data'=>$data];
            } else {
                $res = ['code' => 0,'message'=>'????????????'];
            }
        }else{
            $res = ['code' => 2,'message'=>'??????????????????'];
        }
        die(json_encode($res));
    }


    /**
     * ????????????
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
                $res = ['code'=>1,'message'=>'??????10???????????????'];
                uc_user_edit_integral1($uid,'????????????',1,10);
            } else{
                SharRewards::updateAll(['rewardNumber'=>$rewards['rewardNumber']+1],"uid={$uid} and rewardDate='{$dayTime}'");
                if($rewards['rewardNumber']>10){
                    $res = ['code'=>1,'message'=>'????????????????????????????????????'];
                } else{
                    uc_user_edit_integral1($uid,'????????????',1,10);
                    $res = ['code'=>1,'message'=>'??????10???????????????'];
                }
            }
        } else{
            $res = ['code'=>1,'message'=>'????????????'];
        }
        die(json_encode($res));
    }
}