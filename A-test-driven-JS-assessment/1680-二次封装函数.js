 /**
|| =================================================================================
||
||	 Filename: 1680-二次封装函数.js
||	Description:
||	Problem Description:
||
||		已知函数 fn 执行需要 3 个参数。请实现函数 partial，调用之后满足如下条件：
||		1、返回一个函数 result，该函数接受一个参数
||		2、执行 result(str3) ，返回的结果与 fn(str1, str2, str3) 一致 
||		输入例子:
||		var sayIt = function(greeting, name, punctuation) {     return greeting + ', ' + name + (punctuation || '!'); };  partial(sayIt, 'Hello', 'Ellie')('!!!');
||
||		输出例子:
||		Hello, Ellie!!!
||  Version:  1.0
||  
||       Created:   24/10/2016 09:01:30
||       Revision:  none
||       Compiler:  Firefox
||
||         Author:  Jack Dan9 (https://www.github.com/JackDan9), J.Dan92016@gmail.com 
||		   AuthorBlog:http://my.csdn.net/XXJ19950917   
||
|| =====================================================================================
*/
// 1.call
function partial(fn, str1, str2) {
  var result = function(str3){
         return fn.call(this, str1, str2, str3);
     }
     return result;
 }
// 2.bind
function partial(fn, str1, str2) { 
     
    var result=function(str3){ 
        return fn.bind(this,str1,str2)(str3); 
    }; 
    return result; 
} 