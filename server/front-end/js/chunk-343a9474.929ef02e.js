(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-343a9474"],{"0bfb":function(t,n,e){"use strict";var o=e("cb7c");t.exports=function(){var t=o(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},"11e9":function(t,n,e){var o=e("52a7"),r=e("4630"),a=e("6821"),i=e("6a99"),l=e("69a8"),s=e("c69a"),c=Object.getOwnPropertyDescriptor;n.f=e("9e1e")?c:function(t,n){if(t=a(t),n=i(n,!0),s)try{return c(t,n)}catch(e){}if(l(t,n))return r(!o.f.call(t,n),t[n])}},3846:function(t,n,e){e("9e1e")&&"g"!=/./g.flags&&e("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:e("0bfb")})},"52a7":function(t,n){n.f={}.propertyIsEnumerable},"5dbc":function(t,n,e){var o=e("d3f4"),r=e("8b97").set;t.exports=function(t,n,e){var a,i=n.constructor;return i!==e&&"function"==typeof i&&(a=i.prototype)!==e.prototype&&o(a)&&r&&r(t,a),t}},6046:function(t,n,e){"use strict";var o=e("a284"),r=e.n(o);r.a},"6b54":function(t,n,e){"use strict";e("3846");var o=e("cb7c"),r=e("0bfb"),a=e("9e1e"),i="toString",l=/./[i],s=function(t){e("2aba")(RegExp.prototype,i,t,!0)};e("79e5")(function(){return"/a/b"!=l.call({source:"a",flags:"b"})})?s(function(){var t=o(this);return"/".concat(t.source,"/","flags"in t?t.flags:!a&&t instanceof RegExp?r.call(t):void 0)}):l.name!=i&&s(function(){return l.call(this)})},"7c89":function(t,n,e){"use strict";var o=e("8850"),r=e.n(o);r.a},8850:function(t,n,e){},"8b97":function(t,n,e){var o=e("d3f4"),r=e("cb7c"),a=function(t,n){if(r(t),!o(n)&&null!==n)throw TypeError(n+": can't set as prototype!")};t.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(t,n,o){try{o=e("9b43")(Function.call,e("11e9").f(Object.prototype,"__proto__").set,2),o(t,[]),n=!(t instanceof Array)}catch(r){n=!0}return function(t,e){return a(t,e),n?t.__proto__=e:o(t,e),t}}({},!1):void 0),check:a}},9093:function(t,n,e){var o=e("ce10"),r=e("e11e").concat("length","prototype");n.f=Object.getOwnPropertyNames||function(t){return o(t,r)}},a284:function(t,n,e){},aa77:function(t,n,e){var o=e("5ca1"),r=e("be13"),a=e("79e5"),i=e("fdef"),l="["+i+"]",s="​",c=RegExp("^"+l+l+"*"),g=RegExp(l+l+"*$"),u=function(t,n,e){var r={},l=a(function(){return!!i[t]()||s[t]()!=s}),c=r[t]=l?n(p):i[t];e&&(r[e]=c),o(o.P+o.F*l,"String",r)},p=u.trim=function(t,n){return t=String(r(t)),1&n&&(t=t.replace(c,"")),2&n&&(t=t.replace(g,"")),t};t.exports=u},c5f6:function(t,n,e){"use strict";var o=e("7726"),r=e("69a8"),a=e("2d95"),i=e("5dbc"),l=e("6a99"),s=e("79e5"),c=e("9093").f,g=e("11e9").f,u=e("86cc").f,p=e("aa77").trim,b="Number",d=o[b],h=d,f=d.prototype,m=a(e("2aeb")(f))==b,w="trim"in String.prototype,v=function(t){var n=l(t,!1);if("string"==typeof n&&n.length>2){n=w?n.trim():p(n,3);var e,o,r,a=n.charCodeAt(0);if(43===a||45===a){if(e=n.charCodeAt(2),88===e||120===e)return NaN}else if(48===a){switch(n.charCodeAt(1)){case 66:case 98:o=2,r=49;break;case 79:case 111:o=8,r=55;break;default:return+n}for(var i,s=n.slice(2),c=0,g=s.length;c<g;c++)if(i=s.charCodeAt(c),i<48||i>r)return NaN;return parseInt(s,o)}}return+n};if(!d(" 0o1")||!d("0b1")||d("+0x1")){d=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof d&&(m?s(function(){f.valueOf.call(e)}):a(e)!=b)?i(new h(v(n)),e,d):v(n)};for(var j,q=e("9e1e")?c(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),y=0;q.length>y;y++)r(h,j=q[y])&&!r(d,j)&&u(d,j,g(h,j));d.prototype=f,f.constructor=d,e("2aba")(o,b,d)}},d45d:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"temp-con"},[e("div",{staticClass:"image-con"},t._l(t.test,function(t,n){return e("vueimage",{key:n,staticClass:"vueimg",attrs:{imgsrc:"https://more-art-than.science/images/"+t,scrolltrigger:1e3}})}))])},r=[],a=(e("cadf"),e("551c"),e("097d"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"image-con"},[e("div",{staticClass:"base",class:"loaded"===t.status?"show":"hide",attrs:{id:"img-"+t.hash}}),e("svg",{staticClass:"base",class:"loaded"!==t.status?"show":"hide",attrs:{id:"svg-"+t.hash,width:"100%",height:t.svgheight}},[e("rect",{style:{fill:t.perc2color(Math.floor(t.hash/1e7)),stroke:"none"},attrs:{width:"100%",height:t.svgheight}})])])}),i=[],l=(e("6b54"),e("c5f6"),{name:"vueimage",props:{imgsrc:String,scrolltrigger:Number},data:function(){return{image:null,status:"loading",loaderror:!1,hash:null,el:null,hidesvg:!1,attr:"",eltop:null,windowtop:null,scrollticking:!1,scrollloc:0,ratio:null,svgel:null,svgheight:0}},created:function(){this.hash=Math.floor(99999999*Math.random()+1),this.scrollloc=window.scrollY},mounted:function(){var t=this;this.svgel=document.getElementById("svg-".concat(this.hash)),this.svgheight=Math.floor(.66*(this.svgel.getBoundingClientRect().right-this.svgel.getBoundingClientRect().left)),this.windowtop=Math.abs(document.body.getBoundingClientRect().top),window.addEventListener("scroll",this.scrolling),this.windowpos=Math.abs(document.body.getBoundingClientRect().top),this.attr=this.$el.firstElementChild.attributes[0].nodeName,this.el=document.getElementById("img-".concat(this.hash)),this.$nextTick(function(){t.eltop=t.$el.getBoundingClientRect().top,t.imgsrc&&t.el&&t.shouldinit?t.createLoader():t.imgsrc&&t.el||t.handleError()})},methods:{scrolling:function(){var t=this;this.scrollloc=window.scrollY,this.scrollticking||(window.requestAnimationFrame(function(){"loaded"!==t.status&&t.scrolltrigger+t.scrollloc>t.eltop&&t.createLoader(),t.scrollticking=!1}),this.scrollticking=!0)},perc2color:function(t){var n=65536*Math.round(510-5.1*t)+62965;return"#"+("000000"+n.toString(16)).slice(-6)},handleError:function(){this.loaderror=!0,this.status="error"},createLoader:function(){this.image=new Image,this.image.onload=this.handleLoad,this.image.onerror=this.handleError,this.image.src=this.imgsrc,this.image.setAttribute(this.attr,""),this.el.appendChild(this.image),this.status="loaded"},handleLoad:function(){}},computed:{shouldinit:function(){return this.eltop<this.scrolltrigger}},beforeDestroy:function(){window.removeEventListener("scroll",this.scrolling)}}),s=l,c=(e("6046"),e("2877")),g=Object(c["a"])(s,a,i,!1,null,"91b8798e",null);g.options.__file="vueimage.vue";var u=g.exports,p=["bab1-lowqual.jpg","bab5-lowqual.jpg","dbb11-lowqual.jpg","dbb1-lowqual.jpg","dbb5-lowqual.jpg","dbb9-lowqual.jpg","neto2-lowqual.jpg","neto6-lowqual.jpg","ronin1-lowqual.jpg","ronin5-lowqual.jpg","bab1.png","bab5.png","dbb11.png","dbb1.png","dbb5.png","dbb9.png","neto2.png","neto6.png","ronin1.png","ronin5.png","bab2-lowqual.jpg","bab6-lowqual.jpg","dbb12-lowqual.jpg","dbb2-lowqual.jpg","dbb6-lowqual.jpg","github.svg","neto3-lowqual.jpg","neto7-lowqual.jpg","ronin2-lowqual.jpg","bab2.png","bab6.png","dbb12.png","dbb2.png","dbb6.png","linkedin.svg","neto3.png","neto7.png","ronin2.png","bab3-lowqual.jpg","bab7-lowqual.jpg","dbb13-lowqual.jpg","dbb3-lowqual.jpg","dbb7-lowqual.jpg","neto10-lowqual.jpg","neto4-lowqual.jpg","neto8-lowqual.jpg","ronin3-lowqual.jpg","bab3.png","bab7.png","dbb13.png","dbb3.png","dbb7.png","neto10.png","neto4.png","neto8.png","ronin3.png","bab4-lowqual.jpg","dbb10-lowqual.jpg","dbb14-lowqual.jpg","dbb4-lowqual.jpg","dbb8-lowqual.jpg","neto1-lowqual.jpg","neto5-lowqual.jpg","neto9-lowqual.jpg","ronin4-lowqual.jpg","bab4.png","dbb10.png","dbb14.png","dbb4.png","dbb8.png","neto1.png","neto5.png","neto9.png","ronin4.png"],b={name:"ronin",components:{vueimage:u},data:function(){return{test:p,testers:[{oneshot:"https://more-art-than.science/images/dbb1.png",srcmap:{480:"",1280:"",1680:""},bgcolor:"#f3f8ff"},{oneshot:"https://more-art-than.science/images/dbb1.png",srcmap:{480:"",1280:"",1680:""},bgcolor:"#deecff"},{oneshot:"https://more-art-than.science/images/dbb1.png",srcmap:{480:"",1280:"",1680:""},bgcolor:"#c6cfff"},{oneshot:"https://more-art-than.science/images/dbb1.png",srcmap:{480:"",1280:"",1680:""},bgcolor:"#e8d3ff"}]}}},d=b,h=(e("7c89"),Object(c["a"])(d,o,r,!1,null,"52d1e2a9",null));h.options.__file="ronin.vue";n["default"]=h.exports},fdef:function(t,n){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-343a9474.929ef02e.js.map