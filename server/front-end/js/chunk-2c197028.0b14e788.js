(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c197028"],{"028b":function(e,t,a){"use strict";var n=a("dea1"),i=a.n(n);i.a},1915:function(e,t,a){},"214f":function(e,t,a){"use strict";var n=a("32e9"),i=a("2aba"),s=a("79e5"),o=a("be13"),r=a("2b4c");e.exports=function(e,t,a){var l=r(e),c=a(o,l,""[e]),d=c[0],h=c[1];s(function(){var t={};return t[l]=function(){return 7},7!=""[e](t)})&&(i(String.prototype,e,d),n(RegExp.prototype,l,2==t?function(e,t){return h.call(e,this,t)}:function(e){return h.call(e,this)}))}},5920:function(e,t,a){},"6e42":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"work-con"},[e.showmodal?a("gallerymodal",{attrs:{images:e.act_array}}):e._e(),a("worksum",{attrs:{title:"Dashboard Builder",sub:"Web App",images:e.dbbimg,text:e.dbb_txt,tech:e.dbb_tech}}),a("worksum",{attrs:{title:"Netograph",sub:"Web App",images:e.netimg,text:e.neto_txt,islive:!0,aref:"https://netograph.io",tech:e.neto_tech}}),a("worksum",{attrs:{title:"@RONIN",sub:"Website",images:e.roninimg,text:e.ronin_txt,islive:!0,aref:"https://atronin.space",tech:e.ronin_tech}}),a("worksum",{attrs:{title:"Baby Aid NZ",sub:"Web App",images:e.babimg,text:e.babyaid_txt,tech:e.baby_tech}})],1)},i=[],s=(a("a481"),a("ac6a"),a("cadf"),a("551c"),a("097d"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"sum-con"},[e.islive?a("a",{attrs:{href:e.aref,target:"_blank"}},[a("h2",[e._v(e._s(e.aref))])]):a("h2",[e._v(e._s(e.title))]),a("h3",[e._v(e._s(e.sub))]),a("div",{staticClass:"content"},[a("div",{staticClass:"two-col"},[a("div",{staticClass:"img-grid",on:{click:e.openmodal}},e._l(e.images,function(t,n){return a("figure",{key:n,staticClass:"fig-itm",class:"img-grid-"+n,style:{backgroundImage:"url("+e.images[n]+")"}})})),a("div",{staticClass:"tech-con"},[a("h3",[e._v("Stack")]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[e._v("Frontend:")]),a("div",{staticClass:"itm-val"},[e._v(e._s(e.tech.front))])]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[e._v("Tooling")]),a("div",{staticClass:"itm-val"},[e._v(e._s(e.tech.tooling))])]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[e._v("DevOps:")]),a("div",{staticClass:"itm-val"},[e._v(e._s(e.tech.devops))])]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[e._v("Deploys:")]),a("div",{staticClass:"itm-val"},[e._v(e._s(e.tech.deploys))])]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[e._v("Backend:")]),a("div",{staticClass:"itm-val"},[e._v(e._s(e.tech.backend))])]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[e._v("Database:")]),a("div",{staticClass:"itm-val"},[e._v(e._s(e.tech.db))])])])]),a("div",{staticClass:"text-con"},e._l(e.text,function(t,n){return a("p",{key:n,domProps:{innerHTML:e._s(t)}})})),a("div",{staticClass:"fin-con"},[e._v("~")])])])}),o=[],r={name:"worksum",props:{images:Array,title:String,sub:String,text:Array,islive:Boolean,aref:String,tech:Object},methods:{openmodal:function(){this.$parent.$emit("open-modal",this.images)}}},l=r,c=(a("028b"),a("2877")),d=Object(c["a"])(l,s,o,!1,null,"10f5c8fd",null);d.options.__file="worksum.vue";var h=d.exports,u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"gallery-con"},[a("div",{staticClass:"gallery-content"},[a("div",{staticClass:"controls-con"},[a("div",{staticClass:"close-x",on:{click:e.closemodal}})]),a("div",{staticClass:"carousel-con"},[a("div",{staticClass:"caret-con",on:{click:function(t){e.goleft()}}},[a("i",{staticClass:"arrow left"})]),a("img",{key:String(e.images[e.index]),attrs:{src:e.source}}),a("div",{staticClass:"caret-con",on:{click:function(t){e.goright()}}},[a("i",{staticClass:"arrow right"})])])])])},m=[],p={name:"gallerymodal",props:{images:Array},data:function(){return{index:0}},methods:{goleft:function(){0===this.index?this.index=this.images.length-1:this.index--,this.ensurenoselect()},goright:function(){this.index===this.images.length-1?this.index=0:this.index++,this.ensurenoselect()},closemodal:function(){this.$parent.$emit("close-modal")},gotogallery:function(){this.$parent.$emit("close-modal"),this.$router.push({path:"/gallery"})},ensurenoselect:function(){window.getSelection?window.getSelection().removeAllRanges():document.selection&&document.selection.empty()}},computed:{source:function(){return this.images[this.index]}}},g=p,b=(a("b35f"),Object(c["a"])(g,u,m,!1,null,"083332d8",null));b.options.__file="gallerymodal.vue";var f=b.exports,v={name:"work",components:{worksum:h,gallerymodal:f},data:function(){return{ronin_txt:["Static website built in October 2019 with a booking app currently in developement. \n                The clients are a growing accomodation business in Bali. Their primary focus is providing \n                Co-Live-Co-Work spaces for Digital Nomads.","The booking application that will allow customers and guests to check availability of rooms, book rooms \n                and co-working desks, make payments and include customisable packages which will increase \n                or decrease costs. ",'I\'ve included a number of screenshots of the various areas of the app, which can be seen by clicking \n                <a class="pickup-modal-clicks" data-ref="roninimg">here</a>'],neto_txt:['I built the frontend of the web app currently  \n                hosted at <a href="https://netograph.io" target="_blank">netograph.io</a>.',"The amount of data in Netograph's DB is staggering, primarily indexed by domain and IP address, \n                each item has a huge amount of detail associated with it, and each index having a vast length, \n                think millions of items, in some cases that number runs well into the billions.","The primary frontend challenges revolved around around creating user interfaces that \n                displayed that level of detail without overwhelming the user.",'Items of note include; an <a href="https://netograph.io/datasets/social/" target="_blank">infinite scroll library</a>,\n                which had to act in place of pagination due to how the lists being displayed are indexed.  \n                Custom <a href="https://netograph.io/datasets/social/domain/facebook.com" target="_blank">masonary cards</a>, \n                designed to show the user a smaple of the data in each list, remembering that each list could \n                contain over a million items, and each first class object (IPs, domains, superdomains) could contain \n                over 10 lists. A <a href="https://netograph.io/datasets/social" target="_blank">search component</a>, \n                enabling users find very specific pieces of information in very large set.','Netograph also captures privacy and cookie policy pages. \n                The text and layout data is captured prior \n                to the painting and rendering stage in the browser lifecycle. \n                Each capture displayed in the app shows the captured text, overlaying its captured position  \n                on a full page screenshot of URL in question, text is then searchable and sortable.\n                You can check it\n                out <a href="https://netograph.io/datasets/social/recentpolicies" target="_blank">here</a>. The UI is pretty cool, \n                and unlike anything I\'ve seen before.',"Overall, this was an awesome developement experience."],babyaid_txt:["Static website and booking app written for a now defunct medical start up in New Zealand.","I built a calendar app using a forked Vue calendar found on GitHub. A checkout and payment system\n                built using a hashed URL stored in the DB so that bookings would persist over time and could be \n                returned to at any time, and a 'no page reload' round trip to the server every time a change was made by the user \n                to ensure the correctness of the information displayed on the page. Payments were made using Stripe \n                and their awesome JS SDK.","The app included an admin area, secured by a session token, for staff to manage courses and allocate \n                trainers at various times and dates. SEO was taken care of by a small meta tagging library which \n                I wrote myself.",'I\'ve included a number of screenshots of the various areas of the app, which can \n                be seen by clicking <a class="pickup-modal-clicks" data-ref="babimg">here</a>'],dbb_txt:["Built while working at Fusion Sport Australia.","Shortly after my start date I was transfered \n                into the frontend team tasked with improving processes, finding ways to free up developer time\n                and to help clear the backlog of custom dashboards. As it stood, custom\n                dashboards required a lot of back and forth to build a solid specification, and then a \n                reasonably long lead time to complete development.","As a team we identified elements of dashboards that were commonly requested, and \n                found a large number that could be further generalised past the loose components that were in \n                place at the time.","I prototyped an app that would allow creation of dashboards without needing developers. \n                The prototype was picked up and approved by management, I was lucky enough to be given \n                leadership of the project, and the Dashboard Builder was born.","The Dashboard Builder allowed customers to create pages, sections, and widgets. \n                Sections were contained on pages, widgets were contained in sections.","Widgets were split in to two groups, display and input. For example, display widgets \n                included line, spline, area and bar graphs built using c3.js and d3.js, a table widget for \n                displaying pure tabular data, and a tile widget for displaying single items; think fastest \n                100m sprint this week, or monthly average caloric \n                intake.","All of the widgets had customisable icons, color pickers for background, title and subtitle colors \n                and were able to be repositioned in, and into new sections \n                and pages via drag and drop.","In addition to the working on the frontend I built the API in Java, the deploy and \n                integrations pipeline (using shell scripts and \n                gitlab in conjunction with amazon CDN) and the developement environment, which needed to \n                mock the production API and the save and publish \n                functionality of the editor and viewer (this was done using NodeJS and some npm hackery), \n                finally I built the storage layer in Java, so the JSON object from the frontend could be stored and \n                retrieved in and from our PSQL database.","The Dashboard Builder was a big win from a business perspective, devs were freed up, and the backlog was cleared. \n                From conversations I've had with friends who still work at Fusion I'm told that the Dashboard Builder \n                continues to be a customer favorite. Developing this app was still \n                the best fun I've had while programming, an awesome team spirit and an excellent outcome.",'I\'ve included a number of screenshots of the various \n                areas of the app, which can be seen by clicking <a class="pickup-modal-clicks" data-ref="dbbimg">here</a>.'],babimg:["https://more-art-than.science/images/bab1-lowqual.jpg","https://more-art-than.science/images/bab3-lowqual.jpg","https://more-art-than.science/images/bab2-lowqual.jpg","https://more-art-than.science/images/bab4-lowqual.jpg"],netimg:["https://more-art-than.science/images/neto1-lowqual.jpg","https://more-art-than.science/images/neto2-lowqual.jpg","https://more-art-than.science/images/neto3-lowqual.jpg","https://more-art-than.science/images/neto4-lowqual.jpg"],dbbimg:["https://more-art-than.science/images/dbb1-lowqual.jpg","https://more-art-than.science/images/dbb2-lowqual.jpg","https://more-art-than.science/images/dbb3-lowqual.jpg","https://more-art-than.science/images/dbb4-lowqual.jpg"],roninimg:["https://more-art-than.science/images/ronin1-lowqual.jpg","https://more-art-than.science/images/ronin2-lowqual.jpg","https://more-art-than.science/images/ronin3-lowqual.jpg","https://more-art-than.science/images/ronin4-lowqual.jpg"],ronin_tech:{front:"Vue, Sass",tooling:"VueCli",devops:"Ubuntu 16.04 on DigitalOcean",deploys:"Shell script",backend:"NodeJS",db:"Mongo"},neto_tech:{front:"Vue, Vue-Class-Component, Typescript, Sass, D3.js",tooling:"Custom Webpack Config",devops:"Google App Engine, Docker, Kubernetes",deploys:"Modd",backend:"GoLang",db:"Google Big Table"},baby_tech:{front:"Vue, Bulma Scss",tooling:"Webpack",devops:"Ubuntu 16.04 on DigitalOcean",deploys:"Shell script",backend:"NodeJS",db:"Mongo"},dbb_tech:{front:"Vue, Bulma Scss, D3.js, C3.js",tooling:"Custom Webpack Config",devops:"CentOS, Amazon CDN",deploys:"Shell scripts",backend:"Java",db:"PSQL"},act_array:null,showmodal:!1}},mounted:function(){var e=this,t=[].slice.call(document.getElementsByClassName("pickup-modal-clicks"));t&&t.forEach(function(t){t.onclick=function(){var a=[],n=t.getAttribute("data-ref");e[n].forEach(function(t){a.push(e.transform(t))}),e.act_array=a,e.showmodal=!0}}),this.$on("open-modal",function(t){var a=[];t.forEach(function(t){a.push(e.transform(t))}),e.act_array=a,e.showmodal=!0}),this.$on("close-modal",function(){e.act_array=null,e.showmodal=!1})},methods:{transform:function(e){return e.replace("-lowqual.jpg",".png")}},computed:{}},w=v,y=(a("8fe9"),Object(c["a"])(w,n,i,!1,null,"5354fa5b",null));y.options.__file="work.vue";t["default"]=y.exports},"8fe9":function(e,t,a){"use strict";var n=a("5920"),i=a.n(n);i.a},a481:function(e,t,a){a("214f")("replace",2,function(e,t,a){return[function(n,i){"use strict";var s=e(this),o=void 0==n?void 0:n[t];return void 0!==o?o.call(n,s,i):a.call(String(s),n,i)},a]})},ac6a:function(e,t,a){for(var n=a("cadf"),i=a("0d58"),s=a("2aba"),o=a("7726"),r=a("32e9"),l=a("84f2"),c=a("2b4c"),d=c("iterator"),h=c("toStringTag"),u=l.Array,m={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},p=i(m),g=0;g<p.length;g++){var b,f=p[g],v=m[f],w=o[f],y=w&&w.prototype;if(y&&(y[d]||r(y,d,u),y[h]||r(y,h,f),l[f]=u,v))for(b in n)y[b]||s(y,b,n[b],!0)}},b35f:function(e,t,a){"use strict";var n=a("1915"),i=a.n(n);i.a},dea1:function(e,t,a){}}]);
//# sourceMappingURL=chunk-2c197028.0b14e788.js.map