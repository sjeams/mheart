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
use app\libs\ToeflApiControl;
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
use app\modules\cn\models\UserAnswer;



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

use Yii;
use UploadFile;

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: X-Requested-With');
header('P3P: CP="CURa ADMa DEVa PSAo PSDo OUR BUS UNI PUR INT DEM STA PRE COM NAV OTC NOI DSP COR"');

class AppApinewController extends ToeflApiControl{
    
     function init(){
        Yii::$app->session->set('uid',30186);
        Yii::$app->session->set('userid',40888);
        parent::init();
         include_once($_SERVER['DOCUMENT_ROOT'].'/../libs/ucenter/ucenter.php');
    }
    public $enableCsrfValidation = false;

    /**
     * 总调度
     * @Obelisk
     */
    public function actionUnifyLogin(){
        $session = Yii::$app->session;
        $logins = new Login();
        $uid = Yii::$app->request->get('uid');
        $username = Yii::$app->request->get('username');
        $phone = Yii::$app->request->get('phone');
        $password = Yii::$app->request->get('password');
        $email =Yii::$app->request->get('email');
        $nickname =Yii::$app->request->get('nickname');
        $loginsdata = $logins->find()->where("uid=$uid")->one();
        if(empty($loginsdata['id'])){
            $where = '';
            if(!empty($email) ){
                $where .= empty($where)?"email='$email'":" or email='$email'";
            }
            if(!empty($username) ){
                $where .= empty($where)?"userName='$username'":" or userName='$username'";
            }
            if(!empty($phone) ){
                $where .= empty($where)?"phone='$phone'":" or phone='$phone'";
            }
            $loginsdata = $logins->find()->where("$where")->one();
            if (empty($loginsdata['id'])) {
                $login = new Login();
                $login->phone = $phone;

                $login->userPass = $password;

                $login->email = $email;

                $login->createTime = time();

                $login->userName = $username;
                $login->nickname = $nickname;
                $login->uid = $uid;
                $login->save();
                $loginsdata = $logins->find()->where("$where")->one();
            }else{
                if($phone != $loginsdata['phone']){
                    Login::updateAll(['phone' => $phone],"id={$loginsdata['id']}");
                }
                if($email != $loginsdata['email']){
                    Login::updateAll(['email' => "$email"],"id={$loginsdata['id']}");
                }
                if($username != $loginsdata['userName'] && $username){
                    Login::updateAll(['userName' => "$username"],"id={$loginsdata['id']}");
                }
                if(!empty($nickname) && $nickname != $loginsdata['nickname']){
                    Login::updateAll(['nickname' => "$nickname"],"id={$loginsdata['id']}");
                }
                if($uid != $loginsdata['uid']){
                    Login::updateAll(['uid' => "$uid"],"id={$loginsdata['id']}");
                }
                $loginsdata = $logins->find()->where("id={$loginsdata['id']}")->one();
            }
        }else{
            if($phone != $loginsdata['phone']){
                Login::updateAll(['phone' => $phone],"id={$loginsdata['id']}");
            }
            if($email != $loginsdata['email']){
                Login::updateAll(['email' => "$email"],"id={$loginsdata['id']}");
            }
            if($username != $loginsdata['userName']){
                Login::updateAll(['userName' => "$username"],"id={$loginsdata['id']}");
            }
            if(!empty($nickname) && $nickname != $loginsdata['nickname']){
                Login::updateAll(['nickname' => "$nickname"],"id={$loginsdata['id']}");
            }
            $loginsdata = $logins->find()->where("id={$loginsdata['id']}")->one();
        }
        $session->set('userId', $loginsdata['id']);
        $session->set('userData', $loginsdata);
        $session->set('uid', $uid);
    }

    /**
     * 游客登录
     * @Obelisk
     */
    public function actionTouristLogin(){
        $session = Yii::$app->session;
        $code = Yii::$app->request->post('code');//游客标识码
        if(!$code){
            $code = 'sss';
        }
        $loginsdata = Login::find()->where("code='$code'")->one();
        if(!$loginsdata){
            $code = rand(1,9).time();
            $login = new Login();
            $login->phone = '';

            $login->userPass = '';

            $login->email = '';

            $login->createTime = time();

            $login->userName = '';
            $login->nickname = '游客';
            $login->uid = time();
            $login->code = $code;
            $login->role = 2;
            $login->save();
            $loginsdata = Login::find()->where("code='$code'")->one();
        }
        $session->set('userId', $loginsdata['id']);
        $session->set('userData', $loginsdata);
        $session->set('uid', $loginsdata['uid']);
        die(json_encode(['code' => 1,'data'=>['code' => $code,'uid' => $loginsdata['uid']],'message' => '登录成功']));
    }

    /**
     * gre 模考
     * @param $sectionId
     * @param $mockExamId
     * @param null $minute
     * @return bool
     */
    //页面初始化判断
    public function judge($sectionId,$mockExamId,$minute = null){
        $uid = \Yii::$app->session->get("uid");
        $data = MockResult::find()->where("uid = $uid and mockExamId = $mockExamId and sectionId = $sectionId")->one();
        if(!$data){
            $result = MockResult::find()->where("uid = $uid and mockExamId = $mockExamId and status = 1")->one();
            if($result){
                $data = ['code'=>0,'message'=>'您已完成该模考'];
            }else{
                if(is_null($minute)){
                    $data = ['code'=>0,'message'=>'您只能在当前section操作'];
                }else{
                    $data = ['code'=>0,'message'=>'您只能在当前section操作'];
                }
            }
        }else{
            $data = ['code'=>1,'message'=>''];
        }
        return $data;
    }
    /**gre模考
     * hastime修改
     * 修改剩余时间
     * cy
     */
    public function actionAlterHastime(){
        $request = Yii::$app->request;
        $uid = Yii::$app->session->get("uid");
        $mockExamId = $request->post("mockExamId");
        $sectionId = $request->post("sectionId");
        $questionId = $request->post("questionId");
        $hastime = $request->post("hastime");
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'未登录']));
        }
        MockResult::updateAll(['hasTime'=>$hastime],"uid = $uid and mockExamId = $mockExamId and sectionId =$sectionId");
        $data = MockRecord::find()->where("uid = $uid and sectionId = $sectionId and questionId = $questionId and mockExamId = $mockExamId")->one();
        if($data){
            $data->createTime = date("Y-m-d H:i:s",time());
            $data->save();
        }else{
            $model = new MockRecord();
            $model->uid= $uid;
            $model->questionId = $questionId;
            $model->sectionId = $sectionId;
            $model->mockExamId = $mockExamId;
            $model->do = 0;
            $model->createTime = date("Y-m-d H:i:s",time());
            $model->save();
        }
        die(json_encode(['code'=>1,'message'=>'修改成功']));
    }
    /**
     * gre模考
     * 获取题的信息（初始化）
     * cy
     */
    public function topicInit($question){
        if($question['optionA']){
            $opsA = Method::getTextHtmlArr($question['optionA']);
            foreach($opsA as $d => $t){
                $t = $this->addHost($t);
                $question['optionsA'][] = $t;
            }
        }
        if($question['optionB']){
            $opsB = Method::getTextHtmlArr($question['optionB']);
            foreach($opsB as $d => $t){
                $t = $this->addHost($t);
                $question['optionsB'][] = $t;
            }
        }
        if($question['optionC']){
            $opsB = Method::getTextHtmlArr($question['optionC']);
            foreach($opsB as $d => $t){
                $t = $this->addHost($t);
                $question['optionsC'][] = $t;
            }
        }

        $question['details'] = $this->addHost($question['details']);
        $question['readArticle'] = $this->addHost($question['readArticle']);
        $question['quantityA'] = $this->addHost($question['quantityA']);
        $question['quantityB'] = $this->addHost($question['quantityB']);
        $typeId = $question['typeId'];
        //1-单空题 2-双空题 3-三空题 4-6选2 5-5选1题型 6-不定项题型 7-点选句子题型 8-单选题 9-不定项题 10-填空提
        if($typeId == 5 || $typeId == 6 || $typeId == 7){
            $question['details'] = Method::getTextHtmlArr($question['details'])[0];
            $article = Method::getTextHtmlArr($question['readArticle'])[0];
            if($typeId != 7){
                $question['readArticle'] = $article;
            }else{
                $articles = explode('.',$article);
                foreach($articles as $kk => $vv){
                    $articles[$kk] = trim(str_replace('&nbsp;','',$vv.'.'));
                }
                $question['readArticle'] = $articles;
            }
        }
        return ['question'=>$question,'type'=>$typeId];
    }
    /**
     * 图片加域名
     * cy
     */
    public function addHost($data){
        $data = str_replace('src="/','src="https://gre.viplgw.cn/',$data);
        return $data;
    }

    /**
     * 秒数转换成分钟数
     */
    public function getMinute($time){
        $minutes = floor($time/60);
        $seconds = floor($time-(60*$minutes));
        if($minutes < 10) $minutes = '0'.$minutes;
        if($seconds < 10 ) $seconds = '0'.$seconds;
        $times = [$minutes,$seconds];
        return $times;
    }

    /**
     * 模考首页
     * 模考套题数据
     * cy
     * type 1-语文 2-数学 3-全套
     * sourceId 1-Magoosh 2-精选
     */
    public function actionMockExam(){
        $uid = Yii::$app->session->get('uid');
        $type = Yii::$app->request->get("type",1);
        $sourceId = Yii::$app->request->get("sourceId",2);
        $mock = new MockExam();
        $mocks = $mock::find()->where("type = $type and sourceId = $sourceId")->asArray()->all();

        //是否已经做过该套题
        foreach($mocks as $k => $v){
            $mockExamId = $v['id'];
            if($uid){
                $result = $mock->getDoResult($uid,$mockExamId);
                $mocks[$k]['isDo'] = $result;//2-完成 1-未做完 0 未开始
                //已做题数
                $mocks[$k]['doNum'] = MockRecord::find()->select("id")->where("uid = $uid and mockExamId = $mockExamId")->count();
            }else{
                $mocks[$k]['isDo'] = 0;
                $mocks[$k]['doNum'] = 0;
            }
            //平均得分
            $aversge = $mock->getAverage($mockExamId);
            $mocks[$k]['average'] = $aversge;
            //模考题目数
            $mocks[$k]['totalNum'] = $type == 3?100:40;
        }
        $data = ['code'=>1,'message'=>'success','data'=>['type'=>$type,'sourceId'=>$sourceId,'mocks'=>$mocks]];
        die(json_encode($data));
    }
    /**
     * gre模考
     * 做题页面 进入section
     * cy
     */
    public function actionMakeTopic(){
        $uid = Yii::$app->session->get("uid");
        if(!$uid){
            $data = ['code'=>99,'message'=>'未登录'];
            die(json_encode($data));
        }
        $mockExamId = Yii::$app->request->get("mockExamId");
        $mockRecord = new MockRecord();
        $mockExam = new MockExam();
        //判断用户是否是第一次进入
        $result = MockResult::find()->where("uid = $uid and mockExamId = $mockExamId")->one();
        if($result){
            $hastime = $result['hasTime'];//剩余时间
            $sectionId = $result['sectionId'];
            $questionId = $mockRecord::find()->where("uid = $uid and sectionId = $sectionId and mockExamId = $mockExamId and do = 0 ")->orderBy("id desc")->asArray()->one()['questionId'];//查找最近未做的题
            if(!$questionId){
                $questionId = $mockRecord::find()->where("uid = $uid and sectionId = $sectionId and mockExamId = $mockExamId and do = 1 ")->orderBy("id desc")->asArray()->one()['questionId'];//查找最近完成的题
                if(!$questionId){
                    $questionId = $mockExam->getFirstTest($mockExamId,$sectionId)[1];//获取当前section的第一道题
                }else{
                    //获取下一题id
                    $questionId = intval($mockRecord->getSite($questionId,$sectionId,'Done')[1]);
                }
            }
            //当前题目位置 及题目数量以及下一题信息
            $timu = $mockRecord->getSite($questionId,$sectionId,'Done');
            $type = $mockExam->getType($mockExamId,$sectionId);
        }else{
            $questionMsg = $mockExam->getFirstTest($mockExamId);
            $questionId = $questionMsg[1];
            $sectionId = $questionMsg[0];
            $timu = $mockRecord->getSite($questionId,$sectionId,'first');
            $type = $mockExam->getType($mockExamId,$sectionId);//模考类型 1-语文 2-数学
            if($type == 1){
                $hastime = 1800;
            }else{
                $hastime = 2100;
            }
            $mockResult = new MockResult();
            $mockResult->uid = $uid;
            $mockResult->mockExamId = $mockExamId;
            $mockResult->sectionId = $sectionId;
            $mockResult->createTime = time();
            $mockResult->type = $type;
            $mockResult->status = 0;
            $mockResult->hasTime = $hastime;
            $mockResult->save();
        }
        //判断当前section是否正确
        $res = $this->judge($sectionId,$mockExamId);
        if($res['code'] == 0){die(json_encode($res));}
        //判断是否标记
        $ismark = $mockRecord->isMark($uid,$sectionId,$mockExamId,$questionId);
        //当前section位置及section总数
        $sectionMsg = $mockRecord->getSectionSite($sectionId,$mockExamId);
        $question = Questions::find()->where("id = $questionId")->asArray()->one();
        $question['id'] = intval($question['id']);
        $mockName = $mockExam->getName($mockExamId);
        $data = $this->topicInit($question);
        $typeId = $data['type'];
        $question = $data['question'];
        $times = $this->getMinute($hastime);
        //收藏状态
        $collect = UserCollection::find()->where("uid = $uid and questionId = $questionId")->one();
        if($collect){
            $collection = 1;//1-已收藏 0-未收藏
        }else{
            $collection = 0;
        }
        //做题记录
        $record = MockRecord::find()->where("uid = $uid and sectionId = $sectionId  and questionId = $questionId")->asArray()->one();
        if($record){
            $question['user_answer'] = $record['answer']?$record['answer']:'';
        }else{
            $question['user_answer'] = '';
        }
        $data = ['code'=>1,'message'=>'success','data'=>['mark'=>$ismark,'mockName'=>$mockName,'sectionMsg'=>$sectionMsg,'timu'=>$timu[0],'hastime'=>$hastime,'nextId'=>intval($timu[1]),'sectionId'=>intval($sectionId),'mockExamId'=>intval($mockExamId),'times'=>$times,'type'=>$typeId,'mockType'=>$type,'collection'=>$collection,'question'=>$question]];
        die(json_encode($data));
    }

    /**
     * gre模考
     * 进入某道题
     * cy
     */
    public function actionDesignation(){
        $questionId = Yii::$app->request->get("questionId");
        $mockExamId = Yii::$app->request->get("mockExamId");
        $sectionId = Yii::$app->request->get("sectionId");
        $uid = Yii::$app->session->get("uid");
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'未登录']));
        }
        //判断当前section是否正确
        $res = $this->judge($sectionId,$mockExamId);
        if($res['code'] == 0){die(json_encode($res));}
        $mockRecord = new MockRecord();
        $mockExam = new MockExam();
        $type = $mockExam->getType($mockExamId,$sectionId);
        $hastime = MockResult::find()->where("mockExamId = $mockExamId and sectionId = $sectionId and uid = $uid")->asArray()->one()['hasTime'];
        $times = $this->getMinute($hastime);
        $question = Questions::find()->where("id = $questionId")->asArray()->one();

        //当前题目位置 及题目数量以及下一题信息
        $timu = $mockRecord->getSite($questionId,$sectionId,'Done');
        //当前section位置及section总数
        $sectionMsg = $mockRecord->getSectionSite($sectionId,$mockExamId);
        //判断是否标记
        $ismark = $mockRecord->isMark($uid,$sectionId,$mockExamId,$questionId);
        $mockName = $mockExam->getName($mockExamId);
        $data = $this->topicInit($question);
        $question = $data['question'];
        $typeId = $data ['type'];//获取用户是否做过该题的相关信息
        $record = MockRecord::find()->where("uid = $uid and sectionId = $sectionId  and questionId = $questionId")->asArray()->one();
        if($record){
            //1-单空题 2-双空题 3-三空题 4-6选2 5-5选1题型 6-不定项题型 7-点选句子题型 8-单选题 9-不定项题 10-填空提
//            $answer = $record['answer'];
//            if($typeId == 2 || $typeId == 3 ){
//                $answer = explode(',',$answer);
//            }
//            if($typeId == 4||$typeId ==6 || $typeId == 9){
//                $answer = str_split($answer);
//            }
            $question['user_answer'] = $record['answer']?$record['answer']:'';
        }else{
            $question['user_answer'] = '';
        }
        $question['id'] = intval($question['id']);
        //收藏状态
        $collect = UserCollection::find()->where("uid = $uid and questionId = $questionId")->one();
        if($collect){
            $collection = 1;//1-已收藏 0-未收藏
        }else{
            $collection = 0;
        }
        $data =['code'=>1,'message'=>'success','data'=>['mark'=>$ismark,'mockName'=>$mockName,'sectionMsg'=>$sectionMsg,'timu'=>$timu[0],'hastime'=>$hastime,'nextId'=>intval($timu[1]),'sectionId'=>intval($sectionId),'mockExamId'=>intval($mockExamId),'times'=>$times,'type'=>$typeId,'mockType'=>$type,'collection'=>$collection,'question'=>$question]];
        die(json_encode($data));
    }
    /**
     * gre模考
     * section review
     * cy
     */
    public function actionReview(){
        $uid = Yii::$app->session->get("uid");
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'未登录']));
        }
        $sectionId = Yii::$app->request->get("sectionId");
        $mock = new MockExam();
        $mockExamId = $mock->getMockExamId($sectionId);
        //判断当前section是否正确
        $res = $this->judge($sectionId,$mockExamId);
        if($res['code'] == 0){
            die(json_encode($res));
        }
        $mockName = $mock->getName($mockExamId);
        $mockRecord = new MockRecord();
        $timu = ['site'=>20,'totalCount'=>20];
        $sectionSite = $mockRecord->getSectionSite($sectionId,$mockExamId);
        $data = $mock->getSectionTimu($sectionId);
        $data = ['code'=>1,'message'=>'success','data'=>['mockName'=>$mockName,'sectionSite'=>$sectionSite,'timu'=>$timu,'sectionId'=>intval($sectionId),'mockExamId'=>intval($mockExamId),'question'=>$data]];
        die(json_encode($data));
    }
    /**
     * gre模考
     * section切换
     * 做完一个section 状态修改到下一section
     * cy
     */
    public function actionNextSection(){
        $uid = Yii::$app->session->get("uid");
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'未登录']));
        }
        $sectionId = Yii::$app->request->get("sectionId");//当前sectionId
        $mockExam = new MockExam();
        $mockExamId = $mockExam->getMockExamId($sectionId);
        //获取下一个section及第一道题目信息
        $nextSec = $mockExam->getSectionMsg($sectionId,$mockExamId);
        $next_sectionId = $nextSec['sectionId'];
        $type = $mockExam->getType($mockExamId,$next_sectionId);
        if($type == 1){
            $time = 1800;
        }else{
            $time = 2100;
        }
        MockResult::updateAll(['sectionId'=>$next_sectionId,'hasTime'=>$time],"uid = $uid and mockExamId = $mockExamId and status =0");
        $mockName = $mockExam->getName($mockExamId);
        $mockRecord = new MockRecord();
        $next_sectionMsg = $mockRecord->getSectionSite($next_sectionId,$mockExamId);
        $data = ['code'=>1,'message'=>'success','data'=>['mockExamId'=>intval($mockExamId),'sectionId'=>intval($sectionId),'next_sectionId'=>intval($next_sectionId),'questionId'=>intval($nextSec['questionId']),'mockName'=>$mockName,'sectionSite'=>$next_sectionMsg]];
        die(json_encode($data));
    }
    /**
     * gre模考
     * 时间字符型转换
     * cy
     */
    public function changeSecond($usetime){
        $minute = floor($usetime/60);
        $seconds = $usetime-60*$minute;
        if($minute > 0){
            $times = $minute.'m'.$seconds.'s';
        }else{
            $times = $seconds.'s';
        }
        return $times;
    }
    /**
     * gre模考
    * 获取用户mock数据信息
    * cy
     * 模考退出保存时用户模考数据保存
    */
    public function getMockExamMsg($uid,$mockExamId){
        $mockExam = new MockExam();
        $mockRecord = new MockRecord();
        $type = $mockExam::find()->where("id = $mockExamId")->asArray()->one()['type'];
        $correctMsg = $mockRecord->getCorrectRate($uid,$mockExamId,$type);
        $mockResult = MockResult::find()->where("uid = $uid and mockExamId = $mockExamId")->one();
        $mockResult->correctRate = $type == 3?0:$correctMsg['correctRate'];
        $mockResult->type = $type;
        $mockResult->sectionMsg = $correctMsg['secMsg'];
        $mockResult->correctMsg = $correctMsg['correctMsg'];
        $mockResult->useTime = $correctMsg['useTime'];
        $mockResult->endTime = time();
        $mockResult->save();
    }
    /**
     * gre模考
     *模考结果页
     *cy
     * direction result-完成模考  help-退出保存进入
     */
    public function actionMockResult(){
        $mockExamId = Yii::$app->request->get("mockExamId");
        $direction = Yii::$app->request->get("direction",'result');
        $uid = Yii::$app->session->get('uid');
        if($direction == 'help'){//模考退出保存入口进入
            $this->getMockExamMsg($uid,$mockExamId);
        }
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'未登录']));
        }
        $data = MockResult::find()->where("uid = $uid and mockExamId = $mockExamId")->asArray()->one();
        if(!$data){
            $data = ['code'=>0,'message'=>'没有相关数据'];
            die(json_decode($data));
        }else{
            $type = MockExam::find()->where("id= $mockExamId")->asArray()->one()['type'];
            $correctMsg = unserialize($data['correctMsg']);
            $mockExam = new MockExam();
            $mockName = $mockExam->getName($mockExamId);
            //竞争力
            $correctRate = $data['correctRate']?$data['correctRate']:0;
            $mockResult = new MockResult();
            $totalCount = $mockResult->find()->select("id")->where("type  = $type")->count();
            $beatCount = $mockResult->find()->select("id")->where("type = $type and correctRate < $correctRate")->count();
            if($beatCount == 0){
                $beatRate = 0;
            }else{
                $beatRate  = ceil((10000*($beatCount/$totalCount)))/100;
            }
        }
        //时间转换
        if($type == 3){
            $data['averTime'] = $this->changeSecond(ceil(100*($data['useTime']/80))/100);
        }else{
            $data['averTime'] = $this->changeSecond(ceil(100*($data['useTime']/40))/100);
        }
        //pace 判断
        if ($data['averTime'] < 40) {
            $Pace = 'D';
            $Pace_msg = '哎呀，做题速度太快哟，是不是秒选啦，要注意认真审题~';
            $Pace_s = 65;
        } elseif ($data['averTime'] < 90) {
            $Pace = 'A';
            $Pace_msg = '非常棒，做题速度已经赶上780的节奏啦~';
            $Pace_s = 95;
        } elseif ($data['averTime'] < 120) {
            $Pace = 'B';
            $Pace_msg = '不错哟，再稍稍加快点节奏预见想象中的700~';
            $Pace_s = 85;
        } elseif ($data['averTime'] < 150) {
            $Pace = 'C';
            $Pace_msg = '不稳定噢，革命尚未成功，同志需更加努力呀~';
            $Pace_s = 75;
        } elseif ($data['averTime'] < 180) {
            $Pace = 'E';
            $Pace_msg = '有点难过，亲，做题要集中精力，遇到难题要学会快速决策哦~';
            $Pace_s = 65;
        } elseif ($data['averTime'] < 210) {
            $Pace = 'F';
            $Pace_msg = '伤心过度，亲，你离700分还有一万五千公里，呼哧呼哧~';
            $Pace_s = 55;
        } else {
            $Pace = 'G';
            $Pace_msg = '不想活啦，亲，你一定是边做题边在睡大觉~';
            $Pace_s = 25;
        }
        $check = ['level'=>$Pace,'paceRate'=>$Pace_s,'content'=>$Pace_msg];
        $data['useTime'] = $this->changeSecond($data['useTime']);
        //模考section信息、题目信息
        $sections = $mockExam->getSections($mockExamId);
        if($type !=3){
            foreach($sections as $k => $t){
                $sections[$k]['type'] = $type;
            }
            //数据复制
            if($type ==1){//语文
                $data['verbalScore'] = $data['score'];
            }else{//数学
                $data['quantScore'] = $data['score'];
            }
        }

        $data = ['code'=>1,'message'=>'success','data'=>['type'=>$type,'mockName'=>$mockName,'beatRate'=>$beatRate,'totalCount'=>$totalCount,'mockExamId'=>$mockExamId,'mock'=>$data,'correctMsg'=>$correctMsg,'paces'=>$check,'sections'=>$sections]];
        die(json_encode($data));
    }
    /**
     * gre模考
     * 模考结果页数据
     * 详情数据
     * cy
     */
    public function actionMockDetail(){
        $uid = Yii::$app->session->get("uid");
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'未登录']));
        }
        $mockExamId = Yii::$app->request->get("mockExamId",0);
        $sectionId = Yii::$app->request->get("sectionId",0);
        $access = Yii::$app->request->get("access",0);
        $questionId = Yii::$app->request->get("questionId",0);
        $mockExam = new MockExam();
        $type = MockExam::find()->where("id= $mockExamId")->asArray()->one()['type'];
        $data = MockResult::find()->where("uid = $uid and mockExamId = $mockExamId")->asArray()->one();
        //模考section信息、题目信息
        $sections = $mockExam->getSections($mockExamId);
        foreach($sections as $k => $v){
            if($type < 3){
                $v['type'] = $type;
                $sections[$k]['type'] = $type;
            }
            if($v['type'] == 1){
                $sections[$k]['category'] = 'verbal';
            }else{
                $sections[$k]['category'] = 'quant';
            }
            $sections[$k]['site'] = 'Section'.($k+1);
        }
        if($sectionId == 0){
            $sectionId = $sections[0]['id'];
        }
        //secction 下的题目信息
        if($access == 0){//acc  11-当前section已做的题  1-已做的错题 0||null 所有题 其他便是较长的题
            $acc = 11;
        }else{
            $acc = $access;
        }
        if($sectionId > $data['sectionId'] && $data['status'] != 1){
            $data = ['code'=>0,'message'=>'您还未开始做该section内的题'];
            die(json_encode($data));
        }
        $question_data = $mockExam->getSectionTimu($sectionId,$acc);
        foreach($question_data as $k => $v){
            $qid = $v['questionId'];
            $sid = $v['sectionId'];
            $record = MockRecord::find()->where("uid = $uid and sectionId = $sid  and questionId = $qid")->asArray()->one();
            $correct = $record['correct'];
            if($correct == 1){
                $question_data[$k]['correct'] = 1;//1-正确 0 -错误 -1 -未做
            }else{
                if($record){
                    $question_data[$k]['correct'] = 0;
                }else{
                    $question_data[$k]['correct'] = -1;
                }
            }
        }
        if($questionId == 0){
            if(count($question_data) > 0){
                $questionId = $question_data[0]['questionId'];
            }else{
                if($access != 11){
                    $data = ['code'=>0,'message'=>'没有相关信息'];
                    die(json_encode($data));
                }
            }
        }
        $mockRecord = new MockRecord();
        $question =$mockRecord->getTopicDetail($uid,$questionId);
        $collection =$mockExam->getCollecte($uid,$questionId);
        $typeId = $question['typeId'];
        if($typeId == 7){
            $question['answer'] = trim(strip_tags($question['answer'].'.'));
        }
        //评论
        $comment = new UserComment();
        $comment = $comment->getQuestionComment($questionId,1,5);
        foreach($comment['data'] as $k=>$v){
            $comment['data'][$k]['reply'] = Yii::$app->db->createCommand("select uc.*,u.userName,u.nickname,u.image from x2_user_comment uc LEFT JOIN x2_user u on uc.uid=u.uid where uc.pid={$v['id']}")->queryAll();
        }
        //笔记
        $note = UserNote::find()->where("uid =$uid and questionId = $questionId")->asArray()->orderBy('id desc')->limit(1)->all();
        $question['note'] = $note;
        $question['user_answer'] = $question['userAnswer'];
        $question['commentCount'] = $comment['count'];
        $question['useTime'] = $this->changeSecond($question['useTime']);
        $question['averTime'] = $this->changeSecond($question['averTime']);
        if(!$question['analysis'])$question['analysis'] = null;
        if(!$question['note'])$question['note'] = null;
        die(json_encode(['code'=>1,'message'=>'success','data'=>['questionAll'=>$question_data,'questionDetail'=>['question'=>$question,'collection'=>$collection]]]));
    }
    /**gre模考
     * 模考结果页
     * 重新做题
     * cy
     */
    public function actionDoAgain(){
        $uid = Yii::$app->session->get("uid");
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'未登录']));
        }
        $mockExamId = Yii::$app->request->get("mockExamId");
        $res = MockResult::deleteAll("uid = $uid and mockExamId = $mockExamId");
        if($res){
            $re = MockRecord::deleteAll("uid = $uid and mockExamId = $mockExamId");
            if($re ){
                Yii::$app->db->createCommand("delete from x2_user_mock_mark where uid = $uid and mockExamId = $mockExamId")->execute();
                $data = ['code'=>1,'message'=>'success','data'=>['mockExamId'=>$mockExamId]];
            }else{
                $data = ['code'=>0,'message'=>'操作失败'];
            }
        }else{
            $data = ['code'=>0,'message'=>'操作失败'];
        }
        die(json_encode($data));
    }
    /**
     * gre 模考
     * 退出保存
     * cy quit save
     */
    public function actionMockQuit(){
        $questionId = Yii::$app->request->post("questionId");
        $sectionId = Yii::$app->request->post("sectionId");
        $mockExamId = Yii::$app->request->post("mockExamId");
        $uid = Yii::$app->session->get("uid");
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'未登录']));
        }
        $data = MockRecord::find()->where("uid = $uid and questionId = $questionId and mockExamId = $mockExamId and sectionId = $sectionId")->one();
        if($data){
            $data->do = 0;
            $res = $data->save();
        }else{
            $model = new MockRecord();
            $model->uid = $uid;
            $model->questionId = $questionId;
            $model->sectionId = $sectionId;
            $model->mockExamId = $mockExamId;
            $model->do = 0;
            $res = $model->save();
        }
        if($res){
            $msg = ['code'=>1,'message'=>'success','data'=>['mockExamId'=>$mockExamId]];
        }else{
            $msg = ['code'=>0,'message'=>'退出保存失败'];
        }
        die(json_encode($msg));
    }
    /**
     * GRE模考
     * mark
     * cy
     */
    public function actionMockMark(){
        $uid = Yii::$app->session->get("uid");
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'未登录']));
        }
        $sectionId = Yii::$app->request->post("sectionId");
        $mockExamId = Yii::$app->request->post("mockExamId");
        $questionId = Yii::$app->request->post("questionId");
        $mark = Yii::$app->request->post("mark");//0-取消标记 1-标记
        if($mark == 1){
            $date = time();
            $sql = "insert into x2_user_mock_mark(`uid`,`sectionId`,`mockExamId`,`createTime`,`questionId`) value($uid,$sectionId,$mockExamId,$date,$questionId)";
            $result = Yii::$app->db->createCommand($sql)->execute();
        }else{
            $result = Yii::$app->db->createCommand("delete from x2_user_mock_mark where uid = $uid and sectionId = $sectionId and mockExamId = $mockExamId and questionId = $questionId")->execute();
        }
        if($result){
            $data = ['code'=>1,'message'=>$mark==1?'标记成功':'取消标记成功'];
        }else{
            $data = ['code'=>0,'message'=>$mark==1?'标记失败':'取消标记失败'];
        }
        die(json_encode($data));
    }
    /**
     * gre 模考
     * 下一题 接口
     * cy
     */
    public function actionNextMock(){
        $request = Yii::$app->request;
        $mockExam = new MockExam();
        $uid = Yii::$app->session->get("uid");
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'未登录']));
        }
        $questionId = $request->post("questionId");
        $sectionId = $request->post("sectionId");
        $mockExamId = $request->post("mockExamId");
        $answer = $request->post("answer");
        $usetime = $request->post("usetime");
        $hastime = $request->post("hastime");
        $nextId = $request->post("nextId");
        $ques = Questions::find()->where("id = $questionId")->one();
        $quesType = $ques->typeId;
        //1-单空题 2-双空题 3-三空题 4-6选2 5-5选1题型 6-不定项题型 7-点选句子题型 8-单选题 9-不定项题 10-填空提
        if($quesType == 2 || $quesType == 3 || $quesType == 7 || $quesType ==10){
            $answers = explode(',',$answer);
            foreach($answers as $k => $v ){
                $answers[$k] = trim($v);
            }
            $answer = implode(',',$answers);
        }
        if( $quesType ==10) {
            $answer = trim($answer);
        }
        if( $quesType == 7 ) {
            $answer = trim($answer);
        }
        $do = 1;//1-已做  -1 已做但答案未选全
        if($quesType != 7 && $quesType != 2 && $quesType != 3 && $quesType != 10) {
            $answer = addslashes($answer);
            if($answer){
                $data = Questions::find()->where("id = $questionId and answer = '{$answer}'")->one();
                if($data)$correct = 1;else $correct = 0;
                if($quesType == 4 && strlen($answer) < 2){
                    $do = -1;
                }
            }else{
                $do = -1;
                $correct = 0;
            }
        }elseif($quesType == 2 ||$quesType == 3){
            $correctAnswer = Questions::find()->where("id = $questionId")->asArray()->one()['answer'];
            $correctAnswer = trim(strip_tags($correctAnswer));
            if($answer == $correctAnswer){
                $correct = 1;
            }else{
                $correct = 0;
                foreach(explode(',',$answer) as $k => $v){
                    if(empty($v)){$do = -1;break;}
                }
            }
        }elseif($quesType == 10){//填空题 去掉单位比较
            if(!$answer){
                $do = -1;
                $correct = 0;
            }else{
                $ques = Questions::find()->where("id = $questionId")->asArray()->one();
                $correct_answer = $ques['answer'];
                $correct_answer = $mockExam->strToNum($correct_answer);
                $user_answer = $mockExam->strToNum($answer);
                if($correct_answer == $user_answer){
                    $correct = 1;
                }else{
                    $correct = 0;
                }
            }
        }else{//句子点选题型比较  纯字符比较
            $correctAnswer = Questions::find()->where("id = $questionId")->asArray()->one()['answer'];
            $correctAnswer = strip_tags($correctAnswer);
            $answer1 = preg_replace('/(^\s*)|(\s*$)|[\ +\r\n]|[\.\,\，\。]/','',$correctAnswer);
            $answer2 = preg_replace('/(^\s*)|(\s*$)|[\ +\r\n]|[\.\,\，\。]/','',$answer);
            if($answer1 == $answer2){
                $correct = 1;
            }else{
                $correct = 0;
            }
            if(!$answer) {
                $do = -1;
            }
        }
        $mockRecord = new MockRecord();
        $data = $mockRecord::find()->where("uid = $uid and sectionId = $sectionId and questionId = $questionId")->one();
        $date = time();
        if($data){
            $data->answer = $answer;
            $data->do = $do;
            $data->useTime = $usetime;
            $data->correct = $correct;
            $data->createTime = $date;
            $res = $data->save();
        }else{
            $mockRecord->uid = $uid;
            $mockRecord->sectionId = $sectionId;
            $mockRecord->questionId = $questionId;
            $mockRecord->mockExamId = $mockExamId;
            $mockRecord->answer = $answer;
            $mockRecord->useTime = $usetime;
            $mockRecord->correct = $correct;
            $mockRecord->do = $do;
            $mockRecord->createTime = $date;
            $res = $mockRecord->save();
        }
        if($res){
            if($nextId == 0){//当前section最后一题
                $isEnd = $mockExam->isEnd($sectionId,$mockExamId);
                if($isEnd){//最后一个section 即已完成该模考的所有题型
                    $type = $mockExam::find()->where("id = $mockExamId")->asArray()->one()['type'];
                    $correctMsg = $mockRecord->getCorrectRate($uid,$mockExamId,$type);
                    $mockResult = MockResult::find()->where("uid = $uid and mockExamId = $mockExamId")->one();
                    $date = time();
                    $mockResult->score = $correctMsg['mockScore'];
                    $mockResult->verbalScore = $type == 3?$correctMsg['verScore']:0;
                    $mockResult->quantScore = $type == 3?$correctMsg['quanScore']:0;
                    $mockResult->correctRate = $correctMsg['correctRate'];
                    $mockResult->type = $type;
                    $mockResult->sectionMsg = $correctMsg['secMsg'];
                    $mockResult->correctMsg = $correctMsg['correctMsg'];
                    $mockResult->endTime = $date;
                    $mockResult->useTime = $correctMsg['useTime'];
                    $mockResult->status = 1;
                    $mockResult->sectionId = 0;
                    $result = $mockResult->save();
                    if($result){//over -1 还在当前section中 0-当前section已完成 （提交的题是当前section最后一题） 1-模考已完成（模考最后一道题）
                        $msg = ['code'=>1,'message'=>'success','data'=>['over'=>1,'mockExamId'=>intval($mockExamId)]];
                    }else{
                        $msg = ['code'=>0,'message'=>'结果保存失败'];
                    }
                    die(json_encode($msg));
                }else{//当前section题目全部做完
                    $nextSection = $mockExam->getSectionMsg($sectionId,$mockExamId);
                    $seId = $nextSection['sectionId'];
                    $site = $mockRecord->getSectionSite($seId,$mockExamId)['site'];
                    if($site == 3 ){
                        $minute = 10;
                    }else{
                        $minute = 1;
                    }
                }
                MockResult::updateAll(['hasTime'=>$hastime],"uid = $uid and mockExamId = $mockExamId and status = 0");
                $msg = ['code'=>1,'message'=>'success','data'=>['over'=>0,'minute'=>$minute,'sectionId'=>intval($sectionId)]];
            }else{
                //还在当前section中 不是最后一道题
                $qid = $nextId;
                $seId = $sectionId;
                MockResult::updateAll(['hasTime'=>$hastime],"uid = $uid and mockExamId = $mockExamId and status = 0");
                $msg = ['code'=>1,'message'=>'success','data'=>['over'=>-1,'mockExamId'=>intval($mockExamId),'sectionId'=>intval($seId),'next_questionId'=>intval($qid)]];
            }

        }else{
            $msg = ['code'=>0,'message'=>"提交失败"];
        }
        die(json_encode($msg));
    }
    /**
     * gre模考
     * 模考时间为0时的接口
     * section exit 接口  退出该section测试
     * cy
     */
    public function actionMockTimeOut(){
        $uid = Yii::$app->session->get("uid");
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'未登录']));
        }
        $sectionId = Yii::$app->request->post("sectionId");
        $mockExamId= Yii::$app->request->post("mockExamId");
        $questionId = Yii::$app->request->post("questionId");
        $mockExam = new MockExam();
        $mockRecord = new MockRecord();
        $data = $mockRecord::find()->where("uid = $uid and sectionId = $sectionId and questionId = $questionId")->one();
        $date = time();
        if($data){
            $data->hasTime = 0;
            $data->correct = 0;
            $data->do = -1;
            $data->createTime = $date;
            $res = $data->save();
        }else{
            $mockRecord->uid = $uid;
            $mockRecord->sectionId = $sectionId;
            $mockRecord->questionId = $questionId;
            $mockRecord->mockExamId = $mockExamId;
            $mockRecord->hasTime = 0;
            $mockRecord->correct = 0;
            $mockRecord->do = -1;
            $mockRecord->createTime = $date;
            $res = $mockRecord->save();
        }
        if($res){
//            MockRecord::deleteAll("uid = $uid and sectionId = $sectionId and do = 0");
            $isEnd = $mockExam->isEnd($sectionId,$mockExamId);
            if($isEnd){//最后一个section 即已完成该模考的所有题型
                $type = $mockExam::find()->where("id = $mockExamId")->asArray()->one()['type'];
                $correctMsg = $mockRecord->getCorrectRate($uid,$mockExamId,$type);
                $result = MockResult::find()->where("uid = $uid and mockExamId = $mockExamId")->one();
                if($result){
                    $mockResult = $result;
                }else{
                    $mockResult = new MockResult();
                }
                $date = time();
                $mockResult->uid = $uid;
                $mockResult->mockExamId = $mockExamId;
                $mockResult->score = $correctMsg['mockScore'];
                $mockResult->verbalScore = $type == 3?$correctMsg['verScore']:0;
                $mockResult->quantScore = $type == 3?$correctMsg['quanScore']:0;
                $mockResult->correctRate = $correctMsg['correctRate'];
                $mockResult->type = $type;
                $mockResult->sectionMsg = $correctMsg['secMsg'];
                $mockResult->correctMsg = $correctMsg['correctMsg'];
                $mockResult->endTime = $date;
                $mockResult->useTime = $correctMsg['useTime'];
                $mockResult->hasTime = 0;
                $mockResult->status = 1;
                $result = $mockResult->save();
                if($result){
                    $msg = ['code'=>1,'message'=>'success','data'=>['over'=>1,'mockExamId'=>$mockExamId]];
                }else{
                    $msg = ['code'=>0,'message'=>'结果保存失败'];
                }
                die(json_encode($msg));
            }else{
                $nextSection = $mockExam->getSectionMsg($sectionId,$mockExamId);
                $seId = $nextSection['sectionId'];
                $type = $mockRecord->getSectionSite($seId,$mockExamId)['site'];
                if($type == 3 ){
                    $minute = 10;
                }else{
                    $minute = 1;
                }
//                MockResult::updateAll(['sectionId'=>$seId,'hasTime'=>$time],"uid = $uid and mockExamId = $mockExamId and status =0");
            }
            $msg = ['code'=>1,'message'=>'success','data'=>['over'=>0,'minute'=>$minute,'sectionId'=>$sectionId]];
        }else{
            $msg = ['code'=>0,'message'=>'做题记录保存失败'];
        }
        die(json_encode($msg));
    }
    /**
     * gre 模考
     * 获取不同类型的题目信息
     * cy
     */
    public function actionSelectTopic(){
        $uid = Yii::$app->session->get("uid");
        $sectionId = Yii::$app->request->post("sectionId");
        $access = Yii::$app->request->post("access");//0-全部 1-错题 2-耗时最长
        $questionId = Yii::$app->request->post("questionId");
        $mockRecord = new MockRecord();
        $quesiton = $mockRecord->getTopic($uid,$sectionId,$access,$questionId);
        //评论
        $comment = new UserComment();
        $comment = $comment->getQuestionComment($questionId,1,5);
        foreach($comment['data'] as $k=>$v) {
            $comment['data'][$k]['reply'] = Yii::$app->db->createCommand("select uc.*,u.userName,u.nickname,u.image from x2_user_comment uc LEFT JOIN x2_user u on uc.uid=u.uid where uc.pid={$v['id']}")->queryAll();
        }
        $data = ['question'=>$quesiton,'comment'=>$comment];
        die(json_encode($data));
    }
    /**
     * gre 知识讲堂
     * 首页接口
     * by sjeam
     */
    public function actionKnowIndex(){
        $catKnows = Category::find()->asArray()->where("pid =568")->all();
        $knowNum = 0;
        $viewNum = 0;
        foreach($catKnows as $k=>$v){
            $know = [];
            $child = Category::find()->asArray()->where("pid ={$v['id']}")->all();
            foreach($child as $val){
                $model = new Content();
                $sign = $model->getKnowList($val['id']);
                $knowNum = $knowNum+count($sign);
                foreach($sign as $value){
                    $viewNum = $viewNum+$value['viewCount'];
                }
            }
            $know['id'] = $v['id'];
            $know['pid'] = $v['pid'];
            $know['name'] = $v['name'];
            $know['knowNum'] = $knowNum;
            $know['viewNum'] = $viewNum;
            //子类数据
            // $category = Category::find()->select("id,pid,name")->asArray()->where("pid ={$v['id']}")->all();
            // $know['children'] = $category;
            $knows[$k] = $know;
            $knowNum = 0;
            $viewNum = 0;
        }
        // var_dump($knows);die;
        $data = ['code'=>1,'message'=>'success','data'=>['knows'=>$knows]];
        die(json_encode($data));
    }

    /**
     * gre 知识讲堂  列表  新增 9 
     * 分类数据
     *  by sjeam 
     */
    public function actionKnowCategory(){
        $categoryId = Yii::$app->request->get("categoryId");
        $categoryId = 569;
        // 分类名称
        $catName = Category::find()->where("id = $categoryId")->one()['name'];
        //子类数据
        $category = Category::find()->select("id,pid,name")->asArray()->where("pid =$categoryId")->all();
        $uid = Yii::$app->session->get("uid");
        $type = Yii::$app->request->get('type',1);//1-所有 2-中断 3-完成  (2.3个人中心)
        // var_dump($category);die;
            foreach($category as $ky=> $val){
                $model = new Content();
                $contents = $model->getKnowList($val['id']);
                foreach($contents as $k => $v){
                    $con = [];
                    $con['id'] = $v['id'];
                    $con['pid'] = $v['pid'];
                    $con['catId'] = $v['catId'];
                    $con['name'] = $v['name'];
                    if($uid){
                        $result = Yii::$app->db->createCommand("select * from x2_user_content where uid = $uid and contentId = {$con['id']}")->queryOne();
                        if($result){
                            $con['isLearn'] = $result['type'];
                        }else{
                            $con['isLearn'] = 0;
                        }
                    }else{
                        $con['isLearn'] = 0;//0-未学 1-中断 2-完成
                    }
                    if($type ==1){//所有
                        $cons[] = $con;
                    }elseif($type ==2){//个人中心 中断
                        if($con['isLearn'] == 1)$cons[]=$con;
                    }elseif($type == 3){//完成
                        if($con['isLearn'] == 2)$cons[] =$con;
                    }
                }
                $category[$ky]['children']=$cons;
            }
            // var_dump($category);die;
            // $data = ['code'=>1,'message'=>'success','data'=>['catName'=>$catName,'contents'=>$category]];
            die(Method::jsonGenerate(1,['catName'=>$catName,'category'=>$category],'返回数据成功'));
    }
    /**
     * gre 知识讲堂
     * 文章详情
     * cy
     */
    public function actionKnowDetail(){
        $contentId = Yii::$app->request->get("contentId");
        if($contentId){
            $model = new Content();
            //文章
            $data = $model->getClass(['where' => 'c.id='.$contentId,'fields' => 'description']);
            Content::updateAll(['viewCount' => $data[0]['viewCount']+1],"id={$contentId}");
            $content = $data[0];
            $content['description'] = $this->addHost($content['description']);
            //用户评论
            $usercomment = new UserComment();
            $commentData = $usercomment->appUserComment($contentId,1,6);
            $uid = Yii::$app->session->get("uid");
            if($uid){
                //收藏状态
                $result = UserCollection::find()->where("contentId = $contentId and uid = $uid")->one();
                if($result){
                    $collect = 1;
                }else{
                    $collect = 0;
                }
                //阅读进度
                $res = Yii::$app->db->createCommand("select * from x2_user_content where uid = $uid and contentId = $contentId")->queryOne();
                if($res && $res['type'] == 2){
                    $isRead = 1;
                }else{
                    $time = time();
                    Yii::$app->db->createCommand("insert into x2_user_content(`uid`,`contentId`,`type`,`createTime`) value($uid,$contentId,1,$time)")->execute();
                    $isRead = 0;
                }
            }else{
                $collect = 0;//0-未收藏 1-已收藏
                $isRead = 0;//0-未阅  1-已阅
            }
            $data = ['code'=>1,'message'=>'success','data'=>['isRead'=>$isRead,'collect'=>$collect,'content'=>$content,'comment'=>['total'=>$commentData['count'],'comment'=>empty($commentData['data'])?null:$commentData['data']]]];
        }else{
            $data = ['code'=>0,'message'=>'参数错区'];
        }
        die(json_encode($data));
    }
    /**
     * gre 知识讲堂
     * 阅读状态修改
     * cy
     */
    public function actionKnowRead(){
        $contentId = Yii::$app->request->post("contentId");
        $uid = Yii::$app->session->get("uid");
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'未登录']));
        }
        if(!$contentId){
            die(json_encode(['code'=>0,'message'=>'参数错误']));
        }
        $result = Yii::$app->db->createCommand("update x2_user_content set type = 2 where uid = $uid and contentId = $contentId")->execute();
        if($result){
            $data = ['code'=>1,'message'=>'修改成功'];
        }else{
            $data = ['code'=>0,'message'=>'修改失败'];
        }
        die(json_encode($data));
    }
    /**
     * gre知识讲堂
     * 评论分页获取
     * cy
     */
    public function actionKnowPage(){
        $page = Yii::$app->request->post("page",2);
        $contentId = Yii::$app->request->post("contentId");
        if(!$contentId){
            die(json_encode(['code'=>0,'message'=>'参数错误']));
        }
        $usercomment = new UserComment();
        $commentData = $usercomment->appUserComment($contentId,$page,6);
        if(!$commentData){
            $data = ['code'=>0,'message'=>'暂无相关数据'];
        }else{
            $data = ['code'=>1,'message'=>'success','data'=>['total'=>$commentData['count'],'comment'=>empty($commentData['data'])?null:$commentData['data']]];
        }
        die(json_encode($data));
    }
    /**
     * gre 知识讲堂
     * 评论点赞接口
     * cy
     */
    public function actionKnowAddFine(){
        $commentId = Yii::$app->request->post("commentId");
        if(!$commentId){
            die(json_encode(['code'=>0,'message'=>'参数错误']));
        }
        $fine = UserComment::find()->where("id = $commentId")->asArray()->one()['fane'];
        if($fine){
            $fine += 1;
        }else{
            $fine = 1;
        }
        $res = UserComment::updateAll(['fane'=>$fine],"id=$commentId");
        if($res){
            $data = ['code'=>1,'message'=>'点赞成功','data'=>['fine'=>$fine]];
        }else{
            $data = ['code'=>0,'message'=>'点赞失败'];
        }
        die(json_encode($data));
    }
    /**
     * gre知识讲堂
     * 文章收藏
     * cy
     */
    public function actionKnowCollect(){
        $uid = Yii::$app->session->get("uid");
        $contentId = Yii::$app->request->post("contentId");
        $collect = Yii::$app->request->post('collect');//1-添加收藏 0-取消收藏
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'未登录']));
        }
        if(!$contentId ){
            die(json_encode(['code'=>0,'message'=>'参数错误']));
        }
        if($collect ==1){
            $model = new UserCollection();
            $model->uid = $uid;
            $model->contentId = $contentId;
            $model->createTime = time();
            $res = $model->save();
        }else{
            $res = UserCollection::deleteAll("uid = $uid and contentId = $contentId");
        }
        if($res){
            $data = ['code'=>1,'message'=>'success','data'=>['collect'=>$collect]];
        }else{
            $data = ['code'=>0,'message'=>'操作失败'];
        }
        die(json_encode($data));
    }
    /**
     * gre知识讲堂
     * 文章评论
     * cy
     */
    public function actionKnowComment(){
        $uid = Yii::$app->session->get("uid");
        if(empty($uid)){
            $uid = Yii::$app->request->post('uid'); //兼容单词app
        }
        $contentId = Yii::$app->request->post("contentId");
        $pid = Yii::$app->request->post("pid",0);
        $content = Yii::$app->request->post("content");
        $replyName = Yii::$app->request->post("replyName",'');
        $replyUid = Yii::$app->request->post("replyUid",'');
        $type = $pid == 0?1:2;//1-评论 2-回复
        $fane = 0;
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'未登录']));
        }
        if(!$contentId || !$content){
            die(json_encode(['code'=>0,'message'=>'参数错误']));
        }
        $model = new UserComment();
        $model->uid = $uid;
        $model->contentId = $contentId;
        $model->pid = $pid;
        $model->content = $content;
        $model->replyName = $replyName;
        $model->replyUid = $replyUid;
        $model->type = $type;
        $model->fane = $fane;
        $model->createTime = time();
        $res = $model->save();
        if($res){
            $comments = $model->getUserComment($contentId,1,6);
            $id = $model->id;
            $comment = Yii::$app->db->createCommand("SELECT uc.*,u.userName,u.nickname,u.image,uc.fane as fine from {{%user_comment}} uc LEFT JOIN {{%user}} u on uc.uid=u.uid where uc.id = $id")->queryOne();
            $data = ['code'=>1,'message'=>'success','data'=>['total'=>$comments['count'],'comment'=>$comment]];
        }else{
            $data = ['code'=>0,'message'=>'评论失败'];
        }
        die(json_encode($data));
    }
    /**
     * gre知识讲堂
     * 文章分享
     * cy
     */
    public function actionKnowShare(){
        $contentId = Yii::$app->request->get("contentId");
        if(!$contentId){
            $data = ['code'=>0,'message'=>'参数错误'];
            die(json_encode($data));
        }
        $content = Content::getClass(['where' => 'c.id = '.$contentId, 'fields' => 'description']);
        $content = $content[0];
        $title = $content['title'];
        $text = $content['description'];
        $data = ['code'=>1,'message'=>'success','data'=>['title'=>$title,'text'=>$text,'url'=>"https://gre.viplgw.cn/knowDetail/d-$contentId-569.html"]];
        die(json_encode($data));
    }

    /**
     * gre 清除memcached缓存
     * by yanni
     */
    public function actionClearCaching(){
        Yii::$app->cache->flush();
    }
    /**
     * gre 用户做题数据
     * by yanni
     */
    public function actionUserDoData(){
        $uid = Yii::$app->session->get('uid');    //用户ID
        $data['verbalNum'] = Question::find()->asArray()->where('catId=1 or catId=2')->count();
        $data['quantNum'] = Question::find()->asArray()->where('catId=3')->count();
        $catKnows = Category::find()->asArray()->where("pid =568")->all();
        $knowNum = 0;
        $completeKnow = 0;
        foreach($catKnows as $k=>$v){
            $child = Category::find()->asArray()->where("pid ={$v['id']}")->all();
            foreach($child as $val){
                $model = new Content();
                $r = $model->getKnowledgeNum(['cid'=>$val['id']]);
                $knowNum +=$r;
                if($uid){
                    $n = $model->getKnowledgeNum(['cid'=>$val['id'],'uid'=>$uid,'type'=>2]);  //已查看知识讲堂数量
                    $completeKnow +=$n;
                }
            }
        }
        $data['knowNum'] = $knowNum;
        $data['completeKnow'] = $completeKnow;
        if($uid){
            $day = date("Y-m-d");
            $UserSign = UserSign::find()->asArray()->where("uid=$uid and createDay='$day'")->one();  //用户是否打卡
            if(empty($UserSign)){
                $sign = 0;
            } else{
                $sign = 1;
            }
            $data['sign'] =$sign;
            $userData = Yii::$app->session->get('userData');
            $data['doTotal'] = UserAnswer::find()->asArray()->where("uid={$uid}")->count();   //做题总数
            $correctNum = UserAnswer::find()->asArray()->where("uid={$uid} and correct=1")->count();  //正确总数
            $data['correctRate'] = round($correctNum/$data['doTotal'] * 100)."%";   //正确率
            $data['numberDay'] = ceil((time() - $userData['createTime']) / 86400);
            $model = new Question();
            $data['todayQuestionNum'] = $model->getDayQuestion($uid);   //用户今日做题数
        }
        $data['userNum'] = User::find()->asArray()->count();
        // by sjeam 新增1
        $data['means'] = Means::getMeans();//
        if(!empty($means)){
            $chat = Method::getSource(6); //获取微信
            $means['chat'] = $chat;
        }
        $data['jump']  = Jump::find()->select('image,type,content')->asArray()->orderBy('sort desc,createTime desc')->where("belong=1")->one();//跳转图
        $data = ['code'=>1,'message'=>'请求成功','data'=>$data];
        die(json_encode($data));
    }
    /**
     * gre 做题
     * 单项练习考点列表
     * by yanni
     */
    public function actionSectionPractice(){
        $uid = Yii::$app->session->get('uid');    //用户ID
        $sectionId = Yii::$app->request->get('sectionId',1);    //单项ID
        $sourceModel = new SourceCat();
        $sources =  $sourceModel->getSource($sectionId);  //来源
        foreach($sources as $k=>$v){
            $totalQuestions = QuestionLibrary::find()->asArray()->select(['id'])->where("catId={$sectionId} and type=1 and sourceId={$v['id']}")->all();  //单项题库
            $cache = Yii::$app->cache->get('questionSectionId'.$v['id']."_".$sectionId);   //获取缓存
            if($cache){
                $sources[$k]['totalNum'] = $cache['totalNum'];
                $sources[$k]['totalDoNum'] = $cache['totalDoNum'];
                $sources[$k]['correctRate'] = $cache['correctRate'];
            } else{
                $correctRate = 0;
                $totalNum = 0;
                $totalDoNum = 0;
                $do_tiku = 0;
                foreach($totalQuestions as $ke=>$va){
                    $totalSubject = LibraryQuestion::find()->select("id")->asArray()->where("libId={$va['id']}")->count();   //所有题目
                    $totalNum = $totalNum+$totalSubject;
                    $do_questions = QuestionsStatistics::find()->select("id")->asArray()->where("libraryId={$va['id']} and state=1")->groupBy("uid")->count();   //完成人数
                    $totalDoNum = $totalDoNum + $do_questions;
                    $amodel = new UserAnswer();
                    $correct = $amodel->getLibraryCorrectRate($va['id']);   //题库正确率
                    if(!empty($correct)){
                        $do_tiku = $do_tiku+1;
                        $correctRate = $correctRate+$correct;
                    }
                }
                if($totalNum==0){
//                    unset($sources[$k]);
                    continue;          // 来源总题数为0跳出循环
                }
                $source['totalNum'] = $totalNum;   //来源总题数
                $sources[$k]['totalNum'] = $totalNum;
                $source['totalDoNum'] = $totalDoNum;   //来源完成总人数
                $sources[$k]['totalDoNum'] = $totalDoNum;
                if($do_tiku == 0){
                    $source['correctRate']  = 0;
                }else{
                    $source['correctRate'] = round($correctRate/$do_tiku);   //来源正确率
                }
                $sources[$k]['correctRate'] = $source['correctRate'];
                Yii::$app->cache->set('questionSectionId'.$v['id'].'_'.$sectionId, $source, 3600*24);//缓存一天
            }
            if($uid){
                $libStr ='';
                foreach($totalQuestions as $key=>$val){
                    $libStr .=$val['id'].",";
                }
                $libStr = trim($libStr,",");
                $wheres = "ua.uid=$uid and ua.answerType=1 AND q.catId=$sectionId AND q.sourceId={$v['id']} and ua.libId in($libStr)";
                $answeModel = new UserAnswer();
                $sources[$k]['userAnswerNum'] = $answeModel->getUserAnswerCount($wheres);  //来源用户做题数
            } else {
                $sources[$k]['userAnswerNum'] = 0;
            }
        }
        $data = ['code'=>1,'message'=>'请求成功','data'=>$sources];
        die(json_encode($data));
    }
    /**
     * gre 做题
     * 知识点练习考点列表
     * by yanni
     */
    public function actionKnowPractice(){
        $uid = Yii::$app->session->get('uid');    //单项ID
        $sectionId = Yii::$app->request->get('sectionId',1);    //单项ID
        $knows = QuestionKnow::find()->asArray()->where("catId=$sectionId")->all();  //知识点
        foreach($knows as $k=>$v){
            $totalQuestions = QuestionLibrary::find()->asArray()->where("catId={$sectionId} and type=2 and knowId={$v['id']}")->all();  //题库题目
            $cache = Yii::$app->cache->get('questionKnowId'.$v['id']);   //获取缓存
            if($cache){
                $knows[$k]['totalNum'] = $cache['totalNum'];
                $knows[$k]['totalDoNum'] = $cache['totalDoNum'];
                $knows[$k]['correctRate'] = $cache['correctRate'];
            } else{
                $correctRate = 0;
                $totalNum = 0;
                $totalDoNum = 0;
                $do_tiku = 0;
                foreach($totalQuestions as $ke=>$va){
                    $totalSubject = LibraryQuestion::find()->select("id")->asArray()->where("libId={$va['id']}")->count();   //题库题目数
                    $totalNum = $totalNum+$totalSubject;
                    $do_questions = QuestionsStatistics::find()->select("id")->asArray()->where("libraryId={$va['id']} and state=1")->groupBy("uid")->count();   //完成人数
                    $totalDoNum = $totalDoNum + $do_questions;
                    $amodel = new UserAnswer();
                    $correct = $amodel->getLibraryCorrectRate($va['id']);   //题库正确率
                    if(!empty($correct)){
                        $do_tiku = $do_tiku+1;
                        $correctRate = $correctRate+$correct;
                    }
                }
                $know['totalNum'] = $totalNum;   //来源总题数
                $knows[$k]['totalNum'] = $totalNum;
                $know['totalDoNum'] = $totalDoNum;   //来源完成总人数
                $knows[$k]['totalDoNum'] = $totalDoNum;
                if($do_tiku == 0){
                    $know['correctRate'] = 0;
                }else{
                    $know['correctRate'] = round($correctRate/$do_tiku);
                }
                $knows[$k]['correctRate'] =  $know['correctRate'];
                Yii::$app->cache->set('questionKnowId'.$v['id'], $know, 3600*24);//缓存一天
            }
            if($uid){
                $libStr ='';
                foreach($totalQuestions as $key=>$val){
                    $libStr .=$val['id'].",";
                }
                $libStr = trim($libStr,",");
                $wheres = " ua.uid=$uid and ua.answerType=1 AND q.catId=$sectionId AND q.knowId={$v['id'] } and ua.libId in($libStr) ";
                $answeModel = new UserAnswer();
                $knows[$k]['userAnswerNum'] = $answeModel->getUserAnswerCount($wheres);
            } else {
                $knows[$k]['userAnswerNum'] = 0;
            }
        }
        $data = ['code'=>1,'message'=>'请求成功','data'=>$knows];
        die(json_encode($data));
    }
    /**
     * gre 做题
     * 考点题库列表
     * by yanni
     */
    public function actionPracticeBank(){
        $uid = Yii::$app->session->get('uid');
        $sectionId = Yii::$app->request->get('sectionId');
        $ptype = Yii::$app->request->get('ptype',1);  //区分知识点练习还是单项练习    ptype=1单项练习 ptype=2 知识点练习
        if($ptype==2){
            $knowId = Yii::$app->request->get('knowId');
            $totalTank = QuestionLibrary::find()->asArray()->where("catId={$sectionId} and type=2 and knowId={$knowId}")->all();  //知识点题库
        } else{
            $sourceId = Yii::$app->request->get('sourceId');
            $totalTank = QuestionLibrary::find()->asArray()->where("catId={$sectionId} and type=1 and sourceId={$sourceId}")->all();  //来源题库
        }
        foreach($totalTank as $k=>$v){
            $totalTank[$k]['totalSubject'] = LibraryQuestion::find()->select("id")->asArray()->where("libId={$v['id']}")->count();   //所以题目
            $amodel = new UserAnswer();
            $averageTime = $amodel->getLibraryAverageTime($v['id']);
            $totalTank[$k]['averageTime'] = Method::secToTime($averageTime);
            $totalTank[$k]['correct'] = $amodel->getLibraryCorrectRate($v['id']);   //题库正确率
            if($uid){
                $totalTank[$k]['do_count'] = UserAnswer::find()->select("id")->where("uid={$uid} and libId={$v['id']}")->count();
            } else {
                $totalTank[$k]['do_count'] = 0;
            }
        }
        $res = ['code' => 1,'data'=>$totalTank,'message'=>'请求成功'];
        die(json_encode($res));
    }
    /**
     * gre 题库做题
     * by yanni
     */
    public function actionLibraryMakeProblem()
    {
        $libId = Yii::$app->request->get('libId');
        $source = Yii::$app->request->get('source');
        $start = Yii::$app->request->get('start');
        $questionId = Yii::$app->request->get('questionId');   //前往的题目ID
        $numKey = Yii::$app->request->get('numKey',0);    //前往题目所在位置
        $uid = Yii::$app->session->get("uid");
        if ($uid) {
            $do_questions = UserAnswer::find()->asArray()->where("uid={$uid} and libId={$libId} and answerType=1")->groupBy("questionId")->orderBy("id asc")->all();  //用户已做题
            $queStr = '';
            if ($do_questions) {   //判断题库是否已经做题
                if(count($do_questions)>=$numKey+1 && !$questionId && !$start){   //判断是否在做回顾
                    $questionId = $do_questions[$numKey]['questionId'];   //
                }else{
                    foreach ($do_questions as $v) {
                        $queStr .= $v['questionId'] . ",";
                    }
                }
            } else {
                $questionsStat = QuestionsStatistics::find()->asArray()->where("uid={$uid} and libraryId={$libId}")->one();
                if (!$questionsStat) {   //判断用户题库做题状态是否生成
                    $data['uid'] = $uid;
                    $data['libraryId'] = $libId;
                    $data['totalNum'] = LibraryQuestion::find()->select("id")->where("libId=$libId")->count();
                    $data['startTime'] = time();
                    $data['interruptTime'] = time();
                    Yii::$app->db->createCommand()->insert('{{%questions_statistics}}', $data)->execute();
                }
            }
            //  $question 获取题目ID
            if (!empty($queStr)) {
                $queStr = substr($queStr, 0, -1);
                $question = LibraryQuestion::find()->asArray()->where("libId={$libId} and questionId not in ({$queStr})")->orderBy("id asc")->one();
            } else {
                $question = LibraryQuestion::find()->asArray()->where("libId={$libId}")->orderBy("id asc")->one();
            }
            if ($questionId) {
                $question['questionId'] = $questionId;
                $question['userMake'] = UserAnswer::find()->asArray()->where("uid={$uid} and questionId={$questionId}")->one();
            }
            if($question){
                $isMark = UserBankMark::find()->asArray()->where("uid={$uid} and libId={$libId} and questionId={$question['questionId']}")->one();
                $userCollection = UserCollection::find()->asArray()->where("uid={$uid} and questionId={$question['questionId']}")->one();
                $questionsStat = QuestionsStatistics::find()->asArray()->where("uid={$uid} and libraryId={$libId}")->one();   //用户题库做题状态
                if(!$start){
                    $questionsStat['doNum'] = $numKey;
                }
                $questionData = Questions::find()->asArray()->where("id = {$question['questionId']}")->one();  //题目详情
                $model = new Question();
                $questionData = $model->questionText($questionData,$uid,$libId);          //题目详情html数据处理
                if($isMark){
                    $questionData['ismark'] = 1;   //已标记
                } else{
                    $questionData['ismark'] = 2;   //未标记
                }
                if($userCollection){
                    $questionData['collection'] = 1;   //已收藏
                } else{
                    $questionData['collection'] = 2;   //未收藏
                }
                if($source==1 && ($questionData['type']==5 || $questionData['type']==6 || $questionData['type']==7)){
                    $questionData['question']['details'] = strip_tags($questionData['question']['details']);
                }
                $res['question'] = $questionData;
                $res['status'] = $questionsStat;
                $res = ['code'=>1,'data'=>$res,'message'=>'请求成功'];
            } else {
                $res = ['code'=>98,'data'=>['libId'=>$libId],'message'=>'题库题目已完成'];
            }
        } else{
            $res = ['code'=>99,'message'=>'请登录'];
        }
        die(json_encode($res));
    }
    /**
     * 题库做题提交答案
     * by yanni
     */
    public function actionSubAnswer(){
        $questionId = Yii::$app->request->post('questionId');
        $libId = Yii::$app->request->post('libId');
        $answer = Yii::$app->request->post('answer');
        $useTime = Yii::$app->request->post('useTime');
        $uid = Yii::$app->session->get('uid');
        if(!$questionId || !$libId || !$answer || !$useTime){
            die(json_encode(['code' => 0,'message'=>'请检查你的参数']));
        }
        if($uid){
            $model = new UserAnswer();
            $correct = $model->checkCorrect($questionId,$answer);  //检查用户提交答案是否正确
            $check = UserAnswer::find()->asArray()->where("uid={$uid} and libId={$libId} and questionId={$questionId}")->one();
            if($check){   //检查用户是否做过此题
                UserAnswer::updateAll(['answer'=>$answer,'useTime'=>$useTime,'correct'=>$correct],"uid={$uid} and questionId={$questionId} and libId={$libId}");
                $res = ['code' => 1,'message'=>'提交成功'];
            } else {
                $model = new UserAnswer();
                $model->uid = $uid;
                $model->questionId = $questionId;
                $model->libId = $libId;
                $model->answer = $answer;
                $model->useTime = $useTime;
                $model->createTime = time();
                $model->correct = $correct;
                $model->answerType = 1;
                $r = $model->save();
                if($r>0){
                    $result = QuestionsStatistics::find()->asArray()->where("uid={$uid} and libraryId={$libId}")->one();
                    $correct = UserAnswer::find()->select("id")->where("uid={$uid} and libId={$libId} and correct=1")->count();
                    $upArr['doNum'] = $result['doNum']+1;
                    $upArr['totalTime'] = $result['totalTime']+$useTime;
                    $upArr['interruptTime'] = time();
                    $upArr['correctRate'] = ceil(($correct/$upArr['doNum'])*100);
                    if($upArr['doNum']>=$result['totalNum']){
                        $upArr['endTime'] = time();
                        $upArr['state'] = 1;
                    }
                    QuestionsStatistics::updateAll($upArr,"uid={$uid} and libraryId={$libId}");
                    $checkReward = QuestionReward::find()->asArray()->select(['id'])->where("uid={$uid} and questionId={$questionId}")->one();
                    if(empty($checkReward)){
                        uc_user_edit_integral1($uid,'GRE做题',1,2);
                        $rewardModel = new QuestionReward();
                        $rewardModel->uid = $uid;
                        $rewardModel->questionId = $questionId;
                        $rewardModel->createTime = time();
                        $rewardModel->save();
                    }
                    SynchroLog::updateAll(['lastTime'=>time()],"uid={$uid}");
                    $res = ['code' => 1,'message'=>'提交成功'];
                } else {
                    $res = ['code' => 0,'message'=>'提交失败'];
                }
            }
        } else{
            $res = ['code' => 99,'data'=>[],'message'=>'请登录'];
        }
        die(json_encode($res));
    }

    /**
     * 题库做题回顾
     * by yanni
     */
    public function actionMakeReview(){
        $libId= Yii::$app->request->get('libId');
        $uid= Yii::$app->session->get('uid');
        if($uid){
            $do_questions = UserAnswer::find()->asArray()->select(['questionId'])->where("uid={$uid} and libId={$libId} and answerType=1")->groupBy("questionId")->all();  //用户已做题
            $total_questions = LibraryQuestion::find()->asArray()->select(['questionId'])->where("libId={$libId}")->orderBy('id asc')->all();        //全部题目
            foreach($total_questions as $k=>$v){
                $total_questions[$k]['status'] = 2;  //默认未做状态
                foreach($do_questions as $va){
                    if($v['questionId']==$va['questionId']){
                        $total_questions[$k]['status'] = 1;   //  已做状态
                    }
                }
                $mark = UserBankMark::find()->asArray()->where("uid={$uid} and libId={$libId} and questionId={$v['questionId']}")->one();  //查看是否标记
                if(!empty($mark)){
                    $total_questions[$k]['ismark'] = 1;
                } else{
                    $total_questions[$k]['ismark'] = 2;
                }
            }
            $res = ['code'=>1,'data'=>$total_questions,'do_data'=>$do_questions,'libId'=>$libId,'message'=>'请求成功'];
        } else{
            $res = ['code'=>99,'data'=>[],'message'=>'请登录'];
        }
        die(json_encode($res));
    }

    /**
     * 题库做题结果页
     * by yanni
     */
    public function actionBankResults(){
        $libId = Yii::$app->request->get('libId');
        $uid = Yii::$app->session->get('uid');
        if($uid) {
            $model = new QuestionsStatistics();
            $userStatistic = $model->find()->asArray()->where("uid={$uid} and libraryId={$libId}")->one();  //用户做题状态
            $totalNum = LibraryQuestion::find()->select("id")->asArray()->where("libId={$libId}")->count();   //题库总数
            $overstep = $model->getCompete($uid, $libId, $userStatistic['correctRate']);       //总共多少人做题   和超过多少人
            $compete['probability'] = round($overstep['transcendNum'] / $overstep['total'], 4);                 //竞争力
            $compete['userNum'] = $overstep['total'];
            $compete['transcendNum'] = $overstep['transcendNum'];        //做题总人数
            $data['pace'] = $model->getPace($userStatistic['totalNum'], $userStatistic['totalTime']);          //pace诊断
            $aModel = new UserAnswer();
            $data['correctNum'] = $aModel->find()->select("id")->asArray()->where("uid={$uid} and libId={$libId} and correct=1 and answerType=1")->count();   //用户题库正确数量
            $data['totalNum'] = $totalNum;
            $data['correctRate'] = $userStatistic['correctRate'];
            $data['totalUse'] = Method::secToTime($userStatistic['totalTime']);
            $data['meanTime'] = Method::secToTime(round($userStatistic['totalTime'] / $userStatistic['doNum']));
            $data['compete'] = $compete;
            $data['libId'] = $libId;
            $res = ['code' => 1, 'data' => $data, 'message' => '请求成功'];
        } else {
            $res = ['code' => 99, 'data' => [], 'message' => '请登录'];
        }
        die(json_encode($res));
    }

    /**
     * 题库做题结果页重新做题
     * by yanni
     */
    public function actionAgainMake()
    {
        $libId = Yii::$app->request->get('libId',1);
        $uid = Yii::$app->session->get('uid');
        $res = UserAnswer::deleteAll("uid={$uid} and libId={$libId} and answerType=1");
        if($uid){
            if($res){
                $upArr['doNum'] = 0;
                $upArr['totalTime'] = 0;
                $upArr['startTime'] = time();
                $upArr['interruptTime'] = time();
                $upArr['state'] = 0;
                $upArr['correctRate'] = 0;
                QuestionsStatistics::updateAll($upArr,"uid={$uid} and libraryId={$libId}");
                $res = ['code' => 1, 'data' => [], 'message' => '清除记录成功'];
            } else {
                $res = ['code' => 0, 'data' => [], 'message' => '清除记录失败'];
            }
        }else{
            $res = ['code' => 99, 'data' => [], 'message' => '请登录'];
        }
        die(json_encode($res));
    }

    /**
     * 题库做题结果页详情
     * by yanni
     */
    public function actionBankResultDetail(){
        $libId = Yii::$app->request->get('libId');
        $questionId = Yii::$app->request->get('questionId');
        $source = Yii::$app->request->get('source');
        $uid = Yii::$app->session->get('uid');
        if($uid) {
            if(!$libId && $questionId){            //只有questionId存在的时候
                $question = Question::find()->asArray()->where("id={$questionId}")->one();
                $model = new Question();
                $questionDetail =$model->questionText($question,$uid,'');   //获取题目详情  包括解析 笔记
                if($source==1 && ($questionDetail['type']==5 || $questionDetail['type']==6 || $questionDetail['type']==7)){
                    $questionDetail['question']['details'] = strip_tags($questionDetail['question']['details']);
                }
                $res = ['questionDetail'=>$questionDetail];
                $res = ['code' => 1, 'data' => $res,'message' => '请求成功'];
            } else{
                $questionAll = UserAnswer::find()->asArray()->select(['questionId','correct'])->where("uid={$uid} and libId={$libId} and answerType=1")->all();
                if(!$questionId){
                    $questionId = $questionAll[0]['questionId'];
                }
                if(!$questionId){
                    $res = ['code' => 0, 'data' => [], 'message' => '做题记录已清空'];
                } else{
                    $question = Question::find()->asArray()->where("id={$questionId}")->one();
                    $model = new Question();
                    $questionDetail =$model->questionText($question,$uid,$libId);   //获取题目详情  包括解析 笔记
                    if($source==1 && ($questionDetail['type']==5 || $questionDetail['type']==6 || $questionDetail['type']==7)){
                        $questionDetail['question']['details'] = strip_tags($questionDetail['question']['details']);
                    }
                    $res = ['questionDetail'=>$questionDetail,'questionAll'=>$questionAll];
                    $res = ['code' => 1, 'data' => $res,'message' => '请求成功'];
                }
            }
            if($res['code']==1){
                $userCollection = UserCollection::find()->asArray()->where("uid={$uid} and questionId={$questionId}")->one();
                if($userCollection){
                    $res['data']['questionDetail']['collection'] = 1;   //已收藏
                } else{
                    $res['data']['questionDetail']['collection'] = 2;   //未收藏
                }
            }
        } else{
            if($questionId){            //只有questionId存在的时候
                $question = Question::find()->asArray()->where("id={$questionId}")->one();
                $model = new Question();
                $questionDetail =$model->questionText($question,'','');   //获取题目详情  包括解析 笔记
                if($source==1 && ($questionDetail['type']==5 || $questionDetail['type']==6 || $questionDetail['type']==7)){
                    $questionDetail['question']['details'] = strip_tags($questionDetail['question']['details']);
                }
                $res = ['questionDetail'=>$questionDetail];
                $res = ['code' => 1, 'data' => $res,'message' => '请求成功'];
            } else{
                $res = ['code' => 99, 'data' => [], 'message' => '请登录'];
            }
        }
        die(json_encode($res));
    }

    /**
     * 加载题目评论
     * by yanni
     */
    public function actionLoadQuestionComment(){
        $questionId = Yii::$app->request->get('questionId');
        $page = Yii::$app->request->get('page',1);
        if($questionId){
            $modelu = new UserComment();
            $comment = $modelu->getQuestionComment($questionId,$page,5);   //题目评论
            foreach($comment['data'] as $k=>$v){
                $comment['data'][$k]['reply'] = Yii::$app->db->createCommand("select uc.*,u.userName,u.nickname,u.image,uc.fane as fine from x2_user_comment uc LEFT JOIN x2_user u on uc.uid=u.uid where uc.pid={$v['id']}")->queryAll();
            }
            $res = ['code'=>1,'data'=>$comment,'message'=>'请求成功'];
        } else{
            $res = ['code'=>0,'message'=>'请传入题目ID'];
        }
        die(json_encode($res));
    }

    /**
     * 用户全科做题报告
     * by yanni
     */
    public function actionUserReport(){
        $uid = Yii::$app->session->get('uid');
        if(!$uid){
            die(json_encode(['code' => 99, 'message' => '请登录']));
        }
        $model = new UserAnswer();
        $replenish['correct'] = $model->getUserSectionCorrectRate($uid,1);       //填空正确率
        $replenish['ageTime'] = $model->getUserSectionAverageTime($uid,1);    //填空平均耗时
        $read['correct'] = $model->getUserSectionCorrectRate($uid,2);         //阅读正确率
        $read['ageTime'] = $model->getUserSectionAverageTime($uid,2);          //阅读平均耗时
        $quant['correct'] = $model->getUserSectionCorrectRate($uid,3);         //数学正确率
        $quant['ageTime'] = $model->getUserSectionAverageTime($uid,3);         //数学平均耗时
        $replenishKnow = $model->getUserSectionKnow($uid,1);                 //填空考点分析
        $readKnow = $model->getUserSectionKnow($uid,2);                      //阅读考点分析
        $quantKnow = $model->getUserSectionKnow($uid,3);                     //数学考点分析
        $data['replenish'] = $replenish;
        $data['read'] = $read;
        $data['quant'] = $quant;
        $data['replenishKnow'] = $replenishKnow;
        $data['readKnow'] = $readKnow;
        $data['quantKnow'] = $quantKnow;
        $data['replenishStrategy'] = $model->getStrategy(1,$replenish['correct']);
        $data['readStrategy'] = $model->getStrategy(2,$read['correct']);
        $data['quantStrategy'] = $model->getStrategy(3,$quant['correct']);
        die(json_encode(['code'=>1,'data'=>$data,'message'=>'请求成功']));
    }
    /**
     * 用户签到接口
     * yanni
     */
    public function actionSign()
    {
        $uid = Yii::$app->session->get('uid');
        $day = date("Y-m-d");
        if (!$uid) {
            die(json_encode(['code' => 99, 'message' => '未登录']));
        }
        $check = UserSign::find()->asArray()->where("uid=$uid and createDay='$day'")->one();
        if(!empty($check)){
            die(json_encode(['code' => 2, 'message' => '今天已打卡']));
        }
        $sign = User::find()->asArray()->select(['lastSign','continuousNum'])->where("uid=$uid")->one();
        $lastDay = date("Y-m-d", strtotime("-1 day"));
//        var_dump($lastDay);die;
        if ($lastDay == $sign['lastSign']) {
            User::updateAll(['continuousNum' => $sign['continuousNum']+1], "uid=$uid");
        } else {
            User::updateAll(['continuousNum' => 1], "uid=$uid");
        }
        User::updateAll(['lastSign' => $day], "uid=$uid");
        $model = new UserSign();
        $model->uid = $uid;
        $model->createDay = $day;
        $re = $model->save();
        if ($re) {
            $sign = User::findOne($uid);
            $num = $sign->continuousNum;
            $num = 10 + 5 * $num;
            uc_user_edit_integral1($uid, 'GRE签到', 1, $num);
            $giveIntergral=  User::addBehavior(3,$uid);//打卡添加行为积分 by sjeam 新增2
            $re = [
                'code' => 1,
                'data' => $num,
                'message' => '签到成功'
            ];
        } else {
            $re = [
                'code' => 0,
                'message' => '签到失败'
            ];
        }
        die(json_encode($re));
    }

    /**
     * 签到页面
     * yanni
     */
    public function actionUserSign()
    {
        $uid = Yii::$app->session->get('uid');
        if (!$uid) {
            die(json_encode(['code' => 99, 'message' => '未登录']));
        }
        $date = Yii::$app->request->get('date');
        $month = date("Y-m",strtotime($date));
//        $day = date("Y-m");
        $data = UserSign::find()->asArray()->where("DATE_FORMAT(createDay,'%Y-%m') = '$month' AND uid=$uid")->orderBy('createDay ASC')->all();
        $num = UserSign::find()->select("id")->where("uid=$uid")->count();
        $integral = uc_user_integral1($uid);
        $day = date("Y-m-d");
        $sign = UserSign::find()->asArray()->where("createDay = '$day' AND uid=$uid")->one();
        if($sign){
            $type=1;
        }else{
            $type=0;
        }
        $userDetail = User::find()->asArray()->where("uid=$uid")->one();
        $numCards = UserSign::find()->groupBy('uid')->count();
        $data = ['type'=>$type,'dateTime'=>$data,'integral'=>$integral['integral'],'continuousNum'=>$userDetail['continuousNum'],'numCards'=>$numCards,'num' => $num];
        die(json_encode(['code' => 1, 'data' => $data, 'message'=>'请求成功']));

    }
    /**
     * 用户报错
     */
    public function actionReportErrors(){
        $uid = Yii::$app->session->get("uid");
        $questionId = Yii::$app->request->get("questionId");   //纠错题目ID
        $errorsType = Yii::$app->request->get("errorType");  //错误类型
        $error = Yii::$app->request->get("errorContent");   //详情
        $source = Yii::$app->request->get("source",'安卓');   //纠错提交终端
        if($uid){
            $model = new ReportErrors();
            $model->questionId = $questionId;
            $model->errorsType = $errorsType;
            $model->errorsContent = $error;
            $model->createTime = time();
            $model->uid = $uid;
            $model->source = $source;
            $r = $model->save();
            if($r>0){
                $res = ['code' => 1,'message'=>'提交成功，感谢反馈！！！'];
            } else{
                $res = ['code' => 0,'message'=>'提交失败'];
            }
        } else {
            $res = ['code' => 2,'message'=>'未登录'];
        }
        die(json_encode($res));
    }

    /**
     * 抢先学课 提分课首页  新增5
     * by  sjeam
     * app/app-apinew/preemptive-course
     * 参数 page  pageSize
     */
    public function actionPreemptiveCourse(){
        $res['banner'] = Jump :: getCourseJump(3);

        $page = Yii::$app->request->get("page",1);   //page
        $pageSize = Yii::$app->request->get("pageSize",10);  //pageSize
        $res['courses'] = Course::getCourse($page,$pageSize,0);   //提分课所有课程  0 分页  1  全部
        // $res['banner'] = Content::getClass(['where' => 'c.pid=0', 'fields' => 'url', 'category' => '595', 'page' => 1, 'pageSize' => 5]);   //banner 图片
        // $teachers = Teacher::find()->asArray()->select(['id','numberLessons','lastTime'])->all();
        // foreach($teachers as $v){
        //     $lastDate = date("Y-m-d",$v['lastTime']);
        //     $timeDate = date("Y-m-d",time());
        //     if($timeDate>$lastDate){
        //         $differ = intval((strtotime($timeDate)-strtotime($lastDate))/86400);
        //         $num = 0;
        //         for($i=0;$i<$differ;$i++){
        //             $randArr=array(1,3,5,7,9);
        //             $k = array_rand($randArr,1);
        //             $num +=$randArr[$k];
        //         }
        //         $bumber = 300 + ($v['numberLessons']+$num)%100;
        //         Teacher::updateAll(['numberLessons'=>$bumber,'lastTime'=>time()],"id={$v['id']}");
        //     }else{
        //         if($v['numberLessons']<300 || $v['numberLessons'] > 400){
        //             $bumber = 300 + $v['numberLessons']%100;
        //             Teacher::updateAll(['numberLessons'=>$bumber,'lastTime'=>time()],"id={$v['id']}");
        //         }
        //     }
        // }
        // $res['teacher'] = Teacher::find()->asArray()->orderBy('sort desc')->limit(4)->all();   //名师
        // foreach($res['teacher'] as $k=>$v){
        //     $res['teacher'][$k]['viewCount'] = $v['numberLessons'];
        // }
        // $data = Method::post("https://open.viplgw.cn/cn/api/gre-class-list",['catId' => 439]);
        // $res['activity'] = json_decode($data,true);          //活动
        $res['auditionCourse'] = Course::auditionCourse();
        // $res['cc_userId'] = '7144B6FA4AC948AE';

        // var_dump($res);die;
        die(json_encode(['code' => 1,'data'=>$res,'message'=>'请求成功']));
    }


    /**
     * 专家讲师详情页
     */
    public function actionTeacherDetail(){
        $teacherId = Yii::$app->request->get("teacherId");
        $page = Yii::$app->request->get("page",1);
        if($teacherId){
            $teacher = Teachers::find()->where("id = $teacherId")->asArray()->one();
            $collecte = TeacherCollection::find()->asArray()->select("count(id) as cou")->where("teacherId = $teacherId")->one();  //讲师被收藏数量
            $teacher['follow'] = $collecte['cou'];                          //关注
            $modelc = new TeachercolumnComment();
            $comment = $modelc->getTeacherComment($teacherId,$page,50);   //分页50条2018-10-8
            $teacher['comment'] = $comment['data'];          //评论
            $teacher['commentCount'] = $comment['total'];     //评论数量
            $model = new Content();
            $teacher['students'] =$model->getClass(['category'=>'531','fields'=>'answer,alternatives,article,listeningFile,cnName,numbering']);        //学员
            $res = ['code'=>1,'data'=>$teacher,'message'=>'请求成功'];
        } else{
            $res = ['code'=>0,'data'=>[],'message'=>'没有找到讲师ID'];
        }
        die(json_encode($res));
    }

    /**
     * 老师评论分页
     * by  yanni
     */
    public function actionTeacherComment(){
        $page = Yii::$app->request->get("page",1);
        $teacherId = Yii::$app->request->get("teacherId");
        $modelc = new TeachercolumnComment();
        $comment = $modelc->getTeacherComment($teacherId,$page,10);
        $res = ['code'=>1,'data'=>$comment,'message'=>'请求成功'];
        die(json_encode($res));
    }
    /**
     *  抢先课程；列表
     * by  yanni
     */
    public function actionListCourses(){
        $courseId = Yii::$app->request->get('courseId',14);
        if($courseId){
            $data = Course::find()->asArray()->where("type=1")->orderBy("sort asc") ->all();  //抢先课
            foreach($data as $k=>$v){
                if($v['id']==$courseId){
                    $data[$k]['select'] = 1;                //是否选中
                } else {
                    $data[$k]['select'] = 0;
                }
                $courseModel = new Course();
                $data[$k]['courseContent'] = $courseModel->getListCourse($v['id']);   //课程内容
            }
            $res = ['code'=>1,'data'=>$data,'message'=>'请求成功'];
        } else{
            $res = ['code'=>'97','data'=>[],'message'=>'抢先课程ID不存在'];
        }
        die(json_encode($res));
    }

    /**
     *  课程详情
     * by  yanni
     */
    public function actionCourseDetail(){
        $courseId = Yii::$app->request->get('courseId');
        $model = new Content();
        $sign = $model->findOne($courseId);
        if(!$sign){
            die(json_encode(['code' => 0,'message'=>'商品已下架']));
        }
        if($sign->pid == 0){
            $data =  $model->getClass(['fields' => 'answer，price,originalPrice,duration,commencement,performance,alternatives,article,description','where' =>"c.pid=$courseId",'pageSize' => 1]);
            if(empty($data)){
                die(json_encode(['code' => 0,'message'=>'没有课程详情']));
            }
            $pid = $courseId;
            $parent =  $model->getClass(['fields' => 'description,listeningFile,trainer','where' =>"c.id=$courseId"]);
            $tagModel = new ContentTag();
            $tag = $tagModel->getAllTag($data[0]['id']);
            $count = $parent[0]['viewCount'];
            Content::updateAll(['viewCount' => ($count+1)],"id=$courseId");
        }else{
            $data =  $model->getClass(['fields' => 'answer，price,originalPrice,duration,commencement,performance,alternatives,article,description','where' =>"c.id=$courseId",'pageSize' => 1]);
            $parent =  $model->getClass(['fields' => 'description,listeningFile,trainer','where' =>"c.id=$sign->pid"]);
            $tagModel = new ContentTag();
            $tag = $tagModel->getAllTag($courseId);
            $pid = $sign->pid;
            $count = $parent[0]['viewCount'];
            Content::updateAll(['viewCount' => ($count+1)],"id=$sign->pid");
        }
        $endTime = strtotime($data[0]['article']);
        if($endTime < time()){
            $surplusTime = '已结束';
        } else {
            $surplusTime = $endTime-time();
        }
        $modelM = new Method();
        $surplusTime = $modelM->gmstrftimeB($surplusTime);
        $data[0]['article'] = $surplusTime;
        $data[0]['place'] = \Yii::$app->params['coursePlace'][$data[0]['id']%3];
        $modelu = new UserComment();
        $comment = $modelu->getUserComment($pid,1,5);
        $audition = Livesdkid::find()->asArray()->where("contentId={$courseId}")->one();
        $res = ['courseId' => $courseId,'pid' => $pid,'count' => $count,'tag' => [],'data' => $data[0],'parent' => $parent[0],'comment'=>$comment,'audition'=>$audition];
        $isLogin = 0;//0-无需登录  1-必须登录
        $res['isLogin'] = $isLogin;
        die(json_encode(['code'=>1,'data'=>$res,'message'=>'请求成功']));

    }

    /**
     * 获取livesdkid
     * by  yanni
     */
    public function actionLivesdkid(){
        $courseId = Yii::$app->request->get('courseId');
        if($courseId){
            $audition = Livesdkid::find()->asArray()->where("contentId={$courseId}")->one();
            if($audition){
                $res = ['code'=>1,'data'=>$audition,'message'=>'请求成功'];
            } else{
                $res = ['code'=>0,'message'=>'课程没有SDK'];
            }
        } else{
            $res = ['code'=>0,'message'=>'未接收到课程ID'];
        }
        die(json_encode($res));
    }

    /**
     * 题目搜索
     * by  yanni
     */
    public function actionSelectQuestions(){
        $keyWord = Yii::$app->request->get('keyWord');
        if($keyWord){
            $questions = Question::find()->asArray()->select(['id','stem'])->where("stem like '%{$keyWord}%' or readStem like '%{$keyWord}%' or details like '%{$keyWord}%' or readArticle like '%{$keyWord}%'")->limit(50)->all();
            $res = ['code'=>1,'data'=>$questions,'message'=>'请求成功'];
        } else{
            $res = ['code'=>0,'data'=>[],'message'=>'请传入关键词'];
        }
        die(json_encode($res));
    }

    /**
     * 资讯页面
     */
    public function actionAppInformation(){
        $data = Content::getClass(['category' =>"544",'pageSize' => 9]);
        $res = ['code'=>1,'data'=>$data,'message'=>'请求成功'];
        die(json_encode($res));
    }

    /**
     * 资讯分页
     * by  yanni
     */
    public function actionInformationPage(){
        $page = Yii::$app->request->get('page',1);
        $pageSize = Yii::$app->request->get('pageSize',10);
        $uid = Yii::$app->session->get('uid');
        $information = Content::getClass(['where' => 'c.pid=0','fields' => 'answer,alternatives','category' => '543','order'=>'alternatives DESC','page'=>$page,'pageSize' => $pageSize,'pageStr'=>1]);
        foreach($information['data'] as $k=>$v){
            $information['data'][$k]['num'] = UserComment::find()->select("id")->asArray()->where("pid = 0 and contentId={$v['id']}")->count();
            $user = User::find()->asArray()->select(['id','nickname','image'])->where("id={$v['userId']}")->one();
            if($uid){
                $inspect = UserFollow::find()->asArray()->where("uid={$uid} and followUser={$user['id']}")->one();   //查看用户是否关注小编
                if($inspect){
                    $user['follow'] = 1;
                } else{
                    $user['follow'] = 2;
                }
            } else{
                $user['follow'] = 2;
            }
            $information['data'][$k]['editUser'] = $user;
            $information[$k]['alternatives'] = Method::gmstrftimeC($information[$k]['alternatives']);
        }
        $res = ['code'=>1,'data'=>$information,'message'=>'请求成功'];
        die(json_encode($res));
    }

    /**
     * 资讯详情接口
     */
    public function actionInformationDetail(){
        $id = Yii::$app->request->get('id');
        $uid = Yii::$app->session->get('uid');
        $commentPageSize = Yii::$app->request->get('commentPageSize',50);
        $model = new Content();
        $data =  $model->getClass(['fields' => 'answer,alternatives,description,cnName','where' =>"c.id=$id"]);
        Content::updateAll(['viewCount'=>$data[0]['viewCount']+1],'id='.$id);
        $modelu = new UserComment();
        $comment = $modelu->appUserComment($id,1,$commentPageSize);
        $collection = '';
        $follow = '';
        if($uid) {
            $sign = UserCollection::find()->asArray()->select(['id'])->where("uid={$uid} and contentId={$id}")->one();   //用户是否收藏
            if($sign){
                $collection =1;
            }
            $f = UserFollow::find()->asArray()->where("uid={$uid} and followUser={$data[0]['userId']}")->one();             //是否关注用户
            if($f){
                $follow = 1;
            }
        }
        $user = User::find()->asArray()->select(['id','nickname','image'])->where("id={$data[0]['userId']}")->one();
        $data[0]['editUser'] = $user;
        $data[0]['editUser']['follow'] = $follow;
        $data[0]['alternatives'] = Method::gmstrftimeC($data[0]['alternatives']);
        $data[0]['description'] = str_replace('src="/','src="https://gre.viplgw.cn/',$data[0]['description']);
        $hot = Content::getClass(['where' => 'c.pid=0 and hot=2', 'fields' => 'answer,alternatives', 'category' => '537', 'page' => 1, 'pageSize' => 4]);   //热门备考文章
        foreach($hot as $k=>$v){
            $aUser = User::find()->asArray()->select(['nickname','image'])->where("id={$v['userId']}")->one();
            $hot[$k]['editUser']=$aUser;
        }
        $res = ['code'=>1,'data'=>['detail'=>$data[0],'comment'=>$comment,'collection'=>$collection,'hot'=>$hot],'message'=>'请求成功'];
        die(json_encode($res));
    }

    /**
     * 内容评论分页接口
     */
    public function actionContentPage(){
        $id = Yii::$app->request->get('id');
        $page  = Yii::$app->request->get('page',1);
        $pageSize = Yii::$app->request->get('pageSize',50);
        if(!$id){
            die(json_encode(['code'=>0,'data'=>[],'message'=>'请传入需要获取内容评论的ID']));
        }
        $modelu = new UserComment();
        $comment = $modelu->appUserComment($id,$page,$pageSize);
        $res = ['code'=>1,'data'=>$comment,'message'=>'请求成功'];
        die(json_encode($res));
    }
    /*
     * 评论
     * cy 名师系列
     * type  1-评论 2-回复
     */
    public function actionAddComment(){
        $userid = Yii::$app->session->get("uid");
        if(!$userid){
            die(json_encode(['code'=>99,'message'=>'未登录']));
        }
        $comment = Yii::$app->request->post('comment');
        $teacherid = Yii::$app->request->post("teacherid");
        $contentid = Yii::$app->request->post("contentid");
        $type = Yii::$app->request->post("type",1);
        if($type == 2){
            $pid = Yii::$app->request->post("pid");//回复的顶级评论id
            $fpid = Yii::$app->request->post("fpid");//回复内容ID
        }else{
            $pid = 0;
            $fpid = 0;
        }
        if($teacherid){
            $access = 1;//老师
            $teaid = $teacherid;
            $conid = 0;
        }
        if($contentid){
            $teaid = 0;
            $access = 2;//文章
            $conid = $contentid;
        }
        $time = date('Y-m-d H:i:s ',time());
        $model = new TeachercolumnComment();
        $model->userId = $userid;
        $model->teacherId = $teaid;
        $model->contentId = $conid;
        $model->comment = $comment;
        $model->type = $type;
        $model->createTime = $time;
        $model->pid = $pid;
        $model->fpid = $fpid;
        $res = $model->save();
        if($res){
            if($access == 1){
                $str = "teacherId";
                $sid = $teacherid;
            }else{
                $str = "contentId";
                $sid = $contentid;
            }
            $pidcount = TeachercolumnComment::find()->select("id")->asArray()->where("$str = $sid and pid = 0")->orderBy("id desc")->count();
            if($pidcount < 6){
                $page = '';
            }else{
                $page = new Pager($pidcount,1,50);  //分页2018-10-8
                $page = $page->GetPagerContent();
            }
            $comments = TeachercolumnComment::find()->asArray()->where("$str = $sid and pid = 0")->orderBy("id desc")->all();
            foreach($comments as $k =>$v){
                $comments[$k]['key'] =$pidcount-$k;
                $uid = $v['userId'];
                $user = User::find()->asArray()->select("id,userName,image,nickname")->where("uid = $uid")->one();
                $comments[$k]['userimage'] = $user['image'];
                if(!empty($user['nickname'])){
                    $comments[$k]['usernickname'] = $user['nickname'];
                } else{
                    $comments[$k]['usernickname'] = $user['userName'];
                }
                $datas = TeachercolumnComment::find()->asArray()->where("$str = $sid and pid != 0 and fpid = {$v['id']}")->orderBy("id asc")->all();
                if(!empty($datas)){
                    foreach($datas as $ki => $ko){
                        $pid_user = TeachercolumnComment::find()->where("id = {$ko['pid']}")->one()['userId'];
                        $p_user = User::find()->asArray()->select("id,image,nickname")->where("uid = $pid_user")->one();
                        $datas[$ki]['p_userimage'] = $p_user["image"];
                        $datas[$ki]["p_usernickname"] = $p_user["nickname"];
                        $self = User::find()->asArray()->select("id,image,nickname")->where("uid = {$ko['userId']}")->one();
                        $datas[$ki]['userimage'] = $self['image'];
                        if(!empty($user['nickname'])){
                            $datas[$ki]['usernickname'] = $self['nickname'];
                        } else{
                            $datas[$ki]['usernickname'] = $self['userName'];
                        }
                    }
                }
                $comments[$k]["reply"] = $datas;
            }
            if($pid){
                $reply = TeachercolumnComment::find()->asArray()->where("pid={$pid} and type=2")->orderBy("id desc")->all();
                if(!empty($reply)){
                    foreach($reply as $ki => $ko){
                        $pid_user = TeachercolumnComment::find()->where("id = {$ko['pid']}")->one()['userId'];
                        $p_user = User::find()->asArray()->select("id,image,nickname")->where("uid = $pid_user")->one();
                        $reply[$ki]['p_userimage'] = $p_user["image"];
                        $reply[$ki]["p_usernickname"] = $p_user["nickname"];
                        $self = User::find()->asArray()->select("id,image,nickname")->where("uid = {$ko['userId']}")->one();
                        $reply[$ki]['userimage'] = $self['image'];
                        if(!empty($user['nickname'])){
                            $reply[$ki]['usernickname'] = $self['nickname'];
                        } else{
                            $reply[$ki]['usernickname'] = $self['userName'];
                        }
                    }
                }
            } else{
                $reply='';
            }
            $data = array('code'=>1,'message'=>'success','data'=>['comments'=>$comments,'reply'=>$reply,'page'=>$page,'totalcount'=>$pidcount]);

        }else{
            $data = array('code'=>0,'messgae'=>'评论回复失败');
        }
        die(json_encode($data));
    }

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
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'请登录']));
        }
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
        $look = Method::post("https://bbs.viplgw.cn/cn/api/check-look",['uid' => $uid]);
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
     * 检查是否需要同步
     * by  yanni
     */
    public function actionCheckSynchro(){
        $uid = Yii::$app->session->get('uid');
        $lastTime = Yii::$app->request->post('lastTime');
        if(!$uid){
            die(json_encode(['code' => 99,'message'=>'请登录']));
        }
        $userLog = SynchroLog::find()->asArray()->where("uid = $uid")->one();
        if(empty($userLog)){
            $model = new SynchroLog();
            $model->lastTime = time();
            $model->lockTime = time();
            $model->uid = $uid;
            $model->save();
        }
        $sign = SynchroLog::find()->asArray()->where("lastTime={$lastTime} and uid=$uid")->one();
        if(empty($sign)){
            Yii::$app->session->set('lastTime',$lastTime);
            $res = ['core'=>1,'message'=>'需要同步'];
        } else{
            $res = ['core'=>0,'message'=>'不需要同步'];
        }
        die(json_encode($res));
    }
    /**
     * 同步记录
     * by  yanni
     */
    public function actionSynchroRecord(){
        $session = Yii::$app->session;
        $uid = $session->get('uid');
        if(!$uid){
            die(json_encode(['code' => 99,'message'=>'请登录']));
        }
        $file = $_FILES['upload'];
        $upload = new UploadFile();
        $upload->int_max_size = 3145728;
        $upload->arr_allow_exts = array('txt');
        $upload->str_save_path = Yii::$app->params['synchronous'];
        $arr_rs = $upload->upload($file);
        if ($arr_rs['int_code'] == 1) {
            $fileurl = "/" . Yii::$app->params['synchronous'] . $arr_rs['arr_data']['arr_data'][0]['savename'];
            $user = new User();
            $recordPath = $user->SyncRecord($fileurl,$uid);
            $lastTime = Yii::$app->session->get('lastTime');
            SynchroLog::updateAll(['lastTime'=>$lastTime,'lockTime'=>time()],"uid={$uid}");
            $res['code'] = 1;
            $res['message'] = '同步成功';
            $res['data'] = $recordPath;
            $res['url'] = $fileurl;
        } else{
            $res['code'] = 0;
            $res['message'] = '上传失败，请重试';
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
     * 备考故事：学员案例
     * by  yanni
     */
    public function actionStudentCase(){
        $page = Yii::$app->request->post('page',1);
        $pageSize = Yii::$app->request->post('pageSize',10);
        $data = Content::getClass(['where' => 'c.pid=0','fields' => 'answer,article','category' => '531','page'=>$page,'pageSize' => $pageSize]);
        $arr = array();
        foreach($data as $k=>$v){
            $arr[$k]['id'] = $v['id'];
            $arr[$k]['title'] = $v['name'];
            $arr[$k]['image'] = $v['image'];
            $arr[$k]['name'] = $v['answer'];
            $arr[$k]['timeDate'] = $v['article'];
            $arr[$k]['viewCount'] = $v['viewCount'];
        }
        die(json_encode(['code'=>1,'data'=>$arr]));
    }

    /**
     * 故事详情：案例详情
     * by  yanni
     */
    public function actionCaseDetail(){
        $uid = Yii::$app->session->get('uid');
        $id = Yii::$app->request->post('id');
        $data = Content::getClass(['where' => 'c.id='.$id,'fields' => 'answer,alternatives,article,listeningFile,cnName,numbering,description']);
        if(empty($data)){
            die(json_encode(['code'=>0,'message'=>'参数错误']));
        }
        $detail['id'] = $data[0]['id'];
        $detail['name'] = $data[0]['answer'];
        $detail['basics'] = $data[0]['alternatives'];
        $detail['timeDate'] = $data[0]['article'];
        $detail['classType'] = $data[0]['listeningFile'];
        $detail['number'] = $data[0]['cnName'];
        $detail['score'] = $data[0]['numbering'];
        $detail['details'] = $data[0]['description'];
        $detail['title'] = $data[0]['name'];
        $detail['fine'] = $data[0]['fabulous'];
        if($uid) {
            $sign = UserCollection::find()->asArray()->select(['id'])->where("uid={$uid} and contentId={$id}")->one();   //用户是否收藏
            if($sign){
                $detail['collection'] =1;
            } else{
                $detail['collection'] =0;
            }
        } else{
            $detail['collection'] =0;
        }
        $sign = $data = Content::getClass(['where' => 'c.pid=0 and c.hot=2','fields' => 'answer,article','category' => '531','orderBy'=>'','page'=>1,'pageSize' => 4]);
        $hots = array();
        foreach($sign as $k=>$v){
            $hots[$k]['id'] = $v['id'];
            $hots[$k]['title'] = $v['name'];
            $hots[$k]['image'] = $v['image'];
            $hots[$k]['name'] = $v['answer'];
            $hots[$k]['timeDate'] = $v['article'];
            $hots[$k]['viewCount'] = $v['viewCount'];
        }
        Content::updateAll(['viewCount'=>$data[0]['viewCount']+1],'id='.$id);
        $modelu = new UserComment();
        $comment = $modelu->appUserComment($id,1,50);
        die(json_encode(['code'=>1,'data'=>['detail'=>$detail,'hots'=>$hots,'comment'=>$comment['data']]]));
    }

    /**
     * 更新题库
     * by  yanni
     */
    public function actionUpdateLog(){
        $updateTime = Yii::$app->request->post('updateTime',time());
        $question = Question::find()->asArray()->where("updateTime > $updateTime")->all();
        $library = QuestionLibrary::find()->asArray()->where("createTime > $updateTime")->all();
        $userAnalysis = UserAnalysis::find()->asArray()->where("createTime > $updateTime")->all();
        $queArr = array();
        foreach($library as $v){
            $sign = LibraryQuestion::find()->asArray()->where("libId={$v['id']}")->all();
            foreach($sign as $va){
                $queArr[] = $va;
            }
        }
        $data=[
            'question' => $question,
            'library' => $library,
            'libraryQuestion' => $queArr,
            'userAnalysis' => $userAnalysis,
        ];
        if(empty($question) && empty($library) && empty($queArr)){
            die(json_encode(['code'=>0,'data'=>'']));
        } else{
            $data = json_encode($data);
            $time = time();
            $filePath = "files/upload/record/q-".$time.".txt";
            $myFile = fopen ($filePath,"w") or die("Unable to open file!");
            fwrite($myFile, $data);
            fclose($myFile);
            die(json_encode(['code'=>1,'data'=>$filePath]));
        }
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
    /**
     * 隐藏接口判断
     * cy
     */
    public  function actionHidden(){
        $type = 1;//1-隐藏 0-显示
        $button = 1;// 1-隐藏 0-显示
        $data = ['code'=>1,'message'=>'hidden','data'=>['type'=>$type,'button'=>$button]];
        die(json_encode($data));
    }
    /**
     * 数据调整
     * 模考
     * cy
     *
     */
    public function actionUpdateMock(){
        $data = MockResult::find()->where("score != (verbalScore + quantScore) and type =3")->asArray()->all();
        foreach($data as $k => $v){
            $score = $v['verbalScore'] + $v['quantScore'];
            MockResult::updateAll(['score'=>$score],"id={$v['id']}");
        }
        die(json_encode('success'));
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

    /**
    *GRE  会员vip积分和称号  新增3
    * by  sjeam
    * post接口： /app/app-apinew/my-behavior
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


        var_dump($data);die;
        die(Method::jsonGenerate(1,['data'=>$data],'succes'));
    }



    /**
    *GRE  我的雷豆  新增4
    * by  sjeam
    * post接口： /app/app-apinew /my-integral
    * 参    数：
    */
    public function actionMyIntegral(){
        $page = Yii::$app->request->post('page',1);
        $pageSize = Yii::$app->request->post('pageSize',10);
        $type = Yii::$app->request->post('type'); //1增加 2减少  //所有为空
        // $type =2;
        $uid = Yii::$app->session->get('uid');
        // 积分分页
        $limit ='limit '.(($page-1)*$pageSize).",$pageSize";
        // 条件筛选条件
        !empty($type) ? $where = " and type =$type" : $where = "";
        $integral = uc_user_integral1($uid,$limit,$where);
        $integral['total']= ceil($integral['count']/$pageSize);
        $integral['page'] = $page;
        is_array($integral['details']) ? $integral['details'] : $integral['details']=null;
        // var_dump($integral);die;
        die(Method::jsonGenerate(1,['data'=>$integral],'succes'));

    }







    /**
    * GRE刷题活动首页  新增6 
    * by  sjeam
    * post接口：/app/app-apinew/brush   
    * 参    数：
    */
    public function actionBrush(){
        // 公开课查询
        // $order =" ORDER BY startTime desc";
        $page = Yii::$app->request->post('page',1);
        $pageSize = Yii::$app->request->post('pageSize',20);
        // $banner = Content::getbanner(105);
        $banner = Jump :: getCourseJump(3);
        $action=  Content::getTopicactionList($page,$pageSize,0)['data'];
        // 根据时间重新排序
        // $last_names = array_column($action,'enorllStartTime');
        // array_multisort($last_names,SORT_DESC,$action);
        // var_dump($action);die;
        die(Method::jsonGenerate(1,['banner'=>$banner,'action'=>$action],'success'));
        
    }
    
    
    /** 
    *GRE 刷题活动详情  新增7 
    * by  sjeam
    * post接口： /app/app-apinew/brush-details   
    * 参    数： contentid 
    */
    public function actionBrushDetails(){ 
        $contentid = Yii::$app->request->post('contentid');
        // $contentid =8503;
        // $res[0] = Content::find()->select()->where(" id = $contentid ")->asarray()->One();
        // 指定刷题活动查询
        $res= Content::getClass(['fields' => 'answer,cnName,duration,A,price,orderNum,article','where' =>"c.id =$contentid",'order'=>'updateTime desc','page'=>$page,'pageSize'=>$pageSize,'all'=>$all]);   // 查找课程全部子内容
        $res = Content::getBrushactiveExtend($res);//循环数组
        // 订单数 ---是否报名和报名数
        $active =  Content:: getOpenOrderNum($res)[0];
        // var_dump($active);die;
        // $active['teacher']='regina';
        $teacherlist = Teachers::getTeachers($active['teacher']);
        isset($teacherlist[0]) ?$teacher =$teacherlist[0]:$teacher=null;
        // var_dump($teacher);die;
        die(Method::jsonGenerate(1,['teacher'=>$teacher,'active'=>$active],'success'));
    }


    /**
     * 专家讲师列表    新增8 
     * by sjeam （修改）
     * post接口： /app/app-apinew/teacher-list   
     */
     public function actionTeacherList(){
        $banner = Jump :: getCourseJump(3);
        $teacher = Teacher::find()->asArray()->orderBy("sort desc")->all();
        // 商桥地址
        // http://p.qiao.baidu.com/im/index?siteid=12373947&ucid=18329536&cp=&cr=&cw=  
        die(Method::jsonGenerate(1,['banner'=>$banner,'teacher'=>$teacher],'success'));
    }

    /** 
    *GRE  热门词汇
    * by  sjeam
    * post接口： /app/app-apinew/search-hots      
    * 参    数： 
    */
    public function actionSearchHots(){
        $array = array(
            'CR备考',
            '经典课程',
            'Kevin'
        );
        die(Method::jsonGenerate(1,['data'=>$array],'返回数据成功'));
    }

    /** 
    *GRE  课程活动搜索
    * by  sjeam
    * post接口： /app/app-apinew/search-course        
    * 参    数： page  pagesize   search  1查询 所有，没做分页
    */
    public function actionSearchCourse(){
        $page = Yii::$app->request->post('page',1);
        $pagesize = Yii::$app->request->post('pagesize',100);
        $search = Yii::$app->request->post('search','');
        // $search ='b';
        // 六大课程
        //  $sixCourse = Content::getSixCoursesall($search);
         $sixCourse = Course::getCourse($page,$pageSize,1,$search);   //提分课所有课程  0 分页  1  全部
        // var_dump($sixCourse);die;
        // 公开课
        // $courseOrder =" and c.contenttitle like '%{$search}%'  ORDER BY c.contentid desc";
        // $openCourses =  Content::opencouserList(208,9,null,$page,$pagesize,$courseOrder)['data'];
        // var_dump($openCourses);die;
        // 刷题活动
        // $actionOrder =" and c.name like '%{$search}%'  ORDER BY contentid desc";
        $action=  Content::getTopicactionList($page,$pagesize,1,$search)['data'];// 0 分页  1  全部
        // var_dump($action);die;
        // 专家讲师
        $where ="where name like'%{$search}%'";
        $teacher = Content::teacherList($where);
        // var_dump($teacher);die;
        // 统计所有
         $count = array(count($sixCourse),count($action),count($teacher));
        // var_dump($count);die;
        die(Method::jsonGenerate(1,['sixCourse'=>$sixCourse,'action'=>$action,'teacher'=>$teacher,'count'=>$count],'返回数据成功'));
    
    }


    /** 
    *GRE  消息中心 首页
    * by  sjeam
    * post接口： /app/app-apinew/search-course        
    * 参    数： page  pagesize   search  1查询 所有，没做分页
    */
    public function actionNoticeCenter()
    {
        $userId      = Yii::$app->session->get('userid');
        $uid         = Yii::$app->session->get('uid');
    //     $userId =40888;
    //    $uid = 30186;
    //--所有消息
        //系统通知
        $sys         = PushMessage::find()->asArray()->where("uid =$uid and states= 1" )->orderBy('id desc')->count();
        //精选活动
        $culling     = count(Yii::$app->db->createCommand("select id from {{%culling}} where uid=$uid and isLook=1 ")->queryAll());
        //评论


        $gossip      = count(Yii::$app->db->createCommand("select id from gossip.{{%reply}} where type=2 and  replyUser=$uid and isLook= 1 ")->queryAll());//吐槽八卦gossip
        $goss_post   = count(Yii::$app->db->createCommand("select r.id from gossip.{{%post_reply}} r left join gossip.{{%post}} p on r.postid=p.id where r.replyUid=$uid and (p.catId=42 or p.catId=43) and r.see=1 ")->queryAll());//资料、鸡精
        $question    = count(Yii::$app->db->createCommand("select commentid from {{%user_comment}} where replyUid=$uid and questionId not null and isLook =1 ")->queryAll());    //做题评论    
        $information = count(Yii::$app->db->createCommand("select q.commentid from {{%user_comment}} q left join {{%content}} c on c.id=q.contentId where q.replyUid=$uid AND c.catId in (531,543,42,43) and q.contentid is not null and q.isLook =1")->queryAll()); //资讯评论
        $comment     = $gossip + $goss_post + $question + $information;
        // 总共消息条数
        $total = $sys+$comment+$culling;
        $count = ['system' => $sys, 'comment' => $comment, 'culling' => $culling];

    //--最新消息
        // 最新一条消息 by sjeam
       $sysMessage = PushMessage::find()->asArray()->where("uid =$uid and states= 0 " )->orderBy('id desc')->one();  //系统
       $activeMessage  = Yii::$app->db->createCommand("select c.*,co.contenttitle from {{%culling}} c left join {{%content}} co on c.noticeId=co.contentid where c.uid=$uid and c.isLook= 1 order by id desc")->queryOne(); // 活动   
       //最新评论
       $question    = count(Yii::$app->db->createCommand("select commentid from {{%user_comment}} where replyUid=$uid and questionId not null and isLook =1 ")->queryAll());    //做题评论    
       $information = count(Yii::$app->db->createCommand("select q.commentid from {{%user_comment}} q left join {{%content}} c on c.id=q.contentId where q.replyUid=$uid AND c.catId in (531,543,42,43) and q.contentid is not null and q.isLook =1")->queryAll()); //案例、资讯、下载、机经评论
            $commentMessage [3]   = Yii::$app->db->createCommand("select  c.commentid as id,c.isLook,UNIX_TIMESTAMP(c.c_time) as createTime,c.content,c.questionid as inforid,q.questiontitle as title,s.section,c.replyUser as replyName from {{%q_comment}} c left join {{%questions}} q on c.questionid=q.questionid left join {{%sections}} s on q.sectiontype=s.sectionid where c.replyUid=$userId and c.questionid<>0 order by createTime desc")->queryOne();    //做题评论
       $commentMessage [4]   = Yii::$app->db->createCommand("select  c.commentid as id,c.isLook,UNIX_TIMESTAMP(c.c_time) as createTime,c.content,c.contentid as inforid,q.contenttitle as title,c.replyUser as replyName from {{%q_comment}} c left join {{%content}} q on c.contentid=q.contentid where c.replyUid=$userId and c.contentid is not null and q.contentcatid in (9,7,8,55,56) order by createTime desc")->queryOne(); //资讯评论-考试指南、资讯内容
       //    $commentMessage [1]   = Yii::$app->db->createCommand("select  r.id,r.isLook,r.createTime,r.content,g.title,g.id as inforid,r.uName as replyName from gossip.{{%reply}} r left join gossip.{{%gossip}} g on r.gossipid=g.id where r.replyUser=$uid  order by r.createTime desc")->queryOne();//吐槽八卦gossip
    //    $commentMessage [2]   = Yii::$app->db->createCommand("select  r.id,r.see as isLook,r.createTime,r.content,p.title,p.id as inforid,r.replyName from gossip.{{%post_reply}} r left join gossip.{{%post}} p on r.postid=p.id where r.replyUid=$uid  and (p.catId=3 or p.catId=8) order by r.createTime desc")->queryOne();//资料、鸡精
    //    $commentMessage [3]   = Yii::$app->db->createCommand("select  c.commentid as id,c.isLook,UNIX_TIMESTAMP(c.c_time) as createTime,c.content,c.questionid as inforid,q.questiontitle as title,s.section,c.replyUser as replyName from {{%q_comment}} c left join {{%questions}} q on c.questionid=q.questionid left join {{%sections}} s on q.sectiontype=s.sectionid where c.replyUid=$userId and c.questionid<>0 order by createTime desc")->queryOne();    //做题评论
    //    $commentMessage [4]   = Yii::$app->db->createCommand("select  c.commentid as id,c.isLook,UNIX_TIMESTAMP(c.c_time) as createTime,c.content,c.contentid as inforid,q.contenttitle as title,c.replyUser as replyName from {{%q_comment}} c left join {{%content}} q on c.contentid=q.contentid where c.replyUid=$userId and c.contentid is not null and q.contentcatid in (9,7,8,55,56) order by createTime desc")->queryOne(); //资讯评论-考试指南、资讯内容
    //    $commentMessage [5]   = Yii::$app->db->createCommand("select  c.commentid as id,c.isLook,UNIX_TIMESTAMP(c.c_time) as createTime,c.content,c.contentid as inforid,q.contenttitle as title,c.replyUser as replyName from {{%q_comment}} c left join {{%content}} q on c.contentid=q.contentid where c.replyUid=$userId and c.contentid is not null and q.contentcatid=108 order by createTime desc")->queryOne(); //资讯评论-高分案例
    //  var_dump( $commentMessage);
    // 根据 数组  中的时间 重新排序
        array_multisort($commentMessage,SORT_DESC,$commentMessage);
        $commentMessage=$commentMessage[0];
        // var_dump($commentMessage);die;
        // var_dump($count);die;
        !empty($sysMessage) ?$sysMessage:$sysMessage=null;
        !empty($activeMessage) ?$activeMessage:$activeMessage=null;
        !empty($commentMessage) ?$commentMessage:$commentMessage=null;
        $message =array('sysMessage'=>$sysMessage,'activeMessage'=>$activeMessage,'commentMessage'=>$commentMessage);
        die(Method::jsonGenerate(1, ['count' => $count,'total'=>$total,'message'=>$message],'succes'));
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

}