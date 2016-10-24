 /**
|| =================================================================================
||
||	 Filename: 1821-使用arguments.js
||	Description:
||	Problem Description:
||
||		函数 useArguments 可以接收 1 个及以上的参数。
||		请实现函数 useArguments，返回所有调用参数相加后的结果。
||		本题的测试参数全部为 Number 类型，不需考虑参数转换。 
||		输入例子:
||		useArguments(1, 2, 3, 4)
||
||		输出例子:
||		10
||  Version:  1.0
||  
||       Created:   24/10/2016 09:06:34
||       Revision:  none
||       Compiler:  Firefox
||
||         Author:  Jack Dan9 (https://www.github.com/JackDan9), J.Dan92016@gmail.com 
||		   AuthorBlog:http://my.csdn.net/XXJ19950917   
||
|| =====================================================================================
*/
function useArguments() {
	  /*
	   因为参数数量不定，可以先获取参数个数arguments.length
	   然后循环求值
	  */
	  //声明一个变量保存最终结果
	  var sum = 0;
	  //循环求值
	  for(var i = 0; i < arguments.length; i++){
	      sum += arguments[i];
	  }
	  return sum;
 }

function useArguments() {
    var arr=Array.prototype.slice.call(arguments)//把arguments类数组转化为数组
    return eval(arr.join("+"));//求和
}

function useArguments() {
    var result = Array.prototype.reduce.call(arguments,function(a,b){return a+b;});
    return result;
}

function useArguments() {
    return Array.prototype.slice.call(arguments).reduce(function(pre,cur,i,a){
        return pre + cur;
    });
}

function useArguments() {
    return Array.prototype.slice.call(arguments).reduce(function(a,b){return a+b;},0)
}//先转化为数组;reduce（第一个参数为对数组项的操作，第二个参数是数组的起始点）返回的是一个值，不是数组