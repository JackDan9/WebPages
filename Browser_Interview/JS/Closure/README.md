# Closure

## 闭包的特性
```
闭包的作用 
1 可以读取函数内部的变量(变量处理后的结果, 如果不处理, 就是返回函数变量本身)
2 可以把变量始终保存在内存中 

闭包的写法 
1 一个函数(即外部函数)里面包含另一个函数(即内部函数)，并且return返回这个内部函数， 然后内部函数在定义内部函数之外的作用域被调用，这时的内部函数就是一个闭包了。 
2 内部函数引用了外部函数的变量，这个变量不会被销毁，因为闭包需要这个变量， 所以通过闭包可以访问闭包保存的变量 
function foo(){ 
  var n = 1; 
  function innerFoo(){ 
    n += 1; 
    console.log(n); 
  } 
  return innerFoo; 
} 
var func = foo(); 
func();
// 2, 产生闭包innerFoo()，变量n保存在内存中 func(); 

3 闭包的缺点 
1 因为闭包的变量保存在内存中，内存泄漏，对内存的消耗很大，所以不要滥用闭包 闭包常用的地方： 
  1 es5 for循环事件监听 
  2 函数里使用了定时器 
  3 封装许多高级的功能集 减少闭包使用可以用立即执行函数传递变量
```

``` javascript
ES5
forEach(), filter(), reduce(), every() 和some()都会跳过空位。
map()会跳过空位，但会保留这个值
join()和toString()会将空位视为undefined，而undefined和null会被处理成空字符串。
ES6 中都会将空位当做undefined
```

``` javascript
JS 中值的类型分为基本数据类型和引用数据类型。基本数据类型包括 number, string, boolean, null, undefined以及es6引入的symbol类型(Symbol类型属于ES6中新增的基本数据类型之一，内部没有construtor构造器，不能使用new关键字创建)；引用数据类型即 object。首先基础数据类型它就不是对象。
另外，要注意 'hello' 和 new String('hello') 的区别，前者是字符串字面值，属于基础数据类型，而后者是引用数据类型。用 typeof 运算符返回的值也是完全不一样的：.
typeof 'hello';  // 'string'
typeof new String('hello');  // 'object'
之所以很多人分不清字符串字面值和 String 对象，归根结底就是 JS 的语法对你们太过纵容了。当执行 'hello'.length 时，发现可以意料之中的返回 5，你们就觉得 'hello' 就是 String 对象，不然它怎么会有 String 对象的属性。其实，这是由于 JS 在执行到这条语句的时候，内部将 'hello' 包装成了一个 String 对象，执行完后，再把这个对象丢弃了，这种语法叫做 “装箱”，在其他面向对象语言里也有（如 C#）。不要认为 JS 帮你装箱了，你就可以在写代码的时候不分箱里箱外了！
```

``` javascript
// 函数声明
function sum(a,b){
  return a+b
}

// 函数表达式
var sum = function(a,b){
  return a+b
}

// Function构造函数[从技术角度讲，这是一个函数表达式]
var sum = new Function('a','b','return a+b') //不推荐使用，影响函数解析性能

一.函数声明语法定义：function sum(num1,num2){ return num1+num2 };
二.函数表达式定义函数：1.var sum = function(num1,num2){ return num1+num2 };

var sum = new Function("num1","num2","return num1+num2");
// Function构造函数可以接受任意数量的参数，但最后一个参数始终被看成函数体，注意函数表达式定义函数的方法与声明其他变量时一样需要加分号。
```

``` javascript
关于Javascript中数字的部分知识总结：
1.Javascript中，由于其变量内容不同，变量被分为基本数据类型变量和引用数据类型变量。基本类型变量用八字节内存，存储基本数据类型(number, string, boolean, null and undefined)的值，引用类型变量则只保存对象、数组和函数等引用类型的值的引用(即内存地址)。
2. JS中的数字是不分类型的，也就是没有byte/int/float/double等的差异。
```

```
[1-9]\d{5}	6位地区编码
[1-9]\d{3}	4位年份
((0\d)|(1[0-2]))	2位月份
(([0|1|2]\d)|3[0-1])	2位日数
\d{3}[0-9Xx]	4位校检码
```


``` javascript
Symbol的用法
Symbol 值通过Symbol函数生成。这就是说，对象的属性名现在可以有两种类型，一种是原来就有的字符串，另一种就是新增的 Symbol 类型。凡是属性名属于 Symbol 类型，就都是独一无二的，可以保证不会与其他属性名产生冲突。

Object.assign()方法：
Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）。
const target = { a: 1 };
 
const source1 = { b: 2 };
const source2 = { c: 3 };
 
Object.assign(target, source1, source2);
target // {a:1, b:2, c:3}

Object.assign方法的第一个参数是目标对象，后面的参数都是源对象。

Generator函数
形式上，Generator 函数是一个普通函数，但是有两个特征。一是，function关键字与函数名之间有一个星号；二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）。

function* helloWorldGenerator() {
  yield 'hello';
  yield 'world';
  return 'ending';
}
 
var hw = helloWorldGenerator();
```

``` javascript
`Array.from(arr, mapfn, thisArg)`方法，用于将两类可以把对象转换为真正的数组：类似数组的对象和可遍历的对象（部署了Iterator接口的，String，ES6新增的Map和Set）。可以传3个参数，其中第一个是数组，必传；第二个是一个函数（类似map函数），对数组元素进行操作后再返回数组，可选；第三个是对于this关键字的指向，可选。

`slice()` 方法可从已有的数组中返回选定的元素。
返回值：返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。
说明
请注意，该方法并不会修改数组，而是返回一个子数组。如果想删除数组中的一段元素，应该使用方法`Array.splice()`。
所以在这里就是对集合A应用slice，返回一个新的数组，不对数组做任何改变。
展开运算符，把A集合的元素展开后，用数组[]承载，返回新的数组。
`map()`方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
`map()`方法按照原始数组元素顺序依次处理元素。
注意: map() 不会对空数组进行检测。
注意: map() 不会改变原始数组。
所以map方法返回了一个新的数组，并且数组中每个元素是A里面的元素。
```