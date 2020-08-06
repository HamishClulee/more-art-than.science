<template>
    <div class="list-con">
        <h1>Posts</h1>
        <h5>
            I am currently actively building this out as a blogging engine,
            please expect some posts to be non-sensical, check back soon!
        </h5>
        <mark class="divider">~</mark>
        <bloglink
            v-for="(post, index) in posts"
            :key="index"
            :posttitle="post.title"
            :date="post.date"
            :brief="post.brief"
            :linkto="post.linkto"
        ></bloglink>
        <h4>No More Posts.</h4>
        <!-- <iframe
            src="https://giphy.com/embed/2fC4V2UeJveb6"
            width="480"
            height="263"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
        ></iframe> -->
    </div>
</template>

<script>
import { posts } from './posts/posts.js'
import bloglink from '../components/bloglink'
export default {
    name: 'blog',
    components: {
        bloglink,
    },
    data () {
        return {
            posts: posts,
        }
    },
    mounted() {
        // this.addGoogleFonts()
    },
    methods: {
        // addGoogleFonts() {
        //     const head = document.head
        //     const link = document.createElement("link")
        //     link.type = "text/css"
        //     link.rel = "stylesheet"
        //     link.href = "https://fonts.googleapis.com/css2?family=Crimson+Text:ital@0;1&display=swap"
        //     head.appendChild(link)
        // }
    }
}
</script>
<style lang="sass" scoped>
.list-con
    margin: 70px auto
    margin-top: 70px
    width: 95%
    max-width: 800px
    display: flex
    align-items: center
    flex-direction: column
    width: 98%
    min-height: 100vh
    h5
        font-style: italic
</style>