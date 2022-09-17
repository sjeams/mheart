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

use app\modules\cn\models\VideoList;
use app\modules\cn\models\Category;
use app\modules\cn\models\Query;
use yii\data\Pagination;

class VideoController extends ApiControl
{
    public $enableCsrfValidation = false;
    public $layout = 'null';

    public  $passwordav='111av'; //av
    public  $passwordsp=111; //视频
    public  $login=0; //av

    function init (){
        parent::init();
        set_time_limit(0);

        $status= Yii::$app->session->get('login');
        if($status==$this->passwordav){
            $this->login=1;
        }else if($status==$this->passwordsp){
            $this->login=2;
        }else{
            $this->login=0;
        }

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

    public function actionLogin()
    {
        //默认登录
        $login = Yii::$app->request->post('login');
        Yii::$app->session->set('login',$login);
        die(Method::jsonGenerate(1,[],'返回数据成功'));
    }

    /**
     * 第三方列表
     * by  sjeam
     */
    public function actionList()
    {
        // 登录状态
        $login = $this->login;
        $this->layout = 'cn';
 
        $page = Yii::$app->request->get('page',1);
        $page_list = Yii::$app->request->get('page_list',1);
        $type = Yii::$app->request->get('type',0);
        $search = Yii::$app->request->get('search');
        // 搜索类型默认为0
        if($search){  $type=0; }
        $belong = Yii::$app->request->get('belong',0);
        // 未登录 禁止链接访问
        if($login!=1){
            $belong==0;
        }
        if($belong==0){
            if($search=='undefined'||$search==null||empty($search)) $search='我们都是超能力者';
        }
        // 缓存列表
        $sessionStr = 'videolistBelong'.$belong.'page'.$page.'page_list'.$page_list.'type'.$type.'search'.$search;

        // 删除当前缓存
        $clear = Yii::$app->request->get('clear',0);
        if($clear){
            VideoList::deleteAll("key_value ='$sessionStr' ");
        }
        $res = VideoList::find()->where(" key_value ='$sessionStr' ")->asarray()->one();

        if($res){
               $list =   json_decode($res['value'],true);
               $count =$res['count'];
        }else{
    
            if($belong==0){
       
                $list = Query::getVideo($search);
                $count = count($list);
                $args['key_value'] =$sessionStr;
                $args['value'] =  json_encode($list,true);
                $args['time'] =time();
                $args['count'] =$count;
                $args['page'] =$page;
                $args['belong'] =$belong;
                $args['type'] =$type;
                $args['search'] =$search;
                // 存入缓存列表
                Yii::$app->signdb->createCommand()->insert('x2_video_list',$args)->execute();
              
            }else{
       
                $listvideo = Video::getQueryList($page_list,$belong,1,$type,$search); // 获取采集数据
                // var_dump($listvideo);die;
                // $list =	Video::getQueryDetails($v['belong'],$val,$v['type'],$v['http'],$isquery);
                $list=[];
                if($listvideo){
                    foreach($listvideo as$key=> $val){
                        if($key<($page*10)&&$key>=($page-1)*10){
                            $list []= Video::getQueryDetails($val['belong'],$val,$val['type'],$val['http'],1);
                        }
                    }
                    $count = count($listvideo);
                    // var_dump($list);die;
                    $args['key_value'] =$sessionStr;
                    $args['value'] =  json_encode($list,true);
                    $args['time'] =time();
                    $args['count'] =$count;
                    $args['page'] =$page;
                    $args['belong'] =$belong;
                    $args['type'] =$type;
                    $args['search'] =$search;
                    // 存入缓存列表
                    Yii::$app->signdb->createCommand()->insert('x2_video_list',$args)->execute();
                }
            }
        }
        $pageStr = new Pagination(['totalCount'=>$count,'pageSize'=>10]);
        if($login==1){
            $category = Category::Category();
        }else{
            $category = Category::CategoryVideo();
        }
        // var_dump($list);die;
        if($login==0){
            return $this->render('login',['login'=>$login,'content'=>$list,'page'=>$pageStr,'category'=>$category,'sessionkey'=>$sessionStr]);
        }else{
            return $this->render('list',['login'=>$login,'content'=>$list,'page'=>$pageStr,'category'=>$category,'sessionkey'=>$sessionStr]);
        }
    
    }

    public function actionGetBelong()
    {
        $belong = Yii::$app->request->post('belong',0);
        $list = Category::find()->where("belong=$belong")->asArray()->all();
        if($list){
            $type = Category::find()->where("belong=$belong and status=1")->asArray()->one()['type'];
            $str ='<select name="goType" id="goType" onchange="searchfunc()">';
            // $type = Yii::$app->request->post('type',8);
            foreach($list as $v){
                $name =$v['name'];
                $value =$v['type'];
                if($v['belong']==$belong&&$v['type']==$type){
                    $str .= "<option value='$value'  selected > $name </option>";
                }else{
                    $str .= "<option value='$value'  > $name </option>";
                }
            }
            $str .=' </select>';
        }
        // var_dump($str);die;
        // echo $str;
        die(Method::jsonGenerate(1,$str,'返回数据成功'));
    }



  /**
     * 采集单条插入
     * by  sjeam
     */
    public function actionUpdate()
    {
        // http://wolongzyw.com/index.php/vod/detail/id/41194.html
        $args = Yii::$app->request->post();
        // var_dump($args);die;
        Yii::$app->signdb->createCommand()->insert('x2_video',$args)->execute();

    }


  /**
     * 视频播放器
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
     * 首页
     * by  sjeam
     */
    public function actionIndex()
    {
        $this->layout = 'cn';
 
        // 登录状态
        $login = $this->login;
        if($login == 1){
            $login=1;
            $belong=1;
        }else{
            $login=0;
            $belong=0;
        }
 
        $type = Yii::$app->request->get('type',0);
        $title = Yii::$app->request->get('title');
        $where ="1=1";

        if($belong == 0){
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
        return $this->render('index',['login'=>$login,'content'=>$brush,'page'=>$page]);
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
