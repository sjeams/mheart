<?php
/**
 * 首页
 * User: sjeam
 */
namespace app\modules\cn\controllers;
use app\libs\Method;
use yii\db\ActiveRecord;
use yii;

use app\libs\ApiControl;
use app\modules\cn\models\Video;
use yii\data\Pagination;

class VideoController extends ApiControl
{
    public $enableCsrfValidation = false;
    public $layout = 'null';
    function init (){
        parent::init();

    }

    /**
     * 基本信息
     * by  sjeam
     */
    public function actionUploade()
    {

        //2 爱播 http://aibozy.com/index.php/vod/type/id/20/page/1.html
        $belong =2;   
        for($i=1;$i<=90;$i++){
            Video::getQueryList($i,$belong);
            // echo $i.'<br>';
        }
        
        die(Method::jsonGenerate(1,[],'返回数据成功'));
    }




    
    /**
     * 基本信息
     * by  sjeam
     */
    public function actionIndex()
    {
    
        $login = Yii::$app->request->get('login');
        
        if($login!=123){
            die;
        }

        $title = Yii::$app->request->get('title');
        $where ="1=1";

        if($title){
            $where .= " and title like '%$title%'";
        }
        $count = Video::find()->select("id")->where($where)->count();
        $page = new Pagination(['totalCount'=>$count,'pageSize'=>10]);
        $brush=Video::find()
        // ->leftJoin('x2_content', 'x2_content.id = x2_user_information.contentid')
 
        ->where($where)->offset($page->offset)->limit($page->limit)->asarray()->all();
        foreach ($brush as $k=>$v){
        //     $num = UserExchange::find()->select("id")->where("uid={$v['uid']}")->count();
        //     $brush[$k]['total'] = $num;
        }
        // var_dump($brush);die;
        return $this->render('index',['content'=>$brush,'page'=>$page,'login'=>$login]);


    }
    


}
