<?php
/**
 * 分类管理
 * Created by PhpStorm.
 * User: Administrator
 * Date: 15-6-17
 * Time: 下午2:37
 */
namespace app\modules\user\controllers;


use app\modules\cn\models\UserAnswer;
use yii;
use app\libs\AppControl;
use app\libs\Method;
use app\modules\user\models\User;
use app\modules\user\models\UserBlock;
use app\modules\user\models\TestStatistics;

class UserController extends AppControl {
    public $enableCsrfValidation = false;
    //用户列表
    function init (){
        parent::init();
        include_once($_SERVER['DOCUMENT_ROOT'].'/../libs/ucenter/ucenter.php');
    }
    public function actionIndex()
    {
        $page = Yii::$app->request->get('page',1);
        $beginTime = strtotime(Yii::$app->request->get('beginTime',''));
        $endTime = strtotime(Yii::$app->request->get('endTime',''));
        $testEndTime = strtotime(Yii::$app->request->get('doEndTime',''));
        $testBeginTime = strtotime(Yii::$app->request->get('doBeginTime',''));
        $doEndTime = Yii::$app->request->get('doEndTime','');
        $doBeginTime = Yii::$app->request->get('doBeginTime','');
        $id  = Yii::$app->request->get('id','');
        $phone  = Yii::$app->request->get('phone','');
        $email  = Yii::$app->request->get('email','');
        $userName  = Yii::$app->request->get('userName','');
        $nickname  = Yii::$app->request->get('nickname','');
        $min = Yii::$app->request->get("min");
        $max = Yii::$app->request->get("max");
        $where="1=1";
        $testWhere="1=1";
        $sign = 0;
        if($beginTime){
            $where .= " AND u.createTime>=$beginTime";
        }
        if($endTime){
            $where .= " AND u.createTime<=$endTime";
        }
        if($doBeginTime){
            $where .= " AND ua.createTime>=$testBeginTime";
            $sign = 1;
        }
        if($doEndTime){
            $where .= " AND ua.createTime<=$testEndTime";
            $sign = 1;
        }
        if($id){
            $where .= " AND u.id = $id";
        }
        if($phone){
            $where .= " AND u.phone = '$phone'";
        }
        if($email){
            $where .= " AND u.email = '$email'";
        }
        if($userName){
            $where .= " AND u.userName = '$userName'";
        }
        if($nickname){
            $where .= " AND u.nickname = '$nickname'";
        }
        if((!$beginTime || !$endTime) && $endTime-$beginTime>2592000){
            $where = "1=1";
        }
        if($min || $max){
            $sign = 1;
        }
        $model = new User();
        if($sign){
            if($min && !$max){
                $having = " having questionNum >= $min ";
            }
            if($max && !$min){
                $having = " having questionNum <= $max";
            }
            if($max && $min){
                $having = " having questionNum >= $min and questionNum <= $max";
            }
            $data = $model->getAnswerUser($where,10,$page,$having);
        }else{
            if($where == "1=1"){
                $data = [];
            }else{
                $data = $model->getAllUser($where,10,$page);
                foreach($data as $k => $v){
                    if($min && $v['questionNum'] < $min){
                        unset($data[$k]);
                    }
                    if($max && $v['questionNum'] > $max){
                        unset($data[$k]);
                    }
                }
            }
        }
//        var_dump($data);die;
        $page = Method::getPagedRows(['count'=>$data['count'],'pageSize'=>10, 'rows'=>'models']);
        foreach($data['data'] as $k => $v){
            $integral = uc_user_integral($v['userName']);
            $data['data'][$k]['integral'] = $integral['integral']?$integral['integral']:0;
            $data['data'][$k]['integralDetails'] = $integral['details'];
        }
        return $this->render('index',['page' => $page,'data' => $data['data'],'total'=>$data['count'],'block' => $this->block]);
    }

    /**
     * 添加资源
     * @return string
     * @Obelisk
     */
    public function actionAddBlock(){
        $model = new UserBlock();
        if($_POST){
            $id = Yii::$app->request->post('id');
            $block = Yii::$app->request->post('block');
            $model->deleteAll("userId = $id");
            $blockArr = explode(",",$block);
            foreach($blockArr as $v){
                $model = new UserBlock();
                $model->userId = $id;
                $model->blockId = $v;
                $model->save();
            }
            $this->redirect("/user/user/index");
        }else{
            $id = Yii::$app->request->get('id');
            $data = $model->find()->where("userId = $id")->all();
            $blockArr = [];
            foreach($data as $v){
                $blockArr[]=$v['blockId'];
            }
            $blockArr = implode(",",$blockArr);
        }
        return $this->render('addBlock',['block' => $blockArr,'id' => $id]);
    }

    /**
     * 添加用户
     * @return string
     * @throws yii\db\Exception
     * @Obelisk
     */
    public function actionAdd(){
        if($_POST){
            $user = Yii::$app->request->post('user');
            foreach($user as $k=>$v){
                if($k != 'image' && $v != ''){
                    $sign = User::find()->where("$k='$v'")->one();
                    if($sign){
                        die('<script>alert("'.$k.'已被使用");history.go(-1);</script>');
                    }
                }
            }
            $userPass = Yii::$app->request->post('userPass');
            $uid = uc_user_register($user['userName'],md5($userPass),$user['email'],$user['phone'],'托福Pc后台',time());
            if($uid == -3){
                die('<script>alert("用户名已经存在");history.go(-1);</script>');
            }
            elseif($uid == -6){
                die('<script>alert("邮箱已经被注册");history.go(-1);</script>');
            }elseif($uid == -7){
                die('<script>alert("电话已经被注册");history.go(-1);</script>');
            }
            if($uid > 0){
                $remark = Yii::$app->request->post('remark');
                $user['remark'] = $remark;
                $user['userPass'] = md5($userPass);
                $user['createTime'] = time();
                $sign = Yii::$app->db->createCommand()->insert('{{%user}}',$user)->execute();
                if($sign){
                    $this->redirect('/user/user/index');
                }else{
                    die('<script>alert("保存失败，请重试");history.go(-1);</script>');
                }
            }else{
                die('<script>alert("保存失败，请重试");history.go(-1);</script>');
            }

        }else{
            return $this->render('add');
        }
    }

    /**
     * 删除用户
     * @return string
     * @Obelisk
     */
    public function actionDelete(){
        $id = Yii::$app->request->get('id');
        $url = $_GET['url'];
        User::findOne($id)->delete();
        $this->redirect($url);
    }

    /**
     * 修改用户信息
     * @return string
     * @Obelisk
     */
    public function actionUpdate(){
        if($_POST){
            $user = Yii::$app->request->post('user');
            $id = Yii::$app->request->post('id');
            foreach($user as $k=>$v){
                if($k != 'image' && $v != ''){
                    $sign = User::find()->where("$k='$v' AND id!=$id")->one();
                    if($sign){
                        die('<script>alert("'.$k.'已被使用");history.go(-1);</script>');
                    }
                }
            }
            $sign = User::find()->where("phone='{$user['phone']}' AND id=$id")->one();
            if(!$sign){
                $status = uc_user_checkphone($user['phone']);
                if ($status == -7) {
                    die('<script>alert("该手机已被绑定");history.go(-1);</script>');
                }
            }
            $sign = User::find()->where("email='{$user['email']}' AND id=$id")->one();
            if(!$sign){
                $sign = uc_user_checkemail($user['email']);
                if ($sign == -6) {
                    die('<script>alert("该邮箱已被绑定");history.go(-1);</script>');
                }
            }
            $sign = User::findOne($id);
            $userPass = Yii::$app->request->post('userPass');
            $remark = Yii::$app->request->post('remark');
            $user['remark'] = $remark;
            if($sign->userPass != $userPass){
                $user['userPass'] = md5($userPass);
            }
            uc_user_edit($sign->userName,'',$user['userPass'],$user['email'],$user['phone'],1);
            $sign = User::updateAll($user,"id=$id");
            if($sign){
                $this->redirect('/user/user/index');
            }else{
                die('<script>alert("保存失败，请重试");history.go(-1);</script>');
            }
        }else{
            $id = Yii::$app->request->get('id');
            $data = User::findOne($id);
            return $this->render('update',['data' => $data,'id' => $id]);
        }
    }

    /**
     * 积分详情
     * @Obelisk
     */
    public function actionIntegral(){
        $id = Yii::$app->request->get('id');
        $user = User::findOne($id);
        $integral = uc_user_integral($user->userName);
        return $this->render('integral',['integral' => $integral,'id' => $id]);
    }

    /**
     * 积分详情
     * @Obelisk
     */
    public function actionIntegralEdit(){
        if($_POST){
            $userName = Yii::$app->request->post('userName');
            $url = Yii::$app->request->post('url');
            $number = Yii::$app->request->post('number');
            $type = Yii::$app->request->post('type');
            uc_user_edit_integral($userName,'管理员直接调整',$type,$number);
            $this->redirect($url);
        }else{
            $id = Yii::$app->request->get('id');
            $url = Yii::$app->request->get('url');
            $user = User::findOne($id);
            return $this->render('integralEdit',['userName' => $user->userName,'url' => $url]);
        }
    }
    /**
     * 用户订单数据
     * cy
     */
    pubLic function actionUserOrder(){
        $id = Yii::$app->request->get('id');
        $page = Yii::$app->request->get('page',1);
        $uid = User::find()->where("id = $id")->asArray()->one()['uid'];
        $where="uo.orderBelong=6";
        $where .= " and uo.uid = $uid";
        $data = Method::post("https://order.viplgw.cn/pay/api/toefl-order",['where' => $where,'pageSize' => 10,'page' => $page]);
        $userName = User::find()->where("uid = $uid")->asArray()->one()['userName'];
        $data = json_decode($data,'true');
        $page = Method::getPagedRows(['count'=>$data['count'],'pageSize'=>10, 'rows'=>'models']);
        return $this->render('user-order',['data'=>$data['data'],'page'=>$page,'total'=>$data['count'],'userName'=>$userName]);
    }
}