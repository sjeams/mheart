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
     * 抢先学课 提分课首页  新增5
     * by  sjeam
     * app/course/preemptive-course
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
    * GRE刷题活动首页  新增6 
    * by  sjeam
    * post接口：/app/course/brush   
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
    * post接口： /app/course/brush-details   
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
     * post接口： /app/course/teacher-list   
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
    * post接口： /app/course/search-hots      
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
    * post接口： /app/course/search-course        
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


    
}