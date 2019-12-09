<template>
    <div class="temp-con">
        <div class="image-con">
            <!-- :imgsrc="`https://more-art-than.science/images/${v}`" -->
            <vueimage 
                class="vueimg" v-for="(v, i) in test"
                :imgsrc="`https://more-art-than.science/images/${v}`"
                :key="i"
                :scrolltrigger="2000">
            </vueimage>
        </div>
    </div>
</template>
<script>
import vueimage from '../../components/vueimage.vue'
import { images } from './assets/test.js'
export default {
    name: 'ronin',
    components: { vueimage },
    data () {
        return {
            test: images,
            testers: [
                {
                    oneshot: 'https://more-art-than.science/images/dbb1.png',
                    srcmap:
                    {
                        '480': '',
                        '1280': '',
                        '1680': '',
                    },
                    bgcolor: '#f3f8ff',

                },
                {
                    oneshot: 'https://more-art-than.science/images/dbb1.png',
                    srcmap:
                    {
                        '480': '',
                        '1280': '',
                        '1680': '',
                    },
                    bgcolor: '#deecff',
                },
                {
                    oneshot: 'https://more-art-than.science/images/dbb1.png',
                    srcmap:
                    {
                        '480': '',
                        '1280': '',
                        '1680': '',
                    },
                    bgcolor: '#c6cfff',

                },
                {
                    oneshot: 'https://more-art-than.science/images/dbb1.png',
                    srcmap:
                    {
                        '480': '',
                        '1280': '',
                        '1680': '',
                    },
                    bgcolor: '#e8d3ff',

                },
            ]
        }
    },
}
</script>
<style lang="sass" scoped>
.temp-con
    display: flex
    flex-direction: column
    margin-top: 200px
    margin-bottom: 200px
    width: 100%
    align-items: center
    justify-content: center
.image-con
    width: 80%
    margin-left: auto
    margin-right: auto
    display: flex
    flex-direction: row
    flex-wrap: wrap 
    .vueimg
        width: 49%
        margin: 2px
        min-height: 100%

</style>