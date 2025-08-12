<script setup lang="ts">
import {useLoveTalkStore} from "@/store/LoveTalk";
import {storeToRefs} from "pinia";

const store = useLoveTalkStore()
console.log('@@1', store)
const {talkList} = storeToRefs(store)

store.$subscribe((mutation, state) => {
  console.log('loveTalkStore 里面保存的数据发生了变化', mutation, state)
  localStorage.setItem('talkList', JSON.stringify(state.talkList))
})
</script>

<template>
  <div class="talks">
    <button @click="store.getLoveTalk">获取一个土味情话</button>
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