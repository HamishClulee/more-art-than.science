<template>
  <section class="bloglink-con">
      <router-link :to="linkto" tag="h4">{{ posttitle }}</router-link>
      <div class="date">{{ date }}</div>
      <p class="short-des">{{ brief }}</p>
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
    margin-bottom: 20px
    .date
        color: $font-light
    p
        margin: 5px 0 10px
    h4
        color: $secondary
        font-size: 2.2em
        cursor: pointer
        margin: 5px 0 10px
        &:hover 
            text-decoration: underline
</style>