 /**
|| =================================================================================
||
||	 Filename: 2879-避免全局变量.js
||	Description:
||	Problem Description:
||		修改以下代码,避免全局变量.
||		function globals() {
||		    myObject = {
||		      name : 'Jory'
||		    };
||
||		    return myObject;
||		}
||
||  Version:  1.0
||  
||       Created:   22/10/2016 09:17:24
||       Revision:  none
||       Compiler:  Firefox
||
||         Author:  Jack Dan9 (https://www.github.com/JackDan9), J.Dan92016@gmail.com 
||		   AuthorBlog:http://my.csdn.net/XXJ19950917   
||
|| =====================================================================================
*/
function globals() {
    //只需要在声明myObject时加上var就行了
    var myObject = {
      name : 'Jory'
    };
 
    return myObject;
}