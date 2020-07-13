var data = [
  {"src": "../images/example/1.jpg"},
  {"src": "../images/example/2.jpg"},
  {"src": "../images/example/3.jpg"},
  {"src": "../images/example/4.jpg"},
  {"src": "../images/example/5.png"},
  {"src": "../images/example/6.jpg"},
  {"src": "../images/example/7.jpg"},
  {"src": "../images/example/8.png"},
  {"src": "../images/example/9.jpg"},
  {"src": "../images/example/10.jpg"},
  {"src": "../images/example/11.jpg"},
  {"src": "../images/example/12.jpg"},
  {"src": "../images/example/13.jpg"},
  {"src": "../images/example/14.png"},
  {"src": "../images/example/15.png"},
  {"src": "../images/example/16.png"},
  {"src": "../images/example/17.jpg"},
  {"src": "../images/example/18.jpg"},
  {"src": "../images/example/19.jpg"},
  {"src": "../images/example/20.jpeg"}
]

$(function () {
  var container = $('#container');
  var boxes = container.children("div");
  waterFall(container, boxes);
  $(this).scroll(function (event) {
    appendBox(container, boxes);
  });
});


/**
 * 瀑布流布局函数
 * @param {*} container 
 * @param {*} boxes 
 */
function waterFall(container, boxes) {
  /**
   * 第一步: 先获取能容纳的列数: 窗口宽度/每列宽度
   * +4是外边距
   */
  var boxesWidth = boxes.eq(0).width() + 4;
  var windowWidth = $(window).width();
  var column = Math.floor(windowWidth/boxesWidth);
  /**
   * 顺便计算得出容器的宽度, 让盒子居中
   */
  var containerWidth = column * boxesWidth;
  container.width(containerWidth);

  /**
   * var arr = [];
   * 第二步: 定义一个数组(定义数组两种方式即可)存储每一列的高度
   */
  var arr = new Array(); 
  /**
   * 遍历每一个盒子
   */
  for (var i = 0; i < boxes.length; i++) {
    /**
     * 当i < column时, 说明在第一行, 把盒子的高度存入到数组里
     * 否则就是第二行, 开始按照最小高度插入图片到列中
     */
    if (i < column) {
      arr[i] = boxes.eq(i).height() + 4;
    } else {
      /**
       * 先获取最小高度列的索引
       */
      var minHeight = Math.min.apply(null, arr);
      var minIndex = getMinIndex(minHeight, arr);
      /**
       * 这里的leftValue, 是指最小高度列距离窗口左边的距离, 
       * 相当于间接定位了这一列接下来要插入图片时, position定位的left值是多少
       */
      var leftValue = boxes.eq(minIndex).position().left;
      setStyle(boxes.eq(i), minHeight, leftValue, i);
      /**
       * 到这里已经插入了一张图片在最低高度列, 接下来要改变arr里的最低高度的值, 让它继续下次遍历
       */
      arr[minIndex] += boxes.eq(i).height() + 2;
    }
  }
}

/**
 * 设置追加盒子的样式, 减少刷新量
 */
var getStartNumber = 0;
var setStyle = function (box, top, left, index) {
  if (getStartNumber >=  index) {
    return false;
  }
  
  box.css({
    'position': 'absolute',
    'top': top,
    'left': left,
    'opacity': '0'
  }).stop().animate({
    'opacity': '1'
  }, 1000);

  getStartNumber = index;
};

/**
 * 计算最小高度列的索引值
 * @param {*} minHeight 
 * @param {*} arr 
 */
function getMinIndex(minHeight, arr) {
  var minIndex = arr.indexOf(minHeight)
  return minIndex;
}

/**
 * 判断是否在底部的函数
 * @param {*} container 
 */
function getBottom(container) {
  /**
   * 获取最后一列的高度和滚动的高度+窗口高度的和, 如果长的一列的高度比窗口+滚动的高度要小, 说明到底了需要追加
   */
  var documentHeight = $(window).height();
  var scrollHeight = $(window).scrollTop();
  var boxes = container.children('div');
  var lastBoxTop = boxes.eq(boxes.length - 1).offset().top;
  var lastBoxHeight = boxes.eq(boxes.length - 1).height + 2;
  var totalHeight = lastBoxHeight + lastBoxTop;
  return documentHeight + scrollHeight >= totalHeight ? true : false;
}

/**
 * 追加的元素增加waterFall效果
 * @param {*} container 
 * @param {*} boxes 
 */
function appendBox(container, boxes) {
  /**
   * 先判断是否展示到了底部
   */
  if (getBottom(container)) {
    for (i  in data) {
      var addStr = "<div class='item'><img src='+data[i].src+' alt='' /> </div>";
      container.append(addStr);
    }
  } else {
    return false;
  }
  waterFall(container, container.children('div'));
}
