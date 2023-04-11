<?php
/**
 * 首页
 * User: sjeam
 */
namespace app\modules\cn\controllers;
use app\libs\Method;
use app\libs\ImageBase64;
use yii\db\ActiveRecord;
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

 
class VideoController extends VideoApiControl
{
    public $enableCsrfValidation = false;
    public $layout = 'cn';
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
            $href =$http_type.$_SERVER['SERVER_NAME'].'/cn/login/login';
            header('Location: '.$href);die;
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

 
 
    /**
     * 首页
     * by  sjeam
     */
    public function actionLike()
    {
        
        // 登录状态
        $graden = $this->graden;
        if($graden!=0){
            $belong=1;
            $list = Category::find()->where("belong=0")->asArray()->all();
        }else{
            $graden=0;
            $belong=0;
            $list = [];
        }
        $type = Yii::$app->request->get('type','all');
        $title = Yii::$app->request->get('title');
        $page = Yii::$app->request->get('page',1);
        $where ="1=1";

        if($belong == 0){
            $where .= " and belong =$belong"; 
        }
        if($type!='all'){
     
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
        // $pageStr = new Pagination(['totalCount'=>$count,'pageSize'=>20]);
        $pageStr = new Pagination(['totalCount'=>$count,'pageSize'=>10]);
        // var_dump($page);die;
        $brush=Video::find()
        // ->leftJoin('x2_content', 'x2_content.id = x2_user_information.contentid')
        ->where($where)->offset($pageStr->offset)->limit($pageStr->limit)->orderBy('id desc')->asarray()->all();
        // foreach ($brush as $k=>$v){
        //     $num = UserExchange::find()->select("id")->where("uid={$v['uid']}")->count();
        //     $brush[$k]['total'] = $num;
        // }
        $data['type']=$type; 
        $data['title']=$title; 
        $data['page']=$page; 
        //来源
  
        $html = Yii::$app->request->get('html',0);
        if($html){
            $this->layout = 'kongbai';
            return $this->render('html',['graden'=>$graden,'data'=>$data,'list'=>$list,'content'=>$brush,'pageStr'=>$pageStr]);
        }else{
            return $this->render('index_html',['graden'=>$graden,'data'=>$data,'list'=>$list,'content'=>$brush,'pageStr'=>$pageStr]);
        }
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
                $res = VideoList::find()->where(" key_value ='$sessionStr' ")->asarray()->one();
                if(!$res){
                    $listvideo = Video::getQueryList($newpage,$belong,1,$type,$search); // 获取采集数据
                    // var_dump($listvideo);die;
                    $list=[];
                    // 是否分页--改为不分页，直接采集
                    $count = count($listvideo);
                    if($listvideo){
                        $list= VideoListDetail::checkVideo($listvideo);
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
        die(Method::jsonGenerate(1,$newpage,'succes'));
    }


    /**
     * 第三方列表
     * by  sjeam
     */
    public function actionList()
    {
        if(!$this->user){
            return $this->render('login');die;
        }
        // 登录状态
        $graden = $this->graden;
        $page = Yii::$app->request->get('page',1);
        $page_list = Yii::$app->request->get('page_list',1);
        $type = Yii::$app->request->get('type',0);
        $search = Yii::$app->request->get('search','');
        // 搜索类型默认为0
        $belong = Yii::$app->request->get('belong',0);
        // 未登录 禁止链接访问
        if($graden==0){
            if($belong!=0){
                $type=1;
            }
            $belong=0;
        }
        if($belong==0){
            //视频通过type 区分网站
            if($search=='undefined'||$search==null||empty($search)||$search=="") $search='龙珠';
            $type =$type?$type:1;
        }else{
            //采集所有默认类型为0
            if($search){ $type=0; }else{
                if($type==0){  // 错误类型直接回退
                    WechatUser::headerLocation();
                }
            }
        }
        // 缓存列表
        $sessionStr = 'videolistBelong'.$belong.'page'.$page.'page_list'.$page_list.'type'.$type.'search'.$search;
        // // 删除当前缓存
        $clear = Yii::$app->request->get('clear',0);
        if($clear){
            VideoList::deleteAll("key_value ='$sessionStr' ");
        }
        $res = VideoList::find()->where(" key_value ='$sessionStr' ")->asarray()->one();
        if($res){
               $list =  json_decode($res['value'],true);
               $count = $res['count'];
        }else{
            if($belong==0){
                $list = Query::getVideo($search,$type);
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
            //    var_dump($type);die;
                $listvideo = Video::getQueryList($page_list,$belong,1,$type,$search); // 获取采集数据
                // var_dump($listvideo);die;
                $list=[];
                // 是否分页--改为不分页，直接采集
                $count = count($listvideo);
                // $pageSize=20;
                // $pageSize= $count;
                if($listvideo){
                    $list= VideoListDetail::checkVideo($listvideo);
                    $args['key_value'] =$sessionStr;
                    $args['value'] =  json_encode($list,true);
                    $args['time'] =time();
                    $args['count'] =$count;
                    $args['page'] =$page;
                    $args['belong'] =$belong;
                    $args['type'] =$type;
                    $args['search'] =$search;
                    $args['page_list'] =$page_list;
                    // 存入缓存列表
                    Yii::$app->signdb->createCommand()->insert('x2_video_list',$args)->execute();
                }
            }
        }
        if($belong!=0){ // 影视不进入
            // 采集查询-标题-是否收藏
            $list=  Video::isCollect($list,$this->user['id']);
        }
        // var_dump($list);die;
        // $pageStr = new Pagination(['totalCount'=>$count,'pageSize'=>10]);
        if($graden==1){
            $category = CategoryName::Category();
        }else{
            $category = CategoryName::CategoryVideo();
        }
        // var_dump($type);die;
        $data['page']=$page;
        $data['type']=$type;
        $data['page_list']=$page_list;
        $data['search']=$search;
        $data['belong']=$belong;
        $data['issearch']=$category[$belong]['issearch'];
        // var_dump( $count);die;
        //是否有下一页
        $isnext = VideoList::getIsNext($belong,$type,$count); // 获取采集数据
     
        $html = Yii::$app->request->get('html',0);
        if($html){
            $this->layout = 'kongbai';
            return $this->render('list',['isnext'=>$isnext,'data'=>$data ,'graden'=>$graden,'content'=>$list, 'category'=>$category,'sessionkey'=>$sessionStr]);
        }else{
            $categoryBelong = Category::getBelong($belong,$type);
            return $this->render('list_html',['isnext'=>$isnext,'data'=>$data ,'graden'=>$graden,'content'=>$list, 'category'=>$category,'sessionkey'=>$sessionStr,'categoryBelong'=>$categoryBelong]);
        }
 
    
    }

    /**
     * 我的收藏-快速浏览页面
     * by  sjeam
     */
    public function actionCollectVideo()
    {
        // 登录状态
        $graden = $this->graden; 
        $list =   CategoryName::find()->where("belong!=0")->asArray()->all();
        $title = Yii::$app->request->get('title');
        $page = Yii::$app->request->get('page',1);
        $type = Yii::$app->request->get('type',0);

        $belong = Yii::$app->request->get('belong',0);
        $where ="1=1";
        if($belong){
            $where .= " and a.belong =$belong"; 
        }
        if(intval($type)&&$belong!=0){
            $where .= " and a.type =$type"; 
        }
        if($title){
            $where .= " and a.title like '%$title%'";
        } 
        $count= (new \yii\db\Query())
        ->select("count(1) as num")
        ->from("x2_video_list_collect as c")
        ->leftJoin('x2_video_list_detail as a', 'c.video_id = a.id ')
        ->where($where)->one('sign')['num'];
        // $pageSize=10;
        // $pageStr = new Pagination(['totalCount'=>$count,'pageSize'=>$pageSize]);
        $pageStr = new Pagination(['totalCount'=>$count,'pageSize'=>10]);
        $where .=" and user_id = ".$this->user['id'];
        $brush= (new \yii\db\Query())
        ->select("a.*")
        ->from("x2_video_list_collect as c")
        ->leftJoin('x2_video_list_detail as a', 'c.video_id = a.id ')
        // ->where($where)->offset(($page-1)*$pageSize)->limit($pageSize)->orderBy('create_time desc')->all('sign');
        ->where($where)->offset($pageStr->offset)->limit($pageStr->limit)->orderBy('c.create_time desc')->all('sign');
        $data['belong']=$belong; 
        $data['type']=$type; 
        $data['title']=$title; 
        $data['page']=$page; 
        $data['count']=ceil($count/10); 
        // var_dump($data['count']);die;
        //来源
        $html = Yii::$app->request->get('html',0);
        // var_dump($brush);die;

        if($html==1){
            $this->layout = 'kongbai';
            return $this->render('collect_video_list',['graden'=>$graden,'data'=>$data,'list'=>$list,'content'=>$brush,'pageStr'=>$pageStr]);
        }else if($html==2){
            if(!$brush){
                return false;die;
            }
            $this->layout = 'kongbai';
            return $this->render('collect_video_full_screen',['graden'=>$graden,'data'=>$data,'list'=>$list,'content'=>$brush,'pageStr'=>$pageStr]);
        }else{
            return $this->render('collect_video',['graden'=>$graden,'data'=>$data,'list'=>$list,'content'=>$brush,'pageStr'=>$pageStr]);
        }
    }


      /**
     * 我的收藏-快速浏览页面
     * by  sjeam
     */
    public function actionQueryVideo()
    {
        // 登录状态
        $graden = $this->graden; 
        $list =   CategoryName::find()->where("belong!=0")->asArray()->all();
        $title = Yii::$app->request->get('title');
        $page = Yii::$app->request->get('page',1);
        $belong = Yii::$app->request->get('belong',0);
        $type = Yii::$app->request->get('type',0);
        $where ="1=1";
        if($belong){
            $where .= " and a.belong =$belong"; 
        }
        if(intval($type)&&$belong!=0){
            $where .= " and a.type =$type"; 
        }
        if($title){
            $where .= " and a.title like '%$title%'";
        } 
        $count= (new \yii\db\Query())
        ->select("count(1) as num")
        ->from("x2_video_list_detail as a")
        // ->leftJoin('x2_video_list_collect as c', "c.video_id = a.id   and user_id = ".$this->user['id'])
        ->where($where)->one('sign')['num'];
        $pageStr = new Pagination(['totalCount'=>$count,'pageSize'=>10]);
        // $where .=" and user_id = ".$this->user['id'];
        $brush= (new \yii\db\Query())
        ->select("a.*,(CASE WHEN c.video_id != 'NULL'  THEN '1' ELSE '0' END) as my_collect ")
        ->from("x2_video_list_detail as a")
        ->leftJoin('x2_video_list_collect as c', "c.video_id = a.id   and user_id = ".$this->user['id'])
        ->where($where)->offset($pageStr->offset)->limit($pageStr->limit)->orderBy('id desc')->all('sign');
        $data['belong']=$belong; 
        $data['type']=$type; 
        $data['title']=$title; 
        $data['page']=$page; 
        $data['count']=ceil($count/10 ); 
        // var_dump($brush);die;
        // var_dump($data['count']);die;
        //来源
        $html = Yii::$app->request->get('html',0);
        if($html){
            // var_dump(111);die;
            $this->layout = 'kongbai';
            if($list){
                return $this->render('query_video_list',['graden'=>$graden,'data'=>$data,'list'=>$list,'content'=>$brush,'pageStr'=>$pageStr]);
            }else{
                return '';
            }
        }else{
            return $this->render('query_video',['graden'=>$graden,'data'=>$data,'list'=>$list,'content'=>$brush,'pageStr'=>$pageStr]);
        }
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
                VideoList::deleteAll(" belong =$belong and type =$type");
                die(Method::jsonGenerate(1,null,'succes'));
            }
        } 
        VideoList::deleteAll(" belong =$belong ");
        die(Method::jsonGenerate(1,null,'succes'));
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
