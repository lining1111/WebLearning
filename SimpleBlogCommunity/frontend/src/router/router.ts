import {createRouter, createWebHashHistory} from 'vue-router'
import Login from "@/views/Login.vue";
import Register from "@/views/Register.vue";
import MainFrame from "@/views/MainFrame.vue";
import Publish from "@/views/Publish.vue";
import Myself from "@/views/Myself.vue";
import Others from "@/views/Others.vue";
import Detail from "@/views/Detail.vue";
import Update from "@/views/Update.vue";


const router = createRouter(
    {
        history: createWebHashHistory(),
        routes: [
            {
                path: "/login",
                component: Login
            },
            {
                path: "/register",
                component: Register
            },
            {
                path: "/",
                component: MainFrame
            },
            {
                path: "/publish",
                component: Publish
            },
            {
                path: "/myself",
                component: Myself
            },
            {
                path: "/others",
                component: Others
            },
            {
                path: "/detail",
                component: Detail
            },
            {
                path: "/update",
                component: Update
            },
        ]
    }
)

export default router