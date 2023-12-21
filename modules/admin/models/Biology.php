<?php
// 生物--模型
namespace app\modules\admin\models;

use yii\db\ActiveRecord;
class Biology extends ActiveRecord
{
    public static function tableName(){
        return '{{%biology}}';
    }

    /**
     * 获取所有模块
     * @sjeam
     */
    public static function getBiologyList($page=1,$pageSize=20,$where=""){
        
        $data['data'] = Biology::find()->select("*,name as key")->where(" $where")->offset($page*$pageSize)->limit($pageSize)->asarray()->All();
        $data ['total'] = Biology::find()->select("id")->where(" $where")->asarray()->count();
        // $data=  AdminInit::getChildren($adminIint);
        return $data;
    }

    /**
     * 获取弹出树
     * @sjeam
     */
    public static function getAdminMenusTree(){
        $data = AdminInit::find()->select("id,title as text,pid,url")->asarray()->All();
        // $data=  AdminInit::getTree($adminIint);
        return $data;
    }






    

}
