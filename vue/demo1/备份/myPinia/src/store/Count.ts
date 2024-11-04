import {defineStore} from "pinia";
import {ref} from "vue";

// export const useCountStore = defineStore('count', {
//     //正在存储数据的地方
//     state() {
//         return {sum: 6}
//     },
//     getters: {
//         bigSum():number {
//             return this.sum * 10
//         }
//     }
// })

export const useCountStore = defineStore('count', () => {
    let sum = ref(6)

    function bigSum():number {
        return sum.value * 10
    }

    return {sum, bigSum}
})
