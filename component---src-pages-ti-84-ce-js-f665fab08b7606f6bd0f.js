(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{155:function(t,e,s){"use strict";s.r(e),s.d(e,"query",function(){return x});s(174),s(175);var n=s(28),i=(s(166),s(171)),c=s.n(i),r=s(10),l=(s(0),s(165)),a=s(169),o=s(164),u=s(176),j=s(163),d=s(196),b=s.n(d),O={height:50,width:"auto"};e.default=function(t){var e=t.data,s=c()(t,["data"]),i=e.allMarkdownRemark.edges.sort(function(t,e){return t.node.frontmatter.title.toLowerCase().localeCompare(e.node.frontmatter.title.toLowerCase())}),d=function(t){t.currentTarget.parentElement.classList.toggle("active")};return Object(r.jsx)(a.a,null,Object(r.jsx)(o.a,{title:"TI-84 CE"},Object(r.jsx)("div",{css:Object(n.a)([j.k,j.g])},Object(r.jsx)("h2",null,"Getting Started"),Object(r.jsx)("p",{className:"body"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),Object(r.jsx)("div",{css:j.j},Object(r.jsx)(l.Link,{css:Object(n.a)([j.z,j.f]),to:"/ti-84-ce/starters-guide"},"Starter's Guide"))),Object(r.jsx)("div",{css:Object(n.a)([j.k,j.g])},Object(r.jsx)("h2",null,"Where To Find…"),Object(r.jsx)(u.a,{path:s.location.pathname,terms:i})),Object(r.jsx)("div",{css:Object(n.a)([j.k,j.g])},Object(r.jsx)("h2",null,"Solving Math Problems"),Object(r.jsx)("ul",{css:j.A},Object(r.jsx)("li",null,Object(r.jsx)(l.Link,{to:""},"Pre-Algebra")),Object(r.jsx)("li",null,Object(r.jsx)(l.Link,{to:""},"Algebra")),Object(r.jsx)("li",null,Object(r.jsx)(l.Link,{to:""},"Geometry")),Object(r.jsx)("li",null,Object(r.jsx)(l.Link,{to:""},"Trigonometry")),Object(r.jsx)("li",null,Object(r.jsx)(l.Link,{to:""},"Calculus")),Object(r.jsx)("li",null,Object(r.jsx)(l.Link,{to:""},"Statistics")))),Object(r.jsx)("div",{css:Object(n.a)([j.k,j.g])},Object(r.jsx)("h2",null,"Programming"),Object(r.jsx)("div",{css:j.J},Object(r.jsx)("div",{className:"wrapper"},Object(r.jsx)("div",{onClick:d,className:"title"},"Mid-Point Formula"),Object(r.jsx)("div",{className:"definition"},Object(r.jsx)("p",null,"Formula"),Object(r.jsx)("p",null,"Youtube Video"))),Object(r.jsx)("div",{className:"wrapper"},Object(r.jsx)("div",{onClick:d,className:"title"},"Quadratic Formula"),Object(r.jsx)("div",{className:"definition"},Object(r.jsx)("p",null,"Formula"),Object(r.jsx)("p",null,"Youtube Video"))),Object(r.jsx)("div",{className:"wrapper"},Object(r.jsx)("div",{onClick:d,className:"title"},"Distance Formula"),Object(r.jsx)("div",{className:"definition"},Object(r.jsx)("p",null,Object(r.jsx)("img",{css:O,src:b.a})),Object(r.jsx)("p",null,"Youtube Video"))))),Object(r.jsx)("div",{css:Object(n.a)([j.k,j.g,j.I])},"ad goes here")))};var x="323228988"},164:function(t,e,s){"use strict";var n=s(10),i=s(0),c=s.n(i),r=s(4),l=s.n(r),a=s(163),o=function(t){var e=t.title,s=t.children;return Object(n.jsx)(c.a.Fragment,null,Object(n.jsx)("div",{css:a.h},Object(n.jsx)("h1",null,e)),s)};o.propTypes={title:l.a.string.isRequired,children:l.a.node.isRequired},e.a=o},166:function(t,e,s){"use strict";var n=s(14),i=s(29),c=s(30),r=s(27),l=[].sort,a=[1,2,3];n(n.P+n.F*(r(function(){a.sort(void 0)})||!r(function(){a.sort(null)})||!s(167)(l)),"Array",{sort:function(t){return void 0===t?l.call(c(this)):l.call(c(this),i(t))}})},167:function(t,e,s){"use strict";var n=s(27);t.exports=function(t,e){return!!t&&n(function(){e?t.call(null,function(){},1):t.call(null)})}},168:function(t,e,s){"use strict";var n=s(14),i=s(17),c=s(80),r="".startsWith;n(n.P+n.F*s(81)("startsWith"),"String",{startsWith:function(t){var e=c(this,t,"startsWith"),s=i(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),n=String(t);return r?r.call(e,n,s):e.slice(s,s+n.length)===n}})},170:function(t,e,s){var n=s(14),i=s(27),c=s(19),r=/"/g,l=function(t,e,s,n){var i=String(c(t)),l="<"+e;return""!==s&&(l+=" "+s+'="'+String(n).replace(r,"&quot;")+'"'),l+">"+i+"</"+e+">"};t.exports=function(t,e){var s={};s[t]=e(l),n(n.P+n.F*i(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",s)}},174:function(t,e,s){"use strict";s(170)("bold",function(t){return function(){return t(this,"b","","")}})},175:function(t,e,s){"use strict";s(170)("link",function(t){return function(e){return t(this,"a","href",e)}})},176:function(t,e,s){"use strict";s(168),s(82);var n=s(8),i=s.n(n),c=s(56),r=s.n(c),l=s(10),a=s(0),o=s.n(a),u=s(165),j=s(163),d=function(t){function e(e){var s;return(s=t.call(this,e)||this).state={selected:"A"},s.setSelected=s.setSelected.bind(r()(r()(s))),s}i()(e,t);var s=e.prototype;return s.setSelected=function(t){this.setState(function(e){return{selected:t}})},s.render=function(){var t=this,e=this.props.path.split("/InfinityCalcs"),s=e[e.length-1],n="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),i=this.props.terms.filter(function(e){return e.node.frontmatter.title.toUpperCase().startsWith(t.state.selected)});return Object(l.jsx)(o.a.Fragment,null,Object(l.jsx)("div",{css:j.o},Object(l.jsx)("ul",null,n.map(function(e,s){return Object(l.jsx)("li",{key:s}," ",Object(l.jsx)("span",{css:t.state.selected===e?j.L:{},onClick:function(s){return t.setSelected(e)}},e)," |")}),Object(l.jsx)("li",{css:j.N}," ",Object(l.jsx)(u.Link,{to:s+"/where-to-find/"},"See all")))),Object(l.jsx)("div",{css:j.m},Object(l.jsx)("p",null,this.state.selected),Object(l.jsx)("ul",null,i.length?i.map(function(t,e){return Object(l.jsx)("li",{key:e},Object(l.jsx)(u.Link,{to:s+"where-to-find/"+t.node.frontmatter.title.toLowerCase()[0]+"/"+t.node.frontmatter.title.toLowerCase()},t.node.frontmatter.title))}):"No terms found.")))},e}(o.a.Component);e.a=d},196:function(t,e,s){t.exports=s.p+"static/distanceformula-a9268ab9047432ddd967dd9c50e45550.png"}}]);
//# sourceMappingURL=component---src-pages-ti-84-ce-js-f665fab08b7606f6bd0f.js.map