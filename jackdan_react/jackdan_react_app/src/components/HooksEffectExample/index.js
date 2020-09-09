// 什么是Effect Hooks?

// 我们在上一节的例子中增加一个新功能：
// 我们写的有状态组件，通常会产生很多的副作用（side effect），比如发起ajax请求获取数据，添加一些监听的注册和取消注册，手动修改dom等等。
// 我们之前都把这些副作用的函数写在生命周期函数钩子里，比如componentDidMount，componentDidUpdate和componentWillUnmount。
// 而现在的useEffect就相当与这些声明周期函数钩子的集合体。它以一抵三。

// 同时，由于前文所说hooks可以反复多次使用，相互独立。
// 所以我们合理的做法是，给每一个副作用一个单独的useEffect钩子。
// 这样一来，这些副作用不再一股脑堆在生命周期钩子里，代码变得更加清晰。

// useEffect做了什么？

// 我们再梳理一遍下面代码的逻辑：

// function Example() {
//     const [count, setCount] = useState(0);

//     useEffect(() => {
//         document.title = `You clicked ${count} times`;
//     })
// }

// 首先，我们声明了一个状态变量count，将它的初始值设为0。
// 然后我们告诉react，我们的这个组件有一个副作用。
// 我们给useEffecthook传了一个匿名函数，这个匿名函数就是我们的副作用。
// 在这个例子里，我们的副作用是调用browser API来修改文档标题。
// 当react要渲染我们的组件时，它会先记住我们用到的副作用。
// 等react更新了DOM之后，它再依次执行我们定义的副作用函数。

// 这里要注意几点：

// 第一，react首次渲染和之后的每次渲染都会调用一遍传给useEffect的函数。
// 而之前我们要用两个声明周期函数来分别表示首次渲染（componentDidMount），和之后的更新导致的重新渲染（componentDidUpdate）。

// 第二，useEffect中定义的副作用函数的执行不会阻碍浏览器更新视图，也就是说这些函数是异步执行的，而之前的componentDidMount或componentDidUpdate中的代码则是同步执行的。
// 这种安排对大多数副作用说都是合理的，但有的情况除外，比如我们有时候需要先根据DOM计算出某个元素的尺寸再重新渲染，这时候我们希望这次重新渲染是同步发生的，也就是说它会在浏览器真的去绘制这个页面前发生。

import React, {useState, useEffect} from 'react';



// 1. 常用的场景。

    // 不用useEffect，为什么异步（请求数据，事件处理，订阅等相关操作）页面会死循环？（循环调用数据，循环刷新页面）

// 2. useEffect的第二个参数控制死循环。（只调用一次，但是页面至少刷新二次！）不完美

// 3. useEffect的执行的页面渲染之后执行的（组件渲染到屏幕之后执行）。

function HooksEffectExample() {
    const [count, setCount] = useState(0);

    // 类似于componentDidMount 和 componentDidUpdate
    useEffect(() => {
        // 更新文档的标题
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <h2>You clicked {count} times</h2>
            <button onClick={() => setCount(count + 1)}>
                Click Me
            </button>
        </div>
    )
}

export default HooksEffectExample;
