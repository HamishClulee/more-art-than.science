<template>
    <div class="list-con">
        <h1>Posts</h1>
        <!-- <h5>I am currently actively building this out as a blogging engine, please expect some posts to be non-sensical, check back soon!</h5>
        <bloglink
            v-for="post in posts"
            :key="post.title"
            :posttitle="post.title"
            :date="post.date"
            :brief="post.brief"
            :linkto="post.linkto"
        ></bloglink> -->
        <h4>Wow such empty.</h4>
        <iframe
            src="https://giphy.com/embed/2fC4V2UeJveb6"
            width="480"
            height="263"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
        ></iframe>
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
    }
}
</script>
<style lang="sass" scoped>
.list-con
    margin-top: 70px
    width: 95%
    max-width: 800px
    display: flex
    align-items: center
    flex-direction: column
    width: 98%
    min-height: 100vh
    margin-left: auto
    margin-right: auto
    h1
        text-align: left
        width: 100%
        margin-bottom: 20px
</style>