"use strict";(self.webpackChunkreact_router_dom_example=self.webpackChunkreact_router_dom_example||[]).push([[324],{5658:function(r,t,e){e.d(t,{Z:function(){return v}});var n=e(7689),a=e(1087),u="movieList_list__TWtH3",i="movieList_item__4++3+",s="movieList_poster__ctw9+",c="movieList_title__Jbv61",o="movieList_link__I+0hB",p=e(184),f=function(r){var t=r.items,e=(0,n.TH)(),f=t.map((function(r){var t=r.id,n=r.title,u=r.poster_path;return(0,p.jsx)("li",{className:i,children:(0,p.jsxs)(a.rU,{to:"/movies/".concat(t),state:{from:e},className:o,children:[(0,p.jsx)("img",{className:s,src:"https://image.tmdb.org/t/p/w600_and_h900_bestv2".concat(u),alt:"title",width:"250",height:"370"}),(0,p.jsx)("h3",{className:c,children:n})]})},t)}));return(0,p.jsx)("ul",{className:u,children:f})};f.defaultProps={items:[]};var v=f},9324:function(r,t,e){e.r(t),e.d(t,{default:function(){return l}});var n=e(4165),a=e(1413),u=e(5861),i=e(9439),s=e(2791),c=e(643),o=e(5658),p=e(4714),f="trending_wrap__Phhjr",v=e(184),d=function(){var r=(0,s.useState)({items:[],error:null,loading:!1}),t=(0,i.Z)(r,2),e=t[0],d=t[1];(0,s.useEffect)((function(){var r=function(){var r=(0,u.Z)((0,n.Z)().mark((function r(){var t;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return d((function(r){return(0,a.Z)((0,a.Z)({},r),{},{loading:!0,error:!1})})),r.prev=1,r.next=4,(0,p.Df)();case 4:t=r.sent,d((function(r){return(0,a.Z)((0,a.Z)({},r),{},{loading:!1,items:t})})),r.next=11;break;case 8:r.prev=8,r.t0=r.catch(1),d((function(t){return(0,a.Z)((0,a.Z)({},t),{},{loading:!1,error:r.t0})}));case 11:case"end":return r.stop()}}),r,null,[[1,8]])})));return function(){return r.apply(this,arguments)}}();r()}),[]);var l=e.items,m=e.error,h=e.loading;return(0,v.jsxs)("div",{className:f,children:[(0,v.jsx)("h2",{children:"Trending today"}),m&&(0,v.jsx)("p",{children:"We are sorry, a server error occurred"}),h&&(0,v.jsx)(c.gy,{}),l.length>0&&(0,v.jsx)(o.Z,{items:l})]})},l=function(){return(0,v.jsx)(d,{})}},4714:function(r,t,e){e.d(t,{Df:function(){return c},Pg:function(){return p},Xj:function(){return v},gI:function(){return f},vN:function(){return o}});var n=e(4165),a=e(5861),u=e(4569),i=e.n(u)().create({baseURL:"https://api.themoviedb.org/3/"}),s="5c333966bb14d20047a3fe3d6491ade8",c=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(){var t,e,a,u=arguments;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=u.length>0&&void 0!==u[0]?u[0]:1,r.next=3,i.get("trending/movie/day",{params:{api_key:s,page:t}});case 3:return e=r.sent,a=e.data.results,r.abrupt("return",a);case 6:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),o=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){var e,a,u,c=arguments;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=c.length>1&&void 0!==c[1]?c[1]:1,r.next=3,i.get("search/movie",{params:{api_key:s,page:e,query:t}});case 3:return a=r.sent,u=a.data,r.abrupt("return",u);case 6:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),p=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){var e,a;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("movie/".concat(t),{params:{api_key:s}});case 2:return e=r.sent,a=e.data,r.abrupt("return",a);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),f=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){var e,a;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("movie/".concat(t,"/credits"),{params:{api_key:s}});case 2:return e=r.sent,a=e.data,r.abrupt("return",a);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),v=function(){var r=(0,a.Z)((0,n.Z)().mark((function r(t){var e,a;return(0,n.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.get("movie/".concat(t,"/reviews"),{params:{api_key:s}});case 2:return e=r.sent,a=e.data,r.abrupt("return",a);case 5:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}()}}]);
//# sourceMappingURL=324.0df14c73.chunk.js.map