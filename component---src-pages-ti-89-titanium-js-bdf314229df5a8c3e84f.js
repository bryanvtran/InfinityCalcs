(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{159:function(t,e,n){"use strict";n.r(e),n.d(e,"query",function(){return b});n(174),n(175);var s=n(28),i=(n(166),n(171)),c=n.n(i),r=n(10),l=(n(0),n(165)),a=n(169),o=n(164),u=n(176),j=n(163);e.default=function(t){var e=t.data,n=c()(t,["data"]),i=e.allMarkdownRemark.edges.sort(function(t,e){return t.node.frontmatter.title.toLowerCase().localeCompare(e.node.frontmatter.title.toLowerCase())}),b=function(t){t.currentTarget.parentElement.classList.toggle("active")};return Object(r.jsx)(a.a,null,Object(r.jsx)(o.a,{title:"TI-89 Titanium"},Object(r.jsx)("div",{css:Object(s.a)([j.k,j.g])},Object(r.jsx)("h2",null,"Getting Started"),Object(r.jsx)("p",{className:"body"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),Object(r.jsx)("div",{css:j.j},Object(r.jsx)(l.Link,{css:Object(s.a)([j.z,j.f]),to:"/ti-89-titanium/starters-guide"},"Starter's Guide"))),Object(r.jsx)("div",{css:Object(s.a)([j.k,j.g])},Object(r.jsx)("h2",null,"Where To Find…"),Object(r.jsx)(u.a,{path:n.location.pathname,terms:i})),Object(r.jsx)("div",{css:Object(s.a)([j.k,j.g])},Object(r.jsx)("h2",null,"Solving Math Problems"),Object(r.jsx)("ul",{css:j.A},Object(r.jsx)("li",null,Object(r.jsx)(l.Link,{to:""},"Pre-Algebra")),Object(r.jsx)("li",null,Object(r.jsx)(l.Link,{to:""},"Algebra")),Object(r.jsx)("li",null,Object(r.jsx)(l.Link,{to:""},"Geometry")),Object(r.jsx)("li",null,Object(r.jsx)(l.Link,{to:""},"Trigonometry")),Object(r.jsx)("li",null,Object(r.jsx)(l.Link,{to:""},"Calculus")),Object(r.jsx)("li",null,Object(r.jsx)(l.Link,{to:""},"Statistics")))),Object(r.jsx)("div",{css:Object(s.a)([j.k,j.g])},Object(r.jsx)("h2",null,"Programming"),Object(r.jsx)("div",{css:j.J},Object(r.jsx)("div",{className:"wrapper"},Object(r.jsx)("div",{onClick:b,className:"title"},"Mid-Point Formula"),Object(r.jsx)("div",{className:"definition"},Object(r.jsx)("p",null,"Formula"),Object(r.jsx)("p",null,"Youtube Video"))),Object(r.jsx)("div",{className:"wrapper"},Object(r.jsx)("div",{onClick:b,className:"title"},"Quadratic Formula"),Object(r.jsx)("div",{className:"definition"},Object(r.jsx)("p",null,"Formula"),Object(r.jsx)("p",null,"Youtube Video"))),Object(r.jsx)("div",{className:"wrapper"},Object(r.jsx)("div",{onClick:b,className:"title"},"Distance Formula"),Object(r.jsx)("div",{className:"definition"},Object(r.jsx)("p",null,"Formula"),Object(r.jsx)("p",null,"Youtube Video"))))),Object(r.jsx)("div",{css:Object(s.a)([j.k,j.g,j.I])},"ad goes here")))};var b="1339860150"},164:function(t,e,n){"use strict";var s=n(10),i=n(0),c=n.n(i),r=n(4),l=n.n(r),a=n(163),o=function(t){var e=t.title,n=t.children;return Object(s.jsx)(c.a.Fragment,null,Object(s.jsx)("div",{css:a.h},Object(s.jsx)("h1",null,e)),n)};o.propTypes={title:l.a.string.isRequired,children:l.a.node.isRequired},e.a=o},166:function(t,e,n){"use strict";var s=n(14),i=n(29),c=n(30),r=n(27),l=[].sort,a=[1,2,3];s(s.P+s.F*(r(function(){a.sort(void 0)})||!r(function(){a.sort(null)})||!n(167)(l)),"Array",{sort:function(t){return void 0===t?l.call(c(this)):l.call(c(this),i(t))}})},167:function(t,e,n){"use strict";var s=n(27);t.exports=function(t,e){return!!t&&s(function(){e?t.call(null,function(){},1):t.call(null)})}},168:function(t,e,n){"use strict";var s=n(14),i=n(17),c=n(80),r="".startsWith;s(s.P+s.F*n(81)("startsWith"),"String",{startsWith:function(t){var e=c(this,t,"startsWith"),n=i(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),s=String(t);return r?r.call(e,s,n):e.slice(n,n+s.length)===s}})},170:function(t,e,n){var s=n(14),i=n(27),c=n(19),r=/"/g,l=function(t,e,n,s){var i=String(c(t)),l="<"+e;return""!==n&&(l+=" "+n+'="'+String(s).replace(r,"&quot;")+'"'),l+">"+i+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(l),s(s.P+s.F*i(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},174:function(t,e,n){"use strict";n(170)("bold",function(t){return function(){return t(this,"b","","")}})},175:function(t,e,n){"use strict";n(170)("link",function(t){return function(e){return t(this,"a","href",e)}})},176:function(t,e,n){"use strict";n(168),n(82);var s=n(8),i=n.n(s),c=n(56),r=n.n(c),l=n(10),a=n(0),o=n.n(a),u=n(165),j=n(163),b=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={selected:"A"},n.setSelected=n.setSelected.bind(r()(r()(n))),n}i()(e,t);var n=e.prototype;return n.setSelected=function(t){this.setState(function(e){return{selected:t}})},n.render=function(){var t=this,e=this.props.path.split("/InfinityCalcs"),n=e[e.length-1],s="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),i=this.props.terms.filter(function(e){return e.node.frontmatter.title.toUpperCase().startsWith(t.state.selected)});return Object(l.jsx)(o.a.Fragment,null,Object(l.jsx)("div",{css:j.o},Object(l.jsx)("ul",null,s.map(function(e,n){return Object(l.jsx)("li",{key:n}," ",Object(l.jsx)("span",{css:t.state.selected===e?j.L:{},onClick:function(n){return t.setSelected(e)}},e)," |")}),Object(l.jsx)("li",{css:j.N}," ",Object(l.jsx)(u.Link,{to:n+"/where-to-find/"},"See all")))),Object(l.jsx)("div",{css:j.m},Object(l.jsx)("p",null,this.state.selected),Object(l.jsx)("ul",null,i.length?i.map(function(t,e){return Object(l.jsx)("li",{key:e},Object(l.jsx)(u.Link,{to:n+"where-to-find/"+t.node.frontmatter.title.toLowerCase()[0]+"/"+t.node.frontmatter.title.toLowerCase()},t.node.frontmatter.title))}):"No terms found.")))},e}(o.a.Component);e.a=b}}]);
//# sourceMappingURL=component---src-pages-ti-89-titanium-js-bdf314229df5a8c3e84f.js.map