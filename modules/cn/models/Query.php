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
	public static function getVideo($search='封神榜',$type=0,$page=1)
	{
		$list=[];
		switch($type){
			case 1:
				// $url ="https://www.taopianzy.com/home/search/si1_&ky$search.html";
				// https://www.yszzq.com/
				$http="https://www.taopianzy.com";//淘片
				$url = $http."/search.html?keyword=$search&page=$page";
				// $url = $http."/home/vodlist/1/1-1.html";
				$list =Query::getVideoTp($search,$type,$url,$http);
			break;
			case 2:  
				// $http="https://foxzyw.com";
				$http="https://ukuzy.com";//U酷
				$url = $http."/index.php/vod/search/page/$page/wd/$search.html";
				$list =Query::getVideofoxzyw($search,$type,$url,$http);
			break;
			case 3:
				// $http="https://kudianzy.com";
				$http="https://cc.bdzy0.com"; //百度云
				$url = $http."/index.php/vod/search/page/$page/wd/$search.html";
				$list =Query::getVideoFox($search,$type,$url,$http);
			break;
			case 4:
				//m3u8 解析接口 https://huyajx.com/play?url=
				// huyazy.com, huyaziyuan.com
				// $http="https://www.80kk.app/"; https://www.3ayy.com/vod-s/%E5%A5%B3----------1---.html
				$http="https://www.huyaapi.com"; //虎牙
				$url = $http."/index.php/vod/search/page/$page/wd/$search.html";
				$list =Query::getVideoFox4($search,$type,$url,$http);
			break; 
			case 5:
				//m3u8 解析接口 https://huyajx.com/play?url=
				// huyazy.com, huyaziyuan.com
				// $http="https://www.80kk.app/"; https://www.3ayy.com/vod-s/%E5%A5%B3----------1---.html
				$http="https://caiji.qhzyapi.com"; //奇虎
				$url = $http."/index.php/vod/search/page/$page/wd/$search.html";
				$list =Query::getVideoFox($search,$type,$url,$http);
			break;
			case 6:
				//m3u8 解析接口 https://huyajx.com/play?url=
				// huyazy.com, huyaziyuan.com
				// $http="https://www.80kk.app/"; https://www.3ayy.com/vod-s/%E5%A5%B3----------1---.html
				$http="https://hhzyapi.com";//火狐
				$url = $http."/index.php/vod/search/page/$page/wd/$search.html";
				$list =Query::getVideoFox6($search,$type,$url,$http);
			break;
			case 7:
				//m3u8 解析接口 https://huyajx.com/play?url=
				// huyazy.com, huyaziyuan.com
				// $http="https://www.80kk.app/"; https://www.3ayy.com/vod-s/%E5%A5%B3----------1---.html
				$http="https://jszyapi.com";//极速
				$url = $http."/index.php/vod/search/page/$page/wd/$search.html";
				$list =Query::getVideoFox6($search,$type,$url,$http);
			break;
			case 8:
			// 	//m3u8 解析接口 https://huyajx.com/play?url=
			// 	// huyazy.com, huyaziyuan.com
			// 	// $http="https://www.80kk.app/"; https://www.3ayy.com/vod-s/%E5%A5%B3----------1---.html
				$http="https://www.subozy.com/"; //速播
				$url = $http."/index.php/vod/search/page/$page/wd/$search.html";
				$list =Query::getVideoFox6($search,$type,$url,$http);
			// break;
			case 9:
				// 	//m3u8 解析接口 https://huyajx.com/play?url=
				// 	// huyazy.com, huyaziyuan.com
				// 	// $http="https://www.80kk.app/"; https://www.3ayy.com/vod-s/%E5%A5%B3----------1---.html
					$http="https://jyzyapi.com"; //金鹰
					$url = $http."/index.php/vod/search/page/$page/wd/$search.html";
					$list =Query::getVideoFox4($search,$type,$url,$http);
				break;
			case 10:
				// 	//m3u8 解析接口 https://huyajx.com/play?url=
				// 	// huyazy.com, huyaziyuan.com
				// 	// $http="https://www.80kk.app/"; https://www.3ayy.com/vod-s/%E5%A5%B3----------1---.html
					$http="https://cj.lziapi.com"; //量子
					$url = $http."/index.php/vod/search/page/$page/wd/$search.html";
					$list =Query::getVideoFox7($search,$type,$url,$http);
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
		// $range = '.playList table tbody tr:nth-child(odd)'; // 奇数行
		$range = '.playList table tbody tr:not(.videoPlayBox)'; // 跳过某个class
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
			// $rt['video'] =$video;
			$new_video=[];
			foreach($video as $k=> $v){
				if($v['url']){
					$new_video[]=$v;
				}
			}
			$rt['video'] =	$new_video;
			$list[$key] =$rt;
			// var_dump($list[0]);
		}
		// var_dump($list );die;
		// var_dump($list[2]);die;
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
	$range = '#play_2:eq(0)  li ';
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
public static function getVideoFox4($search,$type,$url,$http)
{
	$rules = [
		'name' => array('.xing_vb4>a:eq(0)','html','-em'),
		'link' => array('.xing_vb4>a:eq(0)','href','-em'),
	];
	$range = '.xing_vb ul:gt(0)';
	// var_dump($type);die;
	// 切片选择器,跳过第一条广告
	$list = QueryList::get($url)->rules($rules)->range($range)->query()->getData()->all();
	$urls =[];
	foreach($list as  $v){
		$urls[] =$http.$v['link'];
	}
	// var_dump($list);die;
	// 切片选择器----start
	$range = '#play_2:eq(0)  li ';
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
	$range = '.stui-vodlist li';
	// var_dump($type);die;
	// 切片选择器,跳过第一条广告
	$list = QueryList::get($url)->rules($rules)->range($range)->query()->getData()->all();
	$urls =[];
	foreach($list as  $v){
		$urls[] =$http.$v['link'];
	}
	// var_dump($list);die;
	// 切片选择器----start
	$range = '.stui-content__playlist:eq(0) li ';
	// 切片选择器,跳过第一条广告
	$rules = [
		// 'imageUrl' => array(' .left>img','data-original'),
		// 'name' => array('.right .name','html','span'),
		'title' => array(' .copy_text','html','-span'),
		'url' => array('  .copy_text   .hidden-xs','html',' '),
	];
	// 由于DOM解析的都是同一个网站的网页，所以DOM解析规则是可以复用的
	$sql = QueryList::rules($rules)->range($range);
	// $video = QueryList::get($html)->rules($rules)->range($range)->query()->getData()->all();
	$rules2 = [
		'imageurl' => array(' .img-responsive','src'),
		// 'title' => array('.stui-content .title ','html',''),
		'title' => array('.stui-content__detail .title ','html','-small')
		// 'url' => array(' .tbAddr:eq(0) input','value',' '),
	];

	foreach($urls as$key=> $url){
		// 切片选择器,跳过第一条广告
		$rt = QueryList::get($url)->rules($rules2)->query()->getData()->all();
		$rt ['belong']=0;
		$rt ['type']=$type;
		$rt ['search']=$search;
		$rt ['imageurl']=$http.$rt['imageurl'];
		$video = $sql->get($url)->query()->getData()->all();
		// $rt['title'] =$video[0]['name'];
		// $rt['imageurl'] =$video[0]['imageurl'];
		foreach($video as$k=> $v){
			$new_url = str_replace('$','',$v['url']);
			$video[$k]['url']= $new_url;
		}
		$rt['video'] =	$video;
		$list[$key] =$rt;
		// var_dump($list[0]);die;
	}
	// var_dump($list[0]);die;
	return $list;

}

// 采集列表
public static function getVideoFox6($search,$type,$url,$http)
{
	$rules = [
		'name' => array(' .list-title>a:eq(0)','html','-em'),
		'link' => array(' .list-title>a:eq(0)','href',''),
	];
	$range = '.list .list-item:gt(0)';
	// var_dump($type);die;
	// 切片选择器,跳过第一条广告
	$list = QueryList::get($url)->rules($rules)->range($range)->query()->getData()->all();
	$urls =[];
	foreach($list as  $v){
		$urls[] =$http.$v['link'];
	}
	// var_dump($list);die;
	// 切片选择器----start
	$range = '.vod-list:gt(0) .list-item ';
	// 切片选择器,跳过第一条广告
	$rules = [
		// 'imageUrl' => array(' .left>img','data-original'),
		// 'name' => array('.right .name','html','span'),
		// 'title' => array('  a','html','-span'),
		'url' => array('   a','href',' '),
	];
	// 由于DOM解析的都是同一个网站的网页，所以DOM解析规则是可以复用的
	$sql = QueryList::rules($rules)->range($range);
	// $video = QueryList::get($html)->rules($rules)->range($range)->query()->getData()->all();
	$rules2 = [
		'imageurl' => array(' .vod-img img','src'),
		// 'title' => array('.stui-content .title ','html',''),
		'title' => array('.vod-title h2 ','html','-small')
		// 'url' => array(' .tbAddr:eq(0) input','value',' '),
	];

	foreach($urls as$key=> $url){
		// 切片选择器,跳过第一条广告
		$rt = QueryList::get($url)->rules($rules2)->query()->getData()->all();
		$rt ['belong']=0;
		$rt ['type']=$type;
		$rt ['search']=$search;
		// $rt ['imageurl']=$http.$rt['imageurl'];
		$video = $sql->get($url)->query()->getData()->all();
		// $rt['title'] =$video[0]['name'];
		// $rt['imageurl'] =$video[0]['imageurl'];
		foreach($video as$k=> $v){
			$new_url = str_replace('$','',$v['url']);
			$video[$k]['url']= $new_url;
			$video[$k]['title']= '第'.($k+1).'集';
		}
		$rt['video'] =	$video;
		$list[$key] =$rt;
		// var_dump($list[0]);die;
	}
	// var_dump($list[0]);die;
	return $list;

}


// 采集列表
public static function getVideoFox7($search,$type,$url,$http)
{
	$rules = [
		'name' => array(' a:eq(0)','html',''),
		'link' => array(' a:eq(0)','href',''),
	];
	$range = '.videoContent li';
	// var_dump($type);die;
	// 切片选择器,跳过第一条广告
	$list = QueryList::get($url)->rules($rules)->range($range)->query()->getData()->all();
	$urls =[];
	foreach($list as  $v){
		$urls[] =$http.$v['link'];
	}
	// var_dump($list);die;
	// 切片选择器----start
	$range = '.playlist:eq(1) li ';
	// 切片选择器,跳过第一条广告
	$rules = [
		// 'imageUrl' => array(' .left>img','data-original'),
		// 'name' => array('.right .name','html','span'),
		'title' => array(' a:eq(0) ','html',''),
		'url' => array('   a:eq(0)  ','href',''),
	];
	// 由于DOM解析的都是同一个网站的网页，所以DOM解析规则是可以复用的
	$sql = QueryList::rules($rules)->range($range);
	// $video = QueryList::get($html)->rules($rules)->range($range)->query()->getData()->all();
	$rules2 = [
		'imageurl' => array(' .people .left img ','src'),
		// 'title' => array('.stui-content .title ','html',''),
		'title' => array('.stui-content__detail .title ','html','-small')
		// 'url' => array(' .tbAddr:eq(0) input','value',' '),
	];

	foreach($urls as$key=> $url){
		// 切片选择器,跳过第一条广告
		$rt = QueryList::get($url)->rules($rules2)->query()->getData()->all();
		$rt ['belong']=0;
		$rt ['type']=$type;
		$rt ['search']=$search;
		// $rt ['imageurl']=$http.$rt['imageurl'];
		$video = $sql->get($url)->query()->getData()->all();
		$rt['title'] =$list[0]['name'];
		// $rt['imageurl'] =$video[0]['imageurl'];
		// var_dump($video);die;
		$num =0;
		foreach($video as$k=> $v){
			$num++;
			if($v['url']){
				// $new_url = str_replace('$','',$v['url']);
				// $video[$k]['url']= $new_url;
				$video[$k]['title']= '第'.($num).'集';
			}else{
				unset($video[$k]);
			}
		}
		$rt['video'] =	$video;
		$list[$key] =$rt;
		// var_dump($list[0]);die;
	}
	// var_dump($list[0]);die;
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
