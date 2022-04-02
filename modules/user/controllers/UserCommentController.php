<?php
/**
 * 记录管理
 * Created by PhpStorm.
 * User: Administrator
 * Date: 15-6-17
 * Time: 下午2:37
 */
namespace app\modules\user\controllers;


use app\modules\cn\models\MockResult;
use app\modules\user\models\UserAnswer;
use app\modules\user\models\UserEvaluationRecord;
use yii;
use app\libs\AppControl;
use app\libs\App1Control;
use app\libs\Method;
use app\modules\user\models\UserComment;

class UserCommentController extends App1Control {
    public $enableCsrfValidation = false;
    //用户列表
    public function actionIndex()
    {
        $page = Yii::$app->request->get('page',1);
        $beginTime = strtotime(Yii::$app->request->get('beginTime',''));
        $endTime = strtotime(Yii::$app->request->get('endTime',''));
        $questionId  = Yii::$app->request->get('questionId','');  //问题ID
        $contentId  = Yii::$app->request->get('contentId','');       //内容ID
        $where="type=1";
        if($beginTime){
            $where .= " AND uc.createTime>=$beginTime";
        }
        if($endTime){
            $where .= " AND uc.createTime<=$endTime";
        }
        if($questionId){
            $where .= " AND uc.questionId = $questionId";
        }
        if($contentId){
            $where .= " AND uc.contentId = $contentId";
        }
        $model = new UserComment();
        $data = $model->getUserComment($where,10,$page);
        $page = Method::getPagedRows(['count'=>$data['count'],'pageSize'=>10, 'rows'=>'models']);
        $commentUrl = Yii::$app->request->getUrl();
        Yii::$app->session->set('commentUrl',$commentUrl);
        return $this->render('index',['page' => $page,'data' => $data['data'],'block' => $this->block,'total'=>$data['count']]);
    }

    //查看评论回复
    public function actionSelectReply(){
        $page = Yii::$app->request->get('page',1);
        $id  = Yii::$app->request->get('id','');       //ID
        $where="type=2";
        if($id){
            $where .= " AND uc.pid=$id";
        }
        $model = new UserComment();
        $data = $model->getUserComment($where,10,$page);
        $page = Method::getPagedRows(['count'=>$data['count'],'pageSize'=>10, 'rows'=>'models']);
        return $this->render('reply',['page' => $page,'data' => $data['data'],'block' => $this->block]);
    }

    public function actionDelete(){
        $id  = Yii::$app->request->get('id','');       //ID
        $replys = UserComment::find()->asArray()->where("pid={$id} and type=2")->all();
        if($replys){
            $res = ['code'=>2,'message'=>'请先删除回复'];
        } else{
            $r = UserComment::deleteAll("id={$id}");
            if($r){
                $res = ['code'=>1,'message'=>'删除成功'];
            } else{
                $res = ['code'=>0,'message'=>'删除失败'];
            }
        }
        die(json_encode($res));
    }
    /**
     * 评论修改
     * cy
     */
    public function actionEdit(){
        $model = new UserComment();
        if($_POST){
            $id = Yii::$app->request->post('id');
            $content = Yii::$app->request->post('content');
            $createTime = Yii::$app->request->post('createTime');
            $createTime = strtotime($createTime);
            $res = UserComment::updateAll(['content'=>$content,'createTime'=>$createTime],"id = $id");
            if($res){
                $url = Yii::$app->session->get('commentUrl');
                echo "<script>alert('修改成功！');setTimeout(function(){location.href='$url'},1000)</script>";
            }else{
                echo  "<script>alert('修改失败！');setTimeout(function(){history.go(-1);},1000)</script>";die;
            }
        }else{
            $id = Yii::$app->request->get('id');
            $content = $model->getUserComment("uc.id = $id",1,1);
            return $this->render('edit',['comment'=>$content['data'][0]]);
        }
    }

    /**
     * 用户数据统计
     * cy
     */
    public function actionUserCount(){
        return $this->renderPartial('user-count');
    }
    /**
     * 数据统计
     * ajax
     * cy
     *
     * 做题 测评 模考
     */
    public function actionTypeCount(){
//        $time1 = strtotime(date("2018-10-01"));
//        $time2 = strtotime(date("2018-10-31"))+86399;
//        Yii::$app->cache->flush();
        $type = Yii::$app->request->get('type',1);//1-做题 2-测评 3-模考
//        if($type ==2){
//            $where = " unix_timestamp(createTime) >= $time1 and unix_timestamp(createTime) <= $time2";
//        }else{
//            $where = " createTime >= $time1 and createTime <= $time2";
//        }
        $where = '1=1';
        if($type == 1){
            $key = md5('practiseCount');
            $result = Yii::$app->cache->get($key);
            if($result){
                $number = $result;
            }else{
                $number = UserAnswer::find()->where($where)->groupBy('uid')->count();
                Yii::$app->cache->set($key,$number,86400);
            }
        }elseif($type == 2){
            $key = md5('evaluationCount');
            $result = Yii::$app->cache->get($key);
            if($result){
                $number = $result;
            }else{
                $number = UserEvaluationRecord::find()->where($where)->groupBy("uid")->count();
                Yii::$app->cache->set($key,$number,86400);
            }
        }elseif($type ==3){
            $key = md5('mockCount');
            $result = Yii::$app->cache->get($key);
            if($result){
                $number = $result;
            }else{
                $number = MockResult::find()->where($where)->groupBy('uid')->count();
                Yii::$app->cache->set($key,$number,86400);
            }
        }else{
            $number = 0;
        }
        die(json_encode(['code'=>1,'number'=>$number]));
    }
}