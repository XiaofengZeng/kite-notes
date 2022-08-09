# kite_notes

尽可能做到一周两个更新

## 做什么？

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

  在docs目录下新建文件夹，并在该目录下新建README.md文件

- 新建`markdown`文件（笔记的载体）

  在docs目录下的指定模块下新建.md拓展名的文件

- 引入笔记

  在`.vuepress`文件夹中，在`themeConfig.sidebar`配置项中配置笔迹的路由
  
  ```javascript
  themeConfig: {
    sidebar: {
      title: "xxx", // 笔记模块标题
      collapsable: false,  // 是否展开
      sidebarDepth: 2, // 节点展示的深度（即支持显示哪个等级的标题 h1 h2...）
      children: [
        // 细化笔记路由和标题
        ["<module1>/<notes1>", "<title1>"],
        ["<module1>/<notes2>", "<title2>"],
      ],
    }
  }
  ```

## 如何使用该工程？

- 安装

  推荐使用`pnpm`工具，但`npm`/`yarn`也没有问题

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
