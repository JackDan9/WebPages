import React, {useState, useEffect} from 'react';

/**
 * 
 * 什么是State Hooks？
 * 回到一开始我们用的例子，我们分解来看到底state hooks做了什么：
 * 
 * 
 * useState是react自带的一个hook函数，它的作用就是用来声明状态变量。
 * useState这个函数接收的参数是我们的状态初始值（initial state），它返回了一个数组，这个数组的第[0]项是当前当前的状态值，第[1]项是可以改变状态值的方法函数。
 * 
 * 所以我们做的事情其实就是，声明了一个状态变量count，把它的初始值设为0，同时提供了一个可以更改count的函数setCount。
 * 
 * 上面这种表达形式，是借用了es6的数组解构（array destructuring），它可以让我们的代码看起来更简洁。不清楚这种用法的可以先去看下我的这篇文章30分钟掌握ES6/ES2015核心内容（上）。
 * 
 * 如果不用数组解构的话，可以写成下面这样。
 * 实际上数组解构是一件开销很大的事情，用下面这种写法，或者改用对象解构，性能会有很大的提升。
 * 
 * 具体可以去这篇文章的分析Array destructuring for multi-value returns (in light of React hooks)，这里不详细展开，我们就按照官方推荐使用数组解构就好。
 * 
 */

function HooksExample() {
    // const [count, setCount] = useState(0);
    let _useState = useState(0);
    let count = _useState[0];
    let setCount = _useState[1];
    // 这个函数之所以这么了不得，就是因为它注入了一个hook--useState，就是这个hook让我们的函数变成了一个有状态的函数。
    // useEffect提供了类似于componentDidMount等生命周期钩子的功能，useContext提供了上下文（context）的功能等等。
    // Hooks本质上就是一类特殊的函数，它们可以为你的函数型组件（function component）注入一些特殊的功能。
    // 这听起来有点像被诟病的Mixins啊？难道是Mixins要在react中死灰复燃了吗？当然不会了，等会我们再来谈两者的区别。总而言之，这些hooks的目标就是让你不再写class，让function一统江湖。

    // 我们都知道React的核心思想就是，将一个页面拆成一堆独立的，可复用的组件，并且用自上而下的单向数据流的形式将这些组件串联起来。
    // 但假如你在大型的工作项目中用React，你会发现你的项目中实际上很多react组件冗长且难以复用。尤其是那些写成class的组件，它们本身包含了状态（state），所以复用这类组件就变得很麻烦。

    // 那之前，官方推荐怎么解决这个问题呢？答案是：渲染属性（Render Props）和高阶组件（Higher-Order Components）。我们可以稍微跑下题简单看一下这两种模式。

    // 渲染属性指的是使用一个值为函数的prop来传递需要动态渲染的nodes或组件。如下面的代码可以看到我们的DataProvider组件包含了所有跟状态相关的代码，而Cat组件则可以是一个单纯的展示型组件，这样一来DataProvider就可以单独复用了。

    // 是不是超简单？因为我们的状态count就是一个单纯的变量而已，我们再也不需要写成{this.state.count}这样了。
    return (
        <div>
            <h2>Click me Hooks: {count} times</h2>
            <button onClick={() => setCount(count + 1)}>
                {/* 
                    当用户点击按钮时，我们调用setCount函数，这个函数接收的参数是修改过的新状态值。
                    接下来的事情就交给react了，react将会重新渲染我们的Example组件，并且使用的是更新后的新的状态，即count=1。
                    这里我们要停下来思考一下，Example本质上也是一个普通的函数，为什么它可以记住之前的状态？ 
                */}

                {/*
                    一个至关重要的问题
                    
                    这里我们就发现了问题，通常来说我们在一个函数中声明的变量，当函数运行完成后，这个变量也就销毁了（这里我们先不考虑闭包等情况），比如考虑下面的例子： 
                    
                    function add(n) {
                        const result = 0;
                        return result + 1;
                    }

                    add(1); // 1 
                    add(1); // 1

                    不管我们反复调用add函数多少次，结果都是1。
                    因为每一次我们调用add时，result变量都是从初始值0开始的。
                    那为什么上面的Example函数每次执行的时候，都是拿的上一次执行完的状态值作为初始值？
                    答案是：是react帮我们记住的。至于react是用什么机制记住的，我们可以再思考一下。

                    假如一个组件有多个状态值怎么办？
                    首先，useState是可以多次调用的，所以我们完全可以这样写：

                    function ExampleWithManyStates() {
                        const [age, setAge] = useState(42);
                        const [fruit, setFruit] = useState('banana');
                        const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
                    }

                    其次，useState接收的初始值没有规定一定要是string/number/boolean这种简单数据类型，它完全可以接收对象或者数组作为参数。
                    唯一需要注意的点是，之前我们的this.setState做的是合并状态后返回一个新状态，而useState是直接替换老状态后返回新状态。
                    最后，react也给我们提供了一个useReducer的hook，如果你更喜欢redux式的状态管理方案的话。
                */}
                Click me hooks
            </button>
        </div>
    )
}

export default HooksExample;