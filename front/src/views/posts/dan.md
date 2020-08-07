# What Are the React Team Principles?
## UI Before API.

>During my time on the React team, I’ve been lucky to see how [Jordan](https://twitter.com/jordwalke), [Sebastian](https://twitter.com/sebmarkbage), [Sophie](https://twitter.com/sophiebits) and other tenured team members approach problems. In this post, I'm distilling what I learned from them into a few high-level technical principles. These principles aren’t meant to be exhaustive. This is my personal attempt to formalize observations about how the React team operates — other team members may have different perspectives.

### UI Before API

Every abstraction has its own quirks when deployed at scale. How do those quirks manifest themselves in the user interfaces? Can you tell when an app is built with a certain abstraction?

Abstractions have a direct effect on the user experiences — enabling, perpetuating, or even making some of them impossible. This is why when designing APIs, we don’t start with the abstraction itself. Instead, we start with the desired user experience, and work backwards to the abstraction.

Sometimes as we work backwards, we realize we need to change the whole approach to enable the right user experience. We can’t see that if we start with the API. So we put UI before API.

### Absorb the Complexity

Making React internals simple is not a goal. We are willing to make React internals complex if that complexity lets product developers keep their code easier to understand and modify.

We want to allow the product development be decentralized and collaborative. Often, that means that we bear the brunt of centralization. React can’t be split into small simple loosely coupled modules because in order to do its job, something has to act as the coordinator. That’s what React is.

By raising the abstraction level, we make product developers more powerful. They benefit from the system as a whole having certain predictable properties. But this means that every new N+1st feature we introduce has to work well with all of the N existing features. This is why contributing new features to React is so difficult both at the design and the implementation side. This is why we don’t get many “core” open source contributions.

We absorb the complexity to stop its bleeding into the product code.

### Hacks, Then Idioms

Every API creates new restrictions. Sometimes these restrictions prevent people from shipping delightful user experiences. We provide escape hatches so people can work around us where necessary.

Hacks can’t survive for long because they are fragile. Product developers then have to choose whether they prefer to take a maintenance hit by supporting the hack, or to degrade the user experience but remove the hack. Often, the user experience loses — or the hack prevents further improvements to it.

We need to allow hacks using escape hatches, and observe which hacks people put in practice. Our job is to eventually provide an idiomatic solution for hacks that exist in the name of better user experience. Sometimes, a solution might take years. We prefer a flexible hack to entrenching a poor idiom.

```
<template>
    <div class="cv-con" id="print-vis-on">
        <h1 class="main">Hamish Clulee</h1>
        <h2>BSc, Software Engineering, University of Otago</h2>
        <h3>References upon request</h3>
        <h5>hamish.clulee@gmail.com</h5>
        <h6>Digital Nomad, primarily located in Asia.</h6>
        <h6>New Zealand Citizen.</h6>
        <mark class="divider">~</mark>
        <div class="key-con">
            <h6 class="exp-head">Commercial Environments &amp; Production Web Applications</h6>
            <p><em>VueJs</em> - 3+ years</p>
            <p>Javascript - 4+ years</p>
            <p>Java - 4+ years</p>
            <p>SASS/SCSS/CSS 4+ years</p>
            <p>NodeJs - 2+ years</p>
            <p>Linux - 4+ years</p>
            <h6 class="exp-head">Other relevant skills</h6>
            <p>Working Remote - 3+ years</p>
            <p>Web Development - 5+ years</p>
            <p>Gimp/Inkscape (linux graphics and images editors) - 5+ years</p>
        </div>
        <mark class="divider">~</mark>
        <div class="job-con" v-for="(v, i) in jobs" :key="i">
            <h2>{{ v.employer }}</h2>
            <h3>{{ v.title }}</h3>
            <h5>{{ v.dates }}</h5>
            <h6 class="refs" v-if="v.references">References available</h6>
            <p v-for="(p, x) in v.description" :key="x" v-html="p" class="des-para" :class="x === 0 ? 'first-des-para' : ''"></p>
            <mark class="divider">~</mark>
        </div>
    </div>
</template>
```

### Enable Local Reasoning

There aren’t many things you can do in a code editor. You can add some lines or remove them. Or copy and paste something. And yet many abstractions make these basic operations difficult.

For example, MVC frameworks tend to make it unsafe to delete some part of the rendering output. This is because parents imperatively call methods on their children (which aren’t there after you removed them). By contrast, in React it’s usually safe to just delete lines of code in your render tree. This is a win.

When designing APIs, we assume the person only has local knowledge about the piece of code they’re working on. When the intended effect is local, we want to prevent surprising outcomes. For example, we usually expect adding code to be safe. We expect removing and changing code to clearly point to the whole trail of code that needs to be considered as part of this change. We can’t assume the knowledge of the whole codebase when changing a single file.

When something isn’t safe to do, we want the developer to discover the full effects of their change as early as possible. Warnings, type checks, and developer tooling can help, but they are limited by the API design. If the API is not restrictive enough, local reasoning is impossible. For example, this is why `findDOMNode()` is bad. It requires global knowledge.

### Progressive Complexity

Some frameworks choose to have a fork in the road. They provide two ways to do something: an easy way, and a powerful way. The easy way is nice to learn, but at some point you hit a wall. When that happens, you have to undo your past work, and reimplement it differently.

We prefer that implementing a complex thing isn’t too much different in structure from implementing a simple thing. For example, we don’t offer a separate template DSL “for the simple cases” because it creates a fork in the road. We’re willing to compromise on the barrier to entry if we think you’re going to want the fully featured mechanism soon anyway.

Sometimes, the “easy way” and the “powerful way” are two different frameworks. Then you also have to rewrite. It’s nice when we can avoid that, too. For example, adding server rendering is an optimization that requires some extra effort in React but not a full-on rewrite.

### Contain the Damage

Top-down tools like code budgets are important. However, over the long term, our standards will slip, features will ship under deadlines, and products will be unmaintained. When we can’t rely on everyone playing along, our role as a coordinator is to contain the damage.

If some UI code is slow or over budget, we need to do what we can to reduce its negative effects on loading time and interactions with other parts of the UI. Ideally, the developer should only “pay” for the features they use, and the user should only “pay” for the UI they interact with. Concurrent Mode features including Time Slicing and Selective Hydration are different levers to address that.

Because the library code overhead is relatively stable but the application code is unbounded, we tend to focus on containing the damage in the application code instead of the fixed cost of library code.

### Trust the Theory

Sometimes, we know an approach is a dead end. Maybe it works today, but we are already aware of its limitations, and they fundamentally prevent us from achieving the desirable user experience. We pivot away from investing into such approach as soon as it’s viable to do so.

We want to avoid getting stuck in a local maxima. If another approach makes a lot more sense in theory, we’re willing to invest the effort to get there, even if it takes many years. There will be many obstacles and pragmatic compromises we might have to make to get there. But we trust that if we keep chipping away at them, eventually the theory wins.

### What Are Your Team’s Principles?

These are a few fundamental principles I've observed in how we work, but I've probably missed a bunch of them. I also haven't touched on the less technical principles around how we roll out APIs, communicate changes, and so on. That could be a topic for another day.

Does your team have a set of principles? I’d love to hear about them.

```
<template>
    <div class="cv-con" id="print-vis-on">
        <h1 class="main">Hamish Clulee</h1>
        <h2>BSc, Software Engineering, University of Otago</h2>
        <h3>References upon request</h3>
        <h5>hamish.clulee@gmail.com</h5>
        <h6>Digital Nomad, primarily located in Asia.</h6>
        <h6>New Zealand Citizen.</h6>
        <mark class="divider">~</mark>
        <div class="key-con">
            <h6 class="exp-head">Commercial Environments &amp; Production Web Applications</h6>
            <p><em>VueJs</em> - 3+ years</p>
            <p>Javascript - 4+ years</p>
            <p>Java - 4+ years</p>
            <p>SASS/SCSS/CSS 4+ years</p>
            <p>NodeJs - 2+ years</p>
            <p>Linux - 4+ years</p>
            <h6 class="exp-head">Other relevant skills</h6>
            <p>Working Remote - 3+ years</p>
            <p>Web Development - 5+ years</p>
            <p>Gimp/Inkscape (linux graphics and images editors) - 5+ years</p>
        </div>
        <mark class="divider">~</mark>
        <div class="job-con" v-for="(v, i) in jobs" :key="i">
            <h2>{{ v.employer }}</h2>
            <h3>{{ v.title }}</h3>
            <h5>{{ v.dates }}</h5>
            <h6 class="refs" v-if="v.references">References available</h6>
            <p v-for="(p, x) in v.description" :key="x" v-html="p" class="des-para" :class="x === 0 ? 'first-des-para' : ''"></p>
            <mark class="divider">~</mark>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'cv',
        data () {
            return {
                jobs: [
                    {
                        title: 'Frontend Tech Lead',
                        employer: 'AduroLabs Vietnam',
                        dates: 'December 2019 - Present',
                        description: [
                            `AduroLabs is a Health and Wellness service provider.`,
                            `I'm primarily 
                            tasked with leadership and mentoring for the front end teams. 
                            Daily responsibilities include code reviews, coaching, writing 
                            technical documemtation, making architecture decisions and managing 
                            sprints and tickets.`,
                            `Higher level responsibilities include interviewing 
                            potential hires, technical product management, building better agile 
                            processes and interfacing with other teams and departments within the 
                            company.`,
                        ],
                        references: true,
                    },
                    {
                        title: 'Lead Frontend Developer',
                        employer: 'Netograph',
                        dates: 'August 2018 - August 2019 (1 year 1 month)',
                        description: [
                            `Netograph provides a web app and API. Their frontend is written in <em>VueJs</em> 
                                and Typescript, backed by a custom webpack configuration. Visualisations are written in 
                                d3.js. I was responsible for the vast majority of the frontend code currently hosted at 
                                <a href="https://netograph.io" target="_blank">https://netograph.io</a>.`,
                            `Netograph's product is data. That data is gathered by a web crawler. Beginning by crawling 
                                open social media platforms like Twitter and 4chan, each crawler thread searches for URLs, runs them in a 
                                headless browser and
                                records information like IP addresses, subdomains, SSL certificates, satellites, roots, aliases and more.
                                Netograph's servers then cross index for connections with existing data. 
                                At the time I left there were over 2000 threads, which performed a capture in 
                                around 2 minutes and were constantly running. Netograph has a staggering amount of data, 
                                19 billion (and counting) http request pairs captured, with major domains like google and 
                                facebook having millions of data points associated with them.`,
                            `The primary frontend challenges revolved around presenting that data and its inherent level of complexity, and 
                                scale, in a user friendly manner.`,
                            `Note worthy achievements include, the 
                                <a href="https://netograph.io/datasets/social/" target="_blank">infinite scroll library</a>,
                                which had to act in place of pagination due to how lists are displayed and indexed.  
                                A system of custom <a href="https://netograph.io/datasets/social/domain/facebook.com" target="_blank">masonary cards</a>, 
                                designed to show the user a sample of the data associated with the first class object (IPs, domains, superdomains) viewing, remembering that each list could 
                                contain over a million items, and each first class object could contain 
                                up to 10 lists. A <a href="https://netograph.io/datasets/social" target="_blank">search component</a>, 
                                letting users find needles in a gigantic haystack, in a manner that was quick and easy.`,
                                `Finally, Netograph captures privacy and cookie policy pages. 
                                The text and layout data is captured prior 
                                to the painting and rendering stage in the browser lifecycle. 
                                Each capture displayed in the app shows the captured text, overlaying its captured position  
                                on a full page screenshot of URL in question, text is then searchable and sortable.
                                You can check it
                                out <a href="https://netograph.io/datasets/social/recentpolicies" target="_blank">here</a>.`,
                            `Overall, this was an awesome developement experience, and a unforgettable opportunity.`,
                            `<span class="remote">This was a 100% remote position</span>`,
                        ],
                        references: true,
                    },
                    {
                        title: 'Contract Frontend Developer',
                        employer: 'Allow Design',
                        dates: 'Intermittent between January 2017 - February 2019 (Contracts totalling 12 months)',
                        description: [
                            `Allow Design was a studio based in Dunedin, New Zealand. They had one primary client, 
                                a US healthcare giant. They would create functioning mini applications as development 
                                templates for devs that worked directly for healthcare firm.`, 
                                `I was employed on and off for a number of these prototypes, creating small, standalone 
                                web apps from a series of 
                                Photoshop files provided by an Allow designer.`,
                                `I was also responsible for overhauling 
                                the frontend tooling and build system to help make other contract developers more productive. 
                                I created a <em>VueJs</em> and Webpack boilerplate to function as a base for new prototypes. 
                                It included a large number of UI components that conformed to the Allow Design styleguide. 
                                The boilerplate was successful in reducing the lag created between 
                                designers and developers which occured when prototypes didn't match the styleguide, and reduced lead time. 
                                It remained in usage until the company folded early this year.`,
                            `Some fun challenges, especially building a component library from scratch.`,
                            `<span class="remote">This was a 100% remote position</span>`,
                        ],
                        references: false,
                    },
                    {
                        title: 'Software Developer',
                        employer: 'Fusion Sport Inc.',
                        dates: 'October 2017 - April 2018 (7 months)',
                        description: [
                            `Fusion is a sports science company, based in Brisbane, Australia. They sell hardware products 
                                and provide a web app, all designed to 
                                provide athletes and sports teams with competitive advantages.`,
                            `Please note that Fusion Sport acquired Profiler Corp and all of its staff while I was working 
                                at Profiler. I've listed the two as seperate positions. Details of my work at Profiler can be found below.`,
                            `The Fusion Sport Client list is impressive, you can check it out 
                                <a href="https://www.fusionsport.com/clients/" target="_blank">here</a>, 
                                working directly for internationally recognisable sports teams was a real buzz.`,
                            `My main focus was Smartabase; Fusion's primary web product. Smartbase functions on a 
                                "data-in-insights-out" model. Most of my time at Fusion was spent on working with 
                                the frontend team, whose primary focus was building dashboards.`,
                            `Note worthy achievements: `,
                            `Rebuilding the tooling used by the frontend team, 
                                replacing Gulp and JQuery with 
                                a custom Webpack and <em>VueJs</em> boilerplate. The new boilerplate reduced lead time 
                                by a significant amount, and is still in usage today.`,
                            `Being granted leadership of the Dasboard Builder project. After 
                                identifying the most commonly requested items in 
                                customer dashboards with the team, I prototyped an application that enabled 
                                creation of dashboards without developer involvement.
                                It was approved for resourcing by management, and the Dashboard Builder was born. based on 
                                feedback from collegaues still working at Fusion it appears to remain a
                                customer favorite. More details are available on the <a href="/work">projects page</a>.`, 
                            `While most of my time at Fusion was spent with the frontend team, I 
                                was also responsible for providing all the API support for dashboards and the 
                                Dashboard Builder, and at times required to fill in for custom developement 
                                requests that required backend developement. 
                                This meant I did spend a non-trivial amount of time writing and debugging Java and 
                                interacting with the PSQL database.`,
                            `An awesome place to work, great team spirit, and a lot of engaging challenges.`,
                            `<span class="remote">This was a 100% remote position</span>`,
                        ],
                        references: true,
                    },
                    {
                        title: 'Web Application Developer',
                        employer: 'Profiler Corporation',
                        dates: 'August 2016 - October 2017 (1 year 3 months)',
                        description: [
                            `Profiler was sports science company based in Dunedin, New Zealand. They wrote 
                                and maintained a web application called Smartabase, built to assist 
                                with management of sports teams and athlete development. The app had two main 
                                areas of focus. 
                                First, data in, users were able to create very detailed custom forms. General usage was for data entry
                                after training sessions or games, recording athlete metric progresions, nutritional and wellness reports and medical 
                                data but there was a long tail of clients that used the platform for very specific use cases. 
                                Second, 
                                insights out, usually in the form of dashboards, but Smartabase was also used for calendar management 
                                and sheduling on a regular basis, and also some mapping and GIS/GPS applications.`,
                                `I was orginally assigned to the insights-out part of Smartabase, due to my ReactJs 
                                experience and passion for UI design and build. The first few months were spent 
                                prototyping, designing and building new UI features.
                                Pivots occured, and I shifted to being more backend focused, writing new features in Java, 
                                providing API endpoints, debugging and refactoring.`,
                            `Nearer the end of my time in this position my focus shifted back to the frontend, 
                                with a most of my time being spent writing <em>VueJS</em> and beginning to increase its
                                usage throughout the code base.`,
                            `Please note that Fusion Sport acquired Profiler Corp and all of its staff while I was working 
                                at Profiler. I've listed the two as seperate positions. Details of my work at Fusion Sport can be found above.`,
                            `Lots of autonomy and room to move in directions that complimented your skill sets and passions, 
                                and a great team, full of awesome talented people. This was a good job.`,
                            `<span class="remote">This was a 100% remote position</span>`,
                        ],
                        references: true,
                    },
                ]
            }
        }
    }
</script>

<style lang="sass" scoped>
$heading-vertical-margin: 8px
$heading-neg-align: -2px
.cv-con
    width: 80%
    margin-left: auto
    margin-right: auto
    margin-top: 90px
    margin-bottom: 150px
    @media (min-width: 520px) and (max-width: 1080px)
        width: 90%
    @media (min-width: 0px) and (max-width: 520px)
        width: 95%
    h1
        margin-bottom: 5px
        margin-left: $heading-neg-align
        font-size: 3.5em
        @media (min-width: 520px) and (max-width: 1080px)
            font-size: 2.8em
        @media (min-width: 0px) and (max-width: 520px)
            font-size: 2.2em
    h2
        margin-bottom: $heading-vertical-margin
        margin-top: $heading-vertical-margin
        margin-left: $heading-neg-align
        font-size: 2.8em
        color: lighten($font, 10)
        @media (min-width: 520px) and (max-width: 1080px)
            font-size: 2.4em
        @media (min-width: 0px) and (max-width: 520px)
            font-size: 1.8em
    h3
        margin-top: $heading-vertical-margin
        margin-bottom: $heading-vertical-margin
        margin-left: $heading-neg-align
        font-size: 2.5em
        color: $secondary
        @media (min-width: 520px) and (max-width: 1080px)
            font-size: 2.2em
        @media (min-width: 0px) and (max-width: 520px)
            font-size: 1.6em
    h5
        font-size: 1.7em
        margin-top: $heading-vertical-margin
        margin-bottom: $heading-vertical-margin
        margin-left: $heading-neg-align
        color: $font-light
        @media (min-width: 520px) and (max-width: 1080px)
            font-size: 1.5em
        @media (min-width: 0px) and (max-width: 520px)
            font-size: 1.4em
    h6
        margin-top: $heading-vertical-margin
        margin-bottom: $heading-vertical-margin
        margin-left: $heading-neg-align
    p
        font-size: 1.3em
        line-height: 1.4
        margin: 5px 0
        @media (min-width: 520px) and (max-width: 1080px)
            font-size: 1.2em
        @media (min-width: 0px) and (max-width: 520px)
            font-size: 1.1em
    .des-para
        margin-bottom: 15px
    .first-des-para
        margin-top: 20px
.exp-head
    font-size: 2em
    margin: 30px 0 15px !important
    @media (min-width: 520px) and (max-width: 1080px)
        font-size: 1.6em
    @media (min-width: 0px) and (max-width: 520px)
        font-size: 1.3em
.refs
   color: lighten($font, 10)
   margin-bottom: 15px
   padding-top: 10px !important
   font-style: italic
p.divider
    font-size: 2.2em
</style>
```