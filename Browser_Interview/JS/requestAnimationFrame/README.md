# requestAnimationFrame

## window.requestAnimationFrame()
- `window.requestAnimationFrame()`告诉浏览器--你希望执行一个动画, 并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数, 该回调函数会在浏览器下一次重绘之前执行。

> 注意: 若你想在浏览器下次重绘之前继续更新下一帧动画, 那么回调函数自身必须再次调用`window.requestAnimationFrame()`。

- 当你准备更新动画时你应该调用此方法。这将使浏览器在下一次重绘之前调用你传入给该方法的动画函数(即你的回调函数)。回调函数执行次数通常是每秒60次, 但在大多数遵循W3C建议的浏览器中, 回调函数执行次数通常与浏览器屏幕刷新次数相匹配。为了提高性能和电池寿命, 因此在大多数浏览器里面, 当`requestAnimationFrame()`运行在后台标签或者隐藏的`<iframe>`里时, `requestAnimationFrame()`会被暂停调用以提升性能和电池寿命。

- 回调函数会被传入`DOMHighResTimeStamp`参数, `DOMHighResTimeStamp`指示当前被`requestAnimationFrame()`排序的回调函数被触发的时间。在同一帧中的多个回调函数, 它们每一个都会接受到一个相同的时间戳, 即使在计算上一个回调函数的工作负载期间已经消耗了一些时间。该时间戳是一个十进制数, 单位毫秒, 最小精度为1ms(1000μs)

## Example

```javascript
window.requestAnimationFrame(callback);
```

https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestAnimationFrame