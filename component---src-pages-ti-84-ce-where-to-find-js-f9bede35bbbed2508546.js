(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{149:function(t,e,s){"use strict";s.r(e),s.d(e,"query",function(){return d});var n=s(27),r=(s(180),s(179)),a=s.n(r),o=s(10),l=(s(0),s(167)),i=s(168),c=s(183),j=s(163),d="710486820";e.default=function(t){var e=t.data,s=a()(t,["data"]),r=e.allMarkdownRemark.edges.sort(function(t,e){return t.node.frontmatter.title.toLowerCase().localeCompare(e.node.frontmatter.title.toLowerCase())});return Object(o.jsx)(l.a,null,Object(o.jsx)(i.a,{title:"TI-84 CE"},Object(o.jsx)("div",{css:Object(n.a)([j.k,j.g,j.I])},Object(o.jsx)("h2",null,"Where To Find…"),Object(o.jsx)(c.a,{path:s.location.pathname,terms:r}))))}},183:function(t,e,s){"use strict";s(181),s(56),s(80);var n=s(8),r=s.n(n),a=s(10),o=s(0),l=s.n(o),i=s(165),c=s(163),j={name:"131wcsq",styles:"padding-left:4px;"},d=function(t){function e(e){var s,n,r=(s=t.call(this,e)||this).props.path.split("/InfinityCalcs"),a=r[r.length-1],o=a.split("/where-to-find/");(o=o[o.length-1].split("/"))[o.length-1]||o.pop(),n=2===o.length?{selected:o[0].toUpperCase(),term:o[1]}:1===o.length&&o[0]?{selected:o[0].toUpperCase()}:{selected:"ALL"};var l=a.split("where-to-find")[0];return s.state=Object.assign({subpath:l+"where-to-find"},n),s}return r()(e,t),e.prototype.render=function(){var t=this,e=this.state.subpath,s="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),n=this.props.terms;return"ALL"!==this.state.selected&&(n=this.props.terms.filter(function(e){return e.node.frontmatter.title.toUpperCase().startsWith(t.state.selected)})),Object(a.jsx)(l.a.Fragment,null,Object(a.jsx)("div",{css:c.o},Object(a.jsx)("ul",null,s.map(function(s,n){return Object(a.jsx)("li",{key:n}," ",Object(a.jsx)("span",{css:t.state.selected===s?c.F:{}},Object(a.jsx)(i.Link,{to:e+"/"+s.toLowerCase()+"/"},s))," |")}),Object(a.jsx)("li",{css:j},Object(a.jsx)("span",{css:"ALL"===this.state.selected?c.F:{}},Object(a.jsx)(i.Link,{to:e+"/"},"See all"))))),Object(a.jsx)("div",{css:c.n},Object(a.jsx)("p",{className:"title"},"ALL"!==this.state.selected?this.state.selected:"All"),Object(a.jsx)("ul",null,n.length?n.map(function(s,n){return Object(a.jsx)("li",{key:n,css:s.node.frontmatter.title.toLowerCase()===t.state.term?[c.l,c.G]:[c.l,c.v]},Object(a.jsx)("div",{className:"term"},Object(a.jsx)(i.Link,{to:s.node.frontmatter.title.toLowerCase()===t.state.term?e+"/"+s.node.frontmatter.title[0].toLowerCase()+"/":e+"/"+s.node.frontmatter.title[0].toLowerCase()+"/"+s.node.frontmatter.title.toLowerCase()+"/"},s.node.frontmatter.title)),Object(a.jsx)("div",{className:"definition",dangerouslySetInnerHTML:{__html:s.node.html}}))}):"No terms found.")))},e}(l.a.Component);e.a=d}}]);
//# sourceMappingURL=component---src-pages-ti-84-ce-where-to-find-js-f9bede35bbbed2508546.js.map