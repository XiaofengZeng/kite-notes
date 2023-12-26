---
index: false
icon: laptop-code
category:
  - JavaScript
---

# 对象的拓展

- Object.is()，是对ES5的`==`和`===`的完善

```js
Object.is(+0, -0)    // false
Object.is(NaN, NaN)  // true
```

## 对象操作方法

- Object.assign()，合并对象（必须是**可枚举**的）并将同名属性进行覆盖
  - 第一参数是目标对象，后续参数可以一直传
  - 支持浅拷贝
  - 支持同名属性覆盖
  - 使用场景
    - 添加属性/方法
    - 克隆对象（浅拷贝）
- Object.getOwnPropertyDescriptor()，返回单个属性的属性描述对象
- Object.getOwnPropertyDescriptors()，返回整个对象自身属性（非继承属性）的属性描述对象
- Object.keys()，返回自身属性（不含继承）的键名
- Object.values()，返回自身属性（不含继承）的键值
- Object.entries()，返回自身属性（非 Symbol 值的属性）的键值对数组（二维数组）
  - 可遍历对象属性
  - 可将对象转换成Map结构
- Object.fromEntries()，将键值对数组转换成对象（Object.entries()的逆操作）
  - 可获取url的queryString：`URLSearchParams('foo=bar&baz=qux')`

## 原型操作方法

- Object.setPrototypeOf(obj)：设置对象的原型对象
- Object.getPrototypeOf(obj, proto)：获取对象的原型对象
- Object.create(proto，objDescriptor)，根据某一对象为原型，创建一个对象
