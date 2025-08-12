import {defineStore} from "pinia";

//      pinia 与vue相比
//用来存储数据：state  data        其实getters中的函数也可以用函数名当作变量
//用来修改数据：actions  methods   只能通过store.函数名来调用
//用来计算属性：getters  computed
//用来监视数据：subscribe  watch/watchEffect (可以结合localStorage做刷新不丢失)
//用来获取数据：storeToRefs  toRefs
export const useCountStore = defineStore('count', {
    state() {
        return {
            sum: 0
        }
    },
    getters: {
        binSum(state): number {
            return state.sum * 10
        },
    },
})