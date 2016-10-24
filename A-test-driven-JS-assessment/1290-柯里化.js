 /**
|| =================================================================================
||
||	 Filename: 1290-柯里化.js
||	Description:
||	Problem Description:
||
||		已知 fn 为一个预定义函数，实现函数 curryIt，调用之后满足如下条件：
||		1、返回一个函数 a，a 的 length 属性值为 1（即显式声明 a 接收一个参数）
||		2、调用 a 之后，返回一个函数 b, b 的 length 属性值为 1
||		3、调用 b 之后，返回一个函数 c, c 的 length 属性值为 1
||		4、调用 c 之后，返回的结果与调用 fn 的返回值一致
||		5、fn 的参数依次为函数 a, b, c 的调用参数 
||		输入例子:
||		var fn = function (a, b, c) {return a + b + c}; curryIt(fn)(1)(2)(3);
||
||		输出例子:
||		6
||  Version:  1.0
||  
||       Created:   24/10/2016 09:53:32
||       Revision:  none
||       Compiler:  Firefox
||
||         Author:  Jack Dan9 (https://www.github.com/JackDan9), J.Dan92016@gmail.com 
||		   AuthorBlog:http://my.csdn.net/XXJ19950917   
||
|| =====================================================================================
*/
// 柯里化是把接受多个参数的函数变换成接受一个单一参数(最初函数的第一个参数)的函数，
// 并且返回接受余下的参数且返回结果的新函数的技术。
function curryIt(fn) {
    return function a(xa){
        return function b(xb){
            return function c(xc){
                return fn.call(this,xa,xb,xc);
            };
        };
    };
}