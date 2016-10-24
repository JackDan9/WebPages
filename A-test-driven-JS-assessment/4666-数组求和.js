/**
|| =================================================================================
||
||	 Filename: 4666-数组求和.js
||	Description:
||	Problem Description:
||
||		计算给定数组 arr 中所有元素的总和 
||		输入描述:
||		数组中的元素均为 Number 类型
||
||		Input:
||		sum([ 1, 2, 3, 4 ])
||
||		Output:
||		10
||
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
// 不考虑算法复杂度，用递归做： 
function sum(arr) {
    var len = arr.length;
    if(len == 0){
        return 0;
    } else if (len == 1){
        return arr[0];
    } else {
        return arr[0] + sum(arr.slice(1));
    }
}
// 常规循环:
function sum(arr) {
    var s = 0;
    for (var i=arr.length-1; i>=0; i--) {
        s += arr[i];
    }
    return s;
}
// 函数式编程 map-reduce:
function sum(arr) {
    return arr.reduce(function(prev, curr, idx, arr){
        return prev + curr;
    });
}
// forEach遍历:
function sum(arr) {
    var s = 0;
    arr.forEach(function(val, idx, arr) {
        s += val;
    }, 0);
  
    return s;
};
// eval:
function sum(arr) { 
	return eval(arr.join('+')); 
} 