import { defineStore } from "pinia"; // 引入pinia

const UserStore = defineStore("admin", {
    state: () => {
        return {
            token: "",
        };
    },
    actions: {},
    getters: {},
});

export  default UserStore