<template>
    <div class="sum-con">
        <h2 v-if="!islive">{{ title }}</h2>
        <a v-else :href="aref" target="_blank"><h2>{{ aref }}</h2></a>
        <h3>{{ sub }}</h3>

        <div class="content">
            <div class="two-col">
                <div @click="openmodal" class="img-grid">
                    <figure 
                        v-for="(v, i) in images"
                        :key="i" :class="'img-grid-' + i"
                        class="fig-itm"
                        :style="{ backgroundImage: 'url(' + images[i] + ')'}">
                    </figure>
                </div>
                <div class="tech-con">
                    <h2>Stack</h2>
                    <div class="tech-itm">
                        <div class="itm-name">Frontend:</div>
                        <div class="itm-val">{{ tech.front }}</div>
                    </div>
                    <div class="tech-itm">
                        <div class="itm-name">Tooling</div>
                        <div class="itm-val">{{ tech.tooling }}</div>
                    </div>
                    <div class="tech-itm">
                        <div class="itm-name">DevOps:</div>
                        <div class="itm-val">{{ tech.devops }}</div>
                    </div>
                    <div class="tech-itm">
                        <div class="itm-name">Deploys:</div>
                        <div class="itm-val">{{ tech.deploys }}</div>
                    </div>
                    <div class="tech-itm">
                        <div class="itm-name">Backend:</div>
                        <div class="itm-val">{{ tech.backend }}</div>
                    </div>
                    <div class="tech-itm">
                        <div class="itm-name">Database:</div>
                        <div class="itm-val">{{ tech.db }}</div>
                    </div>
                </div>
            </div>

            <div class="text-con">
                <p v-html="text"></p>
            </div>
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
            islive: Boolean,
            aref: String,
            tech: Object,
        },
        methods: {
            openmodal() {
                this.$parent.$emit('open-modal', this.images)
            }
        }
    }
</script>
<style lang="sass" scoped>
.sum-con
    width: 90%
    margin-left: auto
    margin-right: auto
    margin-bottom: 150px
h4
    color: $font-light
.fin-con
    font-size: 3em
    width: 100%
    height: 80px
    display: flex
    align-items: center
    justify-content: center
    color: $tertiary
    margin-top: 50px
p
    font-size: 1.2em
.fig-itm
    border: 1px solid lighten($font, 80)
    background-repeat: no-repeat
    background-size: cover
figure
    margin: 0
.two-col
    display: flex
    flex-direction: row
.tech-con
    width: 29%
    display: flex
    flex-direction: column
    padding: 20px 40px
    .tech-itm
        display: flex
        flex-direction: row
        font-size: 1.3em
        .itm-name
            color: $font-light
            width: 80px
        .itm-val
            color: $tertiary
.img-grid
    display: grid
    grid-template-columns: 33% 33% 33%
    grid-gap: 4px
    height: 50vh
    width: 70%
    padding: 5px 2px 5px 8px
    transition: all 1s ease
    &:hover
        background: lighten($font, 60)
        grid-template-rows: 22vh 22vh 8vh
        cursor: pointer
        transition: all 1s ease
        border-radius: 2px
        &:after
            transition: all 1s ease
            content: 'view full size images...'
            font-size: 2em
            color: white
            position: realtive
            left: 50%
.img-grid-0
    grid-column: 1 / span 2
    transition: all 1s ease
.img-grid-1
    grid-column: 3
    grid-row: 1 / span 2
    transition: all 1s ease
.img-grid-2
    grid-column: 1
    grid-row: 2
    transition: all 1s ease
.img-grid-3
    grid-column: 2
    grid-row: 2
    transition: all 1s ease
</style>
