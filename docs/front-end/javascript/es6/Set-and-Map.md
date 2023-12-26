---
index: false
icon: laptop-code
category:
  - JavaScript
---

# Set和WeakSet、Map和WeakMap

## Set

- 类似数组的数据结构，每个成员的值是唯一的
- Set初始化参数接受数组（具有Iterable接口的数据结构），会将重复值排除，只保留一个
- 添加值时，不会做类型的自动转换（5 和 “5”），但NaN会被认为是相同（实际上NaN不等于NaN）
- 支持`keys()`，`values()`，`entries()`方法，`keys()`和`values()`方法的效果是一样的
- 可以实现 并集、交集、差集
- 常见场景
  - 使用Set实现数组的去重 `[...new Set(array)]` / `Array.from(new Set(array))`
  - 使用Set实现字符串去重 `[...new Set('ababbc')].join('')`

## WeakSet

- 类似Set，也不支持重复值。构造函数的参数是**数组/类数组（具有 Iterable 接口的对象）**，数组的成员只能是对象，不能是其他类型的值
- WebSet中的对象都是弱引用，会被垃圾回收机制处理，导致WeakSet中的数据不可控，因此不可遍历（没有`.size`和`.forEach`属性）
- 可以用 new 命令构造

## Map

- 类似对象的Hash结构，实现“值-值”的对应，而对象是“字符串-值”的对应，是一种更加完善的Hash结构
- 构造函数的参数支持“键-值”（`.set(key, value)`）对应 和 双元素的数组（`new  Map([[key1, value1], [key2, value2]])`）以及**具有 Iterable 接口的对象**
- 重复声明相同键的值，则会覆盖替换
- Map的键是如果是对象，会通过内存地址区分；对于基本类型，则会匹配值是否严格相等（`===`）
- 支持`keys()`，`values()`，`entries()`、`forEach()`方法

## WeakMap

- 只支持对象作为键名，不支持类型值作为键名
- **键名**引用的对象都是弱引用，键名不算入引用计数（垃圾回收机制不会考虑该引用，因此只要引用的对象的其他引用都被清除，那么该键值对也会被释放，不用手动删除。这样就可以防止内存泄漏）
- 不支持遍历方法，`keys()`，`values()`，`entries()`、`forEach()`，只有`get()`、`set()`、`has()`、`delete()`方法
- 使用场景
  - DOM 节点作为键名，对节点的操作进行记录，当节点删除时，WeakMap的对应的键值对也释放了
  - 部署私有属性。key是实例，value对应属性值，那么当实例消除后，内存被回收
