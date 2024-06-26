<?php 
namespace app\modules\cn\models;
use yii\db\ActiveRecord;

use Yii;
use app\libs\Method;
use yii\data\Pagination;
// use app\libs\QueryList;
use QL\QueryList;
use function PHPSTORM_META\map;

class Torrent extends ActiveRecord {
/* Torrent.php


	Dear Bram Cohen,
	  WHAT were you smoking ?



This implementation should use one order of magnitude less memory then the TBdev version.
The bdecoding speed is similar to TBdev, bencoding is faster, and much faster then bdecoding.

Call the bdecode() function with the bencoded string:

$str="d7:oneListl8:a stringe10:oneIntegeri34ee";
var_dump(bdecode($str));

array(3) {
  ["oneList"]=>
  array(1) {
    [0]=>
    string(8) "a string"
  }
  ["oneInteger"]=>
  float(34)
  ["isDct"]=>
  bool(true)
}

The returned value is a nested data type with the following type of elements:
 - ints    (test type with is_integer($x) || is_float($x) )
 - strings (test type with is_string($x))
 - lists   (test type with is_array($x) && !isset($x[isDct]) )
 - dicts   (test type with is_array($x) && isset($x[isDct]) )

Lists and strings have the native PHP type. Dictionary is an associative array with an "isDct" key.
This is necessary since PHP makes no distinction between flat and associative arrays. Note that the isDct
key is allways set as a bool, so that even if the dictionary contains an actual "isDct" value, the
functions behave transparently, i.e. they don't strip out or overwrite actual "isDct" keys.
Bencoded integers are stored as PHP floats, which typically have at least 51 bits of integer precision,
as opposed to PHP ints which provide only 31 bits of precision on a 32 bit compiled PHP. 
If you are certain that the code will only run on a 64 bit machine, with a 64 bit PHP, you can replace 
all float with ints in all tests and casts, and gain a whooping 2^63 integer range.

This implementation is not a drop-in replacement of the TBDev code, hence the new function names
For all practical purposes, it's just as flexible, and very easy to use. For example:

// decode the torrent file
$dict= bdecode_file($torrentfilename);
// change announce url
$dict['announce']='http://inferno.demonoid.com';
// add private tracker flag
$dict['info']['private']=1;
// compute binary infohash, PHP-4 style
$infohash = pack("H*", sha1(bencode($dict["info"])));
// recreate the torrent file
$torrentfile=bencode($dict);

As a side effect of calling bencode(), the passed nested array will have all it's dictionaries sorted by key.
The bencoded data generated by bencode() will have sorted dictionaries, but bdecode() does not require
this in the input stream, and will keep the order as encountered in the input stream. 



This implementation is hereby released under the GFYPL, version 1.00.


	The Go Fuck Yourself Public License, version 1.00

	Article 1
	You can go fuck yourself.

	END OF ALL TERMS AND CONDITIONS

*/

 
    public static function bdecode($s, &$pos=0) {
        if($pos>=strlen($s)) {
            return null;
        }
        switch($s[$pos]){
        case 'd':
            $pos++;
            $retval=array();
            while ($s[$pos]!='e'){
                $key=Torrent::bdecode($s, $pos);
                $val=Torrent::bdecode($s, $pos);
                if ($key===null || $val===null)
                    break;
                $retval[$key]=$val;
            }
            $retval["isDct"]=true;
            $pos++;
            return $retval;

        case 'l':
            $pos++;
            $retval=array();
            while ($s[$pos]!='e'){
                $val=Torrent::bdecode($s, $pos);
                if ($val===null)
                    break;
                $retval[]=$val;
            }
            $pos++;
            return $retval;

        case 'i':
            $pos++;
            $digits=strpos($s, 'e', $pos)-$pos;
            $val=round((float)substr($s, $pos, $digits));
            $pos+=$digits+1;
            return $val;

    //	case "0": case "1": case "2": case "3": case "4":
    //	case "5": case "6": case "7": case "8": case "9":
        default:
            $digits=strpos($s, ':', $pos)-$pos;
            if ($digits<0 || $digits >20)
                return null;
            $len=(int)substr($s, $pos, $digits);
            $pos+=$digits+1;
            $str=substr($s, $pos, $len);
            $pos+=$len;
            //echo "pos: $pos str: [$str] len: $len digits: $digits\n";
            return (string)$str;
        }
        return null;
    }

    public static function bencode(&$d){
        if(is_array($d)){
            $ret="l";
            if($d["isDct"]){
                $isDict=1;
                $ret="d";
                // this is required by the specs, and BitTornado actualy chokes on unsorted dictionaries
                ksort($d, SORT_STRING);
            }
            foreach($d as $key=>$value) {
                if($isDict){
                    // skip the isDct element, only if it's set by us
                    if($key=="isDct" and is_bool($value)) continue;
                    $ret.=strlen($key).":".$key;
                }
                if (is_int($value) || is_float($value)){
                    $ret.="i${value}e";
                }else if (is_string($value)) {
                    $ret.=strlen($value).":".$value;
                } else {
                    $ret.=Torrent::bencode ($value);
                }
            }
            return $ret."e";
        } elseif (is_string($d)) // fallback if we're given a single bencoded string or int
            return strlen($d).":".$d;
        elseif (is_int($d) || is_float($d))
            return "i${d}e";
        else
            return null;
    }

    public static function bdecode_file($filename){
        $f=file_get_contents($filename, FILE_BINARY);
        return Torrent::bdecode($f);
    }

    public static function bdecode_getinfo($filename){
        $t = Torrent::bdecode(file_get_contents($filename, FILE_BINARY));
        $t['info_hash'] = sha1(Torrent::bencode($t['info']));

        if(is_array($t['info']['files'])){ //multifile
            $t['info']['size'] = 0;
            $t['info']['filecount'] = 0;

            foreach($t['info']['files'] as $file){
                $t['info']['filecount']++;
                $t['info']['size']+=$file['length'];
            }
        }else{
            $t['info']['size'] = $t['info']['length'];
            $t['info']["filecount"] = 1;
            $t['info']['files'][0]['path'] = $t['info']['name'];
            $t['info']['files'][0]['length'] = $t['info']['length'];
        }
        return $t;
    }
}


/*
// A first stab at iterative decoding, feel free to improve.
// Performance similar to recursive version, might be significantly faster on a JIT compiler.

function bdecode_iter($s){
    $p=0;
    $stop=strlen($s);
    
    $stack=array();
    $sp=&$stack;
    $level=0;
    
    while($stop > $p){
        if(isset($sp['isDct']) && $s[$p]!='e'){
            $digits=strpos($s, ':', $p)-$p;
            $chr=(int)substr($s, $p, $digits);
            $p+=$digits+1;
            $key=substr($s, $p, $chr);
            $p+=$chr;
        } else
            unset($key);
        switch($s[$p++]){
            case 'd':
                $new=array('isDct'=>true);
            case 'l':
                if(!$new) $new=array();
                if(isset($key))
                    $sp[$key]=&$new;
                else
                    $sp[]=&$new;
                $stack[]=&$new;
                $sp=&$new;
                unset($new);
                $level++;
                continue 2;
            case 'e':
                unset($stack[$level]);
                $level--;
                $sp=&$stack[$level];
                continue 2;
            case 'i':
                $end=strpos($s, 'e', $p);
                $val=(int)substr($s, $p, $end-$p);
                $p=$end+1;
                break;
            default:
                $digits=strpos($s, ':', $p)-$p+1;
                $chr=(int)substr($s, $p-1, $digits);
                $p+=$digits;
                $val=substr($s, $p, $chr);
                $p+=$chr;
                break;
        }
        if(isset($key))
            $sp[$key]=$val;
        else
            $sp[]=$val;
    }
    
    unset($sp);
    return($stack[0]);
}
*/
 
?>