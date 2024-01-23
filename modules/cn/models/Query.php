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
	public static function getVideo($search='封神榜',$type=1,$page=1)
	{
		switch($type){
			case 1:
	
				// $url ="https://www.taopianzy.com/home/search/si1_&ky$search.html";
				// https://www.yszzq.com/
				$http="https://www.taopianzy.com";
				$url = $http."/search.html?keyword=$search&page=$page";
				// $url = $http."/home/vodlist/1/1-1.html";
				$list =Query::getVideoTp($search,$type,$url,$http);
			break;
			case 2:  
				// $http="https://foxzyw.com";
				$http="https://ukuzy.com";
				$url = $http."/index.php/vod/search/page/$page/wd/$search.html";
				$list =Query::getVideofoxzyw($search,$type,$url,$http);
			break;
			case 3:
				// $http="https://kudianzy.com";
				$http="https://cc.bdzy0.com";
				$url = $http."/index.php/vod/search/page/$page/wd/$search.html";
				$list =Query::getVideoFox($search,$type,$url,$http);
			break;
		}
		return $list;	
	}

	// 淘片
	public static function getVideoTp($search,$type,$url,$http)
	{
		$rules = [
			'name' => array('td:eq(0) span:eq(0)','html','a'),
			'link' => array('td:eq(0) a','href',''),
		];
		$range = '.table tr:gt(0)';
		// var_dump($type);die;
		// var_dump($url );die;
		// 切片选择器,跳过第一条广告
		$list = QueryList::get($url)->rules($rules)->range($range)->query()->getData()->all();
		// var_dump($list );die;
		$urls =[];
		foreach($list as  $v){
			$urls[] =$http.$v['link'];
		}


		// 切片选择器----start
		$range = '.playList table tbody tr:nth-child(odd)'; // 奇数行
		// $range = '.playList table tbody tr:nth-child(even)';// 偶数行
		
		// 切片选择器,跳过第一条广告
		$rules = [
			// 'imageUrl' => array(' .left>img','data-original'),
			// 'name' => array('.right .name','html','span'),
			'title' => array('.title .download-title ','html','span'),
			'url' => array(' .tbAddr:eq(0) input','value',' '),
		];
		// 由于DOM解析的都是同一个网站的网页，所以DOM解析规则是可以复用的
		$sql = QueryList::rules($rules)->range($range);
		// $video = QueryList::get($html)->rules($rules)->range($range)->query()->getData()->all();
		$rules2 = [
			'imageurl' => array(' .left>img','data-original'),
			'title' => array('.right .name','html','span'),
			// 'url' => array(' .tbAddr:eq(0) input','value',' '),
		];
		foreach($urls as$key=> $url){
			// $html =$http.$v['link'];	
			// $rules = [
			// 	'imageUrl' => array(' .left>img','data-original'),
			// 	'name' => array('.right .name','html','span'),
			// 	'oname' => array('.right .line:eq(0) .text','html','span -font '),
			// 	'auto' => array('.right .line:eq(1)   .text:eq(0)','html','span -font '),
			// 	'language' => array('.right .line:eq(1)   .text:eq(1)','html','span -font '),
			// 	'Starring' => array('.right .line:eq(2)   .text:eq(0)','html','span -font '),
			// 	'address' => array('.right .line:eq(2)   .text:eq(1)','html','span -font '),
			// 	'type' => array('.right .line:eq(3)   .text:eq(0)','html','span -font '),
			// 	'longtime' => array('.right .line:eq(3)   .two:eq(1) ','html','span -font '),
			// 	'grade' => array('.right .line:eq(4)   .two:eq(0) font:eq(1)','html','span -font '),
			// 	'uptime' => array('.right .line:eq(4)   .two:eq(1) ','html','span -font '),
			// 	'pretags' => array(' #pretags','html',' '),
			// 	//视频地址
			// 	'm3u8' => array(' .tbAddr:eq(0) input','value',' '),
			// 	'm3u8video' => array(' .tbAddr:eq(1) input','value',' '),
			// ];
			// 切片选择器,跳过第一条广告
			$rt = QueryList::get($url)->rules($rules2)->query()->getData()->all();
			$rt ['belong']=0;
			$rt ['type']=$type;
			$rt ['search']=$search;
			// $video = QueryList::get($html)->rules($rules)->range($range)->query()->getData()->all();
			$video = $sql->get($url)->query()->getData()->all();
			// $rt['title'] =$video[0]['name'];
			// $rt['imageurl'] =$video[0]['imageurl'];
			$rt['video'] =	$video;
			$list[$key] =$rt;
			// var_dump($list[0]);
		}
		// var_dump($list );die;
		return $list;
		// var_dump($list );die;
		// ;die;
		
		// $url = "https://www.taopianzy.com/home/index.html";
		// $rules = [
		// 	'name' => array('td:eq(0)','html'),
		// 	'link'=>array(' a','href'),
		// 	'num' => array('td:eq(1)','html','span font'),
		// 	'title' => array('td:eq(2)','html',''),
		// 	'country' => array('td:eq(3)','html',''),
		// 	'time' => array('td:eq(4)','html',''),
		// ];
		// // 切片选择器,跳过第一条广告
		// $range = '.table tr:gt(0)';
		// $rt = QueryList::get($url)->rules($rules)->range($range)->query()->getData()->all();
		// var_dump($rt );die;

	}
public static function getVideofoxzyw($search,$type,$url,$http)
{
	$rules = [
		'name' => array(' a:eq(0)','html',''),
		'link' => array(' a:eq(0)','href','-em'),
	];
	$range = '.xing_vb li:gt(0)';
	// var_dump($type);die;
	// 切片选择器,跳过第一条广告
	$list = QueryList::get($url)->rules($rules)->range($range)->query()->getData()->all();
	$urls =[];
	foreach($list as  $v){
		$urls[] =$http.$v['link'];
	}
	// 切片选择器----start
	$range = '#play_1:eq(0)  li ';
	// 切片选择器,跳过第一条广告
	$rules = [
		// 'imageUrl' => array(' .left>img','data-original'),
		// 'name' => array('.right .name','html','span'),
		'title' => array(' a','title','-input'),
		'url' => array('  a','href','-input'),
	];
	// 由于DOM解析的都是同一个网站的网页，所以DOM解析规则是可以复用的
	$sql = QueryList::rules($rules)->range($range);
	// $video = QueryList::get($html)->rules($rules)->range($range)->query()->getData()->all();
	$rules2 = [
		'imageurl' => array(' .vodImg .lazy','src'),
		'title' => array('.vodh  h2','html',''),
		// 'url' => array(' .tbAddr:eq(0) input','value',' '),
	];
	
	foreach($urls as$key=> $url){
		// 切片选择器,跳过第一条广告
		$rt = QueryList::get($url)->rules($rules2)->query()->getData()->all();
		$rt ['belong']=0;
		$rt ['type']=$type;
		$rt ['search']=$search;
		$video = $sql->get($url)->query()->getData()->all();
		// $rt['title'] =$video[0]['name'];
		// $rt['imageurl'] =$video[0]['imageurl'];
		$rt['video'] =	$video;
		$list[$key] =$rt;
	}
	// var_dump($list[0]);die;
	return $list;

}

// 采集列表
public static function getVideoFox($search,$type,$url,$http)
{
	$rules = [
		'name' => array(' a:eq(0)','html',''),
		'link' => array(' a:eq(0)','href',''),
	];
	$range = '.stui-vodlist li:gt(0)';
	// var_dump($type);die;
	// 切片选择器,跳过第一条广告
	$list = QueryList::get($url)->rules($rules)->range($range)->query()->getData()->all();
	$urls =[];
	foreach($list as  $v){
		$urls[] =$http.$v['link'];
	}
	// 切片选择器----start
	$range = '.stui-content__playlist:eq(1) li ';
	// 切片选择器,跳过第一条广告
	$rules = [
		// 'imageUrl' => array(' .left>img','data-original'),
		// 'name' => array('.right .name','html','span'),
		'title' => array(' .copy_text','html','-span'),
		'url' => array('  .copy_text   .url','html',' '),
	];
	// 由于DOM解析的都是同一个网站的网页，所以DOM解析规则是可以复用的
	$sql = QueryList::rules($rules)->range($range);
	// $video = QueryList::get($html)->rules($rules)->range($range)->query()->getData()->all();
	$rules2 = [
		'imageurl' => array(' .img-responsive','src'),
		'title' => array('.stui-content .title ','html',''),
		// 'url' => array(' .tbAddr:eq(0) input','value',' '),
	];

	foreach($urls as$key=> $url){
		// 切片选择器,跳过第一条广告
		$rt = QueryList::get($url)->rules($rules2)->query()->getData()->all();
		$rt ['belong']=0;
		$rt ['type']=$type;
		$rt ['search']=$search;
		$video = $sql->get($url)->query()->getData()->all();
		// $rt['title'] =$video[0]['name'];
		// $rt['imageurl'] =$video[0]['imageurl'];
		$rt['video'] =	$video;
		$list[$key] =$rt;
	}
	// var_dump($list );die;
	return $list;

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
			$data = $ql->getHtml(); 
		// echo $data ;die;
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
