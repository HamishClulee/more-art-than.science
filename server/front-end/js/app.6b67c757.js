(function(t){function e(e){for(var s,o,r=e[0],l=e[1],c=e[2],u=0,m=[];u<r.length;u++)o=r[u],n[o]&&m.push(n[o][0]),n[o]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);d&&d(e);while(m.length)m.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,r=1;r<a.length;r++){var l=a[r];0!==n[l]&&(s=!1)}s&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},n={app:0},i=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"085d":function(t,e,a){"use strict";var s=a("d6fb"),n=a.n(s);n.a},"0a3a":function(t,e,a){},1915:function(t,e,a){},"1c92":function(t,e,a){},"1d80":function(t,e,a){},"2d77":function(t,e,a){"use strict";var s=a("a314"),n=a.n(s);n.a},"37c8":function(t,e,a){"use strict";var s=a("1c92"),n=a.n(s);n.a},"402b":function(t,e,a){},4356:function(t,e,a){"use strict";var s=a("88e5"),n=a.n(s);n.a},4491:function(t,e,a){},"4cf0":function(t,e,a){},"4f30":function(t,e,a){"use strict";var s=a("5cc7"),n=a.n(s);n.a},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d"),a("e4c9");var s=a("2b0e"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"god-div"},[a("router-view"),a("navfoot")],1)},i=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"foot-con"},[a("router-link",{staticClass:"foot-itm four",attrs:{tag:"h5",to:{path:"/"}}},[t._v("home")]),a("router-link",{staticClass:"foot-itm one",attrs:{tag:"h5",to:{path:"/work"}}},[t._v("projects")]),a("router-link",{staticClass:"foot-itm two",attrs:{tag:"h5",to:{path:"/cv"}}},[t._v("cv")]),a("router-link",{staticClass:"foot-itm three",attrs:{tag:"h5",to:{path:"/blog"}}},[t._v("blog")])],1)},r=[],l=(a("7f7f"),{name:"navfoot",methods:{checkvis:function(t){return this.$route.name!==t}}}),c=l,d=(a("4356"),a("2877")),u=Object(d["a"])(c,o,r,!1,null,"2506359d",null);u.options.__file="navfoot.vue";var m=u.exports,h={name:"app",components:{navfoot:m}},p=h,v=(a("2d77"),Object(d["a"])(p,n,i,!1,null,"391572de",null));v.options.__file="App.vue";var f=v.exports,b=a("2f62"),g={windowwidth:0,isauthed:!1},_={windowwidth:function(t){return t.window_width},isauthed:function(t){return t.isauthed}},w={IS_AUTHED:function(t,e){t.isauthed=e}},y=a("bc3a"),C=a.n(y),k=window.location.origin,S=C.a.create({baseURL:k,withCredentials:!0}),j={SESSION_CHALLENGE:function(t){var e=t.commit;S.get("/api/session_challenge").then(function(){e("IS_AUTHED",!0)}).catch(function(){e("IS_AUTHED",!1)})}};s["a"].use(b["a"]);var D=new b["a"].Store({actions:j,getters:_,mutations:w,state:g}),x=a("8c4f"),O=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},I=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home-con"},[a("h1",[t._v("Hamish Clulee")]),a("h2",[t._v("Full Stack Web Developer")]),a("h3",[t._v("Specialising in VueJs")]),a("p",[t._v("Born in New Zealand, currently living in Asia. It's more than likely you will find me working on the frontend. I'm especially passionate about building intelligent and performant user interfaces.")]),a("div",{staticClass:"header-icons-home"},[a("a",{staticClass:"icon-container-item",attrs:{href:"https://github.com/HamishClulee",target:"_blank"}},[a("img",{attrs:{src:"https://more-art-than.science/images/github.svg",height:"30"}})]),a("a",{staticClass:"icon-container-item",attrs:{href:"https://www.linkedin.com/in/hamish-clulee-163b1950/",target:"_blank"}},[a("img",{attrs:{src:"https://more-art-than.science/images/linkedin.svg",height:"30"}})])])])}],A={name:"home",data:function(){return{}},mounted:function(){},methods:{},computed:{}},T=A,N=(a("7397"),Object(d["a"])(T,O,I,!1,null,"db9e2d9e",null));N.options.__file="home.vue";var B=N.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"work-con"},[t.showmodal?a("gallerymodal",{attrs:{images:t.act_array}}):t._e(),a("worksum",{attrs:{title:"@RONIN",sub:"Website",images:t.roninimg,text:t.ronin_txt,islive:!0,aref:"https://atronin.space",tech:t.ronin_tech}}),a("worksum",{attrs:{title:"Netograph",sub:"Web App",images:t.netimg,text:t.neto_txt,islive:!0,aref:"https://netograph.io",tech:t.neto_tech}}),a("worksum",{attrs:{title:"Baby Aid NZ",sub:"Web App",images:t.babimg,text:t.babyaid_txt,tech:t.baby_tech}}),a("worksum",{attrs:{title:"Dashboard Builder",sub:"Web App",images:t.dbbimg,text:t.dbb_txt,tech:t.dbb_tech}})],1)},$=[],J=(a("a481"),a("ac6a"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sum-con"},[t.islive?a("a",{attrs:{href:t.aref,target:"_blank"}},[a("h2",[t._v(t._s(t.aref))])]):a("h2",[t._v(t._s(t.title))]),a("h3",[t._v(t._s(t.sub))]),a("div",{staticClass:"content"},[a("div",{staticClass:"two-col"},[a("div",{staticClass:"img-grid",on:{click:t.openmodal}},t._l(t.images,function(e,s){return a("figure",{key:s,staticClass:"fig-itm",class:"img-grid-"+s,style:{backgroundImage:"url("+t.images[s]+")"}})})),a("div",{staticClass:"tech-con"},[a("h3",[t._v("Stack")]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[t._v("Frontend:")]),a("div",{staticClass:"itm-val"},[t._v(t._s(t.tech.front))])]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[t._v("Tooling")]),a("div",{staticClass:"itm-val"},[t._v(t._s(t.tech.tooling))])]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[t._v("DevOps:")]),a("div",{staticClass:"itm-val"},[t._v(t._s(t.tech.devops))])]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[t._v("Deploys:")]),a("div",{staticClass:"itm-val"},[t._v(t._s(t.tech.deploys))])]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[t._v("Backend:")]),a("div",{staticClass:"itm-val"},[t._v(t._s(t.tech.backend))])]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[t._v("Database:")]),a("div",{staticClass:"itm-val"},[t._v(t._s(t.tech.db))])])])]),a("div",{staticClass:"text-con"},[a("p",{domProps:{innerHTML:t._s(t.text)}})]),a("div",{staticClass:"fin-con"},[t._v("~")])])])}),V=[],W={name:"worksum",props:{images:Array,title:String,sub:String,text:String,islive:Boolean,aref:String,tech:Object},methods:{openmodal:function(){this.$parent.$emit("open-modal",this.images)}}},P=W,F=(a("644a"),Object(d["a"])(P,J,V,!1,null,"a7e73644",null));F.options.__file="worksum.vue";var q=F.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"gallery-con"},[a("div",{staticClass:"gallery-content"},[a("div",{staticClass:"controls-con"},[a("div",{staticClass:"close-x",on:{click:t.closemodal}})]),a("div",{staticClass:"carousel-con"},[a("div",{staticClass:"caret-con",on:{click:function(e){t.goleft()}}},[a("i",{staticClass:"arrow left"})]),a("img",{key:String(t.images[t.index]),attrs:{src:t.source}}),a("div",{staticClass:"caret-con",on:{click:function(e){t.goright()}}},[a("i",{staticClass:"arrow right"})])])])])},L=[],G={name:"gallerymodal",props:{images:Array},data:function(){return{index:0}},methods:{goleft:function(){0===this.index?this.index=this.images.length-1:this.index--,this.ensurenoselect()},goright:function(){this.index===this.images.length-1?this.index=0:this.index++,this.ensurenoselect()},closemodal:function(){this.$parent.$emit("close-modal")},gotogallery:function(){this.$parent.$emit("close-modal"),this.$router.push({path:"/gallery"})},ensurenoselect:function(){window.getSelection?window.getSelection().removeAllRanges():document.selection&&document.selection.empty()}},computed:{source:function(){return this.images[this.index]}}},U=G,H=(a("b35f"),Object(d["a"])(U,M,L,!1,null,"083332d8",null));H.options.__file="gallerymodal.vue";var R=H.exports,Z={name:"work",components:{worksum:q,gallerymodal:R},data:function(){return{ronin_txt:"Static website built in October 2019 with a booking app currently in developement. \n                The clients are a growing accomodation business in Bali. Their primary focus is providing \n                Co-Live-Co-Work spaces for Digital Nomads. The boking application that is currently in \n                developement will allow customers and guests to check availability of rooms, book rooms \n                and co-working desks, make payments and include customisable packages which will increase \n                or decrease costs. Estimated time of completion is early in 2020. This is a scratch build \n                using my boilerplate and a custom deploy pipe.",neto_txt:'I was almost solely responsible for building the frontend of the current version \n                hosted at <a href="https://netograph.io" target="_blank">netograph.io</a>. Netograph \n                has an incredible amount of data, presenting it in an easily readable and user friendly manner \n                was an enjoyable challenge. More details can be found on my <a href="/cv">C.V</a>. The incredible \n                amount of data captured for each domain or IP address made building the frontend of this app \n                a wonderful challenge.',babyaid_txt:"Static website and booking app written for a now defunct medical start up in New Zealand. \n                I built a calendar app using a forked Vue calendar found on GitHub. A checkout and payment system \n                built using a hashed URL stored in the DB so that bookings would persist over time and could be \n                returned to at any time, and a round trip to the server every time a change was made by the user \n                to ensure correctness of information displayed on the page. Payments were made using Stripe. \n                The app included an admin area, secured by a session token, for staff to manage courses and allocate \n                trainers at various times and dates. SEO was taken care of by a small meta tagging library which \n                I wrote myself. This was an enjoyable project, and I was happy with the result.",dbb_txt:"Built while working at Fusion Sport Australia. I was the project lead. This app allows \n                customers to build their own dashboards to display data visually. When I moved from the backend \n                to the frontend team, all dashboards were being built by hand, it was time consuming and expensive \n                for customers. By the time I left, the Dashboard Builder allowed customers to build very detailed \n                dashboards without tying up our frontend developers. A very cool piece of Javascript!",babimg:["https://more-art-than.science/images/bab1-lowqual.jpg","https://more-art-than.science/images/bab3-lowqual.jpg","https://more-art-than.science/images/bab2-lowqual.jpg","https://more-art-than.science/images/bab4-lowqual.jpg"],netimg:["https://more-art-than.science/images/neto1-lowqual.jpg","https://more-art-than.science/images/neto2-lowqual.jpg","https://more-art-than.science/images/neto3-lowqual.jpg","https://more-art-than.science/images/neto4-lowqual.jpg"],dbbimg:["https://more-art-than.science/images/dbb1-lowqual.jpg","https://more-art-than.science/images/dbb2-lowqual.jpg","https://more-art-than.science/images/dbb3-lowqual.jpg","https://more-art-than.science/images/dbb4-lowqual.jpg"],roninimg:["https://more-art-than.science/images/ronin1-lowqual.jpg","https://more-art-than.science/images/ronin2-lowqual.jpg","https://more-art-than.science/images/ronin3-lowqual.jpg","https://more-art-than.science/images/ronin4-lowqual.jpg"],ronin_tech:{front:"Vue, Sass",tooling:"VueCli",devops:"Ubuntu 16.04 on DigitalOcean",deploys:"Shell script",backend:"NodeJS",db:"Mongo"},neto_tech:{front:"Vue, Vue-Class-Component, Typescript, Sass, D3.js",tooling:"Custom Webpack Config",devops:"Google App Engine, Docker, Kubernetes",deploys:"Modd",backend:"GoLang",db:"Google Big Table"},baby_tech:{front:"Vue, Bulma Scss",tooling:"Webpack",devops:"Ubuntu 16.04 on DigitalOcean",deploys:"Shell script",backend:"NodeJS",db:"Mongo"},dbb_tech:{front:"Vue, Bulma Scss, D3.js, C3.js",tooling:"Custom Webpack Config",devops:"CentOS, Amazon CDN",deploys:"Shell scripts",backend:"Java",db:"PSQL"},act_array:null,showmodal:!1}},mounted:function(){var t=this;this.$on("open-modal",function(e){var a=[];e.forEach(function(e){a.push(t.transform(e))}),t.act_array=a,t.showmodal=!0}),this.$on("close-modal",function(){t.act_array=null,t.showmodal=!1})},methods:{transform:function(t){return t.replace("-lowqual.jpg",".png")}},computed:{}},z=Z,Q=(a("a59b"),Object(d["a"])(z,E,$,!1,null,"704897bd",null));Q.options.__file="work.vue";var K=Q.exports,X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"cv-con",attrs:{id:"print-vis-on"}},[a("h1",{staticClass:"main"},[t._v("Hamish Clulee")]),a("h3",[t._v("References upon request")]),a("h5",[t._v("hamish.clulee@gmail.com")]),a("h6",[t._v("Digital Nomad, primarily located in Asia.")]),a("h6",[t._v("New Zealand Citizen.")]),a("div",{staticClass:"fin-con"},[t._v("~")]),t._m(0),a("div",{staticClass:"fin-con"},[t._v("~")]),t._l(t.jobs,function(e,s){return a("div",{key:s,staticClass:"job-con"},[a("h2",[t._v(t._s(e.employer))]),a("h3",[t._v(t._s(e.title))]),a("h5",[t._v(t._s(e.dates))]),e.references?a("h6",{staticClass:"refs"},[t._v("References available")]):t._e(),t._l(e.description,function(e,s){return a("p",{key:s,domProps:{innerHTML:t._s(e)}})}),a("div",{staticClass:"fin-con"},[t._v("~")])],2)})],2)},Y=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"key-con"},[a("h6",{staticClass:"exp-head"},[t._v("Commercial Environments & Production Web Applications")]),a("p",[a("em",[t._v("VueJs")]),t._v(" - 3+ years")]),a("p",[t._v("Javascript - 4+ years")]),a("p",[t._v("Java - 4+ years")]),a("p",[t._v("SASS/SCSS/CSS 4+ years")]),a("p",[t._v("NodeJs - 2+ years")]),a("p",[t._v("Linux - 4+ years")]),a("h6",{staticClass:"exp-head"},[t._v("Other relevant skills")]),a("p",[t._v("Working Remote - 3+ years")]),a("p",[t._v("Web Development - 5+ years")]),a("p",[t._v("Gimp/Inkscape (linux graphics and images editors) - 5+ years")])])}],tt={name:"cv",data:function(){return{jobs:[{title:"Full Stack Web Developer",employer:"Freelancing",dates:"April 2015 - Present (4+ years)",description:["Since early 2015 I have taken on a number of freelance web dev jobs, both while working \n                            in waged positions and as a full time freelancer.","Breif summary of works:","<ul>",'<li>Scratch build a booking, payment and calendar management app for @RONIN, \n                            a company that provides co-working and co-living spaces for digital nomads. \n                            Currently under developement. Details on the <a href="/work">showcase page</a>.</li>','<li>Scratch build a booking, payment and staff allocation app for BabyAidNZ, an \n                            education outfit in New Zealand. Details on the <a href="/work">showcase page</a>.</li>',"<li>A growing number of static websites/brochurewear sites, built from scratch and self \n                            hosted on DigitalOcean.</li>","</ul>","~","Almost everything I do while freelancing finds a way to make use of <em>VueJs</em> in some way, \n                            shape or form."],references:!0},{title:"Senior Frontend Developer",employer:"Netograph",dates:"August 2018 - August 2019 (1 year 1 month)",description:['Netograph provides a web app and an API service, their frontend is written in <em>VueJs</em> \n                            and Typescript, backed by a custom webpack configuration. Visualisations are written in \n                            d3.js. I was responsible for the vast majority of the frontend code currently hosted at \n                            <a href="https://netograph.io" target="_blank">https://netpgraph.io</a>',"Netograph's product is data. That data is gathered by a web crawler. Beginning by crawling \n                            open social media platforms like Twitter and 4chan each crawler thread follows any links \n                            encountered. When the crawler thread encounters a new domain it uses a headless browser to \n                            record all the worthwhile information and sends it back to the Netograph servers, then starts \n                            a new crawl. At the time I left there were over 2000 threads, which performed a capture in \n                            around 2 minutes and were constantly running. Netograph has a lot of data, 19 billion http \n                            request pairs captured at last count!","Netograph is primarily focused on security and privacy insights, but has the potential to provide \n                            intelligence in almost any industry due to the size of the database and the level of detail \n                            that website capture provided. This was an awesome place to work and I thoroughly enjoyed the \n                            challenges encountered."],references:!0},{title:"Contract Frontend Developer",employer:"Allow Design",dates:"Intermittent between January 2017 - February 2019 (Contracts totalling 9+ months)",description:["Allow Design was a studio based in Dunedin, New Zealand. They had one primary client, \n                            a US healthcare giant. They would create functioning mini applications as design \n                            templates for developers working directly for healthcare firm. I was employed on \n                            and off for a number of these prototypes, I would create mini-web-apps from a \n                            Photoshop file provided by a Allow designer. I was also responsible for overhauling \n                            the frontend tooling and build system, to enact a <em>VueJs</em> and Webpack boilerplate, \n                            which was in usage until the company folded early this year."],references:!1},{title:"Software Developer",employer:"Fusion Sport Inc.",dates:"October 2017 - April 2018 (7 months)",description:["Fusion is a sports science company that sells web and hardware products designed to \n                            provide athletes and sports teams with competitive advantages.",'My main focus was Smartabase; Fusion\'s main product. It\'s a web application with a \n                            "data-in-insights-out" model. Most of my time at Fusion was spent on the "...insights-out" \n                            part of their business, I wrote software that generated charts and tables from the data \n                            provided by the customer. I rebuilt frontend tooling, to replace Gulp and JQuery with a \n                            custom Webpack and <em>VueJs</em> boilerplate. The new boilerplate reduced lead time \n                            by a significant amount, the new tooling setup was heralded as very large success and \n                            is still in usage today.','After a month or so of handwriting dashboards using the new boilerplate and d3.js/c3.js, \n                            I proposed that we write an app to allow customers to build their own dashboards \n                            without needing developers. I was granted leadership of the Dashboard Builder Project. \n                            Details on the <a href="/work">showcase</a> page. The Dashboard Builder was a big success \n                            and continues to be a customer favorite at Fusion. While most of my time at Fusion was spent \n                            writing <em>VueJs</em>, I was also still responsible for providing all the API support to the \n                            frontend team, which required me to spend time wrting Java and Shell scripts. The Dashboard \n                            Builder project continues to be the most enjoyable project I have ever worked on. \n                            We were given a lot of autonomy, and produced a highly usable and performant piece of javascript \n                            in a short period of time.'],references:!0},{title:"Web Application Developer",employer:"Profiler Corporation",dates:"August 2016 - October 2017 (1 year 3 months)",description:["Profiler is sports science company based in Dunedin, New Zealand. Most of\n                            my time was spent writing Java on the back end of a large web portal which\n                            focused on providing custom form entry to sports teams and athletes.","Nearer\n                            the end of my time in this position my focus shifted to be far more fron end\n                            focused, with a lot of my time spent writing <em>VueJS</em> and beginning to increase its\n                            usage throughout the code base."],references:!0}]}}},et=tt,at=(a("73bb"),Object(d["a"])(et,X,Y,!1,null,"79ce95d4",null));at.options.__file="cv.vue";var st=at.exports,nt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},it=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"temp-con"},[a("h1",[t._v("Blog coming soon...")])])}],ot={name:"blog"},rt=ot,lt=(a("37c8"),Object(d["a"])(rt,nt,it,!1,null,"70fa6c3e",null));lt.options.__file="blog.vue";var ct=lt.exports,dt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ut=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{attrs:{id:"not-found"}},[a("div",{staticClass:"circles"},[a("p",{staticClass:"text-color-control"},[t._v("404"),a("br"),a("small",{staticClass:"text-color-control"},[t._v("PAGE NOT FOUND")])])])])}],mt={name:"PageNotFound",data:function(){return{}},mounted:function(){},methods:{},computed:{}},ht=mt,pt=(a("085d"),Object(d["a"])(ht,dt,ut,!1,null,"4bca5bf2",null));pt.options.__file="notfound.vue";var vt=pt.exports,ft=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"temp-con"},[a("div",{staticClass:"tech-con"},[a("h3",[t._v("Stack")]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[t._v("Frontend:")]),a("div",{staticClass:"itm-val"},[t._v(t._s(t.tech.front))])]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[t._v("Tooling")]),a("div",{staticClass:"itm-val"},[t._v(t._s(t.tech.tooling))])]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[t._v("DevOps:")]),a("div",{staticClass:"itm-val"},[t._v(t._s(t.tech.devops))])]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[t._v("Deploys:")]),a("div",{staticClass:"itm-val"},[t._v(t._s(t.tech.deploys))])]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[t._v("Backend:")]),a("div",{staticClass:"itm-val"},[t._v(t._s(t.tech.backend))])]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[t._v("Database:")]),a("div",{staticClass:"itm-val"},[t._v(t._s(t.tech.db))])])]),a("p",[t._v("\n        Static website built in October 2019 with a booking app currently in developement. \n        The clients are a growing accomodation business in Bali. Their primary focus is providing \n        Co-Live-Co-Work spaces for Digital Nomads. The boking application that is currently in \n        developement will allow customers and guests to check availability of rooms, book rooms \n        and co-working desks, make payments and include customisable packages which will increase \n        or decrease costs. Estimated time of completion is early in 2020. This is a scratch build \n        using my boilerplate and a custom deploy pipe.\n    ")])])},bt=[],gt={name:"ronin",data:function(){return{tech:{front:"Vue, Sass",tooling:"VueCli",devops:"Ubuntu 16.04 on DigitalOcean",deploys:"Shell script",backend:"NodeJS",db:"Mongo"}}}},_t=gt,wt=(a("7421"),Object(d["a"])(_t,ft,bt,!1,null,"65e93efa",null));wt.options.__file="ronin.vue";var yt=wt.exports,Ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"temp-con"},[a("div",{staticClass:"tech-con"},[a("h3",[t._v("Stack")]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[t._v("Frontend:")]),a("div",{staticClass:"itm-val"},[t._v(t._s(t.tech.front))])]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[t._v("Tooling")]),a("div",{staticClass:"itm-val"},[t._v(t._s(t.tech.tooling))])]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[t._v("DevOps:")]),a("div",{staticClass:"itm-val"},[t._v(t._s(t.tech.devops))])]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[t._v("Deploys:")]),a("div",{staticClass:"itm-val"},[t._v(t._s(t.tech.deploys))])]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[t._v("Backend:")]),a("div",{staticClass:"itm-val"},[t._v(t._s(t.tech.backend))])]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[t._v("Database:")]),a("div",{staticClass:"itm-val"},[t._v(t._s(t.tech.db))])])]),a("p",[t._v("\n        I was almost solely responsible for building the frontend of the current \n        version hosted at "),a("a",{attrs:{href:"https://netograph.io",target:"_blank"}},[t._v("netograph.io")]),t._v(". \n        Netograph has an incredible amount of data, presenting it in an easily readable \n        and user friendly manner was an enjoyable challenge. More details can be \n        found on my "),a("router-link",{attrs:{to:{path:"/cv"}}},[t._v("C.V")])],1)])},kt=[],St={name:"neto",data:function(){return{tech:{front:"Vue, Vue-Class-Component, Typescript, Sass, D3.js",tooling:"Custom Webpack Config",devops:"Google App Engine, Docker, Kubernetes",deploys:"Modd",backend:"GoLang",db:"Google Big Table"}}}},jt=St,Dt=(a("57e7"),Object(d["a"])(jt,Ct,kt,!1,null,"2982f14f",null));Dt.options.__file="netograph.vue";var xt=Dt.exports,Ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"temp-con"},[a("div",{staticClass:"tech-con"},[a("h3",[t._v("Stack")]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[t._v("Frontend:")]),a("div",{staticClass:"itm-val"},[t._v(t._s(t.tech.front))])]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[t._v("Tooling")]),a("div",{staticClass:"itm-val"},[t._v(t._s(t.tech.tooling))])]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[t._v("DevOps:")]),a("div",{staticClass:"itm-val"},[t._v(t._s(t.tech.devops))])]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[t._v("Deploys:")]),a("div",{staticClass:"itm-val"},[t._v(t._s(t.tech.deploys))])]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[t._v("Backend:")]),a("div",{staticClass:"itm-val"},[t._v(t._s(t.tech.backend))])]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[t._v("Database:")]),a("div",{staticClass:"itm-val"},[t._v(t._s(t.tech.db))])])]),a("p",[t._v("\n        Static website and booking app written for a now defunct medical start up in \n        New Zealand. I built a calendar app using a forked Vue calendar found on GitHub. \n        A checkout and payment system built using a hashed URL stored in the DB so that \n        bookings would persist over time and could be returned to at any time, and a round \n        trip to the server every time a change was made by the user to ensure correctness \n        of information displayed on the page. Payments were made using Stripe. The app \n        included an admin area, secured by a session token, for staff to manage courses \n        and allocate trainers at various times and dates. SEO was taken care of by a \n        small meta tagging library which I wrote myself. This was an enjoyable project, \n        and I was happy with the result.\n    ")])])},It=[],At={name:"babyaid",data:function(){return{tech:{front:"Vue, Bulma Scss",tooling:"Webpack",devops:"Ubuntu 16.04 on DigitalOcean",deploys:"Shell script",backend:"NodeJS",db:"Mongo"}}}},Tt=At,Nt=(a("4f30"),Object(d["a"])(Tt,Ot,It,!1,null,"a9a04d4a",null));Nt.options.__file="babyaid.vue";var Bt=Nt.exports,Et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"temp-con"},[a("div",{staticClass:"tech-con"},[a("h3",[t._v("Stack")]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[t._v("Frontend:")]),a("div",{staticClass:"itm-val"},[t._v(t._s(t.tech.front))])]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[t._v("Tooling")]),a("div",{staticClass:"itm-val"},[t._v(t._s(t.tech.tooling))])]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[t._v("DevOps:")]),a("div",{staticClass:"itm-val"},[t._v(t._s(t.tech.devops))])]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[t._v("Deploys:")]),a("div",{staticClass:"itm-val"},[t._v(t._s(t.tech.deploys))])]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[t._v("Backend:")]),a("div",{staticClass:"itm-val"},[t._v(t._s(t.tech.backend))])]),a("div",{staticClass:"tech-itm"},[a("div",{staticClass:"itm-name"},[t._v("Database:")]),a("div",{staticClass:"itm-val"},[t._v(t._s(t.tech.db))])])]),a("p",[t._v("\n        Built while working at Fusion Sport Australia. I was the project lead. This app allows \n        customers to build their own dashboards to display data visually. When I moved from \n        the backend to the frontend team, all dashboards were being built by hand, it was \n        time consuming and expensive for customers. By the time I left, the Dashboard \n        Builder allowed customers to build very detailed dashboards without tying up our \n        frontend developers. A very cool piece of Javascript!\n    ")])])},$t=[],Jt={name:"dbb",data:function(){return{tech:{front:"Vue, Bulma Scss, D3.js, C3.js",tooling:"Custom Webpack Config",devops:"CentOS, Amazon CDN",deploys:"Shell scripts",backend:"Java",db:"PSQL"}}}},Vt=Jt,Wt=(a("b839"),Object(d["a"])(Vt,Et,$t,!1,null,"01d5200c",null));Wt.options.__file="dbb.vue";var Pt=Wt.exports;s["a"].use(x["a"]);var Ft=new x["a"]({mode:"history",scrollBehavior:function(t,e,a){return a||{x:0,y:0}},routes:[{path:"/",name:"home",component:B},{path:"/work",name:"work",component:K},{path:"/work/ronin",name:"ronin",component:yt},{path:"/work/netograph",name:"netograph",component:xt},{path:"/work/babyaid",name:"babyaid",component:Bt},{path:"/work/dashboardbuilder",name:"dbb",component:Pt},{path:"/blog",name:"blog",component:ct},{path:"/cv",name:"cv",component:st},{path:"*",name:"notfound",component:vt}]});s["a"].use(D),s["a"].use(Ft),s["a"].config.productionTip=!1,new s["a"]({store:D,router:Ft,render:function(t){return t(f)}}).$mount("#app")},"57e7":function(t,e,a){"use strict";var s=a("1d80"),n=a.n(s);n.a},"5cc7":function(t,e,a){},"644a":function(t,e,a){"use strict";var s=a("852a"),n=a.n(s);n.a},"6f22":function(t,e,a){},7397:function(t,e,a){"use strict";var s=a("4491"),n=a.n(s);n.a},"73bb":function(t,e,a){"use strict";var s=a("6f22"),n=a.n(s);n.a},7421:function(t,e,a){"use strict";var s=a("402b"),n=a.n(s);n.a},"852a":function(t,e,a){},"88e5":function(t,e,a){},a314:function(t,e,a){},a59b:function(t,e,a){"use strict";var s=a("4cf0"),n=a.n(s);n.a},b35f:function(t,e,a){"use strict";var s=a("1915"),n=a.n(s);n.a},b839:function(t,e,a){"use strict";var s=a("0a3a"),n=a.n(s);n.a},d6fb:function(t,e,a){},e4c9:function(t,e,a){}});
//# sourceMappingURL=app.6b67c757.js.map