<script setup lang="ts">
// defineProps(['list'])
import type {Persons} from "@/types";
//props要区分除ref外，其他的不加:的接收的是字符串，加了:的接收的是表达式、变量(包括响应式变量)
defineProps<{ list: Persons }>()

</script>

<template>
  <div class="myprops">
    <h1>组件通信props</h1>
    <ul>
      <li v-for="item in list" :key="item.id">
        {{ item.name }}---{{ item.age }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.myprops {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

li {
  list-style: none;
  margin: 10px 0;
}
</style>