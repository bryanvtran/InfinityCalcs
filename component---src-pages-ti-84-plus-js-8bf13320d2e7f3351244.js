(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{156:function(t,e,s){"use strict";s.r(e),s.d(e,"query",function(){return m});s(174),s(175);var n=s(28),c=(s(167),s(172)),i=s.n(c),r=s(10),l=(s(0),s(166)),a=s(170),o=s(165),u=s(176),j=s(164),d=s(198),b=s.n(d),p=s(199),f=s.n(p),O=s(178),x=s.n(O),h={height:40,width:"auto"};e.default=function(t){var e=t.data,s=i()(t,["data"]),c=e.allMarkdownRemark.edges.sort(function(t,e){return t.node.frontmatter.title.toLowerCase().localeCompare(e.node.frontmatter.title.toLowerCase())}),d=function(t){t.currentTarget.parentElement.classList.toggle("active")};return Object(r.jsx)(a.a,null,Object(r.jsx)(o.a,{title:"TI-84 Plus"},Object(r.jsx)("div",{css:Object(n.a)([j.k,j.g])},Object(r.jsx)("h2",null,"Getting Started"),Object(r.jsx)("p",{className:"body"},"TI-84 Plus is a versatile, powerful graphing calculator. Take a look at the guide below if you’re just starting out."),Object(r.jsx)("div",{css:j.j},Object(r.jsx)(l.Link,{css:Object(n.a)([j.z,j.f]),to:"/ti-84-plus/starters-guide"},"Starter's Guide"))),Object(r.jsx)("div",{css:Object(n.a)([j.k,j.g])},Object(r.jsx)("h2",null,"Where To Find…"),Object(r.jsx)(u.a,{path:s.location.pathname,terms:c})),Object(r.jsx)("div",{css:Object(n.a)([j.k,j.g])},Object(r.jsx)("h2",null,"Solving Math Problems"),Object(r.jsx)("ul",{css:j.A},Object(r.jsx)("li",null,Object(r.jsx)(l.Link,{to:""},"Pre-Algebra")),Object(r.jsx)("li",null,Object(r.jsx)(l.Link,{to:""},"Algebra")),Object(r.jsx)("li",null,Object(r.jsx)(l.Link,{to:""},"Geometry")),Object(r.jsx)("li",null,Object(r.jsx)(l.Link,{to:""},"Trigonometry")),Object(r.jsx)("li",null,Object(r.jsx)(l.Link,{to:""},"Calculus")),Object(r.jsx)("li",null,Object(r.jsx)(l.Link,{to:""},"Statistics")))),Object(r.jsx)("div",{css:Object(n.a)([j.k,j.g])},Object(r.jsx)("h2",null,"Programming"),Object(r.jsx)("div",{css:j.J},Object(r.jsx)("div",{className:"wrapper"},Object(r.jsx)("div",{onClick:d,className:"title"},"Mid-Point Formula"),Object(r.jsx)("div",{className:"definition"},Object(r.jsx)("p",null,Object(r.jsx)("img",{css:h,src:b.a})),Object(r.jsx)("p",null,Object(r.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/7k-kjx6s2Gk",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))),Object(r.jsx)("div",{className:"wrapper"},Object(r.jsx)("div",{onClick:d,className:"title"},"Quadratic Formula"),Object(r.jsx)("div",{className:"definition"},Object(r.jsx)("p",null,Object(r.jsx)("img",{css:h,src:f.a})),Object(r.jsx)("p",null,Object(r.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/9JOnVkrTiwg",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))),Object(r.jsx)("div",{className:"wrapper"},Object(r.jsx)("div",{onClick:d,className:"title"},"Distance Formula"),Object(r.jsx)("div",{className:"definition"},Object(r.jsx)("p",null,Object(r.jsx)("img",{css:h,src:x.a})),Object(r.jsx)("p",null,Object(r.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/5VLQFmXqmko",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})))))),Object(r.jsx)("div",{css:Object(n.a)([j.k,j.g,j.I])},"ad goes here")))};var m="1319835524"},165:function(t,e,s){"use strict";var n=s(10),c=s(0),i=s.n(c),r=s(4),l=s.n(r),a=s(164),o=function(t){var e=t.title,s=t.children;return Object(n.jsx)(i.a.Fragment,null,Object(n.jsx)("div",{css:a.h},Object(n.jsx)("h1",null,e)),s)};o.propTypes={title:l.a.string.isRequired,children:l.a.node.isRequired},e.a=o},167:function(t,e,s){"use strict";var n=s(14),c=s(29),i=s(30),r=s(27),l=[].sort,a=[1,2,3];n(n.P+n.F*(r(function(){a.sort(void 0)})||!r(function(){a.sort(null)})||!s(168)(l)),"Array",{sort:function(t){return void 0===t?l.call(i(this)):l.call(i(this),c(t))}})},168:function(t,e,s){"use strict";var n=s(27);t.exports=function(t,e){return!!t&&n(function(){e?t.call(null,function(){},1):t.call(null)})}},169:function(t,e,s){"use strict";var n=s(14),c=s(17),i=s(81),r="".startsWith;n(n.P+n.F*s(82)("startsWith"),"String",{startsWith:function(t){var e=i(this,t,"startsWith"),s=c(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),n=String(t);return r?r.call(e,n,s):e.slice(s,s+n.length)===n}})},171:function(t,e,s){var n=s(14),c=s(27),i=s(19),r=/"/g,l=function(t,e,s,n){var c=String(i(t)),l="<"+e;return""!==s&&(l+=" "+s+'="'+String(n).replace(r,"&quot;")+'"'),l+">"+c+"</"+e+">"};t.exports=function(t,e){var s={};s[t]=e(l),n(n.P+n.F*c(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",s)}},174:function(t,e,s){"use strict";s(171)("bold",function(t){return function(){return t(this,"b","","")}})},175:function(t,e,s){"use strict";s(171)("link",function(t){return function(e){return t(this,"a","href",e)}})},176:function(t,e,s){"use strict";s(169),s(80),s(83);var n=s(8),c=s.n(n),i=s(56),r=s.n(i),l=s(10),a=s(0),o=s.n(a),u=s(166),j=s(164),d=function(t){function e(e){var s;return(s=t.call(this,e)||this).state={selected:"*"},s.setSelected=s.setSelected.bind(r()(r()(s))),s}c()(e,t);var s=e.prototype;return s.setSelected=function(t){this.setState(function(e){return{selected:t}})},s.render=function(){var t=this,e="*"===this.state.selected?"Operations":"@"===this.state.selected?"#":this.state.selected,s=this.props.path.split("/InfinityCalcs"),n=s[s.length-1],c="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),i=this.props.terms;return"*"===this.state.selected?i=this.props.terms.filter(function(t){return t.node.frontmatter.title.match(/^\W/)}):"@"===this.state.selected?i=this.props.terms.filter(function(t){return t.node.frontmatter.title.match(/^\d/)}):"All"!==this.state.selected&&(i=this.props.terms.filter(function(e){return e.node.frontmatter.title.toUpperCase().startsWith(t.state.selected)})),Object(l.jsx)(o.a.Fragment,null,Object(l.jsx)("div",{css:j.o},Object(l.jsx)("ul",null,Object(l.jsx)("li",null,Object(l.jsx)("span",{css:"*"===this.state.selected&&j.L,onClick:function(e){return t.setSelected("*")}},"Operations")," |"),Object(l.jsx)("li",null," ",Object(l.jsx)("span",{css:"@"===this.state.selected&&j.L,onClick:function(e){return t.setSelected("@")}},"#")," |"),c.map(function(e,s){return Object(l.jsx)("li",{key:s}," ",Object(l.jsx)("span",{css:t.state.selected===e&&j.L,onClick:function(s){return t.setSelected(e)}},e)," |")}),Object(l.jsx)("li",{css:j.N}," ",Object(l.jsx)(u.Link,{to:n+"/where-to-find/"},"See all")))),Object(l.jsx)("div",{css:j.m},Object(l.jsx)("p",null,e),Object(l.jsx)("ul",null,i.length?i.map(function(t,e){return Object(l.jsx)("li",{key:e},Object(l.jsx)(u.Link,{to:n+"where-to-find/?search="+t.node.frontmatter.title},t.node.frontmatter.title))}):"No terms found.")))},e}(o.a.Component);e.a=d},178:function(t,e,s){t.exports=s.p+"static/distanceformula-377de01e96fc261bbc4c9a612a7c2178.png"},198:function(t,e,s){t.exports=s.p+"static/midpointformula-a031c96caef22b3dd3e9e5fed623b449.png"},199:function(t,e,s){t.exports=s.p+"static/quadraticformula-c7d1df45e681c6c773beb39b6e4d9246.png"}}]);
//# sourceMappingURL=component---src-pages-ti-84-plus-js-8bf13320d2e7f3351244.js.map