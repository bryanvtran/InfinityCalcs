(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{158:function(t,e,s){"use strict";s.r(e),s.d(e,"query",function(){return d});s(173),s(174);var n=s(28),i=(s(166),s(171)),c=s.n(i),r=s(10),l=(s(0),s(165)),a=s(169),o=s(164),u=s(175),j=s(163);e.default=function(t){var e=t.data,s=c()(t,["data"]),i=e.allMarkdownRemark.edges.sort(function(t,e){return t.node.frontmatter.title.toLowerCase().localeCompare(e.node.frontmatter.title.toLowerCase())}),d=function(t){t.currentTarget.parentElement.classList.toggle("active")};return Object(r.jsx)(a.a,null,Object(r.jsx)(o.a,{title:"TI-89 Titanium"},Object(r.jsx)("div",{css:Object(n.a)([j.k,j.g])},Object(r.jsx)("h2",null,"Getting Started"),Object(r.jsx)("p",{className:"body"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),Object(r.jsx)("div",{css:j.j},Object(r.jsx)(l.Link,{css:Object(n.a)([j.z,j.f]),to:"/ti-89-titanium/starters-guide"},"Starter's Guide"))),Object(r.jsx)("div",{css:Object(n.a)([j.k,j.g])},Object(r.jsx)("h2",null,"Where To Find…"),Object(r.jsx)(u.a,{path:s.location.pathname,terms:i})),Object(r.jsx)("div",{css:Object(n.a)([j.k,j.g])},Object(r.jsx)("h2",null,"Solving Math Problems"),Object(r.jsx)("ul",{css:j.A},Object(r.jsx)("li",null,Object(r.jsx)(l.Link,{to:""},"Pre-Algebra")),Object(r.jsx)("li",null,Object(r.jsx)(l.Link,{to:""},"Algebra")),Object(r.jsx)("li",null,Object(r.jsx)(l.Link,{to:""},"Geometry")),Object(r.jsx)("li",null,Object(r.jsx)(l.Link,{to:""},"Trigonometry")),Object(r.jsx)("li",null,Object(r.jsx)(l.Link,{to:""},"Calculus")),Object(r.jsx)("li",null,Object(r.jsx)(l.Link,{to:""},"Statistics")))),Object(r.jsx)("div",{css:Object(n.a)([j.k,j.g])},Object(r.jsx)("h2",null,"Programming"),Object(r.jsx)("div",{css:j.J},Object(r.jsx)("div",{className:"wrapper"},Object(r.jsx)("div",{onClick:d,className:"title"},"Mid-Point Formula"),Object(r.jsx)("div",{className:"definition"},Object(r.jsx)("p",null,"Formula"),Object(r.jsx)("p",null,"Youtube Video"))),Object(r.jsx)("div",{className:"wrapper"},Object(r.jsx)("div",{onClick:d,className:"title"},"Quadratic Formula"),Object(r.jsx)("div",{className:"definition"},Object(r.jsx)("p",null,"Formula"),Object(r.jsx)("p",null,"Youtube Video"))),Object(r.jsx)("div",{className:"wrapper"},Object(r.jsx)("div",{onClick:d,className:"title"},"Distance Formula"),Object(r.jsx)("div",{className:"definition"},Object(r.jsx)("p",null,"Formula"),Object(r.jsx)("p",null,"Youtube Video"))))),Object(r.jsx)("div",{css:Object(n.a)([j.k,j.g,j.I])},"ad goes here")))};var d="1339860150"},164:function(t,e,s){"use strict";var n=s(10),i=s(0),c=s.n(i),r=s(4),l=s.n(r),a=s(163),o=function(t){var e=t.title,s=t.children;return Object(n.jsx)(c.a.Fragment,null,Object(n.jsx)("div",{css:a.h},Object(n.jsx)("h1",null,e)),s)};o.propTypes={title:l.a.string.isRequired,children:l.a.node.isRequired},e.a=o},166:function(t,e,s){"use strict";var n=s(14),i=s(29),c=s(30),r=s(27),l=[].sort,a=[1,2,3];n(n.P+n.F*(r(function(){a.sort(void 0)})||!r(function(){a.sort(null)})||!s(167)(l)),"Array",{sort:function(t){return void 0===t?l.call(c(this)):l.call(c(this),i(t))}})},167:function(t,e,s){"use strict";var n=s(27);t.exports=function(t,e){return!!t&&n(function(){e?t.call(null,function(){},1):t.call(null)})}},168:function(t,e,s){"use strict";var n=s(14),i=s(17),c=s(81),r="".startsWith;n(n.P+n.F*s(82)("startsWith"),"String",{startsWith:function(t){var e=c(this,t,"startsWith"),s=i(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),n=String(t);return r?r.call(e,n,s):e.slice(s,s+n.length)===n}})},170:function(t,e,s){var n=s(14),i=s(27),c=s(19),r=/"/g,l=function(t,e,s,n){var i=String(c(t)),l="<"+e;return""!==s&&(l+=" "+s+'="'+String(n).replace(r,"&quot;")+'"'),l+">"+i+"</"+e+">"};t.exports=function(t,e){var s={};s[t]=e(l),n(n.P+n.F*i(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",s)}},173:function(t,e,s){"use strict";s(170)("bold",function(t){return function(){return t(this,"b","","")}})},174:function(t,e,s){"use strict";s(170)("link",function(t){return function(e){return t(this,"a","href",e)}})},175:function(t,e,s){"use strict";s(168),s(80),s(83);var n=s(8),i=s.n(n),c=s(56),r=s.n(c),l=s(10),a=s(0),o=s.n(a),u=s(165),j=s(163),d=function(t){function e(e){var s;return(s=t.call(this,e)||this).state={selected:"*"},s.setSelected=s.setSelected.bind(r()(r()(s))),s}i()(e,t);var s=e.prototype;return s.setSelected=function(t){this.setState(function(e){return{selected:t}})},s.render=function(){var t=this,e="*"===this.state.selected?"Operations":"@"===this.state.selected?"#":this.state.selected,s=this.props.path.split("/InfinityCalcs"),n=s[s.length-1],i="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),c=this.props.terms;return"*"===this.state.selected?c=this.props.terms.filter(function(t){return t.node.frontmatter.title.match(/^\W/)}):"@"===this.state.selected?c=this.props.terms.filter(function(t){return t.node.frontmatter.title.match(/^\d/)}):"All"!==this.state.selected&&(c=this.props.terms.filter(function(e){return e.node.frontmatter.title.toUpperCase().startsWith(t.state.selected)})),Object(l.jsx)(o.a.Fragment,null,Object(l.jsx)("div",{css:j.o},Object(l.jsx)("ul",null,Object(l.jsx)("li",null,Object(l.jsx)("span",{css:"*"===this.state.selected&&j.L,onClick:function(e){return t.setSelected("*")}},"Operations")," |"),Object(l.jsx)("li",null," ",Object(l.jsx)("span",{css:"@"===this.state.selected&&j.L,onClick:function(e){return t.setSelected("@")}},"#")," |"),i.map(function(e,s){return Object(l.jsx)("li",{key:s}," ",Object(l.jsx)("span",{css:t.state.selected===e&&j.L,onClick:function(s){return t.setSelected(e)}},e)," |")}),Object(l.jsx)("li",{css:j.N}," ",Object(l.jsx)(u.Link,{to:n+"/where-to-find/"},"See all")))),Object(l.jsx)("div",{css:j.m},Object(l.jsx)("p",null,e),Object(l.jsx)("ul",null,c.length?c.map(function(t,e){return Object(l.jsx)("li",{key:e},Object(l.jsx)(u.Link,{to:n+"where-to-find/?search="+t.node.frontmatter.title},t.node.frontmatter.title))}):"No terms found.")))},e}(o.a.Component);e.a=d}}]);
//# sourceMappingURL=component---src-pages-ti-89-titanium-js-9c2c0061fe6ec7ff87d5.js.map