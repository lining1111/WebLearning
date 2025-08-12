<script setup lang="ts">
import {ref} from "vue";
import {useCountStore} from "@/store/Count";
import {storeToRefs} from "pinia";

let n = ref(1)
// let sum = ref(0)

const store = useCountStore()

// storeToRefs只会关注store中数据，不会对方法进行ref包裹
const {sum,binSum} = storeToRefs(store)
console.log('@@', sum)

function add() {
  sum.value += n.value

  console.log('@@@', sum)
}

function minus() {
  sum.value -= n.value
}

const val = ref(0)

</script>

<template>
  <div class="count">
    <h2>{{val}}</h2>
    <h2>当前求和为{{ sum }},放大10倍：{{ binSum}}</h2>
    <select v-model.number="n">>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">+</button>
    <button @click="minus">-</button>
  </div>
</template>

<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
}

select, button {
  margin: 0 5px;
  height: 25px;
}

</style>