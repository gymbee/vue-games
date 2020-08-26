import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
    mode: 'history', 
    scrollBehavior() {
        return { x: 0, y: 0 };
    },
    routes: [ 
        {
            path: '/',
            component: Home,
            meta: { title: 'All Games' }
        },
        {
            path: '/favorites',
            component: () => import('./views/Favorites.vue'),
            meta: { title: 'Favorites' }
        }
    ]
})
