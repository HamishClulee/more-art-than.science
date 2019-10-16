<template>
    <div class="work-con">
        <worksum title="@RONIN" sub="Website" :images="roninimg" :text="ronin_txt"></worksum>
        <worksum title="Netograph" sub="Web App" :images="netimg" :text="neto_txt"></worksum>
        <worksum title="Baby Aid NZ" sub="Web App" :images="babimg" :text="babyaid_txt"></worksum>
        <worksum title="Dashboard Builder" sub="Web App" :images="dbbimg" :text="dbb_txt"></worksum>
    </div>
</template>

<script>
import worksum from '../components/worksum.vue'
export default {
    name: 'work',
    components: { worksum },
    data () {
        return {
            ronin_txt: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur pellentesque ligula et pharetra. Sed quis ultricies massa, a molestie eros. Integer pellentesque nibh nec purus efficitur, id tempor eros egestas. Aenean lacinia in magna nec ultrices. Nullam at laoreet magna, et gravida diam</p>`,
            neto_txt: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur pellentesque ligula et pharetra. Sed quis ultricies massa, a molestie eros. Integer pellentesque nibh nec purus efficitur, id tempor eros egestas. Aenean lacinia in magna nec ultrices. Nullam at laoreet magna, et gravida diam</p>`,
            babyaid_txt: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur pellentesque ligula et pharetra. Sed quis ultricies massa, a molestie eros. Integer pellentesque nibh nec purus efficitur, id tempor eros egestas. Aenean lacinia in magna nec ultrices. Nullam at laoreet magna, et gravida diam</p>`,
            dbb_txt: `<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas efficitur pellentesque ligula et pharetra. Sed quis ultricies massa, a molestie eros. Integer pellentesque nibh nec purus efficitur, id tempor eros egestas. Aenean lacinia in magna nec ultrices. Nullam at laoreet magna, et gravida diam</p>`,
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
            ]
        }
    },
    mounted () {
    },
    methods: {
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
