<template>
    <div class="work-con">
        <gallerymodal v-if="showmodal" :images="act_array"></gallerymodal>

        <worksum
            title="Dashboard Builder" sub="Web App"
            :images="dbbimg" :text="dbb_txt"
            :tech="dbb_tech">
        </worksum>

        <worksum 
            title="Netograph" sub="Web App" 
            :images="netimg" :text="neto_txt"
            :islive="true" aref="https://netograph.io"
            :tech="neto_tech">
        </worksum>

        <worksum
            title="@RONIN" sub="Website"
            :images="roninimg" :text="ronin_txt"
            :islive="true" aref="https://atronin.space"
            :tech="ronin_tech">
        </worksum>

        <worksum
            title="Baby Aid NZ" sub="Web App"
            :images="babimg" :text="babyaid_txt"
            :tech="baby_tech">
        </worksum>

    </div>
</template>

<script>
import worksum from '../components/worksum.vue'
import gallerymodal from '../components/gallerymodal.vue'
export default {
    name: 'work',
    components: { worksum, gallerymodal },
    data () {
        return {
            ronin_txt: [
                `Static website built in October 2019 with a booking app currently in developement. 
                The clients are a growing accomodation business in Bali. Their primary focus is providing 
                Co-Live-Co-Work spaces for Digital Nomads.`,
                `The booking application that will allow customers and guests to check availability of rooms, book rooms 
                and co-working desks, make payments and include customisable packages which will increase 
                or decrease costs. `,
                `I've included a number of screenshots of the various areas of the app, which can be seen by clicking 
                <a class="pickup-modal-clicks" data-ref="roninimg">here</a>`],
            neto_txt: [
                `I built the frontend of the web app currently  
                hosted at <a href="https://netograph.io" target="_blank">netograph.io</a>.`,
                `The amount of data in Netograph's DB is staggering, primarily indexed by domain and IP address, 
                each item has a huge amount of detail associated with it, and each index having a vast length, 
                think millions of items, in some cases that number runs well into the billions.`,
                `The primary frontend challenges revolved around around creating user interfaces that 
                displayed that level of detail without overwhelming the user.`,
                `Items of note include; an <a href="https://netograph.io/datasets/social/" target="_blank">infinite scroll library</a>,
                which had to act in place of pagination due to how the lists being displayed are indexed.  
                Custom <a href="https://netograph.io/datasets/social/domain/facebook.com" target="_blank">masonary cards</a>, 
                designed to show the user a smaple of the data in each list, remembering that each list could 
                contain over a million items, and each first class object (IPs, domains, superdomains) could contain 
                over 10 lists. A <a href="https://netograph.io/datasets/social" target="_blank">search component</a>, 
                enabling users find very specific pieces of information in very large set.`,
                `Netograph also captures privacy and cookie policy pages. 
                The text and layout data is captured prior 
                to the painting and rendering stage in the browser lifecycle. 
                Each capture displayed in the app shows the captured text, overlaying its captured position  
                on a full page screenshot of URL in question, text is then searchable and sortable.
                You can check it
                out <a href="https://netograph.io/datasets/social/recentpolicies" target="_blank">here</a>. The UI is pretty cool, 
                and unlike anything I've seen before.`,
                `Overall, this was an awesome developement experience.`
                ],
            babyaid_txt: [
                `Static website and booking app written for a now defunct medical start up in New Zealand.`,
                `I built a calendar app using a forked Vue calendar found on GitHub. A checkout and payment system
                built using a hashed URL stored in the DB so that bookings would persist over time and could be 
                returned to at any time, and a 'no page reload' round trip to the server every time a change was made by the user 
                to ensure the correctness of the information displayed on the page. Payments were made using Stripe 
                and their awesome JS SDK.`,
                `The app included an admin area, secured by a session token, for staff to manage courses and allocate 
                trainers at various times and dates. SEO was taken care of by a small meta tagging library which 
                I wrote myself.`,
                `I've included a number of screenshots of the various areas of the app, which can 
                be seen by clicking <a class="pickup-modal-clicks" data-ref="babimg">here</a>`
                ],
            dbb_txt: [
                `Built while working at Fusion Sport Australia.`,
                `Shortly after my start date I was transfered 
                into the frontend team tasked with improving processes, finding ways to free up developer time
                and to help clear the backlog of custom dashboards. As it stood, custom
                dashboards required a lot of back and forth to build a solid specification, and then a 
                reasonably long lead time to complete development.`, 
                `As a team we identified elements of dashboards that were commonly requested, and 
                found a large number that could be further generalised past the loose components that were in 
                place at the time.`,
                `I prototyped an app that would allow creation of dashboards without needing developers. 
                The prototype was picked up and approved by management, I was lucky enough to be given 
                leadership of the project, and the Dashboard Builder was born.`,
                `The Dashboard Builder allowed customers to create pages, sections, and widgets. 
                Sections were contained on pages, widgets were contained in sections.`,
                `Widgets were split in to two groups, display and input. For example, display widgets 
                included line, spline, area and bar graphs built using c3.js and d3.js, a table widget for 
                displaying pure tabular data, and a tile widget for displaying single items; think fastest 
                100m sprint this week, or monthly average caloric 
                intake.`,
                `All of the widgets had customisable icons, color pickers for background, title and subtitle colors 
                and were able to be repositioned in, and into new sections 
                and pages via drag and drop.`,
                `In addition to the working on the frontend I built the API in Java, the deploy and 
                integrations pipeline (using shell scripts and 
                gitlab in conjunction with amazon CDN) and the developement environment, which needed to 
                mock the production API and the save and publish 
                functionality of the editor and viewer (this was done using NodeJS and some npm hackery), 
                finally I built the storage layer in Java, so the JSON object from the frontend could be stored and 
                retrieved in and from our PSQL database.`,
                `The Dashboard Builder was a big win from a business perspective, devs were freed up, and the backlog was cleared. 
                From conversations I've had with friends who still work at Fusion I'm told that the Dashboard Builder 
                continues to be a customer favorite. Developing this app was still 
                the best fun I've had while programming, an awesome team spirit and an excellent outcome.`,
                `I've included a number of screenshots of the various 
                areas of the app, which can be seen by clicking <a class="pickup-modal-clicks" data-ref="dbbimg">here</a>.`
                ],
            babimg: [
                "https://more-art-than.science/images/bab1-lowqual.jpg",
                "https://more-art-than.science/images/bab3-lowqual.jpg",
                "https://more-art-than.science/images/bab2-lowqual.jpg",
                "https://more-art-than.science/images/bab4-lowqual.jpg",
            ],
            netimg: [
                "https://more-art-than.science/images/neto1-lowqual.jpg",
                "https://more-art-than.science/images/neto2-lowqual.jpg",
                "https://more-art-than.science/images/neto3-lowqual.jpg",
                "https://more-art-than.science/images/neto4-lowqual.jpg",
            ],
            dbbimg: [
                "https://more-art-than.science/images/dbb1-lowqual.jpg",
                "https://more-art-than.science/images/dbb2-lowqual.jpg",
                "https://more-art-than.science/images/dbb3-lowqual.jpg",
                "https://more-art-than.science/images/dbb4-lowqual.jpg",
            ],
            roninimg: [
                "https://more-art-than.science/images/ronin1-lowqual.jpg",
                "https://more-art-than.science/images/ronin2-lowqual.jpg",
                "https://more-art-than.science/images/ronin3-lowqual.jpg",
                "https://more-art-than.science/images/ronin4-lowqual.jpg",
            ],
            ronin_tech: {
                front: "Vue, Sass",
                tooling: "VueCli",
                devops: "Ubuntu 16.04 on DigitalOcean",
                deploys: "Shell script",
                backend: "NodeJS",
                db: "Mongo",
            },
            neto_tech: {
                front: "Vue, Vue-Class-Component, Typescript, Sass, D3.js",
                tooling: "Custom Webpack Config",
                devops: "Google App Engine, Docker, Kubernetes",
                deploys: "Modd",
                backend: "GoLang",
                db: "Google Big Table",
            },
            baby_tech: {
                front: "Vue, Bulma Scss",
                tooling: "Webpack",
                devops: "Ubuntu 16.04 on DigitalOcean",
                deploys: "Shell script",
                backend: "NodeJS",
                db: "Mongo",
            },
            dbb_tech: {
                front: "Vue, Bulma Scss, D3.js, C3.js",
                tooling: "Custom Webpack Config",
                devops: "CentOS, Amazon CDN",
                deploys: "Shell scripts",
                backend: "Java",
                db: "PSQL",
            },
            act_array: null,
            showmodal: false,
        }
    },
    mounted () {
        const els = [].slice.call(document.getElementsByClassName('pickup-modal-clicks'))
        if (els) {
            els.forEach(v => {
                
                v.onclick = () => {
                    let trans = []
                    const attr = v.getAttribute("data-ref")
                    this[attr].forEach(v => {
                    trans.push(this.transform(v))
                })
                this.act_array = trans
                this.showmodal = true
                }
            })
        }
        
        this.$on('open-modal', (images) => {
            let trans = []
            images.forEach(v => {
                trans.push(this.transform(v))
            })
            this.act_array = trans
            this.showmodal = true
        })
        this.$on('close-modal', () => {
            this.act_array = null
            this.showmodal = false
        })
    },
    methods: {
        transform(path) {
            return path.replace("-lowqual.jpg", ".png")
        } 
    },
    computed: {
    }
}
</script>

<style lang="sass" scoped>
.work-con
    width: 95%
    margin-left: auto
    margin-right: auto
    margin-bottom: 200px
    margin-top: 70px
</style>
