(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{136:function(t,e,s){"use strict";s.r(e),s.d(e,"query",function(){return j});var r=s(24),a=(s(73),s(168),s(167)),n=s.n(a),o=s(6),l=(s(0),s(153),s(155)),c=s(156),i=s(171),p=s(151),j="710486820";e.default=function(t){var e,s=t.data,a=n()(t,["data"]),j=s.allMarkdownRemark.edges.sort(function(t,e){return t.node.frontmatter.title.toLowerCase().localeCompare(e.node.frontmatter.title.toLowerCase())}),d=a.location.pathname.split("/");return e=5===d.length||6===d.length?{type:"term",letter:d[3],term:d[4]}:4===d.length&&d[3]?{type:"letter",letter:d[3]}:{type:"all"},Object(o.jsx)(l.a,null,Object(o.jsx)(c.a,{title:"TI-84 CE"},Object(o.jsx)("div",{css:Object(r.a)([p.k,p.g,p.I])},Object(o.jsx)("h2",null,"Where To Find…"),Object(o.jsx)(i.a,{path:"/ti-84-ce/where-to-find",terms:j,parameters:e}))))}},171:function(t,e,s){"use strict";s(24),s(169),s(73);var r=s(8),a=s.n(r),n=s(6),o=s(0),l=s.n(o),c=s(153),i=s(151),p={name:"131wcsq",styles:"padding-left:4px;"},j=function(t){function e(e){var s;return s=t.call(this,e)||this,"term"===e.parameters.type?s.state={selected:e.parameters.letter,term:e.parameters.term}:"letter"===e.parameters.type?s.state={selected:e.parameters.letter.toUpperCase()}:s.state={selected:"ALL"},s}return a()(e,t),e.prototype.render=function(){var t=this,e="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),s=this.props.terms;return"ALL"!==this.state.selected&&(s=this.props.terms.filter(function(e){return e.node.frontmatter.title.toUpperCase().startsWith(t.state.selected)})),Object(n.jsx)(l.a.Fragment,null,Object(n.jsx)("div",{css:i.o},Object(n.jsx)("ul",null,e.map(function(e,s){return Object(n.jsx)("li",{key:s}," ",Object(n.jsx)("span",{css:t.state.selected===e?i.F:{}},Object(n.jsx)(c.Link,{to:t.props.path+"/"+e.toLowerCase()},e))," |")}),Object(n.jsx)("li",{css:p},Object(n.jsx)("span",{css:"ALL"===this.state.selected?i.F:{}},Object(n.jsx)(c.Link,{to:this.props.path+"/"},"See all"))))),Object(n.jsx)("div",{css:i.n},Object(n.jsx)("p",{className:"title"},"ALL"!==this.state.selected?this.state.selected:"All"),Object(n.jsx)("ul",null,s.length?s.map(function(e,s){return Object(n.jsx)("li",{key:s,css:e.node.frontmatter.title.toLowerCase()===t.state.term?[i.l,i.G]:[i.l,i.v]},Object(n.jsx)("div",{className:"term"},Object(n.jsx)(c.Link,{to:e.node.frontmatter.title.toLowerCase()===t.state.term?t.props.path+"/"+e.node.frontmatter.title[0].toLowerCase():t.props.path+"/"+e.node.frontmatter.title[0].toLowerCase()+"/"+e.node.frontmatter.title.toLowerCase()},e.node.frontmatter.title)),Object(n.jsx)("div",{className:"definition",dangerouslySetInnerHTML:{__html:e.node.html}}))}):"No terms found.")))},e}(l.a.Component);e.a=j}}]);
//# sourceMappingURL=component---src-pages-ti-84-ce-where-to-find-js-37e790ece25fffdd0546.js.map