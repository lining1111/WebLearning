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
        //query传参
        // {
        //     path: '/news',
        //     component: News,
        //     children:[
        //         {
        //             path: 'detail', //子路由的路径不加/
        //             component: NewsDetail
        //         }
        //     ]
        // },
        //param传参 简单但是需要占位
        // {
        //     path: '/news',
        //     component: News,
        //     children: [
        //         {
        //             path: 'detail/:id/:title/:content',
        //             component: NewsDetail
        //         }
        //     ]
        // },
        //prop传参1 处理params参数
        // {
        //     path: '/news',
        //     component: News,
        //     children: [
        //         {
        //             path: 'detail/:id/:title/:content',
        //             component: NewsDetail,
        //             props: true
        //         }
        //     ]
        // },
        //prop传参2,可以自己决定处理的是query还是params
        {
            path: '/news',
            component: News,
            children: [
                {
                    path: 'detail',
                    component: NewsDetail,
                    props(to) {
                        return to.query
                    },
                }
            ]
        },
        {
            path: '/about',
            component: () => import('@/pages/About.vue')
        },
        {
            path:'/',
            redirect: '/home'
        }
    ]
})
export default router