/**
|| =================================================================================
||
||	 Filename: 3150-数组合并.js
||	 Description:
||	Problem Description:
||
||		合并数组 arr1 和数组 arr2。不要直接修改数组 arr，结果返回新的数组 
||		输入例子:
||		concat([1, 2, 3, 4], ['a', 'b', 'c', 1])
||
||		输出例子:
||		[1, 2, 3, 4, 'a', 'b', 'c', 1]
||
||  Version:  1.0
||  
||       Created:   21/10/2016 21:44:03
||       Revision:  none
||       Compiler:  Firefox
||
||         Author:  Jack Dan9 (https://www.github.com/JackDan9), J.Dan92016@gmail.com 
||		   AuthorBlog:http://my.csdn.net/XXJ19950917   
||
|| =====================================================================================
*/
//1.split()
function concat(arr1, arr2) {
    var str=arr1.toString()+","+arr2.toString();
    return str.split(",");
}
//2.concat()
function concat(arr1, arr2) { 
	return arr1.concat(arr2) 
} 