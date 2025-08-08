<script setup lang="ts">
import {reactive} from "vue";

const newsList = reactive(
    [{id: '1', titile: '新闻001', content: '新闻001的内容'},
      {id: '2', titile: '新闻002', content: '新闻002的内容'},
      {id: '3', titile: '新闻003', content: '新闻003的内容'},
      {id: '4', titile: '新闻004', content: '新闻004的内容'}]
)
</script>

<template>
  <div class="news">
    <ul>
      <li v-for="news in newsList" :key="news.id">
<!--        路由组件间的传参：query-->
        <router-link :to="{
          path:'/news/detail',
          query:{id:news.id,
          title:news.titile,
          content:news.content}
        }">{{ news.titile }}
        </router-link>
      </li>
    </ul>
    <div class="news-content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style scoped>
.news {
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  height: 100%;
}

.news ul {
  margin-top: 30px;
  list-style: none;
  padding-left: 10px;
}

.news li > a {
  font-size: 18px;
  line-height: 40px;
  text-decoration: none;
  color: silver;
  text-shadow: 0 0 1px black;
}

.news-content {
  width: 70%;
  height: 90%;
  border: 1px solid;
  margin-top: 20px;
  border-radius: 10px;
}
</style>