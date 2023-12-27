# ArcGIS Server
<!-- markdownlint-disable line_length -->
## Export Map

### 应用场景

1. **地图图片的导出/获取**。根据地理坐标范围，向地图服务发起请求获取响应格式的地图
2. **系统底图的加载**。本质是地图图片的获取。根据屏幕坐标与实际地理坐标的转换，得到当前地图视图的坐标范围，再向地图服务发起请求

### 请求

- 请求路由：`/export`
- 请求方式：`GET`/`POST`
- 请求参数（详见[API文档](https://developers.arcgis.com/rest/services-reference/enterprise/export-map.htm)）
  | 参数<br>(:star:表示常用) | 说明                                                                                                                                    |
  | ------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
  | :star:bbox               | 边界范围（坐标范围）                                                                                                                    |
  | :star:bboxSR             | 边界范围的空间参考，支持WKT代号ID或具体空间参考定义文本，不定义则默认使用地图服务的空间参考                                             |
  | :star:layers             | 需要导出的图层索引<br>**show**:展示的图层索引<br>**hide**：隐藏的图层索引<br>**include**：包括的图层索引<br>**exclude**：排除的图层索引 |
  | layerDef                 | 图层过滤定义                                                                                                                            |
  | :star:size               | 导出地图的像素大小，默认为`400,400`                                                                                                     |
  | :star:imgSR              | 导出图片的空间参考，同`bboxSR`                                                                                                          |
  | :star:format             | 导出图片的格式，默认为`png`                                                                                                             |
  | :star:transparent        | 背景是否透明，默认为`false`                                                                                                             |
  | dpi                      | 导出图片的分辨率，默认为`96`                                                                                                            |
  | time                     | 导出的地图图像的时间瞬间或时间范围                                                                                                      |
  | layerTimeOptions         | 指定图层的时间定义                                                                                                                      |
  | dynamicLayers            | 动态图层定义                                                                                                                            |
  | gdbVersion               | 指定查询的地理数据库的版本，当不指定时，则默认使用发布地图服务时使用的版本                                                              |
  | mapScale                 | 地图的比例尺                                                                                                                            |
  | f                        | 请求返回的格式，默认是`html`                                                                                                            |

## Query

### 应用场景

1. **属性查询（属性查图）**。类似普通的数据库查询，但可以返回属性信息，选择性返回空间信息
2. **空间查询（图查属性）**。与属性查询类似，使用空间过滤条件查询对应的属性信息/空间信息
3. **快速的空间操作**。快速进行空间操作（如裁剪、合并、擦除...）获取用户所需的信息

### 请求

- 请求路由：`/query`
- 请求方式：`GET`/`POST`
- 请求参数（详见[API文档](https://developers.arcgis.com/rest/services-reference/enterprise/query-map-service-layer-.htm)）
  | 参数<br>(:star:表示常用)   | 说明                                                                                                                                                                                                      |
  | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | :star:where                | 属性查询SQL的where子句                                                                                                                                                                                    |
  | text                       | 对`displayField`的值查询（支持模糊查询）。<br>形成的查询Where子句：`<displayField> like '<text>'`<br>当指定where参数后，该参数会被忽略                                                                    |
  | objectIds                  | 查询指定ObjectID的属性                                                                                                                                                                                    |
  | time                       | 限制查询的时间瞬间或时间范围，常用于有时间尺度的地理数据（时空数据）                                                                                                                                      |
  | :star:geometry             | 空间过滤-几何图形                                                                                                                                                                                         |
  | :star:geometryType         | 空间过滤-几何图形类<br>**esriGeometryPoint**：点<br>**esriGeometryMultipoint**：多点<br>**esriGeometryPolyline**：折线<br>**esriGeometryPolygon**：多边形<br>**esriGeometryEnvelope**：外包矩形（默认值） |
  | :star:inSR                 | 空间过滤-几何图像-空间参考，支持WKT代号ID或具体空间参考定义文本，不定义则默认使用地图服务的空间参考                                                                                                       |
  | :star:spatialRel           | 空间过滤-对输入的geometry的空间关系查询                                                                                                                                                                   |
  | relationParam              | 属性查询SQL的where子句                                                                                                                                                                                    |
  | :star:outFields            | 输出的字段                                                                                                                                                                                                |
  | returnGeometry             | 是否返回几何图形，默认为`true`                                                                                                                                                                            |
  | maxAllowableOffset         | 最大允许误差范围，根据单位由`inSR`确定，若没有`inSR`，则使用该地图的空间参考                                                                                                                              |
  | geometryPrecision          | 返回几何图形的精度，具体指的是坐标点的小数点位数（只支持XY坐标，M和Z值不支持）                                                                                                                            |
  | :star:outSR                | 输出的几何图形的空间参考定义，支持WKT代号ID或具体空间参考定义文本，不定义则默认使用地图服务的空间参考                                                                                                     |
  | returnIdsOnly              | 是否值只返回ObjectId数组，不返回要素集，默认为`false`                                                                                                                                                     |
  | returnCountOnly            | 是否只返回数量（通过count函数计算查询结果要素集中要素的数量），默认为`false`                                                                                                                              |
  | orderByFields              | 根据一个或多个字段进行排序，需要指定排序方式，否则默认采用升序（ASC）<br>需要地图服务支持高级查询（**supportsAdvancedQueries**）                                                                          |
  | groupByFieldsForStatistics | 一个或多个用于分组统计的字段                                                                                                                                                                              |
  | outStatistics              | 基于（字段）对象字面量数组配置进行分组统计<br>需要地图服务支持统计查询（**suppportsStatistics**）                                                                                                         |
  | returnZ                    | 是否返回Z值（高程值），默认为`false`                                                                                                                                                                      |
  | returnM                    | 是否返回M值（测量值），默认为`false`                                                                                                                                                                      |
  | gdbVersion                 | 指定查询的地理数据库的版本，当不指定时，则默认使用发布地图服务时使用的版本                                                                                                                                |
  | returnDistinctValues       | 是否基于outField参数返回指定的字段的唯一值（去重），默认为`false`                                                                                                                                         |
