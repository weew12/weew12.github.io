import{_ as t,c as a,a as n,o as e}from"./app-9J9DI928.js";const i={};function o(p,s){return e(),a("div",null,[...s[0]||(s[0]=[n(`<div class="language-md" data-highlighter="shiki" data-ext="md" style="--shiki-light:#24292e;--shiki-dark:#babed8;--shiki-light-bg:#fff;--shiki-dark-bg:#0F111A;"><pre class="shiki shiki-themes github-light material-theme-ocean vp-code"><code class="language-md"><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#C3E88D;">\`\`\`</span><span style="--shiki-light:#24292E;--shiki-dark:#BABED890;">c4c</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BABED890;">title System Context diagram for Internet Banking System</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BABED890;">Person(customerA, &quot;Banking Customer A&quot;, &quot;A customer of the bank, with personal bank accounts.&quot;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BABED890;">Person(customerB, &quot;Banking Customer B&quot;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BABED890;">Person_Ext(customerC, &quot;Banking Customer C&quot;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BABED890;">System(SystemAA, &quot;Internet Banking System&quot;, &quot;Allows customers to view information about their bank accounts, and make payments.&quot;)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BABED890;">Person(customerD, &quot;Banking Customer D&quot;, &quot;A customer of the bank, &lt;br/&gt; with personal bank accounts.&quot;)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BABED890;">Enterprise_Boundary(b1, &quot;BankBoundary&quot;) {</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BABED890;">  SystemDb_Ext(SystemE, &quot;Mainframe Banking System&quot;, &quot;Stores all of the core banking information about customers, accounts, transactions, etc.&quot;)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BABED890;">  System_Boundary(b2, &quot;BankBoundary2&quot;) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BABED890;">    System(SystemA, &quot;Banking System A&quot;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BABED890;">    System(SystemB, &quot;Banking System B&quot;, &quot;A system of the bank, with personal bank accounts.&quot;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BABED890;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BABED890;">  System_Ext(SystemC, &quot;E-mail system&quot;, &quot;The internal Microsoft Exchange e-mail system.&quot;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BABED890;">  SystemDb(SystemD, &quot;Banking System D Database&quot;, &quot;A system of the bank, with personal bank accounts.&quot;)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BABED890;">  Boundary(b3, &quot;BankBoundary3&quot;, &quot;boundary&quot;) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BABED890;">    SystemQueue(SystemF, &quot;Banking System F Queue&quot;, &quot;A system of the bank, with personal bank accounts.&quot;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BABED890;">    SystemQueue_Ext(SystemG, &quot;Banking System G Queue&quot;, &quot;A system of the bank, with personal bank accounts.&quot;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BABED890;">  }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BABED890;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BABED890;">BiRel(customerA, SystemAA, &quot;Uses&quot;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BABED890;">BiRel(SystemAA, SystemE, &quot;Uses&quot;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BABED890;">Rel(SystemAA, SystemC, &quot;Sends e-mails&quot;, &quot;SMTP&quot;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#BABED890;">Rel(SystemC, customerA, &quot;Sends e-mails to&quot;)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#C3E88D;">\`\`\`</span></span></code></pre></div>`,1)])])}const r=t(i,[["render",o]]),h=JSON.parse('{"path":"/article/03pk4s3r/","title":"mermaid-9.snippet","lang":"zh-CN","frontmatter":{"title":"mermaid-9.snippet","createTime":"2025/08/21 13:12:11","permalink":"/article/03pk4s3r/","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"mermaid-9.snippet\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-08-21T14:28:54.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://weew12.github.io/article/03pk4s3r/"}],["meta",{"property":"og:site_name","content":"WEEW12 BLOG"}],["meta",{"property":"og:title","content":"mermaid-9.snippet"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-08-21T14:28:54.000Z"}],["meta",{"property":"article:modified_time","content":"2025-08-21T14:28:54.000Z"}]]},"readingTime":{"minutes":0.67,"words":201},"git":{"createdTime":1755786534000,"updatedTime":1755786534000,"contributors":[{"name":"weew12","username":"weew12","email":"2528566339@qq.com","commits":1,"avatar":"https://avatars.githubusercontent.com/weew12?v=4","url":"https://github.com/weew12"}]},"filePathRelative":"notes/theme/snippet/mermaid-9.snippet.md","headers":[],"categoryList":[{"id":"4358b5","sort":10000,"name":"notes"},{"id":"1cb5bd","sort":10001,"name":"theme"},{"id":"b44d42","sort":10002,"name":"snippet"}]}');export{r as comp,h as data};
