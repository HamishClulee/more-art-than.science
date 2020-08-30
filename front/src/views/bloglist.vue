<template>
    <div class="list-con">
        <h1>Posts</h1>
        <h5>
            I am currently actively building this out as a blogging engine,
            please expect some posts to be a little non-sensical and expect things to move 
            and change while I iterate, check back soon!
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
        <mark class="divider">~</mark>
        <h4>No More Posts.</h4>
        <iframe
            src="https://giphy.com/embed/2fC4V2UeJveb6"
            width="480"
            height="263"
            frameBorder="0"
            class="giphy-embed"
            allowFullScreen
        ></iframe>
        <mark class="divider">~</mark>
        <navfoot></navfoot>
    </div>
</template>

<script>
import { posts } from './posts/posts.js'
import bloglink from '../components/bloglink'
import navfoot from '../components/navfoot'
export default {
    name: 'blog',
    components: {
        bloglink,
        navfoot,
    },
    data () {
        return {
            posts: posts,
        }
    },
    computed: {
        isDev() {
            return process.env.NODE_ENV === 'development'
        }
    }
}
</script>
<style lang="sass" scoped>
.list-con
    margin: 70px auto
    margin-top: 70px
    min-width: 300px
    width: 95%
    max-width: 800px
    display: flex
    align-items: center
    flex-direction: column
    min-height: 100vh
    h5
        font-style: italic
</style>