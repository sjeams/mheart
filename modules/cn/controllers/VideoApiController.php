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

use app\modules\cn\models\VideoImage;

use QL\QueryList;
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Headers: content-type,x-requested-with,Authorization, x-ui-request,lang');
header('Access-Control-Allow-Credentials: true;');

header('P3P: CP="CURa ADMa DEVa PSAo PSDo OUR BUS UNI PUR INT DEM STA PRE COM NAV OTC NOI DSP COR"');
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
    //  * http://www.mheart.cc/cn/video-api/uploade
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
     * 测试接口
     * by  sjeam
     * http://cs.aheart.com/cn/video-api/url-test
     */
    public function actionUrlTest()
    {

        //    $file_base =new VideoImage();
        //    $baseid =  $file_base->addBaseImage('http://img.lytuchuang9.com/upload/vod/20230201-1/1ecd299d59e3148a611e30a0a5154a81.jpg');
        //    var_dump( $baseid);die;
 
        //2 爱播 http://aibozy.com/index.php/vod/type/id/20/page/1.html
        $page = Yii::$app->request->post('page',1);
        $belong = Yii::$app->request->post('belong',2);
        $type = Yii::$app->request->post('belong',1); 
        // var_dump($page);
        $list=array(   
            // array(4,0,'主播',"/type/2.html",'https://436727.166477.com'),
            // array(3,0,'主播',"/index.php/vod/type/id/39/page/1.html",'https://www.sewoav.cc'),
            array($belong,$type,'丝袜',"/index.php/vod/type/id/$type/page/$page.html",'https://lyzyz66.com'),
            
        );
        //键值处理
        foreach($list as$key=> $v){
        $data[$key]['belong']= $v[0]; // 1【鸡婆TV】 本站永久域名www.jipotv.com
        $data[$key]['type']=	$v[1];  // 类型  --0 主播   1 电影  2 影视剧
        $data[$key]['title']=$v[2];
        $data[$key]['url']=	$v[3];
        $data[$key]['http']=$v[4];
        }

        $content1= array('  ','href','');
        $content2= array('  .txt p','html','');
        $content3= array('  .pic>img','data-original','');
        $rules=array(
            'url' =>  $content1,
            'title' => $content2,
            'imageurl' => $content3,
        );
        $rang='  .vods .vod';
        $httpurl =$data[0]['http'].$data[0]['url'];
        $data = QueryList::get($httpurl)->getHtml();
        // print($data);die;
        // $html = strip_tags($data);
        echo $data;
        die;
        // var_dump($httpurl);die;
        // intval()
        // https://cdn73.com:10073/13819/index.m3u8
        $ql = QueryList::rules($rules);
        $data =$ql->get($httpurl)->range($rang)->queryData();
        $ql->destruct();
        // $data = QueryList::get($httpurl)->getHtml(); ;
        // echo $data;
        var_dump($data);die;
        // Video::getQueryList($page,$belong);
        // echo  "第".$page."页，采集完成。</br>";
        die(Method::jsonGenerate(1,[],'返回数据成功'));
    }
    /**
     * 基本信息
     * by  sjeam
     * http://cs.aheart.com/cn/video-api/updateurl
     */
    public function actionUpdateurl()
    {
        //2 爱播 http://aibozy.com/index.php/vod/type/id/20/page/1.html
        $page = Yii::$app->request->post('page',1);
        $belong = Yii::$app->request->post('belong',2);
        // var_dump($page);
        Video::getQueryListModel($page,$belong);
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
        // 是否开启-自动缓存 0/1 --- 关闭缓存模式后，不写入缓存记录
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
        //批量插入
        // $is_cache = Yii::$app->request->post('is_cache',0); //0单独插入 2 开启自动缓存--批量插入
        // if($is_cache==2){
        //     Yii::$app->params['insertVideo_iscache']=1;
        // }else{
        //     Yii::$app->params['insertVideo_iscache']=0;
        // }

        // var_dump($is_cache);die;
        // 未登录 禁止链接访问
        if($graden==0){
            $belong=0;
        }
        $newpage =$page_list;
        // $belong =5; 
        // $setnum =1;
        // $type =24;
        // $page_list =510;
        // 影视不进入缓存-开启缓存进入--手动缓存>1时开启缓存
        $category_id = Category::getCategoryId($belong,$type);
        if($belong!=0&&($get_cache==1|| $setnum>0)){
            // 缓存列表
            for ($i =0; $i <= $setnum; $i++) {
                $newpage= $page_list+$i;
                $sessionStr =VideoList::Md5sessionKey($belong,$page,$page_list,$type,$search);
                //缓存中没有，那么就重新存如入session
                //改到公共方法
                $res = VideoList::getVideoList($sessionStr,$belong,$type,$page,$search,$newpage,$graden,$this->user['id'],$get_cache,$category_id);
                if(!$res['content']){
                    //为空时，跳出循环
                    die(Method::jsonGenerate(0,$newpage-1,'false')); 
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
        $belong = Yii::$app->request->post('belong',1);
        $type = Yii::$app->request->post('type',33);
        $istype = Yii::$app->request->post('istype',1); // 是否只清除当前类型
        if($istype==2){            
            //直接清除缓存了
            // session_destroy();
            VideoList::clearSessionAll(); //清空所有缓存
            die(Method::jsonGenerate(1,null,'succes'));
        }else{
            VideoList::clearSession($istype,$belong,$type);
            if($belong>0){
                // $listvideo = Video::getQueryListModel(1,$belong,1,$type); // 获取采集数据
                $list =Video::getQueryUrl(1,$belong,$type);
                //默认第一页有效地址
                try {
                    //请求访问url
                    // var_dump($list['http'].$list['url']);
                    $httpurl =$list['http'].$list['url'];
                    QueryList::get($httpurl)->getHtml();
                    // $is_show =true;
                    CategoryName::updateAll(['status' => 1], "belong = $belong");
                    die(Method::jsonGenerate(1,null,'succes'));
                } catch (\Exception $e) {
                    // $is_show =false;
                    CategoryName::updateAll(['status' => 0], "belong = $belong");
                    die(Method::jsonGenerate(0,null,'error'));
                }
            }
        }
    }
 
    //清除指定搜索内容
    public function actionClearSearch()
    {
        $search = Yii::$app->request->post('search','');
        $belong = Yii::$app->request->post('belong',0);
        $type = Yii::$app->request->post('type',0);
        // session_destroy();
        VideoList::clearSerach($search,$belong,$type);
        die(Method::jsonGenerate(1,null,'succes'));
    }

    //关键词搜索
    public function actionGetKwords()
    {
        $belong = Yii::$app->request->post('belong',0);
        $keyword = VideoList::getKwordsList($belong);
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
    public function actionUpdateCategoryStatus()
    {
        $args = Yii::$app->request->post();
        $belong = $args['belong'];
        $category_name = CategoryName::findOne(['belong'=>$belong]);
        if($category_name->status==0){
            $status=1;

        }else{
            $status=0;
        }
        $category_name->status=$status;  
        $category_name->save();
        die(Method::jsonGenerate(1,$status,'收藏'));
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
            Yii::$app->signdb->createCommand()->insert('x2_video_list_collect',$args)->execute();
            die(Method::jsonGenerate(1,null,'收藏'));
        }
        // var_dump($args);die;
    }
    /**
     * 采集单条插入极品收藏
     * by  sjeam
     */
    public function actionLikeUpdate()
    {
        $args = Yii::$app->request->post();
        // var_dump($args);die;
        $user_id =  $this->user['id'];
        $video_id = $args['video_id'];
        $video=VideoListCollect::find()->where("video_id = $video_id and user_id =$user_id ")->one();
        $is_like =$video->is_like;
        if($is_like){
            $video->is_like=0;
            $video->update();
            // VideoListCollect::updateAll(" video_id = $video_id and user_id =$user_id","is_like = 0");
            die(Method::jsonGenerate(0,null,'收藏'));
        }else{
            $video->is_like=1;
            $video->update();
            // VideoListCollect::updateAll(" video_id = $video_id and user_id =$user_id","is_like = 1");
            die(Method::jsonGenerate(1,null,'取消收藏'));
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
