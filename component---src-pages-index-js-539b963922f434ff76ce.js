(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{139:function(t,e,n){"use strict";n.r(e);var i=n(6),a=(n(0),n(141)),r=n(142),c=n(151),o=n(4),s=n.n(o),u=function(t){var e=t.title,n=t.subtitle;return Object(i.jsx)("div",{css:r.j},Object(i.jsx)("h1",null,e),Object(i.jsx)("p",null,n))};u.propTypes={title:s.a.string,subtitle:s.a.string},u.defaultProps={title:"",subtitle:""};var d=u,l=function(t){var e=t.title;return Object(i.jsx)("h2",{css:r.o},e)};l.propTypes={title:s.a.string},l.defaultProps={title:""};var p=l,b=function(t){var e=t.title,n=t.href,r=t.color;return Object(i.jsx)(a.Link,{to:n,css:r},e)};b.propTypes={title:s.a.string,href:s.a.string,color:s.a.object},b.defaultProps={title:"",href:"",color:{}};var f=b;e.default=function(){return Object(i.jsx)(c.a,null,Object(i.jsx)(d,{title:"Graphing Calculator Help",subtitle:"Tutorials | Programming | Community"}),Object(i.jsx)("div",{css:r.f},Object(i.jsx)(p,{title:"Graphic Calculators"}),Object(i.jsx)("div",{css:r.e},Object(i.jsx)(f,{title:"TI-84 Plus",href:"ti-84-plus",color:r.a}),Object(i.jsx)(f,{title:"TI-84 CE",href:"ti-84-ce",color:r.d})),Object(i.jsx)("div",{css:r.e},Object(i.jsx)(f,{title:"TI-83 Plus",href:"ti-83-plus",color:r.b}),Object(i.jsx)(f,{title:"TI-89 Titanium",href:"ti-89-titanium",color:r.c}))))}},141:function(t,e,n){"use strict";n.r(e),n.d(e,"graphql",function(){return x}),n.d(e,"StaticQueryContext",function(){return b}),n.d(e,"StaticQuery",function(){return f});var i=n(6),a=n(0),r=n.n(a),c=n(4),o=n.n(c),s=n(140),u=n.n(s);n.d(e,"Link",function(){return u.a}),n.d(e,"withPrefix",function(){return s.withPrefix}),n.d(e,"navigate",function(){return s.navigate}),n.d(e,"push",function(){return s.push}),n.d(e,"replace",function(){return s.replace}),n.d(e,"navigateTo",function(){return s.navigateTo});var d=n(143),l=n.n(d);n.d(e,"PageRenderer",function(){return l.a});var p=n(34);n.d(e,"parsePath",function(){return p.a});var b=r.a.createContext({}),f=function(t){return Object(i.jsx)(b.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):Object(i.jsx)("div",null,"Loading (StaticQuery)")})};function x(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}f.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},142:function(t,e,n){"use strict";n(51);var i={black:"#111",blue:"#3785E3",lightBlue:"#80D7FA",red:"#EF8087",green:"#63CC9F",purple:"#9589F0"},a=n(148),r=n.n(a);n.d(e,"f",function(){return c}),n.d(e,"l",function(){return o}),n.d(e,"n",function(){return s}),n.d(e,"m",function(){return u}),n.d(e,"j",function(){return d}),n.d(e,"g",function(){return l}),n.d(e,"h",function(){return p}),n.d(e,"i",function(){return b}),n.d(e,"p",function(){return f}),n.d(e,"k",function(){return x}),n.d(e,"o",function(){return g}),n.d(e,"a",function(){return j}),n.d(e,"d",function(){return m}),n.d(e,"b",function(){return h}),n.d(e,"c",function(){return A}),n.d(e,"e",function(){return y});var c={margin:"0 auto",maxWidth:960,padding:"48px 32px","@media(max-width: 767px)":{padding:"24px 16px"}},o={padding:"24px 32px","@media(max-width: 767px)":{padding:"24px 16px"}},s={height:42,margin:0},u={listStyle:"none",float:"right","& li":{display:"inline-block",padding:"0 12px",lineHeight:"42px",":last-of-type":{paddingRight:0},"& a":{color:i.black,textDecoration:"none"}}},d={textAlign:"center",padding:"100px 32px 200px",background:"url("+r.a+") bottom no-repeat",backgroundSize:"100%","@media(max-width: 1024px)":{padding:"80px 32px 160px"},"@media(max-width: 767px)":{padding:"32px 16px 64px"},"& h1":{color:i.blue,marginBottom:"12px"}},l={textAlign:"center",padding:"16px 0"},p={height:"3px",border:0,borderTop:"3px solid "+i.black,background:"none",padding:"0 32px",margin:"0 auto",marginBottom:"12px","@media(max-width: 767px)":{padding:"0 16px"}},b=Object.assign({},p,{width:"60%",marginBottom:"64px"}),f={width:"60%",maxWidth:"250px",margin:"0 auto",marginBottom:"64px"},x={height:"1em",lineHeight:1,paddingTop:"2px"},g={fontSize:"1em",fontWeight:600,border:"3px solid "+i.black,display:"inline-block",boxShadow:"2px 2px 4px 0 rgba(0,0,0,0.50)",padding:"0 8px",lineHeight:1.5,marginBottom:"32px"},j={backgroundColor:i.lightBlue},m={backgroundColor:i.red},h={backgroundColor:i.green},A={backgroundColor:i.purple},y={width:"80%",margin:"0 auto",display:"flex",justifyContent:"center","@media(max-width: 767px)":{width:"100%"},"& a":{border:"3px solid "+i.black,padding:"48px 0",borderRadius:"12px",textAlign:"center",color:i.black,fontWeight:600,margin:"32px",width:"35%","@media(max-width: 767px)":{width:"100%",margin:"18px"}}}},143:function(t,e,n){var i;t.exports=(i=n(145))&&i.default||i},144:function(t){t.exports={data:{site:{siteMetadata:{title:"InfinityCalcs"}}}}},145:function(t,e,n){"use strict";n.r(e);n(51);var i=n(0),a=n.n(i),r=n(4),c=n.n(r),o=n(53),s=n(2),u=function(t){var e=t.location,n=s.default.getResourcesForPathnameSync(e.pathname);return a.a.createElement(o.a,Object.assign({location:e,pageResources:n},n.json))};u.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},e.default=u},146:function(t,e,n){},147:function(t,e,n){t.exports=n.p+"static/logo-b11e764a3d4a12bfb0c99e6ae725258e.png"},148:function(t,e,n){t.exports=n.p+"static/header-bg-d89b9ea703c61048e3a8fbaf72ae9f48.png"},149:function(t){t.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAAB5klEQVQoz4WRTWgTURDHZz9iCr20oBWLUlQsghdF7UXEInpR0EMRPYgXLyJYhcS2mtJgTn4UrVRtbERBpWApUSSKKCqIKEjBq4LmZRtEbbJrs9n0YJsZ/6/diyA48GPmHd5v5r0h+jusMBtnw1oRbflC9B44X4mmldVQUbSkhrqmjKiuS8pscJQZnVQU6dR3ToI14Cj9I1Rj03PpTUg1nZHSnn2SJ5KCEZXSocNSIFMcspBJSgANivrOHTAGkmAzWBEhaiPTXLfKsldPEX0MYj3y+9Pnue+du3mqtY2La9dzLfeUf+zdz3ky+VvHNi62b5jXYi08AKZBHLwF5w2ii8jpZXYk5RJ9KG/qkMrVa/Xy8W72R2/JzIVBqdxIy+yr1+Kd6edgIosGT6TQ2Mxa2A5yIAbOhcIh5MvLbTsJ4aS7faf4mdt1N94L8bDMDF4RLzEg7uk+gUxqj3NcvXtfnKWtC8KV4AHoDp8/BOEI8niTbac8onfejl1SvTc27/UlOBifYD2dllaGr3OQfcT+yKi4sR52mlsWhC16qnDSZ+AIOGboOmJ34S/e+Bu36qfN/ew6KLMvXkr5xCn5lUxJkH0o+Ffxb2Y4QBNsnOl/kTei8QI2ie3W82RhCaSRRczwbLJaPF/6A6dI+43CWYBsAAAAAElFTkSuQmCC",aspectRatio:2.3884297520661155,src:"/InfinityCalcs/static/91dce21c51b2550595dbe3de3eff6258/045aa/youtube.png",srcSet:"/InfinityCalcs/static/91dce21c51b2550595dbe3de3eff6258/0552a/youtube.png 75w,\n/InfinityCalcs/static/91dce21c51b2550595dbe3de3eff6258/fc3be/youtube.png 150w,\n/InfinityCalcs/static/91dce21c51b2550595dbe3de3eff6258/045aa/youtube.png 300w,\n/InfinityCalcs/static/91dce21c51b2550595dbe3de3eff6258/24f49/youtube.png 450w,\n/InfinityCalcs/static/91dce21c51b2550595dbe3de3eff6258/5497d/youtube.png 600w,\n/InfinityCalcs/static/91dce21c51b2550595dbe3de3eff6258/b2fc3/youtube.png 867w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},150:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAYAAAEVTEalAAAABGdBTUEAALGPC/xhBQAAAsxJREFUOBGVVU1oE1EQfvuXzc8mwVTTBkpViNoKoiDYk5AUTQNCCKUHixbF4sFePAlK6a2ix+rZg6AexB5CLk1ak/amgQqe2kMPCjakWFpN87f523Vms7v5W0P74L2Z98038yZvZl8o0hgnQAxRsIzlJicTKkjIbjgs44aBeRlmBaZIgCLjhM0YzCYNA4yAZVNB1cW+tHSRBn3rV7Go46q+pQHzqqJI6mBiQuZodGqMqiQRuhVAGPc0BL+hkhSh720M8xFzRIkWTA0HJq4oPwsFcml5mXwbHyfn7XYFA2+UFJLngLigoD0WcJjHNJ8/SKUKPXjkfiqFP35BS4NYaPrFj1DoqY1ldb9CrUbORqMvS5L0TAdbFQvDRDKNkihlabW16ndgc7sFmAIdMX2YHnm9Il4PTgfHVRwsW9H2gYEBrLOTAjCfDodtupuBMhiJ5OmHXi9nYGuDZrxeEx3LZJo90GZubuLAobdzuVdNyFgDzqJyn07Ic+c/eUJ+hWytJijNhMro6mpXpbDuaMNz9K7bzGYFfzKpk1Vdt3cmRQ1ZreI1lysHBr3MnSSXwLIJN89ngx7P4ZPh4bLP7f4DJBm+sBkkQ/hZnqbz/v7+A7QjD/noB2YLcnAoJ9g57p3HbJ6CHsYvtGvslkokI4qVEYfDZGYMKWR2Y6McSac/5arVaQx6a7Sv78Nnv9/ZFe2YQGBt7e+X/f1pvLAzFyCDY/ob0s85HDwYTmOmZrinve/BoDBotRqSjwLuwKN0JRbLlyXpFGYqguK5Go//XslkjuLfxUE/9Mc4GK+tFbDKJ3n+9ddAwAqyy7kTwAJeTySKe6L4uE7IG83eFlQDoRveQhXvwaNNWp8VzV6E5+Xm+noROmIRAs5puCYNg6pGSmCY93D5oRWfT8BWkmSZ+JLJ/PbhYTRfr98FXs8nSTvESOLB6CxzFIV/Hb0SUfz/AW3pCmxVMZmSAAAAAElFTkSuQmCC"},151:function(t,e,n){"use strict";var i=n(6),a=n(144),r=n(0),c=n.n(r),o=n(4),s=n.n(o),u=n(152),d=n.n(u),l=n(141),p=(n(146),n(147)),b=n.n(p),f=n(142),x=function(){return Object(i.jsx)("div",{css:f.l},Object(i.jsx)(l.Link,{to:"/"},Object(i.jsx)("img",{src:b.a,alt:"InfinityCalcs",css:f.n})),Object(i.jsx)("ul",{css:f.m},Object(i.jsx)("li",null,Object(i.jsx)(l.Link,{to:"/"},"Calculators")),Object(i.jsx)("li",null,Object(i.jsx)(l.Link,{to:"/"},"Forum")),Object(i.jsx)("li",null,Object(i.jsx)(l.Link,{to:"/"},"Blog")),Object(i.jsx)("li",null,Object(i.jsx)(l.Link,{to:"/"},"Games"))))},g=(n(51),n(24)),j=n(149),m=n(153),h=n.n(m),A=n(150),y=n.n(A),O=function(){return Object(i.jsx)(l.StaticQuery,{query:"3620993032",render:function(t){return Object(i.jsx)(h.a,{fluid:t.placeholderImage.childImageSharp.fluid,css:f.p})},data:j})},k=function(){return Object(i.jsx)("div",{css:Object(g.a)(Object.assign({},f.f,f.g))},Object(i.jsx)("hr",{css:f.h}),Object(i.jsx)("hr",{css:f.i}),Object(i.jsx)(O,null),Object(i.jsx)("p",null,"© 2018 Infinity Calcs | Made with ",Object(i.jsx)("img",{src:y.a,alt:"<3",css:f.k})))},C=function(t){var e=t.children;return Object(i.jsx)(l.StaticQuery,{query:"755544856",render:function(t){return Object(i.jsx)(c.a.Fragment,null,Object(i.jsx)(d.a,{title:t.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},Object(i.jsx)("html",{lang:"en"})),Object(i.jsx)(x,null),e,Object(i.jsx)(k,null))},data:a})};C.propTypes={children:s.a.node.isRequired};e.a=C}}]);
//# sourceMappingURL=component---src-pages-index-js-539b963922f434ff76ce.js.map