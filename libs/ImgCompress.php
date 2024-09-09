<?php
namespace app\libs;
class ImgCompress
{
    private $src;
    private $image;
    private $imageinfo;
    private $percent = 0.5;
    
    /*
     * 图片压缩
     * @param $src 源图
     * @param float $percent 压缩比例
     */
    public function __construct($src, $percent = 0.8)
    {
        $this->src = $src;
        $this->percent = $percent;
 
    }

    /** 高清压缩图片
     * @param string $saveName 提供图片名（可不带扩展名，用源图扩展名）用于保存。或不提供文件名直接显示
     */
    public function compressImg($saveName = '')
    {
        $this->_openImage();
        if (!empty($saveName)) $this->_saveImage($saveName);  //保存
        else $this->_showImage();
    }

    /**
     * 内部：打开图片
     */
    private function _openImage()
    {
        list($width, $height, $type, $attr) = getimagesize($this->src);
        $this->imageinfo = array(
            'width' => $width,
            'height' => $height,
            'type' => image_type_to_extension($type, false),
            'attr' => $attr
        );
        $fun = "imagecreatefrom" . $this->imageinfo['type'];
        $this->image = $fun($this->src);
        $this->_thumpImage();
    }

    /**
     * 内部：操作图片
     */
    private function _thumpImage()
    {
        $new_width = $this->imageinfo['width'] * $this->percent;
        $new_height = $this->imageinfo['height'] * $this->percent;
        $image_thump = imagecreatetruecolor($new_width, $new_height);
        //将原图复制带图片载体上面，并且按照一定比例压缩,极大的保持了清晰度
        imagecopyresampled($image_thump, $this->image, 0, 0, 0, 0, $new_width, $new_height, $this->imageinfo['width'], $this->imageinfo['height']);
        imagedestroy($this->image);
        $this->image = $image_thump;
    }

    /**
     * 输出图片:保存图片则用saveImage()
     */
    private function _showImage()
    {
        header('Content-Type: image/' . $this->imageinfo['type']);
        $funcs = "image" . $this->imageinfo['type'];
        $funcs($this->image);
    }

    /**
     * 保存图片到硬盘：
     * @param  string $dstImgName 1、可指定字符串不带后缀的名称，使用源图扩展名 。2、直接指定目标图片名带扩展名。
     */
    private function _saveImage($dstImgName)
    {
        if (empty($dstImgName)) return false;
        $allowImgs = ['.jpg', '.jpeg', '.png', '.bmp', '.wbmp', '.gif'];   //如果目标图片名有后缀就用目标图片扩展名 后缀，如果没有，则用源图的扩展名
        $dstExt = strrchr($dstImgName, ".");
        $sourseExt = strrchr($this->src, ".");
        if (!empty($dstExt)) $dstExt = strtolower($dstExt);
        if (!empty($sourseExt)) $sourseExt = strtolower($sourseExt);
        //有指定目标名扩展名
        if (!empty($dstExt) && in_array($dstExt, $allowImgs)) {
            $dstName = $dstImgName;
        } elseif (!empty($sourseExt) && in_array($sourseExt, $allowImgs)) {
            $dstName = $dstImgName . $sourseExt;
        } else {
            $dstName = $dstImgName . $this->imageinfo['type'];
        }
        $funcs = "image" . $this->imageinfo['type'];
        $funcs($this->image, $dstName);
    }

    /**
     * 销毁图片
     */
    public function __destruct()
    {
        imagedestroy($this->image);
    }

    //对本地图片进行base64位转码
    public static function base64EncodeImage ($imageFile) {
        $base64Image='';
        $imageInfo = getimagesize($imageFile);
        $imageData = fread(fopen($imageFile, 'r'), filesize($imageFile));
        $base64Image = 'data:' . $imageInfo['mime'] . ';base64,' .chunk_split(base64_encode($imageData));
        return $base64Image;
    }
    // //下载图片保存到本地
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

    //下载图片保存到本地
    public static function curl_file_get_contents($url,$path){
 
        $curlobj = curl_init();
        curl_setopt($curlobj,CURLOPT_URL,$url);
        curl_setopt($curlobj,CURLOPT_HEADER,0);
        curl_setopt($curlobj,CURLOPT_RETURNTRANSFER,0);
        //time out after 300s
        curl_setopt($curlobj,CURLOPT_TIMEOUT,500);
        //通过这个函数设置ftp的用户名和密码,没设置就不需要!
        //curl_setopt($curlobj,CURLOPT_USERPWD,":");
         
        //sets up the output file
        $outfile = fopen($path,'wb');  //保存到本地文件的文件名
        curl_setopt($curlobj,CURLOPT_FILE,$outfile);
         
        $rtn = curl_exec($curlobj);
        fclose($outfile);
         
        if(!curl_errno($curlobj)){
            echo "RETURN: ".$rtn;
        }else{
            echo 'Curl:error: '.curl_errno($curlobj);
        }
        curl_close($curlobj);

        return $outfile;
    }
 
    // $url ='https://img.siwapay.com:5278/cvjpg/Jt34dmP7.jpg';
    // // $outpath =file_get_contents($outpath );

    //     //图片转base64存储
    // $img_base64 =Method:: getBase64($url);
// ————————————————
// 版权声明：本文为CSDN博主「weixin_39106791」的原创文章，遵循CC 4.0 BY-SA版权协议，转载请附上原文出处链接及本声明。
// 原文链接：https://blog.csdn.net/weixin_39106791/article/details/88534986
}