<template>
    <div class="god-div">
        <div> 
            <div class="hamburger" v-if="!canvasopen" @click="togglecanvas">
                <div class="line"></div>
                <div class="line"></div>
                <div class="line"></div>
            </div>
            <canvasnav v-else></canvasnav>
        </div>
        <router-view></router-view>
    </div>
</template>

<script>
import canvasnav from './components/canvasnav'
export default {
    name: 'app',
    components: { canvasnav },
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
.hamburger
    display: flex
    flex-direction: column
    align-items: flex-end
    justify-content: center
    position: fixed
    top: 0px
    right: 0px
    padding: 40px
    cursor: pointer
    @media (min-width: 0px) and (max-width: 620px)
        padding: 20px
    .line
        height: 1px
        width: 25px
        background-color: $tertiary
        margin-top: 6px
</style>
