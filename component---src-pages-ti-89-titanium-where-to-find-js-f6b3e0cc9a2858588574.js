(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{160:function(t,e,n){"use strict";n.r(e),n.d(e,"query",function(){return p});var s=n(28),r=(n(166),n(171)),i=n.n(r),o=n(10),a=(n(0),n(169)),c=n(164),l=n(176),u=n(163),p="4104319438";e.default=function(t){var e=t.data,n=i()(t,["data"]),r=e.allMarkdownRemark.edges.sort(function(t,e){return t.node.frontmatter.title.toLowerCase().localeCompare(e.node.frontmatter.title.toLowerCase())});return Object(o.jsx)(a.a,null,Object(o.jsx)(c.a,{title:"TI-89 Titanium"},Object(o.jsx)("div",{css:Object(s.a)([u.k,u.g,u.O])},Object(o.jsx)("h2",null,"Where To Find…"),Object(o.jsx)(l.a,{location:n.location,terms:r}))))}},164:function(t,e,n){"use strict";var s=n(10),r=n(0),i=n.n(r),o=n(4),a=n.n(o),c=n(163),l=function(t){var e=t.title,n=t.children;return Object(s.jsx)(i.a.Fragment,null,Object(s.jsx)("div",{css:c.h},Object(s.jsx)("h1",null,e)),n)};l.propTypes={title:a.a.string.isRequired,children:a.a.node.isRequired},e.a=l},166:function(t,e,n){"use strict";var s=n(14),r=n(29),i=n(30),o=n(27),a=[].sort,c=[1,2,3];s(s.P+s.F*(o(function(){c.sort(void 0)})||!o(function(){c.sort(null)})||!n(167)(a)),"Array",{sort:function(t){return void 0===t?a.call(i(this)):a.call(i(this),r(t))}})},167:function(t,e,n){"use strict";var s=n(27);t.exports=function(t,e){return!!t&&s(function(){e?t.call(null,function(){},1):t.call(null)})}},168:function(t,e,n){"use strict";var s=n(14),r=n(17),i=n(81),o="".startsWith;s(s.P+s.F*n(82)("startsWith"),"String",{startsWith:function(t){var e=i(this,t,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),s=String(t);return o?o.call(e,s,n):e.slice(n,n+s.length)===s}})},176:function(t,e,n){"use strict";n(168),n(80),n(83),n(84);var s=n(8),r=n.n(s),i=n(56),o=n.n(i),a=n(10),c=n(0),l=n.n(c),u=n(165),p=n(163),h=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={opened:n.props.opened},n.toggleDefinition=n.toggleDefinition.bind(o()(o()(n))),n}r()(e,t);var n=e.prototype;return n.UNSAFE_componentWillReceiveProps=function(t){this.setState({opened:t.opened})},n.toggleDefinition=function(){this.setState({opened:!this.state.opened})},n.render=function(){var t=this.props.term,e=this.state.opened?[p.l,p.M]:[p.l,p.y];return Object(a.jsx)("li",{css:e},Object(a.jsx)("div",{onClick:this.toggleDefinition,className:"term"},t.node.frontmatter.title),Object(a.jsx)("div",{className:"definition",dangerouslySetInnerHTML:{__html:t.node.html}}))},e}(l.a.Component),j={name:"131wcsq",styles:"padding-left:4px;"},d=function(t){function e(e){var n;return n=t.call(this,e)||this,console.log("got props"+e),n.state={pathname:e.location.pathname,search:e.location.search?e.location.search.split("?search=")[1]:""},n.updateTermState=n.updateTermState.bind(o()(o()(n))),n}r()(e,t);var n=e.prototype;return n.updateTermState=function(t){var e=t.location.search?t.location.search.split("?search=")[1]:"";this.setState({search:e})},n.UNSAFE_componentWillReceiveProps=function(t){console.log("recieve props"),this.updateTermState(t)},n.render=function(){var t=this;console.log(this.state);var e=this.state.search&&this.state.search[0].toUpperCase()||"All";"@"!==e&&e.match(/^\W/)?e="*":e.match(/^\d/)&&(e="@"),console.log(e);var n="*"===e?"Operations":"@"===e?"#":e,s="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),r=this.props.terms;return"*"===e?r=this.props.terms.filter(function(t){return t.node.frontmatter.title.match(/^\W/)}):"@"===e?r=this.props.terms.filter(function(t){return t.node.frontmatter.title.match(/^\d/)}):"All"!==e&&(r=this.props.terms.filter(function(t){return t.node.frontmatter.title.toUpperCase().startsWith(e)})),Object(a.jsx)(l.a.Fragment,null,Object(a.jsx)("div",{css:p.o},Object(a.jsx)("ul",null,Object(a.jsx)("li",null,Object(a.jsx)("span",{css:"*"===e&&p.L},Object(a.jsx)(u.Link,{to:this.state.pathname+"?search=*"},"Operations"))," |"),Object(a.jsx)("li",null," ",Object(a.jsx)("span",{css:"@"===e&&p.L},Object(a.jsx)(u.Link,{to:this.state.pathname+"?search=@"},"#"))," |"),s.map(function(n,s){return Object(a.jsx)("li",{key:s}," ",Object(a.jsx)("span",{css:e===n&&p.L},Object(a.jsx)(u.Link,{to:t.state.pathname+"?search="+n},n))," |")}),Object(a.jsx)("li",{css:j},Object(a.jsx)("span",{css:"All"===e&&p.L},Object(a.jsx)(u.Link,{to:this.state.pathname},"See all"))))),Object(a.jsx)("div",{css:p.n},Object(a.jsx)("p",{className:"title"},n),Object(a.jsx)("ul",null,r.length?r.map(function(e,n){return Object(a.jsx)(h,{key:n,term:e,opened:t.state.search.toLowerCase()===e.node.frontmatter.title.toLowerCase()})}):"No terms found.")))},e}(l.a.Component);e.a=d}}]);
//# sourceMappingURL=component---src-pages-ti-89-titanium-where-to-find-js-f6b3e0cc9a2858588574.js.map