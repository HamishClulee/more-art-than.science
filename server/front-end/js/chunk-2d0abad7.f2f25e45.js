(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0abad7"],{"15fc":function(e,t){e.exports='<h1 id="tips-for-new-vuejs-players">Tips For New VueJs Players</h1>\n<h2 id="common-mistakes-seen-in-vue-codebases">Common mistakes seen in Vue codebases</h2>\n<p><em>Last updated Aug 29, 2020</em></p>\n<blockquote>\n<p>A list of common mistakes from junior Vue devs I have observed from the last few years.</p>\n</blockquote>\n<h3 id="not-using-the-same-name-for-component-file-component-template-declarations-and-a-components-name-property">Not using the same name for component file, component template declarations and a components name property</h3>\n<pre><code class="language-html">&lt;template&gt;\n  &lt;foo-bar-component&gt;&lt;/foo-bar-component&gt;\n&lt;template&gt;</code></pre>\n<pre><code class="language-javascript">import FooBarComponent from &#39;../components/FooBarComponent.vue&#39;\n\ndefault {\n  name: &#39;FooBarComponent&#39;,\n  components: {\n    &#39;foo-bar-component&#39;: FooBarComponent\n  }\n}</code></pre>\n<p>Component template declarations should be written in the snake-case version of the component file name, the file name should be written in PascalCase.</p>\n<p>To convert PascalCase to snake-case, simply replace the capital letters (except for the first!) into hypens:</p>\n<pre><code>YouAreAwesome --&gt; you-are-awesome\nThisMakesDebuggingEasier --&gt; this-makes-debugging-easier</code></pre><p>Yes - this makes debugging easier, when using VueDevTools, it&#39;s much easier to find everything if all the names; file name, name attribute in the component and the component decalration in template blocks, are all the same except for casing.</p>\n<h3 id="not-line-wrapping">Not line wrapping</h3>\n<p><strong>Bad</strong></p>\n<pre><code class="language-html">&lt;div class=&quot;warning-subtext&quot;&gt;{{firstLetterUpperCase(participant.fullName)}} will not be able to see your message until his/her employer turns Coach Chat on.&lt;/div&gt;</code></pre>\n<p><strong>Good</strong></p>\n<pre><code class="language-html">&lt;div class=&quot;warning-subtext&quot;&gt;\n  {{firstLetterUpperCase(participant.fullName)}} \n  will not be able to see your message until his/her employer \n  turns Coach Chat on.\n&lt;/div&gt;</code></pre>\n<p><strong>Bad</strong></p>\n<pre><code class="language-html">&lt;div class=&quot;survey-popup-card-footer&quot;&gt;\n  &lt;b-button class=&quot;btn-heartbeat small white&quot; variant=&quot;secondary&quot; @click=&quot;handleHidePopup&quot;&gt;BACK TO SURVEY&lt;/b-button&gt;\n  &lt;b-button class=&quot;btn-heartbeat small blue&quot; variant=&quot;primary&quot; @click=&quot;handleCancelSurveyToDeleteQuestions&quot;&gt;CANCEL&lt;/b-button&gt;\n&lt;/div&gt;</code></pre>\n<p><strong>Good</strong></p>\n<pre><code class="language-html">&lt;div class=&quot;survey-popup-card-footer&quot;&gt;\n\n  &lt;b-button\n    class=&quot;btn-heartbeat small white&quot;\n    variant=&quot;secondary&quot;\n    @click=&quot;handleHidePopup&quot;\n  &gt;BACK TO SURVEY&lt;/b-button&gt;\n\n  &lt;b-button\n    class=&quot;btn-heartbeat small blue&quot;\n    variant=&quot;primary&quot;\n    @click=&quot;handleCancelSurveyToDeleteQuestions&quot;\n  &gt;CANCEL&lt;/b-button&gt;\n\n&lt;/div&gt;</code></pre>\n<p><strong>Bad</strong></p>\n<pre><code class="language-javascript">import { FETCH_EMBER_PATHS, FETCH_EMBER_REVIVE_PATHS, FETCH_EMBER_FILTERED_PRACTICES, FETCH_EMBER_PRACTICES_BY_ID, FETCH_EMBER_PRACTICES_BY_PATHS, FETCH_EMBER_PATH_ELIGIBILITY } from &#39;../../store/modules/embers/constants&#39;;</code></pre>\n<p><strong>Good</strong></p>\n<pre><code class="language-javascript">import { \n  FETCH_EMBER_PATHS,\n  FETCH_EMBER_REVIVE_PATHS,\n  FETCH_EMBER_FILTERED_PRACTICES,\n  FETCH_EMBER_PRACTICES_BY_ID,\n  FETCH_EMBER_PRACTICES_BY_PATHS,\n  FETCH_EMBER_PATH_ELIGIBILITY \n} from &#39;../../store/modules/embers/constants&#39;;</code></pre>\n<p>Line wrapping is an easy thing to do, it means we can have two or three files open in our editors at a time, it means we can read PR’s without side scrolling, which means reading them faster, it makes code easier to read, and if code is eaiser to read it&#39;s easier to debug. If code is well line wrapped, it’s also less likely to contain bugs, because you are not hiding things off screen.</p>\n<p>This doesn&#39;t need to be done manually, the VSCode prettier extension has really good Vue support and does an excellent job at automating formmating.</p>\n<h3 id="not-using-the-same-nodej-version-between-code-bases">Not using the same NodeJ version between code bases</h3>\n<p>Swicthing between projects should be easy - pull repo, checkout branch, npm install, run dev - write code - should be quick, quick enough that you don&#39;t feel like you have to go and make a coffee after you run dev. You should be able to say to any other FE dev, “Run my branch and see what I mean” and they should be able to do this very quickly, having the same Node version is a big part of this. </p>\n<p>Generally this problem arises when SCSS/SASS is in use, if you are not using pre-processors, then you can probably ignore this. </p>\n<p>Node 12.x is an even version number, which means it&#39;s an LTS version, Long Term Stable release. This means bugs in Node get fixed but the Node maintainers. It also means that when we upgrade our build systems, there is one less thing to do.</p>\n<p>I suggest using the <code>nvm</code> package, Node Version Manager. Instal it then say <code>nvm current</code> and see the output, if you are interesting in correctness you should see <code>12.xx.xx</code> or <code>14.xx.xx</code>. The most importnat thing here is seeing the same across team members.</p>\n<p>TL;DR - install <code>nvm</code> then say:</p>\n<p><code>nvm install 12.16.1 &amp;&amp; nvm alias default 12.16.1</code></p>\n<h3 id="not-providing-a-key-when-using-v-for">Not providing a :key when using v-for</h3>\n<p><a href="https://stackoverflow.com/questions/47978853/whats-a-unique-key-in-vue-js-used-for">For reference</a> and <a href="https://vuejs.org/v2/api/#key">the docs</a></p>\n<p>Basically, if you write a v-for you need to provide a key</p>\n<pre><code class="language-html">    &lt;my-awesome-component\n        class=&quot;intelligent-reusable-class-name&quot;\n        v-for=&quot;(value, index) in listOfThings&quot;\n        :key=&quot;index&quot;\n    &gt;&lt;/my-awesome-component&gt;</code></pre>\n<p>If you read the docs carefully, you will that there are some higher end performance use cases where you would \nnot use a <code>:key</code>. If you think you have found one of those use cases, contact Hamish to discuss, otherwise, use a <code>:key</code>.</p>\n<p>For our purposes, we use the <code>:key</code> every time we use <code>v-for</code>.</p>\n<h3 id="not-writing-reusable-units-of-code-or-new-components">Not writing reusable unit&#39;s of code or new components</h3>\n<p>This item is a preview of another post that I am currently writing. Even if you&#39;re using a framework like vuetify or \nvue-bootstrap (which I don&#39;t encourage or agree with, but regardless), that shouldn&#39;t mean that you never write new \ncustom components. Common cases - when using a framework- would be things like wrapper components for commonly used \ngroups of framework components, if you are often using a set of two or three buttons, write a wrapper component \ncalled HorizontalButtonWrapper, or writing v-if / v-else blocks in a top level router component, use a component to \nwrap the logic and reduce the number of lines in the template block.</p>\n<p>Anytime you find you self using CTRL+C CTRL+V - write a new component, and reuse code rather than using the same \ncode twice! One of the main advantages of using an SPA framework like Vue is code reusage. Components are how \nthat advantage is manifested. It also provides developers the ability to really reduce bundle sizes if used \ncorrectly.</p>\n<p>There is a limit to how far you should go, having thousands of files in your repository that are very rarely \nused is just another symptom of inexperience or disorganised thinking. But what I have seen much more of is \nhuge Vue files, with a ton of spagetti code making debugging or refactoring much much slower, and as above, \nfully ignoring one of the main benefit&#39;s of using Vue in the first place.</p>\n<p>The more code you resuse, the less bugs you will create.</p>\n<p>The more code you resuse, the less unit tests you will have to write.</p>\n<p>The smaller your unit&#39;s of code, the eaiser they will be to test.</p>\n<p>Anytime you find you self using CTRL+C CTRL+V - write a new function, and reuse code rather than using the same code twice!</p>\n<h5 id="some-examples">Some examples</h5>\n<p><strong>Bad</strong></p>\n<pre><code class="language-html">&lt;template&gt;\n  &lt;div class=&quot;row-container&quot;&gt;\n    &lt;div class=&quot;row-item-container one&quot;&gt;\n      &lt;div class=&quot;row-item-actual&quot;&gt;{{ someData }}&lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n    &lt;div class=&quot;row-container&quot;&gt;\n    &lt;div class=&quot;row-item-container two&quot;&gt;\n      &lt;div class=&quot;row-item-actual&quot;&gt;{{ someOtherData }}&lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n    &lt;div class=&quot;row-container&quot;&gt;\n    &lt;div class=&quot;row-item-container three&quot;&gt;\n      &lt;div class=&quot;row-item-actual&quot;&gt;{{ someMoreData }}&lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n&lt;/template&gt;</code></pre>\n<p><strong>Good</strong></p>\n<pre><code class="language-html">&lt;template&gt;\n  &lt;div\n    class=&quot;row-container&quot;\n    :class=&quot;value.className&quot;\n    v-for=&quot;(value, index) in computedProperty&quot;\n    :key=&quot;index&quot;\n  &gt;\n    &lt;div class=&quot;row-item-container&gt;\n      &lt;div class=&quot;row-item-actual&quot;&gt;{{ value.data }}&lt;/div&gt;\n    &lt;/div&gt;\n  &lt;/div&gt;\n&lt;/template&gt;</code></pre>\n<pre><code class="language-javascript">default {\n  computed: {\n    computedProperty() {\n      return [\n        { value: this.someData, className: &#39;one&#39; },\n        { value: this.someOtherData, className: &#39;two&#39; },\n        { value: this.someMore∂Data, className: &#39;three&#39; }\n      ]\n    }\n  }\n}</code></pre>\n<p><strong>Even Better</strong></p>\n<pre><code class="language-html">&lt;template&gt;\n  &lt;row-container\n    class=&quot;row-container&quot;\n    :class=&quot;value.className&quot;\n    v-for=&quot;(value, index) in computedProperty&quot;\n    :key=&quot;index&quot;\n    :dataAsProp=&quot;value.data&quot;\n  &gt;&lt;/row-container&gt;\n&lt;/template&gt;</code></pre>\n<pre><code class="language-javascript">default {\n  computed: {\n    computedProperty() {\n      return [\n        { value: this.someData, className: &#39;one&#39; },\n        { value: this.someOtherData, className: &#39;two&#39; },\n        { value: this.someMore∂Data, className: &#39;three&#39; }\n      ]\n    }\n  }\n}</code></pre>\n<p>Anytime you can reduce code reusage, you are actually <em>saving time</em>. Less bugs, less maintenace, making things easier to read and understand for the next guy.</p>\n<p>You may think “But it’s faster this way!”</p>\n<p><em>It&#39;s not.</em></p>\n<p>It’s faster today, but it means that once you are feature complete, you spend three sprints fixing bugs, instead of a couple of hours. You also learn nothing, which means that next time you have to do the same task, you do the same thing. If you wrote it well the first time, and wrote it in a way that you and everybody else could reuse it - you would be at lunch or at home with your family by now - but instead you’re furiously copy pasting code from somewhere, trying to meet a dead line.</p>\n<p>This is real - if you want to move faster - go slower.</p>\n<p>Anytime you find you self using CTRL+C CTRL+V - write a new function or a new component, and reuse code rather than using the same code twice!</p>\n<p>Another doc about this topic is in the works currently, because this is one of the biggest issues we have in our code bases.</p>\n<h3 id="ignoring-warnings-from-build-system-eslint-or-vscode">Ignoring warnings from build system, eslint, or VSCode</h3>\n<p>Believe it or not - warnings exist for a reason!</p>\n<p>They exist because, smarter people than us have determined that if we deal with the warning, it will reduce bugs, and if we ignore it….</p>\n<p>We will have to spend time fixing bugs.</p>\n<p>Warnings are your friends. If you see one, google it. Then fix it. Then commit it and push it. If you can’t fix it get in touch with one of the senior guys to get some help.</p>\n<p>The problem that exists currently is that we have so many warnings, they just dont mean anything anymore. Let’s fix that! </p>\n<p>Dealing with warnings, from the Developer Console, from Webpack, from NPM and from VSCode extentions really can reduce the amount of time we spend fixing bugs… by a lot.</p>\n<p>Try to fix one warning per day. It will make you a happier developer.</p>\n<h3 id="using-eslint-disable">Using eslint-disable</h3>\n<p><strong>Very Bad</strong></p>\n<pre><code class="language-javascript">// es-lint disable\nconst someDodgyCode = expressionThatTriggeredAnEslintWarning()</code></pre>\n<p><strong>Ok (but very very rare)</strong></p>\n<pre><code class="language-javascript">return () =&gt; {\n\n    // Explain: &#39;arguments&#39; is a javascript keyword, eslint is wrong\n    // Blame: Hamish\n    // eslint-disable-next-line no-undef\n    const context = this, args = arguments\n\n    const later = () =&gt; {</code></pre>\n<p>Eslint warnings are like the warnings mentioned above, they are there for a reason. They were written by people who are top level experts in this field, they are there to help you be a better dev, and there to stop you writing buggy code.</p>\n<p>If you use es-lint disable, you must provide:</p>\n<pre><code class="language-javascript">    // Explain: reason for using, why you think eslint is wrong\n    // Blame: Your Name Here</code></pre>\n<p>I’ve only ever found two or three places where eslint disable was the right thing to do. It&#39;s rare.</p>\n<p>Instead of using disable - google the problem, then fix your code. If you can’t fix it so the warning goes away, contact one of the more senior guys, then work it out together.</p>\n<p>If you think the eslint configuartion is wrong, talk to your team lead and change the configuration to reflect your reasoning.</p>\n<h3 id="use-forceupdate">Use $forceUpdate</h3>\n<p>99% of the time <code>$forceUpdate()</code> is not the correct solution, you can achieve the same results using <code>:key</code> and <code>$set()</code>, and sometimes <code>$nextTick()</code>.</p>\n<p>There is almost never a reason to reload an entire component tree.</p>\n<p>If you find your self in a position in which you realy want to use it, contact me or one of the senior guys to work out a way to get around the problem. <code>$forceUpdate()</code> can easily trigger a full page reload, which is super bad for user experience, and makes a Single Page Application behave the same way a standard HTML SSR app would behave. Not good - and can always be fixed using other Vue API methods.</p>\n<h3 id="include-magic-numbers-and-string-literals">Include Magic Numbers and String Literals</h3>\n<p><strong>Bad</strong></p>\n<pre><code class="language-javascript">const foo = 300000\nthis.bar = &#39;some awesome string&#39;</code></pre>\n<p><strong>Good</strong></p>\n<pre><code class="language-javascript">import { AWESOME_CONST } from &#39;../constants/time.js&#39;\n\nconst FIVE_MINUTES = 1 * 1000 * 60 * 60 // Five minutes in miliseconds\nthis.bar = AWESOME_CONST</code></pre>\n<p>Pretty simple: There shouldn’t be any numbers floating around the code base, declare a variable with a descriptive name and explanatory comment, same for strings, literals can’t be internationalised at a later date and magic numbers are hard to understand if you did not write them.</p>\n<h3 id="using-unnecessary-template-blocks">Using unnecessary <code>&lt;template&gt;</code> blocks</h3>\n<p><strong>Bad</strong></p>\n<pre><code class="language-html">&lt;template v-if=&quot;someThing&quot;&gt;\n  &lt;template v-if=&quot;someOtherThing &amp;&amp; anotherThing || somethingElse&quot;&gt;\n    &lt;div&gt;\n      // some content here\n    &lt;/div&gt;\n  &lt;/template&gt;\n&lt;template&gt;</code></pre>\n<p>Templates are invisible elements provided by VueJs to allow for grouping elements together. You dont need a template to use v-if or v-show. You can use v-if and v-show on any element!  </p>\n<p><strong>Also Bad</strong></p>\n<pre><code class="language-html">&lt;template v-if=&quot;something&quot;&gt;\n  &lt;cool-component\n    v-for=&quot;(datas, index) in arrayOfData&quot;\n    :key=&quot;index&quot;\n  &gt;&lt;/cool-component&gt;\n&lt;/template&gt;</code></pre>\n<p>Using a template because you can’t use v-if and v-for on the same element. Much easier to use a computed property and Array.filter() or Object.keys()</p>\n<pre><code class="language-html">&lt;cool-component\n  v-for=&quot;(datas, index) in filteredArrayOfData&quot;\n  :key=&quot;index&quot;\n&gt;&lt;/cool-component&gt;</code></pre>\n<pre><code class="language-javascript">computed: {\n  filteredArrayOfData() {\n    return arrayOfData.filter(value =&gt; {\n      return value !== something\n    })\n  }\n}</code></pre>\n<p>It will perform faster, it&#39;s easier to read and you are using the Vue API correctly.</p>\n<p>There is really only one place where you should be using a <code>&lt;template&gt;</code> when you want to group a number of elements together for conditional visibility.</p>\n<pre><code class="language-html">&lt;template v-if=&quot;something&quot;&gt;\n  &lt;div&gt;{{ someOtherData }}&lt;/div&gt;\n  &lt;cooler-component&gt;&lt;/cooler-component&gt;\n  &lt;span&gt;{{ fooBar }}&lt;/span&gt;\n&lt;/template&gt;</code></pre>\n<h4 id="use-important-when-we-dont-need-to">Use <code>!important</code> when we don’t need to</h4>\n<p>Anytime you find you self using <code>!important</code> you are probably in the wrong. When you find your self in a position in which you feel like you have to use the <code>!important</code> rule, it is generally because the structure of the CSS/SCSS files in your code base is incorrect. The biggest thing to remember is that CSS built as a hieracy, the reason you have to use <code>!important</code> is either because someone else used it before you (which leads to a never ending battle in CSS of over ridding rules using <code>!important</code>) or, because third party vendor CSS files have been included too far down in the CSS hieracy.</p>\n<p>I admit that some times you will have to use <code>!important</code> - but - before you use it, take a moment and ask your self why you are having to use it.</p>\n<p>It&#39;s much better to fix the problem than avoid it. If you look at the CSS rules in the browser developer console, can you see if you’re over ridding a rule from a Vendor css file, or a rule that we wrote. If it’s a Vendor rule, then look at where it&#39;s being imported, is it in main.js? If it is, is it imported before, or after the file you are currently working on? </p>\n<p>If you can’t work out why your having to use <code>!important</code> get in touch with Hamish and get some help, it&#39;s usually pretty easy to fix.</p>\n<h3 id="using-a-library-when-you-could-just-write-the-code-yourself">Using a library when you could just write the code yourself</h3>\n<p>Currently, one of our biggest problems I see is bundle size. I&#39;ve seen codebases downloading 10 MB of assets on load, which is slow to begin with, but those assets still need to be parsed and read into memory by the browser. This makes apps feel slow and that means users are less likely to use your product.</p>\n<p>The main cause of our bundle size problems is too many libraries. This is very important, we need to stop using additional libraries to solve problems we could easily solve by writing code. After all, we are developers to right?</p>\n<p>In some cases, a library is the right option, but in a lot of cases it isn’t. I&#39;ve seen some hilarious examples of this, and have started to write a post on this specifically, enough said for now.</p>\n<h3 id="using-eval">Using <code>eval()</code></h3>\n<p>Read the MDN docs, they have a good entry on this. Basically, it&#39;s a well known security risk, and should never really need to be used. You can just about always replace <code>eval()</code> with <code>window.Function()</code>.</p>\n<h3 id="forgetting-to-commit-the-package-lockjson">Forgetting to commit the package-lock.json</h3>\n<p>Always commit the package-lock.json. It&#39;s how we ensure that everyone on the team is running the same versions of packages in their node_modules folder. Basically, the package-lock.json builds a list of the dependencies of the packages in your package.json, in our code bases it can be thousands of packages. If one team member is running v0.12 and another team member is running v1.01 it can lead to some one saying…</p>\n<p>How come your local works and mine doesn’t?</p>\n<p>These problems can be really hard to debug, and it&#39;s easy to prevent!</p>\n'}}]);
//# sourceMappingURL=chunk-2d0abad7.f2f25e45.js.map