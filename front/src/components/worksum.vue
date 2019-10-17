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
                    <h3>Stack</h3>
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
    width: 95%
    margin-left: auto
    margin-right: auto
    margin-bottom: 150px
    @media (min-width: 0px) and (max-width: 780px)
        width: 100%
        margin-bottom: 50px
    h2
        @media (min-width: 520px) and (max-width: 1080px)
            font-size: 3.4em
        @media (min-width: 0px) and (max-width: 520px)
            font-size: 2em
            margin-top: 10px
            margin-bottom: 5px
h3
    color: darken($font-light, 20)
    @media (min-width: 520px) and (max-width: 1080px)
        font-size: 1.6em
    @media (min-width: 0px) and (max-width: 520px)
        margin-top: 10px
        font-size: 1.4em
.fin-con
    font-size: 3em
    width: 100%
    height: 80px
    display: flex
    align-items: center
    justify-content: center
    color: $tertiary
    margin-top: 50px
    @media (min-width: 520px) and (max-width: 1080px)
        font-size: 1.6em
    @media (min-width: 0px) and (max-width: 520px)
        margin-top: 30px
        height: 60px
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
    width: 100%
    @media (min-width: 0px) and (max-width: 780px)
        flex-direction: column
.tech-con
    width: 29%
    display: flex
    flex-direction: column
    padding: 20px 40px
    @media (min-width: 0px) and (max-width: 780px)
        width: 95%
        margin-left: auto
        margin-right: auto
        padding: 0
    .tech-itm
        display: flex
        flex-direction: row
        font-size: 1.3em
        @media (min-width: 520px) and (max-width: 1080px)
            font-size: 1.2em
        @media (min-width: 0px) and (max-width: 520px)
            font-size: 1.1em
        font-size: 1.4em
        .itm-name
            color: $font-light
            min-width: 97px
        .itm-val
            color: $tertiary
.img-grid
    display: grid
    grid-template-columns: 33% 33% 33%
    grid-gap: 4px
    height: 50vh
    width: 70%
    @media (min-width: 0px) and (max-width: 780px)
        width: 100%
        margin-left: auto
        margin-right: auto
    padding: 0
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
            font-size: 1.3em
            padding-left: 5px
            @media (min-width: 0px) and (max-width: 780px)
                font-size: 1.2em
                content: 'gallery...'
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
