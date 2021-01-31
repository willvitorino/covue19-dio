<template>
  <Main />
</template>

<script>
import { defineAsyncComponent } from 'vue'
const Main = defineAsyncComponent(() => import('@/pages/Main'))

export default {
  name: 'app',
  components: { Main }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
  background-image: url('./assets/images/covid.jpg');
}
</style>
