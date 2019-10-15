<template>
    <div class="work-con">
        <worksum title="@RONIN" sub="Website" :images="[]" :text="ronin_txt"></worksum>
        <worksum title="Netograph" sub="Web App" :images="[]" :text="neto_txt"></worksum>
        <worksum title="Baby Aid NZ" sub="Web App" :images="[]" :text="babyaid_txt"></worksum>
        <worksum title="Dashboard Builder" sub="Web App" :images="[]" :text="dbb_txt"></worksum>
    </div>
</template>

<script>
import worksum from '../components/worksum.vue'
export default {
    name: 'work',
    components: { worksum },
    data () {
        return {
            ronin_txt: `s`,
            neto_txt: `s`,
            babyaid_txt: `s`,
            dbb_txt: `s`,
            images: [],
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
</style>
