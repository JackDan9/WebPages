 /**
|| =================================================================================
||
||	 Filename: 2274-函数上下文.js
||	Description:
||	Problem Description:
||
||		将函数 fn 的执行上下文改为 obj 对象 
||		输入例子:
||		speak(function () {return this.greeting + ', ' + this.name + '!!!';}, {greeting: 'Hello', name: 'Rebecca'})
||
||		输出例子:
||		Hello, Rebecca!!! 
||  Version:  1.0
||  
||       Created:   22/10/2016 16:14:36
||       Revision:  none
||       Compiler:  Firefox
||
||         Author:  Jack Dan9 (https://www.github.com/JackDan9), J.Dan92016@gmail.com 
||		   AuthorBlog:http://my.csdn.net/XXJ19950917   
||
|| =====================================================================================
*/
// 在JavaScript中，函数是一种对象，
// 其上下文是可以变化的，对应的，
// 函数内的this也是可以变化的，
// 函数可以作为一个对象的方法，
// 也可以同时作为另一个对象的方法，
// 可以通过Function对象中的call或者apply方法来修改函数的上下文，
// 函数中的this指针将被替换为call或者apply的第一个参数。
// 将函数 fn 的执行上下文改为 obj 对象，
// 只需要将obj作为call或者apply的第一个参数传入即可
// 1.apply()
function speak(fn, obj) {
  return fn.apply(obj, obj);
 }
// 2.apply
function speak(fn, obj) {
    return fn.apply(obj);
}
// 3.call
function speak(fn, obj) {
    return fn.call(obj);
}
// 4.bind
function speak(fn, obj) {
    return fn.bind(obj)();
}