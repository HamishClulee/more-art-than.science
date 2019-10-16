<template>
    <div class="sum-con">
        <h2>{{ title }}</h2>
        <h4>{{ sub }}</h4>
        <div class="content">
            <div class="img-grid">
                <figure 
                    v-for="(v, i) in images"
                    :key="i" :class="'img-grid-' + i"
                    class="fig-itm"
                    :style="{ backgroundImage: 'url(' + images[i] + ')'}">
                </figure>
            </div>
            <div class="text-con" v-html="text"></div>
            <div class="fin-con">~</div>
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
    width: 90%
    margin-left: auto
    margin-right: auto
    margin-bottom: 100px
.fin-con
    font-size: 3em
    width: 100%
    height: 80px
    display: flex
    align-items: center
    justify-content: center
.fig-itm
    border: 1px solid #adadad
    background-repeat: no-repeat
    background-size: cover
figure
    margin: 0
.img-grid
    display: grid
    grid-template-columns: 33% 33% 33%
    grid-gap: 2px
    height: 50vh
    width: 100%
.img-grid-0
    grid-column: 1 / span 2
.img-grid-1
    grid-column: 3
    grid-row: 1 / span 2
.img-grid-2
    grid-column: 1
    grid-row: 2
.img-grid-3
    grid-column: 2
    grid-row: 2
</style>
