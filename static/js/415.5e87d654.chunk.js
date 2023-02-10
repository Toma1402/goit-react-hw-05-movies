"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[415],{4126:function(n,t,r){r.d(t,{e:function(){return u}});var e=r(3225),a=r(184),u=function(n){var t=n.trends;return(0,a.jsx)(e.PX,{children:t.map((function(n){var t=n.id,r=n.title,u=n.name;return(0,a.jsx)(e.ai,{children:(0,a.jsx)(e.Fg,{to:"/movies/".concat(t),children:r||u})},t)}))})}},3225:function(n,t,r){r.d(t,{Fg:function(){return A},PX:function(){return f},ai:function(){return d},hx:function(){return g}});var e,a,u,c,i=r(168),o=r(6444),s=r(1087),p=r(1674),f=o.ZP.ul(e||(e=(0,i.Z)(["\n  padding-top: 20px;\n  padding-left: 25px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n"]))),d=o.ZP.li(a||(a=(0,i.Z)(["\n  position: relative;\n  padding-left: 10px;\n  &:before {\n    content: '';\n    background-image: url(",");\n    background-size: cover;\n    position: absolute;\n    width: 25px;\n    height: 25px;\n    left: -25px;\n  }\n"])),p),A=(0,o.ZP)(s.OL)(u||(u=(0,i.Z)(["\n  text-decoration: none;\n  color: black;\n  font-size: 19px;\n  font-weight: 600;\n"]))),g=o.ZP.div(c||(c=(0,i.Z)(["\n  padding: 20px;\n"])))},2591:function(n,t,r){r.d(t,{$7:function(){return d},Bt:function(){return f},i5:function(){return s},wr:function(){return o},y:function(){return p}});var e=r(5861),a=r(7757),u=r.n(a),c=r(1912);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="a34ad8d88567ad499afdd0c300d9d1af",o=function(){var n=(0,e.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/all/day?api_key=".concat(i));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,e.Z)(u().mark((function n(t){var r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&query=").concat(t,"&include_adult=false"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},5415:function(n,t,r){r.r(t);var e=r(5861),a=r(9439),u=r(7757),c=r.n(u),i=r(4126),o=r(3225),s=r(2591),p=r(2791),f=r(184);t.default=function(){var n=(0,p.useState)([]),t=(0,a.Z)(n,2),r=t[0],u=t[1];return(0,p.useEffect)((function(){var n=function(){var n=(0,e.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,s.wr)();case 3:t=n.sent,u(t),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();n()}),[]),(0,f.jsx)("main",{children:(0,f.jsxs)(o.hx,{children:[(0,f.jsx)("h1",{children:"Trending today:"}),(0,f.jsx)(i.e,{trends:r})]})})}},1674:function(n){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAABW1JREFUaEPtmQWobFUUhr9nJ7ZiCyoGotiILViIid2FGNiNHRhYiOhTQQXBVkzsViwQFDtADOzuVj5ZW7Zz58ydfe45g3e4Bx6POzNn7/2v+tf69ySG5Jk0JDiYAPJ/82Qvj/jdX10OXPX5ILBV7l0FZLTDjvZ9G6DSnl337gak5wvAFMCf8G9+dfNaHSC9jJO+S3uPWL9XaD0N3A2cBkwL/ALsBJwMrAB8F6s14Z20xpTAH8CFwBLARkD6bDHgcWBr4Kns83+O0QkkLThNHPyWeHFG4AfgVOAEYCHgfWA64OdYp65n0p4aSxC/A48BywKzAZ7lV2Bt4FFgR+A6YKr4bU8gUwNfA9cDe2V+PBw4F5gB2APw7yWB32qCSSDc7zXg0lj/QWBxYOFsb4G9GIbVwH0B0QqfA88BRwFzAZ8BBwB7BpDTgcOA2YGvxghEy38JXAbsCwhkJWBTQJBGw4rAxcC2wE39AtHibwALdMla3e/Gx8a/OeIQblgaXnpEb2qMLyI3DgHuAjapqBjbATf2C8R4/RR4ATgR8LButDewc3jkFODIqGKlADrPKCAr4SXh9QeAVQEPrYF+BJaLsCvyiC9/G0llKKXnCOCcAGLuXAQcA7wMTB+HKSm9ltOfgGWAs2Kts4GHI0cW7JIj2wA39+sRgXwDmFS7ZNXpOMDcmC9y5smwXMnhq35rud849tUjSwPzZ7y1WpTdIiAmuwl8J7B9FlqGk6GWyq+HsmpZhuuGl2FlCX89Q3hflN9FovzKWeuGp4qAGCZvh+VN7sQ3hoLJKVm9A7iRHJPKbx3PaAAj4Hvg3VjgNmDzWFdC9PEc/q4o2bXwB5EndwAzxUarR1k0+XX9E3VO3uOdDQDD6h5gQ2By5IKEaDhvVVp+U7JfE5Uq7X0ocH6Ekrli8pv0VpVkuVJsWtpyf0UcfH/gEWDRCOG0noZ7BSgKrZTstwM7ALMG09tnnRQVyv+tWE0NZ4aYVfCgyIWlAoj5KiGmFqUYiOW3yiPmkKCOBuYMjhkLIRqqdhIJSGMekRA/DFK8Fpg5ut31gTUjwa1eApHl7cvqdMHpHT1ulUxArFrrBbdoIDtv+67dSnNEi78Vdbwz5mXgWYDjWwTSWIuSeMTqYbmbF/goZhN7rDy02vDIQ8H2cpRnMczXifmouEWR2W0Fds3aAUGcMQAgtihylcyenlWAZ+tWrXEPZGhCa2iSfWjK72gtyrghxKoWxbZERhfIIFoUByujY8wtiqyeqyiKDecNqGlUx8onRKfIl0rLr1b4JAQI5R9JzxbCBnLLGLRs6pwQm3xs3e8HbFHWCEXF6HActvu1mygixF4qin2PIJoerJwC3wur3ApsUWGhosFKHlE1cXDaD5g7GkhVE7UtG7i0aRuj7r3AysBa2ajrzH51qUdS1boB2D2zjGKdKoe9l213k+LDM6H12ho5Jer1XFdTb36+NEcSEIUwW+ekgjtInTkgOaiz19JDKp9Fg5WhpYSpdKlH5gE+DgFbvdccalOgs/tV610+Cy3nIOWp4mR/s8c84iA0biRT5w8T+vIYpIzdzULdUALy3qQtEdsSbKJrLMNc3UteObDUI74sb0iI+2TJrsB8QYy6hpxhZix7pzGWUdf9Xg01Xt4ypD24ulmniuJFT9G1gnyhUCYBppldCUjZVMZV92rrosdqqGjtvum2zAlRUaKvi56cg64MHrkq3KuaqPggr8jwAvWp44lOruu8I1Q/0xsHZ1dslnzPpJamvvWf+8R+NKmqy9H0bl3NtwpMN8N0fjbiN72AqBx6SFWT9GgF31EdbPPpto/7Ji+MMF4/HmnzwI2tPQGkMVM2tNCERxoyZGPL/A1e6g9RGPUqawAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=415.5e87d654.chunk.js.map