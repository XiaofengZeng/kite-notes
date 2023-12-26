import{_ as n}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as s,c as a,e as t}from"./app-S7AmktQN.js";const p={},e=t(`<h1 id="节流-防抖" tabindex="-1"><a class="header-anchor" href="#节流-防抖" aria-hidden="true">#</a> 节流&amp;防抖</h1><p>节流和防抖主要是为了优化前端的因多次回调导致性能下降问题以及减少后端请求处理压力。常用于短时间内触发重复事件的处理逻辑。</p><p><strong>节流</strong>：在一定时间内只发起第一次调用，之后的具体时间段内，无视对其回调函数重复调用</p><p><strong>防抖</strong>：在计时开始/结束后调用，若在一定时间内重复触发，则重新计时，直到最后一次调用</p><h2 id="节流" tabindex="-1"><a class="header-anchor" href="#节流" aria-hidden="true">#</a> 节流</h2><p>节流有三种实现方式，<strong>时间戳</strong>、<strong>定时器</strong>以及<strong>两者的结合</strong></p><p>常见场景：</p><ol><li>事件回调处理，如鼠标移动事件<code>mousemove</code>、窗口大小改变事件<code>resize</code></li></ol><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 时间戳实现节流
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">fn</span> 回调函数
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Number<span class="token punctuation">}</span></span> <span class="token parameter">delay</span> 允许时长
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> 
 */</span>
<span class="token keyword">function</span> <span class="token function">throttleByTimeStamp</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> timeOld <span class="token operator">=</span> <span class="token operator">+</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> timeNew <span class="token operator">=</span> <span class="token operator">+</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>timeNew <span class="token operator">-</span> timeOld <span class="token operator">&gt;=</span> delay<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
      timeOld <span class="token operator">=</span> <span class="token operator">+</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 计时器实现节流
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">fn</span> 回调函数
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Number<span class="token punctuation">}</span></span> <span class="token parameter">delay</span> 允许时长
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">throttleByTimer</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>timer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      timer <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> arguments<span class="token punctuation">)</span><span class="token punctuation">;</span>
        timer <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span>
  <span class="token string">&quot;mousemove&quot;</span><span class="token punctuation">,</span>
  <span class="token comment">// 测试-时间戳实现</span>
  <span class="token comment">// throttleByTimeStamp(function (res) {</span>
  <span class="token comment">//   console.log(+Date.now());</span>
  <span class="token comment">// }, 1000)</span>
  <span class="token comment">// 测试-定时器实现</span>
  <span class="token function">throttleByTimer</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token operator">+</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span>
<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="防抖" tabindex="-1"><a class="header-anchor" href="#防抖" aria-hidden="true">#</a> 防抖</h2><p><u>防抖主要应用在一些经过连续操作结束后，只处理一次回调的场景，如<code>&lt;input&gt;</code>或<code>&lt;button&gt;</code>处理。</u></p><p>常见场景：</p><ol><li>搜索输入框的动态索引（如谷歌搜索引擎）</li><li>重复点击提交表单按钮</li></ol><p>主要的实现方式是使用<strong>定时器</strong>，但有时候也会出现<strong>防抖需要立即执行</strong>的情况</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token doc-comment comment">/**
 * 延迟执行
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">fn</span> 回调函数
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Number<span class="token punctuation">}</span></span> <span class="token parameter">delay</span> 延迟时长
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">debounce</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> timeout <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> ctx <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> args <span class="token operator">=</span> arguments<span class="token punctuation">;</span>
    <span class="token comment">// 每次出发回调就会清除掉上一次的计时器，并重新定义生成器</span>
    <span class="token function">clearTimeout</span><span class="token punctuation">(</span>timeout<span class="token punctuation">)</span><span class="token punctuation">;</span>

    timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token doc-comment comment">/**
 * 立即执行
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span> <span class="token parameter">fn</span> 回调函数
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Number<span class="token punctuation">}</span></span> <span class="token parameter">delay</span> 延迟时长
 * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>Boolean<span class="token punctuation">}</span></span> <span class="token parameter">immediate</span> 是否立即执行
 * <span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>Function<span class="token punctuation">}</span></span>
 */</span>
<span class="token keyword">function</span> <span class="token function">debounceImmediate</span><span class="token punctuation">(</span><span class="token parameter">fn<span class="token punctuation">,</span> delay<span class="token punctuation">,</span> immediate</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">var</span> timeout <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> ctx <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token keyword">var</span> args <span class="token operator">=</span> arguments<span class="token punctuation">;</span>

    <span class="token comment">// 清除掉上一次的计时器</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>timeout<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token function">clearTimeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>immediate<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">var</span> callNow <span class="token operator">=</span> <span class="token operator">!</span>timeout<span class="token punctuation">;</span> <span class="token comment">// timeout为空则立即执行</span>
      <span class="token comment">// 随后将计时器置空（重新开始）</span>
      timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        timeout <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>

      <span class="token keyword">if</span> <span class="token punctuation">(</span>callNow<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      timeout <span class="token operator">=</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">fn</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>ctx<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> delay<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="两者的联系与区别" tabindex="-1"><a class="header-anchor" href="#两者的联系与区别" aria-hidden="true">#</a> 两者的联系与区别</h2><p>联系：</p><ol><li>节流和防抖都是为了减轻前端处理性能压力（回调函数的执行频率），节省资源开销</li><li>节流和防抖都可以通过<code>setTimeout</code>实现</li></ol><p>区别：</p><ol><li>节流：在一段时间内的连续操作，只执行一次回调</li><li>防抖：在一段时间内的连续操作，只执行最后一次回调（通过<code>setTimeout</code>和<code>clearTimeout</code>实现）</li></ol>`,20),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","throttle-and-debounce.html.vue"]]);export{r as default};
