<?php 
namespace app\modules\cn\models;
use yii\db\ActiveRecord;

use Yii;
use app\libs\Method;
use yii\data\Pagination;
use app\libs\QueryList;

use function PHPSTORM_META\map;

class WeChatFriend extends ActiveRecord {
    public $cateData;
	public static function getDb() {
        return Yii::$app->signdb;
    }
    public static function tableName(){
            return '{{%wechat_friend}}';
    }

    //添加朋友
    public static function addFriend($uid,$fid){
        $args['is_friend']=1; // 默认添加
        // 生成好友编号-房间号
        $room =md5(time().rand(1,10000)).rand(1,10000);
        $args['room_id']=$room;

        $old  = WeChatFriend::find()->where("uid = $fid and friend_id =$uid")->asArray()->one(); 
        if(!$old){
            //插入自己的
            $args['uid']=$uid;
            $args['friend_id']=$fid;
            Yii::$app->signdb->createCommand()->insert('x2_wechat_friend',$args)->execute();
            // 插入朋友的
            $args['uid']=$fid;
            $args['friend_id']=$uid;
            Yii::$app->signdb->createCommand()->insert('x2_wechat_friend',$args)->execute();
        }else{
            WeChatFriend::updateAll(['is_friend' =>1],"uid = $uid and friend_id =$fid");    
        }
    }
    //删除朋友
    public static function removeFriend($uid,$fid){
        WeChatFriend::updateAll(['is_friend' =>0],"uid = $uid and friend_id =$fid");
    }
    
    //修改未看消息数--插入最新消息和时间
    public static function updateFriendNum($uid,$fid,$content,$time,$num=0){
        $old  = WeChatFriend::find()->where("uid = $fid and friend_id =$uid")->asArray()->one(); 
        $oldnum  =$old['num'];
        $room_id =$old['room_id'];
        WeChatFriend::updateAll(['num' =>$oldnum+$num],"uid = $fid and friend_id =$uid");
        WeChatFriend::updateAll(['last_time' =>$time,'content' =>"$content"],"room_id = '$room_id'");
        return $oldnum+$num;
    }
    //修改未看消息数
    public static function updateUserNum($uid,$fid,$num=0){
        WeChatFriend::updateAll(['num' =>$num],"uid = $uid and friend_id =$fid");
    }


    


}

?>
