<template>
    <div class="foot-con">
        <router-link tag="h5" :to="{ path: '/'}" class="foot-itm four">home</router-link>
        <router-link tag="h5" :to="{ path: '/work'}" class="foot-itm one">projects</router-link>
        <router-link tag="h5" :to="{ path: '/cv'}" class="foot-itm two">cv</router-link>
        <router-link tag="h5" :to="{ path: '/blog'}" class="foot-itm three">blog</router-link>
    </div>
</template>

<script>
    export default {
        name: 'navfoot',
        methods: {
            checkvis (name) {
                return this.$route.name !== name
            }
        }
    }
</script>
<style lang="sass" scoped>
.foot-con
    position: fixed
    width: 100%
    height: 15vh
    bottom: -17px
    display: flex
    flex-direction: row
    cursor: pointer
    transition: all 0.6s ease
    opacity: 0.95
    h5
        transition: all 0.6s
        color: whitesmoke
        font-size: 1.5em
        text-align: center
        text-transform: uppercase
        @media (min-width: 520px) and (max-width: 1080px)
            font-size: 1.2em
        @media (min-width: 0px) and (max-width: 520px)
            font-size: 1em
.foot-itm
    width: 32%
    display: flex
    padding: 15px
    align-items: center
    justify-content: center
    border: 1px solid whitesmoke
    &:hover
        opacity: 0.8
h1
    color: white
    font-size: 2em
.one
    background: $primary
.two
    background: $tertiary
.three
    background: $secondary
.four
    background: $highlight
.router-link-exact-active
    background-color: white
    transition: all 0.2s
    border: 1px solid transparent
    color: $tertiary !important
</style>
