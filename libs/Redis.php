<?php
namespace app\libs;

use app\modules\admin\models\Biology;
use yii;
use yii\data\Pagination;
use app\modules\admin\models\Words;
use app\modules\admin\models\User;

// use app\lib\ImgCompress;

class Redis
{
    //设置redis
    public static  function set($sessionStr='',$string,$time=0)
    {
        //redis默认有效时间为12小时
        $time =$time?$time:3600*12;
        $redis =Yii::$app->redis;
        $session_value = $redis->get($sessionStr);
        //查看是否存在
        if(!$session_value){
            // 设置10秒有效
            $redis->setex($sessionStr,$time,$string); //设置键值对           
        } 
    }
    //获取redis
    public static function get($sessionStr=[])
    {
        $redis =Yii::$app->redis;
        $list =$redis->get($sessionStr);
        return json_decode($list,true)?:[];
    }
    public static function clear()
    {
        $redis =Yii::$app->redis;
        $redis->flushdb(); // 清空当前数据库
        // $redis->flushall(); // 清空所有数据库
    }
    // // 去空格 大转小写
    // public   function get($key=[])
    // {
    //     // // 获取列表长度
    //     // Yii::$app->redis->llen('listKey');  // 6
    //     // // 返回列表的所有元素
    //     // Yii::$app->redis->lrange('listKey', 0, -1);  // ["fff","eee","aaa","bbb","ccc","ddd"]
    //     // // 移除并返回列表最右端的元素
    //     // Yii::$app->redis->rpop('listKey');   // ddd
    //     // // 移除并返回列表最左端的元素
    //     // Yii::$app->redis->lpop('listKey');   // fff


    //     // $redis->flushDB(); // 清空当前数据库
    //     // $redis->flushAll(); // 清空所有数据库
    //     // $res =Yii::$app->redis->set(1,'333');
    //     // $res =Yii::$app->redis->get(1);
    //     // var_dump($res);
    //     // // 移出并获取列表头部或尾部的第一个元素，如果没有值返回null
    //     // // Yii::$app->redis->lpop($key);
    //     // // Yii::$app->redis->rpop($key);
    //     // // 根据值进行移除 
    //     // $len = Yii::$app->redis->LLEN($key); //获取元素个数
    //     // Yii::$app->redis->lrem($key,$len,$value); 

    //     // 移出并获取列表头部或尾部的第一个元素，如果没有值返回null
    //     // Yii::$app->redis->lpop($key);
    //     // Yii::$app->redis->rpop($key);
        
    //     // 根据值进行移除 
    //     // $len = Yii::$app->redis->LLEN($key); //获取元素个数
    //     // Yii::$app->redis->lrem($key,$len,$value); 
    //     // var_dump( $res );die;
    //     // $res = Yii::$app->session->get($key)?:[];
    //     // 设置键的有效时间为300秒
    //     // $redis = Yii::$app->redis;
    //     // $redis->set('mykey', 'myvalue', 'EX', 300);
    //     // 或者使用setex命令
    //     // $redis->setex('mykey', 300, 'myvalue');
    //     // 查看键的剩余生存时间
    //     // $ttl = $redis->ttl('mykey');
    //     // echo "The TTL of 'mykey' is $ttl seconds.";
            
    //     // Yii::$app->redis->set('var1','asdasd');    //设置key->value值
    //     // Yii::$app->redis->expire('var1',200);    //设置key的过期时间
    // }

 
}
