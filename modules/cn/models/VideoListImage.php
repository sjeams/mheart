<?php 
namespace app\modules\cn\models;
use yii\db\ActiveRecord;

use Yii;
use app\libs\Method;
use yii\data\Pagination;
use app\libs\QueryList;

use function PHPSTORM_META\map;

class VideoListImage extends ActiveRecord {
    public $cateData;
	public static function getDb() {
        return Yii::$app->signdb;
    }
    public static function tableName(){
            return '{{%video_list_image}}';
    }
    //获取图片
    public static  function findImageList($video_id){
        $res_text = VideoListImage::findOne($video_id);
        return isset($res_text->image_list) ?json_decode($res_text->image_list,true):[];
    }
    //写入图片
    public static  function insertImageList($args,$image_list){    
        Video::insertVideo($args);
        $cls = new VideoListImage();
        $args['id']=Yii::$app->signdb->getLastInsertID();
        $cls->id = $args['id'];
        $cls->image_list = json_encode($image_list,true);
        $cls->save();
        //返回数据中 ，加入list
        $args['image_list'] =$image_list; //图片多加个图片列表
        return $args; 
    }
    // //写入图片
    // public static  function insertImageList($args,$image_list){    
    //     // $link =$args['link'];
    //     // $belong =$args['belong'];
    //     // $type =$args['type'];
    //     // $where =" link='$link' and belong = '$belong'   and type = '$type' ";
    //     // $res =VideoListDetail::find()->where($where)->asarray()->One();
    //     // if(!$res){
    //         //视频不存在，写入
    //         // Yii::$app->signdb->createCommand()->insert('x2_video_list_detail', $args)->execute();
    //     Video::insertVideo($args);
    //     $args['id']=Yii::$app->signdb->getLastInsertID();
    //     // $insertVideo = [];
    //     // foreach($image_list as $key=> $v){
    //     //     $insertVideo[$key] =array('video_id'=>$args['id'], 'imageurl'=>$v);
    //     // }	
    //     // $new_key = array_keys($insertVideo[0]);         // $new_key =['video_id','image'];
    //     // //批量擦汗如到图片表
    //     // Video::batchInsertVideo('x2_video_list_image',$new_key,$insertVideo);
    //     $cls = new VideoListImage();
    //     $cls->video_id = $args['id'];
    //     $cls->image_list = json_encode($image_list,true);
    //     $cls->save();
    //     // }
    //     //返回数据中 ，加入list
    //     $args['image_list'] =$image_list; //图片多加个图片列表
    //     return $args; 
    // }

}

?>
