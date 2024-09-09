<?php
// 技能
namespace app\modules\admin\models;
use yii;
use yii\db\ActiveRecord;
class BiologySkill extends ActiveRecord
{
    public static function tableName(){
        return '{{%biology_skill}}';
    }

    /**
     * 获取所有模块
     * @sjeam
     */
    public static function getSkillList($where=""){
        // 技能勾选不做分页
        $data['data'] = BiologySkill::find()->select("*,name as key")->where("$where")->asarray()->All();
        $data ['total'] = BiologySkill::find()->select("id")->asarray()->count();
        foreach($data['data'] as$key=> $v){
            $data['data'][$key]['checked']='1';
        }
        // $data=  AdminInit::getChildren($adminIint);
        return $data;
    }

    /**
     * 获取弹出树
     * @sjeam
     */
    public static function getAdminMenusTree(){
        $data = BiologySkill::find()->select("id,title as text,pid,url")->asarray()->All();
        // $data=  AdminInit::getTree($adminIint);
        return $data;
    }

    public static function getSkill($skill,$biology_id=0){
        $data=[];
        if($skill){
            // $data= BiologySkill::find()->where("id in ($skill)")->asArray()->All();
            $sql ="SELECT a.*,if(b.id,b.grade,1) as skill_grade from {{%biology_skill}} a left JOIN {{%user_biology_skill}} b on (a.id=b.skillid  and b.userBiologyid = $biology_id ) where  a.id in ($skill)";
            $data= Yii::$app->db->createCommand($sql)->queryAll();
        } 
        return $data;
    }


}
