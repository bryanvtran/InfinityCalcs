(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{159:function(t,e,s){"use strict";s.r(e),s.d(e,"query",function(){return b});s(184),s(185);var n=s(27),i=(s(180),s(179)),c=s.n(i),r=s(10),l=(s(0),s(165)),a=s(167),j=s(168),o=s(186),u=s(163);e.default=function(t){var e=t.data,s=c()(t,["data"]),i=e.allMarkdownRemark.edges.sort(function(t,e){return t.node.frontmatter.title.toLowerCase().localeCompare(e.node.frontmatter.title.toLowerCase())}),b=function(t){t.currentTarget.parentElement.classList.toggle("active")};return Object(r.jsx)(a.a,null,Object(r.jsx)(j.a,{title:"TI-89 Titanium"},Object(r.jsx)("div",{css:Object(n.a)([u.k,u.g])},Object(r.jsx)("h2",null,"Getting Started"),Object(r.jsx)("p",{className:"body"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),Object(r.jsx)("div",{css:u.j},Object(r.jsx)(l.Link,{css:Object(n.a)([u.w,u.f]),to:"/ti-89-titanium/starters-guide"},"Starter's Guide"))),Object(r.jsx)("div",{css:Object(n.a)([u.k,u.g])},Object(r.jsx)("h2",null,"Where To Find…"),Object(r.jsx)(o.a,{path:s.location.pathname,terms:i})),Object(r.jsx)("div",{css:Object(n.a)([u.k,u.g])},Object(r.jsx)("h2",null,"Solving Math Problems"),Object(r.jsx)("ul",{css:u.x},Object(r.jsx)("li",null,Object(r.jsx)(l.Link,{to:""},"Pre-Algebra")),Object(r.jsx)("li",null,Object(r.jsx)(l.Link,{to:""},"Algebra")),Object(r.jsx)("li",null,Object(r.jsx)(l.Link,{to:""},"Geometry")),Object(r.jsx)("li",null,Object(r.jsx)(l.Link,{to:""},"Trigonometry")),Object(r.jsx)("li",null,Object(r.jsx)(l.Link,{to:""},"Calculus")),Object(r.jsx)("li",null,Object(r.jsx)(l.Link,{to:""},"Statistics")))),Object(r.jsx)("div",{css:Object(n.a)([u.k,u.g])},Object(r.jsx)("h2",null,"Programming"),Object(r.jsx)("div",{css:u.D},Object(r.jsx)("div",{className:"wrapper"},Object(r.jsx)("div",{onClick:b,className:"title"},"Mid-Point Formula"),Object(r.jsx)("div",{className:"definition"},Object(r.jsx)("p",null,"Formula"),Object(r.jsx)("p",null,"Youtube Video"))),Object(r.jsx)("div",{className:"wrapper"},Object(r.jsx)("div",{onClick:b,className:"title"},"Quadratic Formula"),Object(r.jsx)("div",{className:"definition"},Object(r.jsx)("p",null,"Formula"),Object(r.jsx)("p",null,"Youtube Video"))),Object(r.jsx)("div",{className:"wrapper"},Object(r.jsx)("div",{onClick:b,className:"title"},"Distance Formula"),Object(r.jsx)("div",{className:"definition"},Object(r.jsx)("p",null,"Formula"),Object(r.jsx)("p",null,"Youtube Video"))))),Object(r.jsx)("div",{css:Object(n.a)([u.k,u.g,u.C])},"ad goes here")))};var b="1339860150"},178:function(t,e,s){var n=s(14),i=s(28),c=s(19),r=/"/g,l=function(t,e,s,n){var i=String(c(t)),l="<"+e;return""!==s&&(l+=" "+s+'="'+String(n).replace(r,"&quot;")+'"'),l+">"+i+"</"+e+">"};t.exports=function(t,e){var s={};s[t]=e(l),n(n.P+n.F*i(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",s)}},184:function(t,e,s){"use strict";s(178)("bold",function(t){return function(){return t(this,"b","","")}})},185:function(t,e,s){"use strict";s(178)("link",function(t){return function(e){return t(this,"a","href",e)}})},186:function(t,e,s){"use strict";s(181),s(80);var n=s(8),i=s.n(n),c=s(57),r=s.n(c),l=s(10),a=s(0),j=s.n(a),o=s(165),u=s(163),b=function(t){function e(e){var s;return(s=t.call(this,e)||this).state={selected:"A"},s.setSelected=s.setSelected.bind(r()(r()(s))),s}i()(e,t);var s=e.prototype;return s.setSelected=function(t){this.setState(function(e){return{selected:t}})},s.render=function(){var t=this,e=this.props.path.split("/InfinityCalcs"),s=e[e.length-1],n="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),i=this.props.terms.filter(function(e){return e.node.frontmatter.title.toUpperCase().startsWith(t.state.selected)});return Object(l.jsx)(j.a.Fragment,null,Object(l.jsx)("div",{css:u.o},Object(l.jsx)("ul",null,n.map(function(e,s){return Object(l.jsx)("li",{key:s}," ",Object(l.jsx)("span",{css:t.state.selected===e?u.F:{},onClick:function(s){return t.setSelected(e)}},e)," |")}),Object(l.jsx)("li",{css:u.H}," ",Object(l.jsx)(o.Link,{to:s+"/where-to-find/"},"See all")))),Object(l.jsx)("div",{css:u.m},Object(l.jsx)("p",null,this.state.selected),Object(l.jsx)("ul",null,i.length?i.map(function(t,e){return Object(l.jsx)("li",{key:e},Object(l.jsx)(o.Link,{to:s+"/where-to-find/"+t.node.frontmatter.title[0]+"/"+t.node.frontmatter.title},t.node.frontmatter.title))}):"No terms found.")))},e}(j.a.Component);e.a=b}}]);
//# sourceMappingURL=component---src-pages-ti-89-titanium-js-6ca46475c1b69b706060.js.map