<template>
  <h1 class="title">{{ title }}</h1>
  <p>{{ msg }}</p>
  <input class="input" v-model="inputValue" type="text" :placeholder="placeholder" @input="hello">
  <div :class="$style.text">您输入了：{{ inputValue }}</div>
  <input class="input" v-model="inputValue2" type="text" :placeholder="placeholder" @input="hello">
  <div :class="$style.text">您输入了：{{ inputValue2 }}</div>
  <input class="input" v-model="formData.name" type="text" placeholder="请输入你的名字" @input="hello">
  <div :class="$style.text">你的名字是：{{ formData.name }}</div>
  <div :class="$style.text">你的年龄是：{{ age }}</div>
  <div>props: {{props.foo}}</div>
</template>

<script setup lang="ts">
import {computed, reactive, ref, toRefs} from "@vue/reactivity";
import {getCurrentInstance, inject, onBeforeMount, onMounted, watch, watchEffect} from "@vue/runtime-core";
import {nextTick} from "@vue/runtime-core"
import {propsToAttrMap} from "@vue/shared";
import {useCssModule} from "@vue/runtime-dom";

const title = 'Hello Word'
const msg = '这个是一个 hello word 页面'
const placeholder = '请输入'
const inputValue = ref<string>('')
const inputValue2 = ref<string>('')
const formData = reactive({name: '', xs: 2})

// props
// const props = defineProps({
//   foo: String
// })

interface Props {
  foo?: string
  labels?: string[]
}
// 默认值 props
const props = withDefaults(defineProps<Props>(), {
  foo: 'hello',
  labels: () => ['one', 'two']
})

// 计算属性
const age = computed(() => formData.xs + formData.name.length)

// watch
watch(inputValue, () => {
  console.log('watch inputValue')
})
watchEffect(() => {
  console.log('watchEffect inputValue:', inputValue2.value, inputValue.value)
})

// useCssModule()

const css = useCssModule()
console.log(css)
const instance = getCurrentInstance()
console.log(instance)

// 注入
const state = inject<{shareId:number}>('state')

setInterval(() => {
  state && state.shareId++
}, 100)

// emit
const emit = defineEmits(['change', 'delete'])
emit('change', 'init')
// 事件
function hello() {
  console.log(inputValue.value)
  console.log()
}

// 生命周期

onMounted(() => {
  console.log('mounted')
})

onBeforeMount(() => {
  console.log('onbeforemount')
})

nextTick(() => {
  console.log('nextTick')
})


console.log(propsToAttrMap)
</script>

<style module src="./HelloWord.css"></style>