(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{153:function(t,e,n){"use strict";n.r(e),n.d(e,"query",function(){return j});var s=n(24),r=(n(76),n(73),n(168),n(173)),i=n.n(r),c=n(6),l=(n(0),n(164)),o=n(161),a=n(170),u=n(159),j="3668025844";e.default=function(t){var e=t.data,n=i()(t,["data"]),r=e.allMarkdownRemark.edges.sort(function(t,e){return t.node.frontmatter.title.toLowerCase().localeCompare(e.node.frontmatter.title.toLowerCase())}),j=n.location.search.split("?l=")[1];return Object(c.jsx)(l.a,null,Object(c.jsx)(o.a,{title:"TI-89 Titanium",titleHref:"/ti-89-titanium/"},Object(c.jsx)("div",{css:Object(s.a)([u.m,u.h,u.ab])},Object(c.jsx)("h2",null,"Where To Find…"),Object(c.jsx)(a.a,{selected:j,path:n.location.pathname,terms:r,whereToFind:!0}))))}},161:function(t,e,n){"use strict";var s=n(24),r=n(6),i=n(0),c=n.n(i),l=n(4),o=n.n(l),a=n(163),u=n.n(a),j=n(160),d=n(159),f=function(t){var e=t.title,n=t.description,i=t.keywords,l=t.children,o=t.titleHref,a=t.extraStyles,f=[];return n&&f.push({name:"description",content:n}),i&&f.push({name:"keywords",content:i}),Object(r.jsx)(c.a.Fragment,null,e&&Object(r.jsx)(u.a,{title:e+" | Infinity Calcs",meta:f}),Object(r.jsx)("div",{css:Object(s.a)([d.i].concat(a))},Object(r.jsx)("h1",null,o?Object(r.jsx)(j.Link,{css:d.l,to:o},e):e)),l)};f.propTypes={title:o.a.string.isRequired,children:o.a.node.isRequired,titleHref:o.a.string,extraStyles:o.a.array},e.a=f},162:function(t,e,n){"use strict";var s=n(26),r=n(34),i=n(165),c="".startsWith;s(s.P+s.F*n(166)("startsWith"),"String",{startsWith:function(t){var e=i(this,t,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),s=String(t);return c?c.call(e,s,n):e.slice(n,n+s.length)===s}})},165:function(t,e,n){var s=n(75),r=n(27);t.exports=function(t,e,n){if(s(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(t))}},166:function(t,e,n){var s=n(3)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[s]=!1,!"/./"[t](e)}catch(t){}}return!0}},168:function(t,e,n){"use strict";var s=n(26),r=n(28),i=n(35),c=n(25),l=[].sort,o=[1,2,3];s(s.P+s.F*(c(function(){o.sort(void 0)})||!c(function(){o.sort(null)})||!n(169)(l)),"Array",{sort:function(t){return void 0===t?l.call(i(this)):l.call(i(this),r(t))}})},169:function(t,e,n){"use strict";var s=n(25);t.exports=function(t,e){return!!t&&s(function(){e?t.call(null,function(){},1):t.call(null)})}},170:function(t,e,n){"use strict";n(162),n(74),n(73);var s=n(8),r=n.n(s),i=n(51),c=n.n(i),l=n(6),o=n(0),a=n.n(o),u=n(160),j=n(159),d=function(t){var e=t.letter,n=t.terms,s=(t.path,t.whereToFind,e);if("Numbers"===e&&(s="#"),"All"!==e)return Object(l.jsx)(a.a.Fragment,null,Object(l.jsx)("p",null,s),Object(l.jsx)("ul",null,n.length?n.map(function(t,e){return Object(l.jsx)("li",{key:e},Object(l.jsx)(u.Link,{to:t.node.fields.slug},t.node.frontmatter.title))}):"No terms."));var r="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),i={};return r.forEach(function(t){var e=n.filter(function(e){return e.node.frontmatter.title.toUpperCase().startsWith(t)});i[t]=e}),Object(l.jsx)(a.a.Fragment,null,Object(l.jsx)("div",{css:j.o},Object(l.jsx)("p",null,"Operations"),Object(l.jsx)("ul",null,n.filter(function(t){return t.node.frontmatter.title.match(/^\W/)}).length?n.filter(function(t){return t.node.frontmatter.title.match(/^\W/)}).map(function(t,e){return Object(l.jsx)("li",{key:e},Object(l.jsx)(u.Link,{to:t.node.fields.slug},t.node.frontmatter.title))}):"No terms.")),Object(l.jsx)("div",{css:j.o},Object(l.jsx)("p",null,"#"),Object(l.jsx)("ul",null,n.filter(function(t){return t.node.frontmatter.title.match(/^\d/)}).length?n.filter(function(t){return t.node.frontmatter.title.match(/^\d/)}).map(function(t,e){return Object(l.jsx)("li",{key:e},Object(l.jsx)(u.Link,{to:t.node.fields.slug},t.node.frontmatter.title))}):"No terms.")),r.map(function(t,e){return Object(l.jsx)("div",{key:e,css:j.o},Object(l.jsx)("p",null,t),Object(l.jsx)("ul",null,i[t].length?i[t].map(function(t,e){return Object(l.jsx)("li",{key:e},Object(l.jsx)(u.Link,{to:t.node.fields.slug},t.node.frontmatter.title))}):"No terms."))}))},f=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={selected:e.whereToFind?e.selected||"All":e.selected||"Operations"},n.setSelected=n.setSelected.bind(c()(c()(n))),n}r()(e,t);var n=e.prototype;return n.setSelected=function(t){this.setState(function(e){return{selected:t}})},n.render=function(){var t=this,e=this.state.selected,n=this.props.path.split("/InfinityCalcs"),s=n[n.length-1],r="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");if(this.props.headerOnly){var i=this.props.path.split("/"),c="/"+i[1]+"/"+i[2]+"/";return Object(l.jsx)("div",{css:j.p},Object(l.jsx)("ul",null,Object(l.jsx)("li",null,Object(l.jsx)("span",{css:"Operations"===this.state.selected&&j.Y,onClick:function(e){return t.setSelected("Operations")}},Object(l.jsx)(u.Link,{to:c+"?l=Operations"},"Operations"))," |"),Object(l.jsx)("li",null," ",Object(l.jsx)("span",{css:"Numbers"===this.state.selected&&j.Y,onClick:function(e){return t.setSelected("Numbers")}},Object(l.jsx)(u.Link,{to:c+"?l=Numbers"},"#"))," |"),r.map(function(e,n){return Object(l.jsx)("li",{key:n}," ",Object(l.jsx)("span",{css:t.state.selected===e&&j.Y,onClick:function(n){return t.setSelected(e)}},Object(l.jsx)(u.Link,{to:c+"?l="+e},e))," |")}),Object(l.jsx)("li",{css:j.Z}," ",Object(l.jsx)("span",{css:"All"===this.state.selected&&j.Y,onClick:function(e){return t.setSelected("All")}},Object(l.jsx)(u.Link,{to:c},"See all")))))}var o=this.props.terms;return"Operations"===this.state.selected?o=this.props.terms.filter(function(t){return t.node.frontmatter.title.match(/^\W/)}):"Numbers"===this.state.selected?o=this.props.terms.filter(function(t){return t.node.frontmatter.title.match(/^\d/)}):"All"!==this.state.selected&&(o=this.props.terms.filter(function(e){return e.node.frontmatter.title.toUpperCase().startsWith(t.state.selected)})),Object(l.jsx)(a.a.Fragment,null,Object(l.jsx)("div",{css:j.p},Object(l.jsx)("ul",null,Object(l.jsx)("li",null,Object(l.jsx)("span",{css:"Operations"===this.state.selected&&j.Y,onClick:function(e){return t.setSelected("Operations")}},"Operations")," |"),Object(l.jsx)("li",null," ",Object(l.jsx)("span",{css:"Numbers"===this.state.selected&&j.Y,onClick:function(e){return t.setSelected("Numbers")}},"#")," |"),r.map(function(e,n){return Object(l.jsx)("li",{key:n}," ",Object(l.jsx)("span",{css:t.state.selected===e&&j.Y,onClick:function(n){return t.setSelected(e)}},e)," |")}),Object(l.jsx)("li",{css:j.Z}," ",Object(l.jsx)("span",{css:"All"===this.state.selected&&j.Y,onClick:function(e){return t.setSelected("All")}},Object(l.jsx)(u.Link,{to:this.props.whereToFind?s:s+"where-to-find/"},"See all"))))),Object(l.jsx)("div",{css:j.n},Object(l.jsx)(d,{whereToFind:this.props.whereToFind,path:this.props.path,letter:e,terms:o})))},e}(a.a.Component);e.a=f}}]);
//# sourceMappingURL=component---src-pages-ti-89-titanium-where-to-find-js-c20b089912ef199343aa.js.map