(this["webpackJsonpmovie-web-service"]=this["webpackJsonpmovie-web-service"]||[]).push([[0],{56:function(e,t,s){},63:function(e,t,s){},64:function(e,t,s){},65:function(e,t,s){},66:function(e,t,s){},67:function(e,t,s){},68:function(e,t,s){"use strict";s.r(t);var a=s(0),n=s.n(a),r=s(29),c=s.n(r),i=s(8),o=s(2),l=s(17),m=s.n(l),j=s(30),u=s(11),d=s(12),v=s(14),b=s(13),h=s(31),p=s.n(h),O=(s(56),s(1));var x=function(e){var t=e.id,s=e.year,a=e.title,n=e.summary,r=e.poster,c=e.genres;return Object(O.jsx)("div",{className:"movie",children:Object(O.jsxs)(i.b,{to:{pathname:"/movie/".concat(t),state:{year:s,title:a,summary:n,poster:r,genres:c}},children:[Object(O.jsx)("img",{src:r,alt:a,title:a}),Object(O.jsxs)("div",{className:"movie_data",children:[Object(O.jsx)("h3",{className:"movie_title",children:a}),Object(O.jsx)("h5",{className:"movie_year",children:s}),Object(O.jsx)("ul",{className:"movie_genres",children:c.map((function(e,t){return Object(O.jsxs)("li",{className:"genres_genre",children:["#",e]},t)}))}),Object(O.jsxs)("p",{className:"movie_summary",children:[n.slice(0,180),"..."]})]})]})})},g=(s(63),function(e){Object(v.a)(s,e);var t=Object(b.a)(s);function s(){var e;Object(u.a)(this,s);for(var a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={isLoading:!0,movies:[]},e.getMovies=Object(j.a)(m.a.mark((function t(){var s,a;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:s=t.sent,a=s.data.data.movies,e.setState({movies:a,isLoading:!1});case 5:case"end":return t.stop()}}),t)}))),e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,s=e.movies;return Object(O.jsx)("section",{className:"container",children:t?Object(O.jsx)("div",{className:"loader",children:Object(O.jsx)("span",{className:"loader_text",children:"Loading..."})}):Object(O.jsx)("div",{className:"movies",children:s.map((function(e){return Object(O.jsx)(x,{id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres},e.id)}))})})}}]),s}(n.a.Component));s(64);var f=function(e){return console.log(e),Object(O.jsxs)("div",{className:"about_container",children:[Object(O.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(O.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})};s(65);var y=function(e){var t=e.year,s=e.title,a=e.summary,n=e.poster,r=e.genres;return Object(O.jsxs)("div",{className:"movie_detail",children:[Object(O.jsx)("img",{src:n,alt:s,title:s}),Object(O.jsxs)("div",{className:"movie_data",children:[Object(O.jsx)("h2",{className:"movie_detail_title",children:s}),Object(O.jsx)("h5",{className:"movie_detail_year",children:t}),Object(O.jsx)("ul",{className:"movie_detail_genres",children:r.map((function(e,t){return Object(O.jsxs)("li",{className:"detail_genres_genre",children:["#",e]},t)}))}),Object(O.jsx)("p",{className:"movie_detail_summary",children:a})]})]})},_=function(e){Object(v.a)(s,e);var t=Object(b.a)(s);function s(){return Object(u.a)(this,s),t.apply(this,arguments)}return Object(d.a)(s,[{key:"componentDidMount",value:function(){console.log(this.props);var e=this.props,t=e.location,s=e.history;void 0===t.state&&s.push("/")}},{key:"render",value:function(){var e=this.props.location;return console.log(e),e.state?Object(O.jsx)(O.Fragment,{children:Object(O.jsx)(y,{year:e.state.year,title:e.state.title,summary:e.state.summary,poster:e.state.poster,genres:e.state.genres},e.state.id)}):null}}]),s}(n.a.Component);s(66);var N=function(){return Object(O.jsxs)("div",{className:"nav",children:[Object(O.jsx)(i.b,{to:"/",children:"Home"}),Object(O.jsx)(i.b,{to:"/about",children:"About"})]})};s(67);var w=function(){return Object(O.jsxs)(i.a,{children:[Object(O.jsx)(N,{}),Object(O.jsx)(o.a,{path:"/",exact:!0,component:g}),Object(O.jsx)(o.a,{path:"/about",component:f}),Object(O.jsx)(o.a,{path:"/movie/:id",component:_})]})};c.a.render(Object(O.jsx)(w,{}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.069ac2c1.chunk.js.map