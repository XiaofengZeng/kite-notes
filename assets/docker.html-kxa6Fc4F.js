import{_ as c}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as t,c as o,b as n,d as a,a as e,e as l}from"./app-nlX3gzzp.js";const r={},d=l(`<h1 id="docker" tabindex="-1"><a class="header-anchor" href="#docker" aria-hidden="true">#</a> Docker</h1><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装" aria-hidden="true">#</a> 安装</h2><h3 id="_1-源码安装" tabindex="-1"><a class="header-anchor" href="#_1-源码安装" aria-hidden="true">#</a> 1. 源码安装</h3><p>TODO...</p><h3 id="_2-yum安装1" tabindex="-1"><a class="header-anchor" href="#_2-yum安装1" aria-hidden="true">#</a> 2. yum安装<sup>1</sup></h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 更新yum</span>
yum update
<span class="token comment"># 安装工具包</span>
yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils

<span class="token comment"># 建立Docker仓库 (映射仓库地址)</span>
yum-config-manager <span class="token punctuation">\\</span>
    --add-repo <span class="token punctuation">\\</span>
    https://download.docker.com/linux/centos/docker-ce.repo

<span class="token comment"># 安装Docker引擎</span>
yum <span class="token function">install</span> docker-ce docker-ce-cli containerd.io

<span class="token comment"># 启动Docker</span>
systemctl start <span class="token function">docker</span>

<span class="token comment"># 检查Docker是否正常</span>
<span class="token function">docker</span> run hello-world
<span class="token comment"># 列表中存在hello-world则表示正常</span>
<span class="token function">docker</span> <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><h3 id="切换仓库镜像源2" tabindex="-1"><a class="header-anchor" href="#切换仓库镜像源2" aria-hidden="true">#</a> 切换仓库镜像源<sup>2</sup></h3><ul><li>对于systemd系统：Ubuntu16.04+、Debian8+、CentOS7</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 检查配置是否存在？</span>
ll /etc/docker/daemon.json
<span class="token comment"># 不存在，则追加内容</span>
<span class="token function">cat</span> <span class="token operator">&gt;&gt;</span> /etc/docker/daemon.json <span class="token operator">&lt;&lt;</span> <span class="token string">EOF
{&quot;registry-mirrors&quot;:[&quot;https://docker.mirrors.ustc.edu.cn/&quot;]}
EOF</span>
<span class="token comment"># 存在，则修改内容</span>
<span class="token function">vim</span> /etc/docker/daemon.json
<span class="token comment"># 内容如下</span>
<span class="token comment"># {&quot;registry-mirrors&quot;:[&quot;https://docker.mirrors.ustc.edu.cn/&quot;]}</span>

<span class="token comment"># 重启Docker</span>
systemctl daemon-reload
systemctl restart <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常用指令" tabindex="-1"><a class="header-anchor" href="#常用指令" aria-hidden="true">#</a> 常用指令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 开启docker服务</span>
<span class="token function">service</span> <span class="token function">docker</span> start
<span class="token comment"># 启动 docker 后台服务</span>
systemctl start <span class="token function">docker</span>
<span class="token comment"># 重启docker守护进程</span>
systemctl daemon-reload
<span class="token comment"># 重启docker服务</span>
systemctl restart <span class="token function">docker</span>

<span class="token comment"># 拉取镜像</span>
<span class="token function">docker</span> pull <span class="token punctuation">{</span>image<span class="token punctuation">}</span>:<span class="token punctuation">{</span>version<span class="token punctuation">}</span>
<span class="token comment"># 查看镜像列表</span>
<span class="token function">docker</span> images
<span class="token comment"># 删除镜像</span>
<span class="token function">docker</span> rmi <span class="token punctuation">{</span>imageID<span class="token punctuation">}</span>/<span class="token punctuation">{</span>imageAlias<span class="token punctuation">}</span>

<span class="token comment"># 查看容器,不加-a查看正在运行的，加上-a查看所有</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>
<span class="token comment"># 移除容器</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token punctuation">{</span>containerID<span class="token punctuation">}</span>/<span class="token punctuation">{</span>containerAlias<span class="token punctuation">}</span>
<span class="token comment"># 关闭一个已启动容器 </span>
<span class="token function">docker</span> stop <span class="token punctuation">{</span>containerID<span class="token punctuation">}</span>/<span class="token punctuation">{</span>containerAlias<span class="token punctuation">}</span>
<span class="token comment"># 启动一个关闭的容器 </span>
<span class="token function">docker</span> start <span class="token punctuation">{</span>containerID<span class="token punctuation">}</span>/<span class="token punctuation">{</span>containerAlias<span class="token punctuation">}</span>
<span class="token comment"># 查看一个容器的详情</span>
<span class="token function">docker</span> inspect <span class="token punctuation">{</span>containerID<span class="token punctuation">}</span>/<span class="token punctuation">{</span>containerAlias<span class="token punctuation">}</span>
<span class="token comment"># 进入容器内部</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token punctuation">{</span>containerID<span class="token punctuation">}</span>/<span class="token punctuation">{</span>containerAlias<span class="token punctuation">}</span> /bin/bash
<span class="token comment"># 生成镜像</span>
<span class="token function">docker</span> build <span class="token punctuation">..</span>.
<span class="token comment"># 运行容器</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">..</span>. 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文档" tabindex="-1"><a class="header-anchor" href="#参考文档" aria-hidden="true">#</a> 参考文档</h2>`,13),p={href:"https://blog.csdn.net/BThinker/article/details/123358697",target:"_blank",rel:"noopener noreferrer"},u={href:"https://www.runoob.com/docker/docker-mirror-acceleration.html",target:"_blank",rel:"noopener noreferrer"};function m(v,k){const s=i("ExternalLinkIcon");return t(),o("div",null,[d,n("ol",null,[n("li",null,[n("a",p,[a("Docker安装 (完整详细版)"),e(s)])]),n("li",null,[n("a",u,[a("Docker 镜像加速"),e(s)])])])])}const f=c(r,[["render",m],["__file","docker.html.vue"]]);export{f as default};
