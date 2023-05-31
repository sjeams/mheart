<?php
/**
 * 首页
 * User: sjeam
 */
namespace app\modules\cn\controllers;
use app\libs\Method;
use yii;

use app\libs\VideoApiControl;
use app\modules\cn\models\Video;
use app\modules\cn\models\Jian;

use app\modules\cn\models\VideoList;
use app\modules\cn\models\VideoListDetail;
use app\modules\cn\models\VideoListCollect;

use app\modules\cn\models\Category;
use app\modules\cn\models\CategoryName;
use app\modules\cn\models\Query;
use yii\data\Pagination;
use app\modules\cn\models\WechatUser;
 
class VideoApiController extends VideoApiControl
{
    public $enableCsrfValidation = false;
    public $layout = false;
    // public  $passwordav='111av'; //av
    // public  $passwordsp=111; //视频
    public  $graden=0; //av
    public  $user;
    public  $http_type;
    function init (){
        parent::init();
        // var_dump(111);die;
        set_time_limit(0);
        $this->user = Yii::$app->session->get('userlogin');
        $this->graden= intval($this->user['graden']); // 0未登录
        // 判断http还是https
        $http_type = ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') || (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https')) ? 'https://' : 'http://';
        $this->http_type=  $http_type;
        if(!$this->user){
            die(Method::jsonGenerate(0,[],'user login false!~'));
        }
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

 
 
    public function actionIsBofang()
    {
        $res = WechatUser:: changeBofang($this->user);
        echo $res;
    }
    public function actionIsCache()
    {
        $res = WechatUser:: changeCache($this->user);
        echo $res;
    }
    public function actionVideoModel()
    {
        $res = WechatUser:: changeVideoModel($this->user);
        echo $res;
    }
    // 自动缓存
    public function actionGetCache()
    {
        // 是否开启-自动缓存 0/1
        $get_cache =$this->user['is_cache'];
        // 登录状态
        $graden = $this->graden;
        $page = Yii::$app->request->post('page',1);
        $page_list = Yii::$app->request->post('page_list',1);
        $type = Yii::$app->request->post('type',0);
        $search = Yii::$app->request->post('search','');
        // 搜索类型默认为0
        if($search){  $type=0; }
        $belong = Yii::$app->request->post('belong',0);
        //默认缓存页码
        $setnum = Yii::$app->request->post('setnum',1);
        // 未登录 禁止链接访问
        if($graden==0){
            $belong=0;
        }
        $newpage =$page_list;
        // 影视不进入缓存-开启缓存进入--手动缓存>1时开启缓存
        if($belong!=0&&($get_cache==1|| $setnum>1)){
            // 缓存列表
            for ($i =0; $i <= $setnum; $i++) {
                $newpage= $page_list+$i;
                $sessionStr = 'videolistBelong'.$belong.'page'.$page.'page_list'.$newpage.'type'.$type.'search'.$search; 
                //查询是否有session缓存
                $res = Yii::$app->session->get($sessionStr);
                if(!$res){
                    $res = VideoList::find()->where(" key_value ='$sessionStr' ")->asarray()->one();
                    if(!$res){
                        $listvideo = Video::getQueryList($newpage,$belong,1,$type,$search); // 获取采集数据
                        // var_dump($listvideo);die;
                        $list=[];
                        // 是否分页--改为不分页，直接采集
                        $count = count($listvideo);
                        if($listvideo){
                            $list= VideoListDetail::checkVideo($listvideo,$newpage);
                            $args['key_value'] =$sessionStr;
                            $args['value'] =  json_encode($list,true);
                            $args['time'] =time();
                            $args['count'] =$count;
                            $args['page'] =$page;
                            $args['belong'] =$belong;
                            $args['type'] =$type;
                            $args['search'] =$search;
                            $args['page_list'] =$newpage;
                            // 存入缓存列表
                            Yii::$app->signdb->createCommand()->insert('x2_video_list',$args)->execute();    
                     
                        }else{
                            //为空时，跳出循环
                            die(Method::jsonGenerate(0,$newpage-1,'false'));
                        }
                    }
                }
            }
        } 
        die(Method::jsonGenerate(1,$newpage,'succes'));
    }



    public function actionGetBelong()
    {
        $belong = Yii::$app->request->post('belong',1);
        $type = Yii::$app->request->post('type',0);
        // var_dump( $type);die;
        $str= Category::getBelong($belong,$type);
        die(Method::jsonGenerate(1,$str,'返回数据成功'));
    }
 
    public function actionClearSession()
    {
        $belong = Yii::$app->request->post('belong',5);
        $type = Yii::$app->request->post('type',20);
        $istype = Yii::$app->request->post('istype',0); // 是否只清除当前类型
        if($belong>0){
            $listvideo = Video::getQueryList(1,$belong,1,$type); // 获取采集数据
            // var_dump($listvideo);die;
            if(empty($listvideo)){
                die(Method::jsonGenerate(0,null,'error'));
            }
            if($istype==1){
                session_destroy();
                VideoList::deleteAll(" belong =$belong and (type =$type or type = 0 )");
                die(Method::jsonGenerate(1,null,'succes'));
            }
        } 
        session_destroy();
        VideoList::deleteAll(" belong =$belong ");
        die(Method::jsonGenerate(1,null,'succes'));
    }

    //关键词搜索
    public function actionGetKwords()
    {
        $keyword = VideoList::find()->select('search')->where(" search!='' ")->limit(20)->groupBy("search")->orderBy(" time desc")->asArray()->all(); // 获取采集数据
        die(Method::jsonGenerate(1,$keyword,'succes'));
    }
    /**
     * 采集单条插入喜欢
     * by  sjeam
     */
    public function actionUpdate()
    {
        // http://wolongzyw.com/index.php/vod/detail/id/41194.html

        $args = Yii::$app->request->post();
        if($args['is_collect']==1){
            $title =addslashes($args['title']);
            $video =Video::find()->where("title='$title'")->asarray()->One();
            if($video){
              Video::deleteCollect($video['id']);
            }
        }else{
            unset($args['is_collect']);
            Yii::$app->signdb->createCommand()->insert('x2_video',$args)->execute();
        }
        // var_dump($args);die;
        echo true; 
    }

    /**
     * 采集单条插入收藏
     * by  sjeam
     */
    public function actionMyupdate()
    {
        $args = Yii::$app->request->post();
        // var_dump($args);die;
        $user_id =  $this->user['id'];
        $video_id = $args['video_id'];
        $video=VideoListCollect::find()->where("video_id = $video_id and user_id =$user_id ")->one();
        if($video){
            VideoListCollect::deleteAll(" video_id = $video_id and user_id =$user_id ");
            die(Method::jsonGenerate(0,null,'删除'));
        }else{
            $args['user_id']=$user_id;
            $args['create_time']=time();
            Yii::$app->signdb->createCommand()->insert('x2_video_list_collect',$args)->execute();
            die(Method::jsonGenerate(1,null,'收藏'));
        }
        // var_dump($args);die;
    }

    /**
     * 修改视频报错状态
     * by  sjeam
     */
    public function actionError()
    {
        $id = Yii::$app->request->post('id'); 
        VideoListDetail::videoError($id);
        die(Method::jsonGenerate(1,null,'succes'));
    }



  /**
     * 视频播放器
     * by  sjeam
     */
    public function actionVideo()
    { 
        $sessionkey = Yii::$app->request->get('sessionkey');

        if($sessionkey){
            $key = Yii::$app->request->get('key');
            $num = Yii::$app->request->get('num');
            $num = $num?$num:0;
            $res = VideoList::find()->where(" key_value ='$sessionkey' ")->asarray()->one();
            $list =   json_decode($res['value'],true)[$key];
            // $data = $list['video'];
            $m3u8 = $list['video'][$num];
            // var_dump( $list);die;
            $res=['m3u8'=>$m3u8,'data' =>$list,'sessionkey'=>$sessionkey,'key' =>$key,'do_num' =>$num];
        }else{
            $id = Yii::$app->request->get('id',1);
            $m3u8 = Jian::find()->where("id=$id")->asArray()->one();
            $data = Jian::find()->where("name='{$m3u8['name']}'")->orderBy('num asc')->asArray()->all();
            $res=['m3u8'=>$m3u8,'data' =>$data];
        }
        // http://wolongzyw.com/index.php/vod/detail/id/41194.html
        // var_dump($m3u8);die;
        // var_dump($data);die;
        return $this->render('video', $res);
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
        $code = Video::deleteCollect($id);
        die(Method::jsonGenerate($code,null,'succes'));
    } 

    public function actionAjaxStart()
    {
        die(Method::jsonGenerate(1,null,'succes'));
    }

}
