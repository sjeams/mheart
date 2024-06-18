<?php
/*
 * @Author: sjeam
 * @Date: 2022-06-13 16:34:53
 * @Description: 
 */
//  用户验证
namespace app\modules\app\models;
use yii\db\ActiveRecord;
use yii;
use app\modules\app\models\Words;
class UserLogin extends ActiveRecord
{
    public static function tableName(){
        return '{{%user_login}}';
    }

    public static function getUserlogin($token){
        //修改User后需要重新调用
        if(!empty($token)){
            $sql ="SELECT u.* from {{%user_login}} ul INNER JOIN {{%user}} u on ul.server=u.server and ul.id=u.loginid  where ul.token = '$token'";
            $user_info = Yii::$app->db->createCommand($sql)->queryOne();
            if($user_info){
                $user_info['word_type'] = intval(Words::getUserWordGrade()['difficult']);
            }
            return $user_info;
        }else{
            return [];
        }
    }
    // /**
    //  * 查询境界列表
    //  */
    // public static function getValueList(){
    //   $data = Words::find()->select('*,id as key,name as text')->asarray()->All();
    //   return $data;
    // }

    // /**
    //  * 查询境界列表
    //  */
    //  public static function getValueListtype($page=1,$pageSize=20,$where=""){
    //     $data['data'] = Words::find()->select("*,type_name as words,")->where(" $where")->offset($page*$pageSize)->limit($pageSize)->asarray()->All();
    //     $data ['total'] = Words::find()->select("id")->asarray()->count();
    //     return $data;
    //   }
}
