<?php
/**
 * 音频管理
 * Created by PhpStorm.
 * User: Administrator
 * Date: 15-6-17
 * Time: 下午2:37
 */
namespace app\modules\user\controllers;


use yii;
use app\libs\AppControl;
use app\libs\Method;
use app\modules\user\models\UserAnswer;

class SpeakingController extends AppControl {
    public $enableCsrfValidation = false;
    //音频列表
    public function actionIndex()
    {
        $page = Yii::$app->request->get('page',1);
        $id  = Yii::$app->request->get('id','');
        $userId  = Yii::$app->request->get('userId','');
        $questionId  = Yii::$app->request->get('questionId','');
        $catId  = Yii::$app->request->get('catId','');
        $where="(ua.belong='spoken' || ua.belong='spokenTest')";
        if($id){
            $where .= " AND ua.id = $id";
        }
        if($userId){
            $where .= " AND ua.userId = '$userId'";
        }
        if($questionId){
            $where .= " AND ua.contentId = '$questionId'";
        }
        if($catId){
            $where .= " AND ca.id = '$catId'";
        }
        $model = new UserAnswer();
        $data = $model->getAllSpeaking($where,10,$page);
        $page = Method::getPagedRows(['count'=>$data['count'],'pageSize'=>10, 'rows'=>'models']);
        return $this->render('index',['page' => $page,'data' => $data['data'],'block' => $this->block]);
    }

    /**
     * 添加范例
     * @return string
     * @Obelisk
     */
    public function actionAdd(){
        $model = new UserAnswer();
        if($_POST){
            $speaking = Yii::$app->request->post('speaking');
            if($speaking['contentId'] == ''){
                die('<script>alert("请填写问题Id");history.go(-1);</script>');
            }
            if($speaking['answer'] == ''){
                die('<script>alert("请上传范例音频");history.go(-1);</script>');
            }
            $model->contentId = $speaking['contentId'];
            $model->answer = $speaking['answer'];
            $model->userId = Yii::$app->session->get('adminId');
            $model->createTime = date('Y-m-d H:i:s');
            $model->belong = 'spoken';
            $model->example = 1;
            $model->save();
            $this->redirect('/user/speaking/index');
        }else{
            $id = Yii::$app->request->get('id');
            return $this->render('add',['id' => $id]);
        }
    }

    /**
     * 设定范例
     * @return string
     * @Obelisk
     */
    public function actionExample(){
        $id = Yii::$app->request->get('id');
        $url = Yii::$app->request->get('url');
        $data = UserAnswer::findOne($id);
        if($data->example){
            UserAnswer::updateAll(['example' => 0],"id=$id");
        }else{
            UserAnswer::updateAll(['example' => 1],"id=$id");
        }
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
            $sign = User::findOne($id);
            $userPass = Yii::$app->request->post('userPass');
            $remark = Yii::$app->request->post('remark');
            $user['remark'] = $remark;
            if($sign->userPass != $userPass){
                $user['userPass'] = md5($userPass);
            }
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
}