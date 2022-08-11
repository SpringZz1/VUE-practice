<template>
  <div>
    
  </div>
</template>

<script>
import navHeader from '@/components/navHeader/index.vue'
import navMain from '@/components/navMain/index.vue'
import navFooter from '@/components/navFooter/index.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  components: {
    navHeader,
    navMain,
    navFooter
  },
  setup() {}
})
</script>

<style scoped lang="scss">
</style>