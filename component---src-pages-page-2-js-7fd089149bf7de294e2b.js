(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{137:function(t,n,e){"use strict";e.r(n);var i=e(6),r=(e(0),e(146)),a=e(156);n.default=function(){return Object(i.jsx)(a.a,null,Object(i.jsx)("h1",null,"Hi from the second page"),Object(i.jsx)("p",null,"Welcome to page 2"),Object(i.jsx)(r.Link,{to:"/"},"Go back to the homepage"))}},145:function(t,n,e){"use strict";e(51);var i={black:"#111",white:"#FFF",blue:"#3785E3",lightBlue:"#80D7FA",red:"#EF8087",green:"#63CC9F",purple:"#9589F0"},r=e(151),a=e.n(r),o=e(152),c=e.n(o);e.d(n,"a",function(){return s}),e.d(n,"g",function(){return d}),e.d(n,"n",function(){return l}),e.d(n,"p",function(){return p}),e.d(n,"o",function(){return x}),e.d(n,"h",function(){return b}),e.d(n,"l",function(){return g}),e.d(n,"i",function(){return f}),e.d(n,"j",function(){return h}),e.d(n,"k",function(){return m}),e.d(n,"r",function(){return j}),e.d(n,"m",function(){return A}),e.d(n,"q",function(){return k}),e.d(n,"b",function(){return v}),e.d(n,"e",function(){return O}),e.d(n,"c",function(){return y}),e.d(n,"d",function(){return C}),e.d(n,"f",function(){return w});var s={":after":{transformOrigin:"left !important",transform:"scaleX(1) !important"}},u={":after":{content:'""',position:"absolute",bottom:"-4px",left:"2px",height:"2px",width:"20px",backgroundColor:i.blue,transitionOrigin:"right",transform:"scaleX(0)",transition:"transform .3s"},":hover":{":after":{transformOrigin:"left",transform:"scaleX(1)"}}},d={margin:"0 auto",maxWidth:960,padding:"48px 32px","@media(max-width: 767px)":{padding:"24px 16px"}},l={padding:"24px 32px","@media(max-width: 767px)":{padding:"24px 16px"}},p={height:42,margin:0},x={listStyle:"none",float:"right","& li":{display:"inline-block",padding:"0 16px",lineHeight:"42px",":last-of-type":{paddingRight:0},"& a, & button":Object.assign({color:i.black,textDecoration:"none",position:"relative",background:"transparent",padding:0},u)}},b={position:"relative","li &":{paddingRight:14},"& button":{border:"none",cursor:"pointer",outline:"none",zIndex:2,":before":{content:'""',position:"absolute",right:-16,top:4,width:10,height:"1em",background:"url("+a.a+") no-repeat center center",backgroundSize:"100%"}},"& ul":{display:"none",position:"absolute",top:0,left:-6,margin:0,paddingTop:"2em",width:"calc(100% + 14px)",border:"1px solid "+i.black,textAlign:"center",background:i.white,"& li":{width:"85%",padding:0,zIndex:1,borderTop:"1px solid "+i.black,margin:0,":first-of-type":{border:"none"},"& a":{":hover":{":after":{transform:"scaleX(0)"}}}}}},g={textAlign:"center",padding:"100px 32px 200px",background:"url("+c.a+") bottom no-repeat",backgroundSize:"100%","@media(max-width: 1024px)":{padding:"80px 32px 160px"},"@media(max-width: 767px)":{padding:"32px 16px 64px"},"& h1":{color:i.blue,marginBottom:"12px"}},f={textAlign:"center",padding:"16px 0"},h={height:"3px",border:0,borderTop:"3px solid "+i.black,background:"none",padding:"0 32px",margin:"0 auto",marginBottom:"12px","@media(max-width: 767px)":{padding:"0 16px"}},m=Object.assign({},h,{width:"60%",marginBottom:"64px"}),j={width:"60%",maxWidth:"250px",margin:"0 auto",marginBottom:"64px"},A={height:"1em",lineHeight:1,paddingTop:"2px"},k={fontSize:"1em",fontWeight:600,border:"3px solid "+i.black,display:"inline-block",boxShadow:"2px 2px 4px 0 rgba(0,0,0,0.50)",padding:"0 8px",lineHeight:1.5,marginBottom:"32px"},v={backgroundColor:i.lightBlue},O={backgroundColor:i.red},y={backgroundColor:i.green},C={backgroundColor:i.purple},w={width:"80%",margin:"0 auto",display:"flex",justifyContent:"center","@media(max-width: 767px)":{width:"100%"},"& a":{border:"3px solid "+i.black,padding:"48px 0",borderRadius:"12px",textAlign:"center",color:i.black,fontWeight:600,margin:"32px",width:"35%",textDecoration:"none","@media(max-width: 767px)":{width:"100%",margin:"18px"}}}},146:function(t,n,e){"use strict";e.r(n),e.d(n,"graphql",function(){return g}),e.d(n,"StaticQueryContext",function(){return x}),e.d(n,"StaticQuery",function(){return b});var i=e(6),r=e(0),a=e.n(r),o=e(4),c=e.n(o),s=e(144),u=e.n(s);e.d(n,"Link",function(){return u.a}),e.d(n,"withPrefix",function(){return s.withPrefix}),e.d(n,"navigate",function(){return s.navigate}),e.d(n,"push",function(){return s.push}),e.d(n,"replace",function(){return s.replace}),e.d(n,"navigateTo",function(){return s.navigateTo});var d=e(147),l=e.n(d);e.d(n,"PageRenderer",function(){return l.a});var p=e(34);e.d(n,"parsePath",function(){return p.a});var x=a.a.createContext({}),b=function(t){return Object(i.jsx)(x.Consumer,null,function(n){return t.data||n[t.query]&&n[t.query].data?(t.render||t.children)(t.data?t.data.data:n[t.query].data):Object(i.jsx)("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}b.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},147:function(t,n,e){var i;t.exports=(i=e(149))&&i.default||i},148:function(t){t.exports={data:{site:{siteMetadata:{title:"InfinityCalcs"}}}}},149:function(t,n,e){"use strict";e.r(n);e(51);var i=e(0),r=e.n(i),a=e(4),o=e.n(a),c=e(53),s=e(2),u=function(t){var n=t.location,e=s.default.getResourcesForPathnameSync(n.pathname);return r.a.createElement(c.a,Object.assign({location:n,pageResources:e},e.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},n.default=u},150:function(t,n,e){},151:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC0AAAAZCAYAAAHS9pe3AAAABGdBTUEAALGPC/xhBQAAAiRJREFUWAnFl/srBFEUx5d/QN7kFVYUEYlI/CHyJxMhhDzzfvOLkvU923ynM2fvuHd2dpm6nXPP43O+c3e22S0UCoUilr2KDVGkBEu/B36TrpRkC9acDtJfoyPWOYMJnRRkfElCViLI7DQdWlZqHHO0A3CElqhxNXZEhVPsdFk2CnHJVeAU7igsNUZBX0MiL5tEQJGdOVfQFYs5Oqn9cgEfi7gajhTxcuWZi61uiIPicJzYxKeVqArbDBleuUt/eNUM6TPQUZeWrEO6DHTCBbUx35A2A52xgJC9HSJfP/0ZLYRAfDV2yIqvQfLynF1Ghb2RzWuEJ3cX3yIH5AGfK15ZMc8vD/xUQWMO5cuAOAg/9DpGIcVd26Zq4YcKemuh3GeF7yvoPSFpNhS+q6CPaTAb98G3FfTJNvv2afBNBX3xQdLyFr6uoG9pTaFxDecj9R7a7Kv7QAGhX77irPlPNHxnabK3KvtiFkAda4fBdumrCPI4/1P8IMSeYVGLthc8JDlZe0cs/Evx/dBxkiL2CvERrIrrv8TL+/EIiwel7Q3iYxVKHYG/Et+N2QdYWiT9O8THHdq8oXqJ78TkPSwK1PYB8UmvsoCCWolvx6wdLC2SvrybKv5bBWjzllQrvhXkLSwK1PYZ8Vnv5BoUhIpvxqwNLC2S/ivi8zXQkhnxm3h5y1GgtvKOXsw8qQ4Nv4mnYPkdsFyH2bmR8lfLnrD8pljNTVaAHzgQKawqe0M5AAAAAElFTkSuQmCC"},152:function(t,n,e){t.exports=e.p+"static/header-bg-d89b9ea703c61048e3a8fbaf72ae9f48.png"},153:function(t,n,e){t.exports=e.p+"static/logo-b11e764a3d4a12bfb0c99e6ae725258e.png"},154:function(t,n,e){t.exports=e.p+"static/youtube-91dce21c51b2550595dbe3de3eff6258.png"},155:function(t,n){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAAEVTEalAAAABGdBTUEAALGPC/xhBQAAAsxJREFUOBGVVU1oE1EQfvuXzc8mwVTTBkpViNoKoiDYk5AUTQNCCKUHixbF4sFePAlK6a2ix+rZg6AexB5CLk1ak/amgQqe2kMPCjakWFpN87f523Vms7v5W0P74L2Z98038yZvZl8o0hgnQAxRsIzlJicTKkjIbjgs44aBeRlmBaZIgCLjhM0YzCYNA4yAZVNB1cW+tHSRBn3rV7Go46q+pQHzqqJI6mBiQuZodGqMqiQRuhVAGPc0BL+hkhSh720M8xFzRIkWTA0HJq4oPwsFcml5mXwbHyfn7XYFA2+UFJLngLigoD0WcJjHNJ8/SKUKPXjkfiqFP35BS4NYaPrFj1DoqY1ldb9CrUbORqMvS5L0TAdbFQvDRDKNkihlabW16ndgc7sFmAIdMX2YHnm9Il4PTgfHVRwsW9H2gYEBrLOTAjCfDodtupuBMhiJ5OmHXi9nYGuDZrxeEx3LZJo90GZubuLAobdzuVdNyFgDzqJyn07Ic+c/eUJ+hWytJijNhMro6mpXpbDuaMNz9K7bzGYFfzKpk1Vdt3cmRQ1ZreI1lysHBr3MnSSXwLIJN89ngx7P4ZPh4bLP7f4DJBm+sBkkQ/hZnqbz/v7+A7QjD/noB2YLcnAoJ9g57p3HbJ6CHsYvtGvslkokI4qVEYfDZGYMKWR2Y6McSac/5arVaQx6a7Sv78Nnv9/ZFe2YQGBt7e+X/f1pvLAzFyCDY/ob0s85HDwYTmOmZrinve/BoDBotRqSjwLuwKN0JRbLlyXpFGYqguK5Go//XslkjuLfxUE/9Mc4GK+tFbDKJ3n+9ddAwAqyy7kTwAJeTySKe6L4uE7IG83eFlQDoRveQhXvwaNNWp8VzV6E5+Xm+noROmIRAs5puCYNg6pGSmCY93D5oRWfT8BWkmSZ+JLJ/PbhYTRfr98FXs8nSTvESOLB6CxzFIV/Hb0SUfz/AW3pCmxVMZmSAAAAAElFTkSuQmCC"},156:function(t,n,e){"use strict";var i=e(6),r=e(148),a=e(0),o=e.n(a),c=e(4),s=e.n(c),u=e(157),d=e.n(u),l=e(146),p=(e(150),e(145)),x=e(153),b=e.n(x),g=e(8),f=e.n(g),h=e(52),m=e.n(h),j=function(t){function n(n){var e;return(e=t.call(this,n)||this).state={active:!1},e.handleClick=e.handleClick.bind(m()(m()(e))),e}f()(n,t);var e=n.prototype;return e.handleClick=function(t){t.preventDefault(),this.setState(function(t){return{active:!t.active}})},e.render=function(){return Object(i.jsx)("div",{css:p.h},Object(i.jsx)("button",{css:this.state.active?p.a:{},onClick:this.handleClick,href:"#"},this.props.title),Object(i.jsx)("ul",{style:this.state.active?{display:"block"}:{display:"none"}},o.a.Children.map(this.props.children,function(t){return Object(i.jsx)("li",null,t)})))},n}(o.a.Component);j.propTypes={title:s.a.string.isRequired,children:s.a.node.isRequired};var A=j,k=function(){return Object(i.jsx)("div",{css:p.n},Object(i.jsx)(l.Link,{to:"/"},Object(i.jsx)("img",{src:b.a,alt:"InfinityCalcs",css:p.p})),Object(i.jsx)("ul",{css:p.o},Object(i.jsx)("li",null,Object(i.jsx)(A,{title:"Calculators"},Object(i.jsx)(l.Link,{to:"/ti-84-plus"},"TI-84 Plus"),Object(i.jsx)(l.Link,{to:"/ti-84-ce"},"TI-84 CE"),Object(i.jsx)(l.Link,{to:"/ti-83-plus"},"TI-83 Plus"),Object(i.jsx)(l.Link,{to:"/ti-89-titanium"},"TI-89"))),Object(i.jsx)("li",null,Object(i.jsx)(l.Link,{to:"/"},"Forum")),Object(i.jsx)("li",null,Object(i.jsx)(l.Link,{to:"/"},"Blog")),Object(i.jsx)("li",null,Object(i.jsx)(l.Link,{to:"/"},"Games"))))},v=(e(51),e(24)),O=e(154),y=e.n(O),C=e(155),w=e.n(C),B=function(){return Object(i.jsx)("div",{css:Object(v.a)(Object.assign({},p.g,p.i))},Object(i.jsx)("hr",{css:p.j}),Object(i.jsx)("hr",{css:p.k}),Object(i.jsx)("img",{src:y.a,alt:"YouTube",css:p.r}),Object(i.jsx)("p",null,"© 2018 Infinity Calcs | Made with ",Object(i.jsx)("img",{src:w.a,alt:"<3",css:p.m})))},F=function(t){var n=t.children;return Object(i.jsx)(l.StaticQuery,{query:"755544856",render:function(t){return Object(i.jsx)(o.a.Fragment,null,Object(i.jsx)(d.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},Object(i.jsx)("html",{lang:"en"})),Object(i.jsx)(k,null),n,Object(i.jsx)(B,null))},data:r})};F.propTypes={children:s.a.node.isRequired};n.a=F}}]);
//# sourceMappingURL=component---src-pages-page-2-js-7fd089149bf7de294e2b.js.map