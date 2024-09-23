<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Home"
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