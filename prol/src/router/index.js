import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

export default new Router({
    mode: 'history',
    scrollBehavior() {
        return window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../components/pages/Home.vue'),
        },
        {
            path: '/calendar',
            name: 'calendar',
            component: () => import('../components/pages/Calendar.vue'),
        },
    ]
})