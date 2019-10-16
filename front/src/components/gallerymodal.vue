<template>
    <div class="gallery-con">
        <div class="gallery-content">
            <div class="controls-con">
                <div class="close-x" @click="closemodal"></div>
            </div>
            <div class="carousel-con">
                <div class="caret-con" @click="goleft()">
                    <i class="arrow left"></i>
                </div>
                <img :src="source" :key="String(images[index])"/>
                <div class="caret-con" @click="goright()"><i class="arrow right"></i></div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'gallerymodal',
    props: {
        images: Array,
    },
    data() {
        return {
            index: 0,
        }
    },
    methods: {
        goleft() {
            this.index === 0 ? this.index = this.images.length -1 : this.index--
            this.ensurenoselect()
        },
        goright() {
            this.index === this.images.length -1 ? this.index = 0 : this.index++
            this.ensurenoselect()
        },
        closemodal() {
            this.$parent.$emit('close-modal')
        },
        gotogallery() {
            this.$parent.$emit('close-modal')
            this.$router.push({ path: '/gallery'})
        },
        ensurenoselect() {
            if (window.getSelection) window.getSelection().removeAllRanges()
            else if (document.selection) document.selection.empty()
        }
    },
    computed: {
        source() { return this.images[this.index] },
    }
}
</script>
<style lang="sass" scoped>
.gallery-con
    height: 100%
    width: 100%
    position: fixed
    z-index: 1
    top: 0
    left: 0
    background-color: rgb(0,0,0)
    background-color: rgba(0,0,0, 0.9)
    overflow-x: hidden
    transition: 0.5s
.gallery-content
    position: relative
    top: 0
    width: 100%
    text-align: center
    img
        height: auto
        max-height: 70vh
        max-width: 80vw
.carousel-con
    display: flex
    flex-direction: row
    width: 100%
    margin-left: auto
    margin-right: auto
    height: 80vh
    align-items: center
    justify-content: space-between
.controls-con
    position: relative
    bottom: -20px
    height: 100%
    display: flex
    justify-content: flex-end
    left: -2vw
    h6
        color: white
        cursor: pointer
i
  border: solid white
  border-width: 0 2px 2px 0
  display: inline-block
  padding: 5px
  cursor: pointer
.right
  transform: rotate(-45deg)
  -webkit-transform: rotate(-45deg)
.left
  transform: rotate(135deg)
  -webkit-transform: rotate(135deg)
.close-x
    color: white
    cursor: pointer
    border-radius: 50%
    background: #323232
    font-size: 26px
    display: inline-block
    height: 50px
    width: 50px
    line-height: 0px
    padding: 0
    &:before
        content: "x"
        position: relative
        top: 21px
.caret-con
    padding: 50px 5px
    cursor: pointer
</style>