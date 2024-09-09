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



    // 图片不做保存
	public static function checkImage($listvideo){
        $video_list =[];
        foreach($listvideo as$key=> $val){
            $find_video = Video::getQueryDetails($val['belong'],$val,$val['type'],$val['http'],1);
            $video_list [] =$find_video;
        }
        return $video_list;
    }
    
    //列表采集
	public static function checkVideo($listvideo){
        $listvideo =  Method::functionsecond_array_unique_bykey($listvideo,'title',1); //二维数组根据title去重
        foreach($listvideo as$key=> $val){
            $listvideo[$key]['link']= addslashes($val['http'].$val['url']);
        }
        $link =  "'" .implode("','",array_column($listvideo,'link'))."'" ;
        $find_collect =VideoListDetail::find()->where("link in ($link)")->asarray()->all();
        $find_link = array_column($find_collect,'link');
        $video_list =[];
        // $new_list=[];
        $update_list=[];
        foreach($listvideo as$key=> $val){
            $video_link= $val['link'];
            if(in_array($video_link,$find_link)){
                $key = array_search($val['link'], $find_link);
                $find_video= $find_collect[$key];
                // 处理搜索以后存入的视频没有type--更新时，自动更新视频类型
                $find_id=  $find_video['id'];
                if($find_video['type']!=$val['type']&&$val['type']!=0){
                    $update_list[] = $find_id;
                    $val_type = $val['type'];
                }
                $video_list [] =$find_video;
            }else{
                //单条数据采集
                $find_video= Video::getQueryDetails($val['belong'],$val,$val['type'],$val['http'],1);
                if(is_array($find_video)){  //判断是否为数组，报错则跳过
                    // $find_video =VideoListDetail::videoBaseImage($find_video);//保存base64 图片
                    $video_list [] =$find_video;
                }
            }
        }
        //批量更新--默认关闭批量写入的
        if(Yii::$app->params['insertVideo_iscache']){
            $video_list=  Video::updateVidoeMethod($link);
        }
        //更新type
        if($update_list){
            $update_list = implode(',',$update_list);
            VideoListDetail::updateAll(['type' =>$val_type],"id in($update_list)");
        }
        return $video_list;
    }
    //插入base64 图片
    public static function videoBaseImage($find_video){
        if(!$find_video['image']){
            $file_base =new VideoImage();
            $base_id = $file_base->addBaseImage($find_video['imageurl'],60); //宽度256
            // $base_image =$file_base->getBaseImage($find_video['imageurl'],1);
            // var_dump($base_image);die;
            $find_video['image'] =$base_id;
        }
        return $find_video;
    }
 


    //单条采集
	public static function isUpdateVideo($listvideo){
        $video_list =[];
        foreach($listvideo as$key=> $val){
            $link = addslashes($val['http'].$val['url']);
            $find_video = VideoListDetail::find()->select('id,url,title,imageurl,type,belong,link')->where("link ='$link'")->asarray()->one();
            if(!$find_video){
               //单条数据采集
                $find_video= Video::getQueryDetails($val['belong'],$val,$val['type'],$val['http'],1);
                // 插入采集数据库
                Yii::$app->signdb->createCommand()->insert('x2_video_list_detail', $find_video)->execute();
                $find_video['id']=Yii::$app->signdb->getLastInsertID();
            }else{
                // 处理搜索以后存入的视频没有type--更新时，自动更新视频类型
                $find_id=  $find_video['id'];
                if($find_video['type']==0&&$val['type']!=0){
                    $val_type = $val['type'];
                    VideoListDetail::updateAll(['type' =>$val_type],"id = $find_id");
                }
                // unset($find_video['id']);
            } 
            $video_list [] =$find_video;
        }
        return $video_list;
	}

    //视频错误
	public static function videoError($id){
        VideoListDetail::updateAll(['is_error' =>1],"id = $id");
    }

}

?>
