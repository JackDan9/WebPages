# Nextjs-Rerender Nextjs重复渲染

| 标题 | 内容 |
| hydrate(element, container[, callback]) | 服务端和客户端渲染保持一致 |

## hydrate(element, container[, callback])

> 注意: 在React 18中，请使用hydrateRoot来代替hydrate。

- `hydrate()`与`render()`相同，但它用于在ReactDOMServer渲染的容器中对HTML的内容进行hydrate操作。React会尝试在已有标记还是那个绑定事件监听器。
- 

## 重复渲染的发生

## mobx-autorun

- 当你想创建一个响应式函数，而该函数本身永远不会有观察者时，可以使用mobx.autorun。这通常是当你需要从**反应式代码**桥接到**命令式代码**的情况，例如**打印日志**、**持久化**或者**更新UI**的代码。当使用autorun时，所提供的函数总是立即被触发一次，然后每次它的依赖关系改变时会再次被触发。相比之下，computed(function)创建的函数只有当它有自己的观察者时才会重新计算，否则它的值会被认为是不相关的。
- 经验法则：如果你有一个函数应该自动运行，但不会产生一个新的值，请使用autorun。其余情况都应该使用computed。