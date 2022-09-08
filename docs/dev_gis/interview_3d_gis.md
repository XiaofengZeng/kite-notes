# 三维GIS开发工程师

## OpenLayers如何加载ArcGIS地图服务

WebGIS中，客户端展示地图专题的主要方式是**动态展示地图**（根据范围等属性生成对应的地图图片）和**瓦片影像**（根据切片规则生成的瓦片数据）

`OpenLayers`根据以上两种方式提供了两种数据源[`ol/source/TileArcGISRest`](https://openlayers.org/en/latest/apidoc/module-ol_source_ImageArcGISRest-ImageArcGISRest.html)和[`ol/source/ImageArcGISRest`](https://openlayers.org/en/latest/apidoc/module-ol_source_Image-ImageSource.html)。除了基础的属性如`url`、`projection`，还需要重点关注其加载函数`tileLoadFunction`/`imageLoadFunction`，其能过够定制化一些业务处理逻辑，也能够控制地图请求的状态，如`ol/TileState`

至于如何加载ArcGIS地图服务，只需要根据地图服务的类型，选择`OpenLayers`合适的数据源类（`source`），使用对应的图层类（`layer`）对其包裹，最终便可在地图（`map`）和视图（`view`）中显示。

## OpenLayers常用坐标系是什么？是否支持坐标系转换？

一般来说，互联网中地图通用的地理坐标系统是WGS84坐标系（`ESPG:3857`和`ESPG:4326`）。因此`OpenLayers`也将该两个坐标系作为默认坐标系，但是`OpenLayers`提供了额外的坐标系定义类[`ol/proj/Projection`](https://openlayers.org/en/latest/apidoc/module-ol_proj_Projection-Projection.html)。定义好后则可以支持已有坐标系的互转

## Cesium如何加载ArcGIS地图服务

和`OpenLayers`的图层加载类似，需要一个图层实例（`ImageryProvider`）及其内部的数据源（`Cesium.***ImageryProvider`）

对于ArcGIS地图服务来说，主要是：

1. 通用`WebMapServiceImageryProvider`（加载WMS服务，除ArcGIS之外也支持其他厂商的地图服务加载）
2. 通用`WebMapTileServiceImageryProvider`（加载WMTS服务，支持KVP和RESTful格式）
3. Cesium提供的ArcGIS用数据源类`ArcGisMapServerImageryProvider`（加载WMTS服务）
4. 和`ArcGISTiledElevationTerrainProvider`（加载地形服务）

最终，对于一般的地图服务（如WMS服务、WMTS服务），可以通过`ImageryLayerCollection`收集所有`***ImageryProvider`，并设置到`Viewer`的`imageryLayers`属性中（其实也是`Viewer`的`scene`属性的`global`属性的`imageryLayers`属性）。对于地形服务，则通过将`ArcGISTiledElevationTerrainProvider`设置到`Viewer`的`terrainProvider`属性中即可

## Cesium计算两点距离

### 直线距离

  **核心思想：两点坐标点向量做差求模长。**

  平面二维使用`Cartesian2`，空间三维使用`Cartesian3`，他们都有`distance()`方法能够计算两点之间的距离。
  但是他们两个类也都提供了`distanceSquared()`方法，比起`distance()`更加的高效（原因是关于**资源开销问题**：CPU擅长处理浮点数，但不适合平方根计算，因此单纯计算距离的时候会有更大的资源消耗，如果不需要精确的距离计算，使用距离的平方根也能达到相同的效果并且更加的高效）

### 垂直距离（两点之间的高程差）

  **核心思想：两个坐标点之间的高程之差。**
  
  如果没有高程未知，则通过计算出其高程，再进行求差。具体实现这是通过`Cesium.sampleTerrainMostDetailed(terrainProvider, positions)`方法得到带高程数据的坐标点

### 水平距离（两点之间的的水平距离差）

  **核心思想：相同高程的两点计算直线距离。**

  使两点的高程相同，再计算两点**直线距离**`distance()/distanceSquared()`即可

### 测地线（椭球体上的距离）

  **核心思想：按照椭球体计算曲线距离。**

  `Cesium`中存在一个测地线类`EllipsoidGeodesic`，实例化并通过`setEndPoints`设置起点和终点，通过`surfaceDistance`便可以获取到两点之间的地面距离

### 地形贴地距离（与地形有关）

  **核心思想：根据两点间的地形插值点，累加相邻两点之间的直线距离。**

  需要考虑两点之间的距离，如果大于过长（>=1km），适当降低插值精度；超过一定距离（>=100km）后，考虑使用**测地线**的方式进行计算两点距离

- 参考文档：[Cesium测量距离](https://www.jianshu.com/p/a8d4123c03ef)

## Cesium与OpenLayer计算两点距离的区别（结果是否一致）

不完全一致。

`OpenLayers`提供了两种计算长度的方式：

1. 基于投影平面->`ol/geom/flat/length.lineStringLength`，是通过平面的方式计算（两点距离公式）
2. 基于椭球曲面->`ol/sphere.getDistance`/`ol/sphere.getLength`，通过两点/多点的地理坐标计算曲面距离

因此，在相同的椭球体下，同一个坐标点，使用相同的计算方式（基于投影平面/椭球曲面），两个框架计算两点距离是可以相等或近似相等；

## 如何理解Cesium中的position属性？如何实现漫游？

漫游，即在连续的时间段内，对指定的实体等物体进进行位置变换。

`position`基本是`Entity`/`Primitive`模块中的属性

参考文档： [Property机制](https://zhuanlan.zhihu.com/p/461478006)

## Cesium常用坐标系（类型）

`Cesium`中，常用的坐标主要有：

- **屏幕坐标**

  即屏幕的像素坐标，单位是像素，通过鼠标即可获得，或者可通过`Cartesian2(x, y)`实例化

- **笛卡尔空间直角坐标系（世界坐标系）**

  又称为世界坐标系，可通过`Cartesian3(x, y, z)`实例化获取。主要用来做**空间位置变化（平移、旋转、缩放等）**，坐标原点在椭球体中心

- **地理坐标系（弧度）**

  `Cesium`中的地理坐标单位默认是弧度制，使用`Gartographic(longtitude, latitude, height)`实例化，**当弧长与半径相等，则所形成的夹角便是1弧度**
  
  弧度与角度的关系：
  
  - `弧度=π/180×角度`
  - `角度=180/π×弧度`

- **经纬度坐标**

  即测绘中的地理经纬度坐标系，默认是WGS84坐标，坐标原点在椭球质心。
  
  但是，`Cesium`没有具体的经纬度类，需要通过弧度进行转换：

  ```js
  // 经纬度转弧度 
  Cesium.Math.toRadians(degrees) 
  // 弧度转经纬度
  Cesium.Math.toDegrees(radians) 
  ```

`TODO:各坐标系的转换`

参考文档： [Cesium坐标系及坐标变换](https://zhuanlan.zhihu.com/p/334540571)

## Cesium怎么绘制点（Entity）

## Cesium怎么加载一个模型（Primitive）

## Cesium的Camera（俯仰角）

## Cesium和Three的坐标轴区别

## Cesium和Three的Camera区别（朝向）

## WebGL的渲染逻辑（顺序）

## Cesium如何加载倾斜摄影数据（GLTF GLB）

## 对ArcGIS三维模块的理解
