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
            <p>NodeJs - 3+ years</p>
            <p>Linux - 4+ years</p>

            <mark class="divider">~</mark>

            <h6 class="exp-head">Other relevant skills</h6>
            <p>Team Leadership 1+ year</p>
            <p>Agile 3+ years</p>
            <p>UI/UX Design 2+ years</p>
            <p>Working Remote - 3+ years</p>
            <p>Web Development - 5+ years</p>
            <p>Gimp/Inkscape/Abobe suite (graphics and image editors) - 5+ years</p>

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
        <navfoot></navfoot>
    </div>
</template>

<script>
import navfoot from '../components/navfoot'
export default {
    name: 'cv',
    components: {
        navfoot,
    },
    data () {
        return {
            jobs: [
                {
                    title: 'Frontend Tech Lead',
                    employer: 'AduroLabs Vietnam',
                    dates: 'January 2020 - August 2020 (8 Mmonths)',
                    description: [
                        `AduroLabs is a Health and Wellness service provider.`,
                        `I was primarily 
                        tasked with leadership and mentoring for the front end teams. 
                        Daily responsibilities included code reviews, coaching, writing 
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
                    dates: 'July 2018 - July 2019 (1 year)',
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
                        `Overall, this was an awesome developement experience, and an unforgettable opportunity.`,
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
    width: 92%
    margin-left: auto
    margin-right: auto
    max-width: 1100px
    margin-top: 90px
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
            font-size: 2.1em
        @media (min-width: 0px) and (max-width: 520px)
            font-size: 1.8em
    h3
        margin-top: $heading-vertical-margin
        margin-bottom: $heading-vertical-margin
        margin-left: $heading-neg-align
        font-size: 2.5em
        color: $secondary
        @media (min-width: 520px) and (max-width: 1080px)
            font-size: 2em
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
