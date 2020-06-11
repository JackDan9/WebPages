# MacroTask && MicroTask

## Example

``` javascript
console.log(1);
setTimeout(function(){
  console.log(2);
}, 0);
console.log(3);
```

- Output: 1, 3, 2

- `setTimeout()`为异步函数调用, 这是因为javascript是单线程, 主线程拥有一个**执行栈**以及一个**任务队列**, 主线程会依次执行代码, 当遇到异步函数时候, 会先将该函数入栈, 所有主线程函数运行完毕后再将异步函数出栈, 直到所有的异步函数执行完毕即可。

## Example

``` javascript
console.log(1);
setTimeout(function(){
  console.log(2);
}, 0);
Promise.resolve().then(function(){
  console.log(3);
}).then(function(){
  console.log(4);
});
Promise.resolve().then(function(){
  console.log(5);
}).then(function(){
  console.log(6);
});
```

- Output: 1, 3, 5, 4, 6, 2

- **Promise的函数代码的异步任务会优先于setTimeout的延时为0的任务先执行**。
- 原因是任务队列分为 macrotasks 和 microtasks, 而**promise中的then方法的函数会被推入到microtasks队列中**，而 **setTimeout函数会被推入到macrotasks任务队列** 中，在**每一次事件循环中，macrotask只会提取一个执行，而microtask会一直提取，直到microsoft队列为空为止**。也就是说如果某个microtask任务被推入到执行中，那么当主线程任务执行完成后，会循环调用该队列任务中的下一个任务来执行，直到该任务队列到最后一个任务为止。而事件循环每次只会入栈一个macrotask,主线程执行完成该任务后又会检查microtasks队列并完成里面的所有任务后再执行macrotask的任务。

## macrotasks: 

``` javascript
setTimeout, 
setInterval, 
setImmediate, 
I/O, 
UI rendering
```

## microtasks:

``` javascript
process.nextTick, 
Promise, 
MutationObserver
```