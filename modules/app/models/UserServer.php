<?php
// 世界
namespace app\modules\app\models;
use yii\db\ActiveRecord;

class UserServer extends ActiveRecord
{
    public static function tableName(){
        return '{{%user_server}}';
    }

    // /**
    //  * 修改颜色
    //  */
    public static function getServerColor($id){
        $count =  UserLogin::find()->where("server =$id")->count();
        if( $count<100){
            $type='空闲';
             $color = 'green';
        }else if( $count<500&& $count>=100){
            $type='流畅';
             $color = '#BDFF00';
        }else if( $count<1000&& $count>=500){
            $type='拥挤';
             $color = '#FFD100';
        }else{
            $type='爆满';
             $color = '#FF0000'; 
        } 
        UserServer::updateAll(['num' => $count,'type' => $type,'color' => $color],"id=$id");
    }

    // /**
    //  * 查询境界列表
    //  */
    //  public static function getValueListtype($page=1,$pageSize=20,$where=""){
    //     $data['data'] = Words::find()->select("*,typeName as words,")->where(" $where")->offset($page*$pageSize)->limit($pageSize)->asarray()->All();
    //     $data ['total'] = Words::find()->select("id")->asarray()->count();
    //     return $data;
    //   }
}
