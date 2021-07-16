<template>
  <v-btn elevation="2" @click="state.count++">Counter {{ state.count }}</v-btn>
</template>

<script>
import { reactive } from 'vue'
export default {
  setup(props) {
    const state = reactive({ count: 0 })
    return {
      state
    }
  }
}
</script>
