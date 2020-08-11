<template>
    <div class="list-con">
        <!-- v-if="isDev" -->
        <template v-if="isDev">
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
        </template>
        <template v-else>
            <h1>This area is currently under construction.</h1>
            <h2>
                I have a number of blog posts awaiting the completion of 
                the blogging section, check back soon.
            </h2>
            <iframe
                src="https://giphy.com/embed/2fC4V2UeJveb6"
                width="480"
                height="263"
                frameBorder="0"
                class="giphy-embed"
                allowFullScreen
            ></iframe>
        </template>
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