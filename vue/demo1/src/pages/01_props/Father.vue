<template>
  <div class="father">
    <h3>父组件</h3>
		<h4>汽车：{{ car }}</h4>
		<h4 v-show="toy">子给的玩具：{{ toy }}</h4>
		<Child :car="car" :sendToy="getToy"/>
  </div>
</template>

<script setup lang="ts" >
	import Child from './Child.vue'
	import {ref} from 'vue'
	// 数据
	let car = ref('奔驰')
	let toy = ref('')
	// 方法，通过传递回调函数的方式，将子的变量传递到父
	function getToy(value:string){
    console.log("儿子发玩具过来了",value)
		toy.value = value
	}
</script>

<style scoped>
	.father{
		background-color:rgb(165, 164, 164);
		padding: 20px;
		border-radius: 10px;
	}
</style>