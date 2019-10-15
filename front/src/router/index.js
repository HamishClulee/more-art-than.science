import Vue from 'vue'
import Router from 'vue-router'
import home from '../views/home.vue'
import work from '../views/work.vue'
import cv from '../views/cv.vue'
import notfound from '../views/notfound'
Vue.use(Router)
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: home
        },
        {
            path: '/work',
            name: 'work',
            component: work
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
