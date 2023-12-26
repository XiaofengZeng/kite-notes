# kite_notes

## 记录什么？

- 关于自己对技术追求的记录
  - 环境部署
  - 开发技巧
    - 前端
    - 后台
    - GIS
  - 数据库
  - 操作系统
    - Linux
    - Windows
- 关于宝藏网页的记录

## 如何新增笔记？
  
- 新建目录（在没有笔记归属的模块时）

  在docs目录下新建文件夹（**一级模块**），并在该目录下新建README.md文件（该文件作为当前模块下的目录索引文件），该目录仍可继续新建文件夹（二级/三级...模块）

```md
---
title: 一级模块名称
index: false
icon: laptop-code
---

<AutoCatalog />
```

对于新建目录（一级模块）而言，它是应用于导航栏，作为路由，包含它的子模块，因此，需要在导航栏配置文件（`docs/.vuepress/navbar.ts`）中做好配置：

```ts
import { navbar } from 'vuepress-theme-hope';

export default navbar([
  '/',
  {
    text: '前端',
    icon: 'pen-to-square',
    prefix: '/front-end/',  // 一级模块（父文件夹）
    children: [             // 二模块（子文件夹）
      'javascript',
      'css',
      'html',
      'tools'
    ]
  },
  {
    text: 'GIS',
    icon: 'pen-to-square',
    prefix: '/gis/',       // 一级模块（父文件夹）
    children: [
      { 
        text: '2D', 
        prefix: '/2d/',    // 二级模块（子文件夹）
        children: [
          'openlayers'     // 三级模块（孙文件夹）
        ] 
      },
      { 
        text: '3D', 
        prefix: '/3d/',    // 二级模块（子文件夹）
        children: [
          'cesium',        // 三级模块（孙文件夹）
          'ol-cesium',
        ]
      },   
    ]
  }
]);
```

对于新建目录（**二级及其以下的模块**），它是应用于侧边栏，作为子路由，包含该模块的系列文章，因此，需要在侧边栏配置文件（`docs/.vuepress/sidebar.ts`）中做好配置：

```ts
import { sidebar } from 'vuepress-theme-hope';

export default sidebar({
  '/front-end/javascript/': [   // 路由地址：/一级模块/二级模块/
    {
      text: 'ES6语法',
      icon: 'book',
      prefix: 'es6/',           // 系列文章前缀(三级模块)： /一级模块/二级模块/三级模块/
      children: [
        {
          text: '01. JavaScript与ECMAScript',
          link: 'JavaScript-and-ECMAScript'   // 具体文章： /一级模块/二级模块/三级模块/文章文件名
        },
        {
          text: '02. var let const',
          link: 'var-let-const'
        },
        // ...
      ]
    },
  ],
  '/front-end/css/': [
    // ...
  ],
  '/front-end/html/': [
    // ...
  ]
});
```

- 在对应的级别模块下，新建`markdown`文件（笔记的载体，以`.md`作为文件拓展名）

## 如何使用该工程？

- 安装

  推荐使用`pnpm`工具进行安装，但使用`npm`/`yarn`也没有问题

  ```sh
  pnpm install
  ```

- 开发调试

  ```sh
  pnpm docs:dev
  ```

- 打包部署

  ```sh
  pnpm docs:build
  ```
