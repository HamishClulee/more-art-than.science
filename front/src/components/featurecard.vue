<template>
    <a :href="aref">
        <article class="card-container" @click="pushtohref()">

            <section class="image-container" :style="{ backgroundImage: `url(${image})`}">
                <!-- image contained -->
            </section>
            <section class="content-container">
                <h3>{{ title }}</h3>
                <h5>{{ sub }}</h5>
                <p>{{ shorttext }}</p>
            </section>
        </article>
    </a>

</template>

<script>
export default {
    name: 'featurecard',
    props: {
        image: String,
        title: String,
        sub: String,
        text: Array,
        aref: String,
        noclick: Boolean,
    },
    computed: {
        shorttext() {
            return `${this.text[0]}${this.text[1]}`
        }
    },
}
</script>

<style scoped lang="sass">
.card-container
    margin: 10px
    background: #fff
    color: #616161
    transition: box-shadow 135ms 0ms cubic-bezier(0.4, 0, 0.2, 1)
    box-shadow: 0 1px 1px 0 rgba(66, 66, 66, 0.08), 0 1px 3px 1px rgba(66, 66, 66, 0.16)
    transition: width 235ms 0ms cubic-bezier(0.4, 0, 0.2, 1)
    border-radius: 3px
    z-index: 1
    width: 95%
    max-width: 400px
.image-container
    border-bottom: 1px solid $font-very-light
    background-repeat: no-repeat
    background-position: inherit
    background-size: cover
    height: 250px
.content-container
    padding: 10px
    min-height: 375px
    p
        font-size: 1em
.button-container
    border-top: 1px solid $font-very-light
    .card-button
        border: none
.middle
    border-left: 1px solid $font-very-light
    border-right: 1px solid $font-very-light
</style>