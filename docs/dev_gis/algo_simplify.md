# 「算法」抽稀

## 背景/应用场景

随着对海量地理空间数据加载、渲染的需求日益增加。在地理信息系统中，对一些细节程度高的数据在地图上的展示往往需要绘制大量的坐标点，当地图缩放层级较小时，并不需要将所有的点都绘制出来，因为全部绘制出来往往会存在性能问题，因此，可通过**抽稀算法**，将不重要的点舍弃掉，那么系统对矢量数据加载的处理性能将得以提高，同时不影响视觉效果。

## 抽稀算法类型

抽稀，也称作概化。<u>抽稀算法的关键是定义**抽稀因子**，抽稀因子的不同决定了抽稀算法的多样性。在现有抽稀理论中，有按步长，线段长度，垂距等来定义抽稀因子。</u><sup>1</sup>在GIS领域，比较常用的抽稀算法是**Ramer-Douglas-Peucker**算法（基于距离）和**Visvalingam-Whyatt**算法（基于面积）。

### Ramer-Douglas-Peucker（道格拉斯-普克）



### Visvalingam-Whyatt

## 参考文档

1. [抽稀-百度百科](https://baike.baidu.com/item/%E6%8A%BD%E7%A8%80/7297123)

2. [空间数据量大怎么办，三种方式告诉你怎么抽稀](https://mp.weixin.qq.com/s/dbt8ZNFJ7TuVoGX5u1xWmw)

3. [常用的地图数据概化算法：Douglas-Peucker与Visvalingam-Whyatt](https://zhuanlan.zhihu.com/p/355323735)
