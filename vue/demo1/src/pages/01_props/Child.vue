<template>
  <div class="child">
    <h3>子组件</h3>
    <h4>玩具：{{ toy }}</h4>
    <h4>父给的车：{{ car }}</h4>
    <h4>车的名字：{{ carname }}</h4>
    <button @click="sendToy(toy)">把玩具给父亲</button>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
// 数据
let toy = ref('奥特曼')
// 声明接收props
const props = defineProps(['car', 'sendToy'])
let carname = props.car + '车'
</script>

<style scoped>
.child {
  background-color: skyblue;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>
