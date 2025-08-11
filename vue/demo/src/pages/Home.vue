<script setup lang="ts">
import {onMounted} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()
onMounted(() => {
  setTimeout(() => {
    //跳转,编程式路由
    router.push('/news')

  }, 3000)
})
</script>

<template>
  <div class="home">
    <img src="http://www.atguigu.com/images/index_new/logo.png" alt="">
  </div>
</template>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>