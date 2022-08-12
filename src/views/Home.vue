<template>
  <div>
    <nav-header @add="add"></nav-header>
    <navMain :list="list" @del="del"></navMain>
    <navFooter :list="list" @clear="clear"></navFooter>
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
    sessionStorage.setItem('list',JSON.stringify(list.value))
    let value = ref('')
    // 添加任务
    let add = (val) => {
      value.value = val
      // 先判断是否有重复的任务，有则不能重复添加
      let flag = true
      list.value.map(item => {
        if(item.title === value.value) {
          // 有重复的任务
          flag = false
          alert('有重复任务')
        }
      })
      if(flag){
        store.commit('addTodo', {
        title: value.value,
        complete: false
      })
      }
    }

    // 删除事件
    let index = 0
    let del = (val) =>{
      index = val.value
      store.commit('deleteTodo', index)
    }

    // 清除已完成
    let clear = (val) => {
      store.commit('clear',val)
    }
    // let newList = JSON.stringify(list)
    // sessionStorage.setItem('list',newList)
    return {
      add,
      value,
      list,
      del,
      clear
    }
  }
})
</script>

<style scoped lang="scss">
</style>