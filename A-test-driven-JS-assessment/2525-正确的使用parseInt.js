
 /**
|| =================================================================================
||
||	 Filename: 2525-正确的使用parseInt.js
||	Description:
||	Problem Description:
||		 .
||		修改 js 代码中 parseInt 的调用方式，使之通过全部测试用例 
||		输入例子:
||		parse2Int('12'); parse2Int('12px'); parse2Int('0x12')
||
||		输出例子:
||		12; 12; 0
||  Version:  1.0
||  
||       Created:   22/10/2016 09:38:24
||       Revision:  none
||       Compiler:  Firefox
||
||         Author:  Jack Dan9 (https://www.github.com/JackDan9), J.Dan92016@gmail.com 
||		   AuthorBlog:http://my.csdn.net/XXJ19950917   
||
|| =====================================================================================
*/
// 1.原代码
function parse2Int(num) {
    return parseInt(num);
}
// 2.正确代码
function parse2Int(num) {
    return parseInt(num, 10);
}