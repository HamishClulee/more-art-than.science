import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home.vue'
import work from '../views/work.vue'
import cv from '../views/cv.vue'
import blog from '../views/blog.vue'
import notfound from '../views/notfound'
import ronin from '../views/projects/ronin.vue'
import netograph from '../views/projects/netograph.vue'
import babyaid from '../views/projects/babyaid.vue'
import dbb from '../views/projects/dbb.vue'
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
