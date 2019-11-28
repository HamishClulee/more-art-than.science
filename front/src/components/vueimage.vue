<template>
    <div class="image-con">

        <div :id="`img-${hash}`" class="base" :class="status === 'loaded' ? 'show' : 'hide'" ></div>
        <!-- <slot >

        </slot> -->
        <svg class="base" width="100%" height="400" :class="status !== 'loaded' ? 'show' : 'hide'">
            <rect width="100%" height="400" :style="{ fill: perc2color(Math.floor(hash / 100000)), stroke:'none'}" />
        </svg>
        <!-- <svg width="100%" >
            <rect width="100%" :style="{ fill: '#f3f8ff', stroke:'none'}" />
        </svg> -->
    </div>
</template>

<script>
// TODO for background : 
// Color map svgs while loading
// a scroll location check (if this.$el.YPos - window.pageheight < 2000 load image)
// define array of various image sizes for request at different screen widths
// possible choice between loading spinner and svg background
const Status = {
    LOADING: 'loading',
    LOADED: 'loaded',
    error: 'error',
}
export default {
    name: 'vueimage',
    props: {
        imgsrc: String,
    },
    data () {
        return {
            image: null,
            status: Status.LOADING,
            loaderror: false,
            hash: null,
            el: null,
            hidesvg: false,
            attr: '',
        }
    },
    created() {
        this.hash = Math.floor((Math.random() * 1000000) + 1)
    },
    mounted() {
        this.attr = this.$el.firstElementChild.attributes[0].nodeName
        this.el = document.getElementById(`img-${this.hash}`)

        if (this.imgsrc && this.el) {
            this.createLoader()
        } else {
            this.handleError()
        }
    },
    methods: {
        perc2color(perc) {
            var r = Math.round(510 - 5.10 * perc)
            var g = 245
            var b = 245
            var h = r * 0x10000 + g * 0x100 + b * 0x1;
            return '#' + ('000000' + h.toString(16)).slice(-6);
        },
        handleError() {
            this.loaderror = true
        },
        createLoader() {

            this.destroyLoader()
            this.status = Status.LOADING

            this.image = new Image()
            this.image.onload = this.handleLoad
            this.image.onerror = this.handleError
            this.image.src = this.imgsrc

            this.recursecomplete()
            
        },
        recursecomplete() {
            this.image.setAttribute(this.attr, '')
            this.el.appendChild(this.image)
        },
        destroyLoader() {
            this.loaderror = false
            if (this.image) {
                this.image.onload = null
                this.image.onerror = null
                this.image = null
            }
        },
        handleLoad() {
            this.destroyLoader()
            this.status = Status.LOADED
        }
    },
}
</script>
<style lang="sass" scoped>
.base
    opacity: 1
    transition: opacity 0.5s ease, visibility 0.5s ease
.show
    visibility: visible
    opacity: 1
    transition: opacity 0.5s ease, visibility 0.5s ease
.hide
    visibility: hidden
    opacity: 0
    height: 0
    transition: opacity 0.5s ease, visibility 0.5s ease
img
    height: auto
    width: 100%
</style>
