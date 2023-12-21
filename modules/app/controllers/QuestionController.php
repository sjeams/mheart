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

class QuestionController extends AppApiControl{
    
     function init(){
        // Yii::$app->session->set('uid',30186);
        // Yii::$app->session->set('userId',40888);
        parent::init();
         include_once($_SERVER['DOCUMENT_ROOT'].'/../libs/ucenter/ucenter.php');
    }
    public $enableCsrfValidation = false;

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
        $data['integral'] = User::userIntegral();//积分
        $data['behavior'] = User::userBehavior()['behaviorName'];//称号
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
   
        $uid = Yii::$app->session->get('uid');
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
     * 添加解析 提交解析  原接口：cn/api/add-analysis
     * by  sjeam    
     */
     public function actionAddAnalysis(){
        $uid = Yii::$app->session->get('uid');
        $aContent = Yii::$app->request->get('aContent','');
        $questionId = Yii::$app->request->get('questionId');
        $audio = Yii::$app->request->get('audio','');
        $type = Yii::$app->request->get('type','1');
        $price = Yii::$app->request->get('price','0');
        if(!$uid){
            die(json_encode(['code' => 99,'message'=>'请登录']));
        }
        if($questionId){
            if($type==2){
                $model = new UserAnalysis();
                $model->questionId = $questionId;
                $model->uid = $uid;
                $model->analysisContent = $aContent;
                $model->type = 2;
                $model->publish = 2;
                $model->audio = $audio;
                $model->price = $price;
                $model->createTime = time();
                $r = $model->save();
            } else{
                $model = new UserAnalysis();
                $model->questionId = $questionId;
                $model->uid = $uid;
                $model->analysisContent = $aContent;
                $model->type = 1;
                $model->publish = 2;
                $model->createTime = time();
                $r = $model->save();
            }
            if($r>0){
                // gre app新版本 添加雷豆  by sjeam
                $integral=0;
                // if(mb_strlen($aContent)>20){   //utf8 字符长度大于100
                $like = UserAnalysis::find()->select( )->where(" questionId= $questionId and  analysisContent like '%{$aContent}%' ")->One();
                if(empty($like)){  $integral=20;  uc_user_edit_integral1($uid,'解析奖励',1,$integral); } // 不重复 奖励雷豆
                // }
                SynchroLog::updateAll(['lastTime'=>time()],"uid={$uid}"); //最后操作时间
                $res = ['code' => 1,'message'=>'提交成功，请等待审核','integral'=>$integral];
            } else {
                $res = ['code' => 0,'message'=>'提交失败'];
            }
        }else{
            $res = ['code' => 0,'message'=>'问题不存在'];
        }
        die(json_encode($res));
    }

}