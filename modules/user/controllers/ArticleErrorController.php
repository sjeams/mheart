<?php
/**
 * 记录管理
 * Created by PhpStorm.
 * User: Administrator
 * Date: 15-6-17
 * Time: 下午2:37
 */
namespace app\modules\user\controllers;


use yii;
use app\libs\AppControl;
use app\libs\App1Control;
use app\libs\Method;
use app\modules\cn\models\ContentErrors;
use app\modules\cn\models\User;
use app\modules\cn\models\UserComment;

class ArticleErrorController extends App1Control {
    public $enableCsrfValidation = false;
    //用户列表
    public function actionIndex()
    {
        $page = Yii::$app->request->get('page',1);
        if(!$page){
            $page = 1;
        }
        $examine = Yii::$app->request->get('examine',0);
        if($examine > 0 && $examine < 3){
            $where = " where ce.examine = $examine";
        }elseif($examine == 3){
            $where = " where ce.examine !=1 and ce.examine != 2";
        }else{
            $where = ' where 1=1';
        }
        $pageSize = 20;
        $model = new ContentErrors();
        $data = $model->getArticleErrors($where,$page,$pageSize);
        foreach($data['data'] as $k=>$v){
            $data['data'][$k]['user'] = User::find()->asArray()->select(['nickname'])->where("uid={$v['uid']}")->one();
        }
        return $this->render('index',['content' => $data['data'],'page' => $data['pageStr'],'block' => $this->block]);
    }

    /**
     * 审核
     * @return string
     * @Obelisk
     */
    public function actionExamine(){
        include_once($_SERVER['DOCUMENT_ROOT'].'/../libs/ucenter/ucenter.php');
        $examine = Yii::$app->request->get('examine');
        if($examine){
            $id = Yii::$app->request->get('id');
            $errData = ContentErrors::find()->asArray()->select(['uid','reward'])->where("id=$id")->one();
            $r = ContentErrors::updateAll(['examine'=>$examine,'reward'=>1],"id=$id");
            if($r>0){
                if($errData['reward']!=1){
                    uc_user_edit_integral1($errData['uid'],'文章错误反馈奖励',1,2);
                }
                $url = Yii::$app->session->get('url');
                return $this->redirect("$url");
            } else{
                die('<script>alert("操作失败");history.go(-1);</script>');
            }
        } else{
            $id = Yii::$app->request->get('id');
            $url = strstr(Yii::$app->request->getUrl(),'url=');
            Yii::$app->session->set('url',substr($url,4));
            $res = ContentErrors::find()->asArray()->where("id={$id}")->one();
            return $this->render('examine',['data' => $res]);
        }
    }

    /**
     * 删除
     * @return string
     * @Obelisk
     */

    public function actionDelete(){
        $id = Yii::$app->request->get('id');
        $res = ContentErrors::findOne($id)->delete();
        if($res){
            $re = ['code'=>1,'message'=>'删除成功'];
        } else{
            $re = ['code'=>0,'message'=>'删除失败'];
        }
        die(json_encode($re));
    }

}