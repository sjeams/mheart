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

class IndexController extends AppApiControl{
    
     function init(){
        // Yii::$app->session->set('uid',30186);
        // Yii::$app->session->set('userId',40888);
        parent::init();
         include_once($_SERVER['DOCUMENT_ROOT'].'/../libs/ucenter/ucenter.php');
    }
    public $enableCsrfValidation = false;

    
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
                $t = Content::addHost($t);
                $question['optionsA'][] = $t;
            }
        }
        if($question['optionB']){
            $opsB = Method::getTextHtmlArr($question['optionB']);
            foreach($opsB as $d => $t){
                $t = Content::addHost($t);
                $question['optionsB'][] = $t;
            }
        }
        if($question['optionC']){
            $opsB = Method::getTextHtmlArr($question['optionC']);
            foreach($opsB as $d => $t){
                $t = Content::addHost($t);
                $question['optionsC'][] = $t;
            }
        }

        $question['details'] = Content::addHost($question['details']);
        $question['readArticle'] = Content::addHost($question['readArticle']);
        $question['quantityA'] = Content::addHost($question['quantityA']);
        $question['quantityB'] = Content::addHost($question['quantityB']);
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
     * gre ??????memcached??????
     * by yanni
     */
     public function actionClearCaching(){
        Yii::$app->cache->flush();
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




}