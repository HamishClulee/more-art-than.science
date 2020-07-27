import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('../views/home')
const work = () => import('../views/work')
const cv = () => import('../views/cv')
const blog = () => import('../views/bloglist')
const posts = () => import('../views/posts')
const notfound = () => import('../views/notfound')
const ronin = () => import('../views/projects/ronin')
const postwrapper = () => import('../views/posts/postwrapper')

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
            path: '/blog/:urlname',
            name: 'post',
            component: postwrapper,
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
