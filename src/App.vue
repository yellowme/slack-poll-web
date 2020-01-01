<template>
  <div id="app">
    <Poll />
  </div>
</template>

<script>
import Poll from './components/Poll.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'app',
  components: {
    Poll
  }
}
</script>

<style>
* {
  background-color: #1B1D21;
  color: #D1D2D3;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #D1D2D3;
  margin-top: 60px;
}
</style>
