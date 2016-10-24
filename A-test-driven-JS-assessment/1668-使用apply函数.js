 /**
|| =================================================================================
||
||	 Filename: 1668-使用apply函数.js
||	Description:
||	Problem Description:
||
||		实现函数 callIt，调用之后满足如下条件
||		1、返回的结果为调用 fn 之后的结果
||		2、fn 的调用参数为 callIt 的第一个参数之后的全部参数 
||		输入例子:
||		var a = 1; var b = 2; var test = function (first, second) { return first === a && second === b;}; callIt(test, a, b);
||
||		输出例子:
||		true
||  Version:  1.0
||  
||       Created:   24/10/2016 09:17:34
||       Revision:  none
||       Compiler:  Firefox
||
||         Author:  Jack Dan9 (https://www.github.com/JackDan9), J.Dan92016@gmail.com 
||		   AuthorBlog:http://my.csdn.net/XXJ19950917   
||
|| =====================================================================================
*/
// 1. call()
function callIt(fn) {
    //将arguments转化为数组后，截取第一个元素之后的所有元素
    var args = Array.prototype.slice.call(arguments,1);
    //调用fn
    var result = fn.apply(null,args);
    return result;
}
// 2.apply()
function callIt(fn) {
    return fn.apply(this,[].slice.call(arguments,1));
}