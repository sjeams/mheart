<?php
namespace app\libs;
// 磁力链接转换
class Torrent
{

    public static function bdecode($s, &$pos = 0)
    {
        if ($pos >= strlen($s)) {
            return null;
        }
        switch ($s[$pos]) {
            case 'd':
                $pos++;
                $retval = array();
                while ($s[$pos] !== 'e') {
                    $key = Torrent::bdecode($s, $pos);
                    $val = Torrent::bdecode($s, $pos);
                    if ($key === null || $val === null) {
                        break;
                    }
                    $retval[$key] = $val;
                }
                $retval['isDct'] = true;
                $pos++;
                return $retval;
            case 'l':
                $pos++;
                $retval = array();
                while ($s[$pos] !== 'e') {
                    $val = Torrent::bdecode($s, $pos);
                    if ($val === null) {
                        break;
                    }
                    $retval[] = $val;
                }
                $pos++;
                return $retval;
            case 'i':
                $pos++;
                $digits = strpos($s, 'e', $pos) - $pos;
                $val    = (int)substr($s, $pos, $digits);
                $pos    += $digits + 1;
                return $val;
            default:
                $digits = strpos($s, ':', $pos) - $pos;
                if ($digits < 0 || $digits > 20) {
                    return null;
                }
                $len = (int)substr($s, $pos, $digits);
                $pos += $digits + 1;
                $str = substr($s, $pos, $len);
                $pos += $len;
                return (string)$str;
        }
    }

    public static function bencode(&$d)
    {
        if (is_array($d)) {
            $ret = 'l';
            if (isset($d['isDct']) && $d['isDct']) {
                $isDict = 1;
                $ret    = 'd';
                ksort($d, SORT_STRING);
            }
            foreach ($d as $key => $value) {
                if (isset($isDict) && $isDict) {
                    if ($key === 'isDct' and is_bool($value)) continue;
                    $ret .= strlen($key) . ':' . $key;
                }
                if (is_string($value)) {
                    $ret .= strlen($value) . ':' . $value;
                } elseif (is_int($value)) {
                    $ret .= 'i${value}e';
                } else {
                    $ret .= Torrent::bencode($value);
                }
            }
            return $ret . 'e';
        } elseif (is_string($d)) return strlen($d) . ':' . $d;
        elseif (is_int($d)) return 'i${d}e';
        else return null;
    }

    public static function bdecode_getinfo($filename)
    {
        $t              = Torrent::bdecode(file_get_contents($filename, FILE_BINARY));
        $t['info_hash'] = sha1(Torrent::bencode($t['info']));
        if (is_array($t['info']['files'])) { //multifile
            $t['info']['size']      = 0;
            $t['info']['filecount'] = 0;
            foreach ($t['info']['files'] as $file) {
                $t['info']['filecount']++;
                $t['info']['size'] += $file['length'];
            }
        } else {
            $t['info']['size']               = $t['info']['length'];
            $t['info']['filecount']          = 1;
            $t['info']['files'][0]['path']   = $t['info']['name'];
            $t['info']['files'][0]['length'] = $t['info']['length'];
        }
        return $t;
    }
    public static   function Download($url) {

        $urlodd=explode('//',$url,2);//把链接分成2段，//前面是第一段，后面的是第二段
        
        $head=strtolower($urlodd[0]);//PHP对大小写敏感，先统一转换成小写，不然 出现HtTp:或者ThUNDER:这种怪异的写法不好处理
        
        $behind=$urlodd[1];
        
        if($head=="thunder:"){
        
        $url=substr(base64_decode($behind), 2, -2);//base64解密，去掉前面的AA和后面ZZ
        
        }elseif($head=="flashget:"){
        
        $url1=explode('&',$behind,2);
        
        $url=substr(base64_decode($url1[0]), 10, -10);//base64解密，去掉前面后的[FLASHGET]
        
        }elseif($head=="qqdl:"){
        
        $url=base64_decode($behind);//base64解密
        
        }elseif($head=="http:"||$head=="ftp:"||$head=="mms:"||$head=="rtsp:"||$head=="https:"){
        
        $url=$url;//常规地址仅支持http,https,ftp,mms,rtsp传输协议，其他地貌似很少，像XX网盘实际上也是基于base64，但是有的解密了也下载不了
        
        }else{
        
        echo "本页面暂时不支持此协议";
        
        }
        
        return $url;
        
        }
    // public function actionAnalysis()
    // {

    //     $url ="magnet:?xt=urn:btih:0A896722C6B55C6007CDB9B339BDF7E0ACA4F760";
    //     $res = Method::curl_post_fix("https://api.magnet-vip.com/api2/magnetinfo",['url'=>$url ]);
    //     $res = json_decode($res,true);
    //     //  var_dump( $res );die;
    //             //   $res = Method::GetUrl($url);
    //     $hash = $res['info']['infoHash'];
    //     //    var_dump( $res );die;
    //     $url ="https://api.magnet-vip.com/api2/download/". $hash;
 


    //     $Lightbenc=new Torrent();

    //     //  $btfile = $Lightbenc->bdecode_getinfo('r1.torrent');
    //     $btfile = $Lightbenc->bdecode_getinfo( $url);
    //     var_dump($btfile['info']['files']);die;
    //     //获取种子文件信息
    //     echo '<strong>种子文件名</strong>：'.$btfile['info']['name'].'<br />';
        
    //     echo '<strong>种子文件数</strong>：'.$btfile['info']['filecount'].'<br />';
        
    //     echo '<strong>种子大小</strong>：'.$btfile['info']['size'].'<br />';
        
    //     echo '<strong>磁力链接</strong>：'.'magnet:?xt=urn:btih:'.$btfile['info_hash'].'<br />';
        
    //     echo '<strong>下载种子</strong>：'.'http://bt.box.n0808.com/'.substr($btfile['info_hash'],0,2).'/'.substr($btfile['info_hash'],38).'/'
    //         .$btfile['info_hash'].'.torrent'.'<br />';
        
    //     echo '<strong>备用下载</strong>：'.'http://torcache.net/torrent/'.$btfile['info_hash'].'.torrent'.'<br />';
        
    //     echo '<strong>备用下载</strong>：'.'http://btcache.sobt.org/'.$btfile['info_hash'].'.torrent'.'<br />';
        
    //     echo '<strong>备用下载</strong>：'.'https://zoink.it/torrent/'.$btfile['info_hash'].'.torrent'.'<br />';
        
    //     echo '<br /><strong>文件信息</strong>：<br />';
        
    //     foreach ($btfile['info']['files'] as $f) {
    //         echo '—文件总大小：' . $f['length'] . ' byte<br />';
    //         echo '—文件列表：<br />';
        
    //         foreach ($f['path'] as $path) {
    //             echo '——' . $path . '<br />';
    //         }
    //         echo '<br />';
    //     }
 
    // } 

    
}
 
