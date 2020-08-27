# this

## 定义

``` javascript
/**
 * 
 * 2.1 如果 ref 是 Reference，并且 IsPropertyReference(ref) 是 true, 那么 this 的值为 GetBase(ref)
 *
 * 2.2 如果 ref 是 Reference，并且 base value 值是 Environment Record, 那么this的值为 ImplicitThisValue(ref)
 * 
 * 2.3 如果 ref 不是 Reference，那么 this 的值为 undefined
 * 
*/

// 让我们一步一步看：

// 计算 MemberExpression 的结果赋值给 ref
// 什么是 MemberExpression？看规范 11.2 Left-Hand-Side Expressions：

// MemberExpression :

// PrimaryExpression // 原始表达式 可以参见《JavaScript权威指南第四章》
// FunctionExpression // 函数定义表达式
// MemberExpression [ Expression ] // 属性访问表达式
// MemberExpression . IdentifierName // 属性访问表达式
// new MemberExpression Arguments // 对象创建表达式

var value = 1;

var foo = {
    value: 2,
    bar: function () {
        return this.value;
    }
}

console.log(foo.bar()); // Return a value of type Reference whose base value is baseValue and whose referenced name is propertyNameString, and whose strict mode flag is strict.
console.log((foo.bar)());

console.log((foo.bar == foo.bar)()); // 2.Let lval be GetValue(lref).
console.log((false || foo.bar)()); // 2.Let lval be GetValue(lref).
console.log((foo.bar, foo.bar)()); 

function foo() {
    console.log(this)
}

foo(); 
```

``` javascript
function Foo(){
	getName = function(){
		console.log(1);					
    };
    console.log(this);
	return this
}
			
function getName(){
	console.log(5);
}

Foo().getName();

// this 确实是指向 window ，但是这道题的陷阱在于 Foo 函数执行的时候，里面的 getName 函数覆盖了外层的 getName 函数
```