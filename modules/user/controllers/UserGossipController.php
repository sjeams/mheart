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

class UserGossipController extends App1Control {
    public $enableCsrfValidation = false;
    //用户列表
    public function actionIndex()
    {
        $page = Yii::$app->request->get('page',1);
        $uid  = Yii::$app->request->get('uid');  //用户UID
        $where="belong=5";
        if($uid){
            $where .= " and uid=$uid";
        }
        $data = Method::post("https://bbs.viplgw.cn/cn/api/get-gossip",['where' => $where,'pageSize' => 10,'page' => $page]);
        $data = json_decode($data,'true');
        $page = Method::getPagedRows(['count'=>$data['count'],'pageSize'=>10, 'rows'=>'models']);
        return $this->render('index',['page' => $page,'data' => $data['data'],'block' => $this->block]);
    }

    //查看评论回复
    public function actionSelectReply(){
        $page = Yii::$app->request->get('page',1);
        $gossipId  = Yii::$app->request->get('id','');       //ID
        $data = Method::post("https://bbs.viplgw.cn/cn/api/get-gossip-reply",['gossipId' => $gossipId,'pageSize' => 10,'page' => $page]);
        $data = json_decode($data,'true');
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

}