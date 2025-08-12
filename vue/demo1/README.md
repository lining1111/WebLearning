# demo1
    组件通信

## 1. 父子组件通信 props
    父给子：通过父.vue中的<子>标签中的 :自定义props=“变量/函数”来实现，变量是完成父给子，而子给父，需要函数来实现
    props在子组件的实例上是 :key=""

## 2. 子父组件通信 $emit
    子给父：通过子.vue中的this.$emit('自定义事件名',参数)来实现，参数是子给父的，而父给子，需要在实现
    emit在子组件的实例上是 @Event-Name=“”  采用肉串写法，主要是为了避开vue内置的   

## 3. ---任意组件通信 mitt
    任意组件通信：通过mitt.js来实现，mitt.js是一个轻量级的通信库，可以用于任意组件之间的通信，使用方法如下：
    1. 安装mitt.js：npm install mitt
    2. 在通用工具ts文件，引入mitt.：import mitt from 'mitt'，创建一个mitt实例：const emitter = mitt()
    3. 在需要发送消息的组件中，使用emitter.emit('自定义事件名',参数)来发送消息

    4. 在需要接收消息的组件中，使用emitter.on('自定义事件名',回调函数)来接收消息，回调函数的参数就是发送的消息
        在组件销毁时，使用emitter.off('自定义事件名',回调函数)来取消订阅，防止内存泄漏

## 4. UI组件库常用 v-model,平时自己很少用
    是1 props和2 emit的组合，子组件很复杂，用子组件的父组件很简单。UI组件库底层很复杂。
    在接收组件的实例上，写v-model:XXX="" XXX是接收控件的props
    往回传 
    const emit = defineEmits(['update:ming'])
     @input="emit('update:ming',(<HTMLInputElement>$event.target).value)"

## 5. $attr
    父组件给子组件传递属性，子组件不接收，但是子组件的子组件可以接收，通过$attr来实现，是对1 props的补充
    祖通过:XXX 给子
    子通过 v-bind="$attrs" 全部给孙
    孙调用 defineProps

## 6. $refs $parent
    组件内部结合defineExpose，将组件内的数据交出去给外部使用
    通过组件实例上加入 ref="" 将实例引入到父
    <Child1 ref="c1"/>
    let c1 = ref()
    c1.value.toy = '小猪佩奇'
    子操作父
    <button @click="minusHouse($parent)">干掉父亲的一套房产</button>
    // 方法
	function minusHouse(parent:any){
    // console.log(parent)
		parent.house -= 1
	}
## 7. provider inject
    祖给孙 不打扰子 有些类似订阅发布
    provide('主题',内容)
    let xxx = inject('主题',内容）
## 8. ---任意组件通信 pinia

## 9. 插槽
    1. 默认插槽
    2. 具名插槽
    3. 作用域插槽
    