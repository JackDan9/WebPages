/**
|| =================================================================================
||
||	 Filename: 3406-删除数组中的最后一个元素.js
||	 Description:
||	Problem Description:
||
||		删除数组 arr 最后一个元素。不要直接修改数组 arr，结果返回新的数组 
||		输入例子:
||		truncate([1, 2, 3, 4])
||
||		输出例子:
||		[1, 2, 3]
||  Version:  1.0
||  
||       Created:   21/10/2016 20:15:03
||       Revision:  none
||       Compiler:  Firefox
||
||         Author:  Jack Dan9 (https://www.github.com/JackDan9), J.Dan92016@gmail.com 
||		   AuthorBlog:http://my.csdn.net/XXJ19950917   
||
|| =====================================================================================
*/
// 1.slice()
function truncate(arr) {
    return arr.slice(0, -1);
 }

// 2.pop() 不改变原数组
function truncate(arr) {
 var a = arr.slice(0);
     a.pop();
     return a;
 } 