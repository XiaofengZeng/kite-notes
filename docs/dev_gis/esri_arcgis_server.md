# 「Esri」ArcGIS Server

## Export Map

### 应用场景

1. **地图图片的导出/获取**。根据地理坐标范围，向地图服务发起请求获取响应格式的地图
2. **系统底图的加载**。本质是地图图片的获取。根据屏幕坐标与实际地理坐标的转换，得到当前地图视图的坐标范围，再向地图服务发起请求

### 请求

- 请求路由：`/export`
- 请求方式：`GET`/`POST`
- 请求参数
  | 参数             | 说明                                                                                                                                    | 示例                                                                                                                                                   |
  | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
  | bbox             | 边界范围（坐标范围）                                                                                                                    | `<xmin>, <ymin>, <xmax>, <ymax>`                                                                                                                       |
  | bboxSR           | 边界范围的空间参考，支持WKT代号ID或具体空间参考定义文本                                                                                 | `EPSG:4490`/`{"wkt":"[ESRI_WKT]"}`                                                                                                                     |
  | layers           | 需要导出的图层索引<br>**show**:展示的图层索引<br>**hide**：隐藏的图层索引<br>**include**：包括的图层索引<br>**exclude**：排除的图层索引 | `<show>/<hide>/<include>/<exclude>:layerId1,layerId2`                                                                                                  |
  | layerDef         | 图层过滤定义                                                                                                                            | `<layerId1>:<Field_Expression1>;<layerId2>:<Field_Expression2>`/<br>`{ "<layerId1>" : "<Field_Expression1>" , "<Field_Expression2>" : "<layerDef2>" }` |
  | size             | 导出地图的像素大小                                                                                                                      | `<width>, <height>`                                                                                                                                    |
  | imgSR            | 导出图片的空间参考，同`bboxSR`                                                                                                          | 参考`bboxSR`示例                                                                                                                                       |
  | format           | 导出图片的格式                                                                                                                          | `png/png8/png24/jpg/pdf/bmp/gif/svg/svgz/emf/ps/png32`                                                                                                 |
  | transparent      | 背景是否透明                                                                                                                            |                                                                                                                                                        |
  | dpi              | 导出图片的分辨率                                                                                                                        | `dpi=200`                                                                                                                                              |
  | time             | 导出的地图图像的时间瞬间或时间范围                                                                                                      | `time=<timeInstant>`/<br>`time=<startTime>, <endTime>`                                                                                                 |
  | layerTimeOptions | 指定图层的时间定义                                                                                                                      | `[layerTimeOptions]`                                                                                                                                   |
  | dynamicLayers    | 动态图层定义                                                                                                                            | `[dynamicLayers]`                                                                                                                                      |
  | gdbVersion       | GDB版本                                                                                                                                 | `gdbVersion=sde.USER1`                                                                                                                                 |
  | mapScale         | 地图的比例尺                                                                                                                            | `mapScale=5000000, mapScale=5E6`                                                                                                                       |

说明：

- `[ESRI_WKT]`: 具体空间参考定义文本（ESRI版本），如[国家2000大地坐标系（4490）](https://epsg.io/4490)
- `[layerTimeOptions]`:
  
  ```txt
  Syntax：
  {
    "<layerId1>" : {
      //If true, use the time extent specified by the time parameter
      "useTime" : < true | false >,
      //If true, draw all the features from the beginning of time for that data
      "timeDataCumulative" : < true | false >,
      //Time offset for this layer so that it can be overlaid on the top of a previous or future time period
      "timeOffset" : <timeOffset1>,
      "timeOffsetUnits" : "<esriTimeUnitsCenturies | esriTimeUnitsDays | esriTimeUnitsDecades | 
                              esriTimeUnitsHours | esriTimeUnitsMilliseconds | esriTimeUnitsMinutes | 
                              esriTimeUnitsMonths | esriTimeUnitsSeconds | esriTimeUnitsWeeks | esriTimeUnitsYears |
                              esriTimeUnitsUnknown>"
    },
    "<layerId2>" : {
      "useTime" : < true | false >,
      "timeDataCumulative" : < true | false >,
      "timeOffsetOffset" : <timeOffset2>,
      "timeOffsetUnits" : "<timeOffsetUnits2>"
    }
  }

  Example:
  {
    "0" : {
      "useTime" : true,
      "timeDataCumulative" : false,
      "timeOffset" : 1,
      "timeOffsetUnits" : "esriTimeUnitsYears"
    },
    "3" : {
      "useTime" : false
    }
  }
  ```

- `[dynamicLayers]`:

  ```txt
  Syntax：
  [
    {
      "id": <layerOrTableId>,
      "source": <layer source>,
      "definitionExpression": "<definitionExpression>",
      "drawingInfo": 
      {
        "renderer": <renderer>,
        "transparency": <transparency>,
        "scaleSymbols": <true | false >,
        "showLabels": <true | false >,
        "labelingInfo": <labeling info>
      },
      "layerTimeOptions":
      {
        "useTime" : <true | false>,
        "timeDataCumulative" : <true | false>,
        "timeOffset" : <timeOffset>,
        "timeOffsetUnits" : "<esriTimeUnitsCenturies | esriTimeUnitsDays | esriTimeUnitsDecades | 
                              esriTimeUnitsHours | esriTimeUnitsMilliseconds | esriTimeUnitsMinutes | 
                              esriTimeUnitsMonths | esriTimeUnitsSeconds | esriTimeUnitsWeeks | esriTimeUnitsYears |
                              esriTimeUnitsUnknown>"
      }
    },
  ]

  Example:
  [
    //disable time on existing map service layer and turn off labels
    {
      "id": 501,
      "source":
      {
        "type": "mapLayer",
        "mapLayerId": 0
      },
      "drawingInfo":
      {
      "showLabels": false
      },
      "layerTimeOptions":
      {
      "useTime": false
      }
    },
    //add a new layer from registered workspace and label features with a feature attribute value {TaxLotId]
    {
      "id": 502,
      "source":
      {
        "type": "dataLayer",
        "dataSource":
        {
          "type": "table",
          "workspaceId": "MAP",
          "dataSourceName": "MAP.user1.Taxlots"
        }
      },
      "drawingInfo": 
      {
        "renderer":
        {
          "type": "simple",
          "symbol":
          {
            "type" : "esriSFS", 
            "style" : "esriSFSSolid", 
            "color" : [166,36,0,255], 
            "outline" : 
            {
              "type" : "esriSLS", 
              "style" : "esriSLSSolid", 
              "color" : [110,110,110,255], 
              "width" : 1.0
            }
          },
          "label": "TaxLots",
          "description": ""
        },
        "transparency": 60
      },
      "showLabels": true,
      "labelingInfo":
      [
        {
          "labelPlacement": "esriServerPolygonPlacementAlwaysHorizontal",
          "labelExpression": "[TaxLotId]",
          "useCodedValues": false,
          "symbol": 
          {
            "type": "esriTS",
            "color": [255,255,0,255],
            "verticalAlignment": "bottom",
            "horizontalAlignment": "left",
            "font": 
            {
              "family": "Arial",
              "size": 12,
              "style": "normal",
              "weight": "bold",
              "decoration": "none"
            }
          },
          "minScale": 15000,
          "maxScale": 30000,
          "where": ""
        }
      ]
    },
    //change the Version of existing map service layer
    {
      "id": 503,
      "source":
      {
        "type": "mapLayer",
        "mapLayerId": 1,
        "gdbVersion": "USER1"
      },
      "definitionExpression": "neighborhood = 'French Quarter'"
    },
    //add a raster from registered workspace
    {
      "id": 504,
      "source":
      {
        "type": "dataLayer",
        "dataSource":
        {
          "type": "raster",
          "workspaceId": "rasterWS",
          "dataSourceName": "NewOrleans.tif"
        }
      },
      "drawingInfo": 
      {
        "transparency": 0
      }
    }
  ]
  ```

## Query

`TODO`
