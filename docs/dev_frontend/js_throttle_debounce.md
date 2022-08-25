# 节流&防抖

节流和防抖主要是为了优化前端的因多次回调导致性能下降问题以及减少后端请求处理压力。常用于短时间内触发重复事件的处理逻辑。

**节流**：在一定时间内只发起第一次调用，之后的具体时间段内，无视对重复调用

**防抖**：在计时开始/结束后调用，若在一定时间内重复触发，则重新计时，直到最后一次调用

## 节流

节流有三种实现方式，**时间戳**、**定时器**以及**两者的结合**

节流主要应用在一些执行函数中，如事件的回调函数，期待一段时间内只执行一次回调处理

常见场景：

1. 事件回调处理，如鼠标移动事件`mousemove`、窗口大小改变事件`resize`

```js
/**
 * 时间戳实现节流
 * @param {Function} fn 回调函数
 * @param {Number} delay 允许时长
 * @returns {Function} 
 */
function throttleByTimeStamp(fn, delay) {
  var timeOld = +Date.now();

  return function () {
    var timeNew = +Date.now();
    if (timeNew - timeOld >= delay) {
      fn.apply(this, arguments);
      timeOld = +Date.now();
    }
  };
}

/**
 * 计时器实现节流
 * @param {Function} fn 回调函数
 * @param {Number} delay 允许时长
 * @returns {Function}
 */
function throttleByTimer(fn, delay) {
  var timer = null;

  return function () {
    if (!timer) {
      timer = setTimeout(function () {
        fn.apply(this, arguments);
        timer = null;
      }, delay);
    }
  };
}

document.addEventListener(
  "mousemove",
  // 测试-时间戳实现
  // throttleByTimeStamp(function (res) {
  //   console.log(+Date.now());
  // }, 1000)
  // 测试-定时器实现
  throttleByTimer(function (res) {
    console.log(+Date.now());
  }, 1000)
);
```

## 防抖

防抖主要应用在一些经过连续操作结束后，只处理一次回调的场景，如`<input>`或`<button>`处理。

常见场景：

1. 搜索输入框的动态索引（如谷歌搜索引擎）
2. 重复点击提交表单按钮

主要的实现方式是使用**定时器**，但有时候也会出现**防抖需要立即执行**的情况

```js
/**
 * 延迟执行
 * @param {Function} fn 回调函数
 * @param {Number} delay 延迟时长
 * @returns {Function}
 */
function debounce(fn, delay) {
  var timeout = null;

  return function () {
    var ctx = this;
    var args = arguments;
    // 每次出发回调就会清除掉上一次的计时器，并重新定义生成器
    clearTimeout(timeout);

    timeout = setTimeout(function () {
      fn.apply(ctx, args);
    }, delay);
  };
}

/**
 * 立即执行
 * @param {Function} fn 回调函数
 * @param {Number} delay 延迟时长
 * @param {Boolean} immediate 是否立即执行
 * @returns {Function}
 */
function debounceImmediate(fn, delay, immediate) {
  var timeout = null;

  return function () {
    var ctx = this;
    var args = arguments;

    // 清除掉上一次的计时器
    if (timeout) {
      clearTimeout();
    }
    if (immediate) {
      var callNow = !timeout; // timeout为空则立即执行
      // 随后将计时器置空（重新开始）
      timeout = setTimeout(function () {
        timeout = null;
      }, delay);

      if (callNow) {
        fn.apply(ctx, args);
      }
    } else {
      timeout = setTimeout(function () {
        fn.apply(ctx, args);
      }, delay);
    }
  };
}
```
