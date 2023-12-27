---
index: false
icon: laptop-code
date: 2023-10-05
category:
  - JavaScript
---

# var、const和var

`let`和`const`是在ES6出现的，而`var`是在此之前。

var声明的变量是会声明置顶，并且定义在全局作用域中，最终会导致全局污染。

let只会在块级作用域中生效，不存在变量提升（不允许在声明前使用变量，在声明之前的块作用域范围即为暂时性死区TDZ）；有效地避免了var全局污染问题；不允许重复声明
const与let一样，区别在于cosnt声明的变量不允许被改变（基本类型，引用类型的内存地址不允许改变）
