(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f0f41"],{"9f20":function(e,t){e.exports='<h1 id="what-are-the-react-team-principles">What Are the React Team Principles?</h1>\n<h2 id="ui-before-api">UI Before API.</h2>\n<blockquote>\n<p>During my time on the React team, I’ve been lucky to see how <a href="https://twitter.com/jordwalke">Jordan</a>, <a href="https://twitter.com/sebmarkbage">Sebastian</a>, <a href="https://twitter.com/sophiebits">Sophie</a> and other tenured team members approach problems. In this post, I&#39;m distilling what I learned from them into a few high-level technical principles. These principles aren’t meant to be exhaustive. This is my personal attempt to formalize observations about how the React team operates — other team members may have different perspectives.</p>\n</blockquote>\n<h3 id="ui-before-api-1">UI Before API</h3>\n<p>Every abstraction has its own quirks when deployed at scale. How do those quirks manifest themselves in the user interfaces? Can you tell when an app is built with a certain abstraction?</p>\n<p>Abstractions have a direct effect on the user experiences — enabling, perpetuating, or even making some of them impossible. This is why when designing APIs, we don’t start with the abstraction itself. Instead, we start with the desired user experience, and work backwards to the abstraction.</p>\n<p>Sometimes as we work backwards, we realize we need to change the whole approach to enable the right user experience. We can’t see that if we start with the API. So we put UI before API.</p>\n<h3 id="absorb-the-complexity">Absorb the Complexity</h3>\n<p>Making React internals simple is not a goal. We are willing to make React internals complex if that complexity lets product developers keep their code easier to understand and modify.</p>\n<p>We want to allow the product development be decentralized and collaborative. Often, that means that we bear the brunt of centralization. React can’t be split into small simple loosely coupled modules because in order to do its job, something has to act as the coordinator. That’s what React is.</p>\n<p>By raising the abstraction level, we make product developers more powerful. They benefit from the system as a whole having certain predictable properties. But this means that every new N+1st feature we introduce has to work well with all of the N existing features. This is why contributing new features to React is so difficult both at the design and the implementation side. This is why we don’t get many “core” open source contributions.</p>\n<p>We absorb the complexity to stop its bleeding into the product code.</p>\n<h3 id="hacks-then-idioms">Hacks, Then Idioms</h3>\n<p>Every API creates new restrictions. Sometimes these restrictions prevent people from shipping delightful user experiences. We provide escape hatches so people can work around us where necessary.</p>\n<p>Hacks can’t survive for long because they are fragile. Product developers then have to choose whether they prefer to take a maintenance hit by supporting the hack, or to degrade the user experience but remove the hack. Often, the user experience loses — or the hack prevents further improvements to it.</p>\n<p>We need to allow hacks using escape hatches, and observe which hacks people put in practice. Our job is to eventually provide an idiomatic solution for hacks that exist in the name of better user experience. Sometimes, a solution might take years. We prefer a flexible hack to entrenching a poor idiom.</p>\n<h3 id="enable-local-reasoning">Enable Local Reasoning</h3>\n<p>There aren’t many things you can do in a code editor. You can add some lines or remove them. Or copy and paste something. And yet many abstractions make these basic operations difficult.</p>\n<p>For example, MVC frameworks tend to make it unsafe to delete some part of the rendering output. This is because parents imperatively call methods on their children (which aren’t there after you removed them). By contrast, in React it’s usually safe to just delete lines of code in your render tree. This is a win.</p>\n<p>When designing APIs, we assume the person only has local knowledge about the piece of code they’re working on. When the intended effect is local, we want to prevent surprising outcomes. For example, we usually expect adding code to be safe. We expect removing and changing code to clearly point to the whole trail of code that needs to be considered as part of this change. We can’t assume the knowledge of the whole codebase when changing a single file.</p>\n<p>When something isn’t safe to do, we want the developer to discover the full effects of their change as early as possible. Warnings, type checks, and developer tooling can help, but they are limited by the API design. If the API is not restrictive enough, local reasoning is impossible. For example, this is why <code>findDOMNode()</code> is bad. It requires global knowledge.</p>\n<h3 id="progressive-complexity">Progressive Complexity</h3>\n<p>Some frameworks choose to have a fork in the road. They provide two ways to do something: an easy way, and a powerful way. The easy way is nice to learn, but at some point you hit a wall. When that happens, you have to undo your past work, and reimplement it differently.</p>\n<p>We prefer that implementing a complex thing isn’t too much different in structure from implementing a simple thing. For example, we don’t offer a separate template DSL “for the simple cases” because it creates a fork in the road. We’re willing to compromise on the barrier to entry if we think you’re going to want the fully featured mechanism soon anyway.</p>\n<p>Sometimes, the “easy way” and the “powerful way” are two different frameworks. Then you also have to rewrite. It’s nice when we can avoid that, too. For example, adding server rendering is an optimization that requires some extra effort in React but not a full-on rewrite.</p>\n<h3 id="contain-the-damage">Contain the Damage</h3>\n<p>Top-down tools like code budgets are important. However, over the long term, our standards will slip, features will ship under deadlines, and products will be unmaintained. When we can’t rely on everyone playing along, our role as a coordinator is to contain the damage.</p>\n<p>If some UI code is slow or over budget, we need to do what we can to reduce its negative effects on loading time and interactions with other parts of the UI. Ideally, the developer should only “pay” for the features they use, and the user should only “pay” for the UI they interact with. Concurrent Mode features including Time Slicing and Selective Hydration are different levers to address that.</p>\n<p>Because the library code overhead is relatively stable but the application code is unbounded, we tend to focus on containing the damage in the application code instead of the fixed cost of library code.</p>\n<h3 id="trust-the-theory">Trust the Theory</h3>\n<p>Sometimes, we know an approach is a dead end. Maybe it works today, but we are already aware of its limitations, and they fundamentally prevent us from achieving the desirable user experience. We pivot away from investing into such approach as soon as it’s viable to do so.</p>\n<p>We want to avoid getting stuck in a local maxima. If another approach makes a lot more sense in theory, we’re willing to invest the effort to get there, even if it takes many years. There will be many obstacles and pragmatic compromises we might have to make to get there. But we trust that if we keep chipping away at them, eventually the theory wins.</p>\n<h3 id="what-are-your-teams-principles">What Are Your Team’s Principles?</h3>\n<p>These are a few fundamental principles I&#39;ve observed in how we work, but I&#39;ve probably missed a bunch of them. I also haven&#39;t touched on the less technical principles around how we roll out APIs, communicate changes, and so on. That could be a topic for another day.</p>\n<p>Does your team have a set of principles? I’d love to hear about them.</p>\n<p><em>This article was originally posted <a href="https://react.christmas/2019/24">here</a>.</em></p>\n'}}]);
//# sourceMappingURL=chunk-2d0f0f41.c93384f4.js.map