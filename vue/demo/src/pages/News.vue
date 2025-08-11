<script setup lang="ts">
import {reactive} from "vue";
import {useRouter} from "vue-router";

const newsList = reactive(
    [{id: '1', title: '新闻001', content: '新闻001的内容'},
      {id: '2', title: '新闻002', content: '新闻002的内容'},
      {id: '3', title: '新闻003', content: '新闻003的内容'},
      {id: '4', title: '新闻004', content: '新闻004的内容'}]
)


//编程式导航
const router = useRouter()
function showNewsDetail(news: any) {
  router.push(
      {
        path: '/news/detail',
        query: {
          id: news.id,
          title: news.title,
          content: news.content
        }
      })
}


</script>

<template>
  <div class="news">
    <ul>
      <!--      :to和to的区别就是内容可以是js表达式-->
      <li v-for="news in newsList" :key="news.id">
        <button @click="showNewsDetail(news)">查看新闻</button>
        <!--        路由组件间的传参：query-->
        <!--        <router-link :to="{-->
        <!--          path:'/news/detail',-->
        <!--          query:{id:news.id,-->
        <!--          title:news.title,-->
        <!--          content:news.content}-->
        <!--        }"{{ news.title }}-->
        <!--        </router-link>-->
        <!--        路由组件间的传参：param和 props传参1 param参数处理-->
        <!--        <router-link :to="`/news/detail/${news.id}/${news.title}/${news.content}`"> "{{ news.title }}-->
        <!--        </router-link>-->
        <!--        路由props传参2 处理query参数-->
        <router-link :to="{
          path:'/news/detail',
          query:{id:news.id,
          title:news.title,
          content:news.content}
        }"> "{{ news.title }}
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