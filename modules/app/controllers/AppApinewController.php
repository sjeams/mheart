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
     * ?????????
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
     * ????????????
     * @Obelisk
     */
    public function actionTouristLogin(){
        $session = Yii::$app->session;
        $code = Yii::$app->request->post('code');//???????????????
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
            $login->nickname = '??????';
            $login->uid = time();
            $login->code = $code;
            $login->role = 2;
            $login->save();
            $loginsdata = Login::find()->where("code='$code'")->one();
        }
        $session->set('userId', $loginsdata['id']);
        $session->set('userData', $loginsdata);
        $session->set('uid', $loginsdata['uid']);
        die(json_encode(['code' => 1,'data'=>['code' => $code,'uid' => $loginsdata['uid']],'message' => '????????????']));
    }

    /**
     * gre ??????
     * @param $sectionId
     * @param $mockExamId
     * @param null $minute
     * @return bool
     */
    //?????????????????????
    public function judge($sectionId,$mockExamId,$minute = null){
        $uid = \Yii::$app->session->get("uid");
        $data = MockResult::find()->where("uid = $uid and mockExamId = $mockExamId and sectionId = $sectionId")->one();
        if(!$data){
            $result = MockResult::find()->where("uid = $uid and mockExamId = $mockExamId and status = 1")->one();
            if($result){
                $data = ['code'=>0,'message'=>'?????????????????????'];
            }else{
                if(is_null($minute)){
                    $data = ['code'=>0,'message'=>'??????????????????section??????'];
                }else{
                    $data = ['code'=>0,'message'=>'??????????????????section??????'];
                }
            }
        }else{
            $data = ['code'=>1,'message'=>''];
        }
        return $data;
    }
    /**gre??????
     * hastime??????
     * ??????????????????
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
            die(json_encode(['code'=>99,'message'=>'?????????']));
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
        die(json_encode(['code'=>1,'message'=>'????????????']));
    }
    /**
     * gre??????
     * ?????????????????????????????????
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
        //1-????????? 2-????????? 3-????????? 4-6???2 5-5???1?????? 6-??????????????? 7-?????????????????? 8-????????? 9-???????????? 10-?????????
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
     * ???????????????
     * cy
     */
    public function addHost($data){
        $data = str_replace('src="/','src="https://gre.viplgw.cn/',$data);
        return $data;
    }

    /**
     * ????????????????????????
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
     * ????????????
     * ??????????????????
     * cy
     * type 1-?????? 2-?????? 3-??????
     * sourceId 1-Magoosh 2-??????
     */
    public function actionMockExam(){
        $uid = Yii::$app->session->get('uid');
        $type = Yii::$app->request->get("type",1);
        $sourceId = Yii::$app->request->get("sourceId",2);
        $mock = new MockExam();
        $mocks = $mock::find()->where("type = $type and sourceId = $sourceId")->asArray()->all();

        //???????????????????????????
        foreach($mocks as $k => $v){
            $mockExamId = $v['id'];
            if($uid){
                $result = $mock->getDoResult($uid,$mockExamId);
                $mocks[$k]['isDo'] = $result;//2-?????? 1-????????? 0 ?????????
                //????????????
                $mocks[$k]['doNum'] = MockRecord::find()->select("id")->where("uid = $uid and mockExamId = $mockExamId")->count();
            }else{
                $mocks[$k]['isDo'] = 0;
                $mocks[$k]['doNum'] = 0;
            }
            //????????????
            $aversge = $mock->getAverage($mockExamId);
            $mocks[$k]['average'] = $aversge;
            //???????????????
            $mocks[$k]['totalNum'] = $type == 3?100:40;
        }
        $data = ['code'=>1,'message'=>'success','data'=>['type'=>$type,'sourceId'=>$sourceId,'mocks'=>$mocks]];
        die(json_encode($data));
    }
    /**
     * gre??????
     * ???????????? ??????section
     * cy
     */
    public function actionMakeTopic(){
        $uid = Yii::$app->session->get("uid");
        if(!$uid){
            $data = ['code'=>99,'message'=>'?????????'];
            die(json_encode($data));
        }
        $mockExamId = Yii::$app->request->get("mockExamId");
        $mockRecord = new MockRecord();
        $mockExam = new MockExam();
        //????????????????????????????????????
        $result = MockResult::find()->where("uid = $uid and mockExamId = $mockExamId")->one();
        if($result){
            $hastime = $result['hasTime'];//????????????
            $sectionId = $result['sectionId'];
            $questionId = $mockRecord::find()->where("uid = $uid and sectionId = $sectionId and mockExamId = $mockExamId and do = 0 ")->orderBy("id desc")->asArray()->one()['questionId'];//????????????????????????
            if(!$questionId){
                $questionId = $mockRecord::find()->where("uid = $uid and sectionId = $sectionId and mockExamId = $mockExamId and do = 1 ")->orderBy("id desc")->asArray()->one()['questionId'];//????????????????????????
                if(!$questionId){
                    $questionId = $mockExam->getFirstTest($mockExamId,$sectionId)[1];//????????????section???????????????
                }else{
                    //???????????????id
                    $questionId = intval($mockRecord->getSite($questionId,$sectionId,'Done')[1]);
                }
            }
            //?????????????????? ????????????????????????????????????
            $timu = $mockRecord->getSite($questionId,$sectionId,'Done');
            $type = $mockExam->getType($mockExamId,$sectionId);
        }else{
            $questionMsg = $mockExam->getFirstTest($mockExamId);
            $questionId = $questionMsg[1];
            $sectionId = $questionMsg[0];
            $timu = $mockRecord->getSite($questionId,$sectionId,'first');
            $type = $mockExam->getType($mockExamId,$sectionId);//???????????? 1-?????? 2-??????
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
        //????????????section????????????
        $res = $this->judge($sectionId,$mockExamId);
        if($res['code'] == 0){die(json_encode($res));}
        //??????????????????
        $ismark = $mockRecord->isMark($uid,$sectionId,$mockExamId,$questionId);
        //??????section?????????section??????
        $sectionMsg = $mockRecord->getSectionSite($sectionId,$mockExamId);
        $question = Questions::find()->where("id = $questionId")->asArray()->one();
        $question['id'] = intval($question['id']);
        $mockName = $mockExam->getName($mockExamId);
        $data = $this->topicInit($question);
        $typeId = $data['type'];
        $question = $data['question'];
        $times = $this->getMinute($hastime);
        //????????????
        $collect = UserCollection::find()->where("uid = $uid and questionId = $questionId")->one();
        if($collect){
            $collection = 1;//1-????????? 0-?????????
        }else{
            $collection = 0;
        }
        //????????????
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
     * gre??????
     * ???????????????
     * cy
     */
    public function actionDesignation(){
        $questionId = Yii::$app->request->get("questionId");
        $mockExamId = Yii::$app->request->get("mockExamId");
        $sectionId = Yii::$app->request->get("sectionId");
        $uid = Yii::$app->session->get("uid");
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'?????????']));
        }
        //????????????section????????????
        $res = $this->judge($sectionId,$mockExamId);
        if($res['code'] == 0){die(json_encode($res));}
        $mockRecord = new MockRecord();
        $mockExam = new MockExam();
        $type = $mockExam->getType($mockExamId,$sectionId);
        $hastime = MockResult::find()->where("mockExamId = $mockExamId and sectionId = $sectionId and uid = $uid")->asArray()->one()['hasTime'];
        $times = $this->getMinute($hastime);
        $question = Questions::find()->where("id = $questionId")->asArray()->one();

        //?????????????????? ????????????????????????????????????
        $timu = $mockRecord->getSite($questionId,$sectionId,'Done');
        //??????section?????????section??????
        $sectionMsg = $mockRecord->getSectionSite($sectionId,$mockExamId);
        //??????????????????
        $ismark = $mockRecord->isMark($uid,$sectionId,$mockExamId,$questionId);
        $mockName = $mockExam->getName($mockExamId);
        $data = $this->topicInit($question);
        $question = $data['question'];
        $typeId = $data ['type'];//?????????????????????????????????????????????
        $record = MockRecord::find()->where("uid = $uid and sectionId = $sectionId  and questionId = $questionId")->asArray()->one();
        if($record){
            //1-????????? 2-????????? 3-????????? 4-6???2 5-5???1?????? 6-??????????????? 7-?????????????????? 8-????????? 9-???????????? 10-?????????
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
        //????????????
        $collect = UserCollection::find()->where("uid = $uid and questionId = $questionId")->one();
        if($collect){
            $collection = 1;//1-????????? 0-?????????
        }else{
            $collection = 0;
        }
        $data =['code'=>1,'message'=>'success','data'=>['mark'=>$ismark,'mockName'=>$mockName,'sectionMsg'=>$sectionMsg,'timu'=>$timu[0],'hastime'=>$hastime,'nextId'=>intval($timu[1]),'sectionId'=>intval($sectionId),'mockExamId'=>intval($mockExamId),'times'=>$times,'type'=>$typeId,'mockType'=>$type,'collection'=>$collection,'question'=>$question]];
        die(json_encode($data));
    }
    /**
     * gre??????
     * section review
     * cy
     */
    public function actionReview(){
        $uid = Yii::$app->session->get("uid");
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'?????????']));
        }
        $sectionId = Yii::$app->request->get("sectionId");
        $mock = new MockExam();
        $mockExamId = $mock->getMockExamId($sectionId);
        //????????????section????????????
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
     * gre??????
     * section??????
     * ????????????section ?????????????????????section
     * cy
     */
    public function actionNextSection(){
        $uid = Yii::$app->session->get("uid");
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'?????????']));
        }
        $sectionId = Yii::$app->request->get("sectionId");//??????sectionId
        $mockExam = new MockExam();
        $mockExamId = $mockExam->getMockExamId($sectionId);
        //???????????????section????????????????????????
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
     * gre??????
     * ?????????????????????
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
     * gre??????
    * ????????????mock????????????
    * cy
     * ?????????????????????????????????????????????
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
     * gre??????
     *???????????????
     *cy
     * direction result-????????????  help-??????????????????
     */
    public function actionMockResult(){
        $mockExamId = Yii::$app->request->get("mockExamId");
        $direction = Yii::$app->request->get("direction",'result');
        $uid = Yii::$app->session->get('uid');
        if($direction == 'help'){//??????????????????????????????
            $this->getMockExamMsg($uid,$mockExamId);
        }
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'?????????']));
        }
        $data = MockResult::find()->where("uid = $uid and mockExamId = $mockExamId")->asArray()->one();
        if(!$data){
            $data = ['code'=>0,'message'=>'??????????????????'];
            die(json_decode($data));
        }else{
            $type = MockExam::find()->where("id= $mockExamId")->asArray()->one()['type'];
            $correctMsg = unserialize($data['correctMsg']);
            $mockExam = new MockExam();
            $mockName = $mockExam->getName($mockExamId);
            //?????????
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
        //????????????
        if($type == 3){
            $data['averTime'] = $this->changeSecond(ceil(100*($data['useTime']/80))/100);
        }else{
            $data['averTime'] = $this->changeSecond(ceil(100*($data['useTime']/40))/100);
        }
        //pace ??????
        if ($data['averTime'] < 40) {
            $Pace = 'D';
            $Pace_msg = '???????????????????????????????????????????????????????????????????????????~';
            $Pace_s = 65;
        } elseif ($data['averTime'] < 90) {
            $Pace = 'A';
            $Pace_msg = '????????????????????????????????????780????????????~';
            $Pace_s = 95;
        } elseif ($data['averTime'] < 120) {
            $Pace = 'B';
            $Pace_msg = '??????????????????????????????????????????????????????700~';
            $Pace_s = 85;
        } elseif ($data['averTime'] < 150) {
            $Pace = 'C';
            $Pace_msg = '????????????????????????????????????????????????????????????~';
            $Pace_s = 75;
        } elseif ($data['averTime'] < 180) {
            $Pace = 'E';
            $Pace_msg = '?????????????????????????????????????????????????????????????????????????????????~';
            $Pace_s = 65;
        } elseif ($data['averTime'] < 210) {
            $Pace = 'F';
            $Pace_msg = '???????????????????????????700??????????????????????????????????????????~';
            $Pace_s = 55;
        } else {
            $Pace = 'G';
            $Pace_msg = '?????????????????????????????????????????????????????????~';
            $Pace_s = 25;
        }
        $check = ['level'=>$Pace,'paceRate'=>$Pace_s,'content'=>$Pace_msg];
        $data['useTime'] = $this->changeSecond($data['useTime']);
        //??????section?????????????????????
        $sections = $mockExam->getSections($mockExamId);
        if($type !=3){
            foreach($sections as $k => $t){
                $sections[$k]['type'] = $type;
            }
            //????????????
            if($type ==1){//??????
                $data['verbalScore'] = $data['score'];
            }else{//??????
                $data['quantScore'] = $data['score'];
            }
        }

        $data = ['code'=>1,'message'=>'success','data'=>['type'=>$type,'mockName'=>$mockName,'beatRate'=>$beatRate,'totalCount'=>$totalCount,'mockExamId'=>$mockExamId,'mock'=>$data,'correctMsg'=>$correctMsg,'paces'=>$check,'sections'=>$sections]];
        die(json_encode($data));
    }
    /**
     * gre??????
     * ?????????????????????
     * ????????????
     * cy
     */
    public function actionMockDetail(){
        $uid = Yii::$app->session->get("uid");
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'?????????']));
        }
        $mockExamId = Yii::$app->request->get("mockExamId",0);
        $sectionId = Yii::$app->request->get("sectionId",0);
        $access = Yii::$app->request->get("access",0);
        $questionId = Yii::$app->request->get("questionId",0);
        $mockExam = new MockExam();
        $type = MockExam::find()->where("id= $mockExamId")->asArray()->one()['type'];
        $data = MockResult::find()->where("uid = $uid and mockExamId = $mockExamId")->asArray()->one();
        //??????section?????????????????????
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
        //secction ??????????????????
        if($access == 0){//acc  11-??????section????????????  1-??????????????? 0||null ????????? ????????????????????????
            $acc = 11;
        }else{
            $acc = $access;
        }
        if($sectionId > $data['sectionId'] && $data['status'] != 1){
            $data = ['code'=>0,'message'=>'?????????????????????section?????????'];
            die(json_encode($data));
        }
        $question_data = $mockExam->getSectionTimu($sectionId,$acc);
        foreach($question_data as $k => $v){
            $qid = $v['questionId'];
            $sid = $v['sectionId'];
            $record = MockRecord::find()->where("uid = $uid and sectionId = $sid  and questionId = $qid")->asArray()->one();
            $correct = $record['correct'];
            if($correct == 1){
                $question_data[$k]['correct'] = 1;//1-?????? 0 -?????? -1 -??????
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
                    $data = ['code'=>0,'message'=>'??????????????????'];
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
        //??????
        $comment = new UserComment();
        $comment = $comment->getQuestionComment($questionId,1,5);
        foreach($comment['data'] as $k=>$v){
            $comment['data'][$k]['reply'] = Yii::$app->db->createCommand("select uc.*,u.userName,u.nickname,u.image from x2_user_comment uc LEFT JOIN x2_user u on uc.uid=u.uid where uc.pid={$v['id']}")->queryAll();
        }
        //??????
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
    /**gre??????
     * ???????????????
     * ????????????
     * cy
     */
    public function actionDoAgain(){
        $uid = Yii::$app->session->get("uid");
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'?????????']));
        }
        $mockExamId = Yii::$app->request->get("mockExamId");
        $res = MockResult::deleteAll("uid = $uid and mockExamId = $mockExamId");
        if($res){
            $re = MockRecord::deleteAll("uid = $uid and mockExamId = $mockExamId");
            if($re ){
                Yii::$app->db->createCommand("delete from x2_user_mock_mark where uid = $uid and mockExamId = $mockExamId")->execute();
                $data = ['code'=>1,'message'=>'success','data'=>['mockExamId'=>$mockExamId]];
            }else{
                $data = ['code'=>0,'message'=>'????????????'];
            }
        }else{
            $data = ['code'=>0,'message'=>'????????????'];
        }
        die(json_encode($data));
    }
    /**
     * gre ??????
     * ????????????
     * cy quit save
     */
    public function actionMockQuit(){
        $questionId = Yii::$app->request->post("questionId");
        $sectionId = Yii::$app->request->post("sectionId");
        $mockExamId = Yii::$app->request->post("mockExamId");
        $uid = Yii::$app->session->get("uid");
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'?????????']));
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
            $msg = ['code'=>0,'message'=>'??????????????????'];
        }
        die(json_encode($msg));
    }
    /**
     * GRE??????
     * mark
     * cy
     */
    public function actionMockMark(){
        $uid = Yii::$app->session->get("uid");
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'?????????']));
        }
        $sectionId = Yii::$app->request->post("sectionId");
        $mockExamId = Yii::$app->request->post("mockExamId");
        $questionId = Yii::$app->request->post("questionId");
        $mark = Yii::$app->request->post("mark");//0-???????????? 1-??????
        if($mark == 1){
            $date = time();
            $sql = "insert into x2_user_mock_mark(`uid`,`sectionId`,`mockExamId`,`createTime`,`questionId`) value($uid,$sectionId,$mockExamId,$date,$questionId)";
            $result = Yii::$app->db->createCommand($sql)->execute();
        }else{
            $result = Yii::$app->db->createCommand("delete from x2_user_mock_mark where uid = $uid and sectionId = $sectionId and mockExamId = $mockExamId and questionId = $questionId")->execute();
        }
        if($result){
            $data = ['code'=>1,'message'=>$mark==1?'????????????':'??????????????????'];
        }else{
            $data = ['code'=>0,'message'=>$mark==1?'????????????':'??????????????????'];
        }
        die(json_encode($data));
    }
    /**
     * gre ??????
     * ????????? ??????
     * cy
     */
    public function actionNextMock(){
        $request = Yii::$app->request;
        $mockExam = new MockExam();
        $uid = Yii::$app->session->get("uid");
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'?????????']));
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
        //1-????????? 2-????????? 3-????????? 4-6???2 5-5???1?????? 6-??????????????? 7-?????????????????? 8-????????? 9-???????????? 10-?????????
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
        $do = 1;//1-??????  -1 ????????????????????????
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
        }elseif($quesType == 10){//????????? ??????????????????
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
        }else{//????????????????????????  ???????????????
            $correctAnswer = Questions::find()->where("id = $questionId")->asArray()->one()['answer'];
            $correctAnswer = strip_tags($correctAnswer);
            $answer1 = preg_replace('/(^\s*)|(\s*$)|[\ +\r\n]|[\.\,\???\???]/','',$correctAnswer);
            $answer2 = preg_replace('/(^\s*)|(\s*$)|[\ +\r\n]|[\.\,\???\???]/','',$answer);
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
            if($nextId == 0){//??????section????????????
                $isEnd = $mockExam->isEnd($sectionId,$mockExamId);
                if($isEnd){//????????????section ????????????????????????????????????
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
                    if($result){//over -1 ????????????section??? 0-??????section????????? ????????????????????????section??????????????? 1-??????????????????????????????????????????
                        $msg = ['code'=>1,'message'=>'success','data'=>['over'=>1,'mockExamId'=>intval($mockExamId)]];
                    }else{
                        $msg = ['code'=>0,'message'=>'??????????????????'];
                    }
                    die(json_encode($msg));
                }else{//??????section??????????????????
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
                //????????????section??? ?????????????????????
                $qid = $nextId;
                $seId = $sectionId;
                MockResult::updateAll(['hasTime'=>$hastime],"uid = $uid and mockExamId = $mockExamId and status = 0");
                $msg = ['code'=>1,'message'=>'success','data'=>['over'=>-1,'mockExamId'=>intval($mockExamId),'sectionId'=>intval($seId),'next_questionId'=>intval($qid)]];
            }

        }else{
            $msg = ['code'=>0,'message'=>"????????????"];
        }
        die(json_encode($msg));
    }
    /**
     * gre??????
     * ???????????????0????????????
     * section exit ??????  ?????????section??????
     * cy
     */
    public function actionMockTimeOut(){
        $uid = Yii::$app->session->get("uid");
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'?????????']));
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
            if($isEnd){//????????????section ????????????????????????????????????
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
                    $msg = ['code'=>0,'message'=>'??????????????????'];
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
            $msg = ['code'=>0,'message'=>'????????????????????????'];
        }
        die(json_encode($msg));
    }
    /**
     * gre ??????
     * ?????????????????????????????????
     * cy
     */
    public function actionSelectTopic(){
        $uid = Yii::$app->session->get("uid");
        $sectionId = Yii::$app->request->post("sectionId");
        $access = Yii::$app->request->post("access");//0-?????? 1-?????? 2-????????????
        $questionId = Yii::$app->request->post("questionId");
        $mockRecord = new MockRecord();
        $quesiton = $mockRecord->getTopic($uid,$sectionId,$access,$questionId);
        //??????
        $comment = new UserComment();
        $comment = $comment->getQuestionComment($questionId,1,5);
        foreach($comment['data'] as $k=>$v) {
            $comment['data'][$k]['reply'] = Yii::$app->db->createCommand("select uc.*,u.userName,u.nickname,u.image from x2_user_comment uc LEFT JOIN x2_user u on uc.uid=u.uid where uc.pid={$v['id']}")->queryAll();
        }
        $data = ['question'=>$quesiton,'comment'=>$comment];
        die(json_encode($data));
    }
    /**
     * gre ????????????
     * ????????????
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
            //????????????
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
     * gre ????????????  ??????  ?????? 9 
     * ????????????
     *  by sjeam 
     */
    public function actionKnowCategory(){
        $categoryId = Yii::$app->request->get("categoryId");
        $categoryId = 569;
        // ????????????
        $catName = Category::find()->where("id = $categoryId")->one()['name'];
        //????????????
        $category = Category::find()->select("id,pid,name")->asArray()->where("pid =$categoryId")->all();
        $uid = Yii::$app->session->get("uid");
        $type = Yii::$app->request->get('type',1);//1-?????? 2-?????? 3-??????  (2.3????????????)
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
                        $con['isLearn'] = 0;//0-?????? 1-?????? 2-??????
                    }
                    if($type ==1){//??????
                        $cons[] = $con;
                    }elseif($type ==2){//???????????? ??????
                        if($con['isLearn'] == 1)$cons[]=$con;
                    }elseif($type == 3){//??????
                        if($con['isLearn'] == 2)$cons[] =$con;
                    }
                }
                $category[$ky]['children']=$cons;
            }
            // var_dump($category);die;
            // $data = ['code'=>1,'message'=>'success','data'=>['catName'=>$catName,'contents'=>$category]];
            die(Method::jsonGenerate(1,['catName'=>$catName,'category'=>$category],'??????????????????'));
    }
    /**
     * gre ????????????
     * ????????????
     * cy
     */
    public function actionKnowDetail(){
        $contentId = Yii::$app->request->get("contentId");
        if($contentId){
            $model = new Content();
            //??????
            $data = $model->getClass(['where' => 'c.id='.$contentId,'fields' => 'description']);
            Content::updateAll(['viewCount' => $data[0]['viewCount']+1],"id={$contentId}");
            $content = $data[0];
            $content['description'] = $this->addHost($content['description']);
            //????????????
            $usercomment = new UserComment();
            $commentData = $usercomment->appUserComment($contentId,1,6);
            $uid = Yii::$app->session->get("uid");
            if($uid){
                //????????????
                $result = UserCollection::find()->where("contentId = $contentId and uid = $uid")->one();
                if($result){
                    $collect = 1;
                }else{
                    $collect = 0;
                }
                //????????????
                $res = Yii::$app->db->createCommand("select * from x2_user_content where uid = $uid and contentId = $contentId")->queryOne();
                if($res && $res['type'] == 2){
                    $isRead = 1;
                }else{
                    $time = time();
                    Yii::$app->db->createCommand("insert into x2_user_content(`uid`,`contentId`,`type`,`createTime`) value($uid,$contentId,1,$time)")->execute();
                    $isRead = 0;
                }
            }else{
                $collect = 0;//0-????????? 1-?????????
                $isRead = 0;//0-??????  1-??????
            }
            $data = ['code'=>1,'message'=>'success','data'=>['isRead'=>$isRead,'collect'=>$collect,'content'=>$content,'comment'=>['total'=>$commentData['count'],'comment'=>empty($commentData['data'])?null:$commentData['data']]]];
        }else{
            $data = ['code'=>0,'message'=>'????????????'];
        }
        die(json_encode($data));
    }
    /**
     * gre ????????????
     * ??????????????????
     * cy
     */
    public function actionKnowRead(){
        $contentId = Yii::$app->request->post("contentId");
        $uid = Yii::$app->session->get("uid");
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'?????????']));
        }
        if(!$contentId){
            die(json_encode(['code'=>0,'message'=>'????????????']));
        }
        $result = Yii::$app->db->createCommand("update x2_user_content set type = 2 where uid = $uid and contentId = $contentId")->execute();
        if($result){
            $data = ['code'=>1,'message'=>'????????????'];
        }else{
            $data = ['code'=>0,'message'=>'????????????'];
        }
        die(json_encode($data));
    }
    /**
     * gre????????????
     * ??????????????????
     * cy
     */
    public function actionKnowPage(){
        $page = Yii::$app->request->post("page",2);
        $contentId = Yii::$app->request->post("contentId");
        if(!$contentId){
            die(json_encode(['code'=>0,'message'=>'????????????']));
        }
        $usercomment = new UserComment();
        $commentData = $usercomment->appUserComment($contentId,$page,6);
        if(!$commentData){
            $data = ['code'=>0,'message'=>'??????????????????'];
        }else{
            $data = ['code'=>1,'message'=>'success','data'=>['total'=>$commentData['count'],'comment'=>empty($commentData['data'])?null:$commentData['data']]];
        }
        die(json_encode($data));
    }
    /**
     * gre ????????????
     * ??????????????????
     * cy
     */
    public function actionKnowAddFine(){
        $commentId = Yii::$app->request->post("commentId");
        if(!$commentId){
            die(json_encode(['code'=>0,'message'=>'????????????']));
        }
        $fine = UserComment::find()->where("id = $commentId")->asArray()->one()['fane'];
        if($fine){
            $fine += 1;
        }else{
            $fine = 1;
        }
        $res = UserComment::updateAll(['fane'=>$fine],"id=$commentId");
        if($res){
            $data = ['code'=>1,'message'=>'????????????','data'=>['fine'=>$fine]];
        }else{
            $data = ['code'=>0,'message'=>'????????????'];
        }
        die(json_encode($data));
    }
    /**
     * gre????????????
     * ????????????
     * cy
     */
    public function actionKnowCollect(){
        $uid = Yii::$app->session->get("uid");
        $contentId = Yii::$app->request->post("contentId");
        $collect = Yii::$app->request->post('collect');//1-???????????? 0-????????????
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'?????????']));
        }
        if(!$contentId ){
            die(json_encode(['code'=>0,'message'=>'????????????']));
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
            $data = ['code'=>0,'message'=>'????????????'];
        }
        die(json_encode($data));
    }
    /**
     * gre????????????
     * ????????????
     * cy
     */
    public function actionKnowComment(){
        $uid = Yii::$app->session->get("uid");
        if(empty($uid)){
            $uid = Yii::$app->request->post('uid'); //????????????app
        }
        $contentId = Yii::$app->request->post("contentId");
        $pid = Yii::$app->request->post("pid",0);
        $content = Yii::$app->request->post("content");
        $replyName = Yii::$app->request->post("replyName",'');
        $replyUid = Yii::$app->request->post("replyUid",'');
        $type = $pid == 0?1:2;//1-?????? 2-??????
        $fane = 0;
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'?????????']));
        }
        if(!$contentId || !$content){
            die(json_encode(['code'=>0,'message'=>'????????????']));
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
            $data = ['code'=>0,'message'=>'????????????'];
        }
        die(json_encode($data));
    }
    /**
     * gre????????????
     * ????????????
     * cy
     */
    public function actionKnowShare(){
        $contentId = Yii::$app->request->get("contentId");
        if(!$contentId){
            $data = ['code'=>0,'message'=>'????????????'];
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
     * gre ??????memcached??????
     * by yanni
     */
    public function actionClearCaching(){
        Yii::$app->cache->flush();
    }
    /**
     * gre ??????????????????
     * by yanni
     */
    public function actionUserDoData(){
        $uid = Yii::$app->session->get('uid');    //??????ID
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
                    $n = $model->getKnowledgeNum(['cid'=>$val['id'],'uid'=>$uid,'type'=>2]);  //???????????????????????????
                    $completeKnow +=$n;
                }
            }
        }
        $data['knowNum'] = $knowNum;
        $data['completeKnow'] = $completeKnow;
        if($uid){
            $day = date("Y-m-d");
            $UserSign = UserSign::find()->asArray()->where("uid=$uid and createDay='$day'")->one();  //??????????????????
            if(empty($UserSign)){
                $sign = 0;
            } else{
                $sign = 1;
            }
            $data['sign'] =$sign;
            $userData = Yii::$app->session->get('userData');
            $data['doTotal'] = UserAnswer::find()->asArray()->where("uid={$uid}")->count();   //????????????
            $correctNum = UserAnswer::find()->asArray()->where("uid={$uid} and correct=1")->count();  //????????????
            $data['correctRate'] = round($correctNum/$data['doTotal'] * 100)."%";   //?????????
            $data['numberDay'] = ceil((time() - $userData['createTime']) / 86400);
            $model = new Question();
            $data['todayQuestionNum'] = $model->getDayQuestion($uid);   //?????????????????????
        }
        $data['userNum'] = User::find()->asArray()->count();
        // by sjeam ??????1
        $data['means'] = Means::getMeans();//
        if(!empty($means)){
            $chat = Method::getSource(6); //????????????
            $means['chat'] = $chat;
        }
        $data['jump']  = Jump::find()->select('image,type,content')->asArray()->orderBy('sort desc,createTime desc')->where("belong=1")->one();//?????????
        $data = ['code'=>1,'message'=>'????????????','data'=>$data];
        die(json_encode($data));
    }
    /**
     * gre ??????
     * ????????????????????????
     * by yanni
     */
    public function actionSectionPractice(){
        $uid = Yii::$app->session->get('uid');    //??????ID
        $sectionId = Yii::$app->request->get('sectionId',1);    //??????ID
        $sourceModel = new SourceCat();
        $sources =  $sourceModel->getSource($sectionId);  //??????
        foreach($sources as $k=>$v){
            $totalQuestions = QuestionLibrary::find()->asArray()->select(['id'])->where("catId={$sectionId} and type=1 and sourceId={$v['id']}")->all();  //????????????
            $cache = Yii::$app->cache->get('questionSectionId'.$v['id']."_".$sectionId);   //????????????
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
                    $totalSubject = LibraryQuestion::find()->select("id")->asArray()->where("libId={$va['id']}")->count();   //????????????
                    $totalNum = $totalNum+$totalSubject;
                    $do_questions = QuestionsStatistics::find()->select("id")->asArray()->where("libraryId={$va['id']} and state=1")->groupBy("uid")->count();   //????????????
                    $totalDoNum = $totalDoNum + $do_questions;
                    $amodel = new UserAnswer();
                    $correct = $amodel->getLibraryCorrectRate($va['id']);   //???????????????
                    if(!empty($correct)){
                        $do_tiku = $do_tiku+1;
                        $correctRate = $correctRate+$correct;
                    }
                }
                if($totalNum==0){
//                    unset($sources[$k]);
                    continue;          // ??????????????????0????????????
                }
                $source['totalNum'] = $totalNum;   //???????????????
                $sources[$k]['totalNum'] = $totalNum;
                $source['totalDoNum'] = $totalDoNum;   //?????????????????????
                $sources[$k]['totalDoNum'] = $totalDoNum;
                if($do_tiku == 0){
                    $source['correctRate']  = 0;
                }else{
                    $source['correctRate'] = round($correctRate/$do_tiku);   //???????????????
                }
                $sources[$k]['correctRate'] = $source['correctRate'];
                Yii::$app->cache->set('questionSectionId'.$v['id'].'_'.$sectionId, $source, 3600*24);//????????????
            }
            if($uid){
                $libStr ='';
                foreach($totalQuestions as $key=>$val){
                    $libStr .=$val['id'].",";
                }
                $libStr = trim($libStr,",");
                $wheres = "ua.uid=$uid and ua.answerType=1 AND q.catId=$sectionId AND q.sourceId={$v['id']} and ua.libId in($libStr)";
                $answeModel = new UserAnswer();
                $sources[$k]['userAnswerNum'] = $answeModel->getUserAnswerCount($wheres);  //?????????????????????
            } else {
                $sources[$k]['userAnswerNum'] = 0;
            }
        }
        $data = ['code'=>1,'message'=>'????????????','data'=>$sources];
        die(json_encode($data));
    }
    /**
     * gre ??????
     * ???????????????????????????
     * by yanni
     */
    public function actionKnowPractice(){
        $uid = Yii::$app->session->get('uid');    //??????ID
        $sectionId = Yii::$app->request->get('sectionId',1);    //??????ID
        $knows = QuestionKnow::find()->asArray()->where("catId=$sectionId")->all();  //?????????
        foreach($knows as $k=>$v){
            $totalQuestions = QuestionLibrary::find()->asArray()->where("catId={$sectionId} and type=2 and knowId={$v['id']}")->all();  //????????????
            $cache = Yii::$app->cache->get('questionKnowId'.$v['id']);   //????????????
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
                    $totalSubject = LibraryQuestion::find()->select("id")->asArray()->where("libId={$va['id']}")->count();   //???????????????
                    $totalNum = $totalNum+$totalSubject;
                    $do_questions = QuestionsStatistics::find()->select("id")->asArray()->where("libraryId={$va['id']} and state=1")->groupBy("uid")->count();   //????????????
                    $totalDoNum = $totalDoNum + $do_questions;
                    $amodel = new UserAnswer();
                    $correct = $amodel->getLibraryCorrectRate($va['id']);   //???????????????
                    if(!empty($correct)){
                        $do_tiku = $do_tiku+1;
                        $correctRate = $correctRate+$correct;
                    }
                }
                $know['totalNum'] = $totalNum;   //???????????????
                $knows[$k]['totalNum'] = $totalNum;
                $know['totalDoNum'] = $totalDoNum;   //?????????????????????
                $knows[$k]['totalDoNum'] = $totalDoNum;
                if($do_tiku == 0){
                    $know['correctRate'] = 0;
                }else{
                    $know['correctRate'] = round($correctRate/$do_tiku);
                }
                $knows[$k]['correctRate'] =  $know['correctRate'];
                Yii::$app->cache->set('questionKnowId'.$v['id'], $know, 3600*24);//????????????
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
        $data = ['code'=>1,'message'=>'????????????','data'=>$knows];
        die(json_encode($data));
    }
    /**
     * gre ??????
     * ??????????????????
     * by yanni
     */
    public function actionPracticeBank(){
        $uid = Yii::$app->session->get('uid');
        $sectionId = Yii::$app->request->get('sectionId');
        $ptype = Yii::$app->request->get('ptype',1);  //???????????????????????????????????????    ptype=1???????????? ptype=2 ???????????????
        if($ptype==2){
            $knowId = Yii::$app->request->get('knowId');
            $totalTank = QuestionLibrary::find()->asArray()->where("catId={$sectionId} and type=2 and knowId={$knowId}")->all();  //???????????????
        } else{
            $sourceId = Yii::$app->request->get('sourceId');
            $totalTank = QuestionLibrary::find()->asArray()->where("catId={$sectionId} and type=1 and sourceId={$sourceId}")->all();  //????????????
        }
        foreach($totalTank as $k=>$v){
            $totalTank[$k]['totalSubject'] = LibraryQuestion::find()->select("id")->asArray()->where("libId={$v['id']}")->count();   //????????????
            $amodel = new UserAnswer();
            $averageTime = $amodel->getLibraryAverageTime($v['id']);
            $totalTank[$k]['averageTime'] = Method::secToTime($averageTime);
            $totalTank[$k]['correct'] = $amodel->getLibraryCorrectRate($v['id']);   //???????????????
            if($uid){
                $totalTank[$k]['do_count'] = UserAnswer::find()->select("id")->where("uid={$uid} and libId={$v['id']}")->count();
            } else {
                $totalTank[$k]['do_count'] = 0;
            }
        }
        $res = ['code' => 1,'data'=>$totalTank,'message'=>'????????????'];
        die(json_encode($res));
    }
    /**
     * gre ????????????
     * by yanni
     */
    public function actionLibraryMakeProblem()
    {
        $libId = Yii::$app->request->get('libId');
        $source = Yii::$app->request->get('source');
        $start = Yii::$app->request->get('start');
        $questionId = Yii::$app->request->get('questionId');   //???????????????ID
        $numKey = Yii::$app->request->get('numKey',0);    //????????????????????????
        $uid = Yii::$app->session->get("uid");
        if ($uid) {
            $do_questions = UserAnswer::find()->asArray()->where("uid={$uid} and libId={$libId} and answerType=1")->groupBy("questionId")->orderBy("id asc")->all();  //???????????????
            $queStr = '';
            if ($do_questions) {   //??????????????????????????????
                if(count($do_questions)>=$numKey+1 && !$questionId && !$start){   //????????????????????????
                    $questionId = $do_questions[$numKey]['questionId'];   //
                }else{
                    foreach ($do_questions as $v) {
                        $queStr .= $v['questionId'] . ",";
                    }
                }
            } else {
                $questionsStat = QuestionsStatistics::find()->asArray()->where("uid={$uid} and libraryId={$libId}")->one();
                if (!$questionsStat) {   //??????????????????????????????????????????
                    $data['uid'] = $uid;
                    $data['libraryId'] = $libId;
                    $data['totalNum'] = LibraryQuestion::find()->select("id")->where("libId=$libId")->count();
                    $data['startTime'] = time();
                    $data['interruptTime'] = time();
                    Yii::$app->db->createCommand()->insert('{{%questions_statistics}}', $data)->execute();
                }
            }
            //  $question ????????????ID
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
                $questionsStat = QuestionsStatistics::find()->asArray()->where("uid={$uid} and libraryId={$libId}")->one();   //????????????????????????
                if(!$start){
                    $questionsStat['doNum'] = $numKey;
                }
                $questionData = Questions::find()->asArray()->where("id = {$question['questionId']}")->one();  //????????????
                $model = new Question();
                $questionData = $model->questionText($questionData,$uid,$libId);          //????????????html????????????
                if($isMark){
                    $questionData['ismark'] = 1;   //?????????
                } else{
                    $questionData['ismark'] = 2;   //?????????
                }
                if($userCollection){
                    $questionData['collection'] = 1;   //?????????
                } else{
                    $questionData['collection'] = 2;   //?????????
                }
                if($source==1 && ($questionData['type']==5 || $questionData['type']==6 || $questionData['type']==7)){
                    $questionData['question']['details'] = strip_tags($questionData['question']['details']);
                }
                $res['question'] = $questionData;
                $res['status'] = $questionsStat;
                $res = ['code'=>1,'data'=>$res,'message'=>'????????????'];
            } else {
                $res = ['code'=>98,'data'=>['libId'=>$libId],'message'=>'?????????????????????'];
            }
        } else{
            $res = ['code'=>99,'message'=>'?????????'];
        }
        die(json_encode($res));
    }
    /**
     * ????????????????????????
     * by yanni
     */
    public function actionSubAnswer(){
        $questionId = Yii::$app->request->post('questionId');
        $libId = Yii::$app->request->post('libId');
        $answer = Yii::$app->request->post('answer');
        $useTime = Yii::$app->request->post('useTime');
        $uid = Yii::$app->session->get('uid');
        if(!$questionId || !$libId || !$answer || !$useTime){
            die(json_encode(['code' => 0,'message'=>'?????????????????????']));
        }
        if($uid){
            $model = new UserAnswer();
            $correct = $model->checkCorrect($questionId,$answer);  //????????????????????????????????????
            $check = UserAnswer::find()->asArray()->where("uid={$uid} and libId={$libId} and questionId={$questionId}")->one();
            if($check){   //??????????????????????????????
                UserAnswer::updateAll(['answer'=>$answer,'useTime'=>$useTime,'correct'=>$correct],"uid={$uid} and questionId={$questionId} and libId={$libId}");
                $res = ['code' => 1,'message'=>'????????????'];
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
                        uc_user_edit_integral1($uid,'GRE??????',1,2);
                        $rewardModel = new QuestionReward();
                        $rewardModel->uid = $uid;
                        $rewardModel->questionId = $questionId;
                        $rewardModel->createTime = time();
                        $rewardModel->save();
                    }
                    SynchroLog::updateAll(['lastTime'=>time()],"uid={$uid}");
                    $res = ['code' => 1,'message'=>'????????????'];
                } else {
                    $res = ['code' => 0,'message'=>'????????????'];
                }
            }
        } else{
            $res = ['code' => 99,'data'=>[],'message'=>'?????????'];
        }
        die(json_encode($res));
    }

    /**
     * ??????????????????
     * by yanni
     */
    public function actionMakeReview(){
        $libId= Yii::$app->request->get('libId');
        $uid= Yii::$app->session->get('uid');
        if($uid){
            $do_questions = UserAnswer::find()->asArray()->select(['questionId'])->where("uid={$uid} and libId={$libId} and answerType=1")->groupBy("questionId")->all();  //???????????????
            $total_questions = LibraryQuestion::find()->asArray()->select(['questionId'])->where("libId={$libId}")->orderBy('id asc')->all();        //????????????
            foreach($total_questions as $k=>$v){
                $total_questions[$k]['status'] = 2;  //??????????????????
                foreach($do_questions as $va){
                    if($v['questionId']==$va['questionId']){
                        $total_questions[$k]['status'] = 1;   //  ????????????
                    }
                }
                $mark = UserBankMark::find()->asArray()->where("uid={$uid} and libId={$libId} and questionId={$v['questionId']}")->one();  //??????????????????
                if(!empty($mark)){
                    $total_questions[$k]['ismark'] = 1;
                } else{
                    $total_questions[$k]['ismark'] = 2;
                }
            }
            $res = ['code'=>1,'data'=>$total_questions,'do_data'=>$do_questions,'libId'=>$libId,'message'=>'????????????'];
        } else{
            $res = ['code'=>99,'data'=>[],'message'=>'?????????'];
        }
        die(json_encode($res));
    }

    /**
     * ?????????????????????
     * by yanni
     */
    public function actionBankResults(){
        $libId = Yii::$app->request->get('libId');
        $uid = Yii::$app->session->get('uid');
        if($uid) {
            $model = new QuestionsStatistics();
            $userStatistic = $model->find()->asArray()->where("uid={$uid} and libraryId={$libId}")->one();  //??????????????????
            $totalNum = LibraryQuestion::find()->select("id")->asArray()->where("libId={$libId}")->count();   //????????????
            $overstep = $model->getCompete($uid, $libId, $userStatistic['correctRate']);       //?????????????????????   ??????????????????
            $compete['probability'] = round($overstep['transcendNum'] / $overstep['total'], 4);                 //?????????
            $compete['userNum'] = $overstep['total'];
            $compete['transcendNum'] = $overstep['transcendNum'];        //???????????????
            $data['pace'] = $model->getPace($userStatistic['totalNum'], $userStatistic['totalTime']);          //pace??????
            $aModel = new UserAnswer();
            $data['correctNum'] = $aModel->find()->select("id")->asArray()->where("uid={$uid} and libId={$libId} and correct=1 and answerType=1")->count();   //????????????????????????
            $data['totalNum'] = $totalNum;
            $data['correctRate'] = $userStatistic['correctRate'];
            $data['totalUse'] = Method::secToTime($userStatistic['totalTime']);
            $data['meanTime'] = Method::secToTime(round($userStatistic['totalTime'] / $userStatistic['doNum']));
            $data['compete'] = $compete;
            $data['libId'] = $libId;
            $res = ['code' => 1, 'data' => $data, 'message' => '????????????'];
        } else {
            $res = ['code' => 99, 'data' => [], 'message' => '?????????'];
        }
        die(json_encode($res));
    }

    /**
     * ?????????????????????????????????
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
                $res = ['code' => 1, 'data' => [], 'message' => '??????????????????'];
            } else {
                $res = ['code' => 0, 'data' => [], 'message' => '??????????????????'];
            }
        }else{
            $res = ['code' => 99, 'data' => [], 'message' => '?????????'];
        }
        die(json_encode($res));
    }

    /**
     * ???????????????????????????
     * by yanni
     */
    public function actionBankResultDetail(){
        $libId = Yii::$app->request->get('libId');
        $questionId = Yii::$app->request->get('questionId');
        $source = Yii::$app->request->get('source');
        $uid = Yii::$app->session->get('uid');
        if($uid) {
            if(!$libId && $questionId){            //??????questionId???????????????
                $question = Question::find()->asArray()->where("id={$questionId}")->one();
                $model = new Question();
                $questionDetail =$model->questionText($question,$uid,'');   //??????????????????  ???????????? ??????
                if($source==1 && ($questionDetail['type']==5 || $questionDetail['type']==6 || $questionDetail['type']==7)){
                    $questionDetail['question']['details'] = strip_tags($questionDetail['question']['details']);
                }
                $res = ['questionDetail'=>$questionDetail];
                $res = ['code' => 1, 'data' => $res,'message' => '????????????'];
            } else{
                $questionAll = UserAnswer::find()->asArray()->select(['questionId','correct'])->where("uid={$uid} and libId={$libId} and answerType=1")->all();
                if(!$questionId){
                    $questionId = $questionAll[0]['questionId'];
                }
                if(!$questionId){
                    $res = ['code' => 0, 'data' => [], 'message' => '?????????????????????'];
                } else{
                    $question = Question::find()->asArray()->where("id={$questionId}")->one();
                    $model = new Question();
                    $questionDetail =$model->questionText($question,$uid,$libId);   //??????????????????  ???????????? ??????
                    if($source==1 && ($questionDetail['type']==5 || $questionDetail['type']==6 || $questionDetail['type']==7)){
                        $questionDetail['question']['details'] = strip_tags($questionDetail['question']['details']);
                    }
                    $res = ['questionDetail'=>$questionDetail,'questionAll'=>$questionAll];
                    $res = ['code' => 1, 'data' => $res,'message' => '????????????'];
                }
            }
            if($res['code']==1){
                $userCollection = UserCollection::find()->asArray()->where("uid={$uid} and questionId={$questionId}")->one();
                if($userCollection){
                    $res['data']['questionDetail']['collection'] = 1;   //?????????
                } else{
                    $res['data']['questionDetail']['collection'] = 2;   //?????????
                }
            }
        } else{
            if($questionId){            //??????questionId???????????????
                $question = Question::find()->asArray()->where("id={$questionId}")->one();
                $model = new Question();
                $questionDetail =$model->questionText($question,'','');   //??????????????????  ???????????? ??????
                if($source==1 && ($questionDetail['type']==5 || $questionDetail['type']==6 || $questionDetail['type']==7)){
                    $questionDetail['question']['details'] = strip_tags($questionDetail['question']['details']);
                }
                $res = ['questionDetail'=>$questionDetail];
                $res = ['code' => 1, 'data' => $res,'message' => '????????????'];
            } else{
                $res = ['code' => 99, 'data' => [], 'message' => '?????????'];
            }
        }
        die(json_encode($res));
    }

    /**
     * ??????????????????
     * by yanni
     */
    public function actionLoadQuestionComment(){
        $questionId = Yii::$app->request->get('questionId');
        $page = Yii::$app->request->get('page',1);
        if($questionId){
            $modelu = new UserComment();
            $comment = $modelu->getQuestionComment($questionId,$page,5);   //????????????
            foreach($comment['data'] as $k=>$v){
                $comment['data'][$k]['reply'] = Yii::$app->db->createCommand("select uc.*,u.userName,u.nickname,u.image,uc.fane as fine from x2_user_comment uc LEFT JOIN x2_user u on uc.uid=u.uid where uc.pid={$v['id']}")->queryAll();
            }
            $res = ['code'=>1,'data'=>$comment,'message'=>'????????????'];
        } else{
            $res = ['code'=>0,'message'=>'???????????????ID'];
        }
        die(json_encode($res));
    }

    /**
     * ????????????????????????
     * by yanni
     */
    public function actionUserReport(){
        $uid = Yii::$app->session->get('uid');
        if(!$uid){
            die(json_encode(['code' => 99, 'message' => '?????????']));
        }
        $model = new UserAnswer();
        $replenish['correct'] = $model->getUserSectionCorrectRate($uid,1);       //???????????????
        $replenish['ageTime'] = $model->getUserSectionAverageTime($uid,1);    //??????????????????
        $read['correct'] = $model->getUserSectionCorrectRate($uid,2);         //???????????????
        $read['ageTime'] = $model->getUserSectionAverageTime($uid,2);          //??????????????????
        $quant['correct'] = $model->getUserSectionCorrectRate($uid,3);         //???????????????
        $quant['ageTime'] = $model->getUserSectionAverageTime($uid,3);         //??????????????????
        $replenishKnow = $model->getUserSectionKnow($uid,1);                 //??????????????????
        $readKnow = $model->getUserSectionKnow($uid,2);                      //??????????????????
        $quantKnow = $model->getUserSectionKnow($uid,3);                     //??????????????????
        $data['replenish'] = $replenish;
        $data['read'] = $read;
        $data['quant'] = $quant;
        $data['replenishKnow'] = $replenishKnow;
        $data['readKnow'] = $readKnow;
        $data['quantKnow'] = $quantKnow;
        $data['replenishStrategy'] = $model->getStrategy(1,$replenish['correct']);
        $data['readStrategy'] = $model->getStrategy(2,$read['correct']);
        $data['quantStrategy'] = $model->getStrategy(3,$quant['correct']);
        die(json_encode(['code'=>1,'data'=>$data,'message'=>'????????????']));
    }
    /**
     * ??????????????????
     * yanni
     */
    public function actionSign()
    {
        $uid = Yii::$app->session->get('uid');
        $day = date("Y-m-d");
        if (!$uid) {
            die(json_encode(['code' => 99, 'message' => '?????????']));
        }
        $check = UserSign::find()->asArray()->where("uid=$uid and createDay='$day'")->one();
        if(!empty($check)){
            die(json_encode(['code' => 2, 'message' => '???????????????']));
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
            uc_user_edit_integral1($uid, 'GRE??????', 1, $num);
            $giveIntergral=  User::addBehavior(3,$uid);//???????????????????????? by sjeam ??????2
            $re = [
                'code' => 1,
                'data' => $num,
                'message' => '????????????'
            ];
        } else {
            $re = [
                'code' => 0,
                'message' => '????????????'
            ];
        }
        die(json_encode($re));
    }

    /**
     * ????????????
     * yanni
     */
    public function actionUserSign()
    {
        $uid = Yii::$app->session->get('uid');
        if (!$uid) {
            die(json_encode(['code' => 99, 'message' => '?????????']));
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
        die(json_encode(['code' => 1, 'data' => $data, 'message'=>'????????????']));

    }
    /**
     * ????????????
     */
    public function actionReportErrors(){
        $uid = Yii::$app->session->get("uid");
        $questionId = Yii::$app->request->get("questionId");   //????????????ID
        $errorsType = Yii::$app->request->get("errorType");  //????????????
        $error = Yii::$app->request->get("errorContent");   //??????
        $source = Yii::$app->request->get("source",'??????');   //??????????????????
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
                $res = ['code' => 1,'message'=>'????????????????????????????????????'];
            } else{
                $res = ['code' => 0,'message'=>'????????????'];
            }
        } else {
            $res = ['code' => 2,'message'=>'?????????'];
        }
        die(json_encode($res));
    }

    /**
     * ???????????? ???????????????  ??????5
     * by  sjeam
     * app/app-apinew/preemptive-course
     * ?????? page  pageSize
     */
    public function actionPreemptiveCourse(){
        $res['banner'] = Jump :: getCourseJump(3);

        $page = Yii::$app->request->get("page",1);   //page
        $pageSize = Yii::$app->request->get("pageSize",10);  //pageSize
        $res['courses'] = Course::getCourse($page,$pageSize,0);   //?????????????????????  0 ??????  1  ??????
        // $res['banner'] = Content::getClass(['where' => 'c.pid=0', 'fields' => 'url', 'category' => '595', 'page' => 1, 'pageSize' => 5]);   //banner ??????
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
        // $res['teacher'] = Teacher::find()->asArray()->orderBy('sort desc')->limit(4)->all();   //??????
        // foreach($res['teacher'] as $k=>$v){
        //     $res['teacher'][$k]['viewCount'] = $v['numberLessons'];
        // }
        // $data = Method::post("https://open.viplgw.cn/cn/api/gre-class-list",['catId' => 439]);
        // $res['activity'] = json_decode($data,true);          //??????
        $res['auditionCourse'] = Course::auditionCourse();
        // $res['cc_userId'] = '7144B6FA4AC948AE';

        // var_dump($res);die;
        die(json_encode(['code' => 1,'data'=>$res,'message'=>'????????????']));
    }


    /**
     * ?????????????????????
     */
    public function actionTeacherDetail(){
        $teacherId = Yii::$app->request->get("teacherId");
        $page = Yii::$app->request->get("page",1);
        if($teacherId){
            $teacher = Teachers::find()->where("id = $teacherId")->asArray()->one();
            $collecte = TeacherCollection::find()->asArray()->select("count(id) as cou")->where("teacherId = $teacherId")->one();  //?????????????????????
            $teacher['follow'] = $collecte['cou'];                          //??????
            $modelc = new TeachercolumnComment();
            $comment = $modelc->getTeacherComment($teacherId,$page,50);   //??????50???2018-10-8
            $teacher['comment'] = $comment['data'];          //??????
            $teacher['commentCount'] = $comment['total'];     //????????????
            $model = new Content();
            $teacher['students'] =$model->getClass(['category'=>'531','fields'=>'answer,alternatives,article,listeningFile,cnName,numbering']);        //??????
            $res = ['code'=>1,'data'=>$teacher,'message'=>'????????????'];
        } else{
            $res = ['code'=>0,'data'=>[],'message'=>'??????????????????ID'];
        }
        die(json_encode($res));
    }

    /**
     * ??????????????????
     * by  yanni
     */
    public function actionTeacherComment(){
        $page = Yii::$app->request->get("page",1);
        $teacherId = Yii::$app->request->get("teacherId");
        $modelc = new TeachercolumnComment();
        $comment = $modelc->getTeacherComment($teacherId,$page,10);
        $res = ['code'=>1,'data'=>$comment,'message'=>'????????????'];
        die(json_encode($res));
    }
    /**
     *  ?????????????????????
     * by  yanni
     */
    public function actionListCourses(){
        $courseId = Yii::$app->request->get('courseId',14);
        if($courseId){
            $data = Course::find()->asArray()->where("type=1")->orderBy("sort asc") ->all();  //?????????
            foreach($data as $k=>$v){
                if($v['id']==$courseId){
                    $data[$k]['select'] = 1;                //????????????
                } else {
                    $data[$k]['select'] = 0;
                }
                $courseModel = new Course();
                $data[$k]['courseContent'] = $courseModel->getListCourse($v['id']);   //????????????
            }
            $res = ['code'=>1,'data'=>$data,'message'=>'????????????'];
        } else{
            $res = ['code'=>'97','data'=>[],'message'=>'????????????ID?????????'];
        }
        die(json_encode($res));
    }

    /**
     *  ????????????
     * by  yanni
     */
    public function actionCourseDetail(){
        $courseId = Yii::$app->request->get('courseId');
        $model = new Content();
        $sign = $model->findOne($courseId);
        if(!$sign){
            die(json_encode(['code' => 0,'message'=>'???????????????']));
        }
        if($sign->pid == 0){
            $data =  $model->getClass(['fields' => 'answer???price,originalPrice,duration,commencement,performance,alternatives,article,description','where' =>"c.pid=$courseId",'pageSize' => 1]);
            if(empty($data)){
                die(json_encode(['code' => 0,'message'=>'??????????????????']));
            }
            $pid = $courseId;
            $parent =  $model->getClass(['fields' => 'description,listeningFile,trainer','where' =>"c.id=$courseId"]);
            $tagModel = new ContentTag();
            $tag = $tagModel->getAllTag($data[0]['id']);
            $count = $parent[0]['viewCount'];
            Content::updateAll(['viewCount' => ($count+1)],"id=$courseId");
        }else{
            $data =  $model->getClass(['fields' => 'answer???price,originalPrice,duration,commencement,performance,alternatives,article,description','where' =>"c.id=$courseId",'pageSize' => 1]);
            $parent =  $model->getClass(['fields' => 'description,listeningFile,trainer','where' =>"c.id=$sign->pid"]);
            $tagModel = new ContentTag();
            $tag = $tagModel->getAllTag($courseId);
            $pid = $sign->pid;
            $count = $parent[0]['viewCount'];
            Content::updateAll(['viewCount' => ($count+1)],"id=$sign->pid");
        }
        $endTime = strtotime($data[0]['article']);
        if($endTime < time()){
            $surplusTime = '?????????';
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
        $isLogin = 0;//0-????????????  1-????????????
        $res['isLogin'] = $isLogin;
        die(json_encode(['code'=>1,'data'=>$res,'message'=>'????????????']));

    }

    /**
     * ??????livesdkid
     * by  yanni
     */
    public function actionLivesdkid(){
        $courseId = Yii::$app->request->get('courseId');
        if($courseId){
            $audition = Livesdkid::find()->asArray()->where("contentId={$courseId}")->one();
            if($audition){
                $res = ['code'=>1,'data'=>$audition,'message'=>'????????????'];
            } else{
                $res = ['code'=>0,'message'=>'????????????SDK'];
            }
        } else{
            $res = ['code'=>0,'message'=>'??????????????????ID'];
        }
        die(json_encode($res));
    }

    /**
     * ????????????
     * by  yanni
     */
    public function actionSelectQuestions(){
        $keyWord = Yii::$app->request->get('keyWord');
        if($keyWord){
            $questions = Question::find()->asArray()->select(['id','stem'])->where("stem like '%{$keyWord}%' or readStem like '%{$keyWord}%' or details like '%{$keyWord}%' or readArticle like '%{$keyWord}%'")->limit(50)->all();
            $res = ['code'=>1,'data'=>$questions,'message'=>'????????????'];
        } else{
            $res = ['code'=>0,'data'=>[],'message'=>'??????????????????'];
        }
        die(json_encode($res));
    }

    /**
     * ????????????
     */
    public function actionAppInformation(){
        $data = Content::getClass(['category' =>"544",'pageSize' => 9]);
        $res = ['code'=>1,'data'=>$data,'message'=>'????????????'];
        die(json_encode($res));
    }

    /**
     * ????????????
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
                $inspect = UserFollow::find()->asArray()->where("uid={$uid} and followUser={$user['id']}")->one();   //??????????????????????????????
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
        $res = ['code'=>1,'data'=>$information,'message'=>'????????????'];
        die(json_encode($res));
    }

    /**
     * ??????????????????
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
            $sign = UserCollection::find()->asArray()->select(['id'])->where("uid={$uid} and contentId={$id}")->one();   //??????????????????
            if($sign){
                $collection =1;
            }
            $f = UserFollow::find()->asArray()->where("uid={$uid} and followUser={$data[0]['userId']}")->one();             //??????????????????
            if($f){
                $follow = 1;
            }
        }
        $user = User::find()->asArray()->select(['id','nickname','image'])->where("id={$data[0]['userId']}")->one();
        $data[0]['editUser'] = $user;
        $data[0]['editUser']['follow'] = $follow;
        $data[0]['alternatives'] = Method::gmstrftimeC($data[0]['alternatives']);
        $data[0]['description'] = str_replace('src="/','src="https://gre.viplgw.cn/',$data[0]['description']);
        $hot = Content::getClass(['where' => 'c.pid=0 and hot=2', 'fields' => 'answer,alternatives', 'category' => '537', 'page' => 1, 'pageSize' => 4]);   //??????????????????
        foreach($hot as $k=>$v){
            $aUser = User::find()->asArray()->select(['nickname','image'])->where("id={$v['userId']}")->one();
            $hot[$k]['editUser']=$aUser;
        }
        $res = ['code'=>1,'data'=>['detail'=>$data[0],'comment'=>$comment,'collection'=>$collection,'hot'=>$hot],'message'=>'????????????'];
        die(json_encode($res));
    }

    /**
     * ????????????????????????
     */
    public function actionContentPage(){
        $id = Yii::$app->request->get('id');
        $page  = Yii::$app->request->get('page',1);
        $pageSize = Yii::$app->request->get('pageSize',50);
        if(!$id){
            die(json_encode(['code'=>0,'data'=>[],'message'=>'????????????????????????????????????ID']));
        }
        $modelu = new UserComment();
        $comment = $modelu->appUserComment($id,$page,$pageSize);
        $res = ['code'=>1,'data'=>$comment,'message'=>'????????????'];
        die(json_encode($res));
    }
    /*
     * ??????
     * cy ????????????
     * type  1-?????? 2-??????
     */
    public function actionAddComment(){
        $userid = Yii::$app->session->get("uid");
        if(!$userid){
            die(json_encode(['code'=>99,'message'=>'?????????']));
        }
        $comment = Yii::$app->request->post('comment');
        $teacherid = Yii::$app->request->post("teacherid");
        $contentid = Yii::$app->request->post("contentid");
        $type = Yii::$app->request->post("type",1);
        if($type == 2){
            $pid = Yii::$app->request->post("pid");//?????????????????????id
            $fpid = Yii::$app->request->post("fpid");//????????????ID
        }else{
            $pid = 0;
            $fpid = 0;
        }
        if($teacherid){
            $access = 1;//??????
            $teaid = $teacherid;
            $conid = 0;
        }
        if($contentid){
            $teaid = 0;
            $access = 2;//??????
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
                $page = new Pager($pidcount,1,50);  //??????2018-10-8
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
            $data = array('code'=>0,'messgae'=>'??????????????????');
        }
        die(json_encode($data));
    }

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
        if(!$uid){
            die(json_encode(['code'=>99,'message'=>'?????????']));
        }
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
        $look = Method::post("https://bbs.viplgw.cn/cn/api/check-look",['uid' => $uid]);
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
     * ????????????????????????
     * by  yanni
     */
    public function actionCheckSynchro(){
        $uid = Yii::$app->session->get('uid');
        $lastTime = Yii::$app->request->post('lastTime');
        if(!$uid){
            die(json_encode(['code' => 99,'message'=>'?????????']));
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
            $res = ['core'=>1,'message'=>'????????????'];
        } else{
            $res = ['core'=>0,'message'=>'???????????????'];
        }
        die(json_encode($res));
    }
    /**
     * ????????????
     * by  yanni
     */
    public function actionSynchroRecord(){
        $session = Yii::$app->session;
        $uid = $session->get('uid');
        if(!$uid){
            die(json_encode(['code' => 99,'message'=>'?????????']));
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
            $res['message'] = '????????????';
            $res['data'] = $recordPath;
            $res['url'] = $fileurl;
        } else{
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
     * ???????????????????????????
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
     * ???????????????????????????
     * by  yanni
     */
    public function actionCaseDetail(){
        $uid = Yii::$app->session->get('uid');
        $id = Yii::$app->request->post('id');
        $data = Content::getClass(['where' => 'c.id='.$id,'fields' => 'answer,alternatives,article,listeningFile,cnName,numbering,description']);
        if(empty($data)){
            die(json_encode(['code'=>0,'message'=>'????????????']));
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
            $sign = UserCollection::find()->asArray()->select(['id'])->where("uid={$uid} and contentId={$id}")->one();   //??????????????????
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
     * ????????????
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
    /**
     * ??????????????????
     * cy
     */
    public  function actionHidden(){
        $type = 1;//1-?????? 0-??????
        $button = 1;// 1-?????? 0-??????
        $data = ['code'=>1,'message'=>'hidden','data'=>['type'=>$type,'button'=>$button]];
        die(json_encode($data));
    }
    /**
     * ????????????
     * ??????
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

    /**
    *GRE  ??????vip???????????????  ??????3
    * by  sjeam
    * post????????? /app/app-apinew/my-behavior
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


        var_dump($data);die;
        die(Method::jsonGenerate(1,['data'=>$data],'succes'));
    }



    /**
    *GRE  ????????????  ??????4
    * by  sjeam
    * post????????? /app/app-apinew /my-integral
    * ???    ??????
    */
    public function actionMyIntegral(){
        $page = Yii::$app->request->post('page',1);
        $pageSize = Yii::$app->request->post('pageSize',10);
        $type = Yii::$app->request->post('type'); //1?????? 2??????  //????????????
        // $type =2;
        $uid = Yii::$app->session->get('uid');
        // ????????????
        $limit ='limit '.(($page-1)*$pageSize).",$pageSize";
        // ??????????????????
        !empty($type) ? $where = " and type =$type" : $where = "";
        $integral = uc_user_integral1($uid,$limit,$where);
        $integral['total']= ceil($integral['count']/$pageSize);
        $integral['page'] = $page;
        is_array($integral['details']) ? $integral['details'] : $integral['details']=null;
        // var_dump($integral);die;
        die(Method::jsonGenerate(1,['data'=>$integral],'succes'));

    }







    /**
    * GRE??????????????????  ??????6 
    * by  sjeam
    * post?????????/app/app-apinew/brush   
    * ???    ??????
    */
    public function actionBrush(){
        // ???????????????
        // $order =" ORDER BY startTime desc";
        $page = Yii::$app->request->post('page',1);
        $pageSize = Yii::$app->request->post('pageSize',20);
        // $banner = Content::getbanner(105);
        $banner = Jump :: getCourseJump(3);
        $action=  Content::getTopicactionList($page,$pageSize,0)['data'];
        // ????????????????????????
        // $last_names = array_column($action,'enorllStartTime');
        // array_multisort($last_names,SORT_DESC,$action);
        // var_dump($action);die;
        die(Method::jsonGenerate(1,['banner'=>$banner,'action'=>$action],'success'));
        
    }
    
    
    /** 
    *GRE ??????????????????  ??????7 
    * by  sjeam
    * post????????? /app/app-apinew/brush-details   
    * ???    ?????? contentid 
    */
    public function actionBrushDetails(){ 
        $contentid = Yii::$app->request->post('contentid');
        // $contentid =8503;
        // $res[0] = Content::find()->select()->where(" id = $contentid ")->asarray()->One();
        // ????????????????????????
        $res= Content::getClass(['fields' => 'answer,cnName,duration,A,price,orderNum,article','where' =>"c.id =$contentid",'order'=>'updateTime desc','page'=>$page,'pageSize'=>$pageSize,'all'=>$all]);   // ???????????????????????????
        $res = Content::getBrushactiveExtend($res);//????????????
        // ????????? ---????????????????????????
        $active =  Content:: getOpenOrderNum($res)[0];
        // var_dump($active);die;
        // $active['teacher']='regina';
        $teacherlist = Teachers::getTeachers($active['teacher']);
        isset($teacherlist[0]) ?$teacher =$teacherlist[0]:$teacher=null;
        // var_dump($teacher);die;
        die(Method::jsonGenerate(1,['teacher'=>$teacher,'active'=>$active],'success'));
    }


    /**
     * ??????????????????    ??????8 
     * by sjeam ????????????
     * post????????? /app/app-apinew/teacher-list   
     */
     public function actionTeacherList(){
        $banner = Jump :: getCourseJump(3);
        $teacher = Teacher::find()->asArray()->orderBy("sort desc")->all();
        // ????????????
        // http://p.qiao.baidu.com/im/index?siteid=12373947&ucid=18329536&cp=&cr=&cw=  
        die(Method::jsonGenerate(1,['banner'=>$banner,'teacher'=>$teacher],'success'));
    }

    /** 
    *GRE  ????????????
    * by  sjeam
    * post????????? /app/app-apinew/search-hots      
    * ???    ?????? 
    */
    public function actionSearchHots(){
        $array = array(
            'CR??????',
            '????????????',
            'Kevin'
        );
        die(Method::jsonGenerate(1,['data'=>$array],'??????????????????'));
    }

    /** 
    *GRE  ??????????????????
    * by  sjeam
    * post????????? /app/app-apinew/search-course        
    * ???    ?????? page  pagesize   search  1?????? ?????????????????????
    */
    public function actionSearchCourse(){
        $page = Yii::$app->request->post('page',1);
        $pagesize = Yii::$app->request->post('pagesize',100);
        $search = Yii::$app->request->post('search','');
        // $search ='b';
        // ????????????
        //  $sixCourse = Content::getSixCoursesall($search);
         $sixCourse = Course::getCourse($page,$pageSize,1,$search);   //?????????????????????  0 ??????  1  ??????
        // var_dump($sixCourse);die;
        // ?????????
        // $courseOrder =" and c.contenttitle like '%{$search}%'  ORDER BY c.contentid desc";
        // $openCourses =  Content::opencouserList(208,9,null,$page,$pagesize,$courseOrder)['data'];
        // var_dump($openCourses);die;
        // ????????????
        // $actionOrder =" and c.name like '%{$search}%'  ORDER BY contentid desc";
        $action=  Content::getTopicactionList($page,$pagesize,1,$search)['data'];// 0 ??????  1  ??????
        // var_dump($action);die;
        // ????????????
        $where ="where name like'%{$search}%'";
        $teacher = Content::teacherList($where);
        // var_dump($teacher);die;
        // ????????????
         $count = array(count($sixCourse),count($action),count($teacher));
        // var_dump($count);die;
        die(Method::jsonGenerate(1,['sixCourse'=>$sixCourse,'action'=>$action,'teacher'=>$teacher,'count'=>$count],'??????????????????'));
    
    }


    /** 
    *GRE  ???????????? ??????
    * by  sjeam
    * post????????? /app/app-apinew/search-course        
    * ???    ?????? page  pagesize   search  1?????? ?????????????????????
    */
    public function actionNoticeCenter()
    {
        $userId      = Yii::$app->session->get('userid');
        $uid         = Yii::$app->session->get('uid');
    //     $userId =40888;
    //    $uid = 30186;
    //--????????????
        //????????????
        $sys         = PushMessage::find()->asArray()->where("uid =$uid and states= 1" )->orderBy('id desc')->count();
        //????????????
        $culling     = count(Yii::$app->db->createCommand("select id from {{%culling}} where uid=$uid and isLook=1 ")->queryAll());
        //??????


        $gossip      = count(Yii::$app->db->createCommand("select id from gossip.{{%reply}} where type=2 and  replyUser=$uid and isLook= 1 ")->queryAll());//????????????gossip
        $goss_post   = count(Yii::$app->db->createCommand("select r.id from gossip.{{%post_reply}} r left join gossip.{{%post}} p on r.postid=p.id where r.replyUid=$uid and (p.catId=42 or p.catId=43) and r.see=1 ")->queryAll());//???????????????
        $question    = count(Yii::$app->db->createCommand("select commentid from {{%user_comment}} where replyUid=$uid and questionId not null and isLook =1 ")->queryAll());    //????????????    
        $information = count(Yii::$app->db->createCommand("select q.commentid from {{%user_comment}} q left join {{%content}} c on c.id=q.contentId where q.replyUid=$uid AND c.catId in (531,543,42,43) and q.contentid is not null and q.isLook =1")->queryAll()); //????????????
        $comment     = $gossip + $goss_post + $question + $information;
        // ??????????????????
        $total = $sys+$comment+$culling;
        $count = ['system' => $sys, 'comment' => $comment, 'culling' => $culling];

    //--????????????
        // ?????????????????? by sjeam
       $sysMessage = PushMessage::find()->asArray()->where("uid =$uid and states= 0 " )->orderBy('id desc')->one();  //??????
       $activeMessage  = Yii::$app->db->createCommand("select c.*,co.contenttitle from {{%culling}} c left join {{%content}} co on c.noticeId=co.contentid where c.uid=$uid and c.isLook= 1 order by id desc")->queryOne(); // ??????   
       //????????????
       $question    = count(Yii::$app->db->createCommand("select commentid from {{%user_comment}} where replyUid=$uid and questionId not null and isLook =1 ")->queryAll());    //????????????    
       $information = count(Yii::$app->db->createCommand("select q.commentid from {{%user_comment}} q left join {{%content}} c on c.id=q.contentId where q.replyUid=$uid AND c.catId in (531,543,42,43) and q.contentid is not null and q.isLook =1")->queryAll()); //???????????????????????????????????????
            $commentMessage [3]   = Yii::$app->db->createCommand("select  c.commentid as id,c.isLook,UNIX_TIMESTAMP(c.c_time) as createTime,c.content,c.questionid as inforid,q.questiontitle as title,s.section,c.replyUser as replyName from {{%q_comment}} c left join {{%questions}} q on c.questionid=q.questionid left join {{%sections}} s on q.sectiontype=s.sectionid where c.replyUid=$userId and c.questionid<>0 order by createTime desc")->queryOne();    //????????????
       $commentMessage [4]   = Yii::$app->db->createCommand("select  c.commentid as id,c.isLook,UNIX_TIMESTAMP(c.c_time) as createTime,c.content,c.contentid as inforid,q.contenttitle as title,c.replyUser as replyName from {{%q_comment}} c left join {{%content}} q on c.contentid=q.contentid where c.replyUid=$userId and c.contentid is not null and q.contentcatid in (9,7,8,55,56) order by createTime desc")->queryOne(); //????????????-???????????????????????????
       //    $commentMessage [1]   = Yii::$app->db->createCommand("select  r.id,r.isLook,r.createTime,r.content,g.title,g.id as inforid,r.uName as replyName from gossip.{{%reply}} r left join gossip.{{%gossip}} g on r.gossipid=g.id where r.replyUser=$uid  order by r.createTime desc")->queryOne();//????????????gossip
    //    $commentMessage [2]   = Yii::$app->db->createCommand("select  r.id,r.see as isLook,r.createTime,r.content,p.title,p.id as inforid,r.replyName from gossip.{{%post_reply}} r left join gossip.{{%post}} p on r.postid=p.id where r.replyUid=$uid  and (p.catId=3 or p.catId=8) order by r.createTime desc")->queryOne();//???????????????
    //    $commentMessage [3]   = Yii::$app->db->createCommand("select  c.commentid as id,c.isLook,UNIX_TIMESTAMP(c.c_time) as createTime,c.content,c.questionid as inforid,q.questiontitle as title,s.section,c.replyUser as replyName from {{%q_comment}} c left join {{%questions}} q on c.questionid=q.questionid left join {{%sections}} s on q.sectiontype=s.sectionid where c.replyUid=$userId and c.questionid<>0 order by createTime desc")->queryOne();    //????????????
    //    $commentMessage [4]   = Yii::$app->db->createCommand("select  c.commentid as id,c.isLook,UNIX_TIMESTAMP(c.c_time) as createTime,c.content,c.contentid as inforid,q.contenttitle as title,c.replyUser as replyName from {{%q_comment}} c left join {{%content}} q on c.contentid=q.contentid where c.replyUid=$userId and c.contentid is not null and q.contentcatid in (9,7,8,55,56) order by createTime desc")->queryOne(); //????????????-???????????????????????????
    //    $commentMessage [5]   = Yii::$app->db->createCommand("select  c.commentid as id,c.isLook,UNIX_TIMESTAMP(c.c_time) as createTime,c.content,c.contentid as inforid,q.contenttitle as title,c.replyUser as replyName from {{%q_comment}} c left join {{%content}} q on c.contentid=q.contentid where c.replyUid=$userId and c.contentid is not null and q.contentcatid=108 order by createTime desc")->queryOne(); //????????????-????????????
    //  var_dump( $commentMessage);
    // ?????? ??????  ???????????? ????????????
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

}