(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{138:function(t,e,n){"use strict";n.r(e),n.d(e,"query",function(){return d});var s=n(26),r=(n(154),n(161)),i=n.n(r),a=n(6),o=(n(0),n(159)),c=n(152),l=n(163),u=n(151),d="206880630";e.default=function(t){var e=t.data,n=i()(t,["data"]),r=e.allMarkdownRemark.edges.sort(function(t,e){return t.node.frontmatter.title.toLowerCase().localeCompare(e.node.frontmatter.title.toLowerCase())});return Object(a.jsx)(o.a,null,Object(a.jsx)(c.a,{title:"TI-84 Plus"},Object(a.jsx)("div",{css:Object(s.a)([u.k,u.g,u.O])},Object(a.jsx)("h2",null,"Where To Find…"),Object(a.jsx)(l.a,{path:n.location.pathname,terms:r}))))}},152:function(t,e,n){"use strict";var s=n(6),r=n(0),i=n.n(r),a=n(4),o=n.n(a),c=n(151),l=function(t){var e=t.title,n=t.children;return Object(s.jsx)(i.a.Fragment,null,Object(s.jsx)("div",{css:c.h},Object(s.jsx)("h1",null,e)),n)};l.propTypes={title:o.a.string.isRequired,children:o.a.node.isRequired},e.a=l},154:function(t,e,n){"use strict";var s=n(25),r=n(28),i=n(35),a=n(24),o=[].sort,c=[1,2,3];s(s.P+s.F*(a(function(){c.sort(void 0)})||!a(function(){c.sort(null)})||!n(155)(o)),"Array",{sort:function(t){return void 0===t?o.call(i(this)):o.call(i(this),r(t))}})},155:function(t,e,n){"use strict";var s=n(24);t.exports=function(t,e){return!!t&&s(function(){e?t.call(null,function(){},1):t.call(null)})}},156:function(t,e,n){"use strict";var s=n(25),r=n(34),i=n(157),a="".startsWith;s(s.P+s.F*n(158)("startsWith"),"String",{startsWith:function(t){var e=i(this,t,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),s=String(t);return a?a.call(e,s,n):e.slice(n,n+s.length)===s}})},157:function(t,e,n){var s=n(74),r=n(27);t.exports=function(t,e,n){if(s(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(t))}},158:function(t,e,n){var s=n(3)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[s]=!1,!"/./"[t](e)}catch(t){}}return!0}},163:function(t,e,n){"use strict";n(26),n(156),n(52),n(73);var s=n(8),r=n.n(s),i=n(6),a=n(0),o=n.n(a),c=n(153),l=n(151),u={name:"131wcsq",styles:"padding-left:4px;"},d=function(t){function e(e){var n,s,r=(n=t.call(this,e)||this).props.path.split("/InfinityCalcs"),i=r[r.length-1],a=i.split("/where-to-find/");(a=a[a.length-1].split("/"))[a.length-1]||a.pop(),s=2===a.length?{selected:a[0].toUpperCase(),term:a[1]}:1===a.length&&a[0]?{selected:a[0].toUpperCase()}:{selected:"ALL"};var o=i.split("where-to-find")[0];return n.state=Object.assign({subpath:o+"where-to-find"},s),n}return r()(e,t),e.prototype.render=function(){var t=this,e=this.state.subpath,n="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),s=this.props.terms;return"ALL"!==this.state.selected&&(s=this.props.terms.filter(function(e){return e.node.frontmatter.title.toUpperCase().startsWith(t.state.selected)})),Object(i.jsx)(o.a.Fragment,null,Object(i.jsx)("div",{css:l.o},Object(i.jsx)("ul",null,n.map(function(n,s){return Object(i.jsx)("li",{key:s}," ",Object(i.jsx)("span",{css:t.state.selected===n?l.L:{}},Object(i.jsx)(c.Link,{to:e+"/"+n.toLowerCase()+"/"},n))," |")}),Object(i.jsx)("li",{css:u},Object(i.jsx)("span",{css:"ALL"===this.state.selected?l.L:{}},Object(i.jsx)(c.Link,{to:e+"/"},"See all"))))),Object(i.jsx)("div",{css:l.n},Object(i.jsx)("p",{className:"title"},"ALL"!==this.state.selected?this.state.selected:"All"),Object(i.jsx)("ul",null,s.length?s.map(function(n,s){return Object(i.jsx)("li",{key:s,css:n.node.frontmatter.title.toLowerCase()===t.state.term?[l.l,l.M]:[l.l,l.y]},Object(i.jsx)("div",{className:"term"},Object(i.jsx)(c.Link,{to:n.node.frontmatter.title.toLowerCase()===t.state.term?e+"/"+n.node.frontmatter.title[0].toLowerCase()+"/":e+"/"+n.node.frontmatter.title[0].toLowerCase()+"/"+n.node.frontmatter.title.toLowerCase()+"/"},n.node.frontmatter.title)),Object(i.jsx)("div",{className:"definition",dangerouslySetInnerHTML:{__html:n.node.html}}))}):"No terms found.")))},e}(o.a.Component);e.a=d}}]);
//# sourceMappingURL=component---src-pages-ti-84-plus-where-to-find-js-fb9d3a389b7936ab80ff.js.map