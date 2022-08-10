# 「小工具」mapshaper

## 简介

[mapshaper](https://mapshaper.org/)是一个用于编辑多种地理空间数据格式的地理处理工具，现支持`Shapefile`、`GeoJSON`、`TopoJSON`、`BDF`和`CSV`格式

## 主要功能

1. 支持导入多种开源数据格式
2. 支持基本的空间操作，如属性编辑、要素类型转换、裁剪、擦除、合并、概化（支持[`Douglas-Peucker`和`Visvalingam-Whyatt`算法](https://zhuanlan.zhihu.com/p/355323735)）等等
3. 支持文件导出，实现数据格式转换
4. 支持使用**强大的命令行**处理地理数据

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
#      shp/json/geojson/topojson -> 输出空间信息+属性信息
#      dbf/csv                   -> 输出属性信息
#      svg                       -> 矢量图片
mapshaper <file> -o <name>.<ext>
```

### 获取数据集信息

```sh
# 获取图层信息
# target: 必填 图层名称列表（多图层用逗号分隔）
mapshaper <file> -info <target>

# 获取要素信息
# expression: 必填，JS布尔表达式
# target: 选填，图层名称列表（多图层用逗号分隔）
mapshaper <file> -inspect <expression> [<target>]
```

### 坐标系转换

```sh
# projDef: 坐标系定义，使用Proj.4定义或者坐标系别名
mapshaper <file> -proj <projDef>
```

### 数据概化（简化）

[「算法」概化](./algo_simplify.md)

```sh
# 一般概化（默认使用基于weight的Visvalingam-Whyatt算法）
# percentage: 百分比，数值越小概化程度越高，如10%
mapshaper -simplify <percentage>

# Douglas-Peucker
mapshaper <file> -simplify <percentage> dp
# Visvalingam-Whyatt
# 基于有效区域（effective area）
mapshaper <file> -simplify <percentage> visvalingam
# 基于权重区域（weighted area）
mapshaper <file> -simplify <percentage> weighted
```

### 要素类型转换

```sh
# 点/面 -> 线
mapshaper <file> -lines
# 线 -> 面
mapshaper <file> -polygon
```

### 空间操作

```sh
# 裁剪
mapshaper <file1> -clip <file2> -o <file3>
# 擦除
mapshaper <file1> -erase <file2> -o <file3>
# 融合
# 同一个图层，所有要素进行融合
mapshaper <file> -dissolve
# 同一个图层，相邻的要素进行融合
mapshaper <file> -dissolve2
# ...
```

### 编辑属性表

```sh
# expression: 必填，JS布尔表达式
mapshaper <file> -each <expression>
```

### 数理统计

```sh
# expression: 函数表达式，sum() average() median() max() min() count()
# 支持链式指令执行，即多个-calc指令
mapshaper <file> -calc <expression>
```

## 文档参考

[「GIS工具」GISer的小军刀-mapshaper](https://malagis.com/gis-useful-tool-about-mapshaper.html)

[「GIS笔记」Mapshaper命令行使用入门](https://malagis.com/gis-note-map-shaper-command-line-uses-entry.html)

[「GIS笔记」Mapshaper命令行通用格式说明](https://malagis.com/mapshaper-command-line-general-format-description.html)
