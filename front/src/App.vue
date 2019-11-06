<template>
    <div class="god-div">
        <router-view></router-view>
        <navfoot></navfoot>
    </div>
</template>

<script>
    import navfoot from './components/navfoot'
    export default {
        name: 'app',
        components: { navfoot }
    }
</script>
<style lang="sass" scoped>
    .god-div
        overflow-x: hidden !important
</style>
