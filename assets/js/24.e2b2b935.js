(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{318:function(e,r,t){"use strict";t.r(r);var a=t(13),v=Object(a.a)({},(function(){var e=this,r=e._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"三维gis开发工程师"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三维gis开发工程师"}},[e._v("#")]),e._v(" 三维GIS开发工程师")]),e._v(" "),r("h2",{attrs:{id:"openlayers如何加载arcgis地图服务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#openlayers如何加载arcgis地图服务"}},[e._v("#")]),e._v(" OpenLayers如何加载ArcGIS地图服务")]),e._v(" "),r("p",[e._v("WebGIS中，客户端展示地图专题的主要方式是"),r("strong",[e._v("动态展示地图")]),e._v("（根据范围等属性生成对应的地图图片）和"),r("strong",[e._v("瓦片影像")]),e._v("（根据切片规则生成的瓦片数据）")]),e._v(" "),r("p",[r("code",[e._v("OpenLayers")]),e._v("根据以上两种方式提供了两种数据源"),r("a",{attrs:{href:"https://openlayers.org/en/latest/apidoc/module-ol_source_ImageArcGISRest-ImageArcGISRest.html",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("ol/source/TileArcGISRest")]),r("OutboundLink")],1),e._v("和"),r("a",{attrs:{href:"https://openlayers.org/en/latest/apidoc/module-ol_source_Image-ImageSource.html",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("ol/source/ImageArcGISRest")]),r("OutboundLink")],1),e._v("。除了基础的属性如"),r("code",[e._v("url")]),e._v("、"),r("code",[e._v("projection")]),e._v("，还需要重点关注其加载函数"),r("code",[e._v("tileLoadFunction")]),e._v("/"),r("code",[e._v("imageLoadFunction")]),e._v("，其能过够定制化一些业务处理逻辑，也能够控制地图请求的状态，如"),r("code",[e._v("ol/TileState")])]),e._v(" "),r("p",[e._v("至于如何加载ArcGIS地图服务，只需要根据地图服务的类型，选择"),r("code",[e._v("OpenLayers")]),e._v("合适的数据源类（"),r("code",[e._v("source")]),e._v("），使用对应的图层类（"),r("code",[e._v("layer")]),e._v("）对其包裹，最终便可在地图（"),r("code",[e._v("map")]),e._v("）和视图（"),r("code",[e._v("view")]),e._v("）中显示。")]),e._v(" "),r("h2",{attrs:{id:"openlayers常用坐标系是什么-是否支持坐标系转换"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#openlayers常用坐标系是什么-是否支持坐标系转换"}},[e._v("#")]),e._v(" OpenLayers常用坐标系是什么？是否支持坐标系转换？")]),e._v(" "),r("p",[e._v("一般来说，互联网中地图通用的地理坐标系统是WGS84坐标系（"),r("code",[e._v("ESPG:3857")]),e._v("和"),r("code",[e._v("ESPG:4326")]),e._v("）。因此"),r("code",[e._v("OpenLayers")]),e._v("也将该两个坐标系作为默认坐标系，但是"),r("code",[e._v("OpenLayers")]),e._v("提供了额外的坐标系定义类"),r("a",{attrs:{href:"https://openlayers.org/en/latest/apidoc/module-ol_proj_Projection-Projection.html",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("ol/proj/Projection")]),r("OutboundLink")],1),e._v("。定义好后则可以支持已有坐标系的互转")]),e._v(" "),r("h2",{attrs:{id:"cesium如何加载arcgis地图服务"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cesium如何加载arcgis地图服务"}},[e._v("#")]),e._v(" Cesium如何加载ArcGIS地图服务")]),e._v(" "),r("p",[e._v("和"),r("code",[e._v("OpenLayers")]),e._v("的图层加载类似，需要一个图层实例（"),r("code",[e._v("ImageryProvider")]),e._v("）及其内部的数据源（"),r("code",[e._v("Cesium.***ImageryProvider")]),e._v("）")]),e._v(" "),r("p",[e._v("对于ArcGIS地图服务来说，主要是：")]),e._v(" "),r("ol",[r("li",[e._v("通用"),r("code",[e._v("WebMapServiceImageryProvider")]),e._v("（加载WMS服务，除ArcGIS之外也支持其他厂商的地图服务加载）")]),e._v(" "),r("li",[e._v("通用"),r("code",[e._v("WebMapTileServiceImageryProvider")]),e._v("（加载WMTS服务，支持KVP和RESTful格式）")]),e._v(" "),r("li",[e._v("Cesium提供的ArcGIS用数据源类"),r("code",[e._v("ArcGisMapServerImageryProvider")]),e._v("（加载WMTS服务）")]),e._v(" "),r("li",[e._v("和"),r("code",[e._v("ArcGISTiledElevationTerrainProvider")]),e._v("（加载地形服务）")])]),e._v(" "),r("p",[e._v("最终，对于一般的地图服务（如WMS服务、WMTS服务），可以通过"),r("code",[e._v("ImageryLayerCollection")]),e._v("收集所有"),r("code",[e._v("***ImageryProvider")]),e._v("，并设置到"),r("code",[e._v("Viewer")]),e._v("的"),r("code",[e._v("imageryLayers")]),e._v("属性中（其实也是"),r("code",[e._v("Viewer")]),e._v("的"),r("code",[e._v("scene")]),e._v("属性的"),r("code",[e._v("global")]),e._v("属性的"),r("code",[e._v("imageryLayers")]),e._v("属性）。对于地形服务，则通过将"),r("code",[e._v("ArcGISTiledElevationTerrainProvider")]),e._v("设置到"),r("code",[e._v("Viewer")]),e._v("的"),r("code",[e._v("terrainProvider")]),e._v("属性中即可")]),e._v(" "),r("h2",{attrs:{id:"cesium计算两点距离"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cesium计算两点距离"}},[e._v("#")]),e._v(" Cesium计算两点距离")]),e._v(" "),r("h3",{attrs:{id:"直线距离"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#直线距离"}},[e._v("#")]),e._v(" 直线距离")]),e._v(" "),r("p",[r("strong",[e._v("核心思想：两点坐标点向量做差求模长。")])]),e._v(" "),r("p",[e._v("平面二维使用"),r("code",[e._v("Cartesian2")]),e._v("，空间三维使用"),r("code",[e._v("Cartesian3")]),e._v("，他们都有"),r("code",[e._v("distance()")]),e._v("方法能够计算两点之间的距离。\n但是他们两个类也都提供了"),r("code",[e._v("distanceSquared()")]),e._v("方法，比起"),r("code",[e._v("distance()")]),e._v("更加的高效（原因是关于"),r("strong",[e._v("资源开销问题")]),e._v("：CPU擅长处理浮点数，但不适合平方根计算，因此单纯计算距离的时候会有更大的资源消耗，如果不需要精确的距离计算，使用距离的平方根也能达到相同的效果并且更加的高效）")]),e._v(" "),r("h3",{attrs:{id:"垂直距离-两点之间的高程差"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#垂直距离-两点之间的高程差"}},[e._v("#")]),e._v(" 垂直距离（两点之间的高程差）")]),e._v(" "),r("p",[r("strong",[e._v("核心思想：两个坐标点之间的高程之差。")])]),e._v(" "),r("p",[e._v("如果没有高程未知，则通过计算出其高程，再进行求差。具体实现这是通过"),r("code",[e._v("Cesium.sampleTerrainMostDetailed(terrainProvider, positions)")]),e._v("方法得到带高程数据的坐标点")]),e._v(" "),r("h3",{attrs:{id:"水平距离-两点之间的的水平距离差"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#水平距离-两点之间的的水平距离差"}},[e._v("#")]),e._v(" 水平距离（两点之间的的水平距离差）")]),e._v(" "),r("p",[r("strong",[e._v("核心思想：相同高程的两点计算直线距离。")])]),e._v(" "),r("p",[e._v("使两点的高程相同，再计算两点"),r("strong",[e._v("直线距离")]),r("code",[e._v("distance()/distanceSquared()")]),e._v("即可")]),e._v(" "),r("h3",{attrs:{id:"测地线-椭球体上的距离"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#测地线-椭球体上的距离"}},[e._v("#")]),e._v(" 测地线（椭球体上的距离）")]),e._v(" "),r("p",[r("strong",[e._v("核心思想：按照椭球体计算曲线距离。")])]),e._v(" "),r("p",[r("code",[e._v("Cesium")]),e._v("中存在一个测地线类"),r("code",[e._v("EllipsoidGeodesic")]),e._v("，实例化并通过"),r("code",[e._v("setEndPoints")]),e._v("设置起点和终点，通过"),r("code",[e._v("surfaceDistance")]),e._v("便可以获取到两点之间的地面距离")]),e._v(" "),r("h3",{attrs:{id:"地形贴地距离-与地形有关"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#地形贴地距离-与地形有关"}},[e._v("#")]),e._v(" 地形贴地距离（与地形有关）")]),e._v(" "),r("p",[r("strong",[e._v("核心思想：根据两点间的地形插值点，累加相邻两点之间的直线距离。")])]),e._v(" "),r("p",[e._v("需要考虑两点之间的距离，如果大于过长（>=1km），适当降低插值精度；超过一定距离（>=100km）后，考虑使用"),r("strong",[e._v("测地线")]),e._v("的方式进行计算两点距离")]),e._v(" "),r("ul",[r("li",[e._v("参考文档："),r("a",{attrs:{href:"https://www.jianshu.com/p/a8d4123c03ef",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cesium测量距离"),r("OutboundLink")],1)])]),e._v(" "),r("h2",{attrs:{id:"cesium与openlayer计算两点距离的区别-结果是否一致"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cesium与openlayer计算两点距离的区别-结果是否一致"}},[e._v("#")]),e._v(" Cesium与OpenLayer计算两点距离的区别（结果是否一致）")]),e._v(" "),r("p",[e._v("不完全一致。")]),e._v(" "),r("p",[r("code",[e._v("OpenLayers")]),e._v("提供了两种计算长度的方式：")]),e._v(" "),r("ol",[r("li",[e._v("基于投影平面->"),r("code",[e._v("ol/geom/flat/length.lineStringLength")]),e._v("，是通过平面的方式计算（两点距离公式）")]),e._v(" "),r("li",[e._v("基于椭球曲面->"),r("code",[e._v("ol/sphere.getDistance")]),e._v("/"),r("code",[e._v("ol/sphere.getLength")]),e._v("，通过两点/多点的地理坐标计算曲面距离")])]),e._v(" "),r("p",[e._v("因此，在相同的椭球体下，同一个坐标点，使用相同的计算方式（基于投影平面/椭球曲面），两个框架计算两点距离是可以相等或近似相等；")]),e._v(" "),r("h2",{attrs:{id:"如何理解cesium中的position属性-如何实现漫游"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#如何理解cesium中的position属性-如何实现漫游"}},[e._v("#")]),e._v(" 如何理解Cesium中的position属性？如何实现漫游？")]),e._v(" "),r("p",[e._v("漫游，即在连续的时间段内，对指定的实体等物体进进行位置变换。")]),e._v(" "),r("p",[r("code",[e._v("position")]),e._v("基本是"),r("code",[e._v("Entity")]),e._v("/"),r("code",[e._v("Primitive")]),e._v("模块中的属性")]),e._v(" "),r("p",[e._v("参考文档： "),r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/461478006",target:"_blank",rel:"noopener noreferrer"}},[e._v("Property机制"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"cesium常用坐标系-类型"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cesium常用坐标系-类型"}},[e._v("#")]),e._v(" Cesium常用坐标系（类型）")]),e._v(" "),r("p",[r("code",[e._v("Cesium")]),e._v("中，常用的坐标主要有：")]),e._v(" "),r("ul",[r("li",[r("p",[r("strong",[e._v("屏幕坐标")])]),e._v(" "),r("p",[e._v("即屏幕的像素坐标，单位是像素，通过鼠标即可获得，或者可通过"),r("code",[e._v("Cartesian2(x, y)")]),e._v("实例化")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("笛卡尔空间直角坐标系（世界坐标系）")])]),e._v(" "),r("p",[e._v("又称为世界坐标系，可通过"),r("code",[e._v("Cartesian3(x, y, z)")]),e._v("实例化获取。主要用来做"),r("strong",[e._v("空间位置变化（平移、旋转、缩放等）")]),e._v("，坐标原点在椭球体中心")])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("地理坐标系（弧度）")])]),e._v(" "),r("p",[r("code",[e._v("Cesium")]),e._v("中的地理坐标单位默认是弧度制，使用"),r("code",[e._v("Gartographic(longtitude, latitude, height)")]),e._v("实例化，"),r("strong",[e._v("当弧长与半径相等，则所形成的夹角便是1弧度")])]),e._v(" "),r("p",[e._v("弧度与角度的关系：")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("弧度=π/180×角度")])]),e._v(" "),r("li",[r("code",[e._v("角度=180/π×弧度")])])])]),e._v(" "),r("li",[r("p",[r("strong",[e._v("经纬度坐标")])]),e._v(" "),r("p",[e._v("即测绘中的地理经纬度坐标系，默认是WGS84坐标，坐标原点在椭球质心。")]),e._v(" "),r("p",[e._v("但是，"),r("code",[e._v("Cesium")]),e._v("没有具体的经纬度类，需要通过弧度进行转换：")]),e._v(" "),r("div",{staticClass:"language-js extra-class"},[r("pre",{pre:!0,attrs:{class:"language-js"}},[r("code",[r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 经纬度转弧度 ")]),e._v("\nCesium"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Math"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("toRadians")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("degrees"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" \n"),r("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// 弧度转经纬度")]),e._v("\nCesium"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Math"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),r("span",{pre:!0,attrs:{class:"token function"}},[e._v("toDegrees")]),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),e._v("radians"),r("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" \n")])])])])]),e._v(" "),r("p",[r("code",[e._v("TODO:各坐标系的转换")])]),e._v(" "),r("p",[e._v("参考文档： "),r("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/334540571",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cesium坐标系及坐标变换"),r("OutboundLink")],1)]),e._v(" "),r("h2",{attrs:{id:"cesium怎么绘制点-entity"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cesium怎么绘制点-entity"}},[e._v("#")]),e._v(" Cesium怎么绘制点（Entity）")]),e._v(" "),r("h2",{attrs:{id:"cesium怎么加载一个模型-primitive"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cesium怎么加载一个模型-primitive"}},[e._v("#")]),e._v(" Cesium怎么加载一个模型（Primitive）")]),e._v(" "),r("h2",{attrs:{id:"cesium的camera-俯仰角"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cesium的camera-俯仰角"}},[e._v("#")]),e._v(" Cesium的Camera（俯仰角）")]),e._v(" "),r("h2",{attrs:{id:"cesium和three的坐标轴区别"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cesium和three的坐标轴区别"}},[e._v("#")]),e._v(" Cesium和Three的坐标轴区别")]),e._v(" "),r("h2",{attrs:{id:"cesium和three的camera区别-朝向"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cesium和three的camera区别-朝向"}},[e._v("#")]),e._v(" Cesium和Three的Camera区别（朝向）")]),e._v(" "),r("h2",{attrs:{id:"webgl的渲染逻辑-顺序"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#webgl的渲染逻辑-顺序"}},[e._v("#")]),e._v(" WebGL的渲染逻辑（顺序）")]),e._v(" "),r("h2",{attrs:{id:"cesium如何加载倾斜摄影数据-gltf-glb"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#cesium如何加载倾斜摄影数据-gltf-glb"}},[e._v("#")]),e._v(" Cesium如何加载倾斜摄影数据（GLTF GLB）")]),e._v(" "),r("h2",{attrs:{id:"对arcgis三维模块的理解"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#对arcgis三维模块的理解"}},[e._v("#")]),e._v(" 对ArcGIS三维模块的理解")])])}),[],!1,null,null,null);r.default=v.exports}}]);