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
use app\modules\cn\models\Jian;

use yii\data\Pagination;

class VideoController extends ApiControl
{
    public $enableCsrfValidation = false;
    public $layout = 'null';
    function init (){
        parent::init();
        set_time_limit(0);
    }
    /**
     * 基本信息
     * by  sjeam
     * http://www.mheart.cc/cn/video/reload
     */
    public function actionReload()
    {
        $total =11;
        $belong =4;
        $page = Yii::$app->request->get('page');
        if(!$page){
            $page=$total;
        }else{
            $page = $page-1;
        }
        if($page<=0){
            echo 'ok,采集完成!!';die;
        }
        return $this->render('reload',[ 'page'=>$page,'belong'=>$belong]);
    }


    // /**
    //  * 基本信息
    //  * by  sjeam
    //  * http://www.mheart.cc/cn/video/uploade
    //  */
    // public function actionUploade()
    // {

    //     $belong =2; 
    //     for($page=1;$page<=15;$page++){
    //         $res = Method::curl_post_fix($_SERVER['SERVER_NAME']."/cn/video/updateurl",['belong' => $belong,'page' => $page]);
    //         print_r($res);
    //     }
    //     var_dump('OK');die;
    //     // die(Method::jsonGenerate(1,[],'返回数据成功'));
    // }



    /**
     * 基本信息
     * by  sjeam
     * http://www.mheart.cc/cn/video/updateurl
     */
    public function actionUpdateurl()
    {
        //2 爱播 http://aibozy.com/index.php/vod/type/id/20/page/1.html
        $page = Yii::$app->request->post('page',1);
        $belong = Yii::$app->request->post('belong',4);
        // var_dump($page);
        Video::getQueryList($page,$belong);
        // echo  "第".$page."页，采集完成。</br>";
        die(Method::jsonGenerate(1,[],'返回数据成功'));
    }





  /**
     * 基本信息
     * by  sjeam
     */
    public function actionVideo()
    {
        $this->layout = 'cn';
        // http://wolongzyw.com/index.php/vod/detail/id/41194.html
        $id = Yii::$app->request->get('id',1);
        $m3u8 = Jian::find()->where("id=$id")->asArray()->one();
        $data = Jian::find()->where("name='{$m3u8['name']}'")->orderBy('num asc')->asArray()->all();
        return $this->render('video', ['m3u8'=>$m3u8,'data' =>$data]);
    }

    /**
     * 基本信息
     * by  sjeam
     */
    public function actionIndex()
    {
        $password=1;

        $login = Yii::$app->request->get('login');
        // $belong = Yii::$app->request->get('belong');
        if($login!=$password){
            $login = Yii::$app->session->get('login');
            $belong = Yii::$app->session->get('belong');
            if($login!=$password){
                $belong=0;
            }else{
                $belong=1;
            }
        }else{
            Yii::$app->session->set('login',$password);
            $belong=1;
        }
        
        $type = Yii::$app->request->get('type',0);
        $title = Yii::$app->request->get('title');
        $where ="1=1";

        if($belong ==0){
            $where .= " and belong =$belong"; 
        }
        if($type!=''){
     
            if($type==10){
                // 收藏视频
                $where .= " and up = 1"; 
            }else{
                // 不同类型视频
                $where .= " and type = $type ";
            }

        }
        if($title){
            $where .= " and title like '%$title%'";
        }
        $count = Video::find()->select("id")->where($where)->count();
        // $page = new Pagination(['totalCount'=>$count,'pageSize'=>20]);
        $page = new Pagination(['totalCount'=>$count,'pageSize'=>10]);
        // var_dump($page);die;
        $brush=Video::find()
        // ->leftJoin('x2_content', 'x2_content.id = x2_user_information.contentid')
 
        ->where($where)->offset($page->offset)->limit($page->limit)->orderBy('id desc')->asarray()->all();
        // foreach ($brush as $k=>$v){
        //     $num = UserExchange::find()->select("id")->where("uid={$v['uid']}")->count();
        //     $brush[$k]['total'] = $num;
        // }
        // var_dump($brush);die;
        return $this->render('index',['content'=>$brush,'page'=>$page]);

    }
    /**
     * 基本信息
     * by  sjeam
     * http://www.mheart.cc/cn/video/up
     */
    public function actionUp()
    {
        $id = Yii::$app->request->post('id');
        // var_dump($page);
        $video=Video::find()->where("id =$id ")->one();
        if($video->up==1){
            $video->up=0;
        }else{
            $video->up=1;
        }
        $video->save();
        // echo  "第".$page."页，采集完成。</br>";
        // die(Method::jsonGenerate(1,['up'=>$video->up],'返回数据成功'));
        echo $video->up;
    } 
    /**
     * 基本信息
     * by  sjeam
     * http://www.mheart.cc/cn/video/delete
     */
    public function actionDelete()
    {
        $id = Yii::$app->request->post('id');
        // var_dump($page);
        $video=Video::find()->where("id =$id ")->one();
        $video->delete();
        // echo  "第".$page."页，采集完成。</br>";
        // die(Method::jsonGenerate(1,['up'=>$video->up],'返回数据成功'));
        echo true;
    } 

}
