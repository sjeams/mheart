<?php
/**
 * 首页
 * Created by PhpStorm.
 * User: obelisk
 */
namespace app\modules\cn\controllers;
use app\libs\Method;
use yii\db\ActiveRecord;
use yii;

use app\libs\ApiControl;
use app\modules\cn\models\UserExchange;
 
use yii\data\Pagination;
class UserController extends ApiControl
{
    public $enableCsrfValidation = false;
    public $layout = 'null';
    function init (){
        parent::init();

    }

    /**
     * 跳转图后台
     * by sjeam
     */
    public function actionIndex(){
        $phone = Yii::$app->request->get('phone');
        $username = Yii::$app->request->get('username');
        $beginTime = Yii::$app->request->get('beginTime');
        $endTime = Yii::$app->request->get('endTime');


        $where = "x2_user_information.id!=0"; 
        // if($content){
        //     $where .= " and content like '%".$content."%'";
        // }
        if($phone){
            // $id=intval($uid);
            $where .= " and x2_user_information.phone=$phone";
        }
        if($username){
            $where .= " and x2_user_information.username like '%$username%'";
        }
        if($beginTime){
            $beginTime= strtotime($beginTime);
            $where .= " and x2_user_information.create_time >=  $beginTime";
        }
        if($endTime){
            $endTime= strtotime($endTime);
            $where .= " and x2_user_information.create_time <= $endTime";
        }


        $where .= " order by id desc";

        $count = UserExchange::find()->select("id")->where($where)->count();
        $page = new Pagination(['totalCount'=>$count,'pageSize'=>10]);
        // $brush = UserExchange::find()->where($where)->offset($page->offset)->limit($page->limit)->all();
        //leftjoin查询
        $brush=UserExchange::find()
        // ->leftJoin('x2_content', 'x2_content.id = x2_user_information.contentid')
        ->select('x2_user_information.*')
        ->where($where)->offset($page->offset)->limit($page->limit)->asarray()->all();
        foreach ($brush as $k=>$v){
        //     $num = UserExchange::find()->select("id")->where("uid={$v['uid']}")->count();
        //     $brush[$k]['total'] = $num;
        }
        // var_dump($brush);die;
        return $this->render('index',['content'=>$brush,'page'=>$page]);
    }

    public function actionDetail(){

        $order_id = Yii::$app->request->get('order_id');
        // var_dump( $order_id);die;
        $template = Yii::$app->params['template'];
        $data = UserExchange::find()->where("order_id='$order_id'")->asArray()->one();
        

        $card =array(
            0=>'居民身份证',
            1=>'护照',
            2=>'军官证',
            3=>'港澳通行证',
            4=>'其他',
 
        );

        $list =array(
            0=>'研究生及以上',
            1=>'大学本科',
            2=>'大专和专科',
            3=>'中专',
            4=>'技工学习',
            5=>'高中',
            6=>'初中',
        );
        $data['class'] =  $list[ $data['class']];
        $data['card_type'] =  $card[ $data['card_type']];


        return $this->render('detail',['template'=>$template,'data'=>$data]);
    }

    //修改查看状态
    public function actionUpdatestatus(){
        $id = Yii::$app->request->post('id');
        $status = Yii::$app->request->post('status');
        UserExchange::updateAll(['is_amount'=>$status],"id = $id");
    }


    public function actionDelete(){
        $id = Yii::$app->request->get('id');
        $res = UserExchange::deleteAll("id = $id");
        if($res){
            echo "<script>alert('删除成功。');setTimeout(function(){location.href='index'},1000)</script>";
        }else{
            echo "<script>alert('删除失败');setTimeout(function (){location.href='index'},1000)</script>";
        }
    }

    
    //修改查看状态
    public function actionUseradd(){
        $order_id = Yii::$app->request->post('order_id');
 
        $content = Yii::$app->request->post('content');
        $content =  $content?$content:[];
        // var_dump($content);die;
        UserExchange::updateAll($content,"order_id = '$order_id'");
        // echo "<script>setTimeout(function(){location.href='/cn/user/index'},1000)</script>";
        header("location:/user.html");die;   //结果页
    }

    




}
