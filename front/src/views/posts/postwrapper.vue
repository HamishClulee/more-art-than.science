<template>
    <main class="post-wrapper">        
        <div class="post-container" v-html="markdown">
            <!-- imported via .md file -->
        </div>
    </main>

</template>

<script>
import { posts } from './posts.js'

import Prism from 'prismjs'

// import highlightjs from 'highlight.js/lib/core.js'

// // Languages import
// import javascript from 'highlight.js/lib/languages/javascript.js'

// // Register languages
// highlightjs.registerLanguage('javascript', javascript)
// highlightjs.registerLanguage('html', javascript)
// highlightjs.registerLanguage('css', javascript)

export default {
    name: 'betterstyles',
    data () {
        return {
            markdown: null
        }
    },
    created () {

        if (this.getMDFileName()) {

            import(`./${this.getMDFileName()}`).then(res => {

                this.markdown = res.default

            }).then(() => {

                Prism.highlightAll()

                // this.$nextTick(() => {

                //     document.querySelectorAll('pre code').forEach((block) => {
                //         highlightjs.highlightBlock(block)
                //     })

                // })

            })

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