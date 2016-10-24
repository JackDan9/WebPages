 /**
|| =================================================================================
||
||	 Filename: 2360-函数传参.js
||	Description:
||	Problem Description:
||		将数组 arr 中的元素作为调用函数 fn 的参数 
||		输入例子:
||		argsAsArray(function (greeting, name, punctuation) {return greeting + ', ' + name + (punctuation || '!');}, ['Hello', 'Ellie', '!'])
||
||		输出例子:
||		Hello, Ellie!
||  Version:  1.0
||  
||       Created:   22/10/2016 11:25:36
||       Revision:  none
||       Compiler:  Firefox
||
||         Author:  Jack Dan9 (https://www.github.com/JackDan9), J.Dan92016@gmail.com 
||		   AuthorBlog:http://my.csdn.net/XXJ19950917   
||
|| =====================================================================================
*/
// 1.apply()
// 调用函数可以使用call或者apply这两个方法，
// 区别在于call需要将传递给函数的参数明确写出来，是多少参数就需要写多少参数。
// 而apply则将传递给函数的参数放入一个数组中，传入参数数组即可。
function argsAsArray(fn, arr) {
  return fn.apply(this, arr);
 }