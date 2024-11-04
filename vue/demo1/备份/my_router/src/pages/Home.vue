<script lang="ts" setup>
import {onMounted, onUnmounted} from "vue";
import {useRouter} from "vue-router";

const router = useRouter()



onMounted(()=>{
  setTimeout(()=>{
    console.log('@@@','跳转到news')
    router.push('/news')
  },3000)
})

onUnmounted(()=>{
  console.log('home unmount')
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