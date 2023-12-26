---
index: false
icon: laptop-code
date: 2023-10-09
category:
  - JavaScript
---

# Symbol

Symbol 是一个类似字符串的基本类型（JavaScript的第七个基本类型），用于防止对象相同属性重冲突。

```js
const s1 = Symbol()

const s2 = Symbol('foo')

const s3 = Symbol({
	toString() {
		return 'abc';
	}
})
```

- 调用`symbol`函数不能使用`new`关键字
- 参数可以是字符串或者是对象，对象则会调用`toString`方法后的返回值作为symbol值，参数即是Symbol的描述，可通过`.description`获取
- 相同参数名的symbol值是不一样的，因此也保证了唯一性
- symbol值不能进行计算，会报错
- 支持转成字符串/布尔值，不能转化成数值
- **Symbol 值作为对象属性名是，不能用点运算符**
- **Symbol可以定义一组常量，保证这组常量的值都是不相等的**
- 有利于消除“魔术字符串”（魔术字符串指的是，在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值）
- 不支持`for...in`、`for...of`、`Object.keys()`、`Object.values()`、`Object.entries()`、`Object.getOwnPropertyNames()`获取/遍历Symbol值，但提供了`Object.getOwnPropetySymbols()`获取对象所有Symbol名。因此可以**为对象定义非私有但内部需要使用的变量**
- `Reflect.ownKeys()`可以获取对象的所有属性名（包括常规键名和 Symbol 键名）

- Symbol.for()，会从全局Symbol注册表中查找，如果没有则生成一个，有则返回对应的Symbol
- Symbol.keyFor()，返回已经登记的Symbol的描述descriptor
