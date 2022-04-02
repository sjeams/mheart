<?php
/**
 * 分类管理
 * Created by PhpStorm.
 * User: Administrator
 * Date: 15-6-17
 * Time: 下午2:37
 */
namespace app\modules\user\controllers;


use app\modules\cn\models\UserRecord;
use app\modules\user\models\User;
use yii;
use app\libs\ApiControl;

class EvaluationController extends ApiControl {
    public function actionIndex()
    {

        $uid = Yii::$app->request->get("uid");
        $type = Yii::$app->request->get("type");
        $beginTime = Yii::$app->request->get("beginTime");
        $endTime = Yii::$app->request->get("endTime");
        $phone = Yii::$app->request->get("phone");
        $email = Yii::$app->request->get("email");
        $where = " 1= 1 ";
        if($phone){
            $user = User::find()->where("phone=$phone")->asArray()->one();
            if(!$user || ($email && $email !=$user['email'])){
                $page = new yii\data\Pagination(['totalCount'=>0,'pageSize'=>10]);
                return $this->render('index',['data'=>[],'page'=>$page,'total'=>0]);
            }
            $userid = $user['uid'];
        }elseif($email){
            $userid = User::find()->where("email='{$email}'")->asArray()->one()['uid'];
        }
        if($uid){
            $where .= " and uid = $uid";
            if(isset($userid) && $uid != $userid){
                $page = new yii\data\Pagination(['totalCount'=>0,'pageSize'=>10]);
                return $this->render('index',['data'=>[],'page'=>$page,'total'=>0]);
            }
        }else{
            if(isset($userid)){
                $where .= " and uid = $userid";
            }
        }
        if($type > 0){
            $where .= " and type = $type";
        }
        if($beginTime){
            $where .= " and createTime >= '{$beginTime}' ";
        }
        if($endTime){
            $where .= " and createTime <= '{$endTime}'";
        }
        $total = UserRecord::find()->select("id")->where($where)->groupBy("uid")->count();
        $dataCount = UserRecord::find()->select("id")->where($where)->orderBy("createTime desc")->count();
        $page = new yii\data\Pagination(['totalCount'=>$dataCount,'pageSize'=>10]);
        $data = UserRecord::find()->where($where)->orderBy("createTime desc")->offset($page->offset)->limit($page->limit)->asArray()->all();
        foreach($data as $k => $v){
            $user = User::find()->where("uid = {$v['uid']}")->asArray()->one();
            $data[$k]['phone'] = $user['phone'];
            $data[$k]['nickname'] = $user['nickname'];
            $data[$k]['email'] = $user['email'];
        }
        return $this->render('index',['data'=>$data,'page'=>$page,'total'=>$total]);
    }


}