import Vue from 'vue'
import Router from 'vue-router'

const home = () => import('../views/home.vue')
const work = () => ('../views/work.vue')
const cv = () => import('../views/cv.vue')
const blog = () => ('../views/blog.vue')
const notfound = () => import('../views/notfound')
const ronin = () => import('../views/projects/ronin.vue')
const netograph = () => import('../views/projects/netograph.vue')
const babyaid = () => import('../views/projects/babyaid.vue')
const dbb = () => import('../views/projects/dbb.vue')

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
            path: '/work/netograph',
            name: 'netograph',
            component: netograph,
        },
        {
            path: '/work/babyaid',
            name: 'babyaid',
            component: babyaid,
        },
        {
            path: '/work/dashboardbuilder',
            name: 'dbb',
            component: dbb,
        },
        {
            path: '/blog',
            name: 'blog',
            component: blog,
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
