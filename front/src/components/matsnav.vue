<template>
    <div class="navbar-con">
        <div class="navbar-left">
            <animateword class="svg-actual"></animateword>
        </div>
        <div class="navbar-right">
            <div class="text-item" :class="checkvis('home') ? 'active-route' : ''">
                <router-link :to="{ path: '/'}">home</router-link>
            </div>
            <div class="text-item" :class="checkvis('cv') ? 'active-route' : ''">
                <router-link :to="{ path: '/cv'}">CV</router-link>
            </div>
            <div class="text-item" :class="checkvis('work') ? 'active-route' : ''">
                <router-link :to="{ path: '/work'}">projects</router-link>
            </div>
            <div class="text-item" :class="checkvis('blog') ? 'active-route' : ''">
                <router-link :to="{ path: '/blog'}">blog</router-link>
            </div>
        </div>
        <div class="hamburger" @click="togglecanvas">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <div v-if="canvasopen" class="canvas-nav">
            <div class="canvas-text-con">
                <div class="big-x" @click="togglecanvas">
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
                <div
                    class="canvas-item"
                    @click="togglecanvas"
                    :class="checkvis('home') ? 'active-route canvas' : ''">
                        <router-link :to="{ path: '/'}">home</router-link>
                </div>
                <div
                    class="canvas-item"
                    @click="togglecanvas"
                    :class="checkvis('cv') ? 'active-route canvas' : ''">
                        <router-link :to="{ path: '/cv'}">CV</router-link>
                </div>
                <div
                    class="canvas-item"
                    @click="togglecanvas"
                    :class="checkvis('work') ? 'active-route canvas' : ''">
                        <router-link :to="{ path: '/work'}">Projects</router-link>
                </div>
                <div
                    class="canvas-item"
                    @click="togglecanvas"
                    :class="checkvis('blog') ? 'active-route canvas' : ''">
                        <router-link :to="{ path: '/blog'}">blog</router-link>
                </div>
            </div>
            
        </div>
    </div>
</template>
<script>
import animateword from './animateword'
export default {
    name: 'navbar',
    components: {
        animateword,
    },
    data() {
        return {
            canvasopen: false,
        }
    },
    methods: {
        togglecanvas() {
            this.canvasopen = !this.canvasopen
        },
        routehome() {
            this.$router.push({ path: '/'})
        },
        checkvis(item) {
            return item === this.$route.name
        }
    }
}
</script>
<style lang="sass" scoped>
.svg-actual
    height: 50px
.canvas-nav
    z-index: 6
    position: absolute
    top: 0
    bottom: 0
    left: 0
    right: 0
    transition: all 1s ease
    background-color: white
    color: $font
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
        width: 400px
        text-align: right
        margin: 30px 20px 0 0
        a
            font-size: 2em
.active-route
    display: flex
    flex-direction: column
    &:after
        content: ''
        width: 10px
        height: 2px
        background-color: $tertiary
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
.cta
    background-color: $highlight
    color: $font
.cta-canvas
    background-color: $highlight
    color: $font
    width: 250px
    margin-top: 15px
.navbar-con, .navbar-left, .navbar-right
    display: flex
    flex-direction: row
    a
        color: $font
        font-size: 1.2em
        text-transform: uppercase
.navbar-con
    position: fixed
    width: 100%
    top: 0
    z-index: 2
    height: 60px
    opacity: 0.9
    background-color: white
    border-bottom: 1px solid lighten($font, 60)
.navbar-right
    align-items: center
    justify-content: flex-end
    width: 100%
    margin-right: 20px
    @media (min-width: 0px) and (max-width: 980px)
        display: none
.hamburger
    display: none
    width: 100%
    align-items: flex-end
    justify-content: center
    margin-right: 20px
    @media (min-width: 0px) and (max-width: 980px)
        display: flex
        flex-direction: column
    .line
        height: 2px
        width: 25px
        background-color: $font
        margin-top: 4px
.big-x
    cursor: pointer
    padding: 10px
    margin-left: 360px
    margin-bottom: 20px
    &:hover
        opacity: 0.8
    .line
        background-color: $font
        transform: rotate(-45deg)
        &:first-child
            transform: rotate(45deg)
            position: relative
            top: 2px
        height: 2px
        width: 35px
.navbar-left
    display: flex
    align-items: center
    justify-content: center
    margin-left: 10px
    cursor: pointer
    &:hover
        opacity: 0.8
    .logo
        height: 40px

.text-item
    padding: 0 20px
</style>