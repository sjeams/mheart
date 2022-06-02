<?php 
/*
 * @Author: sjeam
 * @Date: 2022-06-01 14:37:42
 * @Description: 
 */
namespace app\modules\cn\models;
use yii\db\ActiveRecord;

use Yii;
use app\libs\Method;
use yii\data\Pagination;
// use app\libs\QueryList;

use function PHPSTORM_META\map;
use QL\QueryList;
class Query extends ActiveRecord {
    public $cateData;
	public static function getDb() {
        return Yii::$app->signdb;
    }
    public static function tableName(){
            // return '{{%query}}';
    }
	
	// 采集列表
    public static function getQueryUrl( )
    {
	 //DOM解析新浪微博需要登录才能访问的页面
	 	$urlParams = ['param1' => 'testvalue','params2' => 'somevalue'];
		// 采集百度搜索结果列表的标题和链接:
		$ql = QueryList::get('http://demo.samrithisak.com/microbank/entry_desktop/index.php',$urlParams ,[
			'headers' => [
				//填写从浏览器获取到的cookie
				'Cookie' => 'PHPSESSID=9BIGEL5B91NBLDVF; token=2d78f6faeaf084f0baab871be927510f'
			]
			]);
			// var_dump($ql);die;	
			// $data = $ql->getHtml(); 
			// 设置采集规则
			$data =	$ql->rules([ 
				'item' => array('.sec-title','html'),
				'link'=>array('.menu_a ','link'),
				// 'list'=>array('.menu_a','html'),
			]) 
			// ->range('#sidebar li ')->queryData(function($item){
			// 	// 注意这里的QueryList对象与上面的QueryList对象是同一个对象
			// 	// 所以这里要重置range()参数，否则会共用前面的range()参数，导致出现DOM解析不到结果的诡异现象
			// 	$item['list'] = QueryList::html($item['list'])->rules(array(
			// 			 'item' => array('.sec-title','text'),
			// 		))->range('')->queryData();
			// 	return $item;
			// });			
			->range('.sidebar li ul li')
			// ->queryData();
			->query()->getData()->all();
 
		 var_dump($data );die;
	}

 
}

?>
