<template>
    <div class="canvas-nav">

        <div class="big-x" @click="close">
            <div class="line"></div>
            <div class="line"></div>
        </div>

        <div class="canvas-text-con">
            <div
                class="canvas-item"
                @click="close">
                    <router-link tag="h2" :to="{ path: '/'}">home</router-link>
            </div>
            <div
                class="canvas-item"
                @click="close">
                    <router-link tag="h2" :to="{ path: '/work'}">projects</router-link>
            </div>
            <div
                class="canvas-item"
                @click="close">
                    <router-link tag="h2" :to="{ path: '/cv'}">cv</router-link>
            </div>
            <div
                class="canvas-item"
                @click="close">
                    <router-link tag="h2" :to="{ path: '/blog'}">blog</router-link>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name: 'canvasnav',
    methods: {
        close() {
            this.$parent.$emit('close-canvas')
        },
    }
}
</script>
<style lang="sass" scoped>
.canvas-nav
    z-index: 6
    position: fixed
    top: 0
    bottom: 0
    left: 0
    right: 0
    opacity: 0.95
    transition: all 1s ease
    background-color: white
    color: $tertiary
    height: 100vh
    width: 100%
    overflow: hidden !important
    display: flex
    justify-content: flex-start
    flex-direction: column
    align-items: flex-end
    @media (min-width: 0px) and (max-width: 520px)
        font-size: 0.8em
    .canvas-text-con
        width: 100%
        text-align: right
        margin: 100px 50px 0 0
        a
            font-size: 4em
            font-family: $heading-font
            text-transform: capitalize
.active-route
    display: flex
    flex-direction: column
    &:after
        content: ''
        width: 10px
        height: 2px
        background-color: $primary
        position: relative
        top: 2px
        right: 2px
.canvas
    &:after
        left: 320px
        top: -6px
        width: 80px
        @media (min-width: 0px) and (max-width: 520px)
            width: 50px
            left: 348px

.big-x
    cursor: pointer
    position: absolute
    top: 12px
    right: 6px
    padding: 20px
    &:hover
        opacity: 0.8
    .line
        background-color: $tertiary
        transform: rotate(-45deg)
        &:first-child
            transform: rotate(45deg)
            position: relative
            top: 2px
        height: 1px
        width: 31px

</style>