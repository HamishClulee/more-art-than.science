(function(t){function e(e){for(var o,i,u=e[0],c=e[1],s=e[2],f=0,d=[];f<u.length;f++)i=u[f],r[i]&&d.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);l&&l(e);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,u=1;u<n.length;u++){var c=n[u];0!==r[c]&&(o=!1)}o&&(a.splice(e--,1),t=i(i.s=n[0]))}return t}var o={},r={app:0},a=[];function i(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=o,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)i.d(n,o,function(e){return t[e]}.bind(null,o));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"085d":function(t,e,n){"use strict";var o=n("d6fb"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d"),n("e4c9");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"god-div"},[n("router-view")],1)},a=[],i={name:"app"},u=i,c=(n("86b3"),n("2877")),s=Object(c["a"])(u,r,a,!1,null,"270774ba",null);s.options.__file="App.vue";var l=s.exports,f=n("2f62"),d={windowwidth:0,isauthed:!1},p={windowwidth:function(t){return t.window_width},isauthed:function(t){return t.isauthed}},h={IS_AUTHED:function(t,e){t.isauthed=e}},v=n("bc3a"),m=n.n(v),_=window.location.origin,b=m.a.create({baseURL:_,withCredentials:!0}),w={SESSION_CHALLENGE:function(t){var e=t.commit;b.get("/api/session_challenge").then(function(){e("IS_AUTHED",!0)}).catch(function(){e("IS_AUTHED",!1)})}};o["a"].use(f["a"]);var g=new f["a"].Store({actions:w,getters:p,mutations:h,state:d}),y=n("8c4f"),O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-con"},[n("h1",[t._v("welcome to more-art-than.science")]),n("h6",[t._v("test deploy")])])}],S={name:"home",data:function(){return{}},mounted:function(){},methods:{},computed:{}},j=S,x=(n("d544"),Object(c["a"])(j,O,E,!1,null,"7931a0ac",null));x.options.__file="home.vue";var P=x.exports,C=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},T=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"not-found"}},[n("div",{staticClass:"circles"},[n("p",{staticClass:"text-color-control"},[t._v("404"),n("br"),n("small",{staticClass:"text-color-control"},[t._v("PAGE NOT FOUND")])])])])}],A={name:"PageNotFound",data:function(){return{}},mounted:function(){},methods:{},computed:{}},$=A,N=(n("085d"),Object(c["a"])($,C,T,!1,null,"4bca5bf2",null));N.options.__file="notfound.vue";var U=N.exports;o["a"].use(y["a"]);var D=new y["a"]({mode:"history",routes:[{path:"/",name:"home",component:P},{path:"*",name:"notfound",component:U}]});o["a"].use(g),o["a"].use(D),o["a"].config.productionTip=!1,new o["a"]({store:g,router:D,render:function(t){return t(l)}}).$mount("#app")},"86b3":function(t,e,n){"use strict";var o=n("ad39"),r=n.n(o);r.a},ad39:function(t,e,n){},d544:function(t,e,n){"use strict";var o=n("ea14"),r=n.n(o);r.a},d6fb:function(t,e,n){},e4c9:function(t,e,n){},ea14:function(t,e,n){}});
//# sourceMappingURL=app.5e0ac87e.js.map