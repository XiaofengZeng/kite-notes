---
index: false
icon: laptop-code
category:
  - OLCesium
---

# OLCesium源码修改：暴露Cesium.Viewer

## 需求

Cesium.Viewer是Cesium的一个视窗，是一个高层次的对象（相对于Scene而言），日常业务也常常使用其来管理数据，如`viewer.entitites`、`viewer.dataSources`等，以及一些方法`viewer.flyTo()`、`viewer.zoomTo()`等。虽然[Openlayers团队不支持OLCesium向外暴露Viewer对象](https://github.com/openlayers/ol-cesium/issues/993)，但我们可以根据OLCesium的构造函数逻辑去做相关的处理使得Viewer对象能够暴露。

## 思路

因为OLCesium的使用前提之一，是需要提供Cesium全局变量。那么，我们可以通过new Cesium.Viewer()来进行初始化实例，将原有OLCesium中使用的、与Viewer有关的属性使用初始化后的viewer对象属性进行等价替换：

1. `scene`：需要在构造函数中提供一个viewer的配置项`viewerOptions`，等价替换原本的`sceneOptions`
2. `canvas`：在实例化Viewer后，实例对象中包含了canvas对象，将其替换与原本的canvas赋值

需要**注意几点**：

1. 实例化Viewer后，会自动将相关默认控件插入到Element中，如果样式没有引用对，则会出排版问题，因此要正确引入`cesium/Widgets/widgets.css`样式文件

## 代码参考

具体源码参考：[XiaofengZeng/ol-cesium-viewer: expose Cesium Viewer on ol-cesium. (github.com)](https://github.com/XiaofengZeng/ol-cesium-viewer)

- OLCesium.js

```js
class OLCesium {
  // ...
  viewer_;   // 声明一个属性viewer_

  constructor(options) {
    // ...

    // 设置默认Viewer的初始值
    const defaulViewerOptions = {
	  sceneMode: Cesium.SceneMode.SCENE3D,
	  scene3DOnly: true,
	  animation: true,
	  geocoder: true,
	  homeButton: true,
	  fullscreenButton: true,
	  navigationHelpButton: true,
	  sceneModePicker: true,
	  timeline: true,
	  baseLayerPicker: true,
	  baseLayer: false,
	  terrain: Cesium.Terrain.fromWorldTerrain(),
	}

	// 合并options.viewerOptions或使用默认viewer参数
	const viewerOptions = options.viewerOptions !== undefined ?
	  Object.assign(defaulViewerOptions, options.viewerOptions) : defaulViewerOptions

	// 实例化viewer_
	this.viewer_ = new Cesium.Viewer(this.container_, viewerOptions);

    // 注释原本的scene_实例化以及赋值，使用viewer中的scene
	// this.container_.appendChild(this.canvas_);
	// const sceneOptions = options.sceneOptions !== undefined ?
	//     { ...options.sceneOptions, canvas: this.canvas_, scene3DOnly: true } :
	//     { canvas: this.canvas_, scene3DOnly: true };
	// this.scene_ = new Cesium.Scene(viewerOptions);
	this.scene_ = this.viewer_.scene;

	// 注释原本的canvas_赋值，使用viewer中的canvas
	// this.canvas_ = document.createElement('canvas');
	this.canvas_ = this.viewer_.container.getElementsByClassName('cesium-widget')[0].children[0]

    // ...
  }

  // 暴露API，用于获取Viewer
  getCesiumViewer() {
	return this.viewer_;
  }
}
```
