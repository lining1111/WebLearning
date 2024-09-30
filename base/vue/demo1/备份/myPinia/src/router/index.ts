//创建一个路由器，并暴露出去
import {createRouter, createWebHistory} from "vue-router";
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import About from "@/pages/About.vue";
import Detail from "@/pages/Detail.vue";

const router = createRouter({
    history: createWebHistory(),//路由的工作模式
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            name: 'xinwen',
            path: '/news',
            component: News,
            children: [
                {
                    name: 'xiang',
                    path: 'detail/:id/:title/:content',
                    component: Detail,
                    props(to) {
                        return to.params
                    },
                }
            ]
        },
        {
            path: '/about',
            component: About
        },
        {
            path: '/',
            redirect(to) {
                return {path: '/home'}
            },
        }
    ]
})

//暴露出去
export default router