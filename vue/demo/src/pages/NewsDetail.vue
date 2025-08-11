<script setup lang="ts">
import {useRoute} from "vue-router";
import {toRefs} from "vue";

//query传参
// let {query} = toRefs(useRoute())
// params传参
// let {params} = toRefs(useRoute())
//props传参
defineProps(['id', 'title', 'content'])

</script>

<template>
  <ul class="news-list">
<!--    query传参-->
    <!--    <li>编号：{{ query.id }}</li>-->
    <!--    <li>标题：{{ query.title }}</li>-->
    <!--    <li>内容：{{ query.content }}</li>-->
<!--    params传参-->
<!--    <li>编号：{{ params.id }}</li>-->
<!--    <li>标题：{{ params.title }}</li>-->
<!--    <li>内容：{{ params.content }}</li>-->
    <!--    props传参-->
        <li>编号：{{ id }}</li>
        <li>标题：{{ title }}</li>
        <li>内容：{{ content }}</li>
  </ul>
</template>

<style scoped>
.news-list {
  list-style: none;
  padding-left: 20px;
}

.news-list > li {
  line-height: 30px;
}
</style>