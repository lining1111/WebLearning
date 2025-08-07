<script setup lang="ts">
import {reactive} from "vue";

//reactive函数只能可以创建响应式对象
let car = reactive({
  name: '奔驰',
  price: 100
})


function changeCarPrice() {
  car.price = 10
}

function changeCar() {
  //用Object.assign修改响应式对象
  Object.assign(car, {name: '宝马', price: 200})
}

let games = reactive([
  {id: "1", name: '英雄联盟'},
  {id: "2", name: '绝地求生'},
  {id: "3", name: '王者荣耀'},
  {id: "4", name: '和平精英'}
])


</script>

<template>
  <div class="car">
    <h2>汽车信息：一辆{{ car.name }}车，价值{{ car.price }}万</h2>
    <button @click="changeCarPrice">修改车的价格</button>
    <button @click="changeCar">修改车</button>
    <br>
    <hr>
    <h2>游戏列表</h2>
    <ul>
      <li v-for="g in games" :key="g.id">
        {{ g.name }}
      </li>
    </ul>

  </div>
</template>

<style scoped>
.car {
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