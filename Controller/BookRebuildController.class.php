<?php
namespace Addons\BookRebuild\Controller;
use Home\Controller\AddonsController;
use Org\Util\String;
use School\Redrock;

class BookRebuildController extends AddonsController {

    private $collectionDb;//学生收藏的数据库
    private $stuId = '2015210355';   //测试collection,owe,history
    // private $stuId = '2015210269';      //测试borrow

    private $appid = 'wx81a4a4b77ec98ff4';
    private $token = 'gh_68f0a1ffc303';
    private $openid = 'ouRCyjlvR2nalu4egfqA7gQuxrBs';

    public function index(){

        $this->display('index');
        
    }

    public function getFromApi()
    {
        $this->conn();
        switch (I('get.type')) {
            case 'search':                      //前端请求 搜索书籍
                $content = I('get.content');
                $data = $this->bookSearch($content);
                break;
            case 'hotbook':                      //前端请求 热门图书             
                $data = $this->hotBook();
                break;
            case 'newbook':                    //前端请求 最近新书书籍
                $data = $this->getNewBook();
                break;
            case 'reader':                      //前端请求 读者信息  
                $data = $this->readerInfo();
                break;    
            case 'borrow':                      //前端请求 读者借阅书籍
                $data = $this->borrowedBook();
                break;
            case 'history':                      //前端请求 读者借阅书籍
                $data = $this->historyBook();
                break;
            case 'owe':                      //前端请求 读者借阅书籍
                $data = $this->owedBook();
                break;
            case 'collection':                      //前端请求 读者借阅书籍
                $data = $this->getMyCollection();
                break;
            default:
                $data = -1;
                break;
        }

        // dump($data);
        echo json_encode($data);
    }
    //收藏

    /**
     * @param $stuId 学生的学号
     *
     * @return $res  array 该同学的收藏书籍
     *
     * 遍历数据库 查找该学生收藏的所有书籍
     *
     */
    public function getMyCollection() {

        $data = array(
            'stuId' => $this->stuId,
        );

        $res = $this->collectionDb->where($data)->select();

        return $res;
    }


    /**
     * @param $stuId 学生的学号
     *
     * @param $booktm 书籍的编号
     *
     * @return flag flag为true表示该书已经被收藏 为false表示该书未被该学生收藏
     *
     * 根据书本的编号判断是否被该学生收藏  已经收藏返回true 未被收藏返回false
     */

    public function isCollected($stuId,$booktm) {

        $data = array(
            'stuId' => $stuId,
            'booktm' => $booktm,
        );
        $res = $this->collectionDb->where($data)->find();
        if($res) {
            $flag = true;
        } else {
            $flag = false;
        }
        return $flag;
    }

    /**
     * @param $stuId 学生的学号
     *
     * @param $book 书籍的信息
     *
     * 将书籍与学生添加进数据库 表示该学生要收藏该书
     *
     */
    public function addToCollection() {

        $this->conn();
        // echo I('post.body');
        $book = json_decode(I('post.body'),true);
        $data = array(
            'stuId' => $this->stuId,
            'booktm' => $book['number'],
            'bookName' => $book['name'],
            'bookPlace' => $book['position']['lib'].$book['position']['floor'],
            'bookAuthor' => $book['author'],
        );
        if($this->collectionDb->add($data)) {
            echo true;
        } else {
            echo false;
        }

    }

    /**
     * @param $stuId 学生的学号
     *
     * @param $booktm 书籍的编号
     *
     * 取消收藏功能
     *
     */
    public function deleteFromCollection() {

        $this->conn();
        $booktm = I('post.number');
        echo $booktm;
        $data = array(
            'stuId' => $this->stuId,
            'booktm' => $booktm,
        );
        if($this->collectionDb->where($data)->delete()) {
            echo true;
        } else {
            echo false;
        }
    }


    //新书
    /**
     *
     * @return $data 最近2个月内上架的书的信息  
     *
     */
    public function getNewBook() {
        
        $timestamp = time();
        $string = "library";
        $secret = sha1(sha1($timestamp).md5($string)."redrock");

        $url = "http://hongyan.cqupt.edu.cn/BookApi2/index.php?s=/Home/Index/libRecentBook"; 

        $post_data = array(
            'string' => $string,
            'timestamp' => $timestamp,
            'secret' => $secret,
        );
        $data = json_decode($this->curl_post($url,$post_data))->data;

        return $this->o2arr($data);
    }



    //搜索

    /**
     * @param $input 用户输入的搜索条件 
     *
     * @return $data 根据书名和作者搜所到的书籍
     */
    public function bookSearch($content) {

        $begin = 0;
        $timestamp = time();
        $string = "library";
        $secret = sha1(sha1($timestamp).md5($string)."redrock");

        $url = "http://hongyan.cqupt.edu.cn/BookApi2/index.php?s=/Home/Index/bookSearch"; 

        $post_data = array(
            'begin' => $begin,
            'content' => $content,
            'string' => $string,
            'timestamp' => $timestamp,
            'secret' => $secret,
        );
        $data = json_decode($this->curl_post($url,$post_data))->data;
       
        $book = array();

        foreach ($data as $key => $value) {
            $book[$key]['love'] = $this->isCollected($this->stuId,$value->code); 
            $book[$key]['number'] = $value->code;
            $book[$key]['name'] = $value->bookName;


            $num = strpos($value->place, '(');
            $num2 =  strpos($value->place, '（');
            if(!$num && !$num2) {
                $book[$key]['position']['lib']  = $value->place;
            } else {
                if(!$num) {                     //有中文括号（
                    $book[$key]['position']['lib']  = mb_substr($value->place,0, ($num2)/3,'utf-8');
                    $book[$key]['position']['floor'] = mb_substr($value->place,$num2);
                } else {
                    $book[$key]['position']['lib']  = mb_substr($value->place,0, ($num)/3,'utf-8');
                    $book[$key]['position']['floor'] = mb_substr($value->place,$num);
                }
            }

            $book[$key]['author'] = $value->writer;
        }
        return $book;

    }
    //热门图书
    /**
     * @return $data 收集最多的图书
     */
    public function hotBook() {

        $db = $this->collectionDb;

        $res = $db->group('booktm')->order('count(booktm) desc')->limit(10)->select();
        return $res;
    }

    //个人信息

    /**
     * @param $stuId 学生的学号
     *
     * @return $data 正被学生借阅的书籍
     *
     */

    public function borrowedBook() {

        $timestamp = time();
        $string = "library";
        $secret = sha1(sha1($timestamp).md5($string)."redrock");

        $url = "http://hongyan.cqupt.edu.cn/BookApi2/index.php?s=/Home/Index/borrow"; 

        $post_data = array(
            'readerId' => $this->stuId,
            'string' => $string,
            'timestamp' => $timestamp,
            'secret' => $secret,
        );
        $data = json_decode($this->curl_post($url,$post_data));

        return $data;
    }

    /**
     * @param $stuId 学生的学号
     *
     * @return $data 历史借阅书籍
     *
     */
    //把接口的bookapi 的select 改成find== 部署上去后再修改
    public function historyBook() {

 
        $timestamp = time();
        $string = "library";
        $secret = sha1(sha1($timestamp).md5($string)."redrock");

        $url = "http://hongyan.cqupt.edu.cn/BookApi2/index.php?s=/Home/Index/libHistoryBook"; 

        $post_data = array(
            'readerId' => $this->stuId,
            'string' => $string,
            'timestamp' => $timestamp,
            'secret' => $secret,
        );
        $data = json_decode($this->curl_post($url,$post_data))->data;
        $book = array();
        foreach ($data as $key => $value) {
            $booktm = $value->bookTM;

            $res = $this->getBookInfoBybooktm($booktm)->data;
            $res = $res[0];     //要去掉

            // $book[$key]['bookinfo'] = $res;
            $book[$key]['name'] = $res->bookName;
            $book[$key]['author'] = $res->write;
            $book[$key]['num'] = $booktm;
            // $book[$key]['position'] = $res->place;

            $num = strpos($value->place, '(');
            $num2 =  strpos($value->place, '（');
            if(!$num && !$num2) {
                $book[$key]['position']['lib']  = $value->place;
            } else {
                if(!$num) {                     //有中文括号（
                    $book[$key]['position']['lib']  = mb_substr($value->place,0, ($num2)/3,'utf-8');
                    $book[$key]['position']['floor'] = mb_substr($value->place,$num2);
                } else {
                    $book[$key]['position']['lib']  = mb_substr($value->place,0, ($num)/3,'utf-8');
                    $book[$key]['position']['floor'] = mb_substr($value->place,$num);
                }
            }

            $book[$key]['time'] = substr($value->finish,0,10);
        }
        return $book;

    }

    /**
     * @param $stuId 学生的学号
     *
     * @return $data 欠费书籍,金额
     */   
    public function owedBook() {
        $timestamp = time();
        $string = "library";
        $secret = sha1(sha1($timestamp).md5($string)."redrock");

        $url = "http://hongyan.cqupt.edu.cn/BookApi2/index.php?s=/Home/Index/libOwedBook"; 

        $post_data = array(
            'readerId' => $this->stuId,
            'string' => $string,
            'timestamp' => $timestamp,
            'secret' => $secret,
        );
        $data = json_decode($this->curl_post($url,$post_data))->data;
        $book = array();
        foreach ($data as $key => $value) {
            $djh = $value->djh;

            $res = $this->getBookInfoByDJH($djh)->data;
            $res = $res[0];     

            $book[$key]['name'] = $res->bookName;
            $book[$key]['author'] = $res->write;
            $book[$key]['num'] = $res->code;
            // $book[$key]['position'] = $res->place;

            $num = strpos($res->place, '(');
            $num2 =  strpos($res->place, '（');
            if(!$num && !$num2) {
                $book[$key]['position']['lib']  = $res->place;
            } else {
                if(!$num) {                     //有中文括号（
                    $book[$key]['position']['lib']  = mb_substr($res->place,0, ($num2)/3,'utf-8');
                    $book[$key]['position']['floor'] = mb_substr($res->place,$num2);
                } else {
                    $book[$key]['position']['lib']  = mb_substr($res->place,0, ($num)/3,'utf-8');
                    $book[$key]['position']['floor'] = mb_substr($res->place,$num);
                }
            }


            $book[$key]['money'] = '0'.$value->money;
        }
        return $book;
    }
    /**
     * @param $stuId 学生的学号
     *
     * @return $data 学生基本信息
     */   
    public function readerInfo() {

        $timestamp = time();
        $string = "library";
        $secret = sha1(sha1($timestamp).md5($string)."redrock");

        $url = "http://hongyan.cqupt.edu.cn/BookApi2/index.php?s=/Home/Index/readerInfo"; 

        $post_data = array(
            'readerId' => $this->stuId,
            'string' => $string,
            'timestamp' => $timestamp,
            'secret' => $secret,
        );
        $data = json_decode($this->curl_post($url,$post_data))->data;
        $readerInfo = array(

            'readerName' => $data->name,
            'history' => $data->history,
            'borrow' => $data->borrow,
            'money' => $data->qianfei,

        );
        return $readerInfo;
    }


    //其他的辅助函数。。。

    /**
     * @param $booktm 书籍的编号tstm
     *
     * @return $bookInfo 书籍的信息
     *
     * 根据书的编号得到书的信息
     */
    private function getBookInfoBybooktm($tstm) {

        $timestamp = time();
        $string = "library";
        $secret = sha1(sha1($timestamp).md5($string)."redrock");

        $url = "http://hongyan.cqupt.edu.cn/BookApi2/index.php?s=/Home/Index/libFindBookBytstm"; 

        $post_data = array(
            'tstm' => $tstm,
            'string' => $string,
            'timestamp' => $timestamp,
            'secret' => $secret,
        );
        $data = json_decode($this->curl_post($url,$post_data));

        return $data;
    }
   

    /**
     * @param $booktm 书籍的编号tstm
     *
     * @return $bookInfo 书籍的信息
     *
     * 根据书的编号得到书的信息
     */
    private function getBookInfoByDJH($djh) {

        $timestamp = time();
        $string = "library";
        $secret = sha1(sha1($timestamp).md5($string)."redrock");

        $url = "http://hongyan.cqupt.edu.cn/BookApi2/index.php?s=/Home/Index/libFindBookByDJH"; 

        $post_data = array(
            'djh' => $djh,
            'string' => $string,
            'timestamp' => $timestamp,
            'secret' => $secret,
        );
        $data = json_decode($this->curl_post($url,$post_data));

        return $data;
    }

    /**
     * @param $url 调用的接口的url
     *
     * @param $post_data 需要post去的值
     *
     * @return $data 得到的json形式的返回值
     */
    private function curl_post($url,$post_data) {

        $curl = curl_init();  
        //设置提交的url  
        curl_setopt($curl, CURLOPT_URL, $url);  
        //设置头文件的信息作为数据流输出  
        curl_setopt($curl, CURLOPT_HEADER, 0);  
        //设置获取的信息以文件流的形式返回，而不是直接输出。  
        curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);  
        //设置post方式提交  
        curl_setopt($curl, CURLOPT_POST, 1);  
        //设置post数据  
          
        curl_setopt($curl, CURLOPT_POSTFIELDS, $post_data);  
        //执行命令  
        $data = curl_exec($curl);  
        //关闭URL请求  
        curl_close($curl);  
        //获得数据并返回  
        return $data;
    }

    /**
     * 连接一些基本的数据库
     */
    private function conn() {
        $this->collectionDb = M('bookrebuild');
    }
    /**
     * 对象转数组
     */  
    private function o2arr($data) {
        $book = array();
        foreach ($data as $key => $value) {
            $book[$key]['love'] = $this->isCollected($this->stuId,$value->code); 
            $book[$key]['number'] = $value->bookTM;
            $book[$key]['name'] = $value->bookName;
            // $book[$key]['position'] = $value->place;

            $num = strpos($value->place, '(');
            $num2 =  strpos($value->place, '（');
            if(!$num && !$num2) {
                $book[$key]['position']['lib']  = $value->place;
            } else {
                if(!$num) {                     //有中文括号（
                    $book[$key]['position']['lib']  = mb_substr($value->place,0, ($num2)/3,'utf-8');
                    $book[$key]['position']['floor'] = mb_substr($value->place,$num2);
                } else {
                    $book[$key]['position']['lib']  = mb_substr($value->place,0, ($num)/3,'utf-8');
                    $book[$key]['position']['floor'] = mb_substr($value->place,$num);
                }
            }


            $book[$key]['author'] = $value->writer;
        }
        return $book;
    }
}