import{_ as t}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as r,c,b as a,a as s,w as o,d as n,e as p}from"./app-S7AmktQN.js";const d="/kite-notes/assets/reset-pwd-Tq9D0tTt.png",u={},b=p(`<h1 id="gitlab" tabindex="-1"><a class="header-anchor" href="#gitlab" aria-hidden="true">#</a> GitLab</h1><h2 id="安装部署" tabindex="-1"><a class="header-anchor" href="#安装部署" aria-hidden="true">#</a> 安装部署</h2><h3 id="以docker-engine的方式安装" tabindex="-1"><a class="header-anchor" href="#以docker-engine的方式安装" aria-hidden="true">#</a> 以Docker Engine的方式安装</h3><ul><li>拉取gitlab-ee镜像</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull gitlab/gitlab-ee:lastest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>运行容器</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 重点关注以下参数 --hostname -p</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token punctuation">\\</span>
  <span class="token parameter variable">--hostname</span> <span class="token number">192.168</span>.1.36 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">443</span>:443 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">8021</span>:80 <span class="token punctuation">\\</span>
  <span class="token parameter variable">-p</span> <span class="token number">8022</span>:22 <span class="token punctuation">\\</span>
  <span class="token parameter variable">--name</span> gitlab-ee <span class="token punctuation">\\</span>
  <span class="token parameter variable">--restart</span> always <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /opt/env/docker/gitlab-ee/config:/etc/gitlab <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /opt/env/docker/gitlab-ee/logs:/var/log/gitlab <span class="token punctuation">\\</span>
  <span class="token parameter variable">-v</span> /opt/env/docker/gitlab-ee/data:/var/opt/gitlab <span class="token punctuation">\\</span>
  --shm-size 256m <span class="token punctuation">\\</span>
  <span class="token parameter variable">--privileged</span><span class="token operator">=</span>true <span class="token punctuation">\\</span>
  gitlab/gitlab-ee
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置gitlab</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> /etc/gitlab/gitlab.rb

external_url <span class="token string">&#39;http://192.168.1.36&#39;</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;gitlab_ssh_host&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;192.168.1.36&#39;</span>
gitlab_rails<span class="token punctuation">[</span><span class="token string">&#39;gitlab_shell_ssh_port&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">8022</span>

<span class="token comment"># 如果内存不足时，则puma关闭，否则浏览器访问会出现502错误</span>
puma<span class="token punctuation">[</span><span class="token string">&#39;enable&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vi</span> /var/opt/gitlab/gitlab-rails/etc/gitlab.yml

<span class="token comment"># 修改http的端口</span>
production: <span class="token operator">&amp;</span>base
  gitlab:
    port: <span class="token number">8021</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="gitlab使用" tabindex="-1"><a class="header-anchor" href="#gitlab使用" aria-hidden="true">#</a> GitLab使用</h2><h3 id="服务端常用指令" tabindex="-1"><a class="header-anchor" href="#服务端常用指令" aria-hidden="true">#</a> 服务端常用指令</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>gitlab-ctl start <span class="token comment"># 启动所有 gitlab 组件</span>
gitlab-ctl stop <span class="token comment"># 停止所有 gitlab 组件</span>
gitlab-ctl restart <span class="token comment"># 重启所有 gitlab 组件</span>
gitlab-ctl status <span class="token comment"># 查看服务状态</span>
gitlab-ctl reconfigure <span class="token comment"># 启动服务</span>
<span class="token function">vim</span> /etc/gitlab/gitlab.rb <span class="token comment"># 修改默认的配置文件</span>
gitlab-rake gitlab:check <span class="token assign-left variable">SANITIZE</span><span class="token operator">=</span>true <span class="token parameter variable">--trace</span> <span class="token comment"># 检查gitlab</span>
gitlab-ctl <span class="token function">tail</span> <span class="token comment"># 查看日志</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="用户-群组-项目管理" tabindex="-1"><a class="header-anchor" href="#用户-群组-项目管理" aria-hidden="true">#</a> 用户/群组/项目管理</h3><ol><li><p>新增用户可以通过超级管理员用户<code>root</code>进入<code>Admin Area</code>进行新增<strong>用户/群组/项目</strong></p></li><li><p>用户密码更改<sup>2</sup></p><ul><li><p>可以通过UI界面进行更改；</p></li><li><p>也可以通过服务端进行更改</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入Rails console</span>
gitlab-rails console

<span class="token comment"># 三种方式查找用户</span>
<span class="token comment"># 1. 通过用户名查找用户</span>
user <span class="token operator">=</span> User.find_by_username <span class="token string">&#39;exampleuser&#39;</span>
<span class="token comment"># 2. 通过用户ID查找用户</span>
user <span class="token operator">=</span> User.find<span class="token punctuation">(</span><span class="token number">123</span><span class="token punctuation">)</span>
<span class="token comment"># 3. 通过电子邮箱查找用户</span>
user <span class="token operator">=</span> User.find_by<span class="token punctuation">(</span>email: <span class="token string">&#39;user@example.com&#39;</span><span class="token punctuation">)</span>

<span class="token comment"># 重置密码</span>
new_password <span class="token operator">=</span> <span class="token string">&#39;examplepassword&#39;</span>
user.password <span class="token operator">=</span> new_password
user.password_confirmation <span class="token operator">=</span> new_password

<span class="token comment"># 保存用户信息</span>
user.save<span class="token operator">!</span>

<span class="token builtin class-name">exit</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+d+'" alt="重置密码" tabindex="0" loading="lazy"><figcaption>重置密码</figcaption></figure></li></ul></li></ol><h3 id="用户配置-ssh配置" tabindex="-1"><a class="header-anchor" href="#用户配置-ssh配置" aria-hidden="true">#</a> 用户配置（SSH配置）</h3>',16),v=a("h2",{id:"gitlab团队合作2",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#gitlab团队合作2","aria-hidden":"true"},"#"),n(" GitLab团队合作"),a("sup",null,"2")],-1),m=a("h2",{id:"参考文档",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#参考文档","aria-hidden":"true"},"#"),n(" 参考文档")],-1),k={href:"https://docs.gitlab.com/ee/security/reset_user_password.html#reset-your-root-password",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.jianshu.com/p/95991a646f72",target:"_blank",rel:"noopener noreferrer"};function g(_,f){const l=i("RouterLink"),e=i("ExternalLinkIcon");return r(),c("div",null,[b,a("p",null,[s(l,{to:"/deployment/tool_cvs_git.html#%E9%85%8D%E7%BD%AE-%E4%B8%8Egithub%E5%85%B3%E8%81%94"},{default:o(()=>[n("参考Github配置SSH Key")]),_:1})]),v,m,a("ol",null,[a("li",null,[a("a",k,[n("重置密码"),s(e)])]),a("li",null,[a("a",h,[n("Git+GitLab团队协作"),s(e)])])])])}const E=t(u,[["render",g],["__file","gitlab.html.vue"]]);export{E as default};
