(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{151:function(t,e,s){"use strict";s.r(e),s.d(e,"query",function(){return b});s(171),s(173);var n=s(24),r=(s(76),s(73),s(169),s(174)),i=s.n(r),c=s(6),l=(s(0),s(160)),o=s(164),a=s(161),j=s(172),u=s(159);e.default=function(t){var e=t.data,s=i()(t,["data"]),r=e.allMarkdownRemark.edges.sort(function(t,e){return t.node.frontmatter.title.toLowerCase().localeCompare(e.node.frontmatter.title.toLowerCase())}),b=function(t){t.currentTarget.parentElement.classList.toggle("active")},d=s.location.search.split("?l=")[1];return Object(c.jsx)(o.a,null,Object(c.jsx)(a.a,{title:"TI-89 Titanium"},Object(c.jsx)("div",{css:Object(n.a)([u.m,u.h])},Object(c.jsx)("h2",null,"Getting Started"),Object(c.jsx)("p",{className:"body"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),Object(c.jsx)("div",{css:u.k},Object(c.jsx)(l.Link,{css:Object(n.a)([u.E,u.f]),to:"/ti-89-titanium/starters-guide"},"Starter's Guide"))),Object(c.jsx)("div",{css:Object(n.a)([u.m,u.h])},Object(c.jsx)("h2",null,"Where To Find…"),Object(c.jsx)(j.a,{selected:d,path:s.location.pathname,terms:r})),Object(c.jsx)("div",{css:Object(n.a)([u.m,u.h])},Object(c.jsx)("h2",null,"Solving Math Problems"),Object(c.jsx)("ul",{css:u.H},Object(c.jsx)("li",null,Object(c.jsx)(l.Link,{to:""},"Pre-Algebra")),Object(c.jsx)("li",null,Object(c.jsx)(l.Link,{to:""},"Algebra")),Object(c.jsx)("li",null,Object(c.jsx)(l.Link,{to:""},"Geometry")),Object(c.jsx)("li",null,Object(c.jsx)(l.Link,{to:""},"Trigonometry")),Object(c.jsx)("li",null,Object(c.jsx)(l.Link,{to:""},"Calculus")),Object(c.jsx)("li",null,Object(c.jsx)(l.Link,{to:""},"Statistics")))),Object(c.jsx)("div",{css:Object(n.a)([u.m,u.h])},Object(c.jsx)("h2",null,"Programming"),Object(c.jsx)("div",{css:u.Q},Object(c.jsx)("div",{className:"wrapper"},Object(c.jsx)("div",{onClick:b,className:"title"},"Mid-Point Formula"),Object(c.jsx)("div",{className:"definition"},Object(c.jsx)("p",null,"Formula"),Object(c.jsx)("p",null,"Youtube Video"))),Object(c.jsx)("div",{className:"wrapper"},Object(c.jsx)("div",{onClick:b,className:"title"},"Quadratic Formula"),Object(c.jsx)("div",{className:"definition"},Object(c.jsx)("p",null,"Formula"),Object(c.jsx)("p",null,"Youtube Video"))),Object(c.jsx)("div",{className:"wrapper"},Object(c.jsx)("div",{onClick:b,className:"title"},"Distance Formula"),Object(c.jsx)("div",{className:"definition"},Object(c.jsx)("p",null,"Formula"),Object(c.jsx)("p",null,"Youtube Video"))))),Object(c.jsx)("div",{css:Object(n.a)([u.m,u.h,u.P])},"anthony davis goes here")))};var b="1339860150"},161:function(t,e,s){"use strict";var n=s(24),r=s(6),i=s(0),c=s.n(i),l=s(4),o=s.n(l),a=s(163),j=s.n(a),u=s(160),b=s(159),d=function(t){var e=t.title,s=t.description,i=t.keywords,l=t.children,o=t.titleHref,a=t.extraStyles,d=[];return s&&d.push({name:"description",content:s}),i&&d.push({name:"keywords",content:i}),Object(r.jsx)(c.a.Fragment,null,e&&Object(r.jsx)(j.a,{title:e+" | Infinity Calcs",meta:d}),Object(r.jsx)("div",{css:Object(n.a)([b.i].concat(a))},Object(r.jsx)("h1",null,o?Object(r.jsx)(u.Link,{css:b.l,to:o},e):e)),l)};d.propTypes={title:o.a.string.isRequired,children:o.a.node.isRequired,titleHref:o.a.string,extraStyles:o.a.array},e.a=d},162:function(t,e,s){"use strict";var n=s(26),r=s(34),i=s(165),c="".startsWith;n(n.P+n.F*s(166)("startsWith"),"String",{startsWith:function(t){var e=i(this,t,"startsWith"),s=r(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),n=String(t);return c?c.call(e,n,s):e.slice(s,s+n.length)===n}})},165:function(t,e,s){var n=s(75),r=s(27);t.exports=function(t,e,s){if(n(e))throw TypeError("String#"+s+" doesn't accept regex!");return String(r(t))}},166:function(t,e,s){var n=s(3)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(s){try{return e[n]=!1,!"/./"[t](e)}catch(t){}}return!0}},167:function(t,e,s){"use strict";s(74),s(162),s(73);var n=s(6),r=s(0),i=s.n(r),c=s(160),l=s(159);e.a=function(t){var e=t.letter,s=t.terms,r=t.path,o=t.whereToFind,a=e;if("Numbers"===e&&(a="#"),"All"!==e)return Object(n.jsx)(i.a.Fragment,null,Object(n.jsx)("p",null,a),Object(n.jsx)("ul",null,s.length?s.map(function(t,e){return Object(n.jsx)("li",{key:e},Object(n.jsx)(c.Link,{to:o?""+r+encodeURI(t.node.frontmatter.title)+"/":r+"where-to-find/"+t.node.frontmatter.title+"/"},t.node.frontmatter.title))}):"No terms."));var j="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),u={};return j.forEach(function(t){var e=s.filter(function(e){return e.node.frontmatter.title.toUpperCase().startsWith(t)});u[t]=e}),Object(n.jsx)(i.a.Fragment,null,Object(n.jsx)("div",{css:l.o},Object(n.jsx)("p",null,"Operations"),Object(n.jsx)("ul",null,s.filter(function(t){return t.node.frontmatter.title.match(/^\W/)}).map(function(t,e){return Object(n.jsx)("li",{key:e},Object(n.jsx)(c.Link,{to:""+r+t.node.frontmatter.title+"/"},t.node.frontmatter.title))}))),Object(n.jsx)("div",{css:l.o},Object(n.jsx)("p",null,"#"),Object(n.jsx)("ul",null,s.filter(function(t){return t.node.frontmatter.title.match(/^\d/)}).map(function(t,e){return Object(n.jsx)("li",{key:e},Object(n.jsx)(c.Link,{to:""+r+t.node.frontmatter.title+"/"},t.node.frontmatter.title))}))),j.map(function(t,e){return Object(n.jsx)("div",{css:l.o},Object(n.jsx)("p",null,t),Object(n.jsx)("ul",null,u[t].length?u[t].map(function(t,e){return Object(n.jsx)("li",{key:e},Object(n.jsx)(c.Link,{to:""+r+t.node.frontmatter.title+"/"},t.node.frontmatter.title))}):"No terms."))}))}},168:function(t,e,s){var n=s(26),r=s(25),i=s(27),c=/"/g,l=function(t,e,s,n){var r=String(i(t)),l="<"+e;return""!==s&&(l+=" "+s+'="'+String(n).replace(c,"&quot;")+'"'),l+">"+r+"</"+e+">"};t.exports=function(t,e){var s={};s[t]=e(l),n(n.P+n.F*r(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",s)}},169:function(t,e,s){"use strict";var n=s(26),r=s(28),i=s(35),c=s(25),l=[].sort,o=[1,2,3];n(n.P+n.F*(c(function(){o.sort(void 0)})||!c(function(){o.sort(null)})||!s(170)(l)),"Array",{sort:function(t){return void 0===t?l.call(i(this)):l.call(i(this),r(t))}})},170:function(t,e,s){"use strict";var n=s(25);t.exports=function(t,e){return!!t&&n(function(){e?t.call(null,function(){},1):t.call(null)})}},171:function(t,e,s){"use strict";s(168)("bold",function(t){return function(){return t(this,"b","","")}})},172:function(t,e,s){"use strict";s(162),s(74),s(73);var n=s(8),r=s.n(n),i=s(51),c=s.n(i),l=s(6),o=s(0),a=s.n(o),j=s(160),u=s(167),b=s(159),d=function(t){function e(e){var s;return(s=t.call(this,e)||this).state={selected:e.whereToFind?e.selected||"All":e.selected||"Operations"},s.setSelected=s.setSelected.bind(c()(c()(s))),s}r()(e,t);var s=e.prototype;return s.setSelected=function(t){this.setState(function(e){return{selected:t}})},s.render=function(){var t=this,e=this.state.selected,s=this.props.path.split("/InfinityCalcs"),n=s[s.length-1],r="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");if(this.props.headerOnly){var i=this.props.path.split("/"),c=i[1],o=i[2];console.log(this.props.selected);var d="/"+c+"/"+o+"/";return Object(l.jsx)("div",{css:b.p},Object(l.jsx)("ul",null,Object(l.jsx)("li",null,Object(l.jsx)("span",{css:"Operations"===this.state.selected&&b.Y,onClick:function(e){return t.setSelected("Operations")}},Object(l.jsx)(j.Link,{to:d+"?l=Operations"},"Operations"))," |"),Object(l.jsx)("li",null," ",Object(l.jsx)("span",{css:"Numbers"===this.state.selected&&b.Y,onClick:function(e){return t.setSelected("Numbers")}},Object(l.jsx)(j.Link,{to:d+"?l=Numbers"},"#"))," |"),r.map(function(e,s){return Object(l.jsx)("li",{key:s}," ",Object(l.jsx)("span",{css:t.state.selected===e&&b.Y,onClick:function(s){return t.setSelected(e)}},Object(l.jsx)(j.Link,{to:d+"?l="+e},e))," |")}),Object(l.jsx)("li",{css:b.Z}," ",Object(l.jsx)("span",{css:"All"===this.state.selected&&b.Y,onClick:function(e){return t.setSelected("All")}},Object(l.jsx)(j.Link,{to:d},"See all")))))}var p=this.props.terms;return"Operations"===this.state.selected?p=this.props.terms.filter(function(t){return t.node.frontmatter.title.match(/^\W/)}):"Numbers"===this.state.selected?p=this.props.terms.filter(function(t){return t.node.frontmatter.title.match(/^\d/)}):"All"!==this.state.selected&&(p=this.props.terms.filter(function(e){return e.node.frontmatter.title.toUpperCase().startsWith(t.state.selected)})),Object(l.jsx)(a.a.Fragment,null,Object(l.jsx)("div",{css:b.p},Object(l.jsx)("ul",null,Object(l.jsx)("li",null,Object(l.jsx)("span",{css:"Operations"===this.state.selected&&b.Y,onClick:function(e){return t.setSelected("Operations")}},Object(l.jsx)(j.Link,{to:this.props.path+"?l=Operations",replace:!0},"Operations"))," |"),Object(l.jsx)("li",null," ",Object(l.jsx)("span",{css:"Numbers"===this.state.selected&&b.Y,onClick:function(e){return t.setSelected("Numbers")}},Object(l.jsx)(j.Link,{to:this.props.path+"?l=Numbers",replace:!0},"#"))," |"),r.map(function(e,s){return Object(l.jsx)("li",{key:s}," ",Object(l.jsx)("span",{css:t.state.selected===e&&b.Y,onClick:function(s){return t.setSelected(e)}},Object(l.jsx)(j.Link,{to:t.props.path+"?l="+e,replace:!0},e))," |")}),Object(l.jsx)("li",{css:b.Z}," ",Object(l.jsx)("span",{css:"All"===this.state.selected&&b.Y,onClick:function(e){return t.setSelected("All")}},Object(l.jsx)(j.Link,{to:this.props.whereToFind?n:n+"/where-to-find/",replace:!0},"See all"))))),Object(l.jsx)("div",{css:b.n},Object(l.jsx)(u.a,{whereToFind:this.props.whereToFind,path:this.props.path,letter:e,terms:p})))},e}(a.a.Component);e.a=d},173:function(t,e,s){"use strict";s(168)("link",function(t){return function(e){return t(this,"a","href",e)}})}}]);
//# sourceMappingURL=component---src-pages-ti-89-titanium-js-1e49ce42bf93d8d7ad80.js.map