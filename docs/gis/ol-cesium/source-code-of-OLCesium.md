---
index: false
icon: laptop-code
date: 2023-12-17
category:
  - OLCesium
---

# OLCesium源码剖析

## OLCesium简介

### 版本情况

- OLCesium@2.16.0
- Openlayers@7.4.0
- Cesium@1.111.0

OLCesium主要是用于二三维场景的同步切换，由Openlayers团队进行维护，主要提供：

1. 二三维场景视图同步切换
2. 一系列的同步器，二维影像以及矢量数据同步至三维场景。同时支持开发者自定义同步器

那么，这样既能带来一些优势也会有一些缺陷：

- 优势
  - 串联Openlayers和Cesium，实现共存的“二三维一体化”
  - 将Openlayers中加载数据自动同步至Cesium当中，不需要在三维场景中重新加载
- 劣势
  - 二三维切换过程没有动画，切换比较生硬
  - 数据同步是单向的（Openlayers -> Cesium），三维中数据无法同步至二维场景中（不过按照场景逻辑来说，确实不应该同步至二维）

## OLCesium的使用

```bash
# 安装OLCesium
npm install olcs -S
```

OLCesium的使用是很简单的，但是有两个前提：

1. 需要Openlayers的Map实例对象作为参数传入OLCesium的构造函数
2. 需要将Cesium挂载在全局变量中（很多技术文档也建议将Cesium挂载在全局变量中，方便访问或调试功能）

```js
import Map from 'ol/Map'
import OlCesium from 'olcs/OlCesium'

// OpenLayers的Map实例对象
const ol2dMap = Map({
  // 地图对象的配置项
})

// 实例化OLCesium对象
const ol3d = new OLCesium({ 
  map: ol2dMap,  // 必选项，需要在Cesium场景中展示的Openlayers地图对象
  // target: element,       // 可选项，Cesium容器挂载的元素，传入则实现与Openlayers容器并列显示，不传入则是覆盖当前Openlayers地图对象所在的容器。默认是不传入
  // createSynchronizers: function1,  // 可选项，自定义同步器
  // time: function2,  // 可选项，传入的时间作为Cesium的动画时间
  // stopOpenLayersEventsPropagation: boolean, //  可选项，是否在三维场景中阻止Opeenlayers的事件冒泡
  // sceneOptions: object,  //  可选项，场景配置，用于实例化Cesium.Scene对象
})

// 切换至三维场景
ol3d.setEnabled(true)
```

## 源码剖析

### 1. 场景切换（setEnabled方法）

setEnabled本质上就是更改元素标签的样式，将元素显示或隐藏。从二维切换至三维时，将Openlayers的交互事件暂存到OLCesium的`pausedInteractions_`属性中，并更改二维地图对象的`addInteractuon`和`removeInteraction`方法，针对`pausedInteractions_`的增加/移除地图交互；当从三维切换回二维时，将`pausedInteractions_`中的所有交互重新添加至`map.getInteractions()`中，最后根据场景的切换重新渲染地图

总的来说，在实现切换场景的同时，将当前的地图交互暂存或恢复，减少重复操作

### 2. 同步器

#### 2.1 抽象同步器（AbstractSynchronizer）

`AbstractSynchronizer`是`VectorSynchronizer`和`RasterSynchronizer`的基类，主要提供了：

1. 同步方法`synchronize()`。在初始化OLCesium实例对象时，会将提供的参数中的map对象中的图层进行同步，使得在二维场景添加图层时能够自动添加`addLayers_()`同步
2. 重写图层更改（修改/移除）时的监听器，主要是图层集`Collection`的`add`、`remove`、`change:zIndex`事件，图层`Layer`的`change`事件等
3. 图层排序`orderLayers`，具体实现在子类当中

其子类需要实现以下方法：

- `addCesiumObject()`
- `destroyCesiumObject()`
- `removeSingleCesiumObject()`
- `removeAllCesiumObjects()`
- `createSingleLayerCounterparts()`

#### 2.1 矢量数据同步器（VectorSynchronizer）

针对Openlayers当前地图中存在的**矢量数据**进行同步：

1. 提供了一个`FeatureConverter`实例，用于将Openlayers中各种类型数量数据的转换至Cesium的Primitive
2. 通过一个`Cesium.PrimitiveCollectoion`对象将同步的数据进行统一管理
3. 在同步器中增加了对Openlayers的数据源`source`的事件监听，包括`change:visible`、`addfeature`、`removefeature`、`changefeature`用于Cesium对各种feature的显影、增删改同步（PS：`changefeature`的事件监听是将feature删除再重新新增来实现change响应，对一些业务逻辑可能不适用，如实时数据）

### 2.2 栅格（影像）数据同步器（RasterSynchronizer）

针对Openlayers当前地图中存在的**栅格数据**进行同步：

1. 对内通过`Cesium.ImageryLayerCollection`对象将同步的数据进行统一管理；对外将同步的数据添加至`scene.imageryLayers`中
2. 同步方法`tileLayerToImageryLayer()`，将瓦片图层对应添加至Cesium中，只支持`EPSG:3857`和`EPSG:4326`，若图层源是这两者之一，则会通过`olcsCoreOLImageryProvider()`创建一个`Cesium.ImageryProvider`的派生类，用于连接`ol.source.TileImage`数据（PS：Openlayers的影像数据往往会是不同的坐标系，不一定完全支持`EPSG:3857`或`EPSG:4326`，因此需要拓展Cesium对坐标系的支持或者对影像数据进行处理，使之能够正常加载）

#### 2.3 Overlay数据同步器（OverlaySynchronizer）

独立于矢量数据同步器和栅格数据同步器，自己实现了同步机制：

1. 同步方法`synchronize()`，移除原有的所有Overlay，再重新遍历添加Overlay，同时重写`add`和`remove`的事件处理函数
2. 添加单个Overlay的`addOverlay()`，通过`new olcsSynchronizedOverlay()`，基于传入的Overlay对象进行同步，Overlay本质上是一个`Element`元素，因此，添加对应事件监听即可，`change:position`、`change:element`、`change:offset`、`change:positioning`事件

### 3. 自定义属性（'olcs-xxx'）

OLCesium提供了很多以`olcs_`为前缀的定制化属性，用于一些使用场景的处理，这些属性都是设置在source对象中：

- `olcs_skip`：跳过数据同步操作（只在二维场景显示，三维场景不显示）
- `olcs_model`：将数量数据同步成模型，是一个对象格式，必须传入`url`，`scale`、`minimumPixelSize`、`heightReference`可选传入
- `olcs_shadows`：阴影投射，需要`scnen.shadowMap`启动
- `olcs_minimumLevel`：设置允许瓦片数据最大缩放层级
- `olcs_extruded_height`：对面图层的拉高处理
- `olcs_provider`：
- `olcs_cancellers`：

## TODO-逆向同步器
