---
index: false
icon: laptop-code
category:
  - JavaScript
---

# Proxy和Reflect

## Proxy

- 相当于“代理”，作为“拦截器”使用，对被拦截的对象进行相关自定义操作
- 支持13种操作/应用场景：
  - **get(target, propKey, receiver)**
    - 现数组读取倒序
    - 实现链式操作
    - DOM通用节点创建
  - **set(target, propKey, value, receiver)**： 属性需可配置（configurable）以及可写（writable）
    - 控制私有属性不被修改
  - **has(target, propKey)**
  - **deleteProperty(target, propKey)**
  - **ownKeys(target)**
  - **getOwnPropertyDescriptor(target, propKey)**
  - **defineProperty(target, propKey, propDesc)**
  - **preventExtensions(target)**
  - **getPrototypeOf(target)**
  - **isExtensible(target)**
  - **setPrototypeOf(target, proto)**
  - **apply(target, object, args)**
  - **construct(target, args)**

## Reflect

Reflect 是便于操作对象

- 将部分Object的方法放置到Reflect对象上
- 修改某些Object方法的返回时，是之更加合理
- 让Objcet的一些命令操作变成函数行为
- Reflect的静态方法与Proxy操作方法一一对应，有利于Proxy对象调用Rflect方法（完成默认行为，作为修改行为的基础）
- 支持13种静态方法：
  - Reflect.apply(target, thisArg, args)
  - Reflect.construct(target, args)
  - Reflect.get(target, name, receiver)
  - Reflect.set(target, name, value, receiver)
  - Reflect.defineProperty(target, name, desc)
  - Reflect.deleteProperty(target, name)
  - Reflect.has(target, name)
  - Reflect.ownKeys(target)
  - Reflect.isExtensible(target)
  - Reflect.preventExtensions(target)
  - Reflect.getOwnPropertyDescriptor(target, name)
  - Reflect.getPrototypeOf(target)
  - Reflect.setPrototypeOf(target, prototype)
