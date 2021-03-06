import Vue from 'vue'
import Vuex from "vuex";
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/bootstrap.css'
import './assets/js/bootstrap.js'
import './assets/js/myjs.js'
import axios from 'axios'

import './assets/js/popper.min.js'
import './assets/js/jquery-3.2.1.slim.min.js'

Vue.config.productionTip = false
Vue.use(Vuex)

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')