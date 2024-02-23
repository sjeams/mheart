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
        // var_dump($listvideo);die;
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
                    // VideoListDetail::updateAll(['type' =>$val_type],"id = $find_id");
                    // $update_list[] =array('id'=>$find_id,'type'=>$val_type);//批量修改
                }
                // $find_video['imageurl'] = str_replace( 'https://ttzytp3.com/','https://ttzytp.com/',$find_video['imageurl']);
                // $find_video =VideoListDetail::videoBaseImage($find_video);//保存base64 图片
                $video_list [] =$find_video;
            }else{
                //单条数据采集
                $find_video= Video::getQueryDetails($val['belong'],$val,$val['type'],$val['http'],1);
                if(is_array($find_video)){  //判断是否为数组，报错则跳过
                    // $find_video =VideoListDetail::videoBaseImage($find_video);//保存base64 图片
                    // 插入采集数据库
                    // Yii::$app->signdb->createCommand()->insert('x2_video_list_detail', $find_video)->execute();
                    // $find_video['id']=Yii::$app->signdb->getLastInsertID();
                    // $new_list[] =$find_video;//批量插入
                    $video_list [] =$find_video;
                }
            }
            // $video_list [] =$find_video;//改为单独写入，剔除重复m3u8
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
            $base_id = $file_base->addBaseImage($find_video['imageurl'],128); //宽度256
            $find_video['image'] =$base_id;
        }
        return $find_video;
    }

    // batchInsertVideo
    // public static function updateVidoeMethod($update_list,$new_list){
    //     // if($new_list){ //批量插入
    //     //     $new_key = array_keys($new_list[0]);
    //     //     Video::batchInsertVideo('x2_video_list_detail',$new_key,$new_list);
    //     // }
    //     // if($update_list){//批量修改
    //     //     // Video::batchUpdateVideo('x2_video_list_detail',[["id"=>65533,"type"=>20],["id"=>65532,"type"=>20]]);
    //     //     //根据id批量修改type
    //     //     Video::batchUpdateVideo('x2_video_list_detail',$update_list);
    //     // }
    //     //重新获取
    //     // $video_list =VideoListDetail::find()->where("link in ($link)")->asarray()->all();
    // }


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
