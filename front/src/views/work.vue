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
            ronin_txt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur pellentesque ligula et pharetra. Sed quis ultricies massa, a molestie eros. Integer pellentesque nibh nec purus efficitur, id tempor eros egestas. Aenean lacinia in magna nec ultrices. Nullam at laoreet magna, et gravida diam`,
            neto_txt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur pellentesque ligula et pharetra. Sed quis ultricies massa, a molestie eros. Integer pellentesque nibh nec purus efficitur, id tempor eros egestas. Aenean lacinia in magna nec ultrices. Nullam at laoreet magna, et gravida diam`,
            babyaid_txt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur pellentesque ligula et pharetra. Sed quis ultricies massa, a molestie eros. Integer pellentesque nibh nec purus efficitur, id tempor eros egestas. Aenean lacinia in magna nec ultrices. Nullam at laoreet magna, et gravida diam`,
            dbb_txt: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur pellentesque ligula et pharetra. Sed quis ultricies massa, a molestie eros. Integer pellentesque nibh nec purus efficitur, id tempor eros egestas. Aenean lacinia in magna nec ultrices. Nullam at laoreet magna, et gravida diam`,
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
                front: "Vue, Bulma Scss, D3.js, C3.js",
                tooling: "Webpack",
                devops: "Ubuntu 16.04 on DigitalOcean",
                deploys: "Shell script",
                backend: "NodeJS",
                db: "Mongo",
            },
            dbb_tech: {
                front: "Vue, Bulma Scss",
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
