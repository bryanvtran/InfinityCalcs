(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{145:function(t,e,n){"use strict";n.r(e);n(173),n(174);var i=n(24),r=n(163),o=n.n(r),a=n(6),c=n(0),s=n.n(c),l=n(148),u=n(159),d=n(161),p=(n(175),n(73),n(8)),b=n.n(p),x=n(52),g=n.n(x),j=n(147),h=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={selected:"A"},n.setSelected=n.setSelected.bind(g()(g()(n))),n}b()(e,t);var n=e.prototype;return n.setSelected=function(t){this.setState(function(e){return{selected:t}})},n.render=function(){var t=this,e="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split(""),n=this.props.terms.filter(function(e){return e.node.frontmatter.title.toUpperCase().startsWith(t.state.selected)});return Object(a.jsx)(s.a.Fragment,null,Object(a.jsx)("div",{css:j.m},Object(a.jsx)("ul",null,e.map(function(e,n){return Object(a.jsx)("li",{key:n}," ",Object(a.jsx)("span",{css:t.state.selected===e?j.C:{},onClick:function(n){return t.setSelected(e)}},e)," |")}),Object(a.jsx)("li",{css:j.D}," ",Object(a.jsx)(l.Link,{to:this.props.path+"/where-to-find/"},"See all")))),Object(a.jsx)("div",{css:j.l},Object(a.jsx)("p",null,this.state.selected),Object(a.jsx)("ul",null,n.length?n.map(function(t,e){return Object(a.jsx)("li",{key:e},Object(a.jsx)(l.Link,{to:""},t.node.frontmatter.title))}):"No terms found.")))},e}(s.a.Component);n.d(e,"query",function(){return f});e.default=function(t){var e=t.data,n=o()(t,["data"]),r=e.allMarkdownRemark.edges,c=function(t){t.currentTarget.parentElement.classList.toggle("active")};return Object(a.jsx)(u.a,null,Object(a.jsx)(d.a,{title:"TI-84 Plus"},Object(a.jsx)("div",{css:Object(i.a)([j.k,j.g])},Object(a.jsx)("h2",null,"Getting Started"),Object(a.jsx)("p",null,"TI-84 Plus is a versatile, powerful graphing calculator. Take a look at the guide below if you’re just starting out."),Object(a.jsx)("div",{css:j.j},Object(a.jsx)(l.Link,{css:Object(i.a)([j.t,j.f]),to:"/ti-84-plus/starters-guide"},"Starter's Guide"))),Object(a.jsx)("div",{css:Object(i.a)([j.k,j.g])},Object(a.jsx)("h2",null,"Where To Find…"),Object(a.jsx)(h,{path:n.location.pathname,terms:r})),Object(a.jsx)("div",{css:Object(i.a)([j.k,j.g])},Object(a.jsx)("h2",null,"Solving Math Problems"),Object(a.jsx)("ul",{css:j.u},Object(a.jsx)("li",null,Object(a.jsx)(l.Link,{to:""},"Pre-Algebra")),Object(a.jsx)("li",null,Object(a.jsx)(l.Link,{to:""},"Algebra")),Object(a.jsx)("li",null,Object(a.jsx)(l.Link,{to:""},"Geometry")),Object(a.jsx)("li",null,Object(a.jsx)(l.Link,{to:""},"Trigonometry")),Object(a.jsx)("li",null,Object(a.jsx)(l.Link,{to:""},"Calculus")),Object(a.jsx)("li",null,Object(a.jsx)(l.Link,{to:""},"Statistics")))),Object(a.jsx)("div",{css:Object(i.a)([j.k,j.g])},Object(a.jsx)("h2",null,"Programming"),Object(a.jsx)("div",{css:j.A},Object(a.jsx)("div",{className:"wrapper"},Object(a.jsx)("div",{onClick:c,className:"title"},"Mid-Point Formula"),Object(a.jsx)("div",{className:"definition"},Object(a.jsx)("p",null,"Formula"),Object(a.jsx)("p",null,"Youtube Video"))),Object(a.jsx)("div",{className:"wrapper"},Object(a.jsx)("div",{onClick:c,className:"title"},"Quadratic Formula"),Object(a.jsx)("div",{className:"definition"},Object(a.jsx)("p",null,"Formula"),Object(a.jsx)("p",null,"Youtube Video"))),Object(a.jsx)("div",{className:"wrapper"},Object(a.jsx)("div",{onClick:c,className:"title"},"Distance Formula"),Object(a.jsx)("div",{className:"definition"},Object(a.jsx)("p",null,"Formula"),Object(a.jsx)("p",null,"Youtube Video"))))),Object(a.jsx)("div",{css:Object(i.a)([j.k,j.g,j.z])},"ad goes here")))};var f="1146724231"},147:function(t,e,n){"use strict";n(51);var i={black:"#111",white:"#FFF",blue:"#3785E3",lightBlue:"#80D7FA",teal:"#2FC4DF",lightBlueBg:"#DBF5FA",red:"#EF8087",green:"#63CC9F",purple:"#9589F0"},r=n(153),o=n.n(r),a=n(154),c=n.n(a),s=n(155),l=n.n(s);n.d(e,"t",function(){return d}),n.d(e,"j",function(){return p}),n.d(e,"f",function(){return b}),n.d(e,"D",function(){return x}),n.d(e,"a",function(){return g}),n.d(e,"C",function(){return f}),n.d(e,"k",function(){return m}),n.d(e,"v",function(){return A}),n.d(e,"y",function(){return O}),n.d(e,"w",function(){return v}),n.d(e,"x",function(){return k}),n.d(e,"n",function(){return y}),n.d(e,"r",function(){return C}),n.d(e,"o",function(){return w}),n.d(e,"p",function(){return F}),n.d(e,"q",function(){return S}),n.d(e,"E",function(){return B}),n.d(e,"s",function(){return L}),n.d(e,"B",function(){return T}),n.d(e,"b",function(){return E}),n.d(e,"e",function(){return P}),n.d(e,"c",function(){return R}),n.d(e,"d",function(){return U}),n.d(e,"i",function(){return Q}),n.d(e,"h",function(){return V}),n.d(e,"g",function(){return I}),n.d(e,"z",function(){return Y}),n.d(e,"m",function(){return q}),n.d(e,"l",function(){return W}),n.d(e,"u",function(){return G}),n.d(e,"A",function(){return D});var u=Object.assign({padding:"48px 32px"},{"@media(max-width: 767px)":{padding:"24px 16px"}}),d={color:i.lightBlue,textDecoration:"underline"},p={textAlign:"center"},b={fontWeight:600},x={fontSize:".9em"},g={":after":{transformOrigin:"left !important",transform:"scaleX(1) !important"}},j={position:"relative",":after":{content:'""',position:"absolute",bottom:"-4px",left:"2px",height:"2px",width:"20px",backgroundColor:i.blue,transitionOrigin:"right",transform:"scaleX(0)",transition:"transform .3s"},":hover":{":after":{transformOrigin:"left",transform:"scaleX(1)"}}},h={position:"relative",":after":{content:'""',position:"absolute",bottom:"-4px",left:"2px",height:"3px",width:"30px",backgroundColor:i.lightBlue}},f={borderBottom:"3px solid "+i.lightBlue},m=Object.assign({margin:"0 auto",maxWidth:960},u),A={padding:"24px 32px",position:"absolute",width:"100%","@media(max-width: 767px)":{padding:"24px 16px",position:"relative"}},O={height:42,margin:0},v={listStyle:"none",float:"right",margin:0,"& li":{display:"inline-block",padding:"0 16px",lineHeight:"42px",margin:0,":last-of-type":{paddingRight:0},"& a, & button":Object.assign({color:i.black,textDecoration:"none",position:"relative",background:"transparent",padding:0},j)}},k={"@media(max-width: 767px)":{display:"none",float:"none",textAlign:"center","& li":{display:"block"}}},y={position:"relative","li &":{paddingRight:14},"& button":{border:"none",cursor:"pointer",outline:"none",zIndex:2,":before":{content:'""',position:"absolute",right:-16,top:"calc(50% - .5em)",width:10,height:"1em",background:"url("+o.a+") no-repeat center center",backgroundSize:"100%"}},"& ul":{display:"none",position:"absolute",top:0,left:-6,margin:0,paddingTop:"2em",width:"calc(100% + 14px)",border:"1px solid "+i.black,textAlign:"center",background:i.white,"& li":{width:"85%",padding:0,zIndex:1,borderTop:"1px solid "+i.black,margin:0,":first-of-type":{border:"none"},"& a":{":hover":{":after":{transform:"scaleX(0)"}}}}}},C={textAlign:"center",padding:"200px 32px",background:"url("+c.a+") bottom no-repeat",backgroundSize:"100%","@media(max-width: 1024px)":{padding:"160px 32px"},"@media(max-width: 767px)":{padding:"32px 16px 64px"},"& h1":{color:i.blue,marginBottom:"12px"}},w={textAlign:"center",padding:"16px 0"},F={height:"3px",border:0,borderTop:"3px solid "+i.black,background:"none",padding:"0 32px",margin:"0 auto",marginBottom:"12px","@media(max-width: 767px)":{padding:"0 16px"}},S=Object.assign({},F,{width:"60%",marginBottom:"64px"}),B={width:"60%",maxWidth:"250px",margin:"0 auto",marginBottom:"64px"},L={height:"1em",lineHeight:1,paddingTop:"2px"},T={fontSize:"1em",fontWeight:600,border:"3px solid "+i.black,display:"inline-block",boxShadow:"2px 2px 4px 0 rgba(0,0,0,0.50)",padding:"0 8px",lineHeight:1.5,marginBottom:"32px"},E={backgroundColor:i.lightBlue},P={backgroundColor:i.red},R={backgroundColor:i.green},U={backgroundColor:i.purple},Q={width:"80%",margin:"0 auto",display:"flex",justifyContent:"center","@media(max-width: 767px)":{width:"100%"},"& a":{border:"3px solid "+i.black,padding:"48px 0",borderRadius:"12px",textAlign:"center",color:i.black,fontWeight:600,margin:"32px",width:"35%",textDecoration:"none",transition:"all .2s ease-in-out",":hover":{transform:"scale(1.03)"},"@media(max-width: 767px)":{width:"100%",margin:"18px"}}},V=Object.assign({},u,{paddingTop:100,paddingBottom:60,textAlign:"center",background:i.lightBlueBg,"& h1":{position:"relative",display:"inline-block",":after":{content:'""',background:"url("+l.a+") repeat-x",height:4,backgroundSize:"contain",width:"100%",position:"absolute",bottom:0,left:0}}}),I={borderBottom:"1px solid "+i.black,"& h2":Object.assign({},h,{fontSize:"1.2em",lineHeight:1.2,marginBottom:32}),"& p":{width:"90%",margin:"0 auto 32px"}},Y={border:"none"},q={"& ul":{listStyle:"none",margin:"1em auto 2em",textAlign:"center","& li":{display:"inline","& span":{cursor:"pointer"},"& a":{textDecoration:"none",color:i.black}}}},W={"& p":{fontWeight:600,fontSize:"1.6em"},"& ul":{maxWidth:600,margin:"0 auto",columnCount:2,columnGap:4,listStylePosition:"inside","& li":{marginBottom:4}}},G={listStyle:"none",margin:"1em auto",columnCount:3,columnGap:16,maxWidth:600,"@media(max-width: 767px)":{columnCount:2},"& li":{"& a":{display:"inline-block",width:"100%",padding:"42px 12px",backgroundColor:i.lightBlue,fontWeight:600,border:"2px solid "+i.black,textAlign:"center",color:i.white,textDecoration:"none","@media(max-width: 767px)":{padding:"32px 6px"}}}},D={listStyle:"none",margin:"1em auto",maxWidth:600,"& .wrapper":{padding:"1em 0",borderBottom:"3px solid "+i.teal},"& .title":{cursor:"pointer",":before":{content:'""',background:"url("+o.a+") no-repeat center center",backgroundSize:".7em",display:"inline-block",height:".9em",width:".9em",transform:"rotate(-90deg)",marginRight:4}},"& .definition":{display:"none",padding:"1em 0 0",textAlign:"center",width:"90%",margin:"0 auto"},"& .active":{"& .title:before":{transform:"rotate(0)"},"& .definition":{display:"block"}}}},148:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return g}),n.d(e,"StaticQueryContext",function(){return b}),n.d(e,"StaticQuery",function(){return x});var i=n(6),r=n(0),o=n.n(r),a=n(4),c=n.n(a),s=n(146),l=n.n(s);n.d(e,"Link",function(){return l.a}),n.d(e,"withPrefix",function(){return s.withPrefix}),n.d(e,"navigate",function(){return s.navigate}),n.d(e,"push",function(){return s.push}),n.d(e,"replace",function(){return s.replace}),n.d(e,"navigateTo",function(){return s.navigateTo});var u=n(149),d=n.n(u);n.d(e,"PageRenderer",function(){return d.a});var p=n(34);n.d(e,"parsePath",function(){return p.a});var b=o.a.createContext({}),x=function(t){return Object(i.jsx)(b.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):Object(i.jsx)("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}x.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},149:function(t,e,n){var i;t.exports=(i=n(151))&&i.default||i},150:function(t){t.exports={data:{site:{siteMetadata:{title:"InfinityCalcs"}}}}},151:function(t,e,n){"use strict";n.r(e);n(51);var i=n(0),r=n.n(i),o=n(4),a=n.n(o),c=n(53),s=n(2),l=function(t){var e=t.location,n=s.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:n},n.json))};l.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},e.default=l},152:function(t,e,n){},153:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAZCAYAAAHS9pe3AAAABGdBTUEAALGPC/xhBQAAAiRJREFUWAnFl/srBFEUx5d/QN7kFVYUEYlI/CHyJxMhhDzzfvOLkvU923ynM2fvuHd2dpm6nXPP43O+c3e22S0UCoUilr2KDVGkBEu/B36TrpRkC9acDtJfoyPWOYMJnRRkfElCViLI7DQdWlZqHHO0A3CElqhxNXZEhVPsdFk2CnHJVeAU7igsNUZBX0MiL5tEQJGdOVfQFYs5Oqn9cgEfi7gajhTxcuWZi61uiIPicJzYxKeVqArbDBleuUt/eNUM6TPQUZeWrEO6DHTCBbUx35A2A52xgJC9HSJfP/0ZLYRAfDV2yIqvQfLynF1Ghb2RzWuEJ3cX3yIH5AGfK15ZMc8vD/xUQWMO5cuAOAg/9DpGIcVd26Zq4YcKemuh3GeF7yvoPSFpNhS+q6CPaTAb98G3FfTJNvv2afBNBX3xQdLyFr6uoG9pTaFxDecj9R7a7Kv7QAGhX77irPlPNHxnabK3KvtiFkAda4fBdumrCPI4/1P8IMSeYVGLthc8JDlZe0cs/Evx/dBxkiL2CvERrIrrv8TL+/EIiwel7Q3iYxVKHYG/Et+N2QdYWiT9O8THHdq8oXqJ78TkPSwK1PYB8UmvsoCCWolvx6wdLC2SvrybKv5bBWjzllQrvhXkLSwK1PYZ8Vnv5BoUhIpvxqwNLC2S/ivi8zXQkhnxm3h5y1GgtvKOXsw8qQ4Nv4mnYPkdsFyH2bmR8lfLnrD8pljNTVaAHzgQKawqe0M5AAAAAElFTkSuQmCC"},154:function(t,e,n){t.exports=n.p+"static/header-bg-d89b9ea703c61048e3a8fbaf72ae9f48.png"},155:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAASCAYAAAFNz+zEAAAABGdBTUEAALGPC/xhBQAAAx5JREFUSA21lc1LVUEYxmdOXq/2sbCFFGQFIdS9FrWQWvQHRIu0wNpIi6IgoY2rSNCj1T6QapEKtWhhVBbU3q2LFto9RhaYEFFQCJbdo9czvb/xzOV6P8wL9sKZZ2be98y88/E8o/qCcEoVmz+9ZOhzaP1+EL4rDrRtLZ4WZVT04/Pcp4Z9TVdLo/wgOxQPpou9ksHXfGfH6OiW9OH2nDLRQ6W9K8thbs+do1u/KH8yPFj8p2v7mUytpxJ62s+Evut06Gf+nFRec2jbkulH+T44p8w93BcsLdPO5yABt5XWPbIF32VZs/2p2uPuhzzKVKneIHst38EI8RIXVBR1+um6V4XO9eo3g9+7Eyrx3KYgI5+X6UckoW3KmNcqXOz0jzXMlxtA9rVLKe+uxCYk9lF+DQTfmJxvSCbqn2ilTxmjfhllLg6kki96phabEjU1zySkVdb3bUWvXLh1qH6cf9YMQIez3iA8KwM91lptp88YM/Jzdq5r8HS8tS6QC7XeYbm4cmgPUmvdIoc54WeyZ8oFVepjE41uHvfk7gxL0A7leS/jG1FxWW4wbklC1byV5Z2wwZtyCpYYSo3JcR6QHZuR3W7308nAzXr9zUxy5/6992XJl+SEcsZE3QPpusE16W7KMVpetbT1c6/t7MIvo702malRZp7ILeXOWZ7Fqa3JwKULbvQeVByAQSCPXLXRSJl7A6m6B/QVm3bKpHOqA6d/JPm+OOh/tLmEjOvYTH2BAlYD1TCb+I0aF5hYlAAUXc0OUREhvGzRFZHppypXyaJUrVw7d7VoJZJBtPeUf+U67rJIgVkyUEGWLIo0YcgTJhIFVJIpfOVsVb7wiIRhyBgmUgaUXKKYUPjGKCyxQMhlUbUDhSSz/XEB4ahCOhDigZBvFaNuEBKCJQnQiUFKEH0F0VgQnbUoWguityCaC8a6S7WVAv0F0GDQ6TB1rGICq26lIDb1NOTGHMFtQwoeUkDIDsqAjbYtpAchPlhIftrO/pmAC3SIQFDnsbAYPxjOz8NBnccDLHlA6CywqhNw/1qRoSFCAyA2YCXBwVfO/gK6yXTDQLn+8AAAAABJRU5ErkJggg=="},156:function(t,e,n){t.exports=n.p+"static/logo-b11e764a3d4a12bfb0c99e6ae725258e.png"},157:function(t,e,n){t.exports=n.p+"static/youtube-91dce21c51b2550595dbe3de3eff6258.png"},158:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAAEVTEalAAAABGdBTUEAALGPC/xhBQAAAsxJREFUOBGVVU1oE1EQfvuXzc8mwVTTBkpViNoKoiDYk5AUTQNCCKUHixbF4sFePAlK6a2ix+rZg6AexB5CLk1ak/amgQqe2kMPCjakWFpN87f523Vms7v5W0P74L2Z98038yZvZl8o0hgnQAxRsIzlJicTKkjIbjgs44aBeRlmBaZIgCLjhM0YzCYNA4yAZVNB1cW+tHSRBn3rV7Go46q+pQHzqqJI6mBiQuZodGqMqiQRuhVAGPc0BL+hkhSh720M8xFzRIkWTA0HJq4oPwsFcml5mXwbHyfn7XYFA2+UFJLngLigoD0WcJjHNJ8/SKUKPXjkfiqFP35BS4NYaPrFj1DoqY1ldb9CrUbORqMvS5L0TAdbFQvDRDKNkihlabW16ndgc7sFmAIdMX2YHnm9Il4PTgfHVRwsW9H2gYEBrLOTAjCfDodtupuBMhiJ5OmHXi9nYGuDZrxeEx3LZJo90GZubuLAobdzuVdNyFgDzqJyn07Ic+c/eUJ+hWytJijNhMro6mpXpbDuaMNz9K7bzGYFfzKpk1Vdt3cmRQ1ZreI1lysHBr3MnSSXwLIJN89ngx7P4ZPh4bLP7f4DJBm+sBkkQ/hZnqbz/v7+A7QjD/noB2YLcnAoJ9g57p3HbJ6CHsYvtGvslkokI4qVEYfDZGYMKWR2Y6McSac/5arVaQx6a7Sv78Nnv9/ZFe2YQGBt7e+X/f1pvLAzFyCDY/ob0s85HDwYTmOmZrinve/BoDBotRqSjwLuwKN0JRbLlyXpFGYqguK5Go//XslkjuLfxUE/9Mc4GK+tFbDKJ3n+9ddAwAqyy7kTwAJeTySKe6L4uE7IG83eFlQDoRveQhXvwaNNWp8VzV6E5+Xm+noROmIRAs5puCYNg6pGSmCY93D5oRWfT8BWkmSZ+JLJ/PbhYTRfr98FXs8nSTvESOLB6CxzFIV/Hb0SUfz/AW3pCmxVMZmSAAAAAElFTkSuQmCC"},159:function(t,e,n){"use strict";var i=n(6),r=n(150),o=n(0),a=n.n(o),c=n(4),s=n.n(c),l=n(160),u=n.n(l),d=n(148),p=(n(152),n(24)),b=n(147),x=n(156),g=n.n(x),j=n(8),h=n.n(j),f=n(52),m=n.n(f),A=function(t){function e(e){var n;return(n=t.call(this,e)||this).state={active:!1},n.handleClick=n.handleClick.bind(m()(m()(n))),n}h()(e,t);var n=e.prototype;return n.handleClick=function(t){t.preventDefault(),this.setState(function(t){return{active:!t.active}})},n.render=function(){return Object(i.jsx)("div",{css:b.n},Object(i.jsx)("button",{css:this.state.active?b.a:{},onClick:this.handleClick,href:"#"},this.props.title),Object(i.jsx)("ul",{style:this.state.active?{display:"block"}:{display:"none"}},a.a.Children.map(this.props.children,function(t){return Object(i.jsx)("li",null,t)})))},e}(a.a.Component);A.propTypes={title:s.a.string.isRequired,children:s.a.node.isRequired};var O=A,v=function(){return Object(i.jsx)("div",{css:b.v},Object(i.jsx)(d.Link,{to:"/"},Object(i.jsx)("img",{src:g.a,alt:"InfinityCalcs",css:b.y})),Object(i.jsx)("ul",{css:Object(p.a)([b.w,b.x])},Object(i.jsx)("li",null,Object(i.jsx)(O,{title:"Calculators"},Object(i.jsx)(d.Link,{to:"/ti-84-plus"},"TI-84 Plus"),Object(i.jsx)(d.Link,{to:"/ti-84-ce"},"TI-84 CE"),Object(i.jsx)(d.Link,{to:"/ti-83-plus"},"TI-83 Plus"),Object(i.jsx)(d.Link,{to:"/ti-89-titanium"},"TI-89"))),Object(i.jsx)("li",null,Object(i.jsx)(d.Link,{to:"/"},"Forum")),Object(i.jsx)("li",null,Object(i.jsx)(d.Link,{to:"/"},"Blog")),Object(i.jsx)("li",null,Object(i.jsx)(d.Link,{to:"/"},"Games"))))},k=(n(51),n(157)),y=n.n(k),C=n(158),w=n.n(C),F=function(){return Object(i.jsx)("div",{css:Object(p.a)(Object.assign({},b.k,b.o))},Object(i.jsx)("hr",{css:b.p}),Object(i.jsx)("hr",{css:b.q}),Object(i.jsx)("a",{href:"https://www.youtube.com/user/MrAcademicTutoring",target:"_blank",rel:"noopener noreferrer"},Object(i.jsx)("img",{src:y.a,alt:"YouTube",css:b.E})),Object(i.jsx)("p",null,"© 2018 Infinity Calcs | Made with ",Object(i.jsx)("img",{src:w.a,alt:"<3",css:b.s})))},S=function(t){var e=t.children;return Object(i.jsx)(d.StaticQuery,{query:"755544856",render:function(t){return Object(i.jsx)(a.a.Fragment,null,Object(i.jsx)(u.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},Object(i.jsx)("html",{lang:"en"})),Object(i.jsx)(v,null),e,Object(i.jsx)(F,null))},data:r})};S.propTypes={children:s.a.node.isRequired};e.a=S},161:function(t,e,n){"use strict";var i=n(6),r=n(0),o=n.n(r),a=n(4),c=n.n(a),s=n(147),l=function(t){var e=t.title,n=t.children;return Object(i.jsx)(o.a.Fragment,null,Object(i.jsx)("div",{css:s.h},Object(i.jsx)("h1",null,e)),n)};l.propTypes={title:c.a.string.isRequired,children:c.a.node.isRequired},e.a=l},164:function(t,e,n){var i=n(26),r=n(27),o=n(25),a=/"/g,c=function(t,e,n,i){var r=String(o(t)),c="<"+e;return""!==n&&(c+=" "+n+'="'+String(i).replace(a,"&quot;")+'"'),c+">"+r+"</"+e+">"};t.exports=function(t,e){var n={};n[t]=e(c),i(i.P+i.F*r(function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}),"String",n)}},173:function(t,e,n){"use strict";n(164)("bold",function(t){return function(){return t(this,"b","","")}})},174:function(t,e,n){"use strict";n(164)("link",function(t){return function(e){return t(this,"a","href",e)}})},175:function(t,e,n){"use strict";var i=n(26),r=n(35),o=n(176),a="".startsWith;i(i.P+i.F*n(177)("startsWith"),"String",{startsWith:function(t){var e=o(this,t,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,e.length)),i=String(t);return a?a.call(e,i,n):e.slice(n,n+i.length)===i}})},176:function(t,e,n){var i=n(74),r=n(25);t.exports=function(t,e,n){if(i(e))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(t))}},177:function(t,e,n){var i=n(3)("match");t.exports=function(t){var e=/./;try{"/./"[t](e)}catch(n){try{return e[i]=!1,!"/./"[t](e)}catch(t){}}return!0}}}]);
//# sourceMappingURL=component---src-pages-ti-84-plus-js-382635cab78e7970b780.js.map