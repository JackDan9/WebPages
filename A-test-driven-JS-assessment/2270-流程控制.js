 /**
|| =================================================================================
||
||	 Filename: 2270-流程控制.js
||	Description:
||	Problem Description:
||		实现 fizzBuzz 函数，参数 num 与返回值的关系如下：
||		1、如果 num 能同时被 3 和 5 整除，返回字符串 fizzbuzz
||		2、如果 num 能被 3 整除，返回字符串 fizz
||		3、如果 num 能被 5 整除，返回字符串 buzz
||		4、如果参数为空或者不是 Number 类型，返回 false
||		5、其余情况，返回参数 num 
||		输入例子:
||		fizzBuzz(15)
||
||		输出例子:
||		fizzbuzz 
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
function fizzBuzz(num) {
	if((num%3)==0 && (num%5)==0) {
		return 'fizzbuzz';
	}
	else if((num%3)==0){
		return 'fizz';
	}
	else if((num%5)==0){
		return 'buzz';
	}
	else if(!num || isNaN(num)){
		return false;
	}
	else {
		return num;
	}
}