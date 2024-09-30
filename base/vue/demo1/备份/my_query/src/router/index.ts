//创建一个路由器，并暴露出去
import {createMemoryHistory, createRouter} from "vue-router";
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import About from "@/pages/About.vue";
import Detail from "@/pages/Detail.vue";

const router = createRouter({
    history:createMemoryHistory(),//路由的工作模式
    routes: [
        {
            path: '/home',
            component: Home
        },
        {
            path: '/news',
            component: News,
            children:[
                {
                    path:'detail',
                    component:Detail
                }
            ]
        },
        {
            path: '/about',
            component: About
        }
    ]
})

//暴露出去
export default router