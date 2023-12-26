import { navbar } from "vuepress-theme-hope";

export default navbar([
  "/",
  {
    text: '前端',
    icon: 'pen-to-square',
    prefix: "/front-end/",
    children: [
      'javascript',
      'css',
      'html',
      'tools'
    ]
  },
  {
    text: 'GIS',
    icon: 'pen-to-square',
    prefix: "/gis/",
    children: [
      'cesium',
      'ol-cesium',
      'openlayers',
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
]);
