(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{136:function(t,e,n){"use strict";n.r(e);var a=n(6),i=(n(0),n(141)),r=n(148);e.default=function(){return Object(a.jsx)(r.a,null,Object(a.jsx)("h1",null,"Hi from the second page"),Object(a.jsx)("p",null,"Welcome to page 2"),Object(a.jsx)(i.Link,{to:"/"},"Go back to the homepage"))}},140:function(t,e,n){"use strict";var a={black:"#111",blue:"#3785E3",lightBlue:"#80D7FA",red:"#EF8087",green:"#63CC9F",purple:"#9589F0"},i=n(146),r=n.n(i);n.d(e,"a",function(){return o}),n.d(e,"d",function(){return c}),n.d(e,"f",function(){return u}),n.d(e,"e",function(){return s}),n.d(e,"c",function(){return d}),n.d(e,"b",function(){return l});var o={margin:"0 auto",maxWidth:960,padding:"0px 32px 24px",paddingTop:0,"@media(max-width: 767px)":{padding:"0 24px 16px"}},c={padding:"24px 32px","@media(max-width: 767px)":{padding:"24px 16px"}},u={height:42,margin:0},s={listStyle:"none",float:"right","& li":{display:"inline-block",padding:"0 12px",lineHeight:"42px",":last-of-type":{paddingRight:0},"& a":{color:a.black,textDecoration:"none"}}},d={textAlign:"center",padding:"100px 32px 200px",background:"url("+r.a+") bottom no-repeat",backgroundSize:"100%","@media(max-width: 1024px)":{padding:"80px 32px 160px"},"@media(max-width: 767px)":{padding:"32px 16px 64px"},"& h1":{color:a.blue,marginBottom:"12px"}},l={textAlign:"center"}},141:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return b}),n.d(e,"StaticQueryContext",function(){return x}),n.d(e,"StaticQuery",function(){return f});var a=n(6),i=n(0),r=n.n(i),o=n(4),c=n.n(o),u=n(139),s=n.n(u);n.d(e,"Link",function(){return s.a}),n.d(e,"withPrefix",function(){return u.withPrefix}),n.d(e,"navigate",function(){return u.navigate}),n.d(e,"push",function(){return u.push}),n.d(e,"replace",function(){return u.replace}),n.d(e,"navigateTo",function(){return u.navigateTo});var d=n(142),l=n.n(d);n.d(e,"PageRenderer",function(){return l.a});var p=n(33);n.d(e,"parsePath",function(){return p.a});var x=r.a.createContext({}),f=function(t){return Object(a.jsx)(x.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):Object(a.jsx)("div",null,"Loading (StaticQuery)")})};function b(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},142:function(t,e,n){var a;t.exports=(a=n(144))&&a.default||a},143:function(t){t.exports={data:{site:{siteMetadata:{title:"InfinityCalcs"}}}}},144:function(t,e,n){"use strict";n.r(e);n(50);var a=n(0),i=n.n(a),r=n(4),o=n.n(r),c=n(51),u=n(2),s=function(t){var e=t.location,n=u.default.getResourcesForPathnameSync(e.pathname);return i.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};s.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=s},145:function(t,e,n){},146:function(t,e,n){t.exports=n.p+"static/header-bg-d89b9ea703c61048e3a8fbaf72ae9f48.png"},147:function(t,e,n){t.exports=n.p+"static/logo-b11e764a3d4a12bfb0c99e6ae725258e.png"},148:function(t,e,n){"use strict";var a=n(6),i=n(143),r=n(0),o=n.n(r),c=n(4),u=n.n(c),s=n(149),d=n.n(s),l=n(141),p=(n(145),n(140)),x=n(147),f=n.n(x),b=function(){return Object(a.jsx)("div",{css:p.d},Object(a.jsx)(l.Link,{to:"/"},Object(a.jsx)("img",{src:f.a,alt:"InfinityCalcs",css:p.f})),Object(a.jsx)("ul",{css:p.e},Object(a.jsx)("li",null,Object(a.jsx)(l.Link,{to:"/"},"Calculators")),Object(a.jsx)("li",null,Object(a.jsx)(l.Link,{to:"/"},"Forum")),Object(a.jsx)("li",null,Object(a.jsx)(l.Link,{to:"/"},"Blog")),Object(a.jsx)("li",null,Object(a.jsx)(l.Link,{to:"/"},"Games"))))},g=function(){return Object(a.jsx)("div",{css:p.b},"footer")},j=function(t){var e=t.children;return Object(a.jsx)(l.StaticQuery,{query:"755544856",render:function(t){return Object(a.jsx)(o.a.Fragment,null,Object(a.jsx)(d.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},Object(a.jsx)("html",{lang:"en"})),Object(a.jsx)(b,null),e,Object(a.jsx)(g,null))},data:i})};j.propTypes={children:u.a.node.isRequired};e.a=j}}]);
//# sourceMappingURL=component---src-pages-page-2-js-91ad47d5283c9833cdce.js.map