// 从ExampleWithManyStates函数我们可以看到，useState无论调用多少次，相互之间是独立的。这一点至关重要。为什么这么说呢？

// 其实我们看hook的“形态”，有点类似之前被官方否定掉的Mixins这种方案，都是提供一种“插拔式的功能注入”的能力。
// 而mixins之所以被否定，是因为Mixins机制是让多个Mixins共享一个对象的数据空间，这样就很难确保不同Mixins依赖的状态不发生冲突。

// 而现在我们的hook，一方面它是直接用在function当中，而不是class；另一方面每一个hook都是相互独立的，不同组件调用同一个hook也能保证各自状态的独立性。
// 这就是两者的本质区别了。


// react是怎么保证多个useState的相互独立的？

// 还是看上面给出的ExampleWithManyStates例子，我们调用了三次useState，每次我们传的参数只是一个值（如25，‘banana'），我们根本没有告诉react这些值对应的key是哪个，
// 那react是怎么保证这三个useState找到它对应的state呢？

// 答案是，react是根据useState出现的顺序来定的。我们具体来看一下：

/**
 * 
 * //第一次渲染
 * useState(25); //将age初始化为25
 * useState('banana'); //将fruit初始化为banana
 * useState([{ text: 'Learn Hooks' }]); //...
 * 
 * //第二次渲染
 * useState(25); //读取状态变量age的值（这时候传的参数25直接被忽略）
 * useState('banana'); //读取状态变量fruit的值（这时候传的参数banana直接被忽略）
 * useState([{ text: 'Learn Hooks' }]); //...
 * 
 */
// 假如我们改一下代码：
/**
 * let showFruit = true;
 * function ExampleWithManyStates() {
 *  const [age, setAge] = useState(25);
 *  if(showFruit) {
 *      const [fruit, setFruit] = useState('banana');
 *      showFruit = false;
 *  }
 *  const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);
 * }
 */
// 这样一来
/**
 * 
 * //第一次渲染
 * useState(25); //将age初始化为25
 * useState('banana'); //将fruit初始化为banana
 * useState([{ text: 'Learn Hooks' }]); //...
 * 
 * //第二次渲染
 * useState(25); //读取状态变量age的值（这时候传的参数25直接被忽略）
 * // useState('banana'); 
 * useState([{ text: 'Learn Hooks' }]); //读取到的却是状态变量fruit的值，导致报错
 * 
 */

// 鉴于此，react规定我们必须把hooks写在函数的最外层，不能写在if{} else{} 等条件语句当中，来确保hooks的执行顺序一致。

import React, {useState, useEffect} from 'react';


function ExampleWithManyStates() {
    const [age, setAge] = useState(25);
    const [fruit, setFruit] = useState('apple');
    const [todos, setTodos] = useState([{ text: 'Lean Hoks' }]);
}


