<template>
  <div>
    <nav-header></nav-header>
    <navMain></navMain>
    <navFooter></navFooter>
    {{list}}
  </div>
</template>

<script>
import navHeader from '@/components/navHeader/index.vue'
import navMain from '@/components/navMain/index.vue'
import navFooter from '@/components/navFooter/index.vue'
import { defineComponent, ref, reactive, toRefs, computed} from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Home',
  props: {},
  components: {
    navHeader,
    navMain,
    navFooter
  },
  setup(props, ctx) {
    let store = useStore()
    let list = computed(() => {
      return store.state.list
    })
    let data = reactive({
      name: 'jack',
      age: 20,
      obj: {
        price: 20
      },
      arr: [1,2,3]
    })
    return {
      // data
      ...toRefs(data),
      list
    }
  }
})
</script>

<style scoped lang="scss">
</style>