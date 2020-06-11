# Promise.any()

## 定义
- `Promise.any()`方法接受一组Promise实例作为参数, 包装成一个新的Promise实例。只要参数实例有一个变成`fullfilled`状态, 包装实例就会变成`fullfilled`状态; 如果所有参数实例都变成`rejected`状态, 包装实例就会变成rejected状态。该方法目前是一个第三阶段的**提案**。