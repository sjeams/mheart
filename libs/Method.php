<?php
namespace app\libs;

use app\modules\admin\models\Biology;
use yii;
use yii\data\Pagination;
use app\modules\admin\models\Words;
use app\modules\admin\models\User;

// use app\lib\ImgCompress;

class Method
{

    // 去空格 大转小写
    public static function getMytrim($str)
    {
        $search = array(" ", "　", "\n", "\r", "\t","&nbsp;"," ");
        $replace = array("", "", "", "", "", "", "");
        //  替换并大转小写
        $string = strtolower(str_replace($search, $replace, $str));
        //  strtoupper($string);
        return $string;
    }

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
     * 多维数组的传递
     * @Author: Ferre
     * @create: 2020/4/15 15:34
     * @param $url
     * @param $data
     * @return bool|string
     */
    public static function curl_post_fix($url,$data){
        $url = str_replace(' ','+',$url);

        $ch = curl_init();
        //设置选项，包括URL
        curl_setopt($ch, CURLOPT_URL, "$url");
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, FALSE);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, FALSE);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_HEADER, 0);
        curl_setopt($ch,CURLOPT_TIMEOUT,3);  //定义超时3秒钟
        // POST数据
        curl_setopt($ch, CURLOPT_POST, 1);
        // 把post的变量加上
        curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($data));

        //执行并获取url地址的内容
        $output = curl_exec($ch);
        //释放curl句柄
        curl_close($ch);
        return $output;
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

 

    /**
    * 接口字符串
    * @param $code
    * @param $data
    * @param $message
    * @return string
    * @Obelisk  sjeam(创建)
    */
    public static function jsonApp($code,$data,$message){
        // var_dump($data);die;
        return json_encode(['code' => $code,'data' => $data,'message' => $message]);
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
    public static function totalRand($wordid=1){
        $word = Words::find()->select("type,difficult")->where("id=$wordid")->One();
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





  //物品等级--触发概率计算
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

  //技能发动顺序  bout 回合默认为0 --is_do  0被动  1触发 2主动
  public static function getSkillSort($data,$bout=0,$is_do){
    // 技能类型(0初始化,1回合化--初始化,被击前触发,被击后触发,攻击前触发,主动,攻击后触发）
    $position = 0;//攻击位置 位置position_id
    $attack = POSITION_ENEMY; //攻击对象--默认为敌人
    //根据类型重新写入列表--主动 和被动
    $skill_zd=[];  //主动技能
    $skill_bd=[];  //主动触发
    $beji=[];  //被动
    foreach($data as$key=> $v){
        $belong = $v['belong'];
        $attack_belong = $v['attack'];
        //被动不写入触发
        if($attack_belong==POSITION_NO){
            $beji[]= $v;
        }else{
            if($v['bout']==0||$bout==$v['bout']){ //查看技能 的回合持续时间
                switch($belong){
                    case 0: //初始化
                        $skill_bd[$key]= $v;
                    case 1: //回合化--初始化   // 回合开始触发技能 类似于--3-5个回合和消失 的护盾，攻击之类的，初始化不再有值--可以随时加入技能
                            $skill_bd[$key]= $v;
                    break;
                    case 2: //被击前触发
                        $skill_bd[$key]= $v;
                    break;
                    case 3: //被击后触发
                            $skill_bd[$key]= $v;
                    case 4: //攻击前触发 
                            $skill_bd[$key]= $v;
                    break;
                    case 5: //主动）
                        $skill_zd[$key]= $v;
                    break;
                    case 6: //攻击后触发
                        $skill_bd[$key]= $v;
                    break;
                }
            }
        }
    }
    //随机取一个
    if($skill_zd){
        $zhudong_key = array_rand($skill_zd);
        $zd[$zhudong_key] = $skill_zd[$zhudong_key];
        $attack = intval($skill_zd[$zhudong_key]['attack']);
        $skill_zd = $zd;
        $is_skill =1;//返回主触发--技能伤害
    }else{
        $is_skill =0;//无主动技能--普通伤害
    }
    
    if($is_do==POSITION_NO){
        $data =  $beji;
        $attack = POSITION_NO;
    }else{
        $data = array_merge($skill_bd,$skill_zd);
    }
    $belong_sort = array_column($data,'belong');
    //根据攻击类型排序
    array_multisort( $belong_sort,SORT_ASC,$data);
    return array(
        'position'=>$position,
        'skill'=>$data,
        'attack'=>$attack,
        'is_skill'=>$is_skill,
    );
  }

  public static function percentHurt($status,$hurt,$value,$formula,$isadd,$is_result=0){
    $isadd=intval($isadd);
    $status=intval($status);
    $hurt=$hurt;
    $value=intval($value);
    if($formula){
        //附带属性
        $result = eval("return (($status.$formula*100)/100);");
        // var_dump($result);
        $percent  = 1+($value*0.01*100)/100;
    }else{
        $result=0;
        $percent = 1+($value*0.01*100)/100;
    }
    if($isadd){
        $att = $percent*(+$result+$hurt);
    }else{
        $att = $percent*(-$result+$hurt);
    }
    return $att;
}


    /** 数组分组
    * sjeam
    * 参数 ： arrayfilter(数组，字段，字段值）
    */
    public static function arrayfilter($action,$str,$value,$type=false){
        if($type){
            $data = array_filter($action, function($val) use($str,$value,$type) {
                if( $type ==1 ){
                    return $val[$str]>$value;
                }else{
                    return $val[$str]<=$value;
                }
            }); 
        }else{
            $data = array_filter($action, function($val) use($str,$value) { return $val[$str]== $value; }); 
        }
        ksort($data); //排序
        return $data;
    }
 


    //生物容器
    public static  function setBiologyPosition($merge_biology_extend,$bout){
        //生物初始属性备份 0回合备份一次，后面不再进入此逻辑
        if($bout==0){
            foreach($merge_biology_extend as$key=>$v){
                $merge_biology_extend[$key]['biology_start_extend']=$v;
            }
        }
        $merge_biology_extend = array_column($merge_biology_extend,null,'id');//id作为key
        //九宫格位置
        $position=[];
        for ($i=1; $i<=9; $i++){
            $position[$i]=[];
        }
        $my_biology_extend['position']=$position;
        $do_biology_extend['position']=$position;
        $position_my_list = Method::arrayfilter($merge_biology_extend,'position_my',POSITION_MY);//获取敌方阵容
        $position_enemy_list = Method::arrayfilter($merge_biology_extend,'position_my',POSITION_ENEMY);//获取敌方阵容
        $position_my_list = array_column($position_my_list,null,'position');
        $position_enemy_list = array_column($position_enemy_list,null,'position');
        foreach($position_my_list as$key=> $v){
            $my_biology_extend['position'][$key]=$v;//写入定位
        }
        foreach($position_enemy_list as$key=> $v){
            $do_biology_extend['position'][$key]=$v;//写入定位
        }
        // $my_biology['position_my_list'] = $position_my_list;
        // $do_biology['position_enemy_list'] =  $position_enemy_list;
        // Yii::$app->session->set('my_biology_extend',$my_biology_extend);
        // Yii::$app->session->set('do_biology_extend',$do_biology_extend); 
        // Yii::$app->session->set('merge_biology_extend',$merge_biology_extend); 
        $biology['my_biology_extend']=$my_biology_extend;
        $biology['do_biology_extend']=$do_biology_extend;
        $biology['merge_biology_extend']=$merge_biology_extend;
        return  $biology;
    }
    // 获取生物容器
    public static  function getBiologyPosition($type){
        switch($type){
            case POSITION_MY: 
                $data=  Yii::$app->session->get('my_biology_extend');   
            break;
            case POSITION_ENEMY: 
                $data=  Yii::$app->session->get('do_biology_extend'); 
            break;
            case MERGE_BIOLOGY: 
                $data=  Yii::$app->session->get('merge_biology_extend');    
            break;
            case FIGHTING_HISTORY: 
                $data=  Yii::$app->session->get('fighting_history');    
            break;
        }
        return $data;
    }   



    //  总属性最大值为210   --暂时没用
    //划分随机数  total总值  arrayMax最大值数组 arrayMin 最小值数组 wordtype世界难度+每个难度属性区间上升5,difficult加难度的属性1
    // public static function divideRand($total = 70,$arrayMax = array(10,20,30),$wordid=1){
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
    // 微信请求
    public static function  wechatHttpRequest($url, $data='', $method='GET'){
        $curl = curl_init();  
        curl_setopt($curl, CURLOPT_URL, $url);  
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);  
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);  
        curl_setopt($curl, CURLOPT_USERAGENT, $_SERVER['HTTP_USER_AGENT']);  
        curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1);  
        curl_setopt($curl, CURLOPT_AUTOREFERER, 1);  
        if($method=='POST')
        {
            curl_setopt($curl, CURLOPT_POST, 1); 
            if ($data != '')
            {
                curl_setopt($curl, CURLOPT_POSTFIELDS, $data);  
            }
        }
     
        curl_setopt($curl, CURLOPT_TIMEOUT, 30);  
        curl_setopt($curl, CURLOPT_HEADER, 0);  
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);  
        $result = curl_exec($curl);  
        curl_close($curl);  
        return $result;
      }

       // 微信解密
      public static function wechatDecryptData($encryptedData, $iv,$sessionKey )
      {
        $aesKey=base64_decode($sessionKey);
        $aesIV=base64_decode($iv);
        $aesCipher=base64_decode($encryptedData);
        
        $result=openssl_decrypt( $aesCipher, "AES-128-CBC", $aesKey, 1, $aesIV);
        
        $dataObj=json_decode( $result );

        return $dataObj;
      }

    //下载图片保存到本地
    // public static function curl_file_get_contents($url,$path){
    //     $hander = curl_init();
    //     $fp = fopen($path,'wb');
    //     curl_setopt($hander,CURLOPT_URL,$url);
    //     curl_setopt($hander,CURLOPT_FILE,$fp);
    //     curl_setopt($hander,CURLOPT_HEADER,0);
    //     curl_setopt($hander,CURLOPT_FOLLOWLOCATION,1);
    //     curl_setopt($hander,CURLOPT_TIMEOUT,60);
    //     curl_exec($hander);
    //     curl_close($hander);
    //     fclose($fp);
    //     return $path;
    // }

    //   public static function getBase64($url){
    //     $res=Method::curl_file_get_contents($url,'test1.jpg');   //$url 为图片路径
    //     // var_dump($res);die;
    //     $dst_img = 'text.jpg';//压缩后图片的名称
    //     (new ImgCompress($res))->compressImg($dst_img);  //这里的self::PERCENT  是定义的常亮 即 压缩比例  默认不传为 0.5，数据在 0-1 之间
    //     $base64=ImgCompress::base64EncodeImage($dst_img);
    //     unlink($res);  //删除本地图片
    //     unlink($dst_img); //删除本地图片
    //     return $base64;
    // }



    public static function GetVideos($url) {

        $ch = curl_init();
        
        curl_setopt($ch, CURLOPT_URL, $url);
        
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        
        curl_setopt($ch, CURLOPT_HEADER, false);
        
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        
        curl_setopt($ch, CURLOPT_HTTPHEADER, ["user-agent: Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A5376e Safari/8536.25"]);
        
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, false);
        
        $output = curl_exec($ch);
        
        curl_close($ch);
        
        return $output;
        
    }
    public static  function GetUrl($url){

    $UserAgent = 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; SLCC1; .NET CLR 2.0.50727; .NET CLR 3.0.04506; .NET CLR 3.5.21022; .NET CLR 1.0.3705; .NET CLR 1.1.4322)';

    $curl = curl_init();

    curl_setopt($curl, CURLOPT_URL, $url);

    curl_setopt($curl, CURLOPT_HEADER, 0);

    curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);

    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);

    curl_setopt($curl, CURLOPT_ENCODING, '');

    curl_setopt($curl, CURLOPT_USERAGENT, $UserAgent);

    curl_setopt($curl, CURLOPT_FOLLOWLOCATION, 1);

    $data = curl_exec($curl);

    curl_close($curl);

    return $data;

    }


    //战斗数据
    public static function fightingJson($jsonArray,$name){
        $file_path = '/app_resources/fighting/history';
        // 生成目录
        if(!file_exists($file_path)){
            mkdir($file_path,0777);
        }
        // 生成路由
        $path = $file_path.'/'.$name.'.json';
        $strjson = json_encode($jsonArray,JSON_UNESCAPED_UNICODE);//中文不强制转义
        file_put_contents($_SERVER['DOCUMENT_ROOT'].$path,$strjson);
        // $strjson = json_encode($jsonArray,JSON_UNESCAPED_UNICODE);//中文不强制转义
        // $fp = fopen($jsonFile,'w');//此处$jsonFile可以使用目录等设置
        // fputs($fp, $strjson); 
        // fclose($fp);
        return  $path;
    }


}
