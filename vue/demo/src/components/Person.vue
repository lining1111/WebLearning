<script setup lang="ts">
import {ref} from 'vue'

//ref 可以定义基本类型和对象类型的,但是一般定义一般数据类型
let name = ref('张三')
let age = ref(18)
let liu = ref({
  name: 'liu',
  age: 20
})

function increaseLiuAge() {
  liu.value.age++
}

function changeLiu() {
  //ref是可以整体改动
  liu.value = {
    name: 'liu1',
    age: 20
  }
}


function changeName() {
  name.value = '李四'
}

function changeAge() {
  age.value = 20
}

function showTel() {
  alert('联系方式：123456789')
}

</script>

<template>
  <div class="person">
    <h2> {{ liu.name }}:{{ liu.age }}</h2>
    <button @click="increaseLiuAge()">增加年龄</button>
    <button @click="changeLiu()">修改liu</button>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="changeAge">修改年龄</button>
    <button @click="showTel">察看联系方式</button>
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