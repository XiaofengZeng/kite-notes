const n=JSON.parse('{"key":"v-bf1723bc","path":"/system/linux/sh.html","title":"常用脚本","lang":"zh-CN","frontmatter":{"index":false,"icon":"book","category":["Linux"],"date":"2022-10-25T00:00:00.000Z","description":"常用脚本 JDK环境-安装+配置 前置条件 准备安装包。如jdk-8u261-linux-x64.tar.gz 脚本 主要内容： 解压jdk压缩包到指定目录，并更名 对jdk进行环境配置 测试java指令 #!/bin/bash # 安装包文件（具体到文件名） INSTALL_PKG=/opt/soft/jdk-8u261-linux-x64.tar.gz # 安装目录 INSTALL_PATH=/opt/java # JDK版本号 JDK=jdk1.8.0_261 echo \\"install jdk...\\" # 解压 echo \\"tar ing...\\" mkdir $INSTALL_PATH tar -zxvf $INSTALL_PKG -C $INSTALL_PATH echo \\"tar end\\" # 配置环境变量 echo \\"edit /etc/profile content\\" cat &gt;&gt; /etc/profile &lt;&lt; EOF JAVA_HOME=$INSTALL_PATH/$JDK JRE_HOME=\\\\$JAVA_HOME/ PATH=\\\\$PATH:\\\\$JAVA_HOME/bin:\\\\$JRE_HOME/bin CLASSPATH=.:\\\\$JAVA_HOME/lib/dt.jar:\\\\$JAVA_HOME/lib/tools.jar:\\\\$JRE_HOME/lib export JAVA_HOME JRE_HOME PATH CLASSPATH EOF echo \\"edit end and source profile\\" # 使环境变量生效 source /etc/profile echo \\"jdk install end\\" # 检查配置 echo \\"test jdk\\" java -version","head":[["meta",{"property":"og:url","content":"https://xiaofengzeng.github.io/kite-notes/system/linux/sh.html"}],["meta",{"property":"og:site_name","content":"kite-notes"}],["meta",{"property":"og:title","content":"常用脚本"}],["meta",{"property":"og:description","content":"常用脚本 JDK环境-安装+配置 前置条件 准备安装包。如jdk-8u261-linux-x64.tar.gz 脚本 主要内容： 解压jdk压缩包到指定目录，并更名 对jdk进行环境配置 测试java指令 #!/bin/bash # 安装包文件（具体到文件名） INSTALL_PKG=/opt/soft/jdk-8u261-linux-x64.tar.gz # 安装目录 INSTALL_PATH=/opt/java # JDK版本号 JDK=jdk1.8.0_261 echo \\"install jdk...\\" # 解压 echo \\"tar ing...\\" mkdir $INSTALL_PATH tar -zxvf $INSTALL_PKG -C $INSTALL_PATH echo \\"tar end\\" # 配置环境变量 echo \\"edit /etc/profile content\\" cat &gt;&gt; /etc/profile &lt;&lt; EOF JAVA_HOME=$INSTALL_PATH/$JDK JRE_HOME=\\\\$JAVA_HOME/ PATH=\\\\$PATH:\\\\$JAVA_HOME/bin:\\\\$JRE_HOME/bin CLASSPATH=.:\\\\$JAVA_HOME/lib/dt.jar:\\\\$JAVA_HOME/lib/tools.jar:\\\\$JRE_HOME/lib export JAVA_HOME JRE_HOME PATH CLASSPATH EOF echo \\"edit end and source profile\\" # 使环境变量生效 source /etc/profile echo \\"jdk install end\\" # 检查配置 echo \\"test jdk\\" java -version"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-12-26T15:18:46.000Z"}],["meta",{"property":"article:author","content":"Kite.Zeng"}],["meta",{"property":"article:published_time","content":"2022-10-25T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-12-26T15:18:46.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"常用脚本\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-10-25T00:00:00.000Z\\",\\"dateModified\\":\\"2023-12-26T15:18:46.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Kite.Zeng\\"}]}"]]},"headers":[{"level":2,"title":"JDK环境-安装+配置","slug":"jdk环境-安装-配置","link":"#jdk环境-安装-配置","children":[{"level":3,"title":"前置条件","slug":"前置条件","link":"#前置条件","children":[]},{"level":3,"title":"脚本","slug":"脚本","link":"#脚本","children":[]}]},{"level":2,"title":"Node环境-安装+配置","slug":"node环境-安装-配置","link":"#node环境-安装-配置","children":[{"level":3,"title":"前置条件","slug":"前置条件-1","link":"#前置条件-1","children":[]},{"level":3,"title":"脚本","slug":"脚本-1","link":"#脚本-1","children":[]}]},{"level":2,"title":"Maven环境-安装+配置","slug":"maven环境-安装-配置","link":"#maven环境-安装-配置","children":[{"level":3,"title":"前置条件","slug":"前置条件-2","link":"#前置条件-2","children":[]},{"level":3,"title":"脚本","slug":"脚本-2","link":"#脚本-2","children":[]}]},{"level":2,"title":"Tomcat环境-安装+配置","slug":"tomcat环境-安装-配置","link":"#tomcat环境-安装-配置","children":[{"level":3,"title":"前置条件","slug":"前置条件-3","link":"#前置条件-3","children":[]},{"level":3,"title":"脚本","slug":"脚本-3","link":"#脚本-3","children":[]}]},{"level":2,"title":"检查端口号并杀死对应进程","slug":"检查端口号并杀死对应进程","link":"#检查端口号并杀死对应进程","children":[]}],"git":{"createdTime":1703572619000,"updatedTime":1703603926000,"contributors":[{"name":"XiaofengZeng","email":"zengxf12123@163.com","commits":2}]},"readingTime":{"minutes":2.75,"words":825},"filePathRelative":"system/linux/sh.md","localizedDate":"2022年10月25日","excerpt":"<h1> 常用脚本</h1>\\n<h2> JDK环境-安装+配置</h2>\\n<h3> 前置条件</h3>\\n<ol>\\n<li>准备安装包。如<code>jdk-8u261-linux-x64.tar.gz</code></li>\\n</ol>\\n<h3> 脚本</h3>\\n<p>主要内容：</p>\\n<ol>\\n<li>解压jdk压缩包到指定目录，并更名</li>\\n<li>对jdk进行环境配置</li>\\n<li>测试java指令</li>\\n</ol>\\n<div class=\\"language-bash line-numbers-mode\\" data-ext=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token shebang important\\">#!/bin/bash </span>\\n<span class=\\"token comment\\"># 安装包文件（具体到文件名）</span>\\n<span class=\\"token assign-left variable\\">INSTALL_PKG</span><span class=\\"token operator\\">=</span>/opt/soft/jdk-8u261-linux-x64.tar.gz\\n<span class=\\"token comment\\"># 安装目录</span>\\n<span class=\\"token assign-left variable\\">INSTALL_PATH</span><span class=\\"token operator\\">=</span>/opt/java\\n<span class=\\"token comment\\"># JDK版本号</span>\\n<span class=\\"token assign-left variable\\">JDK</span><span class=\\"token operator\\">=</span>jdk1.8.0_261\\n\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"install jdk...\\"</span>\\n<span class=\\"token comment\\"># 解压</span>\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"tar ing...\\"</span>\\n<span class=\\"token function\\">mkdir</span> <span class=\\"token variable\\">$INSTALL_PATH</span>\\n<span class=\\"token function\\">tar</span> <span class=\\"token parameter variable\\">-zxvf</span> <span class=\\"token variable\\">$INSTALL_PKG</span> <span class=\\"token parameter variable\\">-C</span> <span class=\\"token variable\\">$INSTALL_PATH</span>\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"tar end\\"</span>\\n\\n<span class=\\"token comment\\"># 配置环境变量</span>\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"edit /etc/profile content\\"</span>\\n<span class=\\"token function\\">cat</span> <span class=\\"token operator\\">&gt;&gt;</span> /etc/profile <span class=\\"token operator\\">&lt;&lt;</span> <span class=\\"token string\\">EOF\\nJAVA_HOME=<span class=\\"token variable\\">$INSTALL_PATH</span>/<span class=\\"token variable\\">$JDK</span>\\nJRE_HOME=\\\\<span class=\\"token variable\\">$JAVA_HOME</span>/\\nPATH=\\\\<span class=\\"token environment constant\\">$PATH</span>:\\\\<span class=\\"token variable\\">$JAVA_HOME</span>/bin:\\\\<span class=\\"token variable\\">$JRE_HOME</span>/bin\\nCLASSPATH=.:\\\\<span class=\\"token variable\\">$JAVA_HOME</span>/lib/dt.jar:\\\\<span class=\\"token variable\\">$JAVA_HOME</span>/lib/tools.jar:\\\\<span class=\\"token variable\\">$JRE_HOME</span>/lib\\nexport JAVA_HOME JRE_HOME PATH CLASSPATH\\nEOF</span>\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"edit end and source profile\\"</span>\\n\\n<span class=\\"token comment\\"># 使环境变量生效</span>\\n<span class=\\"token builtin class-name\\">source</span> /etc/profile\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"jdk install end\\"</span>\\n\\n<span class=\\"token comment\\"># 检查配置</span>\\n<span class=\\"token builtin class-name\\">echo</span> <span class=\\"token string\\">\\"test jdk\\"</span>\\n<span class=\\"token function\\">java</span> <span class=\\"token parameter variable\\">-version</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
