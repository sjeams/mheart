<?php 
namespace app\modules\cn\models;
use yii\db\ActiveRecord;

use Yii;

class VideoList extends ActiveRecord {
    public $cateData;
	public static function getDb() {
        return Yii::$app->signdb;
    }
    public static function tableName(){
            return '{{%video_list}}';
    }

    //查询分页页码，判断是否有下一页
    public Static function getIsNext($belong,$type,$count){
        $type = intval($type);
        $belong = intval($belong);
        $where =" belong =$belong and type = $type  " ;
        $res =  VideoList::find()->select('count')->where(" $where ")->orderBy('count desc')->asArray()->one();   
        if($count== $res['count']){
             return true;
        }else{
            return false;
        }
    }   


     
   

    public Static function getVideoList($sessionStr,$belong,$type,$page,$search,$page_list,$graden,$userid){
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
            $list=  Video::isCollect($list,$userid);
        }
        // var_dump($list);die;
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

        $categoryBelong = Category::getBelong($belong,$type);
        $videoData =['isnext'=>$isnext,'data'=>$data ,'graden'=>$graden,'content'=>$list, 'category'=>$category,'sessionkey'=>$sessionStr,'categoryBelong'=>$categoryBelong];
        if($list){ //有数据写入缓存
            Yii::$app->session->set($sessionStr,$videoData);
        }
        return  $videoData ;
    }
}
?>
