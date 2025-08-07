<script setup lang="ts">
import {reactive, ref, watch} from 'vue'

// 监视，情况一：监视【ref】定义的【基本类型】数据
let sum = ref(0)

function changeSum() {
  sum.value += 1
}

const stopWatch = watch(sum, (newValue, oldValue) => {
  console.log('sum变化了', newValue, oldValue)
  //解除监视
  if (newValue >= 10) {
    stopWatch()
  }
})

// 监视，情况二：监视【ref】定义的【对象】数据
let person = ref({
  name: '张三',
  age: 18,
})

function changeName() {
  person.value.name = '李四'
}

function changeAge() {
  person.value.age++
}

//监视对象内部数据的变化，需要传配置选项 {deep: true}
watch(person, (newValue, oldValue) => {
  console.log('person变化了', newValue, oldValue)
}, {deep: true})

// 监视，情况三：监视【reactive】定义的【对象】数据
let person1 = reactive({
  name: '张三',
  age: 18,
})

function changeName1() {
  person1.name = '李四'
}

function changeAge1() {
  person1.age++
}

//监视reactive对象内部数据的变化，默认是开启深度监视的
watch(person1, (value) => {
  console.log('person1变化了', value)
})

// 监视，情况四：监视【reactive】定义的【对象】数据中的某个属性
let person2 = reactive({
  name:'张三',
  age:18,
  car:{
    c1:'奔驰',
    c2:'宝马'
  }
})
function changeName2(){
  person2.name += '~'
}
function changeAge2(){
  person2.age += 1
}
function changeC1(){
  person2.car.c1 = '奥迪'
}
function changeC2(){
  person2.car.c2 = '大众'
}
function changeCar(){
  person2.car = {c1:'雅迪',c2:'爱玛'}
}

// 监视，情况四：监视响应式对象中的某个属性，且该属性是基本类型的，要写成函数式
/* watch(()=> person.name,(newValue,oldValue)=>{
  console.log('person.name变化了',newValue,oldValue)
}) */

// 监视，情况四：监视响应式对象中的某个属性，且该属性是对象类型的，可以直接写，也能写函数，更推荐写函数
watch(()=>person2.car,(newValue,oldValue)=>{
  console.log('person2.car变化了',newValue,oldValue)
}, {deep: true})

// 监视，情况五：监视上述的多个数据
watch([()=>person2.name,person2.car],(newValue,oldValue)=>{
  console.log('监视多个属性,person2.car变化了',newValue,oldValue)
},{deep:true})

</script>

<template>
  <div class="person">
    <h1>情况一：监视【ref】定义的【基本类型】数据</h1>
    <h2>当前求和为：{{ sum }}</h2>
    <button @click="changeSum">点我sum+1</button>

    <h1>情况二：监视【ref】定义的【对象】数据</h1>
    <h2>姓名:{{ person.name }}</h2>
    <h2>年龄:{{ person.age }}</h2>
    <button @click="changeName">修改名字</button>
    <button @click="changeAge">修改年龄</button>

    <h1>情况三：监视【reactive】定义的【对象】数据</h1>
    <h2>姓名:{{ person1.name }}</h2>
    <h2>年龄:{{ person1.age }}</h2>
    <button @click="changeName1">修改名字</button>
    <button @click="changeAge1">修改年龄</button>

    <h1>情况四：监视对象的某个属性</h1>
    <h2>姓名：{{ person2.name }}</h2>
    <h2>年龄：{{ person2.age }}</h2>
    <h2>汽车：{{ person2.car.c1 }}、{{ person2.car.c2 }}</h2>
    <button @click="changeName2">修改名字</button>
    <button @click="changeAge2">修改年龄</button>
    <button @click="changeC1">修改第一台车</button>
    <button @click="changeC2">修改第二台车</button>
    <button @click="changeCar">修改整个车</button>

  </div>
</template>

<style scoped>
.person {
  background-color: skyblue;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

button {
  margin: 0 5px;
}
</style>