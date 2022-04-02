<?php
// 用户表
namespace app\modules\admin\models;
use app\modules\admin\models\Biology;
use app\modules\admin\models\UserHandbook;

use yii\db\ActiveRecord;

class User extends ActiveRecord
{
    public static function tableName(){
        return '{{%user}}';
    }

    // 查询用户信息
    public static function userinfo($find,$userid=1){  //默认管理员，数量为1
        $user = User::find()->select($find)->asarray()->where("userid=$userid")->One();
        return $user;
    }


    // 评分加成--职业--vip--图鉴
    public static function BiologyChange($userid=1){
        $user = User::find()->where("userid=$userid")->One();
        $change=0;
        if($user->occupation==3){   //职业+加成10评分
            $change+= 10;
        }
        if($user->vip!=0){   //vip+加成*10评分
            $change+= intval($user->vip);
        }
        if($user->biologyknow!=0){   //图鉴+加成*1评分
            $change+= 0.1 * intval($user->biologyknow); 
        }
        return $change;
    }

    // 随机技能个数
    public static function SkillRand($biology){
        $skill = explode(',',$biology['skill']);
        $count = !empty($biology['skill'])?count($skill):0;
        $skillcout =rand(0,$count);
        // var_dump($randskill);die;
        if($skillcout>0){
            $random_keys=array_rand($skill,$skillcout);
            if(is_array($random_keys)){
                foreach($random_keys as $key){
                    $skillrand[ ] = $skill[$key];
                }  
            }else{
                $skillrand[ ] = $skill[$random_keys];
            }
            $skillrand = implode(',',$skillrand);
        }else{
            $skillrand=null;
        }
        return $skillrand;
    }
    

    // 随机智力敏
    public static function BiologyPower($biology,$extend){
  
        $power =  intval($biology['power']);
        $agile =  intval($biology['agile']);
        $intelligence =  intval($biology['intelligence']);
        $minPower =  intval($biology['minPower']);
        $minAgile =  intval($biology['minAgile']);
        $minIntelligence =  intval($biology['minIntelligence']);

        $max = max($power,$agile,$intelligence);
        // $min = min($power,$agile,$intelligence);
        if($max==$power){
            $round1 = rand(1,$extend); 
            $round2 = rand(1,$extend-$round1); 
            $round3 = $extend-$round1-$round2;
        }
        if($max==$agile){
            $round2 = rand(1,$extend); 
            $round1 = rand(1,$extend-$round2); 
            $round3 = $extend-$round2-$round1;
        }
        if($max==$intelligence){
            $round3 = rand(1,$extend); 
            $round1 = rand(1,$extend-$round3); 
            $round2 = $extend-$round3-$round1;
        }
        if($round1>$minPower&&$round1<$power){
            $minPower =$round1;
        }
        if($round2>$minAgile&&$round2<$agile){
            $minAgile =$round2;
        }
        if($round3>$minIntelligence&&$round3<$intelligence){
            $minIntelligence = $round3;
        }
        $biology['power']  = rand($minPower,$power); 
        $biology['agile']  = rand($minAgile,$agile); 
        $biology['intelligence'] = rand($minIntelligence,$intelligence); 


        $behange=rand(1,1000);
        if($behange<60){    //平均 20个出一个异形
            //8%概率进化--融合成异形  属性提升1-10
            $biology['yiXing']=1;   
            $biology['color'] = User ::colorRand(); //随机颜色
            $biology['power']  = $biology['power'] + rand(1,10); 
            $biology['agile']  = $biology['agile']+rand(1,10); 
            $biology['intelligence'] = $biology['intelligence'] +rand(1,10); 
            // 异形随机技能
            $skill =BiologySkill::find()->select("id")->asArray()->orderBy('RAND()')->One();
            $biology['skill'] = !empty($biology['skill'])  ? $biology['skill'].','.$skill['id'] : $skill['id'] ;
         }else{
            $biology['yiXing']=0;
         }

   
        return $biology;
    }

    // 随机颜色
    public static function colorRand(){
        $palette = array(
            "#000", "#444", "#666", "#999", "#ccc", "#eee", "#f3f3f3", "#fff",
            "#f00", "#f90", "#ff0", "#0f0", "#0ff", "#00f", "#90f", "#f0f",
            "#f4cccc", "#fce5cd", "#fff2cc", "#d9ead3", "#d0e0e3", "#cfe2f3", "#d9d2e9", "#ead1dc",
            "#ea9999", "#f9cb9c", "#ffe599", "#b6d7a8", "#a2c4c9", "#9fc5e8", "#b4a7d6", "#d5a6bd",
            "#e06666", "#f6b26b", "#ffd966", "#93c47d", "#76a5af", "#6fa8dc", "#8e7cc3", "#c27ba0",
            "#c00", "#e69138", "#f1c232", "#6aa84f", "#45818e", "#3d85c6", "#674ea7", "#a64d79",
            "#900", "#b45f06", "#bf9000", "#38761d", "#134f5c", "#0b5394", "#351c75", "#741b47",
            "#600", "#783f04", "#7f6000", "#274e13", "#0c343d", "#073763", "#20124d", "#4c1130"
        );
        $key = array_rand($palette,1);
        return $palette[$key]  ; 
    }





    // 根据白值（智力敏） 固定属性
    public static function biolobyChange($biology){
        $power =  intval($biology['power']);
        $agile =  intval($biology['agile']);
        $intelligence =  intval($biology['intelligence']);
        $lucky = intval($biology['lucky']);

        $wuXing =  intval($biology['wuXing']);
        $grade =  intval($biology['grade']);
        $score =  intval($biology['score']);

        // $reiki =  intval(  intval($biology['reiki'])*$grade + (($grade-1)*($power+$agile+$intelligence)/$grade )*0.2);
        $reiki = intval($biology['reiki']);

        $biology['shengMing'] = 100 + $grade*100+$power*10+$agile*2+$intelligence*2; 
        $biology['moFa'] = intval(50+$grade+$power*0.02+$agile*0.02+$intelligence*0.1); 
        
        $biology['gongJi'] =$grade*10 + intval(($power*0.2+$agile+$intelligence*0.2)*1.2)+$reiki*2; 
        $biology['huJia'] = $grade+intval(($power*0.2+$agile+$intelligence*0.2)*0.3)+$reiki*2; 

        $biology['faGong'] = $grade*10 + intval(($power*0.2+$agile*0.2+$intelligence)*1.2)+$reiki*2; 
        $biology['fakang'] = $grade+intval(($power*0.2+$agile*0.2+$intelligence)*0.3)+$reiki*2; 
        $biology['reiki'] =  $reiki;

        $biology['jianShang'] = 0;
        $biology['zhenShang'] = 0;
        $biology['shanbi'] = intval($lucky*0.1);
        $biology['suDu'] = intval(100+$agile*0.3+$reiki*0.3);

        $skillscore= !empty($biology['skill']) ? count(explode(',',$biology['skill']))*50 : 0; // 技能个数战力

        $biology['special'] =$biology['shengMing']+$biology['moFa']+$biology['gongJi']+$biology['huJia']+$biology['faGong']+$biology['fakang']+$biology['reiki']+$biology['jianShang']+$biology['zhenShang']+$biology['shanbi']+$biology['suDu']+$skillscore; //战力
        // $biology['scoreGrade'] = User :: getValueList($score);// 根据评分修改品质--不定义品质
        $biology['jingBi'] = $score*2+$grade*2+$biology['state']*10; 
        $biology['jingYan'] = $score+$grade*2+$biology['state']*5; 
        return $biology;
    }

    /**
     * 评分等级列表
     */
     public static function getValueList($score){
        if($score>1){   $scoreGrade  = 'D';  }
        if($score>70){   $scoreGrade= 'C';  }
        if($score>90){   $scoreGrade= 'B';  }
        if($score>110){   $scoreGrade= 'A';  }
        if($score>130){   $scoreGrade= 'S';  }
        if($score>150){   $scoreGrade= 'SS';  }
        if($score>180){   $scoreGrade= 'SSS';  }
        if($score>210){   $scoreGrade= '传说';  }
        if($score>240){   $scoreGrade= '神话';  }
        return $scoreGrade;
      }





    // 属性刷新
    public static function BiologyBrushRand($biology){
        //定义属性
        $power =  intval($biology['power']);
        $agile =  intval($biology['agile']);
        $intelligence =  intval($biology['intelligence']);
        $biologyid =$biology['biologyid'];
        $max = Biology::find()->select('power,agile,intelligence')->asarray()->where("id =$biologyid")->One();
        $power['power'] =  User :: randNum($max['power'],$power);// 当前和最大值区间
        $agile['agile'] =  User :: randNum($max['agile'],$agile);// 当前和最大值区间
        $biology['intelligence'] =  User :: randNum($max['intelligence'],$intelligence);// 当前和最大值区间
        return $biology ;
    }

    // 刷新区间
    public static function randNum($max,$min){
        $num =  intval($max)-intval($min); // 当前和最大值区间      
        if($num==0){
            $rand = rand(1,5);
            $min =  $min-$rand;
        }else{
            if($num>5){ //获取随机值
                $rand = rand(1,5);
                if(rand(0,1)){//为真保留1
                    $min =  $min-$rand;
                }else{
                    $min =  $min+$rand;
                }
            }else{ // 属性不足5  随机减少1-5  增加 1-最大值
                if(rand(0,1)){//为真保留1
                    $rand = rand(1,5);
                    $min =  $min-$rand;
                }else{
                    $rand = rand(1,$num);
                    $min =  $min+$rand;
                }
            }
        }
        return $min;
    }

    // 属性训练
    public static function BiologyTrainRand($biology){

        $userid = $biology['userid'];
        $biologyid = $biology['biologyid'];
        $biologyid=1;
// var_dump($userid);die;
        //定义属性
        $power =  intval($biology['power']);
        $agile =  intval($biology['agile']);
        $intelligence =  intval($biology['intelligence']);
 

        $max = Biology::find()->select('power,agile,intelligence')->asarray()->where("id =$biologyid")->One();
    
        $findid = UserHandbook :: findHandbook($biologyid,1);

        if(!empty($findid )){ // 用户是否图鉴
            $biology['power'] =  User :: randTrain($max['power'],$power);// 当前和最大值区间
            $biology['agile'] =  User :: randTrain($max['agile'],$agile);// 当前和最大值区间
            $biology['intelligence'] =  User :: randTrain($max['intelligence'],$intelligence);// 当前和最大值区间
        }else{ // 没图鉴只加1
            $power['power'] =   $power+1;
            $agile['agile'] =  $agile+1;
            $biology['intelligence'] =  $intelligence+1;
        }
        return $biology ;
    }


    // 训练区间
    public static function randTrain($max,$min){
        $num =  intval($max)-intval($min); // 当前和最大值区间      
        if($num==0){
            $min =  $min+1;
        }else{
            if($num>5){ //获取随机值
                $rand = rand(1,5);
                $min =  $min+$rand;
            }else{ // 属性不足5  随机减少1-5  增加 1-最大值
                $rand = rand(1,$num);
                $min =  $min+$rand;
            }
        }
        return $min;
    }



    // 融合无上限+10
    public static function BiologyPowerRand($biology1,$biology2,$extend){
        //定义属性
        $power1 =  intval($biology['power']);
        $agile1 =  intval($biology['agile']);
        $intelligence1 =  intval($biology['intelligence']);

        $power2 =  intval($biology2['power']);
        $agile2 =  intval($biology2['agile']);
        $intelligence2 =  intval($biology2['intelligence']);
        
        //幸运加成
        $extendrand = rand(0,intval($extend/3));
        $extendrand = $extendrand>0? $extendrand :1   ; 

        // 融合属性上限+10
        $power = max($power1,$power2)+10;
        $agile = max($agile1,$agile2)+10;
        $intelligence = max($intelligence1,$intelligence2)+10;
   
        $value =User:: BiologyExtenValue($power,$agile,$intelligence,$extendrand); //属性加成随机取值

        //概率融合 50
        if(rand(0,1)){//为真保留1
            if($biology1['yiXing']==0){
                $biology1['power']=$value['power'];
                $biology1['agile']=$value['agile'];
                $biology1['intelligence']=$value['intelligence'];
            }else{
                $biology1['power']  = $value['power'] + rand(1,10); 
                $biology1['agile']  = $value['agile']+rand(1,10); 
                $biology1['intelligence'] = $value['intelligence'] +rand(1,10); 
            }
            return  $biology1;
        }else{//为假保留2
            if($biology2['yiXing']==0){
                $biology2['power']=$value['power'];
                $biology2['agile']=$value['agile'];
                $biology2['intelligence']=$value['intelligence'];
            }else{
                $biology2['power']  = $value['power'] + rand(1,10); 
                $biology2['agile']  = $value['agile']+rand(1,10); 
                $biology2['intelligence'] = $value['intelligence'] +rand(1,10); 
            }
            return  $biology2;            
        } 

    }


    // 属性加成随机取值
    public static function BiologyExtenValue($power,$agile,$intelligence,$extendrand){
        if($extendrand < $power){
            $power =  rand(rand(1,$extendrand),$power );
        }else{
            $power = rand(1,$power);
        }

        if($extendrand < $agile){
            $agile =  rand(rand(1,$extendrand),$agile );
        }else{
            $agile = rand(1,$agile);
        }
        if($extendrand < $intelligence){
            $intelligence =  rand(rand(1,$extendrand),$intelligence );
        }else{
            $intelligence = rand(1,$intelligence);
        }
        return array('power'=>$power,'agile'=>$agile,'intelligence'=>$intelligence);
    }

}
