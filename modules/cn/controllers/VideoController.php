<?php
/*
 * @Author: sjeam
 * @Date: 2023-04-07 10:41:17
 * @Description: 
 */
/**
 * 首页
 * User: sjeam
 */
namespace app\modules\cn\controllers;
use app\libs\Method;
use app\libs\Redis;
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
use app\modules\cn\models\VideoImage;

 
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



 
    /**
     * 首页
     * by  sjeam
     */
    public function actionLike()
    {
        // belong=3 已删
        // 登录状态
        $graden = $this->graden;
        $type = Yii::$app->request->get('type',0);
        $title = Yii::$app->request->get('title');
        $page = Yii::$app->request->get('page',1);
        $where ="1=1";
        //已经没用belong了，只通过type类型查询
        // if($belong == 0){
        //     $where .= " and belong =$belong"; 
        // }

        //2 默认全部
        if($type!=0){
            if($type==11){
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
        // //     $num = UserExchange::find()->select("id")->where("uid={$v['uid']}")->count();
        // //     $brush[$k]['total'] = $num;
        //     // var_dump($v);die;   
        //     //替换第三方错误路径
        //     // $v['imageurl'] = str_replace( 'http://img.ywtuchuang2.com','http://img.lytuchuang20.com',$v['imageurl']);
        //     // $v['imageurl'] = str_replace( 'https://laoyazy54.com','http://img.lytuchuang20.com',$v['imageurl']);
        //     $v['imageurl'] = str_replace( 'https://img.siwapay.com:5278','https://img.siwazywimg2.com:5278',$v['imageurl']);
        //     $v['imageurl'] = str_replace( 'https://img.siwazywimg:5278','https://img.siwazywimg2.com:5278',$v['imageurl']);
        //     $brush[$k]['imageurl'] =  $v['imageurl'];
        // }
        // var_dump($brush);die;
        $data['type']=$type; 
        $data['title']=$title; 
        $data['page']=$page; 
        //来源
  
        $html = Yii::$app->request->get('html',0);
        if($html){
            $this->layout = 'kongbai';
            return $this->render('index_html',['graden'=>$graden,'data'=>$data,'content'=>$brush,'pageStr'=>$pageStr]);
        }else{
            return $this->render('index_html',['graden'=>$graden,'data'=>$data,'content'=>$brush,'pageStr'=>$pageStr]);
        }
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
            $belong=0;
        }
        //默认关键词
        $key_words = VideoList::getKeyWords($belong);
        if($belong==0){
            //视频通过type 区分网站
            if($search=='undefined'||$search==null||empty($search)||$search=="")   $search=$key_words;
            // $type =$type?$type:1;
            $type = Category::getType($belong,$type);  //获取默认type
            if($type==0){  // 错误类型直接回退
                // WechatUser::headerLocation();
                $type = 1;
            }
        }else{
            //采集所有默认类型为0
            if($search){ $type=0; }else{
                $type = Category::getType($belong,$type);  //获取默认type
                if($type==0){  // 错误类型直接回退
                    WechatUser::headerLocation();
                }
            }
        }
        //获取列表
        $sessionStr =VideoList::Md5sessionKey($belong,$page,$page_list,$type,$search);
        $category_id = Category::getCategoryId($belong,$type);
        $res = VideoList::getVideoList($sessionStr,$belong,$type,$page,$search,$page_list,$graden,$this->user['id'],1,$category_id);  //get_cache 浏览时，必定开启缓存
        //来源
        $html = Yii::$app->request->get('html',0);
        if($html==1){
            $this->layout = 'kongbai';
            $res['html'] = $this->render('list',$res );
            // $this->layout = 'cn';
            // var_dump($res);die;
            $this->layout = 'kongbai';
            if($res){
                if($category_id==2){
                //图片
                    return $this->render('list_pic',$res );
                }else{
                //视频
                    return $this->render('list',$res );
                }
            }else{
                return $this->render('kongbai',[]);
            }
        }else  if($html==2){
            //静态加载--不再加载js
            $this->layout = 'kongbai';
            return $this->render('list_html',$res);
        }else{
            //首次加载
            return $this->render('list_html',$res);
        }
    }
    public function actionFalse()
    {
        $this->layout = 'kongbai';
        return $this->render('kongbai',[]);
    }
    /**
     * 我的收藏-快速浏览页面
     * by  sjeam
     */
    public function actionCollectVideo()
    {
        // 登录状态
        $graden = $this->graden; 
        $list =   CategoryName:: CategoryGraden();
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
        ->innerJoin('x2_video_list_detail as a', 'c.video_id = a.id ')
        ->where($where)->one('sign')['num'];
 
        $pageStr = new Pagination(['totalCount'=>$count,'pageSize'=>10]);
        $where .=" and user_id = ".$this->user['id'];
        $brush= (new \yii\db\Query())
        ->select("a.*,c.is_like")
        ->from("x2_video_list_collect as c")
        ->innerJoin('x2_video_list_detail as a', 'c.video_id = a.id ')
        // ->where($where)->offset(($page-1)*$pageSize)->limit($pageSize)->orderBy('create_time desc')->all('sign');
        ->where($where)->offset($pageStr->offset)->limit($pageStr->limit)->orderBy('c.id desc')->all('sign');
        $data['belong']=$belong; 
        $data['type']=$type; 
        $data['title']=$title; 
        $data['page']=$page; 
        $data['count']=ceil($count/10); 
        // var_dump($data['count']);die;
        //来源
        $html = Yii::$app->request->get('html',0);
        // var_dump($list);die;
        if($html==1){
            $this->layout = 'kongbai';
            //列表
            return $this->render('collect_video_list',['graden'=>$graden,'data'=>$data,'list'=>$list,'content'=>$brush,'pageStr'=>$pageStr]);
        }else if($html==2){
            if(!$brush){
                return false;die;
            }
            $this->layout = 'kongbai';
            //全屏
            return $this->render('collect_video_full_screen',['graden'=>$graden,'data'=>$data,'list'=>$list,'content'=>$brush,'pageStr'=>$pageStr]);
        }else{
            $this->layout = 'kongbai';
            //页面
            return $this->render('collect_video',['graden'=>$graden,'data'=>$data,'list'=>$list,'content'=>$brush,'pageStr'=>$pageStr]);
        }
    }



    /**
     * 我的喜欢-快速浏览页面--极品
     * by  sjeam
     */
    public function actionCollectLike()
    {
        // 登录状态
        $graden = $this->graden; 
        $list =   CategoryName:: CategoryGraden();
        $title = Yii::$app->request->get('title');
        $page = Yii::$app->request->get('page',1);
        $type = Yii::$app->request->get('type',0);

        $belong = Yii::$app->request->get('belong',0);
        $where ="1=1 and is_like =1"; //
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
        ->innerJoin('x2_video_list_detail as a', 'c.video_id = a.id ')
        ->where($where)->one('sign')['num'];
        // $count = VideoListCollect::find()->where("$where")->count();
 
        $pageStr = new Pagination(['totalCount'=>$count,'pageSize'=>10]);
        $where .=" and user_id = ".$this->user['id'];
        $brush= (new \yii\db\Query())
        ->select("a.*,c.is_like")
        ->from("x2_video_list_collect as c")
        ->innerJoin('x2_video_list_detail as a', 'c.video_id = a.id ')
        // ->where($where)->offset(($page-1)*$pageSize)->limit($pageSize)->orderBy('create_time desc')->all('sign');
        ->where($where)->offset($pageStr->offset)->limit($pageStr->limit)->orderBy('c.id desc')->all('sign');
        $data['belong']=$belong; 
        $data['type']=$type; 
        $data['title']=$title; 
        $data['page']=$page; 
        $data['count']=ceil($count/10); 
        // var_dump($data['count']);die;
        //来源
        $html = Yii::$app->request->get('html',0);
        // var_dump($list);die;
        if($html==1){
            $this->layout = 'kongbai';
            //列表
            return $this->render('collect_like_list',['graden'=>$graden,'data'=>$data,'list'=>$list,'content'=>$brush,'pageStr'=>$pageStr]);
        }else if($html==2){
            if(!$brush){
                return false;die;
            }
            $this->layout = 'kongbai';
            //全屏
            return $this->render('collect_like_full_screen',['graden'=>$graden,'data'=>$data,'list'=>$list,'content'=>$brush,'pageStr'=>$pageStr]);
        }else{
            $this->layout = 'kongbai';
            //页面
            return $this->render('collect_like',['graden'=>$graden,'data'=>$data,'list'=>$list,'content'=>$brush,'pageStr'=>$pageStr]);
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
        $list =   CategoryName:: CategoryGraden();
        $title = Yii::$app->request->get('title');
        $page = Yii::$app->request->get('page',1);
        $belong = Yii::$app->request->get('belong',0);
        $type = Yii::$app->request->get('type',0);
        $where =" 1=1 ";
        if($belong){
            $where .= " and belong =$belong "; 
        }
        if(intval($type)&&$belong!=0){
            $where .= " and type =$type";
        }
        if($title){
            $where .= " and title like '%$title%' ";
        }
        // // sign  是 sign 数据库
        // $count = VideoListDetail::find()->where("$where")->count();
        $count_sql ="select count(*) as num from x2_video_list_detail where $where";
        $count =Yii::$app->signdb->createCommand($count_sql)->queryOne()['num'];
        $pageStr = new Pagination(['totalCount'=>$count,'pageSize'=>10]);
        $limit = " limit ".($pageStr->offset)*$pageStr->limit.",$pageStr->limit";
        //搜索加快查询，不排序了
        // if(!$title){
            $where.=' order by id desc ' ;
        // } 
        $where.= $limit;
        $user_id =$this->user['id'];
        
        $ids =Yii::$app->signdb->createCommand(" SELECT id FROM x2_video_list_detail  where $where")->queryAll();
        $ids = $ids?implode(",",array_column($ids,"id")):'0' ;
        // $sql =" SELECT  a.*,(CASE WHEN c.video_id != 'NULL'  THEN '1' ELSE '0' END) as my_collect from ( SELECT id FROM x2_video_list_detail  where $where ) s
        // LEFT JOIN  x2_video_list_detail a on  a.id in (s.id)
        // LEFT JOIN x2_video_list_collect c on (c.video_id = a.id   and c.user_id = $user_id )";
       
        $where_new ="  where  a.id in ($ids) ";
        $sql =" SELECT  a.*,(CASE WHEN c.video_id != 'NULL'  THEN '1' ELSE '0' END) as my_collect from  
                x2_video_list_detail a
                LEFT JOIN x2_video_list_collect c on (c.video_id = a.id   and c.user_id = $user_id ) $where_new";
        $brush = Yii::$app->signdb->createCommand($sql)->queryAll();
        $data['belong']=$belong; 
        $data['type']=$type; 
        $data['title']=$title; 
        $data['page']=$page; 
        $data['count']=ceil($count/10 ); 
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
            $this->layout = 'kongbai';
            return $this->render('query_video',['graden'=>$graden,'data'=>$data,'list'=>$list,'content'=>$brush,'pageStr'=>$pageStr]);
        }
    }
    

 

  /**
     * 视频播放器
     * by  sjeam
     */
    public function actionVideo()
    { 
        $sessionkey = Yii::$app->request->get('sessionkey');
        if($sessionkey){
            $key = Yii::$app->request->get('key',0);
            $num = Yii::$app->request->get('num',0);
            $list = VideoList::sessionKeyVideo($sessionkey)[$key];
            $data = $list['video'];
            $list['name'] = $list['title'];
            $list['url'] = $list['video'][$num]['url'];
            unset( $list['video']);
            $res=['m3u8'=>$list,'data' =>$data,'sessionkey'=>$sessionkey,'kss' =>$key+1,'do_num' =>$num];
        }else{
            $id = Yii::$app->request->get('id',1);
            $m3u8 = Jian::find()->where("id=$id")->asArray()->one();
            $data = Jian::find()->where("name='{$m3u8['name']}'")->orderBy('num asc')->asArray()->all();
            $res=['m3u8'=>$m3u8,'data' =>$data,'sessionkey'=>null,'kss' =>1,'do_num' =>0];
        }
        return $this->render('video', $res);
    }
      /**
     * 图片播放器
     * by  sjeam
     */
    public function actionPic()
    { 
        $sessionkey = Yii::$app->request->get('sessionkey');
        $key = Yii::$app->request->get('key',0);
        $num = Yii::$app->request->get('num',0);
        $list = VideoList::sessionKeyVideo($sessionkey)[$key];
        // $data = $list['video'];
        $list['name'] = $list['title'];
        // $list['url'] = $list['video'][$num]['url'];
        // unset($list['video']);
        // var_dump($list);die;
        $res=['content'=>$list['image_list'],'data' =>$list,'sessionkey'=>$sessionkey,'kss' =>$key,'do_num' =>$num];
        $this->layout = 'kongbai';
        return $this->render('pic_full_screen', $res);
    }
    //dplayer 全屏
    public function actionDplay()
    { 
        $url = Yii::$app->request->get('url','https://sd6.taopianplay1.com:43333/c56b1bc09da3/HD/2023-07-29/30/98d556be2572/27980a9cd160/playlist.m3u8');
        // $url='https://sd6.taopianplay1.com:43333/c56b1bc09da3/HD/2023-07-29/30/98d556be2572/27980a9cd160/playlist.m3u8';
        $image = Yii::$app->request->get('image');
        $this->layout = 'kongbai';
        $res=['url'=>$url];
        return $this->render('dplay_full_screen', $res);  
    }

    //第三方链接
    public function actionOtherlink()
    {
        // var_dump(111);die;
        // $this->layout = 'kongbai';
        $url = Yii::$app->request->get('url');
        $res=['url'=>$url];
        return $this->render('other_link',$res);      
    }

}
