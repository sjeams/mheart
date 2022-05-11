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
     * gre 清除memcached缓存
     * by yanni
     */
     public function actionClearCaching(){
        Yii::$app->cache->flush();
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




}