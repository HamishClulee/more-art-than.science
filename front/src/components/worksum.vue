<template>
    <div class="sum-con">
        <h2>{{ title }}</h2>
        <h4>{{ sub }}</h4>
        <div class="content">
            <div class="img-grid">
                <img v-for="(v, i) in images" :key="i" :src="images[i]" :class="'img-grid-' + i" />
            </div>
            <div class="text-con" v-html="text"></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'worksum',
        props: {
            images: Array,
            title: String,
            sub: String,
            text: String,
        }
    }
</script>
<style lang="sass" scoped>
.sum-con
</style>
