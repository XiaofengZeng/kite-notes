---
index: false
icon: laptop-code
category:
  - JavaScript
---

# 函数的拓展

- 支持参数默认值
- rest参数（`...param`），用于获取剩余的参数
  - rest参数是一个数组，包含所有剩余的参数
  - 不支持后续再传入其他参数（rest参数只能作为最后一个参数传入）
  - 函数的length属性长度不包括rest参数
- 函数参数使用了默认值、解构赋值、或者扩展运算符，那么函数内部就不能显式设定为严格模式，否则会报错。

## 箭头函数

- 简化代码编写
- 注意事项：
  - `this`指向函数定义时所在的对象，而不是像普通函数的运行时所在的对象。setTimeout
    - 箭头函数没有自己的`this`，所以不能使用 bind() apply() call()
  - 不能作为箭头函数
  - 不可以使用arguments参数
  - 不能使用`yield`命令，不是是Generator函数
