<?php
// 生物属性类型
namespace app\modules\admin\models;
use yii\db\ActiveRecord;
use app\libs\Method;
use yii;
class BiologySkillExtend extends ActiveRecord
{
 
    public $user_info; 
    public $userid; 
    function init(){
        $this->user_info =  Yii::$app->session->get('user_info');
        $this->userid =  $this->user_info['userid'];
    }
    public static function tableName(){
        return '{{x2_biology_skill_extend}}';
    }

}
