"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[597],{597:function(t,n,e){e.r(n);var r=e(439),a=e(689),c=e(791),u=e(952),i=e(717),s=e(184);n.default=function(){var t=(0,a.UO)().id,n=(0,c.useState)(null),e=(0,r.Z)(n,2),o=e[0],p=e[1];return(0,c.useEffect)((function(){var n;null===(n=(0,u.Jh)(t))||void 0===n||n.then(p)}),[t]),o&&(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{children:"Cast:"}),(0,s.jsx)("ul",{children:0===o.length?(0,s.jsx)("p",{children:"We don't have any casts for this movie"}):o.map((function(t,n){var e=t.profile_path,r=t.name,a=t.character,c=t.actor_id;return(0,s.jsxs)("li",{children:[(0,s.jsxs)("p",{children:["Character: ",a||"none"]}),(0,s.jsxs)("p",{children:["Name: ",r||"none"]}),(0,s.jsx)(i.Z,{width:100,url:e,alt:r}),(0,s.jsx)("br",{})]},"".concat(c,"-").concat(n))}))})]})}},717:function(t,n,e){var r=e(184);n.Z=function(t){var n=t.url,e=t.alt,a=t.width;return(0,r.jsx)("img",{width:a,src:n?"https://image.tmdb.org/t/p/w500"+n:"https://crawfordroofing.com.au/wp-content/uploads/2018/04/No-image-available-2.jpg",alt:e})}},952:function(t,n,e){e.d(n,{Hg:function(){return o},Jh:function(){return v},Kf:function(){return f},TP:function(){return h},_r:function(){return w}});var r=e(861),a=e(757),c=e.n(a),u=e(243),i="https://api.themoviedb.org/3/",s="b1c5726376c451f621f2d4b8c84b5c09";function o(){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(c().mark((function t(){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)(i+"trending/all/day?api_key=".concat(s));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function f(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)(i+"search/movie?api_key=".concat(s,"&language=en-US&page=1&include_adult=false&query=").concat(n));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)(i+"movie/".concat(n,"?api_key=").concat(s,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function v(t){return m.apply(this,arguments)}function m(){return(m=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)(i+"movie/".concat(n,"/credits?api_key=").concat(s,"&language=en-US"));case 2:return e=t.sent,t.abrupt("return",e.data.cast);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function w(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(c().mark((function t(n){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,u.Z)(i+"movie/".concat(n,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})))).apply(this,arguments)}}}]);
//# sourceMappingURL=597.670c31bf.chunk.js.map