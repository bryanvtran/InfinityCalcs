(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{151:function(t,e,s){"use strict";s.r(e),s.d(e,"query",function(){return d});s(174),s(175);var n=s(27),i=(s(170),s(176)),c=s.n(i),r=s(10),l=(s(0),s(167)),a=s(172),o=s(168),u=s(178),j=s(166);e.default=function(t){var e=t.data,s=c()(t,["data"]),i=e.allMarkdownRemark.edges.sort(function(t,e){return t.node.frontmatter.title.toLowerCase().localeCompare(e.node.frontmatter.title.toLowerCase())}),d=function(t){t.currentTarget.parentElement.classList.toggle("active")};return Object(r.jsx)(a.a,null,Object(r.jsx)(o.a,{title:"TI-83 Plus"},Object(r.jsx)("div",{css:Object(n.a)([j.m,j.h])},Object(r.jsx)("h2",null,"Getting Started"),Object(r.jsx)("p",{className:"body"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),Object(r.jsx)("div",{css:j.k},Object(r.jsx)(l.Link,{css:Object(n.a)([j.G,j.f]),to:"/ti-83-plus/starters-guide"},"Starter's Guide"))),Object(r.jsx)("div",{css:Object(n.a)([j.m,j.h])},Object(r.jsx)("h2",null,"Where To Find…"),Object(r.jsx)(u.a,{path:s.location.pathname,terms:i})),Object(r.jsx)("div",{css:Object(n.a)([j.m,j.h])},Object(r.jsx)("h2",null,"Solving Math Problems"),Object(r.jsx)("ul",{css:j.I},Object(r.jsx)("li",null,Object(r.jsx)(l.Link,{to:""},"Pre-Algebra")),Object(r.jsx)("li",null,Object(r.jsx)(l.Link,{to:""},"Algebra")),Object(r.jsx)("li",null,Object(r.jsx)(l.Link,{to:""},"Geometry")),Object(r.jsx)("li",null,Object(r.jsx)(l.Link,{to:""},"Trigonometry")),Object(r.jsx)("li",null,Object(r.jsx)(l.Link,{to:""},"Calculus")),Object(r.jsx)("li",null,Object(r.jsx)(l.Link,{to:""},"Statistics")))),Object(r.jsx)("div",{css:Object(n.a)([j.m,j.h])},Object(r.jsx)("h2",null,"Programming"),Object(r.jsx)("div",{css:j.R},Object(r.jsx)("div",{className:"wrapper"},Object(r.jsx)("div",{onClick:d,className:"title"},"Mid-Point Formula"),Object(r.jsx)("div",{className:"definition"},Object(r.jsx)("p",null,"Formula"),Object(r.jsx)("p",null,"Youtube Video"))),Object(r.jsx)("div",{className:"wrapper"},Object(r.jsx)("div",{onClick:d,className:"title"},"Quadratic Formula"),Object(r.jsx)("div",{className:"definition"},Object(r.jsx)("p",null,"Formula"),Object(r.jsx)("p",null,"Youtube Video"))),Object(r.jsx)("div",{className:"wrapper"},Object(r.jsx)("div",{onClick:d,className:"title"},"Distance Formula"),Object(r.jsx)("div",{className:"definition"},Object(r.jsx)("p",null,"Formula"),Object(r.jsx)("p",null,"Youtube Video"))))),Object(r.jsx)("div",{css:Object(n.a)([j.m,j.h,j.Q])},"ad goes here")))};var d="2258853553"},168:function(t,e,s){"use strict";var n=s(27),i=s(10),c=s(0),r=s.n(c),l=s(4),a=s.n(l),o=s(167),u=s(166),j=function(t){var e=t.title,s=t.children,c=t.titleHref,l=t.extraStyles;return Object(i.jsx)(r.a.Fragment,null,Object(i.jsx)("div",{css:Object(n.a)([u.i].concat(l))},Object(i.jsx)("h1",null,c?Object(i.jsx)(o.Link,{css:u.l,to:c},e):e)),s)};j.propTypes={title:a.a.string.isRequired,children:a.a.node.isRequired,titleHref:a.a.string,extraStyles:a.a.array},e.a=j},169:function(t,e,s){var n=s(14),i=s(28),c=s(19),r=/"/g,l=function(t,e,s,n){var i=String(c(t)),l="<"+e;return""!==s&&(l+=" "+s+'="'+String(n).replace(r,"&quot;")+'"'),l+">"+i+"</"+e+">"};t.exports=function(t,e){var s={};s[t]=e(l),n(n.P+n.F*i(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",s)}},170:function(t,e,s){"use strict";var n=s(14),i=s(29),c=s(30),r=s(28),l=[].sort,a=[1,2,3];n(n.P+n.F*(r(function(){a.sort(void 0)})||!r(function(){a.sort(null)})||!s(171)(l)),"Array",{sort:function(t){return void 0===t?l.call(c(this)):l.call(c(this),i(t))}})},171:function(t,e,s){"use strict";var n=s(28);t.exports=function(t,e){return!!t&&n(function(){e?t.call(null,function(){},1):t.call(null)})}},173:function(t,e,s){"use strict";var n=s(14),i=s(17),c=s(81),r="".startsWith;n(n.P+n.F*s(82)("startsWith"),"String",{startsWith:function(t){var e=c(this,t,"startsWith"),s=i(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),n=String(t);return r?r.call(e,n,s):e.slice(s,s+n.length)===n}})},174:function(t,e,s){"use strict";s(169)("bold",function(t){return function(){return t(this,"b","","")}})},175:function(t,e,s){"use strict";s(169)("link",function(t){return function(e){return t(this,"a","href",e)}})},178:function(t,e,s){"use strict";s(173),s(80),s(83);var n=s(8),i=s.n(n),c=s(56),r=s.n(c),l=s(10),a=s(0),o=s.n(a),u=s(167),j=s(166),d=function(t){function e(e){var s;return(s=t.call(this,e)||this).state={selected:"*"},s.setSelected=s.setSelected.bind(r()(r()(s))),s}i()(e,t);var s=e.prototype;return s.setSelected=function(t){this.setState(function(e){return{selected:t}})},s.render=function(){var t=this,e="*"===this.state.selected?"Operations":"@"===this.state.selected?"#":this.state.selected,s=this.props.path.split("/InfinityCalcs"),n=s[s.length-1],i="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),c=this.props.terms;return"*"===this.state.selected?c=this.props.terms.filter(function(t){return t.node.frontmatter.title.match(/^\W/)}):"@"===this.state.selected?c=this.props.terms.filter(function(t){return t.node.frontmatter.title.match(/^\d/)}):"All"!==this.state.selected&&(c=this.props.terms.filter(function(e){return e.node.frontmatter.title.toUpperCase().startsWith(t.state.selected)})),Object(l.jsx)(o.a.Fragment,null,Object(l.jsx)("div",{css:j.q},Object(l.jsx)("ul",null,Object(l.jsx)("li",null,Object(l.jsx)("span",{css:"*"===this.state.selected&&j.T,onClick:function(e){return t.setSelected("*")}},"Operations")," |"),Object(l.jsx)("li",null," ",Object(l.jsx)("span",{css:"@"===this.state.selected&&j.T,onClick:function(e){return t.setSelected("@")}},"#")," |"),i.map(function(e,s){return Object(l.jsx)("li",{key:s}," ",Object(l.jsx)("span",{css:t.state.selected===e&&j.T,onClick:function(s){return t.setSelected(e)}},e)," |")}),Object(l.jsx)("li",{css:j.V}," ",Object(l.jsx)(u.Link,{to:n+"/where-to-find/"},"See all")))),Object(l.jsx)("div",{css:j.o},Object(l.jsx)("p",null,e),Object(l.jsx)("ul",null,c.length?c.map(function(t,e){return Object(l.jsx)("li",{key:e},Object(l.jsx)(u.Link,{to:n+"where-to-find/?search="+t.node.frontmatter.title},t.node.frontmatter.title))}):"No terms.")))},e}(o.a.Component);e.a=d}}]);
//# sourceMappingURL=component---src-pages-ti-83-plus-js-7352bf95ad6b00646e17.js.map