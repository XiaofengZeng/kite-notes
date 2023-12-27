import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: '前端',
    icon: 'pen-to-square',
    prefix: "/front-end/",
    children: [
      {
        text: '语言基础',
        children: [
          'javascript',
          'css',
          'html',
        ]
      },
      {
        text: '依赖管理工具',
        children: [
          { text: 'pnpm', link: 'package-manager-tool/pnpm' },
        ]
      },
    ]
  },
  {
    text: 'GIS',
    icon: 'pen-to-square',
    prefix: "/gis/",
    children: [
      {
        text: '地图框架',
        children: [
          'cesium',
          'ol-cesium',
          'openlayers',
        ]
      },
      {
        text: '地图服务',
        children: [
          { text: 'ArcGIS Server', link: 'server/arcgis-server' },
        ]
      },
      {
        text: '数据资源',
        children: [
          { text: 'POI/AOI/LOI', link: 'resources/poi-aoi-loi' },
        ]
      },
      {
        text: '地理处理',
        children: [
          { text: 'mapshaper', link: 'geoprocessing/mapshaper' },
        ]
      },
      {
        text: '地理算法',
        children: [
          { text: '抽稀', link: 'algorithms/simplify' },
        ]
      }
    ]
  },
  {
    text: '图形学',
    icon: 'pen-to-square',
    prefix: "/computer-graphics/",
    children: [
      'games101',
    ]
  },
  {
    text: '环境部署',
    icon: 'pen-to-square',
    prefix: "/deployment/",
    children: [
      // { text: 'GeoScene', link: 'geoscene' },
      { text: 'Docker', link: 'docker' },
      { text: 'Git', link: 'git' },
      { text: 'GitLab', link: 'gitlab' },
      { text: 'Jenkins', link: 'jenkins' },
      { text: 'Kingbase', link: 'kingbase' },
    ]
  },
  {
    text: '操作系统',
    icon: 'pen-to-square',
    prefix: "/system/",
    children: [
      'linux',
      'windows',
    ]
  },
  {
    text: '成长总结',
    icon: 'pen-to-square',
    prefix: "/experience/",
    children: [
      { text: '年终总结-2022', link: 'summary-2022' },
    ]
  },
]);
