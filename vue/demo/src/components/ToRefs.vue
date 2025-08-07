<script setup lang="ts">
import {reactive, toRefs} from 'vue'

//ref 可以定义基本类型和对象类型的,但是一般定义一般数据类型
let person = reactive({
  name: '张三',
  age: 18
})

let {name, age} = toRefs(person)

function changeName() {
  name.value = '李四'
}

function changeAge() {
  age.value = 20
}

</script>

<template>
  <div class="person">
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
  </div>
</template>

<style scoped lang="css">
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

h2, button {
  margin: 0 5px;
}
</style>