(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{150:function(t,e,s){"use strict";s.r(e),s.d(e,"query",function(){return d});var n=s(28),r=(s(166),s(171)),i=s.n(r),a=s(10),o=(s(0),s(169)),l=s(164),c=s(173),u=s(163),d="206880630";e.default=function(t){var e=t.data,s=i()(t,["data"]),r=e.allMarkdownRemark.edges.sort(function(t,e){return t.node.frontmatter.title.toLowerCase().localeCompare(e.node.frontmatter.title.toLowerCase())});return Object(a.jsx)(o.a,null,Object(a.jsx)(l.a,{title:"TI-84 Plus"},Object(a.jsx)("div",{css:Object(n.a)([u.k,u.g,u.O])},Object(a.jsx)("h2",null,"Where To Find…"),Object(a.jsx)(c.a,{path:s.location.pathname,terms:r}))))}},164:function(t,e,s){"use strict";var n=s(10),r=s(0),i=s.n(r),a=s(4),o=s.n(a),l=s(163),c=function(t){var e=t.title,s=t.children;return Object(n.jsx)(i.a.Fragment,null,Object(n.jsx)("div",{css:l.h},Object(n.jsx)("h1",null,e)),s)};c.propTypes={title:o.a.string.isRequired,children:o.a.node.isRequired},e.a=c},166:function(t,e,s){"use strict";var n=s(14),r=s(29),i=s(30),a=s(27),o=[].sort,l=[1,2,3];n(n.P+n.F*(a(function(){l.sort(void 0)})||!a(function(){l.sort(null)})||!s(167)(o)),"Array",{sort:function(t){return void 0===t?o.call(i(this)):o.call(i(this),r(t))}})},167:function(t,e,s){"use strict";var n=s(27);t.exports=function(t,e){return!!t&&n(function(){e?t.call(null,function(){},1):t.call(null)})}},168:function(t,e,s){"use strict";var n=s(14),r=s(17),i=s(80),a="".startsWith;n(n.P+n.F*s(81)("startsWith"),"String",{startsWith:function(t){var e=i(this,t,"startsWith"),s=r(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),n=String(t);return a?a.call(e,n,s):e.slice(s,s+n.length)===n}})},173:function(t,e,s){"use strict";s(168),s(57),s(82);var n=s(8),r=s.n(n),i=s(10),a=s(0),o=s.n(a),l=s(165),c=s(163),u={name:"131wcsq",styles:"padding-left:4px;"},d=function(t){function e(e){var s,n,r=(s=t.call(this,e)||this).props.path.split("/InfinityCalcs"),i=r[r.length-1],a=i.split("/where-to-find/");(a=a[a.length-1].split("/"))[a.length-1]||a.pop(),n=2===a.length?{selected:a[0].toUpperCase(),term:a[1]}:1===a.length&&a[0]?{selected:a[0].toUpperCase()}:{selected:"ALL"};var o=i.split("where-to-find")[0];return s.state=Object.assign({subpath:o+"where-to-find"},n),s}return r()(e,t),e.prototype.render=function(){var t=this,e=this.state.subpath,s="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),n=this.props.terms;return"ALL"!==this.state.selected&&(n=this.props.terms.filter(function(e){return e.node.frontmatter.title.toUpperCase().startsWith(t.state.selected)})),Object(i.jsx)(o.a.Fragment,null,Object(i.jsx)("div",{css:c.o},Object(i.jsx)("ul",null,s.map(function(s,n){return Object(i.jsx)("li",{key:n}," ",Object(i.jsx)("span",{css:t.state.selected===s?c.L:{}},Object(i.jsx)(l.Link,{to:e+"/"+s.toLowerCase()+"/"},s))," |")}),Object(i.jsx)("li",{css:u},Object(i.jsx)("span",{css:"ALL"===this.state.selected?c.L:{}},Object(i.jsx)(l.Link,{to:e+"/"},"See all"))))),Object(i.jsx)("div",{css:c.n},Object(i.jsx)("p",{className:"title"},"ALL"!==this.state.selected?this.state.selected:"All"),Object(i.jsx)("ul",null,n.length?n.map(function(s,n){return Object(i.jsx)("li",{key:n,css:s.node.frontmatter.title.toLowerCase()===t.state.term?[c.l,c.M]:[c.l,c.y]},Object(i.jsx)("div",{className:"term"},Object(i.jsx)(l.Link,{to:s.node.frontmatter.title.toLowerCase()===t.state.term?e+"/"+s.node.frontmatter.title[0].toLowerCase()+"/":e+"/"+s.node.frontmatter.title[0].toLowerCase()+"/"+s.node.frontmatter.title.toLowerCase()+"/"},s.node.frontmatter.title)),Object(i.jsx)("div",{className:"definition",dangerouslySetInnerHTML:{__html:s.node.html}}))}):"No terms found.")))},e}(o.a.Component);e.a=d}}]);
//# sourceMappingURL=component---src-pages-ti-84-plus-where-to-find-js-c2b7ce523957a7001856.js.map