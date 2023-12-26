---
index: false
icon: laptop-code
date: 2023-12-19
category:
  - Cesium
---

# 常见坐标系及其转换

## 常见坐标系

Cesium中存在多种坐标系以及多种表达方式，主要的有三个：

1. 场景坐标系哦
2. 模型坐标系
3. 相机坐标系
再从Cesium中细分坐标类型也有很多

### 经纬度（弧度制/角度制）

经纬度的表达方式是在地理信息系统常用的方式之一，但是在Ceisum中，对地理位置的表达是以弧度制为主的（==原因?==）

### 制图坐标系

制图坐标系（Cartographic）是弧度制的封装，使用弧度制方式的表达

### 笛卡尔坐标系

[笛卡尔坐标系](https://baike.baidu.com/item/%E7%AC%9B%E5%8D%A1%E5%B0%94%E5%9D%90%E6%A0%87%E7%B3%BB/4522878)是直角坐标系（坐标轴垂直）和斜坐标系的统称。其中，直角坐标系也区分**平面直角坐标系**和**空间直角坐标系**：

- 屏幕坐标（Cartesian2）
  - 平面直角坐标系一般是指**屏幕坐标**
- 空间直角坐标（Cartesian3）
  - 在Cesium中一般是指以椭球体中心为原点的**空间直角坐标**
- 变换矩阵（Cartesian4）
  - 一般用于定义变换矩阵

### 固定坐标系（FixedFrame）和模型坐标系（LocalFrame）

Cesium中的FixedFrame和LocalFrame都是指坐标系，用于**描述物体或场景的位置和方向**。

FixedFrame是指固定坐标系，通常用于描述==地球表面==上的位置和方向。它通常以地球的中心为原点，地球的轴线为参考，可以用来描述地球上的任意点的位置和方向。

LocalFrame是指局部坐标系，通常用于描述==物体自身==的位置和方向。它的原点和方向通常与物体本身相关联，可以用来描述物体内部的各个部分的位置和方向。

它们的关系是**FixedFrame通常作为一个参考坐标系，用来描述LocalFrame的位置和方向**。例如，一个飞机在地球上的位置和方向可以使用FixedFrame来描述，而飞机内部各个部分的位置和方向可以使用LocalFrame来描述。这样可以方便地将物体的位置和方向与地球表面的位置和方向联系起来。

### 相机坐标系（EyeCoordinate）

在Cesium中，glsl中的EyeCoordinate是指相机坐标系。相机坐标系是一个以相机位置为原点的坐标系，它描述了相机所处的位置和方向。在相机坐标系中，相机的位置是原点(0,0,0)，相机的朝向通常是Z轴的负方向，Y轴通常是相机的上方向，X轴通常是与Y轴和Z轴垂直的方向。

EyeCoordinate通常用于**描述相机空间中的顶点位置和方向，它是相对于相机位置的坐标系**。在渲染过程中，顶点位置会先从世界坐标系转换到相机坐标系，然后再进行投影变换，最终呈现在屏幕上。 EyeCoordinate可以帮助我们在渲染过程中准确地描述顶点的位置和方向，以便正确地显示场景。

## 坐标系之间的转换

### 弧度制经纬度<-->角度制经纬度（Radians<-->Degrees）

```js
const longitude = 114.0
const latitude = 23.0

// 角度值->弧度制
const radiansLng = Cesium.Math.toRadians(longitude)
const radiansLat = Cesium.Math.toRadians(latitude)

// 弧度制->角度制
const degreesLng = Cesium.Math.toDegrees(radiansLng)
const degreesLat = Cesium.Math.toDegrees(radiansLat)
```

### 空间直角坐标系的转换

#### 1. 角度制/弧度制经纬度-->空间直角坐标系/制图坐标系

```js
// 角度转空间直角坐标系
let cartesian3 = Cesium.Cartesian3.fromDegress()
let cartesian3 = Cesium.Cartesian3.fromDegressArray()
let cartesian3 = Cesium.Cartesian3.fromDegreesArrayHeights()

// 弧度转空间直角坐标系
let cartesian3 = Cesium.Cartesian3.fromRadians()
let cartesian3 = Cesium.Cartesian3.fromRadiansArray()
let cartesian3 = Cesium.Cartesian3.fromRadiansArrayHeights()

// ====================================================================

// 角度转制图坐标系
let cartographic = Cesium.Cartographic.fromDegress()
let cartographic = Cesium.Cartographic.fromDegressArray()
let cartographic = Cesium.Cartographic.fromDegreesArrayHeights()

// 弧度转制图坐标系
let cartographic = Cesium.Cartesian3.fromRadians()
let cartographic = Cesium.Cartesian3.fromRadiansArray()
let cartographic = Cesium.Cartesian3.fromRadiansArrayHeights()

```

#### 2. 制图坐标系-->空间直角坐标系

```js
// 制图坐标系->空间直角坐标系
Cesium.Cartographic.toCartesian(cartographic)
```

#### 3. 通过椭球体获取空间直角坐标系

常用于**点选**操作，对场景使用射线打点

```js
const handler = new Cesium.ScreenSpaceEventHandler(viewer.canvas)
// 注册事件监听（鼠标左键单击）
handler.setInputAction((movement) => {
	// movement能够获取到屏幕坐标位置Cartesian2

	// 通过屏幕坐标获取相机到到目标点的射线（得到射线的起点以及矢量方向）
	const ray = viewer.camera.getPickRay(movement.position)
	// 通过场景的球体与射线进行相交处理，获取第一个相交点
	const cartesian = viewer.scene.globe.pick(ray, viewer.scene)
}, Cesium.ScreenSpaceEventType.LEFT_CLICK)

```
