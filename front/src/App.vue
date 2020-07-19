<template>
    <div class="god-div">
        <matsnav></matsnav>
        <router-view></router-view>
    </div>
</template>

<script>
import matsnav from './components/matsnav'
export default {
    name: 'app',
    components: { matsnav },
    data() {
        return {
            canvasopen: false,
        }
    },
    mounted() {
        this.$on('close-canvas', () => {
            this.canvasopen = false
        })
    },
    methods: {
        togglecanvas () {
            this.canvasopen = !this.canvasopen
        }
    }
}
</script>
<style lang="sass" scoped>
.god-div
    overflow-x: hidden !important
    background-repeat: no-repeat
    background-attachment: fixed
    background-position: right
    background-size: contain
.pulse
    animation: pulse 2s infinite
.hamburger
    display: flex
    flex-direction: column
    align-items: flex-end
    justify-content: center
    position: fixed
    top: 0px
    right: 0px
    padding: 40px
    border-radius: 50%
    cursor: pointer
    @media (min-width: 0px) and (max-width: 620px)
        padding: 20px
    .line
        height: 1px
        width: 25px
        background-color: $tertiary
        margin-top: 6px
</style>
<style>
@-webkit-keyframes pulse {
    0% {
        -webkit-box-shadow: 0 0 0 0 rgba(255, 102, 0, 0.4);
    }
    70% {
        -webkit-box-shadow: 0 0 0 30px rgba(255, 102, 0, 0);
    }
    100% {
        -webkit-box-shadow: 0 0 0 6px rgba(255, 102, 0, 0);
    }
}
@keyframes pulse {
    0% {
        -moz-box-shadow: 0 0 0 0 rgba(255, 102, 0, 0.6);
        box-shadow: 0 0 0 0 rgba(255, 102, 0, 0.6);
    }
    70% {
        -moz-box-shadow: 0 0 0 30px rgba(255, 102, 0, 0);
        box-shadow: 0 0 0 30px rgba(255, 102, 0, 0);
    }
    100% {
        -moz-box-shadow: 0 0 0 6px rgba(255, 102, 0, 0);
        box-shadow: 0 0 0 6px rgba(255, 102, 0, 0);
    }
}
</style>
