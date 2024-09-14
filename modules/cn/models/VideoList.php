<?php 
namespace app\modules\cn\models;
use yii\db\ActiveRecord;
use yii\data\Pagination;
use Yii;
use app\libs\Redis;

class VideoList extends ActiveRecord {
    public $cateData;
	public static function getDb() {
        return Yii::$app->signdb;
    }
    public static function tableName(){
            return '{{%video_list}}';
    }
    public Static function Md5sessionKey($belong,$page,$page_list,$type,$search){
        // 缓存列表
        // $sessionStr = 'videolistBelong'.$belong.'page'.$page.'page_list'.$page_list.'type'.$type.'search'.$search;
        $sessionStr = 'B'.$belong.'P'.$page.'P'.$page_list.'T'.$type.'S'.$search;
        return md5($sessionStr);
    }
    
    //查询分页页码，判断是否有下一页
    public Static function getIsNext($belong,$type,$count){
        $type = intval($type);
        $belong = intval($belong);
        if($belong==0){
            //浮动页码--根据采集页码
            $where =" belong =$belong and type = $type  " ;
            $res =  VideoList::find()->select('count')->where(" $where ")->orderBy('count desc')->one();
            $total_page  = isset($res)?$res->count:10;
        }else{
            //固定页码
            $total_page = CategoryName::delfutPage($belong); //每页总条数
        }
        //总数相等并且总数大于等于10
        if($count>= $total_page&&$count>=10){
             return true;
        }else{
            return false;
        }
    }   

    public Static function getVideoList($sessionkey,$belong,$type,$page,$search,$page_list,$graden,$userid,$get_cache=0,$category_id){
        $issearch =0; //能否搜索，本地可以直接搜索
        $videoData =[];
        //先查redis
        $list =  Redis::get($sessionkey); //没有缓存取 本地或者采集
        if(empty($list)){
            $res = VideoList::find()->select('id')->where(" key_value ='$sessionkey' ")->one();
            if($res){
                //取本地 缓存
                $list = VideoList::sessionKeyVideo($sessionkey);
            }else{
                //缓存没有数据,进入采集
                $category_name = CategoryName::find()->select('status')->where("belong =$belong " )->one();
                if($belong&&$category_name->status==0){
                    //本地采集--本地数据库直查--跳过采集
                    $list= VideoList::delfutData($belong,$type,$page,$search,$page_list,$category_id);
                    $issearch =1;//本地可以搜索
                }else{
                    //采集接口
                    $list= VideoList::queryVideoList($belong,$type,$page,$search,$page_list,$category_id);
                }
                //本地浏览，写入缓存
                if($get_cache){
                    $args['key_value'] =$sessionkey;
                    // $args['value'] = json_encode($list,true);
                    // $args['time'] =time();
                    $args['count'] = count($list);
                    $args['page'] =$page;
                    $args['belong'] =$belong;
                    $args['type'] =$type;
                    $args['search'] =$search;
                    $args['page_list'] =$page_list;
                    // 存入缓存列表
                    //快速自动采集，不录入缓存，大容量储存会加大消耗
                    VideoList::insertVideoList($args,$list);
                }
            }
            //存入reids--将结果存入redis
            if($get_cache){
                Redis::set($sessionkey,json_encode($list,true));
            }
        }
        // 动态数据验证--返回显示页码的状态
        if($get_cache){
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
            $data['issearch']= $issearch? $issearch:$category[$belong]['issearch'];
            $count = count($list);
            //是否有下一页
            $isnext = VideoList::getIsNext($belong,$type,$count); // 获取采集数据
            $categoryBelong = Category::getBelong($belong,$type);
            // 采集查询-标题-是否收藏
            if($belong!=0){ // 影视不进入
                $list=  Video::isCollect($list,$userid);
            }
            $videoData =['isnext'=>$isnext,'data'=>$data ,'graden'=>$graden,'content'=>$list,'category'=>$category,'sessionkey'=>$sessionkey,'categoryBelong'=>$categoryBelong];
        }else{
            //采集不用进入缓存--采集状态
            $videoData =['content'=>$list];
        }
        return  $videoData ;
    }
    public Static function queryVideoList($belong,$type,$page,$search,$page_list,$category_id){
        $list=[];
        //采集逻辑
        if($belong==0){
            //电视采集
            $list = Query::getVideo($search,$type,$page_list);
            // Yii::$app->signdb->createCommand()->insert('x2_video_list',$args)->execute();
        }else{
            //电影采集
            $listvideo = Video::getQueryListModel($page_list,$belong,1,$type,$search); // 获取采集数据
            // 是否分页--改为不分页，直接采集
            if($listvideo){
                //category_id 2 图片,1直播  0视频
                if($category_id==2){
                    $list= VideoListDetail::checkImage($listvideo);
                }else{
                    $list= VideoListDetail::checkVideo($listvideo);
                }
            }
        }
        return $list;
    }

    //链接失效，本地直查数据
    public Static function delfutData($belong,$type,$page,$search,$page_list,$category_id){
        //查询现有的
        $where =" 1=1 ";
        if($belong){
            $where .= " and belong =$belong "; 
        }
        if($type){
            $where .= " and type =$type "; 
        }
        if($search){
            $where .= " and title like '%$search%'  "; 
        }

        //搜索加快查询，不排序了
        $where.=' order by id desc ' ;
        $pageSize = CategoryName::delfutPage($belong);
        $page =$page_list;
        $where.= " limit ".($page-1)*$pageSize.",$pageSize";
        // print_r("SELECT * FROM x2_video_list_detail  where $where");die;
        $list =Yii::$app->signdb->createCommand("SELECT * FROM x2_video_list_detail  where $where")->queryAll();
        // 外面有是否收藏验证了，这里不需要了
        // $sql =" SELECT  a.*,(CASE WHEN c.video_id != 'NULL'  THEN '1' ELSE '0' END) as my_collect from  
        //         (SELECT * FROM x2_video_list_detail  where $where ) a
        //         LEFT JOIN x2_video_list_collect c on (c.video_id = a.id   and c.user_id = $userid )";
        // $list = Yii::$app->signdb->createCommand($sql)->queryAll();
        //图片处理
        if($category_id==2){
            foreach($list as &$v)
            $video_id =$v['id'];
            $v['image_list'] =  VideoListImage::findImageList($video_id);
        }
        return $list;
    }




    // 获取关键词
    public static function getKeyWords($belong){
        if($belong==0){
            $words = VideoList::find()->select('search')->where(" belong =0 and search!=''  ")->orderBy(" id desc")->asArray()->one()['search']; // 获取采集数据
        }else{
            $words = VideoList::find()->select('search')->where(" belong !=0 and search!=''  ")->orderBy(" id desc")->asArray()->one()['search']; // 获取采集数据
        }
        return $words?:'苍兰诀';
    }
    // 获取关键词列表
    public static function getKwordsList($belong)
    {
        if($belong==0){
            $keyword = VideoList::find()->select('search')->where(" belong =0 and search!=''  ")->limit(20)->groupBy("search")->orderBy(" id desc")->asArray()->all(); // 获取采集数据
        }else{
            $keyword = VideoList::find()->select('search')->where(" belong !=0 and search!=''  ")->limit(20)->groupBy("search")->orderBy(" id desc")->asArray()->all(); // 获取采集数据
        }
        return $keyword;
    }
    // 清除 缓存
    public static function  clearSession($istype,$belong,$type){
        if($istype==1){
            VideoList::deleteVideoList($belong, " belong =$belong and (type =$type or type = 0 ) ");
        }else{
            VideoList::deleteVideoList($belong, " belong =$belong ");
        }
    }
    // 清除 搜索
    public static function  clearSerach($search,$belong,$type){
        if($search){
            if($belong==0){
                VideoList::deleteVideoList($belong, " belong =$belong   and search ='$search' ");
            }else{
                VideoList::deleteVideoList($belong, " belong =$belong  and (type =$type or type = 0 ) and search ='$search' ");
            }
        }
    }

    // ---主要构成部分
    //id 缓存保持一致 --list 是递增的
    public static function  insertVideoListSort($args=[]){
        //去掉list 的value 字段
        // unset($args['value']);
        Yii::$app->signdb->createCommand()->insert('x2_video_list',$args)->execute();
        return  Yii::$app->signdb->getLastInsertID(); //text 的id存入list
    }
    //增   insert 插入视频记录
    public static function  insertVideoList($args,$list){
        //前面一定要查询，防止重复插入
        $insert_id =  VideoList::insertVideoListSort($args);
        //有数据才存附表了，没有就不存，为空
        if($args['count']){
            //超长的另存数据库
            if(intval($args['belong'])==0){
                $inser_text = new VideoListMediuText();
            }else{
                $inser_text = new VideoListText();
            }
            $inser_text->id = $insert_id;
            $inser_text->text = json_encode($list,true);
            $inser_text->belong =$args['belong'];
            $inser_text->type =$args['type'];
            $inser_text->search =$args['search'];
            $inser_text->save();  
        }
    }
    //删 删除text 和list
    public static function  deleteVideoList($belong,$sql){
        //清除redis 缓存
        Redis::clear(); 
        //更新type总数
        Category::updateCategoryCount();
        if($belong==0){
            VideoListMediuText::deleteAll(" $sql "); 
        }else{
            VideoListText::deleteAll(" $sql ");    
        }
        VideoList::deleteAll(" $sql "); 
    }
    //清除belong>0
    public static function  clearSessionAll(){
        //清除redis 缓存
        Redis::clear(); 
        //更新type总数
        Category::updateCategoryCount();
        VideoList::deleteAll();
        VideoListText::deleteAll();
        VideoListMediuText::deleteAll();
    }

    //查 根据session key 查询值i
    public static function  sessionKeyVideo($sessionkey){
        $res = VideoList::find()->select('id,count,belong')->where(" key_value ='$sessionkey' ")->One();

        $list =[];
        if($res){
            //没有视频数量，就不用去取列表了
            if($res->count){
                if($res->belong==0){
                    $res_text  =  VideoListMediuText::find()->select('text')->where(" id = $res->id ")->one();
                }else{
                    $res_text  =  VideoListText::find()->select('text')->where(" id = $res->id ")->one();
                }
                $list =  isset($res_text->text) ?json_decode($res_text->text,true):[];
            }
        }
        return  $list ;
    }

}
?>
