# VUEX
## Vuex定义
- Vuex是一个专为Vue.js应用程序开发的**状态管理模式**。它采用集中式存储管理应用的所有组件的状态, 并以相应的规则保证状态以一种可预测的方式发生变化。Vuex也集成到Vue的官方调试工具`devtools extension`, 提供了诸如零配置的`time-travel`调试、状态快照导入导出等高级调试功能。

## 什么是"状态管理模式"?

```javascript
new Vue({
  // state
  data () {
    return {
      count: 0
    }
  },
  // view
  template: `
    <div>{{count}}</div>
  `,

  // actions
  methods: {
    increment () {
      this.count++;
    }
  }
})
```

- 这个状态自管理应用包含以下几个部分:

- **state**, 驱动应用的数据源;
- **view**, 以声明方式将**state**映射到视图;
- **actions**, 响应在**view**上的用户输入导致的状态变化。

- 以下是一个表示"单向数据流"理念的简单示意:

> https://vuex.vuejs.org/zh/
