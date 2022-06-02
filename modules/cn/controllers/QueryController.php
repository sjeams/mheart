<?php
/**
 * 采集   
 * User: sjeam
 */
namespace app\modules\cn\controllers;
use app\libs\Method;
use yii\db\ActiveRecord;
use yii;
 
use app\libs\ApiControl;
use app\modules\cn\models\Query;
use yii\data\Pagination;
use app\libs\QueryList;
class QueryController extends ApiControl
{
    public $enableCsrfValidation = false;
    public $layout = 'null';
    function init (){
        parent::init();

    }

    public function actionIndex()
    {

        Query::getQueryUrl();

        die(Method::jsonGenerate(1,[],'返回数据成功'));
    }

    // /**
    //  * 基本信息     http://www.mheart.com/cn/video/uploade
    //  * by  sjeam
    //  */
    // public function actionUploade()
    // {

    //     //2 爱播 http://aibozy.com/index.php/vod/type/id/20/page/1.html
    //     $belong =2;   
    //     for($i=1;$i<=15;$i++){
    //         Video::getQueryList($i,$belong);
    //         // echo $i.'<br>';
    //     }
        
    //     die(Method::jsonGenerate(1,[],'返回数据成功'));
    // }




    // /**
    //  * 基本信息
    //  * by  sjeam
    //  */
    // public function actionIndex()
    // {
    
    //     $login = Yii::$app->request->get('login');
    //     // $belong = Yii::$app->request->get('belong');
    //     if($login!=123){
    //         $login = Yii::$app->session->get('login');
    //         $belong = Yii::$app->session->get('belong');
    //         if($login!=123){
    //             $belong=0;
    //         }else{
    //             $belong=1;
    //         }
    //     }else{
    //         Yii::$app->session->set('login',123);
    //         $belong=1;
    //     }
        

    //     $title = Yii::$app->request->get('title');
    //     $where ="1=1";

    //     if($belong ==0){
    //         $where .= " and belong =$belong"; 
    //     }

    //     if($title){
    //         $where .= " and title like '%$title%'";
    //     }
    //     $count = Video::find()->select("id")->where($where)->count();
    //     $page = new Pagination(['totalCount'=>$count,'pageSize'=>10]);
    //     $brush=Video::find()
    //     // ->leftJoin('x2_content', 'x2_content.id = x2_user_information.contentid')
 
    //     ->where($where)->offset($page->offset)->limit($page->limit)->asarray()->all();
    //     foreach ($brush as $k=>$v){
    //     //     $num = UserExchange::find()->select("id")->where("uid={$v['uid']}")->count();
    //     //     $brush[$k]['total'] = $num;
    //     }
    //     // var_dump($brush);die;
    //     return $this->render('index',['content'=>$brush,'page'=>$page]);


    // }
    
    
    


}
