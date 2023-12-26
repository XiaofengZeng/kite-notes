---
index: false
icon: laptop-code
date: 2023-10-06
category:
  - JavaScript
---

# 字符串的拓展

- 加强Unicode的表示
- 增加Iterator接口，用于字串使用for...in遍历

## 模板字符串

- 支持普通单行字符串
- 支持多行字符串
- 支持字符串中嵌入变量`${}`
- 支持在嵌入变量中调用函数

## 实例方法

- `includes()` / `startWith()` / `endWith()` ： 判断字符串中是否包含指定内容
- `repeat()`：重复次数
- `padStart()` /  `padEnd()`：补齐至指定内容至指定长度
- `trimStart()` /  `trimEnd()`：清楚空白内容（包括空格、tab键、换行符等不可见的空白内容）
