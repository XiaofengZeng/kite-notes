const e=JSON.parse('{"key":"v-c38fdc58","path":"/deployment/jenkins.html","title":"Jenkins","lang":"zh-CN","frontmatter":{"index":false,"icon":"laptop-code","category":["部署/使用手册"],"tag":["Jenkins"],"date":"2022-08-13T00:00:00.000Z","description":"Jenkins Jenkins是一个独立的开源软件项目，是基于Java开发的一种持续集成工具，用于监控持续重复的工作，旨在提供一个开放易用的软件平台，使软件的持续集成变成可能。 前身是Hudson是一个可扩展的持续集成引擎。可用于自动化各种任务，如构建，测试和部署软件。 Jenkins可以通过本机系统包Docker安装，甚至可以通过安装Java Runtime Environment的任何机器独立运行。1 安装+部署 环境准备 前提条件-JDK安装+配置 前端-Node安装+配置 后端-Maven安装+配置","head":[["meta",{"property":"og:url","content":"https://xiaofengzeng.github.io/kite-notes/deployment/jenkins.html"}],["meta",{"property":"og:site_name","content":"kite-notes"}],["meta",{"property":"og:title","content":"Jenkins"}],["meta",{"property":"og:description","content":"Jenkins Jenkins是一个独立的开源软件项目，是基于Java开发的一种持续集成工具，用于监控持续重复的工作，旨在提供一个开放易用的软件平台，使软件的持续集成变成可能。 前身是Hudson是一个可扩展的持续集成引擎。可用于自动化各种任务，如构建，测试和部署软件。 Jenkins可以通过本机系统包Docker安装，甚至可以通过安装Java Runtime Environment的任何机器独立运行。1 安装+部署 环境准备 前提条件-JDK安装+配置 前端-Node安装+配置 后端-Maven安装+配置"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://xiaofengzeng.github.io/kite-notes/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-27T07:27:38.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Jenkins"}],["meta",{"property":"article:author","content":"Kite.Zeng"}],["meta",{"property":"article:tag","content":"Jenkins"}],["meta",{"property":"article:published_time","content":"2022-08-13T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-27T07:27:38.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Jenkins\\",\\"image\\":[\\"https://xiaofengzeng.github.io/kite-notes/\\"],\\"datePublished\\":\\"2022-08-13T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-27T07:27:38.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Kite.Zeng\\"}]}"]]},"headers":[{"level":2,"title":"安装+部署","slug":"安装-部署","link":"#安装-部署","children":[{"level":3,"title":"环境准备","slug":"环境准备","link":"#环境准备","children":[]},{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"部署","slug":"部署","link":"#部署","children":[]}]},{"level":2,"title":"项目构建","slug":"项目构建","link":"#项目构建","children":[{"level":3,"title":"视图构建","slug":"视图构建","link":"#视图构建","children":[]},{"level":3,"title":"项目构建-通用操作","slug":"项目构建-通用操作","link":"#项目构建-通用操作","children":[]},{"level":3,"title":"后端项目构建","slug":"后端项目构建","link":"#后端项目构建","children":[]},{"level":3,"title":"前端项目构建","slug":"前端项目构建","link":"#前端项目构建","children":[]},{"level":3,"title":"构建后处理（可选）3","slug":"构建后处理-可选-3","link":"#构建后处理-可选-3","children":[]}]},{"level":2,"title":"参考文档","slug":"参考文档","link":"#参考文档","children":[]}],"git":{"createdTime":1703572619000,"updatedTime":1703662058000,"contributors":[{"name":"XiaofengZeng","email":"zengxf12123@163.com","commits":3}]},"readingTime":{"minutes":5.88,"words":1764},"filePathRelative":"deployment/jenkins.md","localizedDate":"2022年8月13日","excerpt":"<h1> Jenkins</h1>\\n<p><u>Jenkins是一个独立的开源软件项目，是基于Java开发的一种持续集成工具，用于监控持续重复的工作，旨在提供一个开放易用的软件平台，使软件的持续集成变成可能。\\n前身是Hudson是一个可扩展的持续集成引擎。可用于自动化各种任务，如构建，测试和部署软件。\\nJenkins可以通过本机系统包Docker安装，甚至可以通过安装Java Runtime Environment的任何机器独立运行。</u><sup>1</sup></p>\\n<h2> 安装+部署</h2>\\n<h3> 环境准备</h3>\\n<ul>\\n<li><a href=\\"/kite-notes/system/linux/sh.html#jdk%E7%8E%AF%E5%A2%83-%E5%AE%89%E8%A3%85-%E9%85%8D%E7%BD%AE\\" target=\\"blank\\">前提条件-JDK安装+配置</a></li>\\n<li><a href=\\"/kite-notes/system/linux/sh.html#node%E7%8E%AF%E5%A2%83-%E5%AE%89%E8%A3%85-%E9%85%8D%E7%BD%AE\\" target=\\"blank\\">前端-Node安装+配置</a></li>\\n<li><a href=\\"/kite-notes/system/linux/sh.html#maven%E7%8E%AF%E5%A2%83-%E5%AE%89%E8%A3%85-%E9%85%8D%E7%BD%AE\\" target=\\"blank\\">后端-Maven安装+配置</a></li>\\n</ul>","autoDesc":true}');export{e as data};
