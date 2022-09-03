# JavaScript 常用操作

## 随机数生成

生成随机数主要使用的是`Math.random()`方法，**返回0（包括0）到1（不包括1）**的小数。

- 生成随机小数（分数）

```js
Math.random()
```

- 生成指定范围的随机整数（0至***）

```js
Math.floor(Math.random() * 10) // 0-9
```

- 生成指定范围的随机整数（最小范围至最大范围）

```js
/**
 * max: 最大值
 * min：最小值
 */
Math.floor(Math.random() * (max - min + 1) + min)
```
