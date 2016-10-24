 /**
|| =================================================================================
||
||	 Filename: 2572-完全等同.js
||	Description:
||	Problem Description:
||		 .
||		实现一个打点计时器，要求
||		1、从 start 到 end（包含 start 和 end），每隔 100 毫秒 console.log 一个数字，每次数字增幅为 1
||		2、返回的对象中需要包含一个 cancel 方法，用于停止定时操作
||		3、第一个数需要立即输出  
||  Version:  1.0
||  
||       Created:   22/10/2016 09:49:34
||       Revision:  none
||       Compiler:  Firefox
||
||         Author:  Jack Dan9 (https://www.github.com/JackDan9), J.Dan92016@gmail.com 
||		   AuthorBlog:http://my.csdn.net/XXJ19950917   
||
|| =====================================================================================
*/
function count(start, end) {
    if(start <= end){
        console.log(start);
        start++;
        st = setTimeout(function(){count(start, end)}, 100);
    }
    return {
        cancel: function(){clearTimeout(st);}
    }
}