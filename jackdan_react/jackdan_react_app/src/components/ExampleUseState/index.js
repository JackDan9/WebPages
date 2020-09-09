import React, { useState, useEffect, useReducer } from 'react';

const initialState = { count: 0 };
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        default:
            throw new Error();
    }
}


function ExampleUseState() {
    // debugger;
    // const [count, setCount] = useState(0);

    // useEffect(() => {
    //     const id = setInterval(() => {
    //         setCount(count + 1);
    //     }, 1000);
    //     return () => clearInterval(id);
    // }, []);

    // useEffect(() => {
    //     const id = setInterval(() => {
    //         setCount(count + 1);
    //     }, 1000);
    //     return () => clearInterval(id);
    // }, [count]);

    // useEffect(() => {
    //     const id = setInterval(() => {
    //         setCount(c => c+1);
    //         // setState的函数式更新形式
    //         // （setCount 函数的身份是被确保稳定的，所以可以放心的省略掉）
    //         // 此时，setInterval 的回调依旧每秒调用一次，但每次 setCount 内部的回调取到的 count 是最新值（在回调中变量命名为 c）。
    //     }, 1000);
    //     return () => clearInterval(id);
    // });

    // 在一些更加复杂的场景中(比如一个state依赖于另外一个state), 尝试使用(useReducer Hook)把state更新逻辑移动到effect之外。 
    // useReducer的dispatch的身份永远是稳定的 —— 即使reducer函数是定义组件内部并且依赖于props。

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const id = setInterval(() => {
            dispatch({ type: 'increment' });
        }, 1000);
        return () => clearInterval(id);
    }, [])

    return <h1>{state.count}</h1>;
};

export default ExampleUseState;