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

class KnowsController extends AppApiControl{
    
     function init(){
        // Yii::$app->session->set('uid',30186);
        // Yii::$app->session->set('userId',40888);
        parent::init();
         include_once($_SERVER['DOCUMENT_ROOT'].'/../libs/ucenter/ucenter.php');
    }
    public $enableCsrfValidation = false;


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
        // $categoryId = 569;
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
            $content['description'] = Content::addHost($content['description']);
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

}