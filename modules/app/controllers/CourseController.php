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

class CourseController extends AppApiControl{
    
     function init(){
        // Yii::$app->session->set('uid',30186);
        // Yii::$app->session->set('userid',40888);
        parent::init();
         include_once($_SERVER['DOCUMENT_ROOT'].'/../libs/ucenter/ucenter.php');
    }
    public $enableCsrfValidation = false;

 /**
     * ???????????? ???????????????  ??????5
     * by  sjeam
     * app/course/preemptive-course
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
    * GRE??????????????????  ??????6 
    * by  sjeam
    * post?????????/app/course/brush   
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
    * post????????? /app/course/brush-details   
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
     * post????????? /app/course/teacher-list   
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
    * post????????? /app/course/search-hots      
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
    * post????????? /app/course/search-course        
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


    
}