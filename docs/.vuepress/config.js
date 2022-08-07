module.exports = {
  title: "kite-notes",
  description: "some notes about development.",
  base: "/notes/",
  nav: [{ text: "Home", link: "/" }],

  // 放在html的head标签中
  head: [
    // icon
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
    logo: "icon/nest.png",
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
          ["env_deploy/dev_front_pnpm", "[开发-前端]pnpm"],
          ["env_deploy/soft_gis_geoscene", "[软件-GIS]GeoScene"],
        ],
      },
    ],
  },
};
