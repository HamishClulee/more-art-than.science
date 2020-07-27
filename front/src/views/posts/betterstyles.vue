<template>
    <div class="post-container" v-html="markdown"></div>
</template>

<script>
import markdown from "./betterstyles.md"
export default {
    name: 'betterstyles',
    data () {
        return {
            markdown: markdown,
        }
    }
}
</script>

<style scoped lang="sass">

</style>