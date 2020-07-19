import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('../views/home.vue')
const work = () => import('../views/work.vue')
const cv = () => import('../views/cv.vue')
const blog = () => import('../views/bloglist.vue')
const posts = () => import('../views/posts.vue')
const notfound = () => import('../views/notfound')
const ronin = () => import('../views/projects/ronin.vue')

Vue.use(Router)

export default new Router({
    mode: 'history',
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/work',
            name: 'work',
            component: work,
        },
        {
            path: '/work/ronin',
            name: 'ronin',
            component: ronin,
        },
        {
            path: '/blog',
            name: 'blog',
            component: blog,
        },
        {
            path: '/posts/:title',
            name: 'posts',
            component: posts,
        },
        {
            path: '/cv',
            name: 'cv',
            component: cv
        },
        {
            path: '*',
            name: 'notfound',
            component: notfound
        }
    ]
})
