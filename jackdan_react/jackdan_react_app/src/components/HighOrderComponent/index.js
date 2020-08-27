/**
 * 高阶组件这个概念就更好理解了，说白了就是一个函数接受一个组件作为参数，经过一系列加工后，最后返回一个新的组件。
 * 看下面的代码示例，withUser函数就是一个高阶组件，它返回了一个新的组件，这个组件具有了它提供的获取用户信息的功能。
 */

 /**
  * 
  * 以上这两种模式看上去都挺不错的，很多库也运用了这种模式，比如我们常用的React Router。
  * 但我们仔细看这两种模式，会发现它们会增加我们代码的层级关系。
  * 最直观的体现，打开devtool看看你的组件层级嵌套是不是很夸张吧。
  * 
  * 这时候再回过头看我们上一节给出的hooks例子，是不是简洁多了，没有多余的层级嵌套。把各种想要的功能写成一个一个可复用的自定义hook，当你的组件想用什么功能时，直接在组件里调用这个hook即可。
  * 
  */

/**
 * 
 * 
 * 生命周期钩子函数里的逻辑太乱了吧！
 * 
 * 我们通常希望一个函数只做一件事情，但我们的生命周期钩子函数里通常同时做了很多事情。
 * 比如我们需要在componentDidMount中发起ajax请求获取数据，绑定一些事件监听等等。
 * 同时，有时候我们还需要在componentDidUpdate做一遍同样的事情。
 * 当项目变复杂后，这一块的代码也变得不那么直观。
 * 
 */

/**
 * 
 * classes真的太让人困惑了！
 * 我们用class来创建react组件时，还有一件很麻烦的事情，就是this的指向问题。
 * 为了保证this的指向正确，我们要经常写这样的代码：this.handleClick = this.handleClick.bind(this)，或者是这样的代码：<button onClick={() => this.handleClick(e)}>。
 * 
 * 一旦我们不小心忘了绑定this，各种bug就随之而来，很麻烦。
 * 还有一件让我很苦恼的事情。
 * 我在之前的react系列文章当中曾经说过，尽可能把你的组件写成无状态组件的形式，因为它们更方便复用，可独立测试。
 * 然而很多时候，我们用function写了一个简洁完美的无状态组件，后来因为需求变动这个组件必须得有自己的state，我们又得很麻烦的把function改成class。
 * 在这样的背景下，Hooks便横空出世了！
 * 
 * 
 */


import React from 'react';

const withUser = WrappedComponent => {
    const user = sessionStorage.getItem('user');
    return props => <WrappedComponent user={user} {...props} />;
}


const UserPage = props => (
    <div className="user-container">
        <p>My Name is {props.user}!</p>
    </div>
);

export default withUser(UserPage);