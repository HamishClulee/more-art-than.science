<template>
    <div class="list-con">
        <h1>Posts</h1>
        <!-- <bloglink
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
import { posts } from '../blog/posts.js'
// import bloglink from '../components/bloglink'
export default {
    name: 'blog',
    components: {
        // bloglink,
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
    margin-top: 100px
    width: 100%
    display: flex
    align-items: center
    justify-content: center
    flex-direction: column
    width: 98%
    margin-left: auto
    margin-right: auto
</style>