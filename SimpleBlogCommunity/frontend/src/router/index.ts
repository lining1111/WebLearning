import {createRouter, createWebHashHistory} from 'vue-router'

const router = createRouter(
    {
        history: createWebHashHistory(),
        routes: [
            {
                path: "/login",
                component: () => import("@/views/Login.vue")
            },
            {
                path: "/register",
                component: () => import("@/views/Register.vue")
            },
            {
                path: "/",
                component: () => import("@/views/MainFrame.vue")
            },
            {
                path: "/publish",
                component: () => import("@/views/Publish.vue")
            },
            {
                path: "/myself",
                component: () => import("@/views/Myself.vue")
            },
            {
                path: "/others",
                component: () => import("@/views/Others.vue")
            },
            {
                path: "/detail",
                component: () => import("@/views/Detail.vue")
            },
            {
                path: "/update",
                component: () => import("../views/Update.vue")
            },
        ]
    }
)

export default router