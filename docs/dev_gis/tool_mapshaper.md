# [小工具] mapshaper

## 简介

[mapshaper](https://mapshaper.org/)是一个用于编辑多种地理空间数据格式的地理处理工具，现支持`Shapefile`、`GeoJSON`、`TopoJSON`、`BDF`和`CSV`格式

## 主要功能

1. 导入时可进行空间拓扑
2. 概化（简化线/面要素），支持[`Douglas-Peucker`和`Visvalingam-Whyatt`算法](https://zhuanlan.zhihu.com/p/355323735)
3. 通过导出，实现数据格式转换
4. **支持使用命令行处理地理数据**

## 如何使用

### 联网使用

进入mapshaper的[官网](https://mapshaper.org/)便是一个工具，直接上传文件按照自身需求处理地理空间数据即可

### 本地使用

- 全局安装mapshaper依赖包

  ```sh
  npm i -g mapshaper
  ```

- 打开图形化界面

  ```sh
  mapshaper-gui
  ```

  执行该指令后，浏览器指定打开与mapshaper官网一样，但功能稍微不一样的页面（**核心功能**不变）

## 指令的使用

`TODO...`
