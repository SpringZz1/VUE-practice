<template>
  <button @click="start">
    进入todoList
  </button>
</template>

<script>
import {defineComponent} from 'vue'
import {useRouter} from 'vue-router'

export default defineComponent({
  name: 'Start',
  setup() {
    let router = useRouter()
    let start = () => {
      router.push({
        path: '/home'
      })
    }
    return {
      start
    }
  }
})
</script>

<style>
</style>