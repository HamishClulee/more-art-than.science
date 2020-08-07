<template>
    <main class="post-wrapper">        
        <div class="post-container" v-html="markdown">
            <!-- imported via .md file -->
        </div>
    </main>

</template>

<script>
import highlightjs from 'highlight.js/lib/highlight'

// Languages import
import javascript from 'highlight.js/lib/languages/javascript'

// Register languages
highlightjs.registerLanguage('javascript', javascript)

export default {
    name: 'betterstyles',
    data () {
        return {
            markdown: null,
        }
    },
    created () {
        import(`./${this.$route.params.mdfilename}`).then(res => {
            this.markdown = res.default
        }).then(() => {
            this.$nextTick(() => {
                document.querySelectorAll('pre code').forEach((block) => {
                    highlightjs.highlightBlock(block)
                })
            })
        })
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