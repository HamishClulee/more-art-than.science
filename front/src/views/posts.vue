<template>
    <div class="posts-con">
        <babyaid v-if="$route.params.title === 'baby-aid-nz'"></babyaid>
        <hue v-else-if="$route.params.title === 'dashboard-builder'"></hue>
        <createmevn v-else-if="$route.params.title === 'dashboard-builder'"></createmevn>
        <dbb v-else-if="$route.params.title === 'dashboard-builder'"></dbb>
        <netograph v-else-if="$route.params.title === 'netograph'"></netograph>
        <div class="wrong-name-dawg" v-else>
            <h1>Yeah, I'm gunna have to 404 that one dawg.</h1>
        </div>
    </div>
</template>

<script>
import babyaid from './projects/babyaid'
import dbb from './projects/dbb'
import netograph from './projects/netograph'
export default {
    name: 'posts',
    components: {
        babyaid, dbb, netograph
    }
}
</script>

<style lang="sass" scoped>
.posts-con
    margin-top: 80px
</style>