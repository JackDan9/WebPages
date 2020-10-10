# React.memo()

## 使用方式

- React.memo()文档地址:

[react memo](https://reactjs.org/docs/react-api.html#reactmemo)

- 在class component时代, 为了性能优化(避免重复渲染)我们经常会使用`PureComponent`, 每次对props进行一次浅比较, 当然, 除了`PureComponent`外, 我们还可以在`shouldComponentUpdate`中进行更深层次的控制。

- 在`Function Component`的使用中, React贴心的提供了`React.memo`这个HOC(高阶组件), 与PureComponent很相似, 但是时专门给`Function Component`提供的, 对**Class Component并不适用**。

- 但是相比于PureComponent, React.memo()可以支持

> https://zhuanlan.zhihu.com/p/105940433