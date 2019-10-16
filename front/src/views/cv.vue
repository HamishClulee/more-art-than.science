<template>
    <div class="cv-con">
        <h1 class="main">Ciriculum Vitae</h1>
        
        <div class="header-icons-home">
            <a href="https://github.com/HamishClulee" target="_blank" class="icon-container-item">
                <img src="https://more-art-than.science/images/github.svg" height="60"/>
            </a>
            <a href="https://www.linkedin.com/in/hamish-clulee-163b1950/" target="_blank" class="icon-container-item">
                <img src="https://more-art-than.science/images/linkedin.svg" height="60" />
            </a>
        </div>
        <div class="key-con">
            <p>VueJs - 3+ years</p>
            <p>Javascript - 4+ years</p>
            <p>Java - 4+ years</p>
            <p>NodeJs - 2+ years</p>
            <p>Linux - 4+ years</p>
            <p>Working Remote - 3+ years</p>
            <p>Web Development - 5+ years</p>
        </div>
        <div class="fin-con">~</div>
        <div v-for="(v, i) in jobs" :key="i">
            <h2>{{ v.employer }}</h2>
            <h3>{{ v.title }}</h3>
            <h5>{{ v.dates }}</h5>
            <p v-for="(p, x) in v.description" :key="x">{{ p }}</p>
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
                        title: 'Software Developer',
                        employer: 'Freelance',
                        dates: 'April 2015 - Present (4+ years)',
                        description: [
                            `Over the last five years I have taken on a number of freelance web dev jobs, both while working in waged positions and as a full freelancer.`,
                            `Noteable highlights:`,
                            `A booking, payment and staff allocation app for an education outfit in New Zealand.`,
                            `A booking, payment and calendar management app for an company that provides co-working and co-living spaces for digital nomads.`,
                            `I spent a lot of time working as a contract developer for a design and prototyping company attached to a large US health care firm. I rebuilt their front end build system, introduced them to VueJs and built a lot of prototypes for them to on sell to the parent company.`,
                            `Countless hours tinkering for personal enjoyment`,
                            `Everything I do uses Vue in some way shape or form.`,
                        ],
                        references: true,
                    },
                                        {
                        title: 'Senior Front End Developer',
                        employer: 'Netograph',
                        dates: 'August 2018 - August 2019 (1 year 1 month)',
                        description: [
                            `For almost a year I worked with the CEO to take the site from a hobby project into a market ready product.`,
                            `The front end is written in Vue and Typescript, back by a custom webpack configuration. Visualisations are written in d3.js.`,
                            `Netographs product was essentially a very advanced level web crawler which gathered a vast amount of data by visiting links found on social media then serialised the publicly avaliable information and returned it to the servers. Primarily focued on security and privacy insights, but with the potential to provide intelligence in almost any industry due to the size of the database and the level of detail that website capture provided.`,
                            `This was an awesome place to work and I thoroughly enjoyed the challangesencountered.`,
                        ],
                        references: true,
                    },
                                        {
                        title: 'Software Developer',
                        employer: 'Fusion Sport Inc.',
                        dates: 'October 2017 - April 2018 (7 months)',
                        description: [
                            `Fusion Sport is a sport science company that provides web and hardware
products to assist athletes and sports teams. My main focus was to improve
the Web portal, which is a data in, insights out model.`,
                            `Most of my time at
Fusion was spend on the the insights out part of the business. Building
visualisations in d3.js and C3.js in the form of dashboards which displayed the
data entered by the sports team in question.`,
                            `Project lead on the Dashboard Builder which provided a tool for teams to write
their own dashboards without using any developers.
Most of my time was spent writing Vue and Javascript, with a smaller
percentage spent writing Java and providing API support to the front end team.`,
                        ],
                        references: true,
                    },
                                        {
                        title: 'Web Application Developer',
                        employer: 'Profiler Corporation',
                        dates: 'August 2016 - October 2017 (1 year 3 months)',
                        description: [
                            `Profiler is sports science company based in Dunedin, New Zealand. Most of
my time was spent writing Java on the back end of a large web portal which
focused on providing custom form entry to sports teams and atheletes.`,
                            `Nearer
the end of my time in this position my focus shifted to be far more fron end
focused, with a lot of my time spent writing Vue and beginning to increase its
usage throughout the code base.`,
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
    h2
        margin-bottom: 10px
        font-size: 3em
        @media (min-width: 520px) and (max-width: 1080px)
            font-size: 2.6em
        @media (min-width: 0px) and (max-width: 520px)
            font-size: 1.8em
    h3
        margin-top: 10px
        font-size: 2.5em
        color: $font-light
        @media (min-width: 520px) and (max-width: 1080px)
            font-size: 2.2em
        @media (min-width: 0px) and (max-width: 520px)
            font-size: 1.6em
    h5
        font-size: 1.6em
        color: $secondary
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
            font-size: 1.2em
.fin-con
    font-size: 3em
    width: 100%
    height: 80px
    display: flex
    align-items: center
    justify-content: center
    color: $tertiary
    margin-top: 50px
    @media (min-width: 520px) and (max-width: 1080px)
        font-size: 1.6em
    @media (min-width: 0px) and (max-width: 520px)
        margin-top: 30px
        height: 60px
.header-icons-home
    a
        margin-right: 30px
.key-con
    p
        font-size: 1.5em
</style>
