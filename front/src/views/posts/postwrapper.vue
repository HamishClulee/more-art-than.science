<template>
    <main class="post-wrapper">        
        <div class="post-container" v-html="markdown">
            <!-- imported via .md file -->
        </div>
    </main>

</template>

<script>
import hljs from 'highlight.js';
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
                    hljs.highlightBlock(block)
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