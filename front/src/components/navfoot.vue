<template>
    <div class="foot-con">
        <router-link tag="h5" :to="{ path: '/work'}" class="foot-itm one">work</router-link>
        <router-link tag="h5" :to="{ path: '/cv'}" class="foot-itm two">cv</router-link>
        <router-link tag="h5" :to="{ path: '/'}" class="foot-itm three">home</router-link>
    </div>
</template>

<script>
    export default {
        name: 'navfoot',
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
    transition: all 0.4s ease
    h5
        transition: all 1s
        color: whitesmoke
        font-size: 1.5em
        text-transform: uppercase
    &:hover
        background-color: white
        transition: all 1s
    &:hover
        h5
        border-bottom: 2px solid #ffd600
        transition: all 1s
        transition: all 1s
.foot-itm
    width: 32%
    display: flex
    padding: 15px
    align-items: center
    justify-content: center
    border: 1px solid whitesmoke
h1
    color: white
    font-size: 2em
.one
    background: $primary
.two
    background: $tertiary
.three
    background: $secondary
</style>
