 /**
|| =================================================================================
||
||	 Filename: 1446-二次封装函数.js
||	Description:
||	Problem Description:
||
||		实现函数 partialUsingArguments，调用之后满足如下条件：
||		1、返回一个函数 result
||		2、调用 result 之后，返回的结果与调用函数 fn 的结果一致
||		3、fn 的调用参数为 partialUsingArguments 的第一个参数之后的全部参数以及 result 的调用参数 
||		输入例子:
||		var a = 1; var b = 2; var c = 3; var d = 4;var test = function (first, second, third, forth) {return first + second + third + forth;};partialUsingArguments(test, a, b)(c, d);
||
||		输出例子:
||		10
||  Version:  1.0
||  
||       Created:   24/10/2016 09:21:32
||       Revision:  none
||       Compiler:  Firefox
||
||         Author:  Jack Dan9 (https://www.github.com/JackDan9), J.Dan92016@gmail.com 
||		   AuthorBlog:http://my.csdn.net/XXJ19950917   
||
|| =====================================================================================
*/
function partialUsingArguments(fn) {
     //先获取p函数第一个参数之后的全部参数
     var args = Array.prototype.slice.call(arguments,1);
     //声明result函数
     var result = function(){
         //使用concat合并两个或多个数组中的元素
         return fn.apply(null, args.concat([].slice.call(arguments)));
     }
     return result;
 }