(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{159:function(t,e,n){"use strict";n.r(e),n.d(e,"query",function(){return j});var s=n(27),r=(n(84),n(80),n(177),n(181)),i=n.n(r),l=n(10),c=(n(0),n(176)),o=n(173),a=n(179),u=n(171),j="1437512515";e.default=function(t){var e=t.data,n=i()(t,["data"]),r=e.allMarkdownRemark.edges.sort(function(t,e){return t.node.frontmatter.title.toLowerCase().localeCompare(e.node.frontmatter.title.toLowerCase())}),j=n.location.search.split("?l=")[1];return Object(l.jsx)(c.a,null,Object(l.jsx)(o.a,{title:"TI-84 CE",titleHref:"/ti-84-ce/"},Object(l.jsx)("div",{css:Object(s.a)([u.m,u.h,u.ab])},Object(l.jsx)("h2",null,"Where To Find…"),Object(l.jsx)(a.a,{selected:j,path:n.location.pathname,terms:r,whereToFind:!0}))))}},173:function(t,e,n){"use strict";var s=n(27),r=n(10),i=n(0),l=n.n(i),c=n(4),o=n.n(c),a=n(175),u=n.n(a),j=n(172),d=n(171),p=function(t){var e=t.title,n=t.description,i=t.keywords,c=t.children,o=t.titleHref,a=t.extraStyles,p=[];return n&&p.push({name:"description",content:n}),i&&p.push({name:"keywords",content:i}),Object(r.jsx)(l.a.Fragment,null,e&&Object(r.jsx)(u.a,{title:e+" | Infinity Calcs",meta:p}),Object(r.jsx)("div",{css:Object(s.a)([d.i].concat(a))},Object(r.jsx)("h1",null,o?Object(r.jsx)(j.Link,{css:d.l,to:o},e):e)),c)};p.propTypes={title:o.a.string.isRequired,children:o.a.node.isRequired,titleHref:o.a.string,extraStyles:o.a.array},e.a=p},174:function(t,e,n){"use strict";var s=n(14),r=n(17),i=n(82),l="".startsWith;s(s.P+s.F*n(83)("startsWith"),"String",{startsWith:function(t){var e=i(this,t,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),s=String(t);return l?l.call(e,s,n):e.slice(n,n+s.length)===s}})},177:function(t,e,n){"use strict";var s=n(14),r=n(29),i=n(30),l=n(28),c=[].sort,o=[1,2,3];s(s.P+s.F*(l(function(){o.sort(void 0)})||!l(function(){o.sort(null)})||!n(178)(c)),"Array",{sort:function(t){return void 0===t?c.call(i(this)):c.call(i(this),r(t))}})},178:function(t,e,n){"use strict";var s=n(28);t.exports=function(t,e){return!!t&&s(function(){e?t.call(null,function(){},1):t.call(null)})}},179:function(t,e,n){"use strict";n(174),n(81),n(80);var s=n(8),r=n.n(s),i=n(56),l=n.n(i),c=n(10),o=n(0),a=n.n(o),u=n(172),j=n(171),d=function(t){var e=t.letter,n=t.terms,s=(t.path,t.whereToFind,e);if("Numbers"===e&&(s="#"),"All"!==e)return Object(c.jsx)(a.a.Fragment,null,Object(c.jsx)("p",null,s),Object(c.jsx)("ul",null,n.length?n.map(function(t,e){return Object(c.jsx)("li",{key:e},Object(c.jsx)(u.Link,{to:t.node.fields.slug},t.node.frontmatter.title))}):"No terms."));var r="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),i={};return r.forEach(function(t){var e=n.filter(function(e){return e.node.frontmatter.title.toUpperCase().startsWith(t)});i[t]=e}),Object(c.jsx)(a.a.Fragment,null,Object(c.jsx)("div",{css:j.o},Object(c.jsx)("p",null,"Operations"),Object(c.jsx)("ul",null,n.filter(function(t){return t.node.frontmatter.title.match(/^\W/)}).length?n.filter(function(t){return t.node.frontmatter.title.match(/^\W/)}).map(function(t,e){return Object(c.jsx)("li",{key:e},Object(c.jsx)(u.Link,{to:t.node.fields.slug},t.node.frontmatter.title))}):"No terms.")),Object(c.jsx)("div",{css:j.o},Object(c.jsx)("p",null,"#"),Object(c.jsx)("ul",null,n.filter(function(t){return t.node.frontmatter.title.match(/^\d/)}).length?n.filter(function(t){return t.node.frontmatter.title.match(/^\d/)}).map(function(t,e){return Object(c.jsx)("li",{key:e},Object(c.jsx)(u.Link,{to:t.node.fields.slug},t.node.frontmatter.title))}):"No terms.")),r.map(function(t,e){return Object(c.jsx)("div",{key:e,css:j.o},Object(c.jsx)("p",null,t),Object(c.jsx)("ul",null,i[t].length?i[t].map(function(t,e){return Object(c.jsx)("li",{key:e},Object(c.jsx)(u.Link,{to:t.node.fields.slug},t.node.frontmatter.title))}):"No terms."))}))},p=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={selected:e.whereToFind?e.selected||"All":e.selected||"Operations"},n.setSelected=n.setSelected.bind(l()(l()(n))),n}r()(e,t);var n=e.prototype;return n.setSelected=function(t){this.setState(function(e){return{selected:t}})},n.render=function(){var t=this,e=this.state.selected,n=this.props.path.split("/InfinityCalcs"),s=n[n.length-1],r="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");if(this.props.headerOnly){var i=this.props.path.split("/"),l="/"+i[1]+"/"+i[2]+"/";return Object(c.jsx)("div",{css:j.p},Object(c.jsx)("ul",null,Object(c.jsx)("li",null,Object(c.jsx)("span",{css:"Operations"===this.state.selected&&j.Y,onClick:function(e){return t.setSelected("Operations")}},Object(c.jsx)(u.Link,{to:l+"?l=Operations"},"Operations"))," |"),Object(c.jsx)("li",null," ",Object(c.jsx)("span",{css:"Numbers"===this.state.selected&&j.Y,onClick:function(e){return t.setSelected("Numbers")}},Object(c.jsx)(u.Link,{to:l+"?l=Numbers"},"#"))," |"),r.map(function(e,n){return Object(c.jsx)("li",{key:n}," ",Object(c.jsx)("span",{css:t.state.selected===e&&j.Y,onClick:function(n){return t.setSelected(e)}},Object(c.jsx)(u.Link,{to:l+"?l="+e},e))," |")}),Object(c.jsx)("li",{css:j.Z}," ",Object(c.jsx)("span",{css:"All"===this.state.selected&&j.Y,onClick:function(e){return t.setSelected("All")}},Object(c.jsx)(u.Link,{to:l},"See all")))))}var o=this.props.terms;return"Operations"===this.state.selected?o=this.props.terms.filter(function(t){return t.node.frontmatter.title.match(/^\W/)}):"Numbers"===this.state.selected?o=this.props.terms.filter(function(t){return t.node.frontmatter.title.match(/^\d/)}):"All"!==this.state.selected&&(o=this.props.terms.filter(function(e){return e.node.frontmatter.title.toUpperCase().startsWith(t.state.selected)})),Object(c.jsx)(a.a.Fragment,null,Object(c.jsx)("div",{css:j.p},Object(c.jsx)("ul",null,Object(c.jsx)("li",null,Object(c.jsx)("span",{css:"Operations"===this.state.selected&&j.Y,onClick:function(e){return t.setSelected("Operations")}},"Operations")," |"),Object(c.jsx)("li",null," ",Object(c.jsx)("span",{css:"Numbers"===this.state.selected&&j.Y,onClick:function(e){return t.setSelected("Numbers")}},"#")," |"),r.map(function(e,n){return Object(c.jsx)("li",{key:n}," ",Object(c.jsx)("span",{css:t.state.selected===e&&j.Y,onClick:function(n){return t.setSelected(e)}},e)," |")}),Object(c.jsx)("li",{css:j.Z}," ",Object(c.jsx)("span",{css:"All"===this.state.selected&&j.Y,onClick:function(e){return t.setSelected("All")}},Object(c.jsx)(u.Link,{to:this.props.whereToFind?s:s+"where-to-find/"},"See all"))))),Object(c.jsx)("div",{css:j.n},Object(c.jsx)(d,{whereToFind:this.props.whereToFind,path:this.props.path,letter:e,terms:o})))},e}(a.a.Component);e.a=p}}]);
//# sourceMappingURL=component---src-pages-ti-84-ce-where-to-find-js-8b4bf24ae83d90611fb9.js.map