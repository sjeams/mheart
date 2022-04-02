<?php
namespace app\libs;
use yii;
use yii\data\Pagination;
use app\modules\admin\models\Words;
use app\modules\admin\models\User;
class Method
{
    /**
     * 分页函数
     * @param array $config 分页配置
     * @return array 分页
     * @Obelisk
     */
    public static function getPagedRows($config=[])
    {
        $pages=new Pagination(['totalCount' => $config['count']]);
        if(isset($config['pageSize']))
        {
            $pages->setPageSize($config['pageSize'],true);
        }
        return $pages;
    }

    /**
     * @Author: Ferre
     * @create: 2019/9/4 16:49
     * @param $where
     * 设置订单session-为下载Excel做准备
     */
    public static function setRecordSession($where)
    {
        $session = new yii\web\Session();
        $session->set('record_condition', $where);
    }

    /**
     * 生成时间简易时间
     * 最近一天返回 多久时间前  超过一天返回年月日
     * by yanni
     */
    public static function gmstrftimeC($pTime){
        $front = time()-strtotime($pTime);
        if($front<86400){
            $dataTime = floor($front/3600)."小时前";
            if($front<3600){
                $dataTime = floor($front/60)."分钟前";
                if($front<60){
                    $dataTime = $front."秒前";
                }
            }
        } else{
            $dataTime = date("Y-m-d",strtotime($pTime));
        }
        return trim($dataTime);
    }
    /**
     * 数组字段转化为字符串
     * @param $the_time
     * @return bool|string
     * @Obelisk
     */
    public static function arrGoStr($arr,$field) {
        $str = '';
        foreach($arr as $v){
            $str .= $v[$field].",";
        }
        return substr($str,0,-1);
    }

    /**
     * 生成时间 时、分、秒
     * by yanni
     */
    /**
     *      把秒数转换为时分秒的格式
     *      @param Int $times 时间，单位 秒
     *      @return String
     */
    public static function secToTime($times){
        $result = '';
        if ($times>0) {
            $hour = floor($times/3600);
            $minute = floor(($times-3600 * $hour)/60);
            $second = floor((($times-3600 * $hour) - 60 * $minute) % 60);
            if($hour>0){
                $result .= $hour.'时';
            }
            if($minute>0){
                $result .= $minute.'分';
            }
            if($second>0){
                $result .= $second.'秒';
            }
        }else{
            $result = 0;
        }
        return $result;
    }
    /**
     * 时间戳转换
     * by yanni
     */
    public function gmstrftimeB($seconds)
    {
        if ($seconds > 3600*24*365) {
            $year = intval($seconds / (3600*24*365));
            $seconds = $seconds % (3600*24*365);
        }
        if ($seconds > 3600*24*30) {
            $month = intval($seconds / (3600*24*30));
            $seconds = $seconds % (3600*24*30);
        }
        if ($seconds > 3600*24) {
            $day = intval($seconds / (3600*24));
            $seconds = $seconds % (3600*24);
        }
        if ($seconds > 3600) {
            $hours = intval($seconds / 3600);
            $seconds = $seconds % 3600;
        }
        if ($seconds > 60) {
            $minutes = intval($seconds / 60);
            $seconds = $seconds % 60;
        }
        $time = '';
        if (!empty($year)) {
            $time .= $year . '年';
        }
        if (!empty($month)) {
            $time .= $month . '月';
        } else {
            if(!empty($year)){
                $time .= '零';
            }
        }
        if (!empty($day)) {
            $time .= $day . '天';
        } else{
            if(!empty($month)){
                $time .= '零';
            }
        }
        if (!empty($hours)) {
            $time .= $hours . '小时';
        } else{
            if(!empty($month)){
                $time .= '零';
            }
        }
        if (!empty($minutes)) {
            $time .= $minutes . '分钟';
        } else{
            if(!empty($hours)){
                $time .= '零';
            }
        }
        $time .= $seconds .'秒';
        return trim($time);
    }
    public static function getTextHtmlArr($html)
    {
        $replace_array = array('<label>' => '','</label>'=>'');
        $html = str_replace(array_keys($replace_array), array_values($replace_array),$html); //过滤label标签
        if (strpos($html,"</li>") == true){
            preg_match_all ("|<li>(.*?)<\/li>|s", $html, $data,PREG_PATTERN_ORDER);
            $data = $data[1];
            if (strpos($html,"</p>") == true) {
                preg_match_all("/<p.*>(.*)<\/p>/isU", $html, $data1,PREG_PATTERN_ORDER);
                $data = $data1[1];
            }
            if (strpos($html,"<br") == true){
                if(strpos($html,"</span>") == true){
                    $preg = "/<span.*>(.*)<\/span>/isU" ;
                    preg_match_all($preg, $html, $data2, PREG_PATTERN_ORDER);
                    $data = $data2[1];
                }
            }
        }else
        if (strpos($html,"</p>") == true) {
            preg_match_all("/<p.*>(.*)<\/p>/isU", $html, $data1,PREG_PATTERN_ORDER);
            $data = $data1[1];
//            if (strpos($html,"<br") == true){
//                if(strpos($html,"</span>") == true){
//                    $preg = "/<span.*>(.*)<\/span>/isU" ;
//                    preg_match_all($preg, $html, $data2, PREG_PATTERN_ORDER);
//                    $data = $data2[1];
//                }
//            }
        }else
        if (strpos($html,"<br") == true){
            $preg = "/<span.*>(.*)<\/span>/isU" ;
            preg_match_all($preg, $html, $data2, PREG_PATTERN_ORDER);
            $data = $data2[1];
        }
        return $data;
    }
    /**
     * 生成32位字符串
     * @return string
     * @Obelisk
     */
    public static function guid()
    {
        mt_srand((double)microtime() * 10000);
        $charid = strtolower(md5(uniqid(rand(), true)));
        $uuid = substr($charid, 0, 8) . substr($charid, 8, 4) . substr($charid, 12, 4) . substr($charid, 16, 4) . substr($charid, 20, 12);
        return $uuid;
    }

    /**
     * 生成订单号
     * @return string
     * @Obelisk
     */
    public static function orderNumber()
    {
        $orderNumber = 'toefl'.time().rand(0,9);
        return $orderNumber;
    }

    /**
     * @param string $html html内容
     * @param string $tags 保留标签
     * @return string
     */
    public static function getextbyhtml($html = '', $tags = '')
    {
        if (!empty($html)) {
            $res = preg_replace('/&nbsp;/', ' ', trim(strip_tags(htmlspecialchars_decode($html), $tags)));
            $res = trim(preg_replace('/<(p|P)>\W+<\/(p|P)>/', '', $res));
        } else {
            $res = false;
        }
        return $res;
    }

    /**
     * 词典翻译
     * @Obelisk
     */
    public static function getTranslate($words){
        $url = "http://fanyi.youdao.com/openapi.do?keyfrom=5asdfasdf6&key=925644231&type=data&only=dict&doctype=json&version=1.1&q=".$words;
        $list = file_get_contents($url);
        $js_de = json_decode($list,true);
        if($js_de['errorCode'] != 0){
            $data = 0;
        }else{
            $js_de['basic']['us'] = $js_de['basic']['us-phonetic'];
            $js_de['basic']['uk'] = $js_de['basic']['uk-phonetic'];
            $data = $js_de['basic'];
        }
        return $data;
    }


    /**
     * 二维数组去重
     * by  yanni
     */
    public static function more_array_unique($arr=array()){
        foreach($arr[0] as $k => $v){
            $arr_inner_key[]= $k;   //先把二维数组中的内层数组的键值记录在在一维数组中
        }
        foreach ($arr as $k => $v){
            $v =join(",",$v);
            $temp[$k] =$v;      //保留原来的键值 $temp[]即为不保留原来键值
        }
        $temp =array_unique($temp);    //去重：去掉重复的字符串
        foreach ($temp as $k => $v){
            $a = explode(",",$v);   //拆分后的重组 如：Array( [0] => james [1] => 30 )
            $arr_after[$k]= array_combine($arr_inner_key,$a);  //将原来的键与值重新合并
        }
        return $arr_after;
    }

    /**
     * 生成字符串
     * @param $i
     * @return string
     * @Obelisk
     */
    public static function randStr($i){
        $str = "abcdefghijklmnopqrstuvwxyz";
        $finalStr = "";
        for($j=0;$j<$i;$j++)
        {
            $finalStr .= substr($str,rand(0,25),1);
        }
        return $finalStr;
    }

    /**
     * post请求
     * @param $url
     * @param string $post_data
     * @param int $timeout
     * @return mixed
     * @Obelisk
     */
    public static  function post($url, $post_data = '', $timeout = 5){//curl

        $ch = curl_init();

        curl_setopt ($ch, CURLOPT_URL, $url);

        curl_setopt ($ch, CURLOPT_POST, 1);

        if($post_data != ''){

            curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post_data));

        }

        curl_setopt ($ch, CURLOPT_RETURNTRANSFER, 1);

        curl_setopt ($ch, CURLOPT_CONNECTTIMEOUT, $timeout);

        curl_setopt($ch, CURLOPT_HEADER, false);

        $file_contents = curl_exec($ch);

        curl_close($ch);

        return $file_contents;

    }

    public static function curl_post($url,$data){
        $url = str_replace(' ','+',$url);

        $ch = curl_init();
        //设置选项，包括URL
        curl_setopt($ch, CURLOPT_URL, "$url");
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch,CURLOPT_TIMEOUT,3);  //定义超时3秒钟
        // POST数据
        curl_setopt($ch, CURLOPT_POST, 1);
        // 把post的变量加上
        curl_setopt($ch, CURLOPT_POSTFIELDS, $data);

        //执行并获取url地址的内容
        $output = curl_exec($ch);
        //释放curl句柄
        curl_close($ch);
        return $output;
    }

 

    public static function score($res){
        $gpa = $res['gpa'];
        $gmat = $res['gmat'];
        $toefl = $res['toefl'];
        $school = $res['schoolGrade'];
        $work = $res['most'];
        if($gpa>10){
            $num1 = SchoolTest::find()->where("gpa<$gpa AND gpa>10")->count();
            $sign = round($gpa/100*4, 1);
            $num2 = SchoolTest::find()->where("gpa<$gpa")->count();
            $num = $num1+$num2;
            $gpa = $sign;
        }else{
            $num1 = SchoolTest::find()->where("gpa<$gpa")->count();
            $sign = ceil($gpa/4*100);
            $num2 = SchoolTest::find()->where("gpa<$gpa")->count();
            $num = $num1+$num2;
        }
        if($gpa>=3.5){
            $gpa = [
                'score' => $gpa,
                'num' => $num+2330,
                'type' => 1,
                'name' => 'GPA'
            ];
        }elseif($gpa>=3.0){
            $gpa = null;
        }else{
            $gpa = [
                'score' => $gpa,
                'num' => $num+117,
                'type' => 0,
                'name' => 'GPA'
            ];
        }

        if(!empty($gmat)){
            if($gmat<360){
                $num = SchoolTest::find()->where("gmat<$gmat")->count();
                if($gmat>=325){
                    $gmat = [
                        'score' => $gmat,
                        'num' => $num+2330,
                        'type' => 1,
                        'name' => 'GRE'
                    ];
                }elseif($gmat>=310){
                    $gmat = null;
                }else{
                    $gmat = [
                        'score' => $gmat,
                        'num' => $num+117,
                        'type' => 0,
                        'name' => 'GRE'
                    ];
                }
            }else{
                $num = SchoolTest::find()->where("gmat<$gmat AND gmat>360")->count();
                if($gmat>=720){
                    $gmat = [
                        'score' => $gmat,
                        'num' => $num+2330,
                        'type' => 1,
                        'name' => 'GMAT'
                    ];
                }elseif($gmat>=650){
                    $gmat = null;
                }else{
                    $gmat = [
                        'score' => $gmat,
                        'num' => $num+117,
                        'type' => 0,
                        'name' => 'GMAT'
                    ];
                }
            }
        }else{
            $gmat =null;
        }

        if($toefl<15){
            $num = SchoolTest::find()->where("toefl<$toefl")->count();
            if($toefl>=7){
                $toefl = [
                    'score' => $toefl,
                    'num' => $num+2330,
                    'type' => 1,
                    'name' => '雅思'
                ];
            }elseif($toefl>=6){
                $toefl = null;
            }else{
                $toefl = [
                    'score' => $toefl,
                    'num' => $num+117,
                    'type' => 0,
                    'name' => '雅思'
                ];
            }
        }else{
            $num = SchoolTest::find()->where("toefl<$toefl AND toefl>15")->count();
            if($toefl>=110){
                $toefl = [
                    'score' => $toefl,
                    'num' => $num+2330,
                    'type' => 1,
                    'name' => '托福'
                ];
            }elseif($toefl>=95){
                $toefl = null;
            }else{
                $toefl = [
                    'score' => $toefl,
                    'num' => $num+117,
                    'type' => 0,
                    'name' => '托福'
                ];
            }
        }

        $num = SchoolTest::find()->where("schoolGrade>$school")->count();
        if($school <=2){
            $school = [
                'name' => $res['attendSchool'],
                'num' => $num+2330,
                'type' => 1
            ];
        }elseif($school<=3){
            $school = null;
        }else{
            $school = [
                'name' => $res['attendSchool'],
                'num' => $num+117,
                'type' => 0
            ];
        }
        if($work == 6){
            $work = null;
        }else{
            $num = SchoolTest::find()->where("most>$work")->count();
            switch($work){
                case 1:$workName = '四大/500强';break;
                case 2:$workName = '四大/500强';break;
                case 3:$workName = '外企';break;
                case 4:$workName = '国企';break;
                case 5:$workName = '私企';break;
            }
            if($work <=2){
                $work = [
                    'name' => $workName,
                    'num' => $num+2330,
                    'type' => 1
                ];
            }elseif($work<=4){
                $work = null;
            }else{
                $work = [
                    'name' => $workName,
                    'num' => $num+117,
                    'type' => 0
                ];
            }
        }
      return ['gpa' => $gpa,'gmat' => $gmat,'toefl' => $toefl,'school' => $school,'work' => $work];
    }


    /**
    * 接口字符串
    * @param $code
    * @param $data
    * @param $message
    * @return string
    * @Obelisk  sjeam(创建)
    */
    public static function jsonGenerate($code,$data,$message){
        return json_encode(['code' => $code,'data' => $data,'message' => $message]);
    }

    // 资料领取  by jeam 
    public static function  getSource($source){
        $chat = '';
        // $title = Yii::$app->params['chat_title'][1];
        $chat = Yii::$app->params['chat_wx'][$source][date("w")];
        return  $chat;
    }

    /**
     * 数据类型和转码处理
     *  by jeam 
     */
     public static function handleMyComment($type, $data)
     {
         $types = ['type' => $type];
 
         if ($type == 1){
             array_walk($data, function (&$value) use($types) {
                 $value['title']   = base64_decode($value['title']);
                 $value['content'] = base64_decode($value['content']);
                 $value = array_merge($value, $types);
             });
         }else{
             array_walk($data, function (&$value) use($types) {
                 $value = array_merge($value, $types);
             });
         }
         return $data;
     }






    /**
     * 验证用户
     */
     public static function confim_user($data){
        $uid = $data['uid'];
        $phone = $data['phone'];
        $email = $data['email'];
        $nickname = $data['nickname'];
        $username = $data['username'];
        $user = User::find()->where("uid=$uid")->one();
        if($user){
            $userId = $user['id'];
            if($phone != $user['phone']){
                User::updateAll(['phone' => $phone],"id=$userId");
            }
            if($email != $user['email']){
                User::updateAll(['email' => $email],"id=$userId");
            }
            if($nickname != $user['nickname']){
                User::updateAll(['nickname' => $nickname],"id=$userId");
            }
            if($username != $user['userName']){
                User::updateAll(['userName' => $username],"id=$userId");
            }
        }else{
            $model = new User();
            $model->userName = $username;
            $model->nickname = $nickname;
            $model->email = $email;
            $model->userPass = '';
            $model->phone = $phone;
            $model->createTime = time();
            $model->uid = $uid;
            $model->save();
            $userId = $model->primaryKey;
        }
        $user = User::find()->where("id=$userId")->asArray()->one();
        Yii::$app->session->set('userId',$userId);
        Yii::$app->session->set("userData",$user);
        Yii::$app->session->set("uid",$uid);
        if (!empty($data['level'])){
            Yii::$app->session->set("level",$data['level']);
        }
    }









    //  新 monster 接口

    // 最大最小总数随机 --最大值超过120
    public static function totalRand($wordId=1){
        $word = Words::find()->select("type,difficult")->where("id=$wordId")->One();
        $maxadd = 45 + intval( (intval($word->type)-1)*5)+intval($word->difficult); //最大区间值为25 -- 最大值80
        $minadd = 5+intval( (intval($word->type)-1)*5)+intval($word->difficult); //最大区间值为30 -- 最大值30
        $maxtotal = $maxadd + $minadd*3;  //最大值 为 155 空技能评分ss , 5技能 180 sss
        $mintotal = $minadd*3;
        // vip10+职业10+图鉴40(暂定400生物)
        $change = User::BiologyChange();
        // var_dump($change);die;
        $maxtotal = rand($maxtotal,$maxtotal+intval($change));  //最大总值 区间+60   180---240
        $mintotal = rand($mintotal,$mintotal+intval($change));  //最小总值 区间+60   75 ---135
        $maxtotal = Method ::  randomDivInt(10,3,$maxtotal,1);//随机数组
        $mintotal = Method :: randomDivInt(1,3,$mintotal,2,$maxtotal);//随机数组
        // var_dump(array_sum($maxtotal));
        // var_dump(array_sum($mintotal));
        ksort($maxtotal);
        ksort($mintotal);

        return array('max'=> $maxtotal,'min'=>$mintotal);
    }


    //随机整型利用“不同”就有顺序的原理，
   public static function randomDivInt($min,$div,$total,$type,$maxtotal=array()){
        $remain=$total;  // 总数
        $max_sum=($div-1)*$div/2;
        $p=$div;  //最小值为1 min
        $a=array();
        for($i=0; $i<$div-1; $i++){
            $max=($remain-$max_sum)/($div-$i);
            $e=rand($min,$max);    
            $min=$e+1; $max_sum-=--$p;
            $remain-=$e;
            $a[$e]=true;
        }
        $a=array_keys($a);
        $a[]=$remain;
        // 随机$a 数据返回处理
        if($type==1){
           Method :: retain_key_shuffle($a); //保留键值打算数组
           $a= array_values($a);  //重新排序--定义索引
           arsort($a); //由大到小排序
        }else{
            arsort($a); //由大到小排序
            $a= array_values($a);  //重新排序--定义索引
            $num=0;
            foreach($maxtotal as $key=>$val ){
                $num++;
                $mintotal[$key] =$a[$num-1];    
            }
            $a = $mintotal;
        }
        // shuffle($a); //随机排序--打乱     
        return $a;
    }

    // 打乱数组--保留key
    public static function retain_key_shuffle(array &$arr){
        if (!empty($arr)) {
          $key = array_keys($arr);
          shuffle($key);
          foreach ($key as $value) {
            $arr2[$value] = $arr[$value];
          }
          $arr = $arr2;
        }
      }





  //物品等级
  public static function getRandGrade($proArr) { 
    // $proArr=array('传说'=>1,'SSS'=>10,'SS'=>50,'S'=>100,'A'=>200,'B'=>500,'C'=>1000);//定义物品等级
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









    //  总属性最大值为210   --暂时没用
    //划分随机数  total总值  arrayMax最大值数组 arrayMin 最小值数组 wordtype世界难度+每个难度属性区间上升5,difficult加难度的属性1
    // public static function divideRand($total = 70,$arrayMax = array(10,20,30),$wordId=1){
    //     // var_dump($totalrand);die;
    //     // var_dump($maxadd);die;
    //     $div = count($arrayMax); //分成的份数
    //     $average = round($total / $div);
    //     $sum = 0;
    //     $result = array_fill( 1, $div, 0 );
        
    //     for( $i = 1; $i < $div; $i++ ){
    //         //根据已产生的随机数情况，调整新随机数范围，以保证各份间差值在指定范围内
    //         if( $sum > 0 ){
    //         $max = 0;
    //         $min = 0 - round( $arrayMax[$i] / 2 );
    //         }elseif( $sum < 0 ){
    //         $min = 0;
    //         $max = round( $arrayMax[$i] / 2 );
    //         }else{
    //         $max = round( $arrayMax[$i] / 2 );
    //         $min = 0 - round( $arrayMax[$i] / 2 );
    //         }
            
    //         //产生各份的份额
    //         $random = rand( $min, $max );
    //         $sum += $random;
    //         $result[$i] = $average + $random;
    //     }
        
    //     //最后一份的份额由前面的结果决定，以保证各份的总和为指定值
    //     $result[$div] = $average - $sum;
    //     var_dump($result);
    //     //结果呈现
    //     // echo '划分情况：';
    //     // foreach( $result as $temp ){
    //     // echo $temp, '';
    //     // }
    //     echo '总和：', array_sum( $result );
    //     exit;
    // }

}
