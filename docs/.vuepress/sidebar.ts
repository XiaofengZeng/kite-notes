import { sidebar } from 'vuepress-theme-hope';

export default sidebar({
  '/front-end/javascript/': [
    {
      text: 'ES6语法',
      icon: 'book',
      prefix: 'es6/',
      children: [
        {
          text: '01. JavaScript与ECMAScript',
          link: 'JavaScript-and-ECMAScript'
        },
        {
          text: '02. var let const',
          link: 'var-let-const'
        },
        {
          text: '03. 顶层对象',
          link: 'window-and-globalThis'
        },
        {
          text: '04. 解构赋值',
          link: 'deconstruction'
        },
        {
          text: '05. 字符串的拓展',
          link: 'extension-of-string'
        },
        {
          text: '06. 数值的拓展',
          link: 'extension-of-number'
        },
        {
          text: '08. 函数的拓展',
          link: 'extension-of-function'
        },
        {
          text: '08. 对象的拓展',
          link: 'extension-of-object'
        },
        {
          text: '09. Symbol',
          link: 'Symbol'
        },
        {
          text: '10. Set和Map',
          link: 'Set-and-Map'
        },
        {
          text: '11. Proxy和Reflect',
          link: 'Proxy-and-Reflect'
        },
        {
          text: '12. Promise',
          link: 'Promise'
        },
      ]
    },
    {
      text: 'Canvas',
      icon: 'book',
      prefix: 'canvas/',
      children: [
        'basic'
      ]
    },
    {
      text: '进阶：性能优化',
      icon: 'book',
      prefix: 'advanced-performance',
      children: [
        'throttle-and-debounce'
      ]
    },
    {
      text: '便捷工具',
      icon: 'book',
      link: 'utils',
    },
  ],
  '/front-end/tools/': [
    {
      text: '依赖管理工具',
      icon: 'book',
      prefix: 'package-manager-tool',
      children: [
        'pnpm'
      ]
    }
  ],

  '/gis/cesium': [
    {
      text: 'Cesium',
      icon: 'book',
      children: [
        {
          text: '01. Vue3+Vite或Vue-CLI+Cesium+JS或TS - 工程搭建',
          link: 'initialization-Vue3-Cesium-JS'
        },
        {
          text: '02. Cesium中常用坐标系及转换',
          link: 'coordinate-system'
        },
        {
          text: '03. Entity和Primitive',
          link: 'Entity-and-Primitive'
        },
        {
          text: '04. DataSource、EntityCollection和PrimitiveCollection',
          link: 'DataSource-EntityCollection-PrimitiveCollection'
        },
      ]
    }
  ],
  '/gis/ol-cesium': [
    {
      text: 'OLCesium',
      icon: 'book',
      children: [
        {
          text: '01. OLCesium源码剖析',
          link: 'source-code-of-OLCesium'
        },
        {
          text: '02. OLCesium源码修改: 向外暴露Cesium.Viewer',
          link: 'expose-cesium-viewer'
        },

      ]
    },
  ],
  '/gis/openlayers': [
    {
      text: 'Openlayers',
      icon: 'book',
      children: [
        // TODO
      ]
    },
  ],

  '/computer-graphics/games101': [
    {
      text: '图形学入门: Games101',
      icon: 'book',
      children: [
        {
          text: '01. 计算机图形学概述',
          link: 'overview'
        },
        {
          text: '02. 向量和线性代数',
          link: 'review-of-linear-algebra'
        },
        {
          text: '03. 变换',
          link: 'transformation'
        },
      ]
    },
  ],

  '/system/linux': [
    {
      text: '操作系统-Linux',
      icon: 'book',
      children: [
        {
          text: '功能操作',
          link: 'operation'
        },
        {
          text: '常用指令',
          link: 'cmd'
        },
        {
          text: '常用脚本',
          link: 'sh'
        },
      ]
    },
  ],

  '/system/windows': [
    {
      text: '操作系统-Windows',
      icon: 'book',
      children: [
        {
          text: '功能操作',
          link: 'operation'
        },
        {
          text: '常用指令',
          link: 'cmd'
        },
        {
          text: '常用脚本',
          link: 'bat'
        },
      ]
    },
  ]
});
