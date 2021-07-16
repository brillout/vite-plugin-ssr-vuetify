<template>
  <h1>Welcome</h1>
  <p>This page is rendered to HTML and interactive.</p>
  <br />
  <p>
    <Counter />
  </p>
</template>

<script>
import Counter from './Counter.vue'
const components = { Counter }
export default { components, data: () => ({}) }
</script>
