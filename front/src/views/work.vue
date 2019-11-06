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
            ronin_txt: [`Static website built in October 2019 with a booking app currently in developement. 
                The clients are a growing accomodation business in Bali. Their primary focus is providing 
                Co-Live-Co-Work spaces for Digital Nomads. `,
                `The boking application that is currently in 
                developement will allow customers and guests to check availability of rooms, book rooms 
                and co-working desks, make payments and include customisable packages which will increase 
                or decrease costs. `,
                `I've included a number of screenshots of the various areas of the app, which can be seen by clicking 
                <a class="pickup-modal-clicks" data-ref="roninimg">here</a>`],
            neto_txt: [`I built the frontend of the web app currently  
                hosted at <a href="https://netograph.io" target="_blank">netograph.io</a>.`,
                `This was a 
                start up environment with a small team. Netograph provides an incredible amount of 
                data in very fine grained form. The primary frontend challenges revolved around 
                around creating user interfaces that displayed that detail without feelin cluttered.`,
                `We made heavy use of an <a href="https://netograph.io/datasets/social/" target="_blank">infinite scroll library</a>, 
                and a <a href="https://netograph.io/datasets/social/domain/facebook.com" target="_blank">masonary cards</a> 
                system, both custom built by myself. Netograph also captures privacy and cookie policy pages via 
                machine learning. The user interface for viewing the captured pages is worth 
                <a href="https://netograph.io/datasets/social/recentpolicies" target="_blank">checking out</a> 
                It uses a custom built system for display text which is captured by a headless chrominium browser, 
                well before the painting and rendering stage, then displays it as an over to a full page 
                screen shot captured of the same web page. Overall, this was an awesome developement experience.`],
            babyaid_txt: [
                `Static website and booking app written for a now defunct medical start up in New Zealand.`,
                `I built a calendar app using a forked Vue calendar found on GitHub. A checkout and payment system
                built using a hashed URL stored in the DB so that bookings would persist over time and could be 
                returned to at any time, and a round trip to the server every time a change was made by the user 
                to ensure correctness of information displayed on the page. Payments were made using Stripe.`,
                `The app included an admin area, secured by a session token, for staff to manage courses and allocate 
                trainers at various times and dates. SEO was taken care of by a small meta tagging library which 
                I wrote myself.`,
                `I've included a number of screenshots of the various areas of the app, which can 
                be seen by clicking <a class="pickup-modal-clicks" data-ref="babimg">here</a>`
                ],
            dbb_txt: [`Built while working with the frontend team at Fusion Sport Australia. Originally customers 
                would request custom built dashboards to aggregate their input data. This would 
                require a lot of spec work and communication, and then lead for development.`, 
                `We identified a large 
                number of common elements that were being requested by customers and propsed building an app that 
                would allow creation of dashboards without needing developers. I was lucky enough to be given 
                leadership of the project and the Dashboard Builder was born. `, 
                `For legacy reasons which existed in the Smartabase platform, it needed to built in two parts: 
                an editor and a viewer.`,
                `This app allowed customers to create pages, sections, and widgets. We built widgets for bar, 
                line, spline and area graphs. Widgets which allowed the input of customisable filters, which 
                could be applied to the data before it reached a chart, think date or number ranges. We 
                built a tile widget for displaying single numbers, think averages or maxiumums from a range of 
                datas. All of the widdgets had customisable icons, background colors and positions in sections 
                and pages. `,
                `I was also the only developer involved that had backend experience and access so in addition 
                to the working on the frontend 
                I built the API in Java, the deploy and integrations pipeline (using shell scripts and 
                gitlab in conjunction with amazon CDN) and the developement environment, which needed to 
                mock the production API and the save and publish 
                functionality of the editor and viewer (this was done using NodeJS and some npm hackery), 
                finally I built the storage layer in Java, so the JSON object from the frontend could be stored and 
                retrieved in and from our PSQL database.`,
                `From conversations I've had with friends who stil work at Fusion I'm told that the Dashboard Builder 
                is big customer favorite, and a big win from a business perspective. Developing this app was still 
                the best fun I've had while programming. I've included a number of screenshots of the various 
                areas of the app, which can be seen by clicking <a class="pickup-modal-clicks" data-ref="dbbimg">here</a>`],
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
</style>
