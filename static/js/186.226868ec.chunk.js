"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{186:function(e,r,t){t.r(r);var n=t(861),a=t(439),u=t(757),o=t.n(u),c=t(686),s=t.n(c),i=t(791),p=t(689),f=t(390),h=t(184);r.default=function(){var e=(0,p.UO)().movieId,r=(0,i.useState)([]),t=(0,a.Z)(r,2),u=t[0],c=t[1];return(0,i.useEffect)((function(){function r(){return(r=(0,n.Z)(o().mark((function r(){var t;return o().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,f.V.fetchReviews(e);case 3:t=r.sent,c(t.results),r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),s().Notify.warning(r.t0.message);case 10:return r.prev=10,r.finish(10);case 12:case"end":return r.stop()}}),r,null,[[0,7,10,12]])})))).apply(this,arguments)}!function(){r.apply(this,arguments)}()}),[e]),console.log(u),(0,h.jsx)(h.Fragment,{children:(0,h.jsx)("ul",{children:u.map((function(e){return(0,h.jsxs)("li",{children:[(0,h.jsxs)("h3",{children:["Author: ",e.author]}),(0,h.jsx)("p",{children:e.content})]})}))})})}},390:function(e,r,t){t.d(r,{V:function(){return v}});var n=t(861),a=t(757),u=t.n(a),o=t(243),c="d3e87ea049b6b9a39016714042d8b78c",s=function(){var e=(0,n.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(c));case 2:if((r=e.sent).data.results){e.next=5;break}return e.abrupt("return",Promise.reject(new Error("Sorry! There is no photo at your request.")));case 5:return e.abrupt("return",r.data.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"?api_key=").concat(c,"&language=en-US"));case 2:if((t=e.sent).data){e.next=5;break}return e.abrupt("return",Promise.reject(new Error("Sorry! There is no photo at your request.")));case 5:return e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(c,"&language=en-US&query=").concat(r,"&page=1&include_adult=false"));case 2:if((t=e.sent).data){e.next=5;break}return e.abrupt("return",Promise.reject(new Error("Sorry! There is no photo at your request.")));case 5:return e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/credits?api_key=").concat(c,"&language=en-US"));case 2:if((t=e.sent).data){e.next=5;break}return e.abrupt("return",Promise.reject(new Error("Sorry! There is no photo at your request.")));case 5:return e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/reviews?api_key=").concat(c,"&language=en-US"));case 2:if((t=e.sent).data){e.next=5;break}return e.abrupt("return",Promise.reject(new Error("Sorry! There is no photo at your request.")));case 5:return e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),v={fetchTrendingMovies:s,fetchMovieById:i,fetchMovieQuery:p,fetchCast:f,fetchReviews:h}}}]);
//# sourceMappingURL=186.226868ec.chunk.js.map