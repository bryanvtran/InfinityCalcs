(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{140:function(t,e,n){"use strict";n.r(e),n.d(e,"query",function(){return p});var s=n(26),r=(n(155),n(162)),o=n.n(r),i=n(6),a=(n(0),n(160)),c=n(153),l=n(167),u=n(152),p="1520897239";e.default=function(t){var e=t.data,n=o()(t,["data"]),r=e.allMarkdownRemark.edges.sort(function(t,e){return t.node.frontmatter.title.toLowerCase().localeCompare(e.node.frontmatter.title.toLowerCase())});return Object(i.jsx)(a.a,null,Object(i.jsx)(c.a,{title:"TI-83 Plus"},Object(i.jsx)("div",{css:Object(s.a)([u.k,u.g,u.O])},Object(i.jsx)("h2",null,"Where To Find…"),Object(i.jsx)(l.a,{location:n.location,terms:r}))))}},153:function(t,e,n){"use strict";var s=n(6),r=n(0),o=n.n(r),i=n(4),a=n.n(i),c=n(152),l=function(t){var e=t.title,n=t.children;return Object(s.jsx)(o.a.Fragment,null,Object(s.jsx)("div",{css:c.h},Object(s.jsx)("h1",null,e)),n)};l.propTypes={title:a.a.string.isRequired,children:a.a.node.isRequired},e.a=l},155:function(t,e,n){"use strict";var s=n(25),r=n(28),o=n(35),i=n(24),a=[].sort,c=[1,2,3];s(s.P+s.F*(i(function(){c.sort(void 0)})||!i(function(){c.sort(null)})||!n(156)(a)),"Array",{sort:function(t){return void 0===t?a.call(o(this)):a.call(o(this),r(t))}})},156:function(t,e,n){"use strict";var s=n(24);t.exports=function(t,e){return!!t&&s(function(){e?t.call(null,function(){},1):t.call(null)})}},157:function(t,e,n){"use strict";var s=n(25),r=n(34),o=n(158),i="".startsWith;s(s.P+s.F*n(159)("startsWith"),"String",{startsWith:function(t){var e=o(this,t,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),s=String(t);return i?i.call(e,s,n):e.slice(n,n+s.length)===s}})},158:function(t,e,n){var s=n(75),r=n(27);t.exports=function(t,e,n){if(s(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(t))}},159:function(t,e,n){var s=n(3)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[s]=!1,!"/./"[t](e)}catch(t){}}return!0}},167:function(t,e,n){"use strict";n(26),n(157),n(73),n(74),n(76);var s=n(8),r=n.n(s),o=n(51),i=n.n(o),a=n(6),c=n(0),l=n.n(c),u=n(154),p=n(152),h=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={opened:n.props.opened},n.toggleDefinition=n.toggleDefinition.bind(i()(i()(n))),n}r()(e,t);var n=e.prototype;return n.UNSAFE_componentWillReceiveProps=function(t){this.setState({opened:t.opened})},n.toggleDefinition=function(){this.setState({opened:!this.state.opened})},n.render=function(){var t=this.props.term,e=this.state.opened?[p.l,p.M]:[p.l,p.y];return Object(a.jsx)("li",{css:e},Object(a.jsx)("div",{onClick:this.toggleDefinition,className:"term"},t.node.frontmatter.title),Object(a.jsx)("div",{className:"definition",dangerouslySetInnerHTML:{__html:t.node.html}}))},e}(l.a.Component),j={name:"131wcsq",styles:"padding-left:4px;"},d=function(t){function e(e){var n;return n=t.call(this,e)||this,console.log("got props"+e),n.state={pathname:e.location.pathname,search:e.location.search?e.location.search.split("?search=")[1]:""},n.updateTermState=n.updateTermState.bind(i()(i()(n))),n}r()(e,t);var n=e.prototype;return n.updateTermState=function(t){var e=t.location.search?t.location.search.split("?search=")[1]:"";this.setState({search:e})},n.UNSAFE_componentWillReceiveProps=function(t){console.log("recieve props"),this.updateTermState(t)},n.render=function(){var t=this;console.log(this.state);var e=this.state.search&&this.state.search[0].toUpperCase()||"All";"@"!==e&&e.match(/^\W/)?e="*":e.match(/^\d/)&&(e="@"),console.log(e);var n="*"===e?"Operations":"@"===e?"#":e,s="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),r=this.props.terms;return"*"===e?r=this.props.terms.filter(function(t){return t.node.frontmatter.title.match(/^\W/)}):"@"===e?r=this.props.terms.filter(function(t){return t.node.frontmatter.title.match(/^\d/)}):"All"!==e&&(r=this.props.terms.filter(function(t){return t.node.frontmatter.title.toUpperCase().startsWith(e)})),Object(a.jsx)(l.a.Fragment,null,Object(a.jsx)("div",{css:p.o},Object(a.jsx)("ul",null,Object(a.jsx)("li",null,Object(a.jsx)("span",{css:"*"===e&&p.L},Object(a.jsx)(u.Link,{to:this.state.pathname+"?search=*"},"Operations"))," |"),Object(a.jsx)("li",null," ",Object(a.jsx)("span",{css:"@"===e&&p.L},Object(a.jsx)(u.Link,{to:this.state.pathname+"?search=@"},"#"))," |"),s.map(function(n,s){return Object(a.jsx)("li",{key:s}," ",Object(a.jsx)("span",{css:e===n&&p.L},Object(a.jsx)(u.Link,{to:t.state.pathname+"?search="+n},n))," |")}),Object(a.jsx)("li",{css:j},Object(a.jsx)("span",{css:"All"===e&&p.L},Object(a.jsx)(u.Link,{to:this.state.pathname},"See all"))))),Object(a.jsx)("div",{css:p.n},Object(a.jsx)("p",{className:"title"},n),Object(a.jsx)("ul",null,r.length?r.map(function(e,n){return Object(a.jsx)(h,{key:n,term:e,opened:t.state.search.toLowerCase()===e.node.frontmatter.title.toLowerCase()})}):"No terms found.")))},e}(l.a.Component);e.a=d}}]);
//# sourceMappingURL=component---src-pages-ti-83-plus-where-to-find-js-a9b4c6e5c63c296ce359.js.map