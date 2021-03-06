import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/currency',
        name: 'Currency',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "Currency" */ '../views/Currency.vue'),
        meta: {
            transitionName: 'slide'
        },
    }
]

const router = new VueRouter({
    routes
})

export default router