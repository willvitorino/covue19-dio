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
@import url('https://fonts.googleapis.com/css2?family=Potta+One&display=swap');

html, body {
  font-family: 'Potta One', cursive;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: white;
  background-image: url('./assets/images/covid.jpg');
}
</style>
