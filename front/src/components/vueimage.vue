<template>
    <div class="image-con">
        <div :id="`img-${hash}`" class="base" :class="status === 'loaded' ? 'show' : 'hide'" >
            
        </div>
        <img
            v-if="this.status !== 'loaded'"
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICB4bWxuczpjYz0iaHR0cDovL2NyZWF0aXZlY29tbW9ucy5vcmcvbnMjIgogICB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiCiAgIHhtbG5zOnN2Zz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciCiAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgaWQ9InN2ZzgiCiAgIHZlcnNpb249IjEuMSIKICAgdmlld0JveD0iMCAwIDM0Ljk2Mjc5OSAzNS42NjIwNTIiCiAgIGhlaWdodD0iMzUuNjYyMDUybW0iCiAgIHdpZHRoPSIzNC45NjI3OTltbSI+CiAgPGRlZnMKICAgICBpZD0iZGVmczIiIC8+CiAgPG1ldGFkYXRhCiAgICAgaWQ9Im1ldGFkYXRhNSI+CiAgICA8cmRmOlJERj4KICAgICAgPGNjOldvcmsKICAgICAgICAgcmRmOmFib3V0PSIiPgogICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2Uvc3ZnK3htbDwvZGM6Zm9ybWF0PgogICAgICAgIDxkYzp0eXBlCiAgICAgICAgICAgcmRmOnJlc291cmNlPSJodHRwOi8vcHVybC5vcmcvZGMvZGNtaXR5cGUvU3RpbGxJbWFnZSIgLz4KICAgICAgICA8ZGM6dGl0bGU+PC9kYzp0aXRsZT4KICAgICAgPC9jYzpXb3JrPgogICAgPC9yZGY6UkRGPgogIDwvbWV0YWRhdGE+CiAgPGcKICAgICB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtODAuODg2OTA5LC0xMTIuNTQ3NjIpIgogICAgIGlkPSJsYXllcjEiPgogICAgPHJlY3QKICAgICAgIHk9IjExMi41NDc2MiIKICAgICAgIHg9IjgwLjg4NjkwOSIKICAgICAgIGhlaWdodD0iMzUuNjYyMDUyIgogICAgICAgd2lkdGg9IjM0Ljk2Mjc5OSIKICAgICAgIGlkPSJyZWN0ODE1IgogICAgICAgc3R5bGU9Im9wYWNpdHk6MC43NjU5OTk5NTtmaWxsOiNkNmU3ZmY7ZmlsbC1vcGFjaXR5OjE7c3Ryb2tlOm5vbmU7c3Ryb2tlLXdpZHRoOjAuNjE1MTI0OTQ7c3Ryb2tlLW1pdGVybGltaXQ6NDtzdHJva2UtZGFzaGFycmF5Om5vbmU7c3Ryb2tlLWRhc2hvZmZzZXQ6MDtzdHJva2Utb3BhY2l0eToxIiAvPgogIDwvZz4KPC9zdmc+Cg=="
            :id="`svg-${hash}`"
            :alt="alttag"
            class="base"
            width="100%"
            :height="svgheight"
        />
            <!-- <rect width="100%" :height="svgheight" :style="{ fill: perc2color(Math.floor(hash / 10000000)), stroke:'none'}" /> -->
    
    </div>
</template>

<script>
// TODO:
// - add js implementation of srcset using windowwidth
// - allow user to set background color of svg tiles using a prop
//
// - possible choice between svg background and a slot
//
// - implement error behavior, if src incorrect or server unresponsive, display ddfault 404, or slot 404
//
// - SEO behavior considerations - alt tags, make sure alt tags are rendered before crawl
// 
// - The h x w ratio for the svg to be settable via a prop with solid defaults
//
export default {
    name: 'vueimage',
    props: {
        imgsrc: {
            type: String,
            required: true,
        },
        srcmap: {
            type: Object,
            required: false,
            default: null,
        },
        breaksizes: {
            type: Object,
            required: false,
            default: () => {
                return  {
                    'small': 780,
                    'medium': 1480,
                    'large': 1980,
                }
            }
        },
        alttag: {
            type: String,
            required: true,
        },
    },
    data () {
        return {
            windowwidth: 0,
            image: null,
            status: 'loading',
            loaderror: false,
            hash: null,
            el: null,
            hidesvg: false,
            attr: '',
            eltop: null,
            windowtop: null,
            scrollticking: false,
            scrollloc: 0,
            ratio: null,
            svgel: null,
            svgheight: 0,
            scrolltrigger: 2000,
        }
    },
    created() {
        if (this.srcmap) {
            this.setsrcforwidth()
        }
        this.hash = Math.floor((Math.random() * 99999999) + 1)
        this.scrollloc = window.scrollY
    },
    mounted() {
        this.svgel = document.getElementById(`svg-${this.hash}`)

        this.svgheight = Math.floor((this.svgel.getBoundingClientRect().right - this.svgel.getBoundingClientRect().left) * 0.66)

        this.windowtop = Math.abs(document.body.getBoundingClientRect().top)

        window.addEventListener('scroll', this.scrolling)
    
        this.windowpos = Math.abs(document.body.getBoundingClientRect().top)

        this.attr = this.$el.firstElementChild.attributes[0].nodeName
        this.el = document.getElementById(`img-${this.hash}`)

        this.$nextTick(() => { 
            this.eltop = this.$el.getBoundingClientRect().top 
            if (this.imgsrc && this.el && this.shouldinit) this.createLoader()
            else if (!this.imgsrc || !this.el) this.handleError()
        })
    },
    methods: {
        setsrcforwidth() {
            if (this.windowwidth < this.breaksizes['small']) this.src = this.srcmap['small']
            else if (this.windowwidth >= this.breaksizes['small'] && this.windowwidth < this.breaksizes['medium']) this.src = this.srcmap['medium']
            else this.src = this.srcmap['large']
        },
        scrolling () {
            this.scrollloc = window.scrollY
            if (!this.scrollticking) {
                window.requestAnimationFrame(() => {
                    if (this.status !== 'loaded' && (this.scrolltrigger + this.scrollloc > this.eltop)) {
                        this.createLoader()
                    }
                    this.scrollticking = false
                })
                this.scrollticking = true
            }
        },
        perc2color(perc) {
            let h = Math.round(510 - 5.10 * perc) * 0x10000 + 62965
            return '#' + ('000000' + h.toString(16)).slice(-6)
        },
        handleError() {
            this.loaderror = true
            this.status = 'error'
        },
        createLoader() {
            this.image = new Image()
            this.image.onload = this.handleLoad
            this.image.onerror = this.handleError
            this.image.src = this.imgsrc
            this.image.setAttribute(this.attr, '')
            this.image.setAttribute('alt', this.alttag)
            this.el.appendChild(this.image)
            this.status = 'loaded'
        },
    },
    computed: {
        shouldinit() {
            return this.eltop < this.scrolltrigger
        },
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.scrolling)
    },
}
</script>
<style lang="sass" scoped>
.base
    opacity: 1
    transition: opacity 0.5s ease, visibility 0.5s ease
    object-fit: fill
    width: 100%
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
    width: 100%
    object-fit: fill
</style>
