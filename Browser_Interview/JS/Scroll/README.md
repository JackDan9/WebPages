# H5滑动问题

- h5禁止ios上拉回弹_通过js解决safari、微信下拉回弹和上拉空白的效果

```html
<body>
  <div class="wrapper">
    <!-- 滚动DOM -->
    <div class="content">
      <p class="pull-down">下拉刷新</p>
      <ul class="list">
        <li>列表1</li>
        <li>列表2</li>
        <li>列表3</li>
        <li>列表4</li>
        <li>列表5</li>
        <li>列表6</li>
        <li>列表7</li>
        <li>列表8</li>
        <li>列表9</li>
        <li>列表10</li>
        <li>列表11</li>
        <li>列表12</li>
        <li>列表13</li>
        <li>列表14</li>
        <li>列表15</li>
      </ul>
      <p class="pull-up">上拉加载</p>
    </div>
  </div>
</body>
```

```javascript
  window.onload = function () {
    var overscroll = function (el) {
      el.addEventListener('touchstart', function () {
        let top = el.scrollTop;
        let totalScroll = el.scrollHeight;
        let currentScroll = top + el.offsetHeight;
        if (top === 0) {
          el.scrollTop = 1; // 依据自己的值进行设置
        } else if (currentScroll === totalScroll) {
          el.scrollTop = top - 1; // 依据自己的值进行设置
        }
      });

      el.addEventListener('touchmove', function (evt) {
        if (el.offsetHeight < el.scrollHeight) {
          evt._isScroller = true;
        }
      });
    }

    overscroll(document.querySelector('.wrapper')); // 滚动的class类，依据自己的值进行设置
    document.body.addEventListener('touchmove', function (evt) {
      if (!evt._isScroller) {
        evt.preventDefault();
      }
    });
  }
```