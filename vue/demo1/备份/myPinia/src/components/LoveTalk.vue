<script lang="ts" setup>
import axios from "axios";
import {nanoid} from 'nanoid'
import {useLoveTalkStore} from "@/store/LoveTalk";
import {storeToRefs} from "pinia";

const loveTalk = useLoveTalkStore()
const {talkList} = storeToRefs(loveTalk)

loveTalk.$subscribe((mutation, state)=>{
  console.log('@@',state)
  localStorage.setItem('talkList',JSON.stringify(state.talkList))
})

// 方法
function getLoveTalk() {
  loveTalk.getLoveTalk()
}
</script>

<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>

<style scoped>
.talk {
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>