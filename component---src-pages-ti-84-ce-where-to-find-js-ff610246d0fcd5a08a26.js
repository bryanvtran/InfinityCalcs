(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{148:function(t,e,s){"use strict";s.r(e),s.d(e,"query",function(){return d});var n=s(28),r=(s(167),s(172)),o=s.n(r),a=s(10),i=(s(0),s(166)),l=s(170),c=s(174),u=s(163),d="710486820";e.default=function(t){var e=t.data,s=o()(t,["data"]),r=e.allMarkdownRemark.edges.sort(function(t,e){return t.node.frontmatter.title.toLowerCase().localeCompare(e.node.frontmatter.title.toLowerCase())});return Object(a.jsx)(i.a,null,Object(a.jsx)(l.a,{title:"TI-84 CE"},Object(a.jsx)("div",{css:Object(n.a)([u.k,u.g,u.K])},Object(a.jsx)("h2",null,"Where To Find…"),Object(a.jsx)(c.a,{path:s.location.pathname,terms:r}))))}},167:function(t,e,s){"use strict";var n=s(14),r=s(29),o=s(30),a=s(27),i=[].sort,l=[1,2,3];n(n.P+n.F*(a(function(){l.sort(void 0)})||!a(function(){l.sort(null)})||!s(168)(i)),"Array",{sort:function(t){return void 0===t?i.call(o(this)):i.call(o(this),r(t))}})},168:function(t,e,s){"use strict";var n=s(27);t.exports=function(t,e){return!!t&&n(function(){e?t.call(null,function(){},1):t.call(null)})}},169:function(t,e,s){"use strict";var n=s(14),r=s(17),o=s(80),a="".startsWith;n(n.P+n.F*s(81)("startsWith"),"String",{startsWith:function(t){var e=o(this,t,"startsWith"),s=r(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),n=String(t);return a?a.call(e,n,s):e.slice(s,s+n.length)===n}})},174:function(t,e,s){"use strict";s(169),s(56),s(82);var n=s(8),r=s.n(n),o=s(10),a=s(0),i=s.n(a),l=s(164),c=s(163),u={name:"131wcsq",styles:"padding-left:4px;"},d=function(t){function e(e){var s,n,r=(s=t.call(this,e)||this).props.path.split("/InfinityCalcs"),o=r[r.length-1],a=o.split("/where-to-find/");(a=a[a.length-1].split("/"))[a.length-1]||a.pop(),n=2===a.length?{selected:a[0].toUpperCase(),term:a[1]}:1===a.length&&a[0]?{selected:a[0].toUpperCase()}:{selected:"ALL"};var i=o.split("where-to-find")[0];return s.state=Object.assign({subpath:i+"where-to-find"},n),s}return r()(e,t),e.prototype.render=function(){var t=this,e=this.state.subpath,s="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),n=this.props.terms;return"ALL"!==this.state.selected&&(n=this.props.terms.filter(function(e){return e.node.frontmatter.title.toUpperCase().startsWith(t.state.selected)})),Object(o.jsx)(i.a.Fragment,null,Object(o.jsx)("div",{css:c.o},Object(o.jsx)("ul",null,s.map(function(s,n){return Object(o.jsx)("li",{key:n}," ",Object(o.jsx)("span",{css:t.state.selected===s?c.H:{}},Object(o.jsx)(l.Link,{to:e+"/"+s.toLowerCase()+"/"},s))," |")}),Object(o.jsx)("li",{css:u},Object(o.jsx)("span",{css:"ALL"===this.state.selected?c.H:{}},Object(o.jsx)(l.Link,{to:e+"/"},"See all"))))),Object(o.jsx)("div",{css:c.n},Object(o.jsx)("p",{className:"title"},"ALL"!==this.state.selected?this.state.selected:"All"),Object(o.jsx)("ul",null,n.length?n.map(function(s,n){return Object(o.jsx)("li",{key:n,css:s.node.frontmatter.title.toLowerCase()===t.state.term?[c.l,c.I]:[c.l,c.w]},Object(o.jsx)("div",{className:"term"},Object(o.jsx)(l.Link,{to:s.node.frontmatter.title.toLowerCase()===t.state.term?e+"/"+s.node.frontmatter.title[0].toLowerCase()+"/":e+"/"+s.node.frontmatter.title[0].toLowerCase()+"/"+s.node.frontmatter.title.toLowerCase()+"/"},s.node.frontmatter.title)),Object(o.jsx)("div",{className:"definition",dangerouslySetInnerHTML:{__html:s.node.html}}))}):"No terms found.")))},e}(i.a.Component);e.a=d}}]);
//# sourceMappingURL=component---src-pages-ti-84-ce-where-to-find-js-ff610246d0fcd5a08a26.js.map