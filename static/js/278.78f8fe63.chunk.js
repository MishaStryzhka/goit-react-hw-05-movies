"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[278],{487:function(e,r,t){t.d(r,{Z:function(){return o}});var n=t(87),a="ListMovies_item__lLotJ",u=t(184),o=function(e){var r=e.listMovies,t=e.location;return(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("ul",{children:r.length&&r.map((function(e){var r=e.title,o=e.id;return(0,u.jsx)("li",{className:a,children:(0,u.jsx)(n.Link,{to:"/movies/".concat(o),state:{from:t},children:r})},o)}))})})}},350:function(e,r,t){t.r(r);var n=t(861),a=t(439),u=t(757),o=t.n(u),s=t(487),c=t(686),i=t.n(c),p=t(791),h=t(87),f=t(689),l=t(390),v=t(184);r.default=function(){var e=(0,h.useSearchParams)(),r=(0,a.Z)(e,2),t=r[0],u=r[1],c=(0,p.useState)([]),d=(0,a.Z)(c,2),m=d[0],y=d[1],g=(0,f.TH)();console.log(t.get("quvery")),(0,p.useEffect)((function(){function e(){return(e=(0,n.Z)(o().mark((function e(){var r;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.V.fetchMovieQuery(t.get("quvery"));case 3:r=e.sent,y(r.results),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),i().Notify.warning(e.t0.message);case 10:return e.prev=10,e.finish(10);case 12:case"end":return e.stop()}}),e,null,[[0,7,10,12]])})))).apply(this,arguments)}t.get("quvery")&&function(){e.apply(this,arguments)}()}),[t]);return(0,v.jsxs)("div",{className:"section",children:[(0,v.jsxs)("form",{onSubmit:function(e){e.preventDefault(),console.dir(e.target.elements.searchValue.value),u({quvery:e.target.elements.searchValue.value})},children:[(0,v.jsx)("input",{type:"text",id:"searchValue",placeholder:"search movies"}),(0,v.jsx)("button",{type:"submit",children:"search"})]}),0!==m.length&&(0,v.jsx)(s.Z,{listMovies:m,location:g})]})}},390:function(e,r,t){t.d(r,{V:function(){return l}});var n=t(861),a=t(757),u=t.n(a),o=t(243),s="d3e87ea049b6b9a39016714042d8b78c",c=function(){var e=(0,n.Z)(u().mark((function e(){var r;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(s));case 2:if((r=e.sent).data.results){e.next=5;break}return e.abrupt("return",Promise.reject(new Error("Sorry! There is no photo at your request.")));case 5:return e.abrupt("return",r.data.results);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),i=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"?api_key=").concat(s,"&language=en-US"));case 2:if((t=e.sent).data){e.next=5;break}return e.abrupt("return",Promise.reject(new Error("Sorry! There is no photo at your request.")));case 5:return e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(r,"&page=1&include_adult=false"));case 2:if((t=e.sent).data){e.next=5;break}return e.abrupt("return",Promise.reject(new Error("Sorry! There is no photo at your request.")));case 5:return e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),h=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/credits?api_key=").concat(s,"&language=en-US"));case 2:if((t=e.sent).data){e.next=5;break}return e.abrupt("return",Promise.reject(new Error("Sorry! There is no photo at your request.")));case 5:return e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(u().mark((function e(r){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.Z.get("https://api.themoviedb.org/3/movie/".concat(r,"/reviews?api_key=").concat(s,"&language=en-US"));case 2:if((t=e.sent).data){e.next=5;break}return e.abrupt("return",Promise.reject(new Error("Sorry! There is no photo at your request.")));case 5:return e.abrupt("return",t.data);case 6:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}(),l={fetchTrendingMovies:c,fetchMovieById:i,fetchMovieQuery:p,fetchCast:h,fetchReviews:f}}}]);
//# sourceMappingURL=278.78f8fe63.chunk.js.map