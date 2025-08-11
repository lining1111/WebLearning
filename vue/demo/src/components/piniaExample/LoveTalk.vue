<script setup lang="ts">
import axios from "axios";
import {useLoveTalkStore} from "@/store/LoveTalk";

// let talkList = reactive([
//   {id: '1', title: '今天你有点怪，哪里怪？怪好看的！'},
//   {id: '2', title: '草莓、蓝莓、蔓越莓，今天想我了没？'},
//   {id: '3', title: '心里给你留了一块地，我的死心塌地'}
// ])
const store = useLoveTalkStore()
console.log('@@1', store)
let {talkList} = store


async function getLoveTalk() {
  // 发请求，下面这行的写法是：连续解构赋值+重命名
  let {data: {content: title}} = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
  // 把请求回来的字符串，包装成一个对象
  let len = talkList.length
  let talk = {id: (len + 1).toString(), title}
  // 把对象放到数组中
  talkList.push(talk)
}


</script>

<template>
  <div class="talks">
    <button @click="getLoveTalk">获取一个土味情话</button>
    <ul v-for="talk in talkList" :key="talk.id">
      <li>{{ talk.title }}</li>
    </ul>
  </div>
</template>

<style scoped>
.talks {
  background-color: gray;
  padding: 10px;
  border-radius: 10px;
}

button {
  margin: 10px 0;
  height: 30px;
}
</style>