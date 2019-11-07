<template>
    <div class="cv-con" id="print-vis-on">
        <h1 class="main">Hamish Clulee</h1>
        <h2>BSc, Software Engineering, University of Otago</h2>
        <h3>References upon request</h3>
        <h5>hamish.clulee@gmail.com</h5>
        <h6>Digital Nomad, primarily located in Asia.</h6>
        <h6>New Zealand Citizen.</h6>
        <div class="fin-con">~</div>
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
        <div class="fin-con">~</div>
        <div class="job-con" v-for="(v, i) in jobs" :key="i">
            <h2>{{ v.employer }}</h2>
            <h3>{{ v.title }}</h3>
            <h5>{{ v.dates }}</h5>
            <h6 class="refs" v-if="v.references">References available</h6>
            <p v-for="(p, x) in v.description" :key="x" v-html="p"></p>
            <div class="fin-con">~</div>
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
                        title: 'Full Stack Web Developer',
                        employer: 'Freelancing',
                        dates: 'April 2015 - Present (4+ years)',
                        description: [
                            `Since early 2015 I have taken on a number of freelance web dev jobs, both while working 
                                in waged positions and as a full time freelancer.`,
                            `Breif summary of works:`,
                            `<ul>`,
                            `<li>Scratch build a booking, payment and calendar management app for @RONIN, 
                                a company that provides co-working and co-living spaces for digital nomads. 
                                Currently under developement. Details on the <a href="/work">projects page</a>.</li>`,
                            `<li>Scratch build a booking, payment and staff allocation app for BabyAidNZ, an 
                                education outfit in New Zealand. Details on the <a href="/work">projects page</a>.</li>`,
                            `<li>A growing number of static websites/brochurewear sites, built using Vue and Sass and self 
                                hosted on DigitalOcean.</li>`,
                            `</ul>`,
                            `~`,
                            `Almost everything I do while freelancing finds a way to make use of <em>VueJs</em> in some way, 
                                shape or form.`,
                        ],
                        references: true,
                    },
                    {
                        title: 'Senior Frontend Developer',
                        employer: 'Netograph',
                        dates: 'August 2018 - August 2019 (1 year 1 month)',
                        description: [
                            `Netograph provides a web app and an API service, their frontend is written in <em>VueJs</em> 
                                and Typescript, backed by a custom webpack configuration. Visualisations are written in 
                                d3.js. I was responsible for the vast majority of the frontend code currently hosted at 
                                <a href="https://netograph.io" target="_blank">https://netpgraph.io</a>`,
                            `Netograph's product is data. That data is gathered by a web crawler. Beginning by crawling 
                                open social media platforms like Twitter and 4chan each crawler thread follows any links 
                                encountered. When the crawler thread encounters a new domain it uses a headless browser to 
                                record all the worthwhile information and sends it back to the Netograph servers, then starts 
                                a new crawl. At the time I left there were over 2000 threads, which performed a capture in 
                                around 2 minutes and were constantly running. Netograph has a lot of data, 19 billion http 
                                request pairs captured at last count!`,
                            `Things that are indivually worth mentiong are, the 
                                <a href="https://netograph.io/datasets/social/" target="_blank">infinite scroll library</a>,
                                which had to act in place of pagination due to how the lists being diaplyed are indexed.  
                                Custom <a href="https://netograph.io/datasets/social/domain/facebook.com" target="_blank">masonary cards</a> 
                                , designed to show the user a smaple of the data in each list, remembering that each list could 
                                contain over a million items, and each first class object (IPs, domains, superdomains) could contain 
                                up to over 10 lists. A <a href="https://netograph.io/datasets/social" target="_blank">search component</a>, 
                                letting users find needles in a gigantic haystack, in a manner that was quick and easy.`,
                                `Netograph also captures privacy and cookie policy pages.
                                Each capture displays the text from the captured site, overlayed in the original 
                                position of a full page screenshot of the page being captured.  The has been captured by a headless chrominium browser, 
                                well before the painting and rendering stage. The advantage here is that the text has been extracted and is now 
                                parsable by Netograph servers, think GDPR and regulatory compliance for privacy enforcement. 
                                The UI was designed as a sales tool to show the accuracy of the data that is being captured.
                                It's worth <a href="https://netograph.io/datasets/social/recentpolicies" target="_blank">checking out</a>.`,
                            `Overall, this was an awesome developement experience.`,
                            `<span class="remote">This was a 100% remote position</span>`,
                        ],
                        references: true,
                    },
                                        {
                        title: 'Contract Frontend Developer',
                        employer: 'Allow Design',
                        dates: 'Intermittent between January 2017 - February 2019 (Contracts totalling 9+ months)',
                        description: [
                            `Allow Design was a studio based in Dunedin, New Zealand. They had one primary client, 
                                a US healthcare giant. They would create functioning mini applications as design 
                                templates for developers working directly for healthcare firm. I was employed on 
                                and off for a number of these prototypes, I would create mini-web-apps from a 
                                Photoshop file provided by a Allow designer. I was also responsible for overhauling 
                                the frontend tooling and build system, to enact a <em>VueJs</em> and Webpack boilerplate, 
                                which was in usage until the company folded early this year.`,
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
                                and provide a web app, both designed to 
                                provide athletes and sports teams with competitive advantages.`,
                            `Please note that Fusion Sport accuired Profiler Corp, where I was working 
                                at the time, details of my work at Profiler can be found below.`,
                            `The Fusion Sport Client list is impressive, you can check it out 
                                <a href="https://www.fusionsport.com/clients/" target="_blank>here</a>, 
                                working directly for internationally recognisable sports teams was a real buzz.`,
                            `My main focus was Smartabase; Fusion's primary web product. Smartbase functions on a 
                                "data-in-insights-out" model. Most of my time at Fusion was spent on the "...insights-out" 
                                part of their business, I wrote software that generated charts and tables from the data 
                                provided by the customer. I rebuilt frontend tooling, to replace Gulp and JQuery with a 
                                custom Webpack and <em>VueJs</em> boilerplate. The new boilerplate reduced lead time 
                                by a significant amount, the new tooling setup was heralded as very large success and 
                                is still in usage today.`, 
                            `While most of my time at Fusion was spent using <em>Vue</em> to build dashboards, I 
                                was also responsible for providing all the API support to the 
                                frontend team, which required me to spend time wrting Java and Shell scripts, and still
                                sequestered to write and debug Java on regularar basis. `,
                            `A noteable highlight; after identifying a large number of elements being commonly requested by
                                customers in their dashboard specifications, I proposed that we write an app to allow 
                                customers to use those elements 
                                without the need to directly employ developers. I was granted leadership of the Dashboard Builder Project. 
                                Details on the <a href="/work">projects page</a>. The Dashboard Builder was a big success 
                                and based on feedback from collegaues still working at Fusion, appears to be a customer favorite.`,
                            `<span class="remote">This was a 100% remote position</span>`,
                        ],
                        references: true,
                    },
                    {
                        title: 'Web Application Developer',
                        employer: 'Profiler Corporation',
                        dates: 'August 2016 - October 2017 (1 year 3 months)',
                        description: [
                            `This was a graduate position which I was offered in the second half of 
                            my third year at the University of Otago.`,
                            `Profiler is sports science company based in Dunedin, New Zealand. Profiler was 
                                responsible for the creation of Smartabase, a web application built to assist 
                                with athlete and sport team management. The app had two main areas of focus. 
                                First, data in, users were able to create very detailed custom forms. Second, 
                                insights out, which was where I was orginally assigned due to my ReactJs 
                                experience and passion for UI design and build. The first few months were spent 
                                prototyping and designing a new UI for some of the 'insights out' parts of the app.
                                Pivots occured and my focus shifted to be more backend focused, writing Java, 
                                providing API endpoints, debugging and refactoring.`,
                            `Nearer
                                the end of my time in this position my focus shifted back to being far more frontend
                                focused, with a lot of my time spent writing <em>VueJS</em> and beginning to increase its
                                usage throughout the code base.`,
                            `Profiler Corp was acquired by Fusion, which meant a new position, details are above.`,
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
.cv-con
    width: 80%
    margin-left: auto
    margin-right: auto
    margin-bottom: 150px
    @media (min-width: 520px) and (max-width: 1080px)
        width: 90%
    @media (min-width: 0px) and (max-width: 520px)
        width: 95%
    h1
        margin-bottom: 5px
        font-size: 3.5em
        @media (min-width: 520px) and (max-width: 1080px)
            font-size: 2.8em
        @media (min-width: 0px) and (max-width: 520px)
            font-size: 2.2em
    h2
        margin-bottom: 10px
        margin-top: 10px
        font-size: 2.6em
        color: lighten($font, 20)
        @media (min-width: 520px) and (max-width: 1080px)
            font-size: 2.4em
        @media (min-width: 0px) and (max-width: 520px)
            font-size: 1.5em
    h3
        margin-top: 10px
        font-size: 2.5em
        color: $secondary
        @media (min-width: 520px) and (max-width: 1080px)
            font-size: 2.2em
        @media (min-width: 0px) and (max-width: 520px)
            font-size: 1.6em
    h5
        font-size: 1.7em
        color: $font-light
        @media (min-width: 520px) and (max-width: 1080px)
            font-size: 1.5em
        @media (min-width: 0px) and (max-width: 520px)
            font-size: 1.4em
    p
        font-size: 1.3em
        line-height: 1.5
        margin: 5px 0
        @media (min-width: 520px) and (max-width: 1080px)
            font-size: 1.2em
        @media (min-width: 0px) and (max-width: 520px)
            font-size: 1.1em
.exp-head
    font-size: 2em
    margin: 30px 0 10px
    @media (min-width: 520px) and (max-width: 1080px)
        font-size: 1.6em
    @media (min-width: 0px) and (max-width: 520px)
        font-size: 1.3em
.key-con
    p
        color: lighten($font, 20)
        font-size: 1.5em
        @media (min-width: 520px) and (max-width: 1080px)
            font-size: 1.3em
        @media (min-width: 0px) and (max-width: 520px)
            font-size: 1.1em
.refs
   color: lighten($font, 10)
   margin-bottom: 15px
</style>
