 /**
|| =================================================================================
||
||	 Filename: 2110-返回函数.js
||	Description:
||	Problem Description:
||
||		实现函数 functionFunction，调用之后满足如下条件：
||		1、返回值为一个函数 f
||		2、调用返回的函数 f，返回值为按照调用顺序的参数拼接，拼接字符为英文逗号加一个空格，即 ', '
||		3、所有函数的参数数量为 1，且均为 String 类型 
||		输入例子:
||		functionFunction('Hello')('world')
||
||		输出例子:
||		Hello, world
||  Version:  1.0
||  
||       Created:   23/10/2016 16:17:28
||       Revision:  none
||       Compiler:  Firefox
||
||         Author:  Jack Dan9 (https://www.github.com/JackDan9), J.Dan92016@gmail.com 
||		   AuthorBlog:http://my.csdn.net/XXJ19950917   
||
|| =====================================================================================
*/
function functionFunction(str) {
  var f = function(str1){
         return str+", "+str1;
     }
     return f;
 }