# 「ESRI」ArcGIS Server

## Export Map

### 应用场景

1. **地图图片的导出/获取**。根据地理坐标范围，向地图服务发起请求获取响应格式的地图
2. **系统底图的加载**。本质是地图图片的获取。根据屏幕坐标与实际地理坐标的转换，得到当前地图视图的坐标范围，再向地图服务发起请求

### 请求

- 请求路由：`/export`
- 请求方式：`GET`/`POST`
- 请求参数
  | 参数<br>(:star:表示常用) | 说明                                                                                                                                    | 示例                                                                                                                                                   |
  | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | :star:bbox               | 边界范围（坐标范围）                                                                                                                    | `<xmin>, <ymin>, <xmax>, <ymax>`                                                                                                                       |
  | :star:bboxSR             | 边界范围的空间参考，支持WKT代号ID或具体空间参考定义文本，不定义则默认使用地图服务的空间参考                                             | `EPSG:4490`/`{"wkt":"[ESRI_WKT]"}`                                                                                                                     |
  | :star:layers             | 需要导出的图层索引<br>**show**:展示的图层索引<br>**hide**：隐藏的图层索引<br>**include**：包括的图层索引<br>**exclude**：排除的图层索引 | `<show>/<hide>/<include>/<exclude>:layerId1,layerId2`                                                                                                  |
  | layerDef                 | 图层过滤定义                                                                                                                            | `<layerId1>:<Field_Expression1>;<layerId2>:<Field_Expression2>`/<br>`{ "<layerId1>" : "<Field_Expression1>" , "<Field_Expression2>" : "<layerDef2>" }` |
  | :star:size               | 导出地图的像素大小，默认为`400,400`                                                                                                     | `<width>, <height>`                                                                                                                                    |
  | :star:imgSR              | 导出图片的空间参考，同`bboxSR`                                                                                                          | 参考`bboxSR`示例                                                                                                                                       |
  | :star:format             | 导出图片的格式，默认为`png`                                                                                                             | `png/png8/png24/jpg/pdf/bmp/gif/svg/svgz/emf/ps/png32`                                                                                                 |
  | :star:transparent        | 背景是否透明，默认为`false`                                                                                                             |                                                                                                                                                        |
  | dpi                      | 导出图片的分辨率，默认为`96`                                                                                                            | `dpi=200`                                                                                                                                              |
  | time                     | 导出的地图图像的时间瞬间或时间范围                                                                                                      | `time=<timeInstant>`/<br>`time=<startTime>, <endTime>`                                                                                                 |
  | layerTimeOptions         | 指定图层的时间定义                                                                                                                      | 详见：[`[layerTimeOptions]`](https://developers.arcgis.com/rest/services-reference/enterprise/export-map.htm)                                          |
  | dynamicLayers            | 动态图层定义                                                                                                                            | 详见：[`[dynamicLayers]`](https://developers.arcgis.com/rest/services-reference/enterprise/export-map.htm)                                             |
  | gdbVersion               | GDB版本                                                                                                                                 | `gdbVersion=sde.USER1`                                                                                                                                 |
  | mapScale                 | 地图的比例尺                                                                                                                            | `mapScale=5000000, mapScale=5E6`                                                                                                                       |
  | f                        | 请求返回的格式，默认是`html`                                                                                                            | `html/json/pjson/image/kmz`                                                                                                                            |

说明：

- `[ESRI_WKT]`: 具体空间参考定义文本（ESRI版本），如[国家2000大地坐标系（4490）](https://epsg.io/4490)

## Query

### 应用场景

1. **属性查询（属性查图）**。类似普通的数据库查询，但可以返回属性信息，选择性返回空间信息
2. **空间查询（图查属性）**。与属性查询类似，使用空间过滤条件查询对应的属性信息/空间信息
3. **快速的空间操作**。快速进行空间操作（如裁剪、合并、擦除...）获取用户所需的信息

### 请求

- 请求路由：`/query`
- 请求方式：`GET`/`POST`
- 请求参数
  | 参数<br>(:star:表示常用)   | 说明                   | 示例         |
  | -------------------------- | ---------------------- | ------------ |
  | where                      | 属性查询SQL的where子句 | `ITEMID='1'` |
  | text                       | 属性查询SQL的where子句 | `ITEMID='1'` |
  | objectIds                  | 属性查询SQL的where子句 | `ITEMID='1'` |
  | time                       | 属性查询SQL的where子句 | `ITEMID='1'` |
  | geometry                   | 属性查询SQL的where子句 | `ITEMID='1'` |
  | geometryType               | 属性查询SQL的where子句 | `ITEMID='1'` |
  | inSR                       | 属性查询SQL的where子句 | `ITEMID='1'` |
  | spatialRel                 | 属性查询SQL的where子句 | `ITEMID='1'` |
  | relationParam              | 属性查询SQL的where子句 | `ITEMID='1'` |
  | outFields                  | 属性查询SQL的where子句 | `ITEMID='1'` |
  | returnGeometry             | 属性查询SQL的where子句 | `ITEMID='1'` |
  | maxAllowableOffset         | 属性查询SQL的where子句 | `ITEMID='1'` |
  | geometryPrecision          | 属性查询SQL的where子句 | `ITEMID='1'` |
  | outSR                      | 属性查询SQL的where子句 | `ITEMID='1'` |
  | returnIdsOnly              | 属性查询SQL的where子句 | `ITEMID='1'` |
  | returnCountOnly            | 属性查询SQL的where子句 | `ITEMID='1'` |
  | orderByFields              | 属性查询SQL的where子句 | `ITEMID='1'` |
  | groupByFieldsForStatistics | 属性查询SQL的where子句 | `ITEMID='1'` |
  | outStatistics              | 属性查询SQL的where子句 | `ITEMID='1'` |
  | returnZ                    | 属性查询SQL的where子句 | `ITEMID='1'` |
  | returnM                    | 属性查询SQL的where子句 | `ITEMID='1'` |
  | gdbVersion                 | 属性查询SQL的where子句 | `ITEMID='1'` |
  | returnDistinctValues       | 属性查询SQL的where子句 | `ITEMID='1'` |