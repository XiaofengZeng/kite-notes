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

进入mapshaper的[官网](https://mapshaper.org/)便是一个工具，直接上传文件后根据自身需求处理地理空间数据即可

### 本地使用

- 全局安装mapshaper依赖包

  ```sh
  npm i -g mapshaper
  ```

- 打开图形化界面

  ```sh
  mapshaper-gui
  ```

  执行该指令后，浏览器指定打开与mapshaper官网一样，但功能稍微不一样的页面（其**核心功能**不变）

- 查看帮助文档

  ```sh
  # 所有指令的帮助列表
  mapshaper -h

  # 具体指令的帮助文档（语法+例子）
  mapshaper -h <command>
  ```

## 指令的使用

### 文件操作

```sh
# 文件导入

# 文件导出（文件格式转换）
# name: 文件名称
# ext: 文件扩展名 
#      shp/geojson/topojson -> 输出空间信息+属性信息
#      dbf/csv              -> 输出属性信息
mapshaper -o <name>.<ext>
```

### 获取数据集信息

```sh
# 获取图层信息
# target: 必填 图层名称列表（多图层用逗号分隔）
mapshaper -info <target>

# 获取要素信息
# expression: 必填，JS布尔表达式
# target: 选填，图层名称列表（多图层用逗号分隔）
mapshaper -inspect <expression> [<target>]
```

### 坐标系转换

```sh
# projDef: 坐标系定义，使用Proj.4定义或者坐标系别名
mapshaper -proj <projDef>
```

### 数据概化（简化）

```sh
# Douglas-Peucker
# Visvalingam-Whyatt
```

### 空间操作

```sh
# 裁剪
# 擦除
# 融合
# ...
```

### 编辑属性表

```sh

```

## 文档参考

[「GIS工具」GISer的小军刀-mapshaper](https://malagis.com/gis-useful-tool-about-mapshaper.html)

[「GIS笔记」Mapshaper命令行通用格式说明](https://malagis.com/mapshaper-command-line-general-format-description.html)
