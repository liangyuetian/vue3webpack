<template>
  <div class="title">{{ title }}</div>
  <div class="msg">{{ msg }}22</div>
  <div>{{ count }}</div>
  <div>父组件与子组件共享变量 shareId：{{ state.shareId }}</div>

  <HelloWord :foo="foo" @change="helloWordChange"></HelloWord>
</template>

<script lang="ts" setup>
import {reactive, ref} from "@vue/reactivity";
import HelloWord from './view/hello_word/HelloWord.vue'
import {provide} from "@vue/runtime-core";

const title = 'title!'
const msg = 'Hello!'
let count = ref(0)
let foo = ref('0')

setInterval(() => {
  foo.value = String(+foo.value +1)
}, 100)

const state = reactive({
  shareId: 0
})

provide('state', state)

setInterval(() => {
  count.value++
}, 1000)

function helloWordChange(e: any) {
  console.log('helloWordChange:', e)
}
</script>

<style module>
.title {
  font-size: 32px;
  text-align: center;
}

.msg {
  font-size: 16px;
  color: gray;
}

.count {
  color: coral;
}
</style>