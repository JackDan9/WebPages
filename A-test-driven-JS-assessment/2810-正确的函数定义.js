 /**
|| =================================================================================
||
||	 Filename: 2810-正确的函数定义.js
||	Description:
||	Problem Description:
||		请修复给定的 js 代码中，函数定义存在的问题 
||		输入例子:
||		functions(true)
||
||		输出例子:
||		a
||
||  Version:  1.0
||  
||       Created:   22/10/2016 09:28:34
||       Revision:  none
||       Compiler:  Firefox
||
||         Author:  Jack Dan9 (https://www.github.com/JackDan9), J.Dan92016@gmail.com 
||		   AuthorBlog:http://my.csdn.net/XXJ19950917   
||
|| =====================================================================================
*/
// 1.源代码
function functions(flag) {
    if (flag) {
      function getValue() { return 'a'; }
    } else {
      function getValue() { return 'b'; }
    }

    return getValue();
}
// 2.正确代码
// else中的语句相当于将if中的function重写，
// 因此无论flag为何值，返回的方法始终为重写后的方法。
// 将方法赋值给一个变量，方法就不会被重写，因此才能得到正确的结果。 
function functions(flag) {
    if (flag) {
      var getValue = function () { return 'a'; }
    } else {
      var getValue = function () { return 'b'; }
    }
    return getValue();
}