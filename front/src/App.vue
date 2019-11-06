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
    width: 100%
    display: flex
    flex-direction: column
    align-items: flex-end
    justify-content: center
    margin-right: 20px
    position: fixed
    top: 10px
    right: 0
    cursor: pointer
    padding: 30px
    .line
        height: 1px
        width: 25px
        background-color: $tertiary
        margin-top: 6px
</style>
