(function(t){function e(e){for(var a,c,i=e[0],s=e[1],u=e[2],l=0,f=[];l<i.length;l++)c=i[l],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);d&&d(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(a=!1)}a&&(r.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},c={app:0},o={app:0},r=[];function i(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-52295a37":"34bc8cc3","chunk-5a8532b2":"bb730039","chunk-6312a698":"a98e5116","chunk-68f335bf":"4ab7d29b","chunk-a862518e":"85ff4192","chunk-adadd070":"cbdf76cf","chunk-cff6f680":"5f3f991a","chunk-d51fc08c":"dbde41a1","chunk-2d0abad7":"f2f25e45","chunk-2d0b21b8":"ef501ce2","chunk-2d0b33f1":"1fc02b4f","chunk-2d0c8c05":"bb9c10f6","chunk-2d0f0f41":"c03b2c0a","chunk-2d228ccf":"b19927e5","chunk-2d2302b7":"b4e57142","chunk-2d2375d0":"28424ee9"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-52295a37":1,"chunk-5a8532b2":1,"chunk-6312a698":1,"chunk-68f335bf":1,"chunk-a862518e":1,"chunk-adadd070":1,"chunk-cff6f680":1,"chunk-d51fc08c":1};c[t]?e.push(c[t]):0!==c[t]&&n[t]&&e.push(c[t]=new Promise((function(e,n){for(var a="css/"+({}[t]||t)+"."+{"chunk-52295a37":"d0d23f73","chunk-5a8532b2":"077014c2","chunk-6312a698":"f8e98b6c","chunk-68f335bf":"81e731f2","chunk-a862518e":"3031adb7","chunk-adadd070":"bef9c309","chunk-cff6f680":"21f7540b","chunk-d51fc08c":"36e47527","chunk-2d0abad7":"31d6cfe0","chunk-2d0b21b8":"31d6cfe0","chunk-2d0b33f1":"31d6cfe0","chunk-2d0c8c05":"31d6cfe0","chunk-2d0f0f41":"31d6cfe0","chunk-2d228ccf":"31d6cfe0","chunk-2d2302b7":"31d6cfe0","chunk-2d2375d0":"31d6cfe0"}[t]+".css",o=s.p+a,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var u=r[i],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],l=u.getAttribute("data-href");if(l===a||l===o)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete c[t],d.parentNode.removeChild(d),n(r)},d.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){c[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var r=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=i(t);var f=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src;f.message="Loading chunk "+t+" failed.\n("+a+": "+c+")",f.name="ChunkLoadError",f.type=a,f.request=c,n[1](f)}o[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"07bb":function(t,e,n){},"185c":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d"),n("e4c9");var a=n("2b0e"),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"god-div"},[n("matsnav"),n("router-view")],1)},o=[],r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navbar-con"},[n("div",{staticClass:"navbar-left"}),n("div",{staticClass:"navbar-right"},[n("div",{staticClass:"text-item",class:t.checkvis("home")?"active-route":""},[n("router-link",{attrs:{to:{path:"/"}}},[t._v("home")])],1),n("div",{staticClass:"text-item",class:t.checkvis("cv")?"active-route":""},[n("router-link",{attrs:{to:{path:"/cv"}}},[t._v("CV")])],1),n("div",{staticClass:"text-item",class:t.checkvis("work")?"active-route":""},[n("router-link",{attrs:{to:{path:"/work"}}},[t._v("projects")])],1),n("div",{staticClass:"text-item",class:t.checkvis("blog")?"active-route":""},[n("router-link",{attrs:{to:{path:"/blog"}}},[t._v("blog")])],1)]),n("div",{staticClass:"hamburger",on:{click:t.togglecanvas}},[n("div",{staticClass:"line"}),n("div",{staticClass:"line"}),n("div",{staticClass:"line"})]),t.canvasopen?n("div",{staticClass:"canvas-nav"},[n("div",{staticClass:"canvas-text-con"},[n("div",{staticClass:"big-x",on:{click:t.togglecanvas}},[n("div",{staticClass:"line"}),n("div",{staticClass:"line"})]),n("div",{staticClass:"canvas-item",class:t.checkvis("home")?"active-route canvas":"",on:{click:t.togglecanvas}},[n("router-link",{attrs:{to:{path:"/"}}},[t._v("home")])],1),n("div",{staticClass:"canvas-item",class:t.checkvis("cv")?"active-route canvas":"",on:{click:t.togglecanvas}},[n("router-link",{attrs:{to:{path:"/cv"}}},[t._v("CV")])],1),n("div",{staticClass:"canvas-item",class:t.checkvis("work")?"active-route canvas":"",on:{click:t.togglecanvas}},[n("router-link",{attrs:{to:{path:"/work"}}},[t._v("Projects")])],1),n("div",{staticClass:"canvas-item",class:t.checkvis("blog")?"active-route canvas":"",on:{click:t.togglecanvas}},[n("router-link",{attrs:{to:{path:"/blog"}}},[t._v("blog")])],1)])]):t._e()])},i=[],s=(n("7f7f"),{name:"navbar",data:function(){return{canvasopen:!1}},methods:{togglecanvas:function(){this.canvasopen=!this.canvasopen},routehome:function(){this.$router.push({path:"/"})},checkvis:function(t){return t===this.$route.name}}}),u=s,l=(n("ee69"),n("2877")),f=Object(l["a"])(u,r,i,!1,null,"04c55d2e",null),d=f.exports,h={name:"app",components:{matsnav:d},data:function(){return{canvasopen:!1}},mounted:function(){var t=this;this.$on("close-canvas",(function(){t.canvasopen=!1}))},methods:{togglecanvas:function(){this.canvasopen=!this.canvasopen}}},v=h,p=(n("b077"),n("b0a0"),Object(l["a"])(v,c,o,!1,null,"afd91b0c",null)),b=p.exports,k=n("2f62"),m={windowwidth:0,isauthed:!1},g={windowwidth:function(t){return t.window_width},isauthed:function(t){return t.isauthed}},w={IS_AUTHED:function(t,e){t.isauthed=e}},C=n("bc3a"),y=n.n(C),_=window.location.origin,E=y.a.create({baseURL:_,withCredentials:!0}),x={SESSION_CHALLENGE:function(t){var e=t.commit;E.get("/api/session_challenge").then((function(){e("IS_AUTHED",!0)})).catch((function(){e("IS_AUTHED",!1)}))}};a["a"].use(k["a"]);var S=new k["a"].Store({actions:x,getters:g,mutations:w,state:m}),j=n("8c4f"),O=function(){return n.e("chunk-cff6f680").then(n.bind(null,"6511"))},P=function(){return n.e("chunk-a862518e").then(n.bind(null,"6e42"))},T=function(){return n.e("chunk-52295a37").then(n.bind(null,"20c8"))},A=function(){return n.e("chunk-5a8532b2").then(n.bind(null,"564d"))},L=function(){return n.e("chunk-adadd070").then(n.bind(null,"94c7"))},N=function(){return n.e("chunk-68f335bf").then(n.bind(null,"1f6b"))},$=function(){return n.e("chunk-d51fc08c").then(n.bind(null,"d45d"))},D=function(){return n.e("chunk-6312a698").then(n.bind(null,"fa19"))};a["a"].use(j["a"]);var H=new j["a"]({mode:"history",scrollBehavior:function(t,e,n){return n||{x:0,y:0}},routes:[{path:"/",name:"home",component:O},{path:"/work",name:"work",component:P},{path:"/blog/:urlname",name:"post",component:D},{path:"/work/ronin",name:"ronin",component:$},{path:"/blog",name:"blog",component:A},{path:"/posts/:title",name:"posts",component:L},{path:"/cv",name:"cv",component:T},{path:"*",name:"notfound",component:N}]});a["a"].use(S),a["a"].use(H),a["a"].config.productionTip=!1,new a["a"]({store:S,router:H,render:function(t){return t(b)}}).$mount("#app")},"6e4e":function(t,e,n){},b077:function(t,e,n){"use strict";var a=n("6e4e"),c=n.n(a);c.a},b0a0:function(t,e,n){"use strict";var a=n("07bb"),c=n.n(a);c.a},e4c9:function(t,e,n){},ee69:function(t,e,n){"use strict";var a=n("185c"),c=n.n(a);c.a}});
//# sourceMappingURL=app.955be532.js.map