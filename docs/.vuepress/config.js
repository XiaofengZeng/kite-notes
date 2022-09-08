module.exports = {
  title: "kite-notes",
  description: "some notes about development.",
  base: "/notes/",
  nav: [{ text: "Home", link: "/" }],

  // 放在html的head标签中
  head: [
    // icon：路径根目录为public
    ["link", { rel: "icon", href: "/icon/nest.png" }],
    // SEO
    [
      "meta",
      {
        name: "keywords",
        content: "笔记",
      },
    ],
  ],
  themeConfig: {
    // logo：图片，路径根目录为public
    logo: "/icon/nest.png",
    // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
    repo: "XiaofengZeng/kite-notes",
    // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
    repoLabel: "Github",

    // 以下为可选的编辑链接选项

    // 假如你的文档仓库和项目本身不在一个仓库：
    docsRepo: "XiaofengZeng/kite-notes",
    docsDir: "docs",
    docsBranch: "main",
    // 默认是 false, 设置为 true 来启用
    editLinks: false,
    // 默认为 "Edit this page"
    editLinkText: "帮助我们改善此页面！",
    // displayAllHeaders: true,

    sidebar: [
      {
        title: "环境安装部署",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          ["env_deploy/soft_gis_geoscene", "「软件-GIS」GeoScene"],
          ["env_deploy/tool_build_jenkins", "「工具-构建」Jenkins"],
          ["env_deploy/tool_cvs_git", "「工具-代码控制」Git"],
        ],
      },
      {
        title: "「开发」前端",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          ["dev_frontend/tool_pnpm", "「工具-依赖管理」pnpm"],
          ["dev_frontend/js_es6", "「JavaScript」ES6"],
          ["dev_frontend/js_utils", "「JavaScript」常用操作"],
          ["dev_frontend/js_throttle_debounce", "「JavaScript」节流&防抖"],
          ["dev_frontend/js_polling", "「JavaScript」轮询"],
          ["dev_frontend/js_canvas", "「JavaScript」Canvas画布"],
        ],
      },
      {
        title: "「开发」GIS",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          ["dev_gis/tool_mapshaper", "「小工具」mapshaper"],
          ["dev_gis/algo_simplify", "「算法」抽稀（概化）"],
          ["dev_gis/esri_arcgis_server", "「ESRI」ArcGIS Server"],
          ["dev_gis/interview_3d_gis", "「面试」三维GIS开发工程师"],
        ],
      },
      {
        title: "地理信息科学",
        collapsable: false,
        sidebarDepth: 2,
        children: [["gis/data_poi_aoi_loi", "「数据」POI/AOI/LOI"]],
      },
      {
        title: "「系统」Linux",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          ["os_linux/cmd", "「Linux」常用指令"],
          ["os_linux/sh", "「Linux」常用脚本"],
          ["os_linux/operation", "「Linux」常用操作"],
        ],
      },
      {
        title: "「系统」Windows",
        collapsable: false,
        sidebarDepth: 2,
        children: [
          ["os_windows/cmd", "「Windows」常用指令"],
          ["os_windows/bat", "「Windows」常用脚本"],
          ["os_windows/operation", "「Windows」常用操作"],
        ],
      },
    ],
  },
};
