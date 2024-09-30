import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CurrencyExchangeView from "@/views/CurrencyExchangeView.vue";
import NewsView from "@/views/NewsView.vue";
import NewsDetailView from "@/views/NewsDetailView.vue";
import Login from "@/components/Login.vue";
import Register from "@/components/Register.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: HomeView
        },
        {
            path: '/exchange',
            name: 'CurrencyExchange',
            component: CurrencyExchangeView
        },
        {
            path: '/news',
            name: 'News',
            component: NewsView,
            // 子组件在父组件有实例
            // children:[
            //   { path: ':id',
            //     name: 'NewsDetail',
            //     component: NewsDetailView,
            //     props(to) {
            //         return to.params
            //     },
            //   },
            // ]
        },
        {
            path: '/news/:id',
            name: 'NewsDetail',
            component: NewsDetailView
        },

        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            component: Register
        },
    ]
})

export default router
