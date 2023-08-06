"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[847],{847:function(e,n,r){r.r(n);var t=r(439),A=r(791),c=r(689),o=r(87),a=r(299),i=(r(174),r(872)),s=r(184);console.log(i);n.default=function(){var e,n,r=(0,A.useState)(null),u=(0,t.Z)(r,2),h=u[0],p=u[1],g=(0,c.UO)().movieId,x=(0,c.TH)(),H=(0,A.useRef)(null!==(e=null===(n=x.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/");if((0,A.useEffect)((function(){(0,a.Mc)(g).then((function(e){p(e)})).catch((function(e){return console.error("Error fetching movies by id:",e)}))}),[g]),h)return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(o.rU,{to:H.current,children:"Go back"}),h&&(0,s.jsxs)("div",{className:"infoContainer",children:[(0,s.jsx)("div",{children:(0,s.jsx)("img",{src:h.backdrop_path?"http://image.tmdb.org/t/p/w300/".concat(h.backdrop_path):{noImage:i},alt:h.backdrop_path?h.original_title:"noPicture"})}),(0,s.jsxs)("div",{className:"movieDetails",children:[(0,s.jsxs)("h1",{children:[h.original_title," (",h.release_date.slice(0,4),")"]}),(0,s.jsxs)("p",{children:["User Score: ",(10*h.vote_average).toFixed(2),"%"]}),(0,s.jsx)("h2",{children:"Overview "}),(0,s.jsx)("p",{children:h.overview}),(0,s.jsx)("h2",{children:"Genres"}),h.genres.length>0&&(0,s.jsx)("ul",{children:h.genres.map((function(e){return(0,s.jsx)("li",{children:e.name},e.id)}))})]})]}),(0,s.jsx)("h3",{children:"Additional Information"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:(0,s.jsx)(o.rU,{to:"cast",children:"Cast"})}),(0,s.jsx)("li",{children:(0,s.jsx)(o.rU,{to:"reviews",children:"Views"})})]}),(0,s.jsx)(c.j3,{})]})}},299:function(e,n,r){r.d(n,{Cm:function(){return w},E3:function(){return p},E9:function(){return i},Mc:function(){return u},jf:function(){return x}});var t=r(861),A=r(757),c=r.n(A),o=r(243),a="656a2d8477e687091ecc4ce165a9fa7c";function i(){return s.apply(this,arguments)}function s(){return(s=(0,t.Z)(c().mark((function e(){var n,r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(a));case 2:return n=e.sent,r=n.data,e.abrupt("return",r);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function u(e){return h.apply(this,arguments)}function h(){return(h=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(a));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function p(e){return g.apply(this,arguments)}function g(){return(g=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/search/movie?query=".concat(n,"&api_key=").concat(a));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function x(e){return H.apply(this,arguments)}function H(){return(H=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("\nhttps://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(a));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function w(e){return C.apply(this,arguments)}function C(){return(C=(0,t.Z)(c().mark((function e(n){var r,t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("\nhttps://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(a));case 2:return r=e.sent,t=r.data,e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},872:function(e){e.exports="data:image/jpeg;base64,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"}}]);
//# sourceMappingURL=847.d8c540a0.chunk.js.map