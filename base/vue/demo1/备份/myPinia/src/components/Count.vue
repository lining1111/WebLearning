<script lang="ts" setup>
import {ref} from "vue";
import {useCountStore} from '@/store/Count'
import {storeToRefs} from "pinia";

const countStore = useCountStore()

const {sum} = storeToRefs(countStore)
let n = ref(1) // 用户选择的数字

/*   let obj = reactive({
    a:1,
    b:2,
    c:ref(3)
  })
  let x = ref(9)
  console.log(obj.a)
  console.log(obj.b)
  console.log(obj.c) */

// 方法
function add() {
  sum.value += n.value

  console.log('@@@', sum)
  console.log('@@@!!!', countStore.bigSum())
}

function minus() {
  sum.value -= n.value
}
</script>

<template>
  <div class="count">
    <h2>当前求和为：{{ sum }}</h2>
    <h2>放大10倍：{{ countStore.bigSum() }}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="add">加</button>
    <button @click="minus">减</button>
  </div>
</template>

<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}

select, button {
  margin: 0 5px;
  height: 25px;
}
</style>