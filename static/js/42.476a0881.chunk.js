"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[42],{2591:function(n,e,r){r.d(e,{$7:function(){return l},Bt:function(){return p},i5:function(){return o},wr:function(){return u},y:function(){return d}});var t=r(5861),a=r(7757),i=r.n(a),c=r(1912);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s="a34ad8d88567ad499afdd0c300d9d1af",u=function(){var n=(0,t.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/all/day?api_key=".concat(s));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?api_key=").concat(s,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return r=n.sent,n.abrupt("return",r.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(i().mark((function n(e){var r;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(s,"&language=en-US&query=").concat(e,"&include_adult=false"));case 2:return r=n.sent,n.abrupt("return",r.data.results);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},1350:function(n,e,r){r.d(e,{_:function(){return t}});var t="https://image.tmdb.org/t/p/w500"},7042:function(n,e,r){r.r(e),r.d(e,{default:function(){return I}});var t,a,i,c,s,u,o,d,p,l,f,x=r(5861),h=r(9439),v=r(7757),g=r.n(v),Z=r(2591),m=r(2791),j=r(7689),w=r(1350),k=r(168),b=r(6444),y=r(1087),_=b.ZP.div(t||(t=(0,k.Z)(["\n  padding: 20px;\n"]))),P=b.ZP.div(a||(a=(0,k.Z)(["\n  display: flex;\n  gap: 20px;\n  padding: 10px;\n"]))),S=b.ZP.img(i||(i=(0,k.Z)(["\n  border-radius: 10px;\n  height: 500px;\n"]))),U=b.ZP.div(c||(c=(0,k.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n"]))),L=b.ZP.p(s||(s=(0,k.Z)(["\n  font-size: 18px;\n"]))),O=b.ZP.ul(u||(u=(0,k.Z)(["\n  display: flex;\n  gap: 10px;\n"]))),z=b.ZP.div(o||(o=(0,k.Z)(["\n  margin-top: 25px;\n"]))),C=b.ZP.ul(d||(d=(0,k.Z)(["\n  display: flex;\n  gap: 20px;\n  padding-left: 10px;\n"]))),F=b.ZP.li(p||(p=(0,k.Z)(["\n  padding: 10px 20px;\n  background-image: linear-gradient(\n    225deg,\n    #c6ffdd 0%,\n    #fbd786 40%,\n    #f7797d 100%\n  );\n"]))),G=(0,b.ZP)(y.OL)(l||(l=(0,k.Z)(["\n  text-decoration: none;\n  color: black;\n  font-size: 20px;\n"]))),R=r(184),q=function(n){var e=n.details,r=e.poster_path,t=e.title,a=e.name,i=e.vote_average,c=e.overview,s=e.genres;return(0,R.jsxs)(_,{children:[(0,R.jsxs)(P,{children:[(0,R.jsx)(S,{src:w._+r,alt:t||a}),(0,R.jsxs)(U,{children:[(0,R.jsx)("h1",{children:t||a}),(0,R.jsxs)(L,{children:["User Score: ",Math.round(10*i),"%"]}),(0,R.jsx)("h2",{children:"Overview"}),(0,R.jsx)(L,{children:c}),(0,R.jsx)("h3",{children:"Genres"}),(0,R.jsx)(O,{children:s&&s.map((function(n){return(0,R.jsx)("li",{children:n.name},n.id)}))})]})]}),(0,R.jsxs)(z,{children:[(0,R.jsxs)(C,{children:[(0,R.jsx)(F,{children:(0,R.jsx)(G,{to:"cast",children:"Cast"})}),(0,R.jsx)(F,{children:(0,R.jsx)(G,{to:"reviews",children:"Reviews"})})]}),(0,R.jsx)(m.Suspense,{fallback:(0,R.jsx)("div",{children:"Loading"}),children:(0,R.jsx)(j.j3,{})})]})]})},B=(0,b.ZP)(y.OL)(f||(f=(0,k.Z)(["\n  display: flex;\n  margin-top: 15px;\n  margin-left: 30px;\n  text-decoration: none;\n  width: 70px;\n  font-size: 18px;\n  padding: 10px;\n  background-color: white;\n  border-radius: 15px;\n  color: black;\n  border: 1px solid grey;\n"]))),E=function(){return(0,R.jsx)(R.Fragment,{children:(0,R.jsx)(B,{to:"/",children:"Go back"})})},I=function(){var n=(0,j.UO)("").movieId,e=(0,m.useState)({}),r=(0,h.Z)(e,2),t=r[0],a=r[1];return(0,m.useEffect)((function(){var e=function(){var e=(0,x.Z)(g().mark((function e(){var r;return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,Z.i5)(n);case 3:r=e.sent,a(r),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();e()}),[n]),(0,R.jsxs)(R.Fragment,{children:[(0,R.jsx)(E,{}),t&&(0,R.jsx)(q,{details:t})]})}}}]);
//# sourceMappingURL=42.476a0881.chunk.js.map