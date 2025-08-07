<script setup lang="ts">
import {computed, ref} from "vue";

let xing = ref('张')
let ming = ref('三')

// //这样的计算属性是不可修改的
// let xingming = computed(() => xing.value + ming.value)

//这样的计算属性是可读可写的
let xingming = computed({
  //读的时候调用
  get() {
    return xing.value +'-'+ ming.value
  },
  //写的时候调用
  set(val: string) {
    var arr = val.split('-')
    xing.value = arr[0]
    ming.value = arr[1]
  }
})
console.log(xingming)

function changeName() {
  xingming.value = '李-四'
}


</script>

<template>
  <div class="person">
    <!--    :value是单向绑定，由页面流向数据.v-model是双向绑定-->
    姓：<input type="text" v-model="xing"><br>
    名：<input type="text" v-model="ming"><br>
    <span>全名：{{ xingming }}</span>
    <button @click="changeName()">修改全名</button>
  </div>
</template>

<style scoped>
.person {
  background-color: wheat;
  border-radius: 20px;
  box-shadow: 0 0 10px;
  padding: 20px;
}

button {
  margin: 0 5px;
}

</style>
