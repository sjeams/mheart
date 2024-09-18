<?php
$params = require __DIR__ . '/const.php';
$params = require __DIR__ . '/params.php';
$db = require __DIR__ . '/db.php';
$redis = require __DIR__ . '/redis.php';

Yii::$classMap['Method'] = '@app/libs/Method.php';
Yii::$classMap['UploadFile'] = '@app/libs/upload/UploadFile.php';
Yii::$classMap['AlipaySubmit'] = '@app/libs/yii2_alipay/AlipaySubmit.php';
Yii::$classMap['PHPExcel'] = '@app/libs/PHPExcel.php';
Yii::$classMap['PHPExcel_Writer_Excel5'] = '@app/libs/PHPExcel/Writer/Excel5.php';
Yii::$classMap['PHPExcel_Reader_Excel5'] = '@app/libs/PHPExcel/Reader/Excel5.php';
Yii::$classMap['PHPExcel_Reader_Excel2007'] = '@app/libs/PHPExcel/Reader/Excel2007.php';
Yii::$classMap['PHPExcel_IOFactory'] = '@app/libs/PHPExcel/IOFactory.php';
$config = [
    'id' => 'basic',
    'basePath' => dirname(__DIR__),
    'bootstrap' => ['log'],
    'aliases' => [
        '@bower' => '@vendor/bower-asset',
        '@npm'   => '@vendor/npm-asset',
    ],
    'modules' => [
        'cn' => [
            'class'=>'app\modules\cn\CnModule'
        ],
        'admin' => [
            'class'=>'app\modules\admin\AdminModule'
        ],
        'content' => [
            'class'=>'app\modules\content\ContentModule'
        ],
        'basic' => [
            'class'=>'app\modules\basic\BasicModule'
        ],
        'user' => [
            'class'=>'app\modules\user\UserModule'
        ],
        'app' => [
            'class'=>'app\modules\app\AppModule'
        ],
        'question' => [
            'class'=>'app\modules\question\QuestionModule'
        ],
        'wap' => [
            'class'=>'app\modules\wap\WapModule'
        ],
        'vue' => [
            'class'=>'app\modules\vue\VueModule'
        ],
    ],
 
    'components' => [
        'request' => [
            // !!! insert a secret key in the following (if it is empty) - this is required by cookie validation
            'cookieValidationKey' => 'ubpqVTyRsPjbIHry6aSKZD10LLN9Zw9H',
        ],
        'cache' => [
            'class' => 'yii\caching\FileCache',
            // 'class' => 'yii\redis\Cache',  //redis接管缓存
        ], 
       'user' => [
            'identityClass' => 'app\models\User',
            'enableAutoLogin' => true,
        ],
        'errorHandler' => [
            'errorAction' => 'site/error',
        ],
        'mailer' => [
            'class' => 'yii\swiftmailer\Mailer',
            // send all mails to a file by default. You have to set
            // 'useFileTransport' to false and configure transport
            // for the mailer to send real emails.
            'useFileTransport' => true,
        ],
        'log' => [
            'traceLevel' => YII_DEBUG ? 3 : 0,
            'targets' => [
                [
                    'class' => 'yii\log\FileTarget',
                    'levels' => ['error', 'warning'],
                ],
            ],
        ],

        'db' => $db,
        // 'signdb' => $signdb,
        'signdb' => require(__DIR__ . '/signdb.php'),
        'redis' =>$redis, //redis 缓存数据库
        'urlManager' => [
            'enablePrettyUrl' => true,
            'showScriptName' => false,
            'rules' => [
                ''=>'cn/login/login',  //首页
                'index.html' => 'cn/video/like',    //备考列表页
                'detail-<order_id:\w+>.html' => 'cn/user/detail',  
                // 'book/list.html' => 'cn/book/list',    //备考列表页
                // 'book/list-<type:\d+>.html' => 'cn/book/list',    //备考列表页
                // 'book/list-<type:\d+>-<page:\d+>-<pageSize:\d+>.html' => 'cn/book/list',    //备考列表页
             ],
        ],
        
    ],
    'params' => $params,
];

if (YII_ENV_DEV) {
    // configuration adjustments for 'dev' environment
    $config['bootstrap'][] = 'debug';
    $config['modules']['debug'] = [
        'class' => 'yii\debug\Module',
        // uncomment the following to add your IP if you are not connecting from localhost.
        //'allowedIPs' => ['127.0.0.1', '::1'],
    ];

    $config['bootstrap'][] = 'gii';
    $config['modules']['gii'] = [
        'class' => 'yii\gii\Module',
        // uncomment the following to add your IP if you are not connecting from localhost.
        //'allowedIPs' => ['127.0.0.1', '::1'],
    ];
}

return $config;
