<?php
namespace app\modules\user\controllers;


use yii;
use app\libs\AppControl;
use app\libs\Method;
use app\modules\user\models\QuestionContent;
use app\modules\user\models\UserBlock;
use app\modules\user\models\TestStatistics;

class QuestionController extends AppControl
{
    public $enableCsrfValidation = false;

    function init (){
        parent::init();
        include_once($_SERVER['DOCUMENT_ROOT'].'/../libs/ucenter/ucenter.php');
    }
    public function actionIndex()
    {
        $id  = Yii::$app->request->get('id','');    //ID
        $phone  = Yii::$app->request->get('phone',''); //电话
        $email  = Yii::$app->request->get('email','');  //邮箱
        $userName  = Yii::$app->request->get('userName','');   //提问用户
        $beginTime = Yii::$app->request->get('beginTime','');    //开始时间
        $endTime = Yii::$app->request->get('endTime','');       //结束时间
        $questionType = Yii::$app->request->get('questionType','');    //问题分类
        $page  = Yii::$app->request->get('page','');
        $where="type=1";
        if($beginTime){
            $where .= " AND q.addTime>='$beginTime'";
        }
        if($endTime){
            $where .= " AND q.addTime<='$endTime'";
        }
        if($id){
            $where .= " AND q.id = $id";
        }
        if($phone){
            $where .= " AND u.phone = '$phone'";
        }
        if($email){
            $where .= " AND u.email = '$email'";
        }
        if($userName){
            $where .= " and u.userName like '%".$userName."%'";
        }
        if($questionType){
            $where .= " AND q.questionType = '$questionType'";
        }
        $model = new QuestionContent();
        $data = $model->getProblem($where,10,$page);
        return $this->render('index',['page' => $page,'data' => $data['data'],'block' => $this->block]);
    }
    /**
     * 问题添加
     * @return string
     * by  yanni
     */
    public function actionAdd()
    {
        if($_POST){
            $question = Yii::$app->request->post('question');
            $sign = Yii::$app->db->createCommand()->insert('{{%question_content}}',$question)->execute();
            if($sign){
                $this->redirect('/user/question/index');
            }else{
                die('<script>alert("保存失败，请重试");history.go(-1);</script>');
            }
        } else {
            return $this->render('add');
        }
    }
    /**
     * 问题回答
     * @return string
     * by  yanni
     */
    public function actionAcontent()
    {
        $id  = Yii::$app->request->get('id','');    //ID
        $page  = Yii::$app->request->get('page','');
        $type  = Yii::$app->request->get('type','');
        $where = "type=".$type;
        if($id){
            $where .= " AND q.pid = $id";
        }
        $model = new QuestionContent();
        $data = $model->getProblem($where,10,$page);
        $page = Method::getPagedRows(['count'=>$data['count'],'pageSize'=>10, 'rows'=>'models']);
        return $this->render('content',['page' => $page,'data' => $data['data'],'block' => $this->block]);
    }
    /**
     * 问题修改
     * @return string
     * by  yanni
     */
    public function actionUpdate()
    {
        if($_POST){
            $id = Yii::$app->request->post('id');
            $question = Yii::$app->request->post('question');
            $sign = QuestionContent::updateAll($question,"id=$id");
            if($sign){
                $this->redirect('/user/question/index');
            }else{
                die('<script>alert("保存失败，请重试");history.go(-1);</script>');
            }
        }else{
            $id  = Yii::$app->request->get('id','');    //ID
            $type  = Yii::$app->request->get('type','');
            $where = "type=".$type;
            if($id){
                $where .= " AND q.id = $id";
            }
            $model = new QuestionContent();
            $data = $model->getProblem($where,'','');
//            var_dump($data['data']);die;
            return $this->render('update',['data'=>$data['data']]);
        }
    }
    /**
     * 问题删除
     * @return string
     * by  yanni
     */
    public function actionDelete()
    {
        $id = Yii::$app->request->get('id');
        $res = QuestionContent::findOne($id)->delete();
        if($res){
            return $this->redirect('/user/question/index');
        }
    }
}