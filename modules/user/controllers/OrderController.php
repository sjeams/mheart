<?php
/**
 * 分数管理
 * Created by PhpStorm.
 * User: Administrator
 * Date: 15-6-17
 * Time: 下午2:37
 */
namespace app\modules\user\controllers;
use app\modules\user\models\Content;
use app\modules\user\models\User;
use yii;
use app\libs\AppControl;
use app\libs\Method;

class OrderController extends AppControl {
    public $enableCsrfValidation = false;

    /**
     * 用户订单列表
     * @return string
     * @Obelisk
     */
    public function actionIndex()
    {
        $page = Yii::$app->request->get('page',1);
        $beginTime = strtotime(Yii::$app->request->get('beginTime',''));
        $endTime = strtotime(Yii::$app->request->get('endTime',''));
        $id  = Yii::$app->request->get('id','');
        $orderNumber  = Yii::$app->request->get('orderNumber','');
        $status  = Yii::$app->request->get('status','');
        $username = Yii::$app->request->get("username");
        $phone = Yii::$app->request->get("phone");
        $email = Yii::$app->request->get('email');
        $source = Yii::$app->request->get("source");
        $where="uo.orderBelong=6";
        if($beginTime){
            $where .= " AND uo.createTime>=$beginTime";
        }
        if($endTime){
            $where .= " AND uo.createTime<=$endTime";
        }
        if($id){
            $where .= " AND uo.id = $id";
        }
        if($orderNumber){
            $where .= " AND uo.orderNumber = '$orderNumber'";
        }
        if($source){
            if($source==1){
                $where .= " AND uo.source=$source";
            } else{
                $where .= " AND uo.source!=1";
            }
        }
        if($status){
            $where .= " AND uo.status = $status";
        }
        if($username){
            $where .= " and oc.name like '%$username%'";
        }
        $uid = 0;
        $return = 0;
        if($phone){
            $uid = User::find()->where("phone = $phone")->asArray()->one()['uid'];
        }
        if($email){
            if($uid > 0){//有电话搜索条件
                $email_uid = User::find()->where("email = '{$email}'")->asArray()->one()['uid'];
                if($email_uid != $uid){//电话与邮箱的用户不是一个人
                    $return = 1;
                }
            }else{
                $uid = User::find()->where("email = '{$email}'")->asArray()->one()['uid'];
            }
        }
        if($uid > 0 && $return == 0){//uid存在并且电话或邮箱搜索的用户为同一人
            $where .= " and uo.uid = $uid ";
            $userName = User::find()->where("uid = $uid")->asArray()->one()['userName'];
        }
        if($return == 1){
            $data = [];
        }else{
            $data = Method::post("https://order.viplgw.cn/pay/api/toefl-order",['where' => $where,'pageSize' => 10,'page' => $page]);
            $data = json_decode($data,'true');
            if($data){
                foreach($data['data'] as $k => $v){
                    if($uid > 0){//有电话或者邮箱条件搜索
                        $data['data'][$k]['userName'] = isset($userName)?$userName:'';
                    }else{
                        $uid1 = $v['uid'];
                        $data['data'][$k]['userName'] = User::find()->where("uid = $uid1")->asArray()->one()['userName'];
                    }
                }
            }
        }
        $page = Method::getPagedRows(['count'=>$data?$data['count']:0,'pageSize'=>10, 'rows'=>'models']);
        $orderUrl = Yii::$app->request->getUrl();
        Yii::$app->session->set('orderUrl',$orderUrl);
        return $this->render('index',['page' => $page,'data' => $data?$data['data']:[],'total'=>$data?$data['count']:0,'block' => $this->block]);
    }

    /**
     * 订单商品
     * @return string
     * @Obelisk
     */
    public function actionGoods()
    {
        $id = Yii::$app->request->get('id');
        $data = Method::post("https://order.viplgw.cn/pay/api/order-goods",['orderId' =>$id]);
        $data = json_decode($data,'true');
        return $this->render('goods',['data' => $data]);
    }

    //调价
    public function actionDiscount(){
        if($_POST){
            $userId = Yii::$app->session->get('adminId');
            $id = Yii::$app->request->post('id');
            $money = Yii::$app->request->post('money');
            $reason = Yii::$app->request->post('reason');
            if($money == '' || $reason == ''){
                die('<script>alert("请输入调价金额及原因");history.go(-1);</script>');
            }
            $model = new AdminDiscount();
            $model->money = $money;
            $model->reason = $reason;
            $model->orderId = $id;
            $model->userId = $userId;
            $model->createTime = time();
            $model->save();
            $sign = Order::findOne($id);
            $moneyUp = $sign->payable+($money);
            $moneyUp = round($moneyUp ,2);
            Order::updateAll(['payable' => $moneyUp],"id=$id");
            $model = new AdminRecord();
            $model->userId = $userId;
            $model->content = "管理员id($userId),对订单id($id)进行调价金额为($money)";
            $model->createTime = time();
            $model->save();
            $url= Yii::$app->request->post('url');
            $this->redirect($url);
        }else{
            $id = Yii::$app->request->get('id');
            $url= Yii::$app->request->get('url');
            return $this->render('discount',['id' => $id,'url' => $url]);
        }
    }

    /**
     *添加订单
     * @Obelisk
     */
    public function actionAdd(){
        return $this->render('add');
    }

    /**
     * 修改订单
     */
    public function actionAlter(){
        $id = Yii::$app->request->get('id');
        $where="uo.orderBelong=6 AND uo.id = $id";
        $data = Method::post("https://order.viplgw.cn/pay/api/toefl-order",['where' => $where,'pageSize' => 1,'page' => 1]);
        $data = json_decode($data,'true');
        $order = $data['data'][0];
        $order['userName'] = User::find()->where("uid = {$order['uid']}")->asArray()->one()['userName'];
        return $this->render('alter',['order'=>$order]);
    }
    /**
     *  搜索内容
     * by yanni
     */
    public function actionSelectContent(){
        $wordKey = Yii::$app->request->get('wordKey');
        $data = Content::find()->asArray()->where("name like '%{$wordKey}%' and pid!=0")->all();
        if($data){
            $res = ['code'=>1,'message'=>'获取成功','data'=>$data];
        } else{
            $res = ['code'=>1,'message'=>'没有相似内容'];
        }
        die(json_encode($res));
    }
    /**
     * 搜索用户
     * by yanni
     */
    public function actionSelectUser(){
        $nickName = Yii::$app->request->get('nickName');
        $data = User::find()->asArray()->where("nickname like '%{$nickName}%'")->all();
        if($data){
            $res = ['code'=>1,'message'=>'获取成功','data'=>$data];
        } else{
            $res = ['code'=>1,'message'=>'没有相似用户'];
        }
        die(json_encode($res));
    }

}