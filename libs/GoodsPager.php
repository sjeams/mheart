<?php
namespace app\libs;

/**
 * Class Pager
 * order by Obelisk
 */


class GoodsPager
{
    private $pageNum;
    private $page;
    private $count;
    private $pageSize;
    private $pageAdd;

    private $totalPagesCount;


    public function __construct($count, $page, $pageSize = 10, $pageNum = 5)
    {
        if (!isset ($count) || !isset($page)) {
            die ("pager initial error");
        }

        $this->pageNum = $pageNum;
        $this->page = intval($page);
        $this->pageSize = $pageSize;
        $this->count = $count;
        $this->totalPagesCount = intval(ceil($count / $pageSize));
        $this->pageAdd = floor($pageNum/2);
    }


//    }
    /*
     *设置页面参数合法性
     *@return void
    */


    public function GetPagerContent()
    {
        $str = "";
        if($this->totalPagesCount <2){
            return$str;
        }else{
            // 上一页
            if( $this->page>0 && $this->totalPagesCount>0){
                if ($this->page == 1) {
                    $str .= '<li class="grey">&lt;</li>';
                } else {
                    $str .= '<li class="prev">&lt;</li>';
                }
            }
            /*
            除首末后 页面分页逻辑
            */
            //10页（含）以下
            $currnt = "";
            if ($this->totalPagesCount <= $this->pageNum) {
                for ($i = 1; $i <= $this->totalPagesCount; $i++) {
                    if ($i == $this->page) {
                        $currnt = "class='on'";
                    } else {
                        $currnt = "class='iPage'";
                    }
                    $str .= "<li {$currnt}>$i</li>";
                }
            } else                                //10页以上
            {
                if($this->page<=(1+$this->pageAdd)){
                    for ($i = 1; $i <= $this->pageNum; $i++) {
                        if ($i == $this->page) {
                            $currnt = "class='on'";
                        } else {
                            $currnt = "class='iPage'";
                        }
                        $str .= "<li {$currnt}>$i</li>";
                    }
                }
                if($this->page<=($this->totalPagesCount-$this->pageAdd) && $this->page>(1+$this->pageAdd)){
                    $first = $this->page-$this->pageAdd;
                    $end = $this->page+$this->pageAdd;
                    for ($i = $first; $i <= $end; $i++) {
                        if ($i == $this->page) {
                            $currnt = "class='on'";
                        } else {
                            $currnt = "class='iPage'";
                        }
                        $str .= "<li {$currnt}>$i</li>";
                    }
                }
                if($this->page>($this->totalPagesCount-$this->pageAdd)){
                    for ($i = $this->totalPagesCount-$this->pageNum+1; $i <= $this->totalPagesCount; $i++) {
                        if ($i == $this->page) {
                            $currnt = "class='on'";
                        } else {
                            $currnt = "class='iPage'";
                        }
                        $str .= "<li {$currnt}>$i</li>";
                    }
                }
            }
            /*
            除首末后 页面分页逻辑结束
            */
            //下一页 末页

            if ($this->page == $this->totalPagesCount) {
                $str .= '<li class="grey">&gt;</li>';
            } else {
                $str .= '<li class="next">&gt;</li>';
            }
            return $str;
        }

    }

//    /**
//     * 获得实例
//     * @return
//     */
//  static public function getInstance() {
//      if (is_null ( self::$_instance )) {
//          self::$_instance = new pager ();
//      }
//      return self::$_instance;
//  }

//调用实例---------------start
//include "pager.class.php";
//$CurrentPage=isset($_GET['page'])?$_GET['page']:1;
//$myPage=new pager(1300,intval($CurrentPage));
//$pageStr= $myPage->GetPagerContent();
//$myPage=new pager(90,intval($CurrentPage));
//$pageStr= $myPage->GetPagerContent();
//echo $pageStr;
//调用实例---------------end

}

?>