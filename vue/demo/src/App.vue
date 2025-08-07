<script setup lang="ts">
import WatchEffect from "@/components/WatchEffect.vue";
import MyHooks from "@/components/MyHooks.vue";
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
    <WatchEffect/>
    <!--    hook 就是将函数集中在ts文件中，供需要的组件调用-->
    <MyHooks/>
  </div>
</template>

<style scoped>
.app {
  background-color: gray;
  box-shadow: 0 0 10px;
  border-radius: 10px;
  padding: 20px;
}

.person {
  width: 200px;
}

</style>
