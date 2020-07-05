/**
 * 全局变量在程序中始终都是有定义得。
 * 局部变量在声明它的函数体内以及其所嵌套的函数内始终是有定义的。
 * 
 * 每一段JavaScript代码(全局代码或者函数)都有一个与之关联的作用域链(scope chain)。
 * 
 * 
 */

// var scope = "global scope";
// function checkscope() {
//   var scope = "local scope";
//   function f() {
//     return scope;
//   }
//   return f();
// }
// console.log(checkscope()); // => "local scope"
/**
 * checkscope()函数声明了一个局部变量, 并定义了一个函数f(), 函数f()返回了这个变量的值, 最后将函数f()的执行结果返回。
 */

/**
 * 
 * checkscope()现在仅仅返回函数内嵌套的一个函数对象, 而不是直接返回结果。
 * 
 * JavaScript函数的执行用到了作用域链, 这个作用域链是函数定义的时候创建的。
 * 
 * 嵌套的函数f()定义在这个作用域链里, 其中的变量scope一定是局部变量, 不管在何时何地执行函数f(), 这种绑定在执行f()时依然有效。
 * 
 * 因此最后一行代码返回"local scope", 而不是"global scope"。简言之, 闭包的这个特性强大到让人吃惊:
 * 
 * 他们可以捕捉到局部变量(和参数), 并一直保存下来, 看起来像这些变量绑定到了在其中定义它们的外部函数。
 * 
 */
var scope = "global scope";
function checkscope() {
  var scope = "local scope";
  function f() {
    return scope;
  }
  return f;
}
console.log(checkscope()());
