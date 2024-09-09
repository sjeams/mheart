<?php
// 缓存数据库
return [
    'class' => 'yii\redis\Connection',
    'hostname' => '127.0.0.1',
    'port' => 6379,
    'database' => 0,
    'password' => 'yincan1993', // 这里填写你的Redis密码
];



// 如有必要可以设置多个缓存数据库
// 'redis' => [
//     'class' => 'yii\redis\Connection',
//     'hostname' => 'redis-host',
//     'port' => 6379,
//     'database' => 0,
// ],
// 'redis2' => [
//     'class' => 'yii\redis\Connection',
//     'hostname' => 'redis-host',
//     'port' => 6379,
//     'database' => 1,
// ],

// $redis = Yii::$app->redis;
// $redis2 = Yii::$app->redis2;
 
// // 使用 $redis 和 $redis2 进行操作
