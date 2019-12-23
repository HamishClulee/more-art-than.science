<template>
    <figure class="image-con">
        <img
            :src="placeholder"
            :id="`vue-image-${hash}`"
            :data-src="intsrc"
            :alt="alttag"
            width="100%"
        />
    </figure>
</template>

<script>
// TODO:
// - Implement IntersectionObserver and check if supported, if not use scroll listener implementation - test both
//
// - implement optional caption via prop
//
// - Implement src and data-src
//
// - allow user to set background color of svg tiles using a prop
//
// - possible choice between svg background and a slot
//
// - implement error behavior, if src incorrect or server unresponsive, display ddfault 404, or slot 404
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
        placeholder: {
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
            intsrc: '',
            windowwidth: 0,

            hash: null,
        }
    },
    created() {
        // avoid mutating prop directly
        this.intsrc = this.imgsrc

        // generate UID for the image component
        this.hash = Math.floor((Math.random() * 99999999) + 1)

        // set up window width
        this.windowwidth = window.innerWidth

        if (this.srcmap) {
            this.setsrcforwidth()
        }
    },
    mounted() {

        const imageObserver = new IntersectionObserver(entries => {
            if(entries[0].isIntersecting) {
                const lazyImage = entries[0].target
                lazyImage.src = lazyImage.dataset.src
            }
        });

        imageObserver.observe(document.getElementById(`vue-image-${this.hash}`));
    },
    methods: {
        setsrcforwidth() {
            if (this.windowwidth < this.breaksizes['small']) {
                this.intsrc = this.srcmap['small']
            } else if (this.windowwidth >= this.breaksizes['small'] && this.windowwidth < this.breaksizes['medium']) {
                this.intsrc = this.srcmap['medium']
            } else {
                this.intsrc = this.srcmap['large']
            }
        },
    }
}
</script>
<style lang="sass" scoped>
.base
    opacity: 1
    transition: opacity 0.5s ease, visibility 0.5s ease
    object-fit: cover
    width: 100%
img
    width: 100%
    object-fit: cover
    max-height: 400px
figure
    margin: 0
    padding: 0
</style>
