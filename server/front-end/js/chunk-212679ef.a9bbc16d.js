(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-212679ef"],{"0bfb":function(t,n,e){"use strict";var o=e("cb7c");t.exports=function(){var t=o(this),n="";return t.global&&(n+="g"),t.ignoreCase&&(n+="i"),t.multiline&&(n+="m"),t.unicode&&(n+="u"),t.sticky&&(n+="y"),n}},1444:function(t,n,e){"use strict";var o=e("36ca"),s=e.n(o);s.a},"36ca":function(t,n,e){},3846:function(t,n,e){e("9e1e")&&"g"!=/./g.flags&&e("86cc").f(RegExp.prototype,"flags",{configurable:!0,get:e("0bfb")})},"386b":function(t,n,e){var o=e("5ca1"),s=e("79e5"),i=e("be13"),a=/"/g,l=function(t,n,e,o){var s=String(i(t)),l="<"+n;return""!==e&&(l+=" "+e+'="'+String(o).replace(a,"&quot;")+'"'),l+">"+s+"</"+n+">"};t.exports=function(t,n){var e={};e[t]=n(l),o(o.P+o.F*s(function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}),"String",e)}},"6b54":function(t,n,e){"use strict";e("3846");var o=e("cb7c"),s=e("0bfb"),i=e("9e1e"),a="toString",l=/./[a],r=function(t){e("2aba")(RegExp.prototype,a,t,!0)};e("79e5")(function(){return"/a/b"!=l.call({source:"a",flags:"b"})})?r(function(){var t=o(this);return"/".concat(t.source,"/","flags"in t?t.flags:!i&&t instanceof RegExp?s.call(t):void 0)}):l.name!=a&&r(function(){return l.call(this)})},"6f5d":function(t,n,e){"use strict";var o=e("8936"),s=e.n(o);s.a},8936:function(t,n,e){},d45d:function(t,n,e){"use strict";e.r(n);var o=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"temp-con"},[e("h1",[t._v("Responsive Testing")]),e("div",{staticClass:"response-con"},[e("vueimage",{attrs:{imgsrc:"https://more-art-than.science/images/test-small.png",srcmap:t.testsingle.srcmap}})],1),e("h1",[t._v("Grid Testing")]),e("div",{staticClass:"image-con"},t._l(t.test,function(t,n){return e("vueimage",{key:n,staticClass:"vueimg",attrs:{imgsrc:"https://more-art-than.science/images/"+t}})}))])},s=[],i=(e("cadf"),e("551c"),e("097d"),function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"image-con"},[e("div",{staticClass:"base",class:"loaded"===t.status?"show":"hide",attrs:{id:"img-"+t.hash}}),e("svg",{staticClass:"base",class:"loaded"!==t.status?"show":"hide",attrs:{id:"svg-"+t.hash,width:"100%",height:t.svgheight}},[e("rect",{style:{fill:t.perc2color(Math.floor(t.hash/1e7)),stroke:"none"},attrs:{width:"100%",height:t.svgheight}})])])}),a=[],l=(e("f386"),e("6b54"),{name:"vueimage",props:{imgsrc:String,srcmap:Object},data:function(){return{image:null,status:"loading",loaderror:!1,hash:null,el:null,hidesvg:!1,attr:"",eltop:null,windowtop:null,scrollticking:!1,scrollloc:0,ratio:null,svgel:null,svgheight:0,scrolltrigger:2e3}},created:function(){this.hash=Math.floor(99999999*Math.random()+1),this.scrollloc=window.scrollY},mounted:function(){var t=this;this.svgel=document.getElementById("svg-".concat(this.hash)),this.svgheight=Math.floor(.66*(this.svgel.getBoundingClientRect().right-this.svgel.getBoundingClientRect().left)),this.windowtop=Math.abs(document.body.getBoundingClientRect().top),window.addEventListener("scroll",this.scrolling),this.windowpos=Math.abs(document.body.getBoundingClientRect().top),this.attr=this.$el.firstElementChild.attributes[0].nodeName,this.el=document.getElementById("img-".concat(this.hash)),this.$nextTick(function(){t.eltop=t.$el.getBoundingClientRect().top,t.imgsrc&&t.el&&t.shouldinit?t.createLoader():t.imgsrc&&t.el||t.handleError()})},methods:{scrolling:function(){var t=this;this.scrollloc=window.scrollY,this.scrollticking||(window.requestAnimationFrame(function(){"loaded"!==t.status&&t.scrolltrigger+t.scrollloc>t.eltop&&t.createLoader(),t.scrollticking=!1}),this.scrollticking=!0)},perc2color:function(t){var n=65536*Math.round(510-5.1*t)+62965;return"#"+("000000"+n.toString(16)).slice(-6)},handleError:function(){this.loaderror=!0,this.status="error"},createLoader:function(){this.image=new Image,this.image.onload=this.handleLoad,this.image.onerror=this.handleError,this.image.src=this.imgsrc,this.image.setAttribute(this.attr,""),this.el.appendChild(this.image),this.srcmap&&this.applysrcset(),this.status="loaded"},applysrcset:function(){this.image.setAttribute("srcset","".concat(this.srcmap["small"]," 480w, ").concat(this.srcmap["medium"]," 1280w, ").concat(this.srcmap["large"]," 1980w"))},handleLoad:function(){}},computed:{shouldinit:function(){return this.eltop<this.scrolltrigger}},beforeDestroy:function(){window.removeEventListener("scroll",this.scrolling)}}),r=l,g=(e("6f5d"),e("2877")),c=Object(g["a"])(r,i,a,!1,null,"690b0652",null);c.options.__file="vueimage.vue";var u=c.exports,p=["bab1-lowqual.jpg","bab5-lowqual.jpg","dbb11-lowqual.jpg","dbb1-lowqual.jpg","dbb5-lowqual.jpg","dbb9-lowqual.jpg","neto2-lowqual.jpg","neto6-lowqual.jpg","ronin1-lowqual.jpg","ronin5-lowqual.jpg","bab1.png","bab5.png","dbb11.png","dbb1.png","dbb5.png","dbb9.png","neto2.png","neto6.png","ronin1.png","ronin5.png","bab2-lowqual.jpg","bab6-lowqual.jpg","dbb12-lowqual.jpg","dbb2-lowqual.jpg","dbb6-lowqual.jpg","github.svg","neto3-lowqual.jpg","neto7-lowqual.jpg","ronin2-lowqual.jpg","bab2.png","bab6.png","dbb12.png","dbb2.png","dbb6.png","linkedin.svg","neto3.png","neto7.png","ronin2.png","bab3-lowqual.jpg","bab7-lowqual.jpg","dbb13-lowqual.jpg","dbb3-lowqual.jpg","dbb7-lowqual.jpg","neto10-lowqual.jpg","neto4-lowqual.jpg","neto8-lowqual.jpg","ronin3-lowqual.jpg","bab3.png","bab7.png","dbb13.png","dbb3.png","dbb7.png","neto10.png","neto4.png","neto8.png","ronin3.png","bab4-lowqual.jpg","dbb10-lowqual.jpg","dbb14-lowqual.jpg","dbb4-lowqual.jpg","dbb8-lowqual.jpg","neto1-lowqual.jpg","neto5-lowqual.jpg","neto9-lowqual.jpg","ronin4-lowqual.jpg","bab4.png","dbb10.png","dbb14.png","dbb4.png","dbb8.png","neto1.png","neto5.png","neto9.png","ronin4.png"],b={name:"ronin",components:{vueimage:u},data:function(){return{test:p,testsingle:{srcmap:{small:"https://more-art-than.science/images/test-small.png",medium:"https://more-art-than.science/images/test-medium.png",large:"https://more-art-than.science/images/test-large.png"},bgcolor:"#f3f8ff"},testers:[{oneshot:"https://more-art-than.science/images/dbb1.png",srcmap:{480:"",1280:"",1680:""},bgcolor:"#f3f8ff"},{oneshot:"https://more-art-than.science/images/dbb1.png",srcmap:{480:"",1280:"",1680:""},bgcolor:"#deecff"},{oneshot:"https://more-art-than.science/images/dbb1.png",srcmap:{480:"",1280:"",1680:""},bgcolor:"#c6cfff"},{oneshot:"https://more-art-than.science/images/dbb1.png",srcmap:{480:"",1280:"",1680:""},bgcolor:"#e8d3ff"}]}}},h=b,d=(e("1444"),Object(g["a"])(h,o,s,!1,null,"17941701",null));d.options.__file="ronin.vue";n["default"]=d.exports},f386:function(t,n,e){"use strict";e("386b")("small",function(t){return function(){return t(this,"small","","")}})}}]);
//# sourceMappingURL=chunk-212679ef.a9bbc16d.js.map