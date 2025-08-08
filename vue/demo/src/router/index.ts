import {createRouter, createWebHistory} from "vue-router";
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import NewsDetail from "@/pages/NewsDetail.vue";

//创建一个路由器，并暴露出去
const router = createRouter({
    //路由器的工作模式
    history: createWebHistory(),
    routes: [
        {
            path: '/home',
            component: Home,
        },
        {
            path: '/news',
            component: News,
            children:[
                {
                    path: 'detail', //子路由的路径不加/
                    component: NewsDetail
                }
            ]
        },
        {
            path: '/about',
            component: () => import('@/pages/About.vue')
        }
    ]
})
export default router