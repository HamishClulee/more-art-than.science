import './style/index.sass'
import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'

// Vue.use(vueimage)
Vue.use(store)
Vue.use(router)
Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')
