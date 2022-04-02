<?php
namespace app\libs;
//概率计算
use app\modules\cn\models\User;
use yii;
use yii\data\Pagination;
class Probability{

    public function extendRound($section,$grade){
        $power= rand(1,10);
        $agile= rand(1,10);
        $intelligence= rand(1,10);
        $result=self:: extendRoundProbability($power,$agile,$intelligence);
        return $result;
    }
    // public function extendRound($power,$agile,$intelligence){
    //     var_dump(111);
    // }
    
    public static function extendRoundProbability($power,$agile,$intelligence){
    // 定义一个数组，里面有n个力量
    $num0 = array_fill(0, $power,'A'); 
    // 定义一个数组，里面有n个敏捷
    $num1 = array_fill(0, $agile,'B'); 
    // 定义一个数组，里面有n个智力
    $num2 = array_fill(0, $intelligence,'C'); 
    // 总数组，里面总共100个元素
    $allNum = array_merge($num0, $num1, $num2);
    // 随机取一个元素
    $randKey = array_rand($allNum,3);
    // var_dump($randKey );die;
    foreach($randKey as $v){
        $randnum[] = $allNum[$v];
    }
    
    return $randnum;
    // 以上就可以实现出现0的概率是85% 出现1的概率是5% 出现2的概率是10%了,因为一共一百个数，里面有85个是0, 5个是1, 10个是2
    }
    
    
    // 定义物品概率评分
    public function getRandTen($section=1){  
        $result['grade'] =self::getRandGrade(); //物品等级
        //物品评分=图鉴等级+vip（上限10）
        $getRandNum   =self::getRandNum($section,$result['grade']); //物品评分
        $result['num'] = $getRandNum['num'];//物品评分
        $result['special']=$getRandNum['special']; //是否异形
        return $result;
    }
    
    //物品评分
    public static function getRandNum($section,$gragde) { 
        $array = array('传说'=>240,'SSS'=>200,'SS'=>180,'S'=>160,'A'=>120,'B'=>100,'C'=>80);
        $sectionSta=$section+intval($array[$gragde]-80)*10;
        $sectionEnd=intval($array[$gragde])*10+$section;
        if($gragde=='C'){ //定义最小值
            $sectionSta=600;   //随机数*了10，所以这里*10
        }else{
            $sectionSta=$section+intval($array[$gragde]-40)*10;
        }
        $result['num']= rand($sectionSta,$sectionEnd);
        if( $result['num']>$array[$gragde]*10 ){ // 是否异形 5-45  最大 8/1的几率,变异
            $result['special'] ='变异'; 
        }else{
            $result['special'] ='普通'; 
        }
        $result['num'] = round($result['num']/100,1);
        return $result;
    }
    
    //物品等级
    public static function getRandGrade() { 
        $proArr =array('传说'=>1,'SSS'=>10,'SS'=>50,'S'=>100,'A'=>200,'B'=>500,'C'=>1000);//定义物品等级
        $result = ''; 
        //概率数组的总概率精度 
        $proSum = array_sum($proArr); 
        //概率数组循环 
        foreach ($proArr as $key => $proCur) { 
            $randNum = mt_rand(1, $proSum);             //抽取随机数
            // var_dump($randNum);
            if ($randNum <= $proCur) { 
                $result = $key;                         //得出结果
                break; 
            } else { 
                $proSum -= $proCur;                     
            } 
        } 
        unset ($proArr); 
        return $result; 
    }
    
    //融合(刷新)成长区间15 --评分无上限 --大于SS不可融合--即评分超过24
    public static function getRandFuse($section,$monsterOne,$monsterTwo) { 
    
        //生物进化，随机评分上一级生物/传说上限
        $behange=rand(1,1000);
        if($behange>900){    
            //1%概率进化--融合成其它生物
            $monster='传说';
            $monster['special'] ='蜕化'; 
         }else{
            //概率融合 50
            if(rand(0,1)){//为真保留1
                $monster=$monsterOne;
            }else{//为假保留2
                $monster=$monsterTwo;
              
            } 
    
         }
    
    }
    
    
    
}
