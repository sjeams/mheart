<?php
/**
 * 首页
 * User: sjeam
 */
namespace app\modules\cn\controllers;
use app\libs\Method;
use yii\db\ActiveRecord;
use yii;

use app\libs\VideoApiControl;
use app\modules\cn\models\Video;
use app\modules\cn\models\Jian;

use app\modules\cn\models\VideoList;
use app\modules\cn\models\Category;
use app\modules\cn\models\Query;
use yii\data\Pagination;
use app\modules\cn\models\WechatUser;
class VideoController extends VideoApiControl
{
    public $enableCsrfValidation = false;
    public $layout = 'cn';
    // public  $passwordav='111av'; //av
    // public  $passwordsp=111; //视频
    public  $login=0; //av
    public  $user;
    function init (){
        parent::init();
        // var_dump(111);die;
        set_time_limit(0);
        $this->user = Yii::$app->session->get('userlogin');
        $this->login= intval($this->user['graden']); // 0未登录
        if(!$this->user){
            // 判断http还是https
            $http_type = ((isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') || (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] == 'https')) ? 'https://' : 'http://';
            $href =$http_type.$_SERVER['SERVER_NAME'].'/cn/login/login';
            header('Location: '.$href);die;
        }
        // $status= Yii::$app->session->get('login');
        // if($status==$this->passwordav){
        //     $this->login=1;
        // }else if($status==$this->passwordsp){
        //     $this->login=2;
        // }else{
        //     $this->login=0;
        // }
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

    // public function actionLogin()
    // {
        //默认登录
        // $login = Yii::$app->request->post('login');
        // Yii::$app->session->set('login',$login);
        // die(Method::jsonGenerate(1,[],'返回数据成功'));
 
    // }
 
    /**
     * 首页
     * by  sjeam
     */
    public function actionIndex()
    {
        // 登录状态
        $login = $this->login;
        if($login!=0){
            $belong=1;
            $list = Category::find()->where("belong=0")->asArray()->all();
        }else{
            $login=0;
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
        return $this->render('index',['login'=>$login,'data'=>$data,'list'=>$list,'content'=>$brush,'pageStr'=>$pageStr]);
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
        $login = $this->login;
        $page = Yii::$app->request->get('page',1);
        $page_list = Yii::$app->request->get('page_list',1);
        $type = Yii::$app->request->get('type',0);
        $search = Yii::$app->request->get('search','');

        // 搜索类型默认为0
        if($search){  $type=0; }
        $belong = Yii::$app->request->get('belong',0);
        // 未登录 禁止链接访问
        if($login==0){
            $belong=0;
        }
        
        if($belong==0){
            if($search=='undefined'||$search==null||empty($search)||$search=="") $search='我们都是超能力者';
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
       
            //    var_dump($type);die;
                $listvideo = Video::getQueryList($page_list,$belong,1,$type,$search); // 获取采集数据
                // var_dump($listvideo);die;
                // $list =	Video::getQueryDetails($v['belong'],$val,$v['type'],$v['http'],$isquery);
                $list=[];
                $count = count($listvideo);
                $pageSize=10;
           
                if($listvideo){
                    foreach($listvideo as$key=> $val){
                        if($key<($page*$pageSize)&&$key>=($page-1)*$pageSize){
                            $list []= Video::getQueryDetails($val['belong'],$val,$val['type'],$val['http'],1);
                        }
                    }
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
 
        foreach($list as$key=> $v){
            $find_title =$v['title'];
            $find_collect =Video::find()->select('id')->where("title = '$find_title'")->One();
            if($find_collect){
                $list[$key]['collect']=1;
            }else{
                $list[$key]['collect']=0;
            }          
        }
        // var_dump($list);die;
        $pageStr = new Pagination(['totalCount'=>$count,'pageSize'=>10]);
        if($login==1){
            $category = Category::Category();
        }else{
            $category = Category::CategoryVideo();
        }
        // var_dump($type);die;
        // model隐藏
        $list_type = Yii::$app->session->get('list_type');
        $data['list_type']=$list_type;
        $data['page']=$page;
        $data['type']=$type;
        $data['page_list']=$page_list;
        $data['search']=$search;
        $data['belong']=$belong;
        $data['issearch']=$category[$belong]['issearch'];
     
        // if($login==0){
        //     return $this->render('login',['data'=>$data,'login'=>$login,'content'=>$list,'pageStr'=>$pageStr,'category'=>$category,'sessionkey'=>$sessionStr]);
        // }else{
            return $this->render('list',['data'=>$data,'login'=>$login,'content'=>$list,'pageStr'=>$pageStr,'category'=>$category,'sessionkey'=>$sessionStr]);
        // }
    
    }

    public function actionGetBelong()
    {
        $belong = Yii::$app->request->post('belong',0);
        $type = Yii::$app->request->post('type',0);
        // $list_type = Yii::$app->session->get('list_type');
        // var_dump( $type);die;
        if($belong==0){
            $str ="<input type='hidden' value='0' name='goType' id='goType'/>";
            die(Method::jsonGenerate(1,$str,'返回数据成功'));
        }
        $list = Category::find()->where("belong=$belong")->asArray()->all();
        // var_dump( $list);die;
            if($list){
                if(!$type){
                    $typeArray= array_column($list,'type');
                    $type=$typeArray[0];
                }
                // if(!$list_type){
                //     $str ='<select name="goType" id="goType listType" >';
                //     // $type = Yii::$app->request->post('type',8);
                //     foreach($list as $v){
                //         $name =$v['name'];
                //         $value =$v['type'];
                //         if( $v['type']==$type){
                //             $str .= "<option value='$value'  selected > $name </option>";
                //         }else{
                //             $str .= "<option value='$value'  > $name </option>";
                //         }
                //     }
                //     $str .=' </select>';
                // }else{
                    // if(!in_array($type,$typeArray)&&!empty($typeArray)){
                    // } 
                    $str ="<input type='hidden' value='$type' name='goType' id='goType'/>";
                    $str .='<p class="center" id="listType" >'; 
                    foreach($list as $v){
                        $name =$v['name'];
                        $value =$v['type'];
                        if($v['type']==$type){
                            $str .=  "<a class='btn btn-sm  active btn-primary' value='$value' id='type$value' onclick='typeChange($value)' href='javascript:return false;'>$name</a>";
                        }else{
                            $str .=  "<a class='btn btn-sm' value='$value' id='type$value' onclick='typeChange($value)' href='javascript:return false;'>$name</a>";
                        }
                    }
                    $str .='  </p>';
                    // if($belong==1){
                    //     var_dump($str);die;
                    // }
                // }
            }
        // var_dump($str);die;
        // echo $str;
        die(Method::jsonGenerate(1,$str,'返回数据成功'));
    }
  /**
     * 采集单条插入
     * by  sjeam
     */
    public function actionChangeType()
    {
        $list_type =Yii::$app->session->get('list_type');
   
        if($list_type){
            Yii::$app->session->remove('list_type'); 
        }else{
            Yii::$app->session->set('list_type','has');
        }
        echo true;
    }
    public function actionClearSession()
    {
        $belong = Yii::$app->request->post('belong',0);
        $type = Yii::$app->request->post('type',0);
        VideoList::deleteAll(" belong =$belong and type = $type ");
        echo true;
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
        echo true; 
    }


  /**
     * 视频播放器
     * by  sjeam
     */
    public function actionVideo()
    { 
        // http://wolongzyw.com/index.php/vod/detail/id/41194.html
        $id = Yii::$app->request->get('id',1);
        $m3u8 = Jian::find()->where("id=$id")->asArray()->one();
        $data = Jian::find()->where("name='{$m3u8['name']}'")->orderBy('num asc')->asArray()->all();
        return $this->render('video', ['m3u8'=>$m3u8,'data' =>$data]);
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
        //管理员权限1可删除
        $graden = WechatUser::getGraden();
        if($graden){
            $video=Video::find()->where("id =$id ")->one();
            $video->delete();
            echo true;
        }
        echo false;
    } 

}
