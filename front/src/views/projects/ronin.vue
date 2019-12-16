<template>
    <div class="temp-con">
        <h1>Responsive Testing</h1>
        <div class="response-con">
            <vueimage
                imgsrc="https://more-art-than.science/images/test-small.png"
                :srcmap="testsingle.srcmap"
                alttag="Placeholder image with text inside">
            </vueimage>
        </div>

        <h1>Grid Testing</h1>
        <div class="image-con">
            <vueimage
                class="vueimg" v-for="(v, i) in test"
                :key="i"
                :imgsrc="`https://more-art-than.science/images/${v}`"
                :alttag="`Just another faker lat tag displaying things ${i * Math.random()} times`">
            </vueimage>
        </div>
    </div>
</template>
<script>
import vueimage from '../../components/vueimage.vue'
import { images } from './assets/test.js'
export default {
    name: 'ronin',
    components: {
        vueimage
    },
    data () {
        return {
            test: images,
            testsingle: {
                srcmap:
                {
                    'small': 'https://more-art-than.science/images/test-small.png',
                    'medium': 'https://more-art-than.science/images/test-medium.png',
                    'large': 'https://more-art-than.science/images/test-large.png',
                },
                bgcolor: '#f3f8ff',
            },
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
    margin-bottom: 200px
    margin-top: 100px
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

.response-con
    width: 50%
    margin-left: auto
    margin-right: auto

h1
    margin-top: 1em
    margin-bottom: 1em

</style>