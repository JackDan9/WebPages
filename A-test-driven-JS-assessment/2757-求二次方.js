/**
|| =================================================================================
||
||	 Filename: 2757-求二次方.js
||	Description:
||	Problem Description:
||		为数组 arr 中的每个元素求二次方。不要直接修改数组 arr，结果返回新的数组 
||		输入例子:
||		square([1, 2, 3, 4])
||
||		输出例子:
||		[1, 4, 9, 16]
||
||  Version:  1.0
||  
||       Created:   22/10/2016 14:14:03
||       Revision:  none
||       Compiler:  Firefox
||
||         Author:  Jack Dan9 (https://www.github.com/JackDan9), J.Dan92016@gmail.com 
||		   AuthorBlog:http://my.csdn.net/XXJ19950917   
||
|| =====================================================================================
*/
// 1.map
function square(arr) {
    return arr.map(function(item,index,array){
        return item*item;
    })
}
// 2.push .forEach() 
// Not change the arr
function square(arr) {
   //声明一个新的数组存放结果
     var a = [];
     arr.forEach(function(e){
         //将arr中的每一个元素求平方后，加入到a数组中
         a.push(e*e);
     });
     return a;
 }

// 3. slice()
function square(arr) {
    var newarr = arr.slice(0);
        //复制一个arr数组
    for (var i=0;i<newarr.length;i++){
        newarr[i]= newarr[i]* newarr[i];
    }
    return newarr;
}