import {defineStore} from "pinia";
import axios from "axios";
import {reactive} from "vue";

//选项式的
// export const useLoveTalkStore = defineStore('loveTalk', {
//     state: () => ({
//         talkList: JSON.parse(localStorage.getItem('talkList') as string) || [
//             {id: '1', title: '今天你有点怪，哪里怪？怪好看的！'},
//             {id: '2', title: '草莓、蓝莓、蔓越莓，今天想我了没？'},
//             {id: '3', title: '心里给你留了一块地，我的死心塌地'}
//         ]
//     }),
//     actions: {
//         async getLoveTalk() {
//
//             // 发请求，下面这行的写法是：连续解构赋值+重命名
//             let {data: {content: title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
//             // 把请求回来的字符串，包装成一个对象
//             let len = this.talkList.length
//             let talk = {id: (len + 1).toString(), title}
//             // 把对象放到数组中
//             this.talkList.push(talk)
//         },
//     },
// })

export const useLoveTalkStore = defineStore('loveTalk', () => {
    let talkList = reactive(JSON.parse(localStorage.getItem('talkList') as string) || [
        {id: '1', title: '今天你有点怪，哪里怪？怪好看的！'},
        {id: '2', title: '草莓、蓝莓、蔓越莓，今天想我了没？'},
        {id: '3', title: '心里给你留了一块地，我的死心塌地'}
    ])

    async function getLoveTalk() {

        // 发请求，下面这行的写法是：连续解构赋值+重命名
        let {data: {content: title}} = (await axios.get('https://api.uomg.com/api/rand.qinghua?format=json'))
        // 把请求回来的字符串，包装成一个对象
        // let title = '今天你有点怪，哪里怪？怪好看的！'
        let len = talkList.length
        let talk = {id: (len + 1).toString(), title}
        console.log('talk', talk)
        // 把对象放到数组中
        talkList.push(talk)
    }

    return {talkList, getLoveTalk}
})