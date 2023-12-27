import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e}from"./app-5hxSoQGh.js";const i={},l=e(`<h1 id="常用脚本" tabindex="-1"><a class="header-anchor" href="#常用脚本" aria-hidden="true">#</a> 常用脚本</h1><h2 id="jdk环境-安装-配置" tabindex="-1"><a class="header-anchor" href="#jdk环境-安装-配置" aria-hidden="true">#</a> JDK环境-安装+配置</h2><h3 id="前置条件" tabindex="-1"><a class="header-anchor" href="#前置条件" aria-hidden="true">#</a> 前置条件</h3><ol><li>准备安装包。如<code>jdk-8u261-linux-x64.tar.gz</code></li></ol><h3 id="脚本" tabindex="-1"><a class="header-anchor" href="#脚本" aria-hidden="true">#</a> 脚本</h3><p>主要内容：</p><ol><li>解压jdk压缩包到指定目录，并更名</li><li>对jdk进行环境配置</li><li>测试java指令</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash </span>
<span class="token comment"># 安装包文件（具体到文件名）</span>
<span class="token assign-left variable">INSTALL_PKG</span><span class="token operator">=</span>/opt/soft/jdk-8u261-linux-x64.tar.gz
<span class="token comment"># 安装目录</span>
<span class="token assign-left variable">INSTALL_PATH</span><span class="token operator">=</span>/opt/java
<span class="token comment"># JDK版本号</span>
<span class="token assign-left variable">JDK</span><span class="token operator">=</span>jdk1.8.0_261

<span class="token builtin class-name">echo</span> <span class="token string">&quot;install jdk...&quot;</span>
<span class="token comment"># 解压</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;tar ing...&quot;</span>
<span class="token function">mkdir</span> <span class="token variable">$INSTALL_PATH</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> <span class="token variable">$INSTALL_PKG</span> <span class="token parameter variable">-C</span> <span class="token variable">$INSTALL_PATH</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;tar end&quot;</span>

<span class="token comment"># 配置环境变量</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;edit /etc/profile content&quot;</span>
<span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> /etc/profile <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
JAVA_HOME=<span class="token variable">$INSTALL_PATH</span>/<span class="token variable">$JDK</span>
JRE_HOME=\\<span class="token variable">$JAVA_HOME</span>/
PATH=\\<span class="token environment constant">$PATH</span>:\\<span class="token variable">$JAVA_HOME</span>/bin:\\<span class="token variable">$JRE_HOME</span>/bin
CLASSPATH=.:\\<span class="token variable">$JAVA_HOME</span>/lib/dt.jar:\\<span class="token variable">$JAVA_HOME</span>/lib/tools.jar:\\<span class="token variable">$JRE_HOME</span>/lib
export JAVA_HOME JRE_HOME PATH CLASSPATH
EOF</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;edit end and source profile&quot;</span>

<span class="token comment"># 使环境变量生效</span>
<span class="token builtin class-name">source</span> /etc/profile
<span class="token builtin class-name">echo</span> <span class="token string">&quot;jdk install end&quot;</span>

<span class="token comment"># 检查配置</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;test jdk&quot;</span>
<span class="token function">java</span> <span class="token parameter variable">-version</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="node环境-安装-配置" tabindex="-1"><a class="header-anchor" href="#node环境-安装-配置" aria-hidden="true">#</a> Node环境-安装+配置</h2><h3 id="前置条件-1" tabindex="-1"><a class="header-anchor" href="#前置条件-1" aria-hidden="true">#</a> 前置条件</h3><ol><li>准备安装包。如<code>node-v16.15.0-linux-x64.tar</code></li></ol><h3 id="脚本-1" tabindex="-1"><a class="header-anchor" href="#脚本-1" aria-hidden="true">#</a> 脚本</h3><p>主要内容：</p><ol><li>解压nodejs压缩包到指定目录，并更名</li><li>对node、npm指令进行软连接</li><li>测试node、npm指令</li><li>修改npm镜像</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash </span>
<span class="token comment"># 安装包文件（具体到文件名）</span>
<span class="token assign-left variable">INSTALL_PKG</span><span class="token operator">=</span>/opt/soft/node-v16.15.0-linux-x64.tar
<span class="token comment"># 安装目录</span>
<span class="token assign-left variable">INSTALL_PATH</span><span class="token operator">=</span>/opt/nodejs
<span class="token comment"># JDK版本号</span>
<span class="token assign-left variable">NODEJS</span><span class="token operator">=</span>node-v16.15.0

<span class="token builtin class-name">echo</span> <span class="token string">&quot;install nodejs...&quot;</span>
<span class="token comment"># 解压</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;tar ing...&quot;</span>
<span class="token function">mkdir</span> <span class="token variable">$INSTALL_PATH</span>
<span class="token function">tar</span> <span class="token parameter variable">-xf</span> <span class="token variable">$INSTALL_PKG</span> <span class="token parameter variable">-C</span> <span class="token variable">$INSTALL_PATH</span>
<span class="token function">mv</span> <span class="token variable">$INSTALL_PATH</span>/node-v16.15.0-linux-x64 <span class="token variable">$INSTALL_PATH</span>/<span class="token variable">$NODEJS</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;tar end&quot;</span>

<span class="token comment"># 软链接</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;build weaked link&quot;</span>
<span class="token function">ln</span> <span class="token parameter variable">-s</span> <span class="token variable">$INSTALL_PATH</span>/<span class="token variable">$NODEJS</span>/bin/node /usr/local/bin
<span class="token function">ln</span> <span class="token parameter variable">-s</span> <span class="token variable">$INSTALL_PATH</span>/<span class="token variable">$NODEJS</span>/bin/npm /usr/local/bin
<span class="token builtin class-name">echo</span> <span class="token string">&quot;build weaked link end&quot;</span>

<span class="token comment"># 检查配置</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;test node&quot;</span>
<span class="token function">node</span> <span class="token parameter variable">-v</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;test npm&quot;</span>
<span class="token function">npm</span> <span class="token parameter variable">-v</span>

<span class="token comment"># 修改npm镜像</span>
<span class="token function">npm</span> config <span class="token builtin class-name">set</span> registry https://registry.npm.taobao.org
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="maven环境-安装-配置" tabindex="-1"><a class="header-anchor" href="#maven环境-安装-配置" aria-hidden="true">#</a> Maven环境-安装+配置</h2><h3 id="前置条件-2" tabindex="-1"><a class="header-anchor" href="#前置条件-2" aria-hidden="true">#</a> 前置条件</h3><ol><li>准备安装包。如<code>node-v16.15.0-linux-x64.tar</code></li><li>（可选）maven配置文件（其中配置了仓库地址）。如<code>maven-settings.xml</code></li></ol><h3 id="脚本-2" tabindex="-1"><a class="header-anchor" href="#脚本-2" aria-hidden="true">#</a> 脚本</h3><p>主要内容：</p><ol><li>解压maven安装包</li><li>创建本地仓库目录</li><li>（可选）替换配置文件settings.xml</li><li>写入系统环境变量</li><li>测试mvn指令</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token shebang important">#!/bin/bash </span>
<span class="token comment"># 安装包文件（具体到文件名）</span>
<span class="token assign-left variable">INSTALL_PKG</span><span class="token operator">=</span>/home/jenkins/apache-maven-3.6.3-bin.tar.gz
<span class="token comment"># 配置文件</span>
<span class="token assign-left variable">CONFIG_FILE</span><span class="token operator">=</span>/opt/soft/maven-settings.xml
<span class="token comment"># 安装目录</span>
<span class="token assign-left variable">INSTALL_PATH</span><span class="token operator">=</span>/opt/maven
<span class="token comment"># MAVEM版本号</span>
<span class="token assign-left variable">MAVEM</span><span class="token operator">=</span>apache-maven-3.6.3

<span class="token builtin class-name">echo</span> <span class="token string">&quot;install maven...&quot;</span>
<span class="token comment"># 解压</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;tar ing...&quot;</span>
<span class="token function">mkdir</span> <span class="token variable">$INSTALL_PATH</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> <span class="token variable">$INSTALL_PKG</span> <span class="token parameter variable">-C</span> <span class="token variable">$INSTALL_PATH</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;tar end&quot;</span>

<span class="token comment"># 创建本地仓库目录</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;mkdir local repo&quot;</span>
<span class="token function">mkdir</span> <span class="token variable">$INSTALL_PATH</span>/<span class="token variable">$MAVEM</span>/repo

<span class="token comment"># 配置文件替换</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;replace file&quot;</span>
<span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token operator">!</span> <span class="token parameter variable">-d</span> <span class="token variable">$CONFIG_FILE</span> <span class="token punctuation">]</span><span class="token punctuation">;</span><span class="token keyword">then</span>
  <span class="token function">cp</span> <span class="token variable">$CONFIG_FILE</span> <span class="token variable">$INSTALL_PATH</span>/<span class="token variable">$MAVEM</span>/conf/settings.xml
<span class="token keyword">fi</span>

<span class="token builtin class-name">echo</span> <span class="token string">&quot;edit /etc/profile content&quot;</span>
<span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> /etc/profile <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
MAVEN_HOME=<span class="token variable">$INSTALL_PATH</span>/<span class="token variable">$MAVEM</span>
PATH=<span class="token environment constant">$PATH</span>:<span class="token variable">$MAVEN_HOME</span>/bin
export MAVEN_HOME PATH
EOF</span>

<span class="token comment"># 使环境变量生效</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;edit end and source profile&quot;</span>
<span class="token builtin class-name">source</span> /etc/profile
<span class="token builtin class-name">echo</span> <span class="token string">&quot;maven install end&quot;</span>

<span class="token comment"># 测试</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;test maven&quot;</span>
mvn <span class="token parameter variable">-v</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="tomcat环境-安装-配置" tabindex="-1"><a class="header-anchor" href="#tomcat环境-安装-配置" aria-hidden="true">#</a> Tomcat环境-安装+配置</h2><h3 id="前置条件-3" tabindex="-1"><a class="header-anchor" href="#前置条件-3" aria-hidden="true">#</a> 前置条件</h3><ol><li><a href="#jdk%E7%8E%AF%E5%A2%83-%E5%AE%89%E8%A3%85-%E9%85%8D%E7%BD%AE">JDK环境</a>。</li><li>准备安装包。如<code>apache-tomcat-9.0.68.tar.gz</code></li></ol><h3 id="脚本-3" tabindex="-1"><a class="header-anchor" href="#脚本-3" aria-hidden="true">#</a> 脚本</h3><p>主要内容：</p><ol><li>解压tomcat压缩包到指定目录</li><li>配置Tomcat自启环境变量</li><li>开放防火墙端口设置（TODO）</li><li>启动Tomcat</li></ol><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装包文件（具体到文件名）</span>
<span class="token assign-left variable">INSTALL_PKG</span><span class="token operator">=</span>/opt/install/apache-tomcat-9.0.68.tar.gz
<span class="token comment"># Tomcat版本号</span>
<span class="token assign-left variable">TOMCAT_VER</span><span class="token operator">=</span>apache-tomcat-9.0.68
<span class="token comment"># JAVA环境</span>
<span class="token assign-left variable">JAVA_HOME</span><span class="token operator">=</span>/opt/env/java/jdk1.8.0_351/
<span class="token comment"># 安装目录</span>
<span class="token assign-left variable">INSTALL_PATH</span><span class="token operator">=</span>/opt/env/tomcat

<span class="token builtin class-name">echo</span> <span class="token string">&quot;install tomcat...&quot;</span>
<span class="token comment"># 解压</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;tar ing...&quot;</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token variable">$INSTALL_PATH</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxf</span> <span class="token variable">$INSTALL_PKG</span> <span class="token parameter variable">-C</span> <span class="token variable">$INSTALL_PATH</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;tar end&quot;</span>

<span class="token comment"># 配置自启环境变量</span>
<span class="token builtin class-name">echo</span> <span class="token string">&quot;edit auto-started config&quot;</span>

<span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> /etc/rc.d/rc.local <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
export JAVA_HOME=<span class="token variable">$JAVA_HOME</span>
<span class="token variable">$INSTALL_PATH</span>/<span class="token variable">$TOMCAT_VER</span>/bin/startup.sh start
EOF</span>

<span class="token function">chmod</span> +x /etc/rc.d/rc.local

<span class="token builtin class-name">echo</span> <span class="token string">&quot;auto-started config done, please reboot machine right now to take effect!!!&quot;</span>

<span class="token comment"># 防火墙设置</span>
<span class="token comment"># TODO...</span>

<span class="token comment"># 启动TOMCAT</span>
<span class="token variable">$INSTALL_PATH</span>/<span class="token variable">$TOMCAT_VER</span>/bin/startup.sh start

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="检查端口号并杀死对应进程" tabindex="-1"><a class="header-anchor" href="#检查端口号并杀死对应进程" aria-hidden="true">#</a> 检查端口号并杀死对应进程</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token function-name function">check_and_kill</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token builtin class-name">echo</span> <span class="token string">&quot;check:<span class="token variable">$1</span>&quot;</span>
    <span class="token function">netstat</span> <span class="token parameter variable">-tlpn</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;<span class="token entity" title="\\b">\\b</span><span class="token variable">$1</span><span class="token entity" title="\\b">\\b</span>&quot;</span>
    
    <span class="token keyword">if</span> <span class="token punctuation">[</span> <span class="token variable">$?</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token punctuation">]</span><span class="token punctuation">;</span> <span class="token keyword">then</span>
      <span class="token assign-left variable">PID</span><span class="token operator">=</span><span class="token variable"><span class="token variable">$(</span><span class="token function">netstat</span> <span class="token parameter variable">-nlp</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token string">&quot;:<span class="token variable">$1</span>&quot;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print $7}&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token parameter variable">-F</span> <span class="token string">&#39;[ / ]&#39;</span> <span class="token string">&#39;{print $1}&#39;</span><span class="token variable">)</span></span>
      <span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token variable">\${PID}</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot;kill:<span class="token variable">$1</span>&quot;</span>
    <span class="token keyword">else</span>
      <span class="token builtin class-name">echo</span> <span class="token string">&quot; <span class="token variable">$1</span> not exit&quot;</span>
    <span class="token keyword">fi</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment"># 检查并杀死指定端口号进程，可批量</span>
  check_and_kill <span class="token number">8092</span>
  check_and_kill <span class="token number">8093</span>
  check_and_kill <span class="token number">8094</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,31),t=[l];function c(p,o){return s(),a("div",null,t)}const v=n(i,[["render",c],["__file","sh.html.vue"]]);export{v as default};
