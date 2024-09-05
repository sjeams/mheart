<?php 
namespace app\modules\cn\models;
use yii\db\ActiveRecord;
use yii\data\Pagination;
use Yii;

class VideoList extends ActiveRecord {
    public $cateData;
	public static function getDb() {
        return Yii::$app->signdb;
    }
    public static function tableName(){
            return '{{%video_list}}';
    }


    //采集默认页码
    public Static function delfutPage($belong){
        $res =  VideoList::find()->select('count')->where(" belong = $belong ")->orderBy('count desc')->one();   
        if($res){
            return  $res->count;
        }else{
            return 10;
        }
    }
    //查询分页页码，判断是否有下一页
    public Static function getIsNext($belong,$type,$count){
        $type = intval($type);
        $belong = intval($belong);
        if($belong>0){
            //固定页码
            $res = CategoryName::find('count')->where("belong =$belong " )->one();
            $total_page =$res->count;
        }else{
            $where =" belong =$belong and type = $type  " ;
            $res =  VideoList::find()->select('count')->where(" $where ")->orderBy('count desc')->one();
            $total_page =$res->count;
        }
        //总数相等并且总数大于等于10
        if($count== $total_page&&$count>=10){
             return true;
        }else{
            return false;
        }
    }   

    public Static function getVideoList($sessionStr,$belong,$type,$page,$search,$page_list,$graden,$userid,$get_cache=0){
        //是否能采集
        $category_name = CategoryName::find('status')->where("belong =$belong and status=1" )->one();
        if($belong&&$get_cache&&$category_name->status==0){
            //本地采集--本地数据库直查--跳过采集
            return VideoList::delfutData($sessionStr,$belong,$type,$page,$search,$page_list,$graden,$userid,$get_cache);
        }else{
            return VideoList::queryVideoList($sessionStr,$belong,$type,$page,$search,$page_list,$graden,$userid,$get_cache);   
        }
    }
    public Static function queryVideoList($sessionStr,$belong,$type,$page,$search,$page_list,$graden,$userid,$get_cache=0){
        //采集逻辑
        $res = VideoList::find()->select('value,count')->where(" key_value ='$sessionStr' ")->one();
        if($res){
            $list =  json_decode($res->value,true);
            $count = $res->count;
        }else{
            if($belong==0){
                //电视采集
                $list = Query::getVideo($search,$type,$page_list);
                $count = count($list);
                $args['key_value'] =$sessionStr;
                $args['value'] = $list?json_encode($list,true):false;
                // $args['time'] =time();
                $args['count'] =$count;
                $args['page'] =$page;
                $args['belong'] =$belong;
                $args['type'] =$type;
                $args['search'] =$search;
                // 存入缓存列表
                Yii::$app->signdb->createCommand()->insert('x2_video_list',$args)->execute();
            }else{
                //电影采集
                $listvideo = Video::getQueryListModel($page_list,$belong,1,$type,$search); // 获取采集数据
                $list=[];
                // 是否分页--改为不分页，直接采集
                $count = count($listvideo);
                if($listvideo){
                    $category_id = Category::getCategoryId($belong,$type);
                    //category_id 2 图片,1直播  0视频
                    if($category_id==2){
                        $list= VideoListDetail::checkImage($listvideo);
                    }else{
                        $list= VideoListDetail::checkVideo($listvideo);
                    }
                    $args['key_value'] =$sessionStr;
                    $args['value'] = $list?json_encode($list,true):false;
                    // $args['time'] =time();
                    $args['count'] =$count;
                    $args['page'] =$page;
                    $args['belong'] =$belong;
                    $args['type'] =$type;
                    $args['search'] =$search;
                    $args['page_list'] =$page_list;
                    // 存入缓存列表
                    //快速自动采集，不录入缓存，大容量储存会加大消耗
                    if($get_cache){
                        Yii::$app->signdb->createCommand()->insert('x2_video_list',$args)->execute();
                    }
                }
            }
        }
        // 不开启缓存采集不进入查询，因为不会保存数据
        if($get_cache){
            // if($belong!=0){ // 影视不进入-- 外面有验证收藏了，这里不需要了
            //     // 采集查询-标题-是否收藏
            //     $list=  Video::isCollect($list,$userid);
            // }
            // var_dump($list);die;
            if($graden>0){
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
            $categoryBelong = Category::getBelong($belong,$type);
            $videoData =['isnext'=>$isnext,'data'=>$data ,'graden'=>$graden,'content'=>$list, 'category'=>$category,'sessionkey'=>$sessionStr,'categoryBelong'=>$categoryBelong];
            if($list){ //有数据写入缓存
                Yii::$app->session->set($sessionStr,$videoData);
            }
            return  $videoData ;
        }else{
            return ['content'=>$list];
        }
    }

    //链接失效，本地直查数据
    public Static function delfutData($sessionStr,$belong,$type,$page,$search,$page_list,$graden,$userid,$get_cache){
        //查询现有的
        $where =" 1=1 ";
        if($belong){
            $where .= " and belong =$belong "; 
        }
        $pageSize = VideoList::delfutPage($belong);
        $page =$page_list;
        $limit = "limit ".($page-1)*$pageSize.",$pageSize";
        //搜索加快查询，不排序了
        $where.=' order by id desc ' ;
        $where.=" ".$limit;


        // print_r("SELECT * FROM x2_video_list_detail  where $where");die;
        $list =Yii::$app->signdb->createCommand("SELECT * FROM x2_video_list_detail  where $where")->queryAll();
        // 外面有是否收藏验证了，这里不需要了
        // $sql =" SELECT  a.*,(CASE WHEN c.video_id != 'NULL'  THEN '1' ELSE '0' END) as my_collect from  
        //         (SELECT * FROM x2_video_list_detail  where $where ) a
        //         LEFT JOIN x2_video_list_collect c on (c.video_id = a.id   and c.user_id = $userid )";
        // $list = Yii::$app->signdb->createCommand($sql)->queryAll();
        if($graden>0){
            $category = CategoryName::Category();
        }else{
            $category = CategoryName::CategoryVideo();
        }
        $count = count($list);
        // 本地文件,不需要缓存了
        $args['key_value'] =$sessionStr;
        $args['value'] = $list?json_encode($list,true):false;
        // $args['time'] =time();
        $args['count'] =$count;
        $args['page'] =$page;
        $args['belong'] =$belong;
        $args['type'] =$type;
        $args['search'] =$search;
        $args['page_list'] =$page_list;
        // 存入缓存列表
        //快速自动采集，不录入缓存，大容量储存会加大消耗
        if($get_cache){
            Yii::$app->signdb->createCommand()->insert('x2_video_list',$args)->execute();
        }
        //是否有下一页
        $data['page']=$page;
        $data['type']=$type;
        $data['page_list']=$page_list;
        $data['search']=$search;
        $data['belong']=$belong;
        $data['issearch']=$category[$belong]['issearch'];
        $isnext = VideoList::getIsNext($belong,$type,$count); // 获取采集数据
        $categoryBelong = Category::getBelong($belong,$type);
        $videoData =['isnext'=>$isnext,'data'=>$data ,'graden'=>$graden,'content'=>$list, 'category'=>$category,'sessionkey'=>$sessionStr,'categoryBelong'=>$categoryBelong];
        if($list){ //有数据写入缓存
            Yii::$app->session->set($sessionStr,$videoData);
        }
        return $videoData;
    }


    // 获取关键词
    public static function getKeyWords($belong){
        if($belong==0){
            $words = VideoList::find()->select('search')->where(" belong =0 and search!='' and value!='' ")->orderBy(" id desc")->asArray()->one()['search']; // 获取采集数据
        }else{
            $words = VideoList::find()->select('search')->where(" belong !=0 and search!='' and value!='' ")->orderBy(" id desc")->asArray()->one()['search']; // 获取采集数据
        }
        return $words?:'苍兰诀';
    }
    // 获取关键词列表
    public static function getKwordsList($belong)
    {
        if($belong==0){
            $keyword = VideoList::find()->select('search')->where(" belong =0 and search!='' and value!='' ")->limit(20)->groupBy("search")->orderBy(" id desc")->asArray()->all(); // 获取采集数据
        }else{
            $keyword = VideoList::find()->select('search')->where(" belong !=0 and search!='' and value!='' ")->limit(20)->groupBy("search")->orderBy(" id desc")->asArray()->all(); // 获取采集数据
        }
        return $keyword;
    }
}
?>
