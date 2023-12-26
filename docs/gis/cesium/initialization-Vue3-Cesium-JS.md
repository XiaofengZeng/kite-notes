---
index: false
icon: laptop-code
date: 2023-12-16
category:
  - Cesium
---

# Vue3+Vue-CLI+Cesium

Vue-CLI和Vite本质上就是项目的构建工具，并没有多大区别，构建相关的内容主要参考其思路；TS和JS的选择也是根据项目技术选型决定，本质啥也没有区别，同时，TS和JS的选择会在搭建工程时完成相关初始化。因此，主要关注的还是Cesium依赖的处理方式，即构建工具的对于Cesium的相关配置。

## 版本号

- cesium@1.111.0

## 思路

### 1. 创建Vue项目

```bash
# 使用vue-cli方式需要提前全局安装该依赖，
# vite则不需要，vite在构建项目时会自动安装
npm install -g @vue/cli

# vue=cli创建
vue create cesium-project
# vite创建
npm create vite@latest

# 后续会进行定制化的配置选择（
# 1. TS/JS的选择
# 2. 语法检查的选择
# 3. 格式化的选择
#    ...

# 创建成功后，进入到工程文件夹，并启动即可
cd cesium-project
npm run serve
```

### 2. 安装Cesium依赖

这里开始决定是否需要手动配置（安装、改构建配置）、还是自动配置（安装依赖，加入插件）

```bash
# vue cli 需要自己手动配置
npm install cesium@1.111.0 -D

# vite可以安装cesium插件实现自动配置
npm install cesium@1.111.0 -D
npm install vite-plugin-cesium -D
```

### 3. Cesium在构建工具中的配置

主要是**文件夹的复制**和**环境变量的设置**

#### 3.1 Cesium依赖文件夹的配置（以VueCLI+JS为例）

我们一般会创建一个文件夹统一存放修改过的依赖（如在工程文件中的public文件夹下创建一个lib文件 `public/lib`），因此我们将该文件夹作为cesium打包时的目标文件夹，将依赖中的cesium/Build/CesiumUnminified作为源目标文件夹（CesiumUnminified是未压缩版本；==xxx是压缩版本==）。
需要添加构建工具对应复制文件的插件（VueCLI：copy-webpack-plugin，==Vite：xxx==）
我们将npm下载的cesium/

```js
const path = require('path')
const { defineConfig } = require('@vue/cli-service')
const CopyWebpackPlugin = require('copy-webpack-plugin')

// 源文件夹
const cesiumSource = 'node_modules/cesium/Build/CesiumUnminified'
// 目标文件夹
const cesiumTarget = 'lib/cesium'

module.exports = defineConfig({
  // ...
  configureWebpack: {
	// ...
    plugins: [
	  // 复制文件
	  new CopyWebpackPlugin({
	    patterns: [
	      { from: path.join(cesiumSource, 'Cesium.js'), to: `${cesiumTarget}` },
          { from: path.join(cesiumSource, 'Workers'), to: `${cesiumTarget}/Workers` },

          { from: path.join(cesiumSource, 'Assets'), to: `${cesiumTarget}/Assets` },
          { from: path.join(cesiumSource, 'Widgets'), to: `${cesiumTarget}/Widgets` },
          { from: path.join(cesiumSource, 'ThirdParty'), to: `${cesiumTarget}/ThirdParty` },
	    ]
	  })
    ],
  },
  // ...
})
```

#### 3.2 Cesium构建时环境变量得配置（以VueCLI+JS为例）

上一步，只是将文件夹打包到构建后得代码中，是实际上还没有真正引入至工程中给客户端使用。因此，我们需要将Cesium引入到全局变量中，方便后续操作，同时需要动态将相关js、css文件插入到index.html中

我们一般将环境分成：开发环境（develoement）和生产环境（production），因此，分别创建两个配置文件：

- .env.development

```bash
VUE_APP_TITLE='cesium-project-dev'
VUE_APP_CESIUM_BASE_URL='lib/cesium'
```

- .env.production

```html
VUE_APP_TITLE='cesium-project-prod'
VUE_APP_CESIUM_BASE_URL='lib/cesium'
```

虽然目前两个文件的Cesium配置是相同的，但是实现了不同的构建环境使用不同的配置。

接下来，再修改index.html文件

```html
<!doctype html>
<html lang="">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <title><%= VUE_APP_TITLE %></title>
	<script src="<%= VUE_APP_CESIUM_BASE_URL %>/Cesium.js"></script>
	<link rel="stylesheet" type="text/css" href="<%= VUE_APP_CESIUM_BASE_URL %>/Widgets/widgets.css"></link>
  </head>
  <body>
	 <!-- ... -->
    <div id="app"></div>
  </body>
</html>
```

## 坑点记录

1. Cessium实例化的对象不能被Vue给数据劫持，否则会出现意想不到的报错（球体加载不出来，只有大气层，因此底图瓦片一直在请求队列中，\_tileLoaded变量一直是false）
2. 应使用全局变量的Cesium模块，而不是用import的方式导入Cesium，否则也会出现意想不到的报错（3D Tileset 加载了入口文件 tileset.json，但没有继续请求后续的瓦片，因为两种方式的请求队列RequestScheduler不是同一个对象，主要使用的是全局变量的Cesium.RequestScheduler对象，所以一直处于\_tileLoaded变量一直是false）
