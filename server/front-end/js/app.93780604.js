(function(e){function t(t){for(var a,c,o=t[0],s=t[1],u=t[2],l=0,h=[];l<o.length;l++)c=o[l],r[c]&&h.push(r[c][0]),r[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);f&&f(t);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,c=1;c<n.length;c++){var o=n[c];0!==r[o]&&(a=!1)}a&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},c={app:0},r={app:0},i=[];function o(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-1766e60a":"ca518e9c","chunk-2c197028":"0b14e788","chunk-366d6a52":"3cd8e0c6","chunk-68f335bf":"740f11c5","chunk-7fe0d9c4":"ee41a1d1","chunk-87e3db9a":"78c79611"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-1766e60a":1,"chunk-2c197028":1,"chunk-366d6a52":1,"chunk-68f335bf":1,"chunk-7fe0d9c4":1,"chunk-87e3db9a":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise(function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-1766e60a":"34573c4f","chunk-2c197028":"177017fc","chunk-366d6a52":"b8f07c50","chunk-68f335bf":"81e731f2","chunk-7fe0d9c4":"b4820e0b","chunk-87e3db9a":"2b69eef2"}[e]+".css",r=s.p+a,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var u=i[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===r))return t()}var h=document.getElementsByTagName("style");for(o=0;o<h.length;o++){u=h[o],l=u.getAttribute("data-href");if(l===a||l===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||r,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.request=a,delete c[e],f.parentNode.removeChild(f),n(i)},f.href=r;var d=document.getElementsByTagName("head")[0];d.appendChild(f)}).then(function(){c[e]=0}));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise(function(t,n){a=r[e]=[t,n]});t.push(a[2]=i);var u,l=document.getElementsByTagName("head")[0],h=document.createElement("script");h.charset="utf-8",h.timeout=120,s.nc&&h.setAttribute("nonce",s.nc),h.src=o(e),u=function(t){h.onerror=h.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+a+": "+c+")");i.type=a,i.request=c,n[1](i)}r[e]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:h})},12e4);h.onerror=h.onload=u,l.appendChild(h)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var h=0;h<u.length;h++)t(u[h]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"07bb":function(e,t,n){},"07bf":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d"),n("e4c9");var a=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"god-div"},[n("div",[e.canvasopen?n("canvasnav"):n("div",{staticClass:"hamburger",class:"home"===e.$route.name?"pulse":"",on:{click:e.togglecanvas}},[n("div",{staticClass:"line"}),n("div",{staticClass:"line"}),n("div",{staticClass:"line"})])],1),n("router-view")],1)},r=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"canvas-nav"},[n("div",{staticClass:"big-x",on:{click:e.close}},[n("div",{staticClass:"line"}),n("div",{staticClass:"line"})]),n("div",{staticClass:"canvas-text-con"},[n("div",{staticClass:"canvas-item",on:{click:e.close}},[n("router-link",{attrs:{tag:"h2",to:{path:"/"}}},[e._v("home")])],1),n("div",{staticClass:"canvas-item",on:{click:e.close}},[n("router-link",{attrs:{tag:"h2",to:{path:"/work"}}},[e._v("projects")])],1),n("div",{staticClass:"canvas-item",on:{click:e.close}},[n("router-link",{attrs:{tag:"h2",to:{path:"/cv"}}},[e._v("cv")])],1),n("div",{staticClass:"canvas-item",on:{click:e.close}},[n("router-link",{attrs:{tag:"h2",to:{path:"/blog"}}},[e._v("blog")])],1),e._m(0),e._m(1)])])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"canvas-item email"},[n("h3",[e._v("hamish.clulee@gmail.com")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"icons"},[n("a",{staticClass:"icon-container-item",attrs:{href:"https://github.com/HamishClulee",target:"_blank"}},[n("img",{attrs:{src:"https://more-art-than.science/images/github.svg",height:"30"}})]),n("a",{staticClass:"icon-container-item",attrs:{href:"https://www.linkedin.com/in/hamish-clulee-163b1950/",target:"_blank"}},[n("img",{attrs:{src:"https://more-art-than.science/images/linkedin.svg",height:"30"}})])])}],s={name:"canvasnav",methods:{close:function(){this.$parent.$emit("close-canvas")}}},u=s,l=(n("5a62"),n("2877")),h=Object(l["a"])(u,i,o,!1,null,"f097958c",null);h.options.__file="canvasnav.vue";var f=h.exports,d={name:"app",components:{canvasnav:f},data:function(){return{canvasopen:!1}},mounted:function(){var e=this;this.$on("close-canvas",function(){e.canvasopen=!1})},methods:{togglecanvas:function(){this.canvasopen=!this.canvasopen}}},v=d,p=(n("c261"),n("b0a0"),Object(l["a"])(v,c,r,!1,null,"2fc7f689",null));p.options.__file="App.vue";var m=p.exports,b=n("2f62"),g={windowwidth:0,isauthed:!1},k={windowwidth:function(e){return e.window_width},isauthed:function(e){return e.isauthed}},w={IS_AUTHED:function(e,t){e.isauthed=t}},_=n("bc3a"),y=n.n(_),C=window.location.origin,E=y.a.create({baseURL:C,withCredentials:!0}),S={SESSION_CHALLENGE:function(e){var t=e.commit;E.get("/api/session_challenge").then(function(){t("IS_AUTHED",!0)}).catch(function(){t("IS_AUTHED",!1)})}};a["a"].use(b["a"]);var j=new b["a"].Store({actions:S,getters:k,mutations:w,state:g}),x=n("8c4f"),O=function(){return n.e("chunk-87e3db9a").then(n.bind(null,"6511"))},T=function(){return n.e("chunk-2c197028").then(n.bind(null,"6e42"))},A=function(){return n.e("chunk-366d6a52").then(n.bind(null,"20c8"))},P=function(){return n.e("chunk-7fe0d9c4").then(n.bind(null,"68b7"))},$=function(){return n.e("chunk-68f335bf").then(n.bind(null,"1f6b"))},N=function(){return n.e("chunk-1766e60a").then(n.bind(null,"d45d"))};a["a"].use(x["a"]);var B=new x["a"]({mode:"history",scrollBehavior:function(e,t,n){return n||{x:0,y:0}},routes:[{path:"/",name:"home",component:O},{path:"/work",name:"work",component:T},{path:"/work/ronin",name:"ronin",component:N},{path:"/blog",name:"blog",component:P},{path:"/cv",name:"cv",component:A},{path:"*",name:"notfound",component:$}]});a["a"].use(j),a["a"].use(B),a["a"].config.productionTip=!1,new a["a"]({store:j,router:B,render:function(e){return e(m)}}).$mount("#app")},"5a62":function(e,t,n){"use strict";var a=n("07bf"),c=n.n(a);c.a},b0a0:function(e,t,n){"use strict";var a=n("07bb"),c=n.n(a);c.a},c261:function(e,t,n){"use strict";var a=n("c300"),c=n.n(a);c.a},c300:function(e,t,n){},e4c9:function(e,t,n){}});
//# sourceMappingURL=app.93780604.js.map