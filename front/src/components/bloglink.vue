<template>
  <section class="bloglink-con">
      <router-link :to="linkto" tag="h4">{{ posttitle }}</router-link>
      <div class="date">{{ date }}</div>
      <p class="short-des">{{ brief }}</p>
      <p class="fin-con">~</p>
  </section>
</template>

<script>
export default {
    name: 'bloglink',
    props: {
        linkto: {
            type: Object,
            required: true
        },
        posttitle: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        brief: {
            type: String,
            required: true
        },
    },
}
</script>

<style scoped lang="sass">
.bloglink-con
    width: 100%
    padding: 5px
    .date
        color: $font-light
    p
        margin: 5px 0 10px
    h4
        color: $secondary
        cursor: pointer
        margin: 5px 0 10px
        &:hover 
            text-decoration: underline
.fin-con
    font-size: 2em
    width: 100%
    height: 30px
    display: flex
    align-items: center
    justify-content: center
    color: lighten($tertiary, 20)
    margin-top: 10px
    transform: scaleX(1.4) rotate(5deg)
    @media (min-width: 520px) and (max-width: 1080px)
        font-size: 1.6em
    @media (min-width: 0px) and (max-width: 520px)
        margin-top: 30px
        height: 60px
</style>