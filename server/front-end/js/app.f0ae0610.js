(function(t){function e(e){for(var n,o,r=e[0],c=e[1],l=e[2],u=0,h=[];u<r.length;u++)o=r[u],i[o]&&h.push(i[o][0]),i[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);d&&d(e);while(h.length)h.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var t,e=0;e<s.length;e++){for(var a=s[e],n=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},i={app:0},s=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;s.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"085d":function(t,e,a){"use strict";var n=a("d6fb"),i=a.n(n);i.a},1915:function(t,e,a){},"2f44":function(t,e,a){"use strict";var n=a("9098"),i=a.n(n);i.a},"3f84":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d"),a("e4c9");var n=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"god-div"},[a("router-view"),a("navfoot")],1)},s=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"foot-con"},[a("router-link",{staticClass:"foot-itm one",attrs:{tag:"h5",to:{path:"/work"}}},[t._v("SHOWCASE")]),a("router-link",{staticClass:"foot-itm two",attrs:{tag:"h5",to:{path:"/cv"}}},[t._v("cv & social media")]),a("router-link",{staticClass:"foot-itm three",attrs:{tag:"h5",to:{path:"/"}}},[t._v("home")])],1)},r=[],c={name:"navfoot"},l=c,d=(a("978c"),a("2877")),u=Object(d["a"])(l,o,r,!1,null,"711ce4f3",null);u.options.__file="navfoot.vue";var h=u.exports,m={name:"app",components:{navfoot:h}},p=m,f=(a("6b7e"),Object(d["a"])(p,i,s,!1,null,"f05ca44e",null));f.options.__file="App.vue";var g=f.exports,v=a("2f62"),b={windowwidth:0,isauthed:!1},w={windowwidth:function(t){return t.window_width},isauthed:function(t){return t.isauthed}},_={IS_AUTHED:function(t,e){t.isauthed=e}},y=a("bc3a"),C=a.n(y),k=window.location.origin,j=C.a.create({baseURL:k,withCredentials:!0}),S={SESSION_CHALLENGE:function(t){var e=t.commit;j.get("/api/session_challenge").then(function(){e("IS_AUTHED",!0)}).catch(function(){e("IS_AUTHED",!1)})}};n["a"].use(v["a"]);var x=new v["a"].Store({actions:S,getters:w,mutations:_,state:b}),A=a("8c4f"),O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},N=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-con"},[a("h1",{staticClass:"top"},[a("span",{staticClass:"word"},[t._v("More")]),a("span",{staticClass:"word"},[t._v("Art")]),a("span",{staticClass:"word"},[t._v("Than")]),a("span",{staticClass:"word"},[t._v("Science")])]),a("div",{staticClass:"bottom"},[a("div",{staticClass:"intro"},[a("h4",[t._v("Welcome to M~A~T~S")]),a("h5",[t._v("Home of Hamish Clulee")]),a("p",[t._v("I'm a Web Developer from New Zealand, currently living in Asia. It's more than likely you will find me working on the front end. I'm especially passionate about building intelligent and performant user interfaces.")]),a("div",{staticClass:"header-icons-home"},[a("a",{staticClass:"icon-container-item",attrs:{href:"https://github.com/HamishClulee",target:"_blank"}},[a("img",{attrs:{src:"https://more-art-than.science/images/github.svg",height:"30"}})]),a("a",{staticClass:"icon-container-item",attrs:{href:"https://www.linkedin.com/in/hamish-clulee-163b1950/",target:"_blank"}},[a("img",{attrs:{src:"https://more-art-than.science/images/linkedin.svg",height:"30"}})])])])])])}],I=a("5a72"),D=a.n(I),E={name:"home",data:function(){return{}},mounted:function(){D()({targets:".top .word",scale:[14,1],opacity:[0,1],easing:"easeOutCirc",duration:1e3,delay:function(t,e){return 1e3*e}})},methods:{},computed:{}},$=E,q=(a("2f44"),Object(d["a"])($,O,N,!1,null,"2f78c154",null));q.options.__file="home.vue";var T=q.exports,B=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"work-con"},[t.showmodal?a("gallerymodal",{attrs:{images:t.act_array}}):t._e(),a("worksum",{attrs:{title:"@RONIN",sub:"Website",images:t.roninimg,text:t.ronin_txt,islive:!0,aref:"https://atronin.space",tech:t.ronin_tech}}),a("worksum",{attrs:{title:"Netograph",sub:"Web App",images:t.netimg,text:t.neto_txt,islive:!0,aref:"https://netograph.io",tech:t.neto_tech}}),a("worksum",{attrs:{title:"Baby Aid NZ",sub:"Web App",images:t.babimg,text:t.babyaid_txt,tech:t.baby_tech}}),a("worksum",{attrs:{title:"Dashboard Builder",sub:"Web App",images:t.dbbimg,text:t.dbb_txt,tech:t.dbb_tech}})],1)},P=[],J=(a("a481"),a("ac6a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sum-con"},[t.islive?a("a",{attrs:{href:t.aref,target:"_blank"}},[a("h2",[t._v(t._s(t.aref))])]):a("h2",[t._v(t._s(t.title))]),a("h3",[t._v(t._s(t.sub))]),a("div",{staticClass:"content"},[a("div",{staticClass:"two-col"},[a("div",{staticClass:"img-grid",on:{click:t.openmodal}},t._l(t.images,function(e,n){return a("figure",{key:n,staticClass:"fig-itm",class:"img-grid-"+n,style:{backgroundImage:"url("+t.images[n]+")"}})})),a("div",{staticClass:"tech-con"},[a("h3",[t._v("Stack")]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[t._v("Frontend:")]),a("div",{staticClass:"itm-val"},[t._v(t._s(t.tech.front))])]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[t._v("Tooling")]),a("div",{staticClass:"itm-val"},[t._v(t._s(t.tech.tooling))])]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[t._v("DevOps:")]),a("div",{staticClass:"itm-val"},[t._v(t._s(t.tech.devops))])]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[t._v("Deploys:")]),a("div",{staticClass:"itm-val"},[t._v(t._s(t.tech.deploys))])]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[t._v("Backend:")]),a("div",{staticClass:"itm-val"},[t._v(t._s(t.tech.backend))])]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[t._v("Database:")]),a("div",{staticClass:"itm-val"},[t._v(t._s(t.tech.db))])])])]),a("div",{staticClass:"text-con"},[a("p",{domProps:{innerHTML:t._s(t.text)}})]),a("div",{staticClass:"fin-con"},[t._v("~")])])])}),W=[],M={name:"worksum",props:{images:Array,title:String,sub:String,text:String,islive:Boolean,aref:String,tech:Object},methods:{openmodal:function(){this.$parent.$emit("open-modal",this.images)}}},V=M,F=(a("cc0b"),Object(d["a"])(V,J,W,!1,null,"445923c6",null));F.options.__file="worksum.vue";var H=F.exports,L=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gallery-con"},[a("div",{staticClass:"gallery-content"},[a("div",{staticClass:"controls-con"},[a("div",{staticClass:"close-x",on:{click:t.closemodal}})]),a("div",{staticClass:"carousel-con"},[a("div",{staticClass:"caret-con",on:{click:function(e){t.goleft()}}},[a("i",{staticClass:"arrow left"})]),a("img",{key:String(t.images[t.index]),attrs:{src:t.source}}),a("div",{staticClass:"caret-con",on:{click:function(e){t.goright()}}},[a("i",{staticClass:"arrow right"})])])])])},U=[],Z={name:"gallerymodal",props:{images:Array},data:function(){return{index:0}},methods:{goleft:function(){0===this.index?this.index=this.images.length-1:this.index--,this.ensurenoselect()},goright:function(){this.index===this.images.length-1?this.index=0:this.index++,this.ensurenoselect()},closemodal:function(){this.$parent.$emit("close-modal")},gotogallery:function(){this.$parent.$emit("close-modal"),this.$router.push({path:"/gallery"})},ensurenoselect:function(){window.getSelection?window.getSelection().removeAllRanges():document.selection&&document.selection.empty()}},computed:{source:function(){return this.images[this.index]}}},G=Z,R=(a("b35f"),Object(d["a"])(G,L,U,!1,null,"083332d8",null));R.options.__file="gallerymodal.vue";var z=R.exports,K={name:"work",components:{worksum:H,gallerymodal:z},data:function(){return{ronin_txt:"Static website built in October 2019. Booking Application under developement. Clients are growing an accomodation business in Bali, focused on the digital nomad market. @RONIN is a co-working villa. As more locations are added they want all bookings to flow through the website.",neto_txt:'I was almost solely responsible for building the frontend of the current version hosted at <a href="https://netograph.io" target="_blank">netograph.io</a>. Netograph has an incredible amount of data, presenting it in an easyily readable and user freindly manner was an enjoyable challenge.',babyaid_txt:"Static website and booking app written for a now defunct medical start up in New Zealand. I built a calendar app, checkout and payment system, and an admin area for staff to manage courses and allocate them to trainers.",dbb_txt:"Built while working at Fusion Sport Australia. I was the project lead. This app allows customers to build their own dashboards to display data visually. When I moved from the backend to the frontend team, all dashboards were being built by hand, it was time consuming and expensive for customers. By the time I left, the Dashboard Builder allowed customers to build very detailed dashboards without tying up our frontend developers. A very cool piece of Javascript!",babimg:["https://more-art-than.science/images/bab1-lowqual.jpg","https://more-art-than.science/images/bab3-lowqual.jpg","https://more-art-than.science/images/bab2-lowqual.jpg","https://more-art-than.science/images/bab4-lowqual.jpg"],netimg:["https://more-art-than.science/images/neto1-lowqual.jpg","https://more-art-than.science/images/neto2-lowqual.jpg","https://more-art-than.science/images/neto3-lowqual.jpg","https://more-art-than.science/images/neto4-lowqual.jpg"],dbbimg:["https://more-art-than.science/images/dbb1-lowqual.jpg","https://more-art-than.science/images/dbb2-lowqual.jpg","https://more-art-than.science/images/dbb3-lowqual.jpg","https://more-art-than.science/images/dbb4-lowqual.jpg"],roninimg:["https://more-art-than.science/images/ronin1-lowqual.jpg","https://more-art-than.science/images/ronin2-lowqual.jpg","https://more-art-than.science/images/ronin3-lowqual.jpg","https://more-art-than.science/images/ronin4-lowqual.jpg"],ronin_tech:{front:"Vue, Sass",tooling:"VueCli",devops:"Ubuntu 16.04 on DigitalOcean",deploys:"Shell script",backend:"NodeJS",db:"Mongo"},neto_tech:{front:"Vue, Vue-Class-Component, Typescript, Sass, D3.js",tooling:"Custom Webpack Config",devops:"Google App Engine, Docker, Kubernetes",deploys:"Modd",backend:"GoLang",db:"Google Big Table"},baby_tech:{front:"Vue, Bulma Scss",tooling:"Webpack",devops:"Ubuntu 16.04 on DigitalOcean",deploys:"Shell script",backend:"NodeJS",db:"Mongo"},dbb_tech:{front:"Vue, Bulma Scss, D3.js, C3.js",tooling:"Custom Webpack Config",devops:"CentOS, Amazon CDN",deploys:"Shell scripts",backend:"Java",db:"PSQL"},act_array:null,showmodal:!1}},mounted:function(){var t=this;this.$on("open-modal",function(e){var a=[];e.forEach(function(e){a.push(t.transform(e))}),t.act_array=a,t.showmodal=!0}),this.$on("close-modal",function(){t.act_array=null,t.showmodal=!1})},methods:{transform:function(t){return t.replace("-lowqual.jpg",".png")}},computed:{}},Q=K,X=(a("cf7a"),Object(d["a"])(Q,B,P,!1,null,"3a6f1e17",null));X.options.__file="work.vue";var Y=X.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cv-con",attrs:{id:"print-vis-on"}},[a("h1",{staticClass:"main"},[t._v("Hamish Clulee")]),a("h5",[t._v("hamish.clulee@gmail.com")]),a("h6",[t._v("Located in Bali, Indonesia.")]),a("h6",[t._v("New Zealand Citizen.")]),a("div",{staticClass:"fin-con"},[t._v("~")]),t._m(0),t._m(1),a("div",{staticClass:"fin-con"},[t._v("~")]),t._l(t.jobs,function(e,n){return a("div",{key:n,staticClass:"job-con"},[a("h2",[t._v(t._s(e.employer))]),a("h3",[t._v(t._s(e.title))]),a("h5",[t._v(t._s(e.dates))]),t._l(e.description,function(e,n){return a("p",{key:n},[t._v(t._s(e))])}),a("div",{staticClass:"fin-con"},[t._v("~")])],2)})],2)},et=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header-icons-home"},[a("a",{staticClass:"icon-container-item",attrs:{href:"https://github.com/HamishClulee",target:"_blank"}},[a("img",{attrs:{src:"https://more-art-than.science/images/github.svg",height:"60"}})]),a("a",{staticClass:"icon-container-item",attrs:{href:"https://www.linkedin.com/in/hamish-clulee-163b1950/",target:"_blank"}},[a("img",{attrs:{src:"https://more-art-than.science/images/linkedin.svg",height:"60"}})])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"key-con"},[a("p",[t._v("VueJs - 3+ years")]),a("p",[t._v("Javascript - 4+ years")]),a("p",[t._v("Java - 4+ years")]),a("p",[t._v("NodeJs - 2+ years")]),a("p",[t._v("Linux - 4+ years")]),a("p",[t._v("Working Remote - 3+ years")]),a("p",[t._v("Web Development - 5+ years")])])}],at={name:"cv",data:function(){return{jobs:[{title:"Software Developer",employer:"Freelance",dates:"April 2015 - Present (4+ years)",description:["Since early 2015 I have taken on a number of freelance web dev jobs, both while working in waged positions and as a full time freelancer.","Noteable highlights:","A booking, payment and staff allocation app for an education outfit in New Zealand.","A booking, payment and calendar management app for an company that provides co-working and co-living spaces for digital nomads.","I spent a lot of time working as a contract developer for a design and prototyping company attached to a large US health care firm. I rebuilt their front end build system, introduced them to VueJs and built a lot of prototypes for them to on sell to the parent company.","Countless hours tinkering for personal enjoyment","Almost everything I do uses VueJs in some way, shape or form."],references:!0},{title:"Senior Front End Developer",employer:"Netograph",dates:"August 2018 - August 2019 (1 year 1 month)",description:["The Frontend is written in Vue and Typescript, backed by a custom webpack configuration. Visualisations are written in d3.js.","Netograph's product is data. That data is gathered by a web crawler. Beginning by crawling open social media platforms like Twitter and 4chan each crawler thread follows any links encountered. When the crawler thread encounters a new domain it uses a headless browser to record all the worthwhile information and send it back to the Netograph servers, then starts a new crawl. At the time I left there were over 2000 threads, which performed a capture in around 2 minutes and were constantly running. Netograph has a lot of data, 18 billion http request pairs captured at last count!","Primarily focused on security and privacy insights, but with the potential to provide intelligence in almost any industry due to the size of the database and the level of detail that website capture provided. This was an awesome place to work and I thoroughly enjoyed the challenges encountered."],references:!0},{title:"Software Developer",employer:"Fusion Sport Inc.",dates:"October 2017 - April 2018 (7 months)",description:["Fusion is a sports science company that sells web and hardware products designed to provide athletes and sports teams with competitive advantages.","My main focus was Smartabase, Fusions' main product. It's a web application with a \"data-in-insights-out\" model. Most of my time at Fusion was spent on the insights out part of the business.","Building visualisations in d3.js and C3.js in the form of dashboards which displayed the data entered by the sports team in question. Project lead on the Dashboard Builder which provided a tool for teams to write their own dashboards without using any developers. Most of my time was spent writing Vue and Javascript, with a smaller percentage spent writing Java and providing API support to the front end team."],references:!0},{title:"Web Application Developer",employer:"Profiler Corporation",dates:"August 2016 - October 2017 (1 year 3 months)",description:["Profiler is sports science company based in Dunedin, New Zealand. Most of\nmy time was spent writing Java on the back end of a large web portal which\nfocused on providing custom form entry to sports teams and atheletes.","Nearer\nthe end of my time in this position my focus shifted to be far more fron end\nfocused, with a lot of my time spent writing Vue and beginning to increase its\nusage throughout the code base."],references:!0}]}}},nt=at,it=(a("6996"),Object(d["a"])(nt,tt,et,!1,null,"d4799fa8",null));it.options.__file="cv.vue";var st=it.exports,ot=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},rt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"not-found"}},[a("div",{staticClass:"circles"},[a("p",{staticClass:"text-color-control"},[t._v("404"),a("br"),a("small",{staticClass:"text-color-control"},[t._v("PAGE NOT FOUND")])])])])}],ct={name:"PageNotFound",data:function(){return{}},mounted:function(){},methods:{},computed:{}},lt=ct,dt=(a("085d"),Object(d["a"])(lt,ot,rt,!1,null,"4bca5bf2",null));dt.options.__file="notfound.vue";var ut=dt.exports;n["a"].use(A["a"]);var ht=new A["a"]({mode:"history",scrollBehavior:function(t,e,a){return a||{x:0,y:0}},routes:[{path:"/",name:"home",component:T},{path:"/work",name:"work",component:Y},{path:"/cv",name:"cv",component:st},{path:"*",name:"notfound",component:ut}]});n["a"].use(x),n["a"].use(ht),n["a"].config.productionTip=!1,new n["a"]({store:x,router:ht,render:function(t){return t(g)}}).$mount("#app")},"611a":function(t,e,a){},6996:function(t,e,a){"use strict";var n=a("7f77"),i=a.n(n);i.a},"6b7e":function(t,e,a){"use strict";var n=a("3f84"),i=a.n(n);i.a},"7f77":function(t,e,a){},9098:function(t,e,a){},"978c":function(t,e,a){"use strict";var n=a("611a"),i=a.n(n);i.a},"9cb2":function(t,e,a){},b35f:function(t,e,a){"use strict";var n=a("1915"),i=a.n(n);i.a},bb0d:function(t,e,a){},cc0b:function(t,e,a){"use strict";var n=a("9cb2"),i=a.n(n);i.a},cf7a:function(t,e,a){"use strict";var n=a("bb0d"),i=a.n(n);i.a},d6fb:function(t,e,a){},e4c9:function(t,e,a){}});
//# sourceMappingURL=app.f0ae0610.js.map