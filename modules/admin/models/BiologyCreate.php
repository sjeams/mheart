<?php
// 创造生物--原始属性
namespace app\modules\admin\models;
use yii\db\ActiveRecord;

class BiologyCreate extends ActiveRecord
{
    public static function tableName(){
        return '{{%biology_create}}';
    }

    /**
     * 查询境界列表
     */
    public static function getBiologyList($page=1,$pageSize=20,$where=""){
        $data['data'] = BiologyCreate::find()->select("*,name as key")->where(" $where")->offset($page*$pageSize)->limit($pageSize)->asarray()->All();
        $data ['total'] = BiologyCreate::find()->select("id")->where(" $where")->asarray()->count();
      return $data;
    }
    
    //等级写入方法--add_grade指定的等级，max_grade 等级上限
    public static function getExperience($param,$create,$add_grade=0,$max_grade=200){
    //   $createid =  (int)$param['createid'];
      $power =  (int)$param['power'];
      $agile =  (int)$param['agile'];
      $intelligence =  (int)$param['intelligence'];
      $exp =  (int)$param['experience'];
      $grade =  (int)$param['grade'];
      $maxNature =  (int)$param['maxNature'];
      $wuXing =  (int)$param['wuXing'];
      $reiki =  (int)$param['reiki'];
      // $grade=1;
      // $exp=160;
      // ，每级叠加经验150
      if($add_grade){
        //等级
        $sum=0;
        for($i=1;$i<=$max_grade;$i++) {  // 最多200级
            $sum+= $i*BIOLOGY_EXP; 
            if($i>=$add_grade){
              $exp=$sum;//获取等量经验值
              $res['newGrade'] =$i;   // 当前等级
              $res['newExp'] = $i*BIOLOGY_EXP; // 当前晋级总共需要经验
              $res['nowExp']= $sum-$exp; // 晋级需要经验
              $res['lessExp']=$res['newExp']- $res['nowExp']; //晋级当前经验
              $res['percent']= round($res['lessExp']/$res['newExp']*100,2); //经验百分比
              // $res['maxNature'] = ($i - $grade)*$wuXing+$maxNature; // 获得自由属性点
              $res['maxNature'] = ($i - $grade)*10+$maxNature; // 获得自由属性点
              if($res['lessExp']==$res['newExp']&&$i<$max_grade){  // 刚好满级
                $i=$i+1; //等级+1
                $res['newGrade'] =$i;   // 当前等级
                $res['newExp'] = $i*BIOLOGY_EXP; // 当前晋级总共需要经验
                $res['nowExp'] = $i*BIOLOGY_EXP; //晋级当前经验
                $res['lessExp']=$res['newExp']- $res['nowExp']; //晋级当前经验
                $res['percent'] =0;   //经验百分比
                // $res['maxNature'] = ($i - $grade)*$wuXing+$maxNature; // 获得自由属性点
                $res['maxNature'] = ($i - $grade)*10+$maxNature; // 获得自由属性点
              }
              // 白值属性计算
            //   $create = BiologyCreate::find()->where("id=$createid")->One();
              // var_dump($create);die;
              $res['experience'] = $sum;
              $res['power'] = ($i - $grade)*$create['power'] +$power;
              $res['agile'] =($i - $grade)*$create['agile'] +$agile;
              $res['intelligence'] =($i - $grade)*$create['intelligence'] +$intelligence;
              $res['reiki'] =  intval( ($create['reiki']*($i - $grade) + ($i - $grade)*( $create['power'] + $create['agile'] + $create['intelligence']))*0.1)+$reiki;//灵气
              return $res;
              break;
            }
        }
      }else{
        //经验
        $sum=0;
        for($i=1;$i<=$max_grade;$i++) {  // 最多200级
            $sum+= $i*BIOLOGY_EXP; 
            if($sum>=$exp){
              $res['newGrade'] =$i;   // 当前等级
              $res['newExp'] = $i*BIOLOGY_EXP; // 当前晋级总共需要经验
              $res['nowExp']= $sum-$exp; // 晋级需要经验
              $res['lessExp']=$res['newExp']- $res['nowExp']; //晋级当前经验
              $res['percent']= round($res['lessExp']/$res['newExp']*100,2); //经验百分比
              // $res['maxNature'] = ($i - $grade)*$wuXing+$maxNature; // 获得自由属性点
              $res['maxNature'] = ($i - $grade)*10+$maxNature; // 获得自由属性点
              if($res['lessExp']==$res['newExp']&&$i<$max_grade){  // 刚好满级
                $i=$i+1; //等级+1
                $res['newGrade'] =$i;   // 当前等级
                $res['newExp'] = $i*BIOLOGY_EXP; // 当前晋级总共需要经验
                $res['nowExp'] = $i*BIOLOGY_EXP; //晋级当前经验
                $res['lessExp']=$res['newExp']- $res['nowExp']; //晋级当前经验
                $res['percent'] =0;   //经验百分比
                // $res['maxNature'] = ($i - $grade)*$wuXing+$maxNature; // 获得自由属性点
                $res['maxNature'] = ($i - $grade)*10+$maxNature; // 获得自由属性点
              }
              // 白值属性计算
            //   $create = BiologyCreate::find()->where("id=$createid")->One();
              // var_dump($create);die;
              $res['experience'] = $sum;
              $res['power'] = ($i - $grade)*$create['power'] +$power;
              $res['agile'] =($i - $grade)*$create['agile'] +$agile;
              $res['intelligence'] =($i - $grade)*$create['intelligence'] +$intelligence;
              $res['reiki'] =  intval( ($create['reiki']*($i - $grade) + ($i - $grade)*( $create['power'] + $create['agile'] + $create['intelligence']))*0.1)+$reiki;//灵气
              return $res;
              break;
            }
        }
      }
    }
}
