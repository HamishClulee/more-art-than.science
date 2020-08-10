(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f0f41"],{"9f20":function(e,t){e.exports='<h1 id="what-are-the-react-team-principles">What Are the React Team Principles?</h1>\n<h2 id="ui-before-api">UI Before API.</h2>\n<blockquote>\n<p>During my time on the React team, I’ve been lucky to see how <a href="https://twitter.com/jordwalke">Jordan</a>, <a href="https://twitter.com/sebmarkbage">Sebastian</a>, <a href="https://twitter.com/sophiebits">Sophie</a> and other tenured team members approach problems. In this post, I&#39;m distilling what I learned from them into a few high-level technical principles. These principles aren’t meant to be exhaustive. This is my personal attempt to formalize observations about how the React team operates — other team members may have different perspectives.</p>\n</blockquote>\n<h3 id="ui-before-api-1">UI Before API</h3>\n<p>Every abstraction has its own quirks when deployed at scale. How do those quirks manifest themselves in the user interfaces? Can you tell when an app is built with a certain abstraction?</p>\n<p>Abstractions have a direct effect on the user experiences — enabling, perpetuating, or even making some of them impossible. This is why when designing APIs, we don’t start with the abstraction itself. Instead, we start with the desired user experience, and work backwards to the abstraction.</p>\n<p>Sometimes as we work backwards, we realize we need to change the whole approach to enable the right user experience. We can’t see that if we start with the API. So we put UI before API.</p>\n<pre><code class="language-html">&lt;template&gt;\n    &lt;div class=&quot;cv-con&quot; id=&quot;print-vis-on&quot;&gt;\n        &lt;h1 class=&quot;main&quot;&gt;Hamish Clulee&lt;/h1&gt;\n        &lt;h2&gt;BSc, Software Engineering, University of Otago&lt;/h2&gt;\n        &lt;h3&gt;References upon request&lt;/h3&gt;\n        &lt;h5&gt;hamish.clulee@gmail.com&lt;/h5&gt;\n        &lt;h6&gt;Digital Nomad, primarily located in Asia.&lt;/h6&gt;\n        &lt;h6&gt;New Zealand Citizen.&lt;/h6&gt;\n        &lt;mark class=&quot;divider&quot;&gt;~&lt;/mark&gt;\n        &lt;div class=&quot;key-con&quot;&gt;\n            &lt;!-- Some things go here --&gt;\n        &lt;/div&gt;\n        &lt;mark class=&quot;divider&quot;&gt;~&lt;/mark&gt;\n        &lt;div class=&quot;job-con&quot; v-for=&quot;(v, i) in jobs&quot; :key=&quot;i&quot;&gt;\n            &lt;h2&gt;{{ v.employer }}&lt;/h2&gt;\n            &lt;h3&gt;{{ v.title }}&lt;/h3&gt;\n            &lt;h5&gt;{{ v.dates }}&lt;/h5&gt;\n            &lt;h6 class=&quot;refs&quot; v-if=&quot;v.references&quot;&gt;References available&lt;/h6&gt;\n            &lt;p v-for=&quot;(p, x) in v.description&quot; :key=&quot;x&quot; v-html=&quot;p&quot; class=&quot;des-para&quot; :class=&quot;x === 0 ? &#39;first-des-para&#39; : &#39;&#39;&quot;&gt;&lt;/p&gt;\n            &lt;mark class=&quot;divider&quot;&gt;~&lt;/mark&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n&lt;/template&gt;</code></pre>\n<h3 id="absorb-the-complexity">Absorb the Complexity</h3>\n<p>Making React internals simple is not a goal. We are willing to make React internals complex if that complexity lets product developers keep their code easier to understand and modify.</p>\n<p>We want to allow the product development be decentralized and collaborative. Often, that means that we bear the brunt of centralization. React can’t be split into small simple loosely coupled modules because in order to do its job, something has to act as the coordinator. That’s what React is.</p>\n<p>By raising the abstraction level, we make product developers more powerful. They benefit from the system as a whole having certain predictable properties. But this means that every new N+1st feature we introduce has to work well with all of the N existing features. This is why contributing new features to React is so difficult both at the design and the implementation side. This is why we don’t get many “core” open source contributions.</p>\n<p>We absorb the complexity to stop its bleeding into the product code.</p>\n<h3 id="hacks-then-idioms">Hacks, Then Idioms</h3>\n<p>Every API creates new restrictions. Sometimes these restrictions prevent people from shipping delightful user experiences. We provide escape hatches so people can work around us where necessary.</p>\n<p>Hacks can’t survive for long because they are fragile. Product developers then have to choose whether they prefer to take a maintenance hit by supporting the hack, or to degrade the user experience but remove the hack. Often, the user experience loses — or the hack prevents further improvements to it.</p>\n<p>We need to allow hacks using escape hatches, and observe which hacks people put in practice. Our job is to eventually provide an idiomatic solution for hacks that exist in the name of better user experience. Sometimes, a solution might take years. We prefer a flexible hack to entrenching a poor idiom.</p>\n<pre><code class="language-html">&lt;template&gt;\n    &lt;div class=&quot;cv-con&quot; id=&quot;print-vis-on&quot;&gt;\n        &lt;h1 class=&quot;main&quot;&gt;Hamish Clulee&lt;/h1&gt;\n        &lt;h2&gt;BSc, Software Engineering, University of Otago&lt;/h2&gt;\n        &lt;h3&gt;References upon request&lt;/h3&gt;\n        &lt;h5&gt;hamish.clulee@gmail.com&lt;/h5&gt;\n        &lt;h6&gt;Digital Nomad, primarily located in Asia.&lt;/h6&gt;\n        &lt;h6&gt;New Zealand Citizen.&lt;/h6&gt;\n        &lt;mark class=&quot;divider&quot;&gt;~&lt;/mark&gt;\n        &lt;div class=&quot;key-con&quot;&gt;\n            &lt;h6 class=&quot;exp-head&quot;&gt;Commercial Environments &amp;amp; Production Web Applications&lt;/h6&gt;\n            &lt;p&gt;&lt;em&gt;VueJs&lt;/em&gt; - 3+ years&lt;/p&gt;\n            &lt;p&gt;Javascript - 4+ years&lt;/p&gt;\n            &lt;p&gt;Java - 4+ years&lt;/p&gt;\n            &lt;p&gt;SASS/SCSS/CSS 4+ years&lt;/p&gt;\n            &lt;p&gt;NodeJs - 2+ years&lt;/p&gt;\n            &lt;p&gt;Linux - 4+ years&lt;/p&gt;\n            &lt;h6 class=&quot;exp-head&quot;&gt;Other relevant skills&lt;/h6&gt;\n            &lt;p&gt;Working Remote - 3+ years&lt;/p&gt;\n            &lt;p&gt;Web Development - 5+ years&lt;/p&gt;\n            &lt;p&gt;Gimp/Inkscape (linux graphics and images editors) - 5+ years&lt;/p&gt;\n        &lt;/div&gt;\n        &lt;mark class=&quot;divider&quot;&gt;~&lt;/mark&gt;\n        &lt;div class=&quot;job-con&quot; v-for=&quot;(v, i) in jobs&quot; :key=&quot;i&quot;&gt;\n            &lt;h2&gt;{{ v.employer }}&lt;/h2&gt;\n            &lt;h3&gt;{{ v.title }}&lt;/h3&gt;\n            &lt;h5&gt;{{ v.dates }}&lt;/h5&gt;\n            &lt;h6 class=&quot;refs&quot; v-if=&quot;v.references&quot;&gt;References available&lt;/h6&gt;\n            &lt;p v-for=&quot;(p, x) in v.description&quot; :key=&quot;x&quot; v-html=&quot;p&quot; class=&quot;des-para&quot; :class=&quot;x === 0 ? &#39;first-des-para&#39; : &#39;&#39;&quot;&gt;&lt;/p&gt;\n            &lt;mark class=&quot;divider&quot;&gt;~&lt;/mark&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n&lt;/template&gt;</code></pre>\n<h3 id="enable-local-reasoning">Enable Local Reasoning</h3>\n<p>There aren’t many things you can do in a code editor. You can add some lines or remove them. Or copy and paste something. And yet many abstractions make these basic operations difficult.</p>\n<p>For example, MVC frameworks tend to make it unsafe to delete some part of the rendering output. This is because parents imperatively call methods on their children (which aren’t there after you removed them). By contrast, in React it’s usually safe to just delete lines of code in your render tree. This is a win.</p>\n<p>When designing APIs, we assume the person only has local knowledge about the piece of code they’re working on. When the intended effect is local, we want to prevent surprising outcomes. For example, we usually expect adding code to be safe. We expect removing and changing code to clearly point to the whole trail of code that needs to be considered as part of this change. We can’t assume the knowledge of the whole codebase when changing a single file.</p>\n<p>When something isn’t safe to do, we want the developer to discover the full effects of their change as early as possible. Warnings, type checks, and developer tooling can help, but they are limited by the API design. If the API is not restrictive enough, local reasoning is impossible. For example, this is why <code>findDOMNode()</code> is bad. It requires global knowledge.</p>\n<h3 id="progressive-complexity">Progressive Complexity</h3>\n<p>Some frameworks choose to have a fork in the road. They provide two ways to do something: an easy way, and a powerful way. The easy way is nice to learn, but at some point you hit a wall. When that happens, you have to undo your past work, and reimplement it differently.</p>\n<p>We prefer that implementing a complex thing isn’t too much different in structure from implementing a simple thing. For example, we don’t offer a separate template DSL “for the simple cases” because it creates a fork in the road. We’re willing to compromise on the barrier to entry if we think you’re going to want the fully featured mechanism soon anyway.</p>\n<p>Sometimes, the “easy way” and the “powerful way” are two different frameworks. Then you also have to rewrite. It’s nice when we can avoid that, too. For example, adding server rendering is an optimization that requires some extra effort in React but not a full-on rewrite.</p>\n<pre><code class="language-javascript">&lt;script&gt;\n    export default {\n        name: &#39;cv&#39;,\n        data () {\n            return {\n                jobs: [\n                    {\n                        title: &#39;Frontend Tech Lead&#39;,\n                        employer: &#39;AduroLabs Vietnam&#39;,\n                        dates: &#39;December 2019 - Present&#39;,\n                        references: true,\n                    },\n                    {\n                        title: &#39;Lead Frontend Developer&#39;,\n                        employer: &#39;Netograph&#39;,\n                        dates: &#39;August 2018 - August 2019 (1 year 1 month)&#39;,\n                        references: true,\n                    },\n                    {\n                        title: &#39;Contract Frontend Developer&#39;,\n                        employer: &#39;Allow Design&#39;,\n                        dates: &#39;Intermittent between January 2017 - February 2019 (Contracts totalling 12 months)&#39;,\n                        references: false,\n                    },\n                    {\n                        title: &#39;Software Developer&#39;,\n                        employer: &#39;Fusion Sport Inc.&#39;,\n                        dates: &#39;October 2017 - April 2018 (7 months)&#39;,\n                        references: true,\n                    },\n                    {\n                        title: &#39;Web Application Developer&#39;,\n                        employer: &#39;Profiler Corporation&#39;,\n                        dates: &#39;August 2016 - October 2017 (1 year 3 months)&#39;,\n                        references: true,\n                    },\n                ]\n            }\n        }\n    }\n&lt;/script&gt;</code></pre>\n<h3 id="contain-the-damage">Contain the Damage</h3>\n<p>Top-down tools like code budgets are important. However, over the long term, our standards will slip, features will ship under deadlines, and products will be unmaintained. When we can’t rely on everyone playing along, our role as a coordinator is to contain the damage.</p>\n<p>If some UI code is slow or over budget, we need to do what we can to reduce its negative effects on loading time and interactions with other parts of the UI. Ideally, the developer should only “pay” for the features they use, and the user should only “pay” for the UI they interact with. Concurrent Mode features including Time Slicing and Selective Hydration are different levers to address that.</p>\n<p>Because the library code overhead is relatively stable but the application code is unbounded, we tend to focus on containing the damage in the application code instead of the fixed cost of library code.</p>\n<pre><code class="language-sass">&lt;style lang=&quot;sass&quot; scoped&gt;\n$heading-vertical-margin: 8px\n$heading-neg-align: -2px\n.cv-con\n    width: 80%\n    margin-left: auto\n    margin-right: auto\n    margin-top: 90px\n    margin-bottom: 150px\n    @media (min-width: 520px) and (max-width: 1080px)\n        width: 90%\n    @media (min-width: 0px) and (max-width: 520px)\n        width: 95%\n    h1\n        margin-bottom: 5px\n        margin-left: $heading-neg-align\n        font-size: 3.5em\n        @media (min-width: 520px) and (max-width: 1080px)\n            font-size: 2.8em\n        @media (min-width: 0px) and (max-width: 520px)\n            font-size: 2.2em\n    h2\n        margin-bottom: $heading-vertical-margin\n        margin-top: $heading-vertical-margin\n        margin-left: $heading-neg-align\n        font-size: 2.8em\n        color: lighten($font, 10)\n        @media (min-width: 520px) and (max-width: 1080px)\n            font-size: 2.4em\n        @media (min-width: 0px) and (max-width: 520px)\n            font-size: 1.8em\n    h3\n        margin-top: $heading-vertical-margin\n        margin-bottom: $heading-vertical-margin\n        margin-left: $heading-neg-align\n        font-size: 2.5em\n        color: $secondary\n        @media (min-width: 520px) and (max-width: 1080px)\n            font-size: 2.2em\n        @media (min-width: 0px) and (max-width: 520px)\n            font-size: 1.6em\n    h5\n        font-size: 1.7em\n        margin-top: $heading-vertical-margin\n        margin-bottom: $heading-vertical-margin\n        margin-left: $heading-neg-align\n        color: $font-light\n        @media (min-width: 520px) and (max-width: 1080px)\n            font-size: 1.5em\n        @media (min-width: 0px) and (max-width: 520px)\n            font-size: 1.4em\n    h6\n        margin-top: $heading-vertical-margin\n        margin-bottom: $heading-vertical-margin\n        margin-left: $heading-neg-align\n    p\n        font-size: 1.3em\n        line-height: 1.4\n        margin: 5px 0\n        @media (min-width: 520px) and (max-width: 1080px)\n            font-size: 1.2em\n        @media (min-width: 0px) and (max-width: 520px)\n            font-size: 1.1em\n    .des-para\n        margin-bottom: 15px\n    .first-des-para\n        margin-top: 20px\n.exp-head\n    font-size: 2em\n    margin: 30px 0 15px !important\n    @media (min-width: 520px) and (max-width: 1080px)\n        font-size: 1.6em\n    @media (min-width: 0px) and (max-width: 520px)\n        font-size: 1.3em\n.refs\n   color: lighten($font, 10)\n   margin-bottom: 15px\n   padding-top: 10px !important\n   font-style: italic\np.divider\n    font-size: 2.2em\n&lt;/style&gt;</code></pre>\n<h3 id="trust-the-theory">Trust the Theory</h3>\n<p>Sometimes, we know an approach is a dead end. Maybe it works today, but we are already aware of its limitations, and they fundamentally prevent us from achieving the desirable user experience. We pivot away from investing into such approach as soon as it’s viable to do so.</p>\n<p>We want to avoid getting stuck in a local maxima. If another approach makes a lot more sense in theory, we’re willing to invest the effort to get there, even if it takes many years. There will be many obstacles and pragmatic compromises we might have to make to get there. But we trust that if we keep chipping away at them, eventually the theory wins.</p>\n<blockquote>\n<p>These are a few fundamental principles I&#39;ve observed in how we work, but I&#39;ve probably missed a bunch of them. I also haven&#39;t touched on the less technical principles around how we roll out APIs, communicate changes, and so on. That could be a topic for another day.Does your team have a set of principles? I’d love to hear about them.</p>\n</blockquote>\n'}}]);
//# sourceMappingURL=chunk-2d0f0f41.c03b2c0a.js.map