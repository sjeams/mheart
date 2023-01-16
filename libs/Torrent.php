<?php
namespace app\libs;

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
}
 
