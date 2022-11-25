<?php 
namespace app\modules\cn\models;
use yii\db\ActiveRecord;

use Yii;
use app\libs\Method;
use yii\data\Pagination;
use app\libs\QueryList;

use function PHPSTORM_META\map;

class VideoListDetail extends ActiveRecord {
    public $cateData;
	public static function getDb() {
        return Yii::$app->signdb;
    }
    public static function tableName(){
            return '{{%video_list_detail}}';
    }

	public static function isUpdateVideo($val){
        $link = addslashes($val['http'].$val['url']);
        $find_video = VideoListDetail::find()->select('id,url,title,imageurl,type,belong,link')->where("link ='$link'")->asarray()->one();
  
        if(!$find_video){
           //单条数据采集
            $find_video= Video::getQueryDetails($val['belong'],$val,$val['type'],$val['http'],1);
            // 插入采集数据库
            Yii::$app->signdb->createCommand()->insert('x2_video_list_detail', $find_video)->execute();
        }else{
            // 处理搜索以后存入的视频没有type--更新时，自动更新视频类型
            $find_id=  $find_video['id'];
            if($find_video['type']==0&&$val['type']!=0){
                $val_type = $val['type'];
                VideoListDetail::updateAll(['type' =>$val_type],"id = $find_id");
            }
            unset($find_video['id']);
        }    
		return $find_video;
	}

}

?>
