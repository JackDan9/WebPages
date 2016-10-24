 /**
|| =================================================================================
||
||	 Filename: 1894-使用闭包.js
||	Description:
||	Problem Description:
||
||		实现函数 makeClosures，调用之后满足如下条件：
||		1、返回一个函数数组 result，长度与 arr 相同
||		2、运行 result 中第 i 个函数，即 result[i]()，结果与 fn(arr[i]) 相同 
||		输入例子:
||		var arr = [1, 2, 3]; 
||		var square = function (x) { 
||			return x * x; 
||		}; 
||		var funcs = makeClosures(arr, square); 
||		funcs[1]();
||
||		输出例子:
||		4
||  Version:  1.0
||  
||       Created:   23/10/2016 16:29:28
||       Revision:  none
||       Compiler:  Firefox
||
||         Author:  Jack Dan9 (https://www.github.com/JackDan9), J.Dan92016@gmail.com 
||		   AuthorBlog:http://my.csdn.net/XXJ19950917   
||
|| =====================================================================================
*/
function makeClosures(arr, fn) {
  var result = [];
     arr.forEach(function(e){
         result.push(function(num){
             return function(){
                 return fn(num);
             };
         }(e));
     });
     return result;
 }