(function(n){function e(e){for(var a,c,i=e[0],u=e[1],s=e[2],l=0,f=[];l<i.length;l++)c=i[l],r[c]&&f.push(r[c][0]),r[c]=0;for(a in u)Object.prototype.hasOwnProperty.call(u,a)&&(n[a]=u[a]);d&&d(e);while(f.length)f.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],a=!0,c=1;c<t.length;c++){var i=t[c];0!==r[i]&&(a=!1)}a&&(o.splice(e--,1),n=u(u.s=t[0]))}return n}var a={},c={app:0},r={app:0},o=[];function i(n){return u.p+"js/"+({}[n]||n)+"."+{"chunk-05ab17cf":"fd50a6c4","chunk-1b07cf4c":"a7a16da1","chunk-68f335bf":"740f11c5","chunk-78a20a96":"70969597","chunk-7d2afb93":"bf95008a","chunk-7fe0d9c4":"ee41a1d1"}[n]+".js"}function u(e){if(a[e])return a[e].exports;var t=a[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(n){var e=[],t={"chunk-05ab17cf":1,"chunk-1b07cf4c":1,"chunk-68f335bf":1,"chunk-78a20a96":1,"chunk-7d2afb93":1,"chunk-7fe0d9c4":1};c[n]?e.push(c[n]):0!==c[n]&&t[n]&&e.push(c[n]=new Promise(function(e,t){for(var a="css/"+({}[n]||n)+"."+{"chunk-05ab17cf":"2fb3d391","chunk-1b07cf4c":"144bde51","chunk-68f335bf":"81e731f2","chunk-78a20a96":"a6cb3ec8","chunk-7d2afb93":"43dc42c2","chunk-7fe0d9c4":"2affaa12"}[n]+".css",r=u.p+a,o=document.getElementsByTagName("link"),i=0;i<o.length;i++){var s=o[i],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===a||l===r))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){s=f[i],l=s.getAttribute("data-href");if(l===a||l===r)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var a=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+n+" failed.\n("+a+")");o.request=a,delete c[n],d.parentNode.removeChild(d),t(o)},d.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(d)}).then(function(){c[n]=0}));var a=r[n];if(0!==a)if(a)e.push(a[2]);else{var o=new Promise(function(e,t){a=r[n]=[e,t]});e.push(a[2]=o);var s,l=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,u.nc&&f.setAttribute("nonce",u.nc),f.src=i(n),s=function(e){f.onerror=f.onload=null,clearTimeout(d);var t=r[n];if(0!==t){if(t){var a=e&&("load"===e.type?"missing":e.type),c=e&&e.target&&e.target.src,o=new Error("Loading chunk "+n+" failed.\n("+a+": "+c+")");o.type=a,o.request=c,t[1](o)}r[n]=void 0}};var d=setTimeout(function(){s({type:"timeout",target:f})},12e4);f.onerror=f.onload=s,l.appendChild(f)}return Promise.all(e)},u.m=n,u.c=a,u.d=function(n,e,t){u.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},u.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},u.t=function(n,e){if(1&e&&(n=u(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var a in n)u.d(t,a,function(e){return n[e]}.bind(null,a));return t},u.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return u.d(e,"a",e),e},u.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},u.p="/",u.oe=function(n){throw console.error(n),n};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var f=0;f<s.length;f++)e(s[f]);var d=l;o.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},3928:function(n,e,t){},"56d7":function(n,e,t){"use strict";t.r(e);t("cadf"),t("551c"),t("097d"),t("e4c9");var a=t("2b0e"),c=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"god-div"},[t("div",[n.canvasopen?t("canvasnav"):t("div",{staticClass:"hamburger",on:{click:n.togglecanvas}},[t("div",{staticClass:"line"}),t("div",{staticClass:"line"}),t("div",{staticClass:"line"})])],1),t("router-view")],1)},r=[],o=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"canvas-nav"},[t("div",{staticClass:"big-x",on:{click:n.close}},[t("div",{staticClass:"line"}),t("div",{staticClass:"line"})]),t("div",{staticClass:"canvas-text-con"},[t("div",{staticClass:"canvas-item",on:{click:n.close}},[t("router-link",{attrs:{tag:"h2",to:{path:"/"}}},[n._v("home")])],1),t("div",{staticClass:"canvas-item",on:{click:n.close}},[t("router-link",{attrs:{tag:"h2",to:{path:"/work"}}},[n._v("projects")])],1),t("div",{staticClass:"canvas-item",on:{click:n.close}},[t("router-link",{attrs:{tag:"h2",to:{path:"/cv"}}},[n._v("cv")])],1),t("div",{staticClass:"canvas-item",on:{click:n.close}},[t("router-link",{attrs:{tag:"h2",to:{path:"/blog"}}},[n._v("blog")])],1)])])},i=[],u={name:"canvasnav",methods:{close:function(){this.$parent.$emit("close-canvas")}}},s=u,l=(t("789a"),t("2877")),f=Object(l["a"])(s,o,i,!1,null,"7bffd0d7",null);f.options.__file="canvasnav.vue";var d=f.exports,h={name:"app",components:{canvasnav:d},data:function(){return{canvasopen:!1}},mounted:function(){var n=this;this.$on("close-canvas",function(){n.canvasopen=!1})},methods:{togglecanvas:function(){this.canvasopen=!this.canvasopen}}},v=h,p=(t("77df"),Object(l["a"])(v,c,r,!1,null,"6a992a08",null));p.options.__file="App.vue";var m=p.exports,b=t("2f62"),g={windowwidth:0,isauthed:!1},k={windowwidth:function(n){return n.window_width},isauthed:function(n){return n.isauthed}},w={IS_AUTHED:function(n,e){n.isauthed=e}},y=t("bc3a"),_=t.n(y),C=window.location.origin,E=_.a.create({baseURL:C,withCredentials:!0}),S={SESSION_CHALLENGE:function(n){var e=n.commit;E.get("/api/session_challenge").then(function(){e("IS_AUTHED",!0)}).catch(function(){e("IS_AUTHED",!1)})}};a["a"].use(b["a"]);var j=new b["a"].Store({actions:S,getters:k,mutations:w,state:g}),x=t("8c4f"),O=function(){return t.e("chunk-05ab17cf").then(t.bind(null,"6511"))},T=function(){return t.e("chunk-78a20a96").then(t.bind(null,"6e42"))},A=function(){return t.e("chunk-7d2afb93").then(t.bind(null,"20c8"))},P=function(){return t.e("chunk-7fe0d9c4").then(t.bind(null,"68b7"))},N=function(){return t.e("chunk-68f335bf").then(t.bind(null,"1f6b"))},$=function(){return t.e("chunk-1b07cf4c").then(t.bind(null,"d45d"))};a["a"].use(x["a"]);var B=new x["a"]({mode:"history",scrollBehavior:function(n,e,t){return t||{x:0,y:0}},routes:[{path:"/",name:"home",component:O},{path:"/work",name:"work",component:T},{path:"/work/ronin",name:"ronin",component:$},{path:"/blog",name:"blog",component:P},{path:"/cv",name:"cv",component:A},{path:"*",name:"notfound",component:N}]});a["a"].use(j),a["a"].use(B),a["a"].config.productionTip=!1,new a["a"]({store:j,router:B,render:function(n){return n(m)}}).$mount("#app")},"77df":function(n,e,t){"use strict";var a=t("3928"),c=t.n(a);c.a},"789a":function(n,e,t){"use strict";var a=t("e411"),c=t.n(a);c.a},e411:function(n,e,t){},e4c9:function(n,e,t){}});
//# sourceMappingURL=app.62fb6172.js.map