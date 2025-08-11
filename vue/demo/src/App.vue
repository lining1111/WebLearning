<script setup lang="ts">
import {reactive} from "vue";
import type {Persons} from "@/types";
import Count from "@/components/piniaExample/Count.vue";
import LoveTalk from "@/components/piniaExample/LoveTalk.vue";

let personList = reactive<Persons>([
  {id: '1', name: '张三', age: 18},
  {id: '2', name: '李四', age: 19},
  {id: '3', name: '王五', age: 20},
  {id: '4', name: '赵六', age: 21},
  {id: '5', name: '钱七', age: 22},
  {id: '6', name: '孙八', age: 23},
  {id: '7', name: '周九', age: 24},
  {id: '8', name: '吴十', age: 25}
])

</script>

<template>
  <div class="app">
    <!--    试试鲜-->
    <!--    <Person class="person"/>-->
    <!--    <Car/>-->

    <!--    toRefs  将响应式的数据中的某个数据拿出来-->
    <!--    <ToRefs/>-->

    <!--    computed 当一个数据是由其他的几种数据组合或者变换而来的时候-->
    <!--    <Computed/>-->

    <!--    watch 监视数据的状态 xxx变化了，应该怎么办-->
    <!--    <Watch/>-->
    <!--    watchEffect 追踪所有数据的变化,用watchEffect会比watch省心很多-->
    <!--    <WatchEffect/>-->
    <!--    hook 就是将函数集中在ts文件中，供需要的组件调用-->
    <!--    <MyHooks/>-->
    <!--    组件通信-->
    <!--    props-->
    <!--    <MyProps :list="personList"/>-->

    <!--    路由-->
    <!--    <div class="nav">-->
    <!--      <router-link to="/home" active-class="active">首页</router-link>-->
    <!--      <router-link to="/news" active-class="active">新闻</router-link>-->
    <!--      <router-link :to="{path:'/about'}" active-class="active">关于</router-link>-->
    <!--    </div>-->
    <!--    <div class="content">-->
    <!--      <router-view></router-view>-->
    <!--    </div>-->

    <!--    pinia-->
    <Count/>
    <br>
    <LoveTalk/>

  </div>
</template>

<style scoped>
.nav {
  display: flex;
  justify-content: space-around;
  margin: 0 100px;
}

.nav a {
  display: block;
  text-align: center;
  width: 90px;
  height: 40px;
  line-height: 40px;
  border-radius: 10px;
  background-color: gray;
  text-decoration: none;
  color: white;
  font-size: 18px;
  letter-spacing: 5px;
}

.nav a.active {
  background-color: #64967E;
  color: #ffc268;
  font-weight: 900;
  text-shadow: 0 0 1px black;
  font-family: 微软雅黑;
}

.content {
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 10px;
  width: 90%;
  height: 400px;
  border: 1px solid;
}

</style>
