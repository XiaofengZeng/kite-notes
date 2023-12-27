# POI/AOI/LOI

## 基本概念

**POI**: Point of Information / Point of Interest，兴趣点，<u>地图上非地理意义的有意义的点</u><sup>1</sup>（<u>泛指互联网电子地图中的点类数据</u><sup>2</sup>），如商铺、超市、酒店等属于POI，但像城市、山峰、河流等就不属于POI。每个POI包含四个信息：`名称`、`地址`、`类别`、`坐标`

**AOI**: Area of Information / Area of Interest，兴趣面，与`POI`的概念类似，即互联网电子地图中的面状类数据，也同样包含四个基本信息，即`名称`、`地址`、`类别`、`坐标`，主要在地图上表达区域状的地理实体，如小区、大学、园区等

**LOI**：Location of Information / Location of Interest: 兴趣位置，可以是单个/多个点/多边形，是`AOI`和`POI`更进一步的抽象。

## POI/AOI/LOI的区别与联系

正如`LOI`的概念所讲，`LOI`是`AOI`和`POI`更进一步的抽象。那么可以根据`LOI`所包含的内容具象至`AOI`/`POI`中。

而`AOI`和`POI`和关系更加的细化，<u>`AOI`有着比`POI`更好的表现力、更好的计算力以及更长的时效性</u><sup>3</sup>：

- **更好的表现力**：面状区域形状各异，更容易分辨区域范围
- **更好的计算力**：
- **更长的时效性**：`POI`信息瞬息万变，而`AOI`较稳定

<u>但`POI`是一切的根源，任何事物都能具象为一个点，实现降维</u><sup>3</sup>

## 获取POI/AOI数据<sup>1,3</sup>

- **基于地理数据平台的地理数据**
  - [北京大学-地理信息平台](https://geodata.pku.edu.cn/index.php?c=content&a=show&id=1386)
  - [中国科学院资源环境科学与数据中心](https://www.resdc.cn/)
- **基于地图的坐标拾取服务**：需要开发经验，调用开发API来获取
  - 百度
  - 高德
  - 腾讯
  - 谷歌
- **基于地图服务所开发的地图下载器服务**：付费
  - 水经注
  - BIGEMAP地图下载器
  - 小O地图
  - ArcGIS等GIS软件的部分插件（Simple GIS）
- **基于地图服务所开发的在线地图坐标拾取工具**
  - [规划云](http://www.guihuayun.com/)：操作简单+免费
  - [Maplocation](https://maplocation.sjfkai.com/)：批量将地址转换为经纬度坐标
- **天地图**：权限门槛高
- **国外POI获取**
  - [OpenStreetMap](https://www.openstreetmap.org/)
  - [Foursquare](https://foursquare.com/)
  - ...

## 数据坐标系问题

当前互联网地图的坐标系标准是**WGS84**，从GPS设备中取出的数据的坐标系，国际地图提供商使用的都是这个坐标系。

因此，我们若想使用获取的数据，那么尽量统一使用**WGS84**坐标系，将获取数据的进行坐标系的转换

### 火星坐标（GCJ-02）

<u>国测局坐标系，中国标准，从国行移动设备中定位获取的坐标数据使用这个坐标系，国家规定：国内出版的各种地图系统（包括电子形式），必须至少采用GCJ-02对地理位置进行首次加密。Google国内地图（.cn域名下）腾讯搜搜、阿里系高德地图都是这个坐标系。</u><sup>1</sup>

### 百度坐标（BD-09）

基于`火星坐标系`再进行二次加密，百度提供了坐标系转换接口（百度坐标->WGS84）

## 参考文档

1. [今天我们来谈谈POI](https://mp.weixin.qq.com/s/f77FWyUGYxlDI6RW_9r4DA)

2. [POI数据介绍](https://zhuanlan.zhihu.com/p/364102315)

3. [城市AOI数据获取教程&数据分享](https://mp.weixin.qq.com/s/uAFHDp51ac1jkv_E7qPZew)
