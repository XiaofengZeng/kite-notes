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

## Cesium与OpenLayer计算两点距离的区别（结果是否一致）

## 如何理解Cesium中的property

## Cesium如何实现漫游

## Cesium坐标系（类型）

## Cesium怎么绘制点（Entity）

## Cesium怎么加载一个模型（Primitive）

## Cesium的Camera（俯仰角）

## Cesium和Three的坐标轴区别

## Cesium和Three的Camera区别（朝向）

## WebGL的渲染逻辑（顺序）

## Cesium如何加载倾斜摄影数据（GLTF GLB）

## 对ArcGIS三维模块的理解
