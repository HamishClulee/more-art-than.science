<template>
    <div class="work-con">
        <gallerymodal v-if="showmodal" :images="act_array"></gallerymodal>
        <worksum
            title="@RONIN" sub="Website"
            :images="roninimg" :text="ronin_txt"
            :islive="true" aref="https://atronin.space"
            :tech="ronin_tech">
        </worksum>
        <worksum 
            title="Netograph" sub="Web App" 
            :images="netimg" :text="neto_txt"
            :islive="true" aref="https://netograph.io"
            :tech="neto_tech">
        </worksum>
        <worksum
            title="Baby Aid NZ" sub="Web App"
            :images="babimg" :text="babyaid_txt"
            :tech="baby_tech">
        </worksum>
        <worksum
            title="Dashboard Builder" sub="Web App"
            :images="dbbimg" :text="dbb_txt"
            :tech="dbb_tech">
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
            ronin_txt: `Static website built in October 2019 with a booking app currently in developement. `
            + `The clients are a growing accomodation business in Bali; their primary focus is providing Co-Live-Co-Work spaces for Digital Nomads. `
            + `The boking application that is currently in developement will allow customers and guests to check availability of rooms, book rooms and co-working desks, make payments and include customisable packages which will increase or decrease costs. Estimated time of completion is early in 2020.`,
            neto_txt: `I was almost solely responsible for building the frontend of the current version hosted at `
            + `<a href="https://netograph.io" target="_blank">netograph.io</a>. Netograph `
            + `has an incredible amount of data, presenting it in an easily readable and user friendly manner `
            + `was an enjoyable challenge. More details can be found on my <a href="/cv">C.V</a>.`,
            babyaid_txt: `Static website and booking app written for a now defunct medical start up in New Zealand. `
            + `I built a calendar app, checkout and payment system, and an admin area for staff to manage courses `
            + `and allocate them to trainers.`,
            dbb_txt: `Built while working at Fusion Sport Australia. I was the project lead. This app allows customers to build `
            + `their own dashboards to display data visually. When I moved from the backend to the frontend team, all dashboards `
            + `were being built by hand, it was time consuming and expensive for customers. By the time I left, the Dashboard Builder `
            + `allowed customers to build very detailed dashboards without tying up our frontend developers. A very cool piece of Javascript!`,
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
