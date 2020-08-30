<template>
    <main class="post-wrapper">        
        <div class="post-container" v-html="markdown">
            <!-- imported via .md file -->
        </div>
        <navfoot></navfoot>
    </main>
</template>

<script>
import { posts } from './posts.js'

import Prism from 'prismjs'

import navfoot from '../../components/navfoot'

export default {
    name: 'betterstyles',
    components: {
        navfoot,
    },
    data () {
        return {
            markdown: null
        }
    },
    created () {

        if (this.getMDFileName()) {

            import(`./${this.getMDFileName()}`)
                .then(res => this.markdown = res.default)
                .then(() => Prism.highlightAll())

        }

    },
    methods: {
        getMDFileName() {

            try {

                return posts.filter(item => {

                    return item.linkto.params.urlname === this.$route.params.urlname

                })[0].linkto.params.mdfilename

            } catch (e) {

                this.$router.push({ name: 'notfound' })

                return false

            }

        }
    }
}
</script>

<style scoped lang="sass">
.top-ctrls
    width: 95%
    display: flex
    justify-content: space-between
    flex-direction: row
    margin: 80px auto 10px
    font-family: $heading-font
    font-size: 1.3em
    cursor: pointer
    color: $link
</style>