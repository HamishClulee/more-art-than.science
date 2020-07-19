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
    margin: 5px
h4
    color: $secondary
    cursor: pointer
    &:hover 
        text-decoration: underline
</style>