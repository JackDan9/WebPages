/**
|| =================================================================================
||
||	 Filename: 3561-添加元素.js
||	Description:
||	Problem Description:
||
||		在数组 arr 末尾添加元素 item。不要直接修改数组 arr，结果返回新的数组 
||		输入例子:
||		append([1, 2, 3, 4],  10)
||
||		输出例子:
||		[1, 2, 3, 4, 10]
||
||  Version:  1.0
||  
||       Created:   21/10/2016 21:24:03
||       Revision:  none
||       Compiler:  Firefox
||
||         Author:  Jack Dan9 (https://www.github.com/JackDan9), J.Dan92016@gmail.com 
||		   AuthorBlog:http://my.csdn.net/XXJ19950917   
||
|| =====================================================================================
*/
// 1.push()
var append = function(arr, item) {
    var length = arr.length,
        newArr = [];
 
    for (var i = 0; i < length; i++) {
        newArr.push(arr[i]);
    }
 
    newArr.push(item);
 
    return newArr;
};
 
// 2.slice()
var append2 = function(arr, item) {
    var newArr = arr.slice(0);  // slice(start, end)浅拷贝数组
    newArr.push(item);
    return newArr;
};
 
// 3.concat()
var append3 = function(arr, item) {
    return arr.concat(item);
};