(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{145:function(t,e,s){"use strict";s.r(e),s.d(e,"query",function(){return b});s(172),s(173);var n=s(24),c=(s(168),s(167)),i=s.n(c),l=s(6),r=(s(0),s(153)),a=s(155),j=s(156),o=s(174),u=s(151);e.default=function(t){var e=t.data,s=i()(t,["data"]),c=e.allMarkdownRemark.edges.sort(function(t,e){return t.node.frontmatter.title.toLowerCase().localeCompare(e.node.frontmatter.title.toLowerCase())}),b=function(t){t.currentTarget.parentElement.classList.toggle("active")};return Object(l.jsx)(a.a,null,Object(l.jsx)(j.a,{title:"TI-84 Plus"},Object(l.jsx)("div",{css:Object(n.a)([u.k,u.g])},Object(l.jsx)("h2",null,"Getting Started"),Object(l.jsx)("p",{className:"body"},"TI-84 Plus is a versatile, powerful graphing calculator. Take a look at the guide below if you’re just starting out."),Object(l.jsx)("div",{css:u.j},Object(l.jsx)(r.Link,{css:Object(n.a)([u.w,u.f]),to:"/ti-84-plus/starters-guide"},"Starter's Guide"))),Object(l.jsx)("div",{css:Object(n.a)([u.k,u.g])},Object(l.jsx)("h2",null,"Where To Find…"),Object(l.jsx)(o.a,{path:s.location.pathname,terms:c})),Object(l.jsx)("div",{css:Object(n.a)([u.k,u.g])},Object(l.jsx)("h2",null,"Solving Math Problems"),Object(l.jsx)("ul",{css:u.x},Object(l.jsx)("li",null,Object(l.jsx)(r.Link,{to:""},"Pre-Algebra")),Object(l.jsx)("li",null,Object(l.jsx)(r.Link,{to:""},"Algebra")),Object(l.jsx)("li",null,Object(l.jsx)(r.Link,{to:""},"Geometry")),Object(l.jsx)("li",null,Object(l.jsx)(r.Link,{to:""},"Trigonometry")),Object(l.jsx)("li",null,Object(l.jsx)(r.Link,{to:""},"Calculus")),Object(l.jsx)("li",null,Object(l.jsx)(r.Link,{to:""},"Statistics")))),Object(l.jsx)("div",{css:Object(n.a)([u.k,u.g])},Object(l.jsx)("h2",null,"Programming"),Object(l.jsx)("div",{css:u.D},Object(l.jsx)("div",{className:"wrapper"},Object(l.jsx)("div",{onClick:b,className:"title"},"Mid-Point Formula"),Object(l.jsx)("div",{className:"definition"},Object(l.jsx)("p",null,"Formula"),Object(l.jsx)("p",null,"Youtube Video"))),Object(l.jsx)("div",{className:"wrapper"},Object(l.jsx)("div",{onClick:b,className:"title"},"Quadratic Formula"),Object(l.jsx)("div",{className:"definition"},Object(l.jsx)("p",null,"Formula"),Object(l.jsx)("p",null,"Youtube Video"))),Object(l.jsx)("div",{className:"wrapper"},Object(l.jsx)("div",{onClick:b,className:"title"},"Distance Formula"),Object(l.jsx)("div",{className:"definition"},Object(l.jsx)("p",null,"Formula"),Object(l.jsx)("p",null,"Youtube Video"))))),Object(l.jsx)("div",{css:Object(n.a)([u.k,u.g,u.C])},"ad goes here")))};var b="1319835524"},166:function(t,e,s){var n=s(26),c=s(25),i=s(27),l=/"/g,r=function(t,e,s,n){var c=String(i(t)),r="<"+e;return""!==s&&(r+=" "+s+'="'+String(n).replace(l,"&quot;")+'"'),r+">"+c+"</"+e+">"};t.exports=function(t,e){var s={};s[t]=e(r),n(n.P+n.F*c(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",s)}},172:function(t,e,s){"use strict";s(166)("bold",function(t){return function(){return t(this,"b","","")}})},173:function(t,e,s){"use strict";s(166)("link",function(t){return function(e){return t(this,"a","href",e)}})},174:function(t,e,s){"use strict";s(169),s(73);var n=s(8),c=s.n(n),i=s(52),l=s.n(i),r=s(6),a=s(0),j=s.n(a),o=s(153),u=s(151),b=function(t){function e(e){var s;return(s=t.call(this,e)||this).state={selected:"A"},s.setSelected=s.setSelected.bind(l()(l()(s))),s}c()(e,t);var s=e.prototype;return s.setSelected=function(t){this.setState(function(e){return{selected:t}})},s.render=function(){var t=this,e=this.props.path.split("/InfinityCalcs"),s=e[e.length-1],n="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),c=this.props.terms.filter(function(e){return e.node.frontmatter.title.toUpperCase().startsWith(t.state.selected)});return Object(r.jsx)(j.a.Fragment,null,Object(r.jsx)("div",{css:u.o},Object(r.jsx)("ul",null,n.map(function(e,s){return Object(r.jsx)("li",{key:s}," ",Object(r.jsx)("span",{css:t.state.selected===e?u.F:{},onClick:function(s){return t.setSelected(e)}},e)," |")}),Object(r.jsx)("li",{css:u.H}," ",Object(r.jsx)(o.Link,{to:s+"/where-to-find/"},"See all")))),Object(r.jsx)("div",{css:u.m},Object(r.jsx)("p",null,this.state.selected),Object(r.jsx)("ul",null,c.length?c.map(function(t,e){return Object(r.jsx)("li",{key:e},Object(r.jsx)(o.Link,{to:s+"where-to-find/"+t.node.frontmatter.title.toLowerCase()[0]+"/"+t.node.frontmatter.title.toLowerCase()},t.node.frontmatter.title))}):"No terms found.")))},e}(j.a.Component);e.a=b}}]);
//# sourceMappingURL=component---src-pages-ti-84-plus-js-af8c7ce81358d974b262.js.map