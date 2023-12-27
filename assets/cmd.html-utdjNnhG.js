import{_ as s}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as n,e}from"./app-5hxSoQGh.js";const t="/kite-notes/assets/linux-file-GIby6pQG.jpg",l={},o=e(`<h1 id="常用操作" tabindex="-1"><a class="header-anchor" href="#常用操作" aria-hidden="true">#</a> 常用操作</h1><h2 id="基本操作语法" tabindex="-1"><a class="header-anchor" href="#基本操作语法" aria-hidden="true">#</a> 基本操作语法</h2><ul><li><code>&amp;</code> 表示衔接操作，完成<u>操作符前</u>的指令后立即操作后续衔接的指令</li><li><code>|</code> 表示管道操作符，用于将该<u>操作符前</u>的操作返回结果作为<u>操作符后</u>的输入</li></ul><h2 id="用户-组操作" tabindex="-1"><a class="header-anchor" href="#用户-组操作" aria-hidden="true">#</a> 用户/组操作</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 添加组</span>
<span class="token comment"># groupadd &lt;opt&gt; &lt;group&gt;</span>
<span class="token comment"># -g：指定用户组ID</span>
<span class="token function">groupadd</span> <span class="token parameter variable">-g</span> <span class="token operator">&lt;</span>gid<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>group<span class="token operator">&gt;</span>

<span class="token comment"># 添加用户</span>
<span class="token comment"># useradd &lt;opt&gt; &lt;user&gt;</span>
<span class="token comment"># -u：用户，指定用户ID</span>
<span class="token comment"># -g：用户组，指定用户组ID</span>
<span class="token comment"># -m：用户主目录</span>
<span class="token function">useradd</span> <span class="token parameter variable">-m</span> <span class="token operator">&lt;</span>mainDir<span class="token operator">&gt;</span> <span class="token parameter variable">-u</span> <span class="token operator">&lt;</span>uid<span class="token operator">&gt;</span> <span class="token parameter variable">-g</span> <span class="token operator">&lt;</span>gid<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>user<span class="token operator">&gt;</span>

<span class="token comment"># 用户附加组</span>
<span class="token comment"># -G: 修改用户所属的附加群组</span>
<span class="token function">usermod</span> <span class="token parameter variable">-G</span> <span class="token operator">&lt;</span>group<span class="token operator"><span class="token file-descriptor important">1</span>&gt;</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>group<span class="token operator"><span class="token file-descriptor important">2</span>&gt;</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span>

<span class="token comment"># 删除组</span>
<span class="token function">groupdel</span> <span class="token operator">&lt;</span>group<span class="token operator">&gt;</span>

<span class="token comment"># 删除用户</span>
<span class="token function">userdel</span> <span class="token operator">&lt;</span>user<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文件操作" tabindex="-1"><a class="header-anchor" href="#文件操作" aria-hidden="true">#</a> 文件操作</h2><h3 id="创建目录" tabindex="-1"><a class="header-anchor" href="#创建目录" aria-hidden="true">#</a> 创建目录</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># -p 表示如果不存在在新建</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> <span class="token operator">&lt;</span>dirName<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建文件" tabindex="-1"><a class="header-anchor" href="#创建文件" aria-hidden="true">#</a> 创建文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 单纯新建文件</span>
<span class="token function">touch</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>

<span class="token comment"># 输出指定内容并新建</span>
<span class="token comment"># &gt;：表示如果现有文件已经存在则覆盖</span>
<span class="token builtin class-name">echo</span> <span class="token operator">&lt;</span>content<span class="token operator">&gt;</span> <span class="token operator">&gt;</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>
<span class="token function">cat</span> <span class="token operator">&gt;</span> <span class="token operator">&lt;</span>file<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="目录-文件授权" tabindex="-1"><a class="header-anchor" href="#目录-文件授权" aria-hidden="true">#</a> 目录/文件授权</h3><figure><img src="`+t+`" alt="文件权限" tabindex="0" loading="lazy"><figcaption>文件权限</figcaption></figure><ul><li><p>文件类型（file-type）：</p><ul><li><code>d</code> -&gt; 目录</li><li><code>-</code> -&gt; 文件</li><li><code>l</code> -&gt; 表示为链接文档(link file)</li><li><code>b</code> -&gt; 表示为装置文件里面的可供储存的接口设备(可随机存取装置)</li><li><code>c</code> -&gt; 表示为装置文件里面的串行端口设备，例如键盘、鼠标(一次性读取装置)</li></ul></li><li><p>rwx对照表：</p><ul><li><code>r</code> -&gt; readable，权重值为<code>4</code></li><li><code>w</code> -&gt; writeable，权重值为<code>2</code></li><li><code>x</code> -&gt; executable，权重值为<code>1</code></li></ul></li></ul><table><thead><tr><th>value</th><th style="text-align:center;">permission</th><th style="text-align:center;">detail</th></tr></thead><tbody><tr><td>1</td><td style="text-align:center;">x</td><td style="text-align:center;">执行</td></tr><tr><td>2</td><td style="text-align:center;">w</td><td style="text-align:center;">写入</td></tr><tr><td>3</td><td style="text-align:center;">-wx</td><td style="text-align:center;">写入+执行</td></tr><tr><td>4</td><td style="text-align:center;">r</td><td style="text-align:center;">读取</td></tr><tr><td>5</td><td style="text-align:center;">r-x</td><td style="text-align:center;">读取+执行</td></tr><tr><td>6</td><td style="text-align:center;">rw-</td><td style="text-align:center;">读取+写入</td></tr><tr><td>7</td><td style="text-align:center;">rwx</td><td style="text-align:center;">读取+写入+执行</td></tr></tbody></table><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 目录/文件赋予权限</span>
<span class="token comment"># 修改目录/文件所属用户与组</span>
<span class="token comment"># -R: 表示递归设置</span>
<span class="token function">chown</span> <span class="token operator">&lt;</span>user<span class="token operator">&gt;</span><span class="token punctuation">[</span>:<span class="token operator">&lt;</span>group<span class="token operator">&gt;</span><span class="token punctuation">]</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>dirName<span class="token operator">&gt;|</span><span class="token operator">&lt;</span>fileName<span class="token operator">&gt;</span><span class="token punctuation">]</span>

<span class="token comment"># 修改目录/文件权限</span>
<span class="token function">chmod</span> <span class="token operator">&lt;</span>permssion<span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>dirName<span class="token operator">&gt;|</span><span class="token operator">&lt;</span>fileName<span class="token operator">&gt;</span><span class="token punctuation">]</span>
<span class="token comment"># chmod 755 file.txt</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看系统进程情况" tabindex="-1"><a class="header-anchor" href="#查看系统进程情况" aria-hidden="true">#</a> 查看系统进程情况</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看进程是否存在（可获取进程号）</span>
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> <span class="token punctuation">[</span><span class="token operator">&lt;</span>key<span class="token operator">&gt;|</span><span class="token operator">&lt;</span>port<span class="token operator">&gt;</span><span class="token punctuation">..</span>.<span class="token punctuation">]</span>

<span class="token comment"># 杀死进程</span>
<span class="token function">kill</span> <span class="token parameter variable">-9</span> <span class="token operator">&lt;</span>pid<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="查看机器硬件使用情况" tabindex="-1"><a class="header-anchor" href="#查看机器硬件使用情况" aria-hidden="true">#</a> 查看机器硬件使用情况</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看内存（内存总量+内存使用量+内存使用率）</span>
<span class="token comment"># free -k：以kb为单位，查看内存使使用情况</span>
<span class="token comment"># sed -n &#39;2p&#39;：流编辑器，只输出第二行（输出那些匹配的行）</span>
<span class="token comment"># awk &#39;{print $2}&#39;：每行按空格或TAB分割，输出文本中的第二项</span>
<span class="token function">free</span> <span class="token parameter variable">-k</span> <span class="token operator">|</span> <span class="token function">sed</span> <span class="token parameter variable">-n</span> <span class="token string">&#39;2p&#39;</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{print &quot;total: &quot;$2&quot; KB, used: &quot;$3&quot; KB,used percent: &quot;$3*100/$2&quot;%&quot;}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="防火墙的启动与停止" tabindex="-1"><a class="header-anchor" href="#防火墙的启动与停止" aria-hidden="true">#</a> 防火墙的启动与停止</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看防火墙状态 </span>
systemctl status firewalld

<span class="token comment"># 开启防火墙 </span>
systemctl start firewalld  

<span class="token comment"># 关闭防火墙</span>
systemctl stop firewalld
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="端口检查-开放-关闭" tabindex="-1"><a class="header-anchor" href="#端口检查-开放-关闭" aria-hidden="true">#</a> 端口检查/开放/关闭</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看端口是否开放</span>
<span class="token comment"># port: 表示端口号</span>
firewall-cmd --query-port<span class="token operator">=</span><span class="token operator">&lt;</span>port<span class="token operator">&gt;</span>/tcp

<span class="token comment"># 添加指定开放端口(永久开放)</span>
<span class="token comment"># port: 表示端口号</span>
firewall-cmd --add-port<span class="token operator">=</span><span class="token operator">&lt;</span>port<span class="token operator">&gt;</span>/tcp <span class="token parameter variable">--permanent</span>

<span class="token comment"># 移除指定开放端口(永久关闭)</span>
<span class="token comment"># port: 表示端口号</span>
firewall-cmd --remove-port<span class="token operator">=</span><span class="token operator">&lt;</span>port<span class="token operator">&gt;</span>/tcp <span class="token parameter variable">--permanent</span>

<span class="token comment"># 端口设置生效</span>
firewall-cmd <span class="token parameter variable">--reload</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),i=[o];function r(p,c){return a(),n("div",null,i)}const u=s(l,[["render",r],["__file","cmd.html.vue"]]);export{u as default};
